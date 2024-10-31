<script lang="ts">
	import type { Snippet } from 'svelte';

	interface SectionHeadlineProps {
		children: Snippet;
		sectionName: string;
	}

	let { children, sectionName }: SectionHeadlineProps = $props();
</script>

<div class="my-10" id={sectionName}>
	<h2 class="text-4xl font-bold">{@render children()}</h2>
	<div class="my-4 h-1 w-24 bg-black"></div>
</div>
