import { createClient, type ClientConfig } from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

const config: ClientConfig = {
	projectId: 'lq503bf9',
	dataset: 'content',
	apiVersion: '2024-10-27',
	useCdn: true
};

const sanityClient = createClient(config);
export default sanityClient;

export function processProjectEntries(rawProject: SanityProject) {
	const builder = ImageUrlBuilder(sanityClient);
	const projectImageUrl = builder.image(rawProject.projectImage).url();

	const processedProject: ProcessedProject = {
		title: rawProject.title,
		company: rawProject.company,
		dateAccomplished: rawProject.dateAccomplished,
		techStack: rawProject.techStack,
		slug: rawProject.slug,
		projectImageUrl,
		projectContent: rawProject.projectContent.map(processProjectContent)
	};

	return processedProject;
}

function processProjectContent(content: RawTextContent | RawImageContent) {
	if (content._type === 'block') {
		// process text content
		const processedTextContent: ProcessedTextContent = {
			type: 'text',
			style: content.style,
			textToRender: content.children.map((elem) => elem.text).join('\n')
		};
		return processedTextContent;
	} else {
		// process image content
		const builder = ImageUrlBuilder(sanityClient);
		const projectImageUrl = builder.image(content).url();

		const processedImage: ProcessedImageContent = {
			type: 'image',
			imageUrl: projectImageUrl
		};
		return processedImage;
	}
}
