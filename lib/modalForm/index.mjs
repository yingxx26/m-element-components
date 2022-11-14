import { defineComponent as y, ref as s, watch as m, resolveComponent as u, openBlock as b, createElementBlock as g, normalizeClass as O, createVNode as d, mergeProps as h, withCtx as t, renderSlot as a } from "vue";
const B = /* @__PURE__ */ y({
  __name: "index",
  props: {
    isScroll: {
      type: Boolean,
      default: !1
    },
    visible: {
      type: Boolean,
      default: !1
    },
    options: {
      type: Array,
      required: !0
    },
    onChange: {
      type: Function
    },
    beforeUpload: {
      type: Function
    },
    onPreview: {
      type: Function
    },
    onRemove: {
      type: Function
    },
    beforeRemove: {
      type: Function
    },
    onSuccess: {
      type: Function
    },
    onExceed: {
      type: Function
    }
  },
  emits: ["update:visible"],
  setup(e, { emit: c }) {
    const i = e, n = s(null), l = s(i.visible);
    return m(() => i.visible, (o) => {
      l.value = o;
    }), m(() => l.value, (o) => {
      c("update:visible", o);
    }), (o, r) => {
      const f = u("m-form"), v = u("el-dialog");
      return b(), g("div", {
        class: O({ "m-choose-icon-dialog-body-height": e.isScroll })
      }, [
        d(v, h({
          modelValue: l.value,
          "onUpdate:modelValue": r[0] || (r[0] = (p) => l.value = p)
        }, o.$attrs), {
          default: t(() => [
            d(f, {
              ref_key: "form",
              ref: n,
              "label-width": "100px",
              options: e.options,
              onOnChange: e.onChange,
              onBeforeUpload: e.beforeUpload,
              onOnPreview: e.onPreview,
              onOnRemove: e.onRemove,
              onBeforeRemove: e.beforeRemove,
              onOnSuccess: e.onSuccess,
              onOnExceed: e.onExceed
            }, {
              uploadArea: t(() => [
                a(o.$slots, "uploadArea", { form: n.value })
              ]),
              uploadTip: t(() => [
                a(o.$slots, "uploadTip", { form: n.value })
              ]),
              _: 3
            }, 8, ["options", "onOnChange", "onBeforeUpload", "onOnPreview", "onOnRemove", "onBeforeRemove", "onOnSuccess", "onOnExceed"])
          ]),
          footer: t(() => [
            a(o.$slots, "footer", { form: n.value })
          ]),
          _: 3
        }, 16, ["modelValue"])
      ], 2);
    };
  }
}), R = {
  install(e) {
    e.component("m-modal-form", B);
  }
};
export {
  R as default
};
