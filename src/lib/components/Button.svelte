<script lang="ts">
	import type { Snippet } from 'svelte';

	interface ButtonProps {
		children: Snippet;
		onclick: ((e: MouseEvent) => void) | (() => void);
		className?: string;
	}
	let { children, className, ...props }: ButtonProps = $props();
</script>

<button
	class={`my-5 rounded-lg bg-black px-8 py-3 font-sans text-xl font-bold text-white ${className}`}
	{...props}
>
	{@render children()}
</button>

<style>
	.nav-bar {
		@apply px-4 py-2 text-sm;
	}
</style>
