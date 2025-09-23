(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8295], {
        16414: (e, t, n) => {
            "use strict";
            n.d(t, {
                x: () => r
            });
            var a = n(33821);

            function r(e) {
                let [t, n] = (0, a.e)(e);
                return [t, l(n), n]
            }
            let l = e => t => {
                e(e => (t(e), e))
            }
        },
        25858: (e, t, n) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/login", function() {
                return n(46695)
            }])
        },
        32681: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => h
            });
            var a = n(80263),
                r = n(79898),
                l = n.n(r),
                i = n(59414),
                s = n(53239),
                o = n(4207),
                c = n(90357);
            let d = () => {
                    if (c.P0) return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("script", {
                            async: !0,
                            src: "https://www.googletagmanager.com/gtag/js?id=".concat(o._.NEXT_PUBLIC_GTAG_ID)
                        }), (0, a.jsx)("script", {
                            dangerouslySetInnerHTML: {
                                __html: "\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            ".concat(c.fO.map(u).join(""), "\n          ")
                            }
                        })]
                    })
                },
                u = e => "gtag('config', '".concat(e, "', {page_path: window.location.pathname});"),
                m = () => {
                    if (c.zd) return (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("script", {
                            dangerouslySetInnerHTML: {
                                __html: "\n            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n            n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];\n            s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');\n            fbq('init','".concat(c.H1, "');fbq('track','PageView');\n          ")
                            }
                        })
                    })
                },
                g = "example.com",
                p = "example - description",
                h = e => {
                    let {
                        title: t,
                        subtitle: n,
                        description: r,
                        keywords: c,
                        callBack: u = "Już nas opuszczasz?"
                    } = e, h = o._.NEXT_PUBLIC_PAGE_URL, x = h + (0, i.usePathname)(), f = (0, s.useMemo)(() => (null != t ? t : "") + (null != n ? n : ""), [t, n]), [w, j] = (0, s.useState)(f);
                    return (0, s.useEffect)(() => {
                        let e = () => j("".concat(u, " - ").concat(f)),
                            t = () => j(f);
                        return window.addEventListener("blur", e), window.addEventListener("focus", t), () => {
                            window.removeEventListener("blur", e), window.removeEventListener("focus", t)
                        }
                    }, [f, n, u]), (0, a.jsxs)(l(), {
                        children: [(0, a.jsx)("title", {
                            children: null != w ? w : g
                        }), (0, a.jsx)("meta", {
                            name: "description",
                            content: null != r ? r : p
                        }), (0, a.jsx)("meta", {
                            name: "keywords",
                            content: null != c ? c : ""
                        }), (0, a.jsx)("link", {
                            rel: "canonical",
                            href: x
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
                            content: null != t ? t : g
                        }), (0, a.jsx)("meta", {
                            property: "twitter:description",
                            content: null != r ? r : p
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
                        }), (0, a.jsx)(d, {}), (0, a.jsx)(m, {})]
                    })
                }
        },
        46695: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSP: () => _,
                default: () => v
            });
            var a = n(80263),
                r = n(83062),
                l = n(98939),
                i = n(6552),
                s = n(23460),
                o = n(75593),
                c = n(8349),
                d = n.n(c),
                u = n(37488),
                m = n.n(u),
                g = n(67689),
                p = n(53239),
                h = n(14014),
                x = n(32681),
                f = n(65619),
                w = n(16414);
            let j = {
                    Activation: "activation",
                    OAuthSignin: "oauth_signin",
                    OAuthCallback: "oauth_callback",
                    OAuthCreateAccount: "oauth_create_account",
                    EmailCreateAccount: "email_create_account",
                    Callback: "callback",
                    OAuthAccountNotLinked: "oauth_account_not_linked",
                    EmailSignin: "email_signin",
                    CredentialsSignin: "credentials_signin",
                    SessionRequired: "session_required",
                    Default: "default",
                    InvalidToken: "invalid_token",
                    EmailChange: "email_change"
                },
                b = {
                    Login: "login",
                    Activation: "activation",
                    PasswordChanged: "password_changed",
                    Default: "default",
                    EmailChanged: "email_changed"
                };
            var _ = !0;
            let v = e => {
                let {
                    settings: t,
                    providers: n,
                    error: c,
                    info: u,
                    callbackUrl: _
                } = e, {
                    t: v
                } = (0, o.Bd)("auth"), y = (0, g.useRouter)(), [N, k, E] = (0, w.x)({
                    email: "",
                    password: "",
                    remember: !1
                }), [L, C] = (0, p.useState)(!1), [S, A] = (0, p.useState)(c), [T, q] = (0, p.useState)(u), P = null == n ? void 0 : n.find(e => "credentials" === e.type);
                if (!P) return null;
                let z = S && v("login.auth_response.error.".concat(j[null != S ? S : "Default"])),
                    D = T && v("login.auth_response.info.".concat(b[null != T ? T : "Default"]));
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(x.A, {
                        title: v("login.meta.title"),
                        subtitle: null == t ? void 0 : t.pageTitle,
                        description: null == t ? void 0 : t.pageDescription
                    }), (0, a.jsx)("section", {
                        className: "absolute left-0 top-0 h-screen w-full opacity-80",
                        children: (0, a.jsx)(d(), {
                            src: "/images/abs_hero.svg",
                            alt: "hero",
                            width: 1088,
                            height: 914,
                            className: "disable_drag disable_select -ml-24 -mt-12 animate-breath blur-[150px]"
                        })
                    }), (0, a.jsx)("header", {
                        className: "pb-32 pt-48 md:pb-16",
                        "data-aos": "fade-up",
                        "data-aos-easing": "ease-out-back",
                        "data-aos-delay": "200",
                        children: (0, a.jsx)("div", {
                            className: "container",
                            children: (0, a.jsxs)("div", {
                                className: "mx-auto flex w-full max-w-xl flex-col items-center gap-12 rounded-xl border-1 border-white/5 bg-tertiary-950 p-6",
                                children: [(0, a.jsxs)("div", {
                                    className: "flex flex-col items-center justify-center gap-4",
                                    children: [(0, a.jsx)(d(), {
                                        width: 70,
                                        height: 70,
                                        src: "/images/logo.png",
                                        alt: "Logo",
                                        className: "h-[70px] w-[70px] min-w-[70px] rounded-none md:h-[50px] md:w-[50px] md:min-w-[50px]"
                                    }), (0, a.jsx)("h1", {
                                        className: "text-2xl font-semibold",
                                        children: v("login.header.title_h1")
                                    }), (0, a.jsx)("p", {
                                        className: "-mt-2 text-tertiary-400",
                                        children: v("login.header.subtitle")
                                    })]
                                }), z && (0, a.jsx)(f.x, {
                                    variant: "flat",
                                    color: "danger",
                                    content: z,
                                    radius: "sm",
                                    wfull: !0,
                                    children: (0, a.jsx)(h.ItP, {})
                                }), D && (0, a.jsx)(f.x, {
                                    variant: "flat",
                                    color: "success",
                                    content: D,
                                    radius: "sm",
                                    wfull: !0,
                                    children: (0, a.jsx)(h.g9_, {})
                                }), (0, a.jsxs)("form", {
                                    className: "flex w-full flex-col gap-8",
                                    method: "post",
                                    onSubmit: e => {
                                        e.preventDefault(), C(!0), (0, s.signIn)("local", {
                                            redirect: !1,
                                            callbackUrl: null != _ ? _ : void 0,
                                            ...N
                                        }).then(e => {
                                            console.log(e), (null == e ? void 0 : e.ok) ? (A(void 0), q("Login"), E({
                                                email: "",
                                                password: "",
                                                remember: !1
                                            }), e.url && y.push(e.url)) : (A(null == e ? void 0 : e.error), q(void 0))
                                        }).catch(e => {
                                            console.error(e), A("Default"), q(void 0)
                                        }).finally(() => C(!1))
                                    },
                                    children: [(0, a.jsx)("div", {
                                        className: "flex flex-col gap-3",
                                        children: P.credentials && Object.entries(P.credentials).filter(e => {
                                            let [t, n] = e;
                                            return "checkbox" !== n.type
                                        }).map(e => {
                                            var t;
                                            let [n, l] = e;
                                            return (0, a.jsx)(r.r, { ...l,
                                                type: null != (t = l.type) ? t : "text",
                                                label: v("login.form.input.".concat(n, ".label")),
                                                placeholder: v("login.form.input.".concat(n, ".placeholder")),
                                                variant: "bordered",
                                                size: "lg",
                                                radius: "md",
                                                maxLength: 48,
                                                minLength: 6,
                                                isRequired: !0,
                                                classNames: {
                                                    inputWrapper: "bg-[#161517] border-white/5",
                                                    label: "group-data-[filled-within=true]:-translate-y-7 group-data-[filled-within=true]:bg-tertiary-950 pl-1",
                                                    input: "pb-2"
                                                },
                                                className: "w-full text-white",
                                                value: N[n],
                                                onChange: e => k(t => t[n] = e.target.value)
                                            }, "".concat(P.id, "-").concat(n))
                                        })
                                    }), (0, a.jsxs)("div", {
                                        className: "mt-6 grid grid-cols-2 gap-8",
                                        children: [(0, a.jsx)(l.A, {
                                            checked: N.remember,
                                            onChange: e => k(t => t.remember = e.target.checked),
                                            children: (0, a.jsx)("p", {
                                                className: "text-small text-white/60",
                                                children: v("login.form.input.remember.label")
                                            })
                                        }), (0, a.jsx)(m(), {
                                            href: "/recover-account",
                                            children: (0, a.jsx)("p", {
                                                className: "text-right text-small text-white transition-all duration-300 hover:text-primary-500",
                                                children: v("login.form.links.forgot_password")
                                            })
                                        })]
                                    }), (0, a.jsx)(i.T, {
                                        color: "primary",
                                        variant: "solid",
                                        size: "lg",
                                        radius: "lg",
                                        fullWidth: !0,
                                        type: "submit",
                                        className: "h-14 bg-gradient-to-r from-primary-800 to-primary-500 px-4",
                                        isDisabled: L,
                                        isLoading: L,
                                        children: v("login.form.login_button")
                                    }), (0, a.jsx)("p", {
                                        className: "-mt-4 text-center text-white/60",
                                        children: (0, a.jsxs)(o.x6, {
                                            t: v,
                                            i18nKey: "login.form.links.create_account",
                                            children: ["Nie masz konta?", " ", (0, a.jsx)(m(), {
                                                href: "/register",
                                                children: (0, a.jsx)("span", {
                                                    className: "text-primary-500 transition-all duration-300 hover:text-primary-600",
                                                    children: "Zarejestruj się"
                                                })
                                            })]
                                        })
                                    })]
                                })]
                            })
                        })
                    })]
                })
            }
        },
        65619: (e, t, n) => {
            "use strict";
            n.d(t, {
                x: () => o
            });
            var a = n(80263),
                r = n(53239);
            let l = {
                    primary: "bg-primary-500",
                    secondary: "bg-secondary-500",
                    default: "bg-gray-500",
                    success: "bg-green-500",
                    warning: "bg-yellow-500",
                    danger: "bg-red-500"
                },
                i = {
                    primary: "text-primary-500",
                    secondary: "text-secondary-500",
                    default: "text-white",
                    success: "text-green-500",
                    warning: "text-yellow-500",
                    danger: "text-red-500"
                },
                s = {
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
                        color: n,
                        content: o,
                        children: c,
                        radius: d,
                        wfull: u = !1,
                        className: m,
                        timeout: g
                    } = e, [p, h] = (0, r.useState)(!0);
                    (0, r.useEffect)(() => {
                        if (h(!0), !g) return;
                        let e = setTimeout(() => h(!1), g);
                        return () => clearTimeout(e)
                    }, [g]);
                    let x = l[n],
                        f = s[d],
                        w = {
                            flat: "".concat(x, " bg-opacity-25 ").concat(i[n]),
                            solid: "".concat(x, " text-white")
                        };
                    return p ? (0, a.jsxs)("div", {
                        className: "flex items-center justify-start gap-3 p-3 px-4 pr-5 ".concat(u ? "w-full" : "w-fit", " ").concat(f, " ").concat(w[t], " ").concat(m),
                        children: [(0, a.jsx)("div", {
                            className: "flex h-7 w-7 items-center justify-center rounded-md p-1 bg-".concat(x, "-500"),
                            children: c
                        }), o]
                    }) : (0, a.jsx)(a.Fragment, {})
                }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [47, 3007, 7867, 6040, 8939, 636, 6593, 8792], () => t(25858)), _N_E = e.O()
    }
]);