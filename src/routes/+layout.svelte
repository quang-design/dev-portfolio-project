<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import { Header, Footer } from '$components';
</script>

<main class="mx-auto max-w-screen-xl px-[5%]">
	<Header />
	{@render children()}
	<Footer />
</main>
