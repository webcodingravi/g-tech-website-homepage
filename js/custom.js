if (navigator.userAgent.match(/MSIE|Internet Explorer/i) || navigator.userAgent.match(/Trident\/7\..*?rv:11/i)) {
    var href = document.location.href;
    if (!href.match(/[?&]nowprocket/)) {
        if (href.indexOf("?") == -1) {
            if (href.indexOf("#") == -1) {
                document.location.href = href + "?nowprocket=1"
            } else {
                document.location.href = href.replace("#", "?nowprocket=1#")
            }
        } else {
            if (href.indexOf("#") == -1) {
                document.location.href = href + "&nowprocket=1"
            } else {
                document.location.href = href.replace("#", "&nowprocket=1#")
            }
        }
    }
}


(() => {
    class RocketLazyLoadScripts {
        constructor() {
            this.v = "2.0.5", this.userEvents = ["keydown", "keyup", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "touchmove", "touchstart", "touchend", "touchcancel", "wheel", "click", "dblclick", "input"], this.attributeEvents = ["onblur", "onclick", "oncontextmenu", "ondblclick", "onfocus", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onscroll", "onsubmit"]
        }
        async t() {
            this.i(), this.o(), /iP(ad|hone)/.test(navigator.userAgent) && this.h(), this.u(), this.l(this), this.m(), this.k(this), this.p(this), this._(), await Promise.all([this.R(), this.L()]), this.lastBreath = Date.now(), this.S(this), this.P(), this.D(), this.O(), this.M(), await this.C(this.delayedScripts.normal), await this.C(this.delayedScripts.defer), await this.C(this.delayedScripts.async), await this.T(), await this.F(), await this.j(), await this.A(), window.dispatchEvent(new Event("rocket-allScriptsLoaded")), this.everythingLoaded = !0, this.lastTouchEnd && await new Promise(t => setTimeout(t, 500 - Date.now() + this.lastTouchEnd)), this.I(), this.H(), this.U(), this.W()
        }
        i() {
            this.CSPIssue = sessionStorage.getItem("rocketCSPIssue"), document.addEventListener("securitypolicyviolation", t => {
                this.CSPIssue || "script-src-elem" !== t.violatedDirective || "data" !== t.blockedURI || (this.CSPIssue = !0, sessionStorage.setItem("rocketCSPIssue", !0))
            }, {
                isRocket: !0
            })
        }
        o() {
            window.addEventListener("pageshow", t => {
                this.persisted = t.persisted, this.realWindowLoadedFired = !0
            }, {
                isRocket: !0
            }), window.addEventListener("pagehide", () => {
                this.onFirstUserAction = null
            }, {
                isRocket: !0
            })
        }
        h() {
            let t;

            function e(e) {
                t = e
            }
            window.addEventListener("touchstart", e, {
                isRocket: !0
            }), window.addEventListener("touchend", function i(o) {
                o.changedTouches[0] && t.changedTouches[0] && Math.abs(o.changedTouches[0].pageX - t.changedTouches[0].pageX) < 10 && Math.abs(o.changedTouches[0].pageY - t.changedTouches[0].pageY) < 10 && o.timeStamp - t.timeStamp < 200 && (window.removeEventListener("touchstart", e, {
                    isRocket: !0
                }), window.removeEventListener("touchend", i, {
                    isRocket: !0
                }), "INPUT" === o.target.tagName && "text" === o.target.type || (o.target.dispatchEvent(new TouchEvent("touchend", {
                    target: o.target,
                    bubbles: !0
                })), o.target.dispatchEvent(new MouseEvent("mouseover", {
                    target: o.target,
                    bubbles: !0
                })), o.target.dispatchEvent(new PointerEvent("click", {
                    target: o.target,
                    bubbles: !0,
                    cancelable: !0,
                    detail: 1,
                    clientX: o.changedTouches[0].clientX,
                    clientY: o.changedTouches[0].clientY
                })), event.preventDefault()))
            }, {
                isRocket: !0
            })
        }
        q(t) {
            this.userActionTriggered || ("mousemove" !== t.type || this.firstMousemoveIgnored ? "keyup" === t.type || "mouseover" === t.type || "mouseout" === t.type || (this.userActionTriggered = !0, this.onFirstUserAction && this.onFirstUserAction()) : this.firstMousemoveIgnored = !0), "click" === t.type && t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), "touchstart" === this.lastEvent && "touchend" === t.type && (this.lastTouchEnd = Date.now()), "click" === t.type && (this.lastTouchEnd = 0), this.lastEvent = t.type, t.composedPath && t.composedPath()[0].getRootNode() instanceof ShadowRoot && (t.rocketTarget = t.composedPath()[0]), this.savedUserEvents.push(t)
        }
        u() {
            this.savedUserEvents = [], this.userEventHandler = this.q.bind(this), this.userEvents.forEach(t => window.addEventListener(t, this.userEventHandler, {
                passive: !1,
                isRocket: !0
            })), document.addEventListener("visibilitychange", this.userEventHandler, {
                isRocket: !0
            })
        }
        U() {
            this.userEvents.forEach(t => window.removeEventListener(t, this.userEventHandler, {
                passive: !1,
                isRocket: !0
            })), document.removeEventListener("visibilitychange", this.userEventHandler, {
                isRocket: !0
            }), this.savedUserEvents.forEach(t => {
                (t.rocketTarget || t.target).dispatchEvent(new window[t.constructor.name](t.type, t))
            })
        }
        m() {
            const t = "return false",
                e = Array.from(this.attributeEvents, t => "data-rocket-" + t),
                i = "[" + this.attributeEvents.join("],[") + "]",
                o = "[data-rocket-" + this.attributeEvents.join("],[data-rocket-") + "]",
                s = (e, i, o) => {
                    o && o !== t && (e.setAttribute("data-rocket-" + i, o), e["rocket" + i] = new Function("event", o), e.setAttribute(i, t))
                };
            new MutationObserver(t => {
                for (const n of t) "attributes" === n.type && (n.attributeName.startsWith("data-rocket-") || this.everythingLoaded ? n.attributeName.startsWith("data-rocket-") && this.everythingLoaded && this.N(n.target, n.attributeName.substring(12)) : s(n.target, n.attributeName, n.target.getAttribute(n.attributeName))), "childList" === n.type && n.addedNodes.forEach(t => {
                    if (t.nodeType === Node.ELEMENT_NODE)
                        if (this.everythingLoaded)
                            for (const i of [t, ...t.querySelectorAll(o)])
                                for (const t of i.getAttributeNames()) e.includes(t) && this.N(i, t.substring(12));
                        else
                            for (const e of [t, ...t.querySelectorAll(i)])
                                for (const t of e.getAttributeNames()) this.attributeEvents.includes(t) && s(e, t, e.getAttribute(t))
                })
            }).observe(document, {
                subtree: !0,
                childList: !0,
                attributeFilter: [...this.attributeEvents, ...e]
            })
        }
        I() {
            this.attributeEvents.forEach(t => {
                document.querySelectorAll("[data-rocket-" + t + "]").forEach(e => {
                    this.N(e, t)
                })
            })
        }
        N(t, e) {
            const i = t.getAttribute("data-rocket-" + e);
            i && (t.setAttribute(e, i), t.removeAttribute("data-rocket-" + e))
        }
        k(t) {
            Object.defineProperty(HTMLElement.prototype, "onclick", {
                get() {
                    return this.rocketonclick || null
                },
                set(e) {
                    this.rocketonclick = e, this.setAttribute(t.everythingLoaded ? "onclick" : "data-rocket-onclick", "this.rocketonclick(event)")
                }
            })
        }
        S(t) {
            function e(e, i) {
                let o = e[i];
                e[i] = null, Object.defineProperty(e, i, {
                    get: () => o,
                    set(s) {
                        t.everythingLoaded ? o = s : e["rocket" + i] = o = s
                    }
                })
            }
            e(document, "onreadystatechange"), e(window, "onload"), e(window, "onpageshow");
            try {
                Object.defineProperty(document, "readyState", {
                    get: () => t.rocketReadyState,
                    set(e) {
                        t.rocketReadyState = e
                    },
                    configurable: !0
                }), document.readyState = "loading"
            } catch (t) {
                console.log("WPRocket DJE readyState conflict, bypassing")
            }
        }
        l(t) {
            this.originalAddEventListener = EventTarget.prototype.addEventListener, this.originalRemoveEventListener = EventTarget.prototype.removeEventListener, this.savedEventListeners = [], EventTarget.prototype.addEventListener = function (e, i, o) {
                o && o.isRocket || !t.B(e, this) && !t.userEvents.includes(e) || t.B(e, this) && !t.userActionTriggered || e.startsWith("rocket-") || t.everythingLoaded ? t.originalAddEventListener.call(this, e, i, o) : (t.savedEventListeners.push({
                    target: this,
                    remove: !1,
                    type: e,
                    func: i,
                    options: o
                }), "mouseenter" !== e && "mouseleave" !== e || t.originalAddEventListener.call(this, e, t.savedUserEvents.push, o))
            }, EventTarget.prototype.removeEventListener = function (e, i, o) {
                o && o.isRocket || !t.B(e, this) && !t.userEvents.includes(e) || t.B(e, this) && !t.userActionTriggered || e.startsWith("rocket-") || t.everythingLoaded ? t.originalRemoveEventListener.call(this, e, i, o) : t.savedEventListeners.push({
                    target: this,
                    remove: !0,
                    type: e,
                    func: i,
                    options: o
                })
            }
        }
        J(t, e) {
            this.savedEventListeners = this.savedEventListeners.filter(i => {
                let o = i.type,
                    s = i.target || window;
                return e !== o || t !== s || (this.B(o, s) && (i.type = "rocket-" + o), this.$(i), !1)
            })
        }
        H() {
            EventTarget.prototype.addEventListener = this.originalAddEventListener, EventTarget.prototype.removeEventListener = this.originalRemoveEventListener, this.savedEventListeners.forEach(t => this.$(t))
        }
        $(t) {
            t.remove ? this.originalRemoveEventListener.call(t.target, t.type, t.func, t.options) : this.originalAddEventListener.call(t.target, t.type, t.func, t.options)
        }
        p(t) {
            let e;

            function i(e) {
                return t.everythingLoaded ? e : e.split(" ").map(t => "load" === t || t.startsWith("load.") ? "rocket-jquery-load" : t).join(" ")
            }

            function o(o) {
                function s(e) {
                    const s = o.fn[e];
                    o.fn[e] = o.fn.init.prototype[e] = function () {
                        return this[0] === window && t.userActionTriggered && ("string" == typeof arguments[0] || arguments[0] instanceof String ? arguments[0] = i(arguments[0]) : "object" == typeof arguments[0] && Object.keys(arguments[0]).forEach(t => {
                            const e = arguments[0][t];
                            delete arguments[0][t], arguments[0][i(t)] = e
                        })), s.apply(this, arguments), this
                    }
                }
                if (o && o.fn && !t.allJQueries.includes(o)) {
                    const e = {
                        DOMContentLoaded: [],
                        "rocket-DOMContentLoaded": []
                    };
                    for (const t in e) document.addEventListener(t, () => {
                        e[t].forEach(t => t())
                    }, {
                        isRocket: !0
                    });
                    o.fn.ready = o.fn.init.prototype.ready = function (i) {
                        function s() {
                            parseInt(o.fn.jquery) > 2 ? setTimeout(() => i.bind(document)(o)) : i.bind(document)(o)
                        }
                        return "function" == typeof i && (t.realDomReadyFired ? !t.userActionTriggered || t.fauxDomReadyFired ? s() : e["rocket-DOMContentLoaded"].push(s) : e.DOMContentLoaded.push(s)), this
                    }, s("on"), s("one"), s("off"), t.allJQueries.push(o)
                }
                e = o
            }
            t.allJQueries = [], o(window.jQuery), Object.defineProperty(window, "jQuery", {
                get: () => e,
                set(t) {
                    o(t)
                }
            })
        }
        P() {
            const t = new Map;
            document.write = document.writeln = function (e) {
                const i = document.currentScript,
                    o = document.createRange(),
                    s = i.parentElement;
                let n = t.get(i);
                void 0 === n && (n = i.nextSibling, t.set(i, n));
                const c = document.createDocumentFragment();
                o.setStart(c, 0), c.appendChild(o.createContextualFragment(e)), s.insertBefore(c, n)
            }
        }
        async R() {
            return new Promise(t => {
                this.userActionTriggered ? t() : this.onFirstUserAction = t
            })
        }
        async L() {
            return new Promise(t => {
                document.addEventListener("DOMContentLoaded", () => {
                    this.realDomReadyFired = !0, t()
                }, {
                    isRocket: !0
                })
            })
        }
        async j() {
            return this.realWindowLoadedFired ? Promise.resolve() : new Promise(t => {
                window.addEventListener("load", t, {
                    isRocket: !0
                })
            })
        }
        M() {
            this.pendingScripts = [];
            this.scriptsMutationObserver = new MutationObserver(t => {
                for (const e of t) e.addedNodes.forEach(t => {
                    "SCRIPT" !== t.tagName || !t.src || t.noModule || t.isWPRocket || this.pendingScripts.push({
                        script: t,
                        promise: new Promise(e => {
                            const i = () => {
                                const i = this.pendingScripts.findIndex(e => e.script === t);
                                i >= 0 && this.pendingScripts.splice(i, 1), e()
                            };
                            t.addEventListener("load", i, {
                                isRocket: !0
                            }), t.addEventListener("error", i, {
                                isRocket: !0
                            }), setTimeout(i, 1e3)
                        })
                    })
                })
            }), this.scriptsMutationObserver.observe(document, {
                childList: !0,
                subtree: !0
            })
        }
        async F() {
            await this.X(), this.pendingScripts.length ? (await this.pendingScripts[0].promise, await this.F()) : this.scriptsMutationObserver.disconnect()
        }
        D() {
            this.delayedScripts = {
                normal: [],
                async: [],
                defer: []
            }, document.querySelectorAll("script[type$=rocketlazyloadscript]").forEach(t => {
                t.hasAttribute("data-rocket-src") ? t.hasAttribute("async") && !1 !== t.async ? this.delayedScripts.async.push(t) : t.hasAttribute("defer") && !1 !== t.defer || "module" === t.getAttribute("data-rocket-type") ? this.delayedScripts.defer.push(t) : this.delayedScripts.normal.push(t) : this.delayedScripts.normal.push(t)
            })
        }
        async _() {
            await this.L();
            let t = [];
            document.querySelectorAll("script[type$=rocketlazyloadscript][data-rocket-src]").forEach(e => {
                let i = e.getAttribute("data-rocket-src");
                if (i && !i.startsWith("data:")) {
                    i.startsWith("//") && (i = location.protocol + i);
                    try {
                        const o = new URL(i).origin;
                        o !== location.origin && t.push({
                            src: o,
                            crossOrigin: e.crossOrigin || "module" === e.getAttribute("data-rocket-type")
                        })
                    } catch (t) { }
                }
            }), t = [...new Map(t.map(t => [JSON.stringify(t), t])).values()], this.Y(t, "preconnect")
        }
        async G(t) {
            if (await this.K(), !0 !== t.noModule || !("noModule" in HTMLScriptElement.prototype)) return new Promise(e => {
                let i;

                function o() {
                    (i || t).setAttribute("data-rocket-status", "executed"), e()
                }
                try {
                    if (navigator.userAgent.includes("Firefox/") || "" === navigator.vendor || this.CSPIssue) i = document.createElement("script"), [...t.attributes].forEach(t => {
                        let e = t.nodeName;
                        "type" !== e && ("data-rocket-type" === e && (e = "type"), "data-rocket-src" === e && (e = "src"), i.setAttribute(e, t.nodeValue))
                    }), t.text && (i.text = t.text), t.nonce && (i.nonce = t.nonce), i.hasAttribute("src") ? (i.addEventListener("load", o, {
                        isRocket: !0
                    }), i.addEventListener("error", () => {
                        i.setAttribute("data-rocket-status", "failed-network"), e()
                    }, {
                        isRocket: !0
                    }), setTimeout(() => {
                        i.isConnected || e()
                    }, 1)) : (i.text = t.text, o()), i.isWPRocket = !0, t.parentNode.replaceChild(i, t);
                    else {
                        const i = t.getAttribute("data-rocket-type"),
                            s = t.getAttribute("data-rocket-src");
                        i ? (t.type = i, t.removeAttribute("data-rocket-type")) : t.removeAttribute("type"), t.addEventListener("load", o, {
                            isRocket: !0
                        }), t.addEventListener("error", i => {
                            this.CSPIssue && i.target.src.startsWith("data:") ? (console.log("WPRocket: CSP fallback activated"), t.removeAttribute("src"), this.G(t).then(e)) : (t.setAttribute("data-rocket-status", "failed-network"), e())
                        }, {
                            isRocket: !0
                        }), s ? (t.fetchPriority = "high", t.removeAttribute("data-rocket-src"), t.src = s) : t.src = "data:text/javascript;base64," + window.btoa(unescape(encodeURIComponent(t.text)))
                    }
                } catch (i) {
                    t.setAttribute("data-rocket-status", "failed-transform"), e()
                }
            });
            t.setAttribute("data-rocket-status", "skipped")
        }
        async C(t) {
            const e = t.shift();
            return e ? (e.isConnected && await this.G(e), this.C(t)) : Promise.resolve()
        }
        O() {
            this.Y([...this.delayedScripts.normal, ...this.delayedScripts.defer, ...this.delayedScripts.async], "preload")
        }
        Y(t, e) {
            this.trash = this.trash || [];
            let i = !0;
            var o = document.createDocumentFragment();
            t.forEach(t => {
                const s = t.getAttribute && t.getAttribute("data-rocket-src") || t.src;
                if (s && !s.startsWith("data:")) {
                    const n = document.createElement("link");
                    n.href = s, n.rel = e, "preconnect" !== e && (n.as = "script", n.fetchPriority = i ? "high" : "low"), t.getAttribute && "module" === t.getAttribute("data-rocket-type") && (n.crossOrigin = !0), t.crossOrigin && (n.crossOrigin = t.crossOrigin), t.integrity && (n.integrity = t.integrity), t.nonce && (n.nonce = t.nonce), o.appendChild(n), this.trash.push(n), i = !1
                }
            }), document.head.appendChild(o)
        }
        W() {
            this.trash.forEach(t => t.remove())
        }
        async T() {
            try {
                document.readyState = "interactive"
            } catch (t) { }
            this.fauxDomReadyFired = !0;
            try {
                await this.K(), this.J(document, "readystatechange"), document.dispatchEvent(new Event("rocket-readystatechange")), await this.K(), document.rocketonreadystatechange && document.rocketonreadystatechange(), await this.K(), this.J(document, "DOMContentLoaded"), document.dispatchEvent(new Event("rocket-DOMContentLoaded")), await this.K(), this.J(window, "DOMContentLoaded"), window.dispatchEvent(new Event("rocket-DOMContentLoaded"))
            } catch (t) {
                console.error(t)
            }
        }
        async A() {
            try {
                document.readyState = "complete"
            } catch (t) { }
            try {
                await this.K(), this.J(document, "readystatechange"), document.dispatchEvent(new Event("rocket-readystatechange")), await this.K(), document.rocketonreadystatechange && document.rocketonreadystatechange(), await this.K(), this.J(window, "load"), window.dispatchEvent(new Event("rocket-load")), await this.K(), window.rocketonload && window.rocketonload(), await this.K(), this.allJQueries.forEach(t => t(window).trigger("rocket-jquery-load")), await this.K(), this.J(window, "pageshow");
                const t = new Event("rocket-pageshow");
                t.persisted = this.persisted, window.dispatchEvent(t), await this.K(), window.rocketonpageshow && window.rocketonpageshow({
                    persisted: this.persisted
                })
            } catch (t) {
                console.error(t)
            }
        }
        async K() {
            Date.now() - this.lastBreath > 45 && (await this.X(), this.lastBreath = Date.now())
        }
        async X() {
            return document.hidden ? new Promise(t => setTimeout(t)) : new Promise(t => requestAnimationFrame(t))
        }
        B(t, e = window) {
            return e === document && "readystatechange" === t || (e === document && "DOMContentLoaded" === t || (e === window && "DOMContentLoaded" === t || (e === window && "load" === t || e === window && "pageshow" === t)))
        }
        static run() {
            (new RocketLazyLoadScripts).t()
        }
    }
    RocketLazyLoadScripts.run()
})();


