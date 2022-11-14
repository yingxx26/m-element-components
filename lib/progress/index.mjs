import { defineComponent as l, ref as p, onMounted as s, resolveComponent as c, openBlock as i, createElementBlock as m, createVNode as u, mergeProps as g } from "vue";
const d = /* @__PURE__ */ l({
  __name: "index",
  props: {
    percentage: {
      type: Number,
      required: !0
    },
    isAnimate: {
      type: Boolean,
      default: !1
    },
    time: {
      type: Number,
      default: 3e3
    }
  },
  setup(n) {
    const e = n, t = p(0);
    return s(() => {
      if (e.isAnimate) {
        const r = Math.ceil(e.time / e.percentage);
        let o = setInterval(() => {
          t.value += 1, t.value >= e.percentage && (t.value = e.percentage, clearInterval(o));
        }, r);
      } else
        t.value = e.percentage;
    }), (r, o) => {
      const a = c("el-progress");
      return i(), m("div", null, [
        u(a, g({ percentage: t.value }, r.$attrs), null, 16, ["percentage"])
      ]);
    };
  }
}), v = {
  install(n) {
    n.component("m-progress", d);
  }
};
export {
  v as default
};
