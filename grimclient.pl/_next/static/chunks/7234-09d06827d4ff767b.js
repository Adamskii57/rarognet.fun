"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7234], {
        9530: (e, t, r) => {
            r.d(t, {
                A: () => O
            });
            var a = r(80263),
                n = r(94873),
                l = r(83062),
                s = r(68537),
                i = r(68642),
                o = r(30543),
                d = r(84549),
                c = r(32204),
                u = r(54143),
                m = r(98939),
                p = r(97059),
                x = r(6552),
                h = r(98091),
                f = r(75593),
                g = r(37488),
                w = r.n(g),
                b = r(67689),
                v = r(53239),
                y = r(3840),
                j = r(47130),
                _ = r(14014),
                N = r(97918),
                C = r(54990),
                E = r(5121);
            let k = e => {
                let {
                    children: t,
                    className: r,
                    name: n,
                    ...l
                } = e;
                return (0, a.jsx)(C.O, { ...l,
                    className: "group text-tertiary-600",
                    classNames: {
                        base: (0, E.cn)("inline-flex m-0 bg-[#161517] border-white/5 hover:border-primary items-center justify-between", "flex-row-reverse w-full max-w-full cursor-pointer rounded-xl gap-4 p-4 border-2", "data-[selected=true]:border-primary data-[selected=true]:bg-primary/25", r)
                    },
                    children: (0, a.jsxs)("div", {
                        className: "flex flex-row items-center gap-4 text-tertiary-600 group-data-[selected=true]:text-white",
                        children: [(0, a.jsx)("span", {
                            className: "text-2xl text-inherit group-data-[selected=true]:fill-white",
                            children: t
                        }), (0, a.jsx)("p", {
                            className: "font-sansbold text-lg font-medium text-inherit",
                            children: n
                        })]
                    })
                })
            };
            var L = r(93934);
            let M = () => {
                    let [e, t] = (0, v.useState)([0, 0]);
                    return (0, v.useEffect)(() => {
                        function e() {
                            t([window.innerWidth, window.innerHeight])
                        }
                        return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
                    }, []), e
                },
                z = e => {
                    var t, r;
                    let {
                        min: n,
                        max: l,
                        step: s,
                        value: i,
                        label: o,
                        onChange: d
                    } = e, [c] = M(), [u, m] = (0, v.useState)(!1), [p, x] = (0, v.useState)(0), h = (0, v.useRef)(null), f = null != (r = null == (t = h.current) ? void 0 : t.getBoundingClientRect().width) ? r : 0;
                    (0, v.useEffect)(() => {
                        let e = setTimeout(() => m(!0), 450);
                        return () => clearTimeout(e)
                    }, []), (0, v.useEffect)(() => {
                        if (!h.current) return;
                        let e = parseInt(h.current.min);
                        x((f - 16) * ((i - e) / (parseInt(h.current.max) - e)) + 16)
                    }, [i, f, c]);
                    let g = e => {
                        null == d || d(e)
                    };
                    return (0, a.jsx)(L.Q, {
                        ref: h,
                        radius: "full",
                        step: s,
                        maxValue: l,
                        minValue: n,
                        value: i,
                        "aria-label": o,
                        showTooltip: u,
                        content: o,
                        tooltipProps: {
                            placement: "right",
                            color: "primary",
                            radius: "sm",
                            content: i,
                            showArrow: !0,
                            isOpen: !0
                        },
                        onChange: e => g(e)
                    })
                };
            var I = r(65619),
                T = r(89916),
                S = r(4207),
                A = r(45199),
                P = r(16414),
                q = r(15576),
                B = r(34566),
                R = r(1446);
            let U = [{
                    id: "cashbill",
                    provider: "cashbill",
                    currencies: ["PLN"],
                    icon: (0, a.jsx)(N.Lib, {})
                }, {
                    id: "stripe",
                    provider: "stripe",
                    icon: (0, a.jsx)(y.rtB, {})
                }],
                O = e => {
                    var t, r, g, y, N;
                    let {
                        type: C,
                        serviceId: E,
                        licenseId: L,
                        prices: M,
                        defaultCurrency: O,
                        isLoggedIn: F,
                        user: D,
                        hwidRange: G
                    } = e, {
                        t: H
                    } = (0, f.Bd)("licenses"), V = (0, b.useRouter)(), [W] = (0, q.A)(), [K, Q, X] = (0, P.x)({
                        discountCode: "",
                        referralCode: null != W ? W : "",
                        hwidChanges: null != (t = null == G ? void 0 : G.min) ? t : 1,
                        currency: O,
                        paymentMethod: null,
                        terms: !1,
                        data_processing: !1
                    }), {
                        data: J,
                        isLoading: Y
                    } = (y = null != (r = K.discountCode) ? r : "", (0, T.A)("".concat(S._.NEXT_PUBLIC_STRAPI_URL, "/api/discount/check?code=").concat(y), A.GO, {
                        refreshInterval: 6e4,
                        revalidateOnFocus: !0,
                        revalidateIfStale: !0,
                        revalidateOnMount: !0
                    })), Z = null != (g = M[K.currency]) ? g : 0, $ = (0, v.useMemo)(() => {
                        let e = {
                            price: "hwid" === C ? K.hwidChanges * Z : Z,
                            final: 0,
                            discount: null
                        };
                        return "number" == typeof(null == J ? void 0 : J.discount) ? (e.discount = J.discount, e.final = Math.round(J.discount * Z * 100) / 100) : e.final = e.price, e
                    }, [J, C, K, Z]), ee = (N = K.currency, U.filter(e => {
                        var t;
                        return !(null == (t = e.currencies) ? void 0 : t.length) || e.currencies.includes(N)
                    }));
                    (0, v.useEffect)(() => {
                        ee.find(e => e.id === K.paymentMethod) || Q(e => {
                            var t, r;
                            return e.paymentMethod = null != (r = null == (t = ee[0]) ? void 0 : t.id) ? r : null
                        })
                    }, [K.paymentMethod, ee, Q]);
                    let {
                        mutate: et,
                        data: er,
                        isLoading: ea,
                        error: en,
                        isError: el
                    } = R.F.order.submitUserOrder.useMutation(), {
                        isValid: es,
                        validate: ei
                    } = (0, B.lv)(el, en, H, "order_response.validation", "licenses"), eo = e => {
                        e.preventDefault(), e.stopPropagation(), F && ("hwid" !== C && "renew" !== C || L || Z) && et({
                            type: C,
                            service: E,
                            license: L,
                            hwidChanges: "hwid" === C ? K.hwidChanges : void 0,
                            price: $.final,
                            currency: K.currency,
                            discountCode: "license" === C ? K.discountCode : void 0,
                            referralCode: "license" === C ? K.referralCode : void 0,
                            paymentMethod: K.paymentMethod,
                            locale: V.locale,
                            terms: K.terms,
                            data_processing: K.data_processing
                        }, {
                            onSuccess: e => {
                                e.status && V.push(e.url)
                            }
                        })
                    };
                    return (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(s.g, {
                            children: e => {
                                var t, r, s, g;
                                return (0, a.jsxs)("form", {
                                    method: "post",
                                    onSubmit: eo,
                                    className: "relative overflow-hidden",
                                    children: [(0, a.jsx)("div", {
                                        className: "disable_drag disable_select pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-primary to-primary-800/0 opacity-50 blur-[100px] md:blur-[100px]"
                                    }), (0, a.jsx)(i.c, {
                                        className: "flex flex-col gap-1",
                                        children: H("buy_modal.title")
                                    }), (0, a.jsx)(o.h, {
                                        children: (0, a.jsxs)("div", {
                                            className: "flex flex-col gap-8",
                                            children: ["hwid" === C && (0, a.jsxs)("div", {
                                                className: "flex w-full items-center justify-start gap-3 rounded-xl bg-gradient-to-r from-primary-800 to-primary-500 p-3 pl-4 md:flex-col md:pl-2",
                                                children: [(0, a.jsx)(j.eHT, {
                                                    className: "text-2xl text-white"
                                                }), (0, a.jsx)("p", {
                                                    className: "text-small text-white",
                                                    children: H("buy_modal.hwid_notice")
                                                })]
                                            }), !ea && (null == er ? void 0 : er.code) && (0, a.jsx)(I.x, {
                                                variant: "flat",
                                                color: er.status ? "success" : "danger",
                                                content: H("order_response.code.".concat(er.code), {
                                                    ns: "licenses"
                                                }),
                                                timeout: 5e3,
                                                radius: "md",
                                                wfull: !0,
                                                children: er.status ? (0, a.jsx)(_.g9_, {}) : (0, a.jsx)(_.ItP, {})
                                            }), (0, a.jsxs)("div", {
                                                className: "flex flex-col gap-4",
                                                children: [(0, a.jsx)(l.r, {
                                                    type: "email",
                                                    label: H("buy_modal.form.input.email.label"),
                                                    placeholder: H("buy_modal.form.input.email.placeholder"),
                                                    variant: "bordered",
                                                    size: "lg",
                                                    radius: "md",
                                                    maxLength: 48,
                                                    className: "w-full text-white",
                                                    classNames: {
                                                        inputWrapper: "bg-[#161517] border-white/5",
                                                        label: "group-data-[filled-within=true]:-translate-y-7 group-data-[filled-within=true]:bg-tertiary-950 pl-1",
                                                        input: "pb-2"
                                                    },
                                                    value: null != (t = null == D ? void 0 : D.email) ? t : "",
                                                    isDisabled: !0
                                                }), "hwid" === C && (0, a.jsx)("div", {
                                                    className: "mt-2",
                                                    children: (0, a.jsx)(z, {
                                                        min: null != (r = null == G ? void 0 : G.min) ? r : 1,
                                                        max: null != (s = null == G ? void 0 : G.max) ? s : 1,
                                                        step: null != (g = null == G ? void 0 : G.step) ? g : 1,
                                                        value: K.hwidChanges,
                                                        onChange: e => Q(t => t.hwidChanges = e),
                                                        label: H("buy_modal.form.input.hwid_changes.label")
                                                    })
                                                }), "license" === C && (0, a.jsxs)("div", {
                                                    className: "grid grid-cols-2 gap-4 sm:grid-cols-1",
                                                    children: [(0, a.jsx)(l.r, {
                                                        type: "text",
                                                        label: H("buy_modal.form.input.discount.label"),
                                                        placeholder: H("buy_modal.form.input.discount.placeholder"),
                                                        variant: "bordered",
                                                        size: "lg",
                                                        radius: "md",
                                                        maxLength: 24,
                                                        className: "w-full text-white",
                                                        isInvalid: !es("discountCode"),
                                                        errorMessage: ei("discountCode"),
                                                        classNames: {
                                                            inputWrapper: "bg-[#161517] border-white/5",
                                                            label: "group-data-[filled-within=true]:-translate-y-7 group-data-[filled-within=true]:bg-tertiary-950 pl-1",
                                                            input: "pb-2"
                                                        },
                                                        value: K.discountCode,
                                                        onChange: e => Q(t => t.discountCode = e.target.value)
                                                    }), (0, a.jsx)(l.r, {
                                                        type: "text",
                                                        label: H("buy_modal.form.input.referral.label"),
                                                        placeholder: H("buy_modal.form.input.referral.placeholder"),
                                                        variant: "bordered",
                                                        size: "lg",
                                                        radius: "md",
                                                        maxLength: 24,
                                                        className: "w-full text-white",
                                                        isInvalid: !es("referralCode"),
                                                        errorMessage: ei("referralCode"),
                                                        classNames: {
                                                            inputWrapper: "bg-[#161517] border-white/5",
                                                            label: "group-data-[filled-within=true]:-translate-y-7 group-data-[filled-within=true]:bg-tertiary-950 pl-1",
                                                            input: "pb-2"
                                                        },
                                                        value: K.referralCode,
                                                        onChange: e => Q(t => t.referralCode = e.target.value)
                                                    })]
                                                })]
                                            }), (0, a.jsxs)("div", {
                                                className: "flex flex-col gap-4",
                                                children: [(0, h.A)(M).length > 1 && (0, a.jsxs)("div", {
                                                    className: "flex flex-row items-center justify-between gap-4 sm:flex-col sm:items-start sm:gap-4",
                                                    children: [(0, a.jsx)("p", {
                                                        className: "text-medium font-bold text-white",
                                                        children: H("buy_modal.form.payments")
                                                    }), (0, a.jsx)(d.d, {
                                                        className: "w-full max-w-[201px] sm:max-w-full",
                                                        size: "md",
                                                        classNames: {
                                                            trigger: "bg-[#161517] rounded-lg border-1 border-white/5",
                                                            selectorIcon: "text-tertiary-300",
                                                            value: "text-left group-data-[has-value=true]:text-tertiary-300 font-semibold uppercase",
                                                            popoverContent: "bg-tertiary-950"
                                                        },
                                                        selectedKeys: [K.currency],
                                                        onSelectionChange: e => Q(t => t.currency = e.currentKey),
                                                        children: Object.keys(M).map(e => (0, a.jsx)(c.y, {
                                                            children: e
                                                        }, e))
                                                    })]
                                                }), (0, a.jsx)(u.U, {
                                                    classNames: {
                                                        wrapper: "flex-col gap-3"
                                                    },
                                                    isInvalid: !es("paymentMethod"),
                                                    errorMessage: ei("paymentMethod"),
                                                    value: K.paymentMethod,
                                                    onChange: e => Q(t => t.paymentMethod = e.target.value),
                                                    children: ee.map(e => (0, a.jsx)(k, {
                                                        value: e.id,
                                                        name: H("buy_modal.form.payment_method.".concat(e.provider)),
                                                        children: e.icon
                                                    }, e.id))
                                                })]
                                            }), (0, a.jsxs)("div", {
                                                className: "flex flex-col gap-4",
                                                children: [(0, a.jsx)("p", {
                                                    className: "text-medium font-bold text-white",
                                                    children: H("buy_modal.form.statements")
                                                }), (0, a.jsx)(m.A, {
                                                    isRequired: !0,
                                                    isInvalid: !es("terms"),
                                                    isSelected: K.terms,
                                                    onChange: e => Q(t => t.terms = e.target.checked),
                                                    children: (0, a.jsx)("p", {
                                                        className: "text-small text-white/40",
                                                        children: (0, a.jsxs)(f.x6, {
                                                            t: H,
                                                            i18nKey: "buy_modal.form.terms_checkbox",
                                                            children: ["Akceptuję", " ", (0, a.jsx)(w(), {
                                                                href: "/documents#terms-of-service",
                                                                className: "relative z-[1] text-white/60 underline hover:text-white/80",
                                                                children: "regulamin"
                                                            }), " ", "oraz", " ", (0, a.jsx)(w(), {
                                                                href: "/documents#privacy-policy",
                                                                className: "relative z-[1] text-white/60 underline hover:text-white/80",
                                                                children: "politykę prywatności"
                                                            }), "."]
                                                        })
                                                    })
                                                }), (0, a.jsx)(m.A, {
                                                    isRequired: !0,
                                                    isInvalid: !es("data_processing"),
                                                    isSelected: K.data_processing,
                                                    onChange: e => Q(t => t.data_processing = e.target.checked),
                                                    children: (0, a.jsx)("p", {
                                                        className: "text-small text-white/40",
                                                        children: H("buy_modal.form.data_processing_checkbox")
                                                    })
                                                })]
                                            })]
                                        })
                                    }), (0, a.jsxs)(p.q, {
                                        className: "flex flex-col gap-8",
                                        children: [(0, a.jsx)(n.y, {}), (0, a.jsxs)("div", {
                                            className: "flex flex-row items-center justify-between gap-4",
                                            children: [(0, a.jsxs)("div", {
                                                className: "flex items-center justify-start gap-1",
                                                children: [(0, a.jsx)("p", {
                                                    className: "text-4xl font-bold text-white",
                                                    children: $.final.toFixed(2)
                                                }), null !== $.discount && (0, a.jsx)("span", {
                                                    className: "text-white/60 line-through",
                                                    children: $.price.toFixed(2)
                                                }), (0, a.jsx)("p", {
                                                    className: "text-sm uppercase text-white",
                                                    children: K.currency
                                                })]
                                            }), (0, a.jsx)(x.T, {
                                                color: "primary",
                                                variant: "solid",
                                                size: "lg",
                                                radius: "lg",
                                                type: "submit",
                                                className: "w-fit bg-gradient-to-r from-white to-tertiary-300 px-6 text-medium font-medium text-black",
                                                isLoading: ea || Y,
                                                isDisabled: ea || Y,
                                                children: H("buy_modal.form.submit_button")
                                            })]
                                        })]
                                    })]
                                })
                            }
                        })
                    })
                }
        },
        16414: (e, t, r) => {
            r.d(t, {
                x: () => n
            });
            var a = r(33821);

            function n(e) {
                let [t, r] = (0, a.e)(e);
                return [t, l(r), r]
            }
            let l = e => t => {
                e(e => (t(e), e))
            }
        },
        32681: (e, t, r) => {
            r.d(t, {
                A: () => h
            });
            var a = r(80263),
                n = r(79898),
                l = r.n(n),
                s = r(59414),
                i = r(53239),
                o = r(4207),
                d = r(90357);
            let c = () => {
                    if (d.P0) return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("script", {
                            async: !0,
                            src: "https://www.googletagmanager.com/gtag/js?id=".concat(o._.NEXT_PUBLIC_GTAG_ID)
                        }), (0, a.jsx)("script", {
                            dangerouslySetInnerHTML: {
                                __html: "\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            ".concat(d.fO.map(u).join(""), "\n          ")
                            }
                        })]
                    })
                },
                u = e => "gtag('config', '".concat(e, "', {page_path: window.location.pathname});"),
                m = () => {
                    if (d.zd) return (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("script", {
                            dangerouslySetInnerHTML: {
                                __html: "\n            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n            n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];\n            s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');\n            fbq('init','".concat(d.H1, "');fbq('track','PageView');\n          ")
                            }
                        })
                    })
                },
                p = "example.com",
                x = "example - description",
                h = e => {
                    let {
                        title: t,
                        subtitle: r,
                        description: n,
                        keywords: d,
                        callBack: u = "Już nas opuszczasz?"
                    } = e, h = o._.NEXT_PUBLIC_PAGE_URL, f = h + (0, s.usePathname)(), g = (0, i.useMemo)(() => (null != t ? t : "") + (null != r ? r : ""), [t, r]), [w, b] = (0, i.useState)(g);
                    return (0, i.useEffect)(() => {
                        let e = () => b("".concat(u, " - ").concat(g)),
                            t = () => b(g);
                        return window.addEventListener("blur", e), window.addEventListener("focus", t), () => {
                            window.removeEventListener("blur", e), window.removeEventListener("focus", t)
                        }
                    }, [g, r, u]), (0, a.jsxs)(l(), {
                        children: [(0, a.jsx)("title", {
                            children: null != w ? w : p
                        }), (0, a.jsx)("meta", {
                            name: "description",
                            content: null != n ? n : x
                        }), (0, a.jsx)("meta", {
                            name: "keywords",
                            content: null != d ? d : ""
                        }), (0, a.jsx)("link", {
                            rel: "canonical",
                            href: f
                        }), (0, a.jsx)("meta", {
                            name: "viewport",
                            content: "initial-scale=1.0, width=device-width"
                        }), (0, a.jsx)("meta", {
                            name: "robots",
                            content: "index, follow"
                        }), (0, a.jsx)("meta", {
                            name: "author",
                            content: "BlazeCode.pl"
                        }), (0, a.jsx)("meta", {
                            name: "language",
                            content: "pl"
                        }), (0, a.jsx)("meta", {
                            property: "twitter:title",
                            content: null != t ? t : p
                        }), (0, a.jsx)("meta", {
                            property: "twitter:description",
                            content: null != n ? n : x
                        }), (0, a.jsx)("meta", {
                            property: "twitter:card",
                            content: "summary_large_image"
                        }), (0, a.jsx)("meta", {
                            property: "twitter:image",
                            content: "".concat(h, "/images/twitter-image.jpg")
                        }), (0, a.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        }), (0, a.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "180x180",
                            href: "/apple-touch-icon.png"
                        }), (0, a.jsx)("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "96x96",
                            href: "/favicon-96x96.png"
                        }), (0, a.jsx)("link", {
                            rel: "manifest",
                            href: "/site.webmanifest"
                        }), (0, a.jsx)("meta", {
                            name: "msapplication-TileColor",
                            content: "#121113"
                        }), (0, a.jsx)("meta", {
                            name: "theme-color",
                            content: "#121113"
                        }), (0, a.jsx)(c, {}), (0, a.jsx)(m, {})]
                    })
                }
        },
        34566: (e, t, r) => {
            r.d(t, {
                lv: () => n
            });
            var a = r(53239);

            function n(e, t, r, n, l) {
                return {
                    isValid: (0, a.useCallback)(r => {
                        var a, n, l;
                        return !e || (null == t || null == (a = t.data) ? void 0 : a.code) === "BAD_REQUEST" && !(null == t || null == (l = t.data) || null == (n = l.zodError) ? void 0 : n.fieldErrors[r])
                    }, [e, t]),
                    validate: (0, a.useCallback)(s => {
                        var i, o, d;
                        if (!e || (null == t || null == (i = t.data) ? void 0 : i.code) !== "BAD_REQUEST") return null;
                        let c = null == t || null == (d = t.data) || null == (o = d.zodError) ? void 0 : o.fieldErrors[s];
                        return c ? Array.isArray(c) ? c.map(e => {
                            let t = r("".concat(n, ".").concat(e), l ? {
                                ns: l
                            } : {});
                            return (0, a.createElement)("div", {
                                key: e
                            }, t)
                        }) : r("".concat(n, ".").concat(c), l ? {
                            ns: l
                        } : {}) : c
                    }, [e, t, r, n])
                }
            }
        },
        45199: (e, t, r) => {
            r.d(t, {
                GO: () => a
            });
            let a = e => fetch(e).then(e => e.json())
        },
        65619: (e, t, r) => {
            r.d(t, {
                x: () => o
            });
            var a = r(80263),
                n = r(53239);
            let l = {
                    primary: "bg-primary-500",
                    secondary: "bg-secondary-500",
                    default: "bg-gray-500",
                    success: "bg-green-500",
                    warning: "bg-yellow-500",
                    danger: "bg-red-500"
                },
                s = {
                    primary: "text-primary-500",
                    secondary: "text-secondary-500",
                    default: "text-white",
                    success: "text-green-500",
                    warning: "text-yellow-500",
                    danger: "text-red-500"
                },
                i = {
                    none: "",
                    sm: "rounded-sm",
                    md: "rounded-md",
                    lg: "rounded-lg",
                    xl: "rounded-xl",
                    full: "rounded-full"
                },
                o = e => {
                    let {
                        variant: t,
                        color: r,
                        content: o,
                        children: d,
                        radius: c,
                        wfull: u = !1,
                        className: m,
                        timeout: p
                    } = e, [x, h] = (0, n.useState)(!0);
                    (0, n.useEffect)(() => {
                        if (h(!0), !p) return;
                        let e = setTimeout(() => h(!1), p);
                        return () => clearTimeout(e)
                    }, [p]);
                    let f = l[r],
                        g = i[c],
                        w = {
                            flat: "".concat(f, " bg-opacity-25 ").concat(s[r]),
                            solid: "".concat(f, " text-white")
                        };
                    return x ? (0, a.jsxs)("div", {
                        className: "flex items-center justify-start gap-3 p-3 px-4 pr-5 ".concat(u ? "w-full" : "w-fit", " ").concat(g, " ").concat(w[t], " ").concat(m),
                        children: [(0, a.jsx)("div", {
                            className: "flex h-7 w-7 items-center justify-center rounded-md p-1 bg-".concat(f, "-500"),
                            children: d
                        }), o]
                    }) : (0, a.jsx)(a.Fragment, {})
                }
        }
    }
]);