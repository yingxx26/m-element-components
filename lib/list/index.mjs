import { defineComponent as L, resolveComponent as a, openBlock as t, createElementBlock as o, createVNode as u, withCtx as i, Fragment as p, renderList as v, createBlock as y, createCommentVNode as s, createElementVNode as m, toDisplayString as l, createTextVNode as N, normalizeClass as V, resolveDynamicComponent as z, unref as A } from "vue";
const B = (n) => n.replace(/(A-Z)g/, "-$1").toLocaleLowerCase(), w = { class: "list-tabs-item" }, D = {
  key: 0,
  class: "avatar"
}, E = { class: "content" }, T = {
  key: 0,
  class: "title"
}, $ = {
  key: 1,
  class: "time"
}, q = {
  key: 2,
  class: "time"
}, F = { class: "actions" }, I = {
  key: 0,
  class: "a-icon"
}, O = {
  key: 1,
  class: "a-text"
}, S = /* @__PURE__ */ L({
  __name: "index",
  props: {
    list: {
      type: Array,
      required: !0
    },
    actions: {
      type: Array,
      default: () => []
    }
  },
  setup(n) {
    const c = n;
    return console.log(c.list), console.log(c.actions), (_, g) => {
      const d = a("el-avatar"), k = a("el-tag"), x = a("el-scrollbar"), f = a("el-tab-pane"), b = a("el-tabs");
      return t(), o("div", w, [
        u(b, null, {
          default: i(() => [
            (t(!0), o(p, null, v(n.list, (h, C) => (t(), y(f, {
              key: C,
              label: h.title
            }, {
              default: i(() => [
                u(x, { "max-height": "400px" }, {
                  default: i(() => [
                    (t(!0), o(p, null, v(h.content, (e, r) => (t(), o("div", {
                      class: "container",
                      key: r
                    }, [
                      e.avatar ? (t(), o("div", D, [
                        u(d, {
                          size: "small",
                          src: e.avatar
                        }, null, 8, ["src"])
                      ])) : s("", !0),
                      m("div", E, [
                        e.title ? (t(), o("div", T, [
                          m("div", null, l(e.title), 1),
                          e.tag ? (t(), y(k, {
                            key: 0,
                            size: "small",
                            type: e.tagType
                          }, {
                            default: i(() => [
                              N(l(e.tag), 1)
                            ]),
                            _: 2
                          }, 1032, ["type"])) : s("", !0)
                        ])) : s("", !0),
                        e.desc ? (t(), o("div", $, l(e.desc), 1)) : s("", !0),
                        e.time ? (t(), o("div", q, l(e.time), 1)) : s("", !0)
                      ])
                    ]))), 128)),
                    m("div", F, [
                      (t(!0), o(p, null, v(n.actions, (e, r) => (t(), o("div", {
                        class: V(["a-item", { border: r !== n.actions.length }]),
                        key: r
                      }, [
                        e.icon ? (t(), o("div", I, [
                          (t(), y(z(`el-icon-${A(B)(e.icon)}`)))
                        ])) : s("", !0),
                        e.text ? (t(), o("div", O, l(e.text), 1)) : s("", !0)
                      ], 2))), 128))
                    ])
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["label"]))), 128))
          ]),
          _: 1
        })
      ]);
    };
  }
});
const Z = (n, c) => {
  const _ = n.__vccOpts || n;
  for (const [g, d] of c)
    _[g] = d;
  return _;
}, j = /* @__PURE__ */ Z(S, [["__scopeId", "data-v-190e072e"]]), H = {
  install(n) {
    n.component("m-list", j);
  }
};
export {
  H as default
};
