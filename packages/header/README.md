# CMMD-Header

Header for CMMD applications.

## How to install

```sh
yarn add @cmmd-web/header
```

```js
import '@cmmd-web/header/cmmd-header.js';
```

## Example

```html
<cmmd-header title="My App">
  <cmmd-button danger>Logout</cmmd-button>
</cmmd-header>
```

## Properties

| Name        | Description      | Type      | Optional |
| ----------- | ---------------- | --------- | -------- |
| headerTitle | Title of the app | attribute | No       |

## Slot

All content inside the cmmd-header component will be rendered next to the title.
