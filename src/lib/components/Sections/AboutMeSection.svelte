<script lang="ts">
	import { SectionHeadline, ExperienceTable } from '$components';
	import image from '$assets/about-me.jpeg';
	import { goto } from '$app/navigation';
	import { Button } from '$components';

	interface AboutMeSectionProps {
		workExperience: SanityWorkExperience[];
	}

	let { workExperience }: AboutMeSectionProps = $props();

	function onclick() {
		goto('/#contact-form');
	}
</script>

<section class="about-me mt-20">
	<SectionHeadline sectionName={'about-me'}>About Me</SectionHeadline>
	<div class="flex flex-col items-start gap-10 sm:flex-row">
		<img src={image} alt="About Me" class="w-full rounded-lg sm:w-1/2" />
		<div class="flex w-full flex-col gap-4 text-base sm:w-1/2">
			<p>
				Hey, I'm Niklas, the driving force behind my freelancing agency specializing in web
				development and data science.
			</p>
			<p>
				With years of hands-on experience tackling real-world coding challenges and meeting diverse
				client needs, I've built a deep understanding of the tech landscape. But beyond coding, my
				true passion lies in teaching. I've had the privilege of guiding hundreds of aspiring
				developers, focusing on making coding both practical and accessible. My goal is to translate
				complex concepts into actionable skills that you can apply right away.
			</p>
			<p>
				Through my courses, I’m committed to sharing the insights and lessons I’ve learned in the
				field, so you can skip the pitfalls and fast-track your development journey. If you're eager
				to learn from real-world experience and practical know-how, let's dive in together.
			</p>
			<Button {onclick}>Tell me about your project</Button>
		</div>
	</div>
	<ExperienceTable {workExperience} />
</section>
