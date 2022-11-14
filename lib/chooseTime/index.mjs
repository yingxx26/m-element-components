import { defineComponent as v, ref as i, watch as u, resolveComponent as f, openBlock as T, createElementBlock as S, createElementVNode as m, createVNode as c, mergeProps as p } from "vue";
const g = { class: "select-time-box" }, y = { class: "end-box" }, h = /* @__PURE__ */ v({
  __name: "index",
  props: {
    startPlaceholder: {
      type: String,
      default: "\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4"
    },
    endPlaceholder: {
      type: String,
      default: "\u8BF7\u9009\u62E9\u7ED3\u675F\u65F6\u95F4"
    },
    startTimeStart: {
      type: String,
      default: "08:00"
    },
    startStep: {
      type: String,
      default: "00:30"
    },
    startTimeEnd: {
      type: String,
      default: "24:00"
    },
    endTimeStart: {
      type: String,
      default: "08:00"
    },
    endStep: {
      type: String,
      default: "00:30"
    },
    endTimeEnd: {
      type: String,
      default: "24:00"
    }
  },
  emits: ["startTime", "endTime"],
  setup(e, { emit: d }) {
    const t = i(""), l = i(""), a = i(!0);
    return u(() => t.value, (n) => {
      n === "" ? (l.value = "", a.value = !0) : (a.value = !1, d("startTime", n));
    }), u(() => l.value, (n) => {
      n !== "" && d("endTime", { startTime: t.value, endTime: n });
    }), (n, s) => {
      const r = f("el-time-select");
      return T(), S("div", g, [
        m("div", null, [
          c(r, p({
            modelValue: t.value,
            "onUpdate:modelValue": s[0] || (s[0] = (o) => t.value = o),
            placeholder: e.startPlaceholder,
            start: e.startTimeStart,
            step: e.startStep,
            end: e.startTimeEnd
          }, n.$attrs.startOptions), null, 16, ["modelValue", "placeholder", "start", "step", "end"])
        ]),
        m("div", y, [
          c(r, p({
            modelValue: l.value,
            "onUpdate:modelValue": s[1] || (s[1] = (o) => l.value = o),
            "min-time": t.value,
            placeholder: e.endPlaceholder,
            start: e.endTimeStart,
            step: e.endStep,
            end: e.endTimeEnd,
            disabled: a.value
          }, n.$attrs.endOptions), null, 16, ["modelValue", "min-time", "placeholder", "start", "step", "end", "disabled"])
        ])
      ]);
    };
  }
});
const E = (e, d) => {
  const t = e.__vccOpts || e;
  for (const [l, a] of d)
    t[l] = a;
  return t;
}, _ = /* @__PURE__ */ E(h, [["__scopeId", "data-v-4555d4c7"]]), V = {
  install(e) {
    e.component("m-choose-time", _);
  }
};
export {
  V as default
};
