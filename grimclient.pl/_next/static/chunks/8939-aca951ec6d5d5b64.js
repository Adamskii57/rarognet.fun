"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8939], {
        81377: (e, a, r) => {
            r.d(a, {
                c: () => l
            });
            var i = r(53239),
                t = r(19303);

            function l(e, a = []) {
                let r = (0, i.useRef)(e);
                return (0, t.U)(() => {
                    r.current = e
                }), (0, i.useCallback)((...e) => {
                    var a;
                    return null == (a = r.current) ? void 0 : a.call(r, ...e)
                }, a)
            }
        },
        98939: (e, a, r) => {
            r.d(a, {
                A: () => z
            });
            var i = r(80263);

            function t(e) {
                let {
                    isSelected: a,
                    disableAnimation: r,
                    ...t
                } = e;
                return (0, i.jsx)("svg", {
                    "aria-hidden": "true",
                    role: "presentation",
                    viewBox: "0 0 17 18",
                    ...t,
                    children: (0, i.jsx)("polyline", {
                        fill: "none",
                        points: "1 9 7 14 15 4",
                        stroke: "currentColor",
                        strokeDasharray: 22,
                        strokeDashoffset: a ? 44 : 66,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        style: !r && a ? {
                            transition: "stroke-dashoffset 250ms linear 0.2s"
                        } : {}
                    })
                })
            }

            function l(e) {
                let {
                    isSelected: a,
                    disableAnimation: r,
                    ...t
                } = e;
                return (0, i.jsx)("svg", {
                    stroke: "currentColor",
                    strokeWidth: 3,
                    viewBox: "0 0 24 24",
                    ...t,
                    children: (0, i.jsx)("line", {
                        x1: "21",
                        x2: "3",
                        y1: "12",
                        y2: "12"
                    })
                })
            }

            function n(e) {
                let {
                    isIndeterminate: a,
                    ...r
                } = e;
                return (0, i.jsx)(a ? l : t, { ...r
                })
            }
            var [o, d] = (0, r(92661).q)({
                name: "CheckboxGroupContext",
                strict: !1
            }), s = r(52562), u = r(53239), c = r(6274);

            function f(e = {}) {
                let {
                    isReadOnly: a
                } = e, [r, i] = (0, c.P)(e.isSelected, e.defaultSelected || !1, e.onChange);
                return {
                    isSelected: r,
                    setSelected: function(e) {
                        a || i(e)
                    },
                    toggle: function() {
                        a || i(!r)
                    }
                }
            }
            var b = r(79997),
                p = r(70794),
                m = (0, b.tv)({
                    slots: {
                        base: "group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2 select-none",
                        wrapper: ["relative", "inline-flex", "items-center", "justify-center", "flex-shrink-0", "overflow-hidden", "before:content-['']", "before:absolute", "before:inset-0", "before:border-solid", "before:border-2", "before:box-border", "before:border-default", "after:content-['']", "after:absolute", "after:inset-0", "after:scale-50", "after:opacity-0", "after:origin-center", "group-data-[selected=true]:after:scale-100", "group-data-[selected=true]:after:opacity-100", "group-data-[hover=true]:before:bg-default-100", ...p.wA],
                        hiddenInput: p.n3,
                        icon: "z-10 w-4 h-3 opacity-0 group-data-[selected=true]:opacity-100 pointer-events-none",
                        label: "relative text-foreground select-none"
                    },
                    variants: {
                        color: {
                            default: {
                                wrapper: "after:bg-default after:text-default-foreground text-default-foreground"
                            },
                            primary: {
                                wrapper: "after:bg-primary after:text-primary-foreground text-primary-foreground"
                            },
                            secondary: {
                                wrapper: "after:bg-secondary after:text-secondary-foreground text-secondary-foreground"
                            },
                            success: {
                                wrapper: "after:bg-success after:text-success-foreground text-success-foreground"
                            },
                            warning: {
                                wrapper: "after:bg-warning after:text-warning-foreground text-warning-foreground"
                            },
                            danger: {
                                wrapper: "after:bg-danger after:text-danger-foreground text-danger-foreground"
                            }
                        },
                        size: {
                            sm: {
                                wrapper: ["w-4 h-4 me-2", "rounded-[calc(theme(borderRadius.medium)*0.5)]", "before:rounded-[calc(theme(borderRadius.medium)*0.5)]", "after:rounded-[calc(theme(borderRadius.medium)*0.5)]"],
                                label: "text-small",
                                icon: "w-3 h-2"
                            },
                            md: {
                                wrapper: ["w-5 h-5 me-2", "rounded-[calc(theme(borderRadius.medium)*0.6)]", "before:rounded-[calc(theme(borderRadius.medium)*0.6)]", "after:rounded-[calc(theme(borderRadius.medium)*0.6)]"],
                                label: "text-medium",
                                icon: "w-4 h-3"
                            },
                            lg: {
                                wrapper: ["w-6 h-6 me-2", "rounded-[calc(theme(borderRadius.medium)*0.7)]", "before:rounded-[calc(theme(borderRadius.medium)*0.7)]", "after:rounded-[calc(theme(borderRadius.medium)*0.7)]"],
                                label: "text-large",
                                icon: "w-5 h-4"
                            }
                        },
                        radius: {
                            none: {
                                wrapper: "rounded-none before:rounded-none after:rounded-none"
                            },
                            sm: {
                                wrapper: ["rounded-[calc(theme(borderRadius.medium)*0.5)]", "before:rounded-[calc(theme(borderRadius.medium)*0.5)]", "after:rounded-[calc(theme(borderRadius.medium)*0.5)]"]
                            },
                            md: {
                                wrapper: ["rounded-[calc(theme(borderRadius.medium)*0.6)]", "before:rounded-[calc(theme(borderRadius.medium)*0.6)]", "after:rounded-[calc(theme(borderRadius.medium)*0.6)]"]
                            },
                            lg: {
                                wrapper: ["rounded-[calc(theme(borderRadius.medium)*0.7)]", "before:rounded-[calc(theme(borderRadius.medium)*0.7)]", "after:rounded-[calc(theme(borderRadius.medium)*0.7)]"]
                            },
                            full: {
                                wrapper: "rounded-full before:rounded-full after:rounded-full"
                            }
                        },
                        lineThrough: {
                            true: {
                                label: ["inline-flex", "items-center", "justify-center", "before:content-['']", "before:absolute", "before:bg-foreground", "before:w-0", "before:h-0.5", "group-data-[selected=true]:opacity-60", "group-data-[selected=true]:before:w-full"]
                            }
                        },
                        isDisabled: {
                            true: {
                                base: "opacity-disabled pointer-events-none"
                            }
                        },
                        isInvalid: {
                            true: {
                                wrapper: "before:border-danger",
                                label: "text-danger"
                            }
                        },
                        disableAnimation: {
                            true: {
                                wrapper: "transition-none",
                                icon: "transition-none",
                                label: "transition-none"
                            },
                            false: {
                                wrapper: ["before:transition-colors", "group-data-[pressed=true]:scale-95", "transition-transform", "after:transition-transform-opacity", "after:!ease-linear", "after:!duration-200", "motion-reduce:transition-none"],
                                icon: "transition-opacity motion-reduce:transition-none",
                                label: "transition-colors-opacity before:transition-width motion-reduce:transition-none"
                            }
                        }
                    },
                    defaultVariants: {
                        color: "primary",
                        size: "md",
                        isDisabled: !1,
                        lineThrough: !1
                    }
                });
            (0, b.tv)({
                slots: {
                    base: "relative flex flex-col gap-2",
                    label: "relative text-medium text-foreground-500",
                    wrapper: "flex flex-col flex-wrap gap-2 data-[orientation=horizontal]:flex-row",
                    description: "text-small text-foreground-400",
                    errorMessage: "text-small text-danger"
                },
                variants: {
                    isRequired: {
                        true: {
                            label: "after:content-['*'] after:text-danger after:ml-0.5"
                        }
                    },
                    isInvalid: {
                        true: {
                            description: "text-danger"
                        }
                    },
                    disableAnimation: {
                        true: {},
                        false: {
                            description: "transition-colors !duration-150 motion-reduce:transition-none"
                        }
                    }
                },
                defaultVariants: {
                    isInvalid: !1,
                    isRequired: !1
                }
            });
            var v = r(81377),
                h = r(7572),
                g = r(80793),
                x = r(47169),
                y = r(39034),
                w = r(49789),
                R = r(44509),
                k = r(58724),
                C = r(73749),
                I = r(47358),
                D = r(44124),
                S = r(46269),
                P = r(88812),
                V = r(46456),
                j = r(13787);

            function E(e, a, r) {
                let i = (0, I.KZ)({ ...e,
                        value: a.isSelected
                    }),
                    {
                        isInvalid: t,
                        validationErrors: l,
                        validationDetails: n
                    } = i.displayValidation,
                    {
                        labelProps: o,
                        inputProps: d,
                        isSelected: s,
                        isPressed: c,
                        isDisabled: f,
                        isReadOnly: b
                    } = function(e, a, r) {
                        let {
                            isDisabled: i = !1,
                            isReadOnly: t = !1,
                            value: l,
                            name: n,
                            children: o,
                            "aria-label": d,
                            "aria-labelledby": s,
                            validationState: u = "valid",
                            isInvalid: c
                        } = e;
                        null == o && null == d && null == s && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
                        let {
                            pressProps: f,
                            isPressed: b
                        } = (0, S.d)({
                            isDisabled: i
                        }), {
                            pressProps: p,
                            isPressed: m
                        } = (0, S.d)({
                            isDisabled: i || t,
                            onPress() {
                                a.toggle()
                            }
                        }), {
                            focusableProps: v
                        } = (0, j.W)(e, r), h = (0, y.v)(f, v), g = (0, P.$)(e, {
                            labelable: !0
                        });
                        return (0, V.F)(r, a.isSelected, a.setSelected), {
                            labelProps: (0, y.v)(p, {
                                onClick: e => e.preventDefault()
                            }),
                            inputProps: (0, y.v)(g, {
                                "aria-invalid": c || "invalid" === u || void 0,
                                "aria-errormessage": e["aria-errormessage"],
                                "aria-controls": e["aria-controls"],
                                "aria-readonly": t || void 0,
                                onChange: e => {
                                    e.stopPropagation(), a.setSelected(e.target.checked)
                                },
                                disabled: i,
                                ...null == l ? {} : {
                                    value: l
                                },
                                name: n,
                                type: "checkbox",
                                ...h
                            }),
                            isSelected: a.isSelected,
                            isPressed: b || m,
                            isDisabled: i,
                            isReadOnly: t,
                            isInvalid: c || "invalid" === u
                        }
                    }({ ...e,
                        isInvalid: t
                    }, a, r);
                (0, D.X)(e, i, r);
                let {
                    isIndeterminate: p,
                    isRequired: m,
                    validationBehavior: v = "aria"
                } = e;
                (0, u.useEffect)(() => {
                    r.current && (r.current.indeterminate = !!p)
                });
                let {
                    pressProps: h
                } = (0, S.d)({
                    isDisabled: f || b,
                    onPress() {
                        let {
                            [I.Lf]: a
                        } = e, {
                            commitValidation: r
                        } = a || i;
                        r()
                    }
                });
                return {
                    labelProps: (0, y.v)(o, h),
                    inputProps: { ...d,
                        checked: s,
                        "aria-required": m && "aria" === v || void 0,
                        required: m && "native" === v
                    },
                    isSelected: s,
                    isPressed: c,
                    isDisabled: f,
                    isReadOnly: b,
                    isInvalid: t,
                    validationErrors: l,
                    validationDetails: n
                }
            }
            let O = new WeakMap;
            var B = r(19303),
                N = r(97195),
                q = r(39187),
                A = r(31109),
                M = (0, r(62471).Rf)((e, a) => {
                    let {
                        Component: r,
                        children: t,
                        icon: l = (0, i.jsx)(n, {}),
                        getBaseProps: o,
                        getWrapperProps: c,
                        getInputProps: b,
                        getIconProps: p,
                        getLabelProps: D
                    } = function(e = {}) {
                        var a, r, i, t, l, n, o, c;
                        let b = (0, s.o)(),
                            p = d(),
                            {
                                validationBehavior: D
                            } = (0, q.CC)(A.c) || {},
                            S = !!p,
                            {
                                as: P,
                                ref: V,
                                value: j = "",
                                children: M,
                                icon: z,
                                name: G,
                                isRequired: T,
                                isReadOnly: U = !1,
                                autoFocus: L = !1,
                                isSelected: W,
                                size: $ = null != (a = null == p ? void 0 : p.size) ? a : "md",
                                color: _ = null != (r = null == p ? void 0 : p.color) ? r : "primary",
                                radius: F = null == p ? void 0 : p.radius,
                                lineThrough: K = null != (i = null == p ? void 0 : p.lineThrough) && i,
                                isDisabled: Z = null != (t = null == p ? void 0 : p.isDisabled) && t,
                                disableAnimation: X = null != (n = null != (l = null == p ? void 0 : p.disableAnimation) ? l : null == b ? void 0 : b.disableAnimation) && n,
                                validationState: Y,
                                isInvalid: H = Y ? "invalid" === Y : null != (o = null == p ? void 0 : p.isInvalid) && o,
                                isIndeterminate: J = !1,
                                validationBehavior: Q = S ? p.validationBehavior : null != (c = null != D ? D : null == b ? void 0 : b.validationBehavior) ? c : "native",
                                defaultSelected: ee,
                                classNames: ea,
                                className: er,
                                onValueChange: ei,
                                validate: et,
                                ...el
                            } = e;
                        p && w.gt && (W && (0, R.R)("The Checkbox.Group is being used, `isSelected` will be ignored. Use the `value` of the Checkbox.Group instead.", "Checkbox"), ee && (0, R.R)("The Checkbox.Group is being used, `defaultSelected` will be ignored. Use the `defaultValue` of the Checkbox.Group instead.", "Checkbox"));
                        let en = (0, u.useRef)(null),
                            eo = (0, u.useRef)(null),
                            ed = e.onChange;
                        S && (ed = (0, x.c)(() => {
                            p.groupState.resetValidation()
                        }, ed));
                        let es = (0, u.useId)(),
                            eu = (0, u.useMemo)(() => ({
                                name: G,
                                value: j,
                                children: M,
                                autoFocus: L,
                                defaultSelected: ee,
                                isIndeterminate: J,
                                isRequired: T,
                                isInvalid: H,
                                isSelected: W,
                                isDisabled: Z,
                                isReadOnly: U,
                                "aria-label": (0, k.j)(el["aria-label"], M),
                                "aria-labelledby": el["aria-labelledby"] || es,
                                onChange: ei
                            }), [G, j, M, L, ee, J, T, H, W, Z, U, el["aria-label"], el["aria-labelledby"], es, ei]),
                            ec = f(eu),
                            ef = {
                                isInvalid: H,
                                isRequired: T,
                                validate: et,
                                validationState: Y,
                                validationBehavior: Q
                            },
                            {
                                inputProps: eb,
                                isSelected: ep,
                                isDisabled: em,
                                isReadOnly: ev,
                                isPressed: eh,
                                isInvalid: eg
                            } = S ? function(e, a, r) {
                                var i, t;
                                let l = f({
                                        isReadOnly: e.isReadOnly || a.isReadOnly,
                                        isSelected: a.isSelected(e.value),
                                        onChange(r) {
                                            r ? a.addValue(e.value) : a.removeValue(e.value), e.onChange && e.onChange(r)
                                        }
                                    }),
                                    {
                                        name: n,
                                        descriptionId: o,
                                        errorMessageId: d,
                                        validationBehavior: s
                                    } = O.get(a);
                                s = null != (i = e.validationBehavior) ? i : s;
                                let {
                                    realtimeValidation: c
                                } = (0, I.KZ)({ ...e,
                                    value: l.isSelected,
                                    name: void 0,
                                    validationBehavior: "aria"
                                }), b = (0, u.useRef)(I.YD), p = () => {
                                    a.setInvalid(e.value, c.isInvalid ? c : b.current)
                                };
                                (0, u.useEffect)(p);
                                let m = a.realtimeValidation.isInvalid ? a.realtimeValidation : c,
                                    v = "native" === s ? a.displayValidation : m,
                                    h = E({ ...e,
                                        isReadOnly: e.isReadOnly || a.isReadOnly,
                                        isDisabled: e.isDisabled || a.isDisabled,
                                        name: e.name || n,
                                        isRequired: null != (t = e.isRequired) ? t : a.isRequired,
                                        validationBehavior: s,
                                        [I.Lf]: {
                                            realtimeValidation: m,
                                            displayValidation: v,
                                            resetValidation: a.resetValidation,
                                            commitValidation: a.commitValidation,
                                            updateValidation(e) {
                                                b.current = e, p()
                                            }
                                        }
                                    }, l, r);
                                return { ...h,
                                    inputProps: { ...h.inputProps,
                                        "aria-describedby": [e["aria-describedby"], a.isInvalid ? d : null, o].filter(Boolean).join(" ") || void 0
                                    }
                                }
                            }({ ...eu,
                                ...ef
                            }, p.groupState, eo) : E({ ...eu,
                                ...ef
                            }, ec, eo),
                            ex = "invalid" === Y || H || eg,
                            ey = !(em || ev) && eh,
                            {
                                hoverProps: ew,
                                isHovered: eR
                            } = (0, h.M)({
                                isDisabled: eb.disabled
                            }),
                            {
                                focusProps: ek,
                                isFocused: eC,
                                isFocusVisible: eI
                            } = (0, g.o)({
                                autoFocus: eb.autoFocus
                            }),
                            eD = (0, u.useMemo)(() => m({
                                color: _,
                                size: $,
                                radius: F,
                                isInvalid: ex,
                                lineThrough: K,
                                isDisabled: em,
                                disableAnimation: X
                            }), [_, $, F, ex, K, em, X]);
                        (0, B.U)(() => {
                            if (!eo.current) return;
                            let e = !!eo.current.checked;
                            ec.setSelected(e)
                        }, [eo.current]);
                        let eS = (0, v.c)(ed),
                            eP = (0, u.useCallback)(e => {
                                if (ev || em) return void e.preventDefault();
                                null == eS || eS(e)
                            }, [ev, em, eS]),
                            eV = (0, C.$)(null == ea ? void 0 : ea.base, er),
                            ej = (0, u.useCallback)(() => ({
                                ref: en,
                                className: eD.base({
                                    class: eV
                                }),
                                "data-disabled": (0, w.sE)(em),
                                "data-selected": (0, w.sE)(ep || J),
                                "data-invalid": (0, w.sE)(ex),
                                "data-hover": (0, w.sE)(eR),
                                "data-focus": (0, w.sE)(eC),
                                "data-pressed": (0, w.sE)(ey),
                                "data-readonly": (0, w.sE)(eb.readOnly),
                                "data-focus-visible": (0, w.sE)(eI),
                                "data-indeterminate": (0, w.sE)(J),
                                ...(0, y.v)(ew, el)
                            }), [eD, eV, em, ep, J, ex, eR, eC, ey, eb.readOnly, eI, ew, el]),
                            eE = (0, u.useCallback)((e = {}) => ({ ...e,
                                "aria-hidden": !0,
                                className: (0, C.$)(eD.wrapper({
                                    class: (0, C.$)(null == ea ? void 0 : ea.wrapper, null == e ? void 0 : e.className)
                                }))
                            }), [eD, null == ea ? void 0 : ea.wrapper]),
                            eO = (0, u.useCallback)(() => ({
                                ref: (0, N.P)(eo, V),
                                ...(0, y.v)(eb, ek),
                                className: eD.hiddenInput({
                                    class: null == ea ? void 0 : ea.hiddenInput
                                }),
                                onChange: (0, x.c)(eb.onChange, eP)
                            }), [eb, ek, eP, null == ea ? void 0 : ea.hiddenInput]),
                            eB = (0, u.useCallback)(() => ({
                                id: es,
                                className: eD.label({
                                    class: null == ea ? void 0 : ea.label
                                })
                            }), [eD, null == ea ? void 0 : ea.label, em, ep, ex]),
                            eN = (0, u.useCallback)(() => ({
                                isSelected: ep,
                                isIndeterminate: J,
                                disableAnimation: X,
                                className: eD.icon({
                                    class: null == ea ? void 0 : ea.icon
                                })
                            }), [eD, null == ea ? void 0 : ea.icon, ep, J, X]);
                        return {
                            Component: P || "label",
                            icon: z,
                            children: M,
                            isSelected: ep,
                            isDisabled: em,
                            isInvalid: ex,
                            isFocused: eC,
                            isHovered: eR,
                            isFocusVisible: eI,
                            getBaseProps: ej,
                            getWrapperProps: eE,
                            getInputProps: eO,
                            getLabelProps: eB,
                            getIconProps: eN
                        }
                    }({ ...e,
                        ref: a
                    }), S = "function" == typeof l ? l(p()) : (0, u.cloneElement)(l, p());
                    return (0, i.jsxs)(r, { ...o(),
                        children: [(0, i.jsx)("input", { ...b()
                        }), (0, i.jsx)("span", { ...c(),
                            children: S
                        }), t && (0, i.jsx)("span", { ...D(),
                            children: t
                        })]
                    })
                });
            M.displayName = "NextUI.Checkbox";
            var z = M
        }
    }
]);