import JsBarcode from 'jsbarcode';
import { defineComponent, h, onMounted, ref, watch } from 'vue';

const VueJsBarcode = defineComponent({
  name: 'VueJsBarcode',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    format: [String],
    width: [String, Number],
    height: [String, Number],
    displayValue: {
      type: [String, Boolean],
      default: true
    },
    text: [String, Number],
    fontOptions: [String],
    font: [String],
    textAlign: [String],
    textPosition: [String],
    textMargin: [String, Number],
    fontSize: [String, Number],
    background: [String],
    lineColor: [String],
    margin: [String, Number],
    marginTop: [String, Number],
    marginBottom: [String, Number],
    marginLeft: [String, Number],
    marginRight: [String, Number],
    flat: [Boolean],
    ean128: [String, Boolean],
    elementTag: {
      type: String,
      default: 'svg',
      validator(value) {
        return ['canvas', 'svg', 'img'].includes(value);
      }
    }
  },
  setup(props, { slots }) {
    const valid = ref(true);
    const barcodeElement = ref(null);

    function render() {
      const settings = {
        ...props,
        valid: (validFlag) => {
          valid.value = validFlag;
        }
      };

      removeUndefinedProps(settings);

      if (barcodeElement.value) {
        JsBarcode(barcodeElement.value, String(props.value), settings);
      }
    }

    function removeUndefinedProps(obj) {
      Object.keys(obj).forEach((key) => {
        if (obj[key] === undefined) {
          delete obj[key];
        }
      });
    }

    onMounted(() => {
      watch(
        () => ({ ...props }),
        () => {
          render();
        },
        { deep: true, immediate: true }
      );
    });

    return () =>
      h('div', [
        h(
          props.elementTag,
          {
            ref: barcodeElement,
            style: { display: valid.value ? undefined : 'none' },
            class: ['vue3-jsbarcode']
          }
        ),
        h(
          'div',
          {
            style: { display: valid.value ? 'none' : undefined }
          },
          slots.default ? slots.default() : null
        )
      ]);
  }
});

VueJsBarcode.install = (app) => {
  app.component(VueJsBarcode.name, VueJsBarcode);
};

export default VueJsBarcode;
