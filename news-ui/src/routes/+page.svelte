<script lang="ts">
	import CrawlButton from '$lib/components/CrawlButton.svelte';
	import NewsCard from '$lib/components/ui/NewsCard.svelte';
	import type { PageServerData } from './$types';

	type Props = {
		data: PageServerData;
	};

	const { data }: Props = $props();
</script>

<main class="grid size-full grid-rows-[300px_1fr] text-foreground">
	<div class="flex flex-col items-center justify-center">
		<h1 class="font-serif text-5xl font-medium text-zinc-700">
			<span class="text-primary">News</span> Server
		</h1>
		<p class="text-sm text-foreground-light">Get latest news from all over Pakistan</p>
		<CrawlButton />
	</div>
	<!-- <div class="columns-2 gap-5 p-5 md:columns-3 lg:columns-4 [&>a]:mt-5">
		{#each data.news as news}
			<NewsCard {...news} />
		{/each}
	</div> -->
	<div class="grid grid-cols-3 gap-1 p-2 text-zinc-800">
		{#each data.news as news}
			<NewsCard {...news} />
		{/each}
	</div>
</main>
