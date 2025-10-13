<script lang="ts">
	import { cn } from '$lib/utils/tw-merge';
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	type Props = HTMLButtonAttributes & {
		children: Snippet;
		class?: string;
	};

	const { children, class: className, ...attributes }: Props = $props();
</script>

<button
	class={cn(
		'cursor-pointer rounded-full bg-primary p-1 text-foreground hover:border-transparent disabled:cursor-not-allowed disabled:bg-neutral-500 disabled:text-neutral-300',
		className
	)}
	{...attributes}>{@render children()}</button
>
