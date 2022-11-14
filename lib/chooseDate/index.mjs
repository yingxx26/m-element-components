import { defineComponent as h, ref as r, watch as p, resolveComponent as b, openBlock as g, createElementBlock as y, createElementVNode as m, createVNode as v, mergeProps as _, unref as i } from "vue";
const V = { class: "select-date-box" }, x = { class: "end-box" }, C = /* @__PURE__ */ h({
  __name: "index",
  props: {
    startPlaceholder: {
      type: String,
      default: "\u8BF7\u9009\u62E9\u5F00\u59CB\u65E5\u671F"
    },
    endPlaceholder: {
      type: String,
      default: "\u8BF7\u9009\u62E9\u7ED3\u675F\u65E5\u671F"
    },
    disableToday: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["startChange", "endChange"],
  setup(t, { emit: d }) {
    const n = t, a = r(null), l = r(null);
    let s = r(!0), D = (e) => {
      if (n.disableToday)
        return e.getTime() < Date.now() - 1e3 * 60 * 60 * 24;
    }, f = (e) => {
      if (a.value)
        return e.getTime() < a.value.getTime() + 1e3 * 60 * 60 * 24;
    };
    return p(() => a.value, (e) => {
      e ? (d("startChange", e), s.value = !1) : (s.value = !0, l.value = null);
    }), p(() => l.value, (e) => {
      e && d("endChange", {
        startDate: a.value,
        endDate: e
      });
    }), (e, o) => {
      const c = b("el-date-picker");
      return g(), y("div", V, [
        m("div", null, [
          v(c, _({
            modelValue: a.value,
            "onUpdate:modelValue": o[0] || (o[0] = (u) => a.value = u),
            type: "date",
            placeholder: t.startPlaceholder,
            disabledDate: i(D)
          }, e.$attrs.startOptions), null, 16, ["modelValue", "placeholder", "disabledDate"])
        ]),
        m("div", x, [
          v(c, _({
            modelValue: l.value,
            "onUpdate:modelValue": o[1] || (o[1] = (u) => l.value = u),
            type: "date",
            placeholder: t.endPlaceholder,
            disabled: i(s),
            disabledDate: i(f)
          }, e.$attrs.endOptions), null, 16, ["modelValue", "placeholder", "disabled", "disabledDate"])
        ])
      ]);
    };
  }
});
const E = (t, d) => {
  const n = t.__vccOpts || t;
  for (const [a, l] of d)
    n[a] = l;
  return n;
}, B = /* @__PURE__ */ E(C, [["__scopeId", "data-v-11776c9e"]]), k = {
  install(t) {
    t.component("m-choose-date", B);
  }
};
export {
  k as default
};
