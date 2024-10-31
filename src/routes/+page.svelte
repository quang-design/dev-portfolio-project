<script lang="ts">
	import { HeroSection, AboutMeSection, MyWorkSection, ContactSection } from '$components';
	import SkillsSection from '$components/Sections/SkillsSection.svelte';

	const { data } = $props();
	let { workExperience, projects, skills } = $derived(data);
</script>

<HeroSection />
<AboutMeSection {workExperience} />
<MyWorkSection {projects} />
<SkillsSection {skills} />
<ContactSection />
