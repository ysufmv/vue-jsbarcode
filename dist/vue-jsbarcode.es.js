import m from "jsbarcode";
import { defineComponent as f, ref as l, onMounted as s, watch as S, h as a } from "vue";
const u = f({
  name: "VueJsBarcode",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    format: [String],
    width: [String, Number],
    height: [String, Number],
    displayValue: {
      type: [String, Boolean],
      default: !0
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
      default: "svg",
      validator(e) {
        return ["canvas", "svg", "img"].includes(e);
      }
    }
  },
  setup(e, { slots: o }) {
    const r = l(!0), i = l(null);
    function g() {
      const t = {
        ...e,
        valid: (n) => {
          r.value = n;
        }
      };
      d(t), i.value && m(i.value, String(e.value), t);
    }
    function d(t) {
      Object.keys(t).forEach((n) => {
        t[n] === void 0 && delete t[n];
      });
    }
    return s(() => {
      S(
        () => ({ ...e }),
        () => {
          g();
        },
        { deep: !0, immediate: !0 }
      );
    }), () => a("div", [
      a(
        e.elementTag,
        {
          ref: i,
          style: { display: r.value ? void 0 : "none" },
          class: ["vue3-jsbarcode"]
        }
      ),
      a(
        "div",
        {
          style: { display: r.value ? "none" : void 0 }
        },
        o.default ? o.default() : null
      )
    ]);
  }
});
u.install = (e) => {
  e.component(u.name, u);
};
export {
  u as default
};
