<script lang="ts">
	import SectionHeadline from '$components/SectionHeadline.svelte';

	interface SkillsSectionProps {
		skills: Skill[];
	}
	let { skills }: SkillsSectionProps = $props();
</script>

<section class="skills-section mt-12">
	<SectionHeadline sectionName="skills">Skills</SectionHeadline>
	<div class="wrapper flex items-center justify-center">
		<div class="skills-container mt-12 flex w-1/2 flex-wrap justify-center gap-4 gap-y-8">
			{#each skills as skill}
				<i class={`${skill.iconClass} text-8xl text-black`}></i>
			{/each}
		</div>
	</div>
</section>
