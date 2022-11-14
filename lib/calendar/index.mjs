import { defineComponent as Qa, ref as ei, watch as ti, onMounted as ri, openBlock as ni, createElementBlock as ai } from "vue";
var At = function(t, e) {
  return At = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n)
      Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
  }, At(t, e);
};
function R(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  At(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var h = function() {
  return h = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, h.apply(this, arguments);
};
function N(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = e.length, i; n < a; n++)
      (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return t.concat(i || Array.prototype.slice.call(e));
}
var lt, T, Dn, we, Sr, Cn, Xe = {}, Rn = [], ii = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function K(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}
function wn(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ee(t, e, r) {
  var n, a, i, o = {};
  for (i in e)
    i == "key" ? n = e[i] : i == "ref" ? a = e[i] : o[i] = e[i];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? lt.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null)
    for (i in t.defaultProps)
      o[i] === void 0 && (o[i] = t.defaultProps[i]);
  return qe(t, o, n, a, null);
}
function qe(t, e, r, n, a) {
  var i = { type: t, props: e, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: a == null ? ++Dn : a };
  return a == null && T.vnode != null && T.vnode(i), i;
}
function oi() {
  return { current: null };
}
function se(t) {
  return t.children;
}
function q(t, e) {
  this.props = t, this.context = e;
}
function Pe(t, e) {
  if (e == null)
    return t.__ ? Pe(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var r; e < t.__k.length; e++)
    if ((r = t.__k[e]) != null && r.__e != null)
      return r.__e;
  return typeof t.type == "function" ? Pe(t) : null;
}
function Tn(t) {
  var e, r;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((r = t.__k[e]) != null && r.__e != null) {
        t.__e = t.__c.base = r.__e;
        break;
      }
    return Tn(t);
  }
}
function Nt(t) {
  (!t.__d && (t.__d = !0) && we.push(t) && !$e.__r++ || Sr !== T.debounceRendering) && ((Sr = T.debounceRendering) || setTimeout)($e);
}
function $e() {
  for (var t; $e.__r = we.length; )
    t = we.sort(function(e, r) {
      return e.__v.__b - r.__v.__b;
    }), we = [], t.some(function(e) {
      var r, n, a, i, o, s;
      e.__d && (o = (i = (r = e).__v).__e, (s = r.__P) && (n = [], (a = K({}, i)).__v = i.__v + 1, jt(s, i, a, r.__n, s.ownerSVGElement !== void 0, i.__h != null ? [o] : null, n, o == null ? Pe(i) : o, i.__h), In(n, i), i.__e != o && Tn(i)));
    });
}
function _n(t, e, r, n, a, i, o, s, l, c) {
  var u, f, v, d, p, E, S, g = n && n.__k || Rn, b = g.length;
  for (r.__k = [], u = 0; u < e.length; u++)
    if ((d = r.__k[u] = (d = e[u]) == null || typeof d == "boolean" ? null : typeof d == "string" || typeof d == "number" || typeof d == "bigint" ? qe(null, d, null, null, d) : Array.isArray(d) ? qe(se, { children: d }, null, null, null) : d.__b > 0 ? qe(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d) != null) {
      if (d.__ = r, d.__b = r.__b + 1, (v = g[u]) === null || v && d.key == v.key && d.type === v.type)
        g[u] = void 0;
      else
        for (f = 0; f < b; f++) {
          if ((v = g[f]) && d.key == v.key && d.type === v.type) {
            g[f] = void 0;
            break;
          }
          v = null;
        }
      jt(t, d, v = v || Xe, a, i, o, s, l, c), p = d.__e, (f = d.ref) && v.ref != f && (S || (S = []), v.ref && S.push(v.ref, null, d), S.push(f, d.__c || p, d)), p != null ? (E == null && (E = p), typeof d.type == "function" && d.__k === v.__k ? d.__d = l = Mn(d, l, t) : l = kn(t, d, v, g, p, l), typeof r.type == "function" && (r.__d = l)) : l && v.__e == l && l.parentNode != t && (l = Pe(v));
    }
  for (r.__e = E, u = b; u--; )
    g[u] != null && Hn(g[u], g[u]);
  if (S)
    for (u = 0; u < S.length; u++)
      Pn(S[u], S[++u], S[++u]);
}
function Mn(t, e, r) {
  for (var n, a = t.__k, i = 0; a && i < a.length; i++)
    (n = a[i]) && (n.__ = t, e = typeof n.type == "function" ? Mn(n, e, r) : kn(r, n, n, a, n.__e, e));
  return e;
}
function Ke(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Array.isArray(t) ? t.some(function(r) {
    Ke(r, e);
  }) : e.push(t)), e;
}
function kn(t, e, r, n, a, i) {
  var o, s, l;
  if (e.__d !== void 0)
    o = e.__d, e.__d = void 0;
  else if (r == null || a != i || a.parentNode == null)
    e:
      if (i == null || i.parentNode !== t)
        t.appendChild(a), o = null;
      else {
        for (s = i, l = 0; (s = s.nextSibling) && l < n.length; l += 2)
          if (s == a)
            break e;
        t.insertBefore(a, i), o = i;
      }
  return o !== void 0 ? o : a.nextSibling;
}
function si(t, e, r, n, a) {
  var i;
  for (i in r)
    i === "children" || i === "key" || i in e || Je(t, i, null, r[i], n);
  for (i in e)
    a && typeof e[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || r[i] === e[i] || Je(t, i, e[i], r[i], n);
}
function br(t, e, r) {
  e[0] === "-" ? t.setProperty(e, r) : t[e] = r == null ? "" : typeof r != "number" || ii.test(e) ? r : r + "px";
}
function Je(t, e, r, n, a) {
  var i;
  e:
    if (e === "style")
      if (typeof r == "string")
        t.style.cssText = r;
      else {
        if (typeof n == "string" && (t.style.cssText = n = ""), n)
          for (e in n)
            r && e in r || br(t.style, e, "");
        if (r)
          for (e in r)
            n && r[e] === n[e] || br(t.style, e, r[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      i = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = r, r ? n || t.addEventListener(e, i ? Cr : Dr, i) : t.removeEventListener(e, i ? Cr : Dr, i);
    else if (e !== "dangerouslySetInnerHTML") {
      if (a)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = r == null ? "" : r;
          break e;
        } catch {
        }
      typeof r == "function" || (r == null || r === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, r));
    }
}
function Dr(t) {
  this.l[t.type + !1](T.event ? T.event(t) : t);
}
function Cr(t) {
  this.l[t.type + !0](T.event ? T.event(t) : t);
}
function jt(t, e, r, n, a, i, o, s, l) {
  var c, u, f, v, d, p, E, S, g, b, C, D, I, _, P, w = e.type;
  if (e.constructor !== void 0)
    return null;
  r.__h != null && (l = r.__h, s = e.__e = r.__e, e.__h = null, i = [s]), (c = T.__b) && c(e);
  try {
    e:
      if (typeof w == "function") {
        if (S = e.props, g = (c = w.contextType) && n[c.__c], b = c ? g ? g.props.value : c.__ : n, r.__c ? E = (u = e.__c = r.__c).__ = u.__E : ("prototype" in w && w.prototype.render ? e.__c = u = new w(S, b) : (e.__c = u = new q(S, b), u.constructor = w, u.render = ui), g && g.sub(u), u.props = S, u.state || (u.state = {}), u.context = b, u.__n = n, f = u.__d = !0, u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), w.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = K({}, u.__s)), K(u.__s, w.getDerivedStateFromProps(S, u.__s))), v = u.props, d = u.state, f)
          w.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (w.getDerivedStateFromProps == null && S !== v && u.componentWillReceiveProps != null && u.componentWillReceiveProps(S, b), !u.__e && u.shouldComponentUpdate != null && u.shouldComponentUpdate(S, u.__s, b) === !1 || e.__v === r.__v) {
            for (u.props = S, u.state = u.__s, e.__v !== r.__v && (u.__d = !1), u.__v = e, e.__e = r.__e, e.__k = r.__k, e.__k.forEach(function(A) {
              A && (A.__ = e);
            }), C = 0; C < u._sb.length; C++)
              u.__h.push(u._sb[C]);
            u._sb = [], u.__h.length && o.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(S, u.__s, b), u.componentDidUpdate != null && u.__h.push(function() {
            u.componentDidUpdate(v, d, p);
          });
        }
        if (u.context = b, u.props = S, u.__v = e, u.__P = t, D = T.__r, I = 0, "prototype" in w && w.prototype.render) {
          for (u.state = u.__s, u.__d = !1, D && D(e), c = u.render(u.props, u.state, u.context), _ = 0; _ < u._sb.length; _++)
            u.__h.push(u._sb[_]);
          u._sb = [];
        } else
          do
            u.__d = !1, D && D(e), c = u.render(u.props, u.state, u.context), u.state = u.__s;
          while (u.__d && ++I < 25);
        u.state = u.__s, u.getChildContext != null && (n = K(K({}, n), u.getChildContext())), f || u.getSnapshotBeforeUpdate == null || (p = u.getSnapshotBeforeUpdate(v, d)), P = c != null && c.type === se && c.key == null ? c.props.children : c, _n(t, Array.isArray(P) ? P : [P], e, r, n, a, i, o, s, l), u.base = e.__e, e.__h = null, u.__h.length && o.push(u), E && (u.__E = u.__ = null), u.__e = !1;
      } else
        i == null && e.__v === r.__v ? (e.__k = r.__k, e.__e = r.__e) : e.__e = li(r.__e, e, r, n, a, i, o, l);
    (c = T.diffed) && c(e);
  } catch (A) {
    e.__v = null, (l || i != null) && (e.__e = s, e.__h = !!l, i[i.indexOf(s)] = null), T.__e(A, e, r);
  }
}
function In(t, e) {
  T.__c && T.__c(e, t), t.some(function(r) {
    try {
      t = r.__h, r.__h = [], t.some(function(n) {
        n.call(r);
      });
    } catch (n) {
      T.__e(n, r.__v);
    }
  });
}
function li(t, e, r, n, a, i, o, s) {
  var l, c, u, f = r.props, v = e.props, d = e.type, p = 0;
  if (d === "svg" && (a = !0), i != null) {
    for (; p < i.length; p++)
      if ((l = i[p]) && "setAttribute" in l == !!d && (d ? l.localName === d : l.nodeType === 3)) {
        t = l, i[p] = null;
        break;
      }
  }
  if (t == null) {
    if (d === null)
      return document.createTextNode(v);
    t = a ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, v.is && v), i = null, s = !1;
  }
  if (d === null)
    f === v || s && t.data === v || (t.data = v);
  else {
    if (i = i && lt.call(t.childNodes), c = (f = r.props || Xe).dangerouslySetInnerHTML, u = v.dangerouslySetInnerHTML, !s) {
      if (i != null)
        for (f = {}, p = 0; p < t.attributes.length; p++)
          f[t.attributes[p].name] = t.attributes[p].value;
      (u || c) && (u && (c && u.__html == c.__html || u.__html === t.innerHTML) || (t.innerHTML = u && u.__html || ""));
    }
    if (si(t, v, f, a, s), u)
      e.__k = [];
    else if (p = e.props.children, _n(t, Array.isArray(p) ? p : [p], e, r, n, a && d !== "foreignObject", i, o, i ? i[0] : r.__k && Pe(r, 0), s), i != null)
      for (p = i.length; p--; )
        i[p] != null && wn(i[p]);
    s || ("value" in v && (p = v.value) !== void 0 && (p !== t.value || d === "progress" && !p || d === "option" && p !== f.value) && Je(t, "value", p, f.value, !1), "checked" in v && (p = v.checked) !== void 0 && p !== t.checked && Je(t, "checked", p, f.checked, !1));
  }
  return t;
}
function Pn(t, e, r) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (n) {
    T.__e(n, r);
  }
}
function Hn(t, e, r) {
  var n, a;
  if (T.unmount && T.unmount(t), (n = t.ref) && (n.current && n.current !== t.__e || Pn(n, null, e)), (n = t.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (i) {
        T.__e(i, e);
      }
    n.base = n.__P = null, t.__c = void 0;
  }
  if (n = t.__k)
    for (a = 0; a < n.length; a++)
      n[a] && Hn(n[a], e, r || typeof t.type != "function");
  r || t.__e == null || wn(t.__e), t.__ = t.__e = t.__d = void 0;
}
function ui(t, e, r) {
  return this.constructor(t, r);
}
function He(t, e, r) {
  var n, a, i;
  T.__ && T.__(t, e), a = (n = typeof r == "function") ? null : r && r.__k || e.__k, i = [], jt(e, t = (!n && r || e).__k = ee(se, null, [t]), a || Xe, Xe, e.ownerSVGElement !== void 0, !n && r ? [r] : a ? null : e.firstChild ? lt.call(e.childNodes) : null, i, !n && r ? r : a ? a.__e : e.firstChild, n), In(i, t);
}
function ci(t, e) {
  var r = { __c: e = "__cC" + Cn++, __: t, Consumer: function(n, a) {
    return n.children(a);
  }, Provider: function(n) {
    var a, i;
    return this.getChildContext || (a = [], (i = {})[e] = this, this.getChildContext = function() {
      return i;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value !== o.value && a.some(Nt);
    }, this.sub = function(o) {
      a.push(o);
      var s = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        a.splice(a.indexOf(o), 1), s && s.call(o);
      };
    }), n.children;
  } };
  return r.Provider.__ = r.Consumer.contextType = r;
}
lt = Rn.slice, T = { __e: function(t, e, r, n) {
  for (var a, i, o; e = e.__; )
    if ((a = e.__c) && !a.__)
      try {
        if ((i = a.constructor) && i.getDerivedStateFromError != null && (a.setState(i.getDerivedStateFromError(t)), o = a.__d), a.componentDidCatch != null && (a.componentDidCatch(t, n || {}), o = a.__d), o)
          return a.__E = a;
      } catch (s) {
        t = s;
      }
  throw t;
} }, Dn = 0, q.prototype.setState = function(t, e) {
  var r;
  r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = K({}, this.state), typeof t == "function" && (t = t(K({}, r), this.props)), t && K(r, t), t != null && this.__v && (e && this._sb.push(e), Nt(this));
}, q.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Nt(this));
}, q.prototype.render = se, we = [], $e.__r = 0, Cn = 0;
var j, yt, Rr, xn = [], Et = [], wr = T.__b, Tr = T.__r, _r = T.diffed, Mr = T.__c, kr = T.unmount;
function fi() {
  for (var t; t = xn.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(Ye), t.__H.__h.forEach(Ot), t.__H.__h = [];
      } catch (e) {
        t.__H.__h = [], T.__e(e, t.__v);
      }
}
T.__b = function(t) {
  typeof t.type != "function" || t.__m || t.__ === null ? t.__m || (t.__m = t.__ && t.__.__m ? t.__.__m : "") : t.__m = (t.__ && t.__.__m ? t.__.__m : "") + (t.__ && t.__.__k ? t.__.__k.indexOf(t) : 0), j = null, wr && wr(t);
}, T.__r = function(t) {
  Tr && Tr(t);
  var e = (j = t.__c).__H;
  e && (yt === j ? (e.__h = [], j.__h = [], e.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.__V = Et, r.__N = r.i = void 0;
  })) : (e.__h.forEach(Ye), e.__h.forEach(Ot), e.__h = [])), yt = j;
}, T.diffed = function(t) {
  _r && _r(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (xn.push(e) !== 1 && Rr === T.requestAnimationFrame || ((Rr = T.requestAnimationFrame) || di)(fi)), e.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.__V !== Et && (r.__ = r.__V), r.i = void 0, r.__V = Et;
  })), yt = j = null;
}, T.__c = function(t, e) {
  e.some(function(r) {
    try {
      r.__h.forEach(Ye), r.__h = r.__h.filter(function(n) {
        return !n.__ || Ot(n);
      });
    } catch (n) {
      e.some(function(a) {
        a.__h && (a.__h = []);
      }), e = [], T.__e(n, r.__v);
    }
  }), Mr && Mr(t, e);
}, T.unmount = function(t) {
  kr && kr(t);
  var e, r = t.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      Ye(n);
    } catch (a) {
      e = a;
    }
  }), r.__H = void 0, e && T.__e(e, r.__v));
};
var Ir = typeof requestAnimationFrame == "function";
function di(t) {
  var e, r = function() {
    clearTimeout(n), Ir && cancelAnimationFrame(e), setTimeout(t);
  }, n = setTimeout(r, 100);
  Ir && (e = requestAnimationFrame(r));
}
function Ye(t) {
  var e = j, r = t.__c;
  typeof r == "function" && (t.__c = void 0, r()), j = e;
}
function Ot(t) {
  var e = j;
  t.__c = t.__(), j = e;
}
function vi(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}
function Pr(t, e) {
  for (var r in t)
    if (r !== "__source" && !(r in e))
      return !0;
  for (var n in e)
    if (n !== "__source" && t[n] !== e[n])
      return !0;
  return !1;
}
function Hr(t) {
  this.props = t;
}
(Hr.prototype = new q()).isPureReactComponent = !0, Hr.prototype.shouldComponentUpdate = function(t, e) {
  return Pr(this.props, t) || Pr(this.state, e);
};
var xr = T.__b;
T.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), xr && xr(t);
};
var pi = T.__e;
T.__e = function(t, e, r, n) {
  if (t.then) {
    for (var a, i = e; i = i.__; )
      if ((a = i.__c) && a.__c)
        return e.__e == null && (e.__e = r.__e, e.__k = r.__k), a.__c(t, e);
  }
  pi(t, e, r, n);
};
var Ar = T.unmount;
function An(t, e, r) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), t.__c.__H = null), (t = vi({}, t)).__c != null && (t.__c.__P === r && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function(n) {
    return An(n, e, r);
  })), t;
}
function Nn(t, e, r) {
  return t && (t.__v = null, t.__k = t.__k && t.__k.map(function(n) {
    return Nn(n, e, r);
  }), t.__c && t.__c.__P === e && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = r)), t;
}
function St() {
  this.__u = 0, this.t = null, this.__b = null;
}
function On(t) {
  var e = t.__.__c;
  return e && e.__a && e.__a(t);
}
function We() {
  this.u = null, this.o = null;
}
T.unmount = function(t) {
  var e = t.__c;
  e && e.__R && e.__R(), e && t.__h === !0 && (t.type = null), Ar && Ar(t);
}, (St.prototype = new q()).__c = function(t, e) {
  var r = e.__c, n = this;
  n.t == null && (n.t = []), n.t.push(r);
  var a = On(n.__v), i = !1, o = function() {
    i || (i = !0, r.__R = null, a ? a(s) : s());
  };
  r.__R = o;
  var s = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var c = n.state.__a;
        n.__v.__k[0] = Nn(c, c.__c.__P, c.__c.__O);
      }
      var u;
      for (n.setState({ __a: n.__b = null }); u = n.t.pop(); )
        u.forceUpdate();
    }
  }, l = e.__h === !0;
  n.__u++ || l || n.setState({ __a: n.__b = n.__v.__k[0] }), t.then(o, o);
}, St.prototype.componentWillUnmount = function() {
  this.t = [];
}, St.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = An(this.__b, r, n.__O = n.__P);
    }
    this.__b = null;
  }
  var a = e.__a && ee(se, null, t.fallback);
  return a && (a.__h = null), [ee(se, null, e.__a ? null : t.children), a];
};
var Nr = function(t, e, r) {
  if (++r[1] === r[0] && t.o.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size))
    for (r = t.u; r; ) {
      for (; r.length > 3; )
        r.pop()();
      if (r[1] < r[0])
        break;
      t.u = r = r[2];
    }
};
function hi(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function gi(t) {
  var e = this, r = t.i;
  e.componentWillUnmount = function() {
    He(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== r && e.componentWillUnmount(), t.__v ? (e.l || (e.i = r, e.l = { nodeType: 1, parentNode: r, childNodes: [], appendChild: function(n) {
    this.childNodes.push(n), e.i.appendChild(n);
  }, insertBefore: function(n, a) {
    this.childNodes.push(n), e.i.appendChild(n);
  }, removeChild: function(n) {
    this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), e.i.removeChild(n);
  } }), He(ee(hi, { context: e.context }, t.__v), e.l)) : e.l && e.componentWillUnmount();
}
function mi(t, e) {
  var r = ee(gi, { __v: t, i: e });
  return r.containerInfo = e, r;
}
(We.prototype = new q()).__a = function(t) {
  var e = this, r = On(e.__v), n = e.o.get(t);
  return n[0]++, function(a) {
    var i = function() {
      e.props.revealOrder ? (n.push(a), Nr(e, t, n)) : a();
    };
    r ? r(i) : i();
  };
}, We.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = Ke(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var r = e.length; r--; )
    this.o.set(e[r], this.u = [1, 0, this.u]);
  return t.children;
}, We.prototype.componentDidUpdate = We.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(e, r) {
    Nr(t, r, e);
  });
};
var yi = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Ei = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Si = typeof document < "u", bi = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(t);
};
q.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(q.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var Or = T.event;
function Di() {
}
function Ci() {
  return this.cancelBubble;
}
function Ri() {
  return this.defaultPrevented;
}
T.event = function(t) {
  return Or && (t = Or(t)), t.persist = Di, t.isPropagationStopped = Ci, t.isDefaultPrevented = Ri, t.nativeEvent = t;
};
var Lr = { configurable: !0, get: function() {
  return this.class;
} }, Ur = T.vnode;
T.vnode = function(t) {
  var e = t.type, r = t.props, n = r;
  if (typeof e == "string") {
    var a = e.indexOf("-") === -1;
    for (var i in n = {}, r) {
      var o = r[i];
      Si && i === "children" && e === "noscript" || i === "value" && "defaultValue" in r && o == null || (i === "defaultValue" && "value" in r && r.value == null ? i = "value" : i === "download" && o === !0 ? o = "" : /ondoubleclick/i.test(i) ? i = "ondblclick" : /^onchange(textarea|input)/i.test(i + e) && !bi(r.type) ? i = "oninput" : /^onfocus$/i.test(i) ? i = "onfocusin" : /^onblur$/i.test(i) ? i = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i) ? i = i.toLowerCase() : a && Ei.test(i) ? i = i.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : o === null && (o = void 0), /^oninput$/i.test(i) && (i = i.toLowerCase(), n[i] && (i = "oninputCapture")), n[i] = o);
    }
    e == "select" && n.multiple && Array.isArray(n.value) && (n.value = Ke(r.children).forEach(function(s) {
      s.props.selected = n.value.indexOf(s.props.value) != -1;
    })), e == "select" && n.defaultValue != null && (n.value = Ke(r.children).forEach(function(s) {
      s.props.selected = n.multiple ? n.defaultValue.indexOf(s.props.value) != -1 : n.defaultValue == s.props.value;
    })), t.props = n, r.class != r.className && (Lr.enumerable = "className" in r, r.className != null && (n.class = r.className), Object.defineProperty(n, "className", Lr));
  }
  t.$$typeof = yi, Ur && Ur(t);
};
var Vr = T.__r;
T.__r = function(t) {
  Vr && Vr(t), t.__c;
};
var Wr = typeof globalThis < "u" ? globalThis : window;
Wr.FullCalendarVDom ? console.warn("FullCalendar VDOM already loaded") : Wr.FullCalendarVDom = {
  Component: q,
  createElement: ee,
  render: He,
  createRef: oi,
  Fragment: se,
  createContext: _i,
  createPortal: mi,
  flushSync: wi,
  unmountComponentAtNode: Mi
};
function wi(t) {
  t();
  var e = T.debounceRendering, r = [];
  function n(a) {
    r.push(a);
  }
  for (T.debounceRendering = n, He(ee(Ti, {}), document.createElement("div")); r.length; )
    r.shift()();
  T.debounceRendering = e;
}
var Ti = function(t) {
  R(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.render = function() {
    return ee("div", {});
  }, e.prototype.componentDidMount = function() {
    this.setState({});
  }, e;
}(q);
function _i(t) {
  var e = ci(t), r = e.Provider;
  return e.Provider = function() {
    var n = this, a = !this.getChildContext, i = r.apply(this, arguments);
    if (a) {
      var o = [];
      this.shouldComponentUpdate = function(s) {
        n.props.value !== s.value && o.forEach(function(l) {
          l.context = s.value, l.forceUpdate();
        });
      }, this.sub = function(s) {
        o.push(s);
        var l = s.componentWillUnmount;
        s.componentWillUnmount = function() {
          o.splice(o.indexOf(s), 1), l && l.call(s);
        };
      };
    }
    return i;
  }, e;
}
function Mi(t) {
  He(null, t);
}
if (typeof FullCalendarVDom > "u")
  throw new Error("Please import the top-level fullcalendar lib before attempting to import a plugin.");
var Zt = FullCalendarVDom.Component, m = FullCalendarVDom.createElement, ki = FullCalendarVDom.render, G = FullCalendarVDom.createRef, B = FullCalendarVDom.Fragment, Ln = FullCalendarVDom.createContext, Ii = FullCalendarVDom.createPortal, Br = FullCalendarVDom.flushSync, Pi = FullCalendarVDom.unmountComponentAtNode;
/*!
FullCalendar v5.11.3
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var ve = function() {
  function t(e, r) {
    this.context = e, this.internalEventSource = r;
  }
  return t.prototype.remove = function() {
    this.context.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: this.internalEventSource.sourceId
    });
  }, t.prototype.refetch = function() {
    this.context.dispatch({
      type: "FETCH_EVENT_SOURCES",
      sourceIds: [this.internalEventSource.sourceId],
      isRefetch: !0
    });
  }, Object.defineProperty(t.prototype, "id", {
    get: function() {
      return this.internalEventSource.publicId;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "url", {
    get: function() {
      return this.internalEventSource.meta.url;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "format", {
    get: function() {
      return this.internalEventSource.meta.format;
    },
    enumerable: !1,
    configurable: !0
  }), t;
}();
function Xt(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function V(t, e) {
  if (t.closest)
    return t.closest(e);
  if (!document.documentElement.contains(t))
    return null;
  do {
    if (Hi(t, e))
      return t;
    t = t.parentElement || t.parentNode;
  } while (t !== null && t.nodeType === 1);
  return null;
}
function Hi(t, e) {
  var r = t.matches || t.matchesSelector || t.msMatchesSelector;
  return r.call(t, e);
}
function xi(t, e) {
  for (var r = t instanceof HTMLElement ? [t] : t, n = [], a = 0; a < r.length; a += 1)
    for (var i = r[a].querySelectorAll(e), o = 0; o < i.length; o += 1)
      n.push(i[o]);
  return n;
}
var Ai = /(top|left|right|bottom|width|height)$/i;
function Te(t, e) {
  for (var r in e)
    Un(t, r, e[r]);
}
function Un(t, e, r) {
  r == null ? t.style[e] = "" : typeof r == "number" && Ai.test(e) ? t.style[e] = r + "px" : t.style[e] = r;
}
function Vn(t) {
  var e, r;
  return (r = (e = t.composedPath) === null || e === void 0 ? void 0 : e.call(t)[0]) !== null && r !== void 0 ? r : t.target;
}
function Wn(t) {
  return t.getRootNode ? t.getRootNode() : document;
}
var Fr = 0;
function ut() {
  return Fr += 1, "fc-dom-" + Fr;
}
function ct(t) {
  t.preventDefault();
}
function Ni(t, e) {
  return function(r) {
    var n = V(r.target, t);
    n && e.call(n, r, n);
  };
}
function Bn(t, e, r, n) {
  var a = Ni(r, n);
  return t.addEventListener(e, a), function() {
    t.removeEventListener(e, a);
  };
}
function Oi(t, e, r, n) {
  var a;
  return Bn(t, "mouseover", e, function(i, o) {
    if (o !== a) {
      a = o, r(i, o);
      var s = function(l) {
        a = null, n(l, o), o.removeEventListener("mouseleave", s);
      };
      o.addEventListener("mouseleave", s);
    }
  });
}
var zr = [
  "webkitTransitionEnd",
  "otransitionend",
  "oTransitionEnd",
  "msTransitionEnd",
  "transitionend"
];
function Li(t, e) {
  var r = function(n) {
    e(n), zr.forEach(function(a) {
      t.removeEventListener(a, r);
    });
  };
  zr.forEach(function(n) {
    t.addEventListener(n, r);
  });
}
function Fn(t) {
  return h({ onClick: t }, zn(t));
}
function zn(t) {
  return {
    tabIndex: 0,
    onKeyDown: function(e) {
      (e.key === "Enter" || e.key === " ") && (t(e), e.preventDefault());
    }
  };
}
var Gr = 0;
function Se() {
  return Gr += 1, String(Gr);
}
function $t() {
  document.body.classList.add("fc-not-allowed");
}
function Kt() {
  document.body.classList.remove("fc-not-allowed");
}
function Ui(t) {
  t.classList.add("fc-unselectable"), t.addEventListener("selectstart", ct);
}
function Vi(t) {
  t.classList.remove("fc-unselectable"), t.removeEventListener("selectstart", ct);
}
function Wi(t) {
  t.addEventListener("contextmenu", ct);
}
function Bi(t) {
  t.removeEventListener("contextmenu", ct);
}
function Fi(t) {
  var e = [], r = [], n, a;
  for (typeof t == "string" ? r = t.split(/\s*,\s*/) : typeof t == "function" ? r = [t] : Array.isArray(t) && (r = t), n = 0; n < r.length; n += 1)
    a = r[n], typeof a == "string" ? e.push(a.charAt(0) === "-" ? { field: a.substring(1), order: -1 } : { field: a, order: 1 }) : typeof a == "function" && e.push({ func: a });
  return e;
}
function zi(t, e, r) {
  var n, a;
  for (n = 0; n < r.length; n += 1)
    if (a = Gi(t, e, r[n]), a)
      return a;
  return 0;
}
function Gi(t, e, r) {
  return r.func ? r.func(t, e) : qi(t[r.field], e[r.field]) * (r.order || 1);
}
function qi(t, e) {
  return !t && !e ? 0 : e == null ? -1 : t == null ? 1 : typeof t == "string" || typeof e == "string" ? String(t).localeCompare(String(e)) : t - e;
}
function bt(t, e) {
  var r = String(t);
  return "000".substr(0, e - r.length) + r;
}
function _e(t, e, r) {
  return typeof t == "function" ? t.apply(void 0, e) : typeof t == "string" ? e.reduce(function(n, a, i) {
    return n.replace("$" + i, a || "");
  }, t) : r;
}
function Yi(t, e) {
  return t - e;
}
function Dt(t) {
  return t % 1 === 0;
}
function ji(t) {
  var e = t.querySelector(".fc-scrollgrid-shrink-frame"), r = t.querySelector(".fc-scrollgrid-shrink-cushion");
  if (!e)
    throw new Error("needs fc-scrollgrid-shrink-frame className");
  if (!r)
    throw new Error("needs fc-scrollgrid-shrink-cushion className");
  return t.getBoundingClientRect().width - e.getBoundingClientRect().width + r.getBoundingClientRect().width;
}
var Zi = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function qr(t, e) {
  var r = J(t);
  return r[2] += e * 7, F(r);
}
function W(t, e) {
  var r = J(t);
  return r[2] += e, F(r);
}
function le(t, e) {
  var r = J(t);
  return r[6] += e, F(r);
}
function Xi(t, e) {
  return be(t, e) / 7;
}
function be(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60 * 24);
}
function $i(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60);
}
function Ki(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60);
}
function Ji(t, e) {
  return (e.valueOf() - t.valueOf()) / 1e3;
}
function Qi(t, e) {
  var r = H(t), n = H(e);
  return {
    years: 0,
    months: 0,
    days: Math.round(be(r, n)),
    milliseconds: e.valueOf() - n.valueOf() - (t.valueOf() - r.valueOf())
  };
}
function eo(t, e) {
  var r = Qe(t, e);
  return r !== null && r % 7 === 0 ? r / 7 : null;
}
function Qe(t, e) {
  return Q(t) === Q(e) ? Math.round(be(t, e)) : null;
}
function H(t) {
  return F([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ]);
}
function to(t) {
  return F([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours()
  ]);
}
function ro(t) {
  return F([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes()
  ]);
}
function no(t) {
  return F([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes(),
    t.getUTCSeconds()
  ]);
}
function ao(t, e, r) {
  var n = t.getUTCFullYear(), a = Ct(t, n, e, r);
  if (a < 1)
    return Ct(t, n - 1, e, r);
  var i = Ct(t, n + 1, e, r);
  return i >= 1 ? Math.min(a, i) : a;
}
function Ct(t, e, r, n) {
  var a = F([e, 0, 1 + io(e, r, n)]), i = H(t), o = Math.round(be(a, i));
  return Math.floor(o / 7) + 1;
}
function io(t, e, r) {
  var n = 7 + e - r, a = (7 + F([t, 0, n]).getUTCDay() - e) % 7;
  return -a + n - 1;
}
function Yr(t) {
  return [
    t.getFullYear(),
    t.getMonth(),
    t.getDate(),
    t.getHours(),
    t.getMinutes(),
    t.getSeconds(),
    t.getMilliseconds()
  ];
}
function jr(t) {
  return new Date(
    t[0],
    t[1] || 0,
    t[2] == null ? 1 : t[2],
    t[3] || 0,
    t[4] || 0,
    t[5] || 0
  );
}
function J(t) {
  return [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes(),
    t.getUTCSeconds(),
    t.getUTCMilliseconds()
  ];
}
function F(t) {
  return t.length === 1 && (t = t.concat([0])), new Date(Date.UTC.apply(Date, t));
}
function Gn(t) {
  return !isNaN(t.valueOf());
}
function Q(t) {
  return t.getUTCHours() * 1e3 * 60 * 60 + t.getUTCMinutes() * 1e3 * 60 + t.getUTCSeconds() * 1e3 + t.getUTCMilliseconds();
}
function Jt(t, e, r, n) {
  return {
    instanceId: Se(),
    defId: t,
    range: e,
    forcedStartTzo: r == null ? null : r,
    forcedEndTzo: n == null ? null : n
  };
}
var et = Object.prototype.hasOwnProperty;
function Qt(t, e) {
  var r = {};
  if (e)
    for (var n in e) {
      for (var a = [], i = t.length - 1; i >= 0; i -= 1) {
        var o = t[i][n];
        if (typeof o == "object" && o)
          a.unshift(o);
        else if (o !== void 0) {
          r[n] = o;
          break;
        }
      }
      a.length && (r[n] = Qt(a));
    }
  for (var i = t.length - 1; i >= 0; i -= 1) {
    var s = t[i];
    for (var l in s)
      l in r || (r[l] = s[l]);
  }
  return r;
}
function ue(t, e) {
  var r = {};
  for (var n in t)
    e(t[n], n) && (r[n] = t[n]);
  return r;
}
function ce(t, e) {
  var r = {};
  for (var n in t)
    r[n] = e(t[n], n);
  return r;
}
function qn(t) {
  for (var e = {}, r = 0, n = t; r < n.length; r++) {
    var a = n[r];
    e[a] = !0;
  }
  return e;
}
function er(t) {
  var e = [];
  for (var r in t)
    e.push(t[r]);
  return e;
}
function X(t, e) {
  if (t === e)
    return !0;
  for (var r in t)
    if (et.call(t, r) && !(r in e))
      return !1;
  for (var r in e)
    if (et.call(e, r) && t[r] !== e[r])
      return !1;
  return !0;
}
function Zr(t, e) {
  var r = [];
  for (var n in t)
    et.call(t, n) && (n in e || r.push(n));
  for (var n in e)
    et.call(e, n) && t[n] !== e[n] && r.push(n);
  return r;
}
function Rt(t, e, r) {
  if (r === void 0 && (r = {}), t === e)
    return !0;
  for (var n in e)
    if (!(n in t && oo(t[n], e[n], r[n])))
      return !1;
  for (var n in t)
    if (!(n in e))
      return !1;
  return !0;
}
function oo(t, e, r) {
  return t === e || r === !0 ? !0 : r ? r(t, e) : !1;
}
function so(t, e, r, n) {
  e === void 0 && (e = 0), n === void 0 && (n = 1);
  var a = [];
  r == null && (r = Object.keys(t).length);
  for (var i = e; i < r; i += n) {
    var o = t[i];
    o !== void 0 && a.push(o);
  }
  return a;
}
function lo(t, e, r, n) {
  for (var a = 0; a < n.length; a += 1) {
    var i = n[a].parse(t, r);
    if (i) {
      var o = t.allDay;
      return o == null && (o = e, o == null && (o = i.allDayGuess, o == null && (o = !1))), {
        allDay: o,
        duration: i.duration,
        typeData: i.typeData,
        typeId: a
      };
    }
  }
  return null;
}
function me(t, e, r) {
  var n = r.dateEnv, a = r.pluginHooks, i = r.options, o = t.defs, s = t.instances;
  s = ue(s, function(S) {
    return !o[S.defId].recurringDef;
  });
  for (var l in o) {
    var c = o[l];
    if (c.recurringDef) {
      var u = c.recurringDef.duration;
      u || (u = c.allDay ? i.defaultAllDayEventDuration : i.defaultTimedEventDuration);
      for (var f = uo(c, u, e, n, a.recurringTypes), v = 0, d = f; v < d.length; v++) {
        var p = d[v], E = Jt(l, {
          start: p,
          end: n.add(p, u)
        });
        s[E.instanceId] = E;
      }
    }
  }
  return { defs: o, instances: s };
}
function uo(t, e, r, n, a) {
  var i = a[t.recurringDef.typeId], o = i.expand(t.recurringDef.typeData, {
    start: n.subtract(r.start, e),
    end: r.end
  }, n);
  return t.allDay && (o = o.map(H)), o;
}
var co = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
function k(t, e) {
  var r;
  return typeof t == "string" ? fo(t) : typeof t == "object" && t ? Xr(t) : typeof t == "number" ? Xr((r = {}, r[e || "milliseconds"] = t, r)) : null;
}
function fo(t) {
  var e = co.exec(t);
  if (e) {
    var r = e[1] ? -1 : 1;
    return {
      years: 0,
      months: 0,
      days: r * (e[2] ? parseInt(e[2], 10) : 0),
      milliseconds: r * ((e[3] ? parseInt(e[3], 10) : 0) * 60 * 60 * 1e3 + (e[4] ? parseInt(e[4], 10) : 0) * 60 * 1e3 + (e[5] ? parseInt(e[5], 10) : 0) * 1e3 + (e[6] ? parseInt(e[6], 10) : 0))
    };
  }
  return null;
}
function Xr(t) {
  var e = {
    years: t.years || t.year || 0,
    months: t.months || t.month || 0,
    days: t.days || t.day || 0,
    milliseconds: (t.hours || t.hour || 0) * 60 * 60 * 1e3 + (t.minutes || t.minute || 0) * 60 * 1e3 + (t.seconds || t.second || 0) * 1e3 + (t.milliseconds || t.millisecond || t.ms || 0)
  }, r = t.weeks || t.week;
  return r && (e.days += r * 7, e.specifiedWeeks = !0), e;
}
function vo(t, e) {
  return t.years === e.years && t.months === e.months && t.days === e.days && t.milliseconds === e.milliseconds;
}
function po(t, e) {
  return {
    years: t.years - e.years,
    months: t.months - e.months,
    days: t.days - e.days,
    milliseconds: t.milliseconds - e.milliseconds
  };
}
function ho(t) {
  return he(t) / 365;
}
function go(t) {
  return he(t) / 30;
}
function he(t) {
  return xe(t) / 864e5;
}
function xe(t) {
  return t.years * (365 * 864e5) + t.months * (30 * 864e5) + t.days * 864e5 + t.milliseconds;
}
function Lt(t) {
  var e = t.milliseconds;
  if (e) {
    if (e % 1e3 !== 0)
      return { unit: "millisecond", value: e };
    if (e % (1e3 * 60) !== 0)
      return { unit: "second", value: e / 1e3 };
    if (e % (1e3 * 60 * 60) !== 0)
      return { unit: "minute", value: e / (1e3 * 60) };
    if (e)
      return { unit: "hour", value: e / (1e3 * 60 * 60) };
  }
  return t.days ? t.specifiedWeeks && t.days % 7 === 0 ? { unit: "week", value: t.days / 7 } : { unit: "day", value: t.days } : t.months ? { unit: "month", value: t.months } : t.years ? { unit: "year", value: t.years } : { unit: "millisecond", value: 0 };
}
function mo(t, e, r) {
  r === void 0 && (r = !1);
  var n = t.toISOString();
  return n = n.replace(".000", ""), r && (n = n.replace("T00:00:00Z", "")), n.length > 10 && (e == null ? n = n.replace("Z", "") : e !== 0 && (n = n.replace("Z", tr(e, !0)))), n;
}
function Yn(t) {
  return t.toISOString().replace(/T.*$/, "");
}
function tr(t, e) {
  e === void 0 && (e = !1);
  var r = t < 0 ? "-" : "+", n = Math.abs(t), a = Math.floor(n / 60), i = Math.round(n % 60);
  return e ? r + bt(a, 2) + ":" + bt(i, 2) : "GMT" + r + a + (i ? ":" + bt(i, 2) : "");
}
function ye(t, e, r) {
  if (t === e)
    return !0;
  var n = t.length, a;
  if (n !== e.length)
    return !1;
  for (a = 0; a < n; a += 1)
    if (!(r ? r(t[a], e[a]) : t[a] === e[a]))
      return !1;
  return !0;
}
function M(t, e, r) {
  var n, a;
  return function() {
    for (var i = [], o = 0; o < arguments.length; o++)
      i[o] = arguments[o];
    if (!n)
      a = t.apply(this, i);
    else if (!ye(n, i)) {
      r && r(a);
      var s = t.apply(this, i);
      (!e || !e(s, a)) && (a = s);
    }
    return n = i, a;
  };
}
function je(t, e, r) {
  var n = this, a, i;
  return function(o) {
    if (!a)
      i = t.call(n, o);
    else if (!X(a, o)) {
      r && r(i);
      var s = t.call(n, o);
      (!e || !e(s, i)) && (i = s);
    }
    return a = o, i;
  };
}
var $r = {
  week: 3,
  separator: 0,
  omitZeroMinute: 0,
  meridiem: 0,
  omitCommas: 0
}, tt = {
  timeZoneName: 7,
  era: 6,
  year: 5,
  month: 4,
  day: 2,
  weekday: 2,
  hour: 1,
  minute: 1,
  second: 1
}, Be = /\s*([ap])\.?m\.?/i, yo = /,/g, Eo = /\s+/g, So = /\u200e/g, bo = /UTC|GMT/, Do = function() {
  function t(e) {
    var r = {}, n = {}, a = 0;
    for (var i in e)
      i in $r ? (n[i] = e[i], a = Math.max($r[i], a)) : (r[i] = e[i], i in tt && (a = Math.max(tt[i], a)));
    this.standardDateProps = r, this.extendedSettings = n, this.severity = a, this.buildFormattingFunc = M(Kr);
  }
  return t.prototype.format = function(e, r) {
    return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, r)(e);
  }, t.prototype.formatRange = function(e, r, n, a) {
    var i = this, o = i.standardDateProps, s = i.extendedSettings, l = Mo(e.marker, r.marker, n.calendarSystem);
    if (!l)
      return this.format(e, n);
    var c = l;
    c > 1 && (o.year === "numeric" || o.year === "2-digit") && (o.month === "numeric" || o.month === "2-digit") && (o.day === "numeric" || o.day === "2-digit") && (c = 1);
    var u = this.format(e, n), f = this.format(r, n);
    if (u === f)
      return u;
    var v = ko(o, c), d = Kr(v, s, n), p = d(e), E = d(r), S = Io(u, p, f, E), g = s.separator || a || n.defaultSeparator || "";
    return S ? S.before + p + g + E + S.after : u + g + f;
  }, t.prototype.getLargestUnit = function() {
    switch (this.severity) {
      case 7:
      case 6:
      case 5:
        return "year";
      case 4:
        return "month";
      case 3:
        return "week";
      case 2:
        return "day";
      default:
        return "time";
    }
  }, t;
}();
function Kr(t, e, r) {
  var n = Object.keys(t).length;
  return n === 1 && t.timeZoneName === "short" ? function(a) {
    return tr(a.timeZoneOffset);
  } : n === 0 && e.week ? function(a) {
    return _o(r.computeWeekNumber(a.marker), r.weekText, r.weekTextLong, r.locale, e.week);
  } : Co(t, e, r);
}
function Co(t, e, r) {
  t = h({}, t), e = h({}, e), Ro(t, e), t.timeZone = "UTC";
  var n = new Intl.DateTimeFormat(r.locale.codes, t), a;
  if (e.omitZeroMinute) {
    var i = h({}, t);
    delete i.minute, a = new Intl.DateTimeFormat(r.locale.codes, i);
  }
  return function(o) {
    var s = o.marker, l;
    a && !s.getUTCMinutes() ? l = a : l = n;
    var c = l.format(s);
    return wo(c, o, t, e, r);
  };
}
function Ro(t, e) {
  t.timeZoneName && (t.hour || (t.hour = "2-digit"), t.minute || (t.minute = "2-digit")), t.timeZoneName === "long" && (t.timeZoneName = "short"), e.omitZeroMinute && (t.second || t.millisecond) && delete e.omitZeroMinute;
}
function wo(t, e, r, n, a) {
  return t = t.replace(So, ""), r.timeZoneName === "short" && (t = To(t, a.timeZone === "UTC" || e.timeZoneOffset == null ? "UTC" : tr(e.timeZoneOffset))), n.omitCommas && (t = t.replace(yo, "").trim()), n.omitZeroMinute && (t = t.replace(":00", "")), n.meridiem === !1 ? t = t.replace(Be, "").trim() : n.meridiem === "narrow" ? t = t.replace(Be, function(i, o) {
    return o.toLocaleLowerCase();
  }) : n.meridiem === "short" ? t = t.replace(Be, function(i, o) {
    return o.toLocaleLowerCase() + "m";
  }) : n.meridiem === "lowercase" && (t = t.replace(Be, function(i) {
    return i.toLocaleLowerCase();
  })), t = t.replace(Eo, " "), t = t.trim(), t;
}
function To(t, e) {
  var r = !1;
  return t = t.replace(bo, function() {
    return r = !0, e;
  }), r || (t += " " + e), t;
}
function _o(t, e, r, n, a) {
  var i = [];
  return a === "long" ? i.push(r) : (a === "short" || a === "narrow") && i.push(e), (a === "long" || a === "short") && i.push(" "), i.push(n.simpleNumberFormat.format(t)), n.options.direction === "rtl" && i.reverse(), i.join("");
}
function Mo(t, e, r) {
  return r.getMarkerYear(t) !== r.getMarkerYear(e) ? 5 : r.getMarkerMonth(t) !== r.getMarkerMonth(e) ? 4 : r.getMarkerDay(t) !== r.getMarkerDay(e) ? 2 : Q(t) !== Q(e) ? 1 : 0;
}
function ko(t, e) {
  var r = {};
  for (var n in t)
    (!(n in tt) || tt[n] <= e) && (r[n] = t[n]);
  return r;
}
function Io(t, e, r, n) {
  for (var a = 0; a < t.length; ) {
    var i = t.indexOf(e, a);
    if (i === -1)
      break;
    var o = t.substr(0, i);
    a = i + e.length;
    for (var s = t.substr(a), l = 0; l < r.length; ) {
      var c = r.indexOf(n, l);
      if (c === -1)
        break;
      var u = r.substr(0, c);
      l = c + n.length;
      var f = r.substr(l);
      if (o === u && s === f)
        return {
          before: o,
          after: s
        };
    }
  }
  return null;
}
function Jr(t, e) {
  var r = e.markerToArray(t.marker);
  return {
    marker: t.marker,
    timeZoneOffset: t.timeZoneOffset,
    array: r,
    year: r[0],
    month: r[1],
    day: r[2],
    hour: r[3],
    minute: r[4],
    second: r[5],
    millisecond: r[6]
  };
}
function rt(t, e, r, n) {
  var a = Jr(t, r.calendarSystem), i = e ? Jr(e, r.calendarSystem) : null;
  return {
    date: a,
    start: a,
    end: i,
    timeZone: r.timeZone,
    localeCodes: r.locale.codes,
    defaultSeparator: n || r.defaultSeparator
  };
}
var Po = function() {
  function t(e) {
    this.cmdStr = e;
  }
  return t.prototype.format = function(e, r, n) {
    return r.cmdFormatter(this.cmdStr, rt(e, null, r, n));
  }, t.prototype.formatRange = function(e, r, n, a) {
    return n.cmdFormatter(this.cmdStr, rt(e, r, n, a));
  }, t;
}(), Ho = function() {
  function t(e) {
    this.func = e;
  }
  return t.prototype.format = function(e, r, n) {
    return this.func(rt(e, null, r, n));
  }, t.prototype.formatRange = function(e, r, n, a) {
    return this.func(rt(e, r, n, a));
  }, t;
}();
function U(t) {
  return typeof t == "object" && t ? new Do(t) : typeof t == "string" ? new Po(t) : typeof t == "function" ? new Ho(t) : null;
}
var Qr = {
  navLinkDayClick: y,
  navLinkWeekClick: y,
  duration: k,
  bootstrapFontAwesome: y,
  buttonIcons: y,
  customButtons: y,
  defaultAllDayEventDuration: k,
  defaultTimedEventDuration: k,
  nextDayThreshold: k,
  scrollTime: k,
  scrollTimeReset: Boolean,
  slotMinTime: k,
  slotMaxTime: k,
  dayPopoverFormat: U,
  slotDuration: k,
  snapDuration: k,
  headerToolbar: y,
  footerToolbar: y,
  defaultRangeSeparator: String,
  titleRangeSeparator: String,
  forceEventDuration: Boolean,
  dayHeaders: Boolean,
  dayHeaderFormat: U,
  dayHeaderClassNames: y,
  dayHeaderContent: y,
  dayHeaderDidMount: y,
  dayHeaderWillUnmount: y,
  dayCellClassNames: y,
  dayCellContent: y,
  dayCellDidMount: y,
  dayCellWillUnmount: y,
  initialView: String,
  aspectRatio: Number,
  weekends: Boolean,
  weekNumberCalculation: y,
  weekNumbers: Boolean,
  weekNumberClassNames: y,
  weekNumberContent: y,
  weekNumberDidMount: y,
  weekNumberWillUnmount: y,
  editable: Boolean,
  viewClassNames: y,
  viewDidMount: y,
  viewWillUnmount: y,
  nowIndicator: Boolean,
  nowIndicatorClassNames: y,
  nowIndicatorContent: y,
  nowIndicatorDidMount: y,
  nowIndicatorWillUnmount: y,
  showNonCurrentDates: Boolean,
  lazyFetching: Boolean,
  startParam: String,
  endParam: String,
  timeZoneParam: String,
  timeZone: String,
  locales: y,
  locale: y,
  themeSystem: String,
  dragRevertDuration: Number,
  dragScroll: Boolean,
  allDayMaintainDuration: Boolean,
  unselectAuto: Boolean,
  dropAccept: y,
  eventOrder: Fi,
  eventOrderStrict: Boolean,
  handleWindowResize: Boolean,
  windowResizeDelay: Number,
  longPressDelay: Number,
  eventDragMinDistance: Number,
  expandRows: Boolean,
  height: y,
  contentHeight: y,
  direction: String,
  weekNumberFormat: U,
  eventResizableFromStart: Boolean,
  displayEventTime: Boolean,
  displayEventEnd: Boolean,
  weekText: String,
  weekTextLong: String,
  progressiveEventRendering: Boolean,
  businessHours: y,
  initialDate: y,
  now: y,
  eventDataTransform: y,
  stickyHeaderDates: y,
  stickyFooterScrollbar: y,
  viewHeight: y,
  defaultAllDay: Boolean,
  eventSourceFailure: y,
  eventSourceSuccess: y,
  eventDisplay: String,
  eventStartEditable: Boolean,
  eventDurationEditable: Boolean,
  eventOverlap: y,
  eventConstraint: y,
  eventAllow: y,
  eventBackgroundColor: String,
  eventBorderColor: String,
  eventTextColor: String,
  eventColor: String,
  eventClassNames: y,
  eventContent: y,
  eventDidMount: y,
  eventWillUnmount: y,
  selectConstraint: y,
  selectOverlap: y,
  selectAllow: y,
  droppable: Boolean,
  unselectCancel: String,
  slotLabelFormat: y,
  slotLaneClassNames: y,
  slotLaneContent: y,
  slotLaneDidMount: y,
  slotLaneWillUnmount: y,
  slotLabelClassNames: y,
  slotLabelContent: y,
  slotLabelDidMount: y,
  slotLabelWillUnmount: y,
  dayMaxEvents: y,
  dayMaxEventRows: y,
  dayMinWidth: Number,
  slotLabelInterval: k,
  allDayText: String,
  allDayClassNames: y,
  allDayContent: y,
  allDayDidMount: y,
  allDayWillUnmount: y,
  slotMinWidth: Number,
  navLinks: Boolean,
  eventTimeFormat: U,
  rerenderDelay: Number,
  moreLinkText: y,
  moreLinkHint: y,
  selectMinDistance: Number,
  selectable: Boolean,
  selectLongPressDelay: Number,
  eventLongPressDelay: Number,
  selectMirror: Boolean,
  eventMaxStack: Number,
  eventMinHeight: Number,
  eventMinWidth: Number,
  eventShortHeight: Number,
  slotEventOverlap: Boolean,
  plugins: y,
  firstDay: Number,
  dayCount: Number,
  dateAlignment: String,
  dateIncrement: k,
  hiddenDays: y,
  monthMode: Boolean,
  fixedWeekCount: Boolean,
  validRange: y,
  visibleRange: y,
  titleFormat: y,
  eventInteractive: Boolean,
  noEventsText: String,
  viewHint: y,
  navLinkHint: y,
  closeHint: String,
  timeHint: String,
  eventHint: String,
  moreLinkClick: y,
  moreLinkClassNames: y,
  moreLinkContent: y,
  moreLinkDidMount: y,
  moreLinkWillUnmount: y
}, Me = {
  eventDisplay: "auto",
  defaultRangeSeparator: " - ",
  titleRangeSeparator: " \u2013 ",
  defaultTimedEventDuration: "01:00:00",
  defaultAllDayEventDuration: { day: 1 },
  forceEventDuration: !1,
  nextDayThreshold: "00:00:00",
  dayHeaders: !0,
  initialView: "",
  aspectRatio: 1.35,
  headerToolbar: {
    start: "title",
    center: "",
    end: "today prev,next"
  },
  weekends: !0,
  weekNumbers: !1,
  weekNumberCalculation: "local",
  editable: !1,
  nowIndicator: !1,
  scrollTime: "06:00:00",
  scrollTimeReset: !0,
  slotMinTime: "00:00:00",
  slotMaxTime: "24:00:00",
  showNonCurrentDates: !0,
  lazyFetching: !0,
  startParam: "start",
  endParam: "end",
  timeZoneParam: "timeZone",
  timeZone: "local",
  locales: [],
  locale: "",
  themeSystem: "standard",
  dragRevertDuration: 500,
  dragScroll: !0,
  allDayMaintainDuration: !1,
  unselectAuto: !0,
  dropAccept: "*",
  eventOrder: "start,-duration,allDay,title",
  dayPopoverFormat: { month: "long", day: "numeric", year: "numeric" },
  handleWindowResize: !0,
  windowResizeDelay: 100,
  longPressDelay: 1e3,
  eventDragMinDistance: 5,
  expandRows: !1,
  navLinks: !1,
  selectable: !1,
  eventMinHeight: 15,
  eventMinWidth: 30,
  eventShortHeight: 30
}, en = {
  datesSet: y,
  eventsSet: y,
  eventAdd: y,
  eventChange: y,
  eventRemove: y,
  windowResize: y,
  eventClick: y,
  eventMouseEnter: y,
  eventMouseLeave: y,
  select: y,
  unselect: y,
  loading: y,
  _unmount: y,
  _beforeprint: y,
  _afterprint: y,
  _noEventDrop: y,
  _noEventResize: y,
  _resize: y,
  _scrollRequest: y
}, tn = {
  buttonText: y,
  buttonHints: y,
  views: y,
  plugins: y,
  initialEvents: y,
  events: y,
  eventSources: y
}, ne = {
  headerToolbar: de,
  footerToolbar: de,
  buttonText: de,
  buttonHints: de,
  buttonIcons: de,
  dateIncrement: de
};
function de(t, e) {
  return typeof t == "object" && typeof e == "object" && t && e ? X(t, e) : t === e;
}
var xo = {
  type: String,
  component: y,
  buttonText: String,
  buttonTextKey: String,
  dateProfileGeneratorClass: y,
  usesMinMaxTime: Boolean,
  classNames: y,
  content: y,
  didMount: y,
  willUnmount: y
};
function wt(t) {
  return Qt(t, ne);
}
function rr(t, e) {
  var r = {}, n = {};
  for (var a in e)
    a in t && (r[a] = e[a](t[a]));
  for (var a in t)
    a in e || (n[a] = t[a]);
  return { refined: r, extra: n };
}
function y(t) {
  return t;
}
function nt(t, e, r, n) {
  for (var a = Y(), i = ir(r), o = 0, s = t; o < s.length; o++) {
    var l = s[o], c = Zn(l, e, r, n, i);
    c && Ut(c, a);
  }
  return a;
}
function Ut(t, e) {
  return e === void 0 && (e = Y()), e.defs[t.def.defId] = t.def, t.instance && (e.instances[t.instance.instanceId] = t.instance), e;
}
function nr(t, e) {
  var r = t.instances[e];
  if (r) {
    var n = t.defs[r.defId], a = ft(t, function(i) {
      return Ao(n, i);
    });
    return a.defs[n.defId] = n, a.instances[r.instanceId] = r, a;
  }
  return Y();
}
function Ao(t, e) {
  return Boolean(t.groupId && t.groupId === e.groupId);
}
function Y() {
  return { defs: {}, instances: {} };
}
function ar(t, e) {
  return {
    defs: h(h({}, t.defs), e.defs),
    instances: h(h({}, t.instances), e.instances)
  };
}
function ft(t, e) {
  var r = ue(t.defs, e), n = ue(t.instances, function(a) {
    return r[a.defId];
  });
  return { defs: r, instances: n };
}
function No(t, e) {
  var r = t.defs, n = t.instances, a = {}, i = {};
  for (var o in r)
    e.defs[o] || (a[o] = r[o]);
  for (var s in n)
    !e.instances[s] && a[n[s].defId] && (i[s] = n[s]);
  return {
    defs: a,
    instances: i
  };
}
function Oo(t, e) {
  return Array.isArray(t) ? nt(t, null, e, !0) : typeof t == "object" && t ? nt([t], null, e, !0) : t != null ? String(t) : null;
}
function Vt(t) {
  return Array.isArray(t) ? t : typeof t == "string" ? t.split(/\s+/) : [];
}
var at = {
  display: String,
  editable: Boolean,
  startEditable: Boolean,
  durationEditable: Boolean,
  constraint: y,
  overlap: y,
  allow: y,
  className: Vt,
  classNames: Vt,
  color: String,
  backgroundColor: String,
  borderColor: String,
  textColor: String
}, Lo = {
  display: null,
  startEditable: null,
  durationEditable: null,
  constraints: [],
  overlap: null,
  allows: [],
  backgroundColor: "",
  borderColor: "",
  textColor: "",
  classNames: []
};
function it(t, e) {
  var r = Oo(t.constraint, e);
  return {
    display: t.display || null,
    startEditable: t.startEditable != null ? t.startEditable : t.editable,
    durationEditable: t.durationEditable != null ? t.durationEditable : t.editable,
    constraints: r != null ? [r] : [],
    overlap: t.overlap != null ? t.overlap : null,
    allows: t.allow != null ? [t.allow] : [],
    backgroundColor: t.backgroundColor || t.color || "",
    borderColor: t.borderColor || t.color || "",
    textColor: t.textColor || "",
    classNames: (t.className || []).concat(t.classNames || [])
  };
}
function Uo(t) {
  return t.reduce(Vo, Lo);
}
function Vo(t, e) {
  return {
    display: e.display != null ? e.display : t.display,
    startEditable: e.startEditable != null ? e.startEditable : t.startEditable,
    durationEditable: e.durationEditable != null ? e.durationEditable : t.durationEditable,
    constraints: t.constraints.concat(e.constraints),
    overlap: typeof e.overlap == "boolean" ? e.overlap : t.overlap,
    allows: t.allows.concat(e.allows),
    backgroundColor: e.backgroundColor || t.backgroundColor,
    borderColor: e.borderColor || t.borderColor,
    textColor: e.textColor || t.textColor,
    classNames: t.classNames.concat(e.classNames)
  };
}
var Ze = {
  id: String,
  groupId: String,
  title: String,
  url: String,
  interactive: Boolean
}, jn = {
  start: y,
  end: y,
  date: y,
  allDay: Boolean
}, Wo = h(h(h({}, Ze), jn), { extendedProps: y });
function Zn(t, e, r, n, a) {
  a === void 0 && (a = ir(r));
  var i = Xn(t, r, a), o = i.refined, s = i.extra, l = Fo(e, r), c = lo(o, l, r.dateEnv, r.pluginHooks.recurringTypes);
  if (c) {
    var u = Wt(o, s, e ? e.sourceId : "", c.allDay, Boolean(c.duration), r);
    return u.recurringDef = {
      typeId: c.typeId,
      typeData: c.typeData,
      duration: c.duration
    }, { def: u, instance: null };
  }
  var f = Bo(o, l, r, n);
  if (f) {
    var u = Wt(o, s, e ? e.sourceId : "", f.allDay, f.hasEnd, r), v = Jt(u.defId, f.range, f.forcedStartTzo, f.forcedEndTzo);
    return { def: u, instance: v };
  }
  return null;
}
function Xn(t, e, r) {
  return r === void 0 && (r = ir(e)), rr(t, r);
}
function ir(t) {
  return h(h(h({}, at), Wo), t.pluginHooks.eventRefiners);
}
function Wt(t, e, r, n, a, i) {
  for (var o = {
    title: t.title || "",
    groupId: t.groupId || "",
    publicId: t.id || "",
    url: t.url || "",
    recurringDef: null,
    defId: Se(),
    sourceId: r,
    allDay: n,
    hasEnd: a,
    interactive: t.interactive,
    ui: it(t, i),
    extendedProps: h(h({}, t.extendedProps || {}), e)
  }, s = 0, l = i.pluginHooks.eventDefMemberAdders; s < l.length; s++) {
    var c = l[s];
    h(o, c(t));
  }
  return Object.freeze(o.ui.classNames), Object.freeze(o.extendedProps), o;
}
function Bo(t, e, r, n) {
  var a = t.allDay, i, o = null, s = !1, l, c = null, u = t.start != null ? t.start : t.date;
  if (i = r.dateEnv.createMarkerMeta(u), i)
    o = i.marker;
  else if (!n)
    return null;
  return t.end != null && (l = r.dateEnv.createMarkerMeta(t.end)), a == null && (e != null ? a = e : a = (!i || i.isTimeUnspecified) && (!l || l.isTimeUnspecified)), a && o && (o = H(o)), l && (c = l.marker, a && (c = H(c)), o && c <= o && (c = null)), c ? s = !0 : n || (s = r.options.forceEventDuration || !1, c = r.dateEnv.add(o, a ? r.options.defaultAllDayEventDuration : r.options.defaultTimedEventDuration)), {
    allDay: a,
    hasEnd: s,
    range: { start: o, end: c },
    forcedStartTzo: i ? i.forcedTzo : null,
    forcedEndTzo: l ? l.forcedTzo : null
  };
}
function Fo(t, e) {
  var r = null;
  return t && (r = t.defaultAllDay), r == null && (r = e.options.defaultAllDay), r;
}
function $n(t) {
  var e = Math.floor(be(t.start, t.end)) || 1, r = H(t.start), n = W(r, e);
  return { start: r, end: n };
}
function Kn(t, e) {
  e === void 0 && (e = k(0));
  var r = null, n = null;
  if (t.end) {
    n = H(t.end);
    var a = t.end.valueOf() - n.valueOf();
    a && a >= xe(e) && (n = W(n, 1));
  }
  return t.start && (r = H(t.start), n && n <= r && (n = W(r, 1))), { start: r, end: n };
}
function pe(t, e, r, n) {
  return n === "year" ? k(r.diffWholeYears(t, e), "year") : n === "month" ? k(r.diffWholeMonths(t, e), "month") : Qi(t, e);
}
function zo(t, e) {
  var r = null, n = null;
  return t.start && (r = e.createMarker(t.start)), t.end && (n = e.createMarker(t.end)), !r && !n || r && n && n < r ? null : { start: r, end: n };
}
function rn(t, e) {
  var r = [], n = e.start, a, i;
  for (t.sort(Go), a = 0; a < t.length; a += 1)
    i = t[a], i.start > n && r.push({ start: n, end: i.start }), i.end > n && (n = i.end);
  return n < e.end && r.push({ start: n, end: e.end }), r;
}
function Go(t, e) {
  return t.start.valueOf() - e.start.valueOf();
}
function Ae(t, e) {
  var r = t.start, n = t.end, a = null;
  return e.start !== null && (r === null ? r = e.start : r = new Date(Math.max(r.valueOf(), e.start.valueOf()))), e.end != null && (n === null ? n = e.end : n = new Date(Math.min(n.valueOf(), e.end.valueOf()))), (r === null || n === null || r < n) && (a = { start: r, end: n }), a;
}
function qo(t, e) {
  return (t.start === null ? null : t.start.valueOf()) === (e.start === null ? null : e.start.valueOf()) && (t.end === null ? null : t.end.valueOf()) === (e.end === null ? null : e.end.valueOf());
}
function or(t, e) {
  return (t.end === null || e.start === null || t.end > e.start) && (t.start === null || e.end === null || t.start < e.end);
}
function dt(t, e) {
  return (t.start === null || e.start !== null && e.start >= t.start) && (t.end === null || e.end !== null && e.end <= t.end);
}
function ie(t, e) {
  return (t.start === null || e >= t.start) && (t.end === null || e < t.end);
}
function Yo(t, e) {
  return e.start != null && t < e.start ? e.start : e.end != null && t >= e.end ? new Date(e.end.valueOf() - 1) : t;
}
function nn(t, e, r, n) {
  var a = {}, i = {}, o = {}, s = [], l = [], c = ot(t.defs, e);
  for (var u in t.defs) {
    var f = t.defs[u], v = c[f.defId];
    v.display === "inverse-background" && (f.groupId ? (a[f.groupId] = [], o[f.groupId] || (o[f.groupId] = f)) : i[u] = []);
  }
  for (var d in t.instances) {
    var p = t.instances[d], f = t.defs[p.defId], v = c[f.defId], E = p.range, S = !f.allDay && n ? Kn(E, n) : E, g = Ae(S, r);
    g && (v.display === "inverse-background" ? f.groupId ? a[f.groupId].push(g) : i[p.defId].push(g) : v.display !== "none" && (v.display === "background" ? s : l).push({
      def: f,
      ui: v,
      instance: p,
      range: g,
      isStart: S.start && S.start.valueOf() === g.start.valueOf(),
      isEnd: S.end && S.end.valueOf() === g.end.valueOf()
    }));
  }
  for (var b in a)
    for (var C = a[b], D = rn(C, r), I = 0, _ = D; I < _.length; I++) {
      var P = _[I], f = o[b], v = c[f.defId];
      s.push({
        def: f,
        ui: v,
        instance: null,
        range: P,
        isStart: !1,
        isEnd: !1
      });
    }
  for (var u in i)
    for (var C = i[u], D = rn(C, r), w = 0, A = D; w < A.length; w++) {
      var P = A[w];
      s.push({
        def: t.defs[u],
        ui: c[u],
        instance: null,
        range: P,
        isStart: !1,
        isEnd: !1
      });
    }
  return { bg: s, fg: l };
}
function an(t, e) {
  t.fcSeg = e;
}
function Ee(t) {
  return t.fcSeg || t.parentNode.fcSeg || null;
}
function ot(t, e) {
  return ce(t, function(r) {
    return Jn(r, e);
  });
}
function Jn(t, e) {
  var r = [];
  return e[""] && r.push(e[""]), e[t.defId] && r.push(e[t.defId]), r.push(t.ui), Uo(r);
}
function jo(t, e) {
  var r = t.map(Zo);
  return r.sort(function(n, a) {
    return zi(n, a, e);
  }), r.map(function(n) {
    return n._seg;
  });
}
function Zo(t) {
  var e = t.eventRange, r = e.def, n = e.instance ? e.instance.range : e.range, a = n.start ? n.start.valueOf() : 0, i = n.end ? n.end.valueOf() : 0;
  return h(h(h({}, r.extendedProps), r), {
    id: r.publicId,
    start: a,
    end: i,
    duration: i - a,
    allDay: Number(r.allDay),
    _seg: t
  });
}
function Xo(t, e) {
  for (var r = e.pluginHooks, n = r.isDraggableTransformers, a = t.eventRange, i = a.def, o = a.ui, s = o.startEditable, l = 0, c = n; l < c.length; l++) {
    var u = c[l];
    s = u(s, i, o, e);
  }
  return s;
}
function $o(t, e) {
  return t.isStart && t.eventRange.ui.durationEditable && e.options.eventResizableFromStart;
}
function Ko(t, e) {
  return t.isEnd && t.eventRange.ui.durationEditable;
}
function Qn(t, e, r, n, a, i, o) {
  var s = r.dateEnv, l = r.options, c = l.displayEventTime, u = l.displayEventEnd, f = t.eventRange.def, v = t.eventRange.instance;
  c == null && (c = n !== !1), u == null && (u = a !== !1);
  var d = v.range.start, p = v.range.end, E = i || t.start || t.eventRange.range.start, S = o || t.end || t.eventRange.range.end, g = H(d).valueOf() === H(E).valueOf(), b = H(le(p, -1)).valueOf() === H(le(S, -1)).valueOf();
  return c && !f.allDay && (g || b) ? (E = g ? d : E, S = b ? p : S, u && f.hasEnd ? s.formatRange(E, S, e, {
    forcedStartTzo: i ? null : v.forcedStartTzo,
    forcedEndTzo: o ? null : v.forcedEndTzo
  }) : s.format(E, e, {
    forcedTzo: i ? null : v.forcedStartTzo
  })) : "";
}
function ke(t, e, r) {
  var n = t.eventRange.range;
  return {
    isPast: n.end < (r || e.start),
    isFuture: n.start >= (r || e.end),
    isToday: e && ie(e, n.start)
  };
}
function Jo(t) {
  var e = ["fc-event"];
  return t.isMirror && e.push("fc-event-mirror"), t.isDraggable && e.push("fc-event-draggable"), (t.isStartResizable || t.isEndResizable) && e.push("fc-event-resizable"), t.isDragging && e.push("fc-event-dragging"), t.isResizing && e.push("fc-event-resizing"), t.isSelected && e.push("fc-event-selected"), t.isStart && e.push("fc-event-start"), t.isEnd && e.push("fc-event-end"), t.isPast && e.push("fc-event-past"), t.isToday && e.push("fc-event-today"), t.isFuture && e.push("fc-event-future"), e;
}
function Qo(t) {
  return t.instance ? t.instance.instanceId : t.def.defId + ":" + t.range.start.toISOString();
}
function ea(t, e) {
  var r = t.eventRange, n = r.def, a = r.instance, i = n.url;
  if (i)
    return { href: i };
  var o = e.emitter, s = e.options, l = s.eventInteractive;
  return l == null && (l = n.interactive, l == null && (l = Boolean(o.hasHandlers("eventClick")))), l ? zn(function(c) {
    o.trigger("eventClick", {
      el: c.target,
      event: new O(e, n, a),
      jsEvent: c,
      view: e.viewApi
    });
  }) : {};
}
var es = {
  start: y,
  end: y,
  allDay: Boolean
};
function ts(t, e, r) {
  var n = rs(t, e), a = n.range;
  if (!a.start)
    return null;
  if (!a.end) {
    if (r == null)
      return null;
    a.end = e.add(a.start, r);
  }
  return n;
}
function rs(t, e) {
  var r = rr(t, es), n = r.refined, a = r.extra, i = n.start ? e.createMarkerMeta(n.start) : null, o = n.end ? e.createMarkerMeta(n.end) : null, s = n.allDay;
  return s == null && (s = i && i.isTimeUnspecified && (!o || o.isTimeUnspecified)), h({ range: {
    start: i ? i.marker : null,
    end: o ? o.marker : null
  }, allDay: s }, a);
}
function ns(t, e) {
  return qo(t.range, e.range) && t.allDay === e.allDay && as(t, e);
}
function as(t, e) {
  for (var r in e)
    if (r !== "range" && r !== "allDay" && t[r] !== e[r])
      return !1;
  for (var r in t)
    if (!(r in e))
      return !1;
  return !0;
}
function is(t, e) {
  return h(h({}, ra(t.range, e, t.allDay)), { allDay: t.allDay });
}
function ta(t, e, r) {
  return h(h({}, ra(t, e, r)), { timeZone: e.timeZone });
}
function ra(t, e, r) {
  return {
    start: e.toDate(t.start),
    end: e.toDate(t.end),
    startStr: e.formatIso(t.start, { omitTime: r }),
    endStr: e.formatIso(t.end, { omitTime: r })
  };
}
function os(t, e, r) {
  var n = Xn({ editable: !1 }, r), a = Wt(
    n.refined,
    n.extra,
    "",
    t.allDay,
    !0,
    r
  );
  return {
    def: a,
    ui: Jn(a, e),
    instance: Jt(a.defId, t.range),
    range: t.range,
    isStart: !0,
    isEnd: !0
  };
}
function na(t, e, r) {
  r.emitter.trigger("select", h(h({}, sr(t, r)), { jsEvent: e ? e.origEvent : null, view: r.viewApi || r.calendarApi.view }));
}
function ss(t, e) {
  e.emitter.trigger("unselect", {
    jsEvent: t ? t.origEvent : null,
    view: e.viewApi || e.calendarApi.view
  });
}
function sr(t, e) {
  for (var r = {}, n = 0, a = e.pluginHooks.dateSpanTransforms; n < a.length; n++) {
    var i = a[n];
    h(r, i(t, e));
  }
  return h(r, is(t, e.dateEnv)), r;
}
function on(t, e, r) {
  var n = r.dateEnv, a = r.options, i = e;
  return t ? (i = H(i), i = n.add(i, a.defaultAllDayEventDuration)) : i = n.add(i, a.defaultTimedEventDuration), i;
}
function lr(t, e, r, n) {
  var a = ot(t.defs, e), i = Y();
  for (var o in t.defs) {
    var s = t.defs[o];
    i.defs[o] = ls(s, a[o], r, n);
  }
  for (var l in t.instances) {
    var c = t.instances[l], s = i.defs[c.defId];
    i.instances[l] = us(c, s, a[c.defId], r, n);
  }
  return i;
}
function ls(t, e, r, n) {
  var a = r.standardProps || {};
  a.hasEnd == null && e.durationEditable && (r.startDelta || r.endDelta) && (a.hasEnd = !0);
  var i = h(h(h({}, t), a), { ui: h(h({}, t.ui), a.ui) });
  r.extendedProps && (i.extendedProps = h(h({}, i.extendedProps), r.extendedProps));
  for (var o = 0, s = n.pluginHooks.eventDefMutationAppliers; o < s.length; o++) {
    var l = s[o];
    l(i, r, n);
  }
  return !i.hasEnd && n.options.forceEventDuration && (i.hasEnd = !0), i;
}
function us(t, e, r, n, a) {
  var i = a.dateEnv, o = n.standardProps && n.standardProps.allDay === !0, s = n.standardProps && n.standardProps.hasEnd === !1, l = h({}, t);
  return o && (l.range = $n(l.range)), n.datesDelta && r.startEditable && (l.range = {
    start: i.add(l.range.start, n.datesDelta),
    end: i.add(l.range.end, n.datesDelta)
  }), n.startDelta && r.durationEditable && (l.range = {
    start: i.add(l.range.start, n.startDelta),
    end: l.range.end
  }), n.endDelta && r.durationEditable && (l.range = {
    start: l.range.start,
    end: i.add(l.range.end, n.endDelta)
  }), s && (l.range = {
    start: l.range.start,
    end: on(e.allDay, l.range.start, a)
  }), e.allDay && (l.range = {
    start: H(l.range.start),
    end: H(l.range.end)
  }), l.range.end < l.range.start && (l.range.end = on(e.allDay, l.range.start, a)), l;
}
var cs = function() {
  function t(e, r, n) {
    this.type = e, this.getCurrentData = r, this.dateEnv = n;
  }
  return Object.defineProperty(t.prototype, "calendar", {
    get: function() {
      return this.getCurrentData().calendarApi;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "title", {
    get: function() {
      return this.getCurrentData().viewTitle;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "activeStart", {
    get: function() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "activeEnd", {
    get: function() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "currentStart", {
    get: function() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "currentEnd", {
    get: function() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.getOption = function(e) {
    return this.getCurrentData().options[e];
  }, t;
}(), fs = {
  id: String,
  defaultAllDay: Boolean,
  url: String,
  format: String,
  events: y,
  eventDataTransform: y,
  success: y,
  failure: y
};
function aa(t, e, r) {
  r === void 0 && (r = ia(e));
  var n;
  if (typeof t == "string" ? n = { url: t } : typeof t == "function" || Array.isArray(t) ? n = { events: t } : typeof t == "object" && t && (n = t), n) {
    var a = rr(n, r), i = a.refined, o = a.extra, s = ds(i, e);
    if (s)
      return {
        _raw: t,
        isFetching: !1,
        latestFetchId: "",
        fetchRange: null,
        defaultAllDay: i.defaultAllDay,
        eventDataTransform: i.eventDataTransform,
        success: i.success,
        failure: i.failure,
        publicId: i.id || "",
        sourceId: Se(),
        sourceDefId: s.sourceDefId,
        meta: s.meta,
        ui: it(i, e),
        extendedProps: o
      };
  }
  return null;
}
function ia(t) {
  return h(h(h({}, at), fs), t.pluginHooks.eventSourceRefiners);
}
function ds(t, e) {
  for (var r = e.pluginHooks.eventSourceDefs, n = r.length - 1; n >= 0; n -= 1) {
    var a = r[n], i = a.parseMeta(t);
    if (i)
      return { sourceDefId: n, meta: i };
  }
  return null;
}
function vs(t, e) {
  switch (e.type) {
    case "CHANGE_DATE":
      return e.dateMarker;
    default:
      return t;
  }
}
function ps(t, e) {
  var r = t.initialDate;
  return r != null ? e.createMarker(r) : Ne(t.now, e);
}
function Ne(t, e) {
  return typeof t == "function" && (t = t()), t == null ? e.createNowMarker() : e.createMarker(t);
}
var hs = function() {
  function t() {
  }
  return t.prototype.getCurrentData = function() {
    return this.currentDataManager.getCurrentData();
  }, t.prototype.dispatch = function(e) {
    return this.currentDataManager.dispatch(e);
  }, Object.defineProperty(t.prototype, "view", {
    get: function() {
      return this.getCurrentData().viewApi;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.batchRendering = function(e) {
    e();
  }, t.prototype.updateSize = function() {
    this.trigger("_resize", !0);
  }, t.prototype.setOption = function(e, r) {
    this.dispatch({
      type: "SET_OPTION",
      optionName: e,
      rawOptionValue: r
    });
  }, t.prototype.getOption = function(e) {
    return this.currentDataManager.currentCalendarOptionsInput[e];
  }, t.prototype.getAvailableLocaleCodes = function() {
    return Object.keys(this.getCurrentData().availableRawLocales);
  }, t.prototype.on = function(e, r) {
    var n = this.currentDataManager;
    n.currentCalendarOptionsRefiners[e] ? n.emitter.on(e, r) : console.warn("Unknown listener name '" + e + "'");
  }, t.prototype.off = function(e, r) {
    this.currentDataManager.emitter.off(e, r);
  }, t.prototype.trigger = function(e) {
    for (var r, n = [], a = 1; a < arguments.length; a++)
      n[a - 1] = arguments[a];
    (r = this.currentDataManager.emitter).trigger.apply(r, N([e], n));
  }, t.prototype.changeView = function(e, r) {
    var n = this;
    this.batchRendering(function() {
      if (n.unselect(), r)
        if (r.start && r.end)
          n.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: e
          }), n.dispatch({
            type: "SET_OPTION",
            optionName: "visibleRange",
            rawOptionValue: r
          });
        else {
          var a = n.getCurrentData().dateEnv;
          n.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: e,
            dateMarker: a.createMarker(r)
          });
        }
      else
        n.dispatch({
          type: "CHANGE_VIEW_TYPE",
          viewType: e
        });
    });
  }, t.prototype.zoomTo = function(e, r) {
    var n = this.getCurrentData(), a;
    r = r || "day", a = n.viewSpecs[r] || this.getUnitViewSpec(r), this.unselect(), a ? this.dispatch({
      type: "CHANGE_VIEW_TYPE",
      viewType: a.type,
      dateMarker: e
    }) : this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: e
    });
  }, t.prototype.getUnitViewSpec = function(e) {
    var r = this.getCurrentData(), n = r.viewSpecs, a = r.toolbarConfig, i = [].concat(a.header ? a.header.viewsWithButtons : [], a.footer ? a.footer.viewsWithButtons : []), o, s;
    for (var l in n)
      i.push(l);
    for (o = 0; o < i.length; o += 1)
      if (s = n[i[o]], s && s.singleUnit === e)
        return s;
    return null;
  }, t.prototype.prev = function() {
    this.unselect(), this.dispatch({ type: "PREV" });
  }, t.prototype.next = function() {
    this.unselect(), this.dispatch({ type: "NEXT" });
  }, t.prototype.prevYear = function() {
    var e = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: e.dateEnv.addYears(e.currentDate, -1)
    });
  }, t.prototype.nextYear = function() {
    var e = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: e.dateEnv.addYears(e.currentDate, 1)
    });
  }, t.prototype.today = function() {
    var e = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: Ne(e.calendarOptions.now, e.dateEnv)
    });
  }, t.prototype.gotoDate = function(e) {
    var r = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: r.dateEnv.createMarker(e)
    });
  }, t.prototype.incrementDate = function(e) {
    var r = this.getCurrentData(), n = k(e);
    n && (this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: r.dateEnv.add(r.currentDate, n)
    }));
  }, t.prototype.getDate = function() {
    var e = this.getCurrentData();
    return e.dateEnv.toDate(e.currentDate);
  }, t.prototype.formatDate = function(e, r) {
    var n = this.getCurrentData().dateEnv;
    return n.format(n.createMarker(e), U(r));
  }, t.prototype.formatRange = function(e, r, n) {
    var a = this.getCurrentData().dateEnv;
    return a.formatRange(a.createMarker(e), a.createMarker(r), U(n), n);
  }, t.prototype.formatIso = function(e, r) {
    var n = this.getCurrentData().dateEnv;
    return n.formatIso(n.createMarker(e), { omitTime: r });
  }, t.prototype.select = function(e, r) {
    var n;
    r == null ? e.start != null ? n = e : n = {
      start: e,
      end: null
    } : n = {
      start: e,
      end: r
    };
    var a = this.getCurrentData(), i = ts(n, a.dateEnv, k({ days: 1 }));
    i && (this.dispatch({ type: "SELECT_DATES", selection: i }), na(i, null, a));
  }, t.prototype.unselect = function(e) {
    var r = this.getCurrentData();
    r.dateSelection && (this.dispatch({ type: "UNSELECT_DATES" }), ss(e, r));
  }, t.prototype.addEvent = function(e, r) {
    if (e instanceof O) {
      var n = e._def, a = e._instance, i = this.getCurrentData();
      return i.eventStore.defs[n.defId] || (this.dispatch({
        type: "ADD_EVENTS",
        eventStore: Ut({ def: n, instance: a })
      }), this.triggerEventAdd(e)), e;
    }
    var o = this.getCurrentData(), s;
    if (r instanceof ve)
      s = r.internalEventSource;
    else if (typeof r == "boolean")
      r && (s = er(o.eventSources)[0]);
    else if (r != null) {
      var l = this.getEventSourceById(r);
      if (!l)
        return console.warn('Could not find an event source with ID "' + r + '"'), null;
      s = l.internalEventSource;
    }
    var c = Zn(e, s, o, !1);
    if (c) {
      var u = new O(o, c.def, c.def.recurringDef ? null : c.instance);
      return this.dispatch({
        type: "ADD_EVENTS",
        eventStore: Ut(c)
      }), this.triggerEventAdd(u), u;
    }
    return null;
  }, t.prototype.triggerEventAdd = function(e) {
    var r = this, n = this.getCurrentData().emitter;
    n.trigger("eventAdd", {
      event: e,
      relatedEvents: [],
      revert: function() {
        r.dispatch({
          type: "REMOVE_EVENTS",
          eventStore: oa(e)
        });
      }
    });
  }, t.prototype.getEventById = function(e) {
    var r = this.getCurrentData(), n = r.eventStore, a = n.defs, i = n.instances;
    e = String(e);
    for (var o in a) {
      var s = a[o];
      if (s.publicId === e) {
        if (s.recurringDef)
          return new O(r, s, null);
        for (var l in i) {
          var c = i[l];
          if (c.defId === s.defId)
            return new O(r, s, c);
        }
      }
    }
    return null;
  }, t.prototype.getEvents = function() {
    var e = this.getCurrentData();
    return oe(e.eventStore, e);
  }, t.prototype.removeAllEvents = function() {
    this.dispatch({ type: "REMOVE_ALL_EVENTS" });
  }, t.prototype.getEventSources = function() {
    var e = this.getCurrentData(), r = e.eventSources, n = [];
    for (var a in r)
      n.push(new ve(e, r[a]));
    return n;
  }, t.prototype.getEventSourceById = function(e) {
    var r = this.getCurrentData(), n = r.eventSources;
    e = String(e);
    for (var a in n)
      if (n[a].publicId === e)
        return new ve(r, n[a]);
    return null;
  }, t.prototype.addEventSource = function(e) {
    var r = this.getCurrentData();
    if (e instanceof ve)
      return r.eventSources[e.internalEventSource.sourceId] || this.dispatch({
        type: "ADD_EVENT_SOURCES",
        sources: [e.internalEventSource]
      }), e;
    var n = aa(e, r);
    return n ? (this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [n] }), new ve(r, n)) : null;
  }, t.prototype.removeAllEventSources = function() {
    this.dispatch({ type: "REMOVE_ALL_EVENT_SOURCES" });
  }, t.prototype.refetchEvents = function() {
    this.dispatch({ type: "FETCH_EVENT_SOURCES", isRefetch: !0 });
  }, t.prototype.scrollToTime = function(e) {
    var r = k(e);
    r && this.trigger("_scrollRequest", { time: r });
  }, t;
}(), O = function() {
  function t(e, r, n) {
    this._context = e, this._def = r, this._instance = n || null;
  }
  return t.prototype.setProp = function(e, r) {
    var n, a;
    if (e in jn)
      console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
    else if (e === "id")
      r = Ze[e](r), this.mutate({
        standardProps: { publicId: r }
      });
    else if (e in Ze)
      r = Ze[e](r), this.mutate({
        standardProps: (n = {}, n[e] = r, n)
      });
    else if (e in at) {
      var i = at[e](r);
      e === "color" ? i = { backgroundColor: r, borderColor: r } : e === "editable" ? i = { startEditable: r, durationEditable: r } : i = (a = {}, a[e] = r, a), this.mutate({
        standardProps: { ui: i }
      });
    } else
      console.warn("Could not set prop '" + e + "'. Use setExtendedProp instead.");
  }, t.prototype.setExtendedProp = function(e, r) {
    var n;
    this.mutate({
      extendedProps: (n = {}, n[e] = r, n)
    });
  }, t.prototype.setStart = function(e, r) {
    r === void 0 && (r = {});
    var n = this._context.dateEnv, a = n.createMarker(e);
    if (a && this._instance) {
      var i = this._instance.range, o = pe(i.start, a, n, r.granularity);
      r.maintainDuration ? this.mutate({ datesDelta: o }) : this.mutate({ startDelta: o });
    }
  }, t.prototype.setEnd = function(e, r) {
    r === void 0 && (r = {});
    var n = this._context.dateEnv, a;
    if (!(e != null && (a = n.createMarker(e), !a)) && this._instance)
      if (a) {
        var i = pe(this._instance.range.end, a, n, r.granularity);
        this.mutate({ endDelta: i });
      } else
        this.mutate({ standardProps: { hasEnd: !1 } });
  }, t.prototype.setDates = function(e, r, n) {
    n === void 0 && (n = {});
    var a = this._context.dateEnv, i = { allDay: n.allDay }, o = a.createMarker(e), s;
    if (!!o && !(r != null && (s = a.createMarker(r), !s)) && this._instance) {
      var l = this._instance.range;
      n.allDay === !0 && (l = $n(l));
      var c = pe(l.start, o, a, n.granularity);
      if (s) {
        var u = pe(l.end, s, a, n.granularity);
        vo(c, u) ? this.mutate({ datesDelta: c, standardProps: i }) : this.mutate({ startDelta: c, endDelta: u, standardProps: i });
      } else
        i.hasEnd = !1, this.mutate({ datesDelta: c, standardProps: i });
    }
  }, t.prototype.moveStart = function(e) {
    var r = k(e);
    r && this.mutate({ startDelta: r });
  }, t.prototype.moveEnd = function(e) {
    var r = k(e);
    r && this.mutate({ endDelta: r });
  }, t.prototype.moveDates = function(e) {
    var r = k(e);
    r && this.mutate({ datesDelta: r });
  }, t.prototype.setAllDay = function(e, r) {
    r === void 0 && (r = {});
    var n = { allDay: e }, a = r.maintainDuration;
    a == null && (a = this._context.options.allDayMaintainDuration), this._def.allDay !== e && (n.hasEnd = a), this.mutate({ standardProps: n });
  }, t.prototype.formatRange = function(e) {
    var r = this._context.dateEnv, n = this._instance, a = U(e);
    return this._def.hasEnd ? r.formatRange(n.range.start, n.range.end, a, {
      forcedStartTzo: n.forcedStartTzo,
      forcedEndTzo: n.forcedEndTzo
    }) : r.format(n.range.start, a, {
      forcedTzo: n.forcedStartTzo
    });
  }, t.prototype.mutate = function(e) {
    var r = this._instance;
    if (r) {
      var n = this._def, a = this._context, i = a.getCurrentData().eventStore, o = nr(i, r.instanceId), s = {
        "": {
          display: "",
          startEditable: !0,
          durationEditable: !0,
          constraints: [],
          overlap: null,
          allows: [],
          backgroundColor: "",
          borderColor: "",
          textColor: "",
          classNames: []
        }
      };
      o = lr(o, s, e, a);
      var l = new t(a, n, r);
      this._def = o.defs[n.defId], this._instance = o.instances[r.instanceId], a.dispatch({
        type: "MERGE_EVENTS",
        eventStore: o
      }), a.emitter.trigger("eventChange", {
        oldEvent: l,
        event: this,
        relatedEvents: oe(o, a, r),
        revert: function() {
          a.dispatch({
            type: "RESET_EVENTS",
            eventStore: i
          });
        }
      });
    }
  }, t.prototype.remove = function() {
    var e = this._context, r = oa(this);
    e.dispatch({
      type: "REMOVE_EVENTS",
      eventStore: r
    }), e.emitter.trigger("eventRemove", {
      event: this,
      relatedEvents: [],
      revert: function() {
        e.dispatch({
          type: "MERGE_EVENTS",
          eventStore: r
        });
      }
    });
  }, Object.defineProperty(t.prototype, "source", {
    get: function() {
      var e = this._def.sourceId;
      return e ? new ve(this._context, this._context.getCurrentData().eventSources[e]) : null;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "start", {
    get: function() {
      return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "end", {
    get: function() {
      return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "startStr", {
    get: function() {
      var e = this._instance;
      return e ? this._context.dateEnv.formatIso(e.range.start, {
        omitTime: this._def.allDay,
        forcedTzo: e.forcedStartTzo
      }) : "";
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "endStr", {
    get: function() {
      var e = this._instance;
      return e && this._def.hasEnd ? this._context.dateEnv.formatIso(e.range.end, {
        omitTime: this._def.allDay,
        forcedTzo: e.forcedEndTzo
      }) : "";
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "id", {
    get: function() {
      return this._def.publicId;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "groupId", {
    get: function() {
      return this._def.groupId;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "allDay", {
    get: function() {
      return this._def.allDay;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "title", {
    get: function() {
      return this._def.title;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "url", {
    get: function() {
      return this._def.url;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "display", {
    get: function() {
      return this._def.ui.display || "auto";
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "startEditable", {
    get: function() {
      return this._def.ui.startEditable;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "durationEditable", {
    get: function() {
      return this._def.ui.durationEditable;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "constraint", {
    get: function() {
      return this._def.ui.constraints[0] || null;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "overlap", {
    get: function() {
      return this._def.ui.overlap;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "allow", {
    get: function() {
      return this._def.ui.allows[0] || null;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "backgroundColor", {
    get: function() {
      return this._def.ui.backgroundColor;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "borderColor", {
    get: function() {
      return this._def.ui.borderColor;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "textColor", {
    get: function() {
      return this._def.ui.textColor;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "classNames", {
    get: function() {
      return this._def.ui.classNames;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "extendedProps", {
    get: function() {
      return this._def.extendedProps;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.toPlainObject = function(e) {
    e === void 0 && (e = {});
    var r = this._def, n = r.ui, a = this, i = a.startStr, o = a.endStr, s = {};
    return r.title && (s.title = r.title), i && (s.start = i), o && (s.end = o), r.publicId && (s.id = r.publicId), r.groupId && (s.groupId = r.groupId), r.url && (s.url = r.url), n.display && n.display !== "auto" && (s.display = n.display), e.collapseColor && n.backgroundColor && n.backgroundColor === n.borderColor ? s.color = n.backgroundColor : (n.backgroundColor && (s.backgroundColor = n.backgroundColor), n.borderColor && (s.borderColor = n.borderColor)), n.textColor && (s.textColor = n.textColor), n.classNames.length && (s.classNames = n.classNames), Object.keys(r.extendedProps).length && (e.collapseExtendedProps ? h(s, r.extendedProps) : s.extendedProps = r.extendedProps), s;
  }, t.prototype.toJSON = function() {
    return this.toPlainObject();
  }, t;
}();
function oa(t) {
  var e, r, n = t._def, a = t._instance;
  return {
    defs: (e = {}, e[n.defId] = n, e),
    instances: a ? (r = {}, r[a.instanceId] = a, r) : {}
  };
}
function oe(t, e, r) {
  var n = t.defs, a = t.instances, i = [], o = r ? r.instanceId : "";
  for (var s in a) {
    var l = a[s], c = n[l.defId];
    l.instanceId !== o && i.push(new O(e, c, l));
  }
  return i;
}
var sa = {};
function gs(t, e) {
  sa[t] = e;
}
function ms(t) {
  return new sa[t]();
}
var ys = function() {
  function t() {
  }
  return t.prototype.getMarkerYear = function(e) {
    return e.getUTCFullYear();
  }, t.prototype.getMarkerMonth = function(e) {
    return e.getUTCMonth();
  }, t.prototype.getMarkerDay = function(e) {
    return e.getUTCDate();
  }, t.prototype.arrayToMarker = function(e) {
    return F(e);
  }, t.prototype.markerToArray = function(e) {
    return J(e);
  }, t;
}();
gs("gregory", ys);
var Es = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function Ss(t) {
  var e = Es.exec(t);
  if (e) {
    var r = new Date(Date.UTC(Number(e[1]), e[3] ? Number(e[3]) - 1 : 0, Number(e[5] || 1), Number(e[7] || 0), Number(e[8] || 0), Number(e[10] || 0), e[12] ? Number("0." + e[12]) * 1e3 : 0));
    if (Gn(r)) {
      var n = null;
      return e[13] && (n = (e[15] === "-" ? -1 : 1) * (Number(e[16] || 0) * 60 + Number(e[18] || 0))), {
        marker: r,
        isTimeUnspecified: !e[6],
        timeZoneOffset: n
      };
    }
  }
  return null;
}
var bs = function() {
  function t(e) {
    var r = this.timeZone = e.timeZone, n = r !== "local" && r !== "UTC";
    e.namedTimeZoneImpl && n && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(r)), this.canComputeOffset = Boolean(!n || this.namedTimeZoneImpl), this.calendarSystem = ms(e.calendarSystem), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, e.weekNumberCalculation === "ISO" && (this.weekDow = 1, this.weekDoy = 4), typeof e.firstDay == "number" && (this.weekDow = e.firstDay), typeof e.weekNumberCalculation == "function" && (this.weekNumberFunc = e.weekNumberCalculation), this.weekText = e.weekText != null ? e.weekText : e.locale.options.weekText, this.weekTextLong = (e.weekTextLong != null ? e.weekTextLong : e.locale.options.weekTextLong) || this.weekText, this.cmdFormatter = e.cmdFormatter, this.defaultSeparator = e.defaultSeparator;
  }
  return t.prototype.createMarker = function(e) {
    var r = this.createMarkerMeta(e);
    return r === null ? null : r.marker;
  }, t.prototype.createNowMarker = function() {
    return this.canComputeOffset ? this.timestampToMarker(new Date().valueOf()) : F(Yr(new Date()));
  }, t.prototype.createMarkerMeta = function(e) {
    if (typeof e == "string")
      return this.parse(e);
    var r = null;
    return typeof e == "number" ? r = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (r = this.timestampToMarker(e))) : Array.isArray(e) && (r = F(e)), r === null || !Gn(r) ? null : { marker: r, isTimeUnspecified: !1, forcedTzo: null };
  }, t.prototype.parse = function(e) {
    var r = Ss(e);
    if (r === null)
      return null;
    var n = r.marker, a = null;
    return r.timeZoneOffset !== null && (this.canComputeOffset ? n = this.timestampToMarker(n.valueOf() - r.timeZoneOffset * 60 * 1e3) : a = r.timeZoneOffset), { marker: n, isTimeUnspecified: r.isTimeUnspecified, forcedTzo: a };
  }, t.prototype.getYear = function(e) {
    return this.calendarSystem.getMarkerYear(e);
  }, t.prototype.getMonth = function(e) {
    return this.calendarSystem.getMarkerMonth(e);
  }, t.prototype.add = function(e, r) {
    var n = this.calendarSystem.markerToArray(e);
    return n[0] += r.years, n[1] += r.months, n[2] += r.days, n[6] += r.milliseconds, this.calendarSystem.arrayToMarker(n);
  }, t.prototype.subtract = function(e, r) {
    var n = this.calendarSystem.markerToArray(e);
    return n[0] -= r.years, n[1] -= r.months, n[2] -= r.days, n[6] -= r.milliseconds, this.calendarSystem.arrayToMarker(n);
  }, t.prototype.addYears = function(e, r) {
    var n = this.calendarSystem.markerToArray(e);
    return n[0] += r, this.calendarSystem.arrayToMarker(n);
  }, t.prototype.addMonths = function(e, r) {
    var n = this.calendarSystem.markerToArray(e);
    return n[1] += r, this.calendarSystem.arrayToMarker(n);
  }, t.prototype.diffWholeYears = function(e, r) {
    var n = this.calendarSystem;
    return Q(e) === Q(r) && n.getMarkerDay(e) === n.getMarkerDay(r) && n.getMarkerMonth(e) === n.getMarkerMonth(r) ? n.getMarkerYear(r) - n.getMarkerYear(e) : null;
  }, t.prototype.diffWholeMonths = function(e, r) {
    var n = this.calendarSystem;
    return Q(e) === Q(r) && n.getMarkerDay(e) === n.getMarkerDay(r) ? n.getMarkerMonth(r) - n.getMarkerMonth(e) + (n.getMarkerYear(r) - n.getMarkerYear(e)) * 12 : null;
  }, t.prototype.greatestWholeUnit = function(e, r) {
    var n = this.diffWholeYears(e, r);
    return n !== null ? { unit: "year", value: n } : (n = this.diffWholeMonths(e, r), n !== null ? { unit: "month", value: n } : (n = eo(e, r), n !== null ? { unit: "week", value: n } : (n = Qe(e, r), n !== null ? { unit: "day", value: n } : (n = $i(e, r), Dt(n) ? { unit: "hour", value: n } : (n = Ki(e, r), Dt(n) ? { unit: "minute", value: n } : (n = Ji(e, r), Dt(n) ? { unit: "second", value: n } : { unit: "millisecond", value: r.valueOf() - e.valueOf() }))))));
  }, t.prototype.countDurationsBetween = function(e, r, n) {
    var a;
    return n.years && (a = this.diffWholeYears(e, r), a !== null) ? a / ho(n) : n.months && (a = this.diffWholeMonths(e, r), a !== null) ? a / go(n) : n.days && (a = Qe(e, r), a !== null) ? a / he(n) : (r.valueOf() - e.valueOf()) / xe(n);
  }, t.prototype.startOf = function(e, r) {
    return r === "year" ? this.startOfYear(e) : r === "month" ? this.startOfMonth(e) : r === "week" ? this.startOfWeek(e) : r === "day" ? H(e) : r === "hour" ? to(e) : r === "minute" ? ro(e) : r === "second" ? no(e) : null;
  }, t.prototype.startOfYear = function(e) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(e)
    ]);
  }, t.prototype.startOfMonth = function(e) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(e),
      this.calendarSystem.getMarkerMonth(e)
    ]);
  }, t.prototype.startOfWeek = function(e) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(e),
      this.calendarSystem.getMarkerMonth(e),
      e.getUTCDate() - (e.getUTCDay() - this.weekDow + 7) % 7
    ]);
  }, t.prototype.computeWeekNumber = function(e) {
    return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : ao(e, this.weekDow, this.weekDoy);
  }, t.prototype.format = function(e, r, n) {
    return n === void 0 && (n = {}), r.format({
      marker: e,
      timeZoneOffset: n.forcedTzo != null ? n.forcedTzo : this.offsetForMarker(e)
    }, this);
  }, t.prototype.formatRange = function(e, r, n, a) {
    return a === void 0 && (a = {}), a.isEndExclusive && (r = le(r, -1)), n.formatRange({
      marker: e,
      timeZoneOffset: a.forcedStartTzo != null ? a.forcedStartTzo : this.offsetForMarker(e)
    }, {
      marker: r,
      timeZoneOffset: a.forcedEndTzo != null ? a.forcedEndTzo : this.offsetForMarker(r)
    }, this, a.defaultSeparator);
  }, t.prototype.formatIso = function(e, r) {
    r === void 0 && (r = {});
    var n = null;
    return r.omitTimeZoneOffset || (r.forcedTzo != null ? n = r.forcedTzo : n = this.offsetForMarker(e)), mo(e, n, r.omitTime);
  }, t.prototype.timestampToMarker = function(e) {
    return this.timeZone === "local" ? F(Yr(new Date(e))) : this.timeZone === "UTC" || !this.namedTimeZoneImpl ? new Date(e) : F(this.namedTimeZoneImpl.timestampToArray(e));
  }, t.prototype.offsetForMarker = function(e) {
    return this.timeZone === "local" ? -jr(J(e)).getTimezoneOffset() : this.timeZone === "UTC" ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(J(e)) : null;
  }, t.prototype.toDate = function(e, r) {
    return this.timeZone === "local" ? jr(J(e)) : this.timeZone === "UTC" ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - this.namedTimeZoneImpl.offsetForArray(J(e)) * 1e3 * 60) : new Date(e.valueOf() - (r || 0));
  }, t;
}(), Ds = [], la = {
  code: "en",
  week: {
    dow: 0,
    doy: 4
  },
  direction: "ltr",
  buttonText: {
    prev: "prev",
    next: "next",
    prevYear: "prev year",
    nextYear: "next year",
    year: "year",
    today: "today",
    month: "month",
    week: "week",
    day: "day",
    list: "list"
  },
  weekText: "W",
  weekTextLong: "Week",
  closeHint: "Close",
  timeHint: "Time",
  eventHint: "Event",
  allDayText: "all-day",
  moreLinkText: "more",
  noEventsText: "No events to display"
}, ua = h(h({}, la), {
  buttonHints: {
    prev: "Previous $0",
    next: "Next $0",
    today: function(t, e) {
      return e === "day" ? "Today" : "This " + t;
    }
  },
  viewHint: "$0 view",
  navLinkHint: "Go to $0",
  moreLinkHint: function(t) {
    return "Show " + t + " more event" + (t === 1 ? "" : "s");
  }
});
function Cs(t) {
  for (var e = t.length > 0 ? t[0].code : "en", r = Ds.concat(t), n = {
    en: ua
  }, a = 0, i = r; a < i.length; a++) {
    var o = i[a];
    n[o.code] = o;
  }
  return {
    map: n,
    defaultCode: e
  };
}
function ca(t, e) {
  return typeof t == "object" && !Array.isArray(t) ? fa(t.code, [t.code], t) : Rs(t, e);
}
function Rs(t, e) {
  var r = [].concat(t || []), n = ws(r, e) || ua;
  return fa(t, r, n);
}
function ws(t, e) {
  for (var r = 0; r < t.length; r += 1)
    for (var n = t[r].toLocaleLowerCase().split("-"), a = n.length; a > 0; a -= 1) {
      var i = n.slice(0, a).join("-");
      if (e[i])
        return e[i];
    }
  return null;
}
function fa(t, e, r) {
  var n = Qt([la, r], ["buttonText"]);
  delete n.code;
  var a = n.week;
  return delete n.week, {
    codeArg: t,
    codes: e,
    week: a,
    simpleNumberFormat: new Intl.NumberFormat(t),
    options: n
  };
}
var Ts = {
  startTime: "09:00",
  endTime: "17:00",
  daysOfWeek: [1, 2, 3, 4, 5],
  display: "inverse-background",
  classNames: "fc-non-business",
  groupId: "_businessHours"
};
function _s(t, e) {
  return nt(Ms(t), null, e);
}
function Ms(t) {
  var e;
  return t === !0 ? e = [{}] : Array.isArray(t) ? e = t.filter(function(r) {
    return r.daysOfWeek;
  }) : typeof t == "object" && t ? e = [t] : e = [], e = e.map(function(r) {
    return h(h({}, Ts), r);
  }), e;
}
function ks(t, e) {
  return t.left >= e.left && t.left < e.right && t.top >= e.top && t.top < e.bottom;
}
function da(t, e) {
  var r = {
    left: Math.max(t.left, e.left),
    right: Math.min(t.right, e.right),
    top: Math.max(t.top, e.top),
    bottom: Math.min(t.bottom, e.bottom)
  };
  return r.left < r.right && r.top < r.bottom ? r : !1;
}
function Is(t, e) {
  return {
    left: Math.min(Math.max(t.left, e.left), e.right),
    top: Math.min(Math.max(t.top, e.top), e.bottom)
  };
}
function Ps(t) {
  return {
    left: (t.left + t.right) / 2,
    top: (t.top + t.bottom) / 2
  };
}
function Hs(t, e) {
  return {
    left: t.left - e.left,
    top: t.top - e.top
  };
}
var Tt;
function va() {
  return Tt == null && (Tt = xs()), Tt;
}
function xs() {
  if (typeof document > "u")
    return !0;
  var t = document.createElement("div");
  t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.innerHTML = "<table><tr><td><div></div></td></tr></table>", t.querySelector("table").style.height = "100px", t.querySelector("div").style.height = "100%", document.body.appendChild(t);
  var e = t.querySelector("div"), r = e.offsetHeight > 0;
  return document.body.removeChild(t), r;
}
function pa(t, e, r, n) {
  return {
    dow: t.getUTCDay(),
    isDisabled: Boolean(n && !ie(n.activeRange, t)),
    isOther: Boolean(n && !ie(n.currentRange, t)),
    isToday: Boolean(e && ie(e, t)),
    isPast: Boolean(r ? t < r : e ? t < e.start : !1),
    isFuture: Boolean(r ? t > r : e ? t >= e.end : !1)
  };
}
function ur(t, e) {
  var r = [
    "fc-day",
    "fc-day-" + Zi[t.dow]
  ];
  return t.isDisabled ? r.push("fc-day-disabled") : (t.isToday && (r.push("fc-day-today"), r.push(e.getClass("today"))), t.isPast && r.push("fc-day-past"), t.isFuture && r.push("fc-day-future"), t.isOther && r.push("fc-day-other")), r;
}
var As = U({ year: "numeric", month: "long", day: "numeric" }), Ns = U({ week: "long" });
function cr(t, e, r, n) {
  r === void 0 && (r = "day"), n === void 0 && (n = !0);
  var a = t.dateEnv, i = t.options, o = t.calendarApi, s = a.format(e, r === "week" ? Ns : As);
  if (i.navLinks) {
    var l = a.toDate(e), c = function(u) {
      var f = r === "day" ? i.navLinkDayClick : r === "week" ? i.navLinkWeekClick : null;
      typeof f == "function" ? f.call(o, a.toDate(e), u) : (typeof f == "string" && (r = f), o.zoomTo(e, r));
    };
    return h({ title: _e(i.navLinkHint, [s, l], s), "data-navlink": "" }, n ? Fn(c) : { onClick: c });
  }
  return { "aria-label": s };
}
var _t = null;
function Os() {
  return _t === null && (_t = Ls()), _t;
}
function Ls() {
  var t = document.createElement("div");
  Te(t, {
    position: "absolute",
    top: -1e3,
    left: 0,
    border: 0,
    padding: 0,
    overflow: "scroll",
    direction: "rtl"
  }), t.innerHTML = "<div></div>", document.body.appendChild(t);
  var e = t.firstChild, r = e.getBoundingClientRect().left > t.getBoundingClientRect().left;
  return Xt(t), r;
}
var Mt;
function Us() {
  return Mt || (Mt = Vs()), Mt;
}
function Vs() {
  var t = document.createElement("div");
  t.style.overflow = "scroll", t.style.position = "absolute", t.style.top = "-9999px", t.style.left = "-9999px", document.body.appendChild(t);
  var e = ha(t);
  return document.body.removeChild(t), e;
}
function ha(t) {
  return {
    x: t.offsetHeight - t.clientHeight,
    y: t.offsetWidth - t.clientWidth
  };
}
function Ws(t, e) {
  e === void 0 && (e = !1);
  var r = window.getComputedStyle(t), n = parseInt(r.borderLeftWidth, 10) || 0, a = parseInt(r.borderRightWidth, 10) || 0, i = parseInt(r.borderTopWidth, 10) || 0, o = parseInt(r.borderBottomWidth, 10) || 0, s = ha(t), l = s.y - n - a, c = s.x - i - o, u = {
    borderLeft: n,
    borderRight: a,
    borderTop: i,
    borderBottom: o,
    scrollbarBottom: c,
    scrollbarLeft: 0,
    scrollbarRight: 0
  };
  return Os() && r.direction === "rtl" ? u.scrollbarLeft = l : u.scrollbarRight = l, e && (u.paddingLeft = parseInt(r.paddingLeft, 10) || 0, u.paddingRight = parseInt(r.paddingRight, 10) || 0, u.paddingTop = parseInt(r.paddingTop, 10) || 0, u.paddingBottom = parseInt(r.paddingBottom, 10) || 0), u;
}
function Bs(t, e, r) {
  e === void 0 && (e = !1);
  var n = r ? t.getBoundingClientRect() : fr(t), a = Ws(t, e), i = {
    left: n.left + a.borderLeft + a.scrollbarLeft,
    right: n.right - a.borderRight - a.scrollbarRight,
    top: n.top + a.borderTop,
    bottom: n.bottom - a.borderBottom - a.scrollbarBottom
  };
  return e && (i.left += a.paddingLeft, i.right -= a.paddingRight, i.top += a.paddingTop, i.bottom -= a.paddingBottom), i;
}
function fr(t) {
  var e = t.getBoundingClientRect();
  return {
    left: e.left + window.pageXOffset,
    top: e.top + window.pageYOffset,
    right: e.right + window.pageXOffset,
    bottom: e.bottom + window.pageYOffset
  };
}
function Fs(t) {
  for (var e = ga(t), r = t.getBoundingClientRect(), n = 0, a = e; n < a.length; n++) {
    var i = a[n], o = da(r, i.getBoundingClientRect());
    if (o)
      r = o;
    else
      return null;
  }
  return r;
}
function ga(t) {
  for (var e = []; t instanceof HTMLElement; ) {
    var r = window.getComputedStyle(t);
    if (r.position === "fixed")
      break;
    /(auto|scroll)/.test(r.overflow + r.overflowY + r.overflowX) && e.push(t), t = t.parentNode;
  }
  return e;
}
function zs(t, e, r) {
  var n = !1, a = function() {
    n || (n = !0, e.apply(this, arguments));
  }, i = function() {
    n || (n = !0, r && r.apply(this, arguments));
  }, o = t(a, i);
  o && typeof o.then == "function" && o.then(a, i);
}
var vt = function() {
  function t() {
    this.handlers = {}, this.thisContext = null;
  }
  return t.prototype.setThisContext = function(e) {
    this.thisContext = e;
  }, t.prototype.setOptions = function(e) {
    this.options = e;
  }, t.prototype.on = function(e, r) {
    Gs(this.handlers, e, r);
  }, t.prototype.off = function(e, r) {
    qs(this.handlers, e, r);
  }, t.prototype.trigger = function(e) {
    for (var r = [], n = 1; n < arguments.length; n++)
      r[n - 1] = arguments[n];
    for (var a = this.handlers[e] || [], i = this.options && this.options[e], o = [].concat(i || [], a), s = 0, l = o; s < l.length; s++) {
      var c = l[s];
      c.apply(this.thisContext, r);
    }
  }, t.prototype.hasHandlers = function(e) {
    return Boolean(this.handlers[e] && this.handlers[e].length || this.options && this.options[e]);
  }, t;
}();
function Gs(t, e, r) {
  (t[e] || (t[e] = [])).push(r);
}
function qs(t, e, r) {
  r ? t[e] && (t[e] = t[e].filter(function(n) {
    return n !== r;
  })) : delete t[e];
}
var Bt = function() {
  function t(e, r, n, a) {
    this.els = r;
    var i = this.originClientRect = e.getBoundingClientRect();
    n && this.buildElHorizontals(i.left), a && this.buildElVerticals(i.top);
  }
  return t.prototype.buildElHorizontals = function(e) {
    for (var r = [], n = [], a = 0, i = this.els; a < i.length; a++) {
      var o = i[a], s = o.getBoundingClientRect();
      r.push(s.left - e), n.push(s.right - e);
    }
    this.lefts = r, this.rights = n;
  }, t.prototype.buildElVerticals = function(e) {
    for (var r = [], n = [], a = 0, i = this.els; a < i.length; a++) {
      var o = i[a], s = o.getBoundingClientRect();
      r.push(s.top - e), n.push(s.bottom - e);
    }
    this.tops = r, this.bottoms = n;
  }, t.prototype.leftToIndex = function(e) {
    var r = this, n = r.lefts, a = r.rights, i = n.length, o;
    for (o = 0; o < i; o += 1)
      if (e >= n[o] && e < a[o])
        return o;
  }, t.prototype.topToIndex = function(e) {
    var r = this, n = r.tops, a = r.bottoms, i = n.length, o;
    for (o = 0; o < i; o += 1)
      if (e >= n[o] && e < a[o])
        return o;
  }, t.prototype.getWidth = function(e) {
    return this.rights[e] - this.lefts[e];
  }, t.prototype.getHeight = function(e) {
    return this.bottoms[e] - this.tops[e];
  }, t;
}(), dr = function() {
  function t() {
  }
  return t.prototype.getMaxScrollTop = function() {
    return this.getScrollHeight() - this.getClientHeight();
  }, t.prototype.getMaxScrollLeft = function() {
    return this.getScrollWidth() - this.getClientWidth();
  }, t.prototype.canScrollVertically = function() {
    return this.getMaxScrollTop() > 0;
  }, t.prototype.canScrollHorizontally = function() {
    return this.getMaxScrollLeft() > 0;
  }, t.prototype.canScrollUp = function() {
    return this.getScrollTop() > 0;
  }, t.prototype.canScrollDown = function() {
    return this.getScrollTop() < this.getMaxScrollTop();
  }, t.prototype.canScrollLeft = function() {
    return this.getScrollLeft() > 0;
  }, t.prototype.canScrollRight = function() {
    return this.getScrollLeft() < this.getMaxScrollLeft();
  }, t;
}(), Ys = function(t) {
  R(e, t);
  function e(r) {
    var n = t.call(this) || this;
    return n.el = r, n;
  }
  return e.prototype.getScrollTop = function() {
    return this.el.scrollTop;
  }, e.prototype.getScrollLeft = function() {
    return this.el.scrollLeft;
  }, e.prototype.setScrollTop = function(r) {
    this.el.scrollTop = r;
  }, e.prototype.setScrollLeft = function(r) {
    this.el.scrollLeft = r;
  }, e.prototype.getScrollWidth = function() {
    return this.el.scrollWidth;
  }, e.prototype.getScrollHeight = function() {
    return this.el.scrollHeight;
  }, e.prototype.getClientHeight = function() {
    return this.el.clientHeight;
  }, e.prototype.getClientWidth = function() {
    return this.el.clientWidth;
  }, e;
}(dr), js = function(t) {
  R(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.getScrollTop = function() {
    return window.pageYOffset;
  }, e.prototype.getScrollLeft = function() {
    return window.pageXOffset;
  }, e.prototype.setScrollTop = function(r) {
    window.scroll(window.pageXOffset, r);
  }, e.prototype.setScrollLeft = function(r) {
    window.scroll(r, window.pageYOffset);
  }, e.prototype.getScrollWidth = function() {
    return document.documentElement.scrollWidth;
  }, e.prototype.getScrollHeight = function() {
    return document.documentElement.scrollHeight;
  }, e.prototype.getClientHeight = function() {
    return document.documentElement.clientHeight;
  }, e.prototype.getClientWidth = function() {
    return document.documentElement.clientWidth;
  }, e;
}(dr), Oe = function() {
  function t(e) {
    this.iconOverrideOption && this.setIconOverride(e[this.iconOverrideOption]);
  }
  return t.prototype.setIconOverride = function(e) {
    var r, n;
    if (typeof e == "object" && e) {
      r = h({}, this.iconClasses);
      for (n in e)
        r[n] = this.applyIconOverridePrefix(e[n]);
      this.iconClasses = r;
    } else
      e === !1 && (this.iconClasses = {});
  }, t.prototype.applyIconOverridePrefix = function(e) {
    var r = this.iconOverridePrefix;
    return r && e.indexOf(r) !== 0 && (e = r + e), e;
  }, t.prototype.getClass = function(e) {
    return this.classes[e] || "";
  }, t.prototype.getIconClass = function(e, r) {
    var n;
    return r && this.rtlIconClasses ? n = this.rtlIconClasses[e] || this.iconClasses[e] : n = this.iconClasses[e], n ? this.baseIconClass + " " + n : "";
  }, t.prototype.getCustomButtonIconClass = function(e) {
    var r;
    return this.iconOverrideCustomButtonOption && (r = e[this.iconOverrideCustomButtonOption], r) ? this.baseIconClass + " " + this.applyIconOverridePrefix(r) : "";
  }, t;
}();
Oe.prototype.classes = {};
Oe.prototype.iconClasses = {};
Oe.prototype.baseIconClass = "";
Oe.prototype.iconOverridePrefix = "";
var Zs = function() {
  function t(e, r, n, a) {
    var i = this;
    this.execFunc = e, this.emitter = r, this.scrollTime = n, this.scrollTimeReset = a, this.handleScrollRequest = function(o) {
      i.queuedRequest = h({}, i.queuedRequest || {}, o), i.drain();
    }, r.on("_scrollRequest", this.handleScrollRequest), this.fireInitialScroll();
  }
  return t.prototype.detach = function() {
    this.emitter.off("_scrollRequest", this.handleScrollRequest);
  }, t.prototype.update = function(e) {
    e && this.scrollTimeReset ? this.fireInitialScroll() : this.drain();
  }, t.prototype.fireInitialScroll = function() {
    this.handleScrollRequest({
      time: this.scrollTime
    });
  }, t.prototype.drain = function() {
    this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null);
  }, t;
}(), fe = Ln({});
function Xs(t, e, r, n, a, i, o, s, l, c, u, f, v) {
  return {
    dateEnv: a,
    options: r,
    pluginHooks: o,
    emitter: c,
    dispatch: s,
    getCurrentData: l,
    calendarApi: u,
    viewSpec: t,
    viewApi: e,
    dateProfileGenerator: n,
    theme: i,
    isRtl: r.direction === "rtl",
    addResizeHandler: function(d) {
      c.on("_resize", d);
    },
    removeResizeHandler: function(d) {
      c.off("_resize", d);
    },
    createScrollResponder: function(d) {
      return new Zs(d, c, k(r.scrollTime), r.scrollTimeReset);
    },
    registerInteractiveComponent: f,
    unregisterInteractiveComponent: v
  };
}
var pt = function(t) {
  R(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.shouldComponentUpdate = function(r, n) {
    return this.debug && console.log(Zr(r, this.props), Zr(n, this.state)), !Rt(this.props, r, this.propEquality) || !Rt(this.state, n, this.stateEquality);
  }, e.prototype.safeSetState = function(r) {
    Rt(this.state, h(h({}, this.state), r), this.stateEquality) || this.setState(r);
  }, e.addPropsEquality = $s, e.addStateEquality = Ks, e.contextType = fe, e;
}(Zt);
pt.prototype.propEquality = {};
pt.prototype.stateEquality = {};
var x = function(t) {
  R(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.contextType = fe, e;
}(pt);
function $s(t) {
  var e = Object.create(this.prototype.propEquality);
  h(e, t), this.prototype.propEquality = e;
}
function Ks(t) {
  var e = Object.create(this.prototype.stateEquality);
  h(e, t), this.prototype.stateEquality = e;
}
function $(t, e) {
  typeof t == "function" ? t(e) : t && (t.current = e);
}
var De = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.uid = Se(), r;
  }
  return e.prototype.prepareHits = function() {
  }, e.prototype.queryHit = function(r, n, a, i) {
    return null;
  }, e.prototype.isValidSegDownEl = function(r) {
    return !this.props.eventDrag && !this.props.eventResize && !V(r, ".fc-event-mirror");
  }, e.prototype.isValidDateDownEl = function(r) {
    return !V(r, ".fc-event:not(.fc-bg-event)") && !V(r, ".fc-more-link") && !V(r, "a[data-navlink]") && !V(r, ".fc-popover");
  }, e;
}(x);
function te(t) {
  return {
    id: Se(),
    deps: t.deps || [],
    reducers: t.reducers || [],
    isLoadingFuncs: t.isLoadingFuncs || [],
    contextInit: [].concat(t.contextInit || []),
    eventRefiners: t.eventRefiners || {},
    eventDefMemberAdders: t.eventDefMemberAdders || [],
    eventSourceRefiners: t.eventSourceRefiners || {},
    isDraggableTransformers: t.isDraggableTransformers || [],
    eventDragMutationMassagers: t.eventDragMutationMassagers || [],
    eventDefMutationAppliers: t.eventDefMutationAppliers || [],
    dateSelectionTransformers: t.dateSelectionTransformers || [],
    datePointTransforms: t.datePointTransforms || [],
    dateSpanTransforms: t.dateSpanTransforms || [],
    views: t.views || {},
    viewPropsTransformers: t.viewPropsTransformers || [],
    isPropsValid: t.isPropsValid || null,
    externalDefTransforms: t.externalDefTransforms || [],
    viewContainerAppends: t.viewContainerAppends || [],
    eventDropTransformers: t.eventDropTransformers || [],
    componentInteractions: t.componentInteractions || [],
    calendarInteractions: t.calendarInteractions || [],
    themeClasses: t.themeClasses || {},
    eventSourceDefs: t.eventSourceDefs || [],
    cmdFormatter: t.cmdFormatter,
    recurringTypes: t.recurringTypes || [],
    namedTimeZonedImpl: t.namedTimeZonedImpl,
    initialView: t.initialView || "",
    elementDraggingImpl: t.elementDraggingImpl,
    optionChangeHandlers: t.optionChangeHandlers || {},
    scrollGridImpl: t.scrollGridImpl || null,
    contentTypeHandlers: t.contentTypeHandlers || {},
    listenerRefiners: t.listenerRefiners || {},
    optionRefiners: t.optionRefiners || {},
    propSetHandlers: t.propSetHandlers || {}
  };
}
function Js(t, e) {
  var r = {}, n = {
    reducers: [],
    isLoadingFuncs: [],
    contextInit: [],
    eventRefiners: {},
    eventDefMemberAdders: [],
    eventSourceRefiners: {},
    isDraggableTransformers: [],
    eventDragMutationMassagers: [],
    eventDefMutationAppliers: [],
    dateSelectionTransformers: [],
    datePointTransforms: [],
    dateSpanTransforms: [],
    views: {},
    viewPropsTransformers: [],
    isPropsValid: null,
    externalDefTransforms: [],
    viewContainerAppends: [],
    eventDropTransformers: [],
    componentInteractions: [],
    calendarInteractions: [],
    themeClasses: {},
    eventSourceDefs: [],
    cmdFormatter: null,
    recurringTypes: [],
    namedTimeZonedImpl: null,
    initialView: "",
    elementDraggingImpl: null,
    optionChangeHandlers: {},
    scrollGridImpl: null,
    contentTypeHandlers: {},
    listenerRefiners: {},
    optionRefiners: {},
    propSetHandlers: {}
  };
  function a(i) {
    for (var o = 0, s = i; o < s.length; o++) {
      var l = s[o];
      r[l.id] || (r[l.id] = !0, a(l.deps), n = el(n, l));
    }
  }
  return t && a(t), a(e), n;
}
function Qs() {
  var t = [], e = [], r;
  return function(n, a) {
    return (!r || !ye(n, t) || !ye(a, e)) && (r = Js(n, a)), t = n, e = a, r;
  };
}
function el(t, e) {
  return {
    reducers: t.reducers.concat(e.reducers),
    isLoadingFuncs: t.isLoadingFuncs.concat(e.isLoadingFuncs),
    contextInit: t.contextInit.concat(e.contextInit),
    eventRefiners: h(h({}, t.eventRefiners), e.eventRefiners),
    eventDefMemberAdders: t.eventDefMemberAdders.concat(e.eventDefMemberAdders),
    eventSourceRefiners: h(h({}, t.eventSourceRefiners), e.eventSourceRefiners),
    isDraggableTransformers: t.isDraggableTransformers.concat(e.isDraggableTransformers),
    eventDragMutationMassagers: t.eventDragMutationMassagers.concat(e.eventDragMutationMassagers),
    eventDefMutationAppliers: t.eventDefMutationAppliers.concat(e.eventDefMutationAppliers),
    dateSelectionTransformers: t.dateSelectionTransformers.concat(e.dateSelectionTransformers),
    datePointTransforms: t.datePointTransforms.concat(e.datePointTransforms),
    dateSpanTransforms: t.dateSpanTransforms.concat(e.dateSpanTransforms),
    views: h(h({}, t.views), e.views),
    viewPropsTransformers: t.viewPropsTransformers.concat(e.viewPropsTransformers),
    isPropsValid: e.isPropsValid || t.isPropsValid,
    externalDefTransforms: t.externalDefTransforms.concat(e.externalDefTransforms),
    viewContainerAppends: t.viewContainerAppends.concat(e.viewContainerAppends),
    eventDropTransformers: t.eventDropTransformers.concat(e.eventDropTransformers),
    calendarInteractions: t.calendarInteractions.concat(e.calendarInteractions),
    componentInteractions: t.componentInteractions.concat(e.componentInteractions),
    themeClasses: h(h({}, t.themeClasses), e.themeClasses),
    eventSourceDefs: t.eventSourceDefs.concat(e.eventSourceDefs),
    cmdFormatter: e.cmdFormatter || t.cmdFormatter,
    recurringTypes: t.recurringTypes.concat(e.recurringTypes),
    namedTimeZonedImpl: e.namedTimeZonedImpl || t.namedTimeZonedImpl,
    initialView: t.initialView || e.initialView,
    elementDraggingImpl: t.elementDraggingImpl || e.elementDraggingImpl,
    optionChangeHandlers: h(h({}, t.optionChangeHandlers), e.optionChangeHandlers),
    scrollGridImpl: e.scrollGridImpl || t.scrollGridImpl,
    contentTypeHandlers: h(h({}, t.contentTypeHandlers), e.contentTypeHandlers),
    listenerRefiners: h(h({}, t.listenerRefiners), e.listenerRefiners),
    optionRefiners: h(h({}, t.optionRefiners), e.optionRefiners),
    propSetHandlers: h(h({}, t.propSetHandlers), e.propSetHandlers)
  };
}
var re = function(t) {
  R(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(Oe);
re.prototype.classes = {
  root: "fc-theme-standard",
  tableCellShaded: "fc-cell-shaded",
  buttonGroup: "fc-button-group",
  button: "fc-button fc-button-primary",
  buttonActive: "fc-button-active"
};
re.prototype.baseIconClass = "fc-icon";
re.prototype.iconClasses = {
  close: "fc-icon-x",
  prev: "fc-icon-chevron-left",
  next: "fc-icon-chevron-right",
  prevYear: "fc-icon-chevrons-left",
  nextYear: "fc-icon-chevrons-right"
};
re.prototype.rtlIconClasses = {
  prev: "fc-icon-chevron-right",
  next: "fc-icon-chevron-left",
  prevYear: "fc-icon-chevrons-right",
  nextYear: "fc-icon-chevrons-left"
};
re.prototype.iconOverrideOption = "buttonIcons";
re.prototype.iconOverrideCustomButtonOption = "icon";
re.prototype.iconOverridePrefix = "fc-icon-";
function tl(t, e) {
  var r = {}, n;
  for (n in t)
    Ft(n, r, t, e);
  for (n in e)
    Ft(n, r, t, e);
  return r;
}
function Ft(t, e, r, n) {
  if (e[t])
    return e[t];
  var a = rl(t, e, r, n);
  return a && (e[t] = a), a;
}
function rl(t, e, r, n) {
  var a = r[t], i = n[t], o = function(u) {
    return a && a[u] !== null ? a[u] : i && i[u] !== null ? i[u] : null;
  }, s = o("component"), l = o("superType"), c = null;
  if (l) {
    if (l === t)
      throw new Error("Can't have a custom view type that references itself");
    c = Ft(l, e, r, n);
  }
  return !s && c && (s = c.component), s ? {
    type: t,
    component: s,
    defaults: h(h({}, c ? c.defaults : {}), a ? a.rawOptions : {}),
    overrides: h(h({}, c ? c.overrides : {}), i ? i.rawOptions : {})
  } : null;
}
var Ce = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.rootElRef = G(), r.handleRootEl = function(n) {
      $(r.rootElRef, n), r.props.elRef && $(r.props.elRef, n);
    }, r;
  }
  return e.prototype.render = function() {
    var r = this, n = this.props, a = n.hookProps;
    return m(vr, { hookProps: a, didMount: n.didMount, willUnmount: n.willUnmount, elRef: this.handleRootEl }, function(i) {
      return m(ya, { hookProps: a, content: n.content, defaultContent: n.defaultContent, backupElRef: r.rootElRef }, function(o, s) {
        return n.children(i, Sa(n.classNames, a), o, s);
      });
    });
  }, e;
}(x), ma = Ln(0);
function ya(t) {
  return m(ma.Consumer, null, function(e) {
    return m(nl, h({ renderId: e }, t));
  });
}
var nl = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.innerElRef = G(), r;
  }
  return e.prototype.render = function() {
    return this.props.children(this.innerElRef, this.renderInnerContent());
  }, e.prototype.componentDidMount = function() {
    this.updateCustomContent();
  }, e.prototype.componentDidUpdate = function() {
    this.updateCustomContent();
  }, e.prototype.componentWillUnmount = function() {
    this.customContentInfo && this.customContentInfo.destroy && this.customContentInfo.destroy();
  }, e.prototype.renderInnerContent = function() {
    var r = this.customContentInfo, n = this.getInnerContent(), a = this.getContentMeta(n);
    return !r || r.contentKey !== a.contentKey ? (r && (r.destroy && r.destroy(), r = this.customContentInfo = null), a.contentKey && (r = this.customContentInfo = h({ contentKey: a.contentKey, contentVal: n[a.contentKey] }, a.buildLifecycleFuncs()))) : r && (r.contentVal = n[a.contentKey]), r ? [] : n;
  }, e.prototype.getInnerContent = function() {
    var r = this.props, n = sn(r.content, r.hookProps);
    return n === void 0 && (n = sn(r.defaultContent, r.hookProps)), n == null ? null : n;
  }, e.prototype.getContentMeta = function(r) {
    var n = this.context.pluginHooks.contentTypeHandlers, a = "", i = null;
    if (r) {
      for (var o in n)
        if (r[o] !== void 0) {
          a = o, i = n[o];
          break;
        }
    }
    return { contentKey: a, buildLifecycleFuncs: i };
  }, e.prototype.updateCustomContent = function() {
    this.customContentInfo && this.customContentInfo.render(
      this.innerElRef.current || this.props.backupElRef.current,
      this.customContentInfo.contentVal
    );
  }, e;
}(x), vr = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.handleRootEl = function(n) {
      r.rootEl = n, r.props.elRef && $(r.props.elRef, n);
    }, r;
  }
  return e.prototype.render = function() {
    return this.props.children(this.handleRootEl);
  }, e.prototype.componentDidMount = function() {
    var r = this.props.didMount;
    r && r(h(h({}, this.props.hookProps), { el: this.rootEl }));
  }, e.prototype.componentWillUnmount = function() {
    var r = this.props.willUnmount;
    r && r(h(h({}, this.props.hookProps), { el: this.rootEl }));
  }, e;
}(x);
function Ea() {
  var t, e, r = [];
  return function(n, a) {
    return (!e || !X(e, a) || n !== t) && (t = n, e = a, r = Sa(n, a)), r;
  };
}
function Sa(t, e) {
  return typeof t == "function" && (t = t(e)), Vt(t);
}
function sn(t, e) {
  return typeof t == "function" ? t(e, m) : t;
}
var zt = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.normalizeClassNames = Ea(), r;
  }
  return e.prototype.render = function() {
    var r = this, n = r.props, a = r.context, i = a.options, o = { view: a.viewApi }, s = this.normalizeClassNames(i.viewClassNames, o);
    return m(vr, { hookProps: o, didMount: i.viewDidMount, willUnmount: i.viewWillUnmount, elRef: n.elRef }, function(l) {
      return n.children(l, ["fc-" + n.viewSpec.type + "-view", "fc-view"].concat(s));
    });
  }, e;
}(x);
function ln(t) {
  return ce(t, al);
}
function al(t) {
  var e = typeof t == "function" ? { component: t } : t, r = e.component;
  return e.content && (r = il(e)), {
    superType: e.type,
    component: r,
    rawOptions: e
  };
}
function il(t) {
  return function(e) {
    return m(fe.Consumer, null, function(r) {
      return m(zt, { viewSpec: r.viewSpec }, function(n, a) {
        var i = h(h({}, e), { nextDayThreshold: r.options.nextDayThreshold });
        return m(Ce, { hookProps: i, classNames: t.classNames, content: t.content, didMount: t.didMount, willUnmount: t.willUnmount, elRef: n }, function(o, s, l, c) {
          return m("div", { className: a.concat(s).join(" "), ref: o }, c);
        });
      });
    });
  };
}
function ol(t, e, r, n) {
  var a = ln(t), i = ln(e.views), o = tl(a, i);
  return ce(o, function(s) {
    return sl(s, i, e, r, n);
  });
}
function sl(t, e, r, n, a) {
  var i = t.overrides.duration || t.defaults.duration || n.duration || r.duration, o = null, s = "", l = "", c = {};
  if (i && (o = ll(i), o)) {
    var u = Lt(o);
    s = u.unit, u.value === 1 && (l = s, c = e[s] ? e[s].rawOptions : {});
  }
  var f = function(d) {
    var p = d.buttonText || {}, E = t.defaults.buttonTextKey;
    return E != null && p[E] != null ? p[E] : p[t.type] != null ? p[t.type] : p[l] != null ? p[l] : null;
  }, v = function(d) {
    var p = d.buttonHints || {}, E = t.defaults.buttonTextKey;
    return E != null && p[E] != null ? p[E] : p[t.type] != null ? p[t.type] : p[l] != null ? p[l] : null;
  };
  return {
    type: t.type,
    component: t.component,
    duration: o,
    durationUnit: s,
    singleUnit: l,
    optionDefaults: t.defaults,
    optionOverrides: h(h({}, c), t.overrides),
    buttonTextOverride: f(n) || f(r) || t.overrides.buttonText,
    buttonTextDefault: f(a) || t.defaults.buttonText || f(Me) || t.type,
    buttonTitleOverride: v(n) || v(r) || t.overrides.buttonHint,
    buttonTitleDefault: v(a) || t.defaults.buttonHint || v(Me)
  };
}
var un = {};
function ll(t) {
  var e = JSON.stringify(t), r = un[e];
  return r === void 0 && (r = k(t), un[e] = r), r;
}
var ba = function() {
  function t(e) {
    this.props = e, this.nowDate = Ne(e.nowInput, e.dateEnv), this.initHiddenDays();
  }
  return t.prototype.buildPrev = function(e, r, n) {
    var a = this.props.dateEnv, i = a.subtract(
      a.startOf(r, e.currentRangeUnit),
      e.dateIncrement
    );
    return this.build(i, -1, n);
  }, t.prototype.buildNext = function(e, r, n) {
    var a = this.props.dateEnv, i = a.add(
      a.startOf(r, e.currentRangeUnit),
      e.dateIncrement
    );
    return this.build(i, 1, n);
  }, t.prototype.build = function(e, r, n) {
    n === void 0 && (n = !0);
    var a = this.props, i, o, s, l, c, u;
    return i = this.buildValidRange(), i = this.trimHiddenDays(i), n && (e = Yo(e, i)), o = this.buildCurrentRangeInfo(e, r), s = /^(year|month|week|day)$/.test(o.unit), l = this.buildRenderRange(this.trimHiddenDays(o.range), o.unit, s), l = this.trimHiddenDays(l), c = l, a.showNonCurrentDates || (c = Ae(c, o.range)), c = this.adjustActiveRange(c), c = Ae(c, i), u = or(o.range, i), {
      validRange: i,
      currentRange: o.range,
      currentRangeUnit: o.unit,
      isRangeAllDay: s,
      activeRange: c,
      renderRange: l,
      slotMinTime: a.slotMinTime,
      slotMaxTime: a.slotMaxTime,
      isValid: u,
      dateIncrement: this.buildDateIncrement(o.duration)
    };
  }, t.prototype.buildValidRange = function() {
    var e = this.props.validRangeInput, r = typeof e == "function" ? e.call(this.props.calendarApi, this.nowDate) : e;
    return this.refineRange(r) || { start: null, end: null };
  }, t.prototype.buildCurrentRangeInfo = function(e, r) {
    var n = this.props, a = null, i = null, o = null, s;
    return n.duration ? (a = n.duration, i = n.durationUnit, o = this.buildRangeFromDuration(e, r, a, i)) : (s = this.props.dayCount) ? (i = "day", o = this.buildRangeFromDayCount(e, r, s)) : (o = this.buildCustomVisibleRange(e)) ? i = n.dateEnv.greatestWholeUnit(o.start, o.end).unit : (a = this.getFallbackDuration(), i = Lt(a).unit, o = this.buildRangeFromDuration(e, r, a, i)), { duration: a, unit: i, range: o };
  }, t.prototype.getFallbackDuration = function() {
    return k({ day: 1 });
  }, t.prototype.adjustActiveRange = function(e) {
    var r = this.props, n = r.dateEnv, a = r.usesMinMaxTime, i = r.slotMinTime, o = r.slotMaxTime, s = e.start, l = e.end;
    return a && (he(i) < 0 && (s = H(s), s = n.add(s, i)), he(o) > 1 && (l = H(l), l = W(l, -1), l = n.add(l, o))), { start: s, end: l };
  }, t.prototype.buildRangeFromDuration = function(e, r, n, a) {
    var i = this.props, o = i.dateEnv, s = i.dateAlignment, l, c, u;
    if (!s) {
      var f = this.props.dateIncrement;
      f && xe(f) < xe(n) ? s = Lt(f).unit : s = a;
    }
    he(n) <= 1 && this.isHiddenDay(l) && (l = this.skipHiddenDays(l, r), l = H(l));
    function v() {
      l = o.startOf(e, s), c = o.add(l, n), u = { start: l, end: c };
    }
    return v(), this.trimHiddenDays(u) || (e = this.skipHiddenDays(e, r), v()), u;
  }, t.prototype.buildRangeFromDayCount = function(e, r, n) {
    var a = this.props, i = a.dateEnv, o = a.dateAlignment, s = 0, l = e, c;
    o && (l = i.startOf(l, o)), l = H(l), l = this.skipHiddenDays(l, r), c = l;
    do
      c = W(c, 1), this.isHiddenDay(c) || (s += 1);
    while (s < n);
    return { start: l, end: c };
  }, t.prototype.buildCustomVisibleRange = function(e) {
    var r = this.props, n = r.visibleRangeInput, a = typeof n == "function" ? n.call(r.calendarApi, r.dateEnv.toDate(e)) : n, i = this.refineRange(a);
    return i && (i.start == null || i.end == null) ? null : i;
  }, t.prototype.buildRenderRange = function(e, r, n) {
    return e;
  }, t.prototype.buildDateIncrement = function(e) {
    var r = this.props.dateIncrement, n;
    return r || ((n = this.props.dateAlignment) ? k(1, n) : e || k({ days: 1 }));
  }, t.prototype.refineRange = function(e) {
    if (e) {
      var r = zo(e, this.props.dateEnv);
      return r && (r = Kn(r)), r;
    }
    return null;
  }, t.prototype.initHiddenDays = function() {
    var e = this.props.hiddenDays || [], r = [], n = 0, a;
    for (this.props.weekends === !1 && e.push(0, 6), a = 0; a < 7; a += 1)
      (r[a] = e.indexOf(a) !== -1) || (n += 1);
    if (!n)
      throw new Error("invalid hiddenDays");
    this.isHiddenDayHash = r;
  }, t.prototype.trimHiddenDays = function(e) {
    var r = e.start, n = e.end;
    return r && (r = this.skipHiddenDays(r)), n && (n = this.skipHiddenDays(n, -1, !0)), r == null || n == null || r < n ? { start: r, end: n } : null;
  }, t.prototype.isHiddenDay = function(e) {
    return e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e];
  }, t.prototype.skipHiddenDays = function(e, r, n) {
    for (r === void 0 && (r = 1), n === void 0 && (n = !1); this.isHiddenDayHash[(e.getUTCDay() + (n ? r : 0) + 7) % 7]; )
      e = W(e, r);
    return e;
  }, t;
}();
function ul(t, e) {
  switch (e.type) {
    case "CHANGE_VIEW_TYPE":
      t = e.viewType;
  }
  return t;
}
function cl(t, e) {
  var r;
  switch (e.type) {
    case "SET_OPTION":
      return h(h({}, t), (r = {}, r[e.optionName] = e.rawOptionValue, r));
    default:
      return t;
  }
}
function fl(t, e, r, n) {
  var a;
  switch (e.type) {
    case "CHANGE_VIEW_TYPE":
      return n.build(e.dateMarker || r);
    case "CHANGE_DATE":
      return n.build(e.dateMarker);
    case "PREV":
      if (a = n.buildPrev(t, r), a.isValid)
        return a;
      break;
    case "NEXT":
      if (a = n.buildNext(t, r), a.isValid)
        return a;
      break;
  }
  return t;
}
function dl(t, e, r) {
  var n = e ? e.activeRange : null;
  return Ca({}, El(t, r), n, r);
}
function vl(t, e, r, n) {
  var a = r ? r.activeRange : null;
  switch (e.type) {
    case "ADD_EVENT_SOURCES":
      return Ca(t, e.sources, a, n);
    case "REMOVE_EVENT_SOURCE":
      return hl(t, e.sourceId);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return r ? Ra(t, a, n) : t;
    case "FETCH_EVENT_SOURCES":
      return pr(t, e.sourceIds ? qn(e.sourceIds) : wa(t, n), a, e.isRefetch || !1, n);
    case "RECEIVE_EVENTS":
    case "RECEIVE_EVENT_ERROR":
      return yl(t, e.sourceId, e.fetchId, e.fetchRange);
    case "REMOVE_ALL_EVENT_SOURCES":
      return {};
    default:
      return t;
  }
}
function pl(t, e, r) {
  var n = e ? e.activeRange : null;
  return pr(t, wa(t, r), n, !0, r);
}
function Da(t) {
  for (var e in t)
    if (t[e].isFetching)
      return !0;
  return !1;
}
function Ca(t, e, r, n) {
  for (var a = {}, i = 0, o = e; i < o.length; i++) {
    var s = o[i];
    a[s.sourceId] = s;
  }
  return r && (a = Ra(a, r, n)), h(h({}, t), a);
}
function hl(t, e) {
  return ue(t, function(r) {
    return r.sourceId !== e;
  });
}
function Ra(t, e, r) {
  return pr(t, ue(t, function(n) {
    return gl(n, e, r);
  }), e, !1, r);
}
function gl(t, e, r) {
  return Ta(t, r) ? !r.options.lazyFetching || !t.fetchRange || t.isFetching || e.start < t.fetchRange.start || e.end > t.fetchRange.end : !t.latestFetchId;
}
function pr(t, e, r, n, a) {
  var i = {};
  for (var o in t) {
    var s = t[o];
    e[o] ? i[o] = ml(s, r, n, a) : i[o] = s;
  }
  return i;
}
function ml(t, e, r, n) {
  var a = n.options, i = n.calendarApi, o = n.pluginHooks.eventSourceDefs[t.sourceDefId], s = Se();
  return o.fetch({
    eventSource: t,
    range: e,
    isRefetch: r,
    context: n
  }, function(l) {
    var c = l.rawEvents;
    a.eventSourceSuccess && (c = a.eventSourceSuccess.call(i, c, l.xhr) || c), t.success && (c = t.success.call(i, c, l.xhr) || c), n.dispatch({
      type: "RECEIVE_EVENTS",
      sourceId: t.sourceId,
      fetchId: s,
      fetchRange: e,
      rawEvents: c
    });
  }, function(l) {
    console.warn(l.message, l), a.eventSourceFailure && a.eventSourceFailure.call(i, l), t.failure && t.failure(l), n.dispatch({
      type: "RECEIVE_EVENT_ERROR",
      sourceId: t.sourceId,
      fetchId: s,
      fetchRange: e,
      error: l
    });
  }), h(h({}, t), { isFetching: !0, latestFetchId: s });
}
function yl(t, e, r, n) {
  var a, i = t[e];
  return i && r === i.latestFetchId ? h(h({}, t), (a = {}, a[e] = h(h({}, i), { isFetching: !1, fetchRange: n }), a)) : t;
}
function wa(t, e) {
  return ue(t, function(r) {
    return Ta(r, e);
  });
}
function El(t, e) {
  var r = ia(e), n = [].concat(t.eventSources || []), a = [];
  t.initialEvents && n.unshift(t.initialEvents), t.events && n.unshift(t.events);
  for (var i = 0, o = n; i < o.length; i++) {
    var s = o[i], l = aa(s, e, r);
    l && a.push(l);
  }
  return a;
}
function Ta(t, e) {
  var r = e.pluginHooks.eventSourceDefs;
  return !r[t.sourceDefId].ignoreRange;
}
function Sl(t, e, r, n, a) {
  switch (e.type) {
    case "RECEIVE_EVENTS":
      return bl(t, r[e.sourceId], e.fetchId, e.fetchRange, e.rawEvents, a);
    case "ADD_EVENTS":
      return Cl(
        t,
        e.eventStore,
        n ? n.activeRange : null,
        a
      );
    case "RESET_EVENTS":
      return e.eventStore;
    case "MERGE_EVENTS":
      return ar(t, e.eventStore);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return n ? me(t, n.activeRange, a) : t;
    case "REMOVE_EVENTS":
      return No(t, e.eventStore);
    case "REMOVE_EVENT_SOURCE":
      return _a(t, e.sourceId);
    case "REMOVE_ALL_EVENT_SOURCES":
      return ft(t, function(i) {
        return !i.sourceId;
      });
    case "REMOVE_ALL_EVENTS":
      return Y();
    default:
      return t;
  }
}
function bl(t, e, r, n, a, i) {
  if (e && r === e.latestFetchId) {
    var o = nt(Dl(a, e, i), e, i);
    return n && (o = me(o, n, i)), ar(_a(t, e.sourceId), o);
  }
  return t;
}
function Dl(t, e, r) {
  var n = r.options.eventDataTransform, a = e ? e.eventDataTransform : null;
  return a && (t = cn(t, a)), n && (t = cn(t, n)), t;
}
function cn(t, e) {
  var r;
  if (!e)
    r = t;
  else {
    r = [];
    for (var n = 0, a = t; n < a.length; n++) {
      var i = a[n], o = e(i);
      o ? r.push(o) : o == null && r.push(i);
    }
  }
  return r;
}
function Cl(t, e, r, n) {
  return r && (e = me(e, r, n)), ar(t, e);
}
function Rl(t, e, r) {
  var n = t.defs, a = ce(t.instances, function(i) {
    var o = n[i.defId];
    return o.allDay || o.recurringDef ? i : h(h({}, i), { range: {
      start: r.createMarker(e.toDate(i.range.start, i.forcedStartTzo)),
      end: r.createMarker(e.toDate(i.range.end, i.forcedEndTzo))
    }, forcedStartTzo: r.canComputeOffset ? null : i.forcedStartTzo, forcedEndTzo: r.canComputeOffset ? null : i.forcedEndTzo });
  });
  return { defs: n, instances: a };
}
function _a(t, e) {
  return ft(t, function(r) {
    return r.sourceId !== e;
  });
}
function wl(t, e) {
  return {
    defs: t.defs,
    instances: ue(t.instances, function(r) {
      return !e[r.instanceId];
    })
  };
}
function Tl(t, e) {
  switch (e.type) {
    case "UNSELECT_DATES":
      return null;
    case "SELECT_DATES":
      return e.selection;
    default:
      return t;
  }
}
function _l(t, e) {
  switch (e.type) {
    case "UNSELECT_EVENT":
      return "";
    case "SELECT_EVENT":
      return e.eventInstanceId;
    default:
      return t;
  }
}
function Ml(t, e) {
  var r;
  switch (e.type) {
    case "UNSET_EVENT_DRAG":
      return null;
    case "SET_EVENT_DRAG":
      return r = e.state, {
        affectedEvents: r.affectedEvents,
        mutatedEvents: r.mutatedEvents,
        isEvent: r.isEvent
      };
    default:
      return t;
  }
}
function kl(t, e) {
  var r;
  switch (e.type) {
    case "UNSET_EVENT_RESIZE":
      return null;
    case "SET_EVENT_RESIZE":
      return r = e.state, {
        affectedEvents: r.affectedEvents,
        mutatedEvents: r.mutatedEvents,
        isEvent: r.isEvent
      };
    default:
      return t;
  }
}
function Il(t, e, r, n, a) {
  var i = t.headerToolbar ? fn(t.headerToolbar, t, e, r, n, a) : null, o = t.footerToolbar ? fn(t.footerToolbar, t, e, r, n, a) : null;
  return { header: i, footer: o };
}
function fn(t, e, r, n, a, i) {
  var o = {}, s = [], l = !1;
  for (var c in t) {
    var u = t[c], f = Pl(u, e, r, n, a, i);
    o[c] = f.widgets, s.push.apply(s, f.viewsWithButtons), l = l || f.hasTitle;
  }
  return { sectionWidgets: o, viewsWithButtons: s, hasTitle: l };
}
function Pl(t, e, r, n, a, i) {
  var o = e.direction === "rtl", s = e.customButtons || {}, l = r.buttonText || {}, c = e.buttonText || {}, u = r.buttonHints || {}, f = e.buttonHints || {}, v = t ? t.split(" ") : [], d = [], p = !1, E = v.map(function(S) {
    return S.split(",").map(function(g) {
      if (g === "title")
        return p = !0, { buttonName: g };
      var b, C, D, I, _, P;
      if (b = s[g])
        D = function(L) {
          b.click && b.click.call(L.target, L, L.target);
        }, (I = n.getCustomButtonIconClass(b)) || (I = n.getIconClass(g, o)) || (_ = b.text), P = b.hint || b.text;
      else if (C = a[g]) {
        d.push(g), D = function() {
          i.changeView(g);
        }, (_ = C.buttonTextOverride) || (I = n.getIconClass(g, o)) || (_ = C.buttonTextDefault);
        var w = C.buttonTextOverride || C.buttonTextDefault;
        P = _e(
          C.buttonTitleOverride || C.buttonTitleDefault || e.viewHint,
          [w, g],
          w
        );
      } else if (i[g])
        if (D = function() {
          i[g]();
        }, (_ = l[g]) || (I = n.getIconClass(g, o)) || (_ = c[g]), g === "prevYear" || g === "nextYear") {
          var A = g === "prevYear" ? "prev" : "next";
          P = _e(u[A] || f[A], [
            c.year || "year",
            "year"
          ], c[g]);
        } else
          P = function(L) {
            return _e(u[g] || f[g], [
              c[L] || L,
              L
            ], c[g]);
          };
      return { buttonName: g, buttonClick: D, buttonIcon: I, buttonText: _, buttonHint: P };
    });
  });
  return { widgets: E, viewsWithButtons: d, hasTitle: p };
}
var Hl = {
  ignoreRange: !0,
  parseMeta: function(t) {
    return Array.isArray(t.events) ? t.events : null;
  },
  fetch: function(t, e) {
    e({
      rawEvents: t.eventSource.meta
    });
  }
}, xl = te({
  eventSourceDefs: [Hl]
}), Al = {
  parseMeta: function(t) {
    return typeof t.events == "function" ? t.events : null;
  },
  fetch: function(t, e, r) {
    var n = t.context.dateEnv, a = t.eventSource.meta;
    zs(a.bind(null, ta(t.range, n)), function(i) {
      e({ rawEvents: i });
    }, r);
  }
}, Nl = te({
  eventSourceDefs: [Al]
});
function Ol(t, e, r, n, a) {
  t = t.toUpperCase();
  var i = null;
  t === "GET" ? e = Ll(e, r) : i = Ma(r);
  var o = new XMLHttpRequest();
  o.open(t, e, !0), t !== "GET" && o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.onload = function() {
    if (o.status >= 200 && o.status < 400) {
      var s = !1, l = void 0;
      try {
        l = JSON.parse(o.responseText), s = !0;
      } catch {
      }
      s ? n(l, o) : a("Failure parsing JSON", o);
    } else
      a("Request failed", o);
  }, o.onerror = function() {
    a("Request failed", o);
  }, o.send(i);
}
function Ll(t, e) {
  return t + (t.indexOf("?") === -1 ? "?" : "&") + Ma(e);
}
function Ma(t) {
  var e = [];
  for (var r in t)
    e.push(encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
  return e.join("&");
}
var Ul = {
  method: String,
  extraParams: y,
  startParam: String,
  endParam: String,
  timeZoneParam: String
}, Vl = {
  parseMeta: function(t) {
    return t.url && (t.format === "json" || !t.format) ? {
      url: t.url,
      format: "json",
      method: (t.method || "GET").toUpperCase(),
      extraParams: t.extraParams,
      startParam: t.startParam,
      endParam: t.endParam,
      timeZoneParam: t.timeZoneParam
    } : null;
  },
  fetch: function(t, e, r) {
    var n = t.eventSource.meta, a = Bl(n, t.range, t.context);
    Ol(n.method, n.url, a, function(i, o) {
      e({ rawEvents: i, xhr: o });
    }, function(i, o) {
      r({ message: i, xhr: o });
    });
  }
}, Wl = te({
  eventSourceRefiners: Ul,
  eventSourceDefs: [Vl]
});
function Bl(t, e, r) {
  var n = r.dateEnv, a = r.options, i, o, s, l, c = {};
  return i = t.startParam, i == null && (i = a.startParam), o = t.endParam, o == null && (o = a.endParam), s = t.timeZoneParam, s == null && (s = a.timeZoneParam), typeof t.extraParams == "function" ? l = t.extraParams() : l = t.extraParams || {}, h(c, l), c[i] = n.formatIso(e.start), c[o] = n.formatIso(e.end), n.timeZone !== "local" && (c[s] = n.timeZone), c;
}
var Fl = {
  daysOfWeek: y,
  startTime: k,
  endTime: k,
  duration: k,
  startRecur: y,
  endRecur: y
}, zl = {
  parse: function(t, e) {
    if (t.daysOfWeek || t.startTime || t.endTime || t.startRecur || t.endRecur) {
      var r = {
        daysOfWeek: t.daysOfWeek || null,
        startTime: t.startTime || null,
        endTime: t.endTime || null,
        startRecur: t.startRecur ? e.createMarker(t.startRecur) : null,
        endRecur: t.endRecur ? e.createMarker(t.endRecur) : null
      }, n = void 0;
      return t.duration && (n = t.duration), !n && t.startTime && t.endTime && (n = po(t.endTime, t.startTime)), {
        allDayGuess: Boolean(!t.startTime && !t.endTime),
        duration: n,
        typeData: r
      };
    }
    return null;
  },
  expand: function(t, e, r) {
    var n = Ae(e, { start: t.startRecur, end: t.endRecur });
    return n ? ql(t.daysOfWeek, t.startTime, n, r) : [];
  }
}, Gl = te({
  recurringTypes: [zl],
  eventRefiners: Fl
});
function ql(t, e, r, n) {
  for (var a = t ? qn(t) : null, i = H(r.start), o = r.end, s = []; i < o; ) {
    var l = void 0;
    (!a || a[i.getUTCDay()]) && (e ? l = n.add(i, e) : l = i, s.push(l)), i = W(i, 1);
  }
  return s;
}
var Yl = te({
  optionChangeHandlers: {
    events: function(t, e) {
      dn([t], e);
    },
    eventSources: dn
  }
});
function dn(t, e) {
  for (var r = er(e.getCurrentData().eventSources), n = [], a = 0, i = t; a < i.length; a++) {
    for (var o = i[a], s = !1, l = 0; l < r.length; l += 1)
      if (r[l]._raw === o) {
        r.splice(l, 1), s = !0;
        break;
      }
    s || n.push(o);
  }
  for (var c = 0, u = r; c < u.length; c++) {
    var f = u[c];
    e.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: f.sourceId
    });
  }
  for (var v = 0, d = n; v < d.length; v++) {
    var p = d[v];
    e.calendarApi.addEventSource(p);
  }
}
function jl(t, e) {
  e.emitter.trigger("datesSet", h(h({}, ta(t.activeRange, e.dateEnv)), { view: e.viewApi }));
}
function Zl(t, e) {
  var r = e.emitter;
  r.hasHandlers("eventsSet") && r.trigger("eventsSet", oe(t, e));
}
var Xl = [
  xl,
  Nl,
  Wl,
  Gl,
  Yl,
  te({
    isLoadingFuncs: [
      function(t) {
        return Da(t.eventSources);
      }
    ],
    contentTypeHandlers: {
      html: $l,
      domNodes: Kl
    },
    propSetHandlers: {
      dateProfile: jl,
      eventStore: Zl
    }
  })
];
function $l() {
  var t = null, e = "";
  function r(a, i) {
    (a !== t || i !== e) && (a.innerHTML = i), t = a, e = i;
  }
  function n() {
    t.innerHTML = "", t = null, e = "";
  }
  return { render: r, destroy: n };
}
function Kl() {
  var t = null, e = [];
  function r(a, i) {
    var o = Array.prototype.slice.call(i);
    if (a !== t || !ye(e, o)) {
      for (var s = 0, l = o; s < l.length; s++) {
        var c = l[s];
        a.appendChild(c);
      }
      n();
    }
    t = a, e = o;
  }
  function n() {
    e.forEach(Xt), e = [], t = null;
  }
  return { render: r, destroy: n };
}
var hr = function() {
  function t(e) {
    this.drainedOption = e, this.isRunning = !1, this.isDirty = !1, this.pauseDepths = {}, this.timeoutId = 0;
  }
  return t.prototype.request = function(e) {
    this.isDirty = !0, this.isPaused() || (this.clearTimeout(), e == null ? this.tryDrain() : this.timeoutId = setTimeout(
      this.tryDrain.bind(this),
      e
    ));
  }, t.prototype.pause = function(e) {
    e === void 0 && (e = "");
    var r = this.pauseDepths;
    r[e] = (r[e] || 0) + 1, this.clearTimeout();
  }, t.prototype.resume = function(e, r) {
    e === void 0 && (e = "");
    var n = this.pauseDepths;
    if (e in n) {
      if (r)
        delete n[e];
      else {
        n[e] -= 1;
        var a = n[e];
        a <= 0 && delete n[e];
      }
      this.tryDrain();
    }
  }, t.prototype.isPaused = function() {
    return Object.keys(this.pauseDepths).length;
  }, t.prototype.tryDrain = function() {
    if (!this.isRunning && !this.isPaused()) {
      for (this.isRunning = !0; this.isDirty; )
        this.isDirty = !1, this.drained();
      this.isRunning = !1;
    }
  }, t.prototype.clear = function() {
    this.clearTimeout(), this.isDirty = !1, this.pauseDepths = {};
  }, t.prototype.clearTimeout = function() {
    this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = 0);
  }, t.prototype.drained = function() {
    this.drainedOption && this.drainedOption();
  }, t;
}(), Jl = function() {
  function t(e, r) {
    this.runTaskOption = e, this.drainedOption = r, this.queue = [], this.delayedRunner = new hr(this.drain.bind(this));
  }
  return t.prototype.request = function(e, r) {
    this.queue.push(e), this.delayedRunner.request(r);
  }, t.prototype.pause = function(e) {
    this.delayedRunner.pause(e);
  }, t.prototype.resume = function(e, r) {
    this.delayedRunner.resume(e, r);
  }, t.prototype.drain = function() {
    for (var e = this.queue; e.length; ) {
      for (var r = [], n = void 0; n = e.shift(); )
        this.runTask(n), r.push(n);
      this.drained(r);
    }
  }, t.prototype.runTask = function(e) {
    this.runTaskOption && this.runTaskOption(e);
  }, t.prototype.drained = function(e) {
    this.drainedOption && this.drainedOption(e);
  }, t;
}();
function Ql(t, e, r) {
  var n;
  return /^(year|month)$/.test(t.currentRangeUnit) ? n = t.currentRange : n = t.activeRange, r.formatRange(n.start, n.end, U(e.titleFormat || eu(t)), {
    isEndExclusive: t.isRangeAllDay,
    defaultSeparator: e.titleRangeSeparator
  });
}
function eu(t) {
  var e = t.currentRangeUnit;
  if (e === "year")
    return { year: "numeric" };
  if (e === "month")
    return { year: "numeric", month: "long" };
  var r = Qe(t.currentRange.start, t.currentRange.end);
  return r !== null && r > 1 ? { year: "numeric", month: "short", day: "numeric" } : { year: "numeric", month: "long", day: "numeric" };
}
var ka = function() {
  function t(e) {
    var r = this;
    this.computeOptionsData = M(this._computeOptionsData), this.computeCurrentViewData = M(this._computeCurrentViewData), this.organizeRawLocales = M(Cs), this.buildLocale = M(ca), this.buildPluginHooks = Qs(), this.buildDateEnv = M(tu), this.buildTheme = M(ru), this.parseToolbars = M(Il), this.buildViewSpecs = M(ol), this.buildDateProfileGenerator = je(nu), this.buildViewApi = M(au), this.buildViewUiProps = je(su), this.buildEventUiBySource = M(iu, X), this.buildEventUiBases = M(ou), this.parseContextBusinessHours = je(lu), this.buildTitle = M(Ql), this.emitter = new vt(), this.actionRunner = new Jl(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.getCurrentData = function() {
      return r.data;
    }, this.dispatch = function(C) {
      r.actionRunner.request(C);
    }, this.props = e, this.actionRunner.pause();
    var n = {}, a = this.computeOptionsData(e.optionOverrides, n, e.calendarApi), i = a.calendarOptions.initialView || a.pluginHooks.initialView, o = this.computeCurrentViewData(i, a, e.optionOverrides, n);
    e.calendarApi.currentDataManager = this, this.emitter.setThisContext(e.calendarApi), this.emitter.setOptions(o.options);
    var s = ps(a.calendarOptions, a.dateEnv), l = o.dateProfileGenerator.build(s);
    ie(l.activeRange, s) || (s = l.currentRange.start);
    for (var c = {
      dateEnv: a.dateEnv,
      options: a.calendarOptions,
      pluginHooks: a.pluginHooks,
      calendarApi: e.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    }, u = 0, f = a.pluginHooks.contextInit; u < f.length; u++) {
      var v = f[u];
      v(c);
    }
    for (var d = dl(a.calendarOptions, l, c), p = {
      dynamicOptionOverrides: n,
      currentViewType: i,
      currentDate: s,
      dateProfile: l,
      businessHours: this.parseContextBusinessHours(c),
      eventSources: d,
      eventUiBases: {},
      eventStore: Y(),
      renderableEventStore: Y(),
      dateSelection: null,
      eventSelection: "",
      eventDrag: null,
      eventResize: null,
      selectionConfig: this.buildViewUiProps(c).selectionConfig
    }, E = h(h({}, c), p), S = 0, g = a.pluginHooks.reducers; S < g.length; S++) {
      var b = g[S];
      h(p, b(null, null, E));
    }
    kt(p, c) && this.emitter.trigger("loading", !0), this.state = p, this.updateData(), this.actionRunner.resume();
  }
  return t.prototype.resetOptions = function(e, r) {
    var n = this.props;
    n.optionOverrides = r ? h(h({}, n.optionOverrides), e) : e, this.actionRunner.request({
      type: "NOTHING"
    });
  }, t.prototype._handleAction = function(e) {
    var r = this, n = r.props, a = r.state, i = r.emitter, o = cl(a.dynamicOptionOverrides, e), s = this.computeOptionsData(n.optionOverrides, o, n.calendarApi), l = ul(a.currentViewType, e), c = this.computeCurrentViewData(l, s, n.optionOverrides, o);
    n.calendarApi.currentDataManager = this, i.setThisContext(n.calendarApi), i.setOptions(c.options);
    var u = {
      dateEnv: s.dateEnv,
      options: s.calendarOptions,
      pluginHooks: s.pluginHooks,
      calendarApi: n.calendarApi,
      dispatch: this.dispatch,
      emitter: i,
      getCurrentData: this.getCurrentData
    }, f = a.currentDate, v = a.dateProfile;
    this.data && this.data.dateProfileGenerator !== c.dateProfileGenerator && (v = c.dateProfileGenerator.build(f)), f = vs(f, e), v = fl(v, e, f, c.dateProfileGenerator), (e.type === "PREV" || e.type === "NEXT" || !ie(v.currentRange, f)) && (f = v.currentRange.start);
    for (var d = vl(a.eventSources, e, v, u), p = Sl(a.eventStore, e, d, v, u), E = Da(d), S = E && !c.options.progressiveEventRendering && a.renderableEventStore || p, g = this.buildViewUiProps(u), b = g.eventUiSingleBase, C = g.selectionConfig, D = this.buildEventUiBySource(d), I = this.buildEventUiBases(S.defs, b, D), _ = {
      dynamicOptionOverrides: o,
      currentViewType: l,
      currentDate: f,
      dateProfile: v,
      eventSources: d,
      eventStore: p,
      renderableEventStore: S,
      selectionConfig: C,
      eventUiBases: I,
      businessHours: this.parseContextBusinessHours(u),
      dateSelection: Tl(a.dateSelection, e),
      eventSelection: _l(a.eventSelection, e),
      eventDrag: Ml(a.eventDrag, e),
      eventResize: kl(a.eventResize, e)
    }, P = h(h({}, u), _), w = 0, A = s.pluginHooks.reducers; w < A.length; w++) {
      var L = A[w];
      h(_, L(a, e, P));
    }
    var Z = kt(a, u), z = kt(_, u);
    !Z && z ? i.trigger("loading", !0) : Z && !z && i.trigger("loading", !1), this.state = _, n.onAction && n.onAction(e);
  }, t.prototype.updateData = function() {
    var e = this, r = e.props, n = e.state, a = this.data, i = this.computeOptionsData(r.optionOverrides, n.dynamicOptionOverrides, r.calendarApi), o = this.computeCurrentViewData(n.currentViewType, i, r.optionOverrides, n.dynamicOptionOverrides), s = this.data = h(h(h({ viewTitle: this.buildTitle(n.dateProfile, o.options, i.dateEnv), calendarApi: r.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData }, i), o), n), l = i.pluginHooks.optionChangeHandlers, c = a && a.calendarOptions, u = i.calendarOptions;
    if (c && c !== u) {
      c.timeZone !== u.timeZone && (n.eventSources = s.eventSources = pl(s.eventSources, n.dateProfile, s), n.eventStore = s.eventStore = Rl(s.eventStore, a.dateEnv, s.dateEnv));
      for (var f in l)
        c[f] !== u[f] && l[f](u[f], s);
    }
    r.onData && r.onData(s);
  }, t.prototype._computeOptionsData = function(e, r, n) {
    var a = this.processRawCalendarOptions(e, r), i = a.refinedOptions, o = a.pluginHooks, s = a.localeDefaults, l = a.availableLocaleData, c = a.extra;
    vn(c);
    var u = this.buildDateEnv(i.timeZone, i.locale, i.weekNumberCalculation, i.firstDay, i.weekText, o, l, i.defaultRangeSeparator), f = this.buildViewSpecs(o.views, e, r, s), v = this.buildTheme(i, o), d = this.parseToolbars(i, e, v, f, n);
    return {
      calendarOptions: i,
      pluginHooks: o,
      dateEnv: u,
      viewSpecs: f,
      theme: v,
      toolbarConfig: d,
      localeDefaults: s,
      availableRawLocales: l.map
    };
  }, t.prototype.processRawCalendarOptions = function(e, r) {
    var n = wt([
      Me,
      e,
      r
    ]), a = n.locales, i = n.locale, o = this.organizeRawLocales(a), s = o.map, l = this.buildLocale(i || o.defaultCode, s).options, c = this.buildPluginHooks(e.plugins || [], Xl), u = this.currentCalendarOptionsRefiners = h(h(h(h(h({}, Qr), en), tn), c.listenerRefiners), c.optionRefiners), f = {}, v = wt([
      Me,
      l,
      e,
      r
    ]), d = {}, p = this.currentCalendarOptionsInput, E = this.currentCalendarOptionsRefined, S = !1;
    for (var g in v)
      g !== "plugins" && (v[g] === p[g] || ne[g] && g in p && ne[g](p[g], v[g]) ? d[g] = E[g] : u[g] ? (d[g] = u[g](v[g]), S = !0) : f[g] = p[g]);
    return S && (this.currentCalendarOptionsInput = v, this.currentCalendarOptionsRefined = d), {
      rawOptions: this.currentCalendarOptionsInput,
      refinedOptions: this.currentCalendarOptionsRefined,
      pluginHooks: c,
      availableLocaleData: o,
      localeDefaults: l,
      extra: f
    };
  }, t.prototype._computeCurrentViewData = function(e, r, n, a) {
    var i = r.viewSpecs[e];
    if (!i)
      throw new Error('viewType "' + e + `" is not available. Please make sure you've loaded all neccessary plugins`);
    var o = this.processRawViewOptions(i, r.pluginHooks, r.localeDefaults, n, a), s = o.refinedOptions, l = o.extra;
    vn(l);
    var c = this.buildDateProfileGenerator({
      dateProfileGeneratorClass: i.optionDefaults.dateProfileGeneratorClass,
      duration: i.duration,
      durationUnit: i.durationUnit,
      usesMinMaxTime: i.optionDefaults.usesMinMaxTime,
      dateEnv: r.dateEnv,
      calendarApi: this.props.calendarApi,
      slotMinTime: s.slotMinTime,
      slotMaxTime: s.slotMaxTime,
      showNonCurrentDates: s.showNonCurrentDates,
      dayCount: s.dayCount,
      dateAlignment: s.dateAlignment,
      dateIncrement: s.dateIncrement,
      hiddenDays: s.hiddenDays,
      weekends: s.weekends,
      nowInput: s.now,
      validRangeInput: s.validRange,
      visibleRangeInput: s.visibleRange,
      monthMode: s.monthMode,
      fixedWeekCount: s.fixedWeekCount
    }), u = this.buildViewApi(e, this.getCurrentData, r.dateEnv);
    return { viewSpec: i, options: s, dateProfileGenerator: c, viewApi: u };
  }, t.prototype.processRawViewOptions = function(e, r, n, a, i) {
    var o = wt([
      Me,
      e.optionDefaults,
      n,
      a,
      e.optionOverrides,
      i
    ]), s = h(h(h(h(h(h({}, Qr), en), tn), xo), r.listenerRefiners), r.optionRefiners), l = {}, c = this.currentViewOptionsInput, u = this.currentViewOptionsRefined, f = !1, v = {};
    for (var d in o)
      o[d] === c[d] || ne[d] && ne[d](o[d], c[d]) ? l[d] = u[d] : (o[d] === this.currentCalendarOptionsInput[d] || ne[d] && ne[d](o[d], this.currentCalendarOptionsInput[d]) ? d in this.currentCalendarOptionsRefined && (l[d] = this.currentCalendarOptionsRefined[d]) : s[d] ? l[d] = s[d](o[d]) : v[d] = o[d], f = !0);
    return f && (this.currentViewOptionsInput = o, this.currentViewOptionsRefined = l), {
      rawOptions: this.currentViewOptionsInput,
      refinedOptions: this.currentViewOptionsRefined,
      extra: v
    };
  }, t;
}();
function tu(t, e, r, n, a, i, o, s) {
  var l = ca(e || o.defaultCode, o.map);
  return new bs({
    calendarSystem: "gregory",
    timeZone: t,
    namedTimeZoneImpl: i.namedTimeZonedImpl,
    locale: l,
    weekNumberCalculation: r,
    firstDay: n,
    weekText: a,
    cmdFormatter: i.cmdFormatter,
    defaultSeparator: s
  });
}
function ru(t, e) {
  var r = e.themeClasses[t.themeSystem] || re;
  return new r(t);
}
function nu(t) {
  var e = t.dateProfileGeneratorClass || ba;
  return new e(t);
}
function au(t, e, r) {
  return new cs(t, e, r);
}
function iu(t) {
  return ce(t, function(e) {
    return e.ui;
  });
}
function ou(t, e, r) {
  var n = { "": e };
  for (var a in t) {
    var i = t[a];
    i.sourceId && r[i.sourceId] && (n[a] = r[i.sourceId]);
  }
  return n;
}
function su(t) {
  var e = t.options;
  return {
    eventUiSingleBase: it({
      display: e.eventDisplay,
      editable: e.editable,
      startEditable: e.eventStartEditable,
      durationEditable: e.eventDurationEditable,
      constraint: e.eventConstraint,
      overlap: typeof e.eventOverlap == "boolean" ? e.eventOverlap : void 0,
      allow: e.eventAllow,
      backgroundColor: e.eventBackgroundColor,
      borderColor: e.eventBorderColor,
      textColor: e.eventTextColor,
      color: e.eventColor
    }, t),
    selectionConfig: it({
      constraint: e.selectConstraint,
      overlap: typeof e.selectOverlap == "boolean" ? e.selectOverlap : void 0,
      allow: e.selectAllow
    }, t)
  };
}
function kt(t, e) {
  for (var r = 0, n = e.pluginHooks.isLoadingFuncs; r < n.length; r++) {
    var a = n[r];
    if (a(t))
      return !0;
  }
  return !1;
}
function lu(t) {
  return _s(t.options.businessHours, t);
}
function vn(t, e) {
  for (var r in t)
    console.warn("Unknown option '" + r + "'" + (e ? " for view '" + e + "'" : ""));
}
(function(t) {
  R(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    return n.handleData = function(a) {
      n.dataManager ? n.setState(a) : n.state = a;
    }, n.dataManager = new ka({
      optionOverrides: r.optionOverrides,
      calendarApi: r.calendarApi,
      onData: n.handleData
    }), n;
  }
  return e.prototype.render = function() {
    return this.props.children(this.state);
  }, e.prototype.componentDidUpdate = function(r) {
    var n = this.props.optionOverrides;
    n !== r.optionOverrides && this.dataManager.resetOptions(n);
  }, e;
})(Zt);
var uu = function() {
  function t() {
    this.strictOrder = !1, this.allowReslicing = !1, this.maxCoord = -1, this.maxStackCnt = -1, this.levelCoords = [], this.entriesByLevel = [], this.stackCnts = {};
  }
  return t.prototype.addSegs = function(e) {
    for (var r = [], n = 0, a = e; n < a.length; n++) {
      var i = a[n];
      this.insertEntry(i, r);
    }
    return r;
  }, t.prototype.insertEntry = function(e, r) {
    var n = this.findInsertion(e);
    return this.isInsertionValid(n, e) ? (this.insertEntryAt(e, n), 1) : this.handleInvalidInsertion(n, e, r);
  }, t.prototype.isInsertionValid = function(e, r) {
    return (this.maxCoord === -1 || e.levelCoord + r.thickness <= this.maxCoord) && (this.maxStackCnt === -1 || e.stackCnt < this.maxStackCnt);
  }, t.prototype.handleInvalidInsertion = function(e, r, n) {
    return this.allowReslicing && e.touchingEntry ? this.splitEntry(r, e.touchingEntry, n) : (n.push(r), 0);
  }, t.prototype.splitEntry = function(e, r, n) {
    var a = 0, i = [], o = e.span, s = r.span;
    return o.start < s.start && (a += this.insertEntry({
      index: e.index,
      thickness: e.thickness,
      span: { start: o.start, end: s.start }
    }, i)), o.end > s.end && (a += this.insertEntry({
      index: e.index,
      thickness: e.thickness,
      span: { start: s.end, end: o.end }
    }, i)), a ? (n.push.apply(n, N([{
      index: e.index,
      thickness: e.thickness,
      span: Ia(s, o)
    }], i)), a) : (n.push(e), 0);
  }, t.prototype.insertEntryAt = function(e, r) {
    var n = this, a = n.entriesByLevel, i = n.levelCoords;
    r.lateral === -1 ? (It(i, r.level, r.levelCoord), It(a, r.level, [e])) : It(a[r.level], r.lateral, e), this.stackCnts[Ie(e)] = r.stackCnt;
  }, t.prototype.findInsertion = function(e) {
    for (var r = this, n = r.levelCoords, a = r.entriesByLevel, i = r.strictOrder, o = r.stackCnts, s = n.length, l = 0, c = -1, u = -1, f = null, v = 0, d = 0; d < s; d += 1) {
      var p = n[d];
      if (!i && p >= l + e.thickness)
        break;
      for (var E = a[d], S = void 0, g = hn(E, e.span.start, pn), b = g[0] + g[1]; (S = E[b]) && S.span.start < e.span.end; ) {
        var C = p + S.thickness;
        C > l && (l = C, f = S, c = d, u = b), C === l && (v = Math.max(v, o[Ie(S)] + 1)), b += 1;
      }
    }
    var D = 0;
    if (f)
      for (D = c + 1; D < s && n[D] < l; )
        D += 1;
    var I = -1;
    return D < s && n[D] === l && (I = hn(a[D], e.span.end, pn)[0]), {
      touchingLevel: c,
      touchingLateral: u,
      touchingEntry: f,
      stackCnt: v,
      levelCoord: l,
      level: D,
      lateral: I
    };
  }, t.prototype.toRects = function() {
    for (var e = this, r = e.entriesByLevel, n = e.levelCoords, a = r.length, i = [], o = 0; o < a; o += 1)
      for (var s = r[o], l = n[o], c = 0, u = s; c < u.length; c++) {
        var f = u[c];
        i.push(h(h({}, f), { levelCoord: l }));
      }
    return i;
  }, t;
}();
function pn(t) {
  return t.span.end;
}
function Ie(t) {
  return t.index + ":" + t.span.start;
}
function Ia(t, e) {
  var r = Math.max(t.start, e.start), n = Math.min(t.end, e.end);
  return r < n ? { start: r, end: n } : null;
}
function It(t, e, r) {
  t.splice(e, 0, r);
}
function hn(t, e, r) {
  var n = 0, a = t.length;
  if (!a || e < r(t[n]))
    return [0, 0];
  if (e > r(t[a - 1]))
    return [a, 0];
  for (; n < a; ) {
    var i = Math.floor(n + (a - n) / 2), o = r(t[i]);
    if (e < o)
      a = i;
    else if (e > o)
      n = i + 1;
    else
      return [i, 1];
  }
  return [n, 0];
}
var Re = function() {
  function t(e) {
    this.component = e.component, this.isHitComboAllowed = e.isHitComboAllowed || null;
  }
  return t.prototype.destroy = function() {
  }, t;
}();
function cu(t, e) {
  return {
    component: t,
    el: e.el,
    useEventCenter: e.useEventCenter != null ? e.useEventCenter : !0,
    isHitComboAllowed: e.isHitComboAllowed || null
  };
}
function gr(t) {
  var e;
  return e = {}, e[t.component.uid] = t, e;
}
var Gt = {}, Pa = function() {
  function t(e, r) {
    this.emitter = new vt();
  }
  return t.prototype.destroy = function() {
  }, t.prototype.setMirrorIsVisible = function(e) {
  }, t.prototype.setMirrorNeedsRevert = function(e) {
  }, t.prototype.setAutoScrollEnabled = function(e) {
  }, t;
}(), mr = {}, fu = function(t) {
  R(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.render = function() {
    var r = this, n = this.props.widgetGroups.map(function(a) {
      return r.renderWidgetGroup(a);
    });
    return m.apply(void 0, N(["div", { className: "fc-toolbar-chunk" }], n));
  }, e.prototype.renderWidgetGroup = function(r) {
    for (var n = this.props, a = this.context.theme, i = [], o = !0, s = 0, l = r; s < l.length; s++) {
      var c = l[s], u = c.buttonName, f = c.buttonClick, v = c.buttonText, d = c.buttonIcon, p = c.buttonHint;
      if (u === "title")
        o = !1, i.push(m("h2", { className: "fc-toolbar-title", id: n.titleId }, n.title));
      else {
        var E = u === n.activeButton, S = !n.isTodayEnabled && u === "today" || !n.isPrevEnabled && u === "prev" || !n.isNextEnabled && u === "next", g = ["fc-" + u + "-button", a.getClass("button")];
        E && g.push(a.getClass("buttonActive")), i.push(m("button", { type: "button", title: typeof p == "function" ? p(n.navUnit) : p, disabled: S, "aria-pressed": E, className: g.join(" "), onClick: f }, v || (d ? m("span", { className: d }) : "")));
      }
    }
    if (i.length > 1) {
      var b = o && a.getClass("buttonGroup") || "";
      return m.apply(void 0, N(["div", { className: b }], i));
    }
    return i[0];
  }, e;
}(x), gn = function(t) {
  R(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.render = function() {
    var r = this.props, n = r.model, a = r.extraClassName, i = !1, o, s, l = n.sectionWidgets, c = l.center;
    l.left ? (i = !0, o = l.left) : o = l.start, l.right ? (i = !0, s = l.right) : s = l.end;
    var u = [
      a || "",
      "fc-toolbar",
      i ? "fc-toolbar-ltr" : ""
    ];
    return m(
      "div",
      { className: u.join(" ") },
      this.renderSection("start", o || []),
      this.renderSection("center", c || []),
      this.renderSection("end", s || [])
    );
  }, e.prototype.renderSection = function(r, n) {
    var a = this.props;
    return m(fu, { key: r, widgetGroups: n, title: a.title, navUnit: a.navUnit, activeButton: a.activeButton, isTodayEnabled: a.isTodayEnabled, isPrevEnabled: a.isPrevEnabled, isNextEnabled: a.isNextEnabled, titleId: a.titleId });
  }, e;
}(x), du = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.state = {
      availableWidth: null
    }, r.handleEl = function(n) {
      r.el = n, $(r.props.elRef, n), r.updateAvailableWidth();
    }, r.handleResize = function() {
      r.updateAvailableWidth();
    }, r;
  }
  return e.prototype.render = function() {
    var r = this, n = r.props, a = r.state, i = n.aspectRatio, o = [
      "fc-view-harness",
      i || n.liquid || n.height ? "fc-view-harness-active" : "fc-view-harness-passive"
    ], s = "", l = "";
    return i ? a.availableWidth !== null ? s = a.availableWidth / i : l = 1 / i * 100 + "%" : s = n.height || "", m("div", { "aria-labelledby": n.labeledById, ref: this.handleEl, className: o.join(" "), style: { height: s, paddingBottom: l } }, n.children);
  }, e.prototype.componentDidMount = function() {
    this.context.addResizeHandler(this.handleResize);
  }, e.prototype.componentWillUnmount = function() {
    this.context.removeResizeHandler(this.handleResize);
  }, e.prototype.updateAvailableWidth = function() {
    this.el && this.props.aspectRatio && this.setState({ availableWidth: this.el.offsetWidth });
  }, e;
}(x), vu = function(t) {
  R(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    return n.handleSegClick = function(a, i) {
      var o = n.component, s = o.context, l = Ee(i);
      if (l && o.isValidSegDownEl(a.target)) {
        var c = V(a.target, ".fc-event-forced-url"), u = c ? c.querySelector("a[href]").href : "";
        s.emitter.trigger("eventClick", {
          el: i,
          event: new O(o.context, l.eventRange.def, l.eventRange.instance),
          jsEvent: a,
          view: s.viewApi
        }), u && !a.defaultPrevented && (window.location.href = u);
      }
    }, n.destroy = Bn(
      r.el,
      "click",
      ".fc-event",
      n.handleSegClick
    ), n;
  }
  return e;
}(Re), pu = function(t) {
  R(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    return n.handleEventElRemove = function(a) {
      a === n.currentSegEl && n.handleSegLeave(null, n.currentSegEl);
    }, n.handleSegEnter = function(a, i) {
      Ee(i) && (n.currentSegEl = i, n.triggerEvent("eventMouseEnter", a, i));
    }, n.handleSegLeave = function(a, i) {
      n.currentSegEl && (n.currentSegEl = null, n.triggerEvent("eventMouseLeave", a, i));
    }, n.removeHoverListeners = Oi(
      r.el,
      ".fc-event",
      n.handleSegEnter,
      n.handleSegLeave
    ), n;
  }
  return e.prototype.destroy = function() {
    this.removeHoverListeners();
  }, e.prototype.triggerEvent = function(r, n, a) {
    var i = this.component, o = i.context, s = Ee(a);
    (!n || i.isValidSegDownEl(n.target)) && o.emitter.trigger(r, {
      el: a,
      event: new O(o, s.eventRange.def, s.eventRange.instance),
      jsEvent: n,
      view: o.viewApi
    });
  }, e;
}(Re), hu = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.buildViewContext = M(Xs), r.buildViewPropTransformers = M(mu), r.buildToolbarProps = M(gu), r.headerRef = G(), r.footerRef = G(), r.interactionsStore = {}, r.state = {
      viewLabelId: ut()
    }, r.registerInteractiveComponent = function(n, a) {
      var i = cu(n, a), o = [
        vu,
        pu
      ], s = o.concat(r.props.pluginHooks.componentInteractions), l = s.map(function(c) {
        return new c(i);
      });
      r.interactionsStore[n.uid] = l, Gt[n.uid] = i;
    }, r.unregisterInteractiveComponent = function(n) {
      var a = r.interactionsStore[n.uid];
      if (a) {
        for (var i = 0, o = a; i < o.length; i++) {
          var s = o[i];
          s.destroy();
        }
        delete r.interactionsStore[n.uid];
      }
      delete Gt[n.uid];
    }, r.resizeRunner = new hr(function() {
      r.props.emitter.trigger("_resize", !0), r.props.emitter.trigger("windowResize", { view: r.props.viewApi });
    }), r.handleWindowResize = function(n) {
      var a = r.props.options;
      a.handleWindowResize && n.target === window && r.resizeRunner.request(a.windowResizeDelay);
    }, r;
  }
  return e.prototype.render = function() {
    var r = this.props, n = r.toolbarConfig, a = r.options, i = this.buildToolbarProps(
      r.viewSpec,
      r.dateProfile,
      r.dateProfileGenerator,
      r.currentDate,
      Ne(r.options.now, r.dateEnv),
      r.viewTitle
    ), o = !1, s = "", l;
    r.isHeightAuto || r.forPrint ? s = "" : a.height != null ? o = !0 : a.contentHeight != null ? s = a.contentHeight : l = Math.max(a.aspectRatio, 0.5);
    var c = this.buildViewContext(r.viewSpec, r.viewApi, r.options, r.dateProfileGenerator, r.dateEnv, r.theme, r.pluginHooks, r.dispatch, r.getCurrentData, r.emitter, r.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent), u = n.header && n.header.hasTitle ? this.state.viewLabelId : "";
    return m(
      fe.Provider,
      { value: c },
      n.header && m(gn, h({ ref: this.headerRef, extraClassName: "fc-header-toolbar", model: n.header, titleId: u }, i)),
      m(
        du,
        { liquid: o, height: s, aspectRatio: l, labeledById: u },
        this.renderView(r),
        this.buildAppendContent()
      ),
      n.footer && m(gn, h({ ref: this.footerRef, extraClassName: "fc-footer-toolbar", model: n.footer, titleId: "" }, i))
    );
  }, e.prototype.componentDidMount = function() {
    var r = this.props;
    this.calendarInteractions = r.pluginHooks.calendarInteractions.map(function(i) {
      return new i(r);
    }), window.addEventListener("resize", this.handleWindowResize);
    var n = r.pluginHooks.propSetHandlers;
    for (var a in n)
      n[a](r[a], r);
  }, e.prototype.componentDidUpdate = function(r) {
    var n = this.props, a = n.pluginHooks.propSetHandlers;
    for (var i in a)
      n[i] !== r[i] && a[i](n[i], n);
  }, e.prototype.componentWillUnmount = function() {
    window.removeEventListener("resize", this.handleWindowResize), this.resizeRunner.clear();
    for (var r = 0, n = this.calendarInteractions; r < n.length; r++) {
      var a = n[r];
      a.destroy();
    }
    this.props.emitter.trigger("_unmount");
  }, e.prototype.buildAppendContent = function() {
    var r = this.props, n = r.pluginHooks.viewContainerAppends.map(function(a) {
      return a(r);
    });
    return m.apply(void 0, N([B, {}], n));
  }, e.prototype.renderView = function(r) {
    for (var n = r.pluginHooks, a = r.viewSpec, i = {
      dateProfile: r.dateProfile,
      businessHours: r.businessHours,
      eventStore: r.renderableEventStore,
      eventUiBases: r.eventUiBases,
      dateSelection: r.dateSelection,
      eventSelection: r.eventSelection,
      eventDrag: r.eventDrag,
      eventResize: r.eventResize,
      isHeightAuto: r.isHeightAuto,
      forPrint: r.forPrint
    }, o = this.buildViewPropTransformers(n.viewPropsTransformers), s = 0, l = o; s < l.length; s++) {
      var c = l[s];
      h(i, c.transform(i, r));
    }
    var u = a.component;
    return m(u, h({}, i));
  }, e;
}(pt);
function gu(t, e, r, n, a, i) {
  var o = r.build(a, void 0, !1), s = r.buildPrev(e, n, !1), l = r.buildNext(e, n, !1);
  return {
    title: i,
    activeButton: t.type,
    navUnit: t.singleUnit,
    isTodayEnabled: o.isValid && !ie(e.currentRange, a),
    isPrevEnabled: s.isValid,
    isNextEnabled: l.isValid
  };
}
function mu(t) {
  return t.map(function(e) {
    return new e();
  });
}
var yu = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.state = {
      forPrint: !1
    }, r.handleBeforePrint = function() {
      r.setState({ forPrint: !0 });
    }, r.handleAfterPrint = function() {
      r.setState({ forPrint: !1 });
    }, r;
  }
  return e.prototype.render = function() {
    var r = this.props, n = r.options, a = this.state.forPrint, i = a || n.height === "auto" || n.contentHeight === "auto", o = !i && n.height != null ? n.height : "", s = [
      "fc",
      a ? "fc-media-print" : "fc-media-screen",
      "fc-direction-" + n.direction,
      r.theme.getClass("root")
    ];
    return va() || s.push("fc-liquid-hack"), r.children(s, o, i, a);
  }, e.prototype.componentDidMount = function() {
    var r = this.props.emitter;
    r.on("_beforeprint", this.handleBeforePrint), r.on("_afterprint", this.handleAfterPrint);
  }, e.prototype.componentWillUnmount = function() {
    var r = this.props.emitter;
    r.off("_beforeprint", this.handleBeforePrint), r.off("_afterprint", this.handleAfterPrint);
  }, e;
}(x);
function Eu(t, e) {
  return !t || e > 10 ? U({ weekday: "short" }) : e > 1 ? U({ weekday: "short", month: "numeric", day: "numeric", omitCommas: !0 }) : U({ weekday: "long" });
}
var Ha = "fc-col-header-cell";
function xa(t) {
  return t.text;
}
var Su = function(t) {
  R(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.render = function() {
    var r = this.context, n = r.dateEnv, a = r.options, i = r.theme, o = r.viewApi, s = this.props, l = s.date, c = s.dateProfile, u = pa(l, s.todayRange, null, c), f = [Ha].concat(ur(u, i)), v = n.format(l, s.dayHeaderFormat), d = !u.isDisabled && s.colCnt > 1 ? cr(this.context, l) : {}, p = h(h(h({ date: n.toDate(l), view: o }, s.extraHookProps), { text: v }), u);
    return m(Ce, { hookProps: p, classNames: a.dayHeaderClassNames, content: a.dayHeaderContent, defaultContent: xa, didMount: a.dayHeaderDidMount, willUnmount: a.dayHeaderWillUnmount }, function(E, S, g, b) {
      return m(
        "th",
        h({ ref: E, role: "columnheader", className: f.concat(S).join(" "), "data-date": u.isDisabled ? void 0 : Yn(l), colSpan: s.colSpan }, s.extraDataAttrs),
        m("div", { className: "fc-scrollgrid-sync-inner" }, !u.isDisabled && m("a", h({ ref: g, className: [
          "fc-col-header-cell-cushion",
          s.isSticky ? "fc-sticky" : ""
        ].join(" ") }, d), b))
      );
    });
  }, e;
}(x), bu = U({ weekday: "long" }), Du = function(t) {
  R(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.render = function() {
    var r = this.props, n = this.context, a = n.dateEnv, i = n.theme, o = n.viewApi, s = n.options, l = W(new Date(2592e5), r.dow), c = {
      dow: r.dow,
      isDisabled: !1,
      isFuture: !1,
      isPast: !1,
      isToday: !1,
      isOther: !1
    }, u = [Ha].concat(ur(c, i), r.extraClassNames || []), f = a.format(l, r.dayHeaderFormat), v = h(h(h(h({
      date: l
    }, c), { view: o }), r.extraHookProps), { text: f });
    return m(Ce, { hookProps: v, classNames: s.dayHeaderClassNames, content: s.dayHeaderContent, defaultContent: xa, didMount: s.dayHeaderDidMount, willUnmount: s.dayHeaderWillUnmount }, function(d, p, E, S) {
      return m(
        "th",
        h({ ref: d, role: "columnheader", className: u.concat(p).join(" "), colSpan: r.colSpan }, r.extraDataAttrs),
        m(
          "div",
          { className: "fc-scrollgrid-sync-inner" },
          m("a", { "aria-label": a.format(l, bu), className: [
            "fc-col-header-cell-cushion",
            r.isSticky ? "fc-sticky" : ""
          ].join(" "), ref: E }, S)
        )
      );
    });
  }, e;
}(x), Aa = function(t) {
  R(e, t);
  function e(r, n) {
    var a = t.call(this, r, n) || this;
    return a.initialNowDate = Ne(n.options.now, n.dateEnv), a.initialNowQueriedMs = new Date().valueOf(), a.state = a.computeTiming().currentState, a;
  }
  return e.prototype.render = function() {
    var r = this, n = r.props, a = r.state;
    return n.children(a.nowDate, a.todayRange);
  }, e.prototype.componentDidMount = function() {
    this.setTimeout();
  }, e.prototype.componentDidUpdate = function(r) {
    r.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout());
  }, e.prototype.componentWillUnmount = function() {
    this.clearTimeout();
  }, e.prototype.computeTiming = function() {
    var r = this, n = r.props, a = r.context, i = le(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs), o = a.dateEnv.startOf(i, n.unit), s = a.dateEnv.add(o, k(1, n.unit)), l = s.valueOf() - i.valueOf();
    return l = Math.min(1e3 * 60 * 60 * 24, l), {
      currentState: { nowDate: o, todayRange: mn(o) },
      nextState: { nowDate: s, todayRange: mn(s) },
      waitMs: l
    };
  }, e.prototype.setTimeout = function() {
    var r = this, n = this.computeTiming(), a = n.nextState, i = n.waitMs;
    this.timeoutId = setTimeout(function() {
      r.setState(a, function() {
        r.setTimeout();
      });
    }, i);
  }, e.prototype.clearTimeout = function() {
    this.timeoutId && clearTimeout(this.timeoutId);
  }, e.contextType = fe, e;
}(Zt);
function mn(t) {
  var e = H(t), r = W(e, 1);
  return { start: e, end: r };
}
var Cu = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.createDayHeaderFormatter = M(Ru), r;
  }
  return e.prototype.render = function() {
    var r = this.context, n = this.props, a = n.dates, i = n.dateProfile, o = n.datesRepDistinctDays, s = n.renderIntro, l = this.createDayHeaderFormatter(r.options.dayHeaderFormat, o, a.length);
    return m(Aa, { unit: "day" }, function(c, u) {
      return m(
        "tr",
        { role: "row" },
        s && s("day"),
        a.map(function(f) {
          return o ? m(Su, { key: f.toISOString(), date: f, dateProfile: i, todayRange: u, colCnt: a.length, dayHeaderFormat: l }) : m(Du, { key: f.getUTCDay(), dow: f.getUTCDay(), dayHeaderFormat: l });
        })
      );
    });
  }, e;
}(x);
function Ru(t, e, r) {
  return t || Eu(e, r);
}
var wu = function() {
  function t(e, r) {
    for (var n = e.start, a = e.end, i = [], o = [], s = -1; n < a; )
      r.isHiddenDay(n) ? i.push(s + 0.5) : (s += 1, i.push(s), o.push(n)), n = W(n, 1);
    this.dates = o, this.indices = i, this.cnt = o.length;
  }
  return t.prototype.sliceRange = function(e) {
    var r = this.getDateDayIndex(e.start), n = this.getDateDayIndex(W(e.end, -1)), a = Math.max(0, r), i = Math.min(this.cnt - 1, n);
    return a = Math.ceil(a), i = Math.floor(i), a <= i ? {
      firstIndex: a,
      lastIndex: i,
      isStart: r === a,
      isEnd: n === i
    } : null;
  }, t.prototype.getDateDayIndex = function(e) {
    var r = this.indices, n = Math.floor(be(this.dates[0], e));
    return n < 0 ? r[0] - 1 : n >= r.length ? r[r.length - 1] + 1 : r[n];
  }, t;
}(), Tu = function() {
  function t(e, r) {
    var n = e.dates, a, i, o;
    if (r) {
      for (i = n[0].getUTCDay(), a = 1; a < n.length && n[a].getUTCDay() !== i; a += 1)
        ;
      o = Math.ceil(n.length / a);
    } else
      o = 1, a = n.length;
    this.rowCnt = o, this.colCnt = a, this.daySeries = e, this.cells = this.buildCells(), this.headerDates = this.buildHeaderDates();
  }
  return t.prototype.buildCells = function() {
    for (var e = [], r = 0; r < this.rowCnt; r += 1) {
      for (var n = [], a = 0; a < this.colCnt; a += 1)
        n.push(this.buildCell(r, a));
      e.push(n);
    }
    return e;
  }, t.prototype.buildCell = function(e, r) {
    var n = this.daySeries.dates[e * this.colCnt + r];
    return {
      key: n.toISOString(),
      date: n
    };
  }, t.prototype.buildHeaderDates = function() {
    for (var e = [], r = 0; r < this.colCnt; r += 1)
      e.push(this.cells[0][r].date);
    return e;
  }, t.prototype.sliceRange = function(e) {
    var r = this.colCnt, n = this.daySeries.sliceRange(e), a = [];
    if (n)
      for (var i = n.firstIndex, o = n.lastIndex, s = i; s <= o; ) {
        var l = Math.floor(s / r), c = Math.min((l + 1) * r, o + 1);
        a.push({
          row: l,
          firstCol: s % r,
          lastCol: (c - 1) % r,
          isStart: n.isStart && s === i,
          isEnd: n.isEnd && c - 1 === o
        }), s = c;
      }
    return a;
  }, t;
}(), _u = function() {
  function t() {
    this.sliceBusinessHours = M(this._sliceBusinessHours), this.sliceDateSelection = M(this._sliceDateSpan), this.sliceEventStore = M(this._sliceEventStore), this.sliceEventDrag = M(this._sliceInteraction), this.sliceEventResize = M(this._sliceInteraction), this.forceDayIfListItem = !1;
  }
  return t.prototype.sliceProps = function(e, r, n, a) {
    for (var i = [], o = 4; o < arguments.length; o++)
      i[o - 4] = arguments[o];
    var s = e.eventUiBases, l = this.sliceEventStore.apply(this, N([e.eventStore, s, r, n], i));
    return {
      dateSelectionSegs: this.sliceDateSelection.apply(this, N([e.dateSelection, s, a], i)),
      businessHourSegs: this.sliceBusinessHours.apply(this, N([e.businessHours, r, n, a], i)),
      fgEventSegs: l.fg,
      bgEventSegs: l.bg,
      eventDrag: this.sliceEventDrag.apply(this, N([e.eventDrag, s, r, n], i)),
      eventResize: this.sliceEventResize.apply(this, N([e.eventResize, s, r, n], i)),
      eventSelection: e.eventSelection
    };
  }, t.prototype.sliceNowDate = function(e, r) {
    for (var n = [], a = 2; a < arguments.length; a++)
      n[a - 2] = arguments[a];
    return this._sliceDateSpan.apply(this, N([
      { range: { start: e, end: le(e, 1) }, allDay: !1 },
      {},
      r
    ], n));
  }, t.prototype._sliceBusinessHours = function(e, r, n, a) {
    for (var i = [], o = 4; o < arguments.length; o++)
      i[o - 4] = arguments[o];
    return e ? this._sliceEventStore.apply(this, N([
      me(e, Pt(r, Boolean(n)), a),
      {},
      r,
      n
    ], i)).bg : [];
  }, t.prototype._sliceEventStore = function(e, r, n, a) {
    for (var i = [], o = 4; o < arguments.length; o++)
      i[o - 4] = arguments[o];
    if (e) {
      var s = nn(e, r, Pt(n, Boolean(a)), a);
      return {
        bg: this.sliceEventRanges(s.bg, i),
        fg: this.sliceEventRanges(s.fg, i)
      };
    }
    return { bg: [], fg: [] };
  }, t.prototype._sliceInteraction = function(e, r, n, a) {
    for (var i = [], o = 4; o < arguments.length; o++)
      i[o - 4] = arguments[o];
    if (!e)
      return null;
    var s = nn(e.mutatedEvents, r, Pt(n, Boolean(a)), a);
    return {
      segs: this.sliceEventRanges(s.fg, i),
      affectedInstances: e.affectedEvents.instances,
      isEvent: e.isEvent
    };
  }, t.prototype._sliceDateSpan = function(e, r, n) {
    for (var a = [], i = 3; i < arguments.length; i++)
      a[i - 3] = arguments[i];
    if (!e)
      return [];
    for (var o = os(e, r, n), s = this.sliceRange.apply(this, N([e.range], a)), l = 0, c = s; l < c.length; l++) {
      var u = c[l];
      u.eventRange = o;
    }
    return s;
  }, t.prototype.sliceEventRanges = function(e, r) {
    for (var n = [], a = 0, i = e; a < i.length; a++) {
      var o = i[a];
      n.push.apply(n, this.sliceEventRange(o, r));
    }
    return n;
  }, t.prototype.sliceEventRange = function(e, r) {
    var n = e.range;
    this.forceDayIfListItem && e.ui.display === "list-item" && (n = {
      start: n.start,
      end: W(n.start, 1)
    });
    for (var a = this.sliceRange.apply(this, N([n], r)), i = 0, o = a; i < o.length; i++) {
      var s = o[i];
      s.eventRange = e, s.isStart = e.isStart && s.isStart, s.isEnd = e.isEnd && s.isEnd;
    }
    return a;
  }, t;
}();
function Pt(t, e) {
  var r = t.activeRange;
  return e ? r : {
    start: le(r.start, t.slotMinTime.milliseconds),
    end: le(r.end, t.slotMaxTime.milliseconds - 864e5)
  };
}
function Na(t, e, r) {
  var n = t.mutatedEvents.instances;
  for (var a in n)
    if (!dt(e.validRange, n[a].range))
      return !1;
  return Oa({ eventDrag: t }, r);
}
function Mu(t, e, r) {
  return dt(e.validRange, t.range) ? Oa({ dateSelection: t }, r) : !1;
}
function Oa(t, e) {
  var r = e.getCurrentData(), n = h({ businessHours: r.businessHours, dateSelection: "", eventStore: r.eventStore, eventUiBases: r.eventUiBases, eventSelection: "", eventDrag: null, eventResize: null }, t);
  return (e.pluginHooks.isPropsValid || ku)(n, e);
}
function ku(t, e, r, n) {
  return r === void 0 && (r = {}), !(t.eventDrag && !Iu(t, e, r, n) || t.dateSelection && !Pu(t, e, r, n));
}
function Iu(t, e, r, n) {
  var a = e.getCurrentData(), i = t.eventDrag, o = i.mutatedEvents, s = o.defs, l = o.instances, c = ot(s, i.isEvent ? t.eventUiBases : { "": a.selectionConfig });
  n && (c = ce(c, n));
  var u = wl(t.eventStore, i.affectedEvents.instances), f = u.defs, v = u.instances, d = ot(f, t.eventUiBases);
  for (var p in l) {
    var E = l[p], S = E.range, g = c[E.defId], b = s[E.defId];
    if (!La(g.constraints, S, u, t.businessHours, e))
      return !1;
    var C = e.options.eventOverlap, D = typeof C == "function" ? C : null;
    for (var I in v) {
      var _ = v[I];
      if (or(S, _.range)) {
        var P = d[_.defId].overlap;
        if (P === !1 && i.isEvent || g.overlap === !1 || D && !D(
          new O(e, f[_.defId], _),
          new O(e, b, E)
        ))
          return !1;
      }
    }
    for (var w = a.eventStore, A = 0, L = g.allows; A < L.length; A++) {
      var Z = L[A], z = h(h({}, r), { range: E.range, allDay: b.allDay }), Ue = w.defs[b.defId], Ve = w.instances[p], mt = void 0;
      if (Ue ? mt = new O(e, Ue, Ve) : mt = new O(e, b), !Z(sr(z, e), mt))
        return !1;
    }
  }
  return !0;
}
function Pu(t, e, r, n) {
  var a = t.eventStore, i = a.defs, o = a.instances, s = t.dateSelection, l = s.range, c = e.getCurrentData().selectionConfig;
  if (n && (c = n(c)), !La(c.constraints, l, a, t.businessHours, e))
    return !1;
  var u = e.options.selectOverlap, f = typeof u == "function" ? u : null;
  for (var v in o) {
    var d = o[v];
    if (or(l, d.range) && (c.overlap === !1 || f && !f(new O(e, i[d.defId], d), null)))
      return !1;
  }
  for (var p = 0, E = c.allows; p < E.length; p++) {
    var S = E[p], g = h(h({}, r), s);
    if (!S(sr(g, e), null))
      return !1;
  }
  return !0;
}
function La(t, e, r, n, a) {
  for (var i = 0, o = t; i < o.length; i++) {
    var s = o[i];
    if (!xu(Hu(s, e, r, n, a), e))
      return !1;
  }
  return !0;
}
function Hu(t, e, r, n, a) {
  return t === "businessHours" ? Ht(me(n, e, a)) : typeof t == "string" ? Ht(ft(r, function(i) {
    return i.groupId === t;
  })) : typeof t == "object" && t ? Ht(me(t, e, a)) : [];
}
function Ht(t) {
  var e = t.instances, r = [];
  for (var n in e)
    r.push(e[n].range);
  return r;
}
function xu(t, e) {
  for (var r = 0, n = t; r < n.length; r++) {
    var a = n[r];
    if (dt(a, e))
      return !0;
  }
  return !1;
}
var Fe = /^(visible|hidden)$/, Au = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.handleEl = function(n) {
      r.el = n, $(r.props.elRef, n);
    }, r;
  }
  return e.prototype.render = function() {
    var r = this.props, n = r.liquid, a = r.liquidIsAbsolute, i = n && a, o = ["fc-scroller"];
    return n && (a ? o.push("fc-scroller-liquid-absolute") : o.push("fc-scroller-liquid")), m("div", { ref: this.handleEl, className: o.join(" "), style: {
      overflowX: r.overflowX,
      overflowY: r.overflowY,
      left: i && -(r.overcomeLeft || 0) || "",
      right: i && -(r.overcomeRight || 0) || "",
      bottom: i && -(r.overcomeBottom || 0) || "",
      marginLeft: !i && -(r.overcomeLeft || 0) || "",
      marginRight: !i && -(r.overcomeRight || 0) || "",
      marginBottom: !i && -(r.overcomeBottom || 0) || "",
      maxHeight: r.maxHeight || ""
    } }, r.children);
  }, e.prototype.needsXScrolling = function() {
    if (Fe.test(this.props.overflowX))
      return !1;
    for (var r = this.el, n = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), a = r.children, i = 0; i < a.length; i += 1) {
      var o = a[i];
      if (o.getBoundingClientRect().width > n)
        return !0;
    }
    return !1;
  }, e.prototype.needsYScrolling = function() {
    if (Fe.test(this.props.overflowY))
      return !1;
    for (var r = this.el, n = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), a = r.children, i = 0; i < a.length; i += 1) {
      var o = a[i];
      if (o.getBoundingClientRect().height > n)
        return !0;
    }
    return !1;
  }, e.prototype.getXScrollbarWidth = function() {
    return Fe.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight;
  }, e.prototype.getYScrollbarWidth = function() {
    return Fe.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth;
  }, e;
}(x), ae = function() {
  function t(e) {
    var r = this;
    this.masterCallback = e, this.currentMap = {}, this.depths = {}, this.callbackMap = {}, this.handleValue = function(n, a) {
      var i = r, o = i.depths, s = i.currentMap, l = !1, c = !1;
      n !== null ? (l = a in s, s[a] = n, o[a] = (o[a] || 0) + 1, c = !0) : (o[a] -= 1, o[a] || (delete s[a], delete r.callbackMap[a], l = !0)), r.masterCallback && (l && r.masterCallback(null, String(a)), c && r.masterCallback(n, String(a)));
    };
  }
  return t.prototype.createRef = function(e) {
    var r = this, n = this.callbackMap[e];
    return n || (n = this.callbackMap[e] = function(a) {
      r.handleValue(a, String(e));
    }), n;
  }, t.prototype.collect = function(e, r, n) {
    return so(this.currentMap, e, r, n);
  }, t.prototype.getAll = function() {
    return er(this.currentMap);
  }, t;
}();
function Nu(t) {
  for (var e = xi(t, ".fc-scrollgrid-shrink"), r = 0, n = 0, a = e; n < a.length; n++) {
    var i = a[n];
    r = Math.max(r, ji(i));
  }
  return Math.ceil(r);
}
function Ua(t, e) {
  return t.liquid && e.liquid;
}
function Ou(t, e) {
  return e.maxHeight != null || Ua(t, e);
}
function Lu(t, e, r, n) {
  var a = r.expandRows, i = typeof e.content == "function" ? e.content(r) : m("table", {
    role: "presentation",
    className: [
      e.tableClassName,
      t.syncRowHeights ? "fc-scrollgrid-sync-table" : ""
    ].join(" "),
    style: {
      minWidth: r.tableMinWidth,
      width: r.clientWidth,
      height: a ? r.clientHeight : ""
    }
  }, r.tableColGroupNode, m(n ? "thead" : "tbody", {
    role: "presentation"
  }, typeof e.rowContent == "function" ? e.rowContent(r) : e.rowContent));
  return i;
}
function Uu(t, e) {
  return ye(t, e, X);
}
function Vu(t, e) {
  for (var r = [], n = 0, a = t; n < a.length; n++)
    for (var i = a[n], o = i.span || 1, s = 0; s < o; s += 1)
      r.push(m("col", { style: {
        width: i.width === "shrink" ? Wu(e) : i.width || "",
        minWidth: i.minWidth || ""
      } }));
  return m.apply(void 0, N(["colgroup", {}], r));
}
function Wu(t) {
  return t == null ? 4 : t;
}
function Bu(t) {
  for (var e = 0, r = t; e < r.length; e++) {
    var n = r[e];
    if (n.width === "shrink")
      return !0;
  }
  return !1;
}
function Fu(t, e) {
  var r = [
    "fc-scrollgrid",
    e.theme.getClass("table")
  ];
  return t && r.push("fc-scrollgrid-liquid"), r;
}
function zu(t, e) {
  var r = [
    "fc-scrollgrid-section",
    "fc-scrollgrid-section-" + t.type,
    t.className
  ];
  return e && t.liquid && t.maxHeight == null && r.push("fc-scrollgrid-section-liquid"), t.isSticky && r.push("fc-scrollgrid-section-sticky"), r;
}
function Gu(t) {
  return m("div", { className: "fc-scrollgrid-sticky-shim", style: {
    width: t.clientWidth,
    minWidth: t.tableMinWidth
  } });
}
function yn(t) {
  var e = t.stickyHeaderDates;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
function qu(t) {
  var e = t.stickyFooterScrollbar;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
var Va = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.processCols = M(function(n) {
      return n;
    }, Uu), r.renderMicroColGroup = M(Vu), r.scrollerRefs = new ae(), r.scrollerElRefs = new ae(r._handleScrollerEl.bind(r)), r.state = {
      shrinkWidth: null,
      forceYScrollbars: !1,
      scrollerClientWidths: {},
      scrollerClientHeights: {}
    }, r.handleSizing = function() {
      r.safeSetState(h({ shrinkWidth: r.computeShrinkWidth() }, r.computeScrollerDims()));
    }, r;
  }
  return e.prototype.render = function() {
    var r = this, n = r.props, a = r.state, i = r.context, o = n.sections || [], s = this.processCols(n.cols), l = this.renderMicroColGroup(s, a.shrinkWidth), c = Fu(n.liquid, i);
    n.collapsibleWidth && c.push("fc-scrollgrid-collapsible");
    for (var u = o.length, f = 0, v, d = [], p = [], E = []; f < u && (v = o[f]).type === "header"; )
      d.push(this.renderSection(v, l, !0)), f += 1;
    for (; f < u && (v = o[f]).type === "body"; )
      p.push(this.renderSection(v, l, !1)), f += 1;
    for (; f < u && (v = o[f]).type === "footer"; )
      E.push(this.renderSection(v, l, !0)), f += 1;
    var S = !va(), g = { role: "rowgroup" };
    return m("table", {
      role: "grid",
      className: c.join(" "),
      style: { height: n.height }
    }, Boolean(!S && d.length) && m.apply(void 0, N(["thead", g], d)), Boolean(!S && p.length) && m.apply(void 0, N(["tbody", g], p)), Boolean(!S && E.length) && m.apply(void 0, N(["tfoot", g], E)), S && m.apply(void 0, N(N(N(["tbody", g], d), p), E)));
  }, e.prototype.renderSection = function(r, n, a) {
    return "outerContent" in r ? m(B, { key: r.key }, r.outerContent) : m("tr", { key: r.key, role: "presentation", className: zu(r, this.props.liquid).join(" ") }, this.renderChunkTd(r, n, r.chunk, a));
  }, e.prototype.renderChunkTd = function(r, n, a, i) {
    if ("outerContent" in a)
      return a.outerContent;
    var o = this.props, s = this.state, l = s.forceYScrollbars, c = s.scrollerClientWidths, u = s.scrollerClientHeights, f = Ou(o, r), v = Ua(o, r), d = o.liquid ? l ? "scroll" : f ? "auto" : "hidden" : "visible", p = r.key, E = Lu(r, a, {
      tableColGroupNode: n,
      tableMinWidth: "",
      clientWidth: !o.collapsibleWidth && c[p] !== void 0 ? c[p] : null,
      clientHeight: u[p] !== void 0 ? u[p] : null,
      expandRows: r.expandRows,
      syncRowHeights: !1,
      rowSyncHeights: [],
      reportRowHeightChange: function() {
      }
    }, i);
    return m(i ? "th" : "td", {
      ref: a.elRef,
      role: "presentation"
    }, m(
      "div",
      { className: "fc-scroller-harness" + (v ? " fc-scroller-harness-liquid" : "") },
      m(Au, { ref: this.scrollerRefs.createRef(p), elRef: this.scrollerElRefs.createRef(p), overflowY: d, overflowX: o.liquid ? "hidden" : "visible", maxHeight: r.maxHeight, liquid: v, liquidIsAbsolute: !0 }, E)
    ));
  }, e.prototype._handleScrollerEl = function(r, n) {
    var a = Yu(this.props.sections, n);
    a && $(a.chunk.scrollerElRef, r);
  }, e.prototype.componentDidMount = function() {
    this.handleSizing(), this.context.addResizeHandler(this.handleSizing);
  }, e.prototype.componentDidUpdate = function() {
    this.handleSizing();
  }, e.prototype.componentWillUnmount = function() {
    this.context.removeResizeHandler(this.handleSizing);
  }, e.prototype.computeShrinkWidth = function() {
    return Bu(this.props.cols) ? Nu(this.scrollerElRefs.getAll()) : 0;
  }, e.prototype.computeScrollerDims = function() {
    var r = Us(), n = this, a = n.scrollerRefs, i = n.scrollerElRefs, o = !1, s = {}, l = {};
    for (var c in a.currentMap) {
      var u = a.currentMap[c];
      if (u && u.needsYScrolling()) {
        o = !0;
        break;
      }
    }
    for (var f = 0, v = this.props.sections; f < v.length; f++) {
      var d = v[f], c = d.key, p = i.currentMap[c];
      if (p) {
        var E = p.parentNode;
        s[c] = Math.floor(E.getBoundingClientRect().width - (o ? r.y : 0)), l[c] = Math.floor(E.getBoundingClientRect().height);
      }
    }
    return { forceYScrollbars: o, scrollerClientWidths: s, scrollerClientHeights: l };
  }, e;
}(x);
Va.addStateEquality({
  scrollerClientWidths: X,
  scrollerClientHeights: X
});
function Yu(t, e) {
  for (var r = 0, n = t; r < n.length; r++) {
    var a = n[r];
    if (a.key === e)
      return a;
  }
  return null;
}
var yr = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.elRef = G(), r;
  }
  return e.prototype.render = function() {
    var r = this, n = r.props, a = r.context, i = a.options, o = n.seg, s = o.eventRange, l = s.ui, c = {
      event: new O(a, s.def, s.instance),
      view: a.viewApi,
      timeText: n.timeText,
      textColor: l.textColor,
      backgroundColor: l.backgroundColor,
      borderColor: l.borderColor,
      isDraggable: !n.disableDragging && Xo(o, a),
      isStartResizable: !n.disableResizing && $o(o, a),
      isEndResizable: !n.disableResizing && Ko(o),
      isMirror: Boolean(n.isDragging || n.isResizing || n.isDateSelecting),
      isStart: Boolean(o.isStart),
      isEnd: Boolean(o.isEnd),
      isPast: Boolean(n.isPast),
      isFuture: Boolean(n.isFuture),
      isToday: Boolean(n.isToday),
      isSelected: Boolean(n.isSelected),
      isDragging: Boolean(n.isDragging),
      isResizing: Boolean(n.isResizing)
    }, u = Jo(c).concat(l.classNames);
    return m(Ce, { hookProps: c, classNames: i.eventClassNames, content: i.eventContent, defaultContent: n.defaultContent, didMount: i.eventDidMount, willUnmount: i.eventWillUnmount, elRef: this.elRef }, function(f, v, d, p) {
      return n.children(f, u.concat(v), d, p, c);
    });
  }, e.prototype.componentDidMount = function() {
    an(this.elRef.current, this.props.seg);
  }, e.prototype.componentDidUpdate = function(r) {
    var n = this.props.seg;
    n !== r.seg && an(this.elRef.current, n);
  }, e;
}(x), ju = function(t) {
  R(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.render = function() {
    var r = this, n = r.props, a = r.context, i = n.seg, o = a.options.eventTimeFormat || n.defaultTimeFormat, s = Qn(i, o, a, n.defaultDisplayEventTime, n.defaultDisplayEventEnd);
    return m(yr, { seg: i, timeText: s, disableDragging: n.disableDragging, disableResizing: n.disableResizing, defaultContent: n.defaultContent || Zu, isDragging: n.isDragging, isResizing: n.isResizing, isDateSelecting: n.isDateSelecting, isSelected: n.isSelected, isPast: n.isPast, isFuture: n.isFuture, isToday: n.isToday }, function(l, c, u, f, v) {
      return m(
        "a",
        h({ className: n.extraClassNames.concat(c).join(" "), style: {
          borderColor: v.borderColor,
          backgroundColor: v.backgroundColor
        }, ref: l }, ea(i, a)),
        m("div", { className: "fc-event-main", ref: u, style: { color: v.textColor } }, f),
        v.isStartResizable && m("div", { className: "fc-event-resizer fc-event-resizer-start" }),
        v.isEndResizable && m("div", { className: "fc-event-resizer fc-event-resizer-end" })
      );
    });
  }, e;
}(x);
function Zu(t) {
  return m(
    "div",
    { className: "fc-event-main-frame" },
    t.timeText && m("div", { className: "fc-event-time" }, t.timeText),
    m(
      "div",
      { className: "fc-event-title-container" },
      m("div", { className: "fc-event-title fc-sticky" }, t.event.title || m(B, null, "\xA0"))
    )
  );
}
var Xu = U({ day: "numeric" }), Wa = function(t) {
  R(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.render = function() {
    var r = this, n = r.props, a = r.context, i = a.options, o = Ba({
      date: n.date,
      dateProfile: n.dateProfile,
      todayRange: n.todayRange,
      showDayNumber: n.showDayNumber,
      extraProps: n.extraHookProps,
      viewApi: a.viewApi,
      dateEnv: a.dateEnv
    });
    return m(ya, { hookProps: o, content: i.dayCellContent, defaultContent: n.defaultContent }, n.children);
  }, e;
}(x);
function Ba(t) {
  var e = t.date, r = t.dateEnv, n = pa(e, t.todayRange, null, t.dateProfile);
  return h(h(h({ date: r.toDate(e), view: t.viewApi }, n), { dayNumberText: t.showDayNumber ? r.format(e, Xu) : "" }), t.extraProps);
}
var Fa = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.refineHookProps = je(Ba), r.normalizeClassNames = Ea(), r;
  }
  return e.prototype.render = function() {
    var r = this, n = r.props, a = r.context, i = a.options, o = this.refineHookProps({
      date: n.date,
      dateProfile: n.dateProfile,
      todayRange: n.todayRange,
      showDayNumber: n.showDayNumber,
      extraProps: n.extraHookProps,
      viewApi: a.viewApi,
      dateEnv: a.dateEnv
    }), s = ur(o, a.theme).concat(o.isDisabled ? [] : this.normalizeClassNames(i.dayCellClassNames, o)), l = o.isDisabled ? {} : {
      "data-date": Yn(n.date)
    };
    return m(vr, { hookProps: o, didMount: i.dayCellDidMount, willUnmount: i.dayCellWillUnmount, elRef: n.elRef }, function(c) {
      return n.children(c, s, l, o.isDisabled);
    });
  }, e;
}(x);
function $u(t) {
  return m("div", { className: "fc-" + t });
}
var Ku = function(t) {
  return m(yr, { defaultContent: Ju, seg: t.seg, timeText: "", disableDragging: !0, disableResizing: !0, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: !1, isPast: t.isPast, isFuture: t.isFuture, isToday: t.isToday }, function(e, r, n, a, i) {
    return m("div", { ref: e, className: ["fc-bg-event"].concat(r).join(" "), style: {
      backgroundColor: i.backgroundColor
    } }, a);
  });
};
function Ju(t) {
  var e = t.event.title;
  return e && m("div", { className: "fc-event-title" }, t.event.title);
}
var Qu = function(t) {
  return m(fe.Consumer, null, function(e) {
    var r = e.dateEnv, n = e.options, a = t.date, i = n.weekNumberFormat || t.defaultFormat, o = r.computeWeekNumber(a), s = r.format(a, i), l = { num: o, text: s, date: a };
    return m(Ce, { hookProps: l, classNames: n.weekNumberClassNames, content: n.weekNumberContent, defaultContent: ec, didMount: n.weekNumberDidMount, willUnmount: n.weekNumberWillUnmount }, t.children);
  });
};
function ec(t) {
  return t.text;
}
var xt = 10, tc = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.state = {
      titleId: ut()
    }, r.handleRootEl = function(n) {
      r.rootEl = n, r.props.elRef && $(r.props.elRef, n);
    }, r.handleDocumentMouseDown = function(n) {
      var a = Vn(n);
      r.rootEl.contains(a) || r.handleCloseClick();
    }, r.handleDocumentKeyDown = function(n) {
      n.key === "Escape" && r.handleCloseClick();
    }, r.handleCloseClick = function() {
      var n = r.props.onClose;
      n && n();
    }, r;
  }
  return e.prototype.render = function() {
    var r = this.context, n = r.theme, a = r.options, i = this, o = i.props, s = i.state, l = [
      "fc-popover",
      n.getClass("popover")
    ].concat(o.extraClassNames || []);
    return Ii(m(
      "div",
      h({ id: o.id, className: l.join(" "), "aria-labelledby": s.titleId }, o.extraAttrs, { ref: this.handleRootEl }),
      m(
        "div",
        { className: "fc-popover-header " + n.getClass("popoverHeader") },
        m("span", { className: "fc-popover-title", id: s.titleId }, o.title),
        m("span", { className: "fc-popover-close " + n.getIconClass("close"), title: a.closeHint, onClick: this.handleCloseClick })
      ),
      m("div", { className: "fc-popover-body " + n.getClass("popoverContent") }, o.children)
    ), o.parentEl);
  }, e.prototype.componentDidMount = function() {
    document.addEventListener("mousedown", this.handleDocumentMouseDown), document.addEventListener("keydown", this.handleDocumentKeyDown), this.updateSize();
  }, e.prototype.componentWillUnmount = function() {
    document.removeEventListener("mousedown", this.handleDocumentMouseDown), document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }, e.prototype.updateSize = function() {
    var r = this.context.isRtl, n = this.props, a = n.alignmentEl, i = n.alignGridTop, o = this.rootEl, s = Fs(a);
    if (s) {
      var l = o.getBoundingClientRect(), c = i ? V(a, ".fc-scrollgrid").getBoundingClientRect().top : s.top, u = r ? s.right - l.width : s.left;
      c = Math.max(c, xt), u = Math.min(u, document.documentElement.clientWidth - xt - l.width), u = Math.max(u, xt);
      var f = o.offsetParent.getBoundingClientRect();
      Te(o, {
        top: c - f.top,
        left: u - f.left
      });
    }
  }, e;
}(x), rc = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.handleRootEl = function(n) {
      r.rootEl = n, n ? r.context.registerInteractiveComponent(r, {
        el: n,
        useEventCenter: !1
      }) : r.context.unregisterInteractiveComponent(r);
    }, r;
  }
  return e.prototype.render = function() {
    var r = this.context, n = r.options, a = r.dateEnv, i = this.props, o = i.startDate, s = i.todayRange, l = i.dateProfile, c = a.format(o, n.dayPopoverFormat);
    return m(Fa, { date: o, dateProfile: l, todayRange: s, elRef: this.handleRootEl }, function(u, f, v) {
      return m(
        tc,
        { elRef: u, id: i.id, title: c, extraClassNames: ["fc-more-popover"].concat(f), extraAttrs: v, parentEl: i.parentEl, alignmentEl: i.alignmentEl, alignGridTop: i.alignGridTop, onClose: i.onClose },
        m(Wa, { date: o, dateProfile: l, todayRange: s }, function(d, p) {
          return p && m("div", { className: "fc-more-popover-misc", ref: d }, p);
        }),
        i.children
      );
    });
  }, e.prototype.queryHit = function(r, n, a, i) {
    var o = this, s = o.rootEl, l = o.props;
    return r >= 0 && r < a && n >= 0 && n < i ? {
      dateProfile: l.dateProfile,
      dateSpan: h({ allDay: !0, range: {
        start: l.startDate,
        end: l.endDate
      } }, l.extraDateSpan),
      dayEl: s,
      rect: {
        left: 0,
        top: 0,
        right: a,
        bottom: i
      },
      layer: 1
    } : null;
  }, e;
}(De), nc = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.linkElRef = G(), r.state = {
      isPopoverOpen: !1,
      popoverId: ut()
    }, r.handleClick = function(n) {
      var a = r, i = a.props, o = a.context, s = o.options.moreLinkClick, l = En(i).start;
      function c(u) {
        var f = u.eventRange, v = f.def, d = f.instance, p = f.range;
        return {
          event: new O(o, v, d),
          start: o.dateEnv.toDate(p.start),
          end: o.dateEnv.toDate(p.end),
          isStart: u.isStart,
          isEnd: u.isEnd
        };
      }
      typeof s == "function" && (s = s({
        date: l,
        allDay: Boolean(i.allDayDate),
        allSegs: i.allSegs.map(c),
        hiddenSegs: i.hiddenSegs.map(c),
        jsEvent: n,
        view: o.viewApi
      })), !s || s === "popover" ? r.setState({ isPopoverOpen: !0 }) : typeof s == "string" && o.calendarApi.zoomTo(l, s);
    }, r.handlePopoverClose = function() {
      r.setState({ isPopoverOpen: !1 });
    }, r;
  }
  return e.prototype.render = function() {
    var r = this, n = this, a = n.props, i = n.state;
    return m(fe.Consumer, null, function(o) {
      var s = o.viewApi, l = o.options, c = o.calendarApi, u = l.moreLinkText, f = a.moreCnt, v = En(a), d = typeof u == "function" ? u.call(c, f) : "+" + f + " " + u, p = _e(l.moreLinkHint, [f], d), E = {
        num: f,
        shortText: "+" + f,
        text: d,
        view: s
      };
      return m(
        B,
        null,
        Boolean(a.moreCnt) && m(Ce, { elRef: r.linkElRef, hookProps: E, classNames: l.moreLinkClassNames, content: l.moreLinkContent, defaultContent: a.defaultContent || ac, didMount: l.moreLinkDidMount, willUnmount: l.moreLinkWillUnmount }, function(S, g, b, C) {
          return a.children(S, ["fc-more-link"].concat(g), b, C, r.handleClick, p, i.isPopoverOpen, i.isPopoverOpen ? i.popoverId : "");
        }),
        i.isPopoverOpen && m(rc, { id: i.popoverId, startDate: v.start, endDate: v.end, dateProfile: a.dateProfile, todayRange: a.todayRange, extraDateSpan: a.extraDateSpan, parentEl: r.parentEl, alignmentEl: a.alignmentElRef.current, alignGridTop: a.alignGridTop, onClose: r.handlePopoverClose }, a.popoverContent())
      );
    });
  }, e.prototype.componentDidMount = function() {
    this.updateParentEl();
  }, e.prototype.componentDidUpdate = function() {
    this.updateParentEl();
  }, e.prototype.updateParentEl = function() {
    this.linkElRef.current && (this.parentEl = V(this.linkElRef.current, ".fc-view-harness"));
  }, e;
}(x);
function ac(t) {
  return t.text;
}
function En(t) {
  if (t.allDayDate)
    return {
      start: t.allDayDate,
      end: W(t.allDayDate, 1)
    };
  var e = t.hiddenSegs;
  return {
    start: ic(e),
    end: sc(e)
  };
}
function ic(t) {
  return t.reduce(oc).eventRange.range.start;
}
function oc(t, e) {
  return t.eventRange.range.start < e.eventRange.range.start ? t : e;
}
function sc(t) {
  return t.reduce(lc).eventRange.range.end;
}
function lc(t, e) {
  return t.eventRange.range.end > e.eventRange.range.end ? t : e;
}
/*!
FullCalendar v5.11.3
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var uc = function(t) {
  R(e, t);
  function e(r, n) {
    n === void 0 && (n = {});
    var a = t.call(this) || this;
    return a.isRendering = !1, a.isRendered = !1, a.currentClassNames = [], a.customContentRenderId = 0, a.handleAction = function(i) {
      switch (i.type) {
        case "SET_EVENT_DRAG":
        case "SET_EVENT_RESIZE":
          a.renderRunner.tryDrain();
      }
    }, a.handleData = function(i) {
      a.currentData = i, a.renderRunner.request(i.calendarOptions.rerenderDelay);
    }, a.handleRenderRequest = function() {
      if (a.isRendering) {
        a.isRendered = !0;
        var i = a.currentData;
        Br(function() {
          ki(m(yu, { options: i.calendarOptions, theme: i.theme, emitter: i.emitter }, function(o, s, l, c) {
            return a.setClassNames(o), a.setHeight(s), m(
              ma.Provider,
              { value: a.customContentRenderId },
              m(hu, h({ isHeightAuto: l, forPrint: c }, i))
            );
          }), a.el);
        });
      } else
        a.isRendered && (a.isRendered = !1, Pi(a.el), a.setClassNames([]), a.setHeight(""));
    }, a.el = r, a.renderRunner = new hr(a.handleRenderRequest), new ka({
      optionOverrides: n,
      calendarApi: a,
      onAction: a.handleAction,
      onData: a.handleData
    }), a;
  }
  return Object.defineProperty(e.prototype, "view", {
    get: function() {
      return this.currentData.viewApi;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.render = function() {
    var r = this.isRendering;
    r ? this.customContentRenderId += 1 : this.isRendering = !0, this.renderRunner.request(), r && this.updateSize();
  }, e.prototype.destroy = function() {
    this.isRendering && (this.isRendering = !1, this.renderRunner.request());
  }, e.prototype.updateSize = function() {
    var r = this;
    Br(function() {
      t.prototype.updateSize.call(r);
    });
  }, e.prototype.batchRendering = function(r) {
    this.renderRunner.pause("batchRendering"), r(), this.renderRunner.resume("batchRendering");
  }, e.prototype.pauseRendering = function() {
    this.renderRunner.pause("pauseRendering");
  }, e.prototype.resumeRendering = function() {
    this.renderRunner.resume("pauseRendering", !0);
  }, e.prototype.resetOptions = function(r, n) {
    this.currentDataManager.resetOptions(r, n);
  }, e.prototype.setClassNames = function(r) {
    if (!ye(r, this.currentClassNames)) {
      for (var n = this.el.classList, a = 0, i = this.currentClassNames; a < i.length; a++) {
        var o = i[a];
        n.remove(o);
      }
      for (var s = 0, l = r; s < l.length; s++) {
        var o = l[s];
        n.add(o);
      }
      this.currentClassNames = r;
    }
  }, e.prototype.setHeight = function(r) {
    Un(this.el, "height", r);
  }, e;
}(hs);
/*!
FullCalendar v5.11.3
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var cc = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.headerElRef = G(), r;
  }
  return e.prototype.renderSimpleLayout = function(r, n) {
    var a = this, i = a.props, o = a.context, s = [], l = yn(o.options);
    return r && s.push({
      type: "header",
      key: "header",
      isSticky: l,
      chunk: {
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: r
      }
    }), s.push({
      type: "body",
      key: "body",
      liquid: !0,
      chunk: { content: n }
    }), m(zt, { viewSpec: o.viewSpec }, function(c, u) {
      return m(
        "div",
        { ref: c, className: ["fc-daygrid"].concat(u).join(" ") },
        m(Va, { liquid: !i.isHeightAuto && !i.forPrint, collapsibleWidth: i.forPrint, cols: [], sections: s })
      );
    });
  }, e.prototype.renderHScrollLayout = function(r, n, a, i) {
    var o = this.context.pluginHooks.scrollGridImpl;
    if (!o)
      throw new Error("No ScrollGrid implementation");
    var s = this, l = s.props, c = s.context, u = !l.forPrint && yn(c.options), f = !l.forPrint && qu(c.options), v = [];
    return r && v.push({
      type: "header",
      key: "header",
      isSticky: u,
      chunks: [{
        key: "main",
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: r
      }]
    }), v.push({
      type: "body",
      key: "body",
      liquid: !0,
      chunks: [{
        key: "main",
        content: n
      }]
    }), f && v.push({
      type: "footer",
      key: "footer",
      isSticky: !0,
      chunks: [{
        key: "main",
        content: Gu
      }]
    }), m(zt, { viewSpec: c.viewSpec }, function(d, p) {
      return m(
        "div",
        { ref: d, className: ["fc-daygrid"].concat(p).join(" ") },
        m(o, { liquid: !l.isHeightAuto && !l.forPrint, collapsibleWidth: l.forPrint, colGroups: [{ cols: [{ span: a, minWidth: i }] }], sections: v })
      );
    });
  }, e;
}(De);
function ze(t, e) {
  for (var r = [], n = 0; n < e; n += 1)
    r[n] = [];
  for (var a = 0, i = t; a < i.length; a++) {
    var o = i[a];
    r[o.row].push(o);
  }
  return r;
}
function Ge(t, e) {
  for (var r = [], n = 0; n < e; n += 1)
    r[n] = [];
  for (var a = 0, i = t; a < i.length; a++) {
    var o = i[a];
    r[o.firstCol].push(o);
  }
  return r;
}
function Sn(t, e) {
  var r = [];
  if (t) {
    for (var n = 0; n < e; n += 1)
      r[n] = {
        affectedInstances: t.affectedInstances,
        isEvent: t.isEvent,
        segs: []
      };
    for (var a = 0, i = t.segs; a < i.length; a++) {
      var o = i[a];
      r[o.row].segs.push(o);
    }
  } else
    for (var n = 0; n < e; n += 1)
      r[n] = null;
  return r;
}
var fc = function(t) {
  R(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.render = function() {
    var r = this.props, n = cr(this.context, r.date);
    return m(Wa, { date: r.date, dateProfile: r.dateProfile, todayRange: r.todayRange, showDayNumber: r.showDayNumber, extraHookProps: r.extraHookProps, defaultContent: dc }, function(a, i) {
      return (i || r.forceDayTop) && m(
        "div",
        { className: "fc-daygrid-day-top", ref: a },
        m("a", h({ id: r.dayNumberId, className: "fc-daygrid-day-number" }, n), i || m(B, null, "\xA0"))
      );
    });
  }, e;
}(x);
function dc(t) {
  return t.dayNumberText;
}
var za = U({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: !0,
  meridiem: "narrow"
});
function Ga(t) {
  var e = t.eventRange.ui.display;
  return e === "list-item" || e === "auto" && !t.eventRange.def.allDay && t.firstCol === t.lastCol && t.isStart && t.isEnd;
}
var qa = function(t) {
  R(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.render = function() {
    var r = this.props;
    return m(ju, h({}, r, { extraClassNames: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"], defaultTimeFormat: za, defaultDisplayEventEnd: r.defaultDisplayEventEnd, disableResizing: !r.seg.eventRange.def.allDay }));
  }, e;
}(x), Ya = function(t) {
  R(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.render = function() {
    var r = this, n = r.props, a = r.context, i = a.options.eventTimeFormat || za, o = Qn(n.seg, i, a, !0, n.defaultDisplayEventEnd);
    return m(yr, { seg: n.seg, timeText: o, defaultContent: vc, isDragging: n.isDragging, isResizing: !1, isDateSelecting: !1, isSelected: n.isSelected, isPast: n.isPast, isFuture: n.isFuture, isToday: n.isToday }, function(s, l, c, u) {
      return m("a", h({ className: ["fc-daygrid-event", "fc-daygrid-dot-event"].concat(l).join(" "), ref: s }, ea(n.seg, a)), u);
    });
  }, e;
}(x);
function vc(t) {
  return m(
    B,
    null,
    m("div", { className: "fc-daygrid-event-dot", style: { borderColor: t.borderColor || t.backgroundColor } }),
    t.timeText && m("div", { className: "fc-event-time" }, t.timeText),
    m("div", { className: "fc-event-title" }, t.event.title || m(B, null, "\xA0"))
  );
}
var pc = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.compileSegs = M(hc), r;
  }
  return e.prototype.render = function() {
    var r = this.props, n = this.compileSegs(r.singlePlacements), a = n.allSegs, i = n.invisibleSegs;
    return m(nc, { dateProfile: r.dateProfile, todayRange: r.todayRange, allDayDate: r.allDayDate, moreCnt: r.moreCnt, allSegs: a, hiddenSegs: i, alignmentElRef: r.alignmentElRef, alignGridTop: r.alignGridTop, extraDateSpan: r.extraDateSpan, popoverContent: function() {
      var o = (r.eventDrag ? r.eventDrag.affectedInstances : null) || (r.eventResize ? r.eventResize.affectedInstances : null) || {};
      return m(B, null, a.map(function(s) {
        var l = s.eventRange.instance.instanceId;
        return m("div", { className: "fc-daygrid-event-harness", key: l, style: {
          visibility: o[l] ? "hidden" : ""
        } }, Ga(s) ? m(Ya, h({ seg: s, isDragging: !1, isSelected: l === r.eventSelection, defaultDisplayEventEnd: !1 }, ke(s, r.todayRange))) : m(qa, h({ seg: s, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: l === r.eventSelection, defaultDisplayEventEnd: !1 }, ke(s, r.todayRange))));
      }));
    } }, function(o, s, l, c, u, f, v, d) {
      return m("a", h({ ref: o, className: ["fc-daygrid-more-link"].concat(s).join(" "), title: f, "aria-expanded": v, "aria-controls": d }, Fn(u)), c);
    });
  }, e;
}(x);
function hc(t) {
  for (var e = [], r = [], n = 0, a = t; n < a.length; n++) {
    var i = a[n];
    e.push(i.seg), i.isVisible || r.push(i.seg);
  }
  return { allSegs: e, invisibleSegs: r };
}
var gc = U({ week: "narrow" }), mc = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.rootElRef = G(), r.state = {
      dayNumberId: ut()
    }, r.handleRootEl = function(n) {
      $(r.rootElRef, n), $(r.props.elRef, n);
    }, r;
  }
  return e.prototype.render = function() {
    var r = this, n = r.context, a = r.props, i = r.state, o = r.rootElRef, s = a.date, l = a.dateProfile, c = cr(n, s, "week");
    return m(Fa, { date: s, dateProfile: l, todayRange: a.todayRange, showDayNumber: a.showDayNumber, extraHookProps: a.extraHookProps, elRef: this.handleRootEl }, function(u, f, v, d) {
      return m(
        "td",
        h({ ref: u, role: "gridcell", className: ["fc-daygrid-day"].concat(f, a.extraClassNames || []).join(" ") }, v, a.extraDataAttrs, a.showDayNumber ? { "aria-labelledby": i.dayNumberId } : {}),
        m(
          "div",
          { className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner", ref: a.innerElRef },
          a.showWeekNumber && m(Qu, { date: s, defaultFormat: gc }, function(p, E, S, g) {
            return m("a", h({ ref: p, className: ["fc-daygrid-week-number"].concat(E).join(" ") }, c), g);
          }),
          !d && m(fc, { date: s, dateProfile: l, showDayNumber: a.showDayNumber, dayNumberId: i.dayNumberId, forceDayTop: a.forceDayTop, todayRange: a.todayRange, extraHookProps: a.extraHookProps }),
          m(
            "div",
            { className: "fc-daygrid-day-events", ref: a.fgContentElRef },
            a.fgContent,
            m(
              "div",
              { className: "fc-daygrid-day-bottom", style: { marginTop: a.moreMarginTop } },
              m(pc, { allDayDate: s, singlePlacements: a.singlePlacements, moreCnt: a.moreCnt, alignmentElRef: o, alignGridTop: !a.showDayNumber, extraDateSpan: a.extraDateSpan, dateProfile: a.dateProfile, eventSelection: a.eventSelection, eventDrag: a.eventDrag, eventResize: a.eventResize, todayRange: a.todayRange })
            )
          ),
          m("div", { className: "fc-daygrid-day-bg" }, a.bgContent)
        )
      );
    });
  }, e;
}(De);
function yc(t, e, r, n, a, i, o) {
  var s = new bc();
  s.allowReslicing = !0, s.strictOrder = n, e === !0 || r === !0 ? (s.maxCoord = i, s.hiddenConsumes = !0) : typeof e == "number" ? s.maxStackCnt = e : typeof r == "number" && (s.maxStackCnt = r, s.hiddenConsumes = !0);
  for (var l = [], c = [], u = 0; u < t.length; u += 1) {
    var f = t[u], v = f.eventRange.instance.instanceId, d = a[v];
    d != null ? l.push({
      index: u,
      thickness: d,
      span: {
        start: f.firstCol,
        end: f.lastCol + 1
      }
    }) : c.push(f);
  }
  for (var p = s.addSegs(l), E = s.toRects(), S = Ec(E, t, o), g = S.singleColPlacements, b = S.multiColPlacements, C = S.leftoverMargins, D = [], I = [], _ = 0, P = c; _ < P.length; _++) {
    var f = P[_];
    b[f.firstCol].push({
      seg: f,
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (var w = f.firstCol; w <= f.lastCol; w += 1)
      g[w].push({
        seg: ge(f, w, w + 1, o),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (var w = 0; w < o.length; w += 1)
    D.push(0);
  for (var A = 0, L = p; A < L.length; A++) {
    var Z = L[A], f = t[Z.index], z = Z.span;
    b[z.start].push({
      seg: ge(f, z.start, z.end, o),
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (var w = z.start; w < z.end; w += 1)
      D[w] += 1, g[w].push({
        seg: ge(f, w, w + 1, o),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (var w = 0; w < o.length; w += 1)
    I.push(C[w]);
  return { singleColPlacements: g, multiColPlacements: b, moreCnts: D, moreMarginTops: I };
}
function Ec(t, e, r) {
  for (var n = Sc(t, r.length), a = [], i = [], o = [], s = 0; s < r.length; s += 1) {
    for (var l = n[s], c = [], u = 0, f = 0, v = 0, d = l; v < d.length; v++) {
      var p = d[v], E = e[p.index];
      c.push({
        seg: ge(E, s, s + 1, r),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: p.levelCoord,
        marginTop: p.levelCoord - u
      }), u = p.levelCoord + p.thickness;
    }
    var S = [];
    u = 0, f = 0;
    for (var g = 0, b = l; g < b.length; g++) {
      var p = b[g], E = e[p.index], C = p.span.end - p.span.start > 1, D = p.span.start === s;
      f += p.levelCoord - u, u = p.levelCoord + p.thickness, C ? (f += p.thickness, D && S.push({
        seg: ge(E, p.span.start, p.span.end, r),
        isVisible: !0,
        isAbsolute: !0,
        absoluteTop: p.levelCoord,
        marginTop: 0
      })) : D && (S.push({
        seg: ge(E, p.span.start, p.span.end, r),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: p.levelCoord,
        marginTop: f
      }), f = 0);
    }
    a.push(c), i.push(S), o.push(f);
  }
  return { singleColPlacements: a, multiColPlacements: i, leftoverMargins: o };
}
function Sc(t, e) {
  for (var r = [], n = 0; n < e; n += 1)
    r.push([]);
  for (var a = 0, i = t; a < i.length; a++)
    for (var o = i[a], n = o.span.start; n < o.span.end; n += 1)
      r[n].push(o);
  return r;
}
function ge(t, e, r, n) {
  if (t.firstCol === e && t.lastCol === r - 1)
    return t;
  var a = t.eventRange, i = a.range, o = Ae(i, {
    start: n[e].date,
    end: W(n[r - 1].date, 1)
  });
  return h(h({}, t), { firstCol: e, lastCol: r - 1, eventRange: {
    def: a.def,
    ui: h(h({}, a.ui), { durationEditable: !1 }),
    instance: a.instance,
    range: o
  }, isStart: t.isStart && o.start.valueOf() === i.start.valueOf(), isEnd: t.isEnd && o.end.valueOf() === i.end.valueOf() });
}
var bc = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.hiddenConsumes = !1, r.forceHidden = {}, r;
  }
  return e.prototype.addSegs = function(r) {
    for (var n = this, a = t.prototype.addSegs.call(this, r), i = this.entriesByLevel, o = function(l) {
      return !n.forceHidden[Ie(l)];
    }, s = 0; s < i.length; s += 1)
      i[s] = i[s].filter(o);
    return a;
  }, e.prototype.handleInvalidInsertion = function(r, n, a) {
    var i = this, o = i.entriesByLevel, s = i.forceHidden, l = r.touchingEntry, c = r.touchingLevel, u = r.touchingLateral;
    if (this.hiddenConsumes && l) {
      var f = Ie(l);
      if (!s[f])
        if (this.allowReslicing) {
          var v = h(h({}, l), { span: Ia(l.span, n.span) }), d = Ie(v);
          s[d] = !0, o[c][u] = v, this.splitEntry(l, n, a);
        } else
          s[f] = !0, a.push(l);
    }
    return t.prototype.handleInvalidInsertion.call(this, r, n, a);
  }, e;
}(uu), ja = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.cellElRefs = new ae(), r.frameElRefs = new ae(), r.fgElRefs = new ae(), r.segHarnessRefs = new ae(), r.rootElRef = G(), r.state = {
      framePositions: null,
      maxContentHeight: null,
      eventInstanceHeights: {}
    }, r;
  }
  return e.prototype.render = function() {
    var r = this, n = this, a = n.props, i = n.state, o = n.context, s = o.options, l = a.cells.length, c = Ge(a.businessHourSegs, l), u = Ge(a.bgEventSegs, l), f = Ge(this.getHighlightSegs(), l), v = Ge(this.getMirrorSegs(), l), d = yc(jo(a.fgEventSegs, s.eventOrder), a.dayMaxEvents, a.dayMaxEventRows, s.eventOrderStrict, i.eventInstanceHeights, i.maxContentHeight, a.cells), p = d.singleColPlacements, E = d.multiColPlacements, S = d.moreCnts, g = d.moreMarginTops, b = a.eventDrag && a.eventDrag.affectedInstances || a.eventResize && a.eventResize.affectedInstances || {};
    return m(
      "tr",
      { ref: this.rootElRef, role: "row" },
      a.renderIntro && a.renderIntro(),
      a.cells.map(function(C, D) {
        var I = r.renderFgSegs(D, a.forPrint ? p[D] : E[D], a.todayRange, b), _ = r.renderFgSegs(D, Dc(v[D], E), a.todayRange, {}, Boolean(a.eventDrag), Boolean(a.eventResize), !1);
        return m(mc, { key: C.key, elRef: r.cellElRefs.createRef(C.key), innerElRef: r.frameElRefs.createRef(C.key), dateProfile: a.dateProfile, date: C.date, showDayNumber: a.showDayNumbers, showWeekNumber: a.showWeekNumbers && D === 0, forceDayTop: a.showWeekNumbers, todayRange: a.todayRange, eventSelection: a.eventSelection, eventDrag: a.eventDrag, eventResize: a.eventResize, extraHookProps: C.extraHookProps, extraDataAttrs: C.extraDataAttrs, extraClassNames: C.extraClassNames, extraDateSpan: C.extraDateSpan, moreCnt: S[D], moreMarginTop: g[D], singlePlacements: p[D], fgContentElRef: r.fgElRefs.createRef(C.key), fgContent: m(
          B,
          null,
          m(B, null, I),
          m(B, null, _)
        ), bgContent: m(
          B,
          null,
          r.renderFillSegs(f[D], "highlight"),
          r.renderFillSegs(c[D], "non-business"),
          r.renderFillSegs(u[D], "bg-event")
        ) });
      })
    );
  }, e.prototype.componentDidMount = function() {
    this.updateSizing(!0);
  }, e.prototype.componentDidUpdate = function(r, n) {
    var a = this.props;
    this.updateSizing(!X(r, a));
  }, e.prototype.getHighlightSegs = function() {
    var r = this.props;
    return r.eventDrag && r.eventDrag.segs.length ? r.eventDrag.segs : r.eventResize && r.eventResize.segs.length ? r.eventResize.segs : r.dateSelectionSegs;
  }, e.prototype.getMirrorSegs = function() {
    var r = this.props;
    return r.eventResize && r.eventResize.segs.length ? r.eventResize.segs : [];
  }, e.prototype.renderFgSegs = function(r, n, a, i, o, s, l) {
    var c = this.context, u = this.props.eventSelection, f = this.state.framePositions, v = this.props.cells.length === 1, d = o || s || l, p = [];
    if (f)
      for (var E = 0, S = n; E < S.length; E++) {
        var g = S[E], b = g.seg, C = b.eventRange.instance.instanceId, D = C + ":" + r, I = g.isVisible && !i[C], _ = g.isAbsolute, P = "", w = "";
        _ && (c.isRtl ? (w = 0, P = f.lefts[b.lastCol] - f.lefts[b.firstCol]) : (P = 0, w = f.rights[b.firstCol] - f.rights[b.lastCol])), p.push(m("div", { className: "fc-daygrid-event-harness" + (_ ? " fc-daygrid-event-harness-abs" : ""), key: D, ref: d ? null : this.segHarnessRefs.createRef(D), style: {
          visibility: I ? "" : "hidden",
          marginTop: _ ? "" : g.marginTop,
          top: _ ? g.absoluteTop : "",
          left: P,
          right: w
        } }, Ga(b) ? m(Ya, h({ seg: b, isDragging: o, isSelected: C === u, defaultDisplayEventEnd: v }, ke(b, a))) : m(qa, h({ seg: b, isDragging: o, isResizing: s, isDateSelecting: l, isSelected: C === u, defaultDisplayEventEnd: v }, ke(b, a)))));
      }
    return p;
  }, e.prototype.renderFillSegs = function(r, n) {
    var a = this.context.isRtl, i = this.props.todayRange, o = this.state.framePositions, s = [];
    if (o)
      for (var l = 0, c = r; l < c.length; l++) {
        var u = c[l], f = a ? {
          right: 0,
          left: o.lefts[u.lastCol] - o.lefts[u.firstCol]
        } : {
          left: 0,
          right: o.rights[u.firstCol] - o.rights[u.lastCol]
        };
        s.push(m("div", { key: Qo(u.eventRange), className: "fc-daygrid-bg-harness", style: f }, n === "bg-event" ? m(Ku, h({ seg: u }, ke(u, i))) : $u(n)));
      }
    return m.apply(void 0, N([B, {}], s));
  }, e.prototype.updateSizing = function(r) {
    var n = this, a = n.props, i = n.frameElRefs;
    if (!a.forPrint && a.clientWidth !== null) {
      if (r) {
        var o = a.cells.map(function(f) {
          return i.currentMap[f.key];
        });
        if (o.length) {
          var s = this.rootElRef.current;
          this.setState({
            framePositions: new Bt(
              s,
              o,
              !0,
              !1
            )
          });
        }
      }
      var l = this.state.eventInstanceHeights, c = this.queryEventInstanceHeights(), u = a.dayMaxEvents === !0 || a.dayMaxEventRows === !0;
      this.safeSetState({
        eventInstanceHeights: h(h({}, l), c),
        maxContentHeight: u ? this.computeMaxContentHeight() : null
      });
    }
  }, e.prototype.queryEventInstanceHeights = function() {
    var r = this.segHarnessRefs.currentMap, n = {};
    for (var a in r) {
      var i = Math.round(r[a].getBoundingClientRect().height), o = a.split(":")[0];
      n[o] = Math.max(n[o] || 0, i);
    }
    return n;
  }, e.prototype.computeMaxContentHeight = function() {
    var r = this.props.cells[0].key, n = this.cellElRefs.currentMap[r], a = this.fgElRefs.currentMap[r];
    return n.getBoundingClientRect().bottom - a.getBoundingClientRect().top;
  }, e.prototype.getCellEls = function() {
    var r = this.cellElRefs.currentMap;
    return this.props.cells.map(function(n) {
      return r[n.key];
    });
  }, e;
}(De);
ja.addStateEquality({
  eventInstanceHeights: X
});
function Dc(t, e) {
  if (!t.length)
    return [];
  var r = Cc(e);
  return t.map(function(n) {
    return {
      seg: n,
      isVisible: !0,
      isAbsolute: !0,
      absoluteTop: r[n.eventRange.instance.instanceId],
      marginTop: 0
    };
  });
}
function Cc(t) {
  for (var e = {}, r = 0, n = t; r < n.length; r++)
    for (var a = n[r], i = 0, o = a; i < o.length; i++) {
      var s = o[i];
      e[s.seg.eventRange.instance.instanceId] = s.absoluteTop;
    }
  return e;
}
var Rc = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.splitBusinessHourSegs = M(ze), r.splitBgEventSegs = M(ze), r.splitFgEventSegs = M(ze), r.splitDateSelectionSegs = M(ze), r.splitEventDrag = M(Sn), r.splitEventResize = M(Sn), r.rowRefs = new ae(), r.handleRootEl = function(n) {
      r.rootEl = n, n ? r.context.registerInteractiveComponent(r, {
        el: n,
        isHitComboAllowed: r.props.isHitComboAllowed
      }) : r.context.unregisterInteractiveComponent(r);
    }, r;
  }
  return e.prototype.render = function() {
    var r = this, n = this.props, a = n.dateProfile, i = n.dayMaxEventRows, o = n.dayMaxEvents, s = n.expandRows, l = n.cells.length, c = this.splitBusinessHourSegs(n.businessHourSegs, l), u = this.splitBgEventSegs(n.bgEventSegs, l), f = this.splitFgEventSegs(n.fgEventSegs, l), v = this.splitDateSelectionSegs(n.dateSelectionSegs, l), d = this.splitEventDrag(n.eventDrag, l), p = this.splitEventResize(n.eventResize, l), E = o === !0 || i === !0;
    E && !s && (E = !1, i = null, o = null);
    var S = [
      "fc-daygrid-body",
      E ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced",
      s ? "" : "fc-daygrid-body-natural"
    ];
    return m(
      "div",
      { className: S.join(" "), ref: this.handleRootEl, style: {
        width: n.clientWidth,
        minWidth: n.tableMinWidth
      } },
      m(Aa, { unit: "day" }, function(g, b) {
        return m(
          B,
          null,
          m(
            "table",
            { role: "presentation", className: "fc-scrollgrid-sync-table", style: {
              width: n.clientWidth,
              minWidth: n.tableMinWidth,
              height: s ? n.clientHeight : ""
            } },
            n.colGroupNode,
            m("tbody", { role: "presentation" }, n.cells.map(function(C, D) {
              return m(ja, {
                ref: r.rowRefs.createRef(D),
                key: C.length ? C[0].date.toISOString() : D,
                showDayNumbers: l > 1,
                showWeekNumbers: n.showWeekNumbers,
                todayRange: b,
                dateProfile: a,
                cells: C,
                renderIntro: n.renderRowIntro,
                businessHourSegs: c[D],
                eventSelection: n.eventSelection,
                bgEventSegs: u[D].filter(wc),
                fgEventSegs: f[D],
                dateSelectionSegs: v[D],
                eventDrag: d[D],
                eventResize: p[D],
                dayMaxEvents: o,
                dayMaxEventRows: i,
                clientWidth: n.clientWidth,
                clientHeight: n.clientHeight,
                forPrint: n.forPrint
              });
            }))
          )
        );
      })
    );
  }, e.prototype.prepareHits = function() {
    this.rowPositions = new Bt(
      this.rootEl,
      this.rowRefs.collect().map(function(r) {
        return r.getCellEls()[0];
      }),
      !1,
      !0
    ), this.colPositions = new Bt(
      this.rootEl,
      this.rowRefs.currentMap[0].getCellEls(),
      !0,
      !1
    );
  }, e.prototype.queryHit = function(r, n) {
    var a = this, i = a.colPositions, o = a.rowPositions, s = i.leftToIndex(r), l = o.topToIndex(n);
    if (l != null && s != null) {
      var c = this.props.cells[l][s];
      return {
        dateProfile: this.props.dateProfile,
        dateSpan: h({ range: this.getCellRange(l, s), allDay: !0 }, c.extraDateSpan),
        dayEl: this.getCellEl(l, s),
        rect: {
          left: i.lefts[s],
          right: i.rights[s],
          top: o.tops[l],
          bottom: o.bottoms[l]
        },
        layer: 0
      };
    }
    return null;
  }, e.prototype.getCellEl = function(r, n) {
    return this.rowRefs.currentMap[r].getCellEls()[n];
  }, e.prototype.getCellRange = function(r, n) {
    var a = this.props.cells[r][n].date, i = W(a, 1);
    return { start: a, end: i };
  }, e;
}(De);
function wc(t) {
  return t.eventRange.def.allDay;
}
var Tc = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.forceDayIfListItem = !0, r;
  }
  return e.prototype.sliceRange = function(r, n) {
    return n.sliceRange(r);
  }, e;
}(_u), _c = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.slicer = new Tc(), r.tableRef = G(), r;
  }
  return e.prototype.render = function() {
    var r = this, n = r.props, a = r.context;
    return m(Rc, h({ ref: this.tableRef }, this.slicer.sliceProps(n, n.dateProfile, n.nextDayThreshold, a, n.dayTableModel), { dateProfile: n.dateProfile, cells: n.dayTableModel.cells, colGroupNode: n.colGroupNode, tableMinWidth: n.tableMinWidth, renderRowIntro: n.renderRowIntro, dayMaxEvents: n.dayMaxEvents, dayMaxEventRows: n.dayMaxEventRows, showWeekNumbers: n.showWeekNumbers, expandRows: n.expandRows, headerAlignElRef: n.headerAlignElRef, clientWidth: n.clientWidth, clientHeight: n.clientHeight, forPrint: n.forPrint }));
  }, e;
}(De), Mc = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.buildDayTableModel = M(kc), r.headerRef = G(), r.tableRef = G(), r;
  }
  return e.prototype.render = function() {
    var r = this, n = this.context, a = n.options, i = n.dateProfileGenerator, o = this.props, s = this.buildDayTableModel(o.dateProfile, i), l = a.dayHeaders && m(Cu, { ref: this.headerRef, dateProfile: o.dateProfile, dates: s.headerDates, datesRepDistinctDays: s.rowCnt === 1 }), c = function(u) {
      return m(_c, { ref: r.tableRef, dateProfile: o.dateProfile, dayTableModel: s, businessHours: o.businessHours, dateSelection: o.dateSelection, eventStore: o.eventStore, eventUiBases: o.eventUiBases, eventSelection: o.eventSelection, eventDrag: o.eventDrag, eventResize: o.eventResize, nextDayThreshold: a.nextDayThreshold, colGroupNode: u.tableColGroupNode, tableMinWidth: u.tableMinWidth, dayMaxEvents: a.dayMaxEvents, dayMaxEventRows: a.dayMaxEventRows, showWeekNumbers: a.weekNumbers, expandRows: !o.isHeightAuto, headerAlignElRef: r.headerElRef, clientWidth: u.clientWidth, clientHeight: u.clientHeight, forPrint: o.forPrint });
    };
    return a.dayMinWidth ? this.renderHScrollLayout(l, c, s.colCnt, a.dayMinWidth) : this.renderSimpleLayout(l, c);
  }, e;
}(cc);
function kc(t, e) {
  var r = new wu(t.renderRange, e);
  return new Tu(r, /year|month|week/.test(t.currentRangeUnit));
}
var Ic = function(t) {
  R(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.buildRenderRange = function(r, n, a) {
    var i = this.props.dateEnv, o = t.prototype.buildRenderRange.call(this, r, n, a), s = o.start, l = o.end, c;
    if (/^(year|month)$/.test(n) && (s = i.startOfWeek(s), c = i.startOfWeek(l), c.valueOf() !== l.valueOf() && (l = qr(c, 1))), this.props.monthMode && this.props.fixedWeekCount) {
      var u = Math.ceil(
        Xi(s, l)
      );
      l = qr(l, 6 - u);
    }
    return { start: s, end: l };
  }, e;
}(ba), Pc = te({
  initialView: "dayGridMonth",
  views: {
    dayGrid: {
      component: Mc,
      dateProfileGeneratorClass: Ic
    },
    dayGridDay: {
      type: "dayGrid",
      duration: { days: 1 }
    },
    dayGridWeek: {
      type: "dayGrid",
      duration: { weeks: 1 }
    },
    dayGridMonth: {
      type: "dayGrid",
      duration: { months: 1 },
      monthMode: !0,
      fixedWeekCount: !0
    }
  }
});
/*!
FullCalendar v5.11.3
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
mr.touchMouseIgnoreWait = 500;
var qt = 0, st = 0, Yt = !1, Er = function() {
  function t(e) {
    var r = this;
    this.subjectEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = !1, this.shouldWatchScroll = !0, this.isDragging = !1, this.isTouchDragging = !1, this.wasTouchScroll = !1, this.handleMouseDown = function(n) {
      if (!r.shouldIgnoreMouse() && Hc(n) && r.tryStart(n)) {
        var a = r.createEventFromMouse(n, !0);
        r.emitter.trigger("pointerdown", a), r.initScrollWatch(a), r.shouldIgnoreMove || document.addEventListener("mousemove", r.handleMouseMove), document.addEventListener("mouseup", r.handleMouseUp);
      }
    }, this.handleMouseMove = function(n) {
      var a = r.createEventFromMouse(n);
      r.recordCoords(a), r.emitter.trigger("pointermove", a);
    }, this.handleMouseUp = function(n) {
      document.removeEventListener("mousemove", r.handleMouseMove), document.removeEventListener("mouseup", r.handleMouseUp), r.emitter.trigger("pointerup", r.createEventFromMouse(n)), r.cleanup();
    }, this.handleTouchStart = function(n) {
      if (r.tryStart(n)) {
        r.isTouchDragging = !0;
        var a = r.createEventFromTouch(n, !0);
        r.emitter.trigger("pointerdown", a), r.initScrollWatch(a);
        var i = n.target;
        r.shouldIgnoreMove || i.addEventListener("touchmove", r.handleTouchMove), i.addEventListener("touchend", r.handleTouchEnd), i.addEventListener("touchcancel", r.handleTouchEnd), window.addEventListener("scroll", r.handleTouchScroll, !0);
      }
    }, this.handleTouchMove = function(n) {
      var a = r.createEventFromTouch(n);
      r.recordCoords(a), r.emitter.trigger("pointermove", a);
    }, this.handleTouchEnd = function(n) {
      if (r.isDragging) {
        var a = n.target;
        a.removeEventListener("touchmove", r.handleTouchMove), a.removeEventListener("touchend", r.handleTouchEnd), a.removeEventListener("touchcancel", r.handleTouchEnd), window.removeEventListener("scroll", r.handleTouchScroll, !0), r.emitter.trigger("pointerup", r.createEventFromTouch(n)), r.cleanup(), r.isTouchDragging = !1, xc();
      }
    }, this.handleTouchScroll = function() {
      r.wasTouchScroll = !0;
    }, this.handleScroll = function(n) {
      if (!r.shouldIgnoreMove) {
        var a = window.pageXOffset - r.prevScrollX + r.prevPageX, i = window.pageYOffset - r.prevScrollY + r.prevPageY;
        r.emitter.trigger("pointermove", {
          origEvent: n,
          isTouch: r.isTouchDragging,
          subjectEl: r.subjectEl,
          pageX: a,
          pageY: i,
          deltaX: a - r.origPageX,
          deltaY: i - r.origPageY
        });
      }
    }, this.containerEl = e, this.emitter = new vt(), e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, { passive: !0 }), Ac();
  }
  return t.prototype.destroy = function() {
    this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, { passive: !0 }), Nc();
  }, t.prototype.tryStart = function(e) {
    var r = this.querySubjectEl(e), n = e.target;
    return r && (!this.handleSelector || V(n, this.handleSelector)) ? (this.subjectEl = r, this.isDragging = !0, this.wasTouchScroll = !1, !0) : !1;
  }, t.prototype.cleanup = function() {
    Yt = !1, this.isDragging = !1, this.subjectEl = null, this.destroyScrollWatch();
  }, t.prototype.querySubjectEl = function(e) {
    return this.selector ? V(e.target, this.selector) : this.containerEl;
  }, t.prototype.shouldIgnoreMouse = function() {
    return qt || this.isTouchDragging;
  }, t.prototype.cancelTouchScroll = function() {
    this.isDragging && (Yt = !0);
  }, t.prototype.initScrollWatch = function(e) {
    this.shouldWatchScroll && (this.recordCoords(e), window.addEventListener("scroll", this.handleScroll, !0));
  }, t.prototype.recordCoords = function(e) {
    this.shouldWatchScroll && (this.prevPageX = e.pageX, this.prevPageY = e.pageY, this.prevScrollX = window.pageXOffset, this.prevScrollY = window.pageYOffset);
  }, t.prototype.destroyScrollWatch = function() {
    this.shouldWatchScroll && window.removeEventListener("scroll", this.handleScroll, !0);
  }, t.prototype.createEventFromMouse = function(e, r) {
    var n = 0, a = 0;
    return r ? (this.origPageX = e.pageX, this.origPageY = e.pageY) : (n = e.pageX - this.origPageX, a = e.pageY - this.origPageY), {
      origEvent: e,
      isTouch: !1,
      subjectEl: this.subjectEl,
      pageX: e.pageX,
      pageY: e.pageY,
      deltaX: n,
      deltaY: a
    };
  }, t.prototype.createEventFromTouch = function(e, r) {
    var n = e.touches, a, i, o = 0, s = 0;
    return n && n.length ? (a = n[0].pageX, i = n[0].pageY) : (a = e.pageX, i = e.pageY), r ? (this.origPageX = a, this.origPageY = i) : (o = a - this.origPageX, s = i - this.origPageY), {
      origEvent: e,
      isTouch: !0,
      subjectEl: this.subjectEl,
      pageX: a,
      pageY: i,
      deltaX: o,
      deltaY: s
    };
  }, t;
}();
function Hc(t) {
  return t.button === 0 && !t.ctrlKey;
}
function xc() {
  qt += 1, setTimeout(function() {
    qt -= 1;
  }, mr.touchMouseIgnoreWait);
}
function Ac() {
  st += 1, st === 1 && window.addEventListener("touchmove", Za, { passive: !1 });
}
function Nc() {
  st -= 1, st || window.removeEventListener("touchmove", Za, { passive: !1 });
}
function Za(t) {
  Yt && t.preventDefault();
}
var Oc = function() {
  function t() {
    this.isVisible = !1, this.sourceEl = null, this.mirrorEl = null, this.sourceElRect = null, this.parentNode = document.body, this.zIndex = 9999, this.revertDuration = 0;
  }
  return t.prototype.start = function(e, r, n) {
    this.sourceEl = e, this.sourceElRect = this.sourceEl.getBoundingClientRect(), this.origScreenX = r - window.pageXOffset, this.origScreenY = n - window.pageYOffset, this.deltaX = 0, this.deltaY = 0, this.updateElPosition();
  }, t.prototype.handleMove = function(e, r) {
    this.deltaX = e - window.pageXOffset - this.origScreenX, this.deltaY = r - window.pageYOffset - this.origScreenY, this.updateElPosition();
  }, t.prototype.setIsVisible = function(e) {
    e ? this.isVisible || (this.mirrorEl && (this.mirrorEl.style.display = ""), this.isVisible = e, this.updateElPosition()) : this.isVisible && (this.mirrorEl && (this.mirrorEl.style.display = "none"), this.isVisible = e);
  }, t.prototype.stop = function(e, r) {
    var n = this, a = function() {
      n.cleanup(), r();
    };
    e && this.mirrorEl && this.isVisible && this.revertDuration && (this.deltaX || this.deltaY) ? this.doRevertAnimation(a, this.revertDuration) : setTimeout(a, 0);
  }, t.prototype.doRevertAnimation = function(e, r) {
    var n = this.mirrorEl, a = this.sourceEl.getBoundingClientRect();
    n.style.transition = "top " + r + "ms,left " + r + "ms", Te(n, {
      left: a.left,
      top: a.top
    }), Li(n, function() {
      n.style.transition = "", e();
    });
  }, t.prototype.cleanup = function() {
    this.mirrorEl && (Xt(this.mirrorEl), this.mirrorEl = null), this.sourceEl = null;
  }, t.prototype.updateElPosition = function() {
    this.sourceEl && this.isVisible && Te(this.getMirrorEl(), {
      left: this.sourceElRect.left + this.deltaX,
      top: this.sourceElRect.top + this.deltaY
    });
  }, t.prototype.getMirrorEl = function() {
    var e = this.sourceElRect, r = this.mirrorEl;
    return r || (r = this.mirrorEl = this.sourceEl.cloneNode(!0), r.classList.add("fc-unselectable"), r.classList.add("fc-event-dragging"), Te(r, {
      position: "fixed",
      zIndex: this.zIndex,
      visibility: "",
      boxSizing: "border-box",
      width: e.right - e.left,
      height: e.bottom - e.top,
      right: "auto",
      bottom: "auto",
      margin: 0
    }), this.parentNode.appendChild(r)), r;
  }, t;
}(), Xa = function(t) {
  R(e, t);
  function e(r, n) {
    var a = t.call(this) || this;
    return a.handleScroll = function() {
      a.scrollTop = a.scrollController.getScrollTop(), a.scrollLeft = a.scrollController.getScrollLeft(), a.handleScrollChange();
    }, a.scrollController = r, a.doesListening = n, a.scrollTop = a.origScrollTop = r.getScrollTop(), a.scrollLeft = a.origScrollLeft = r.getScrollLeft(), a.scrollWidth = r.getScrollWidth(), a.scrollHeight = r.getScrollHeight(), a.clientWidth = r.getClientWidth(), a.clientHeight = r.getClientHeight(), a.clientRect = a.computeClientRect(), a.doesListening && a.getEventTarget().addEventListener("scroll", a.handleScroll), a;
  }
  return e.prototype.destroy = function() {
    this.doesListening && this.getEventTarget().removeEventListener("scroll", this.handleScroll);
  }, e.prototype.getScrollTop = function() {
    return this.scrollTop;
  }, e.prototype.getScrollLeft = function() {
    return this.scrollLeft;
  }, e.prototype.setScrollTop = function(r) {
    this.scrollController.setScrollTop(r), this.doesListening || (this.scrollTop = Math.max(Math.min(r, this.getMaxScrollTop()), 0), this.handleScrollChange());
  }, e.prototype.setScrollLeft = function(r) {
    this.scrollController.setScrollLeft(r), this.doesListening || (this.scrollLeft = Math.max(Math.min(r, this.getMaxScrollLeft()), 0), this.handleScrollChange());
  }, e.prototype.getClientWidth = function() {
    return this.clientWidth;
  }, e.prototype.getClientHeight = function() {
    return this.clientHeight;
  }, e.prototype.getScrollWidth = function() {
    return this.scrollWidth;
  }, e.prototype.getScrollHeight = function() {
    return this.scrollHeight;
  }, e.prototype.handleScrollChange = function() {
  }, e;
}(dr), $a = function(t) {
  R(e, t);
  function e(r, n) {
    return t.call(this, new Ys(r), n) || this;
  }
  return e.prototype.getEventTarget = function() {
    return this.scrollController.el;
  }, e.prototype.computeClientRect = function() {
    return Bs(this.scrollController.el);
  }, e;
}(Xa), Lc = function(t) {
  R(e, t);
  function e(r) {
    return t.call(this, new js(), r) || this;
  }
  return e.prototype.getEventTarget = function() {
    return window;
  }, e.prototype.computeClientRect = function() {
    return {
      left: this.scrollLeft,
      right: this.scrollLeft + this.clientWidth,
      top: this.scrollTop,
      bottom: this.scrollTop + this.clientHeight
    };
  }, e.prototype.handleScrollChange = function() {
    this.clientRect = this.computeClientRect();
  }, e;
}(Xa), bn = typeof performance == "function" ? performance.now : Date.now, Uc = function() {
  function t() {
    var e = this;
    this.isEnabled = !0, this.scrollQuery = [window, ".fc-scroller"], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = !1, this.scrollCaches = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.animate = function() {
      if (e.isAnimating) {
        var r = e.computeBestEdge(e.pointerScreenX + window.pageXOffset, e.pointerScreenY + window.pageYOffset);
        if (r) {
          var n = bn();
          e.handleSide(r, (n - e.msSinceRequest) / 1e3), e.requestAnimation(n);
        } else
          e.isAnimating = !1;
      }
    };
  }
  return t.prototype.start = function(e, r, n) {
    this.isEnabled && (this.scrollCaches = this.buildCaches(n), this.pointerScreenX = null, this.pointerScreenY = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.handleMove(e, r));
  }, t.prototype.handleMove = function(e, r) {
    if (this.isEnabled) {
      var n = e - window.pageXOffset, a = r - window.pageYOffset, i = this.pointerScreenY === null ? 0 : a - this.pointerScreenY, o = this.pointerScreenX === null ? 0 : n - this.pointerScreenX;
      i < 0 ? this.everMovedUp = !0 : i > 0 && (this.everMovedDown = !0), o < 0 ? this.everMovedLeft = !0 : o > 0 && (this.everMovedRight = !0), this.pointerScreenX = n, this.pointerScreenY = a, this.isAnimating || (this.isAnimating = !0, this.requestAnimation(bn()));
    }
  }, t.prototype.stop = function() {
    if (this.isEnabled) {
      this.isAnimating = !1;
      for (var e = 0, r = this.scrollCaches; e < r.length; e++) {
        var n = r[e];
        n.destroy();
      }
      this.scrollCaches = null;
    }
  }, t.prototype.requestAnimation = function(e) {
    this.msSinceRequest = e, requestAnimationFrame(this.animate);
  }, t.prototype.handleSide = function(e, r) {
    var n = e.scrollCache, a = this.edgeThreshold, i = a - e.distance, o = i * i / (a * a) * this.maxVelocity * r, s = 1;
    switch (e.name) {
      case "left":
        s = -1;
      case "right":
        n.setScrollLeft(n.getScrollLeft() + o * s);
        break;
      case "top":
        s = -1;
      case "bottom":
        n.setScrollTop(n.getScrollTop() + o * s);
        break;
    }
  }, t.prototype.computeBestEdge = function(e, r) {
    for (var n = this.edgeThreshold, a = null, i = this.scrollCaches || [], o = 0, s = i; o < s.length; o++) {
      var l = s[o], c = l.clientRect, u = e - c.left, f = c.right - e, v = r - c.top, d = c.bottom - r;
      u >= 0 && f >= 0 && v >= 0 && d >= 0 && (v <= n && this.everMovedUp && l.canScrollUp() && (!a || a.distance > v) && (a = { scrollCache: l, name: "top", distance: v }), d <= n && this.everMovedDown && l.canScrollDown() && (!a || a.distance > d) && (a = { scrollCache: l, name: "bottom", distance: d }), u <= n && this.everMovedLeft && l.canScrollLeft() && (!a || a.distance > u) && (a = { scrollCache: l, name: "left", distance: u }), f <= n && this.everMovedRight && l.canScrollRight() && (!a || a.distance > f) && (a = { scrollCache: l, name: "right", distance: f }));
    }
    return a;
  }, t.prototype.buildCaches = function(e) {
    return this.queryScrollEls(e).map(function(r) {
      return r === window ? new Lc(!1) : new $a(r, !1);
    });
  }, t.prototype.queryScrollEls = function(e) {
    for (var r = [], n = 0, a = this.scrollQuery; n < a.length; n++) {
      var i = a[n];
      typeof i == "object" ? r.push(i) : r.push.apply(r, Array.prototype.slice.call(Wn(e).querySelectorAll(i)));
    }
    return r;
  }, t;
}(), Le = function(t) {
  R(e, t);
  function e(r, n) {
    var a = t.call(this, r) || this;
    a.containerEl = r, a.delay = null, a.minDistance = 0, a.touchScrollAllowed = !0, a.mirrorNeedsRevert = !1, a.isInteracting = !1, a.isDragging = !1, a.isDelayEnded = !1, a.isDistanceSurpassed = !1, a.delayTimeoutId = null, a.onPointerDown = function(o) {
      a.isDragging || (a.isInteracting = !0, a.isDelayEnded = !1, a.isDistanceSurpassed = !1, Ui(document.body), Wi(document.body), o.isTouch || o.origEvent.preventDefault(), a.emitter.trigger("pointerdown", o), a.isInteracting && !a.pointer.shouldIgnoreMove && (a.mirror.setIsVisible(!1), a.mirror.start(o.subjectEl, o.pageX, o.pageY), a.startDelay(o), a.minDistance || a.handleDistanceSurpassed(o)));
    }, a.onPointerMove = function(o) {
      if (a.isInteracting) {
        if (a.emitter.trigger("pointermove", o), !a.isDistanceSurpassed) {
          var s = a.minDistance, l = void 0, c = o.deltaX, u = o.deltaY;
          l = c * c + u * u, l >= s * s && a.handleDistanceSurpassed(o);
        }
        a.isDragging && (o.origEvent.type !== "scroll" && (a.mirror.handleMove(o.pageX, o.pageY), a.autoScroller.handleMove(o.pageX, o.pageY)), a.emitter.trigger("dragmove", o));
      }
    }, a.onPointerUp = function(o) {
      a.isInteracting && (a.isInteracting = !1, Vi(document.body), Bi(document.body), a.emitter.trigger("pointerup", o), a.isDragging && (a.autoScroller.stop(), a.tryStopDrag(o)), a.delayTimeoutId && (clearTimeout(a.delayTimeoutId), a.delayTimeoutId = null));
    };
    var i = a.pointer = new Er(r);
    return i.emitter.on("pointerdown", a.onPointerDown), i.emitter.on("pointermove", a.onPointerMove), i.emitter.on("pointerup", a.onPointerUp), n && (i.selector = n), a.mirror = new Oc(), a.autoScroller = new Uc(), a;
  }
  return e.prototype.destroy = function() {
    this.pointer.destroy(), this.onPointerUp({});
  }, e.prototype.startDelay = function(r) {
    var n = this;
    typeof this.delay == "number" ? this.delayTimeoutId = setTimeout(function() {
      n.delayTimeoutId = null, n.handleDelayEnd(r);
    }, this.delay) : this.handleDelayEnd(r);
  }, e.prototype.handleDelayEnd = function(r) {
    this.isDelayEnded = !0, this.tryStartDrag(r);
  }, e.prototype.handleDistanceSurpassed = function(r) {
    this.isDistanceSurpassed = !0, this.tryStartDrag(r);
  }, e.prototype.tryStartDrag = function(r) {
    this.isDelayEnded && this.isDistanceSurpassed && (!this.pointer.wasTouchScroll || this.touchScrollAllowed) && (this.isDragging = !0, this.mirrorNeedsRevert = !1, this.autoScroller.start(r.pageX, r.pageY, this.containerEl), this.emitter.trigger("dragstart", r), this.touchScrollAllowed === !1 && this.pointer.cancelTouchScroll());
  }, e.prototype.tryStopDrag = function(r) {
    this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, r));
  }, e.prototype.stopDrag = function(r) {
    this.isDragging = !1, this.emitter.trigger("dragend", r);
  }, e.prototype.setIgnoreMove = function(r) {
    this.pointer.shouldIgnoreMove = r;
  }, e.prototype.setMirrorIsVisible = function(r) {
    this.mirror.setIsVisible(r);
  }, e.prototype.setMirrorNeedsRevert = function(r) {
    this.mirrorNeedsRevert = r;
  }, e.prototype.setAutoScrollEnabled = function(r) {
    this.autoScroller.isEnabled = r;
  }, e;
}(Pa), Vc = function() {
  function t(e) {
    this.origRect = fr(e), this.scrollCaches = ga(e).map(function(r) {
      return new $a(r, !0);
    });
  }
  return t.prototype.destroy = function() {
    for (var e = 0, r = this.scrollCaches; e < r.length; e++) {
      var n = r[e];
      n.destroy();
    }
  }, t.prototype.computeLeft = function() {
    for (var e = this.origRect.left, r = 0, n = this.scrollCaches; r < n.length; r++) {
      var a = n[r];
      e += a.origScrollLeft - a.getScrollLeft();
    }
    return e;
  }, t.prototype.computeTop = function() {
    for (var e = this.origRect.top, r = 0, n = this.scrollCaches; r < n.length; r++) {
      var a = n[r];
      e += a.origScrollTop - a.getScrollTop();
    }
    return e;
  }, t.prototype.isWithinClipping = function(e, r) {
    for (var n = { left: e, top: r }, a = 0, i = this.scrollCaches; a < i.length; a++) {
      var o = i[a];
      if (!Wc(o.getEventTarget()) && !ks(n, o.clientRect))
        return !1;
    }
    return !0;
  }, t;
}();
function Wc(t) {
  var e = t.tagName;
  return e === "HTML" || e === "BODY";
}
var ht = function() {
  function t(e, r) {
    var n = this;
    this.useSubjectCenter = !1, this.requireInitial = !0, this.initialHit = null, this.movingHit = null, this.finalHit = null, this.handlePointerDown = function(a) {
      var i = n.dragging;
      n.initialHit = null, n.movingHit = null, n.finalHit = null, n.prepareHits(), n.processFirstCoord(a), n.initialHit || !n.requireInitial ? (i.setIgnoreMove(!1), n.emitter.trigger("pointerdown", a)) : i.setIgnoreMove(!0);
    }, this.handleDragStart = function(a) {
      n.emitter.trigger("dragstart", a), n.handleMove(a, !0);
    }, this.handleDragMove = function(a) {
      n.emitter.trigger("dragmove", a), n.handleMove(a);
    }, this.handlePointerUp = function(a) {
      n.releaseHits(), n.emitter.trigger("pointerup", a);
    }, this.handleDragEnd = function(a) {
      n.movingHit && n.emitter.trigger("hitupdate", null, !0, a), n.finalHit = n.movingHit, n.movingHit = null, n.emitter.trigger("dragend", a);
    }, this.droppableStore = r, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new vt();
  }
  return t.prototype.processFirstCoord = function(e) {
    var r = { left: e.pageX, top: e.pageY }, n = r, a = e.subjectEl, i;
    a instanceof HTMLElement && (i = fr(a), n = Is(n, i));
    var o = this.initialHit = this.queryHitForOffset(n.left, n.top);
    if (o) {
      if (this.useSubjectCenter && i) {
        var s = da(i, o.rect);
        s && (n = Ps(s));
      }
      this.coordAdjust = Hs(n, r);
    } else
      this.coordAdjust = { left: 0, top: 0 };
  }, t.prototype.handleMove = function(e, r) {
    var n = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
    (r || !gt(this.movingHit, n)) && (this.movingHit = n, this.emitter.trigger("hitupdate", n, !1, e));
  }, t.prototype.prepareHits = function() {
    this.offsetTrackers = ce(this.droppableStore, function(e) {
      return e.component.prepareHits(), new Vc(e.el);
    });
  }, t.prototype.releaseHits = function() {
    var e = this.offsetTrackers;
    for (var r in e)
      e[r].destroy();
    this.offsetTrackers = {};
  }, t.prototype.queryHitForOffset = function(e, r) {
    var n = this, a = n.droppableStore, i = n.offsetTrackers, o = null;
    for (var s in a) {
      var l = a[s].component, c = i[s];
      if (c && c.isWithinClipping(e, r)) {
        var u = c.computeLeft(), f = c.computeTop(), v = e - u, d = r - f, p = c.origRect, E = p.right - p.left, S = p.bottom - p.top;
        if (v >= 0 && v < E && d >= 0 && d < S) {
          var g = l.queryHit(v, d, E, S);
          g && dt(g.dateProfile.activeRange, g.dateSpan.range) && (!o || g.layer > o.layer) && (g.componentId = s, g.context = l.context, g.rect.left += u, g.rect.right += u, g.rect.top += f, g.rect.bottom += f, o = g);
        }
      }
    }
    return o;
  }, t;
}();
function gt(t, e) {
  return !t && !e ? !0 : Boolean(t) !== Boolean(e) ? !1 : ns(t.dateSpan, e.dateSpan);
}
function Ka(t, e) {
  for (var r = {}, n = 0, a = e.pluginHooks.datePointTransforms; n < a.length; n++) {
    var i = a[n];
    h(r, i(t, e));
  }
  return h(r, Bc(t, e.dateEnv)), r;
}
function Bc(t, e) {
  return {
    date: e.toDate(t.range.start),
    dateStr: e.formatIso(t.range.start, { omitTime: t.allDay }),
    allDay: t.allDay
  };
}
var Fc = function(t) {
  R(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    n.handlePointerDown = function(i) {
      var o = n.dragging, s = i.origEvent.target;
      o.setIgnoreMove(!n.component.isValidDateDownEl(s));
    }, n.handleDragEnd = function(i) {
      var o = n.component, s = n.dragging.pointer;
      if (!s.wasTouchScroll) {
        var l = n.hitDragging, c = l.initialHit, u = l.finalHit;
        if (c && u && gt(c, u)) {
          var f = o.context, v = h(h({}, Ka(c.dateSpan, f)), { dayEl: c.dayEl, jsEvent: i.origEvent, view: f.viewApi || f.calendarApi.view });
          f.emitter.trigger("dateClick", v);
        }
      }
    }, n.dragging = new Le(r.el), n.dragging.autoScroller.isEnabled = !1;
    var a = n.hitDragging = new ht(n.dragging, gr(r));
    return a.emitter.on("pointerdown", n.handlePointerDown), a.emitter.on("dragend", n.handleDragEnd), n;
  }
  return e.prototype.destroy = function() {
    this.dragging.destroy();
  }, e;
}(Re), zc = function(t) {
  R(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    n.dragSelection = null, n.handlePointerDown = function(l) {
      var c = n, u = c.component, f = c.dragging, v = u.context.options, d = v.selectable && u.isValidDateDownEl(l.origEvent.target);
      f.setIgnoreMove(!d), f.delay = l.isTouch ? Gc(u) : null;
    }, n.handleDragStart = function(l) {
      n.component.context.calendarApi.unselect(l);
    }, n.handleHitUpdate = function(l, c) {
      var u = n.component.context, f = null, v = !1;
      if (l) {
        var d = n.hitDragging.initialHit, p = l.componentId === d.componentId && n.isHitComboAllowed && !n.isHitComboAllowed(d, l);
        p || (f = qc(d, l, u.pluginHooks.dateSelectionTransformers)), (!f || !Mu(f, l.dateProfile, u)) && (v = !0, f = null);
      }
      f ? u.dispatch({ type: "SELECT_DATES", selection: f }) : c || u.dispatch({ type: "UNSELECT_DATES" }), v ? $t() : Kt(), c || (n.dragSelection = f);
    }, n.handlePointerUp = function(l) {
      n.dragSelection && (na(n.dragSelection, l, n.component.context), n.dragSelection = null);
    };
    var a = r.component, i = a.context.options, o = n.dragging = new Le(r.el);
    o.touchScrollAllowed = !1, o.minDistance = i.selectMinDistance || 0, o.autoScroller.isEnabled = i.dragScroll;
    var s = n.hitDragging = new ht(n.dragging, gr(r));
    return s.emitter.on("pointerdown", n.handlePointerDown), s.emitter.on("dragstart", n.handleDragStart), s.emitter.on("hitupdate", n.handleHitUpdate), s.emitter.on("pointerup", n.handlePointerUp), n;
  }
  return e.prototype.destroy = function() {
    this.dragging.destroy();
  }, e;
}(Re);
function Gc(t) {
  var e = t.context.options, r = e.selectLongPressDelay;
  return r == null && (r = e.longPressDelay), r;
}
function qc(t, e, r) {
  var n = t.dateSpan, a = e.dateSpan, i = [
    n.range.start,
    n.range.end,
    a.range.start,
    a.range.end
  ];
  i.sort(Yi);
  for (var o = {}, s = 0, l = r; s < l.length; s++) {
    var c = l[s], u = c(t, e);
    if (u === !1)
      return null;
    u && h(o, u);
  }
  return o.range = { start: i[0], end: i[3] }, o.allDay = n.allDay, o;
}
var Ja = function(t) {
  R(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    n.subjectEl = null, n.subjectSeg = null, n.isDragging = !1, n.eventRange = null, n.relevantEvents = null, n.receivingContext = null, n.validMutation = null, n.mutatedRelevantEvents = null, n.handlePointerDown = function(l) {
      var c = l.origEvent.target, u = n, f = u.component, v = u.dragging, d = v.mirror, p = f.context.options, E = f.context;
      n.subjectEl = l.subjectEl;
      var S = n.subjectSeg = Ee(l.subjectEl), g = n.eventRange = S.eventRange, b = g.instance.instanceId;
      n.relevantEvents = nr(E.getCurrentData().eventStore, b), v.minDistance = l.isTouch ? 0 : p.eventDragMinDistance, v.delay = l.isTouch && b !== f.props.eventSelection ? jc(f) : null, p.fixedMirrorParent ? d.parentNode = p.fixedMirrorParent : d.parentNode = V(c, ".fc"), d.revertDuration = p.dragRevertDuration;
      var C = f.isValidSegDownEl(c) && !V(c, ".fc-event-resizer");
      v.setIgnoreMove(!C), n.isDragging = C && l.subjectEl.classList.contains("fc-event-draggable");
    }, n.handleDragStart = function(l) {
      var c = n.component.context, u = n.eventRange, f = u.instance.instanceId;
      l.isTouch ? f !== n.component.props.eventSelection && c.dispatch({ type: "SELECT_EVENT", eventInstanceId: f }) : c.dispatch({ type: "UNSELECT_EVENT" }), n.isDragging && (c.calendarApi.unselect(l), c.emitter.trigger("eventDragStart", {
        el: n.subjectEl,
        event: new O(c, u.def, u.instance),
        jsEvent: l.origEvent,
        view: c.viewApi
      }));
    }, n.handleHitUpdate = function(l, c) {
      if (!!n.isDragging) {
        var u = n.relevantEvents, f = n.hitDragging.initialHit, v = n.component.context, d = null, p = null, E = null, S = !1, g = {
          affectedEvents: u,
          mutatedEvents: Y(),
          isEvent: !0
        };
        if (l) {
          d = l.context;
          var b = d.options;
          v === d || b.editable && b.droppable ? (p = Yc(f, l, d.getCurrentData().pluginHooks.eventDragMutationMassagers), p && (E = lr(u, d.getCurrentData().eventUiBases, p, d), g.mutatedEvents = E, Na(g, l.dateProfile, d) || (S = !0, p = null, E = null, g.mutatedEvents = Y()))) : d = null;
        }
        n.displayDrag(d, g), S ? $t() : Kt(), c || (v === d && gt(f, l) && (p = null), n.dragging.setMirrorNeedsRevert(!p), n.dragging.setMirrorIsVisible(!l || !Wn(n.subjectEl).querySelector(".fc-event-mirror")), n.receivingContext = d, n.validMutation = p, n.mutatedRelevantEvents = E);
      }
    }, n.handlePointerUp = function() {
      n.isDragging || n.cleanup();
    }, n.handleDragEnd = function(l) {
      if (n.isDragging) {
        var c = n.component.context, u = c.viewApi, f = n, v = f.receivingContext, d = f.validMutation, p = n.eventRange.def, E = n.eventRange.instance, S = new O(c, p, E), g = n.relevantEvents, b = n.mutatedRelevantEvents, C = n.hitDragging.finalHit;
        if (n.clearDrag(), c.emitter.trigger("eventDragStop", {
          el: n.subjectEl,
          event: S,
          jsEvent: l.origEvent,
          view: u
        }), d) {
          if (v === c) {
            var D = new O(c, b.defs[p.defId], E ? b.instances[E.instanceId] : null);
            c.dispatch({
              type: "MERGE_EVENTS",
              eventStore: b
            });
            for (var I = {
              oldEvent: S,
              event: D,
              relatedEvents: oe(b, c, E),
              revert: function() {
                c.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: g
                });
              }
            }, _ = {}, P = 0, w = c.getCurrentData().pluginHooks.eventDropTransformers; P < w.length; P++) {
              var A = w[P];
              h(_, A(d, c));
            }
            c.emitter.trigger("eventDrop", h(h(h({}, I), _), { el: l.subjectEl, delta: d.datesDelta, jsEvent: l.origEvent, view: u })), c.emitter.trigger("eventChange", I);
          } else if (v) {
            var L = {
              event: S,
              relatedEvents: oe(g, c, E),
              revert: function() {
                c.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: g
                });
              }
            };
            c.emitter.trigger("eventLeave", h(h({}, L), { draggedEl: l.subjectEl, view: u })), c.dispatch({
              type: "REMOVE_EVENTS",
              eventStore: g
            }), c.emitter.trigger("eventRemove", L);
            var Z = b.defs[p.defId], z = b.instances[E.instanceId], Ue = new O(v, Z, z);
            v.dispatch({
              type: "MERGE_EVENTS",
              eventStore: b
            });
            var Ve = {
              event: Ue,
              relatedEvents: oe(b, v, z),
              revert: function() {
                v.dispatch({
                  type: "REMOVE_EVENTS",
                  eventStore: b
                });
              }
            };
            v.emitter.trigger("eventAdd", Ve), l.isTouch && v.dispatch({
              type: "SELECT_EVENT",
              eventInstanceId: E.instanceId
            }), v.emitter.trigger("drop", h(h({}, Ka(C.dateSpan, v)), { draggedEl: l.subjectEl, jsEvent: l.origEvent, view: C.context.viewApi })), v.emitter.trigger("eventReceive", h(h({}, Ve), { draggedEl: l.subjectEl, view: C.context.viewApi }));
          }
        } else
          c.emitter.trigger("_noEventDrop");
      }
      n.cleanup();
    };
    var a = n.component, i = a.context.options, o = n.dragging = new Le(r.el);
    o.pointer.selector = e.SELECTOR, o.touchScrollAllowed = !1, o.autoScroller.isEnabled = i.dragScroll;
    var s = n.hitDragging = new ht(n.dragging, Gt);
    return s.useSubjectCenter = r.useEventCenter, s.emitter.on("pointerdown", n.handlePointerDown), s.emitter.on("dragstart", n.handleDragStart), s.emitter.on("hitupdate", n.handleHitUpdate), s.emitter.on("pointerup", n.handlePointerUp), s.emitter.on("dragend", n.handleDragEnd), n;
  }
  return e.prototype.destroy = function() {
    this.dragging.destroy();
  }, e.prototype.displayDrag = function(r, n) {
    var a = this.component.context, i = this.receivingContext;
    i && i !== r && (i === a ? i.dispatch({
      type: "SET_EVENT_DRAG",
      state: {
        affectedEvents: n.affectedEvents,
        mutatedEvents: Y(),
        isEvent: !0
      }
    }) : i.dispatch({ type: "UNSET_EVENT_DRAG" })), r && r.dispatch({ type: "SET_EVENT_DRAG", state: n });
  }, e.prototype.clearDrag = function() {
    var r = this.component.context, n = this.receivingContext;
    n && n.dispatch({ type: "UNSET_EVENT_DRAG" }), r !== n && r.dispatch({ type: "UNSET_EVENT_DRAG" });
  }, e.prototype.cleanup = function() {
    this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null;
  }, e.SELECTOR = ".fc-event-draggable, .fc-event-resizable", e;
}(Re);
function Yc(t, e, r) {
  var n = t.dateSpan, a = e.dateSpan, i = n.range.start, o = a.range.start, s = {};
  n.allDay !== a.allDay && (s.allDay = a.allDay, s.hasEnd = e.context.options.allDayMaintainDuration, a.allDay && (i = H(i)));
  var l = pe(i, o, t.context.dateEnv, t.componentId === e.componentId ? t.largeUnit : null);
  l.milliseconds && (s.allDay = !1);
  for (var c = {
    datesDelta: l,
    standardProps: s
  }, u = 0, f = r; u < f.length; u++) {
    var v = f[u];
    v(c, t, e);
  }
  return c;
}
function jc(t) {
  var e = t.context.options, r = e.eventLongPressDelay;
  return r == null && (r = e.longPressDelay), r;
}
var Zc = function(t) {
  R(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    n.draggingSegEl = null, n.draggingSeg = null, n.eventRange = null, n.relevantEvents = null, n.validMutation = null, n.mutatedRelevantEvents = null, n.handlePointerDown = function(s) {
      var l = n.component, c = n.querySegEl(s), u = Ee(c), f = n.eventRange = u.eventRange;
      n.dragging.minDistance = l.context.options.eventDragMinDistance, n.dragging.setIgnoreMove(!n.component.isValidSegDownEl(s.origEvent.target) || s.isTouch && n.component.props.eventSelection !== f.instance.instanceId);
    }, n.handleDragStart = function(s) {
      var l = n.component.context, c = n.eventRange;
      n.relevantEvents = nr(l.getCurrentData().eventStore, n.eventRange.instance.instanceId);
      var u = n.querySegEl(s);
      n.draggingSegEl = u, n.draggingSeg = Ee(u), l.calendarApi.unselect(), l.emitter.trigger("eventResizeStart", {
        el: u,
        event: new O(l, c.def, c.instance),
        jsEvent: s.origEvent,
        view: l.viewApi
      });
    }, n.handleHitUpdate = function(s, l, c) {
      var u = n.component.context, f = n.relevantEvents, v = n.hitDragging.initialHit, d = n.eventRange.instance, p = null, E = null, S = !1, g = {
        affectedEvents: f,
        mutatedEvents: Y(),
        isEvent: !0
      };
      if (s) {
        var b = s.componentId === v.componentId && n.isHitComboAllowed && !n.isHitComboAllowed(v, s);
        b || (p = Xc(v, s, c.subjectEl.classList.contains("fc-event-resizer-start"), d.range));
      }
      p && (E = lr(f, u.getCurrentData().eventUiBases, p, u), g.mutatedEvents = E, Na(g, s.dateProfile, u) || (S = !0, p = null, E = null, g.mutatedEvents = null)), E ? u.dispatch({
        type: "SET_EVENT_RESIZE",
        state: g
      }) : u.dispatch({ type: "UNSET_EVENT_RESIZE" }), S ? $t() : Kt(), l || (p && gt(v, s) && (p = null), n.validMutation = p, n.mutatedRelevantEvents = E);
    }, n.handleDragEnd = function(s) {
      var l = n.component.context, c = n.eventRange.def, u = n.eventRange.instance, f = new O(l, c, u), v = n.relevantEvents, d = n.mutatedRelevantEvents;
      if (l.emitter.trigger("eventResizeStop", {
        el: n.draggingSegEl,
        event: f,
        jsEvent: s.origEvent,
        view: l.viewApi
      }), n.validMutation) {
        var p = new O(l, d.defs[c.defId], u ? d.instances[u.instanceId] : null);
        l.dispatch({
          type: "MERGE_EVENTS",
          eventStore: d
        });
        var E = {
          oldEvent: f,
          event: p,
          relatedEvents: oe(d, l, u),
          revert: function() {
            l.dispatch({
              type: "MERGE_EVENTS",
              eventStore: v
            });
          }
        };
        l.emitter.trigger("eventResize", h(h({}, E), { el: n.draggingSegEl, startDelta: n.validMutation.startDelta || k(0), endDelta: n.validMutation.endDelta || k(0), jsEvent: s.origEvent, view: l.viewApi })), l.emitter.trigger("eventChange", E);
      } else
        l.emitter.trigger("_noEventResize");
      n.draggingSeg = null, n.relevantEvents = null, n.validMutation = null;
    };
    var a = r.component, i = n.dragging = new Le(r.el);
    i.pointer.selector = ".fc-event-resizer", i.touchScrollAllowed = !1, i.autoScroller.isEnabled = a.context.options.dragScroll;
    var o = n.hitDragging = new ht(n.dragging, gr(r));
    return o.emitter.on("pointerdown", n.handlePointerDown), o.emitter.on("dragstart", n.handleDragStart), o.emitter.on("hitupdate", n.handleHitUpdate), o.emitter.on("dragend", n.handleDragEnd), n;
  }
  return e.prototype.destroy = function() {
    this.dragging.destroy();
  }, e.prototype.querySegEl = function(r) {
    return V(r.subjectEl, ".fc-event");
  }, e;
}(Re);
function Xc(t, e, r, n) {
  var a = t.context.dateEnv, i = t.dateSpan.range.start, o = e.dateSpan.range.start, s = pe(i, o, a, t.largeUnit);
  if (r) {
    if (a.add(n.start, s) < n.end)
      return { startDelta: s };
  } else if (a.add(n.end, s) > n.start)
    return { endDelta: s };
  return null;
}
var $c = function() {
  function t(e) {
    var r = this;
    this.context = e, this.isRecentPointerDateSelect = !1, this.matchesCancel = !1, this.matchesEvent = !1, this.onSelect = function(a) {
      a.jsEvent && (r.isRecentPointerDateSelect = !0);
    }, this.onDocumentPointerDown = function(a) {
      var i = r.context.options.unselectCancel, o = Vn(a.origEvent);
      r.matchesCancel = !!V(o, i), r.matchesEvent = !!V(o, Ja.SELECTOR);
    }, this.onDocumentPointerUp = function(a) {
      var i = r.context, o = r.documentPointer, s = i.getCurrentData();
      if (!o.wasTouchScroll) {
        if (s.dateSelection && !r.isRecentPointerDateSelect) {
          var l = i.options.unselectAuto;
          l && (!l || !r.matchesCancel) && i.calendarApi.unselect(a);
        }
        s.eventSelection && !r.matchesEvent && i.dispatch({ type: "UNSELECT_EVENT" });
      }
      r.isRecentPointerDateSelect = !1;
    };
    var n = this.documentPointer = new Er(document);
    n.shouldIgnoreMove = !0, n.shouldWatchScroll = !1, n.emitter.on("pointerdown", this.onDocumentPointerDown), n.emitter.on("pointerup", this.onDocumentPointerUp), e.emitter.on("select", this.onSelect);
  }
  return t.prototype.destroy = function() {
    this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy();
  }, t;
}(), Kc = {
  fixedMirrorParent: y
}, Jc = {
  dateClick: y,
  eventDragStart: y,
  eventDragStop: y,
  eventDrop: y,
  eventResizeStart: y,
  eventResizeStop: y,
  eventResize: y,
  drop: y,
  eventReceive: y,
  eventLeave: y
};
mr.dataAttrPrefix = "";
(function(t) {
  R(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    n.shouldIgnoreMove = !1, n.mirrorSelector = "", n.currentMirrorEl = null, n.handlePointerDown = function(i) {
      n.emitter.trigger("pointerdown", i), n.shouldIgnoreMove || n.emitter.trigger("dragstart", i);
    }, n.handlePointerMove = function(i) {
      n.shouldIgnoreMove || n.emitter.trigger("dragmove", i);
    }, n.handlePointerUp = function(i) {
      n.emitter.trigger("pointerup", i), n.shouldIgnoreMove || n.emitter.trigger("dragend", i);
    };
    var a = n.pointer = new Er(r);
    return a.emitter.on("pointerdown", n.handlePointerDown), a.emitter.on("pointermove", n.handlePointerMove), a.emitter.on("pointerup", n.handlePointerUp), n;
  }
  return e.prototype.destroy = function() {
    this.pointer.destroy();
  }, e.prototype.setIgnoreMove = function(r) {
    this.shouldIgnoreMove = r;
  }, e.prototype.setMirrorIsVisible = function(r) {
    if (r)
      this.currentMirrorEl && (this.currentMirrorEl.style.visibility = "", this.currentMirrorEl = null);
    else {
      var n = this.mirrorSelector ? document.querySelector(this.mirrorSelector) : null;
      n && (this.currentMirrorEl = n, n.style.visibility = "hidden");
    }
  }, e;
})(Pa);
var Qc = te({
  componentInteractions: [Fc, zc, Ja, Zc],
  calendarInteractions: [$c],
  elementDraggingImpl: Le,
  optionRefiners: Kc,
  listenerRefiners: Jc
});
const ef = { id: "calendar" }, tf = /* @__PURE__ */ Qa({
  __name: "index",
  props: {
    local: {
      type: String,
      default: "zh-cn"
    },
    initialView: {
      type: String,
      default: "dayGridMonth"
    },
    buttonText: {
      type: Object,
      default: () => ({
        today: "\u4ECA\u5929",
        month: "\u6708",
        week: "\u5468",
        day: "\u65E5",
        prevYear: "\u4E0A\u4E00\u5E74",
        nextYear: "\u4E0B\u4E00\u5E74",
        prev: "\u4E0A\u4E00\u6708",
        next: "\u4E0B\u4E00\u6708"
      })
    },
    headerToolbar: {
      type: Object,
      default: () => ({
        start: "title",
        center: "",
        end: "prev today next"
      })
    },
    footerToolbar: {
      type: Object
    },
    events: {
      type: Array,
      default: () => []
    },
    eventContent: {
      type: Function
    }
  },
  emits: ["date-click", "event-click"],
  setup(t, { emit: e }) {
    const r = t, n = ei(), a = () => {
      let i = document.getElementById("calendar");
      i && (console.log(i), n.value = new uc(i, {
        plugins: [Pc, Qc],
        initialView: r.initialView,
        locale: r.local,
        buttonText: r.buttonText,
        headerToolbar: r.headerToolbar,
        footerToolbar: r.footerToolbar,
        eventSources: [
          {
            events(o, s) {
              r.events.length ? s(r.events) : s([]);
            }
          }
        ],
        dateClick(o) {
          e("date-click", o);
        },
        eventClick(o) {
          e("event-click", o);
        },
        eventContent: r.eventContent
      }), n.value.render());
    };
    return ti(r.events, () => {
      a();
    }, { deep: !0 }), ri(() => {
      a();
    }), (i, o) => (ni(), ai("div", ef));
  }
}), nf = {
  install(t) {
    t.component("m-calendar", tf);
  }
};
export {
  nf as default
};
