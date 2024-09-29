VueJsBarcode
# Vue 3 Barcode Generator Component - wrapper for JsBarcode

A Vue 3 component wrapper for [JsBarcode](https://github.com/lindell/JsBarcode), allowing you to generate barcodes in your Vue3.js applications easily. This component supports multiple barcode formats and is fully customizable via props that map directly to JsBarcode options.

The existing JsBarcode port for Vue 3 [vue3-barcode](https://www.npmjs.com/package/vue3-barcode) works well for most cases except its dependencies have not been updated for some time, which necessitated a new port. In addition, I required ability to allow multiple barcodes on the same page, which didn't work in [vue3-barcode] due to the way the barcode element was selected. This has been fixed in this port. 

Since its a port of JsBarcode, all functionality available should work in the same manner. I used an AI to quickly pull up the following documentation. 

Enjoy!

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
    - [Global Registration](#global-registration)
    - [Local Registration](#local-registration)
    - [Using with Script Setup](#using-with-script-setup)
    - [Using with Composition API](#using-with-composition-api)
- [Available Props](#available-props)
    - [Value](#value)
    - [Format](#format)
    - [Width](#width)
    - [Height](#height)
    - [Display Value](#display-value)
    - [Text](#text)
    - [Font Options](#font-options)
    - [Font](#font)
    - [Text Align](#text-align)
    - [Text Position](#text-position)
    - [Text Margin](#text-margin)
    - [Font Size](#font-size)
    - [Background](#background)
    - [Line Color](#line-color)
    - [Margin](#margin)
    - [Margin Top](#margin-top)
    - [Margin Bottom](#margin-bottom)
    - [Margin Left](#margin-left)
    - [Margin Right](#margin-right)
    - [Flat](#flat)
    - [EAN128](#ean128)
    - [Element Tag](#element-tag)
- [Examples](#examples)
    - [Basic Usage](#basic-usage)
    - [Customizing Appearance](#customizing-appearance)
    - [Using with Script Setup](#using-with-script-setup)
    - [Multiple Barcodes on the Same Page](#multiple-barcodes-on-the-same-page)
- [License](#license)

## Features
- Supports multiple barcode formats (e.g., CODE128, EAN13, UPC, etc.)
- Fully customizable appearance via props
- Reactivity support: updates when props change
- Compatible with both Options API and Composition API
- Can render barcodes using `<svg>`, `<canvas>`, or `<img>` elements
- Easy to integrate into existing Vue 3 projects

## Installation
Install the package via npm:

```bash
npm install vue3-jsbarcode jsbarcode
```

- `vue3-jsbarcode`: The Vue 3 component
- `jsbarcode`: The underlying barcode generation library

Note: `jsbarcode` is listed as a peer dependency and must be installed separately.

## Usage

### Global Registration
Register the component globally in your main application file (e.g., `main.js`):

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import VueJsBarcode from 'vue3-jsbarcode';

const app = createApp(App);
app.use(VueJsBarcode);
app.mount('#app');
```

Now you can use `<vue-js-barcode>` anywhere in your templates.

### Local Registration
Import and register the component locally in your Vue component:

```vue
<script>
import { defineComponent } from 'vue';
import VueJsBarcode from 'vue3-jsbarcode';

export default defineComponent({
    components: {
        VueJsBarcode,
    },
    // ... other component options
});
</script>
```

### Using with Script Setup
If you're using the `<script setup>` syntax:

```vue
<template>
    <vue-js-barcode :value="barcodeValue" format="CODE128"></vue-js-barcode>
</template>

<script setup>
import VueJsBarcode from 'vue3-jsbarcode';
import { ref } from 'vue';

const barcodeValue = ref('1234567890');
</script>
```

### Using with Composition API

```vue
<template>
    <vue-js-barcode :value="barcodeValue" format="EAN13"></vue-js-barcode>
</template>

<script>
import { defineComponent, ref } from 'vue';
import VueJsBarcode from 'vue3-jsbarcode';

export default defineComponent({
    components: {
        VueJsBarcode,
    },
    setup() {
        const barcodeValue = ref('0123456789012');
        return {
            barcodeValue,
        };
    },
});
</script>
```

## Available Props
The component accepts various props that correspond directly to JsBarcode options. Below is a detailed breakdown of each prop and its purpose.

### Value
- **Prop**: `value`
- **Type**: String or Number
- **Default**: `''`
- **Description**: The value to be encoded into the barcode. This is required and should be a string or a number that represents the data you want to encode.

### Format
- **Prop**: `format`
- **Type**: String
- **Default**: `'CODE128'`
- **Description**: The barcode format to use. Available formats include:
    - `CODE128`
    - `EAN13`
    - `UPC`
    - `EAN8`
    - `EAN5`
    - `EAN2`
    - `CODE39`
    - `ITF14`
    - `MSI`
    - `Pharmacode`
    - and others supported by JsBarcode

Example:

```vue
<vue-js-barcode :value="value" format="EAN13"></vue-js-barcode>
```

### Width
- **Prop**: `width`
- **Type**: Number or String
- **Default**: `2`
- **Description**: The width of a single bar in the barcode, in pixels.

### Height
- **Prop**: `height`
- **Type**: Number or String
- **Default**: `100`
- **Description**: The height of the barcode in pixels.

### Display Value
- **Prop**: `displayValue`
- **Type**: Boolean or String (`'true'` or `'false'`)
- **Default**: `true`
- **Description**: Whether to display the value (text) below the barcode.

### Text
- **Prop**: `text`
- **Type**: String or Number
- **Default**: `undefined`
- **Description**: Custom text to display under the barcode. If not set, the `value` prop will be used.

### Font Options
- **Prop**: `fontOptions`
- **Type**: String
- **Default**: `''`
- **Description**: Additional font options. Possible values include:
    - `''` (default)
    - `'bold'`
    - `'italic'`
    - `'bold italic'`

### Font
- **Prop**: `font`
- **Type**: String
- **Default**: `'monospace'`
- **Description**: The font family for the text displayed below the barcode.

### Text Align
- **Prop**: `textAlign`
- **Type**: String
- **Default**: `'center'`
- **Description**: The alignment of the text. Possible values:
    - `'left'`
    - `'center'`
    - `'right'`

### Text Position
- **Prop**: `textPosition`
- **Type**: String
- **Default**: `'bottom'`
- **Description**: The position of the text relative to the barcode. Possible values:
    - `'top'`
    - `'bottom'`

### Text Margin
- **Prop**: `textMargin`
- **Type**: Number or String
- **Default**: `2`
- **Description**: The margin between the barcode and the text, in pixels.

### Font Size
- **Prop**: `fontSize`
- **Type**: Number or String
- **Default**: `20`
- **Description**: The font size of the text displayed below the barcode, in pixels.

### Background
- **Prop**: `background`
- **Type**: String
- **Default**: `'#ffffff'`
- **Description**: The background color of the barcode.

### Line Color
- **Prop**: `lineColor`
- **Type**: String
- **Default**: `'#000000'`
- **Description**: The color of the bars in the barcode.

### Margin
- **Prop**: `margin`
- **Type**: Number or String
- **Default**: `10`
- **Description**: The margin around the barcode, in pixels. This sets all margins (top, bottom, left, right) to the same value.

### Margin Top
- **Prop**: `marginTop`
- **Type**: Number or String
- **Default**: `undefined`
- **Description**: The top margin of the barcode, in pixels. If not set, the value of `margin` prop is used.

### Margin Bottom
- **Prop**: `marginBottom`
- **Type**: Number or String
- **Default**: `undefined`
- **Description**: The bottom margin of the barcode, in pixels. If not set, the value of `margin` prop is used.

### Margin Left
- **Prop**: `marginLeft`
- **Type**: Number or String
- **Default**: `undefined`
- **Description**: The left margin of the barcode, in pixels. If not set, the value of `margin` prop is used.

### Margin Right
- **Prop**: `marginRight`
- **Type**: Number or String
- **Default**: `undefined`
- **Description**: The right margin of the barcode, in pixels. If not set, the value of `margin` prop is used.

### Flat
- **Prop**: `flat`
- **Type**: Boolean
- **Default**: `false`
- **Description**: Renders the barcode flat without any background. Useful when rendering on transparent backgrounds.

### EAN128
- **Prop**: `ean128`
- **Type**: Boolean or String (`'true'` or `'false'`)
- **Default**: `false`
- **Description**: If set to true, uses the FNC1 character in Code 128 barcodes to encode GS1-128 (EAN-128) barcodes.

### Element Tag
- **Prop**: `elementTag`
- **Type**: String
- **Default**: `'svg'`
- **Description**: The HTML tag to use for rendering the barcode. Possible values:
    - `'svg'` (default)
    - `'canvas'`
    - `'img'`

Usage:

```vue
<vue-js-barcode :value="value" element-tag="canvas"></vue-js-barcode>
```

## Examples

### Basic Usage

```vue
<template>
    <vue-js-barcode :value="barcodeValue"></vue-js-barcode>
</template>

<script>
import { defineComponent } from 'vue';
import VueJsBarcode from 'vue3-jsbarcode';

export default defineComponent({
    components: {
        VueJsBarcode,
    },
    data() {
        return {
            barcodeValue: '1234567890',
        };
    },
});
</script>
```

### Customizing Appearance

```vue
<template>
    <vue-js-barcode
        :value="barcodeValue"
        format="EAN13"
        :width="1"
        :height="80"
        display-value="false"
        line-color="#ff0000"
        background="#ffff00"
    ></vue-js-barcode>
</template>

<script>
import { defineComponent } from 'vue';
import VueJsBarcode from 'vue3-jsbarcode';

export default defineComponent({
    components: {
        VueJsBarcode,
    },
    data() {
        return {
            barcodeValue: '4006381333931', // Valid EAN-13 code
        };
    },
});
</script>
```

### Using with Script Setup

```vue
<template>
    <vue-js-barcode :value="barcodeValue" :height="150" :font-size="16"></vue-js-barcode>
</template>

<script setup>
import VueJsBarcode from 'vue3-jsbarcode';
import { ref } from 'vue';

const barcodeValue = ref('9876543210');
</script>
```

### Multiple Barcodes on the Same Page

```vue
<template>
    <div>
        <vue-js-barcode
            v-for="code in barcodes"
            :key="code.value"
            :value="code.value"
            :format="code.format"
            :text="code.text"
        ></vue-js-barcode>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import VueJsBarcode from 'vue3-jsbarcode';

export default defineComponent({
    components: {
        VueJsBarcode,
    },
    data() {
        return {
            barcodes: [
                { value: '1234567890', format: 'CODE128', text: 'Code 1' },
                { value: '4006381333931', format: 'EAN13', text: 'Code 2' },
                { value: '012345678905', format: 'UPC', text: 'Code 3' },
            ],
        };
    },
});
</script>
```

## License
MIT

Note: This component is a wrapper around JsBarcode. For more advanced usage and barcode formats, refer to the JsBarcode documentation.

