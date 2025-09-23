(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3332], {
        53066: (e, t, a) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return a(63535)
            }])
        },
        63535: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                __N_SSG: () => M,
                default: () => K
            });
            var l = a(80263),
                s = a(6552),
                i = a(21215),
                r = a(46360),
                n = a(23460),
                o = a(75593),
                c = a(8349),
                d = a.n(c),
                x = a(37488),
                m = a.n(x),
                u = a(69582),
                h = a(32681),
                p = a(2913),
                f = a(62494),
                g = a(3840),
                b = a(9530);
            let v = e => {
                let {
                    name: t,
                    price: a,
                    oldPrice: i,
                    currency: r,
                    prices: n,
                    duration: c,
                    features: d,
                    description: x,
                    isHighlighted: u,
                    isLoggedIn: h,
                    service: v,
                    user: y
                } = e, {
                    t: j
                } = (0, o.Bd)(["index"]), {
                    isOpen: w,
                    onOpen: N,
                    onOpenChange: _
                } = (0, p.j)();
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)("div", {
                        className: "relative flex w-full rounded-lg p-1 ".concat(u ? "bg-gradient-to-b from-primary-800 to-primary-500" : "bg-tertiary-900"),
                        children: [u && (0, l.jsx)("div", {
                            className: "absolute -top-3 left-1/2 z-[1] w-fit -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-700 to-primary-800 px-4 py-1",
                            children: (0, l.jsx)("p", {
                                className: "text-base font-medium text-white",
                                children: j("sections.pricing.bestseller")
                            })
                        }), (0, l.jsxs)("div", {
                            className: "relative flex h-full w-full flex-col justify-between gap-20 overflow-hidden rounded-lg bg-tertiary-950 p-6 pt-10",
                            children: [u && (0, l.jsx)("div", {
                                className: "disable_drag disable_select absolute -right-12 -top-12 h-48 w-48 animate-breath rounded-full bg-gradient-to-b from-primary to-primary-800/0 blur-[64px] md:blur-[80px]"
                            }), (0, l.jsxs)("div", {
                                className: "flex flex-col gap-8",
                                children: [(0, l.jsxs)("div", {
                                    className: "flex flex-col gap-4",
                                    children: [(0, l.jsx)("h1", {
                                        className: "w-fit text-3xl font-semibold ".concat(u ? "bg-gradient-to-tr from-primary-500 to-primary-800 bg-clip-text text-transparent" : "text-white"),
                                        children: t
                                    }), (0, l.jsx)("p", {
                                        className: "text-medium text-tertiary-400",
                                        children: x
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "flex flex-row items-center justify-start gap-1",
                                    children: [i && (0, l.jsx)("span", {
                                        className: "text-3xl font-bold text-tertiary-300 line-through",
                                        children: i
                                    }), (0, l.jsxs)("h2", {
                                        className: "text-5xl font-bold text-white",
                                        children: [a, " ", r]
                                    }), (0, l.jsxs)("p", {
                                        className: "text-sm text-tertiary-400",
                                        children: ["/ ", c]
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: "h-[1px] w-full bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                                }), (0, l.jsx)("ul", {
                                    className: "flex flex-col gap-5 ".concat(u ? "min-h-[250px] lg:min-h-0" : "min-h-[175px] lg:min-h-0"),
                                    children: d.map((e, t) => (0, l.jsxs)("li", {
                                        className: "flex items-center justify-start gap-2",
                                        children: [(0, l.jsx)(g.eFy, {
                                            className: "text-lg text-primary-800"
                                        }), (0, l.jsx)("p", {
                                            className: "text-small text-tertiary-300",
                                            children: e
                                        })]
                                    }, t))
                                })]
                            }), h ? (0, l.jsx)(s.T, {
                                color: "default",
                                variant: u ? "solid" : "bordered",
                                size: "lg",
                                radius: "lg",
                                className: "mx-auto w-full border-[1px] border-white/5 px-6 hover:bg-primary-800 hover:text-white ".concat(u ? "bg-white text-black" : "bg-tertiary-900"),
                                onPress: N,
                                children: j("sections.pricing.buy_button")
                            }) : (0, l.jsx)(s.T, {
                                color: "default",
                                variant: u ? "solid" : "bordered",
                                size: "lg",
                                radius: "lg",
                                as: m(),
                                href: "/register",
                                className: "mx-auto w-full border-[1px] border-white/5 px-6 hover:bg-primary-800 hover:text-white ".concat(u ? "bg-white text-black" : "bg-tertiary-900"),
                                children: j("sections.pricing.buy_button")
                            })]
                        })]
                    }), (0, l.jsx)(f.Y, {
                        isOpen: w,
                        onOpenChange: _,
                        size: "xl",
                        backdrop: "blur",
                        placement: "center",
                        classNames: {
                            body: "p-6 pb-8 sm:p-6 sm:pb-4 mt-2",
                            backdrop: "bg-tertiary-950/20",
                            base: "bg-tertiary-950 backdrop-blur-2xl rounded-xl border-1 border-white/5",
                            header: "text-white p-6 pb-0 sm:pt-6 sm:px-6",
                            footer: "p-6 pb-8 pt-0",
                            closeButton: "hover:bg-white/5 active:bg-white/10 mt-2 mr-2 text-2xl z-[1]"
                        },
                        children: (0, l.jsx)(b.A, {
                            type: "license",
                            serviceId: v,
                            prices: n,
                            defaultCurrency: r,
                            isLoggedIn: h,
                            user: y
                        })
                    })]
                })
            };
            var y = a(56773),
                j = a.n(y),
                w = a(53239);
            let N = j()(() => a.e(3989).then(a.bind(a, 13989)), {
                    loadableGenerated: {
                        webpack: () => [13989]
                    },
                    ssr: !1
                }),
                _ = e => {
                    let {
                        aspectRatio: t,
                        videoUrl: a,
                        videoThumbnail: s,
                        className: i,
                        children: r,
                        icon: n,
                        iconSize: o = 24,
                        shadow: c = !0,
                        shadowClass: x,
                        volume: m = .5,
                        controls: u = !0,
                        rounded: h = "none",
                        overlay: p = !0,
                        isMuted: f = !1,
                        autoPlay: g = !1
                    } = e, b = (0, w.useRef)(null), v = (0, w.useRef)(null), [y, j] = (0, w.useState)(!1);
                    return (0, w.useEffect)(() => {
                        if (!b.current || !g) return;
                        let e = new IntersectionObserver(e => {
                            e.forEach(e => {
                                e.isIntersecting ? j(!0) : j(!1)
                            })
                        }, {
                            threshold: .25
                        });
                        return e.observe(b.current), () => {
                            e.disconnect()
                        }
                    }, [g]), (0, l.jsxs)("div", {
                        ref: b,
                        className: "group relative flex w-full items-center justify-start overflow-hidden bg-tertiary-800 ".concat({
                            xl: "rounded-xl",
                            lg: "rounded-lg",
                            md: "rounded-md",
                            sm: "rounded-sm",
                            none: "rounded-none"
                        }[h], " ").concat({
                            trailer: "aspect-[2.13/1]",
                            video: "aspect-[16/9]",
                            short: "aspect-[9/16]"
                        }[t], " ").concat(i, " "),
                        children: [p && !y && (0, l.jsx)("div", {
                            className: "relative z-[1]",
                            onClick: () => j(!0),
                            children: r
                        }), (0, l.jsx)("div", {
                            className: "absolute left-0 top-0 z-[0] h-full w-full",
                            children: !!a.length && (0, l.jsx)(N, {
                                ref: v,
                                src: a,
                                muted: g || f,
                                light: !g && (!s || (0, l.jsxs)("div", {
                                    className: "relative h-full w-full overflow-hidden",
                                    children: [(0, l.jsx)(d(), {
                                        src: s,
                                        alt: "thumbnail",
                                        className: "disable_select disable_drag",
                                        fill: !0,
                                        style: {
                                            objectFit: "cover"
                                        }
                                    }), c && (0, l.jsx)("div", {
                                        className: "pointer-events-none absolute left-0 top-0 z-[1] h-full w-full ".concat(x)
                                    })]
                                })),
                                playIcon: n ? (0, l.jsx)(d(), {
                                    src: n,
                                    className: "absolute left-1/2 top-1/2 z-[2] max-w-1/5 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-300 group-hover:scale-90 group-hover:opacity-75",
                                    alt: "Controler player",
                                    style: {
                                        objectFit: "contain"
                                    },
                                    width: o,
                                    height: o
                                }) : (0, l.jsxs)("div", {
                                    className: "z-2 absolute left-1/2 top-1/2 flex aspect-square w-1/4 max-w-48 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary-500/25 transition-all duration-300 group-hover:bg-primary-500/50",
                                    children: [(0, l.jsx)("span", {
                                        className: "animate-rotationFast absolute -left-[10%] -top-[10%] aspect-square w-[120%] rounded-full border-2 border-dashed border-primary-500/50"
                                    }), (0, l.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "icon icon-tabler icon-tabler-player-play-filled",
                                        width: o,
                                        height: o,
                                        viewBox: "0 0 24 24",
                                        strokeWidth: "2",
                                        stroke: "currentColor",
                                        fill: "none",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: (0, l.jsx)("path", {
                                            d: "M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z",
                                            strokeWidth: "0",
                                            fill: "#FFFFFF"
                                        })
                                    })]
                                }),
                                className: "relative w-full",
                                width: "100%",
                                height: "100%",
                                controls: u,
                                playsInline: !0,
                                playing: y,
                                volume: m,
                                onPause: () => j(!1),
                                onPlay: () => j(!0)
                            })
                        })]
                    })
                },
                k = e => {
                    let {
                        nick: t,
                        tag: a,
                        avatar: s,
                        text: i,
                        className: r
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: "flex flex-col gap-5 rounded-lg border-1 border-white/5 bg-tertiary-900 p-6 ".concat(r),
                        children: [(0, l.jsxs)("div", {
                            className: "flex flex-row items-center justify-start gap-3",
                            children: [s && (0, l.jsx)("div", {
                                className: "relative h-10 w-10 min-w-10 overflow-hidden rounded-full",
                                children: (0, l.jsx)(d(), {
                                    src: s,
                                    alt: t,
                                    fill: !0
                                })
                            }), (0, l.jsxs)("div", {
                                className: "flex flex-col",
                                children: [(0, l.jsx)("p", {
                                    className: "text-xl font-medium text-white",
                                    children: t
                                }), a && (0, l.jsxs)("p", {
                                    className: "text-sm text-tertiary-400",
                                    children: ["@", a]
                                })]
                            })]
                        }), (0, l.jsx)("p", {
                            className: "text-base text-tertiary-400",
                            children: i
                        })]
                    })
                };
            var E = a(6274),
                T = a(3453);
            a(91437);
            var P = a(701),
                I = a(31215);
            let F = e => t => {
                    let a, l = !1;

                    function s() {
                        clearTimeout(a)
                    }

                    function i() {
                        clearTimeout(a), l || (a = setTimeout(() => t.next(), e))
                    }
                    t.on("created", () => {
                        t.container.addEventListener("mouseover", () => {
                            l = !0, s()
                        }), t.container.addEventListener("mouseout", () => {
                            l = !1, i()
                        }), i()
                    }), t.on("dragStarted", s), t.on("animationEnded", i), t.on("updated", i), t.on("destroyed", s)
                },
                C = e => t => {
                    function a() {
                        var a, l;
                        let {
                            slides: s
                        } = t;
                        s.forEach(t => {
                            t.classList.remove(e)
                        }), null == (l = s[t.track.absToRel(t.track.details.abs)]) || null == (a = l.classList) || a.add(e)
                    }
                    t.on("slideChanged", a), t.on("updated", a), t.on("created", a)
                },
                S = e => {
                    e.on("animationEnded", e => {
                        let {
                            rel: t,
                            progress: a
                        } = e.track.details;
                        0 === t && 0 !== a && e.moveToIdx(0, !0, {
                            duration: 0
                        })
                    })
                },
                q = e => {
                    let {
                        children: t,
                        carouselState: a,
                        className: s
                    } = e, [i] = (0, E.P)(a, L(e)), [r, n] = i, [o, c] = (0, w.useState)(0);
                    return (0, w.useEffect)(() => {
                        var e;
                        null == n || null == (e = n.current) || e.update(), c(() => Date.now())
                    }, [t, n]), (0, l.jsx)("div", {
                        ref: r,
                        className: (0, T.cn)("keen-slider", s),
                        children: w.Children.map(t, e => (0, w.isValidElement)(e) ? (0, w.cloneElement)(e, {
                            className: (0, T.cn)("keen-slider__slide", e.props.className)
                        }) : null)
                    }, o)
                },
                z = {
                    breakpointItems: {
                        sm: 1,
                        md: 1,
                        lg: 2,
                        ct: 3
                    },
                    gap: 32,
                    autoPlay: !0,
                    autoPlayInterval: 5e3,
                    origin: "auto",
                    plugins: []
                },
                L = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = (0, I.A)(z, e),
                        {
                            breakpointItems: a,
                            gap: l,
                            origin: s,
                            plugins: i,
                            onSlide: r
                        } = t,
                        n = (0, w.useMemo)(() => {
                            let e = [S, ...i];
                            return t.autoPlay && e.push(F(t.autoPlayInterval)), t.activeClassName && e.push(C(t.activeClassName)), e
                        }, [t.activeClassName, t.autoPlay, t.autoPlayInterval, i]),
                        [o, c] = (0, P.E)({
                            initial: 0,
                            slideChanged(e) {
                                let t = e.track.details.rel;
                                null == r || r(t)
                            },
                            breakpoints: {
                                "(max-width: 640px)": {
                                    slides: {
                                        perView: a.sm,
                                        spacing: l,
                                        origin: s
                                    }
                                },
                                "(min-width: 641px) and (max-width: 768px)": {
                                    slides: {
                                        perView: a.md,
                                        spacing: l,
                                        origin: s
                                    }
                                },
                                "(min-width: 769px) and (max-width: 1024px)": {
                                    slides: {
                                        perView: a.lg,
                                        spacing: l,
                                        origin: s
                                    }
                                }
                            },
                            renderMode: "performance",
                            slides: {
                                perView: a.ct,
                                spacing: l,
                                origin: s
                            },
                            loop: !0
                        }, n);
                    return [o, c]
                };
            var A = a(42440),
                O = a(4207);

            function R() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                arguments.length > 1 && arguments[1];
                let t = O._.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";
                return "".concat(t).concat(e)
            }
            async function V(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    l = arguments.length > 3 ? arguments[3] : void 0;
                try {
                    (null == a ? void 0 : a.body) && ("GET" === a.method || !a.method) && delete a.body;
                    let i = isServer() && "STRAPI_TOKEN" in env && env.STRAPI_TOKEN ? {
                            Authorization: "Bearer ".concat(env.STRAPI_TOKEN)
                        } : {},
                        r = {
                            next: {
                                revalidate: 60
                            },
                            ...a,
                            headers: { ...null == a ? void 0 : a.headers,
                                ...i,
                                "Content-Type": "application/json"
                            }
                        },
                        n = t ? "?" + qs.stringify(t, {
                            encodeValuesOnly: !0
                        }) : "",
                        o = "".concat(R("/api/".concat(e).concat(n))),
                        c = await fetch(o, r);
                    if (l) return c;
                    if (!c.ok) {
                        var s;
                        return console.error(Error("Request failed with status ".concat(c.status, ": ").concat(c.statusText, ", request: ").concat(null != (s = r.method) ? s : "GET", " ").concat(e, ", params: ").concat(JSON.stringify(t), ", body: ").concat(await c.text()))), null
                    }
                    return await c.json()
                } catch (e) {
                    return console.error(Error("An error occurred while fetching from the API", {
                        cause: e
                    })), null
                }
            }

            function B(e) {
                var t;
                if (void 0 === e) return;
                if (!e) throw Error("Invalid media: ".concat((0, A.inspect)(e)));
                e && "object" == typeof e && "type" in e && e.type;
                let a = "string" == typeof e ? e : "url" in e ? e.url : "data" in e ? null == (t = e.data) ? void 0 : t.url : null;
                if (!a) throw Error("Invalid media: ".concat((0, A.inspect)(e)));
                return a.startsWith("/") ? R(a, !0) : a
            }
            let U = e => {
                    let {
                        reviews: t
                    } = e, a = L({
                        breakpointItems: {
                            sm: 1,
                            md: 1,
                            lg: 2,
                            ct: 3
                        },
                        gap: 32,
                        autoPlay: !0,
                        autoPlayInterval: 3e3,
                        origin: "auto"
                    });
                    return (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsx)(q, {
                            carouselState: a,
                            className: "h-full",
                            children: t.map(e => {
                                var t;
                                return (0, l.jsx)(k, {
                                    nick: e.nick,
                                    tag: e.tag,
                                    avatar: e.avatar && B(e.avatar),
                                    text: null != (t = e.text) ? t : ""
                                }, e.id)
                            })
                        })
                    })
                },
                D = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    (0, w.useEffect)(() => {
                        let t = G([...document.querySelectorAll("section[id]")].reverse(), e),
                            a = () => setTimeout(t, 0);
                        return document.addEventListener("scroll", a), () => {
                            document.removeEventListener("scroll", a)
                        }
                    })
                },
                G = (e, t) => (function(e, t) {
                    let a, l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        s = 0,
                        i = function() {
                            for (var t = arguments.length, a = Array(t), l = 0; l < t; l++) a[l] = arguments[l];
                            s = Date.now();
                            try {
                                e(...a)
                            } catch (e) {
                                console.error(e)
                            }
                        };
                    return function() {
                        for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                        l && !a && i(...r), a && (clearTimeout(a), Date.now() - s >= t && i(...r)), a = setTimeout(() => {
                            a = null, i(...r)
                        }, t)
                    }
                })(() => {
                    var a, l, s;
                    let i = window.scrollY,
                        r = null != (a = e.find(e => {
                            if (i >= e.offsetTop) return e
                        })) ? a : null,
                        n = null != (l = null == r ? void 0 : r.id) ? l : null;
                    if ((null != (s = window.location.hash.replace("#", "")) ? s : null) === n) return;
                    let o = (null == r ? void 0 : r.id) ? "".concat(t, "#").concat(r.id) : "",
                        c = "".concat(window.location.pathname).concat(o);
                    window.history.pushState({
                        url: o,
                        as: c,
                        options: {
                            shallow: !0,
                            scroll: !1
                        }
                    }, "", c)
                }, 500, !0);
            var M = !0;
            let K = e => {
                var t, a, c, x;
                let {
                    settings: p,
                    services: f,
                    prices: g
                } = e, {
                    t: b
                } = (0, o.Bd)(["index", "common"]), y = (0, n.useSession)(), j = (null == y ? void 0 : y.status) === "authenticated";
                return D(), (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(h.A, {
                        title: b("meta.title"),
                        subtitle: null == p ? void 0 : p.pageTitle,
                        description: null == p ? void 0 : p.pageDescription
                    }), (0, l.jsx)("header", {
                        className: "flex h-screen min-h-[701px] items-center",
                        children: (0, l.jsx)("div", {
                            className: "container relative",
                            "data-aos": "fade-up",
                            "data-aos-easing": "ease-out-back",
                            "data-aos-delay": "100",
                            children: (0, l.jsx)("div", {
                                className: "relative",
                                children: (0, l.jsxs)("div", {
                                    className: "flex flex-col items-center gap-6 md:gap-8",
                                    "data-aos": "fade-up",
                                    "data-aos-easing": "ease-out-back",
                                    "data-aos-delay": "200",
                                    children: [(0, l.jsx)("div", {
                                        className: "h-10 w-fit rounded-full bg-gradient-to-r from-primary to-primary-500 p-[2px]",
                                        children: (0, l.jsxs)("div", {
                                            className: "flex h-full w-full items-center justify-center gap-2 rounded-full bg-tertiary-900 px-6 py-0.5",
                                            children: [(0, l.jsx)(u.orQ, {
                                                className: "text-xl text-primary-800"
                                            }), (0, l.jsx)("p", {
                                                className: "bg-gradient-to-r from-primary-800 to-primary-500 bg-clip-text font-bold text-transparent",
                                                children: b("hero.version")
                                            })]
                                        })
                                    }), (0, l.jsxs)("div", {
                                        className: "flex flex-col items-center justify-center gap-6 text-center",
                                        children: [(0, l.jsx)("h1", {
                                            className: "bg-gradient-to-r from-white to-tertiary-400 bg-clip-text text-7xl font-bold leading-tight text-transparent xl:text-6xl md:text-5xl md:leading-snug",
                                            "data-aos": "fade-up",
                                            "data-aos-easing": "ease-out-back",
                                            "data-aos-delay": "300",
                                            children: (0, l.jsxs)(o.x6, {
                                                t: b,
                                                i18nKey: "hero.title",
                                                children: ["Unleash the", (0, l.jsxs)("span", {
                                                    className: "relative bg-gradient-to-r from-primary-500 to-primary-800 bg-clip-text text-transparent",
                                                    children: [" ", "full", " ", (0, l.jsxs)("svg", {
                                                        width: "134",
                                                        height: "23",
                                                        viewBox: "0 0 134 23",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "absolute -bottom-4 left-3 w-[80%]",
                                                        children: [(0, l.jsx)("path", {
                                                            d: "M1 2L133 9.07843L37.5283 15.4118L75.5509 21",
                                                            stroke: "url(#paint0_linear_0_179)",
                                                            strokeWidth: "4"
                                                        }), (0, l.jsx)("defs", {
                                                            children: (0, l.jsxs)("linearGradient", {
                                                                id: "paint0_linear_0_179",
                                                                x1: "1",
                                                                y1: "11.5",
                                                                x2: "133",
                                                                y2: "11.5",
                                                                gradientUnits: "userSpaceOnUse",
                                                                children: [(0, l.jsx)("stop", {
                                                                    stopColor: "#805FF3"
                                                                }), (0, l.jsx)("stop", {
                                                                    offset: "1",
                                                                    stopColor: "#5024B4"
                                                                })]
                                                            })
                                                        })]
                                                    })]
                                                }), "potential"]
                                            })
                                        }), (0, l.jsx)("p", {
                                            className: "text-2xl font-medium text-tertiary-400",
                                            children: b("hero.subtitle")
                                        })]
                                    }), (0, l.jsx)(s.T, {
                                        color: "primary",
                                        variant: "solid",
                                        size: "lg",
                                        radius: "lg",
                                        as: m(),
                                        href: "/#pricing",
                                        className: "mt-8 h-16 w-full max-w-[547px] bg-gradient-to-r from-primary-800 to-primary-500 px-4",
                                        children: b("hero.button")
                                    })]
                                })
                            })
                        })
                    }), (0, l.jsx)("section", {
                        className: "py-16",
                        "data-aos": "fade-up",
                        "data-aos-easing": "ease-out-back",
                        "data-aos-delay": "200",
                        children: (0, l.jsx)("div", {
                            className: "container max-w-[1040px]",
                            children: (0, l.jsxs)("div", {
                                className: "mx-auto grid w-full grid-cols-2 items-center gap-24 lg:grid-cols-1 lg:gap-8",
                                children: [(0, l.jsxs)("article", {
                                    className: "flex flex-col gap-4",
                                    children: [(0, l.jsx)("h2", {
                                        className: "text-3xl font-semibold text-white",
                                        children: b("sections.undetectable.title")
                                    }), (0, l.jsx)("p", {
                                        className: "text-xl text-tertiary-400",
                                        children: b("sections.undetectable.description")
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: "relative aspect-video w-full",
                                    children: (0, l.jsx)(d(), {
                                        src: "/images/img_ocean.webp",
                                        alt: "ocean client detection",
                                        layout: "fill",
                                        objectFit: "contain",
                                        quality: 100
                                    })
                                })]
                            })
                        })
                    }), (0, l.jsx)("section", {
                        className: "overflow-x-hidden py-24 lg:py-16",
                        "data-aos": "fade-up",
                        "data-aos-easing": "ease-out-back",
                        "data-aos-delay": "200",
                        id: "showcase",
                        children: (0, l.jsxs)("div", {
                            className: "container",
                            children: [(0, l.jsxs)("div", {
                                className: "mb-16 flex flex-col items-center justify-center gap-2",
                                children: [(0, l.jsx)("h1", {
                                    className: "text-3xl font-semibold text-white",
                                    children: b("sections.interface.title")
                                }), (0, l.jsx)("p", {
                                    className: "text-lg text-tertiary-400",
                                    children: b("sections.interface.subtitle")
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "relative w-full",
                                children: [(0, l.jsx)("div", {
                                    className: "absolute -bottom-12 -left-16 -right-16 -top-12",
                                    children: (0, l.jsx)(d(), {
                                        src: "/images/statics/abs_particles_inter.png",
                                        alt: "interface bg",
                                        layout: "fill",
                                        objectFit: "cover",
                                        quality: 100
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "relative aspect-interface w-full rounded-lg border-[1px] border-white/5 bg-tertiary-900 p-3",
                                    children: (0, l.jsxs)("div", {
                                        className: "relative flex h-full w-full items-center justify-center overflow-hidden rounded-md border-[1px] border-white/5 bg-tertiary-950",
                                        children: [(0, l.jsx)(d(), {
                                            src: "/images/img_interface_bg.png",
                                            alt: "interface bg",
                                            layout: "fill",
                                            objectFit: "contain",
                                            quality: 100,
                                            className: "disable_drag disable_select"
                                        }), (0, l.jsx)("div", {
                                            className: "relative z-[1] aspect-video w-[80%] overflow-hidden rounded-xl bg-tertiary-900 shadow-2xl",
                                            children: p.showcaseVideo && (0, l.jsx)(_, {
                                                aspectRatio: "video",
                                                videoUrl: p.showcaseVideo.videoUrl,
                                                videoThumbnail: p.showcaseVideo.thumbnail && B(p.showcaseVideo.thumbnail),
                                                isMuted: !0,
                                                autoPlay: null != (c = p.showcaseVideo.autoPlay) && c
                                            })
                                        })]
                                    })
                                })]
                            })]
                        })
                    }), (0, l.jsxs)("section", {
                        className: "py-24 lg:py-16",
                        "data-aos": "fade-up",
                        "data-aos-easing": "ease-out-back",
                        "data-aos-delay": "200",
                        id: "configs",
                        children: [(0, l.jsxs)("div", {
                            className: "absolute left-0 top-0 h-full w-full",
                            children: [(0, l.jsx)(d(), {
                                src: "/images/bg_config2.png",
                                alt: "config section image",
                                fill: !0,
                                style: {
                                    objectFit: "cover",
                                    objectPosition: "center"
                                },
                                quality: 100
                            }), (0, l.jsx)("div", {
                                className: "absolute left-0 top-0 h-full w-full bg-radial from-tertiary-950/50 from-0% to-tertiary-950 to-85%"
                            })]
                        }), (0, l.jsx)("div", {
                            className: "container",
                            children: (0, l.jsxs)("div", {
                                className: "relative mx-auto flex min-h-[540px] w-full max-w-2xl flex-col items-center justify-center gap-8 md:min-h-[310px]",
                                children: [(0, l.jsxs)("div", {
                                    className: "flex w-full flex-row items-center gap-4",
                                    children: [(0, l.jsx)("div", {
                                        className: "h-1 flex-1 bg-gradient-to-r from-primary/0 to-primary"
                                    }), (0, l.jsx)("h2", {
                                        className: "w-fit text-3xl font-semibold text-primary",
                                        children: b("sections.configs.title")
                                    }), (0, l.jsx)("div", {
                                        className: "h-1 flex-1 bg-gradient-to-l from-primary/0 to-primary"
                                    })]
                                }), (0, l.jsx)("p", {
                                    className: "text-center text-5xl font-medium text-white lg:text-4xl md:text-2xl",
                                    children: b("sections.configs.subtitle")
                                })]
                            })
                        })]
                    }), (0, l.jsx)("section", {
                        className: "mb-24 py-24 lg:mb-0 lg:py-16",
                        "data-aos": "fade-up",
                        "data-aos-easing": "ease-out-back",
                        "data-aos-delay": "200",
                        children: (0, l.jsxs)("div", {
                            className: "container",
                            children: [(0, l.jsxs)("div", {
                                className: "mb-16 flex flex-col items-center justify-center gap-2",
                                children: [(0, l.jsx)("h1", {
                                    className: "text-3xl font-semibold text-white",
                                    children: b("sections.reviews.title")
                                }), (0, l.jsx)("p", {
                                    className: "text-lg text-tertiary-400",
                                    children: b("sections.reviews.subtitle")
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "relative w-full",
                                children: [(0, l.jsx)("div", {
                                    className: "absolute bottom-0 left-0 right-0 top-0 sm:hidden",
                                    children: (0, l.jsx)(d(), {
                                        src: "/images/statics/abs_reviews.png",
                                        alt: "particles",
                                        width: 600,
                                        height: 600,
                                        objectFit: "cover",
                                        className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                                        quality: 100
                                    })
                                }), !!(null == p || null == (t = p.reviews) ? void 0 : t.length) && (0, l.jsx)(U, {
                                    reviews: null == p ? void 0 : p.reviews
                                }), (0, l.jsx)("div", {
                                    className: "pointer-events-none absolute bottom-0 left-0 top-0 w-full bg-gradient-to-r from-tertiary-950/75 via-tertiary-950/0 to-tertiary-950/75 md:hidden"
                                })]
                            })]
                        })
                    }), (0, l.jsxs)("section", {
                        className: "w-full py-24 lg:py-16",
                        "data-aos": "fade-up",
                        "data-aos-easing": "ease-out-back",
                        "data-aos-delay": "200",
                        id: "pricing",
                        children: [(0, l.jsxs)("section", {
                            className: "absolute left-0 top-0 h-screen w-full opacity-80",
                            children: [(0, l.jsx)(d(), {
                                src: "/images/statics/abs_hero.svg",
                                alt: "dasdsad",
                                width: 555,
                                height: 534,
                                className: "disable_drag disable_select absolute bottom-0 left-12 animate-breath blur-[130px] md:-ml-4 md:mt-12 md:hidden md:blur-[80px]"
                            }), (0, l.jsx)("div", {
                                className: "disable_drag disable_select absolute right-0 top-64 h-96 w-96 animate-breath rounded-full bg-gradient-to-b from-primary to-primary-800/0 blur-[130px] md:hidden md:blur-[80px]"
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "container",
                            children: [(0, l.jsxs)("div", {
                                className: "mb-16 flex flex-col items-center justify-center gap-2",
                                children: [(0, l.jsx)("h1", {
                                    className: "text-3xl font-semibold text-white",
                                    children: b("sections.pricing.title")
                                }), (0, l.jsx)("p", {
                                    className: "text-lg text-tertiary-400",
                                    children: b("sections.pricing.subtitle")
                                })]
                            }), (0, l.jsx)("div", {
                                className: "relative flex w-full flex-row items-center lg:flex-col lg:gap-6",
                                children: f.map(e => {
                                    var t, a, s, i;
                                    return (0, l.jsx)(v, {
                                        name: e.name,
                                        description: e.description,
                                        price: e.price,
                                        oldPrice: e.oldPrice,
                                        currency: e.currency,
                                        prices: null != (s = g[e.documentId]) ? s : {},
                                        isHighlighted: !!e.highlight,
                                        duration: e.days && e.days > 0 ? "".concat(e.days, " dni") : "lifetime",
                                        features: null != (i = null == (t = e.features) ? void 0 : t.map(e => {
                                            var t;
                                            return null != (t = e.text) ? t : ""
                                        })) ? i : [],
                                        isLoggedIn: j,
                                        service: e.documentId,
                                        user: null == y || null == (a = y.data) ? void 0 : a.user
                                    }, e.id)
                                })
                            })]
                        })]
                    }), (0, l.jsx)("section", {
                        className: "py-24 pb-16",
                        "data-aos": "fade-up",
                        "data-aos-easing": "ease-out-back",
                        "data-aos-delay": "200",
                        id: "faq",
                        children: (0, l.jsxs)("div", {
                            className: "container max-w-[1040px]",
                            children: [(0, l.jsxs)("div", {
                                className: "mb-16 flex flex-col items-start justify-center gap-2",
                                children: [(0, l.jsx)("h1", {
                                    className: "text-5xl font-semibold text-white md:text-3xl",
                                    children: b("sections.faq.title")
                                }), (0, l.jsx)("p", {
                                    className: "text-lg text-tertiary-400",
                                    children: b("sections.faq.subtitle")
                                })]
                            }), (0, l.jsx)("div", {
                                className: "relative w-full",
                                children: (0, l.jsx)(i.D, {
                                    itemClasses: {
                                        base: "py-4",
                                        title: "text-xl font-semibold text-white",
                                        content: "text-tertiary-300 text-lg",
                                        indicator: "text-white text-xl"
                                    },
                                    children: null != (x = null == p || null == (a = p.faqs) ? void 0 : a.map(e => (0, l.jsx)(r.R, {
                                        "aria-label": e.title,
                                        title: e.title,
                                        children: e.description
                                    }, e.id))) ? x : []
                                })
                            })]
                        })
                    }), (0, l.jsx)("section", {
                        className: "py-16 pb-32",
                        "data-aos": "fade-up",
                        "data-aos-easing": "ease-out-back",
                        "data-aos-delay": "200",
                        children: (0, l.jsx)("div", {
                            className: "container",
                            children: (0, l.jsxs)("div", {
                                className: "mx-auto flex w-full max-w-xl flex-col items-center justify-center gap-8",
                                children: [(0, l.jsxs)("div", {
                                    className: "flex flex-col gap-4 text-center",
                                    children: [(0, l.jsx)("h1", {
                                        className: "text-3xl font-semibold text-white",
                                        children: b("sections.cta.title")
                                    }), (0, l.jsx)("p", {
                                        className: "text-lg text-tertiary-400",
                                        children: b("sections.cta.subtitle")
                                    })]
                                }), (0, l.jsx)(s.T, {
                                    color: "default",
                                    variant: "shadow",
                                    size: "lg",
                                    radius: "lg",
                                    as: m(),
                                    href: "/#pricing",
                                    className: "mt-8 h-16 w-full max-w-[547px] border-2 border-tertiary-500 bg-gradient-to-r from-white to-tertiary-300 px-4 font-bold text-black",
                                    children: b("sections.cta.purchase_button")
                                })]
                            })
                        })
                    })]
                })
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [47, 1515, 1532, 2823, 3007, 7867, 6040, 8939, 32, 9916, 2457, 8477, 7534, 7e3, 7234, 636, 6593, 8792], () => t(53066)), _N_E = e.O()
    }
]);