(function () {
    "use strict"; var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, e = function () {
        function
            i(e, t) {
            for (var n = 0; n
                < t.length; n++) { var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) }
        } return function (e, t, n) { return t && i(e.prototype, t), n && i(e, n), e }
    }(); function
        i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } var t = function () {
            function n(e, t) { i(this, n), this.browser = e, this.config = t, this.options = this.browser.options, this.prefetched = new Set, this.eventTime = null, this.threshold = 1111, this.numOnHover = 0 } return
            e(n, [{
                key: "init", value: function () {
                    !this.browser.supportsLinkPrefetch() || this.browser.isDataSaverModeOn() || this.browser.isSlowConnection() || (this.regex = {
                        excludeUris: RegExp(this.config.excludeUris, "i"), images: RegExp(".(" + this.config.imageExt +
                            ")$", "i"), fileExt: RegExp(".(" + this.config.fileExt + ")$", "i")
                    }, this._initListeners(this))
                }
            }, {
                key: "_initListeners", value: function (e) {
                    -1 < this.config.onHoverDelay && document.addEventListener("mouseover", e.listener.bind(e), e.listenerOptions), document.addEventListener(
                        "mousedown", e.listener.bind(e), e.listenerOptions), document.addEventListener("touchstart", e.listener.bind(e), e.listenerOptions)
                }
            }, {
                key: "listener", value: function (e) {
                    var t = e.target.closest("a"), n = this._prepareUrl(t); if (null !== n) switch (e.type) {
                        case
                            "mousedown": case "touchstart": this._addPrefetchLink(n); break; case "mouseover": this._earlyPrefetch(t, n, "mouseout")
                    }
                }
            }, {
                key: "_earlyPrefetch", value: function (t, e, n) {
                    var i = this, r = setTimeout(function () {
                        if (r = null, 0 === i.numOnHover) setTimeout(function () {
                            return
                            i.numOnHover = 0
                        }, 1e3); else if (i.numOnHover > i.config.rateThrottle) return; i.numOnHover++, i._addPrefetchLink(e)
                    }, this.config.onHoverDelay); t.addEventListener(n, function e() { t.removeEventListener(n, e, { passive: !0 }), null !== r && (clearTimeout(r), r = null) }, { passive: !0 })
                }
            }, {
                key: "_addPrefetchLink", value: function (i) {
                    return
                    this.prefetched.add(i.href), new Promise(function (e, t) { var n = document.createElement("link"); n.rel = "prefetch", n.href = i.href, n.onload = e, n.onerror = t, document.head.appendChild(n) }).catch(function () { })
                }
            }, {
                key: "_prepareUrl", value: function (e) {
                    if (null === e || "object" !== (void
                        0 === e ? "undefined" : r(e)) || !1 in e || -1 === ["http:", "https:"].indexOf(e.protocol)) return null; var t = e.href.substring(0, this.config.siteUrl.length), n = this._getPathname(e.href, t), i = { original: e.href, protocol: e.protocol, origin: t, pathname: n, href: t + n }; return
                    this._isLinkOk(i) ? i : null
                }
            }, { key: "_getPathname", value: function (e, t) { var n = t ? e.substring(this.config.siteUrl.length) : e; return n.startsWith("/") || (n = "/" + n), this._shouldAddTrailingSlash(n) ? n + "/" : n } }, {
                key: "_shouldAddTrailingSlash", value: function (e) {
                    return
                    this.config.usesTrailingSlash && !e.endsWith("/") && !this.regex.fileExt.test(e)
                }
            }, { key: "_isLinkOk", value: function (e) { return null !== e && "object" === (void 0 === e ? "undefined" : r(e)) && (!this.prefetched.has(e.href) && e.origin === this.config.siteUrl && -1 === e.href.indexOf("?") && -1 === e.href.indexOf("#") && !this.regex.excludeUris.test(e.href) && !this.regex.images.test(e.href)) } }], [{
                key: "run", value: function () {
                    "undefined" != typeof
                        RocketPreloadLinksConfig && new n(new RocketBrowserCompatibilityChecker({ capture: !0, passive: !0 }), RocketPreloadLinksConfig).init()
                }
            }]), n
        }(); t.run();
}());


