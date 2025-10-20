<script lang="ts">
	import type { News } from '$lib/models/News';

	type Props = News;
	const { slug, title, publishedOn, imageUrl, newsUrl }: Props = $props();
</script>

<a
	href={newsUrl}
	class="relative m-0 flex break-inside-avoid flex-col overflow-hidden rounded-2xl font-serif text-zinc-600"
>
	<img src={imageUrl} alt={title} class="z-0 size-full object-cover" />
	<p
		class="headline z-10 mt-auto bg-white p-4 text-xl first-letter:text-3xl first-letter:text-primary"
	>
		{title}
	</p>
</a>
