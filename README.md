# [Heroicons](https://heroicons.com/) for [Svelte](https://svelte.dev/)

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

## Icons

-   For a full list of icons, see https://heroicons.com/
-   All the icons are available in the outline and solid variants.
-   Icon names have been converted to PascalCase (eg `bell` -> `Bell` or `document-text` -> `DocumentText`).

## Development

1. Run: `npm run setupDev`
2. Edit and run: `npm run prepublishOnly` to build the package
