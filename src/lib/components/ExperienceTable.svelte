<script lang="ts">
	interface ExperienceTableProps {
		workExperience: SanityWorkExperience[];
	}

	let { workExperience }: ExperienceTableProps = $props();
</script>

<section class="work-experience mt-20 flex w-full flex-col-reverse sm:flex-row sm:justify-between">
	<ul class="work-experience-list w-full sm:w-full">
		{#each workExperience as job}
			<li
				class="work-item w-full border-b border-gray-200 pb-4 [&:not(:first-of-type)]:pt-4 [&_p]:mb-0"
			>
				<article>
					<h3 class="mb-2 text-xl font-semibold">{job.jobTitle}</h3>
					<div class="company-and-date flex justify-between">
						<p>{job.company}</p>
						<p class="text-sm text-gray-500">
							{job.startDate?.slice(0, 7)}
							{#if job.endDate}
								- {job.endDate?.slice(0, 7)}
							{:else}
								/ present
							{/if}
						</p>
					</div>
				</article>
			</li>
		{/each}
	</ul>
	<div class="mb-5 flex w-1/2 flex-col gap-2 sm:w-full">
		<h2 class=" text-left text-4xl font-bold sm:text-right">
			Past work <br /> experience
		</h2>
		<div class="mt-2 h-1 w-24 bg-black sm:ml-auto"></div>
	</div>
</section>
