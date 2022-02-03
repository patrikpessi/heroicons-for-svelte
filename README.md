# Heroicons for Svelte

Easy way to use [Heroicons](https://heroicons.dev/) in your [Svelte](http://svelte.dev/) project.

## Installation

1. Run: `npm i heroicons-for-svelte`

## Usage

### Basic import:

`Component.svelte`

```
<script>
    import Icon from "heroicons-for-svelte";
    import { Bell } from "heroicons-for-svelte/icons/outline";
</script>

<div>
    <Icon icon={Bell} />
</div>
```

### Import both variants (outline and solid):

`Component.svelte`

```
<script>
    import Icon from "heroicons-for-svelte";
    import { Bell as OutlineBell } from "heroicons-for-svelte/icons/outline";
    import { Bell as SolidBell } from "heroicons-for-svelte/icons/solid";
</script>

<div>
    <Icon icon={OutlineBell} />
    <Icon icon={SolidBell} />
</div>
```

### Setting the size using `class` or `style`:

You can set the size of the icons by simply setting the font size of the Icon component.

The default size for the icons is `1em`.

`Component.svelte`

```
<script>
	import Icon from "heroicons-for-svelte"
	import { Bell as OutlineBell } from "heroicons-for-svelte/icons/outline"
	import { Bell as SolidBell } from "heroicons-for-svelte/icons/solid"
</script>

<Icon icon={OutlineBell} style="font-size: 24px"/>
<Icon icon={SolidBell} class="icon" />

<style>
	:global(.icon) {
		font-size: 3rem;
	}
</style>
```

Try the package in [this Svelte REPL](https://svelte.dev/repl/1e202eaf7b414adda3c86fa9228ed8c9?version=3.46.3)

## Icons

-   For a full list of icons, see https://heroicons.com/
-   All the icons are available in the outline and solid variants.
-   Icon names have been converted to PascalCase (eg `bell` -> `Bell` or `document-text` -> `DocumentText`).

## Development

1. Run: `npm run setupDev`
2. Edit and run: `npm run prepublishOnly` to build the package
