<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$components';

	function onclick() {
		goto('/#contact-form');
	}
</script>

<section class="hero-section pt-10">
	<h3 class="text-xl font-bold md:text-3xl">
		Hello! I'm <span class="text-primary">John Doe</span>
	</h3>
	<div class="my-4 h-1 w-24 bg-black"></div>
	<h1 class="text-4xl font-bold md:text-6xl">
		I'm a Svelte Developer crafting intuitive and performant
		<span class="text-gray-500">web experiences.</span>
	</h1>
	<Button {onclick}>Let's talk</Button>
</section>
