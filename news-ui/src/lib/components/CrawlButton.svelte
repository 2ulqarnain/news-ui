<script lang="ts">
	import { crawl } from '$lib/api/news';
	import CheckCircleIcon from '$lib/assets/icons/CheckCircleIcon.svelte';
	import CrawlIcon from '$lib/assets/icons/CrawlIcon.svelte';
	import LoaderIcon from '$lib/assets/icons/LoaderIcon.svelte';
	import toast from 'svelte-french-toast';
	import Button from './ui/Button.svelte';
	import { toastError, toastSuccess } from '$lib/utils/toast';

	let status = $state<'idle' | 'doing' | 'done'>('idle');
	let crawlButtonText = $derived.by(() => {
		switch (status) {
			case 'idle':
				return 'Crawl';
			case 'doing':
				return 'Crawling...';
			case 'done':
				return 'Recently Crawled';
		}
	});

	const handleClick = async () => {
		status = 'doing';
		const { ok, message } = await crawl();
		console.log({ ok });
		if (ok) {
			status = 'done';
			toastSuccess(message);
		} else {
			status = 'idle';
			toastError(message);
		}
	};
</script>

<Button
	class="mt-7 flex items-center pr-2"
	onclick={handleClick}
	disabled={status === 'doing' || status === 'done'}
>
	{#if status === 'doing'}
		<LoaderIcon class="size-6 animate-spin" />
	{:else if status === 'done'}
		<CheckCircleIcon />
	{:else}
		<CrawlIcon />
	{/if}
	<span class="w-full text-center">{crawlButtonText}</span>
</Button>
