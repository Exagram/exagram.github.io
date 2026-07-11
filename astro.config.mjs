// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	fonts: [
		{
			cssVariable: '--font-fira-code',
			fallbacks: ["monospace"],
			name: 'Fira Code',
			provider: fontProviders.local(),
			options: {
				variants: [
					// {
					// 	src: ['./src/assets/fonts/fira-code/FiraCode-Light.woff2'],
					// 	weight: 300,
					// 	style: 'normal'
					// },
					// {
					// 	src: ['./src/assets/fonts/fira-code/FiraCode-Regular.woff2'],
					// 	weight: 400,
					// 	style: 'normal'
					// },
					// {
					// 	src: ['./src/assets/fonts/fira-code/FiraCode-Medium.woff2'],
					// 	weight: 500,
					// 	style: 'normal'
					// },
					// {
					// 	src: ['./src/assets/fonts/fira-code/FiraCode-SemiBold.woff2'],
					// 	weight: 600,
					// 	style: 'normal'
					// },
					// {
					// 	src: ['./src/assets/fonts/fira-code/FiraCode-Bold.woff2'],
					// 	weight: 700,
					// 	style: 'normal'
					// },
					{
						src: ['./src/assets/fonts/fira-code/FiraCode-VF.woff2'],
						weight: '300 700',
						style: 'normal'
					}
				]
			}
		}
	],
	markdown: {
		remarkPlugins: [
			remarkMath,
		],
		rehypePlugins: [
			rehypeKatex,
		],
	},
	integrations: [mdx()],
	site: 'https://exagram.github.io'
});