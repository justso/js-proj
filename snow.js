/*
 New BSD License <http://creativecommons.org/licenses/BSD/>
*/
'use strict';
window.JSON || (window.JSON = {});
(function () {
    function c(b) {
        return 10 > b ? "0" + b : b
    }

    function l(b) {
        return d.lastIndex = 0,
        d.test(b) ? '"' + b.replace(d, function (b) {
            var a = j[b];
            return "string" == typeof a ? a : "\\u" + ("0000" + b.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + b + '"'
    }

    function k(b, i) {
        var a, c, d, j, g = h,
            f, e = i[b];
        e && "object" == typeof e && "function" == typeof e.toJSON && (e = e.toJSON(b));
        "function" == typeof m && (e = m.call(i, b, e));
        switch (typeof e) {
        case "string":
            return l(e);
        case "number":
            return isFinite(e) ? "" + e : "null";
        case "boolean":
        case "null":
            return "" + e;
        case "object":
            if (!e) return "null";
            h += o;
            f = [];
            if ("[object Array]" === Object.prototype.toString.apply(e)) {
                j = e.length;
                for (a = 0; a < j; a += 1) f[a] = k(a, e) || "null";
                return d = 0 === f.length ? "[]" : h ? "[\n" + h + f.join(",\n" + h) + "\n" + g + "]" : "[" + f.join(",") + "]",
                h = g,
                d
            }
            if (m && "object" == typeof m) {
                j = m.length;
                for (a = 0; a < j; a += 1) c = m[a],
                "string" == typeof c && (d = k(c, e), d && f.push(l(c) + (h ? ": " : ":") + d))
            } else for (c in e) Object.hasOwnProperty.call(e, c) && (d = k(c, e), d && f.push(l(c) + (h ? ": " : ":") + d));
            return d = 0 === f.length ? "{}" : h ? "{\n" + h + f.join(",\n" + h) + "\n" + g + "}" : "{" + f.join(",") + "}",
            h = g,
            d
        }
    }
    "use strict";
    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + c(this.getUTCMonth() + 1) + "-" + c(this.getUTCDate()) + "T" + c(this.getUTCHours()) + ":" + c(this.getUTCMinutes()) + ":" + c(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
        return this.valueOf()
    });
    var b = window.JSON,
        i = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        d = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        h, o, j = {
        "\u0008": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\u000c": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    },
        m;
    "function" != typeof b.stringify && (b.stringify = function (b, c, a) {
        var i;
        h = "";
        o = "";
        if ("number" == typeof a) for (i = 0; i < a; i += 1) o += " ";
        else "string" == typeof a && (o = a);
        m = c;
        if (!c || "function" == typeof c || "object" == typeof c && "number" == typeof c.length) return k("", {
            "": b
        });
        throw Error("JSON.stringify");
    });
    "function" != typeof b.parse && (b.parse = function (b, c) {
        function a(b, i) {
            var g, f, e = b[i];
            if (e && "object" == typeof e) for (g in e) Object.hasOwnProperty.call(e, g) && (f = a(e, g), void 0 !== f ? e[g] = f : delete e[g]);
            return c.call(b, i, e)
        }
        var d;
        b = "" + b;
        i.lastIndex = 0;
        i.test(b) && (b = b.replace(i, function (a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(b.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return d = eval("(" + b + ")"),
        "function" == typeof c ? a({
            "": d
        }, "") : d;
        throw new SyntaxError("JSON.parse");
    })
})();
(function (c, l) {
    var k = c.History = c.History || {},
        b = c.jQuery;
    if ("undefined" != typeof k.Adapter) throw Error("History.js Adapter has already been loaded...");
    k.Adapter = {
        bind: function (c, d, h) {
            b(c).bind(d, h)
        },
        trigger: function (c, d, h) {
            b(c).trigger(d, h)
        },
        extractEventData: function (b, c, h) {
            return c && c.originalEvent && c.originalEvent[b] || h && h[b] || l
        },
        onDomLoad: function (c) {
            b(c)
        }
    };
    "undefined" != typeof k.init && k.init()
})(window);
(function (c) {
    var l = c.document,
        k = c.setInterval || k,
        b = c.History = c.History || {};
    if ("undefined" != typeof b.initHtml4) throw Error("History.js HTML4 Support has already been loaded...");
    b.initHtml4 = function () {
        if ("undefined" != typeof b.initHtml4.initialized) return !1;
        b.initHtml4.initialized = !0;
        b.enabled = !0;
        b.savedHashes = [];
        b.isLastHash = function (c) {
            var d = b.getHashByIndex(),
                h;
            return h = c === d,
            h
        };
        b.saveHash = function (c) {
            return b.isLastHash(c) ? !1 : (b.savedHashes.push(c), !0)
        };
        b.getHashByIndex = function (b) {
            return null
        };
        b.discardedHashes = {};
        b.discardedStates = {};
        b.discardState = function (c, d, h) {
            var k = b.getHashByState(c),
                j;
            return j = {
                discardedState: c,
                backState: h,
                forwardState: d
            },
            b.discardedStates[k] = j,
            !0
        };
        b.discardHash = function (c, d, h) {
            return b.discardedHashes[c] = {
                discardedHash: c,
                backState: h,
                forwardState: d
            },
            !0
        };
        b.discardedState = function (c) {
            var c = b.getHashByState(c),
                d;
            return d = b.discardedStates[c] || !1,
            d
        };
        b.discardedHash = function (c) {
            return b.discardedHashes[c] || !1
        };
        b.recycleState = function (c) {
            var d = b.getHashByState(c);
            return b.discardedState(c) && delete b.discardedStates[d],
            !0
        };
        b.emulated.hashChange && (b.hashChangeInit = function () {
            b.checkerFunction = null;
            var i = "",
                d, h, o;
            return b.isInternetExplorer() ? (d = l.createElement("iframe"), d.setAttribute("id", "historyjs-iframe"), d.style.display = "none", l.body.appendChild(d), d.contentWindow.document.open(), d.contentWindow.document.close(), h = "", o = !1, b.checkerFunction = function () {
                if (o) return !1;
                o = !0;
                var j = b.getHash() || "",
                    m = b.unescapeHash(d.contentWindow.document.location.hash) || "";
                return j !== i ? (i = j, m !== j && (h = j, d.contentWindow.document.open(), d.contentWindow.document.close(), d.contentWindow.document.location.hash = b.escapeHash(j)), b.Adapter.trigger(c, "hashchange")) : m !== h && (h = m, b.setHash(m, !1)),
                o = !1,
                !0
            }) : b.checkerFunction = function () {
                var d = b.getHash();
                return d !== i && (i = d, b.Adapter.trigger(c, "hashchange")),
                !0
            },
            b.intervalList.push(k(b.checkerFunction, b.options.hashChangeInterval)),
            !0
        }, b.Adapter.onDomLoad(b.hashChangeInit));
        b.emulated.pushState && (b.onHashChange = function (i) {
            var i = b.getHashByUrl(i && i.newURL || l.location.href),
                d = null,
                h;
            return b.isLastHash(i) ? (b.busy(!1), !1) : (b.doubleCheckComplete(), b.saveHash(i), i && b.isTraditionalAnchor(i) ? (b.Adapter.trigger(c, "anchorchange"), b.busy(!1), !1) : (d = b.extractState(b.getFullUrl(i || l.location.href, !1), !0), b.isLastSavedState(d) ? (b.busy(!1), !1) : (b.getHashByState(d), h = b.discardedState(d), h ? (b.getHashByIndex(-2) === b.getHashByState(h.forwardState) ? b.back(!1) : b.forward(!1), !1) : (b.pushState(d.data, d.title, d.url, !1), !0))))
        }, b.Adapter.bind(c, "hashchange", b.onHashChange), b.pushState = function (i, d, h, k) {
            if (b.getHashByUrl(h)) throw Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (!1 !== k && b.busy()) return b.pushQueue({
                scope: b,
                callback: b.pushState,
                args: arguments,
                queue: k
            }),
            !1;
            b.busy(!0);
            var j = b.createStateObject(i, d, h),
                m = b.getHashByState(j),
                n = b.getState(!1),
                n = b.getHashByState(n),
                q = b.getHash();
            return b.storeState(j),
            b.expectedStateId = j.id,
            b.recycleState(j),
            b.setTitle(j),
            m === n ? (b.busy(!1), !1) : m !== q && m !== b.getShortUrl(l.location.href) ? (b.setHash(m, !1), !1) : (b.saveState(j), b.Adapter.trigger(c, "statechange"), b.busy(!1), !0)
        }, b.replaceState = function (c, d, h, k) {
            if (b.getHashByUrl(h)) throw Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (!1 !== k && b.busy()) return b.pushQueue({
                scope: b,
                callback: b.replaceState,
                args: arguments,
                queue: k
            }),
            !1;
            b.busy(!0);
            var j = b.createStateObject(c, d, h),
                m = b.getState(!1),
                n = b.getStateByIndex(-2);
            return b.discardState(m, j, n),
            b.pushState(j.data, j.title, j.url, !1),
            !0
        });
        b.emulated.pushState && b.getHash() && !b.emulated.hashChange && b.Adapter.onDomLoad(function () {
            b.Adapter.trigger(c, "hashchange")
        })
    };
    "undefined" != typeof b.init && b.init()
})(window);
(function (c, l) {
    var k = c.console || l,
        b = c.document,
        i = c.navigator,
        d = c.sessionStorage || !1,
        h = c.setTimeout,
        o = c.clearTimeout,
        j = c.setInterval,
        m = c.clearInterval,
        n = c.JSON,
        q = c.alert,
        a = c.History = c.History || {},
        r = c.history;
    n.stringify = n.stringify || n.encode;
    n.parse = n.parse || n.decode;
    if ("undefined" != typeof a.init) throw Error("History.js Core has already been loaded...");
    a.init = function () {
        return "undefined" == typeof a.Adapter ? !1 : ("undefined" != typeof a.initCore && a.initCore(), "undefined" != typeof a.initHtml4 && a.initHtml4(), !0)
    };
    a.initCore = function () {
        if ("undefined" != typeof a.initCore.initialized) return !1;
        a.initCore.initialized = !0;
        a.options = a.options || {};
        a.options.hashChangeInterval = a.options.hashChangeInterval || 100;
        a.options.safariPollInterval = a.options.safariPollInterval || 500;
        a.options.doubleCheckInterval = a.options.doubleCheckInterval || 500;
        a.options.storeInterval = a.options.storeInterval || 1E3;
        a.options.busyDelay = a.options.busyDelay || 250;
        a.options.debug = a.options.debug || !1;
        a.options.initialTitle = a.options.initialTitle || b.title;
        a.intervalList = [];
        a.clearAllIntervals = function () {
            var g, b = a.intervalList;
            if ("undefined" != typeof b && null !== b) {
                for (g = 0; g < b.length; g++) m(b[g]);
                a.intervalList = null
            }
        };
        a.debug = function () {
            a.options.debug && a.log.apply(a, arguments)
        };
        a.log = function () {
            var a = "undefined" != typeof k && "undefined" != typeof k.log && "undefined" != typeof k.log.apply,
                f = b.getElementById("log"),
                e, c, d, h;
            a ? (c = Array.prototype.slice.call(arguments), e = c.shift(), "undefined" != typeof k.debug ? k.debug.apply(k, [e, c]) : k.log.apply(k, [e, c])) : e = "\n" + arguments[0] + "\n";
            for (c = 1, d = arguments.length; c < d; ++c) {
                h = arguments[c];
                if ("object" == typeof h && "undefined" != typeof n) try {
                    h = n.stringify(h)
                } catch (j) {}
                e += "\n" + h + "\n"
            }
            return f ? (f.value += e + "\n-----\n", f.scrollTop = f.scrollHeight - f.clientHeight) : a || q(e),
            !0
        };
        a.getInternetExplorerMajorVersion = function () {
            var g = a.getInternetExplorerMajorVersion,
                f;
            if ("undefined" != typeof a.getInternetExplorerMajorVersion.cached) f = a.getInternetExplorerMajorVersion.cached;
            else {
                f = 3;
                for (var e = b.createElement("div"), c = e.getElementsByTagName("i");
                (e.innerHTML = "<\!--[if gt IE " + ++f + "]><i></i><![endif]--\>") && c[0];);
                f = 4 < f ? f : !1
            }
            return g.cached = f
        };
        a.isInternetExplorer = function () {
            return a.isInternetExplorer.cached = "undefined" != typeof a.isInternetExplorer.cached ? a.isInternetExplorer.cached : Boolean(a.getInternetExplorerMajorVersion())
        };
        a.emulated = {
            pushState: !Boolean(c.history && c.history.pushState && c.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)),
            hashChange: Boolean(!("onhashchange" in c || "onhashchange" in b) || a.isInternetExplorer() && 8 > a.getInternetExplorerMajorVersion())
        };
        a.enabled = !a.emulated.pushState;
        a.bugs = {
            setHash: Boolean(!a.emulated.pushState && "Apple Computer, Inc." === i.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
            safariPoll: Boolean(!a.emulated.pushState && "Apple Computer, Inc." === i.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
            ieDoubleCheck: Boolean(a.isInternetExplorer() && 8 > a.getInternetExplorerMajorVersion()),
            hashEscape: Boolean(a.isInternetExplorer() && 7 > a.getInternetExplorerMajorVersion())
        };
        a.isEmptyObject = function (a) {
            for (var b in a) return !1;
            return !0
        };
        a.cloneObject = function (a) {
            var b, e;
            return a ? (b = n.stringify(a), e = n.parse(b)) : e = {},
            e
        };
        a.getRootUrl = function () {
            var a = b.location.protocol + "//" + (b.location.hostname || b.location.host);
            b.location.port && (a += ":" + b.location.port);
            return a += "/",
            a
        };
        a.getBaseHref = function () {
            var a = b.getElementsByTagName("base"),
                f = "";
            return 1 === a.length && (f = null.href.replace(/[^\/]+$/, "")),
            f = f.replace(/\/+$/, ""),
            f && (f += "/"),
            f
        };
        a.getBaseUrl =

        function () {
            return a.getBaseHref() || a.getBasePageUrl() || a.getRootUrl()
        };
        a.getPageUrl = function () {
            var g;
            return g = ((a.getState(!1, !1) || {}).url || b.location.href).replace(/\/+$/, "").replace(/[^\/]+$/, function (a) {
                return /\./.test(a) ? a : a + "/"
            }),
            g
        };
        a.getBasePageUrl = function () {
            return b.location.href.replace(/[#\?].*/, "").replace(/[^\/]+$/, function (a) {
                return /[^\/]$/.test(a) ? "" : a
            }).replace(/\/+$/, "") + "/"
        };
        a.getFullUrl = function (g, b) {
            var e = g,
                c = g.substring(0, 1);
            return b = "undefined" == typeof b ? !0 : b,
            /[a-z]+\:\/\//.test(g) || ("/" === c ? e = a.getRootUrl() + g.replace(/^\/+/, "") : "#" === c ? e = a.getPageUrl().replace(/#.*/, "") + g : "?" === c ? e = a.getPageUrl().replace(/[\?#].*/, "") + g : b ? e = a.getBaseUrl() + g.replace(/^(\.\/)+/, "") : e = a.getBasePageUrl() + g.replace(/^(\.\/)+/, "")),
            e.replace(/\#$/, "")
        };
        a.getShortUrl = function (g) {
            var b = a.getBaseUrl(),
                e = a.getRootUrl();
            return a.emulated.pushState && (g = g.replace(b, "")),
            g = g.replace(e, "/"),
            a.isTraditionalAnchor(g) && (g = "./" + g),
            g = g.replace(/^(\.\/)+/g, "./").replace(/\#$/, ""),
            g
        };
        a.store = {};
        a.idToState = a.idToState || {};
        a.stateToId = a.stateToId || {};
        a.urlToId = a.urlToId || {};
        a.storedStates = a.storedStates || [];
        a.savedStates = a.savedStates || [];
        a.normalizeStore = function () {
            a.store.idToState = a.store.idToState || {};
            a.store.urlToId = a.store.urlToId || {};
            a.store.stateToId = a.store.stateToId || {}
        };
        a.getState = function (g, b) {
            "undefined" == typeof g && (g = !0);
            "undefined" == typeof b && (b = !0);
            var e = a.getLastSavedState();
            return !e && b && (e = a.createStateObject()),
            g && (e = a.cloneObject(e), e.url = e.cleanUrl || e.url),
            e
        };
        a.getIdByState = function (b) {
            var f =
            a.extractId(b.url),
                e;
            if (!f) if (e = a.getStateString(b), "undefined" != typeof a.stateToId[e]) f = a.stateToId[e];
            else if ("undefined" != typeof a.store.stateToId[e]) f = a.store.stateToId[e];
            else {
                for (; !(f = (new Date).getTime() + ("" + Math.random()).replace(/\D/g, ""), "undefined" == typeof a.idToState[f] && "undefined" == typeof a.store.idToState[f]););
                a.stateToId[e] = f;
                a.idToState[f] = b
            }
            return f
        };
        a.normalizeState = function (g) {
            var f;
            if (!g || "object" != typeof g) g = {};
            if ("undefined" != typeof g.normalized) return g;
            if (!g.data || "object" != typeof g.data) g.data = {};
            f = {};
            f.normalized = !0;
            f.title = g.title || "";
            f.url = a.getFullUrl(a.unescapeString(g.url || b.location.href));
            f.hash = a.getShortUrl(f.url);
            f.data = a.cloneObject(g.data);
            f.id = a.getIdByState(f);
            f.cleanUrl = f.url.replace(/\??\&_suid.*/, "");
            f.url = f.cleanUrl;
            g = !a.isEmptyObject(f.data);
            if (f.title || g) f.hash = a.getShortUrl(f.url).replace(/\??\&_suid.*/, ""),
            /\?/.test(f.hash) || (f.hash += "?"),
            f.hash += "&_suid=" + f.id;
            return f.hashedUrl = a.getFullUrl(f.hash),
            (a.emulated.pushState || a.bugs.safariPoll) && a.hasUrlDuplicate(f) && (f.url = f.hashedUrl),
            f
        };
        a.createStateObject = function (b, f, e) {
            b = {
                data: b,
                title: f,
                url: e
            };
            return b = a.normalizeState(b),
            b
        };
        a.getStateById = function (b) {
            b = "" + b;
            return a.idToState[b] || a.store.idToState[b] || l
        };
        a.getStateString = function (b) {
            var f, e, c;
            return f = a.normalizeState(b),
            e = {
                data: f.data,
                title: b.title,
                url: b.url
            },
            c = n.stringify(e),
            c
        };
        a.getStateId = function (b) {
            var f, e;
            return f = a.normalizeState(b),
            e = f.id,
            e
        };
        a.getHashByState = function (b) {
            var f, e;
            return f = a.normalizeState(b),
            e = f.hash,
            e
        };
        a.extractId =

        function (a) {
            var b, e;
            return e = /(.*)\&_suid=([0-9]+)$/.exec(a),
            b = e ? "" + (e[2] || "") : "",
            b || !1
        };
        a.isTraditionalAnchor = function (a) {
            return !/[\/\?\.]/.test(a)
        };
        a.extractState = function (b, f) {
            var e = null,
                c, d;
            return f = f || !1,
            c = a.extractId(b),
            c && (e = a.getStateById(c)),
            e || (d = a.getFullUrl(b), c = a.getIdByUrl(d) || !1, c && (e = a.getStateById(c)), !e && f && !a.isTraditionalAnchor(b) && (e = a.createStateObject(null, null, d))),
            e
        };
        a.getIdByUrl = function (b) {
            return a.urlToId[b] || a.store.urlToId[b] || l
        };
        a.getLastSavedState = function () {
            return a.savedStates[a.savedStates.length - 1] || l
        };
        a.getLastStoredState = function () {
            return a.storedStates[a.storedStates.length - 1] || l
        };
        a.hasUrlDuplicate = function (b) {
            var f = !1,
                c;
            return c = a.extractState(b.url),
            f = c && c.id !== b.id,
            f
        };
        a.storeState = function (b) {
            return a.urlToId[b.url] = b.id,
            a.storedStates.push(a.cloneObject(b)),
            b
        };
        a.isLastSavedState = function () {
            return a.savedStates.length && a.getLastSavedState(),
            !1
        };
        a.saveState = function (b) {
            return a.isLastSavedState(b) ? !1 : (a.savedStates.push(a.cloneObject(b)), !0)
        };
        a.getStateByIndex = function (a) {
            return null
        };
        a.getHash = function () {
            return a.unescapeHash(b.location.hash)
        };
        a.unescapeString = function (a) {
            for (var b;;) {
                b = c.unescape(a);
                if (b === a) break;
                a = b
            }
            return a
        };
        a.unescapeHash = function (b) {
            b = a.normalizeHash(b);
            return b = a.unescapeString(b),
            b
        };
        a.normalizeHash = function (a) {
            return a.replace(/[^#]*#/, "").replace(/#.*/, "")
        };
        a.setHash = function (g, c) {
            var e, d, h;
            return !1 !== c && a.busy() ? (a.pushQueue({
                scope: a,
                callback: a.setHash,
                args: arguments,
                queue: c
            }), !1) : (e = a.escapeHash(g), a.busy(!0), d = a.extractState(g, !0), d && !a.emulated.pushState ? a.pushState(d.data, d.title, d.url, !1) : b.location.hash !== e && (a.bugs.setHash ? (h = a.getPageUrl(), a.pushState(null, null, h + "#" + e, !1)) : b.location.hash = e), a)
        };
        a.escapeHash = function (b) {
            b = a.normalizeHash(b);
            return b = c.escape(b),
            a.bugs.hashEscape || (b = b.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")),
            b
        };
        a.getHashByUrl = function (b) {
            b = ("" + b).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
            return b = a.unescapeHash(b),
            b
        };
        a.setTitle = function (c) {
            var f = c.title,
                e;
            f || (e = a.getStateByIndex(0), e && e.url === c.url && (f = e.title || a.options.initialTitle));
            try {
                b.getElementsByTagName("title")[0].innerHTML = f.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
            } catch (d) {}
            return b.title = f,
            a
        };
        a.queues = [];
        a.busy = function (b) {
            "undefined" != typeof b ? a.busy.flag = b : "undefined" == typeof a.busy.flag && (a.busy.flag = !1);
            if (!a.busy.flag) {
                o(a.busy.timeout);
                var c = function () {
                    var b, g, d;
                    if (!a.busy.flag) for (b = a.queues.length - 1; 0 <= b; --b) g = a.queues[b],
                    0 !== g.length && (d = g.shift(), a.fireQueueItem(d), a.busy.timeout =
                    h(c, a.options.busyDelay))
                };
                a.busy.timeout = h(c, a.options.busyDelay)
            }
            return a.busy.flag
        };
        a.busy.flag = !1;
        a.fireQueueItem = function (b) {
            return b.callback.apply(b.scope || a, b.args || [])
        };
        a.pushQueue = function (b) {
            return a.queues[b.queue || 0] = a.queues[b.queue || 0] || [],
            a.queues[b.queue || 0].push(b),
            a
        };
        a.queue = function (b, c) {
            return "function" == typeof b && (b = {
                callback: b
            }),
            "undefined" != typeof c && (b.queue = c),
            a.busy() ? a.pushQueue(b) : a.fireQueueItem(b),
            a
        };
        a.clearQueue = function () {
            return a.busy.flag = !1,
            a.queues = [],
            a
        };
        a.stateChanged = !1;
        a.doubleChecker = !1;
        a.doubleCheckComplete = function () {
            return a.stateChanged = !0,
            a.doubleCheckClear(),
            a
        };
        a.doubleCheckClear = function () {
            return a.doubleChecker && (o(a.doubleChecker), a.doubleChecker = !1),
            a
        };
        a.doubleCheck = function (b) {
            return a.stateChanged = !1,
            a.doubleCheckClear(),
            a.bugs.ieDoubleCheck && (a.doubleChecker = h(function () {
                return a.doubleCheckClear(),
                a.stateChanged || b(),
                !0
            }, a.options.doubleCheckInterval)),
            a
        };
        a.safariStatePoll = function () {
            var g = a.extractState(b.location.href);
            if (!a.isLastSavedState(g)) return g || a.createStateObject(),
            a.Adapter.trigger(c, "popstate"),
            a
        };
        a.back = function (b) {
            return !1 !== b && a.busy() ? (a.pushQueue({
                scope: a,
                callback: a.back,
                args: arguments,
                queue: b
            }), !1) : (a.busy(!0), a.doubleCheck(function () {
                a.back(!1)
            }), r.go(-1), !0)
        };
        a.forward = function (b) {
            return !1 !== b && a.busy() ? (a.pushQueue({
                scope: a,
                callback: a.forward,
                args: arguments,
                queue: b
            }), !1) : (a.busy(!0), a.doubleCheck(function () {
                a.forward(!1)
            }), r.go(1), !0)
        };
        a.go = function (b, c) {
            var e;
            if (0 < b) for (e = 1; e <= b; ++e) a.forward(c);
            else {
                if (!(0 > b)) throw Error("History.go: History.go requires a positive or negative integer passed.");
                for (e = -1; e >= b; --e) a.back(c)
            }
            return a
        };
        if (a.emulated.pushState) {
            var A = function () {};
            a.pushState = a.pushState || A;
            a.replaceState = a.replaceState || A
        } else a.onPopState = function (g, f) {
            var e = !1,
                d = !1,
                h, j;
            return a.doubleCheckComplete(),
            h = a.getHash(),
            h ? (j = a.extractState(h || b.location.href, !0), j ? a.replaceState(j.data, j.title, j.url, !1) : (a.Adapter.trigger(c, "anchorchange"), a.busy(!1)), a.expectedStateId = !1, !1) : (e = a.Adapter.extractEventData("state", g, f) || !1, e ? d = a.getStateById(e) : a.expectedStateId ? d = a.getStateById(a.expectedStateId) : d = a.extractState(b.location.href), d || (d = a.createStateObject(null, null, b.location.href)), a.expectedStateId = !1, a.isLastSavedState(d) ? (a.busy(!1), !1) : (a.storeState(d), a.saveState(d), a.setTitle(d), a.Adapter.trigger(c, "statechange"), a.busy(!1), !0))
        },
        a.Adapter.bind(c, "popstate", a.onPopState),
        a.pushState = function (b, f, e, d) {
            if (a.getHashByUrl(e) && a.emulated.pushState) throw Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (!1 !== d && a.busy()) return a.pushQueue({
                scope: a,
                callback: a.pushState,
                args: arguments,
                queue: d
            }),
            !1;
            a.busy(!0);
            var h = a.createStateObject(b, f, e);
            return a.isLastSavedState(h) ? a.busy(!1) : (a.storeState(h), a.expectedStateId = h.id, r.pushState(h.id, h.title, h.url), a.Adapter.trigger(c, "popstate")),
            !0
        },
        a.replaceState = function (b, f, e, d) {
            if (a.getHashByUrl(e) && a.emulated.pushState) throw Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (!1 !== d && a.busy()) return a.pushQueue({
                scope: a,
                callback: a.replaceState,
                args: arguments,
                queue: d
            }),
            !1;
            a.busy(!0);
            var h = a.createStateObject(b, f, e);
            return a.isLastSavedState(h) ? a.busy(!1) : (a.storeState(h), a.expectedStateId = h.id, r.replaceState(h.id, h.title, h.url), a.Adapter.trigger(c, "popstate")),
            !0
        };
        if (d) {
            try {
                a.store = n.parse(d.getItem("History.store")) || {}
            } catch (s) {
                a.store = {}
            }
            a.normalizeStore()
        } else a.store = {},
        a.normalizeStore();
        a.Adapter.bind(c, "beforeunload", a.clearAllIntervals);
        a.Adapter.bind(c, "unload", a.clearAllIntervals);
        a.saveState(a.storeState(a.extractState(b.location.href, !0)));
        d && (a.onUnload =

        function () {
            var b, c;
            try {
                b = n.parse(d.getItem("History.store")) || {}
            } catch (e) {
                b = {}
            }
            b.idToState = b.idToState || {};
            b.urlToId = b.urlToId || {};
            b.stateToId = b.stateToId || {};
            for (c in a.idToState) a.idToState.hasOwnProperty(c) && (b.idToState[c] = a.idToState[c]);
            for (c in a.urlToId) a.urlToId.hasOwnProperty(c) && (b.urlToId[c] = a.urlToId[c]);
            for (c in a.stateToId) a.stateToId.hasOwnProperty(c) && (b.stateToId[c] = a.stateToId[c]);
            a.store = b;
            a.normalizeStore();
            d.setItem("History.store", n.stringify(b))
        }, a.intervalList.push(j(a.onUnload, a.options.storeInterval)), a.Adapter.bind(c, "beforeunload", a.onUnload), a.Adapter.bind(c, "unload", a.onUnload));
        if (!a.emulated.pushState && (a.bugs.safariPoll && a.intervalList.push(j(a.safariStatePoll, a.options.safariPollInterval)), "Apple Computer, Inc." === i.vendor || "Mozilla" === (i.appCodeName || ""))) a.Adapter.bind(c, "hashchange", function () {
            a.Adapter.trigger(c, "popstate")
        }),
        a.getHash() && a.Adapter.onDomLoad(function () {
            a.Adapter.trigger(c, "hashchange")
        })
    };
    a.init()
})(window);
var home = function () {
    return {
        init: function (c, l) {
            function k(c) {
                var d = $(".overlay"),
                    k = $("body"),
                    l = $('<div class="modal"><a href="#" class="modal-close fr">close</a><div class="modal-loading"><em>loading...</em></div></div>'),
                    a = $(document).scrollTop();
                o = !0;
                d.length && d.remove();
                d = $('<div class="overlay"></div>').height(k.height());
                l.css("margin-top", 400 > a ? 400 : a + 200);
                d.append(l);
                k.append(d);
                $(".modal-close").click(function (a) {
                    i();
                    a.preventDefault()
                });
                l.click(function (a) {
                    a.stopPropagation()
                });
                d.bind("click", i);
                $(document).bind("keyup", b);
                $.ajax({
                    url: "/hat",
                    data: {
                        id: c
                    },
                    dataType: "json",
                    success: function (a) {
                        $(".modal-loading").replaceWith(a.html);
                        h(c)
                    }
                })
            }

            function b(b) {
                27 == b.which && i()
            }

            function i() {
                History.pushState({}, window.document.title, "/")
            }

            function d() {
                o = !1;
                $(".overlay").fadeOut("fast", function () {
                    $(this).remove()
                });
                $(document).unbind("keyup", b)
            }

            function h() {
                $(".join-winter-bash").click(function (b) {
                    $(".gotta-join").html("<em>Joining...</em>");
                    $.ajax({
                        type: "POST",
                        url: "/join",
                        data: {
                            fkey: fkey
                        },
                        dataType: "json",
                        complete: function () {
                            $(".gotta-join").html("<em>Joined!</em>")
                        }
                    });
                    b.preventDefault()
                })
            }
            var o = !1;
            History.Adapter.bind(window, "statechange", function () {
                var b = History.getState(),
                    c = b.data.hatId,
                    b = b.data.slug;
                d();
                c && k(c, b)
            });
            $(".box").click(function (b) {
                var c = parseInt(this.id.substring(4), 10),
                    d = $(this).attr("href").substring(1);
                History.pushState({
                    hatId: c,
                    slug: d
                }, window.document.title, d);
                b.stopPropagation();
                b.preventDefault()
            });
            c && l && (History.replaceState({
                hatId: c,
                slug: l
            }, window.document.title, l), o || setTimeout(function () {
                k(c, l)
            }, 500))
        }
    }
}();
(function () {
    function c() {
        var a = null;
        0.03 > Math.random() && (a = $("<canvas width=25 height=27 />"), a[0].getContext("2d").drawImage(G, 25 * - (5 * Math.random() | 0), 0));
        var b = new n(null, a);
        a && (b.rotate = !0);
        return b
    }

    function l(a) {
        m("/content/img/flakes.png", function (b) {
            G = b;
            for (b = 0; b < f; b++) t.push(c());
            a()
        })
    }

    function k() {
        $("<img src='/content/img/snowlogo.png' />").css({
            position: "absolute",
            left: 735,
            top: 140
        }).prependTo("section.wrapper")
    }

    function b() {
        $(w).css("background", "url(/content/img/snow-flakes.png)")
    }

    function i() {
        m("/content/img/logoshape.png", function (a, b, c) {
            b = $("<canvas width=" + b + " height=" + c + " style='display: none;' />")[0].getContext("2d");
            b.drawImage(a, 0, 0);
            b.getImageData(0, 0, 158, 158);
            d(b).done(function (a) {
                for (var b = 0; b < a.length; b++) {
                    var c = a[b],
                        e = c.canvas,
                        d = b / a.length;
                    0.5 > d ? d = Math.sqrt(2 * d) / 2 : (d = 1 - d, d = Math.sqrt(2 * d) / 2, d = 1 - d);
                    t.push(new n({
                        x: (719 + c.x) / p,
                        y: (133 + c.y) / p,
                        time: 7 + 20 * d
                    }, $(e)))
                }
            })
        })
    }

    function d(a) {
        function b() {
            do {
                if (!r) return !1;
                p = 2 * p % m;
                p === o && (r = !1);
                q = p - (p / 3 | 0)
            } while (q > l);
            q === l && (q = 0);
            return !0
        }

        function c() {
            for (var d = v(), g = !0; b();) {
                s =
                q % i;
                t = q / i | 0;
                var x = h(n, s, t, 6, i);
                if (!(3 > x)) {
                    var l = x - 0.5,
                        x = j(l),
                        l = Math.ceil(l),
                        m = {
                        canvas: x,
                        x: s,
                        y: t
                    };
                    f.push(m);
                    if (!u || u.y < m.y) u = m;
                    a.drawImage(x, m.x - l, m.y - l);
                    n = a.getImageData(0, 0, i, k)
                }
                if (100 < v() - d) {
                    setTimeout(c, 100);
                    g = !1;
                    break
                }
            }
            g && e()
        }

        function e() {
            f.sort(function (a, b) {
                return (a.x - u.x) * (a.x - u.x) + (a.y - u.y) * (a.y - u.y) - ((b.x - u.x) * (b.x - u.x) + (b.y - u.y) * (b.y - u.y))
            });
            d.resolve(f)
        }
        var d = $.Deferred(),
            f = [],
            g = a.canvas,
            i = g.width,
            k = g.height,
            l = i * k,
            n = a.getImageData(0, 0, i, k),
            g = Math.ceil(Math.log(l / 2) / Math.log(3)) + 1,
            m = Math.pow(3, g),
            o = Math.random() * m | 0;
        0 === o % 3 && o++;
        var p = o,
            q, r = !0,
            s, t, u;
        c();
        return d
    }

    function h(a, b, c, d, e) {
        function f(b, c) {
            return 0 === a.data[4 * (c * e + b)]
        }
        for (var g = 0; g <= d; g++) {
            Math.sqrt(g);
            for (var h = -g; h <= g; h++) if (!f(b + g, c + h) || !f(b - g, c + h) || !f(b + h, c + g) || !f(b + h, c - g)) return g - 1
        }
        return d
    }

    function o() {
        function a(d) {
            var e = Math.min(d - b, 100);
            b = d;
            y.clearRect(-300, 0, w.width, w.height);
            for (var f, g = 0, h = 0; h < t.length; h++) d = t[h],
            d.step(e),
            f && !d.target && (g += Math.abs(d.p[0] - f.p[0]) + Math.abs(d.p[1] - f.p[1])),
            f = d,
            d.draw(y),
            d.p[1] > 500 / p && !d.target && (t[h] = c());
            if (300 <= t.length && 2E3 > g && !C) {
                B[0] = s(0, 0, 1, 2, 0);
                e = D - 120 / p;
                f = 200 / p;
                d = 420 / p - E;
                for (g = 0; g < H.length; g++) h = H[g],
                h = new n({
                    x: e + h[0] / p,
                    y: f + h[1] / p,
                    time: d + g / 40
                }, $(j(h[2], "255,196,255"))),
                t.push(h);
                C = !0
            }
            I(a)
        }
        var b = v();
        I(function (c) {
            b = c - (v() - b);
            a(c)
        })
    }

    function j(a, b) {
        var c = 0.8 + 0.2 * Math.random(),
            d = Math.random() * Math.PI,
            e = Math.ceil(a),
            f = 2 * e + 1,
            f = $("<canvas width=" + f + " height=" + f + " />")[0],
            g = f.getContext("2d");
        g.translate(e, e);
        g.rotate(d);
        g.scale(c, 1);
        g.fillStyle = "rgba(" + (b || "255,255,255") + "," + (0.4 + 0.4 * Math.random()) + ")";
        g.beginPath();
        g.arc(0, 0, a, 0, 2 * Math.PI);
        g.closePath();
        g.fill();
        return f
    }

    function m(a, b) {
        var c = $("<img />").attr("src", a).css({
            position: "absolute",
            opacity: 0
        }).appendTo("body"),
            d = c[0],
            e = function () {
            var a = d.naturalWidth || d.width,
                e = d.naturalHeight || d.height;
            c.remove();
            b(d, a, e)
        };
        d.complete || "complete" == d.readyState ? e() : d.onload = e
    }

    function n(a, b) {
        this.temp = -4 * Math.random();
        this.Vmax_z = 0.5 + Math.random();
        this.t = 0;
        this.tdelay = 10 * Math.random();
        a ? (this.p = [a.x - 0 + 0 * Math.random(),
                                    a.y - a.time * this.Vmax_z - 0 * Math.random()], this.target = a, this.tdelay = -a.time) : this.p = [(1560 * Math.random() - 300) / p, 500 * Math.random() / p - 500 / p];
        this.V = [0, this.Vmax_z];
        this.D = -0.061 < this.temp ? 0.04 : 0.015 * Math.pow(-this.temp, - 0.35);
        this.rho = (-1 >= this.temp ? 0.17 : 0.724) / this.D;
        this.R = 2 * Math.random();
        this.omega = (0.25 + 0.08 * Math.random()) * Math.PI * (0.5 < Math.random() ? 1 : - 1);
        this.lastTotalV = 0;
        if (b) this.div = b;
        else {
            var c = 30 * Math.sqrt(this.D) + 1;
            this.div = $(j(c))
        }
        this.pixelWidth = this.div[0].width;
        this.pixelHeight = this.div[0].height;
        this.m = this.rho * this.D * this.D;
        this.dragFactor = this.m * J / (this.Vmax_z * this.Vmax_z);
        this.draw(y)
    }

    function q(a, b) {
        return [a[0] + b[0], a[1] + b[1]]
    }

    function a(a, b) {
        return [a * b[0], a * b[1]]
    }

    function r(a) {
        return a[0] * a[0] + a[1] * a[1]
    }

    function A() {
        $(document).on("mousemove", function (a) {
            var b = a.ctrlKey && F && !C;
            D = (a.pageX - $("#snow").offset().left) / p;
            E = (a.pageY - $("#snow").offset().top) / p;
            B[0] = s(D, E, 0.1, 3, b ? 3 : - 2)
        })
    }

    function s(b, c, d, e, f) {
        return function (g, h) {
            var i = [b - g, c - h];
            if (Math.abs(i[0]) > e || Math.abs(i[1]) > e) return [0, 0];
            var j = Math.sqrt(r(i));
            if (j > e || j < d) return [0, 0];
            i = a(1 / j, i);
            j = (j - d) / (e - d);
            j = Math.sin(Math.PI * j);
            return a(f * j, i)
        }
    }
    var g, f, e, F, t = [],
        p = 50,
        w, y, G, C, H = [[80, 207, 3], [83, 201, 3], [71, 202, 3], [73, 196, 3], [69, 188, 4], [66, 180, 3], [110, 185, 4], [105, 178, 3], [62, 172, 4], [119, 198, 3], [96, 168, 3], [102, 171, 3], [121, 192, 3], [65, 165, 3], [87, 160, 3], [95, 160, 3], [84, 154, 3], [66, 154, 3], [56, 156, 3], [75, 150, 3], [83, 147, 4], [61, 144, 3], [86, 140, 3], [105, 144, 3], [112, 142, 3], [94, 135, 3], [120, 144, 3], [60, 135, 3], [88, 132, 3], [127, 146, 3], [157, 196, 4], [160,
                        207, 3], [158, 188, 4], [156, 180, 3], [135, 146, 3], [142, 146, 3], [167, 207, 3], [56, 123, 3], [164, 182, 3], [163, 173, 5], [158, 160, 3], [162, 167, 3], [150, 145, 3], [144, 137, 3], [53, 115, 3], [166, 159, 3], [173, 170, 3], [163, 150, 3], [54, 109, 3], [158, 142, 3], [179, 173, 3], [169, 148, 3], [165, 140, 4], [37, 107, 3], [31, 109, 3], [183, 167, 3], [57, 98, 3], [22, 110, 4], [43, 99, 3], [186, 160, 3], [16, 109, 3], [178, 142, 3], [102, 91, 3], [95, 89, 3], [185, 150, 4], [170, 128, 3], [113, 91, 3], [67, 87, 3], [78, 86, 3], [85, 86, 3], [61, 87, 3], [10, 106, 3], [119, 90, 3], [167, 119, 3], [54, 86, 3], [177,
                        129, 3], [27, 92, 3], [183, 133, 3], [37, 86, 3], [65, 79, 3], [134, 88, 4], [194, 142, 3], [4, 98, 3], [180, 116, 3], [58, 73, 3], [50, 74, 3], [131, 77, 3], [181, 109, 3], [1, 89, 3], [143, 79, 4], [180, 102, 3], [126, 67, 3], [8, 78, 3], [178, 96, 3], [147, 71, 3], [122, 59, 3], [150, 65, 3], [176, 81, 5], [126, 53, 3], [176, 73, 3], [132, 50, 3], [155, 57, 3], [141, 48, 3], [174, 63, 5], [198, 80, 3], [183, 66, 3], [190, 71, 3], [160, 51, 3], [141, 41, 3], [147, 43, 3], [196, 73, 3], [167, 51, 3], [205, 77, 3], [132, 29, 4], [209, 70, 3], [143, 27, 3], [169, 38, 3], [206, 61, 3], [202, 54, 3], [154, 25, 3], [198, 44, 3], [157,
                        19, 3], [195, 32, 4], [179, 20, 3], [165, 13, 3], [195, 26, 3], [203, 31, 3], [172, 12, 3], [179, 12, 3], [185, 14, 4], [202, 23, 3], [209, 27, 3], [209, 20, 3], [216, 24, 3], [218, 16, 4], [226, 16, 3], [231, 11, 3]],
        v = Date.now ||
    function () {
        return (new Date).getTime()
    },
        K = 0,
        z = function (a) {
        return window[a + (a ? "R" : "r") + "equestAnimationFrame"]
    },
        I = z("") || z("webkit") || z("moz") || z("o") || z("ms") ||
    function (a) {
        var b = v(),
            c = b - K;
        K = b;
        setTimeout(function () {
            a(v())
        }, 40 - c % 40)
    };
    home.snow = function () {
        if ($("<canvas />")[0].getContext) {
            for (var a = $("<canvas width=500 height=500 />").css("display", "none").appendTo("body"), c = a[0].getContext("2d"), d = j(5), h = 0, m = v(); 100 > v() - m;) c.drawImage(d, 500 * Math.random(), 500 * Math.random()),
            h++;
            a.remove();
            g = h / 15 | 0;
            e = 200 < g;
            F = 600 < g;
            f = Math.max(0, Math.min(300, e ? g - 120 : g));
            w = $("#snowcanvas")[0];
            y = w.getContext("2d");
            y.translate(300, 0);
            e ? i() : k();
            50 > f ? b() : (l(o), A())
        } else $("#snowcanvas").remove(),
        w = $("<div id='snowcanvas' />").appendTo("#snow"),
        k(),
        b()
    };
    var J = 9.81;
    n.prototype = {
        step: function (b) {
            var b = b / 1E3,
                c;
            c = this.p[0];
            for (var d = this.p[1], e = 0, f = 0, g, h = 0; h < B.length; h++) g =
            B[h](c, d),
            e += g[0],
            f += g[1];
            c = [e, f];
            e = q(c, a(-1, this.V));
            d = [Math.sqrt(r(e)) / Math.sqrt(r(this.V)) * this.omega * this.R * - Math.sin(this.omega * (this.t + this.tdelay)), 0];
            e = a(Math.sqrt(r(e)) * this.dragFactor, e);
            e = a(1 / this.m, q([0, J * this.m], e));
            this.lastTotalV = q(this.V, d);
            d = q(a(b, this.lastTotalV), a(0.5 * b * b, e));
            this.p = q(this.p, d);
            this.V = 100 < e[0] ? c : q(a(b, e), this.V);
            this.t += b
        },
        draw: function (b) {
            var c = this.p,
                d;
            if (this.target) {
                if (this.t >= this.target.time) c = [this.target.x, this.target.y];
                else if (!(this.t < this.target.time - 5)) {
                    d = (this.target.time - this.t) / 5;
                    var e = [this.target.x, this.target.y - (this.target.time - this.t) * this.Vmax_z],
                        c = q(a(d, c), a(1 - d, e))
                }
                d = c[0] * p - this.pixelWidth / 2 | 0;
                c = c[1] * p - this.pixelHeight / 2 | 0
            } else d = c[0] * p - this.pixelWidth / 2,
            c = c[1] * p - this.pixelHeight / 2;
            this.rotate && 600 < g ? (b.save(), b.translate(d, c), b.rotate(this.lastTotalV[0] / 2), b.drawImage(this.div[0], - this.pixelWidth / 2, - this.pixelHeight / 2), b.restore()) : b.drawImage(this.div[0], d, c)
        }
    };
    var B = [s(0, 0, 1, 2, 0), s(12, 2, 1, 5, - 0.1), s(10, 9, 1, 4, - 0.1), s(4, 7, 1, 4, 0.1)],
        D, E
})();
