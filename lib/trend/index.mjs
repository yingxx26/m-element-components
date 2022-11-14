import { defineComponent as p, useSlots as f, computed as C, openBlock as n, createElementBlock as d, createElementVNode as a, normalizeStyle as s, unref as l, renderSlot as v, toDisplayString as x, createBlock as u, resolveDynamicComponent as i } from "vue";
const y = (e) => e.replace(/(A-Z)g/, "-$1").toLocaleLowerCase(), g = { class: "trend" }, m = { key: 1 }, S = { class: "icon" }, w = /* @__PURE__ */ p({
  __name: "index",
  props: {
    type: {
      type: String,
      default: "up"
    },
    text: {
      type: String,
      default: ""
    },
    upIconColor: {
      type: String,
      default: "#f5222d"
    },
    downIconColor: {
      type: String,
      default: "#52c41a"
    },
    reveseColor: {
      type: Boolean,
      default: !1
    },
    upTextColor: {
      type: String,
      default: "#000"
    },
    downTextColor: {
      type: String,
      default: "#000"
    },
    upIcon: {
      type: String,
      default: "ArrowUp"
    },
    downIcon: {
      type: String,
      default: "ArrowDown"
    }
  },
  setup(e) {
    const t = e, o = f(), r = C(() => t.type === "up" ? t.upTextColor : t.downTextColor);
    return (c, k) => (n(), d("div", g, [
      a("div", {
        class: "text",
        style: s({ color: l(r) })
      }, [
        l(o).default ? v(c.$slots, "default", { key: 0 }, void 0, !0) : (n(), d("div", m, x(e.text), 1))
      ], 4),
      a("div", S, [
        e.type === "up" ? (n(), u(i(`el-icon-${l(y)(e.upIcon)}`), {
          key: 0,
          style: s({ color: e.reveseColor ? "#52c41a" : e.upIconColor })
        }, null, 8, ["style"])) : (n(), u(i(`el-icon-${l(y)(e.downIcon)}`), {
          key: 1,
          style: s({ color: e.reveseColor ? "#f5222d" : e.downIconColor })
        }, null, 8, ["style"]))
      ])
    ]));
  }
});
const _ = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [r, c] of t)
    o[r] = c;
  return o;
}, I = /* @__PURE__ */ _(w, [["__scopeId", "data-v-19f026e4"]]), h = {
  install(e) {
    e.component("m-trend", I);
  }
};
export {
  h as default
};
