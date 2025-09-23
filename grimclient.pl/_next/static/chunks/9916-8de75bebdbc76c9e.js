"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9916], {
        89916: (e, t, r) => {
            let n, i;
            r.d(t, {
                A: () => el
            });
            var a = r(53239),
                l = r(18222),
                o = Object.prototype.hasOwnProperty;
            let u = new WeakMap,
                s = () => {},
                c = s(),
                d = Object,
                f = e => e === c,
                g = e => "function" == typeof e,
                E = (e, t) => ({ ...e,
                    ...t
                }),
                h = e => g(e.then),
                p = {},
                w = {},
                v = "undefined",
                y = typeof window != v,
                _ = typeof document != v,
                R = () => y && typeof window.requestAnimationFrame != v,
                T = (e, t) => {
                    let r = u.get(e);
                    return [() => !f(t) && e.get(t) || p, n => {
                        if (!f(t)) {
                            let i = e.get(t);
                            t in w || (w[t] = i), r[5](t, E(i, n), i || p)
                        }
                    }, r[6], () => !f(t) && t in w ? w[t] : !f(t) && e.get(t) || p]
                },
                b = !0,
                [O, m] = y && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [s, s],
                V = {
                    initFocus: e => (_ && document.addEventListener("visibilitychange", e), O("focus", e), () => {
                        _ && document.removeEventListener("visibilitychange", e), m("focus", e)
                    }),
                    initReconnect: e => {
                        let t = () => {
                                b = !0, e()
                            },
                            r = () => {
                                b = !1
                            };
                        return O("online", t), O("offline", r), () => {
                            m("online", t), m("offline", r)
                        }
                    }
                },
                S = !a.useId,
                k = !y || "Deno" in globalThis,
                L = e => R() ? window.requestAnimationFrame(e) : setTimeout(e, 1),
                C = k ? a.useEffect : a.useLayoutEffect,
                A = "undefined" != typeof navigator && navigator.connection,
                N = !k && A && (["slow-2g", "2g"].includes(A.effectiveType) || A.saveData),
                D = new WeakMap,
                I = (e, t) => d.prototype.toString.call(e) === `[object ${t}]`,
                F = 0,
                M = e => {
                    let t, r, n = typeof e,
                        i = I(e, "Date"),
                        a = I(e, "RegExp"),
                        l = I(e, "Object");
                    if (d(e) !== e || i || a) t = i ? e.toJSON() : "symbol" == n ? e.toString() : "string" == n ? JSON.stringify(e) : "" + e;
                    else {
                        if (t = D.get(e)) return t;
                        if (t = ++F + "~", D.set(e, t), Array.isArray(e)) {
                            for (r = 0, t = "@"; r < e.length; r++) t += M(e[r]) + ",";
                            D.set(e, t)
                        }
                        if (l) {
                            t = "#";
                            let n = d.keys(e).sort();
                            for (; !f(r = n.pop());) f(e[r]) || (t += r + ":" + M(e[r]) + ",");
                            D.set(e, t)
                        }
                    }
                    return t
                },
                P = e => {
                    if (g(e)) try {
                        e = e()
                    } catch (t) {
                        e = ""
                    }
                    let t = e;
                    return [e = "string" == typeof e ? e : (Array.isArray(e) ? e.length : e) ? M(e) : "", t]
                },
                j = 0,
                x = () => ++j;
            var W = {
                ERROR_REVALIDATE_EVENT: 3,
                FOCUS_EVENT: 0,
                MUTATE_EVENT: 2,
                RECONNECT_EVENT: 1
            };
            async function U(...e) {
                let [t, r, n, i] = e, a = E({
                    populateCache: !0,
                    throwOnError: !0
                }, "boolean" == typeof i ? {
                    revalidate: i
                } : i || {}), l = a.populateCache, o = a.rollbackOnError, s = a.optimisticData, d = e => "function" == typeof o ? o(e) : !1 !== o, p = a.throwOnError;
                if (g(r)) {
                    let e = [];
                    for (let n of t.keys()) !/^\$(inf|sub)\$/.test(n) && r(t.get(n)._k) && e.push(n);
                    return Promise.all(e.map(w))
                }
                return w(r);
                async function w(r) {
                    let i, [o] = P(r);
                    if (!o) return;
                    let [E, w] = T(t, o), [v, y, _, R] = u.get(t), b = () => {
                        let e = v[o];
                        return (g(a.revalidate) ? a.revalidate(E().data, r) : !1 !== a.revalidate) && (delete _[o], delete R[o], e && e[0]) ? e[0](2).then(() => E().data) : E().data
                    };
                    if (e.length < 3) return b();
                    let O = n,
                        m = x();
                    y[o] = [m, 0];
                    let V = !f(s),
                        S = E(),
                        k = S.data,
                        L = S._c,
                        C = f(L) ? k : L;
                    if (V && w({
                            data: s = g(s) ? s(C, k) : s,
                            _c: C
                        }), g(O)) try {
                        O = O(C)
                    } catch (e) {
                        i = e
                    }
                    if (O && h(O)) {
                        if (O = await O.catch(e => {
                                i = e
                            }), m !== y[o][0]) {
                            if (i) throw i;
                            return O
                        }
                        i && V && d(i) && (l = !0, w({
                            data: C,
                            _c: c
                        }))
                    }
                    if (l && !i && (g(l) ? w({
                            data: l(O, C),
                            error: c,
                            _c: c
                        }) : w({
                            data: O,
                            error: c,
                            _c: c
                        })), y[o][1] = x(), Promise.resolve(b()).then(() => {
                            w({
                                _c: c
                            })
                        }), i) {
                        if (p) throw i;
                        return
                    }
                    return O
                }
            }
            let $ = (e, t) => {
                    for (let r in e) e[r][0] && e[r][0](t)
                },
                q = (e, t) => {
                    if (!u.has(e)) {
                        let r = E(V, t),
                            n = {},
                            i = U.bind(c, e),
                            a = s,
                            l = {},
                            o = (e, t) => {
                                let r = l[e] || [];
                                return l[e] = r, r.push(t), () => r.splice(r.indexOf(t), 1)
                            },
                            d = (t, r, n) => {
                                e.set(t, r);
                                let i = l[t];
                                if (i)
                                    for (let e of i) e(r, n)
                            },
                            f = () => {
                                if (!u.has(e) && (u.set(e, [n, {}, {}, {}, i, d, o]), !k)) {
                                    let t = r.initFocus(setTimeout.bind(c, $.bind(c, n, 0))),
                                        i = r.initReconnect(setTimeout.bind(c, $.bind(c, n, 1)));
                                    a = () => {
                                        t && t(), i && i(), u.delete(e)
                                    }
                                }
                            };
                        return f(), [e, i, f, a]
                    }
                    return [e, u.get(e)[4]]
                },
                [J, z] = q(new Map),
                B = E({
                    onLoadingSlow: s,
                    onSuccess: s,
                    onError: s,
                    onErrorRetry: (e, t, r, n, i) => {
                        let a = r.errorRetryCount,
                            l = i.retryCount,
                            o = ~~((Math.random() + .5) * (1 << (l < 8 ? l : 8))) * r.errorRetryInterval;
                        (f(a) || !(l > a)) && setTimeout(n, o, i)
                    },
                    onDiscarded: s,
                    revalidateOnFocus: !0,
                    revalidateOnReconnect: !0,
                    revalidateIfStale: !0,
                    shouldRetryOnError: !0,
                    errorRetryInterval: N ? 1e4 : 5e3,
                    focusThrottleInterval: 5e3,
                    dedupingInterval: 2e3,
                    loadingTimeout: N ? 5e3 : 3e3,
                    compare: function e(t, r) {
                        var n, i;
                        if (t === r) return !0;
                        if (t && r && (n = t.constructor) === r.constructor) {
                            if (n === Date) return t.getTime() === r.getTime();
                            if (n === RegExp) return t.toString() === r.toString();
                            if (n === Array) {
                                if ((i = t.length) === r.length)
                                    for (; i-- && e(t[i], r[i]););
                                return -1 === i
                            }
                            if (!n || "object" == typeof t) {
                                for (n in i = 0, t)
                                    if (o.call(t, n) && ++i && !o.call(r, n) || !(n in r) || !e(t[n], r[n])) return !1;
                                return Object.keys(r).length === i
                            }
                        }
                        return t != t && r != r
                    },
                    isPaused: () => !1,
                    cache: J,
                    mutate: z,
                    fallback: {}
                }, {
                    isOnline: () => b,
                    isVisible: () => {
                        let e = _ && document.visibilityState;
                        return f(e) || "hidden" !== e
                    }
                }),
                G = (e, t) => {
                    let r = E(e, t);
                    if (t) {
                        let {
                            use: n,
                            fallback: i
                        } = e, {
                            use: a,
                            fallback: l
                        } = t;
                        n && a && (r.use = n.concat(a)), i && l && (r.fallback = E(i, l))
                    }
                    return r
                },
                H = (0, a.createContext)({}),
                K = y && window.__SWR_DEVTOOLS_USE__,
                Q = K ? window.__SWR_DEVTOOLS_USE__ : [],
                X = e => g(e[1]) ? [e[0], e[1], e[2] || {}] : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}],
                Y = () => E(B, (0, a.useContext)(H)),
                Z = Q.concat(e => (t, r, n) => {
                    let i = r && ((...e) => {
                        let [n] = P(t), [, , , i] = u.get(J);
                        if (n.startsWith("$inf$")) return r(...e);
                        let a = i[n];
                        return f(a) ? r(...e) : (delete i[n], a)
                    });
                    return e(t, i, n)
                }),
                ee = (e, t, r) => {
                    let n = t[e] || (t[e] = []);
                    return n.push(r), () => {
                        let e = n.indexOf(r);
                        e >= 0 && (n[e] = n[n.length - 1], n.pop())
                    }
                };
            K && (window.__SWR_DEVTOOLS_REACT__ = a);
            let et = () => {},
                er = et();
            new WeakMap;
            let en = a.use || (e => {
                    switch (e.status) {
                        case "pending":
                            throw e;
                        case "fulfilled":
                            return e.value;
                        case "rejected":
                            throw e.reason;
                        default:
                            throw e.status = "pending", e.then(t => {
                                e.status = "fulfilled", e.value = t
                            }, t => {
                                e.status = "rejected", e.reason = t
                            }), e
                    }
                }),
                ei = {
                    dedupe: !0
                };
            d.defineProperty(e => {
                let {
                    value: t
                } = e, r = (0, a.useContext)(H), n = g(t), i = (0, a.useMemo)(() => n ? t(r) : t, [n, r, t]), l = (0, a.useMemo)(() => n ? i : G(r, i), [n, r, i]), o = i && i.provider, u = (0, a.useRef)(c);
                o && !u.current && (u.current = q(o(l.cache || J), i));
                let s = u.current;
                return s && (l.cache = s[0], l.mutate = s[1]), C(() => {
                    if (s) return s[2] && s[2](), s[3]
                }, []), (0, a.createElement)(H.Provider, E(e, {
                    value: l
                }))
            }, "defaultValue", {
                value: B
            });
            let ea = (n = (e, t, r) => {
                    let {
                        cache: n,
                        compare: i,
                        suspense: o,
                        fallbackData: s,
                        revalidateOnMount: d,
                        revalidateIfStale: p,
                        refreshInterval: w,
                        refreshWhenHidden: v,
                        refreshWhenOffline: y,
                        keepPreviousData: _
                    } = r, [R, b, O, m] = u.get(n), [V, A] = P(e), N = (0, a.useRef)(!1), D = (0, a.useRef)(!1), I = (0, a.useRef)(V), F = (0, a.useRef)(t), M = (0, a.useRef)(r), j = () => M.current, $ = () => j().isVisible() && j().isOnline(), [q, J, z, B] = T(n, V), G = (0, a.useRef)({}).current, H = f(s) ? f(r.fallback) ? c : r.fallback[V] : s, K = (e, t) => {
                        for (let r in G)
                            if ("data" === r) {
                                if (!i(e[r], t[r]) && (!f(e[r]) || !i(eo, t[r]))) return !1
                            } else if (t[r] !== e[r]) return !1;
                        return !0
                    }, Q = (0, a.useMemo)(() => {
                        let e = !!V && !!t && (f(d) ? !j().isPaused() && !o && !1 !== p : d),
                            r = t => {
                                let r = E(t);
                                return (delete r._k, e) ? {
                                    isValidating: !0,
                                    isLoading: !0,
                                    ...r
                                } : r
                            },
                            n = q(),
                            i = B(),
                            a = r(n),
                            l = n === i ? a : r(i),
                            u = a;
                        return [() => {
                            let e = r(q());
                            return K(e, u) ? (u.data = e.data, u.isLoading = e.isLoading, u.isValidating = e.isValidating, u.error = e.error, u) : (u = e, e)
                        }, () => l]
                    }, [n, V]), X = (0, l.useSyncExternalStore)((0, a.useCallback)(e => z(V, (t, r) => {
                        K(r, t) || e()
                    }), [n, V]), Q[0], Q[1]), Y = !N.current, Z = R[V] && R[V].length > 0, et = X.data, er = f(et) ? H && h(H) ? en(H) : H : et, ea = X.error, el = (0, a.useRef)(er), eo = _ ? f(et) ? el.current : et : er, eu = (!Z || !!f(ea)) && (Y && !f(d) ? d : !j().isPaused() && (o ? !f(er) && p : f(er) || p)), es = !!(V && t && Y && eu), ec = f(X.isValidating) ? es : X.isValidating, ed = f(X.isLoading) ? es : X.isLoading, ef = (0, a.useCallback)(async e => {
                        let t, n, a = F.current;
                        if (!V || !a || D.current || j().isPaused()) return !1;
                        let l = !0,
                            o = e || {},
                            u = !O[V] || !o.dedupe,
                            s = () => S ? !D.current && V === I.current && N.current : V === I.current,
                            d = {
                                isValidating: !1,
                                isLoading: !1
                            },
                            E = () => {
                                J(d)
                            },
                            h = () => {
                                let e = O[V];
                                e && e[1] === n && delete O[V]
                            },
                            p = {
                                isValidating: !0
                            };
                        f(q().data) && (p.isLoading = !0);
                        try {
                            if (u && (J(p), r.loadingTimeout && f(q().data) && setTimeout(() => {
                                    l && s() && j().onLoadingSlow(V, r)
                                }, r.loadingTimeout), O[V] = [a(A), x()]), [t, n] = O[V], t = await t, u && setTimeout(h, r.dedupingInterval), !O[V] || O[V][1] !== n) return u && s() && j().onDiscarded(V), !1;
                            d.error = c;
                            let e = b[V];
                            if (!f(e) && (n <= e[0] || n <= e[1] || 0 === e[1])) return E(), u && s() && j().onDiscarded(V), !1;
                            let o = q().data;
                            d.data = i(o, t) ? o : t, u && s() && j().onSuccess(t, V, r)
                        } catch (r) {
                            h();
                            let e = j(),
                                {
                                    shouldRetryOnError: t
                                } = e;
                            !e.isPaused() && (d.error = r, u && s() && (e.onError(r, V, e), (!0 === t || g(t) && t(r)) && (!j().revalidateOnFocus || !j().revalidateOnReconnect || $()) && e.onErrorRetry(r, V, e, e => {
                                let t = R[V];
                                t && t[0] && t[0](W.ERROR_REVALIDATE_EVENT, e)
                            }, {
                                retryCount: (o.retryCount || 0) + 1,
                                dedupe: !0
                            })))
                        }
                        return l = !1, E(), !0
                    }, [V, n]), eg = (0, a.useCallback)((...e) => U(n, I.current, ...e), []);
                    if (C(() => {
                            F.current = t, M.current = r, f(et) || (el.current = et)
                        }), C(() => {
                            if (!V) return;
                            let e = ef.bind(c, ei),
                                t = 0,
                                r = ee(V, R, (r, n = {}) => {
                                    if (r == W.FOCUS_EVENT) {
                                        let r = Date.now();
                                        j().revalidateOnFocus && r > t && $() && (t = r + j().focusThrottleInterval, e())
                                    } else if (r == W.RECONNECT_EVENT) j().revalidateOnReconnect && $() && e();
                                    else if (r == W.MUTATE_EVENT) return ef();
                                    else if (r == W.ERROR_REVALIDATE_EVENT) return ef(n)
                                });
                            return D.current = !1, I.current = V, N.current = !0, J({
                                _k: A
                            }), eu && (f(er) || k ? e() : L(e)), () => {
                                D.current = !0, r()
                            }
                        }, [V]), C(() => {
                            let e;

                            function t() {
                                let t = g(w) ? w(q().data) : w;
                                t && -1 !== e && (e = setTimeout(r, t))
                            }

                            function r() {
                                !q().error && (v || j().isVisible()) && (y || j().isOnline()) ? ef(ei).then(t) : t()
                            }
                            return t(), () => {
                                e && (clearTimeout(e), e = -1)
                            }
                        }, [w, v, y, V]), (0, a.useDebugValue)(eo), o && f(er) && V) {
                        if (!S && k) throw Error("Fallback data is required when using Suspense in SSR.");
                        F.current = t, M.current = r, D.current = !1;
                        let e = m[V];
                        if (f(e) || en(eg(e)), f(ea)) {
                            let e = ef(ei);
                            f(eo) || (e.status = "fulfilled", e.value = !0), en(e)
                        } else throw ea
                    }
                    return {
                        mutate: eg,
                        get data() {
                            return G.data = !0, eo
                        },
                        get error() {
                            return G.error = !0, ea
                        },
                        get isValidating() {
                            return G.isValidating = !0, ec
                        },
                        get isLoading() {
                            return G.isLoading = !0, ed
                        }
                    }
                }, function(...e) {
                    let t = Y(),
                        [r, i, a] = X(e),
                        l = G(t, a),
                        o = n,
                        {
                            use: u
                        } = l,
                        s = (u || []).concat(Z);
                    for (let e = s.length; e--;) o = s[e](o);
                    return o(r, i || l.fetcher || null, l)
                }),
                el = (i = e => (t, r, n) => (n.revalidateOnFocus = !1, n.revalidateIfStale = !1, n.revalidateOnReconnect = !1, e(t, r, n)), (...e) => {
                    let [t, r, n] = X(e), a = (n.use || []).concat(i);
                    return ea(t, r, { ...n,
                        use: a
                    })
                })
        }
    }
]);