var RocketPreloadLinksConfig = {
    "excludeUris": "/(?:.+/)?feed(?:/(?:.+/?)?)?$|/(?:.+/)?embed/|/(index.php/)?(.*)wp-json(/.*|$)|/refer/|/go/|/recommend/|/recommends/",
    "usesTrailingSlash": "1",
    "imageExt": "jpg|jpeg|gif|png|tiff|bmp|webp|avif|pdf|doc|docx|xls|xlsx|php",
    "fileExt": "jpg|jpeg|gif|png|tiff|bmp|webp|avif|pdf|doc|docx|xls|xlsx|php|html|htm",
    "siteUrl": "https://www.tresmarescapital.com/en/",
    "onHoverDelay": "100",
    "rateThrottle": "3"
};


"use strict"; var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i
            < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor) }
    } return
    function(Constructor, protoProps, staticProps) { return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor }
}(); function _classCallCheck(instance, Constructor) {
    if (!(instance
        instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
} var RocketBrowserCompatibilityChecker = function () {
    function RocketBrowserCompatibilityChecker(options) { _classCallCheck(this, RocketBrowserCompatibilityChecker), this.passiveSupported = !1, this._checkPassiveOption(this), this.options = !!this.passiveSupported && options } return
    _createClass(RocketBrowserCompatibilityChecker, [{
        key: "_checkPassiveOption", value: function (self) {
            try {
                var options = { get passive() { return !(self.passiveSupported = !0) } }; window.addEventListener("test", null, options), window.removeEventListener(
                    "test", null, options)
            } catch (err) { self.passiveSupported = !1 }
        }
    }, {
        key: "initRequestIdleCallback", value: function () {
            !1 in window && (window.requestIdleCallback = function (cb) {
                var start = Date.now(); return setTimeout(function () {
                    cb({
                        didTimeout: !1, timeRemaining: function () {
                            return
                            Math.max(0, 50 - (Date.now() - start))
                        }
                    })
                }, 1)
            }), !1 in window && (window.cancelIdleCallback = function (id) { return clearTimeout(id) })
        }
    }, { key: "isDataSaverModeOn", value: function () { return "connection" in navigator && !0 === navigator.connection.saveData } }, {
        key:
            "supportsLinkPrefetch", value: function () { var elem = document.createElement("link"); return elem.relList && elem.relList.supports && elem.relList.supports("prefetch") && window.IntersectionObserver && "isIntersecting" in IntersectionObserverEntry.prototype }
    }, {
        key:
            "isSlowConnection", value: function () { return "connection" in navigator && "effectiveType" in navigator.connection && ("2g" === navigator.connection.effectiveType || "slow-2g" === navigator.connection.effectiveType) }
    }]), RocketBrowserCompatibilityChecker
}();