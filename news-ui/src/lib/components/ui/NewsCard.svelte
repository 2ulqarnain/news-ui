<script lang="ts">
	import type { News } from '$lib/models/News';

	type Props = News;
	const { slug, title, publishedOn, imageUrl, newsUrl }: Props = $props();
</script>

<a
	href={newsUrl}
	class="news-card group relative flex items-center gap-2 overflow-hidden rounded-xl bg-white hover:z-10 hover:scale-105 hover:bg-primary hover:text-white hover:transition-transform"
>
	<img src={imageUrl} alt={title} class="z-0 size-24 min-w-24 bg-primary object-cover" />
	<p class="headline z-10 line-clamp-2 text-xl">
		{title}
	</p>
	<span class="absolute right-5 bottom-0 text-zinc-400 group-hover:text-white/50"
		>{publishedOn}</span
	>
</a>
