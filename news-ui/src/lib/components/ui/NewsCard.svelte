<script lang="ts">
	import type { News } from '$lib/models/News';

	type Props = News;
	const { slug, title, publishedOn, imageUrl, newsUrl }: Props = $props();
</script>

<a
	href={newsUrl}
	class="relative m-0 flex break-inside-avoid flex-col overflow-hidden rounded-2xl border border-s-violet-400 border-e-green-400 bg-primary"
>
	<div class="h-64"></div>
	<div class="z-10 mt-auto bg-black/60 p-4 text-xl backdrop-blur-xs">
		<span>{title}</span>
	</div>
	<img src={imageUrl} alt={title} class="absolute z-0 size-full object-cover" />
</a>
