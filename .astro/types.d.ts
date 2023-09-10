declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';

	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;
	export type CollectionEntry<C extends keyof AnyEntryMap> = Flatten<AnyEntryMap[C]>;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>,
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<[BaseSchemaWithoutEffects, ...BaseSchemaWithoutEffects[]]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<BaseSchemaWithoutEffects, BaseSchemaWithoutEffects>;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type DataCollectionConfig<S extends BaseSchema> = {
		type: 'data';
		schema?: S | ((context: SchemaContext) => S);
	};

	type ContentCollectionConfig<S extends BaseSchema> = {
		type?: 'content';
		schema?: S | ((context: SchemaContext) => S);
	};

	type CollectionConfig<S> = ContentCollectionConfig<S> | DataCollectionConfig<S>;

	export function defineCollection<S extends BaseSchema>(
		input: CollectionConfig<S>
	): CollectionConfig<S>;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
			  }
			: {
					collection: C;
					id: keyof DataEntryMap[C];
			  }
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"project": {
"ai-twitter-bio-generator.md": {
	id: "ai-twitter-bio-generator.md";
  slug: "ai-twitter-bio-generator";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".md"] };
"building-a-nextjs-application-with-notion-as-a-backend.md": {
	id: "building-a-nextjs-application-with-notion-as-a-backend.md";
  slug: "building-a-nextjs-application-with-notion-as-a-backend";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".md"] };
"building-sites-with-astro.md": {
	id: "building-sites-with-astro.md";
  slug: "building-sites-with-astro";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".md"] };
"crypto-dashbord.md": {
	id: "crypto-dashbord.md";
  slug: "crypto-dashbord";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".md"] };
"deploying-pocketbase-on-ubuntu.md": {
	id: "deploying-pocketbase-on-ubuntu.md";
  slug: "deploying-pocketbase-on-ubuntu";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".md"] };
"fastapi-for-python-development.md": {
	id: "fastapi-for-python-development.md";
  slug: "fastapi-for-python-development";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".md"] };
"getting-started-with-tailwindcss-in-nextjs.md": {
	id: "getting-started-with-tailwindcss-in-nextjs.md";
  slug: "getting-started-with-tailwindcss-in-nextjs";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".md"] };
"getting-started-with-the-chatgpt-api.md": {
	id: "getting-started-with-the-chatgpt-api.md";
  slug: "getting-started-with-the-chatgpt-api";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".md"] };
"how-to-use-react-tailwind-and-svelte-inside-astro.md": {
	id: "how-to-use-react-tailwind-and-svelte-inside-astro.md";
  slug: "how-to-use-react-tailwind-and-svelte-inside-astro";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".md"] };
"linktreez.md": {
	id: "linktreez.md";
  slug: "linktreez";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".md"] };
"managing-global-state-with-solidjs-and-typescript.md": {
	id: "managing-global-state-with-solidjs-and-typescript.md";
  slug: "managing-global-state-with-solidjs-and-typescript";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".md"] };
"medium-article.md": {
	id: "medium-article.md";
  slug: "medium-article";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".md"] };
"project-nexum-wiki.md": {
	id: "project-nexum-wiki.md";
  slug: "project-nexum-wiki";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".md"] };
"run-machine-learning-models-locally-with-hugging-face.md": {
	id: "run-machine-learning-models-locally-with-hugging-face.md";
  slug: "run-machine-learning-models-locally-with-hugging-face";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".md"] };
"svelteflix.md": {
	id: "svelteflix.md";
  slug: "svelteflix";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".md"] };
"sveltekit-landing-page-with-daisyui.md": {
	id: "sveltekit-landing-page-with-daisyui.md";
  slug: "sveltekit-landing-page-with-daisyui";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".md"] };
"using-pocketbase-with-sveltekit.md": {
	id: "using-pocketbase-with-sveltekit.md";
  slug: "using-pocketbase-with-sveltekit";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".md"] };
"using-trpc-in-nextjs.md": {
	id: "using-trpc-in-nextjs.md";
  slug: "using-trpc-in-nextjs";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	type ContentConfig = typeof import("../src/content/config");
}
