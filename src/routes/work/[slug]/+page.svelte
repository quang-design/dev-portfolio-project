<script lang="ts">
	let { data } = $props();

	const { company, title, dateAccomplished, techStack, projectImageUrl, projectContent } =
		data.project;

	function getTagFromStyle(style: ProcessedTextContent['style']): string {
		if (style === 'normal') {
			return 'p';
		} else {
			return style;
		}
	}

	$inspect(data);
</script>

<main class="pb-8 pt-16">
	<h4 class="text-2xl font-bold">{company}</h4>
	<div class="my-4 h-1 w-24 bg-black"></div>
	<h2 class="mb-4 text-4xl font-bold">{title}</h2>
	<img
		src={projectImageUrl}
		alt={title}
		class="my-4 aspect-video max-h-[500px] w-full rounded-lg object-cover"
	/>
	<div class="project-container mt-4 flex flex-col gap-4 sm:flex-row">
		<div class="meta-data min-w-[10%]">
			<h3 class="font-bold">Date</h3>
			<p>{dateAccomplished.slice(0, 7)}</p>
			<br />
			<h3 class="font-bold">Tech Stack</h3>
			<ul>
				{#each techStack as stack}
					<li>{stack}</li>
				{/each}
			</ul>
		</div>
		<div class="project-content">
			{#each projectContent as block}
				{#if block.type === 'text'}
					<svelte:element this={getTagFromStyle(block.style)} class="mb-4">
						{block.textToRender}
					</svelte:element>
				{:else if block.type === 'image'}
					<img src={block.imageUrl} alt={title} class="mb-4 w-full rounded-lg object-cover" />
				{/if}
			{/each}
		</div>
	</div>
</main>
