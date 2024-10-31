<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$components';

	function goToContactForm() {
		goto('#contact-form');
	}
</script>

<nav class="navbar flex items-center justify-between py-4">
	<a href="/" class="logo text-2xl font-bold">AQ</a>
	<div class="navbar-links flex items-center gap-4">
		<a href="#about-me" class="navbar-link hover:underline">About me</a>
		<a href="#my-work" class="navbar-link hover:underline">Projects</a>
		<Button className="nav-bar" onclick={goToContactForm}>Contact me</Button>
	</div>
</nav>
