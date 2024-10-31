<script lang="ts">
	import { SectionHeadline } from '$components';

	interface MyWorkSectionProps {
		projects: ProcessedProject[];
	}
	let { projects }: MyWorkSectionProps = $props();
	let mainProject = $derived(projects[0]);
</script>

<section class="my-10 [&_img]:aspect-video [&_img]:w-full [&_img]:rounded-lg [&_img]:object-cover">
	<SectionHeadline sectionName="my-work">My Work</SectionHeadline>
	<div class="project-container mt-10">
		<article class="main-article mb-10">
			<a href={`/work/${mainProject.slug}`}>
				<img src={mainProject.projectImageUrl} alt={mainProject.title} />
				<div class="project-info mt-4 flex items-center justify-between">
					<div class="title-and-company">
						<h3 class="text-2xl font-bold">{mainProject.title}</h3>
						<p class="mb-0 text-sm">{mainProject.company}</p>
					</div>
					<button
						class="btn-to-article rounded-full border border-black px-5 py-1 text-xl hover:bg-black hover:text-white"
					>
						→
					</button>
				</div>
			</a>
		</article>
	</div>
	<div class="project-list flex flex-wrap justify-between gap-4">
		{#each projects.slice(1) as project}
			<article class="project-card w-full sm:w-[48%]">
				<a href={`/work/${project.slug}`}>
					<img src={project.projectImageUrl} alt={project.title} />
					<div class="project-info mt-4 flex items-center justify-between">
						<div class="title-and-company">
							<h3 class="text-2xl font-bold">{project.title}</h3>
							<p class="mb-0 text-sm">{project.company}</p>
						</div>
						<button
							class="btn-to-article rounded-full border border-black px-5 py-1 text-xl hover:bg-black hover:text-white"
						>
							→
						</button>
					</div>
				</a>
			</article>
		{/each}
	</div>
</section>
