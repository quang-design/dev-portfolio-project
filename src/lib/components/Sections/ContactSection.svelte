<script lang="ts">
	import { SectionHeadline, Button } from '$components';

	let contactName = $state('Niklas');
	let contactEmail = $state('niklas@niklas-koehler.com');
	let contactMessage = $state('Ich bin ein Test');
	let isFormInvalid = $state(false);
	let isEmailSent = $state(false);
	let showErrorMessage = $state(false);
	let isLoading = $state(false);

	$inspect(isEmailSent);

	async function onSubmit(event: Event) {
		event?.preventDefault();
		if (contactName && contactEmail && contactMessage) {
			isLoading = true;
			//send data to backend
			const response = await fetch('/api/send-mail', {
				method: 'POST',
				body: JSON.stringify({
					contactName,
					contactEmail,
					contactMessage
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			isLoading = false;
			if (response.ok) {
				isEmailSent = true;
			} else {
				showErrorMessage = true;
			}
		} else {
			isFormInvalid = true;
		}
	}

	$effect(() => {
		if (contactName || contactEmail || contactMessage) {
			isFormInvalid = false;
		}
	});
</script>

<section class="py-16">
	<SectionHeadline sectionName="contact-form">Let's talk</SectionHeadline>
	<div class="form-container flex justify-between gap-4">
		{#if isEmailSent}
			<div class="spinner-container">
				<h3>Thank you for getting in contact. Will reply soon.</h3>
			</div>
		{:else if isLoading}
			<div class="spinner-container">
				<div class="spinner"></div>
			</div>
		{:else if showErrorMessage}
			<h3>
				We seem to have trouble with our server at the moment. Please send me an email directly to <a
					href="mailto:hello@johannes-koehler.com">hello@johannes-koehler.com</a
				>
			</h3>
		{:else}
			<form action="" class="flex w-1/2 flex-col items-start">
				<input
					type="text"
					class="text-input mb-4 h-12 w-full border-none bg-black/[3.5%] px-4 py-2 text-base text-black outline-none"
					class:input-error={isFormInvalid && !Boolean(contactName.length)}
					placeholder="Name"
					bind:value={contactName}
				/>
				<input
					type="text"
					class="text-input mb-4 h-12 w-full border-none bg-black/[3.5%] px-4 py-2 text-base text-black outline-none"
					class:input-error={isFormInvalid && !Boolean(contactEmail.length)}
					placeholder="Email"
					bind:value={contactEmail}
				/>
				<textarea
					class="text-input mb-4 h-24 w-full border-none bg-black/[3.5%] px-4 py-2 text-base text-black outline-none"
					class:input-error={isFormInvalid && !Boolean(contactMessage.length)}
					placeholder="Tell me what's up"
					bind:value={contactMessage}
				></textarea>
				<Button onclick={onSubmit}>Send</Button>
			</form>
		{/if}
		<div class="form-text w-1/2">
			<h3 class="mb-2 font-bold">I'll get back to you as soon as possible</h3>
			<p>
				You can also reach me on
				<a href="mailto:hello@johannes-koehler.com">hello@johannes-koehler.com</a>
			</p>
		</div>
	</div>
</section>

<style>
	textarea::placeholder,
	input::placeholder {
		font-size: 1rem;
		font-weight: 300;
	}

	.input-error {
		background-color: rgba(223, 87, 87, 0.667);
	}

	.input-error::placeholder {
		color: white;
	}

	.spinner {
		border: 4px solid rgba(0, 0, 0, 0.1);
		border-left-color: black;
		border-radius: 50%;
		width: 16px;
		height: 16px;
		display: inline-block;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
