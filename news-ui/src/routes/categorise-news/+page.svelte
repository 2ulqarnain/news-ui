<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
</script>

<main class="flex flex-col gap-5 p-5">
	<Button class=" w-fit px-3">Save</Button>
	<div class="relative w-fit overflow-y-auto rounded-lg border border-primary whitespace-nowrap">
		<table class="border-collapse text-left">
			<thead>
				<tr class="bg-primary text-zinc-300">
					<th><span class="inline-block p-1 px-2">Title</span></th>
					<th><span class="inline-block p-1 px-2">Date</span></th>
					<th><span class="inline-block p-1 px-2">Category</span></th>
				</tr>
			</thead>
			<tbody>
				{#each data.news as news}
					<tr>
						<td><span class="px-2">{news.title}</span></td>
						<td><span class="px-2">{news.publishedOn}</span></td>
						<td><input placeholder="Enter Category" class="px-1" /></td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</main>
