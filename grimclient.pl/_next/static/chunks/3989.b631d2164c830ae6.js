"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3989], {
        12075: e => {
            var t = function(e) {
                    var t, a, l;
                    return !!(t = e) && "object" == typeof t && (a = e, "[object RegExp]" !== (l = Object.prototype.toString.call(a)) && "[object Date]" !== l && a.$$typeof !== r)
                },
                r = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

            function a(e, t) {
                return !1 !== t.clone && t.isMergeableObject(e) ? i(Array.isArray(e) ? [] : {}, e, t) : e
            }

            function l(e, t, r) {
                return e.concat(t).map(function(e) {
                    return a(e, r)
                })
            }

            function n(e) {
                return Object.keys(e).concat(Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
                    return Object.propertyIsEnumerable.call(e, t)
                }) : [])
            }

            function c(e, t) {
                try {
                    return t in e
                } catch (e) {
                    return !1
                }
            }

            function i(e, r, u) {
                (u = u || {}).arrayMerge = u.arrayMerge || l, u.isMergeableObject = u.isMergeableObject || t, u.cloneUnlessOtherwiseSpecified = a;
                var o, s, y = Array.isArray(r);
                return y !== Array.isArray(e) ? a(r, u) : y ? u.arrayMerge(e, r, u) : (s = {}, (o = u).isMergeableObject(e) && n(e).forEach(function(t) {
                    s[t] = a(e[t], o)
                }), n(r).forEach(function(t) {
                    c(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t)) || (c(e, t) && o.isMergeableObject(r[t]) ? s[t] = (function(e, t) {
                        if (!t.customMerge) return i;
                        var r = t.customMerge(e);
                        return "function" == typeof r ? r : i
                    })(t, o)(e[t], r[t], o) : s[t] = a(r[t], o))
                }), s)
            }
            i.all = function(e, t) {
                if (!Array.isArray(e)) throw Error("first argument should be an array");
                return e.reduce(function(e, r) {
                    return i(e, r, t)
                }, {})
            }, e.exports = i
        },
        13989: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => O
            });
            var a = r(53239);
            let l = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
                n = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,
                c = /\.(m3u8)($|\?)/i,
                i = /\.(mpd)($|\?)/i,
                u = /stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,
                o = /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,
                s = /vimeo\.com\/(?!progressive_redirect).+/,
                y = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,
                m = /open\.spotify\.com\/(\w+)\/(\w+)/i,
                f = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+|(videos?\/|\?video=)\d+)($|\?)/,
                p = (e, t) => {
                    if (Array.isArray(e)) {
                        for (let r of e)
                            if ("string" == typeof r && p(r, t) || p(r.src, t)) return !0;
                        return !1
                    }
                    return t(e)
                },
                b = {
                    html: e => p(e, e => l.test(e) || n.test(e)),
                    hls: e => p(e, e => c.test(e)),
                    dash: e => p(e, e => i.test(e)),
                    mux: e => u.test(e),
                    youtube: e => o.test(e),
                    vimeo: e => s.test(e) && !n.test(e) && !c.test(e),
                    wistia: e => y.test(e),
                    spotify: e => m.test(e),
                    twitch: e => f.test(e)
                },
                d = a.forwardRef((e, t) => {
                    let r = l.test(`${e.src}`) ? "audio" : "video";
                    return a.createElement(r, { ...e,
                        ref: t
                    }, e.children)
                }),
                h = [{
                    key: "hls",
                    name: "hls.js",
                    canPlay: b.hls,
                    canEnablePIP: () => !0,
                    player: (0, a.lazy)(() => Promise.all([r.e(4466), r.e(6025), r.e(2262)]).then(r.bind(r, 84268)))
                }, {
                    key: "dash",
                    name: "dash.js",
                    canPlay: b.dash,
                    canEnablePIP: () => !0,
                    player: (0, a.lazy)(() => r.e(6395).then(r.bind(r, 69499)))
                }, {
                    key: "mux",
                    name: "Mux",
                    canPlay: b.mux,
                    canEnablePIP: () => !0,
                    player: (0, a.lazy)(() => Promise.all([r.e(4466), r.e(6025), r.e(2723)]).then(r.bind(r, 19669)))
                }, {
                    key: "youtube",
                    name: "YouTube",
                    canPlay: b.youtube,
                    player: (0, a.lazy)(() => r.e(8446).then(r.bind(r, 72544)))
                }, {
                    key: "vimeo",
                    name: "Vimeo",
                    canPlay: b.vimeo,
                    player: (0, a.lazy)(() => r.e(6173).then(r.bind(r, 4594)))
                }, {
                    key: "wistia",
                    name: "Wistia",
                    canPlay: b.wistia,
                    canEnablePIP: () => !0,
                    player: (0, a.lazy)(() => r.e(9340).then(r.bind(r, 59885)))
                }, {
                    key: "spotify",
                    name: "Spotify",
                    canPlay: b.spotify,
                    canEnablePIP: () => !1,
                    player: (0, a.lazy)(() => r.e(2771).then(r.bind(r, 50357)))
                }, {
                    key: "twitch",
                    name: "Twitch",
                    canPlay: b.twitch,
                    canEnablePIP: () => !1,
                    player: (0, a.lazy)(() => r.e(2042).then(r.bind(r, 95432)))
                }, {
                    key: "html",
                    name: "html",
                    canPlay: b.html,
                    canEnablePIP: () => !0,
                    player: d
                }];
            var P = r(12075);
            let v = {
                    width: "320px",
                    height: "180px",
                    volume: 1,
                    playbackRate: 1,
                    previewTabIndex: 0,
                    previewAriaLabel: "",
                    oEmbedUrl: "https://noembed.com/embed?url={url}"
                },
                w = a.forwardRef((e, t) => {
                    let {
                        playing: r,
                        pip: l
                    } = e, n = e.activePlayer, c = (0, a.useRef)(null), i = (0, a.useRef)(!0);
                    if ((0, a.useEffect)(() => {
                            var t, a;
                            c.current && (c.current.paused && !0 === r && c.current.play(), c.current.paused || !1 !== r || c.current.pause(), c.current.playbackRate = null != (t = e.playbackRate) ? t : 1, c.current.volume = null != (a = e.volume) ? a : 1)
                        }), (0, a.useEffect)(() => {
                            var e, t, r, a, n;
                            if (c.current && globalThis.document) {
                                if (l && !document.pictureInPictureElement) try {
                                    null == (t = (e = c.current).requestPictureInPicture) || t.call(e)
                                } catch (e) {}
                                if (!l && document.pictureInPictureElement) try {
                                    null == (a = (r = c.current).exitPictureInPicture) || a.call(r), null == (n = document.exitPictureInPicture) || n.call(document)
                                } catch (e) {}
                            }
                        }, [l]), !n) return null;
                    let u = {};
                    for (let t in e) t.startsWith("on") && (u[t] = e[t]);
                    return a.createElement(n, { ...u,
                        style: e.style,
                        className: e.className,
                        slot: e.slot,
                        ref: (0, a.useCallback)(e => {
                            c.current = e, "function" == typeof t ? t(e) : null !== t && (t.current = e)
                        }, [t]),
                        src: e.src,
                        crossOrigin: e.crossOrigin,
                        preload: e.preload,
                        controls: e.controls,
                        muted: e.muted,
                        autoPlay: e.autoPlay,
                        loop: e.loop,
                        playsInline: e.playsInline,
                        config: e.config,
                        onLoadStart: t => {
                            var r, a;
                            i.current = !0, null == (r = e.onReady) || r.call(e), null == (a = e.onLoadStart) || a.call(e, t)
                        },
                        onPlay: t => {
                            var r, a;
                            i.current && (i.current = !1, null == (r = e.onStart) || r.call(e, t)), null == (a = e.onPlay) || a.call(e, t)
                        }
                    }, e.children)
                });
            w.displayName = "Player";
            let g = (0, a.lazy)(() => r.e(6353).then(r.bind(r, 60070))),
                E = [],
                k = ({
                    children: e
                }) => e,
                I = h[h.length - 1];
            var O = ((e, t) => {
                let r = r => {
                        for (let t of [...E, ...e])
                            if (r && t.canPlay(r)) return t;
                        return t || null
                    },
                    l = a.forwardRef(({
                        children: e,
                        ...t
                    }, l) => {
                        let n = P(v, t),
                            {
                                src: c,
                                slot: i,
                                className: u,
                                style: o,
                                width: s,
                                height: y,
                                fallback: m,
                                wrapper: f
                            } = n,
                            [p, b] = (0, a.useState)(!!n.light);
                        (0, a.useEffect)(() => {
                            n.light ? b(!0) : b(!1)
                        }, [n.light]);
                        let d = e => {
                                var t;
                                b(!1), null == (t = n.onClickPreview) || t.call(n, e)
                            },
                            h = null == f ? k : f,
                            E = !1 === m ? k : a.Suspense;
                        return a.createElement(h, {
                            slot: i,
                            className: u,
                            style: {
                                width: s,
                                height: y,
                                ...o
                            }
                        }, a.createElement(E, {
                            fallback: m
                        }, p ? (e => {
                            if (!e) return null;
                            let {
                                light: t,
                                playIcon: r,
                                previewTabIndex: l,
                                oEmbedUrl: c,
                                previewAriaLabel: i
                            } = n;
                            return a.createElement(g, {
                                src: e,
                                light: t,
                                playIcon: r,
                                previewTabIndex: l,
                                previewAriaLabel: i,
                                oEmbedUrl: c,
                                onClickPreview: d
                            })
                        })(c) : (t => {
                            var c, o;
                            let s = r(t);
                            if (!s) return null;
                            let {
                                style: y,
                                width: m,
                                height: f,
                                wrapper: p
                            } = n, b = null == (c = n.config) ? void 0 : c[s.key];
                            return a.createElement(w, { ...n,
                                ref: l,
                                activePlayer: null != (o = s.player) ? o : s,
                                slot: p ? void 0 : i,
                                className: p ? void 0 : u,
                                style: p ? {
                                    display: "block",
                                    width: "100%",
                                    height: "100%"
                                } : {
                                    display: "block",
                                    width: m,
                                    height: f,
                                    ...y
                                },
                                config: b
                            }, e)
                        })(c)))
                    });
                return l.displayName = "ReactPlayer", l.addCustomPlayer = e => {
                    E.push(e)
                }, l.removeCustomPlayers = () => {
                    E.length = 0
                }, l.canPlay = t => {
                    if (t) {
                        for (let r of [...E, ...e])
                            if (r.canPlay(t)) return !0
                    }
                    return !1
                }, l.canEnablePIP = t => {
                    var r;
                    if (t) {
                        for (let a of [...E, ...e])
                            if (a.canPlay(t) && (null == (r = a.canEnablePIP) ? void 0 : r.call(a))) return !0
                    }
                    return !1
                }, l
            })(h, I)
        }
    }
]);