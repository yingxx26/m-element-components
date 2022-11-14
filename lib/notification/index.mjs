import { defineComponent as i, resolveComponent as o, openBlock as n, createElementBlock as p, createVNode as a, withCtx as t, renderSlot as s, createBlock as u, resolveDynamicComponent as m, unref as d } from "vue";
const f = (e) => e.replace(/(A-Z)g/, "-$1").toLocaleLowerCase(), v = /* @__PURE__ */ i({
  __name: "index",
  props: {
    icon: {
      type: String,
      default: "Sunset"
    },
    value: {
      type: [String, Number],
      default: ""
    },
    isDot: {
      type: Boolean,
      default: !1
    },
    max: {
      type: Number,
      default: 99
    }
  },
  setup(e) {
    return (l, x) => {
      const c = o("el-badge"), r = o("el-popover");
      return n(), p("div", null, [
        a(r, {
          "popper-class": "notification-popper-class",
          placement: "top",
          width: 300,
          trigger: "click"
        }, {
          default: t(() => [
            s(l.$slots, "default")
          ]),
          reference: t(() => [
            a(c, {
              value: e.value,
              max: e.max,
              "is-dot": e.isDot
            }, {
              default: t(() => [
                (n(), u(m(`el-icon-${d(f)(e.icon)}`)))
              ]),
              _: 1
            }, 8, ["value", "max", "is-dot"])
          ]),
          _: 3
        })
      ]);
    };
  }
}), _ = {
  install(e) {
    e.component("m-notification", v);
  }
};
export {
  _ as default
};
