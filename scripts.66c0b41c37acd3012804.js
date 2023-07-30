!(function (e, t) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  var n = [],
    i = e.document,
    r = n.slice,
    o = n.concat,
    s = n.push,
    a = n.indexOf,
    c = {},
    u = c.toString,
    l = c.hasOwnProperty,
    d = {},
    p = "1.12.0",
    f = function (e, t) {
      return new f.fn.init(e, t);
    },
    h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    g = /^-ms-/,
    v = /-([\da-z])/gi,
    m = function (e, t) {
      return t.toUpperCase();
    };
  function y(e) {
    var t = !!e && "length" in e && e.length,
      n = f.type(e);
    return (
      "function" !== n &&
      !f.isWindow(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  (f.fn = f.prototype =
    {
      jquery: p,
      constructor: f,
      selector: "",
      length: 0,
      toArray: function () {
        return r.call(this);
      },
      get: function (e) {
        return null != e
          ? 0 > e
            ? this[e + this.length]
            : this[e]
          : r.call(this);
      },
      pushStack: function (e) {
        var t = f.merge(this.constructor(), e);
        return (t.prevObject = this), (t.context = this.context), t;
      },
      each: function (e) {
        return f.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          f.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(r.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (0 > e ? t : 0);
        return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: s,
      sort: n.sort,
      splice: n.splice,
    }),
    (f.extend = f.fn.extend =
      function () {
        var e,
          t,
          n,
          i,
          r,
          o,
          s = arguments[0] || {},
          a = 1,
          c = arguments.length,
          u = !1;
        for (
          "boolean" == typeof s && ((u = s), (s = arguments[a] || {}), a++),
            "object" == typeof s || f.isFunction(s) || (s = {}),
            a === c && ((s = this), a--);
          c > a;
          a++
        )
          if (null != (r = arguments[a]))
            for (i in r)
              (e = s[i]),
                s !== (n = r[i]) &&
                  (u && n && (f.isPlainObject(n) || (t = f.isArray(n)))
                    ? (t
                        ? ((t = !1), (o = e && f.isArray(e) ? e : []))
                        : (o = e && f.isPlainObject(e) ? e : {}),
                      (s[i] = f.extend(u, o, n)))
                    : void 0 !== n && (s[i] = n));
        return s;
      }),
    f.extend({
      expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isFunction: function (e) {
        return "function" === f.type(e);
      },
      isArray:
        Array.isArray ||
        function (e) {
          return "array" === f.type(e);
        },
      isWindow: function (e) {
        return null != e && e == e.window;
      },
      isNumeric: function (e) {
        var t = e && e.toString();
        return !f.isArray(e) && t - parseFloat(t) + 1 >= 0;
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      isPlainObject: function (e) {
        var t;
        if (!e || "object" !== f.type(e) || e.nodeType || f.isWindow(e))
          return !1;
        try {
          if (
            e.constructor &&
            !l.call(e, "constructor") &&
            !l.call(e.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (n) {
          return !1;
        }
        if (!d.ownFirst) for (t in e) return l.call(e, t);
        for (t in e);
        return void 0 === t || l.call(e, t);
      },
      type: function (e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? c[u.call(e)] || "object"
          : typeof e;
      },
      globalEval: function (t) {
        t &&
          f.trim(t) &&
          (
            e.execScript ||
            function (t) {
              e.eval.call(e, t);
            }
          )(t);
      },
      camelCase: function (e) {
        return e.replace(g, "ms-").replace(v, m);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t) {
        var n,
          i = 0;
        if (y(e))
          for (n = e.length; n > i && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(h, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (y(Object(e))
              ? f.merge(n, "string" == typeof e ? [e] : e)
              : s.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        var i;
        if (t) {
          if (a) return a.call(t, e, n);
          for (
            i = t.length, n = n ? (0 > n ? Math.max(0, i + n) : n) : 0;
            i > n;
            n++
          )
            if (n in t && t[n] === e) return n;
        }
        return -1;
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, r = e.length; n > i; ) e[r++] = t[i++];
        if (n != n) for (; void 0 !== t[i]; ) e[r++] = t[i++];
        return (e.length = r), e;
      },
      grep: function (e, t, n) {
        for (var i = [], r = 0, o = e.length, s = !n; o > r; r++)
          !t(e[r], r) !== s && i.push(e[r]);
        return i;
      },
      map: function (e, t, n) {
        var i,
          r,
          s = 0,
          a = [];
        if (y(e))
          for (i = e.length; i > s; s++)
            null != (r = t(e[s], s, n)) && a.push(r);
        else for (s in e) null != (r = t(e[s], s, n)) && a.push(r);
        return o.apply([], a);
      },
      guid: 1,
      proxy: function (e, t) {
        var n, i, o;
        return (
          "string" == typeof t && ((o = e[t]), (t = e), (e = o)),
          f.isFunction(e)
            ? ((n = r.call(arguments, 2)),
              ((i = function () {
                return e.apply(t || this, n.concat(r.call(arguments)));
              }).guid = e.guid =
                e.guid || f.guid++),
              i)
            : void 0
        );
      },
      now: function () {
        return +new Date();
      },
      support: d,
    }),
    "function" == typeof Symbol && (f.fn[Symbol.iterator] = n[Symbol.iterator]),
    f.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        c["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var I = (function (e) {
    var t,
      n,
      i,
      r,
      o,
      s,
      a,
      c,
      u,
      l,
      d,
      p,
      f,
      h,
      g,
      v,
      m,
      y,
      I,
      C = "sizzle" + 1 * new Date(),
      b = e.document,
      T = 0,
      w = 0,
      S = se(),
      x = se(),
      _ = se(),
      k = function (e, t) {
        return e === t && (d = !0), 0;
      },
      E = 1 << 31,
      A = {}.hasOwnProperty,
      D = [],
      M = D.pop,
      N = D.push,
      R = D.push,
      F = D.slice,
      P = function (e, t) {
        for (var n = 0, i = e.length; i > n; n++) if (e[n] === t) return n;
        return -1;
      },
      O =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      L = "[\\x20\\t\\r\\n\\f]",
      U = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      j =
        "\\[" +
        L +
        "*(" +
        U +
        ")(?:" +
        L +
        "*([*^$|!~]?=)" +
        L +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        U +
        "))|)" +
        L +
        "*\\]",
      q =
        ":(" +
        U +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        j +
        ")*)|.*)\\)|)",
      B = new RegExp(L + "+", "g"),
      W = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
      V = new RegExp("^" + L + "*," + L + "*"),
      H = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
      J = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
      z = new RegExp(q),
      K = new RegExp("^" + U + "$"),
      $ = {
        ID: new RegExp("^#(" + U + ")"),
        CLASS: new RegExp("^\\.(" + U + ")"),
        TAG: new RegExp("^(" + U + "|[*])"),
        ATTR: new RegExp("^" + j),
        PSEUDO: new RegExp("^" + q),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            L +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            L +
            "*(?:([+-]|)" +
            L +
            "*(\\d+)|))" +
            L +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + O + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            L +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            L +
            "*((?:-\\d)?\\d*)" +
            L +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      G = /^(?:input|select|textarea|button)$/i,
      Q = /^h\d$/i,
      X = /^[^{]+\{\s*\[native \w/,
      Y = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      Z = /[+~]/,
      ee = /'|\\/g,
      te = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
      ie = function (e, t, n) {
        var i = "0x" + t - 65536;
        return i != i || n
          ? t
          : 0 > i
          ? String.fromCharCode(i + 65536)
          : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
      },
      re = function () {
        p();
      };
    try {
      R.apply((D = F.call(b.childNodes)), b.childNodes);
    } catch (ne) {
      R = {
        apply: D.length
          ? function (e, t) {
              N.apply(e, F.call(t));
            }
          : function (e, t) {
              for (var n = e.length, i = 0; (e[n++] = t[i++]); );
              e.length = n - 1;
            },
      };
    }
    function oe(e, t, i, r) {
      var o,
        a,
        u,
        l,
        d,
        h,
        m,
        y,
        T = t && t.ownerDocument,
        w = t ? t.nodeType : 9;
      if (
        ((i = i || []),
        "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
      )
        return i;
      if (
        !r &&
        ((t ? t.ownerDocument || t : b) !== f && p(t), (t = t || f), g)
      ) {
        if (11 !== w && (h = Y.exec(e)))
          if ((o = h[1])) {
            if (9 === w) {
              if (!(u = t.getElementById(o))) return i;
              if (u.id === o) return i.push(u), i;
            } else if (T && (u = T.getElementById(o)) && I(t, u) && u.id === o)
              return i.push(u), i;
          } else {
            if (h[2]) return R.apply(i, t.getElementsByTagName(e)), i;
            if (
              (o = h[3]) &&
              n.getElementsByClassName &&
              t.getElementsByClassName
            )
              return R.apply(i, t.getElementsByClassName(o)), i;
          }
        if (n.qsa && !_[e + " "] && (!v || !v.test(e))) {
          if (1 !== w) (T = t), (y = e);
          else if ("object" !== t.nodeName.toLowerCase()) {
            for (
              (l = t.getAttribute("id"))
                ? (l = l.replace(ee, "\\$&"))
                : t.setAttribute("id", (l = C)),
                a = (m = s(e)).length,
                d = K.test(l) ? "#" + l : "[id='" + l + "']";
              a--;

            )
              m[a] = d + " " + ve(m[a]);
            (y = m.join(",")), (T = (Z.test(e) && he(t.parentNode)) || t);
          }
          if (y)
            try {
              return R.apply(i, T.querySelectorAll(y)), i;
            } catch (S) {
            } finally {
              l === C && t.removeAttribute("id");
            }
        }
      }
      return c(e.replace(W, "$1"), t, i, r);
    }
    function se() {
      var e = [];
      return function t(n, r) {
        return (
          e.push(n + " ") > i.cacheLength && delete t[e.shift()],
          (t[n + " "] = r)
        );
      };
    }
    function ae(e) {
      return (e[C] = !0), e;
    }
    function ce(e) {
      var t = f.createElement("div");
      try {
        return !!e(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function ue(e, t) {
      for (var n = e.split("|"), r = n.length; r--; ) i.attrHandle[n[r]] = t;
    }
    function le(e, t) {
      var n = t && e,
        i =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          (~t.sourceIndex || E) - (~e.sourceIndex || E);
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function fe(e) {
      return ae(function (t) {
        return (
          (t = +t),
          ae(function (n, i) {
            for (var r, o = e([], n.length, t), s = o.length; s--; )
              n[(r = o[s])] && (n[r] = !(i[r] = n[r]));
          })
        );
      });
    }
    function he(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (t in ((n = oe.support = {}),
    (o = oe.isXML =
      function (e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName;
      }),
    (p = oe.setDocument =
      function (e) {
        var t,
          r,
          s = e ? e.ownerDocument || e : b;
        return s !== f && 9 === s.nodeType && s.documentElement
          ? ((h = (f = s).documentElement),
            (g = !o(f)),
            (r = f.defaultView) &&
              r.top !== r &&
              (r.addEventListener
                ? r.addEventListener("unload", re, !1)
                : r.attachEvent && r.attachEvent("onunload", re)),
            (n.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (n.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(f.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (n.getElementsByClassName = X.test(f.getElementsByClassName)),
            (n.getById = ce(function (e) {
              return (
                (h.appendChild(e).id = C),
                !f.getElementsByName || !f.getElementsByName(C).length
              );
            })),
            n.getById
              ? ((i.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }),
                (i.filter.ID = function (e) {
                  var t = e.replace(te, ie);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }))
              : (delete i.find.ID,
                (i.filter.ID = function (e) {
                  var t = e.replace(te, ie);
                  return function (e) {
                    var n =
                      void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                  };
                })),
            (i.find.TAG = n.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : n.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                    return i;
                  }
                  return o;
                }),
            (i.find.CLASS =
              n.getElementsByClassName &&
              function (e, t) {
                return void 0 !== t.getElementsByClassName && g
                  ? t.getElementsByClassName(e)
                  : void 0;
              }),
            (m = []),
            (v = []),
            (n.qsa = X.test(f.querySelectorAll)) &&
              (ce(function (e) {
                (h.appendChild(e).innerHTML =
                  "<a id='" +
                  C +
                  "'></a><select id='" +
                  C +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push("[*^$]=" + L + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    v.push("\\[" + L + "*(?:value|" + O + ")"),
                  e.querySelectorAll("[id~=" + C + "-]").length || v.push("~="),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + C + "+*").length ||
                    v.push(".#.+[+~]");
              }),
              ce(function (e) {
                var t = f.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    v.push("name" + L + "*[*^$|!~]?="),
                  e.querySelectorAll(":enabled").length ||
                    v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (n.matchesSelector = X.test(
              (y =
                h.matches ||
                h.webkitMatchesSelector ||
                h.mozMatchesSelector ||
                h.oMatchesSelector ||
                h.msMatchesSelector)
            )) &&
              ce(function (e) {
                (n.disconnectedMatch = y.call(e, "div")),
                  y.call(e, "[s!='']:x"),
                  m.push("!=", q);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (m = m.length && new RegExp(m.join("|"))),
            (t = X.test(h.compareDocumentPosition)),
            (I =
              t || X.test(h.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      i = t && t.parentNode;
                    return (
                      e === i ||
                      !(
                        !i ||
                        1 !== i.nodeType ||
                        !(n.contains
                          ? n.contains(i)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(i))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (k = t
              ? function (e, t) {
                  if (e === t) return (d = !0), 0;
                  var i =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    i ||
                    (1 &
                      (i =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!n.sortDetached && t.compareDocumentPosition(e) === i)
                      ? e === f || (e.ownerDocument === b && I(b, e))
                        ? -1
                        : t === f || (t.ownerDocument === b && I(b, t))
                        ? 1
                        : l
                        ? P(l, e) - P(l, t)
                        : 0
                      : 4 & i
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (d = !0), 0;
                  var n,
                    i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    a = [t];
                  if (!r || !o)
                    return e === f
                      ? -1
                      : t === f
                      ? 1
                      : r
                      ? -1
                      : o
                      ? 1
                      : l
                      ? P(l, e) - P(l, t)
                      : 0;
                  if (r === o) return le(e, t);
                  for (n = e; (n = n.parentNode); ) s.unshift(n);
                  for (n = t; (n = n.parentNode); ) a.unshift(n);
                  for (; s[i] === a[i]; ) i++;
                  return i
                    ? le(s[i], a[i])
                    : s[i] === b
                    ? -1
                    : a[i] === b
                    ? 1
                    : 0;
                }),
            f)
          : f;
      }),
    (oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }),
    (oe.matchesSelector = function (e, t) {
      if (
        ((e.ownerDocument || e) !== f && p(e),
        (t = t.replace(J, "='$1']")),
        n.matchesSelector &&
          g &&
          !_[t + " "] &&
          (!m || !m.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var i = y.call(e, t);
          if (
            i ||
            n.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return i;
        } catch (r) {}
      return oe(t, f, null, [e]).length > 0;
    }),
    (oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== f && p(e), I(e, t);
    }),
    (oe.attr = function (e, t) {
      (e.ownerDocument || e) !== f && p(e);
      var r = i.attrHandle[t.toLowerCase()],
        o = r && A.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
      return void 0 !== o
        ? o
        : n.attributes || !g
        ? e.getAttribute(t)
        : (o = e.getAttributeNode(t)) && o.specified
        ? o.value
        : null;
    }),
    (oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (oe.uniqueSort = function (e) {
      var t,
        i = [],
        r = 0,
        o = 0;
      if (
        ((d = !n.detectDuplicates),
        (l = !n.sortStable && e.slice(0)),
        e.sort(k),
        d)
      ) {
        for (; (t = e[o++]); ) t === e[o] && (r = i.push(o));
        for (; r--; ) e.splice(i[r], 1);
      }
      return (l = null), e;
    }),
    (r = oe.getText =
      function (e) {
        var t,
          n = "",
          i = 0,
          o = e.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
          } else if (3 === o || 4 === o) return e.nodeValue;
        } else for (; (t = e[i++]); ) n += r(t);
        return n;
      }),
    ((i = oe.selectors =
      {
        cacheLength: 50,
        createPseudo: ae,
        match: $,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ie)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ie)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || oe.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && oe.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return $.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    z.test(n) &&
                    (t = s(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ie).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = S[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + L + ")" + e + "(" + L + "|$)")) &&
                S(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (e, t, n) {
            return function (i) {
              var r = oe.attr(i, e);
              return null == r
                ? "!=" === t
                : !t ||
                    ((r += ""),
                    "=" === t
                      ? r === n
                      : "!=" === t
                      ? r !== n
                      : "^=" === t
                      ? n && 0 === r.indexOf(n)
                      : "*=" === t
                      ? n && r.indexOf(n) > -1
                      : "$=" === t
                      ? n && r.slice(-n.length) === n
                      : "~=" === t
                      ? (" " + r.replace(B, " ") + " ").indexOf(n) > -1
                      : "|=" === t &&
                        (r === n || r.slice(0, n.length + 1) === n + "-"));
            };
          },
          CHILD: function (e, t, n, i, r) {
            var o = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              a = "of-type" === t;
            return 1 === i && 0 === r
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (t, n, c) {
                  var u,
                    l,
                    d,
                    p,
                    f,
                    h,
                    g = o !== s ? "nextSibling" : "previousSibling",
                    v = t.parentNode,
                    m = a && t.nodeName.toLowerCase(),
                    y = !c && !a,
                    I = !1;
                  if (v) {
                    if (o) {
                      for (; g; ) {
                        for (p = t; (p = p[g]); )
                          if (
                            a
                              ? p.nodeName.toLowerCase() === m
                              : 1 === p.nodeType
                          )
                            return !1;
                        h = g = "only" === e && !h && "nextSibling";
                      }
                      return !0;
                    }
                    if (((h = [s ? v.firstChild : v.lastChild]), s && y)) {
                      for (
                        I =
                          (f =
                            (u =
                              (l =
                                (d = (p = v)[C] || (p[C] = {}))[p.uniqueID] ||
                                (d[p.uniqueID] = {}))[e] || [])[0] === T &&
                            u[1]) && u[2],
                          p = f && v.childNodes[f];
                        (p = (++f && p && p[g]) || (I = f = 0) || h.pop());

                      )
                        if (1 === p.nodeType && ++I && p === t) {
                          l[e] = [T, f, I];
                          break;
                        }
                    } else if (
                      (y &&
                        (I = f =
                          (u =
                            (l =
                              (d = (p = t)[C] || (p[C] = {}))[p.uniqueID] ||
                              (d[p.uniqueID] = {}))[e] || [])[0] === T && u[1]),
                      !1 === I)
                    )
                      for (
                        ;
                        (p = (++f && p && p[g]) || (I = f = 0) || h.pop()) &&
                        ((a
                          ? p.nodeName.toLowerCase() !== m
                          : 1 !== p.nodeType) ||
                          !++I ||
                          (y &&
                            ((l =
                              (d = p[C] || (p[C] = {}))[p.uniqueID] ||
                              (d[p.uniqueID] = {}))[e] = [T, I]),
                          p !== t));

                      );
                    return (I -= r) === i || (I % i == 0 && I / i >= 0);
                  }
                };
          },
          PSEUDO: function (e, t) {
            var n,
              r =
                i.pseudos[e] ||
                i.setFilters[e.toLowerCase()] ||
                oe.error("unsupported pseudo: " + e);
            return r[C]
              ? r(t)
              : r.length > 1
              ? ((n = [e, e, "", t]),
                i.setFilters.hasOwnProperty(e.toLowerCase())
                  ? ae(function (e, n) {
                      for (var i, o = r(e, t), s = o.length; s--; )
                        e[(i = P(e, o[s]))] = !(n[i] = o[s]);
                    })
                  : function (e) {
                      return r(e, 0, n);
                    })
              : r;
          },
        },
        pseudos: {
          not: ae(function (e) {
            var t = [],
              n = [],
              i = a(e.replace(W, "$1"));
            return i[C]
              ? ae(function (e, t, n, r) {
                  for (var o, s = i(e, null, r, []), a = e.length; a--; )
                    (o = s[a]) && (e[a] = !(t[a] = o));
                })
              : function (e, r, o) {
                  return (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop();
                };
          }),
          has: ae(function (e) {
            return function (t) {
              return oe(e, t).length > 0;
            };
          }),
          contains: ae(function (e) {
            return (
              (e = e.replace(te, ie)),
              function (t) {
                return (t.textContent || t.innerText || r(t)).indexOf(e) > -1;
              }
            );
          }),
          lang: ae(function (e) {
            return (
              K.test(e || "") || oe.error("unsupported lang: " + e),
              (e = e.replace(te, ie).toLowerCase()),
              function (t) {
                var n;
                do {
                  if (
                    (n = g
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                    );
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function (e) {
            return e === h;
          },
          focus: function (e) {
            return (
              e === f.activeElement &&
              (!f.hasFocus || f.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: function (e) {
            return !1 === e.disabled;
          },
          disabled: function (e) {
            return !0 === e.disabled;
          },
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return !0 === e.selected;
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !i.pseudos.empty(e);
          },
          header: function (e) {
            return Q.test(e.nodeName);
          },
          input: function (e) {
            return G.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: fe(function () {
            return [0];
          }),
          last: fe(function (e, t) {
            return [t - 1];
          }),
          eq: fe(function (e, t, n) {
            return [0 > n ? n + t : n];
          }),
          even: fe(function (e, t) {
            for (var n = 0; t > n; n += 2) e.push(n);
            return e;
          }),
          odd: fe(function (e, t) {
            for (var n = 1; t > n; n += 2) e.push(n);
            return e;
          }),
          lt: fe(function (e, t, n) {
            for (var i = 0 > n ? n + t : n; --i >= 0; ) e.push(i);
            return e;
          }),
          gt: fe(function (e, t, n) {
            for (var i = 0 > n ? n + t : n; ++i < t; ) e.push(i);
            return e;
          }),
        },
      }).pseudos.nth = i.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      i.pseudos[t] = de(t);
    for (t in { submit: !0, reset: !0 }) i.pseudos[t] = pe(t);
    function ge() {}
    function ve(e) {
      for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
      return i;
    }
    function me(e, t, n) {
      var i = t.dir,
        r = n && "parentNode" === i,
        o = w++;
      return t.first
        ? function (t, n, o) {
            for (; (t = t[i]); ) if (1 === t.nodeType || r) return e(t, n, o);
          }
        : function (t, n, s) {
            var a,
              c,
              u,
              l = [T, o];
            if (s) {
              for (; (t = t[i]); )
                if ((1 === t.nodeType || r) && e(t, n, s)) return !0;
            } else
              for (; (t = t[i]); )
                if (1 === t.nodeType || r) {
                  if (
                    (a = (c =
                      (u = t[C] || (t[C] = {}))[t.uniqueID] ||
                      (u[t.uniqueID] = {}))[i]) &&
                    a[0] === T &&
                    a[1] === o
                  )
                    return (l[2] = a[2]);
                  if (((c[i] = l), (l[2] = e(t, n, s)))) return !0;
                }
          };
    }
    function ye(e) {
      return e.length > 1
        ? function (t, n, i) {
            for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
            return !0;
          }
        : e[0];
    }
    function Ie(e, t, n, i, r) {
      for (var o, s = [], a = 0, c = e.length, u = null != t; c > a; a++)
        (o = e[a]) && (!n || n(o, i, r)) && (s.push(o), u && t.push(a));
      return s;
    }
    function Ce(e, t, n, i, r, o) {
      return (
        i && !i[C] && (i = Ce(i)),
        r && !r[C] && (r = Ce(r, o)),
        ae(function (o, s, a, c) {
          var u,
            l,
            d,
            p = [],
            f = [],
            h = s.length,
            g =
              o ||
              (function (e, t, n) {
                for (var i = 0, r = t.length; r > i; i++) oe(e, t[i], n);
                return n;
              })(t || "*", a.nodeType ? [a] : a, []),
            v = !e || (!o && t) ? g : Ie(g, p, e, a, c),
            m = n ? (r || (o ? e : h || i) ? [] : s) : v;
          if ((n && n(v, m, a, c), i))
            for (u = Ie(m, f), i(u, [], a, c), l = u.length; l--; )
              (d = u[l]) && (m[f[l]] = !(v[f[l]] = d));
          if (o) {
            if (r || e) {
              if (r) {
                for (u = [], l = m.length; l--; )
                  (d = m[l]) && u.push((v[l] = d));
                r(null, (m = []), u, c);
              }
              for (l = m.length; l--; )
                (d = m[l]) &&
                  (u = r ? P(o, d) : p[l]) > -1 &&
                  (o[u] = !(s[u] = d));
            }
          } else (m = Ie(m === s ? m.splice(h, m.length) : m)), r ? r(null, s, m, c) : R.apply(s, m);
        })
      );
    }
    function be(e) {
      for (
        var t,
          n,
          r,
          o = e.length,
          s = i.relative[e[0].type],
          a = s || i.relative[" "],
          c = s ? 1 : 0,
          l = me(
            function (e) {
              return e === t;
            },
            a,
            !0
          ),
          d = me(
            function (e) {
              return P(t, e) > -1;
            },
            a,
            !0
          ),
          p = [
            function (e, n, i) {
              var r =
                (!s && (i || n !== u)) ||
                ((t = n).nodeType ? l(e, n, i) : d(e, n, i));
              return (t = null), r;
            },
          ];
        o > c;
        c++
      )
        if ((n = i.relative[e[c].type])) p = [me(ye(p), n)];
        else {
          if ((n = i.filter[e[c].type].apply(null, e[c].matches))[C]) {
            for (r = ++c; o > r && !i.relative[e[r].type]; r++);
            return Ce(
              c > 1 && ye(p),
              c > 1 &&
                ve(
                  e
                    .slice(0, c - 1)
                    .concat({ value: " " === e[c - 2].type ? "*" : "" })
                ).replace(W, "$1"),
              n,
              r > c && be(e.slice(c, r)),
              o > r && be((e = e.slice(r))),
              o > r && ve(e)
            );
          }
          p.push(n);
        }
      return ye(p);
    }
    function Te(e, t) {
      var n = t.length > 0,
        r = e.length > 0,
        o = function (o, s, a, c, l) {
          var d,
            h,
            v,
            m = 0,
            y = "0",
            I = o && [],
            C = [],
            b = u,
            w = o || (r && i.find.TAG("*", l)),
            S = (T += null == b ? 1 : Math.random() || 0.1),
            x = w.length;
          for (
            l && (u = s === f || s || l);
            y !== x && null != (d = w[y]);
            y++
          ) {
            if (r && d) {
              for (
                h = 0, s || d.ownerDocument === f || (p(d), (a = !g));
                (v = e[h++]);

              )
                if (v(d, s || f, a)) {
                  c.push(d);
                  break;
                }
              l && (T = S);
            }
            n && ((d = !v && d) && m--, o && I.push(d));
          }
          if (((m += y), n && y !== m)) {
            for (h = 0; (v = t[h++]); ) v(I, C, s, a);
            if (o) {
              if (m > 0) for (; y--; ) I[y] || C[y] || (C[y] = M.call(c));
              C = Ie(C);
            }
            R.apply(c, C),
              l && !o && C.length > 0 && m + t.length > 1 && oe.uniqueSort(c);
          }
          return l && ((T = S), (u = b)), I;
        };
      return n ? ae(o) : o;
    }
    return (
      (ge.prototype = i.filters = i.pseudos),
      (i.setFilters = new ge()),
      (s = oe.tokenize =
        function (e, t) {
          var n,
            r,
            o,
            s,
            a,
            c,
            u,
            l = x[e + " "];
          if (l) return t ? 0 : l.slice(0);
          for (a = e, c = [], u = i.preFilter; a; ) {
            for (s in ((!n || (r = V.exec(a))) &&
              (r && (a = a.slice(r[0].length) || a), c.push((o = []))),
            (n = !1),
            (r = H.exec(a)) &&
              ((n = r.shift()),
              o.push({ value: n, type: r[0].replace(W, " ") }),
              (a = a.slice(n.length))),
            i.filter))
              !(r = $[s].exec(a)) ||
                (u[s] && !(r = u[s](r))) ||
                ((n = r.shift()),
                o.push({ value: n, type: s, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? oe.error(e) : x(e, c).slice(0);
        }),
      (a = oe.compile =
        function (e, t) {
          var n,
            i = [],
            r = [],
            o = _[e + " "];
          if (!o) {
            for (t || (t = s(e)), n = t.length; n--; )
              (o = be(t[n]))[C] ? i.push(o) : r.push(o);
            (o = _(e, Te(r, i))).selector = e;
          }
          return o;
        }),
      (c = oe.select =
        function (e, t, r, o) {
          var c,
            u,
            l,
            d,
            p,
            f = "function" == typeof e && e,
            h = !o && s((e = f.selector || e));
          if (((r = r || []), 1 === h.length)) {
            if (
              (u = h[0] = h[0].slice(0)).length > 2 &&
              "ID" === (l = u[0]).type &&
              n.getById &&
              9 === t.nodeType &&
              g &&
              i.relative[u[1].type]
            ) {
              if (!(t = (i.find.ID(l.matches[0].replace(te, ie), t) || [])[0]))
                return r;
              f && (t = t.parentNode), (e = e.slice(u.shift().value.length));
            }
            for (
              c = $.needsContext.test(e) ? 0 : u.length;
              c-- && !i.relative[(d = (l = u[c]).type)];

            )
              if (
                (p = i.find[d]) &&
                (o = p(
                  l.matches[0].replace(te, ie),
                  (Z.test(u[0].type) && he(t.parentNode)) || t
                ))
              ) {
                if ((u.splice(c, 1), !(e = o.length && ve(u))))
                  return R.apply(r, o), r;
                break;
              }
          }
          return (
            (f || a(e, h))(
              o,
              t,
              !g,
              r,
              !t || (Z.test(e) && he(t.parentNode)) || t
            ),
            r
          );
        }),
      (n.sortStable = C.split("").sort(k).join("") === C),
      (n.detectDuplicates = !!d),
      p(),
      (n.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(f.createElement("div"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        ue("type|href|height|width", function (e, t, n) {
          return n
            ? void 0
            : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        ue("value", function (e, t, n) {
          return n || "input" !== e.nodeName.toLowerCase()
            ? void 0
            : e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        ue(O, function (e, t, n) {
          var i;
          return n
            ? void 0
            : !0 === e[t]
            ? t.toLowerCase()
            : (i = e.getAttributeNode(t)) && i.specified
            ? i.value
            : null;
        }),
      oe
    );
  })(e);
  (f.find = I),
    (f.expr = I.selectors),
    (f.expr[":"] = f.expr.pseudos),
    (f.uniqueSort = f.unique = I.uniqueSort),
    (f.text = I.getText),
    (f.isXMLDoc = I.isXML),
    (f.contains = I.contains);
  var C = function (e, t, n) {
      for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (r && f(e).is(n)) break;
          i.push(e);
        }
      return i;
    },
    b = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    T = f.expr.match.needsContext,
    w = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    S = /^.[^:#\[\.,]*$/;
  function x(e, t, n) {
    if (f.isFunction(t))
      return f.grep(e, function (e, i) {
        return !!t.call(e, i, e) !== n;
      });
    if (t.nodeType)
      return f.grep(e, function (e) {
        return (e === t) !== n;
      });
    if ("string" == typeof t) {
      if (S.test(t)) return f.filter(t, e, n);
      t = f.filter(t, e);
    }
    return f.grep(e, function (e) {
      return f.inArray(e, t) > -1 !== n;
    });
  }
  (f.filter = function (e, t, n) {
    var i = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === i.nodeType
        ? f.find.matchesSelector(i, e)
          ? [i]
          : []
        : f.find.matches(
            e,
            f.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    f.fn.extend({
      find: function (e) {
        var t,
          n = [],
          i = this,
          r = i.length;
        if ("string" != typeof e)
          return this.pushStack(
            f(e).filter(function () {
              for (t = 0; r > t; t++) if (f.contains(i[t], this)) return !0;
            })
          );
        for (t = 0; r > t; t++) f.find(e, i[t], n);
        return (
          ((n = this.pushStack(r > 1 ? f.unique(n) : n)).selector = this
            .selector
            ? this.selector + " " + e
            : e),
          n
        );
      },
      filter: function (e) {
        return this.pushStack(x(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(x(this, e || [], !0));
      },
      is: function (e) {
        return !!x(this, "string" == typeof e && T.test(e) ? f(e) : e || [], !1)
          .length;
      },
    });
  var _,
    k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  ((f.fn.init = function (e, t, n) {
    var r, o;
    if (!e) return this;
    if (((n = n || _), "string" == typeof e)) {
      if (
        !(r =
          "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3
            ? [null, e, null]
            : k.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          (f.merge(
            this,
            f.parseHTML(
              r[1],
              (t = t instanceof f ? t[0] : t) && t.nodeType
                ? t.ownerDocument || t
                : i,
              !0
            )
          ),
          w.test(r[1]) && f.isPlainObject(t))
        )
          for (r in t)
            f.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      if ((o = i.getElementById(r[2])) && o.parentNode) {
        if (o.id !== r[2]) return _.find(e);
        (this.length = 1), (this[0] = o);
      }
      return (this.context = i), (this.selector = e), this;
    }
    return e.nodeType
      ? ((this.context = this[0] = e), (this.length = 1), this)
      : f.isFunction(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(f)
      : (void 0 !== e.selector &&
          ((this.selector = e.selector), (this.context = e.context)),
        f.makeArray(e, this));
  }).prototype = f.fn),
    (_ = f(i));
  var E = /^(?:parents|prev(?:Until|All))/,
    A = { children: !0, contents: !0, next: !0, prev: !0 };
  function D(e, t) {
    do {
      e = e[t];
    } while (e && 1 !== e.nodeType);
    return e;
  }
  f.fn.extend({
    has: function (e) {
      var t,
        n = f(e, this),
        i = n.length;
      return this.filter(function () {
        for (t = 0; i > t; t++) if (f.contains(this, n[t])) return !0;
      });
    },
    closest: function (e, t) {
      for (
        var n,
          i = 0,
          r = this.length,
          o = [],
          s = T.test(e) || "string" != typeof e ? f(e, t || this.context) : 0;
        r > i;
        i++
      )
        for (n = this[i]; n && n !== t; n = n.parentNode)
          if (
            n.nodeType < 11 &&
            (s
              ? s.index(n) > -1
              : 1 === n.nodeType && f.find.matchesSelector(n, e))
          ) {
            o.push(n);
            break;
          }
      return this.pushStack(o.length > 1 ? f.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? f.inArray(this[0], f(e))
          : f.inArray(e.jquery ? e[0] : e, this)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(f.uniqueSort(f.merge(this.get(), f(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    f.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return C(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return C(e, "parentNode", n);
        },
        next: function (e) {
          return D(e, "nextSibling");
        },
        prev: function (e) {
          return D(e, "previousSibling");
        },
        nextAll: function (e) {
          return C(e, "nextSibling");
        },
        prevAll: function (e) {
          return C(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return C(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return C(e, "previousSibling", n);
        },
        siblings: function (e) {
          return b((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return b(e.firstChild);
        },
        contents: function (e) {
          return f.nodeName(e, "iframe")
            ? e.contentDocument || e.contentWindow.document
            : f.merge([], e.childNodes);
        },
      },
      function (e, t) {
        f.fn[e] = function (n, i) {
          var r = f.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (r = f.filter(i, r)),
            this.length > 1 &&
              (A[e] || (r = f.uniqueSort(r)), E.test(e) && (r = r.reverse())),
            this.pushStack(r)
          );
        };
      }
    );
  var M,
    N,
    R = /\S+/g;
  function F() {
    i.addEventListener
      ? (i.removeEventListener("DOMContentLoaded", P),
        e.removeEventListener("load", P))
      : (i.detachEvent("onreadystatechange", P), e.detachEvent("onload", P));
  }
  function P() {
    (i.addEventListener ||
      "load" === e.event.type ||
      "complete" === i.readyState) &&
      (F(), f.ready());
  }
  for (N in ((f.Callbacks = function (e) {
    e =
      "string" == typeof e
        ? (function (e) {
            var t = {};
            return (
              f.each(e.match(R) || [], function (e, n) {
                t[n] = !0;
              }),
              t
            );
          })(e)
        : f.extend({}, e);
    var t,
      n,
      i,
      r,
      o = [],
      s = [],
      a = -1,
      c = function () {
        for (r = e.once, i = t = !0; s.length; a = -1)
          for (n = s.shift(); ++a < o.length; )
            !1 === o[a].apply(n[0], n[1]) &&
              e.stopOnFalse &&
              ((a = o.length), (n = !1));
        e.memory || (n = !1), (t = !1), r && (o = n ? [] : "");
      },
      u = {
        add: function () {
          return (
            o &&
              (n && !t && ((a = o.length - 1), s.push(n)),
              (function t(n) {
                f.each(n, function (n, i) {
                  f.isFunction(i)
                    ? (e.unique && u.has(i)) || o.push(i)
                    : i && i.length && "string" !== f.type(i) && t(i);
                });
              })(arguments),
              n && !t && c()),
            this
          );
        },
        remove: function () {
          return (
            f.each(arguments, function (e, t) {
              for (var n; (n = f.inArray(t, o, n)) > -1; )
                o.splice(n, 1), a >= n && a--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? f.inArray(e, o) > -1 : o.length > 0;
        },
        empty: function () {
          return o && (o = []), this;
        },
        disable: function () {
          return (r = s = []), (o = n = ""), this;
        },
        disabled: function () {
          return !o;
        },
        lock: function () {
          return (r = !0), n || u.disable(), this;
        },
        locked: function () {
          return !!r;
        },
        fireWith: function (e, n) {
          return (
            r ||
              ((n = [e, (n = n || []).slice ? n.slice() : n]),
              s.push(n),
              t || c()),
            this
          );
        },
        fire: function () {
          return u.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!i;
        },
      };
    return u;
  }),
  f.extend({
    Deferred: function (e) {
      var t = [
          ["resolve", "done", f.Callbacks("once memory"), "resolved"],
          ["reject", "fail", f.Callbacks("once memory"), "rejected"],
          ["notify", "progress", f.Callbacks("memory")],
        ],
        n = "pending",
        i = {
          state: function () {
            return n;
          },
          always: function () {
            return r.done(arguments).fail(arguments), this;
          },
          then: function () {
            var e = arguments;
            return f
              .Deferred(function (n) {
                f.each(t, function (t, o) {
                  var s = f.isFunction(e[t]) && e[t];
                  r[o[1]](function () {
                    var e = s && s.apply(this, arguments);
                    e && f.isFunction(e.promise)
                      ? e
                          .promise()
                          .progress(n.notify)
                          .done(n.resolve)
                          .fail(n.reject)
                      : n[o[0] + "With"](
                          this === i ? n.promise() : this,
                          s ? [e] : arguments
                        );
                  });
                }),
                  (e = null);
              })
              .promise();
          },
          promise: function (e) {
            return null != e ? f.extend(e, i) : i;
          },
        },
        r = {};
      return (
        (i.pipe = i.then),
        f.each(t, function (e, o) {
          var s = o[2],
            a = o[3];
          (i[o[1]] = s.add),
            a &&
              s.add(
                function () {
                  n = a;
                },
                t[1 ^ e][2].disable,
                t[2][2].lock
              ),
            (r[o[0]] = function () {
              return r[o[0] + "With"](this === r ? i : this, arguments), this;
            }),
            (r[o[0] + "With"] = s.fireWith);
        }),
        i.promise(r),
        e && e.call(r, r),
        r
      );
    },
    when: function (e) {
      var t,
        n,
        i,
        o = 0,
        s = r.call(arguments),
        a = s.length,
        c = 1 !== a || (e && f.isFunction(e.promise)) ? a : 0,
        u = 1 === c ? e : f.Deferred(),
        l = function (e, n, i) {
          return function (o) {
            (n[e] = this),
              (i[e] = arguments.length > 1 ? r.call(arguments) : o),
              i === t ? u.notifyWith(n, i) : --c || u.resolveWith(n, i);
          };
        };
      if (a > 1)
        for (t = new Array(a), n = new Array(a), i = new Array(a); a > o; o++)
          s[o] && f.isFunction(s[o].promise)
            ? s[o]
                .promise()
                .progress(l(o, n, t))
                .done(l(o, i, s))
                .fail(u.reject)
            : --c;
      return c || u.resolveWith(i, s), u.promise();
    },
  }),
  (f.fn.ready = function (e) {
    return f.ready.promise().done(e), this;
  }),
  f.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function (e) {
      e ? f.readyWait++ : f.ready(!0);
    },
    ready: function (e) {
      (!0 === e ? --f.readyWait : f.isReady) ||
        ((f.isReady = !0),
        (!0 !== e && --f.readyWait > 0) ||
          (M.resolveWith(i, [f]),
          f.fn.triggerHandler &&
            (f(i).triggerHandler("ready"), f(i).off("ready"))));
    },
  }),
  (f.ready.promise = function (t) {
    if (!M)
      if (((M = f.Deferred()), "complete" === i.readyState))
        e.setTimeout(f.ready);
      else if (i.addEventListener)
        i.addEventListener("DOMContentLoaded", P),
          e.addEventListener("load", P);
      else {
        i.attachEvent("onreadystatechange", P), e.attachEvent("onload", P);
        var n = !1;
        try {
          n = null == e.frameElement && i.documentElement;
        } catch (r) {}
        n &&
          n.doScroll &&
          (function i() {
            if (!f.isReady) {
              try {
                n.doScroll("left");
              } catch (t) {
                return e.setTimeout(i, 50);
              }
              F(), f.ready();
            }
          })();
      }
    return M.promise(t);
  }),
  f.ready.promise(),
  f(d)))
    break;
  (d.ownFirst = "0" === N),
    (d.inlineBlockNeedsLayout = !1),
    f(function () {
      var e, t, n, r;
      (n = i.getElementsByTagName("body")[0]) &&
        n.style &&
        ((t = i.createElement("div")),
        ((r = i.createElement("div")).style.cssText =
          "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
        n.appendChild(r).appendChild(t),
        void 0 !== t.style.zoom &&
          ((t.style.cssText =
            "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
          (d.inlineBlockNeedsLayout = e = 3 === t.offsetWidth),
          e && (n.style.zoom = 1)),
        n.removeChild(r));
    }),
    (function () {
      var e = i.createElement("div");
      d.deleteExpando = !0;
      try {
        delete e.test;
      } catch (t) {
        d.deleteExpando = !1;
      }
      e = null;
    })();
  var O = function (e) {
      var t = f.noData[(e.nodeName + " ").toLowerCase()],
        n = +e.nodeType || 1;
      return (
        (1 === n || 9 === n) &&
        (!t || (!0 !== t && e.getAttribute("classid") === t))
      );
    },
    L = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    U = /([A-Z])/g;
  function j(e, t, n) {
    if (void 0 === n && 1 === e.nodeType) {
      var i = "data-" + t.replace(U, "-$1").toLowerCase();
      if ("string" == typeof (n = e.getAttribute(i))) {
        try {
          n =
            "true" === n ||
            ("false" !== n &&
              ("null" === n
                ? null
                : +n + "" === n
                ? +n
                : L.test(n)
                ? f.parseJSON(n)
                : n));
        } catch (r) {}
        f.data(e, t, n);
      } else n = void 0;
    }
    return n;
  }
  function q(e) {
    var t;
    for (t in e)
      if (("data" !== t || !f.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    return !0;
  }
  function B(e, t, i, r) {
    if (O(e)) {
      var o,
        s,
        a = f.expando,
        c = e.nodeType,
        u = c ? f.cache : e,
        l = c ? e[a] : e[a] && a;
      if (
        (l && u[l] && (r || u[l].data)) ||
        void 0 !== i ||
        "string" != typeof t
      )
        return (
          l || (l = c ? (e[a] = n.pop() || f.guid++) : a),
          u[l] || (u[l] = c ? {} : { toJSON: f.noop }),
          ("object" == typeof t || "function" == typeof t) &&
            (r
              ? (u[l] = f.extend(u[l], t))
              : (u[l].data = f.extend(u[l].data, t))),
          (s = u[l]),
          r || (s.data || (s.data = {}), (s = s.data)),
          void 0 !== i && (s[f.camelCase(t)] = i),
          "string" == typeof t
            ? null == (o = s[t]) && (o = s[f.camelCase(t)])
            : (o = s),
          o
        );
    }
  }
  function W(e, t, n) {
    if (O(e)) {
      var i,
        r,
        o = e.nodeType,
        s = o ? f.cache : e,
        a = o ? e[f.expando] : f.expando;
      if (s[a]) {
        if (t && (i = n ? s[a] : s[a].data)) {
          r = (t = f.isArray(t)
            ? t.concat(f.map(t, f.camelCase))
            : t in i || (t = f.camelCase(t)) in i
            ? [t]
            : t.split(" ")).length;
          for (; r--; ) delete i[t[r]];
          if (n ? !q(i) : !f.isEmptyObject(i)) return;
        }
        (n || (delete s[a].data, q(s[a]))) &&
          (o
            ? f.cleanData([e], !0)
            : d.deleteExpando || s != s.window
            ? delete s[a]
            : (s[a] = void 0));
      }
    }
  }
  f.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
    },
    hasData: function (e) {
      return !!(e = e.nodeType ? f.cache[e[f.expando]] : e[f.expando]) && !q(e);
    },
    data: function (e, t, n) {
      return B(e, t, n);
    },
    removeData: function (e, t) {
      return W(e, t);
    },
    _data: function (e, t, n) {
      return B(e, t, n, !0);
    },
    _removeData: function (e, t) {
      return W(e, t, !0);
    },
  }),
    f.fn.extend({
      data: function (e, t) {
        var n,
          i,
          r,
          o = this[0],
          s = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((r = f.data(o)), 1 === o.nodeType && !f._data(o, "parsedAttrs"))
          ) {
            for (n = s.length; n--; )
              s[n] &&
                0 === (i = s[n].name).indexOf("data-") &&
                j(o, (i = f.camelCase(i.slice(5))), r[i]);
            f._data(o, "parsedAttrs", !0);
          }
          return r;
        }
        return "object" == typeof e
          ? this.each(function () {
              f.data(this, e);
            })
          : arguments.length > 1
          ? this.each(function () {
              f.data(this, e, t);
            })
          : o
          ? j(o, e, f.data(o, e))
          : void 0;
      },
      removeData: function (e) {
        return this.each(function () {
          f.removeData(this, e);
        });
      },
    }),
    f.extend({
      queue: function (e, t, n) {
        var i;
        return e
          ? ((i = f._data(e, (t = (t || "fx") + "queue"))),
            n &&
              (!i || f.isArray(n)
                ? (i = f._data(e, t, f.makeArray(n)))
                : i.push(n)),
            i || [])
          : void 0;
      },
      dequeue: function (e, t) {
        var n = f.queue(e, (t = t || "fx")),
          i = n.length,
          r = n.shift(),
          o = f._queueHooks(e, t);
        "inprogress" === r && ((r = n.shift()), i--),
          r &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            r.call(
              e,
              function () {
                f.dequeue(e, t);
              },
              o
            )),
          !i && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          f._data(e, n) ||
          f._data(e, n, {
            empty: f.Callbacks("once memory").add(function () {
              f._removeData(e, t + "queue"), f._removeData(e, n);
            }),
          })
        );
      },
    }),
    f.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? f.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = f.queue(this, e, t);
                f._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && f.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          f.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          i = 1,
          r = f.Deferred(),
          o = this,
          s = this.length,
          a = function () {
            --i || r.resolveWith(o, [o]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          s--;

        )
          (n = f._data(o[s], e + "queueHooks")) &&
            n.empty &&
            (i++, n.empty.add(a));
        return a(), r.promise(t);
      },
    }),
    (function () {
      var e;
      d.shrinkWrapBlocks = function () {
        return null != e
          ? e
          : ((e = !1),
            (n = i.getElementsByTagName("body")[0]) && n.style
              ? ((t = i.createElement("div")),
                ((r = i.createElement("div")).style.cssText =
                  "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                n.appendChild(r).appendChild(t),
                void 0 !== t.style.zoom &&
                  ((t.style.cssText =
                    "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                  (t.appendChild(i.createElement("div")).style.width = "5px"),
                  (e = 3 !== t.offsetWidth)),
                n.removeChild(r),
                e)
              : void 0);
        var t, n, r;
      };
    })();
  var V = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    H = new RegExp("^(?:([+-])=|)(" + V + ")([a-z%]*)$", "i"),
    J = ["Top", "Right", "Bottom", "Left"],
    z = function (e, t) {
      return (
        "none" === f.css((e = t || e), "display") ||
        !f.contains(e.ownerDocument, e)
      );
    };
  function K(e, t, n, i) {
    var r,
      o = 1,
      s = 20,
      a = i
        ? function () {
            return i.cur();
          }
        : function () {
            return f.css(e, t, "");
          },
      c = a(),
      u = (n && n[3]) || (f.cssNumber[t] ? "" : "px"),
      l = (f.cssNumber[t] || ("px" !== u && +c)) && H.exec(f.css(e, t));
    if (l && l[3] !== u) {
      (u = u || l[3]), (n = n || []), (l = +c || 1);
      do {
        f.style(e, t, (l /= o = o || ".5") + u);
      } while (o !== (o = a() / c) && 1 !== o && --s);
    }
    return (
      n &&
        ((l = +l || +c || 0),
        (r = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = u), (i.start = l), (i.end = r))),
      r
    );
  }
  var $ = function (e, t, n, i, r, o, s) {
      var a = 0,
        c = e.length,
        u = null == n;
      if ("object" === f.type(n))
        for (a in ((r = !0), n)) $(e, t, a, n[a], !0, o, s);
      else if (
        void 0 !== i &&
        ((r = !0),
        f.isFunction(i) || (s = !0),
        u &&
          (s
            ? (t.call(e, i), (t = null))
            : ((u = t),
              (t = function (e, t, n) {
                return u.call(f(e), n);
              }))),
        t)
      )
        for (; c > a; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
      return r ? e : u ? t.call(e) : c ? t(e[0], n) : o;
    },
    G = /^(?:checkbox|radio)$/i,
    Q = /<([\w:-]+)/,
    X = /^$|\/(?:java|ecma)script/i,
    Y = /^\s+/,
    Z =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
  function ee(e) {
    var t = Z.split("|"),
      n = e.createDocumentFragment();
    if (n.createElement) for (; t.length; ) n.createElement(t.pop());
    return n;
  }
  !(function () {
    var e = i.createElement("div"),
      t = i.createDocumentFragment(),
      n = i.createElement("input");
    (e.innerHTML =
      "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
      (d.leadingWhitespace = 3 === e.firstChild.nodeType),
      (d.tbody = !e.getElementsByTagName("tbody").length),
      (d.htmlSerialize = !!e.getElementsByTagName("link").length),
      (d.html5Clone =
        "<:nav></:nav>" !== i.createElement("nav").cloneNode(!0).outerHTML),
      (n.type = "checkbox"),
      (n.checked = !0),
      t.appendChild(n),
      (d.appendChecked = n.checked),
      (e.innerHTML = "<textarea>x</textarea>"),
      (d.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue),
      t.appendChild(e),
      (n = i.createElement("input")).setAttribute("type", "radio"),
      n.setAttribute("checked", "checked"),
      n.setAttribute("name", "t"),
      e.appendChild(n),
      (d.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (d.noCloneEvent = !!e.addEventListener),
      (e[f.expando] = 1),
      (d.attributes = !e.getAttribute(f.expando));
  })();
  var te = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: d.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
  };
  function ne(e, t) {
    var n,
      i,
      r = 0,
      o =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : void 0;
    if (!o)
      for (o = [], n = e.childNodes || e; null != (i = n[r]); r++)
        !t || f.nodeName(i, t) ? o.push(i) : f.merge(o, ne(i, t));
    return void 0 === t || (t && f.nodeName(e, t)) ? f.merge([e], o) : o;
  }
  function ie(e, t) {
    for (var n, i = 0; null != (n = e[i]); i++)
      f._data(n, "globalEval", !t || f._data(t[i], "globalEval"));
  }
  (te.optgroup = te.option),
    (te.tbody = te.tfoot = te.colgroup = te.caption = te.thead),
    (te.th = te.td);
  var re = /<|&#?\w+;/,
    oe = /<tbody/i;
  function se(e) {
    G.test(e.type) && (e.defaultChecked = e.checked);
  }
  function ae(e, t, n, i, r) {
    for (
      var o, s, a, c, u, l, p, h = e.length, g = ee(t), v = [], m = 0;
      h > m;
      m++
    )
      if ((s = e[m]) || 0 === s)
        if ("object" === f.type(s)) f.merge(v, s.nodeType ? [s] : s);
        else if (re.test(s)) {
          for (
            c = c || g.appendChild(t.createElement("div")),
              u = (Q.exec(s) || ["", ""])[1].toLowerCase(),
              c.innerHTML =
                (p = te[u] || te._default)[1] + f.htmlPrefilter(s) + p[2],
              o = p[0];
            o--;

          )
            c = c.lastChild;
          if (
            (!d.leadingWhitespace &&
              Y.test(s) &&
              v.push(t.createTextNode(Y.exec(s)[0])),
            !d.tbody)
          )
            for (
              o =
                (s =
                  "table" !== u || oe.test(s)
                    ? "<table>" !== p[1] || oe.test(s)
                      ? 0
                      : c
                    : c.firstChild) && s.childNodes.length;
              o--;

            )
              f.nodeName((l = s.childNodes[o]), "tbody") &&
                !l.childNodes.length &&
                s.removeChild(l);
          for (f.merge(v, c.childNodes), c.textContent = ""; c.firstChild; )
            c.removeChild(c.firstChild);
          c = g.lastChild;
        } else v.push(t.createTextNode(s));
    for (
      c && g.removeChild(c),
        d.appendChecked || f.grep(ne(v, "input"), se),
        m = 0;
      (s = v[m++]);

    )
      if (i && f.inArray(s, i) > -1) r && r.push(s);
      else if (
        ((a = f.contains(s.ownerDocument, s)),
        (c = ne(g.appendChild(s), "script")),
        a && ie(c),
        n)
      )
        for (o = 0; (s = c[o++]); ) X.test(s.type || "") && n.push(s);
    return (c = null), g;
  }
  !(function () {
    var t,
      n,
      r = i.createElement("div");
    for (t in { submit: !0, change: !0, focusin: !0 })
      (d[t] = (n = "on" + t) in e) ||
        (r.setAttribute(n, "t"), (d[t] = !1 === r.attributes[n].expando));
    r = null;
  })();
  var ce = /^(?:input|select|textarea)$/i,
    ue = /^key/,
    le = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    de = /^(?:focusinfocus|focusoutblur)$/,
    pe = /^([^.]*)(?:\.(.+)|)/;
  function fe() {
    return !0;
  }
  function he() {
    return !1;
  }
  function ge() {
    try {
      return i.activeElement;
    } catch (e) {}
  }
  function ve(e, t, n, i, r, o) {
    var s, a;
    if ("object" == typeof t) {
      for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
        ve(e, a, n, i, t[a], o);
      return e;
    }
    if (
      (null == i && null == r
        ? ((r = n), (i = n = void 0))
        : null == r &&
          ("string" == typeof n
            ? ((r = i), (i = void 0))
            : ((r = i), (i = n), (n = void 0))),
      !1 === r)
    )
      r = he;
    else if (!r) return e;
    return (
      1 === o &&
        ((s = r),
        ((r = function (e) {
          return f().off(e), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = f.guid++))),
      e.each(function () {
        f.event.add(this, t, r, i, n);
      })
    );
  }
  (f.event = {
    global: {},
    add: function (e, t, n, i, r) {
      var o,
        s,
        a,
        c,
        u,
        l,
        d,
        p,
        h,
        g,
        v,
        m = f._data(e);
      if (m) {
        for (
          n.handler && ((n = (c = n).handler), (r = c.selector)),
            n.guid || (n.guid = f.guid++),
            (s = m.events) || (s = m.events = {}),
            (l = m.handle) ||
              ((l = m.handle =
                function (e) {
                  return void 0 === f || (e && f.event.triggered === e.type)
                    ? void 0
                    : f.event.dispatch.apply(l.elem, arguments);
                }).elem = e),
            a = (t = (t || "").match(R) || [""]).length;
          a--;

        )
          (h = v = (o = pe.exec(t[a]) || [])[1]),
            (g = (o[2] || "").split(".").sort()),
            h &&
              ((u = f.event.special[h] || {}),
              (u =
                f.event.special[(h = (r ? u.delegateType : u.bindType) || h)] ||
                {}),
              (d = f.extend(
                {
                  type: h,
                  origType: v,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: r,
                  needsContext: r && f.expr.match.needsContext.test(r),
                  namespace: g.join("."),
                },
                c
              )),
              (p = s[h]) ||
                (((p = s[h] = []).delegateCount = 0),
                (u.setup && !1 !== u.setup.call(e, i, g, l)) ||
                  (e.addEventListener
                    ? e.addEventListener(h, l, !1)
                    : e.attachEvent && e.attachEvent("on" + h, l))),
              u.add &&
                (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)),
              r ? p.splice(p.delegateCount++, 0, d) : p.push(d),
              (f.event.global[h] = !0));
        e = null;
      }
    },
    remove: function (e, t, n, i, r) {
      var o,
        s,
        a,
        c,
        u,
        l,
        d,
        p,
        h,
        g,
        v,
        m = f.hasData(e) && f._data(e);
      if (m && (l = m.events)) {
        for (u = (t = (t || "").match(R) || [""]).length; u--; )
          if (
            ((h = v = (a = pe.exec(t[u]) || [])[1]),
            (g = (a[2] || "").split(".").sort()),
            h)
          ) {
            for (
              d = f.event.special[h] || {},
                p = l[(h = (i ? d.delegateType : d.bindType) || h)] || [],
                a =
                  a[2] &&
                  new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                c = o = p.length;
              o--;

            )
              (s = p[o]),
                (!r && v !== s.origType) ||
                  (n && n.guid !== s.guid) ||
                  (a && !a.test(s.namespace)) ||
                  (i && i !== s.selector && ("**" !== i || !s.selector)) ||
                  (p.splice(o, 1),
                  s.selector && p.delegateCount--,
                  d.remove && d.remove.call(e, s));
            c &&
              !p.length &&
              ((d.teardown && !1 !== d.teardown.call(e, g, m.handle)) ||
                f.removeEvent(e, h, m.handle),
              delete l[h]);
          } else for (h in l) f.event.remove(e, h + t[u], n, i, !0);
        f.isEmptyObject(l) && (delete m.handle, f._removeData(e, "events"));
      }
    },
    trigger: function (t, n, r, o) {
      var s,
        a,
        c,
        u,
        d,
        p,
        h,
        g = [r || i],
        v = l.call(t, "type") ? t.type : t,
        m = l.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((c = p = r = r || i),
        3 !== r.nodeType &&
          8 !== r.nodeType &&
          !de.test(v + f.event.triggered) &&
          (v.indexOf(".") > -1 &&
            ((m = v.split(".")), (v = m.shift()), m.sort()),
          (a = v.indexOf(":") < 0 && "on" + v),
          ((t = t[f.expando]
            ? t
            : new f.Event(v, "object" == typeof t && t)).isTrigger = o ? 2 : 3),
          (t.namespace = m.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = r),
          (n = null == n ? [t] : f.makeArray(n, [t])),
          (d = f.event.special[v] || {}),
          o || !d.trigger || !1 !== d.trigger.apply(r, n)))
      ) {
        if (!o && !d.noBubble && !f.isWindow(r)) {
          for (
            de.test((u = d.delegateType || v) + v) || (c = c.parentNode);
            c;
            c = c.parentNode
          )
            g.push(c), (p = c);
          p === (r.ownerDocument || i) &&
            g.push(p.defaultView || p.parentWindow || e);
        }
        for (h = 0; (c = g[h++]) && !t.isPropagationStopped(); )
          (t.type = h > 1 ? u : d.bindType || v),
            (s =
              (f._data(c, "events") || {})[t.type] && f._data(c, "handle")) &&
              s.apply(c, n),
            (s = a && c[a]) &&
              s.apply &&
              O(c) &&
              ((t.result = s.apply(c, n)),
              !1 === t.result && t.preventDefault());
        if (
          ((t.type = v),
          !o &&
            !t.isDefaultPrevented() &&
            (!d._default || !1 === d._default.apply(g.pop(), n)) &&
            O(r) &&
            a &&
            r[v] &&
            !f.isWindow(r))
        ) {
          (p = r[a]) && (r[a] = null), (f.event.triggered = v);
          try {
            r[v]();
          } catch (y) {}
          (f.event.triggered = void 0), p && (r[a] = p);
        }
        return t.result;
      }
    },
    dispatch: function (e) {
      e = f.event.fix(e);
      var t,
        n,
        i,
        o,
        s,
        a = [],
        c = r.call(arguments),
        u = (f._data(this, "events") || {})[e.type] || [],
        l = f.event.special[e.type] || {};
      if (
        ((c[0] = e),
        (e.delegateTarget = this),
        !l.preDispatch || !1 !== l.preDispatch.call(this, e))
      ) {
        for (
          a = f.event.handlers.call(this, e, u), t = 0;
          (o = a[t++]) && !e.isPropagationStopped();

        )
          for (
            e.currentTarget = o.elem, n = 0;
            (s = o.handlers[n++]) && !e.isImmediatePropagationStopped();

          )
            (!e.rnamespace || e.rnamespace.test(s.namespace)) &&
              ((e.handleObj = s),
              (e.data = s.data),
              void 0 !==
                (i = (
                  (f.event.special[s.origType] || {}).handle || s.handler
                ).apply(o.elem, c)) &&
                !1 === (e.result = i) &&
                (e.preventDefault(), e.stopPropagation()));
        return l.postDispatch && l.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        r,
        o,
        s = [],
        a = t.delegateCount,
        c = e.target;
      if (
        a &&
        c.nodeType &&
        ("click" !== e.type || isNaN(e.button) || e.button < 1)
      )
        for (; c != this; c = c.parentNode || this)
          if (1 === c.nodeType && (!0 !== c.disabled || "click" !== e.type)) {
            for (i = [], n = 0; a > n; n++)
              void 0 === i[(r = (o = t[n]).selector + " ")] &&
                (i[r] = o.needsContext
                  ? f(r, this).index(c) > -1
                  : f.find(r, this, null, [c]).length),
                i[r] && i.push(o);
            i.length && s.push({ elem: c, handlers: i });
          }
      return a < t.length && s.push({ elem: this, handlers: t.slice(a) }), s;
    },
    fix: function (e) {
      if (e[f.expando]) return e;
      var t,
        n,
        r,
        o = e.type,
        s = e,
        a = this.fixHooks[o];
      for (
        a ||
          (this.fixHooks[o] = a =
            le.test(o) ? this.mouseHooks : ue.test(o) ? this.keyHooks : {}),
          r = a.props ? this.props.concat(a.props) : this.props,
          e = new f.Event(s),
          t = r.length;
        t--;

      )
        e[(n = r[t])] = s[n];
      return (
        e.target || (e.target = s.srcElement || i),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        (e.metaKey = !!e.metaKey),
        a.filter ? a.filter(e, s) : e
      );
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (e, t) {
        return (
          null == e.which &&
            (e.which = null != t.charCode ? t.charCode : t.keyCode),
          e
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (e, t) {
        var n,
          r,
          o,
          s = t.button,
          a = t.fromElement;
        return (
          null == e.pageX &&
            null != t.clientX &&
            ((n = (r = e.target.ownerDocument || i).body),
            (e.pageX =
              t.clientX +
              (((o = r.documentElement) && o.scrollLeft) ||
                (n && n.scrollLeft) ||
                0) -
              ((o && o.clientLeft) || (n && n.clientLeft) || 0)),
            (e.pageY =
              t.clientY +
              ((o && o.scrollTop) || (n && n.scrollTop) || 0) -
              ((o && o.clientTop) || (n && n.clientTop) || 0))),
          !e.relatedTarget &&
            a &&
            (e.relatedTarget = a === e.target ? t.toElement : a),
          e.which ||
            void 0 === s ||
            (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
          e
        );
      },
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== ge() && this.focus)
            try {
              return this.focus(), !1;
            } catch (e) {}
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === ge() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return f.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (e) {
          return f.nodeName(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
    simulate: function (e, t, n) {
      var i = f.extend(new f.Event(), n, { type: e, isSimulated: !0 });
      f.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault();
    },
  }),
    (f.removeEvent = i.removeEventListener
      ? function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }
      : function (e, t, n) {
          var i = "on" + t;
          e.detachEvent &&
            (void 0 === e[i] && (e[i] = null), e.detachEvent(i, n));
        }),
    (f.Event = function (e, t) {
      return this instanceof f.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? fe
                  : he))
            : (this.type = e),
          t && f.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || f.now()),
          void (this[f.expando] = !0))
        : new f.Event(e, t);
    }),
    (f.Event.prototype = {
      constructor: f.Event,
      isDefaultPrevented: he,
      isPropagationStopped: he,
      isImmediatePropagationStopped: he,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = fe),
          e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = fe),
          e &&
            !this.isSimulated &&
            (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = fe),
          e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    f.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        f.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              i = this,
              r = e.relatedTarget,
              o = e.handleObj;
            return (
              (!r || (r !== i && !f.contains(i, r))) &&
                ((e.type = o.origType),
                (n = o.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    d.submit ||
      (f.event.special.submit = {
        setup: function () {
          return (
            !f.nodeName(this, "form") &&
            void f.event.add(
              this,
              "click._submit keypress._submit",
              function (e) {
                var t = e.target,
                  n =
                    f.nodeName(t, "input") || f.nodeName(t, "button")
                      ? f.prop(t, "form")
                      : void 0;
                n &&
                  !f._data(n, "submit") &&
                  (f.event.add(n, "submit._submit", function (e) {
                    e._submitBubble = !0;
                  }),
                  f._data(n, "submit", !0));
              }
            )
          );
        },
        postDispatch: function (e) {
          e._submitBubble &&
            (delete e._submitBubble,
            this.parentNode &&
              !e.isTrigger &&
              f.event.simulate("submit", this.parentNode, e));
        },
        teardown: function () {
          return (
            !f.nodeName(this, "form") && void f.event.remove(this, "._submit")
          );
        },
      }),
    d.change ||
      (f.event.special.change = {
        setup: function () {
          return ce.test(this.nodeName)
            ? (("checkbox" === this.type || "radio" === this.type) &&
                (f.event.add(this, "propertychange._change", function (e) {
                  "checked" === e.originalEvent.propertyName &&
                    (this._justChanged = !0);
                }),
                f.event.add(this, "click._change", function (e) {
                  this._justChanged && !e.isTrigger && (this._justChanged = !1),
                    f.event.simulate("change", this, e);
                })),
              !1)
            : void f.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                ce.test(t.nodeName) &&
                  !f._data(t, "change") &&
                  (f.event.add(t, "change._change", function (e) {
                    !this.parentNode ||
                      e.isSimulated ||
                      e.isTrigger ||
                      f.event.simulate("change", this.parentNode, e);
                  }),
                  f._data(t, "change", !0));
              });
        },
        handle: function (e) {
          var t = e.target;
          return this !== t ||
            e.isSimulated ||
            e.isTrigger ||
            ("radio" !== t.type && "checkbox" !== t.type)
            ? e.handleObj.handler.apply(this, arguments)
            : void 0;
        },
        teardown: function () {
          return f.event.remove(this, "._change"), !ce.test(this.nodeName);
        },
      }),
    d.focusin ||
      f.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          f.event.simulate(t, e.target, f.event.fix(e));
        };
        f.event.special[t] = {
          setup: function () {
            var i = this.ownerDocument || this,
              r = f._data(i, t);
            r || i.addEventListener(e, n, !0), f._data(i, t, (r || 0) + 1);
          },
          teardown: function () {
            var i = this.ownerDocument || this,
              r = f._data(i, t) - 1;
            r
              ? f._data(i, t, r)
              : (i.removeEventListener(e, n, !0), f._removeData(i, t));
          },
        };
      }),
    f.fn.extend({
      on: function (e, t, n, i) {
        return ve(this, e, t, n, i);
      },
      one: function (e, t, n, i) {
        return ve(this, e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, r;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            f(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (r in e) this.off(r, t, e[r]);
          return this;
        }
        return (
          (!1 === t || "function" == typeof t) && ((n = t), (t = void 0)),
          !1 === n && (n = he),
          this.each(function () {
            f.event.remove(this, e, n, t);
          })
        );
      },
      trigger: function (e, t) {
        return this.each(function () {
          f.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        return n ? f.event.trigger(e, t, n, !0) : void 0;
      },
    });
  var me = / jQuery\d+="(?:null|\d+)"/g,
    ye = new RegExp("<(?:" + Z + ")[\\s/>]", "i"),
    Ie =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    Ce = /<script|<style|<link/i,
    be = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Te = /^true\/(.*)/,
    we = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Se = ee(i).appendChild(i.createElement("div"));
  function xe(e, t) {
    return f.nodeName(e, "table") &&
      f.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
      ? e.getElementsByTagName("tbody")[0] ||
          e.appendChild(e.ownerDocument.createElement("tbody"))
      : e;
  }
  function _e(e) {
    return (e.type = (null !== f.find.attr(e, "type")) + "/" + e.type), e;
  }
  function ke(e) {
    var t = Te.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function Ee(e, t) {
    if (1 === t.nodeType && f.hasData(e)) {
      var n,
        i,
        r,
        o = f._data(e),
        s = f._data(t, o),
        a = o.events;
      if (a)
        for (n in (delete s.handle, (s.events = {}), a))
          for (i = 0, r = a[n].length; r > i; i++) f.event.add(t, n, a[n][i]);
      s.data && (s.data = f.extend({}, s.data));
    }
  }
  function Ae(e, t) {
    var n, i, r;
    if (1 === t.nodeType) {
      if (((n = t.nodeName.toLowerCase()), !d.noCloneEvent && t[f.expando])) {
        for (i in (r = f._data(t)).events) f.removeEvent(t, i, r.handle);
        t.removeAttribute(f.expando);
      }
      "script" === n && t.text !== e.text
        ? ((_e(t).text = e.text), ke(t))
        : "object" === n
        ? (t.parentNode && (t.outerHTML = e.outerHTML),
          d.html5Clone &&
            e.innerHTML &&
            !f.trim(t.innerHTML) &&
            (t.innerHTML = e.innerHTML))
        : "input" === n && G.test(e.type)
        ? ((t.defaultChecked = t.checked = e.checked),
          t.value !== e.value && (t.value = e.value))
        : "option" === n
        ? (t.defaultSelected = t.selected = e.defaultSelected)
        : ("input" === n || "textarea" === n) &&
          (t.defaultValue = e.defaultValue);
    }
  }
  function De(e, t, n, i) {
    t = o.apply([], t);
    var r,
      s,
      a,
      c,
      u,
      l,
      p = 0,
      h = e.length,
      g = h - 1,
      v = t[0],
      m = f.isFunction(v);
    if (m || (h > 1 && "string" == typeof v && !d.checkClone && be.test(v)))
      return e.each(function (r) {
        var o = e.eq(r);
        m && (t[0] = v.call(this, r, o.html())), De(o, t, n, i);
      });
    if (
      h &&
      ((r = (l = ae(t, e[0].ownerDocument, !1, e, i)).firstChild),
      1 === l.childNodes.length && (l = r),
      r || i)
    ) {
      for (a = (c = f.map(ne(l, "script"), _e)).length; h > p; p++)
        (s = l),
          p !== g &&
            ((s = f.clone(s, !0, !0)), a && f.merge(c, ne(s, "script"))),
          n.call(e[p], s, p);
      if (a)
        for (u = c[c.length - 1].ownerDocument, f.map(c, ke), p = 0; a > p; p++)
          X.test((s = c[p]).type || "") &&
            !f._data(s, "globalEval") &&
            f.contains(u, s) &&
            (s.src
              ? f._evalUrl && f._evalUrl(s.src)
              : f.globalEval(
                  (s.text || s.textContent || s.innerHTML || "").replace(we, "")
                ));
      l = r = null;
    }
    return e;
  }
  function Me(e, t, n) {
    for (var i, r = t ? f.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
      n || 1 !== i.nodeType || f.cleanData(ne(i)),
        i.parentNode &&
          (n && f.contains(i.ownerDocument, i) && ie(ne(i, "script")),
          i.parentNode.removeChild(i));
    return e;
  }
  f.extend({
    htmlPrefilter: function (e) {
      return e.replace(Ie, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var i,
        r,
        o,
        s,
        a,
        c = f.contains(e.ownerDocument, e);
      if (
        (d.html5Clone || f.isXMLDoc(e) || !ye.test("<" + e.nodeName + ">")
          ? (o = e.cloneNode(!0))
          : ((Se.innerHTML = e.outerHTML), Se.removeChild((o = Se.firstChild))),
        !(
          (d.noCloneEvent && d.noCloneChecked) ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          f.isXMLDoc(e)
        ))
      )
        for (i = ne(o), a = ne(e), s = 0; null != (r = a[s]); ++s)
          i[s] && Ae(r, i[s]);
      if (t)
        if (n)
          for (a = a || ne(e), i = i || ne(o), s = 0; null != (r = a[s]); s++)
            Ee(r, i[s]);
        else Ee(e, o);
      return (
        (i = ne(o, "script")).length > 0 && ie(i, !c && ne(e, "script")),
        (i = a = r = null),
        o
      );
    },
    cleanData: function (e, t) {
      for (
        var i,
          r,
          o,
          s,
          a = 0,
          c = f.expando,
          u = f.cache,
          l = d.attributes,
          p = f.event.special;
        null != (i = e[a]);
        a++
      )
        if ((t || O(i)) && (s = (o = i[c]) && u[o])) {
          if (s.events)
            for (r in s.events)
              p[r] ? f.event.remove(i, r) : f.removeEvent(i, r, s.handle);
          u[o] &&
            (delete u[o],
            l || void 0 === i.removeAttribute
              ? (i[c] = void 0)
              : i.removeAttribute(c),
            n.push(o));
        }
    },
  }),
    f.fn.extend({
      domManip: De,
      detach: function (e) {
        return Me(this, e, !0);
      },
      remove: function (e) {
        return Me(this, e);
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? f.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || i).createTextNode(e)
                );
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return De(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            xe(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return De(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = xe(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return De(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return De(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) {
          for (1 === e.nodeType && f.cleanData(ne(e, !1)); e.firstChild; )
            e.removeChild(e.firstChild);
          e.options && f.nodeName(e, "select") && (e.options.length = 0);
        }
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return f.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e)
              return 1 === t.nodeType ? t.innerHTML.replace(me, "") : void 0;
            if (
              "string" == typeof e &&
              !Ce.test(e) &&
              (d.htmlSerialize || !ye.test(e)) &&
              (d.leadingWhitespace || !Y.test(e)) &&
              !te[(Q.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = f.htmlPrefilter(e);
              try {
                for (; i > n; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (f.cleanData(ne(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (r) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return De(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            f.inArray(this, e) < 0 &&
              (f.cleanData(ne(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    f.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        f.fn[e] = function (e) {
          for (var n, i = 0, r = [], o = f(e), a = o.length - 1; a >= i; i++)
            (n = i === a ? this : this.clone(!0)),
              f(o[i])[t](n),
              s.apply(r, n.get());
          return this.pushStack(r);
        };
      }
    );
  var Ne,
    Re = { HTML: "block", BODY: "block" };
  function Fe(e, t) {
    var n = f(t.createElement(e)).appendTo(t.body),
      i = f.css(n[0], "display");
    return n.detach(), i;
  }
  function Pe(e) {
    var t = i,
      n = Re[e];
    return (
      n ||
        (("none" !== (n = Fe(e, t)) && n) ||
          ((t = (
            (Ne = (
              Ne || f("<iframe frameborder='0' width='0' height='0'/>")
            ).appendTo(t.documentElement))[0].contentWindow ||
            Ne[0].contentDocument
          ).document).write(),
          t.close(),
          (n = Fe(e, t)),
          Ne.detach()),
        (Re[e] = n)),
      n
    );
  }
  var Oe = /^margin/,
    Le = new RegExp("^(" + V + ")(?!px)[a-z%]+$", "i"),
    Ue = function (e, t, n, i) {
      var r,
        o,
        s = {};
      for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
      for (o in ((r = n.apply(e, i || [])), t)) e.style[o] = s[o];
      return r;
    },
    je = i.documentElement;
  !(function () {
    var t,
      n,
      r,
      o,
      s,
      a,
      c = i.createElement("div"),
      u = i.createElement("div");
    if (u.style) {
      function l() {
        var l,
          d,
          p = i.documentElement;
        p.appendChild(c),
          (u.style.cssText =
            "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (t = r = a = !1),
          (n = s = !0),
          e.getComputedStyle &&
            ((d = e.getComputedStyle(u)),
            (t = "1%" !== (d || {}).top),
            (a = "2px" === (d || {}).marginLeft),
            (r = "4px" === (d || { width: "4px" }).width),
            (u.style.marginRight = "50%"),
            (n = "4px" === (d || { marginRight: "4px" }).marginRight),
            ((l = u.appendChild(i.createElement("div"))).style.cssText =
              u.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
            (l.style.marginRight = l.style.width = "0"),
            (u.style.width = "1px"),
            (s = !parseFloat((e.getComputedStyle(l) || {}).marginRight)),
            u.removeChild(l)),
          (u.style.display = "none"),
          (o = 0 === u.getClientRects().length) &&
            ((u.style.display = ""),
            (u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
            ((l = u.getElementsByTagName("td"))[0].style.cssText =
              "margin:0;border:0;padding:0;display:none"),
            (o = 0 === l[0].offsetHeight) &&
              ((l[0].style.display = ""),
              (l[1].style.display = "none"),
              (o = 0 === l[0].offsetHeight))),
          p.removeChild(c);
      }
      (u.style.cssText = "float:left;opacity:.5"),
        (d.opacity = "0.5" === u.style.opacity),
        (d.cssFloat = !!u.style.cssFloat),
        (u.style.backgroundClip = "content-box"),
        (u.cloneNode(!0).style.backgroundClip = ""),
        (d.clearCloneStyle = "content-box" === u.style.backgroundClip),
        ((c = i.createElement("div")).style.cssText =
          "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
        (u.innerHTML = ""),
        c.appendChild(u),
        (d.boxSizing =
          "" === u.style.boxSizing ||
          "" === u.style.MozBoxSizing ||
          "" === u.style.WebkitBoxSizing),
        f.extend(d, {
          reliableHiddenOffsets: function () {
            return null == t && l(), o;
          },
          boxSizingReliable: function () {
            return null == t && l(), r;
          },
          pixelMarginRight: function () {
            return null == t && l(), n;
          },
          pixelPosition: function () {
            return null == t && l(), t;
          },
          reliableMarginRight: function () {
            return null == t && l(), s;
          },
          reliableMarginLeft: function () {
            return null == t && l(), a;
          },
        });
    }
  })();
  var qe,
    Be,
    We = /^(top|right|bottom|left)$/;
  function Ve(e, t) {
    return {
      get: function () {
        return e()
          ? void delete this.get
          : (this.get = t).apply(this, arguments);
      },
    };
  }
  e.getComputedStyle
    ? ((qe = function (t) {
        var n = t.ownerDocument.defaultView;
        return n.opener || (n = e), n.getComputedStyle(t);
      }),
      (Be = function (e, t, n) {
        var i,
          r,
          o,
          s,
          a = e.style;
        return (
          (s = (n = n || qe(e)) ? n.getPropertyValue(t) || n[t] : void 0),
          n &&
            ("" !== s || f.contains(e.ownerDocument, e) || (s = f.style(e, t)),
            !d.pixelMarginRight() &&
              Le.test(s) &&
              Oe.test(t) &&
              ((i = a.width),
              (r = a.minWidth),
              (o = a.maxWidth),
              (a.minWidth = a.maxWidth = a.width = s),
              (s = n.width),
              (a.width = i),
              (a.minWidth = r),
              (a.maxWidth = o))),
          void 0 === s ? s : s + ""
        );
      }))
    : je.currentStyle &&
      ((qe = function (e) {
        return e.currentStyle;
      }),
      (Be = function (e, t, n) {
        var i,
          r,
          o,
          s,
          a = e.style;
        return (
          null == (s = (n = n || qe(e)) ? n[t] : void 0) &&
            a &&
            a[t] &&
            (s = a[t]),
          Le.test(s) &&
            !We.test(t) &&
            ((i = a.left),
            (o = (r = e.runtimeStyle) && r.left) &&
              (r.left = e.currentStyle.left),
            (a.left = "fontSize" === t ? "1em" : s),
            (s = a.pixelLeft + "px"),
            (a.left = i),
            o && (r.left = o)),
          void 0 === s ? s : s + "" || "auto"
        );
      }));
  var He = /alpha\([^)]*\)/i,
    Je = /opacity\s*=\s*([^)]*)/i,
    ze = /^(none|table(?!-c[ea]).+)/,
    Ke = new RegExp("^(" + V + ")(.*)$", "i"),
    $e = { position: "absolute", visibility: "hidden", display: "block" },
    Ge = { letterSpacing: "0", fontWeight: "400" },
    Qe = ["Webkit", "O", "Moz", "ms"],
    Xe = i.createElement("div").style;
  function Ye(e) {
    if (e in Xe) return e;
    for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Qe.length; n--; )
      if ((e = Qe[n] + t) in Xe) return e;
  }
  function Ze(e, t) {
    for (var n, i, r, o = [], s = 0, a = e.length; a > s; s++)
      (i = e[s]).style &&
        ((o[s] = f._data(i, "olddisplay")),
        (n = i.style.display),
        t
          ? (o[s] || "none" !== n || (i.style.display = ""),
            "" === i.style.display &&
              z(i) &&
              (o[s] = f._data(i, "olddisplay", Pe(i.nodeName))))
          : ((r = z(i)),
            ((n && "none" !== n) || !r) &&
              f._data(i, "olddisplay", r ? n : f.css(i, "display"))));
    for (s = 0; a > s; s++)
      (i = e[s]).style &&
        ((t && "none" !== i.style.display && "" !== i.style.display) ||
          (i.style.display = t ? o[s] || "" : "none"));
    return e;
  }
  function et(e, t, n) {
    var i = Ke.exec(t);
    return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t;
  }
  function tt(e, t, n, i, r) {
    for (
      var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
        s = 0;
      4 > o;
      o += 2
    )
      "margin" === n && (s += f.css(e, n + J[o], !0, r)),
        i
          ? ("content" === n && (s -= f.css(e, "padding" + J[o], !0, r)),
            "margin" !== n && (s -= f.css(e, "border" + J[o] + "Width", !0, r)))
          : ((s += f.css(e, "padding" + J[o], !0, r)),
            "padding" !== n &&
              (s += f.css(e, "border" + J[o] + "Width", !0, r)));
    return s;
  }
  function nt(t, n, r) {
    var o = !0,
      s = "width" === n ? t.offsetWidth : t.offsetHeight,
      a = qe(t),
      c = d.boxSizing && "border-box" === f.css(t, "boxSizing", !1, a);
    if (
      (i.msFullscreenElement &&
        e.top !== e &&
        t.getClientRects().length &&
        (s = Math.round(100 * t.getBoundingClientRect()[n])),
      0 >= s || null == s)
    ) {
      if (
        ((0 > (s = Be(t, n, a)) || null == s) && (s = t.style[n]), Le.test(s))
      )
        return s;
      (o = c && (d.boxSizingReliable() || s === t.style[n])),
        (s = parseFloat(s) || 0);
    }
    return s + tt(t, n, r || (c ? "border" : "content"), o, a) + "px";
  }
  function it(e, t, n, i, r) {
    return new it.prototype.init(e, t, n, i, r);
  }
  f.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Be(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: d.cssFloat ? "cssFloat" : "styleFloat" },
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r,
          o,
          s,
          a = f.camelCase(t),
          c = e.style;
        if (
          ((t = f.cssProps[a] || (f.cssProps[a] = Ye(a) || a)),
          (s = f.cssHooks[t] || f.cssHooks[a]),
          void 0 === n)
        )
          return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];
        if (
          ("string" == (o = typeof n) &&
            (r = H.exec(n)) &&
            r[1] &&
            ((n = K(e, t, r)), (o = "number")),
          null != n &&
            n == n &&
            ("number" === o &&
              (n += (r && r[3]) || (f.cssNumber[a] ? "" : "px")),
            d.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (c[t] = "inherit"),
            !s || !("set" in s) || void 0 !== (n = s.set(e, n, i))))
        )
          try {
            c[t] = n;
          } catch (u) {}
      }
    },
    css: function (e, t, n, i) {
      var r,
        o,
        s,
        a = f.camelCase(t);
      return (
        (t = f.cssProps[a] || (f.cssProps[a] = Ye(a) || a)),
        (s = f.cssHooks[t] || f.cssHooks[a]) &&
          "get" in s &&
          (o = s.get(e, !0, n)),
        void 0 === o && (o = Be(e, t, i)),
        "normal" === o && t in Ge && (o = Ge[t]),
        "" === n || n
          ? ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o)
          : o
      );
    },
  }),
    f.each(["height", "width"], function (e, t) {
      f.cssHooks[t] = {
        get: function (e, n, i) {
          return n
            ? ze.test(f.css(e, "display")) && 0 === e.offsetWidth
              ? Ue(e, $e, function () {
                  return nt(e, t, i);
                })
              : nt(e, t, i)
            : void 0;
        },
        set: function (e, n, i) {
          var r = i && qe(e);
          return et(
            0,
            n,
            i
              ? tt(
                  e,
                  t,
                  i,
                  d.boxSizing && "border-box" === f.css(e, "boxSizing", !1, r),
                  r
                )
              : 0
          );
        },
      };
    }),
    d.opacity ||
      (f.cssHooks.opacity = {
        get: function (e, t) {
          return Je.test(
            (t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : t
            ? "1"
            : "";
        },
        set: function (e, t) {
          var n = e.style,
            i = e.currentStyle,
            r = f.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
            o = (i && i.filter) || n.filter || "";
          (n.zoom = 1),
            ((t >= 1 || "" === t) &&
              "" === f.trim(o.replace(He, "")) &&
              n.removeAttribute &&
              (n.removeAttribute("filter"), "" === t || (i && !i.filter))) ||
              (n.filter = He.test(o) ? o.replace(He, r) : o + " " + r);
        },
      }),
    (f.cssHooks.marginRight = Ve(d.reliableMarginRight, function (e, t) {
      return t
        ? Ue(e, { display: "inline-block" }, Be, [e, "marginRight"])
        : void 0;
    })),
    (f.cssHooks.marginLeft = Ve(d.reliableMarginLeft, function (e, t) {
      return t
        ? (parseFloat(Be(e, "marginLeft")) ||
            (f.contains(e.ownerDocument, e)
              ? e.getBoundingClientRect().left -
                Ue(e, { marginLeft: 0 }, function () {
                  return e.getBoundingClientRect().left;
                })
              : 0)) + "px"
        : void 0;
    })),
    f.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (f.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n];
            4 > i;
            i++
          )
            r[e + J[i] + t] = o[i] || o[i - 2] || o[0];
          return r;
        },
      }),
        Oe.test(e) || (f.cssHooks[e + t].set = et);
    }),
    f.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var i,
              r,
              o = {},
              s = 0;
            if (f.isArray(t)) {
              for (i = qe(e), r = t.length; r > s; s++)
                o[t[s]] = f.css(e, t[s], !1, i);
              return o;
            }
            return void 0 !== n ? f.style(e, t, n) : f.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
      show: function () {
        return Ze(this, !0);
      },
      hide: function () {
        return Ze(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              z(this) ? f(this).show() : f(this).hide();
            });
      },
    }),
    (f.Tween = it),
    ((it.prototype = {
      constructor: it,
      init: function (e, t, n, i, r, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = r || f.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = o || (f.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = it.propHooks[this.prop];
        return e && e.get ? e.get(this) : it.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = it.propHooks[this.prop];
        return (
          (this.pos = t =
            this.options.duration
              ? f.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                )
              : e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : it.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = it.prototype),
    ((it.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = f.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          f.fx.step[e.prop]
            ? f.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[f.cssProps[e.prop]] && !f.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : f.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = it.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (f.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (f.fx = it.prototype.init),
    (f.fx.step = {});
  var rt,
    ot,
    st = /^(?:toggle|show|hide)$/,
    at = /queueHooks$/;
  function ct() {
    return (
      e.setTimeout(function () {
        rt = void 0;
      }),
      (rt = f.now())
    );
  }
  function ut(e, t) {
    var n,
      i = { height: e },
      r = 0;
    for (t = t ? 1 : 0; 4 > r; r += 2 - t)
      i["margin" + (n = J[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function lt(e, t, n) {
    for (
      var i,
        r = (dt.tweeners[t] || []).concat(dt.tweeners["*"]),
        o = 0,
        s = r.length;
      s > o;
      o++
    )
      if ((i = r[o].call(n, t, e))) return i;
  }
  function dt(e, t, n) {
    var i,
      r,
      o = 0,
      s = dt.prefilters.length,
      a = f.Deferred().always(function () {
        delete c.elem;
      }),
      c = function () {
        if (r) return !1;
        for (
          var t = rt || ct(),
            n = Math.max(0, u.startTime + u.duration - t),
            i = 1 - (n / u.duration || 0),
            o = 0,
            s = u.tweens.length;
          s > o;
          o++
        )
          u.tweens[o].run(i);
        return (
          a.notifyWith(e, [u, i, n]),
          1 > i && s ? n : (a.resolveWith(e, [u]), !1)
        );
      },
      u = a.promise({
        elem: e,
        props: f.extend({}, t),
        opts: f.extend(!0, { specialEasing: {}, easing: f.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: rt || ct(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var i = f.Tween(
            e,
            u.opts,
            t,
            n,
            u.opts.specialEasing[t] || u.opts.easing
          );
          return u.tweens.push(i), i;
        },
        stop: function (t) {
          var n = 0,
            i = t ? u.tweens.length : 0;
          if (r) return this;
          for (r = !0; i > n; n++) u.tweens[n].run(1);
          return (
            t
              ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t]))
              : a.rejectWith(e, [u, t]),
            this
          );
        },
      }),
      l = u.props;
    for (
      (function (e, t) {
        var n, i, r, o, s;
        for (n in e)
          if (
            ((r = t[(i = f.camelCase(n))]),
            f.isArray((o = e[n])) && ((r = o[1]), (o = e[n] = o[0])),
            n !== i && ((e[i] = o), delete e[n]),
            (s = f.cssHooks[i]) && ("expand" in s))
          )
            for (n in ((o = s.expand(o)), delete e[i], o))
              (n in e) || ((e[n] = o[n]), (t[n] = r));
          else t[i] = r;
      })(l, u.opts.specialEasing);
      s > o;
      o++
    )
      if ((i = dt.prefilters[o].call(u, e, l, u.opts)))
        return (
          f.isFunction(i.stop) &&
            (f._queueHooks(u.elem, u.opts.queue).stop = f.proxy(i.stop, i)),
          i
        );
    return (
      f.map(l, lt, u),
      f.isFunction(u.opts.start) && u.opts.start.call(e, u),
      f.fx.timer(f.extend(c, { elem: e, anim: u, queue: u.opts.queue })),
      u
        .progress(u.opts.progress)
        .done(u.opts.done, u.opts.complete)
        .fail(u.opts.fail)
        .always(u.opts.always)
    );
  }
  (f.Animation = f.extend(dt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return K(n.elem, e, H.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      f.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(R));
      for (var n, i = 0, r = e.length; r > i; i++)
        (dt.tweeners[(n = e[i])] = dt.tweeners[n] || []).unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var i,
          r,
          o,
          s,
          a,
          c,
          u,
          l = this,
          p = {},
          h = e.style,
          g = e.nodeType && z(e),
          v = f._data(e, "fxshow");
        for (i in (n.queue ||
          (null == (a = f._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (c = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || c();
            })),
          a.unqueued++,
          l.always(function () {
            l.always(function () {
              a.unqueued--, f.queue(e, "fx").length || a.empty.fire();
            });
          })),
        1 === e.nodeType &&
          ("height" in t || "width" in t) &&
          ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
          "inline" ===
            ("none" === (u = f.css(e, "display"))
              ? f._data(e, "olddisplay") || Pe(e.nodeName)
              : u) &&
            "none" === f.css(e, "float") &&
            (d.inlineBlockNeedsLayout && "inline" !== Pe(e.nodeName)
              ? (h.zoom = 1)
              : (h.display = "inline-block"))),
        n.overflow &&
          ((h.overflow = "hidden"),
          d.shrinkWrapBlocks() ||
            l.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
        t))
          if (st.exec((r = t[i]))) {
            if (
              (delete t[i],
              (o = o || "toggle" === r),
              r === (g ? "hide" : "show"))
            ) {
              if ("show" !== r || !v || void 0 === v[i]) continue;
              g = !0;
            }
            p[i] = (v && v[i]) || f.style(e, i);
          } else u = void 0;
        if (f.isEmptyObject(p))
          "inline" === ("none" === u ? Pe(e.nodeName) : u) && (h.display = u);
        else
          for (i in (v
            ? "hidden" in v && (g = v.hidden)
            : (v = f._data(e, "fxshow", {})),
          o && (v.hidden = !g),
          g
            ? f(e).show()
            : l.done(function () {
                f(e).hide();
              }),
          l.done(function () {
            var t;
            for (t in (f._removeData(e, "fxshow"), p)) f.style(e, t, p[t]);
          }),
          p))
            (s = lt(g ? v[i] : 0, i, l)),
              i in v ||
                ((v[i] = s.start),
                g &&
                  ((s.end = s.start),
                  (s.start = "width" === i || "height" === i ? 1 : 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
    },
  })),
    (f.speed = function (e, t, n) {
      var i =
        e && "object" == typeof e
          ? f.extend({}, e)
          : {
              complete: n || (!n && t) || (f.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !f.isFunction(t) && t),
            };
      return (
        (i.duration = f.fx.off
          ? 0
          : "number" == typeof i.duration
          ? i.duration
          : i.duration in f.fx.speeds
          ? f.fx.speeds[i.duration]
          : f.fx.speeds._default),
        (null == i.queue || !0 === i.queue) && (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function () {
          f.isFunction(i.old) && i.old.call(this),
            i.queue && f.dequeue(this, i.queue);
        }),
        i
      );
    }),
    f.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(z)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i);
      },
      animate: function (e, t, n, i) {
        var r = f.isEmptyObject(e),
          o = f.speed(t, n, i),
          s = function () {
            var t = dt(this, f.extend({}, e), o);
            (r || f._data(this, "finish")) && t.stop(!0);
          };
        return (
          (s.finish = s),
          r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        );
      },
      stop: function (e, t, n) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              r = null != e && e + "queueHooks",
              o = f.timers,
              s = f._data(this);
            if (r) s[r] && s[r].stop && i(s[r]);
            else for (r in s) s[r] && s[r].stop && at.test(r) && i(s[r]);
            for (r = o.length; r--; )
              o[r].elem !== this ||
                (null != e && o[r].queue !== e) ||
                (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
            (t || !n) && f.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = f._data(this),
              i = n[e + "queue"],
              r = n[e + "queueHooks"],
              o = f.timers,
              s = i ? i.length : 0;
            for (
              n.finish = !0,
                f.queue(this, e, []),
                r && r.stop && r.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; s > t; t++)
              i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    f.each(["toggle", "show", "hide"], function (e, t) {
      var n = f.fn[t];
      f.fn[t] = function (e, i, r) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(ut(t, !0), e, i, r);
      };
    }),
    f.each(
      {
        slideDown: ut("show"),
        slideUp: ut("hide"),
        slideToggle: ut("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        f.fn[e] = function (e, n, i) {
          return this.animate(t, e, n, i);
        };
      }
    ),
    (f.timers = []),
    (f.fx.tick = function () {
      var e,
        t = f.timers,
        n = 0;
      for (rt = f.now(); n < t.length; n++)
        (e = t[n])() || t[n] !== e || t.splice(n--, 1);
      t.length || f.fx.stop(), (rt = void 0);
    }),
    (f.fx.timer = function (e) {
      f.timers.push(e), e() ? f.fx.start() : f.timers.pop();
    }),
    (f.fx.interval = 13),
    (f.fx.start = function () {
      ot || (ot = e.setInterval(f.fx.tick, f.fx.interval));
    }),
    (f.fx.stop = function () {
      e.clearInterval(ot), (ot = null);
    }),
    (f.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (f.fn.delay = function (t, n) {
      return (
        (t = (f.fx && f.fx.speeds[t]) || t),
        this.queue((n = n || "fx"), function (n, i) {
          var r = e.setTimeout(n, t);
          i.stop = function () {
            e.clearTimeout(r);
          };
        })
      );
    }),
    (function () {
      var e,
        t = i.createElement("input"),
        n = i.createElement("div"),
        r = i.createElement("select"),
        o = r.appendChild(i.createElement("option"));
      (n = i.createElement("div")).setAttribute("className", "t"),
        (n.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (e = n.getElementsByTagName("a")[0]),
        t.setAttribute("type", "checkbox"),
        n.appendChild(t),
        ((e = n.getElementsByTagName("a")[0]).style.cssText = "top:1px"),
        (d.getSetAttribute = "t" !== n.className),
        (d.style = /top/.test(e.getAttribute("style"))),
        (d.hrefNormalized = "/a" === e.getAttribute("href")),
        (d.checkOn = !!t.value),
        (d.optSelected = o.selected),
        (d.enctype = !!i.createElement("form").enctype),
        (r.disabled = !0),
        (d.optDisabled = !o.disabled),
        (t = i.createElement("input")).setAttribute("value", ""),
        (d.input = "" === t.getAttribute("value")),
        (t.value = "t"),
        t.setAttribute("type", "radio"),
        (d.radioValue = "t" === t.value);
    })();
  var pt = /\r/g;
  f.fn.extend({
    val: function (e) {
      var t,
        n,
        i,
        r = this[0];
      return arguments.length
        ? ((i = f.isFunction(e)),
          this.each(function (n) {
            var r;
            1 === this.nodeType &&
              (null == (r = i ? e.call(this, n, f(this).val()) : e)
                ? (r = "")
                : "number" == typeof r
                ? (r += "")
                : f.isArray(r) &&
                  (r = f.map(r, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t =
                f.valHooks[this.type] ||
                f.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, r, "value")) ||
                (this.value = r));
          }))
        : r
        ? (t = f.valHooks[r.type] || f.valHooks[r.nodeName.toLowerCase()]) &&
          "get" in t &&
          void 0 !== (n = t.get(r, "value"))
          ? n
          : "string" == typeof (n = r.value)
          ? n.replace(pt, "")
          : null == n
          ? ""
          : n
        : void 0;
    },
  }),
    f.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = f.find.attr(e, "value");
            return null != t ? t : f.trim(f.text(e));
          },
        },
        select: {
          get: function (e) {
            for (
              var t,
                n,
                i = e.options,
                r = e.selectedIndex,
                o = "select-one" === e.type || 0 > r,
                s = o ? null : [],
                a = o ? r + 1 : i.length,
                c = 0 > r ? a : o ? r : 0;
              a > c;
              c++
            )
              if (
                ((n = i[c]).selected || c === r) &&
                (d.optDisabled
                  ? !n.disabled
                  : null === n.getAttribute("disabled")) &&
                (!n.parentNode.disabled ||
                  !f.nodeName(n.parentNode, "optgroup"))
              ) {
                if (((t = f(n).val()), o)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            for (
              var n, i, r = e.options, o = f.makeArray(t), s = r.length;
              s--;

            )
              if (f.inArray(f.valHooks.option.get((i = r[s])), o) >= 0)
                try {
                  i.selected = n = !0;
                } catch (a) {}
              else i.selected = !1;
            return n || (e.selectedIndex = -1), r;
          },
        },
      },
    }),
    f.each(["radio", "checkbox"], function () {
      (f.valHooks[this] = {
        set: function (e, t) {
          return f.isArray(t)
            ? (e.checked = f.inArray(f(e).val(), t) > -1)
            : void 0;
        },
      }),
        d.checkOn ||
          (f.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var ft,
    ht,
    gt = f.expr.attrHandle,
    vt = /^(?:checked|selected)$/i,
    mt = d.getSetAttribute,
    yt = d.input;
  f.fn.extend({
    attr: function (e, t) {
      return $(this, f.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        f.removeAttr(this, e);
      });
    },
  }),
    f.extend({
      attr: function (e, t, n) {
        var i,
          r,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? f.prop(e, t, n)
            : ((1 === o && f.isXMLDoc(e)) ||
                ((t = t.toLowerCase()),
                (r = f.attrHooks[t] || (f.expr.match.bool.test(t) ? ht : ft))),
              void 0 !== n
                ? null === n
                  ? void f.removeAttr(e, t)
                  : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ""), n)
                : r && "get" in r && null !== (i = r.get(e, t))
                ? i
                : null == (i = f.find.attr(e, t))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!d.radioValue && "radio" === t && f.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          i,
          r = 0,
          o = t && t.match(R);
        if (o && 1 === e.nodeType)
          for (; (n = o[r++]); )
            (i = f.propFix[n] || n),
              f.expr.match.bool.test(n)
                ? (yt && mt) || !vt.test(n)
                  ? (e[i] = !1)
                  : (e[f.camelCase("default-" + n)] = e[i] = !1)
                : f.attr(e, n, ""),
              e.removeAttribute(mt ? n : i);
      },
    }),
    (ht = {
      set: function (e, t, n) {
        return (
          !1 === t
            ? f.removeAttr(e, n)
            : (yt && mt) || !vt.test(n)
            ? e.setAttribute((!mt && f.propFix[n]) || n, n)
            : (e[f.camelCase("default-" + n)] = e[n] = !0),
          n
        );
      },
    }),
    f.each(f.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = gt[t] || f.find.attr;
      gt[t] =
        (yt && mt) || !vt.test(t)
          ? function (e, t, i) {
              var r, o;
              return (
                i ||
                  ((o = gt[t]),
                  (gt[t] = r),
                  (r = null != n(e, t, i) ? t.toLowerCase() : null),
                  (gt[t] = o)),
                r
              );
            }
          : function (e, t, n) {
              return n
                ? void 0
                : e[f.camelCase("default-" + t)]
                ? t.toLowerCase()
                : null;
            };
    }),
    (yt && mt) ||
      (f.attrHooks.value = {
        set: function (e, t, n) {
          return f.nodeName(e, "input")
            ? void (e.defaultValue = t)
            : ft && ft.set(e, t, n);
        },
      }),
    mt ||
      ((ft = {
        set: function (e, t, n) {
          var i = e.getAttributeNode(n);
          return (
            i || e.setAttributeNode((i = e.ownerDocument.createAttribute(n))),
            (i.value = t += ""),
            "value" === n || t === e.getAttribute(n) ? t : void 0
          );
        },
      }),
      (gt.id =
        gt.name =
        gt.coords =
          function (e, t, n) {
            var i;
            return n
              ? void 0
              : (i = e.getAttributeNode(t)) && "" !== i.value
              ? i.value
              : null;
          }),
      (f.valHooks.button = {
        get: function (e, t) {
          var n = e.getAttributeNode(t);
          return n && n.specified ? n.value : void 0;
        },
        set: ft.set,
      }),
      (f.attrHooks.contenteditable = {
        set: function (e, t, n) {
          ft.set(e, "" !== t && t, n);
        },
      }),
      f.each(["width", "height"], function (e, t) {
        f.attrHooks[t] = {
          set: function (e, n) {
            return "" === n ? (e.setAttribute(t, "auto"), n) : void 0;
          },
        };
      })),
    d.style ||
      (f.attrHooks.style = {
        get: function (e) {
          return e.style.cssText || void 0;
        },
        set: function (e, t) {
          return (e.style.cssText = t + "");
        },
      });
  var It = /^(?:input|select|textarea|button|object)$/i,
    Ct = /^(?:a|area)$/i;
  f.fn.extend({
    prop: function (e, t) {
      return $(this, f.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return (
        (e = f.propFix[e] || e),
        this.each(function () {
          try {
            (this[e] = void 0), delete this[e];
          } catch (t) {}
        })
      );
    },
  }),
    f.extend({
      prop: function (e, t, n) {
        var i,
          r,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && f.isXMLDoc(e)) ||
              (r = f.propHooks[(t = f.propFix[t] || t)]),
            void 0 !== n
              ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                ? i
                : (e[t] = n)
              : r && "get" in r && null !== (i = r.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = f.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : It.test(e.nodeName) || (Ct.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    d.hrefNormalized ||
      f.each(["href", "src"], function (e, t) {
        f.propHooks[t] = {
          get: function (e) {
            return e.getAttribute(t, 4);
          },
        };
      }),
    d.optSelected ||
      (f.propHooks.selected = {
        get: function (e) {
          return null;
        },
      }),
    f.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        f.propFix[this.toLowerCase()] = this;
      }
    ),
    d.enctype || (f.propFix.enctype = "encoding");
  var bt = /[\t\r\n\f]/g;
  function Tt(e) {
    return f.attr(e, "class") || "";
  }
  f.fn.extend({
    addClass: function (e) {
      var t,
        n,
        i,
        r,
        o,
        s,
        a,
        c = 0;
      if (f.isFunction(e))
        return this.each(function (t) {
          f(this).addClass(e.call(this, t, Tt(this)));
        });
      if ("string" == typeof e && e)
        for (t = e.match(R) || []; (n = this[c++]); )
          if (
            ((r = Tt(n)),
            (i = 1 === n.nodeType && (" " + r + " ").replace(bt, " ")))
          ) {
            for (s = 0; (o = t[s++]); )
              i.indexOf(" " + o + " ") < 0 && (i += o + " ");
            r !== (a = f.trim(i)) && f.attr(n, "class", a);
          }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        i,
        r,
        o,
        s,
        a,
        c = 0;
      if (f.isFunction(e))
        return this.each(function (t) {
          f(this).removeClass(e.call(this, t, Tt(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof e && e)
        for (t = e.match(R) || []; (n = this[c++]); )
          if (
            ((r = Tt(n)),
            (i = 1 === n.nodeType && (" " + r + " ").replace(bt, " ")))
          ) {
            for (s = 0; (o = t[s++]); )
              for (; i.indexOf(" " + o + " ") > -1; )
                i = i.replace(" " + o + " ", " ");
            r !== (a = f.trim(i)) && f.attr(n, "class", a);
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n
        ? t
          ? this.addClass(e)
          : this.removeClass(e)
        : f.isFunction(e)
        ? this.each(function (n) {
            f(this).toggleClass(e.call(this, n, Tt(this), t), t);
          })
        : this.each(function () {
            var t, i, r, o;
            if ("string" === n)
              for (i = 0, r = f(this), o = e.match(R) || []; (t = o[i++]); )
                r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
            else
              (void 0 === e || "boolean" === n) &&
                ((t = Tt(this)) && f._data(this, "__className__", t),
                f.attr(
                  this,
                  "class",
                  t || !1 === e ? "" : f._data(this, "__className__") || ""
                ));
          });
    },
    hasClass: function (e) {
      var t,
        n,
        i = 0;
      for (t = " " + e + " "; (n = this[i++]); )
        if (
          1 === n.nodeType &&
          (" " + Tt(n) + " ").replace(bt, " ").indexOf(t) > -1
        )
          return !0;
      return !1;
    },
  }),
    f.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (e, t) {
        f.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    f.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    });
  var wt = e.location,
    St = f.now(),
    xt = /\?/,
    _t =
      /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  (f.parseJSON = function (t) {
    if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
    var n,
      i = null,
      r = f.trim(t + "");
    return r &&
      !f.trim(
        r.replace(_t, function (e, t, r, o) {
          return (
            n && t && (i = 0), 0 === i ? e : ((n = r || t), (i += !o - !r), "")
          );
        })
      )
      ? Function("return " + r)()
      : f.error("Invalid JSON: " + t);
  }),
    (f.parseXML = function (t) {
      var n;
      if (!t || "string" != typeof t) return null;
      try {
        e.DOMParser
          ? (n = new e.DOMParser().parseFromString(t, "text/xml"))
          : (((n = new e.ActiveXObject("Microsoft.XMLDOM")).async = "false"),
            n.loadXML(t));
      } catch (r) {
        n = void 0;
      }
      return (
        (n &&
          n.documentElement &&
          !n.getElementsByTagName("parsererror").length) ||
          f.error("Invalid XML: " + t),
        n
      );
    });
  var kt = /#.*$/,
    Et = /([?&])_=[^&]*/,
    At = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Dt = /^(?:GET|HEAD)$/,
    Mt = /^\/\//,
    Nt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Rt = {},
    Ft = {},
    Pt = "*/".concat("*"),
    Ot = wt.href,
    Lt = Nt.exec(Ot.toLowerCase()) || [];
  function Ut(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var i,
        r = 0,
        o = t.toLowerCase().match(R) || [];
      if (f.isFunction(n))
        for (; (i = o[r++]); )
          "+" === i.charAt(0)
            ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
            : (e[i] = e[i] || []).push(n);
    };
  }
  function jt(e, t, n, i) {
    var r = {},
      o = e === Ft;
    function s(a) {
      var c;
      return (
        (r[a] = !0),
        f.each(e[a] || [], function (e, a) {
          var u = a(t, n, i);
          return "string" != typeof u || o || r[u]
            ? o
              ? !(c = u)
              : void 0
            : (t.dataTypes.unshift(u), s(u), !1);
        }),
        c
      );
    }
    return s(t.dataTypes[0]) || (!r["*"] && s("*"));
  }
  function qt(e, t) {
    var n,
      i,
      r = f.ajaxSettings.flatOptions || {};
    for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
    return n && f.extend(!0, e, n), e;
  }
  function Bt(e) {
    return (e.style && e.style.display) || f.css(e, "display");
  }
  f.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ot,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
        Lt[1]
      ),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Pt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": f.parseJSON,
        "text xml": f.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (e, t) {
      return t ? qt(qt(e, f.ajaxSettings), t) : qt(f.ajaxSettings, e);
    },
    ajaxPrefilter: Ut(Rt),
    ajaxTransport: Ut(Ft),
    ajax: function (t, n) {
      "object" == typeof t && ((n = t), (t = void 0));
      var i,
        r,
        o,
        s,
        a,
        c,
        u,
        l,
        d = f.ajaxSetup({}, (n = n || {})),
        p = d.context || d,
        h = d.context && (p.nodeType || p.jquery) ? f(p) : f.event,
        g = f.Deferred(),
        v = f.Callbacks("once memory"),
        m = d.statusCode || {},
        y = {},
        I = {},
        C = 0,
        b = "canceled",
        T = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (2 === C) {
              if (!l)
                for (l = {}; (t = At.exec(s)); ) l[t[1].toLowerCase()] = t[2];
              t = l[e.toLowerCase()];
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return 2 === C ? s : null;
          },
          setRequestHeader: function (e, t) {
            var n = e.toLowerCase();
            return C || ((e = I[n] = I[n] || e), (y[e] = t)), this;
          },
          overrideMimeType: function (e) {
            return C || (d.mimeType = e), this;
          },
          statusCode: function (e) {
            var t;
            if (e)
              if (2 > C) for (t in e) m[t] = [m[t], e[t]];
              else T.always(e[T.status]);
            return this;
          },
          abort: function (e) {
            var t = e || b;
            return u && u.abort(t), S(0, t), this;
          },
        };
      if (
        ((g.promise(T).complete = v.add),
        (T.success = T.done),
        (T.error = T.fail),
        (d.url = ((t || d.url || Ot) + "")
          .replace(kt, "")
          .replace(Mt, Lt[1] + "//")),
        (d.type = n.method || n.type || d.method || d.type),
        (d.dataTypes = f
          .trim(d.dataType || "*")
          .toLowerCase()
          .match(R) || [""]),
        null == d.crossDomain &&
          ((i = Nt.exec(d.url.toLowerCase())),
          (d.crossDomain = !(
            !i ||
            (i[1] === Lt[1] &&
              i[2] === Lt[2] &&
              (i[3] || ("http:" === i[1] ? "80" : "443")) ===
                (Lt[3] || ("http:" === Lt[1] ? "80" : "443")))
          ))),
        d.data &&
          d.processData &&
          "string" != typeof d.data &&
          (d.data = f.param(d.data, d.traditional)),
        jt(Rt, d, n, T),
        2 === C)
      )
        return T;
      for (r in ((c = f.event && d.global) &&
        0 == f.active++ &&
        f.event.trigger("ajaxStart"),
      (d.type = d.type.toUpperCase()),
      (d.hasContent = !Dt.test(d.type)),
      (o = d.url),
      d.hasContent ||
        (d.data &&
          ((o = d.url += (xt.test(o) ? "&" : "?") + d.data), delete d.data),
        !1 === d.cache &&
          (d.url = Et.test(o)
            ? o.replace(Et, "$1_=" + St++)
            : o + (xt.test(o) ? "&" : "?") + "_=" + St++)),
      d.ifModified &&
        (f.lastModified[o] &&
          T.setRequestHeader("If-Modified-Since", f.lastModified[o]),
        f.etag[o] && T.setRequestHeader("If-None-Match", f.etag[o])),
      ((d.data && d.hasContent && !1 !== d.contentType) || n.contentType) &&
        T.setRequestHeader("Content-Type", d.contentType),
      T.setRequestHeader(
        "Accept",
        d.dataTypes[0] && d.accepts[d.dataTypes[0]]
          ? d.accepts[d.dataTypes[0]] +
              ("*" !== d.dataTypes[0] ? ", " + Pt + "; q=0.01" : "")
          : d.accepts["*"]
      ),
      d.headers))
        T.setRequestHeader(r, d.headers[r]);
      if (d.beforeSend && (!1 === d.beforeSend.call(p, T, d) || 2 === C))
        return T.abort();
      for (r in ((b = "abort"), { success: 1, error: 1, complete: 1 }))
        T[r](d[r]);
      if ((u = jt(Ft, d, n, T))) {
        if (((T.readyState = 1), c && h.trigger("ajaxSend", [T, d]), 2 === C))
          return T;
        d.async &&
          d.timeout > 0 &&
          (a = e.setTimeout(function () {
            T.abort("timeout");
          }, d.timeout));
        try {
          (C = 1), u.send(y, S);
        } catch (w) {
          if (!(2 > C)) throw w;
          S(-1, w);
        }
      } else S(-1, "No Transport");
      function S(t, n, i, r) {
        var l,
          y,
          I,
          b,
          w,
          S = n;
        2 !== C &&
          ((C = 2),
          a && e.clearTimeout(a),
          (u = void 0),
          (s = r || ""),
          (T.readyState = t > 0 ? 4 : 0),
          (l = (t >= 200 && 300 > t) || 304 === t),
          i &&
            (b = (function (e, t, n) {
              for (
                var i, r, o, s, a = e.contents, c = e.dataTypes;
                "*" === c[0];

              )
                c.shift(),
                  void 0 === r &&
                    (r = e.mimeType || t.getResponseHeader("Content-Type"));
              if (r)
                for (s in a)
                  if (a[s] && a[s].test(r)) {
                    c.unshift(s);
                    break;
                  }
              if (c[0] in n) o = c[0];
              else {
                for (s in n) {
                  if (!c[0] || e.converters[s + " " + c[0]]) {
                    o = s;
                    break;
                  }
                  i || (i = s);
                }
                o = o || i;
              }
              return o ? (o !== c[0] && c.unshift(o), n[o]) : void 0;
            })(d, T, i)),
          (b = (function (e, t, n, i) {
            var r,
              o,
              s,
              a,
              c,
              u = {},
              l = e.dataTypes.slice();
            if (l[1])
              for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
            for (o = l.shift(); o; )
              if (
                (e.responseFields[o] && (n[e.responseFields[o]] = t),
                !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                (c = o),
                (o = l.shift()))
              )
                if ("*" === o) o = c;
                else if ("*" !== c && c !== o) {
                  if (!(s = u[c + " " + o] || u["* " + o]))
                    for (r in u)
                      if (
                        (a = r.split(" "))[1] === o &&
                        (s = u[c + " " + a[0]] || u["* " + a[0]])
                      ) {
                        !0 === s
                          ? (s = u[r])
                          : !0 !== u[r] && ((o = a[0]), l.unshift(a[1]));
                        break;
                      }
                  if (!0 !== s)
                    if (s && e.throws) t = s(t);
                    else
                      try {
                        t = s(t);
                      } catch (d) {
                        return {
                          state: "parsererror",
                          error: s ? d : "No conversion from " + c + " to " + o,
                        };
                      }
                }
            return { state: "success", data: t };
          })(d, b, T, l)),
          l
            ? (d.ifModified &&
                ((w = T.getResponseHeader("Last-Modified")) &&
                  (f.lastModified[o] = w),
                (w = T.getResponseHeader("etag")) && (f.etag[o] = w)),
              204 === t || "HEAD" === d.type
                ? (S = "nocontent")
                : 304 === t
                ? (S = "notmodified")
                : ((S = b.state), (y = b.data), (l = !(I = b.error))))
            : ((I = S), (t || !S) && ((S = "error"), 0 > t && (t = 0))),
          (T.status = t),
          (T.statusText = (n || S) + ""),
          l ? g.resolveWith(p, [y, S, T]) : g.rejectWith(p, [T, S, I]),
          T.statusCode(m),
          (m = void 0),
          c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [T, d, l ? y : I]),
          v.fireWith(p, [T, S]),
          c &&
            (h.trigger("ajaxComplete", [T, d]),
            --f.active || f.event.trigger("ajaxStop")));
      }
      return T;
    },
    getJSON: function (e, t, n) {
      return f.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return f.get(e, void 0, t, "script");
    },
  }),
    f.each(["get", "post"], function (e, t) {
      f[t] = function (e, n, i, r) {
        return (
          f.isFunction(n) && ((r = r || i), (i = n), (n = void 0)),
          f.ajax(
            f.extend(
              { url: e, type: t, dataType: r, data: n, success: i },
              f.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (f._evalUrl = function (e) {
      return f.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    f.fn.extend({
      wrapAll: function (e) {
        if (f.isFunction(e))
          return this.each(function (t) {
            f(this).wrapAll(e.call(this, t));
          });
        if (this[0]) {
          var t = f(e, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (
                  var e = this;
                  e.firstChild && 1 === e.firstChild.nodeType;

                )
                  e = e.firstChild;
                return e;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (e) {
        return f.isFunction(e)
          ? this.each(function (t) {
              f(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = f(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = f.isFunction(e);
        return this.each(function (n) {
          f(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            f.nodeName(this, "body") || f(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (f.expr.filters.hidden = function (e) {
      return d.reliableHiddenOffsets()
        ? e.offsetWidth <= 0 &&
            e.offsetHeight <= 0 &&
            !e.getClientRects().length
        : (function (e) {
            for (; e && 1 === e.nodeType; ) {
              if ("none" === Bt(e) || "hidden" === e.type) return !0;
              e = e.parentNode;
            }
            return !1;
          })(e);
    }),
    (f.expr.filters.visible = function (e) {
      return !f.expr.filters.hidden(e);
    });
  var Wt = /%20/g,
    Vt = /\[\]$/,
    Ht = /\r?\n/g,
    Jt = /^(?:submit|button|image|reset|file)$/i,
    zt = /^(?:input|select|textarea|keygen)/i;
  function Kt(e, t, n, i) {
    var r;
    if (f.isArray(t))
      f.each(t, function (t, r) {
        n || Vt.test(e)
          ? i(e, r)
          : Kt(
              e + "[" + ("object" == typeof r && null != r ? t : "") + "]",
              r,
              n,
              i
            );
      });
    else if (n || "object" !== f.type(t)) i(e, t);
    else for (r in t) Kt(e + "[" + r + "]", t[r], n, i);
  }
  (f.param = function (e, t) {
    var n,
      i = [],
      r = function (e, t) {
        (t = f.isFunction(t) ? t() : null == t ? "" : t),
          (i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
      };
    if (
      (void 0 === t && (t = f.ajaxSettings && f.ajaxSettings.traditional),
      f.isArray(e) || (e.jquery && !f.isPlainObject(e)))
    )
      f.each(e, function () {
        r(this.name, this.value);
      });
    else for (n in e) Kt(n, e[n], t, r);
    return i.join("&").replace(Wt, "+");
  }),
    f.fn.extend({
      serialize: function () {
        return f.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = f.prop(this, "elements");
          return e ? f.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !f(this).is(":disabled") &&
              zt.test(this.nodeName) &&
              !Jt.test(e) &&
              (this.checked || !G.test(e))
            );
          })
          .map(function (e, t) {
            var n = f(this).val();
            return null == n
              ? null
              : f.isArray(n)
              ? f.map(n, function (e) {
                  return { name: t.name, value: e.replace(Ht, "\r\n") };
                })
              : { name: t.name, value: n.replace(Ht, "\r\n") };
          })
          .get();
      },
    }),
    (f.ajaxSettings.xhr =
      void 0 !== e.ActiveXObject
        ? function () {
            return this.isLocal
              ? Yt()
              : i.documentMode > 8
              ? Xt()
              : (/^(get|post|head|put|delete|options)$/i.test(this.type) &&
                  Xt()) ||
                Yt();
          }
        : Xt);
  var $t = 0,
    Gt = {},
    Qt = f.ajaxSettings.xhr();
  function Xt() {
    try {
      return new e.XMLHttpRequest();
    } catch (t) {}
  }
  function Yt() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP");
    } catch (t) {}
  }
  e.attachEvent &&
    e.attachEvent("onunload", function () {
      for (var e in Gt) Gt[e](void 0, !0);
    }),
    (d.cors = !!Qt && "withCredentials" in Qt),
    (Qt = d.ajax = !!Qt) &&
      f.ajaxTransport(function (t) {
        var n;
        if (!t.crossDomain || d.cors)
          return {
            send: function (i, r) {
              var o,
                s = t.xhr(),
                a = ++$t;
              if (
                (s.open(t.type, t.url, t.async, t.username, t.password),
                t.xhrFields)
              )
                for (o in t.xhrFields) s[o] = t.xhrFields[o];
              for (o in (t.mimeType &&
                s.overrideMimeType &&
                s.overrideMimeType(t.mimeType),
              t.crossDomain ||
                i["X-Requested-With"] ||
                (i["X-Requested-With"] = "XMLHttpRequest"),
              i))
                void 0 !== i[o] && s.setRequestHeader(o, i[o] + "");
              s.send((t.hasContent && t.data) || null),
                (n = function (e, i) {
                  var o, c, u;
                  if (n && (i || 4 === s.readyState))
                    if (
                      (delete Gt[a],
                      (n = void 0),
                      (s.onreadystatechange = f.noop),
                      i)
                    )
                      4 !== s.readyState && s.abort();
                    else {
                      (u = {}),
                        (o = s.status),
                        "string" == typeof s.responseText &&
                          (u.text = s.responseText);
                      try {
                        c = s.statusText;
                      } catch (l) {
                        c = "";
                      }
                      o || !t.isLocal || t.crossDomain
                        ? 1223 === o && (o = 204)
                        : (o = u.text ? 200 : 404);
                    }
                  u && r(o, c, u, s.getAllResponseHeaders());
                }),
                t.async
                  ? 4 === s.readyState
                    ? e.setTimeout(n)
                    : (s.onreadystatechange = Gt[a] = n)
                  : n();
            },
            abort: function () {
              n && n(void 0, !0);
            },
          };
      }),
    f.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    f.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return f.globalEval(e), e;
        },
      },
    }),
    f.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1),
        e.crossDomain && ((e.type = "GET"), (e.global = !1));
    }),
    f.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var t,
          n = i.head || f("head")[0] || i.documentElement;
        return {
          send: function (r, o) {
            ((t = i.createElement("script")).async = !0),
              e.scriptCharset && (t.charset = e.scriptCharset),
              (t.src = e.url),
              (t.onload = t.onreadystatechange =
                function (e, n) {
                  (n ||
                    !t.readyState ||
                    /loaded|complete/.test(t.readyState)) &&
                    ((t.onload = t.onreadystatechange = null),
                    t.parentNode && t.parentNode.removeChild(t),
                    (t = null),
                    n || o(200, "success"));
                }),
              n.insertBefore(t, n.firstChild);
          },
          abort: function () {
            t && t.onload(void 0, !0);
          },
        };
      }
    });
  var Zt = [],
    en = /(=)\?(?=&|$)|\?\?/;
  f.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Zt.pop() || f.expando + "_" + St++;
      return (this[e] = !0), e;
    },
  }),
    f.ajaxPrefilter("json jsonp", function (t, n, i) {
      var r,
        o,
        s,
        a =
          !1 !== t.jsonp &&
          (en.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              en.test(t.data) &&
              "data");
      return a || "jsonp" === t.dataTypes[0]
        ? ((r = t.jsonpCallback =
            f.isFunction(t.jsonpCallback)
              ? t.jsonpCallback()
              : t.jsonpCallback),
          a
            ? (t[a] = t[a].replace(en, "$1" + r))
            : !1 !== t.jsonp &&
              (t.url += (xt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
          (t.converters["script json"] = function () {
            return s || f.error(r + " was not called"), s[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = e[r]),
          (e[r] = function () {
            s = arguments;
          }),
          i.always(function () {
            void 0 === o ? f(e).removeProp(r) : (e[r] = o),
              t[r] && ((t.jsonpCallback = n.jsonpCallback), Zt.push(r)),
              s && f.isFunction(o) && o(s[0]),
              (s = o = void 0);
          }),
          "script")
        : void 0;
    }),
    (d.createHTMLDocument = (function () {
      if (!i.implementation.createHTMLDocument) return !1;
      var e = i.implementation.createHTMLDocument("");
      return (
        (e.body.innerHTML = "<form></form><form></form>"),
        2 === e.body.childNodes.length
      );
    })()),
    (f.parseHTML = function (e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && ((n = t), (t = !1)),
        (t =
          t ||
          (d.createHTMLDocument ? i.implementation.createHTMLDocument("") : i));
      var r = w.exec(e),
        o = !n && [];
      return r
        ? [t.createElement(r[1])]
        : ((r = ae([e], t, o)),
          o && o.length && f(o).remove(),
          f.merge([], r.childNodes));
    });
  var tn = f.fn.load;
  function nn(e) {
    return f.isWindow(e)
      ? e
      : 9 === e.nodeType && (e.defaultView || e.parentWindow);
  }
  (f.fn.load = function (e, t, n) {
    if ("string" != typeof e && tn) return tn.apply(this, arguments);
    var i,
      r,
      o,
      s = this,
      a = e.indexOf(" ");
    return (
      a > -1 && ((i = f.trim(e.slice(a, e.length))), (e = e.slice(0, a))),
      f.isFunction(t)
        ? ((n = t), (t = void 0))
        : t && "object" == typeof t && (r = "POST"),
      s.length > 0 &&
        f
          .ajax({ url: e, type: r || "GET", dataType: "html", data: t })
          .done(function (e) {
            (o = arguments),
              s.html(i ? f("<div>").append(f.parseHTML(e)).find(i) : e);
          })
          .always(
            n &&
              function (e, t) {
                s.each(function () {
                  n.apply(s, o || [e.responseText, t, e]);
                });
              }
          ),
      this
    );
  }),
    f.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        f.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (f.expr.filters.animated = function (e) {
      return f.grep(f.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (f.offset = {
      setOffset: function (e, t, n) {
        var i,
          r,
          o,
          s,
          a,
          c,
          u = f.css(e, "position"),
          l = f(e),
          d = {};
        "static" === u && (e.style.position = "relative"),
          (a = l.offset()),
          (o = f.css(e, "top")),
          (c = f.css(e, "left")),
          ("absolute" === u || "fixed" === u) && f.inArray("auto", [o, c]) > -1
            ? ((s = (i = l.position()).top), (r = i.left))
            : ((s = parseFloat(o) || 0), (r = parseFloat(c) || 0)),
          f.isFunction(t) && (t = t.call(e, n, f.extend({}, a))),
          null != t.top && (d.top = t.top - a.top + s),
          null != t.left && (d.left = t.left - a.left + r),
          "using" in t ? t.using.call(e, d) : l.css(d);
      },
    }),
    f.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                f.offset.setOffset(this, e, t);
              });
        var t,
          n,
          i = { top: 0, left: 0 },
          r = this[0],
          o = r && r.ownerDocument;
        return o
          ? f.contains((t = o.documentElement), r)
            ? (void 0 !== r.getBoundingClientRect &&
                (i = r.getBoundingClientRect()),
              (n = nn(o)),
              {
                top:
                  i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left:
                  i.left +
                  (n.pageXOffset || t.scrollLeft) -
                  (t.clientLeft || 0),
              })
            : i
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n = { top: 0, left: 0 },
            i = this[0];
          return (
            "fixed" === f.css(i, "position")
              ? (t = i.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                f.nodeName(e[0], "html") || (n = e.offset()),
                (n.top += f.css(e[0], "borderTopWidth", !0) - e.scrollTop()),
                (n.left +=
                  f.css(e[0], "borderLeftWidth", !0) - e.scrollLeft())),
            {
              top: t.top - n.top - f.css(i, "marginTop", !0),
              left: t.left - n.left - f.css(i, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && !f.nodeName(e, "html") && "static" === f.css(e, "position");

          )
            e = e.offsetParent;
          return e || je;
        });
      },
    }),
    f.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = /Y/.test(t);
        f.fn[e] = function (i) {
          return $(
            this,
            function (e, i, r) {
              var o = nn(e);
              return void 0 === r
                ? o
                  ? t in o
                    ? o[t]
                    : o.document.documentElement[i]
                  : e[i]
                : void (o
                    ? o.scrollTo(
                        n ? f(o).scrollLeft() : r,
                        n ? r : f(o).scrollTop()
                      )
                    : (e[i] = r));
            },
            e,
            i,
            arguments.length,
            null
          );
        };
      }
    ),
    f.each(["top", "left"], function (e, t) {
      f.cssHooks[t] = Ve(d.pixelPosition, function (e, n) {
        return n
          ? ((n = Be(e, t)), Le.test(n) ? f(e).position()[t] + "px" : n)
          : void 0;
      });
    }),
    f.each({ Height: "height", Width: "width" }, function (e, t) {
      f.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, i) {
          f.fn[i] = function (i, r) {
            var o = arguments.length && (n || "boolean" != typeof i),
              s = n || (!0 === i || !0 === r ? "margin" : "border");
            return $(
              this,
              function (t, n, i) {
                var r;
                return f.isWindow(t)
                  ? t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((r = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      r["scroll" + e],
                      t.body["offset" + e],
                      r["offset" + e],
                      r["client" + e]
                    ))
                  : void 0 === i
                  ? f.css(t, n, s)
                  : f.style(t, n, i, s);
              },
              t,
              o ? i : void 0,
              o,
              null
            );
          };
        }
      );
    }),
    f.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (f.fn.size = function () {
      return this.length;
    }),
    (f.fn.andSelf = f.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return f;
      });
  var rn = e.jQuery,
    on = e.$;
  return (
    (f.noConflict = function (t) {
      return e.$ === f && (e.$ = on), t && e.jQuery === f && (e.jQuery = rn), f;
    }),
    t || (e.jQuery = e.$ = f),
    f
  );
}),
  "undefined" == typeof Paho && (Paho = {}),
  (Paho.MQTT = (function (e) {
    var t = function (e, t) {
        for (var n in e)
          if (e.hasOwnProperty(n)) {
            if (!t.hasOwnProperty(n)) {
              var r = "Unknown property, " + n + ". Valid properties are:";
              for (var n in t) t.hasOwnProperty(n) && (r = r + " " + n);
              throw new Error(r);
            }
            if (typeof e[n] !== t[n])
              throw new Error(o(i.INVALID_TYPE, [typeof e[n], n]));
          }
      },
      n = function (e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      },
      i = {
        OK: { code: 0, text: "AMQJSC0000I OK." },
        CONNECT_TIMEOUT: { code: 1, text: "AMQJSC0001E Connect timed out." },
        SUBSCRIBE_TIMEOUT: { code: 2, text: "AMQJS0002E Subscribe timed out." },
        UNSUBSCRIBE_TIMEOUT: {
          code: 3,
          text: "AMQJS0003E Unsubscribe timed out.",
        },
        PING_TIMEOUT: { code: 4, text: "AMQJS0004E Ping timed out." },
        INTERNAL_ERROR: {
          code: 5,
          text: "AMQJS0005E Internal error. Error Message: {0}, Stack trace: {1}",
        },
        CONNACK_RETURNCODE: {
          code: 6,
          text: "AMQJS0006E Bad Connack return code:{0} {1}.",
        },
        SOCKET_ERROR: { code: 7, text: "AMQJS0007E Socket error:{0}." },
        SOCKET_CLOSE: { code: 8, text: "AMQJS0008I Socket closed." },
        MALFORMED_UTF: {
          code: 9,
          text: "AMQJS0009E Malformed UTF data:{0} {1} {2}.",
        },
        UNSUPPORTED: {
          code: 10,
          text: "AMQJS0010E {0} is not supported by this browser.",
        },
        INVALID_STATE: { code: 11, text: "AMQJS0011E Invalid state {0}." },
        INVALID_TYPE: {
          code: 12,
          text: "AMQJS0012E Invalid type {0} for {1}.",
        },
        INVALID_ARGUMENT: {
          code: 13,
          text: "AMQJS0013E Invalid argument {0} for {1}.",
        },
        UNSUPPORTED_OPERATION: {
          code: 14,
          text: "AMQJS0014E Unsupported operation.",
        },
        INVALID_STORED_DATA: {
          code: 15,
          text: "AMQJS0015E Invalid data in local storage key={0} value={1}.",
        },
        INVALID_MQTT_MESSAGE_TYPE: {
          code: 16,
          text: "AMQJS0016E Invalid MQTT message type {0}.",
        },
        MALFORMED_UNICODE: {
          code: 17,
          text: "AMQJS0017E Malformed Unicode string:{0} {1}.",
        },
      },
      r = {
        0: "Connection Accepted",
        1: "Connection Refused: unacceptable protocol version",
        2: "Connection Refused: identifier rejected",
        3: "Connection Refused: server unavailable",
        4: "Connection Refused: bad user name or password",
        5: "Connection Refused: not authorized",
      },
      o = function (e, t) {
        var n = e.text;
        if (t)
          for (var i, r, o = 0; o < t.length; o++)
            if ((r = n.indexOf((i = "{" + o + "}"))) > 0) {
              var s = n.substring(0, r),
                a = n.substring(r + i.length);
              n = s + t[o] + a;
            }
        return n;
      },
      s = [0, 6, 77, 81, 73, 115, 100, 112, 3],
      a = [0, 4, 77, 81, 84, 84, 4],
      c = function (e, t) {
        for (var n in ((this.type = e), t))
          t.hasOwnProperty(n) && (this[n] = t[n]);
      };
    function u(e, t) {
      var n,
        i = t,
        r = e[t],
        o = r >> 4,
        s = (r &= 15);
      t += 1;
      var a = 0,
        u = 1;
      do {
        if (t == e.length) return [null, i];
        (a += (127 & (n = e[t++])) * u), (u *= 128);
      } while (0 != (128 & n));
      var l = t + a;
      if (l > e.length) return [null, i];
      var d = new c(o);
      switch (o) {
        case 2:
          1 & e[t++] && (d.sessionPresent = !0), (d.returnCode = e[t++]);
          break;
        case 3:
          var f = (s >> 1) & 3,
            h = p(e, t),
            v = g(e, (t += 2), h);
          (t += h), f > 0 && ((d.messageIdentifier = p(e, t)), (t += 2));
          var m = new Paho.MQTT.Message(e.subarray(t, l));
          1 == (1 & s) && (m.retained = !0),
            8 == (8 & s) && (m.duplicate = !0),
            (m.qos = f),
            (m.destinationName = v),
            (d.payloadMessage = m);
          break;
        case 4:
        case 5:
        case 6:
        case 7:
        case 11:
          d.messageIdentifier = p(e, t);
          break;
        case 9:
          (d.messageIdentifier = p(e, t)),
            (d.returnCode = e.subarray((t += 2), l));
      }
      return [d, l];
    }
    function l(e, t, n) {
      return (t[n++] = e >> 8), (t[n++] = e % 256), n;
    }
    function d(e, t, n, i) {
      return h(e, n, (i = l(t, n, i))), i + t;
    }
    function p(e, t) {
      return 256 * e[t] + e[t + 1];
    }
    function f(e) {
      for (var t = 0, n = 0; n < e.length; n++) {
        var i = e.charCodeAt(n);
        i > 2047
          ? (55296 <= i && i <= 56319 && (n++, t++), (t += 3))
          : i > 127
          ? (t += 2)
          : t++;
      }
      return t;
    }
    function h(e, t, n) {
      for (var r = n, s = 0; s < e.length; s++) {
        var a = e.charCodeAt(s);
        if (55296 <= a && a <= 56319) {
          var c = e.charCodeAt(++s);
          if (isNaN(c)) throw new Error(o(i.MALFORMED_UNICODE, [a, c]));
          a = c - 56320 + ((a - 55296) << 10) + 65536;
        }
        a <= 127
          ? (t[r++] = a)
          : a <= 2047
          ? ((t[r++] = ((a >> 6) & 31) | 192), (t[r++] = (63 & a) | 128))
          : a <= 65535
          ? ((t[r++] = ((a >> 12) & 15) | 224),
            (t[r++] = ((a >> 6) & 63) | 128),
            (t[r++] = (63 & a) | 128))
          : ((t[r++] = ((a >> 18) & 7) | 240),
            (t[r++] = ((a >> 12) & 63) | 128),
            (t[r++] = ((a >> 6) & 63) | 128),
            (t[r++] = (63 & a) | 128));
      }
      return t;
    }
    function g(e, t, n) {
      for (var r, s = "", a = t; a < t + n; ) {
        var c = e[a++];
        if (c < 128) r = c;
        else {
          var u = e[a++] - 128;
          if (u < 0)
            throw new Error(
              o(i.MALFORMED_UTF, [c.toString(16), u.toString(16), ""])
            );
          if (c < 224) r = 64 * (c - 192) + u;
          else {
            var l = e[a++] - 128;
            if (l < 0)
              throw new Error(
                o(i.MALFORMED_UTF, [
                  c.toString(16),
                  u.toString(16),
                  l.toString(16),
                ])
              );
            if (c < 240) r = 4096 * (c - 224) + 64 * u + l;
            else {
              var d = e[a++] - 128;
              if (d < 0)
                throw new Error(
                  o(i.MALFORMED_UTF, [
                    c.toString(16),
                    u.toString(16),
                    l.toString(16),
                    d.toString(16),
                  ])
                );
              if (!(c < 248))
                throw new Error(
                  o(i.MALFORMED_UTF, [
                    c.toString(16),
                    u.toString(16),
                    l.toString(16),
                    d.toString(16),
                  ])
                );
              r = 262144 * (c - 240) + 4096 * u + 64 * l + d;
            }
          }
        }
        r > 65535 &&
          ((r -= 65536),
          (s += String.fromCharCode(55296 + (r >> 10))),
          (r = 56320 + (1023 & r))),
          (s += String.fromCharCode(r));
      }
      return s;
    }
    c.prototype.encode = function () {
      var e = (15 & this.type) << 4,
        t = 0,
        n = new Array(),
        i = 0;
      switch ((null != this.messageIdentifier && (t += 2), this.type)) {
        case 1:
          switch (this.mqttVersion) {
            case 3:
              t += s.length + 3;
              break;
            case 4:
              t += a.length + 3;
          }
          if (((t += f(this.clientId) + 2), null != this.willMessage)) {
            t += f(this.willMessage.destinationName) + 2;
            var r = this.willMessage.payloadBytes;
            r instanceof Uint8Array || (r = new Uint8Array(c)),
              (t += r.byteLength + 2);
          }
          null != this.userName && (t += f(this.userName) + 2),
            null != this.password && (t += f(this.password) + 2);
          break;
        case 8:
          e |= 2;
          for (var o = 0; o < this.topics.length; o++)
            (n[o] = f(this.topics[o])), (t += n[o] + 2);
          t += this.requestedQos.length;
          break;
        case 10:
          for (e |= 2, o = 0; o < this.topics.length; o++)
            (n[o] = f(this.topics[o])), (t += n[o] + 2);
          break;
        case 6:
          e |= 2;
          break;
        case 3:
          this.payloadMessage.duplicate && (e |= 8),
            (e = e |= this.payloadMessage.qos << 1),
            this.payloadMessage.retained && (e |= 1),
            (t += (i = f(this.payloadMessage.destinationName)) + 2);
          var c = this.payloadMessage.payloadBytes;
          (t += c.byteLength),
            c instanceof ArrayBuffer
              ? (c = new Uint8Array(c))
              : c instanceof Uint8Array || (c = new Uint8Array(c.buffer));
      }
      var u = (function (e) {
          var t = new Array(1),
            n = 0;
          do {
            var i = e % 128;
            (e >>= 7) > 0 && (i |= 128), (t[n++] = i);
          } while (e > 0 && n < 4);
          return t;
        })(t),
        p = u.length + 1,
        h = new ArrayBuffer(t + p),
        g = new Uint8Array(h);
      if (((g[0] = e), g.set(u, 1), 3 == this.type))
        p = d(this.payloadMessage.destinationName, i, g, p);
      else if (1 == this.type) {
        switch (this.mqttVersion) {
          case 3:
            g.set(s, p), (p += s.length);
            break;
          case 4:
            g.set(a, p), (p += a.length);
        }
        var v = 0;
        this.cleanSession && (v = 2),
          null != this.willMessage &&
            ((v |= 4),
            (v |= this.willMessage.qos << 3),
            this.willMessage.retained && (v |= 32)),
          null != this.userName && (v |= 128),
          null != this.password && (v |= 64),
          (g[p++] = v),
          (p = l(this.keepAliveInterval, g, p));
      }
      switch (
        (null != this.messageIdentifier &&
          (p = l(this.messageIdentifier, g, p)),
        this.type)
      ) {
        case 1:
          (p = d(this.clientId, f(this.clientId), g, p)),
            null != this.willMessage &&
              ((p = d(
                this.willMessage.destinationName,
                f(this.willMessage.destinationName),
                g,
                p
              )),
              (p = l(r.byteLength, g, p)),
              g.set(r, p),
              (p += r.byteLength)),
            null != this.userName &&
              (p = d(this.userName, f(this.userName), g, p)),
            null != this.password &&
              (p = d(this.password, f(this.password), g, p));
          break;
        case 3:
          g.set(c, p);
          break;
        case 8:
          for (o = 0; o < this.topics.length; o++)
            (p = d(this.topics[o], n[o], g, p)),
              (g[p++] = this.requestedQos[o]);
          break;
        case 10:
          for (o = 0; o < this.topics.length; o++)
            p = d(this.topics[o], n[o], g, p);
      }
      return h;
    };
    var v = function (e, t, n) {
        (this._client = e),
          (this._window = t),
          (this._keepAliveInterval = 1e3 * n),
          (this.isReset = !1);
        var r = new c(12).encode(),
          s = function (e) {
            return function () {
              return a.apply(e);
            };
          },
          a = function () {
            this.isReset
              ? ((this.isReset = !1),
                this._client._trace("Pinger.doPing", "send PINGREQ"),
                this._client.socket.send(r),
                (this.timeout = this._window.setTimeout(
                  s(this),
                  this._keepAliveInterval
                )))
              : (this._client._trace("Pinger.doPing", "Timed out"),
                this._client._disconnected(
                  i.PING_TIMEOUT.code,
                  o(i.PING_TIMEOUT)
                ));
          };
        (this.reset = function () {
          (this.isReset = !0),
            this._window.clearTimeout(this.timeout),
            this._keepAliveInterval > 0 &&
              (this.timeout = setTimeout(s(this), this._keepAliveInterval));
        }),
          (this.cancel = function () {
            this._window.clearTimeout(this.timeout);
          });
      },
      m = function (e, t, n, i, r) {
        (this._window = t),
          n || (n = 30),
          (this.timeout = setTimeout(
            (function (e, t, n) {
              return function () {
                return e.apply(t, n);
              };
            })(i, e, r),
            1e3 * n
          )),
          (this.cancel = function () {
            this._window.clearTimeout(this.timeout);
          });
      },
      y = function (t, n, r, s, a) {
        if (!("WebSocket" in e) || null === e.WebSocket)
          throw new Error(o(i.UNSUPPORTED, ["WebSocket"]));
        if (!("localStorage" in e) || null === e.localStorage)
          throw new Error(o(i.UNSUPPORTED, ["localStorage"]));
        if (!("ArrayBuffer" in e) || null === e.ArrayBuffer)
          throw new Error(o(i.UNSUPPORTED, ["ArrayBuffer"]));
        for (var c in (this._trace("Paho.MQTT.Client", t, n, r, s, a),
        (this.host = n),
        (this.port = r),
        (this.path = s),
        (this.uri = t),
        (this.clientId = a),
        (this._localKey =
          n + ":" + r + ("/mqtt" != s ? ":" + s : "") + ":" + a + ":"),
        (this._msg_queue = []),
        (this._sentMessages = {}),
        (this._receivedMessages = {}),
        (this._notify_msg_sent = {}),
        (this._message_identifier = 1),
        (this._sequence = 0),
        localStorage))
          (0 != c.indexOf("Sent:" + this._localKey) &&
            0 != c.indexOf("Received:" + this._localKey)) ||
            this.restore(c);
      };
    (y.prototype.connected = !1),
      (y.prototype.maxMessageIdentifier = 65536),
      (y.prototype._msg_queue = null),
      (y.prototype.sendPinger = null),
      (y.prototype.receivePinger = null),
      (y.prototype.receiveBuffer = null),
      (y.prototype._traceBuffer = null),
      (y.prototype._MAX_TRACE_ENTRIES = 100),
      (y.prototype.connect = function (e) {
        var t = this._traceMask(e, "password");
        if (
          (this._trace("Client.connect", t, this.socket, this.connected),
          this.connected)
        )
          throw new Error(o(i.INVALID_STATE, ["already connected"]));
        if (this.socket)
          throw new Error(o(i.INVALID_STATE, ["already connected"]));
        (this.connectOptions = e),
          e.uris
            ? ((this.hostIndex = 0), this._doConnect(e.uris[0]))
            : this._doConnect(this.uri);
      }),
      (y.prototype.subscribe = function (e, t) {
        if ((this._trace("Client.subscribe", e, t), !this.connected))
          throw new Error(o(i.INVALID_STATE, ["not connected"]));
        var n = new c(8);
        (n.topics = [e]),
          (n.requestedQos = null != t.qos ? [t.qos] : [0]),
          t.onSuccess &&
            (n.onSuccess = function (e) {
              t.onSuccess({
                invocationContext: t.invocationContext,
                grantedQos: e,
              });
            }),
          t.onFailure &&
            (n.onFailure = function (e) {
              t.onFailure({
                invocationContext: t.invocationContext,
                errorCode: e,
              });
            }),
          t.timeout &&
            (n.timeOut = new m(this, window, t.timeout, t.onFailure, [
              {
                invocationContext: t.invocationContext,
                errorCode: i.SUBSCRIBE_TIMEOUT.code,
                errorMessage: o(i.SUBSCRIBE_TIMEOUT),
              },
            ])),
          this._requires_ack(n),
          this._schedule_message(n);
      }),
      (y.prototype.unsubscribe = function (e, t) {
        if ((this._trace("Client.unsubscribe", e, t), !this.connected))
          throw new Error(o(i.INVALID_STATE, ["not connected"]));
        var n = new c(10);
        (n.topics = [e]),
          t.onSuccess &&
            (n.callback = function () {
              t.onSuccess({ invocationContext: t.invocationContext });
            }),
          t.timeout &&
            (n.timeOut = new m(this, window, t.timeout, t.onFailure, [
              {
                invocationContext: t.invocationContext,
                errorCode: i.UNSUBSCRIBE_TIMEOUT.code,
                errorMessage: o(i.UNSUBSCRIBE_TIMEOUT),
              },
            ])),
          this._requires_ack(n),
          this._schedule_message(n);
      }),
      (y.prototype.send = function (e) {
        if ((this._trace("Client.send", e), !this.connected))
          throw new Error(o(i.INVALID_STATE, ["not connected"]));
        (wireMessage = new c(3)),
          (wireMessage.payloadMessage = e),
          e.qos > 0
            ? this._requires_ack(wireMessage)
            : this.onMessageDelivered &&
              (this._notify_msg_sent[wireMessage] = this.onMessageDelivered(
                wireMessage.payloadMessage
              )),
          this._schedule_message(wireMessage);
      }),
      (y.prototype.disconnect = function () {
        if ((this._trace("Client.disconnect"), !this.socket))
          throw new Error(o(i.INVALID_STATE, ["not connecting or connected"]));
        (wireMessage = new c(14)),
          (this._notify_msg_sent[wireMessage] = n(this._disconnected, this)),
          this._schedule_message(wireMessage);
      }),
      (y.prototype.getTraceLog = function () {
        if (null !== this._traceBuffer) {
          for (var e in (this._trace("Client.getTraceLog", new Date()),
          this._trace(
            "Client.getTraceLog in flight messages",
            this._sentMessages.length
          ),
          this._sentMessages))
            this._trace("_sentMessages ", e, this._sentMessages[e]);
          for (var e in this._receivedMessages)
            this._trace("_receivedMessages ", e, this._receivedMessages[e]);
          return this._traceBuffer;
        }
      }),
      (y.prototype.startTrace = function () {
        null === this._traceBuffer && (this._traceBuffer = []),
          this._trace("Client.startTrace", new Date(), "@VERSION@");
      }),
      (y.prototype.stopTrace = function () {
        delete this._traceBuffer;
      }),
      (y.prototype._doConnect = function (e) {
        if (this.connectOptions.useSSL) {
          var t = e.split(":");
          (t[0] = "wss"), (e = t.join(":"));
        }
        (this.connected = !1),
          (this.socket =
            this.connectOptions.mqttVersion < 4
              ? new WebSocket(e, ["mqttv3.1"])
              : new WebSocket(e, ["mqtt"])),
          (this.socket.binaryType = "arraybuffer"),
          (this.socket.onopen = n(this._on_socket_open, this)),
          (this.socket.onmessage = n(this._on_socket_message, this)),
          (this.socket.onerror = n(this._on_socket_error, this)),
          (this.socket.onclose = n(this._on_socket_close, this)),
          (this.sendPinger = new v(
            this,
            window,
            this.connectOptions.keepAliveInterval
          )),
          (this.receivePinger = new v(
            this,
            window,
            this.connectOptions.keepAliveInterval
          )),
          (this._connectTimeout = new m(
            this,
            window,
            this.connectOptions.timeout,
            this._disconnected,
            [i.CONNECT_TIMEOUT.code, o(i.CONNECT_TIMEOUT)]
          ));
      }),
      (y.prototype._schedule_message = function (e) {
        this._msg_queue.push(e), this.connected && this._process_queue();
      }),
      (y.prototype.store = function (e, t) {
        var n = {
          type: t.type,
          messageIdentifier: t.messageIdentifier,
          version: 1,
        };
        switch (t.type) {
          case 3:
            t.pubRecReceived && (n.pubRecReceived = !0),
              (n.payloadMessage = {});
            for (
              var r = "", s = t.payloadMessage.payloadBytes, a = 0;
              a < s.length;
              a++
            )
              s[a] <= 15
                ? (r = r + "0" + s[a].toString(16))
                : (r += s[a].toString(16));
            (n.payloadMessage.payloadHex = r),
              (n.payloadMessage.qos = t.payloadMessage.qos),
              (n.payloadMessage.destinationName =
                t.payloadMessage.destinationName),
              t.payloadMessage.duplicate && (n.payloadMessage.duplicate = !0),
              t.payloadMessage.retained && (n.payloadMessage.retained = !0),
              0 == e.indexOf("Sent:") &&
                (void 0 === t.sequence && (t.sequence = ++this._sequence),
                (n.sequence = t.sequence));
            break;
          default:
            throw Error(o(i.INVALID_STORED_DATA, [key, n]));
        }
        localStorage.setItem(
          e + this._localKey + t.messageIdentifier,
          JSON.stringify(n)
        );
      }),
      (y.prototype.restore = function (e) {
        var t = localStorage.getItem(e),
          n = JSON.parse(t),
          r = new c(n.type, n);
        switch (n.type) {
          case 3:
            for (
              var s = n.payloadMessage.payloadHex,
                a = new ArrayBuffer(s.length / 2),
                u = new Uint8Array(a),
                l = 0;
              s.length >= 2;

            ) {
              var d = parseInt(s.substring(0, 2), 16);
              (s = s.substring(2, s.length)), (u[l++] = d);
            }
            var p = new Paho.MQTT.Message(u);
            (p.qos = n.payloadMessage.qos),
              (p.destinationName = n.payloadMessage.destinationName),
              n.payloadMessage.duplicate && (p.duplicate = !0),
              n.payloadMessage.retained && (p.retained = !0),
              (r.payloadMessage = p);
            break;
          default:
            throw Error(o(i.INVALID_STORED_DATA, [e, t]));
        }
        0 == e.indexOf("Sent:" + this._localKey)
          ? ((r.payloadMessage.duplicate = !0),
            (this._sentMessages[r.messageIdentifier] = r))
          : 0 == e.indexOf("Received:" + this._localKey) &&
            (this._receivedMessages[r.messageIdentifier] = r);
      }),
      (y.prototype._process_queue = function () {
        for (var e = null, t = this._msg_queue.reverse(); (e = t.pop()); )
          this._socket_send(e),
            this._notify_msg_sent[e] &&
              (this._notify_msg_sent[e](), delete this._notify_msg_sent[e]);
      }),
      (y.prototype._requires_ack = function (e) {
        var t = Object.keys(this._sentMessages).length;
        if (t > this.maxMessageIdentifier)
          throw Error("Too many messages:" + t);
        for (; void 0 !== this._sentMessages[this._message_identifier]; )
          this._message_identifier++;
        (e.messageIdentifier = this._message_identifier),
          (this._sentMessages[e.messageIdentifier] = e),
          3 === e.type && this.store("Sent:", e),
          this._message_identifier === this.maxMessageIdentifier &&
            (this._message_identifier = 1);
      }),
      (y.prototype._on_socket_open = function () {
        var e = new c(1, this.connectOptions);
        (e.clientId = this.clientId), this._socket_send(e);
      }),
      (y.prototype._on_socket_message = function (e) {
        this._trace("Client._on_socket_message", e.data),
          this.receivePinger.reset();
        for (var t = this._deframeMessages(e.data), n = 0; n < t.length; n += 1)
          this._handleMessage(t[n]);
      }),
      (y.prototype._deframeMessages = function (e) {
        var t = new Uint8Array(e);
        if (this.receiveBuffer) {
          var n = new Uint8Array(this.receiveBuffer.length + t.length);
          n.set(this.receiveBuffer),
            n.set(t, this.receiveBuffer.length),
            (t = n),
            delete this.receiveBuffer;
        }
        try {
          for (var r = 0, s = []; r < t.length; ) {
            var a = u(t, r),
              c = a[0];
            if (((r = a[1]), null === c)) break;
            s.push(c);
          }
          r < t.length && (this.receiveBuffer = t.subarray(r));
        } catch (l) {
          return void this._disconnected(
            i.INTERNAL_ERROR.code,
            o(i.INTERNAL_ERROR, [l.message, l.stack.toString()])
          );
        }
        return s;
      }),
      (y.prototype._handleMessage = function (e) {
        this._trace("Client._handleMessage", e);
        try {
          switch (e.type) {
            case 2:
              if (
                (this._connectTimeout.cancel(),
                this.connectOptions.cleanSession)
              ) {
                for (var t in this._sentMessages) {
                  var n = this._sentMessages[t];
                  localStorage.removeItem(
                    "Sent:" + this._localKey + n.messageIdentifier
                  );
                }
                for (var t in ((this._sentMessages = {}),
                this._receivedMessages)) {
                  var s = this._receivedMessages[t];
                  localStorage.removeItem(
                    "Received:" + this._localKey + s.messageIdentifier
                  );
                }
                this._receivedMessages = {};
              }
              if (0 !== e.returnCode) {
                this._disconnected(
                  i.CONNACK_RETURNCODE.code,
                  o(i.CONNACK_RETURNCODE, [e.returnCode, r[e.returnCode]])
                );
                break;
              }
              (this.connected = !0),
                this.connectOptions.uris &&
                  (this.hostIndex = this.connectOptions.uris.length);
              var a = new Array();
              for (var u in this._sentMessages)
                this._sentMessages.hasOwnProperty(u) &&
                  a.push(this._sentMessages[u]);
              a = a.sort(function (e, t) {
                return e.sequence - t.sequence;
              });
              for (var l = 0, d = a.length; l < d; l++)
                if (3 == (n = a[l]).type && n.pubRecReceived) {
                  var p = new c(6, { messageIdentifier: n.messageIdentifier });
                  this._schedule_message(p);
                } else this._schedule_message(n);
              this.connectOptions.onSuccess &&
                this.connectOptions.onSuccess({
                  invocationContext: this.connectOptions.invocationContext,
                }),
                this._process_queue();
              break;
            case 3:
              this._receivePublish(e);
              break;
            case 4:
              (n = this._sentMessages[e.messageIdentifier]) &&
                (delete this._sentMessages[e.messageIdentifier],
                localStorage.removeItem(
                  "Sent:" + this._localKey + e.messageIdentifier
                ),
                this.onMessageDelivered &&
                  this.onMessageDelivered(n.payloadMessage));
              break;
            case 5:
              (n = this._sentMessages[e.messageIdentifier]) &&
                ((n.pubRecReceived = !0),
                (p = new c(6, { messageIdentifier: e.messageIdentifier })),
                this.store("Sent:", n),
                this._schedule_message(p));
              break;
            case 6:
              (s = this._receivedMessages[e.messageIdentifier]),
                localStorage.removeItem(
                  "Received:" + this._localKey + e.messageIdentifier
                ),
                s &&
                  (this._receiveMessage(s),
                  delete this._receivedMessages[e.messageIdentifier]);
              var f = new c(7, { messageIdentifier: e.messageIdentifier });
              this._schedule_message(f);
              break;
            case 7:
              (n = this._sentMessages[e.messageIdentifier]),
                delete this._sentMessages[e.messageIdentifier],
                localStorage.removeItem(
                  "Sent:" + this._localKey + e.messageIdentifier
                ),
                this.onMessageDelivered &&
                  this.onMessageDelivered(n.payloadMessage);
              break;
            case 9:
              (n = this._sentMessages[e.messageIdentifier]) &&
                (n.timeOut && n.timeOut.cancel(),
                (e.returnCode.indexOf = Array.prototype.indexOf),
                -1 !== e.returnCode.indexOf(128)
                  ? n.onFailure && n.onFailure(e.returnCode)
                  : n.onSuccess && n.onSuccess(e.returnCode),
                delete this._sentMessages[e.messageIdentifier]);
              break;
            case 11:
              (n = this._sentMessages[e.messageIdentifier]) &&
                (n.timeOut && n.timeOut.cancel(),
                n.callback && n.callback(),
                delete this._sentMessages[e.messageIdentifier]);
              break;
            case 13:
              this.sendPinger.reset();
              break;
            case 14:
              this._disconnected(
                i.INVALID_MQTT_MESSAGE_TYPE.code,
                o(i.INVALID_MQTT_MESSAGE_TYPE, [e.type])
              );
              break;
            default:
              this._disconnected(
                i.INVALID_MQTT_MESSAGE_TYPE.code,
                o(i.INVALID_MQTT_MESSAGE_TYPE, [e.type])
              );
          }
        } catch (h) {
          return void this._disconnected(
            i.INTERNAL_ERROR.code,
            o(i.INTERNAL_ERROR, [h.message, h.stack.toString()])
          );
        }
      }),
      (y.prototype._on_socket_error = function (e) {
        this._disconnected(i.SOCKET_ERROR.code, o(i.SOCKET_ERROR, [e.data]));
      }),
      (y.prototype._on_socket_close = function () {
        this._disconnected(i.SOCKET_CLOSE.code, o(i.SOCKET_CLOSE));
      }),
      (y.prototype._socket_send = function (e) {
        if (1 == e.type) {
          var t = this._traceMask(e, "password");
          this._trace("Client._socket_send", t);
        } else this._trace("Client._socket_send", e);
        this.socket.send(e.encode()), this.sendPinger.reset();
      }),
      (y.prototype._receivePublish = function (e) {
        switch (e.payloadMessage.qos) {
          case "undefined":
          case 0:
            this._receiveMessage(e);
            break;
          case 1:
            var t = new c(4, { messageIdentifier: e.messageIdentifier });
            this._schedule_message(t), this._receiveMessage(e);
            break;
          case 2:
            (this._receivedMessages[e.messageIdentifier] = e),
              this.store("Received:", e);
            var n = new c(5, { messageIdentifier: e.messageIdentifier });
            this._schedule_message(n);
            break;
          default:
            throw Error("Invaild qos=" + wireMmessage.payloadMessage.qos);
        }
      }),
      (y.prototype._receiveMessage = function (e) {
        this.onMessageArrived && this.onMessageArrived(e.payloadMessage);
      }),
      (y.prototype._disconnected = function (e, t) {
        this._trace("Client._disconnected", e, t),
          this.sendPinger.cancel(),
          this.receivePinger.cancel(),
          this._connectTimeout && this._connectTimeout.cancel(),
          (this._msg_queue = []),
          (this._notify_msg_sent = {}),
          this.socket &&
            ((this.socket.onopen = null),
            (this.socket.onmessage = null),
            (this.socket.onerror = null),
            (this.socket.onclose = null),
            1 === this.socket.readyState && this.socket.close(),
            delete this.socket),
          this.connectOptions.uris &&
          this.hostIndex < this.connectOptions.uris.length - 1
            ? (this.hostIndex++,
              this._doConnect(this.connectOptions.uris[this.hostIndex]))
            : (void 0 === e && ((e = i.OK.code), (t = o(i.OK))),
              this.connected
                ? ((this.connected = !1),
                  this.onConnectionLost &&
                    this.onConnectionLost({ errorCode: e, errorMessage: t }))
                : 4 === this.connectOptions.mqttVersion &&
                  !1 === this.connectOptions.mqttVersionExplicit
                ? (this._trace("Failed to connect V4, dropping back to V3"),
                  (this.connectOptions.mqttVersion = 3),
                  this.connectOptions.uris
                    ? ((this.hostIndex = 0),
                      this._doConnect(this.connectOptions.uris[0]))
                    : this._doConnect(this.uri))
                : this.connectOptions.onFailure &&
                  this.connectOptions.onFailure({
                    invocationContext: this.connectOptions.invocationContext,
                    errorCode: e,
                    errorMessage: t,
                  }));
      }),
      (y.prototype._trace = function () {
        if (this.traceFunction) {
          for (var e in arguments)
            void 0 !== arguments[e] &&
              (arguments[e] = JSON.stringify(arguments[e]));
          var t = Array.prototype.slice.call(arguments).join("");
          this.traceFunction({ severity: "Debug", message: t });
        }
        if (null !== this._traceBuffer) {
          e = 0;
          for (var n = arguments.length; e < n; e++)
            this._traceBuffer.length == this._MAX_TRACE_ENTRIES &&
              this._traceBuffer.shift(),
              this._traceBuffer.push(
                0 === e || void 0 === arguments[e]
                  ? arguments[e]
                  : "  " + JSON.stringify(arguments[e])
              );
        }
      }),
      (y.prototype._traceMask = function (e, t) {
        var n = {};
        for (var i in e)
          e.hasOwnProperty(i) && (n[i] = i == t ? "******" : e[i]);
        return n;
      });
    var I = function (e, n, r, s) {
      var a;
      if ("string" != typeof e)
        throw new Error(o(i.INVALID_TYPE, [typeof e, "host"]));
      if (2 == arguments.length) {
        s = n;
        var c = (a = e).match(
          /^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/
        );
        if (!c) throw new Error(o(i.INVALID_ARGUMENT, [e, "host"]));
        (e = c[4] || c[2]), (n = parseInt(c[7])), (r = c[8]);
      } else {
        if (
          (3 == arguments.length && ((s = r), (r = "/mqtt")),
          "number" != typeof n || n < 0)
        )
          throw new Error(o(i.INVALID_TYPE, [typeof n, "port"]));
        if ("string" != typeof r)
          throw new Error(o(i.INVALID_TYPE, [typeof r, "path"]));
        var u =
          -1 != e.indexOf(":") && "[" != e.slice(0, 1) && "]" != e.slice(-1);
        a = "ws://" + (u ? "[" + e + "]" : e) + ":" + n + r;
      }
      for (var l = 0, d = 0; d < s.length; d++) {
        var p = s.charCodeAt(d);
        55296 <= p && p <= 56319 && d++, l++;
      }
      if ("string" != typeof s || l > 65535)
        throw new Error(o(i.INVALID_ARGUMENT, [s, "clientId"]));
      var f = new y(a, e, n, r, s);
      (this._getHost = function () {
        return e;
      }),
        (this._setHost = function () {
          throw new Error(o(i.UNSUPPORTED_OPERATION));
        }),
        (this._getPort = function () {
          return n;
        }),
        (this._setPort = function () {
          throw new Error(o(i.UNSUPPORTED_OPERATION));
        }),
        (this._getPath = function () {
          return r;
        }),
        (this._setPath = function () {
          throw new Error(o(i.UNSUPPORTED_OPERATION));
        }),
        (this._getURI = function () {
          return a;
        }),
        (this._setURI = function () {
          throw new Error(o(i.UNSUPPORTED_OPERATION));
        }),
        (this._getClientId = function () {
          return f.clientId;
        }),
        (this._setClientId = function () {
          throw new Error(o(i.UNSUPPORTED_OPERATION));
        }),
        (this._getOnConnectionLost = function () {
          return f.onConnectionLost;
        }),
        (this._setOnConnectionLost = function (e) {
          if ("function" != typeof e)
            throw new Error(o(i.INVALID_TYPE, [typeof e, "onConnectionLost"]));
          f.onConnectionLost = e;
        }),
        (this._getOnMessageDelivered = function () {
          return f.onMessageDelivered;
        }),
        (this._setOnMessageDelivered = function (e) {
          if ("function" != typeof e)
            throw new Error(
              o(i.INVALID_TYPE, [typeof e, "onMessageDelivered"])
            );
          f.onMessageDelivered = e;
        }),
        (this._getOnMessageArrived = function () {
          return f.onMessageArrived;
        }),
        (this._setOnMessageArrived = function (e) {
          if ("function" != typeof e)
            throw new Error(o(i.INVALID_TYPE, [typeof e, "onMessageArrived"]));
          f.onMessageArrived = e;
        }),
        (this._getTrace = function () {
          return f.traceFunction;
        }),
        (this._setTrace = function (e) {
          if ("function" != typeof e)
            throw new Error(o(i.INVALID_TYPE, [typeof e, "onTrace"]));
          f.traceFunction = e;
        }),
        (this.connect = function (e) {
          if (
            (t((e = e || {}), {
              timeout: "number",
              userName: "string",
              password: "string",
              willMessage: "object",
              keepAliveInterval: "number",
              cleanSession: "boolean",
              useSSL: "boolean",
              invocationContext: "object",
              onSuccess: "function",
              onFailure: "function",
              hosts: "object",
              ports: "object",
              mqttVersion: "number",
            }),
            void 0 === e.keepAliveInterval && (e.keepAliveInterval = 60),
            e.mqttVersion > 4 || e.mqttVersion < 3)
          )
            throw new Error(
              o(i.INVALID_ARGUMENT, [
                e.mqttVersion,
                "connectOptions.mqttVersion",
              ])
            );
          if (
            (void 0 === e.mqttVersion
              ? ((e.mqttVersionExplicit = !1), (e.mqttVersion = 4))
              : (e.mqttVersionExplicit = !0),
            void 0 === e.password && void 0 !== e.userName)
          )
            throw new Error(
              o(i.INVALID_ARGUMENT, [e.password, "connectOptions.password"])
            );
          if (e.willMessage) {
            if (!(e.willMessage instanceof C))
              throw new Error(
                o(i.INVALID_TYPE, [e.willMessage, "connectOptions.willMessage"])
              );
            if (void 0 === e.willMessage.destinationName)
              throw new Error(
                o(i.INVALID_TYPE, [
                  typeof e.willMessage.destinationName,
                  "connectOptions.willMessage.destinationName",
                ])
              );
          }
          if ((void 0 === e.cleanSession && (e.cleanSession = !0), e.hosts)) {
            if (!(e.hosts instanceof Array))
              throw new Error(
                o(i.INVALID_ARGUMENT, [e.hosts, "connectOptions.hosts"])
              );
            if (e.hosts.length < 1)
              throw new Error(
                o(i.INVALID_ARGUMENT, [e.hosts, "connectOptions.hosts"])
              );
            for (var n = !1, s = 0; s < e.hosts.length; s++) {
              if ("string" != typeof e.hosts[s])
                throw new Error(
                  o(i.INVALID_TYPE, [
                    typeof e.hosts[s],
                    "connectOptions.hosts[" + s + "]",
                  ])
                );
              if (
                /^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/.test(
                  e.hosts[s]
                )
              ) {
                if (0 == s) n = !0;
                else if (!n)
                  throw new Error(
                    o(i.INVALID_ARGUMENT, [
                      e.hosts[s],
                      "connectOptions.hosts[" + s + "]",
                    ])
                  );
              } else if (n)
                throw new Error(
                  o(i.INVALID_ARGUMENT, [
                    e.hosts[s],
                    "connectOptions.hosts[" + s + "]",
                  ])
                );
            }
            if (n) e.uris = e.hosts;
            else {
              if (!e.ports)
                throw new Error(
                  o(i.INVALID_ARGUMENT, [e.ports, "connectOptions.ports"])
                );
              if (!(e.ports instanceof Array))
                throw new Error(
                  o(i.INVALID_ARGUMENT, [e.ports, "connectOptions.ports"])
                );
              if (e.hosts.length != e.ports.length)
                throw new Error(
                  o(i.INVALID_ARGUMENT, [e.ports, "connectOptions.ports"])
                );
              for (e.uris = [], s = 0; s < e.hosts.length; s++) {
                if ("number" != typeof e.ports[s] || e.ports[s] < 0)
                  throw new Error(
                    o(i.INVALID_TYPE, [
                      typeof e.ports[s],
                      "connectOptions.ports[" + s + "]",
                    ])
                  );
                var c = e.hosts[s],
                  u = e.ports[s],
                  l = -1 != c.indexOf(":");
                e.uris.push(
                  (a = "ws://" + (l ? "[" + c + "]" : c) + ":" + u + r)
                );
              }
            }
          }
          f.connect(e);
        }),
        (this.subscribe = function (e, n) {
          if ("string" != typeof e) throw new Error("Invalid argument:" + e);
          if (
            (t((n = n || {}), {
              qos: "number",
              invocationContext: "object",
              onSuccess: "function",
              onFailure: "function",
              timeout: "number",
            }),
            n.timeout && !n.onFailure)
          )
            throw new Error(
              "subscribeOptions.timeout specified with no onFailure callback."
            );
          if (void 0 !== n.qos && 0 !== n.qos && 1 !== n.qos && 2 !== n.qos)
            throw new Error(
              o(i.INVALID_ARGUMENT, [n.qos, "subscribeOptions.qos"])
            );
          f.subscribe(e, n);
        }),
        (this.unsubscribe = function (e, n) {
          if ("string" != typeof e) throw new Error("Invalid argument:" + e);
          if (
            (t((n = n || {}), {
              invocationContext: "object",
              onSuccess: "function",
              onFailure: "function",
              timeout: "number",
            }),
            n.timeout && !n.onFailure)
          )
            throw new Error(
              "unsubscribeOptions.timeout specified with no onFailure callback."
            );
          f.unsubscribe(e, n);
        }),
        (this.send = function (e, t, n, r) {
          var s;
          if (0 == arguments.length) throw new Error("Invalid argument.length");
          if (1 == arguments.length) {
            if (!(e instanceof C) && "string" != typeof e)
              throw new Error("Invalid argument:" + typeof e);
            if (void 0 === (s = e).destinationName)
              throw new Error(
                o(i.INVALID_ARGUMENT, [
                  s.destinationName,
                  "Message.destinationName",
                ])
              );
            f.send(s);
          } else
            ((s = new C(t)).destinationName = e),
              arguments.length >= 3 && (s.qos = n),
              arguments.length >= 4 && (s.retained = r),
              f.send(s);
        }),
        (this.disconnect = function () {
          f.disconnect();
        }),
        (this.getTraceLog = function () {
          return f.getTraceLog();
        }),
        (this.startTrace = function () {
          f.startTrace();
        }),
        (this.stopTrace = function () {
          f.stopTrace();
        }),
        (this.isConnected = function () {
          return f.connected;
        });
    };
    I.prototype = {
      get host() {
        return this._getHost();
      },
      set host(e) {
        this._setHost(e);
      },
      get port() {
        return this._getPort();
      },
      set port(e) {
        this._setPort(e);
      },
      get path() {
        return this._getPath();
      },
      set path(e) {
        this._setPath(e);
      },
      get clientId() {
        return this._getClientId();
      },
      set clientId(e) {
        this._setClientId(e);
      },
      get onConnectionLost() {
        return this._getOnConnectionLost();
      },
      set onConnectionLost(e) {
        this._setOnConnectionLost(e);
      },
      get onMessageDelivered() {
        return this._getOnMessageDelivered();
      },
      set onMessageDelivered(e) {
        this._setOnMessageDelivered(e);
      },
      get onMessageArrived() {
        return this._getOnMessageArrived();
      },
      set onMessageArrived(e) {
        this._setOnMessageArrived(e);
      },
      get trace() {
        return this._getTrace();
      },
      set trace(e) {
        this._setTrace(e);
      },
    };
    var C = function (e) {
      var t;
      if (
        !(
          "string" == typeof e ||
          e instanceof ArrayBuffer ||
          e instanceof Int8Array ||
          e instanceof Uint8Array ||
          e instanceof Int16Array ||
          e instanceof Uint16Array ||
          e instanceof Int32Array ||
          e instanceof Uint32Array ||
          e instanceof Float32Array ||
          e instanceof Float64Array
        )
      )
        throw o(i.INVALID_ARGUMENT, [e, "newPayload"]);
      (t = e),
        (this._getPayloadString = function () {
          return "string" == typeof t ? t : g(t, 0, t.length);
        }),
        (this._getPayloadBytes = function () {
          if ("string" == typeof t) {
            var e = new ArrayBuffer(f(t)),
              n = new Uint8Array(e);
            return h(t, n, 0), n;
          }
          return t;
        });
      var n = void 0;
      (this._getDestinationName = function () {
        return n;
      }),
        (this._setDestinationName = function (e) {
          if ("string" != typeof e)
            throw new Error(o(i.INVALID_ARGUMENT, [e, "newDestinationName"]));
          n = e;
        });
      var r = 0;
      (this._getQos = function () {
        return r;
      }),
        (this._setQos = function (e) {
          if (0 !== e && 1 !== e && 2 !== e)
            throw new Error("Invalid argument:" + e);
          r = e;
        });
      var s = !1;
      (this._getRetained = function () {
        return s;
      }),
        (this._setRetained = function (e) {
          if ("boolean" != typeof e)
            throw new Error(o(i.INVALID_ARGUMENT, [e, "newRetained"]));
          s = e;
        });
      var a = !1;
      (this._getDuplicate = function () {
        return a;
      }),
        (this._setDuplicate = function (e) {
          a = e;
        });
    };
    return (
      (C.prototype = {
        get payloadString() {
          return this._getPayloadString();
        },
        get payloadBytes() {
          return this._getPayloadBytes();
        },
        get destinationName() {
          return this._getDestinationName();
        },
        set destinationName(e) {
          this._setDestinationName(e);
        },
        get qos() {
          return this._getQos();
        },
        set qos(e) {
          this._setQos(e);
        },
        get retained() {
          return this._getRetained();
        },
        set retained(e) {
          this._setRetained(e);
        },
        get duplicate() {
          return this._getDuplicate();
        },
        set duplicate(e) {
          this._setDuplicate(e);
        },
      }),
      { Client: I, Message: C }
    );
  })(window));
var imiEnvironments = {
  target: "default",
  default: {
    asset: {
      appId: "WE30091235",
      appSecret: "FZscYu85",
      pathConfig: {
        assetPath: "/assets/",
        root: "/",
      },
    },
    imiclient: {
      config: {
        storageBucket: "webexbankasean-fcm.appspot.com",
        apiKey: "AIzaSyAULe4cyj9HiGwGD-bTlE_qitiwdv2t3t0",
        messagingSenderId: "680806268045",
        appId: "1:680806268045:web:25a68e76fb959935a2b6c4",
        projectId: "webexbankasean-fcm",
        authDomain: "webexbankasean-fcm.firebaseapp.com",
      },
      imipush: {
        safariWebPushId: "web.com.imiconnect.safari.webpush",
      },
      authdomain: "https://rtm-us.imiconnect.io/rtmsAPI",
      rtmsdomain: "rtm-us.imiconnect.io",
      safariRegisterURL: "https://rtm-us.imiconnect.io/apnpweb/",
    },
    sw: {
      config: {
        messagingSenderId: "680806268045",
        serverUrl: "https://rtm-us.imiconnect.io",
        appid: "WE30091235",
      },
    },
  },
};
const JS_SDK_VERSION = "1.5.1.031";
function IMIClientStorage(e) {
  "use strict";
  var t = {
    namespace: e,
    _get: function (t) {
      return localStorage.getItem(e + t);
    },
    get: function (e) {
      var t = null,
        n = this._get(e);
      try {
        t = JSON.parse(n);
      } catch (i) {
        IMI.log("caught exception in _db.get(" + e + "): " + i);
      }
      return t;
    },
    _set: function (t, n) {
      localStorage.setItem(e + t, n);
    },
    set: function (e, t) {
      try {
        var n = JSON.stringify(t);
        this._set(e, n);
      } catch (i) {
        IMI.log("caught exception in _db.set(" + e + "): " + i);
      }
    },
    remove: function (t) {
      localStorage.removeItem(e + t),
        this.encryptDB && localStorage.removeItem(e + t + "_hash");
    },
    removeAll: function (e) {
      var t = this;
      e &&
        $.each(e, function (e, n) {
          t.remove(n), t.encryptDB && t.remove(n + "_hash");
        });
    },
    generateMessageId: function (e) {
      return [e.getType(), e.getDeviceId(), e.getTransactionId()].join("_");
    },
    setTransId: function (e) {
      try {
        var t = this.generateMessageId(e),
          n = sessionStorage.getItem("transIds");
        n ? (n = JSON.parse(n)).length >= 500 && n.shift() : (n = []),
          -1 === n.indexOf(t) &&
            (n.push(t), sessionStorage.setItem("transIds", JSON.stringify(n)));
      } catch (i) {}
    },
    getTransIds: function () {
      var e = [];
      try {
        e = (e = sessionStorage.getItem("transIds")) ? JSON.parse(e) : [];
      } catch (t) {}
      return e;
    },
    isDuplicateMessage: function (e) {
      var n = this.getTransIds(),
        i = t.generateMessageId(e);
      return -1 !== n.indexOf(i);
    },
  };
  return t;
}
void 0 === Function.prototype.bind &&
  (Function.prototype.bind = function (e) {
    var t = this,
      n = Array.prototype.slice,
      i = n.call(arguments, 1);
    return function () {
      return t.apply(e, i.concat(n.call(arguments)));
    };
  }),
  (Date.prototype.toUTCArray = function () {
    var e = this;
    return [
      e.getUTCFullYear(),
      e.getUTCMonth(),
      e.getUTCDate(),
      e.getUTCHours(),
      e.getUTCMinutes(),
      e.getUTCSeconds(),
    ];
  }),
  (Date.prototype.toISO = function () {
    var e,
      t = this.toUTCArray(),
      n = 0;
    for (t[1] += 1; n++ < 7; ) (e = t[n]) < 10 && (t[n] = "0" + e);
    return t.splice(0, 3).join("-") + "T" + t.join(":");
  });
var isLogEnabled = !1,
  IMI = IMI || {
    extend: function (e, t) {
      var n;
      for (n in ((t = t || {}), e)) e.hasOwnProperty(n) && (t[n] = e[n]);
      return t;
    },
    namespace: function (e) {
      var t,
        n = e.split("."),
        i = IMI;
      for ("IMI" === n[0] && (n = n.slice(1)), t = 0; t < n.length; t += 1)
        void 0 === i[n[t]] && (i[n[t]] = {}), (i = i[n[t]]);
      return i;
    },
    isString: function (e) {
      return "string" == typeof e;
    },
    isObject: function (e) {
      return "object" == typeof e;
    },
    isArray: function (e) {
      return "[object Array]" === Object.prototype.toString.call(e);
    },
    isNumber: function (e) {
      return "number" == typeof e;
    },
    defined: function (e) {
      return null != e && "" !== e;
    },
    isFunction: function (e) {
      return e && "function" == typeof e;
    },
    parseDate: function (e) {
      var t = "";
      try {
        if (e instanceof String) return e;
        t = e.toJSON();
      } catch (n) {
        IMI.log(n);
      }
      return t;
    },
    getDate: function (e) {
      var t = "";
      try {
        t = new Date(e);
      } catch (n) {
        IMI.log(n);
      }
      return t;
    },
    Post: function (e, t, n, i) {
      try {
        this.callMethod(e, "POST", t, n, i);
      } catch (r) {
        IMI.log("error", r);
      }
    },
    Put: function (e, t, n, i) {
      try {
        this.callMethod(e, "PUT", t, n, i);
      } catch (r) {
        IMI.log("error", r);
      }
    },
    Get: function (e, t, n, i) {
      try {
        this.callMethod(e, "GET", t, n, i);
      } catch (r) {
        IMI.log("error", r);
      }
    },
    callMethod: function (e, t, n, i, r) {
      try {
        var o = {};
        "function" == typeof (r = r || {})
          ? ((o.onSuccess = r), (o.onFailure = r))
          : ((o.onSuccess =
              r.onSuccess ||
              function (e) {
                IMI.log("onSuccess", e);
              }),
            (o.onFailure =
              r.onFailure ||
              function (e) {
                IMI.log("onFailure", e);
              })),
          this.HttpAjaxCall(e, t, n, i, o.onSuccess, o.onFailure);
      } catch (s) {
        IMI.log("error", s);
      }
    },
    HttpAjaxCall: function (e, t, n, i, r, o) {
      (i = i || {}),
        $.ajax({
          url: e,
          type: t,
          headers: i,
          data: n,
          success: function (e) {
            r(e);
          },
          error: function (e, t, n) {
            o(e), IMI.log(n);
          },
        });
    },
    getBrowserName: function () {
      try {
        var e,
          t,
          n = navigator.userAgent,
          i =
            (n.match(
              /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
            ),
            /iPad|iPhone|iPod/.test(navigator.userAgent) && window,
            navigator.appName);
        return (
          -1 !== n.indexOf("Opera") && (i = "Opera"),
          -1 !== n.indexOf('"CriOS"')
            ? (i = "chrome")
            : -1 !== n.indexOf("OPR")
            ? (i = "Opera")
            : -1 !== n.indexOf("Edge")
            ? (i = "MicrosoftEdge")
            : -1 !== n.indexOf("MSIE")
            ? (i = "IE")
            : -1 !== n.indexOf("Chrome")
            ? (i = "Chrome")
            : -1 !== n.indexOf("Safari")
            ? (i = "Safari")
            : -1 !== n.indexOf("Firefox")
            ? (i = "Firefox")
            : -1 !== n.indexOf("Trident/")
            ? (i = "IE")
            : (e = n.lastIndexOf(" ") + 1) < (t = n.lastIndexOf("/")) &&
              (i = n.substring(e, t)).toLowerCase() == i.toUpperCase() &&
              (i = navigator.appName),
          i.toLowerCase()
        );
      } catch (r) {
        IMI.log(r);
      }
    },
    getbrowserVersion: function () {
      try {
        var e,
          t,
          n = navigator.userAgent,
          i =
            (n.match(
              /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
            ),
            /iPad|iPhone|iPod/.test(navigator.userAgent) && window,
            "" + parseFloat(navigator.appVersion));
        return (
          -1 !== (e = n.indexOf("Opera")) &&
            ((i = n.substring(e + 6)),
            -1 !== (e = n.indexOf("Version")) && (i = n.substring(e + 8))),
          -1 !== (e = n.indexOf("CriOS"))
            ? (i = n.substring(e + 6))
            : -1 !== (e = n.indexOf("OPR"))
            ? (i = n.substring(e + 4))
            : -1 !== (e = n.indexOf("Edge")) || -1 !== (e = n.indexOf("MSIE"))
            ? (i = n.substring(e + 5))
            : -1 !== (e = n.indexOf("Chrome"))
            ? (i = n.substring(e + 7))
            : -1 !== (e = n.indexOf("Safari"))
            ? ((i = n.substring(e + 7)),
              -1 !== (e = n.indexOf("Version")) && (i = n.substring(e + 8)))
            : -1 != (e = n.indexOf("Firefox"))
            ? (i = n.substring(e + 8))
            : -1 != n.indexOf("Trident/")
            ? (i = n.substring(n.indexOf("rv:") + 3))
            : n.lastIndexOf(" ") + 1 < (e = n.lastIndexOf("/")) &&
              (i = n.substring(e + 1)),
          -1 != (t = i.indexOf(";")) && (i = i.substring(0, t)),
          -1 != (t = i.indexOf(" ")) && (i = i.substring(0, t)),
          -1 != (t = i.indexOf(")")) && (i = i.substring(0, t)),
          i
        );
      } catch (r) {
        IMI.log(r);
      }
    },
    getSDKVersion: function () {
      var e = "1.5.1.031".split(".");
      return e.pop(), e.join(".");
    },
    log: function (e) {
      isLogEnabled &&
        (arguments.callee.caller.name
          ? console.log(arguments.callee.caller.name + ":", e)
          : console.log(e));
    },
  },
  sdkversion = "2.0.0",
  protocol = location.protocol,
  webprefix = "v2_web_",
  isSSL = !1;
"https:" === protocol && (isSSL = !0);
var port = 1884;
isSSL && (port = 8884);
var reconnectTimeout = 1e4,
  keepAliveInterval = 10,
  policyTimeInterval = 18e5,
  timeStampInterval = 3e4;
!(function (e) {
  var t,
    n,
    i,
    r,
    o,
    s,
    a,
    c,
    u,
    l,
    d,
    p,
    f,
    h,
    g = {
      formatDate: function (e) {
        var t = new Date(e);
        return t.setMilliseconds(0), t.toISOString();
      },
      setCookie: function (e, t, n) {
        var i = new Date();
        i.setTime(i.getTime() + 60 * n * 1e3);
        var r = "expires=" + i.toUTCString();
        document.cookie = e + "=" + t + "; " + r;
      },
      getCookie: function (e) {
        for (
          var t = e + "=", n = document.cookie.split(";"), i = 0;
          i < n.length;
          i++
        ) {
          for (var r = n[i]; " " === r.charAt(0); ) r = r.substring(1);
          if (-1 !== r.indexOf(t)) return r.substring(t.length, r.length);
        }
        return null;
      },
      uuid: function () {
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(
          /[xy]/g,
          function (e) {
            var t = (16 * Math.random()) | 0;
            return ("x" === e ? t : (3 & t) | 8).toString(16);
          }
        );
      },
      randomUUID: function (e) {
        var t = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx";
        if (t.length < e) for (var n = t.length; n < e; n++) t = t.concat("x");
        return (t = t.replace(/[xy]/g, function (e) {
          var t = (16 * Math.random()) | 0;
          return ("x" === e ? t : (3 & t) | 8).toString(16);
        })).length >= e
          ? t.substring(0, e - 1)
          : t;
      },
      getLocation: function (e) {
        navigator.geolocation
          ? navigator.geolocation.getCurrentPosition(
              function (t) {
                $.isFunction(e) && e(t);
              },
              function (t) {
                $.isFunction(e) && e(null, t);
              }
            )
          : $.isFunction(e) && e(null, "GEO Location not enabled");
      },
      des: function (e, t, n, i, r, o) {
        var s,
          a,
          c,
          u,
          l,
          d,
          p,
          f,
          h,
          g,
          v,
          m,
          y,
          I,
          C = new Array(
            16843776,
            0,
            65536,
            16843780,
            16842756,
            66564,
            4,
            65536,
            1024,
            16843776,
            16843780,
            1024,
            16778244,
            16842756,
            16777216,
            4,
            1028,
            16778240,
            16778240,
            66560,
            66560,
            16842752,
            16842752,
            16778244,
            65540,
            16777220,
            16777220,
            65540,
            0,
            1028,
            66564,
            16777216,
            65536,
            16843780,
            4,
            16842752,
            16843776,
            16777216,
            16777216,
            1024,
            16842756,
            65536,
            66560,
            16777220,
            1024,
            4,
            16778244,
            66564,
            16843780,
            65540,
            16842752,
            16778244,
            16777220,
            1028,
            66564,
            16843776,
            1028,
            16778240,
            16778240,
            0,
            65540,
            66560,
            0,
            16842756
          ),
          b = new Array(
            -2146402272,
            -2147450880,
            32768,
            1081376,
            1048576,
            32,
            -2146435040,
            -2147450848,
            -2147483616,
            -2146402272,
            -2146402304,
            -2147483648,
            -2147450880,
            1048576,
            32,
            -2146435040,
            1081344,
            1048608,
            -2147450848,
            0,
            -2147483648,
            32768,
            1081376,
            -2146435072,
            1048608,
            -2147483616,
            0,
            1081344,
            32800,
            -2146402304,
            -2146435072,
            32800,
            0,
            1081376,
            -2146435040,
            1048576,
            -2147450848,
            -2146435072,
            -2146402304,
            32768,
            -2146435072,
            -2147450880,
            32,
            -2146402272,
            1081376,
            32,
            32768,
            -2147483648,
            32800,
            -2146402304,
            1048576,
            -2147483616,
            1048608,
            -2147450848,
            -2147483616,
            1048608,
            1081344,
            0,
            -2147450880,
            32800,
            -2147483648,
            -2146435040,
            -2146402272,
            1081344
          ),
          T = new Array(
            520,
            134349312,
            0,
            134348808,
            134218240,
            0,
            131592,
            134218240,
            131080,
            134217736,
            134217736,
            131072,
            134349320,
            131080,
            134348800,
            520,
            134217728,
            8,
            134349312,
            512,
            131584,
            134348800,
            134348808,
            131592,
            134218248,
            131584,
            131072,
            134218248,
            8,
            134349320,
            512,
            134217728,
            134349312,
            134217728,
            131080,
            520,
            131072,
            134349312,
            134218240,
            0,
            512,
            131080,
            134349320,
            134218240,
            134217736,
            512,
            0,
            134348808,
            134218248,
            131072,
            134217728,
            134349320,
            8,
            131592,
            131584,
            134217736,
            134348800,
            134218248,
            520,
            134348800,
            131592,
            8,
            134348808,
            131584
          ),
          w = new Array(
            8396801,
            8321,
            8321,
            128,
            8396928,
            8388737,
            8388609,
            8193,
            0,
            8396800,
            8396800,
            8396929,
            129,
            0,
            8388736,
            8388609,
            1,
            8192,
            8388608,
            8396801,
            128,
            8388608,
            8193,
            8320,
            8388737,
            1,
            8320,
            8388736,
            8192,
            8396928,
            8396929,
            129,
            8388736,
            8388609,
            8396800,
            8396929,
            129,
            0,
            0,
            8396800,
            8320,
            8388736,
            8388737,
            1,
            8396801,
            8321,
            8321,
            128,
            8396929,
            129,
            1,
            8192,
            8388609,
            8193,
            8396928,
            8388737,
            8193,
            8320,
            8388608,
            8396801,
            128,
            8388608,
            8192,
            8396928
          ),
          S = new Array(
            256,
            34078976,
            34078720,
            1107296512,
            524288,
            256,
            1073741824,
            34078720,
            1074266368,
            524288,
            33554688,
            1074266368,
            1107296512,
            1107820544,
            524544,
            1073741824,
            33554432,
            1074266112,
            1074266112,
            0,
            1073742080,
            1107820800,
            1107820800,
            33554688,
            1107820544,
            1073742080,
            0,
            1107296256,
            34078976,
            33554432,
            1107296256,
            524544,
            524288,
            1107296512,
            256,
            33554432,
            1073741824,
            34078720,
            1107296512,
            1074266368,
            33554688,
            1073741824,
            1107820544,
            34078976,
            1074266368,
            256,
            33554432,
            1107820544,
            1107820800,
            524544,
            1107296256,
            1107820800,
            34078720,
            0,
            1074266112,
            1107296256,
            524544,
            33554688,
            1073742080,
            524288,
            0,
            1074266112,
            34078976,
            1073742080
          ),
          x = new Array(
            536870928,
            541065216,
            16384,
            541081616,
            541065216,
            16,
            541081616,
            4194304,
            536887296,
            4210704,
            4194304,
            536870928,
            4194320,
            536887296,
            536870912,
            16400,
            0,
            4194320,
            536887312,
            16384,
            4210688,
            536887312,
            16,
            541065232,
            541065232,
            0,
            4210704,
            541081600,
            16400,
            4210688,
            541081600,
            536870912,
            536887296,
            16,
            541065232,
            4210688,
            541081616,
            4194304,
            16400,
            536870928,
            4194304,
            536887296,
            536870912,
            16400,
            536870928,
            541081616,
            4210688,
            541065216,
            4210704,
            541081600,
            0,
            541065232,
            16,
            16384,
            541065216,
            4210704,
            16384,
            4194320,
            536887312,
            0,
            541081600,
            536870912,
            4194320,
            536887312
          ),
          _ = new Array(
            2097152,
            69206018,
            67110914,
            0,
            2048,
            67110914,
            2099202,
            69208064,
            69208066,
            2097152,
            0,
            67108866,
            2,
            67108864,
            69206018,
            2050,
            67110912,
            2099202,
            2097154,
            67110912,
            67108866,
            69206016,
            69208064,
            2097154,
            69206016,
            2048,
            2050,
            69208066,
            2099200,
            2,
            67108864,
            2099200,
            67108864,
            2099200,
            2097152,
            67110914,
            67110914,
            69206018,
            69206018,
            2,
            2097154,
            67108864,
            67110912,
            2097152,
            69208064,
            2050,
            2099202,
            69208064,
            2050,
            67108866,
            69208066,
            69206016,
            2099200,
            0,
            2,
            69208066,
            0,
            2099202,
            69206016,
            2048,
            67108866,
            67110912,
            2048,
            2097154
          ),
          k = new Array(
            268439616,
            4096,
            262144,
            268701760,
            268435456,
            268439616,
            64,
            268435456,
            262208,
            268697600,
            268701760,
            266240,
            268701696,
            266304,
            4096,
            64,
            268697600,
            268435520,
            268439552,
            4160,
            266240,
            262208,
            268697664,
            268701696,
            4160,
            0,
            0,
            268697664,
            268435520,
            268439552,
            266304,
            262144,
            266304,
            262144,
            268701696,
            4096,
            64,
            268697664,
            4096,
            266304,
            268439552,
            64,
            268435520,
            268697600,
            268697664,
            268435456,
            262144,
            268439616,
            0,
            268701760,
            262208,
            268435520,
            268697600,
            268439552,
            268439616,
            0,
            268701760,
            266240,
            266240,
            4160,
            4160,
            262208,
            268435456,
            268701696
          ),
          E = this.des_createKeys(e),
          A = 0,
          D = t.length,
          M = 0,
          N = 32 == E.length ? 3 : 9;
        for (
          f =
            3 == N
              ? n
                ? new Array(0, 32, 2)
                : new Array(30, -2, -2)
              : n
              ? new Array(0, 32, 2, 62, 30, -2, 64, 96, 2)
              : new Array(94, 62, -2, 32, 64, 2, 30, -2, -2),
            2 == o
              ? (t += "        ")
              : 1 == o
              ? ((c = 8 - (D % 8)),
                (t += String.fromCharCode(c, c, c, c, c, c, c, c)),
                8 == c && (D += 8))
              : o || (t += "\0\0\0\0\0\0\0\0"),
            result = "",
            tempresult = "",
            1 == i &&
              ((h =
                (r.charCodeAt(A++) << 24) |
                (r.charCodeAt(A++) << 16) |
                (r.charCodeAt(A++) << 8) |
                r.charCodeAt(A++)),
              (v =
                (r.charCodeAt(A++) << 24) |
                (r.charCodeAt(A++) << 16) |
                (r.charCodeAt(A++) << 8) |
                r.charCodeAt(A++)),
              (A = 0));
          A < D;

        ) {
          for (
            d =
              (t.charCodeAt(A++) << 24) |
              (t.charCodeAt(A++) << 16) |
              (t.charCodeAt(A++) << 8) |
              t.charCodeAt(A++),
              p =
                (t.charCodeAt(A++) << 24) |
                (t.charCodeAt(A++) << 16) |
                (t.charCodeAt(A++) << 8) |
                t.charCodeAt(A++),
              1 == i &&
                (n
                  ? ((d ^= h), (p ^= v))
                  : ((g = h), (m = v), (h = d), (v = p))),
              d ^= (c = 252645135 & ((d >>> 4) ^ p)) << 4,
              d ^= (c = 65535 & ((d >>> 16) ^ (p ^= c))) << 16,
              d ^= c = 858993459 & (((p ^= c) >>> 2) ^ d),
              d ^= c = 16711935 & (((p ^= c << 2) >>> 8) ^ d),
              d =
                ((d ^= (c = 1431655765 & ((d >>> 1) ^ (p ^= c << 8))) << 1) <<
                  1) |
                (d >>> 31),
              p = ((p ^= c) << 1) | (p >>> 31),
              a = 0;
            a < N;
            a += 3
          ) {
            for (y = f[a + 1], I = f[a + 2], s = f[a]; s != y; s += I)
              (c = d),
                (d = p),
                (p =
                  c ^
                  (b[((u = p ^ E[s]) >>> 24) & 63] |
                    w[(u >>> 16) & 63] |
                    x[(u >>> 8) & 63] |
                    k[63 & u] |
                    C[((l = ((p >>> 4) | (p << 28)) ^ E[s + 1]) >>> 24) & 63] |
                    T[(l >>> 16) & 63] |
                    S[(l >>> 8) & 63] |
                    _[63 & l]));
            (c = d), (d = p), (p = c);
          }
          (p = (p >>> 1) | (p << 31)),
            (p ^= c = 1431655765 & (((d = (d >>> 1) | (d << 31)) >>> 1) ^ p)),
            (p ^= (c = 16711935 & ((p >>> 8) ^ (d ^= c << 1))) << 8),
            (p ^= (c = 858993459 & ((p >>> 2) ^ (d ^= c))) << 2),
            (p ^= c = 65535 & (((d ^= c) >>> 16) ^ p)),
            (p ^= c = 252645135 & (((d ^= c << 16) >>> 4) ^ p)),
            (d ^= c << 4),
            1 == i && (n ? ((h = d), (v = p)) : ((d ^= g), (p ^= m))),
            (tempresult += String.fromCharCode(
              d >>> 24,
              (d >>> 16) & 255,
              (d >>> 8) & 255,
              255 & d,
              p >>> 24,
              (p >>> 16) & 255,
              (p >>> 8) & 255,
              255 & p
            )),
            512 == (M += 8) &&
              ((result += tempresult), (tempresult = ""), (M = 0));
        }
        return result + tempresult;
      },
      des_createKeys: function (e) {
        (pc2bytes0 = new Array(
          0,
          4,
          536870912,
          536870916,
          65536,
          65540,
          536936448,
          536936452,
          512,
          516,
          536871424,
          536871428,
          66048,
          66052,
          536936960,
          536936964
        )),
          (pc2bytes1 = new Array(
            0,
            1,
            1048576,
            1048577,
            67108864,
            67108865,
            68157440,
            68157441,
            256,
            257,
            1048832,
            1048833,
            67109120,
            67109121,
            68157696,
            68157697
          )),
          (pc2bytes2 = new Array(
            0,
            8,
            2048,
            2056,
            16777216,
            16777224,
            16779264,
            16779272,
            0,
            8,
            2048,
            2056,
            16777216,
            16777224,
            16779264,
            16779272
          )),
          (pc2bytes3 = new Array(
            0,
            2097152,
            134217728,
            136314880,
            8192,
            2105344,
            134225920,
            136323072,
            131072,
            2228224,
            134348800,
            136445952,
            139264,
            2236416,
            134356992,
            136454144
          )),
          (pc2bytes4 = new Array(
            0,
            262144,
            16,
            262160,
            0,
            262144,
            16,
            262160,
            4096,
            266240,
            4112,
            266256,
            4096,
            266240,
            4112,
            266256
          )),
          (pc2bytes5 = new Array(
            0,
            1024,
            32,
            1056,
            0,
            1024,
            32,
            1056,
            33554432,
            33555456,
            33554464,
            33555488,
            33554432,
            33555456,
            33554464,
            33555488
          )),
          (pc2bytes6 = new Array(
            0,
            268435456,
            524288,
            268959744,
            2,
            268435458,
            524290,
            268959746,
            0,
            268435456,
            524288,
            268959744,
            2,
            268435458,
            524290,
            268959746
          )),
          (pc2bytes7 = new Array(
            0,
            65536,
            2048,
            67584,
            536870912,
            536936448,
            536872960,
            536938496,
            131072,
            196608,
            133120,
            198656,
            537001984,
            537067520,
            537004032,
            537069568
          )),
          (pc2bytes8 = new Array(
            0,
            262144,
            0,
            262144,
            2,
            262146,
            2,
            262146,
            33554432,
            33816576,
            33554432,
            33816576,
            33554434,
            33816578,
            33554434,
            33816578
          )),
          (pc2bytes9 = new Array(
            0,
            268435456,
            8,
            268435464,
            0,
            268435456,
            8,
            268435464,
            1024,
            268436480,
            1032,
            268436488,
            1024,
            268436480,
            1032,
            268436488
          )),
          (pc2bytes10 = new Array(
            0,
            32,
            0,
            32,
            1048576,
            1048608,
            1048576,
            1048608,
            8192,
            8224,
            8192,
            8224,
            1056768,
            1056800,
            1056768,
            1056800
          )),
          (pc2bytes11 = new Array(
            0,
            16777216,
            512,
            16777728,
            2097152,
            18874368,
            2097664,
            18874880,
            67108864,
            83886080,
            67109376,
            83886592,
            69206016,
            85983232,
            69206528,
            85983744
          )),
          (pc2bytes12 = new Array(
            0,
            4096,
            134217728,
            134221824,
            524288,
            528384,
            134742016,
            134746112,
            16,
            4112,
            134217744,
            134221840,
            524304,
            528400,
            134742032,
            134746128
          )),
          (pc2bytes13 = new Array(
            0,
            4,
            256,
            260,
            0,
            4,
            256,
            260,
            1,
            5,
            257,
            261,
            1,
            5,
            257,
            261
          ));
        for (
          var t,
            n,
            i,
            r = new Array(32),
            o = new Array(0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0),
            s = 0,
            a = 0,
            c = 0;
          c < 1;
          c++
        ) {
          (left =
            (e.charCodeAt(s++) << 24) |
            (e.charCodeAt(s++) << 16) |
            (e.charCodeAt(s++) << 8) |
            e.charCodeAt(s++)),
            (right =
              (e.charCodeAt(s++) << 24) |
              (e.charCodeAt(s++) << 16) |
              (e.charCodeAt(s++) << 8) |
              e.charCodeAt(s++)),
            (i = 252645135 & ((left >>> 4) ^ right)),
            (right ^= i),
            (left ^= i << 4),
            (i = 65535 & ((right >>> -16) ^ left)),
            (left ^= i),
            (right ^= i << -16),
            (i = 858993459 & ((left >>> 2) ^ right)),
            (right ^= i),
            (left ^= i << 2),
            (i = 65535 & ((right >>> -16) ^ left)),
            (left ^= i),
            (right ^= i << -16),
            (i = 1431655765 & ((left >>> 1) ^ right)),
            (right ^= i),
            (left ^= i << 1),
            (i = 16711935 & ((right >>> 8) ^ left)),
            (left ^= i),
            (right ^= i << 8),
            (i = 1431655765 & ((left >>> 1) ^ right)),
            (right ^= i),
            (left ^= i << 1),
            (i = (left << 8) | ((right >>> 20) & 240)),
            (left =
              (right << 24) |
              ((right << 8) & 16711680) |
              ((right >>> 8) & 65280) |
              ((right >>> 24) & 240)),
            (right = i);
          for (var u = 0; u < o.length; u++)
            o[u]
              ? ((left = (left << 2) | (left >>> 26)),
                (right = (right << 2) | (right >>> 26)))
              : ((left = (left << 1) | (left >>> 27)),
                (right = (right << 1) | (right >>> 27))),
              (left &= -15),
              (right &= -15),
              (t =
                pc2bytes0[left >>> 28] |
                pc2bytes1[(left >>> 24) & 15] |
                pc2bytes2[(left >>> 20) & 15] |
                pc2bytes3[(left >>> 16) & 15] |
                pc2bytes4[(left >>> 12) & 15] |
                pc2bytes5[(left >>> 8) & 15] |
                pc2bytes6[(left >>> 4) & 15]),
              (n =
                pc2bytes7[right >>> 28] |
                pc2bytes8[(right >>> 24) & 15] |
                pc2bytes9[(right >>> 20) & 15] |
                pc2bytes10[(right >>> 16) & 15] |
                pc2bytes11[(right >>> 12) & 15] |
                pc2bytes12[(right >>> 8) & 15] |
                pc2bytes13[(right >>> 4) & 15]),
              (r[a++] = t ^ (i = 65535 & ((n >>> 16) ^ t))),
              (r[a++] = n ^ (i << 16));
        }
        return r;
      },
      decodeBase64: function (e) {
        var t,
          n,
          i = this,
          r = 0,
          o = e.length,
          s = [];
        if (((e = String(e)), 0 === o)) return e;
        if (o % 4 != 0) throw "Cannot decode base64";
        for (
          "=" === e.charAt(o - 1) &&
            ((r = 1), "=" === e.charAt(o - 2) && (r = 2), (o -= 4)),
            t = 0;
          t < o;
          t += 4
        )
          (n =
            (i._getbyte64(e, t) << 18) |
            (i._getbyte64(e, t + 1) << 12) |
            (i._getbyte64(e, t + 2) << 6) |
            i._getbyte64(e, t + 3)),
            s.push(String.fromCharCode(n >> 16, (n >> 8) & 255, 255 & n));
        switch (r) {
          case 1:
            (n =
              (i._getbyte64(e, t) << 18) |
              (i._getbyte64(e, t + 1) << 12) |
              (i._getbyte64(e, t + 2) << 6)),
              s.push(String.fromCharCode(n >> 16, (n >> 8) & 255));
            break;
          case 2:
            (n = (i._getbyte64(e, t) << 18) | (i._getbyte64(e, t + 1) << 12)),
              s.push(String.fromCharCode(n >> 16));
        }
        return s.join("");
      },
      _getbyte64: function (e, t) {
        var n =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
            e.charAt(t)
          );
        if (-1 === n) throw "Cannot decode base64";
        return n;
      },
      aes: function (t, n, i) {
        try {
          var r = CryptoJS.enc.Base64.parse(n);
          if (0 === i) {
            var o = CryptoJS.lib.WordArray.random(16),
              s = CryptoJS.AES.encrypt(t, r, { iv: o }),
              a = CryptoJS.enc.Utf8.parse("");
            a.concat(o),
              a.concat(s.ciphertext),
              (t = CryptoJS.enc.Base64.stringify(a));
          } else {
            var c = CryptoJS.enc.Base64.parse(t),
              u =
                ((o = CryptoJS.lib.WordArray.random(16)),
                CryptoJS.lib.WordArray.create(
                  c.words.slice(o.words.length, c.words.length)
                )),
              l = CryptoJS.lib.WordArray.create(
                c.words.slice(0, o.words.length + 1)
              );
            u = CryptoJS.enc.Base64.stringify(u);
            var d = CryptoJS.AES.decrypt(u, r, { iv: l });
            t = CryptoJS.enc.Utf8.stringify(d);
          }
        } catch (p) {
          e.log("failed to enc/dec ,please add aes library", p);
        }
        return t;
      },
      getQueryString: function (e) {
        var t = e
          .split("?")[1]
          .split("&")
          .map((e) => e.split("="));
        return Object.fromEntries(t);
      },
    },
    v = !1,
    m = "current_sdk_version";
  e.namespace("IMI.IMIconnect"),
    (e.IMIconnect = a =
      {
        isRegister: !1,
        subscriptions: [],
        isDisconnected: !1,
        isRTEnabled: !1,
        isLocationEnabled: !1,
        isEncryptionEnabled: !1,
        isPushEnabled: !1,
        webpush: void 0,
        icConfig: void 0,
        userId: void 0,
        iCDeviceProfile: void 0,
        clientId: void 0,
        encryptionType: "DES",
        encryptionKey: "",
        refreshToken: "",
        accessToken: "",
        serverInboxVersion: null,
        startupLogger: function () {
          isLogEnabled = !0;
        },
        startup: function (n) {
          var r;
          if (
            ((i = this),
            window.imiEnvironments &&
              (r = new e.ICConfig(imiEnvironments[imiEnvironments.target])),
            null == r ||
              !r instanceof e.ICConfig ||
              void 0 === r.getAppID() ||
              void 0 === r.getClientKey())
          )
            throw i._getErrorWithDescription(
              e.ICErrorCodes.InvalidParameterValue,
              "Missing AppID/ClientKey in target environment. Please check imi-environment.js file"
            );
          if (((i.icConfig = r), i.icConfig.apis)) {
            Object.assign(window, i.icConfig.apis);
            var o = {
              apiProtocol: authdomain.split("://")[0],
              rtmsAPIURL: authdomain + "/api/v3",
              rtmsAPIURLV4: authdomain + "/api/v4",
              SERVER_INBOX_VERSION_TAG_FOR_V4: "server_inbox_version",
            };
            Object.assign(window, o);
            var a = {
              elbZeroRatingURLTemplate:
                apiProtocol + "://$(domain)/rtmsAPI/api/v3",
              elbZeroRatingURLUploadFile:
                apiProtocol + "://$(domain)/rtmsAPI/api/v1",
              elbZeroRatingURL: rtmsAPIURL,
              elbZeroRatingURLV4: rtmsAPIURLV4,
              elbZeroRatingUploadURL: authdomain + "/api/v1",
            };
            Object.assign(window, a);
          }
          var c = (i.appName = r.getAppID());
          (i.appSecret = r.getClientKey()),
            (i.isRegister = !1),
            (i.webpush = new e.WebPushClient(this)),
            (i.isTokenExpired = !0),
            (i.registerListenerObjs = []),
            (t = new IMIClientStorage("IMI.Core." + c + ".")),
            (_readReceiptDB = new y("read_receipts"));
          try {
            (s = sessionStorage.getItem("_tabId")) ||
              ((s = g.uuid()), sessionStorage.setItem("_tabId", s));
          } catch (l) {}
          switch (
            (e.ICMessaging.getInstance().handleEvents(),
            (i.iCDeviceProfile = i.loadDeviceProfiles()),
            i.iCDeviceProfile &&
              (i.clientId =
                c +
                "/" +
                i.iCDeviceProfile.userId +
                "/" +
                webprefix +
                i.iCDeviceProfile.deviceId),
            t.get(m))
          ) {
            case null:
              i._migrateTov130();
          }
          i._updatePolicyCheck(n);
          var u = t.get("policyUpdate");
          u && "Success" === u.status && i._changePolicyDetails(u);
        },
        loadDeviceProfiles: function () {
          var n = t.get("deviceId"),
            i = t.get("userId"),
            r = t.get("customerId"),
            o = t.get("isSystemGenerated") || !1;
          return e.defined(n) && e.defined(i)
            ? new e.ICDeviceProfile(n, i, r, o)
            : null;
        },
        shutdown: function () {
          try {
            try {
              r && r.isConnected() && r.disconnect();
            } catch (n) {
              e.log(n);
            }
            t && (t.remove("policyUpdate"), t.remove("isConnectionOpened"));
          } catch (n) {
            throw (e.log(n), n);
          }
        },
        isRegistered: function () {
          var e = t.get("appregistered");
          return null !== e && !0 === e;
        },
        register: function (n, r) {
          var o = t.get("isRegistering");
          if (null != o && "true" === o)
            throw i._getErrorWithDescription(
              e.ICErrorCodes.AlreadyProcessing,
              "SDK registration already processing , you must wait for registration to complete"
            );
          var s = t.get("isUnRegistering");
          if (null != s && 1 == s)
            throw i._getErrorWithDescription(
              e.ICErrorCodes.AlreadyProcessing,
              "SDK unregister already processing , you must wait for unregister to complete"
            );
          try {
            var a = this;
            a._isInitialized(), a.assertProfile(n);
            var c = i.icConfig.getAppID(),
              u = t.get("appregistered"),
              l = t.get("pushRegistered");
            if (null !== u && !0 === u) {
              if (l) throw e.ICErrorCodes.DeviceIdAlreadyRegistered;
              if (!(i.isPushEnabled && i.webpush && n.userId))
                throw e.ICErrorCodes.DeviceIdAlreadyRegistered;
              i.webpush.init(c, n.userId), a._updatePolicyCheck(r);
            }
            var d = !1;
            if (null !== i.iCDeviceProfile) {
              if (
                n.deviceId === i.iCDeviceProfile.deviceId &&
                (void 0 === n.userId || "" === n.userId || null === n.userId)
              )
                return (
                  n._setUserId(
                    i.iCDeviceProfile.userId,
                    i.iCDeviceProfile.mIsAppUserSystemGenerated
                  ),
                  r &&
                    e.isFunction(r.onSuccess) &&
                    i.iCDeviceProfile.mIsAppUserSystemGenerated &&
                    r.onSuccess({ ic_app_user_id: i.iCDeviceProfile.userId }),
                  void (i.clientId =
                    c +
                    "/" +
                    i.iCDeviceProfile.userId +
                    "/" +
                    webprefix +
                    i.iCDeviceProfile.deviceId)
                );
              d =
                !i.iCDeviceProfile.isAppUserSystemGenerated() &&
                i.iCDeviceProfile.userId !== n.userId;
            }
            d
              ? i.deRegisterDeviceProfile({
                  onSuccess: function () {
                    i.registerWithServer(n, r);
                  },
                  onFailure: function () {
                    r && e.isFunction(r.onFailure) && r.onFailure();
                  },
                })
              : (t.set("isRegistering", "true"), i.registerWithServer(n, r));
          } catch (p) {
            if ((e.log(p), !r || !e.isFunction(r.onFailure))) throw p;
            r.onFailure(p);
          }
        },
        registerWithServer: function (r, o) {
          var s = this;
          t.set("deviceId", (n = r.deviceId));
          var a = i.icConfig.getAppID(),
            c = i.icConfig.getClientKey(),
            u = r.userId || "",
            l = rtmsAPIURL + "/" + a + "/register",
            d = {
              tenant: "1",
              userId: u,
              channel: "rt",
              channelType: "web",
              deviceId: n,
              data: {
                update: {
                  useragent: navigator.userAgent,
                  os: e.getBrowserName(),
                  osversion: e.getbrowserVersion(),
                  language: navigator.language,
                },
              },
            },
            p = JSON.stringify(d),
            f = {
              "Content-Type": "application/json",
              secretKey: i.appSecret,
              sdkversion: sdkversion,
            };
          i.securedToken && (f.Authorization = i.securedToken),
            $.ajax({
              url: l,
              type: "POST",
              headers: f,
              data: p,
              success: function (r) {
                if (
                  (t.set("policyUpdate", r),
                  t.set(m, "1.5.1.031"),
                  "Success" === r.status)
                ) {
                  var l = !1;
                  if (
                    (("" !== u && null != u) || ((l = !0), (u = r.userId)),
                    (i.iCDeviceProfile = new e.ICDeviceProfile(n, u, null, l)),
                    t.set("isSystemGenerated", l),
                    t.set("userId", u),
                    t.set("appName", a),
                    t.set("appSecret", c),
                    t.set("appregistered", !0),
                    t.set("regiterResp", r),
                    s._changePolicyDetails(r),
                    (i.clientId =
                      a +
                      "/" +
                      u +
                      "/" +
                      webprefix +
                      i.iCDeviceProfile.deviceId),
                    i.isPushEnabled && i.webpush)
                  )
                    try {
                      i.webpush.init(a, u);
                    } catch (d) {
                      e.log(d);
                    }
                  t.remove("isRegistering"),
                    o && o.onSuccess && o.onSuccess({ userId: u });
                } else
                  r && "0" != r.code
                    ? i._invokeFailureCallBack(o, r)
                    : (o && e.isFunction(o.onFailure) && o.onFailure(r.status),
                      t.set("appregistered", !1));
              },
              error: function (t, n, i) {
                e.log(t), o && e.isFunction(o.onFailure) && o.onFailure(i);
              },
            });
        },
        _migrateTov130: function () {
          t.set("appregistered", !1);
        },
        _isInitialized: function () {
          if (
            null == i.icConfig ||
            null == i.icConfig ||
            !(i.icConfig instanceof e.ICConfig)
          )
            throw e.ICErrorCodes.NotInitialized;
          return !0;
        },
        updateProfileData: function (t, n, r) {
          var o = this;
          if ((o._isInitialized(), o.isDeviceRegistered(), !e.defined(n)))
            throw i._getErrorWithDescription(
              e.ICErrorCodes.InvalidParameterValue,
              "Please provide the valid value"
            );
          t === e.ICDeviceProfileParam.UserId
            ? o.updateUserId(n, r)
            : t === e.ICDeviceProfileParam.CustomerId &&
              o.updateCustomerId(n, r);
        },
        removeProfileData: function (t, n) {
          var i = this;
          i._isInitialized(),
            i.isDeviceRegistered(),
            t === e.ICDeviceProfileParam.UserId
              ? i.removeUserId(n)
              : t === e.ICDeviceProfileParam.CustomerId &&
                i.removeCustomerId(n);
        },
        updateUserId: function (e, t) {
          var n = this,
            o = elbZeroRatingURL + "/" + i.appName + "/setUserId",
            s = r._getPayLoadMsg(
              JSON.stringify({
                clientId: i.clientId,
                channel: "rt",
                channelType: "web",
                userId: e,
              })
            ),
            a = {
              "Content-Type": "application/json",
              secretKey: i.appSecret,
              sdkversion: sdkversion,
            };
          i.securedToken && (a.Authorization = i.securedToken),
            i.accessToken && (a.accessToken = i.accessToken),
            $.ajax({
              url: o,
              type: "POST",
              headers: a,
              data: s,
              success: function (r) {
                "Success" === r.status
                  ? (t && t.onSuccess && t.onSuccess(r),
                    n.updateAppUser((e = e || r.userId), !1),
                    n._updateAccessToken(r))
                  : r && "0" != r.code
                  ? i._invokeFailureCallBack(t, r)
                  : t && t.onFailure && t.onFailure(r.status);
              },
              error: function (e, n, i) {
                t && t.onFailure && t.onFailure(i);
              },
            });
        },
        _updateAccessToken: function (e) {
          if (e) {
            var n = t.get("regiterResp");
            e.accessToken &&
              ((i.refreshToken = e.refreshToken),
              (i.accessToken = e.accessToken),
              (i.encryptionKey = e.encryptionKey),
              n &&
                ((i.encryptionType = n.encryptionType || "DES"),
                (n.encryptionKey =
                  "AES" === i.encryptionType
                    ? e.encryptionKey
                    : i.icConfig.getAppID().substring(0, 3) +
                      i.icConfig.getClientKey()),
                (n.refreshToken = e.refreshToken),
                (n.accessToken = e.accessToken),
                t.set("regiterResp", n)));
          }
        },
        updateCustomerId: function (e, n) {
          var o = elbZeroRatingURL + "/" + i.appName + "/setCustomerId",
            s = r._getPayLoadMsg(
              JSON.stringify({
                clientId: i.clientId,
                channel: "rt",
                channelType: "web",
                customerId: e,
              })
            ),
            a = {
              "Content-Type": "application/json",
              secretKey: i.appSecret,
              sdkversion: sdkversion,
            };
          i.securedToken && (a.Authorization = i.securedToken),
            i.accessToken && (a.accessToken = i.accessToken),
            $.ajax({
              url: o,
              type: "POST",
              headers: a,
              data: s,
              success: function (r) {
                "Success" === r.status
                  ? ((i.iCDeviceProfile.customerId = e),
                    t.set("customerId", e),
                    n && n.onSuccess && n.onSuccess(r))
                  : r && "0" != r.code
                  ? i._invokeFailureCallBack(n, r)
                  : n && n.onFailure && n.onFailure(r.status);
              },
              error: function (e, t, i) {
                n && n.onFailure && n.onFailure(i);
              },
            });
        },
        removeUserId: function (e) {
          var t = this,
            n = elbZeroRatingURL + "/" + i.appName + "/removeUserId",
            o = r._getPayLoadMsg(
              JSON.stringify({
                clientId: i.clientId,
                channel: "rt",
                channelType: "web",
              })
            ),
            s = {
              "Content-Type": "application/json",
              secretKey: i.appSecret,
              sdkversion: sdkversion,
            };
          i.securedToken && (s.Authorization = i.securedToken),
            i.accessToken && (s.accessToken = i.accessToken),
            $.ajax({
              url: n,
              type: "POST",
              headers: s,
              data: o,
              success: function (n) {
                if ("Success" === n.status) {
                  var r = n.userId;
                  e && e.onSuccess && e.onSuccess(n), t.updateAppUser(r, !0);
                } else
                  n && "0" != n.code
                    ? i._invokeFailureCallBack(e, n)
                    : e && e.onFailure && e.onFailure(n.status);
              },
              error: function (t, n, i) {
                e && e.onFailure && e.onFailure(i);
              },
            });
        },
        removeCustomerId: function (e) {
          var t = elbZeroRatingURL + "/" + i.appName + "/removeCustomerId",
            n = r._getPayLoadMsg(
              JSON.stringify({
                clientId: i.clientId,
                channel: "rt",
                channelType: "web",
              })
            ),
            o = {
              "Content-Type": "application/json",
              secretKey: i.appSecret,
              sdkversion: sdkversion,
            };
          i.securedToken && (o.Authorization = i.securedToken),
            i.accessToken && (o.accessToken = i.accessToken),
            $.ajax({
              url: t,
              type: "POST",
              headers: o,
              data: n,
              success: function (t) {
                "Success" === t.status
                  ? e && e.onSuccess && e.onSuccess(t)
                  : t && "0" != t.code
                  ? i._invokeFailureCallBack(e, t)
                  : e && e.onFailure && e.onFailure(t.status);
              },
              error: function (t, n, i) {
                e && e.onFailure && e.onFailure(i);
              },
            });
        },
        updateAppUser: function (n, r) {
          try {
            var o = i.iCDeviceProfile.userId,
              s = e.ICMessaging.isStarted(),
              a = !1;
            if (null !== o && o === n) return;
            s &&
              ((a = (u = e.ICMessaging.getInstance()).isConnected()),
              s &&
                o &&
                a &&
                (u.unsubscribeServer(o),
                u.unsubscribeServer("Updates/" + e.getBrowserName())),
              s && a && u.disconnect()),
              i.iCDeviceProfile._setUserId(n, r),
              this.saveDeviceProfile();
            try {
              var c = sessionStorage.getItem("_tabId");
              t.set(
                "updateUserEvent",
                c + "_updateuser_" + new Date().getTime()
              );
            } catch (l) {}
            var u = e.ICMessaging.getInstance();
            s && a && ((u.isDisconnected = !1), u.connect());
          } catch (d) {
            e.log(d);
          }
        },
        setSecurityToken: function (e) {
          this._isInitialized(),
            e
              ? ((i.isTokenExpired = !1), (i.securedToken = "Bearer " + e))
              : ((i.isTokenExpired = !0), delete i.securedToken);
        },
        registerListener: function (t) {
          if ((this._isInitialized(), !t || !e.isObject(t)))
            throw i._getErrorWithDescription(
              e.ICErrorCodes.InvalidParameterValue,
              "callback must not be undefined"
            );
          if ("function" != typeof t.onFailure)
            throw i._getErrorWithDescription(
              e.ICErrorCodes.InvalidParameterValue,
              "callback must contain an onFailure handler"
            );
          for (var n = !1, r = 0; r < i.registerListenerObjs; r++)
            i.registerListenerObjs[r] === a && (n = !0);
          if (n) throw e.ICErrorCodes.DuplicateRegisterListener;
          i.registerListenerObjs.push(t);
        },
        registerSecurityTokenListener: function (t) {
          if ((this._isInitialized(), !callback || !e.isObject(callback)))
            throw i._getErrorWithDescription(
              e.ICErrorCodes.InvalidParameterValue,
              "callback must not be undefined"
            );
          if ("function" != typeof callback.onFailure)
            throw i._getErrorWithDescription(
              e.ICErrorCodes.InvalidParameterValue,
              "callback must contain an onFailure handler"
            );
          for (var n = !1, r = 0; r < i.registerListenerObjs; r++)
            i.registerListenerObjs[r] === a && (n = !0);
          if (n) throw e.ICErrorCodes.DuplicateRegisterListener;
          i.registerListenerObjs.push(t);
        },
        unregisterListener: function (e) {
          this._isInitialized();
          for (var t = 0; t < i.registerListenerObjs.length; t++)
            if (i.registerListenerObjs[t] == e) {
              i.registerListenerObjs.splice(t, 1);
              break;
            }
        },
        unregisterSecurityTokenListener: function (e) {
          this._isInitialized();
          for (var t = 0; t < i.registerListenerObjs.length; t++)
            if (i.registerListenerObjs[t] == e) {
              i.registerListenerObjs.splice(t, 1);
              break;
            }
        },
        _invokeListeners: function (t) {
          try {
            if (t)
              for (var n = 0; n < i.registerListenerObjs.length; n++) {
                var r = i.registerListenerObjs[n];
                r.onFailure && r.onFailure(t);
              }
          } catch (o) {
            e.log(o);
          }
        },
        _getErrorCode: function (t) {
          return 38 === t
            ? e.ICErrorCodes.InvalidToken
            : 39 === t
            ? e.ICErrorCodes.TokenRequired
            : 40 === t
            ? e.ICErrorCodes.TokenExpired
            : 36 === t
            ? e.ICErrorCodes.InvalidContentType
            : 3 === t
            ? e.ICErrorCodes.InvalidParameterValue
            : 62 === t
            ? e.ICErrorCodes.FeatureNotSupported
            : e.ICErrorCodes.Unknown;
        },
        _getErrorWithDescription: function (e, t) {
          let n = new Object();
          return Object.assign(n, e), (n.description = t), n;
        },
        _updatePolicyCheck: function (n) {
          try {
            var r =
              rtmsAPIURL +
              "/" +
              i.appName +
              "/verifyPolicy?os=" +
              e.getBrowserName() +
              "&secretKey=" +
              i.appSecret;
            $.ajax({
              url: r,
              type: "GET",
              success: function (r) {
                t.set("policyUpdate", r),
                  i._changePolicyDetails(r),
                  n &&
                    n.onSuccess &&
                    e.isFunction(n.onSuccess) &&
                    n.onSuccess();
              },
              error: function (t, i, r) {
                e.log("retriving policy failed", t),
                  n &&
                    n.onFailure &&
                    e.isFunction(n.onFailure) &&
                    n.onFailure();
              },
            });
          } catch (o) {
            throw (e.log(o), o);
          }
        },
        deRegisterDeviceProfile: function (n) {
          this.isDeviceRegistered(), t.set("isUnRegistering", !0);
          var o = rtmsAPIURL + "/" + i.appName + "/unregister",
            s = r._getPayLoadMsg(
              JSON.stringify({
                clientId: i.clientId,
                channel: "rt",
                channelType: "web",
              })
            ),
            a = {
              "Content-Type": "application/json",
              secretKey: i.appSecret,
              sdkversion: sdkversion,
            };
          i.securedToken && (a.Authorization = i.securedToken),
            i.accessToken && (a.accessToken = i.accessToken),
            $.ajax({
              url: o,
              type: "POST",
              headers: a,
              data: s,
              success: function (i) {
                t.remove("isUnRegistering"),
                  "Success" === i.status
                    ? (t.set("appregistered", !1),
                      n &&
                        n.onSuccess &&
                        e.isFunction(n.onSuccess) &&
                        n.onSuccess())
                    : i &&
                      "0" != i.code &&
                      n &&
                      n.onFailure &&
                      e.isFunction(n.onFailure) &&
                      n.onFailure(i);
              },
              error: function (t, i, r) {
                e.log("retriving policy failed"),
                  n &&
                    n.onFailure &&
                    e.isFunction(n.onFailure) &&
                    n.onFailure();
              },
            });
        },
        _invokeFailureCallBack: function (t, n) {
          if (t && t.onFailure && e.isFunction(t.onFailure) && n) {
            var r = i._getErrorCode(n.code);
            t.onFailure(r);
          }
        },
        _getRtmsDomainUrl: function () {
          return i.serverInboxVersion ? elbZeroRatingURLV4 : elbZeroRatingURL;
        },
        _changePolicyDetails: function (n) {
          try {
            var o = (n.policy || {}).features || {},
              s = n.broker || {};
            if (
              ((i.appType = n.appType || ""),
              void 0 === o.realtimemessaging &&
                ((o.realtimemessaging = "1"),
                "https:" === protocol &&
                  ((isSSL = !0), (o.securedconnection = "1"))),
              "1" === o.realtimemessaging)
            )
              i.isRTEnabled = !0;
            else {
              if (i.isRTEnabled && r && r.isConnected())
                try {
                  r.disconnect();
                } catch (c) {
                  e.log(c);
                }
              i.isRTEnabled = !1;
            }
            if ("1" === o.basicpush) i.isPushEnabled = !0;
            else {
              if (i.isPushEnabled && r && r.webpush)
                try {
                  r.webpush.unsubscribe();
                } catch (c) {
                  e.log(c);
                }
              i.isPushEnabled = !1;
            }
            (i.isEncryptionEnabled = "1" === o.encryption),
              (port = (isSSL = "1" === o.securedconnection)
                ? s.wss
                  ? parseInt(s.wss)
                  : 8884
                : s.ws
                ? parseInt(s.ws)
                : 1884),
              (rtmsdomain = s.ip || rtmsdomain);
            var a = t.get("regiterResp");
            a
              ? ((i.encryptionType = a.encryptionType || "DES"),
                "AES" === i.encryptionType
                  ? (i.encryptionKey = a.encryptionKey)
                  : (i.encriptionKey =
                      i.icConfig.getAppID().substring(0, 3) +
                      i.icConfig.getClientKey()),
                (i.refreshToken = a.refreshToken),
                (i.accessToken = a.accessToken),
                (i.appDomain = a.appDomain),
                i.appDomain &&
                  ((elbZeroRatingURL = elbZeroRatingURLTemplate.replace(
                    "$(domain)",
                    i.appDomain
                  )),
                  (elbZeroRatingUploadURL = elbZeroRatingURLUploadFile.replace(
                    "$(domain)",
                    i.appDomain
                  ))),
                (i.serverInboxVersion = a[SERVER_INBOX_VERSION_TAG_FOR_V4]))
              : (i.encriptionKey =
                  i.icConfig.getAppID().substring(0, 3) +
                  i.icConfig.getClientKey());
          } catch (u) {
            e.log(u);
          }
        },
        unregister: function (n) {
          var o = t.get("isUnRegistering");
          if (null != o && 1 == o)
            throw i._getErrorWithDescription(
              e.ICErrorCodes.AlreadyProcessing,
              "SDK unregister already processing , you must wait for unregister to complete"
            );
          try {
            i.deRegisterDeviceProfile({
              onSuccess: function () {
                r &&
                  r.isConnected() &&
                  i &&
                  i.iCDeviceProfile &&
                  r.unsubscribeServer(i.iCDeviceProfile.userId),
                  r && r.isConnected() && r.disconnect(),
                  i.webpush && i.webpush.unsubscribe(),
                  t.remove("appName"),
                  t.remove("appSecret"),
                  t.remove("userId"),
                  t.remove("deviceId"),
                  t.remove("policyUpdate"),
                  t.remove("appregistered"),
                  t.remove("regiterResp"),
                  (i.iCDeviceProfile = null);
                try {
                  var o = sessionStorage.getItem("_tabId");
                  t.set(
                    "deRegisterEvent",
                    o + "_deregister_" + new Date().getTime()
                  );
                } catch (s) {}
                n && n.onSuccess && e.isFunction(n.onSuccess) && n.onSuccess();
              },
              onFailure: function (t) {
                n && n.onFailure && e.isFunction(n.onFailure) && n.onFailure(t);
              },
            });
          } catch (s) {
            throw (e.log(s), s);
          }
        },
        getPushDetails: function (e) {
          i.webpush
            ? i.webpush.getWebSubscriptionDetials(e)
            : e({
                status: "1",
                description: "app is not registered, please register",
              });
        },
        _encryptMsg: function (t) {
          try {
            i.isEncryptionEnabled &&
              ("DES" === i.encryptionType
                ? ((t = g.des(i.encriptionKey, t, 1, 0, null, 1)),
                  (t = btoa(t)))
                : "AES" === i.encryptionType &&
                  (t = g.aes(t, i.encryptionKey, 0)));
          } catch (n) {
            e.log(n);
          }
          return t;
        },
        _decryptMsg: function (t) {
          try {
            if (i.isEncryptionEnabled)
              if ("DES" === i.encryptionType) {
                var n = atob(t);
                t = (t = g.des(i.encriptionKey, n, 0, 0, null, 1)).substr(
                  0,
                  t.lastIndexOf("}") + 1
                );
              } else
                "AES" === i.encryptionType &&
                  (t = g.aes(t, i.encryptionKey, 1));
          } catch (r) {
            try {
              i.isEncryptionEnabled &&
                ("DES" === i.encryptionType
                  ? ((t = t.replace(/\n/g, "")),
                    (n = g.decodeBase64(t)),
                    (t = (t = g.des(i.encriptionKey, n, 0, 0, null, 1)).substr(
                      0,
                      t.lastIndexOf("}") + 1
                    )))
                  : "AES" === i.encryptionType &&
                    (t = g.aes(t, i.encryptionKey, 1)));
            } catch (r) {
              e.log(r);
            }
          }
          return t;
        },
        saveDeviceProfile: function () {
          if (null != i.iCDeviceProfile) {
            n = i.iCDeviceProfile.deviceId;
            var e = i.iCDeviceProfile.userId || "",
              r = i.iCDeviceProfile.customerId,
              o = i.icConfig.getAppID();
            (i.clientId =
              o + "/" + e + "/" + webprefix + i.iCDeviceProfile.deviceId),
              (o = i.appName),
              t.set("deviceId", n),
              t.set("customerId", r),
              t.set("userId", e),
              t.set("uniqueClientId", o + "/" + e),
              t.set("clientId", o + "/" + e + "/" + webprefix + n);
          }
        },
        getDeviceProfile: function () {
          return i.iCDeviceProfile;
        },
        assertProfile: function (t) {
          if (null === t || !(t instanceof e.ICDeviceProfile))
            throw i._getErrorWithDescription(
              e.ICErrorCodes.InvalidParameterValue,
              "Profile parameter must not be undefined"
            );
          if (!e.defined(t.getDeviceId()))
            throw i._getErrorWithDescription(
              e.ICErrorCodes.InvalidParameterValue,
              "Profile must contain a valid deviceId"
            );
        },
        isDeviceRegistered: function () {
          var t = this.getDeviceProfile();
          if (null == t || null == t.deviceId || "" === t.deviceId)
            throw e.ICErrorCodes.DeviceIdCurrentlyNotRegistered;
        },
      }),
    e.namespace("IMI.ICConfig"),
    (e.ICConfig =
      (((c = function (e) {
        var t = this;
        (t.appid = e.asset.appId),
          (t.clientKey = e.asset.appSecret),
          (t.assetPath = window.location.origin + "/assets"),
          (pathConfig = e.asset.pathConfig),
          pathConfig &&
            pathConfig.assetPath &&
            pathConfig.assetPath.length > 0 &&
            (t.assetPath = pathConfig.assetPath),
          (t.root = "/"),
          pathConfig &&
            pathConfig.root &&
            pathConfig.root.length > 0 &&
            (t.root = pathConfig.root),
          (t.apis = e.imiclient),
          (t.sw = e.sw);
      }).prototype = {
        getAppID: function () {
          return this.appid;
        },
        getClientKey: function () {
          return this.clientKey;
        },
        getApis: function () {
          return this.apis;
        },
        getAssetPath: function () {
          return this.assetPath;
        },
        setAssetPath: function (e) {
          self.assetPath = e;
        },
        setRoot: function (e) {
          self.root = e;
        },
        getRoot: function () {
          return this.root;
        },
      }),
      c)),
    e.namespace("IMI.ICMessaging"),
    (e.ICMessaging = {
      getInstance: function () {
        return (
          r ||
            (r = {
              messagecallback: new e.ICMessagingReceiver(),
              isDisconnected: !1,
              _unloaded: !1,
              storageEventEnabled: !1,
              connectionStatus: e.ICConnectionStatus.None,
              connect: function () {
                var t = this;
                try {
                  if (!i) throw e.ICErrorCodes.NotInitialized;
                  if (
                    (i._isInitialized(),
                    i.isDeviceRegistered(),
                    t.isConnected() ||
                      t.connectionStatus === e.ICConnectionStatus.Connecting)
                  )
                    throw e.ICErrorCodes.ConnectionAlreadyExists;
                  t._connect();
                } catch (n) {
                  throw (e.log("connect", n), n);
                }
              },
              _connect: function () {
                var n = this;
                try {
                  if (!i.isRTEnabled) throw e.ICErrorCodes.FeatureNotSupported;
                  var o = i.icConfig,
                    s = (n.appName = o.getAppID());
                  (n.password = o.getClientKey()),
                    (n.userId = i.iCDeviceProfile.userId || t.get("userId")),
                    (n.uniqueClientId = s + "/" + n.userId);
                  var a = (n.clientId =
                    n.uniqueClientId +
                    "/" +
                    webprefix +
                    i.iCDeviceProfile.deviceId);
                  i.accessToken && (a += "/at_" + i.accessToken),
                    (n.client = new Paho.MQTT.Client(rtmsdomain, port, a)),
                    n.client.startTrace(),
                    v ||
                      ((v = !0),
                      setInterval(function () {
                        r.client.stopTrace(), r.client.startTrace();
                      }, 3e4)),
                    (n.client.onConnectionLost = n.connectionlost.bind(n)),
                    (n.client.onMessageArrived = n.messagearrived.bind(n)),
                    (n.connectionStatus = e.ICConnectionStatus.Connecting),
                    (n.connectOptions = {
                      invocationContext: {},
                      onSuccess: n.onConnect.bind(n),
                      timeout: 5,
                      cleanSession: !1,
                      useSSL: isSSL,
                      onFailure: n.onConnectFailure.bind(n),
                      userName: n.uniqueClientId,
                      password: n.password,
                      keepAliveInterval: keepAliveInterval,
                    }),
                    n.client.connect(n.connectOptions);
                } catch (c) {
                  throw (e.log("_connect", c), c);
                }
              },
              onConnect: function (n) {
                var r = this;
                r.connectionStatus = e.ICConnectionStatus.Connected;
                var s = { qos: 2 };
                r.subscribeServer(i.iCDeviceProfile.userId, s);
                var a = "Updates/" + e.getBrowserName();
                r.subscribeServer(a, s),
                  r.messagecallback &&
                    r.messagecallback.onConnectionStatusChanged &&
                    e.isFunction(r.messagecallback.onConnectionStatusChanged) &&
                    r.messagecallback.onConnectionStatusChanged(
                      e.ICConnectionStatus.Connected
                    ),
                  t.set("isConnectionOpened", !0),
                  (o = !0),
                  (r.isDisconnected = !1);
              },
              onConnectFailure: function (t) {
                var n = this;
                try {
                  (n.connectionStatus = e.ICConnectionStatus.Error),
                    n.messagecallback &&
                      n.messagecallback.onConnectionStatusChanged &&
                      e.isFunction(
                        n.messagecallback.onConnectionStatusChanged
                      ) &&
                      n.messagecallback.onConnectionStatusChanged(
                        e.ICConnectionStatus.Error
                      ),
                    n.isDisconnected ||
                      setTimeout(function () {
                        n._connect.call(n);
                      }, 3 * reconnectTimeout);
                } catch (i) {
                  e.log("error onConnectFailure::", i);
                }
              },
              connectionlost: function (t) {
                var n = this;
                try {
                  (n.connectionStatus = e.ICConnectionStatus.Refused),
                    n.messagecallback &&
                      n.messagecallback.onConnectionStatusChanged &&
                      e.isFunction(
                        n.messagecallback.onConnectionStatusChanged
                      ) &&
                      n.messagecallback.onConnectionStatusChanged(
                        n.connectionStatus
                      ),
                    n.isDisconnected ||
                      setTimeout(function () {
                        n._connect.call(n);
                      }, reconnectTimeout);
                } catch (i) {
                  e.log("error connectionlost :: " + t + " error" + i);
                }
              },
              messagearrived: function (n) {
                var r = this;
                try {
                  var o = i._decryptMsg(n.payloadString);
                  o = JSON.parse(o);
                  var s = e.ICMessage.fromJSON(o);
                  if (
                    s &&
                    s.getTopic() &&
                    -1 !== s.getTopic().indexOf("Updates/" + e.getBrowserName())
                  ) {
                    if (i)
                      try {
                        i._updatePolicyCheck();
                      } catch (a) {
                        e.log(a);
                      }
                  } else {
                    if (
                      (i.appName === s.getAppId() &&
                        i.iCDeviceProfile.userId === s.getUserId() &&
                        i.iCDeviceProfile.deviceId === s.getDeviceId() &&
                        (s.getType() === e.ICMessageType.Republish ||
                          s.getType() === e.ICMessageType.ClickedReceipt ||
                          s.getType() === e.ICMessageType.MessageDeleted ||
                          s.getType() === e.ICMessageType.ReadReceipt)) ||
                      t.isDuplicateMessage(s)
                    )
                      return;
                    t.setTransId(s),
                      s.getType() === e.ICMessageType.Message &&
                        r.sendDRMessage(s.getTransactionId(), {
                          onFailure: function (e) {
                            i._invokeListeners(e);
                          },
                        }),
                      r.messagecallback &&
                        r.messagecallback.onMessageReceived &&
                        e.isFunction(r.messagecallback.onMessageReceived) &&
                        r.messagecallback.onMessageReceived(s);
                  }
                } catch (c) {
                  e.log(c);
                }
              },
              disconnect: function () {
                var n = this;
                try {
                  t.remove("isConnectionOpened"),
                    (n.isDisconnected = !0),
                    n.isConnected() && n.client.disconnect();
                  var i = sessionStorage.getItem("_tabId");
                  t.set(
                    "disconnectEvent",
                    i + "_disconnect_" + new Date().getTime()
                  );
                } catch (r) {
                  throw (e.log("disconnect", r), r);
                }
              },
              fetchTopics: function (t, n) {
                1 === arguments.length && (n = t), e.isNumber(t) || (t = 0);
                var r = "start=" + t + "&subscribed=both",
                  o =
                    elbZeroRatingURL +
                    "/apps/" +
                    i.appName +
                    "/user/" +
                    (i.iCDeviceProfile.userId || "") +
                    "/topics",
                  s = {};
                (s.secretKey = i.appSecret),
                  i.securedToken && (s.Authorization = i.securedToken),
                  i.accessToken && (s.accessToken = i.accessToken);
                try {
                  var a = {
                    onSuccess: function (t) {
                      if (t && 0 == t.code) {
                        if (n && n.onSuccess && e.isFunction(n.onSuccess)) {
                          var r = [];
                          try {
                            if (t && t.topics)
                              for (var o = t.topics, s = 0; s < o.length; s++)
                                r.push(e.ICTopic.fromJSON(o[s]));
                            n.onSuccess(r);
                          } catch (a) {
                            n &&
                              n.onFailure &&
                              e.isFunction(n.onFailure) &&
                              n.onFailure(e.ICErrorCodes.Unknown);
                          }
                        }
                      } else
                        t && 0 != t.code
                          ? i._invokeFailureCallBack(n, t)
                          : n &&
                            n.onFailure &&
                            e.isFunction(n.onFailure) &&
                            n.onFailure(e.ICErrorCodes.Unknown);
                    },
                    onFailure: function (t) {
                      n &&
                        n.onFailure &&
                        e.isFunction(n.onFailure) &&
                        n.onFailure(e.ICErrorCodes.Unknown);
                    },
                  };
                  e.Get(o, r, s, a);
                } catch (c) {
                  throw (e.log(c), c);
                }
              },
              createThread: function (t, n) {
                if (arguments.length < 1)
                  throw i._getErrorWithDescription(
                    e.ICErrorCodes.InvalidParameterValue,
                    "thread must not be undefined"
                  );
                if (!(t instanceof e.ICThread))
                  throw i._getErrorWithDescription(
                    e.ICErrorCodes.InvalidParameterValue,
                    "thread must be an instance of IMI.ICThread"
                  );
                var r = elbZeroRatingURL + "/apps/" + i.appName + "/threads";
                t.getType() && t.setType(e.ICThreadType.Conversation);
                var o = JSON.stringify(t.toJSON()),
                  s = {
                    "Content-Type": "application/json",
                    secretKey: i.appSecret,
                    sdkversion: sdkversion,
                  };
                i.securedToken && (s.Authorization = i.securedToken),
                  i.accessToken && (s.accessToken = i.accessToken);
                try {
                  var a = {
                    onSuccess: function (r) {
                      if (n && n.onSuccess && e.isFunction(n.onSuccess))
                        if (r && r.thread) {
                          var o = e.ICThread.fromJSON(r.thread);
                          Object.assign(o, t), n.onSuccess(o);
                        } else r && i._invokeFailureCallBack(n, r);
                    },
                    onFailure: function (t) {
                      n &&
                        n.onFailure &&
                        e.isFunction(n.onFailure) &&
                        n.onFailure(t);
                    },
                  };
                  e.Post(r, o, s, a);
                } catch (c) {
                  throw (e.log(c), c);
                }
              },
              updateThread: function (t, n) {
                if (arguments.length < 1)
                  throw i._getErrorWithDescription(
                    e.ICErrorCodes.InvalidParameterValue,
                    "thread must not be undefined"
                  );
                if (!(t instanceof e.ICThread))
                  throw i._getErrorWithDescription(
                    e.ICErrorCodes.InvalidParameterValue,
                    "thread must be an instance of IMI.ICThread"
                  );
                if (void 0 === t.getId())
                  throw i._getErrorWithDescription(
                    e.ICErrorCodes.InvalidParameterValue,
                    "threadId parameter cannot be empty"
                  );
                var r =
                    elbZeroRatingURL +
                    "/apps/" +
                    i.appName +
                    "/user/" +
                    (i.iCDeviceProfile.userId || "") +
                    "/threads/" +
                    t.getId(),
                  o = JSON.stringify(t.toJSON()),
                  s = {
                    "Content-Type": "application/json",
                    secretKey: i.appSecret,
                    sdkversion: sdkversion,
                  };
                i.securedToken && (s.Authorization = i.securedToken),
                  i.accessToken && (s.accessToken = i.accessToken);
                try {
                  var a = {
                    onSuccess: function (t) {
                      if (n && n.onSuccess && e.isFunction(n.onSuccess))
                        if (t && t.thread) {
                          var r = e.ICThread.fromJSON(t.thread);
                          n.onSuccess(r);
                        } else t && i._invokeFailureCallBack(n, t);
                    },
                    onFailure: function (t) {
                      n &&
                        n.onFailure &&
                        e.isFunction(n.onFailure) &&
                        n.onFailure(t);
                    },
                  };
                  e.Put(r, o, s, a);
                } catch (c) {
                  throw (e.log(c), c);
                }
              },
              closeThread: function (t, n) {
                t.setStatus(e.ICThreadStatus.Closed),
                  e.ICMessaging.getInstance().updateThread(t, n);
              },
              _reopenThread: function (t, n) {
                t.setStatus(e.ICThreadStatus.Active),
                  e.ICMessaging.getInstance().updateThread(t, n);
              },
              fetchUnreadThreadCount: function (t) {
                var n =
                    elbZeroRatingURLV4 +
                    "/apps/" +
                    i.appName +
                    "/user/" +
                    i.iCDeviceProfile.userId +
                    "/unreadthreads",
                  r = {};
                (r.secretKey = i.appSecret),
                  i.securedToken && (r.Authorization = i.securedToken),
                  i.accessToken && (r.accessToken = i.accessToken);
                try {
                  var o = {
                    onSuccess: function (n) {
                      t &&
                        t.onSuccess &&
                        e.isFunction(t.onSuccess) &&
                        (n &&
                          n.encrypted &&
                          i.isEncryptionEnabled &&
                          (n = JSON.parse(i._decryptMsg(n.encrypted))),
                        n
                          ? "0" == n.code
                            ? t.onSuccess(n.unread_thread_count)
                            : "1" == n.code
                            ? t.onSuccess("0")
                            : i._invokeFailureCallBack(t, n)
                          : t &&
                            t.onFailure &&
                            e.isFunction(t.onFailure) &&
                            t.onFailure(e.ICErrorCodes.Unknown));
                    },
                    onFailure: function (n) {
                      t &&
                        t.onFailure &&
                        e.isFunction(t.onFailure) &&
                        t.onFailure(n);
                    },
                  };
                  e.Get(n, void 0, r, o);
                } catch (s) {
                  throw (e.log(s), s);
                }
              },
              fetchThreads: function (t, n, r) {
                e.isNumber(t) || (t = 0);
                var o =
                  i._getRtmsDomainUrl() +
                  "/apps/" +
                  i.appName +
                  "/user/" +
                  i.iCDeviceProfile.userId +
                  "/threads?start=" +
                  t +
                  "&limit=" +
                  n;
                (fetchUnreadCount = !0),
                  i.serverInboxVersion && (o += "&fetchunreadcount=" + !0);
                var s = {};
                (s.secretKey = i.appSecret),
                  i.securedToken && (s.Authorization = i.securedToken),
                  i.accessToken && (s.accessToken = i.accessToken);
                try {
                  var a = {
                    onSuccess: function (n) {
                      if (r && r.onSuccess && e.isFunction(r.onSuccess))
                        if (
                          (n &&
                            n.encrypted &&
                            i.isEncryptionEnabled &&
                            (n = JSON.parse(i._decryptMsg(n.encrypted))),
                          n)
                        )
                          if ("0" == n.code) {
                            var o = n.threads;
                            if (o) {
                              for (var s = [], a = 0; a < o.length; a++)
                                s.push(e.ICThread.fromJSON(o[a]));
                              r.onSuccess(
                                s,
                                (n.total || 0) > (n.count || 0) + t
                              );
                            } else r.onSuccess([], 0);
                          } else
                            "1" == n.code
                              ? r.onSuccess([], 0)
                              : i._invokeFailureCallBack(r, n);
                        else
                          r &&
                            r.onFailure &&
                            e.isFunction(r.onFailure) &&
                            r.onFailure(e.ICErrorCodes.Unknown);
                    },
                    onFailure: function (t) {
                      r &&
                        r.onFailure &&
                        e.isFunction(r.onFailure) &&
                        r.onFailure(t);
                    },
                  };
                  e.Get(o, void 0, s, a);
                } catch (c) {
                  throw (e.log(c), c);
                }
              },
              fetchMessages: function (t, n, r, o) {
                if (arguments.length < 4)
                  throw i._getErrorWithDescription(
                    e.ICErrorCodes.InvalidParameterValue,
                    "Mandatory parameters are missing"
                  );
                if (
                  (t && (t = encodeURIComponent(t)),
                  (n = n && n instanceof Date ? e.parseDate(n) : ""),
                  !r || r < 1)
                )
                  throw i._getErrorWithDescription(
                    e.ICErrorCodes.InvalidParameterValue,
                    "Please provide valid limit value"
                  );
                var s =
                    i._getRtmsDomainUrl() +
                    "/apps/" +
                    i.appName +
                    "/user/" +
                    i.iCDeviceProfile.userId +
                    "/threads/" +
                    t +
                    "/messages?from=" +
                    n +
                    "&limit=" +
                    r,
                  a = {};
                (a.secretKey = i.appSecret),
                  i.securedToken && (a.Authorization = i.securedToken),
                  i.accessToken && (a.accessToken = i.accessToken);
                try {
                  var c = {
                    onSuccess: function (t) {
                      if (o && o.onSuccess && e.isFunction(o.onSuccess))
                        if (
                          (t &&
                            t.encrypted &&
                            i.isEncryptionEnabled &&
                            (t = JSON.parse(i._decryptMsg(t.encrypted))),
                          t && "0" == t.code)
                        ) {
                          var n = t.messages,
                            r = [];
                          if (n) {
                            for (var s = 0; s < n.length; s++)
                              r.push(e.ICMessage.fromJSON(n[s]));
                            o.onSuccess(r, t.total);
                          } else o.onSuccess(r, t.total);
                        } else i._invokeFailureCallBack(o, t);
                    },
                    onFailure: function (t) {
                      o &&
                        o.onFailure &&
                        e.isFunction(o.onFailure) &&
                        o.onFailure(t);
                    },
                  };
                  e.Get(s, void 0, a, c);
                } catch (u) {
                  throw (e.log(u), u);
                }
              },
              getConnectionStatus: function () {
                return this.connectionStatus;
              },
              isConnected: function () {
                return this.connectionStatus === e.ICConnectionStatus.Connected;
              },
              deleteMessage: function (t, n) {
                var r = elbZeroRatingURL + "/" + i.appName + "/message",
                  o = JSON.stringify({ tid: t, clientId: i.clientId }),
                  s = {
                    "Content-Type": "application/json",
                    secretKey: i.appSecret,
                    sdkversion: sdkversion,
                  };
                i.securedToken && (s.Authorization = i.securedToken),
                  i.accessToken && (s.accessToken = i.accessToken);
                var a = {
                  onSuccess: function (r) {
                    n &&
                      n.onSuccess &&
                      e.isFunction(n.onSuccess) &&
                      (0 === r.code
                        ? n.onSuccess(t)
                        : i._invokeFailureCallBack(n, r));
                  },
                  onFailure: function (t) {
                    n &&
                      n.onFailure &&
                      e.isFunction(n.onFailure) &&
                      n.onFailure(t);
                  },
                };
                e.Post(r, o, s, a);
              },
              publishMessage: function (t, n) {
                var r = this;
                try {
                  if (!i.isRegistered())
                    return void (
                      n &&
                      e.isFunction(n.onFailure) &&
                      n.onFailure(e.ICErrorCodes.DeviceIdCurrentlyNotRegistered)
                    );
                  if (!(t instanceof e.ICMessage))
                    throw e.ICErrorCodes.PublishFailed;
                  if (!(t.getThread() && t.getThread() instanceof e.ICThread))
                    throw i._getErrorWithDescription(
                      e.ICErrorCodes.InvalidParameterValue,
                      "message.getThread() must be an instance of ICThread"
                    );
                  if (!t.getThread() || !t.getThread().getId())
                    throw i._getErrorWithDescription(
                      e.ICErrorCodes.InvalidParameterValue,
                      "thread.getId() property cannot be empty"
                    );
                  void 0 === t.getThread().getType() &&
                    t.getThread().setType(e.ICThreadType.Conversation);
                  var o = function () {
                    (t.channel = "rt"), t.setClientId(i.clientId);
                    var o = r._getPayLoadMsg(JSON.stringify(t.toJSON())),
                      s = elbZeroRatingURL + "/" + i.appName + "/mo",
                      a = {};
                    (a = {
                      "Content-Type": "application/json",
                      secretKey: i.appSecret,
                      sdkversion: sdkversion,
                    }),
                      i.securedToken && (a.Authorization = i.securedToken),
                      i.accessToken && (a.accessToken = i.accessToken),
                      $.ajax({
                        url: s,
                        type: "POST",
                        headers: a,
                        data: o,
                        success: function (r) {
                          r && "0" == r.code
                            ? n &&
                              "function" == typeof n.onSuccess &&
                              (t.setStatus(e.MessageStatus.messagesuccess),
                              t.setTransactionId(r.tid),
                              t.setSubmittedAt(e.getDate(r.created_on)),
                              t.setOutgoing(!0),
                              n.onSuccess(t, null))
                            : i._invokeFailureCallBack(n, r);
                        },
                        error: function (t, i, r) {
                          n &&
                            e.isFunction(n.onFailure) &&
                            n.onFailure(e.ICErrorCodes.PublishFailed);
                        },
                      });
                  };
                  if (t.getThread().getStatus() === e.ICThreadStatus.Closed) {
                    var s = {
                      onSuccess: (e) => {
                        o();
                      },
                      onFailure: (t) => e.log("onThreadUpdateFailure:", t),
                    };
                    e.ICMessaging.getInstance()._reopenThread(t.getThread(), s);
                  } else o();
                } catch (a) {
                  throw (
                    (e.log(a),
                    n &&
                      "function" == typeof n.onFailure &&
                      n.onFailure(e.MessageStatus.messagefailed),
                    a)
                  );
                }
              },
              sendClickedEvent: function (t, n, r) {
                let o = new e.ICInteractiveData();
                o.setType(n.getType()),
                  o.setIdentifier(n.getIdentifier()),
                  o.setTitle(n.getTitle()),
                  o.setActionURL(n.getActionURL()),
                  o.setPayload(n.getPayload());
                let s = {
                  tid: t,
                  status: 4,
                  clientId: i.clientId,
                  interactiveData: o.toJSON(),
                };
                try {
                  messagePaylod = JSON.stringify(s);
                  var a =
                      elbZeroRatingURL + "/" + i.appName + "/deliveryupdate",
                    c = {
                      "Content-Type": "application/json",
                      secretKey: i.appSecret,
                      sdkversion: sdkversion,
                    };
                  i.securedToken && (c.Authorization = i.securedToken),
                    i.accessToken && (c.accessToken = i.accessToken),
                    $.ajax({
                      url: a,
                      type: "POST",
                      headers: c,
                      data: messagePaylod,
                      success: function (t) {
                        t && "0" == t.code
                          ? r &&
                            "function" == typeof r.onSuccess &&
                            r.onSuccess(n)
                          : t && "0" != t.code
                          ? i._invokeFailureCallBack(r, t)
                          : r &&
                            e.isFunction(r.onFailure) &&
                            r.onFailure(e.MessageStatus.messagefailed);
                      },
                      error: function (t, n, i) {
                        r &&
                          e.isFunction(r.onFailure) &&
                          r.onFailure(e.MessageStatus.messagefailed);
                      },
                    });
                } catch (u) {
                  e.log(u),
                    r &&
                      "function" == typeof r.onFailure &&
                      r.onFailure(e.MessageStatus.messagefailed);
                }
              },
              _getPayLoadMsg: function (t) {
                if (i.isEncryptionEnabled)
                  try {
                    t = '{"encrypted":"' + i._encryptMsg(t) + '"}';
                  } catch (n) {
                    e.log(n);
                  }
                return t;
              },
              subscribeServer: function (t, n) {
                try {
                  this.client.subscribe(i.appName + "/" + t, n);
                } catch (r) {
                  throw (e.log(r), e.ICErrorCodes.SubscribeFailed);
                }
              },
              unsubscribeServer: function (t, n) {
                try {
                  this.client.unsubscribe(i.appName + "/" + t, n);
                } catch (r) {
                  throw e.ICErrorCodes.UnsubscribeFailed;
                }
              },
              subscribeTopic: function (t, n) {
                if (arguments.length < 1)
                  throw i._getErrorWithDescription(
                    e.ICErrorCodes.InvalidParameterValue,
                    "Mandatory parameters missing"
                  );
                t && (t = encodeURIComponent(t));
                var r =
                    "['" +
                    (i.iCDeviceProfile ? i.iCDeviceProfile.userId : i.userId) +
                    "']",
                  o =
                    elbZeroRatingURL +
                    "/apps/" +
                    i.appName +
                    "/topics/" +
                    t +
                    "/users",
                  s = {};
                (s = {
                  "Content-Type": "application/json",
                  secretKey: i.appSecret,
                  sdkversion: sdkversion,
                }),
                  i.securedToken && (s.Authorization = i.securedToken),
                  i.accessToken && (s.accessToken = i.accessToken);
                try {
                  var a = {
                    onSuccess: function (t) {
                      n &&
                        n.onSuccess &&
                        e.isFunction(n.onSuccess) &&
                        (0 === t.code
                          ? n.onSuccess()
                          : i._invokeFailureCallBack(n, t));
                    },
                    onFailure: function (t) {
                      n &&
                        n.onFailure &&
                        e.isFunction(n.onFailure) &&
                        n.onFailure(t);
                    },
                  };
                  e.Post(o, r, s, a);
                } catch (c) {
                  throw (e.log(c), c);
                }
              },
              unsubscribeTopic: function (t, n) {
                if (arguments.length < 1)
                  throw i._getErrorWithDescription(
                    e.ICErrorCodes.InvalidParameterValue,
                    "Mandatory parameters missing"
                  );
                t && (t = encodeURIComponent(t));
                var r =
                    elbZeroRatingURL +
                    "/apps/" +
                    i.appName +
                    "/topics/" +
                    t +
                    "/users/" +
                    (i.iCDeviceProfile ? i.iCDeviceProfile.userId : i.userId),
                  o = {};
                (o = {
                  "Content-Type": "application/json",
                  secretKey: i.appSecret,
                  sdkversion: sdkversion,
                }),
                  i.securedToken && (o.Authorization = i.securedToken),
                  i.accessToken && (o.accessToken = i.accessToken);
                try {
                  var s = {
                    onSuccess: function (t) {
                      n &&
                        n.onSuccess &&
                        e.isFunction(n.onSuccess) &&
                        (0 === t.code
                          ? n.onSuccess()
                          : i._invokeFailureCallBack(n, t));
                    },
                    onFailure: function (t) {
                      n &&
                        n.onFailure &&
                        e.isFunction(n.onFailure) &&
                        n.onFailure(t);
                    },
                  };
                  e.Get(r, void 0, o, s);
                } catch (a) {
                  throw (e.log(a), a);
                }
              },
              setMessageAsRead: function (t, n) {
                try {
                  if (!t)
                    throw i._getErrorWithDescription(
                      e.ICErrorCodes.InvalidParameterValue,
                      "transId parameter cannot be undefined"
                    );
                  this.setMessagesAsRead(t, n);
                } catch (r) {
                  throw (e.log(r), r);
                }
              },
              setMessagesAsRead: function (t, n) {
                try {
                  if (!t)
                    throw i._getErrorWithDescription(
                      e.ICErrorCodes.InvalidParameterValue,
                      "transactionIds parameter cannot be undefined"
                    );
                  {
                    e.isArray(t) || (t = [t]);
                    let s = t.filter((e) => !_readReceiptDB.exists(e));
                    var r = {};
                    (r.tids = s),
                      _readReceiptDB.add(s),
                      (r.status = 3),
                      (r.channel = "rt"),
                      (r.clientId = i.clientId);
                    var o = JSON.stringify(r);
                    this._setStatus(o, n);
                  }
                } catch (s) {
                  throw (e.log(s), s);
                }
              },
              sendDRMessage: function (t, n) {
                try {
                  if (!t)
                    throw i._getErrorWithDescription(
                      e.ICErrorCodes.InvalidParameterValue,
                      "TransactionId parameter cannot be empty"
                    );
                  var r = { status: 2, channel: "rt" };
                  (r.clientId = i.clientId), (r.tid = t);
                  var o = JSON.stringify(r);
                  this._setStatus(o, n);
                } catch (s) {
                  throw (e.log(s), s);
                }
              },
              setICMessagingReceiver: function (e) {
                this.messagecallback = e;
              },
              _setStatus: function (t, n) {
                try {
                  t = this._getPayLoadMsg(t);
                  var r =
                      elbZeroRatingURL + "/" + i.appName + "/deliveryupdate",
                    o = {
                      "Content-Type": "application/json",
                      secretKey: i.appSecret,
                      sdkversion: sdkversion,
                    };
                  i.securedToken && (o.Authorization = i.securedToken),
                    i.accessToken && (o.accessToken = i.accessToken),
                    $.ajax({
                      url: r,
                      type: "POST",
                      headers: o,
                      data: t,
                      success: function (t) {
                        t && "0" == t.code
                          ? n &&
                            "function" == typeof n.onSuccess &&
                            n.onSuccess(e.MessageStatus.messagesuccess)
                          : t && "0" != t.code
                          ? i._invokeFailureCallBack(n, t)
                          : n &&
                            e.isFunction(n.onFailure) &&
                            n.onFailure(e.MessageStatus.messagefailed);
                      },
                      error: function (t, i, r) {
                        n &&
                          e.isFunction(n.onFailure) &&
                          n.onFailure(e.MessageStatus.messagefailed);
                      },
                    });
                } catch (s) {
                  e.log(s),
                    n &&
                      "function" == typeof n.onFailure &&
                      n.onFailure(e.MessageStatus.messagefailed);
                }
              },
              createPostbackMessage: function (t, n) {
                let i = new e.ICMessage();
                i.setRelatedTransactionId(t.getTransactionId()),
                  i.setThread(t.getThread()),
                  i.setMessage(n.getTitle());
                let r,
                  o = new e.ICInteractiveData();
                switch (
                  (o.setType(n.getType()),
                  o.setIdentifier(n.getIdentifier()),
                  o.setTitle(n.getTitle()),
                  o.setPayload(n.getPayload()),
                  n.getType())
                ) {
                  case e.ICInteractiveDataType.TemplatePostback:
                    null != t.getAttachments() &&
                      t.getAttachments().length > 0 &&
                      (r = t.getAttachments()[0].getReference());
                    break;
                  case e.ICInteractiveDataType.QuickReplyPostback:
                    r = t.getQuickReplyData().getReference();
                }
                return o.setReference(r), i.setInteractiveData(o), i;
              },
              handleEvents: function () {
                var n = this;
                window.addEventListener("beforeunload", function () {
                  n._unloaded || n.removeWindow();
                }),
                  window.addEventListener("unload", function () {
                    n._unloaded || n.removeWindow();
                  }),
                  n.storageEventEnabled ||
                    ((n.storageEventEnabled = !0),
                    window.addEventListener("storage", function (n) {
                      var o = n.key,
                        s = n.newValue;
                      try {
                        var a = sessionStorage.getItem("_tabId");
                        o === t.namespace + "disconnectEvent"
                          ? (a || s || -1 !== s.indexOf(a)) &&
                            r.isConnected() &&
                            r.disconnect()
                          : (o !== t.namespace + "deRegisterEvent" &&
                              o !== t.namespace + "updateUserEvent") ||
                            ((a || s || -1 !== s.indexOf(a)) &&
                              i &&
                              ((i.iCDeviceProfile = i.loadDeviceProfiles()),
                              i.saveDeviceProfile()));
                      } catch (c) {
                        e.log(c);
                      }
                    }));
              },
              removeWindow: function () {
                o && r && r.disconnect(),
                  t && t.remove("isConnectionOpened"),
                  (this._unloaded = !0);
              },
            }),
          r
        );
      },
      isStarted: function () {
        return null != r;
      },
    }),
    e.namespace("IMI.ICMessagingReceiver"),
    (e.ICMessagingReceiver = function () {
      (this.onConnectionStatusChanged = function (e) {}),
        (this.onMessageReceived = function (t) {
          e.log(t);
        });
    }),
    e.namespace("IMI.ICTopic"),
    (e.ICTopic =
      (((u = function () {
        var e = this;
        (e.name = void 0),
          (e.subscribed = void 0),
          (e.accessLevel = void 0),
          (e.createdBy = void 0),
          (e.createdDate = void 0),
          (e.updatedDate = void 0),
          (e.group = void 0),
          (e.title = void 0),
          (e.id = void 0),
          (e.description = void 0);
      }).fromJSON = function (t) {
        return (function (t) {
          var n = new e.ICTopic(t);
          return t
            ? ((n.name = t.name),
              (n.subscribed = t.subscribed || !1),
              (n.id = t.id),
              (n.title = t.ref),
              (n.group = t.topic_group),
              (n.description = t.description),
              t.created_on && (n.createdDate = e.getDate(t.created_on)),
              n)
            : null;
        })(t);
      }),
      (u.prototype = {
        getName: function () {
          return this.name;
        },
        isSubscribed: function () {
          return this.subscribed;
        },
        getCreatedDate: function () {
          return this.createdDate;
        },
        getTitle: function () {
          return this.title;
        },
        getDescription: function () {
          return this.description;
        },
        getId: function () {
          return this.id;
        },
        getGroup: function () {
          return this.group;
        },
      }),
      u)),
    e.namespace("IMI.ICAttachment"),
    (e.ICAttachment =
      (((l = function () {}).prototype = {
        getContentType: function () {
          return this.contentType;
        },
        setContentType: function (e) {
          this.contentType = e;
        },
        getDuration: function () {
          return this.duration;
        },
        setDuration: function (e) {
          this.duration = e;
        },
        getLatitude: function () {
          return this.latitude;
        },
        setLatitude: function (e) {
          this.latitude = e;
        },
        getLongitude: function () {
          return this.longitude;
        },
        setLongitude: function (e) {
          this.longitude = e;
        },
        getPreview: function () {
          return this.preview;
        },
        setPreview: function (e) {
          this.preview = e;
        },
        getSize: function () {
          return this.size;
        },
        setSize: function (e) {
          this.size = e;
        },
        getURL: function () {
          return this.url;
        },
        setURL: function (e) {
          this.url = e;
        },
        getMediaId: function () {
          return this.mediaId;
        },
        setMediaId: function (e) {
          this.mediaId = e;
        },
        toJSON: function () {
          var e = this,
            t = {};
          return (
            e.getContentType() && (t.contentType = e.getContentType()),
            e.getDuration() && (t.duration = e.getDuration()),
            e.getLatitude() && (t.latitude = e.getLatitude()),
            e.getLongitude() && (t.longitude = e.getLongitude()),
            e.getSize() && (t.size = e.getSize()),
            e.getPreview() && (t.preview = e.getPreview()),
            e.getURL() && (t.file = e.getURL()),
            e.getMediaId() && (t.id = e.getMediaId()),
            t
          );
        },
      }),
      (l.fromJSON = function (t) {
        return (function (t) {
          var n = new e.ICAttachment();
          try {
            n.setContentType(t.contentType),
              n.setDuration(t.duration),
              n.setLatitude(t.latitude),
              n.setLongitude(t.longitude),
              n.setSize(t.size),
              n.setPreview(t.preview),
              n.setURL(t.file),
              n.setMediaId(t.mediaId || t.id);
          } catch (i) {
            e.log(i);
          }
          return n;
        })(t);
      }),
      l)),
    e.namespace("IMI.ICMediaFile"),
    (e.ICMediaFile = function () {}),
    (e.ICMediaFile.prototype = new e.ICAttachment()),
    e.namespace("IMI.ICMessage"),
    (e.ICMessage = (function () {
      var t;
      return (
        ((t = function () {
          var e = this;
          (e.category = void 0),
            (e.channel = void 0),
            (e.extras = void 0),
            (e.media = e.attachments = void 0),
            (e.message = void 0),
            (e.replyTo = void 0),
            (e.conversationId = void 0),
            (e.topic = void 0),
            (e.transactionId = void 0),
            (e.type = void 0),
            (e.userId = void 0),
            (e.customTags = void 0),
            (e.appId = void 0),
            (e.deviceId = void 0),
            (e.clientId = void 0),
            (e.deliveredAt = void 0),
            (e.readAt = void 0),
            (e.submittedAt = void 0),
            (e.priority = void 0),
            (e.thread = void 0),
            (e.status = void 0),
            (e.outgoing = !0);
        }).prototype = {
          getAppId: function () {
            return this.appId;
          },
          setAppId: function (e) {
            this.appId = e;
          },
          getCategory: function () {
            return this.category;
          },
          setCategory: function (e) {
            this.category = e;
          },
          getChannel: function () {
            return this.channel;
          },
          setChannel: function (e) {
            this.channel = e;
          },
          getCustomTags: function () {
            return this.customTags;
          },
          setCustomTags: function (e) {
            this.customTags = e;
          },
          getExtras: function () {
            return this.extras;
          },
          setExtras: function (e) {
            this.extras = e;
          },
          getMedia: function () {
            return this.attachments;
          },
          setMedia: function (e) {
            this.media = this.attachments = e;
          },
          getAttachments: function () {
            return this.attachments;
          },
          setAttachments: function (e) {
            this.media = this.attachments = e;
          },
          getMessage: function () {
            return this.message;
          },
          setMessage: function (e) {
            this.message = e;
          },
          getReplyTo: function () {
            return this.replyTo;
          },
          setReplyTo: function (e) {
            this.replyTo = e;
          },
          getConversationId: function () {
            return this.conversationId;
          },
          setConversationId: function (e) {
            this.conversationId = e;
          },
          getTopic: function () {
            return this.topic;
          },
          setTopic: function (e) {
            this.topic = e;
          },
          getPriority: function () {
            return this.priority;
          },
          setPriority: function (e) {
            this.priority = e;
          },
          getTransactionId: function () {
            return this.transactionId;
          },
          setTransactionId: function (e) {
            this.transactionId = e;
          },
          getType: function () {
            return this.type;
          },
          setType: function (e) {
            this.type = e;
          },
          getUserId: function () {
            return this.userId;
          },
          setUserId: function (e) {
            this.userId = e;
          },
          getDeviceId: function () {
            return this.deviceId;
          },
          setDeviceId: function (e) {
            this.deviceId = e;
          },
          getClientId: function () {
            return this.clientId;
          },
          setClientId: function (e) {
            this.clientId = e;
          },
          getSubmittedAt: function () {
            return this.submittedAt;
          },
          setSubmittedAt: function (e) {
            this.submittedAt = e;
          },
          getReadAt: function () {
            return this.readAt;
          },
          setReadAt: function (e) {
            this.readAt = e;
          },
          getDeliveredAt: function () {
            return this.deliveredAt;
          },
          setDeliveredAt: function (e) {
            this.deliveredAt = e;
          },
          getThread: function () {
            return this.thread;
          },
          setThread: function (e) {
            this.thread = e;
          },
          getStatus: function () {
            return this.status;
          },
          setStatus: function (e) {
            this.status = e;
          },
          setOutgoing: function (e) {
            this.outgoing = e;
          },
          getOutgoing: function () {
            return this.outgoing;
          },
          setRelatedTransactionId: function (e) {
            this.relatedTid = e;
          },
          getRelatedTransactionId: function () {
            return this.relatedTid;
          },
          setInteractiveData: function (e) {
            this.interactiveData = e;
          },
          getInteractiveData: function () {
            return this.interactiveData;
          },
          setQuickReplyData: function (e) {
            this.quickReplyData = e;
          },
          getQuickReplyData: function () {
            return this.quickReplyData;
          },
          toJSON: function () {
            var t = this,
              n = {};
            (n.appId = t.getAppId()),
              (n.deviceId = t.getDeviceId()),
              (n.clientId = t.getClientId()),
              (n.topic = t.getTopic()),
              (n.message = t.getMessage()),
              t.getUserId() && (n.userId = t.getUserId()),
              t.getConversationId() && (n.senderId = t.getConversationId()),
              t.getTransactionId() && (n.tid = t.getTransactionId()),
              t.getType() && (n.type = t.getType()),
              t.getTopic() && (n.topic = t.getTopic()),
              t.getChannel() && (n.channel = t.getChannel()),
              t.getCategory() && (n.category = t.getCategory()),
              t.getThread() && (n.thread = t.getThread().toJSON());
            var i = {};
            if (
              (t.getExtras() && (i = t.getExtras()),
              t.getCustomTags() && (i.customtags = t.getCustomTags()),
              (n.extras = i),
              t.getAttachments() && e.isArray(t.getAttachments()))
            ) {
              for (var r = [], o = t.getAttachments(), s = 0; s < o.length; s++)
                r.push(o[s].toJSON());
              n.media = r;
            }
            if (t.getMedia() && e.isArray(t.getMedia())) {
              for (r = [], o = t.getMedia(), s = 0; s < o.length; s++)
                r.push(o[s].toJSON());
              n.media = r;
            }
            return (
              (n.outgoing = t.getOutgoing()),
              (n.relatedTid = t.getRelatedTransactionId()),
              t.interactiveData &&
                (n.interactiveData = t.interactiveData.toJSON()),
              t.getQuickReplyData() &&
                (n.quickReplies = t.getQuickReplyData().toJSON()),
              n
            );
          },
        }),
        (t.fromJSON = function (t) {
          var n = new e.ICMessage();
          if (
            (n.setCategory(t.category),
            n.setChannel(t.channel),
            n.setMessage(t.message),
            n.setReplyTo(t.replyTo),
            n.setConversationId(t.senderId),
            n.setTopic(t.topic),
            n.setTransactionId(t.tid),
            n.setDeviceId(t.deviceId || i.getDeviceProfile().getDeviceId()),
            n.setAppId(t.appId || i.icConfig.appid),
            n.setUserId(t.userId || i.getDeviceProfile().getUserId()),
            n.setClientId(t.clientId || i.clientId),
            (t.created_on || t.ts) &&
              n.setSubmittedAt(e.getDate(t.created_on || t.ts)),
            t.delivered_at &&
              (n.setDeliveredAt(e.getDate(t.delivered_at)),
              n.setStatus(e.ICMessageStatus.Delivered)),
            t.read_at &&
              (n.setReadAt(e.getDate(t.read_at)),
              n.setStatus(e.ICMessageStatus.Read)),
            t.interactiveData &&
              t.interactiveData.submitted_at &&
              "" != t.interactiveData.submitted_at &&
              n.setStatus(e.ICMessageStatus.Clicked),
            t.thread)
          ) {
            var r = e.ICThread.fromJSON(t.thread);
            n.setThread(r);
          }
          var o = e.ICMessageType.Message,
            s = t.payload_type;
          if (
            ("sentByUser" === s
              ? (o = e.ICMessageType.Republish)
              : "messageRead" === s
              ? (o = e.ICMessageType.ReadReceipt)
              : "messageDelivered" === s
              ? (o = e.ICMessageType.MessageDelivered)
              : "reopenThread" === s
              ? (o = e.ICMessageType.ReopenThread)
              : "closeThread" === s
              ? (o = e.ICMessageType.CloseThread)
              : "updateThread" === s
              ? (o = e.ICMessageType.UpdateThread)
              : "typingStart" === s
              ? (o = e.ICMessageType.TypingStart)
              : "typingStop" === s
              ? (o = e.ICMessageType.TypingStop)
              : "messageDeleted" === s
              ? (o = e.ICMessageType.MessageDeleted)
              : "messageClicked" === s && (o = e.ICMessageType.ClickedReceipt),
            n.setType(o),
            t.relatedTid && n.setRelatedTransactionId(t.relatedTid),
            t.interactiveData &&
              n.setInteractiveData(
                e.ICInteractiveData.fromJSON(t.interactiveData)
              ),
            n.setUserId(t.userId || i.iCDeviceProfile.userId),
            n.setOutgoing(
              t.outgoing ? t.outgoing : n.getType() == e.ICMessageType.Republish
            ),
            t.media && e.isArray(t.media) && t.media.length > 0)
          )
            for (var a = [], c = 0; c < t.media.length; c++) {
              const i = t.media[c];
              if (i.contentType == e.ICContentType.Template)
                switch (i.templateType) {
                  case e.ICTemplateType.Form:
                    a.push(e.ICFormTemplateAttachment.fromJSON(i));
                    break;
                  case e.ICTemplateType.Generic:
                    a.push(new e.ICGenericTemplateAttachment(i));
                }
              else a.push(e.ICAttachment.fromJSON(i));
              n.setAttachments(a);
            }
          if (t.extras) {
            var u = t.extras;
            u &&
              u.customtags &&
              (n.setCustomTags(u.customtags), delete t.extras.customtags),
              n.setExtras(u);
          }
          return (
            t.quickReplies &&
              n.setQuickReplyData(new e.ICQuickReplyData(t.quickReplies)),
            n
          );
        }),
        t
      );
    })()),
    (e.ICGenericTemplateAttachment = class {
      constructor(t) {
        t &&
          ((this.#contentType = t.contentType),
          (this.#templateType = t.templateType),
          t.payload && (this.#reference = t.payload.reference),
          (this.#elements = []),
          t.payload.elements.forEach((t) => {
            this.#elements.push(new e.ICGenericTemplateElement(t));
          }));
      }
      #contentType;
      #templateType;
      #elements;
      #reference;
      setReference(e) {
        this.#reference = e;
      }
      getReference() {
        return this.#reference;
      }
      getContentType() {
        return this.#contentType;
      }
      getTemplateType() {
        return this.#templateType;
      }
      getElements() {
        return this.#elements;
      }
      toJSON() {
        var e = {};
        return (
          (e.contentType = this.#contentType),
          (e.templateType = this.#templateType),
          (e.payload = { elements: [] }),
          (e.payload.reference = this.#reference),
          this.#elements.forEach((t) => e.payload.elements.push(t.toJSON())),
          e
        );
      }
    }),
    (e.ICGenericTemplateElement = class {
      constructor(t) {
        t &&
          ((this.#title = t.title),
          (this.#subtitle = t.subtitle),
          (this.#imageURLs = t.imageUrls),
          (this.#buttons = []),
          t.buttons.forEach((t) => {
            this.#buttons.push(new e.ICButton(t));
          }));
      }
      #title;
      #subtitle;
      #imageURLs;
      #buttons;
      getTitle() {
        return this.#title;
      }
      getSubtitle() {
        return this.#subtitle;
      }
      getImageURLs() {
        return this.#imageURLs;
      }
      getButtons() {
        return this.#buttons;
      }
      toJSON() {
        var e = {};
        return (
          (e.title = this.#title),
          (e.subtitle = this.#subtitle),
          (e.imageUrls = this.#imageURLs),
          (e.buttons = []),
          this.#buttons.forEach((t) => {
            e.buttons.push(t.toJSON());
          }),
          e
        );
      }
    }),
    (e.ICButton = class {
      constructor(t) {
        if (t)
          switch (
            ((this.#identifier = t.identifier),
            (this.#actionURL = t.url),
            (this.#imageURL = t.imageUrl),
            (this.#title = t.title),
            (this.#payload = t.payload),
            (this.#type = t.type),
            t.type)
          ) {
            case e.ICInteractiveDataType.FormResponse:
              this.#type = e.ICInteractiveDataType.FormResponse;
              break;
            case e.ICInteractiveDataType.WebURL:
              this.#type = e.ICInteractiveDataType.WebURL;
              break;
            case e.ICInteractiveDataType.TemplatePostback:
              this.#type = e.ICInteractiveDataType.TemplatePostback;
              break;
            case e.ICInteractiveDataType.QuickReplyPostback:
              this.#type = e.ICInteractiveDataType.QuickReplyPostback;
          }
      }
      #type;
      #identifier;
      #actionURL;
      #imageURL;
      #title;
      #payload;
      getType() {
        return this.#type;
      }
      getIdentifier() {
        return this.#identifier;
      }
      getImageURL() {
        return this.#imageURL;
      }
      getActionURL() {
        return this.#actionURL;
      }
      getTitle() {
        return this.#title;
      }
      getPayload() {
        return this.#payload;
      }
      toJSON() {
        var e = {};
        return (
          (e.type = this.#type),
          (e.identifier = this.#identifier),
          (e.url = this.#actionURL),
          (e.imageUrl = this.#imageURL),
          (e.title = this.#title),
          (e.payload = this.#payload),
          e
        );
      }
    }),
    (e.ICQuickReplyData = class {
      constructor(t) {
        t &&
          ((this.#reference = t.reference),
          (this.#buttons = []),
          t.options &&
            t.options.forEach((t) => {
              this.#buttons.push(new e.ICButton(t));
            }));
      }
      #reference;
      #buttons;
      setReference(e) {
        this.#reference = e;
      }
      getReference() {
        return this.#reference;
      }
      setButtons(e) {
        this.#buttons = e;
      }
      getButtons() {
        return this.#buttons;
      }
      toJSON() {
        var e = {};
        return (
          (e.reference = this.#reference),
          (e.options = []),
          this.#buttons.forEach((t) => e.options.push(t)),
          e
        );
      }
    }),
    e.namespace("IMI.ICMessageStatus"),
    (e.ICMessageStatus = {
      None: 0,
      NotSent: 1,
      Sent: 2,
      Delivered: 3,
      Read: 4,
      Clicked: 5,
    }),
    e.namespace("IMI.ICFormFieldType"),
    (e.ICFormFieldType = {
      Text: "text",
      Name: "name",
      Email: "email",
      Integer: "integer",
      Decimal: "decimal",
      Date: "date",
      Dropdown: "dropdown",
      MultiSelectDropdown: "multiSelectDropdown",
    }),
    e.namespace("IMI.ICFormField"),
    (e.ICFormField =
      (((d = function () {}).prototype = {
        getName: function () {
          return this.name;
        },
        setName: function (e) {
          this.name = e;
        },
        setType: function (e) {
          this.type = e;
        },
        getType: function () {
          return this.type;
        },
        getValue: function () {
          return this.value;
        },
        setValue: function (e) {
          this.value = e;
        },
        getValues: function () {
          return this.values;
        },
        setValues: function (e) {
          this.values = e;
        },
        getLabel: function () {
          return this.label;
        },
        setLabel: function (e) {
          this.label = e;
        },
        getOptions: function () {
          return this.options;
        },
        setOptions: function (e) {
          this.options = e;
        },
        setDescription: function (e) {
          this.description = e;
        },
        getDescription: function () {
          return this.description;
        },
        getMandatory: function () {
          return this.mandatory;
        },
        setMandatory: function (e) {
          this.mandatory = e;
        },
        toJSON: function () {
          var t = this,
            n = {};
          return (
            (n.name = t.name),
            (n.type = t.type),
            (n.value =
              t.getType() == e.ICFormFieldType.Date && t.value
                ? e.parseDate(new Date(t.value))
                : t.value),
            t.getType() == e.ICFormFieldType.MultiSelectDropdown &&
              (n.value = t.values),
            (n.label = t.label),
            (n.options = t.options),
            (n.description = t.description),
            (n.mandatory = t.mandatory),
            n
          );
        },
      }),
      (d.fromJSON = function (t) {
        var n = new e.ICFormField();
        return (
          (n.name = t.name),
          (n.type = t.type),
          (n.value = t.value),
          t.type == e.ICFormFieldType.MultiSelectDropdown &&
            (n.values = t.value),
          (n.label = t.label),
          (n.options = t.options),
          (n.description = t.description),
          (n.mandatory = t.mandatory),
          n
        );
      }),
      d)),
    e.namespace("IMI.ICInteractiveData"),
    (e.ICInteractiveData =
      (((p = function () {}).prototype = {
        getSubmittedAt: function () {
          return this.submittedAt;
        },
        setSubmittedAt: function (e) {
          this.submittedAt = e;
        },
        setType: function (e) {
          this.type = e;
        },
        getType: function () {
          return this.type;
        },
        setTid: function (e) {
          this.tid = e;
        },
        getTid: function () {
          return this.tid;
        },
        setIdentifier: function (e) {
          this.identifier = e;
        },
        getIdentifier: function () {
          return this.identifier;
        },
        setRelatedTransactionId: function (e) {
          this.relatedTransactionId = e;
        },
        getRelatedTransactionId: function () {
          return this.relatedTransactionId;
        },
        getPayload: function () {
          return this.payload;
        },
        setPayload: function (e) {
          this.payload = e;
        },
        getTitle: function () {
          return this.title;
        },
        setTitle: function (e) {
          this.title = e;
        },
        getReference: function () {
          return this.reference;
        },
        setReference: function (e) {
          this.reference = e;
        },
        getActionURL: function () {
          return this.actionURL;
        },
        setActionURL: function (e) {
          this.actionURL = e;
        },
        toJSON: function () {
          var e = this,
            t = {};
          return (
            e.submittedAt && (t.submitted_at = e.submittedAt),
            e.type && (t.type = e.type),
            e.relatedTransactionId
              ? (t.tid = e.relatedTransactionId)
              : e.tid && (t.tid = e.tid),
            e.identifier && (t.identifier = e.identifier),
            (t.payload = e.payload ? e.payload : {}),
            e.title && (t.title = e.title),
            e.reference && (t.reference = e.reference),
            (t.url = e.actionURL || ""),
            t
          );
        },
      }),
      (p.fromJSON = function (t) {
        var n = new e.ICInteractiveData();
        return (
          (n.submittedAt = t.submitted_at),
          (n.type = t.type),
          (n.tid = t.tid),
          (n.relatedTransactionId = t.tid),
          (n.identifier = t.identifier),
          (n.title = t.title),
          (n.reference = t.reference),
          (n.actionURL = t.url),
          t.payload && (n.payload = t.payload),
          n
        );
      }),
      p)),
    e.namespace("IMI.ICInteractiveDataType"),
    (e.ICInteractiveDataType = {
      FormResponse: "formResponse",
      WebURL: "webUrl",
      TemplatePostback: "templatePostback",
      QuickReplyPostback: "quickReplyPostback",
    }),
    e.namespace("IMI.ICTemplateType"),
    (e.ICTemplateType = { Form: "form", Generic: "generic" }),
    e.namespace("IMI.ICFormTemplateAttachment"),
    (e.ICFormTemplateAttachment =
      (((f = function () {}).prototype = {
        getTitle: function () {
          return this.title;
        },
        setTitle: function (e) {
          this.title = e;
        },
        getFields: function () {
          return this.fields;
        },
        setFields: function (e) {
          this.fields = e;
        },
        getContentType: function () {
          return this.contentType;
        },
        setContentType: function (e) {
          this.contentType = e;
        },
        getTemplateType: function () {
          return this.templateType;
        },
        setTemplateType: function (e) {
          this.templateType = e;
        },
        getTemplateId: function () {
          return this.templateId;
        },
        setTemplateId: function (e) {
          this.templateId = val;
        },
        getReference: function () {
          return this.reference;
        },
        setReference: function (e) {
          this.reference = e;
        },
        toJSON: function () {
          var e = {};
          if (
            ((e.contentType = this.contentType),
            (e.templateType = this.templateType),
            (e.templateId = this.templateId),
            (e.reference = this.reference),
            (e.payload = {}),
            (e.payload.title = this.title),
            this.fields && this.fields.length > 0)
          ) {
            e.payload.fields = [];
            for (let t = 0; t < this.fields.length; t++)
              e.payload.fields.push(this.fields[t].toJSON());
          }
          return e;
        },
      }),
      (f.fromJSON = function (t) {
        var n = new e.ICFormTemplateAttachment();
        if (
          ((n.contentType = t.contentType),
          (n.templateType = t.templateType),
          (n.templateId = t.templateId),
          (n.reference = t.reference),
          (n.title = t.payload.title),
          t.payload.fields && t.payload.fields.length > 0)
        ) {
          var i = [];
          for (let n = 0; n < t.payload.fields.length; n++)
            i.push(e.ICFormField.fromJSON(t.payload.fields[n]));
          n.fields = i;
        }
        return n;
      }),
      f)),
    e.namespace("IMI.ICContentType"),
    (e.ICContentType = {
      Audio: "audio",
      File: "file",
      Video: "video",
      Image: "image",
      Url: "url",
      Template: "template",
    }),
    e.namespace("IMI.ICDeviceProfile"),
    (e.ICDeviceProfile = (function () {
      var n;
      return (
        ((n = function (e, t, n, i) {
          var r = this;
          (r.deviceId = e),
            (r.userId = t),
            (r.customerId = n),
            (r.mIsAppUserSystemGenerated = i || !1);
        }).prototype = {
          isAppUserSystemGenerated: function () {
            return this.mIsAppUserSystemGenerated;
          },
          getUserId: function () {
            return this.userId;
          },
          getDeviceId: function () {
            return this.deviceId;
          },
          _setDeviceId: function (e) {
            this.deviceId = e;
          },
          _setCustomerId: function (e) {
            this.customerId = e;
          },
          _setUserId: function (e, t) {
            (this.userId = e), (this.mIsAppUserSystemGenerated = t);
          },
        }),
        (n.getDefaultDeviceId = function () {
          var n = g.uuid();
          if (t) {
            var i = t.get("defDeviceId");
            e.defined(i) ? (n = i) : t.set("defDeviceId", n);
          }
          return n;
        }),
        n
      );
    })()),
    e.namespace("IMI.ICThread"),
    (e.ICThread =
      (((h = function () {}).prototype = {
        getId: function () {
          return this.id;
        },
        setId: function (e) {
          this.id = e;
        },
        getCreatedAt: function () {
          return this.createdAt;
        },
        setCreatedAt: function (e) {
          this.createdAt = e;
        },
        getUpdatedAt: function () {
          return this.updatedAt;
        },
        setUpdatedAt: function (e) {
          this.updatedAt = e;
        },
        getTitle: function () {
          return this.title;
        },
        setTitle: function (e) {
          this.title = e;
        },
        getExtras: function () {
          return this.extras;
        },
        setExtras: function (e) {
          this.extras = e;
        },
        getExternalid: function () {
          return this.externalid;
        },
        setExternalid: function (e) {
          this.externalid = e;
        },
        getType: function () {
          return this.type;
        },
        setType: function (e) {
          this.type = e;
        },
        getStreamName: function () {
          return this.streamName;
        },
        setStreamName: function (e) {
          this.streamName = e;
        },
        getCategory: function () {
          return this.category;
        },
        setCategory: function (e) {
          this.category = e;
        },
        setUnreadMessageCount: function (e) {
          this.unread_msg_count = e;
        },
        getUnreadMessageCount: function () {
          return this.unread_msg_count;
        },
        getStatus: function () {
          return this.status;
        },
        setStatus: function (e) {
          this.status = e;
        },
        setReasonForStatusChange: function (e) {
          this.reasonForStatusChange = e;
        },
        getReasonForStatusChange: function () {
          return this.reasonForStatusChange;
        },
        toJSON: function () {
          var t = this,
            n = {};
          return (
            t.getId() && (n.id = t.getId()),
            t.getTitle() && (n.title = t.getTitle()),
            t.getCreatedAt() && (n.createdAt = e.parseDate(t.getCreatedAt())),
            t.getUpdatedAt() && (n.updatedAt = e.parseDate(t.getUpdatedAt())),
            t.getStreamName() && (n.stream_name = t.getStreamName()),
            t.getExtras() && (n.extras = t.getExtras()),
            t.getExternalid() && (n.externalid = t.getExternalid()),
            t.getType() && (n.type = t.getType()),
            t.getStatus() && (n.status = t.getStatus()),
            t.getReasonForStatusChange() &&
              (n.reasonForStatusChange = t.getReasonForStatusChange()),
            n
          );
        },
      }),
      (h.fromJSON = function (t) {
        return (function (t) {
          var n = new e.ICThread();
          try {
            n.setId(t.id),
              n.setTitle(t.title),
              t.created_on && n.setCreatedAt(e.getDate(t.created_on)),
              t.updated_on && n.setUpdatedAt(e.getDate(t.updated_on)),
              t.stream_name && n.setStreamName(t.stream_name),
              t.extras && n.setExtras(t.extras),
              t.externalid && n.setExternalid(t.externalid),
              t.type && n.setType(e.ICThreadType.getType(t.type)),
              t.unread_msg_count && n.setUnreadMessageCount(t.unread_msg_count),
              t.status &&
                n.setStatus(e.ICThreadStatus.getThreadStatus(t.status)),
              t.reasonForStatusChange &&
                n.setReasonForStatusChange(t.reasonForStatusChange);
          } catch (i) {
            e.log(i);
          }
          return n;
        })(t);
      }),
      h)),
    e.namespace("IMI.ICThreadType"),
    (e.ICThreadType = {
      Conversation: "Conversation",
      Announcement: "Announcement",
      getType: function (e) {
        return "Conversation" === e
          ? this.Conversation
          : "Announcement" === e
          ? this.Announcement
          : void 0;
      },
    }),
    e.namespace("IMI.ICThreadStatus"),
    (e.ICThreadStatus = {
      Active: "Active",
      Closed: "Closed",
      getThreadStatus: function (e) {
        return "Active" === e
          ? this.Active
          : "Closed" === e
          ? this.Closed
          : void 0;
      },
    }),
    e.namespace("IMI.ICConnectionStatus"),
    (e.ICConnectionStatus = {
      None: 0,
      Connecting: 1,
      Connected: 2,
      Refused: 3,
      Closed: 4,
      Error: 6,
    }),
    e.namespace("IMI.MessageStatus"),
    (e.MessageStatus = { messagesuccess: 0, messagefailed: 1 }),
    e.namespace("IMI.ICMessageType"),
    (e.ICMessageType = {
      Message: "Message",
      MessageNotification: "MessageNotification",
      ReadReceipt: "ReadReceipt",
      MessageDelivered: "MessageDelivered",
      Republish: "Republish",
      CloseThread: "CloseThread",
      ReopenThread: "ReopenThread",
      UpdateThread: "UpdateThread",
      TypingStart: "TypingStart",
      TypingStop: "TypingStop",
      MessageDeleted: "MessageDeleted",
      ClickedReceipt: "ClickedReceipt",
    }),
    e.namespace("IMI.ICAccessLevel"),
    (e.ICAccessLevel = {
      ReadWrite: 0,
      Read: 1,
      Write: 2,
      getAccessLevel: function (e) {
        return 0 == e
          ? this.ReadWrite
          : 1 == e
          ? this.Read
          : 2 == e
          ? this.Write
          : void 0;
      },
    }),
    e.namespace("IMI.ICErrorCodes"),
    (e.ICErrorCodes = {
      NotInitialized: { code: 6e3, description: "Not initialized" },
      AlreadyInitialized: { code: 6001, description: "Aleady initialized" },
      NotRegistered: { code: 6002, description: "Not registered" },
      FeatureNotSupported: { code: 6003, description: "Feature not supported" },
      InvalidParameterValue: {
        code: 6004,
        description: "Invalid parameter value",
      },
      PermissionNotGranted: {
        code: 6005,
        description: "Permission not granted",
      },
      DeviceIdCurrentlyNotRegistered: {
        code: 6006,
        description: "DeviceId currently not registered",
      },
      AlreadyProcessing: { code: 6007, description: "AlreadyProcessing" },
      NotConnected: { code: 6200, description: "Not connected" },
      ConnectionFailure: { code: 6201, description: "Connection failure" },
      PublishFailed: { code: 6202, description: "Publish failed" },
      SubscribeFailed: { code: 6203, description: "Subscription failed" },
      UnsubscribeFailed: { code: 6204, description: "Unsubscription failed" },
      ConnectionAlreadyExists: {
        code: 6205,
        description: "Connection is already exists",
      },
      DuplicateRegisterListener: {
        code: 6026,
        description: "Duplicate register listener",
      },
      InvalidToken: { code: 6027, description: "Invalid token" },
      InvalidAuthorizationRequest: {
        code: 6028,
        description: "Invalid authorization request",
      },
      TokenExpired: { code: 6029, description: "Token is expired" },
      TokenRequired: { code: 6030, description: "Token is required" },
      InvalidContentType: { code: 6031, description: "Invalid content type" },
      InternalError: { code: 6032, description: "Internal error" },
      DeviceIdAlreadyRegistered: {
        code: 6033,
        description: "DeviceId already registered",
      },
      Unknown: { code: 6999, description: "Unknown error" },
    }),
    e.namespace("IMI.ICAccessLevelFilter"),
    (e.ICAccessLevelFilter = {
      ReadWrite: 0,
      Read: 1,
      Write: 2,
      All: 3,
      getAccessLevel: function (e) {
        return 0 == e
          ? this.ReadWrite
          : 1 == e
          ? this.Read
          : 2 == e
          ? this.Write
          : 3 == e
          ? this.All
          : void 0;
      },
    }),
    e.namespace("IMI.ICDeviceProfileParam"),
    (e.ICDeviceProfileParam = { UserId: 0, CustomerId: 1 }),
    e.namespace("IMI.ICMediaFileManager"),
    (e.ICMediaFileManager = (function () {
      var t = function () {};
      return (
        (t.uploadFile = function (t, n, r) {
          var o = i.isRegistered();
          if (o)
            if (
              (2 === arguments.length && e.isObject(n) && (r = n),
              t instanceof File)
            ) {
              (e.defined(n) && e.isString(n)) || (n = t.type);
              var s = { secretKey: i.appSecret, sdkversion: sdkversion };
              i.securedToken && (s.Authorization = i.securedToken),
                n && (s["media-type"] = n),
                i.accessToken && (s.accessToken = i.accessToken);
              var a = new FormData();
              a.append("media", t);
              var c =
                elbZeroRatingUploadURL +
                "/media/" +
                i.appName +
                "/upload?previewRequired=true&fileUrlRequired=true";
              $.ajax({
                url: c,
                type: "POST",
                data: a,
                contentType: !1,
                cache: !1,
                processData: !1,
                headers: s,
                xhr: function () {
                  var n = $.ajaxSettings.xhr();
                  return (
                    n.upload &&
                      n.upload.addEventListener(
                        "progress",
                        function (n) {
                          var i = n.loaded || n.position,
                            o = n.total;
                          r &&
                            e.isFunction(r.onFileUploadProgress) &&
                            r.onFileUploadProgress(t, i, o);
                        },
                        !0
                      ),
                    n
                  );
                },
                success: function (n) {
                  n && 36 === n.code
                    ? r &&
                      e.isFunction(r.onFileUploadComplete) &&
                      r.onFileUploadComplete(
                        t,
                        "",
                        e.ICErrorCodes.InvalidContentType
                      )
                    : n.mediaId
                    ? r &&
                      e.isFunction(r.onFileUploadComplete) &&
                      r.onFileUploadComplete(t, n.mediaId, null, n)
                    : r &&
                      e.isFunction(r.onFileUploadComplete) &&
                      r.onFileUploadComplete(
                        t,
                        "",
                        e.ICErrorCodes.InternalError
                      );
                },
                error: function (n, i, o) {
                  r &&
                    e.isFunction(r.onFileUploadComplete) &&
                    r.onFileUploadComplete(t, "", e.ICErrorCodes.InternalError);
                },
              });
            } else
              r &&
                e.isFunction(r.onFileUploadComplete) &&
                r.onFileUploadComplete(
                  t,
                  "",
                  e.ICErrorCodes.InvalidParameterValue
                );
          else
            r &&
              e.isFunction(r.onFailure) &&
              r.onFailure(e.ICErrorCodes.DeviceIdCurrentlyNotRegistered);
        }),
        (t.regenerateMediaURL = function (t, n) {
          if (i.isRegistered()) {
            0 == t.trim().length &&
              n &&
              e.isFunction(n.onFailure) &&
              n.onFailure(e.ICErrorCodes.InvalidParameterValue);
            var r = g.getQueryString(t);
            if (r.exp && new Date().getTime() < parseInt(r.exp))
              return void (
                n &&
                "function" == typeof n.onSuccess &&
                n.onSuccess(t)
              );
            var o = { secretKey: i.appSecret };
            i.securedToken && (o.Authorization = i.securedToken),
              i.accessToken && (o.accessToken = i.accessToken);
            var s = {
              url: `${elbZeroRatingURL}/${i.appName}/user/${i.iCDeviceProfile.userId}/generatemedia`,
              type: "POST",
              data: JSON.stringify({ url: t }),
              headers: o,
              success: function (e) {
                e && "0" == e.code
                  ? n && "function" == typeof n.onSuccess
                    ? n.onSuccess(e.url)
                    : i._invokeFailureCallBack(n, e)
                  : e && "1" == e.code
                  ? n &&
                    "function" == typeof n.onFailure &&
                    n.onFailure(e.status)
                  : i._invokeFailureCallBack(n, e);
              },
              error: function (t, i, r) {
                n && e.isFunction(n.onFailure) && n.onFailure(r);
              },
            };
            $.ajax(s);
          } else
            n &&
              e.isFunction(n.onFailure) &&
              n.onFailure(e.ICErrorCodes.DeviceIdCurrentlyNotRegistered);
        }),
        t
      );
    })()),
    e.namespace("IMI.ICFileUploadCallback"),
    (e.ICFileUploadCallback = function () {
      (this.onFileUploadComplete = function (e, t, n) {}),
        (this.onFileUploadProgress = function (e, t, n) {});
    }),
    e.namespace("IMI.WebPushClient"),
    (e.WebPushClient = (function () {
      var n = function () {
        var t = this;
        (t.isRegister = !1), (t.headers = { secretKey: i.appSecret });
        var n = (t.browserName = e.getBrowserName());
        if ("chrome" === n || "firefox" === n)
          try {
            firebase.initializeApp(config), (messaging = firebase.messaging());
          } catch (r) {
            e.log("please add firebase related resources ", r);
          }
      };
      return (
        (n.prototype = {
          init: function (t, n, r) {
            var o = this;
            (o.appid = t),
              (o.userId = n),
              (o.deviceId = i.iCDeviceProfile.deviceId),
              (o.regcallback = r);
            var s = (o.browserName = e.getBrowserName());
            "chrome" === s || "firefox" === s
              ? o.initFCM()
              : "safari" === s
              ? o.initSafari()
              : e.log("other browser... ");
          },
          initFCM: function () {
            try {
              if ("denied" === Notification.permission) return !1;
              if (!("PushManager" in window)) return !1;
              for (
                var t = document.head, n = !0, r = 0;
                r < t.childNodes.length;
                r++
              )
                if ("manifest" === t.childNodes[r].rel) {
                  n = !1;
                  break;
                }
              if (n) {
                var o = document.createElement("link");
                (o.href =
                  i.icConfig.getAssetPath() +
                  "manifest/manifest_" +
                  this.appid +
                  ".json"),
                  (o.rel = "manifest"),
                  document.head.appendChild(o);
              }
              this.FCMRegistartion();
            } catch (s) {
              e.log("exception in chrome init :: ", s);
            }
          },
          FCMRegistartion: function () {
            var n = this,
              o = elbZeroRatingURL + "/" + i.appName + "/profileupdate";
            try {
              "serviceWorker" in navigator
                ? (navigator.serviceWorker
                    .register(
                      window.location.origin + i.icConfig.getRoot() + "sw.js",
                      { scope: i.icConfig.getRoot() }
                    )
                    .then(function () {
                      return navigator.serviceWorker.ready;
                    })
                    .then(function (s) {
                      messaging.useServiceWorker(s),
                        messaging
                          .requestPermission()
                          .then(function () {
                            messaging
                              .getToken()
                              .then(function (s) {
                                if (s) {
                                  t.set("pushRegistered", "true");
                                  var a = {
                                      tenant: "1",
                                      event: "ProfileUpdate",
                                      channel: "rt",
                                      channelType: "web",
                                      clientId: i.clientId,
                                      data: {
                                        update: {
                                          pushId: s,
                                          useragent: navigator.userAgent,
                                          os: e.getBrowserName(),
                                          osversion: e.getbrowserVersion(),
                                          language: navigator.language,
                                        },
                                      },
                                      state: "PROFILEUPDATE",
                                    },
                                    c = r._getPayLoadMsg(JSON.stringify(a)),
                                    u = {
                                      "Content-Type": "application/json",
                                      secretKey: i.appSecret,
                                      sdkversion: sdkversion,
                                    };
                                  i.securedToken &&
                                    (u.Authorization = i.securedToken),
                                    i.accessToken &&
                                      (u.accessToken = i.accessToken),
                                    e.Post(o, c, u, {
                                      onFailure: function (e) {
                                        i._invokeListeners(e);
                                      },
                                    }),
                                    n.returnCallBack({ pushId: s }),
                                    n.onMessageHandler();
                                } else e.log("No Instance ID token available. Request permission to generate one.");
                              })
                              .catch(function (t) {
                                e.log(
                                  "An error occurred while retrieving token. ",
                                  t
                                );
                              });
                          })
                          .catch(function (t) {
                            e.log("Unable to get permission to notify.", t);
                          });
                    })
                    .catch(function (t) {
                      e.log("Service Worker Error :", t);
                    }),
                  messaging.onTokenRefresh(function () {
                    messaging
                      .getToken()
                      .then(function (s) {
                        t.set("pushRegistered", "true");
                        var a = {
                            tenant: "1",
                            event: "ProfileUpdate",
                            channel: "rt",
                            channelType: "web",
                            clientId: i.clientId,
                            data: {
                              update: {
                                pushId: s,
                                useragent: navigator.userAgent,
                                os: e.getBrowserName(),
                                osversion: e.getbrowserVersion(),
                                language: navigator.language,
                              },
                            },
                            state: "PROFILEUPDATE",
                          },
                          c = r._getPayLoadMsg(JSON.stringify(a)),
                          u = {
                            "Content-Type": "application/json",
                            secretKey: i.appSecret,
                            sdkversion: sdkversion,
                          };
                        i.securedToken && (u.Authorization = i.securedToken),
                          i.accessToken && (u.accessToken = i.accessToken),
                          e.Post(o, c, u, {
                            onFailure: function (e) {
                              i._invokeListeners(e);
                            },
                          }),
                          n.returnCallBack({ pushId: s }),
                          n.onMessageHandler();
                      })
                      .catch(function (t) {
                        e.log("Unable to retrieve refreshed token ", t);
                      });
                  }))
                : e.log("ServiceWorker not supported :-(");
            } catch (s) {
              e.log("exception in chrome init :: ", s);
            }
          },
          onMessageHandler: function () {
            messaging &&
              messaging.onMessage(function (t) {
                e.log("Local Message received. ", t);
                var n = t.data || {},
                  r = n.title || "",
                  o = n.alert || "",
                  s = {};
                n.extras && (s = JSON.parse(n.extras));
                var a = s.iconurl,
                  c = t.collapse_key || n.tid,
                  u = {};
                (u.appId = n.appId), (u.tid = n.tid), (u.url = s.url);
                var l = {
                    body: o,
                    icon: a,
                    tag: c,
                    requireInteration: !0,
                    data: u,
                  },
                  d =
                    elbZeroRatingURL +
                    "/" +
                    i.appName +
                    "/trackDeliveryRequest?tid=" +
                    n.tid +
                    "&appId=" +
                    i.appName;
                fetch(d).catch(function (t) {
                  e.log(t);
                }),
                  "PushManager" in window &&
                    navigator.serviceWorker.ready.then(function (e) {
                      return e.showNotification(r, l);
                    });
              });
          },
          returnCallBack: function (t) {
            var n = this;
            ((t = t || {}).appId = n.appid),
              (t.userId = n.userId),
              n.regcallback
                ? e.isFunction(n.regcallback)
                  ? n.regcallback(t)
                  : n.regcallback.onSuccess &&
                    e.isFunction(n.regcallback.onSuccess) &&
                    n.regcallback.onSuccess(t)
                : e.log("callback is not set ", t);
          },
          initSafari: function () {
            safariself = this;
            var e = window.safari.pushNotification.permission(
              imipush.safariWebPushId
            );
            safariself.checkRemotePermission(e);
          },
          checkRemotePermission: function (n) {
            if ("default" === n.permission)
              window.safari.pushNotification.requestPermission(
                safariRegisterURL,
                imipush.safariWebPushId,
                {},
                this.checkRemotePermission
              );
            else if ("denied" === n.permission);
            else if ("granted" === n.permission) {
              var o = elbZeroRatingURL + "/" + i.appName + "/profileupdate";
              t.set("pushRegistered", "true");
              var s = {
                  tenant: "1",
                  event: "ProfileUpdate",
                  clientId: i.clientId,
                  channel: "rt",
                  channelType: "web",
                  data: {
                    update: {
                      pushId: n.deviceToken,
                      useragent: navigator.userAgent,
                      os: e.getBrowserName(),
                      osversion: e.getbrowserVersion(),
                      language: navigator.language,
                    },
                  },
                  state: "PROFILEUPDATE",
                },
                a = {
                  "Content-Type": "application/json",
                  secretKey: i.appSecret,
                  sdkversion: sdkversion,
                };
              i.securedToken && (a.Authorization = i.securedToken),
                i.accessToken && (a.accessToken = i.accessToken);
              var c = r._getPayLoadMsg(JSON.stringify(s));
              e.Post(o, c, a, {
                onFailure: function (e) {
                  i._invokeListeners(e);
                },
              }),
                safariself.returnCallBack({ pushId: n.deviceToken });
            }
          },
          unsubscribe: function (t) {
            var n = this;
            try {
              n.browserName || (n.browserName = e.getBrowserName());
              var i = n.browserName;
              ("chrome" === i ||
                ("firefox" === i && navigator.serviceWorker)) &&
                navigator.serviceWorker.ready.then(function (n) {
                  messaging
                    .getToken()
                    .then(function (n) {
                      n
                        ? messaging
                            .deleteToken(n)
                            .then(function () {
                              t &&
                                e.isFunction(t) &&
                                t({
                                  status: "0",
                                  description:
                                    "Webpush  successsfully unsubscribed",
                                });
                            })
                            .catch(function (t) {
                              e.log("Unable to delete token. ", t);
                            })
                        : t &&
                          e.isFunction(t) &&
                          t({
                            status: "1",
                            description: "Not yet registered!",
                          });
                    })
                    .catch(function (t) {
                      e.log("Error retrieving Instance ID token. ", t);
                    });
                });
            } catch (r) {}
          },
          getWebSubscriptionDetials: function (t) {
            var n = this;
            n.browserName || (n.browserName = e.getBrowserName());
            var i = n.browserName;
            e.isFunction(t) ||
              (t = function (t) {
                e.log("callback function not sent :: pushdetails", t);
              }),
              "chrome" === i || "firefox" === i
                ? n.getSubscriptionDetails(t)
                : "safari" === i
                ? n.getSafariSubscriptionDetails(t)
                : e.log("other browser... browserName ::", i);
          },
          getSubscriptionDetails: function (e) {
            var t = this;
            try {
              navigator.serviceWorker.ready.then(function (n) {
                messaging
                  .getToken()
                  .then(function (n) {
                    n ||
                      e(
                        (i = {
                          status: "1",
                          description: "app is not registered, please register",
                        })
                      );
                    var i = { status: "0" };
                    ("chrome" !== t.browserName &&
                      "firefox" !== t.browserName) ||
                      (i.pushId = n),
                      e(i);
                  })
                  .catch(function (t) {
                    e({
                      status: "1",
                      description: "app is not registered, please register",
                    });
                  });
              });
            } catch (n) {
              e({
                status: "1",
                description: "app is not registered, please register",
              });
            }
          },
          getSafariSubscriptionDetails: function (e) {
            if ("safari" in window && "pushNotification" in window.safari) {
              var t = window.safari.pushNotification.permission(
                imipush.safariWebPushId
              );
              if (t && "granted" === t.permission)
                return ((n = { status: "0" }).pushId = t.deviceToken), e(n), !0;
            }
            var n;
            return (
              e(
                (n = {
                  status: "1",
                  description: "app is not registered, please register",
                })
              ),
              !0
            );
          },
        }),
        n
      );
    })());
  class y {
    constructor(e) {
      if (!e) throw "Please provide a unique prefix";
      (this.prefix = e),
        window.sessionStorage.setItem(
          this.prefix,
          JSON.stringify(this.getStore())
        );
    }
    add(e) {
      let t = this.getStore();
      e instanceof Array ? e.forEach((e) => t.push(e)) : t.push(e),
        window.sessionStorage.setItem(this.prefix, JSON.stringify(t));
    }
    getStore() {
      let e = window.sessionStorage.getItem(this.prefix);
      return e ? JSON.parse(e) : [];
    }
    exists(e) {
      return this.getStore().includes(e);
    }
    prefix;
  }
})(IMI);
