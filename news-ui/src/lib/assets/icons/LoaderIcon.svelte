<script lang="ts">
	type Props = {
		class?: string;
	};
	let { class: className }: Props = $props();
</script>

<svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" class={className}>
	<circle
		cx="400"
		cy="400"
		fill="none"
		r="300"
		stroke-width="100"
		stroke="currentcolor"
		stroke-dasharray="1500 3000"
		stroke-linecap="round"
	/>
</svg>
