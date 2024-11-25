# Developer Portfolio

A modern developer portfolio built with SvelteKit and Sanity CMS, created as part of the "Master Svelte 5 & SvelteKit" course.

## Features

- Dynamic content management with Sanity CMS
- Contact form with SendGrid email integration
- Modern, responsive design
- Server-side rendering with SvelteKit
- TypeScript support

## Getting Started

Create a new project using the following commands:

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Development

Once you've created a project and installed dependencies with `npm install`, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Environment Variables

You'll need to set up the following environment variables:

```bash
SENDGRID_API_KEY=your_sendgrid_key
SANITY_PROJECT_ID=your_sanity_project_id
SANITY_DATASET=your_dataset_name
```

> Note: Make sure to set up your Sanity Studio and SendGrid account before running the application.
