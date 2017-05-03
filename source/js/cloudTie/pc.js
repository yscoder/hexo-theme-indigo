var Tie = window.Tie || {};
!function () {
    Tie.define = window.define,
        window.define = void 0
}(),
    !function (e) {
        "function" == typeof define && window.define.amd ? window.define([], e) : e()
    }(function () {
        var e = {}
            , t = {}
            , n = {}
            , i = {}
            , o = []
            , r = 0;
        Function.prototype.bind || (Function.prototype.bind = function (e) {
            if ("function" != typeof this)
                throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            var t = Array.prototype.slice.call(arguments, 1)
                , n = this
                , i = function () { }
                , o = function () {
                    return n.apply(this instanceof i && e ? this : e, t.concat(Array.prototype.slice.call(arguments)))
                };
            return i.prototype = this.prototype,
                o.prototype = new i,
                o
        }
        );
        var a = function (e, t, n) {
            window.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent("on" + t, n)
        }
            , s = function (e, t, n) {
                window.removeEventListener ? e.removeEventListener(t, n) : e.detachEvent("on" + t, n)
            }
            , c = function (e) {
                return e = e || "",
                    e.replace(/\:\/\/([^\/]+)/, function (e) {
                        return e + "/b"
                    })
            }
            , l = []
            , u = function (e) {
                var t = ""
                    , i = n[e];
                return i.__coverBackground && v("animation") && (t = i.__coverBackground.indexOf("background:") != -1 ? i.__coverBackground : ""),
                    "position:fixed;_position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;background:rgb(0,0,0); filter:progid:DXImageTransform.Microsoft.Alpha(opacity=60);-moz-opacity:0.6;-khtml-opacity:0.6;opacity:0.6;z-index:1000;" + t
            }
            , d = function (e, t) {
                return "position:fixed;_position:absolute;z-index:10000;left:50%;top:50%;width:" + e + "px;margin-left:-" + e / 2 + "px;height:" + t + "px;margin-top:-" + t / 2 + "px;"
            }
            , p = function (e) {
                var t = n[e]
                    , i = null;
                return t.__iframeShowAnimation && (i = "-webkit-animation:" + t.__iframeShowAnimation + ";-moz-animation:" + t.__iframeShowAnimation + ";-ms-animation:" + t.__iframeShowAnimation + ";-o-animation:" + t.__iframeShowAnimation + ";animation:" + t.__iframeShowAnimation + ";"),
                    "width:100%;height:100%;border:none;background:none;" + (i ? i : "")
            }
            , h = function () {
                var e = setInterval(function () {
                    for (var t = 0; t < o.length; t++)
                        if (o[t].readyDone) {
                            e = clearInterval(e),
                                o.shift(),
                                f(1);
                            break
                        }
                }, 200)
            }
            , f = function (e) {
                if (e || !r) {
                    r = 1;
                    var t = setInterval(function () {
                        for (var e = 0; e < o.length; e++)
                            if (!o[e].readyDone) {
                                t = clearInterval(t),
                                    b.call(o[e]),
                                    h();
                                break
                            }
                    }, 200)
                }
            }
            , g = function (e, t, i) {
                var r = i.id
                    , a = "x-URS-iframe" + r
                    , s = n[r]
                    , c = document.getElementById(a)
                    , l = s._name || "";
                if (!c) {
                    try {
                        c = document.createElement('<iframe  name="' + l + '" allowTransparency=true ></iframe>')
                    } catch (h) {
                        c = document.createElement("iframe"),
                            c.allowTransparency = !0,
                            c.name = l
                    }
                    c.frameBorder = 0,
                        c.id = a,
                        c.scrolling = "no",
                        c.style.cssText = p(r)
                }
                if (t)
                    e.appendChild(c);
                else {
                    var g = 420
                        , m = 408;
                    s.frameSize && (g = s.frameSize.width,
                        m = s.frameSize.height);
                    var v = document.getElementById("x-discover" + r);
                    v || (v = document.createElement("div"),
                        v.id = "x-discover" + r,
                        v.style.cssText = u(r));
                    var y = document.getElementById("x-panel" + r);
                    y || (y = document.createElement("div"),
                        y.id = "x-panel" + r,
                        s._panel = y,
                        y.style.cssText = d(g, m)),
                        y.appendChild(c),
                        e.appendChild(v),
                        e.appendChild(y),
                        e.style.display = "none"
                }
                window.postMessage || (o.push(this),
                    f(0))
            }
            , m = function (e) {
                var t = "x-URS-iframe" + this.MGID
                    , n = document.getElementById(t);
                this._options && this._options.afterSetIframeSrc && this._options.afterSetIframeSrc(n),
                    window.setTimeout(function () {
                        this.__loadTime = (new Date).getTime(),
                            this._url_cache.indexOf("?") == -1 ? this._url_cache += "?pkid=" + (this._options.promark || "") + "&product=" + (this._options.product || "") : this._url_cache += "&pkid=" + (this._options.promark || "") + "&product=" + (this._options.product || ""),
                            n.src = this._url_cache
                    }
                        .bind(this), 0),
                    this.sto = clearTimeout(this.sto),
                    window._$needUrsBgp && 1 != e && (this.sto = setTimeout(function () {
                        this.sto = clearTimeout(this.sto),
                            this._url_cache.indexOf("webzj.reg.163.com") >= 0 && (this._url_cache = this._url_cache.replace("webzj.reg.163.com", "webzj2.reg.163.com"),
                                this._url_cache = this._url_cache.replace(/wdaId=([^&]+)/, "wdaId=UA1482833332087"),
                                m.call(this, 1))
                    }
                        .bind(this), 1e4))
            }
            , v = function (e) {
                var t, n = ["webkit", "Moz", "ms", "o"], i = [], o = document.documentElement.style, r = function (e) {
                    return e.replace(/-(\w)/g, function (e, t) {
                        return t.toUpperCase()
                    })
                };
                for (t in n)
                    i.push(r(n[t] + "-" + e));
                i.push(r(e));
                for (t in i)
                    if (i[t] in o)
                        return !0;
                return !1
            }
            , y = function (e, t) {
                var n = document.getElementById("x-URS-iframe" + e)
                    , i = window.name || "_parent"
                    , o = {};
                o.data = t,
                    o.data.from = "URS|",
                    o.origin = "*",
                    o.source = i,
                    o.data.loadTime = (new Date).getTime() - this.__loadTime,
                    x(n.contentWindow, o)
            }
            , b = function () {
                y.call(this, this.MGID, this._urs_options)
            }
            , w = function () {
                var e = /^([\w]+?:\/\/.*?(?=\/|$))/i;
                return function (t) {
                    return t = t || "",
                        e.test(t) ? RegExp.$1 : "*"
                }
            }()
            , T = function (e, t) {
                try {
                    return t = t.toLowerCase(),
                        null === e ? "null" == t : void 0 === e ? "undefined" == t : Object.prototype.toString.call(e).toLowerCase() == "[object " + t + "]"
                } catch (n) {
                    return !1
                }
            }
            , I = function (e, t, n) {
                if (!e)
                    return "";
                var i = [];
                for (var o in e)
                    if (e.hasOwnProperty(o)) {
                        var r = e[o];
                        r && (T(r, "function") || (T(r, "date") ? r = r.getTime() : T(r, "array") ? r = r.join(",") : T(r, "object") && (r = JSON.stringify(r)),
                            n && (r = encodeURIComponent(r)),
                            i.push(encodeURIComponent(o) + "=" + r)))
                    }
                return i.join(t || ",")
            }
            , x = function () {
                var e = "MSG|"
                    , t = function (t) {
                        var n = {};
                        return t = t || {},
                            n.origin = t.origin || "",
                            n.ref = location.href,
                            n.self = t.source,
                            n.data = JSON.stringify(t.data),
                            e + I(n, "|", !0)
                    };
                return function (e, n) {
                    window.postMessage ? (n = n || {},
                        e.postMessage(JSON.stringify(n.data), w(n.origin))) : l.unshift({
                            w: e,
                            d: escape(t(n))
                        })
                }
            }()
            , k = function () {
                var e = navigator.appName;
                if ("Netscape" == e) {
                    var t = window.open("about:blank", "_self");
                    t.opener = null,
                        t.close()
                } else
                    "Microsoft Internet Explorer" == e && (window.opener = null,
                        window.open("", "_self"),
                        window.close())
            };
        return window.URS = function () {
            var o = function () {
                var e = (new Date).getTime() + Math.random();
                return i[e] ? o() : (i[e] = e,
                    e)
            }
                , r = function (e) {
                    this._options = e,
                        e.needUrsBgp && "1" == e.needUrsBgp && (window._$needUrsBgp = 1),
                        this.MGID = o(),
                        n[this.MGID] = {},
                        this._$COM_NUM = 1 == this._$COM_NUM ? 1 : 2;
                    var t = n[this.MGID];
                    t.frameSize = e.frameSize,
                        t.__coverBackground = e.coverBackground,
                        t.__iframeShowAnimation = e.iframeShowAnimation,
                        window.PTDOM = 0 != e.isHttps ? "https://" : "http://",
                        e.cssDomain && e.cssFiles && (t.__cssStr = "cd=" + e.cssDomain + "&cf=" + e.cssFiles,
                            t.__cssStr.indexOf("http://") != -1 && (window.PTDOM = "http://"),
                            t.__cssStr = encodeURIComponent(t.__cssStr)),
                        this.isInclude = 0,
                        e.includeBox && ("string" == typeof e.includeBox ? this.isInclude = document.getElementById(e.includeBox) || 0 : this.isInclude = e.includeBox),
                        t.needPrepare = e.needPrepare || 0,
                        "string" == typeof e.eventType && (this._type = e.eventType),
                        "string" == typeof e.bid ? this._btn = document.getElementById(e.bid) : this._btn = e.bid,
                        e.logincb && (this.logincb = e.logincb),
                        e.closecb && (this.closecb = e.closecb),
                        e.regcb && (this.regcb = e.regcb),
                        e.loginCheckLock && (this.loginCheckLock = e.loginCheckLock),
                        e.regCheckLock && (this.regCheckLock = e.regCheckLock),
                        e.initReady && (this.initReady = e.initReady),
                        e.statecb && (this.statecb = e.statecb),
                        e.resize && (this.resize = e.resize),
                        e.changepage && (this.changepage = e.changepage),
                        e.loginstate && (this.loginstate = e.loginstate),
                        e.otherRegSuccess && (this.otherRegSuccess = e.otherRegSuccess);
                    var i = document.createElement("div");
                    i.id = "x-URS" + this.MGID,
                        document.body.appendChild(i),
                        this.box = i;
                    var r = "index.html";
                    e.single && (r = "index_dl.html",
                        "register" == e.page && (r = "index_reg.html"));
                    var s = e.crossDomainUrl || "webzj.reg.163.com/v1.0.1/pub/";
                    this._url_cache = window.PTDOM + s + r,
                        e.pathB && (this._url_cache = c(this._url_cache)),
                        t.__cssStr ? this._url_cache += "?" + t.__cssStr + "&MGID=" + this.MGID + "&wdaId=" + (e.wdaId || "") : this._url_cache += "?MGID=" + this.MGID + "&wdaId=" + (e.wdaId || ""),
                        this._urs_options = e || {};
                    try {
                        JSON.stringify(this._urs_options)
                    } catch (l) {
                        return null
                    }
                    this.isInclude ? this.includeBox = this.isInclude : this._btn && this._type && a(this._btn, this._type, this.showIframe.bind(this))
                }
                , u = function (e) {
                    e && (e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0)
                }
                , d = function (t) {
                    u(t);
                    var n = t.data || "{}";
                    if ("string" == typeof n)
                        try {
                            n = JSON.parse(n)
                        } catch (i) {
                            n = {}
                        }
                    e[n.MGID] && e[n.MGID]({
                        data: n,
                        origin: w(t.origin)
                    })
                }
                , p = function (e) {
                    var i, o, r, a = e.data;
                    if (a) {
                        if ("string" == typeof a)
                            try {
                                a = JSON.parse(a)
                            } catch (c) {
                                a = {}
                            }
                        if (a.MGID)
                            if (i = t[a.MGID],
                                o = n[a.MGID],
                                r = i.isInclude ? i.includeBox : o._panel,
                                a["URS-READY-DONE"] && (i.readyDone = 1,
                                    i.sto = clearTimeout(i.sto),
                                    i.initReady && i.initReady()),
                                a["URS-READY"] && (i.ursReady = 1),
                                !window.postMessage || !a["URS-READY"] || !i.isInclude && o.needPrepare)
                                if (a["URS-READY"] && !o._initReady && (o._initReady = !0),
                                    a["URS-CM-STATE"])
                                    i.statecb && i.statecb(a["URS-CM-STATENAME"], a["URS-CM-STATE"]);
                                else if (a && a.fromOutLogin && !a.toOpener) {
                                    try {
                                        window.opener.$outLogin(a)
                                    } catch (c) { }
                                    setTimeout(function () {
                                        k()
                                    }, 200)
                                } else
                                    "otherRegSuccess" == a.type ? i.otherRegSuccess && i.otherRegSuccess(a) : "success" == a.type ? (i.logincb && i.logincb(a.username, a.isOther, a),
                                        this.isInclude || (i._btn && i._type && s(i._btn, i._type, i.showIframe.bind(i)),
                                            i.closeIframe())) : "close" == a.type ? (i.closecb && i.closecb(),
                                                i.closeIframe()) : "resize" == a.type || "init" == a.type ? (r.style.width = a.width + "px",
                                                    r.style.height = a.height + "px",
                                                    i.isInclude || (r.style.marginLeft = -1 * a.width / 2 + "px"),
                                                    i.resize && i.resize(a)) : "register-success" == a.type ? i.regcb && i.regcb(a.username, a.url) : "lockLoginState" == a.type ? i.loginCheckLock && i.loginCheckLock(a.value) : "lockRegState" == a.type ? i.regCheckLock && i.regCheckLock(a.value) : "changepage" == a.type ? i.changepage && i.changepage(a.page) : "loginstate" == a.type && i.loginstate && i.loginstate(a);
                            else
                                b.call(i)
                    }
                }
                , h = function () {
                    var e = "MSG|"
                        , t = function (e, t) {
                            for (var n, i = T(t, "function") ? t : function (e) {
                                return e === t
                            }
                                , o = null, r = 0, a = e.length - 1; r < a; r++)
                                n = e[r],
                                    i(n) && (o = r);
                            return null != o ? o : -1
                        }
                        , n = function () {
                            var e, n = function (n, i, o) {
                                t(e, n.w) < 0 && (e.push(n.w),
                                    o.splice(i, 1),
                                    n.w.name = n.d)
                            };
                            return function () {
                                if (e = [],
                                    l && l.length)
                                    for (var t, i = l.length; i--; i >= 0)
                                        t = l[i],
                                            n(t, i, l);
                                e = null
                            }
                        }()
                        , i = function () {
                            var t = unescape(window.name || "");
                            if (t && 0 == t.indexOf(e)) {
                                window.name = "";
                                for (var n = t.replace(e, ""), i = n.split("|"), o = i.length, r = {}, a = 0; a < o; a++) {
                                    var s = i[a].split("=");
                                    if (!s || !s.length)
                                        return;
                                    var c = s.shift();
                                    if (!c)
                                        return;
                                    r[decodeURIComponent(c)] = decodeURIComponent(s.join("="))
                                }
                                n = r;
                                var l = (n.origin || "").toLowerCase();
                                l && "*" != l && 0 != location.href.toLowerCase().indexOf(l) || p({
                                    data: n.data || "null",
                                    origin: w(n.ref || document.referrer)
                                })
                            }
                        };
                    return function () {
                        setInterval(n, 100),
                            setInterval(i, 20)
                    }
                }()
                , f = function () {
                    window.__hasRun || (window.postMessage ? a(window, "message", d) : h(),
                        window.__hasRun = 1)
                };
            return function (i) {
                r.call(this, i);
                var o = n[this.MGID];
                return (o.needPrepare || this.isInclude) && this.prepareIframe(),
                    e[this.MGID] = p.bind(this),
                    t[this.MGID] = this,
                    f()
            }
        }(),
            window.URS.prototype.prepareIframe = function () {
                this.isInclude ? (g.call(this, this.includeBox, 1, {
                    id: this.MGID
                }),
                    m.call(this),
                    this.showIframe()) : (g.call(this, this.box, 0, {
                        id: this.MGID
                    }),
                        m.call(this))
            }
            ,
            window.URS.prototype.showIframe = function (e) {
                var t = n[this.MGID];
                if (!this.isInclude)
                    if (t.needPrepare) {
                        if (!t._initReady)
                            return
                    } else
                        g.call(this, this.box, 0, {
                            id: this.MGID
                        }),
                            m.call(this);
                if (e = e || {},
                    e.page) {
                    if (e.page != this._urs_options.page && this._urs_options.single) {
                        var i = "index_dl.html";
                        "register" == e.page && (i = "index_reg.html"),
                            this._url_cache = window.PTDOM + "webzj.reg.163.com/v1.0.1/pub/" + i,
                            e.pathB && (this._url_cache = c(this._url_cache)),
                            t.__cssStr ? this._url_cache += "?" + t.__cssStr + "&MGID=" + this.MGID : this._url_cache += "?MGID=" + this.MGID
                    }
                    m.call(this),
                        this._urs_options.page = e.page
                }
                t.needPrepare && !this.isInclude && b.call(this),
                    this.box.style.display = "block",
                    this._options.afterShow && this._options.afterShow.call(this)
            }
            ,
            window.URS.prototype.closeIframe = function () {
                var e = n[this.MGID];
                if (!this.isInclude && (this.box.style.display = "none",
                    m.call(this),
                    !e.needPrepare)) {
                    if (navigator.userAgent.indexOf("MSIE") > 0) {
                        var t = document.getElementById("x-URS-iframe" + this.MGID)
                            , i = t.contentWindow;
                        if (t) {
                            t.src = "about:blank";
                            try {
                                i.document.write(""),
                                    i.document.clear()
                            } catch (o) { }
                        }
                        var r = document.getElementById("x-panel" + this.MGID);
                        r.removeChild(t),
                            window.CollectGarbage()
                    }
                    this.box.innerHTML = ""
                }
            }
            ,
            window.URS.prototype.loginUnlock = function () {
                var e = {
                    fromLoginLock: 1,
                    lock: 0
                };
                y.call(this, this.MGID, e)
            }
            ,
            window.URS.prototype.loginDolock = function () {
                var e = {
                    fromLoginLock: 1,
                    lock: 1
                };
                y.call(this, this.MGID, e)
            }
            ,
            window.URS.prototype.regUnlock = function () {
                var e = {
                    fromRegLock: 1,
                    lock: 0
                };
                y.call(this, this.MGID, e)
            }
            ,
            window.URS.prototype.regDolock = function () {
                var e = {
                    fromRegLock: 1,
                    lock: 1
                };
                y.call(this, this.MGID, e)
            }
            ,
            window.URS.prototype.doLoginProxy = function (e) {
                var t = {
                    username: e.username,
                    pwd: e.pwd,
                    defaultUnLogin: e.defaultUnLogin,
                    doLoginProxy: 1
                };
                y.call(this, this.MGID, t)
            }
            ,
            window.URS
    }),
    function () {
        function e(t, i) {
            function r(e) {
                if (r[e] !== m)
                    return r[e];
                var t;
                if ("bug-string-char-index" == e)
                    t = "a" != "a"[0];
                else if ("json" == e)
                    t = r("json-stringify") && r("json-parse");
                else {
                    var n;
                    if ("json-stringify" == e) {
                        t = i.stringify;
                        var o = "function" == typeof t && y;
                        if (o) {
                            (n = function () {
                                return 1
                            }
                            ).toJSON = n;
                            try {
                                o = "0" === t(0) && "0" === t(new a) && '""' == t(new s) && t(v) === m && t(m) === m && t() === m && "1" === t(n) && "[1]" == t([n]) && "[null]" == t([m]) && "null" == t(null) && "[null,null,null]" == t([m, v, null]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == t({
                                    a: [n, !0, !1, null, "\0\b\n\f\r\t"]
                                }) && "1" === t(null, n) && "[\n 1,\n 2\n]" == t([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == t(new l((-864e13))) && '"+275760-09-13T00:00:00.000Z"' == t(new l(864e13)) && '"-000001-01-01T00:00:00.000Z"' == t(new l((-621987552e5))) && '"1969-12-31T23:59:59.999Z"' == t(new l((-1)))
                            } catch (c) {
                                o = !1
                            }
                        }
                        t = o
                    }
                    if ("json-parse" == e) {
                        if (t = i.parse,
                            "function" == typeof t)
                            try {
                                if (0 === t("0") && !t(!1)) {
                                    n = t('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                                    var u = 5 == n.a.length && 1 === n.a[0];
                                    if (u) {
                                        try {
                                            u = !t('"\t"')
                                        } catch (d) { }
                                        if (u)
                                            try {
                                                u = 1 !== t("01")
                                            } catch (p) { }
                                        if (u)
                                            try {
                                                u = 1 !== t("1.")
                                            } catch (h) { }
                                    }
                                }
                            } catch (f) {
                                u = !1
                            }
                        t = u
                    }
                }
                return r[e] = !!t
            }
            t || (t = o.Object()),
                i || (i = o.Object());
            var a = t.Number || o.Number
                , s = t.String || o.String
                , c = t.Object || o.Object
                , l = t.Date || o.Date
                , u = t.SyntaxError || o.SyntaxError
                , d = t.TypeError || o.TypeError
                , p = t.Math || o.Math
                , h = t.JSON || o.JSON;
            "object" == typeof h && h && (i.stringify = h.stringify,
                i.parse = h.parse);
            var f, g, m, c = c.prototype, v = c.toString, y = new l((-0xc782b5b800cec));
            try {
                y = -109252 == y.getUTCFullYear() && 0 === y.getUTCMonth() && 1 === y.getUTCDate() && 10 == y.getUTCHours() && 37 == y.getUTCMinutes() && 6 == y.getUTCSeconds() && 708 == y.getUTCMilliseconds()
            } catch (b) { }
            if (!r("json")) {
                var w = r("bug-string-char-index");
                if (!y)
                    var T = p.floor
                        , I = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
                        , x = function (e, t) {
                            return I[t] + 365 * (e - 1970) + T((e - 1969 + (t = +(1 < t))) / 4) - T((e - 1901 + t) / 100) + T((e - 1601 + t) / 400)
                        };
                if ((f = c.hasOwnProperty) || (f = function (e) {
                    var t, n = {};
                    return (n.__proto__ = null,
                        n.__proto__ = {
                            toString: 1
                        },
                        n).toString != v ? f = function (e) {
                            var t = this.__proto__;
                            return e = e in (this.__proto__ = null,
                                this),
                                this.__proto__ = t,
                                e
                        }
                        : (t = n.constructor,
                            f = function (e) {
                                var n = (this.constructor || t).prototype;
                                return e in this && !(e in n && this[e] === n[e])
                            }
                        ),
                        n = null,
                        f.call(this, e)
                }
                ),
                    g = function (e, t) {
                        var i, o, r, a = 0;
                        (i = function () {
                            this.valueOf = 0
                        }
                        ).prototype.valueOf = 0,
                            o = new i;
                        for (r in o)
                            f.call(o, r) && a++;
                        return i = o = null,
                            a ? g = 2 == a ? function (e, t) {
                                var n, i = {}, o = "[object Function]" == v.call(e);
                                for (n in e)
                                    o && "prototype" == n || f.call(i, n) || !(i[n] = 1) || !f.call(e, n) || t(n)
                            }
                                : function (e, t) {
                                    var n, i, o = "[object Function]" == v.call(e);
                                    for (n in e)
                                        o && "prototype" == n || !f.call(e, n) || (i = "constructor" === n) || t(n);
                                    (i || f.call(e, n = "constructor")) && t(n)
                                }
                                : (o = "valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "),
                                    g = function (e, t) {
                                        var i, r = "[object Function]" == v.call(e), a = !r && "function" != typeof e.constructor && n[typeof e.hasOwnProperty] && e.hasOwnProperty || f;
                                        for (i in e)
                                            r && "prototype" == i || !a.call(e, i) || t(i);
                                        for (r = o.length; i = o[--r]; a.call(e, i) && t(i))
                                            ;
                                    }
                                ),
                            g(e, t)
                    }
                    ,
                    !r("json-stringify")) {
                    var k = {
                        92: "\\\\",
                        34: '\\"',
                        8: "\\b",
                        12: "\\f",
                        10: "\\n",
                        13: "\\r",
                        9: "\\t"
                    }
                        , _ = function (e, t) {
                            return ("000000" + (t || 0)).slice(-e)
                        }
                        , S = function (e) {
                            for (var t = '"', n = 0, i = e.length, o = !w || 10 < i, r = o && (w ? e.split("") : e); n < i; n++) {
                                var a = e.charCodeAt(n);
                                switch (a) {
                                    case 8:
                                    case 9:
                                    case 10:
                                    case 12:
                                    case 13:
                                    case 34:
                                    case 92:
                                        t += k[a];
                                        break;
                                    default:
                                        if (32 > a) {
                                            t += "\\u00" + _(2, a.toString(16));
                                            break
                                        }
                                        t += o ? r[n] : e.charAt(n)
                                }
                            }
                            return t + '"'
                        }
                        , C = function (e, t, n, i, o, r, a) {
                            var s, c, l, u, p, h, y, b, w;
                            try {
                                s = t[e]
                            } catch (I) { }
                            if ("object" == typeof s && s)
                                if (c = v.call(s),
                                    "[object Date]" != c || f.call(s, "toJSON"))
                                    "function" == typeof s.toJSON && ("[object Number]" != c && "[object String]" != c && "[object Array]" != c || f.call(s, "toJSON")) && (s = s.toJSON(e));
                                else if (s > -1 / 0 && s < 1 / 0) {
                                    if (x) {
                                        for (u = T(s / 864e5),
                                            c = T(u / 365.2425) + 1970 - 1; x(c + 1, 0) <= u; c++)
                                            ;
                                        for (l = T((u - x(c, 0)) / 30.42); x(c, l + 1) <= u; l++)
                                            ;
                                        u = 1 + u - x(c, l),
                                            p = (s % 864e5 + 864e5) % 864e5,
                                            h = T(p / 36e5) % 24,
                                            y = T(p / 6e4) % 60,
                                            b = T(p / 1e3) % 60,
                                            p %= 1e3
                                    } else
                                        c = s.getUTCFullYear(),
                                            l = s.getUTCMonth(),
                                            u = s.getUTCDate(),
                                            h = s.getUTCHours(),
                                            y = s.getUTCMinutes(),
                                            b = s.getUTCSeconds(),
                                            p = s.getUTCMilliseconds();
                                    s = (0 >= c || 1e4 <= c ? (0 > c ? "-" : "+") + _(6, 0 > c ? -c : c) : _(4, c)) + "-" + _(2, l + 1) + "-" + _(2, u) + "T" + _(2, h) + ":" + _(2, y) + ":" + _(2, b) + "." + _(3, p) + "Z"
                                } else
                                    s = null;
                            if (n && (s = n.call(t, e, s)),
                                null === s)
                                return "null";
                            if (c = v.call(s),
                                "[object Boolean]" == c)
                                return "" + s;
                            if ("[object Number]" == c)
                                return s > -1 / 0 && s < 1 / 0 ? "" + s : "null";
                            if ("[object String]" == c)
                                return S("" + s);
                            if ("object" == typeof s) {
                                for (e = a.length; e--;)
                                    if (a[e] === s)
                                        throw d();
                                if (a.push(s),
                                    w = [],
                                    t = r,
                                    r += o,
                                    "[object Array]" == c) {
                                    for (l = 0,
                                        e = s.length; l < e; l++)
                                        c = C(l, s, n, i, o, r, a),
                                            w.push(c === m ? "null" : c);
                                    e = w.length ? o ? "[\n" + r + w.join(",\n" + r) + "\n" + t + "]" : "[" + w.join(",") + "]" : "[]"
                                } else
                                    g(i || s, function (e) {
                                        var t = C(e, s, n, i, o, r, a);
                                        t !== m && w.push(S(e) + ":" + (o ? " " : "") + t)
                                    }),
                                        e = w.length ? o ? "{\n" + r + w.join(",\n" + r) + "\n" + t + "}" : "{" + w.join(",") + "}" : "{}";
                                return a.pop(),
                                    e
                            }
                        };
                    i.stringify = function (e, t, i) {
                        var o, r, a, s;
                        if (n[typeof t] && t)
                            if ("[object Function]" == (s = v.call(t)))
                                r = t;
                            else if ("[object Array]" == s) {
                                a = {};
                                for (var c, l = 0, u = t.length; l < u; c = t[l++],
                                    s = v.call(c),
                                    ("[object String]" == s || "[object Number]" == s) && (a[c] = 1))
                                    ;
                            }
                        if (i)
                            if ("[object Number]" == (s = v.call(i))) {
                                if (0 < (i -= i % 1))
                                    for (o = "",
                                        10 < i && (i = 10); o.length < i; o += " ")
                                        ;
                            } else
                                "[object String]" == s && (o = 10 >= i.length ? i : i.slice(0, 10));
                        return C("", (c = {},
                            c[""] = e,
                            c), r, a, o, "", [])
                    }
                }
                if (!r("json-parse")) {
                    var N, D, M = s.fromCharCode, j = {
                        92: "\\",
                        34: '"',
                        47: "/",
                        98: "\b",
                        116: "\t",
                        110: "\n",
                        102: "\f",
                        114: "\r"
                    }, O = function () {
                        throw N = D = null,
                        u()
                    }, L = function () {
                        for (var e, t, n, i, o, r = D, a = r.length; N < a;)
                            switch (o = r.charCodeAt(N)) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    N++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    return e = w ? r.charAt(N) : r[N],
                                        N++ ,
                                        e;
                                case 34:
                                    for (e = "@",
                                        N++; N < a;)
                                        if (o = r.charCodeAt(N),
                                            32 > o)
                                            O();
                                        else if (92 == o)
                                            switch (o = r.charCodeAt(++N)) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    e += j[o],
                                                        N++;
                                                    break;
                                                case 117:
                                                    for (t = ++N,
                                                        n = N + 4; N < n; N++)
                                                        o = r.charCodeAt(N),
                                                            48 <= o && 57 >= o || 97 <= o && 102 >= o || 65 <= o && 70 >= o || O();
                                                    e += M("0x" + r.slice(t, N));
                                                    break;
                                                default:
                                                    O()
                                            }
                                        else {
                                            if (34 == o)
                                                break;
                                            for (o = r.charCodeAt(N),
                                                t = N; 32 <= o && 92 != o && 34 != o;)
                                                o = r.charCodeAt(++N);
                                            e += r.slice(t, N)
                                        }
                                    if (34 == r.charCodeAt(N))
                                        return N++ ,
                                            e;
                                    O();
                                default:
                                    if (t = N,
                                        45 == o && (i = !0,
                                            o = r.charCodeAt(++N)),
                                        48 <= o && 57 >= o) {
                                        for (48 == o && (o = r.charCodeAt(N + 1),
                                            48 <= o && 57 >= o) && O(); N < a && (o = r.charCodeAt(N),
                                                48 <= o && 57 >= o); N++)
                                            ;
                                        if (46 == r.charCodeAt(N)) {
                                            for (n = ++N; n < a && (o = r.charCodeAt(n),
                                                48 <= o && 57 >= o); n++)
                                                ;
                                            n == N && O(),
                                                N = n
                                        }
                                        if (o = r.charCodeAt(N),
                                            101 == o || 69 == o) {
                                            for (o = r.charCodeAt(++N),
                                                43 != o && 45 != o || N++ ,
                                                n = N; n < a && (o = r.charCodeAt(n),
                                                    48 <= o && 57 >= o); n++)
                                                ;
                                            n == N && O(),
                                                N = n
                                        }
                                        return +r.slice(t, N)
                                    }
                                    if (i && O(),
                                        "true" == r.slice(N, N + 4))
                                        return N += 4,
                                            !0;
                                    if ("false" == r.slice(N, N + 5))
                                        return N += 5,
                                            !1;
                                    if ("null" == r.slice(N, N + 4))
                                        return N += 4,
                                            null;
                                    O()
                            }
                        return "$"
                    }, A = function (e) {
                        var t, n;
                        if ("$" == e && O(),
                            "string" == typeof e) {
                            if ("@" == (w ? e.charAt(0) : e[0]))
                                return e.slice(1);
                            if ("[" == e) {
                                for (t = []; e = L(),
                                    "]" != e; n || (n = !0))
                                    n && ("," == e ? (e = L(),
                                        "]" == e && O()) : O()),
                                        "," == e && O(),
                                        t.push(A(e));
                                return t
                            }
                            if ("{" == e) {
                                for (t = {}; e = L(),
                                    "}" != e; n || (n = !0))
                                    n && ("," == e ? (e = L(),
                                        "}" == e && O()) : O()),
                                        "," != e && "string" == typeof e && "@" == (w ? e.charAt(0) : e[0]) && ":" == L() || O(),
                                        t[e.slice(1)] = A(L());
                                return t
                            }
                            O()
                        }
                        return e
                    }, z = function (e, t, n) {
                        n = E(e, t, n),
                            n === m ? delete e[t] : e[t] = n
                    }, E = function (e, t, n) {
                        var i, o = e[t];
                        if ("object" == typeof o && o)
                            if ("[object Array]" == v.call(o))
                                for (i = o.length; i--;)
                                    z(o, i, n);
                            else
                                g(o, function (e) {
                                    z(o, e, n)
                                });
                        return n.call(e, t, o)
                    };
                    i.parse = function (e, t) {
                        var n, i;
                        return N = 0,
                            D = "" + e,
                            n = A(L()),
                            "$" != L() && O(),
                            N = D = null,
                            t && "[object Function]" == v.call(t) ? E((i = {},
                                i[""] = n,
                                i), "", t) : n
                    }
                }
            }
            return i.runInContext = e,
                i
        }
        var t = "function" == typeof define && define.amd
            , n = {
                "function": !0,
                object: !0
            }
            , i = n[typeof exports] && exports && !exports.nodeType && exports
            , o = n[typeof window] && window || this
            , r = i && n[typeof module] && module && !module.nodeType && "object" == typeof global && global;
        if (!r || r.global !== r && r.window !== r && r.self !== r || (o = r),
            i && !t)
            e(o, i);
        else {
            var a = o.JSON
                , s = o.JSON3
                , c = !1
                , l = e(o, o.JSON3 = {
                    noConflict: function () {
                        return c || (c = !0,
                            o.JSON = a,
                            o.JSON3 = s,
                            a = s = null),
                            l
                    }
                });
            o.JSON = {
                parse: l.parse,
                stringify: l.stringify
            }
        }
        t && define(function () {
            return l
        })
    }
        .call(this);
var Tie = window.Tie || {};
!function (e) {
    function t(e, t) {
        var i, o, r, a, s, c, l, u, d, p, h, f, g = [], m = e.split(S), y = [t];
        for (r = 0,
            a = m.length; r < a; r++) {
            for (i = m[r],
                o = i.replace(j, ""),
                s = 0,
                c = y.length; s < c; s++)
                t = y[s],
                    D.test(i) ? (h = D.exec(o),
                        l = h[1],
                        f = document.getElementById(l),
                        f && v.contains(t, f) && g.push(f)) : M.test(i) && (h = M.exec(o),
                            u = h[1],
                            g = g.concat(n(u, t))),
                    j.test(i) && (h = j.exec(i),
                        d = h[1],
                        p = h[2],
                        g = v.map(g, function (e) {
                            return e[d] === p ? e : null
                        }));
            r !== a - 1 && (y = g,
                g = [])
        }
        return g
    }
    function n(e, t, n) {
        for (var i = [], o = t.getElementsByTagName(n || "*"), r = o.length, a = new RegExp("(^|\\s)" + e + "(\\s|$)"), s = 0, c = 0; s < r; s++)
            a.test(o[s].className) && (i[c] = o[s],
                c++);
        return i
    }
    function i(e) {
        return e.replace(/-(\w+?)/g, function (e) {
            return e.toUpperCase()
        })
    }
    function o(e, t) {
        return window.getComputedStyle ? window.getComputedStyle(e).getPropertyValue(t) : e.currentStyle.getAttribute(i(t))
    }
    function r(e) {
        return O.indexOf(e.nodeName.toLowerCase()) > 0 ? "block" : "inline"
    }
    function a(e) {
        var t = "length" in e && e.length
            , n = typeof e;
        return "function" !== n && !v.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }
    function s(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;)
            ;
        return e
    }
    function c(e, t) {
        for (var n, i = 0; i < e.length; i++)
            if (v.contains(e[i], t)) {
                n = e[i];
                break
            }
        return n
    }
    function l(e) {
        var t = "mouseover, mouseout, click, keydown, keypress, touchstart, touchend, touchmove";
        return t.indexOf(e) > -1
    }
    function u(e, t, n, i) {
        A[t] ? A[t](e, n) : document.addEventListener ? e.addEventListener(t, n, i) : (t = L[t] ? L[t].delegateType : t,
            e.attachEvent("on" + t, function () {
                n.call(e, arguments[0])
            }))
    }
    function d(e) {
        return e = e || window.event,
            e.target || (e.target = e.srcElement),
            e.preventDefault || (e.preventDefault = function () {
                e.returnValue = !1
            }
            ),
            e
    }
    function p(e, t, n) {
        var i, o = e.status;
        if (o >= 200 && o < 300) {
            switch (t.dataType) {
                case "text":
                    i = e.responseText;
                    break;
                case "json":
                    i = function (n) {
                        try {
                            return JSON.parse(n)
                        } catch (i) {
                            try {
                                return new Function("return " + n)()
                            } catch (i) {
                                t.failure(e)
                            }
                        }
                    }(e.responseText);
                    break;
                case "xml":
                    i = e.responseXML;
                    break;
                default:
                    i = e
            }
            "undefined" != typeof i && "function" == typeof n && n(i)
        }
        e = null
    }
    function h(e, t, n) {
        var i = new XMLHttpRequest
            , o = e.data
            , r = e.type
            , a = e.url;
        if (o && "object" == typeof o && (o = v.serialize(o)),
            "GET" === r && o && (a += (E.test(a) ? "&" : "?") + o,
                o = null),
            a += (E.test(a) ? "&" : "?") + "_=" + z++ ,
            i.open(r, a, e.async),
            i.timeout = e.timeout,
            "POST" === r && i.setRequestHeader("Content-type", e.contentType),
            n)
            for (var s in n)
                i.setRequestHeader(s, n[s]);
        return void 0 === e.withCredentials ? i.withCredentials = !0 : i.withCredentials = e.withCredentials,
            i.send(o),
            i.onreadystatechange = function () {
                4 === i.readyState && p(i, e, t)
            }
            ,
            i
    }
    function f(e, t) {
        function n() {
            i = void 0,
                a.onload = a.onreadystatechange = null,
                U.removeChild(a),
                a = void 0
        }
        var i, o = e.data, r = e.url, a = document.createElement("script");
        e.jsonpCallback = e.jsonpCallback || v.expando + "_" + z++ ,
            o && (o = "object" == typeof o ? v.serialize(o) : o,
                r += (E.test(r) ? "&" : "?") + o,
                o = null),
            r += (E.test(r) ? "&" : "?") + e.jsonp + "=" + e.jsonpCallback,
            r += (E.test(r) ? "&" : "?") + "_=" + z++ ,
            a.src = r,
            a.setAttribute("async", !0),
            a.charset = e.scriptCharset,
            U.appendChild(a),
            window[e.jsonpCallback] = function () {
                i = arguments
            }
            ,
            a.onload = a.onreadystatechange = function () {
                this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (t && t(i && i[0]),
                    n())
            }
            ,
            a.onerror = function () {
                t(null),
                    n()
            }
    }
    function g(e, t) {
        function n(e) {
            var n, i, o;
            try {
                n = a.contentDocument,
                    i = n.location,
                    o = n.body.innerHTML
            } catch (r) { }
            t && t(o, i, n)
        }
        var i, o, r, a, s = "", c = e.data, l = document.charset;
        0 === v("#tie_sdk_util_frame").length && (r = v(document.body),
            i = '<iframe src="javascript:false;" name="tie_sdk_util_frame" id="tie_sdk_util_frame" border="no" style="display: none;"></iframe>',
            r.append(i),
            o = '<form id="tie_sdk_util_form" method="post" action="" target="tie_sdk_util_frame" accept-charset="' + e.scriptCharset + '" onsubmit="document.charset=\'' + e.scriptCharset + '\';" style="display: none;"></form>',
            r.append(o)),
            i = v("#tie_sdk_util_frame"),
            o = v("#tie_sdk_util_form").empty(),
            a = i[0],
            a.attachEvent ? a.attachEvent("onload", n) : a.onload = n,
            o.attr("action", e.url);
        for (var u in e.data)
            s += '<input type="hidden" name="' + u + '" value="' + c[u] + '">';
        o.append(s);
        try {
            document.charset = e.scriptCharset
        } catch (d) { }
        o[0].submit();
        try {
            document.charset = l
        } catch (d) { }
        e.removeIframe && (i.remove(),
            o.remove())
    }
    function m(e) {
        var t = !1
            , n = []
            , i = /(^http(s)?:\/\/[A-Za-z0-9_\.]+)\/?/;
        if (R.test(e)) {
            try {
                n = R.exec(e.toLowerCase())
            } catch (o) {
                n = i.exec(e.toLowerCase())
            }
            n[0] === B[0] && n[1] === B[0] || (t = !0)
        }
        return t
    }
    var v = function (e, t) {
        return new v.fn.init(e, t)
    }
        , y = "1.0"
        , b = []
        , w = b.splice
        , T = b.slice
        , I = b.concat
        , x = Array.isArray || function (e) {
            return e instanceof Array
        }
        , k = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
        , _ = /checked/gi
        , S = /\s+/
        , C = /[\t\r\n]/g;
    v.fn = v.prototype = {
        tool: y,
        constructor: v,
        length: 0,
        push: b.push,
        sort: b.sort,
        splice: w,
        size: function () {
            return this.length
        },
        pushStack: function (e) {
            var t = v.merge(this.constructor(), e);
            return t.prevObject = this,
                t.context = this.context,
                t
        },
        each: function (e) {
            for (var t = 0; t < this.length; t++)
                e.call(this[t], t, this[t])
        },
        slice: function () {
            return this.pushStack(T.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length
                , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        find: function (e) {
            var t, n, i = this.length, o = [];
            for (t = 0; t < i; t++)
                n = v(e, this[t]),
                    v.each(n, function (e, t) {
                        o.push(t)
                    });
            return o = this.pushStack(i > 1 ? v.unique(o) : o)
        },
        html: function (e) {
            var t = this[0] || {}
                , n = 0
                , i = this.length;
            if (void 0 === e && 1 === t.nodeType)
                return t.innerHTML;
            for (; n < i; n++)
                t = this[n],
                    1 === t.nodeType && (t.innerHTML = e);
            return this
        },
        val: function (e) {
            var t = this[0] || {}
                , n = 0
                , i = this.length;
            if (void 0 === e && 1 === t.nodeType)
                return t.value;
            for (; n < i; n++)
                t = this[n],
                    1 === t.nodeType && (t.value = e);
            return this
        },
        attr: function (e, t) {
            var n = this[0] || {}
                , i = 0
                , o = this.length;
            if (void 0 === t && 1 === n.nodeType)
                return _.test(e) ? n[e] : n.getAttribute(e);
            if ("string" == typeof t) {
                for (; i < o; i++)
                    n = this[i],
                        1 === n.nodeType && (_.test(e) ? n[e] = t : n.setAttribute(e, t));
                return this
            }
        },
        addCls: function (e) {
            var t, n, i = 0, o = this.length;
            if (e)
                for (; i < o; i++)
                    t = this[i],
                        1 === t.nodeType && (t.classList ? t.classList.add(e) : (n = " " + t.className + " ",
                            n.indexOf(" " + e + " ") < 0 && (n += e + " ",
                                t.className = v.trim(n))));
            return this
        },
        delCls: function (e) {
            var t, n, i = 0, o = this.length;
            if (e)
                for (; i < o; i++)
                    t = this[i],
                        1 === t.nodeType && (t.classList ? t.classList.remove(e) : (n = (" " + t.className + " ").replace(C, " "),
                            n.indexOf(" " + e + " ") >= 0 && (n = n.replace(" " + e + " ", " ")),
                            t.className = v.trim(n)));
            return this
        },
        tglCls: function (e) {
            var t, n, i = 0, o = this.length;
            if (e)
                for (; i < o; i++)
                    t = this[i],
                        1 === t.nodeType && (t.classList ? t.classList.toggle(e) : (n = this.eq(i),
                            n.hasCls(e) ? n.delCls(e) : n.addCls(e)));
            return this
        },
        hasCls: function (e) {
            var t, n = 0, i = this.length;
            if (e)
                for (; n < i; n++)
                    if (t = this[n],
                        1 === t.nodeType)
                        if (t.classList) {
                            if (t.classList.contains(e))
                                return !0
                        } else if ((" " + t.className + " ").replace(C, " ").indexOf(e) >= 0)
                            return !0;
            return !1
        },
        show: function () {
            for (var e, t, n, i = 0, a = this.length; i < a; i++)
                e = this[i],
                    t = e.getAttribute("data-display"),
                    t && "none" !== t ? n = t : "none" !== (n = o(e, "display")) || (n = r(e)),
                    e.style.display = n;
            return this
        },
        hide: function () {
            for (var e, t = 0, n = this.length; t < n; t++)
                e = this[t],
                    e.setAttribute("data-display", o(e, "display")),
                    e.style.display = "none";
            return this
        },
        position: function () {
            var e = this[0]
                , t = e.getBoundingClientRect()
                , n = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft)
                , i = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
            return {
                left: t.left + n,
                top: t.top + i
            }
        },
        offset: function () {
            var e = this[0]
                , t = e.getBoundingClientRect();
            return {
                left: t.left,
                top: t.top
            }
        },
        css: function () {
            var e, t, n = 0, i = arguments[0];
            if (arguments.length > 1 || "object" == typeof i) {
                for (; null != (e = this[n]); n++)
                    if (1 === e.nodeType || 11 === e.nodeType || 9 === e.nodeType)
                        for (t in i)
                            e.style[t] = i[t];
                return this
            }
            return e = this[0],
                o(e, i)
        },
        width: function (e) {
            var t, n, i, o = 0;
            if (e && "number" == typeof e) {
                for (; null != (t = this[o]); o++)
                    1 === t.nodeType && (t.style.width = e + "px");
                return this
            }
            return t = this[0],
                v.isWindow(t) ? n = t.document.documentElement.clientWidth : 9 === t.nodeType ? (i = t.documentElement,
                    n = Math.max(t.body.scrollWidth, i.scrollWidth, t.body.offsetWidth, i.offsetWidth, i.clientWidth)) : n = t.offsetWidth,
                n
        },
        height: function (e) {
            var t, n, i, o = 0;
            if (e && "number" == typeof e) {
                for (; null != (t = this[o]); o++)
                    1 === t.nodeType && (t.style.height = e + "px");
                return this
            }
            return t = this[0],
                v.isWindow(t) ? n = window.innerHeight || t.document.documentElement.clientHeight : 9 === t.nodeType ? (i = t.documentElement,
                    n = Math.max(t.body.scrollHeight, i.scrollHeight, t.body.offsetHeight, i.offsetHeight, i.clientHeight)) : n = t.offsetHeight,
                n
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (e.textContent = "");
            return this
        },
        remove: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
                e.parentNode && e.parentNode.removeChild(e);
            return this
        },
        append: function () {
            for (var e, t = 0, n = v.parseDom(arguments[0]); null != (e = this[t]); t++)
                1 !== e.nodeType && 11 !== e.nodeType && 9 !== e.nodeType || e.appendChild(n.cloneNode(!0));
            return this
        },
        prepend: function () {
            for (var e, t = 0, n = v.parseDom(arguments[0]); null != (e = this[t]); t++)
                1 !== e.nodeType && 11 !== e.nodeType && 9 !== e.nodeType || e.insertBefore(n.cloneNode(!0), e.firstChild);
            return this
        },
        before: function () {
            for (var e, t = 0, n = v.parseDom(arguments[0]); null != (e = this[t]); t++)
                e.parentNode && e.parentNode.insertBefore(n.cloneNode(!0), e);
            return this
        },
        after: function () {
            for (var e, t = 0, n = v.parseDom(arguments[0]); null != (e = this[t]); t++)
                e.parentNode && e.parentNode.insertBefore(n.cloneNode(!0), e.nextSibling);
            return this
        }
    };
    var N = v.fn.init = function (e, n) {
        var i, n = n || document;
        if (!e)
            return this;
        if ("string" == typeof e) {
            e = v.trim(e),
                i = document.querySelectorAll ? n.querySelectorAll(e) : t(e, n);
            for (var o = 0; o < i.length; o++)
                this[o] = i[o];
            this.length = i.length
        } else
            (e.nodeType || e.window) && (this[0] = e,
                this.length = 1);
        return this.context = n,
            this.selector = e,
            this
    }
        ;
    N.prototype = v.fn;
    var D = /^#(\S+)/
        , M = /^\.(\S+)/
        , j = /\[(\S+)=(\S+)\]$/
        , O = "body|div|h1|h2|h3|h4|h5|h6|ul|li|p|dl|ol|form|table|hr|dir|center|menu|pre|address|blockquote";
    v.extend = v.fn.extend = function () {
        var e, t, n, i = arguments[0] || {}, o = 1, r = arguments.length;
        for (o === r && (i = this,
            o--); o < r; o++)
            if (null != (e = arguments[o]))
                for (t in e)
                    n = e[t],
                        i !== n && void 0 !== n && (i[t] = n);
        return i
    }
        ,
        v.extend({
            expando: "tool" + (y + Math.random()).replace(/\D/g, ""),
            isArray: x,
            isWindow: function (e) {
                return null != e && e === e.window
            },
            contains: function (e, t) {
                return e !== document || document.contains || (e = document.documentElement || document.body),
                    e.contains(t)
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(k, "")
            },
            parseDom: function (e) {
                var t, n, i, o = document.createDocumentFragment(), r = 0, a = [];
                if ("string" == typeof e) {
                    for (t = document.createElement("div"),
                        t.innerHTML = e,
                        i = t.childNodes,
                        n = i.length; r < n; ++r)
                        a.push(i[r]);
                    for (r = 0; r < n; r++)
                        o.appendChild(a[r])
                } else if ("object" == typeof e && e.nodeType)
                    o.appendChild(e);
                else if (e instanceof v)
                    for (r = 0; r < e.length; r++)
                        o.appendChild(e[r]);
                else
                    v.log("\u4f20\u9012\u7684\u53c2\u6570\u975e\u6cd5!");
                return o
            },
            each: function (e, t) {
                var n, i = 0, o = e.length, r = a(e);
                if (r)
                    for (; i < o && (n = t.call(e[i], i, e[i]),
                        n !== !1); i++)
                        ;
                else
                    for (i in e)
                        if (n = t.call(e[i], i, e[i]),
                            n === !1)
                            break
            },
            map: function (e, t) {
                var n, i = 0, o = e.length, r = a(e), s = [];
                if (r)
                    for (; i < o; i++)
                        n = t(e[i], i),
                            null != n && s.push(n);
                else
                    for (i in e)
                        n = t(e[i], i),
                            null != n && s.push(n);
                return I.apply([], s)
            },
            proxy: function (e, t) {
                var n, i;
                return n = T.call(arguments, 2),
                    i = function () {
                        return e.apply(t || this, n.concat(T.call(arguments)))
                    }
            },
            merge: function (e, t) {
                for (var n = +t.length, i = 0, o = e.length; i < n; i++)
                    e[o++] = t[i];
                return e.length = o,
                    e
            },
            unique: function (e) {
                if (document.documentElement.compareDocumentPosition) {
                    var t = function (e, t) {
                        return e === t ? 0 : e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                    };
                    e.sort(t);
                    for (var n = 1; n < e.length; n++)
                        e[n] === e[n - 1] && e.splice(n--, 1)
                }
                return e
            },
            dir: function (e, t, n) {
                for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (o)
                            break;
                        i.push(e)
                    }
                return i
            },
            sibling: function (e, t) {
                for (var n = []; e; e = e.nextSibling)
                    1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            now: Date.now ? Date.now : function () {
                return (new Date).getTime()
            }
        }),
        v.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function (e) {
                return v.dir(e, "parentNode")
            },
            children: function (e) {
                return v.sibling(e.firstChild)
            },
            siblings: function (e) {
                return v.sibling((e.parentNode || {}).firstChild, e);
            },
            next: function (e) {
                return s(e, "nextSibling")
            },
            prev: function (e) {
                return s(e, "previousSibling")
            }
        }, function (e, t) {
            v.fn[e] = function () {
                var e = v.map(this, t);
                return this.length > 1 && v.unique(e),
                    this.pushStack(e)
            }
        }),
        v.fn.extend({
            parentToLevel: function (e) {
                var t = e || 1
                    , n = 0
                    , i = v.map(this, function (e) {
                        for (var i = e; (i = i.parentNode) && 11 !== i.nodeType && ++n < t;)
                            ;
                        return i
                    });
                return this.length > 1 && v.unique(i),
                    this.pushStack(i)
            },
            child: function (e) {
                return this.children().eq(e)
            }
        });
    var L = {
        focus: {
            delegateType: "focusin"
        },
        blur: {
            delegateType: "focusout"
        }
    }
        , A = {
            tap: function (e, t) {
                var n = "touchstart"
                    , i = "touchend";
                u(e, n, function (e) {
                    var t = v(e.target);
                    t.attr("data-start-X", e.changedTouches[0].screenX + ""),
                        t.attr("data-start-Y", e.changedTouches[0].screenY + "")
                }, !l(n)),
                    u(e, i, function (e) {
                        var n = v(e.target)
                            , i = v.event.set.tapRange
                            , o = e.changedTouches[0].screenX
                            , r = parseInt(n.attr("data-start-X"))
                            , a = e.changedTouches[0].screenY
                            , s = parseInt(n.attr("data-start-Y"));
                        n.attr("data-end-X", o + ""),
                            n.attr("data-end-Y", a + ""),
                            Math.abs(o - r) <= i && Math.abs(a - s) <= i && t(e)
                    }, !l(i))
            }
        };
    v.event = {
        add: function (e, t, n, i) {
            var o = e.events || []
                , i = i || e;
            i = a(i) ? i : [i],
                o.push({
                    type: t,
                    target: i,
                    handler: n
                }),
                e.events = o,
                e.events[t] || (u(e, t, function (n) {
                    var i, n = d(n);
                    v.each(e.events, function (o, r) {
                        var a, s;
                        r.type === t && (i = r.target,
                            v.each(i, function (t, i) {
                                "string" == typeof i && (a = v(i, e),
                                    s = c(a, n.target),
                                    s && r.handler.call(s, n)),
                                    "object" == typeof i && v.contains(i, n.target) && r.handler.call(i, n)
                            }))
                    })
                }, !l(t)),
                    e.events[t] = !0)
        },
        del: function (e, t, n, i) {
            var o = arguments
                , r = e.events;
            r && r.length > 0 && (r = 1 === o.length ? [] : 2 === o.length ? v.map(r, function (e) {
                return e.type === t ? null : e
            }) : 3 === o.length ? v.map(r, function (e) {
                return e.type === t && e.handler === n ? null : e
            }) : v.map(r, function (e) {
                var o = e;
                return e.type === t && e.handler === n && i && (o.target = v.map(e.target, function (e) {
                    var t = !1;
                    for (var n in i)
                        if (i[n] === e) {
                            t = !0;
                            break
                        }
                    return t ? null : e
                })),
                    o
            })),
                e.events = r
        },
        trigger: function (e, t) { },
        set: {
            tapRange: 10
        }
    },
        v.fn.extend({
            on: function (e, t, n) {
                for (var i, o = arguments, r = e.split(/\s+/), a = 0; a < r.length; a++)
                    e = r[a],
                        v.each(this, function (r, a) {
                            2 === o.length ? (i = o[1],
                                v.event.add(a, e, i)) : (i = n,
                                    v.event.add(a, e, i, [t]))
                        });
                return this
            },
            off: function (e, t, n) {
                var i, o = arguments;
                return v.each(this, function (r, a) {
                    var s;
                    0 === o.length ? v.event.del(a) : 1 === o.length ? v.event.del(a, e) : 2 === o.length ? (i = o[1],
                        v.event.del(a, e, i)) : (i = n,
                            s = v(t, a),
                            s = 0 === s.length ? [t] : s,
                            v.event.del(a, e, i, v(t)))
                }),
                    this
            },
            trigger: function (e) {
                v.each(this, function (t, n) {
                    v.event.trigger(n, e)
                })
            },
            bind: function (e, t) {
                v.each(this, function (n, i) {
                    u(i, e, t, !l(e))
                })
            },
            unBind: function (e, t) {
                v.each(this, function (n, i) {
                    i.removeEventListener ? i.removeEventListener(e, t, !l(e)) : i.detachEvent("on" + e, t)
                })
            }
        });
    var z = v.now()
        , E = /\?/
        , U = document.head || document.getElementsByTagName("head")[0]
        , R = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/
        , B = []
        , P = window.location.href.toLowerCase();
    try {
        B = R.exec(P),
            0 === B.length && (B = P.match(R))
    } catch (H) {
        0 === B.length && (B = [location.protocol + "//" + location.host])
    }
    var G = {
        url: "",
        type: "GET",
        async: !0,
        data: null,
        dataType: "text",
        jsonp: "callback",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        timeout: 0,
        scriptCharset: "UTF-8",
        crossDomain: null,
        supportCORS: "withCredentials" in new XMLHttpRequest,
        removeIframe: !0
    };
    v.extend({
        serialize: function (e) {
            var t = [];
            for (var n in e) {
                var i = e[n];
                if (null !== i && void 0 !== i || (i = ""),
                    i.constructor == Array)
                    for (var o = 0, r = i.length; o < r; o++)
                        t.push(n + "=" + encodeURIComponent(i[o]));
                else
                    t.push(n + "=" + encodeURIComponent(i))
            }
            return t.join("&")
        },
        getData: function (e, t, n) {
            var e = v.extend({}, G, e);
            e.type = e.type.toUpperCase(),
                null === e.crossDomain && (e.crossDomain = m(e.url)),
                e.crossDomain ? ("GET" === e.type && f(e, t),
                    "POST" === e.type && (e.supportCORS ? h(e, t, n) : g(e, t))) : h(e, t, n)
        },
        getFormData: function (e) {
            var t, n, i, o, r = e.find("input, textarea"), a = {}, s = [];
            if (0 === r.length) {
                for (i = e[0].getElementsByTagName("input"),
                    o = e[0].getElementsByTagName("textarea"),
                    t = 0,
                    n = i.length; t < n; t++)
                    s.push(i[t]);
                for (t = 0,
                    n = o.length; t < n; t++)
                    s.push(o[t]);
                r = s
            }
            return v.each(r, function (e, t) {
                t = v(t),
                    ("checkbox" !== t.attr("type") || "checkbox" === t.attr("type") && t.attr("checked")) && (a[t.attr("name")] = t.val())
            }),
                a
        },
        parseJSON: function (e) {
            var t = {};
            return t = window.JSON ? JSON.parse(e) : new Function("return " + e)()
        },
        stringify: function (e) {
            var t = "";
            return window.JSON ? t = JSON.stringify(e) : !function () {
                return v.each(e, function (e, n) {
                    t += "," + e + ":" + n
                }),
                    "" != t && (t = t.substring(1)),
                    "{" + t + "}"
            }(),
                t
        },
        loadCSS: function (e) {
            var t = document.createElement("link");
            t.rel = "stylesheet",
                t.type = "text/css",
                t.href = e,
                U.appendChild(t)
        }
    }),
        Tie.tool = v
}(),
    function (e) {
        function t(t, n) {
            e.isNative(window.scrollTo) ? window.scrollTo(t, n) : document.documentElement && document.documentElement.scrollTop ? (document.documentElement.scrollLeft = t,
                document.documentElement.scrollTop = n) : document.body && (document.body.scrollLeft = t,
                    document.body.scrollTop = n)
        }
        var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
            , i = new Array((-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), 62, (-1), (-1), (-1), 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, (-1), (-1), (-1), (-1), (-1), (-1), (-1), 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, (-1), (-1), (-1), (-1), (-1), (-1), 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, (-1), (-1), (-1), (-1), (-1));
        e.extend({
            log: function (e) {
                "undefined" != typeof console && console.log && console.log(e)
            },
            render: function (e, t) {
                e = e || "",
                    t = t || [""];
                for (var n, i = /<%((?:(?!%>).)+)?%>/g, o = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g, r = "var r=[];\n", a = 0, s = function (e, t) {
                    return r += t ? e.match(o) ? e : "r.push(" + e + ");\n" : "" !== e ? 'r.push("' + e.replace(/"/g, '\\"') + '");\n' : "",
                        s
                }; n = i.exec(e);)
                    s(e.slice(a, n.index))(n[1], !0),
                        a = n.index + n[0].length;
                s(e.substr(a, e.length - a)),
                    r += 'return r.join("");',
                    t = isNaN(t.length) ? [t] : t;
                for (var c = "", l = 0, u = t.length; l < u; l++)
                    c += new Function(r.replace(/[\r\t\n]/g, "")).apply(t[l]);
                return c
            },
            dataReplace: function (e, t) {
                e = e || "",
                    t = t || [""];
                for (var n, i = /{{((?:(?!}}).)+)?}}/g, o = "return ", r = 0, a = function (e, t) {
                    return o += t ? "+this." + e + "+" : '"' + e + '"',
                        a
                }; n = i.exec(e);)
                    a(e.slice(r, n.index))(n[1], !0),
                        r = n.index + n[0].length;
                return a(e.substr(r, e.length - r)),
                    new Function(o).apply(t)
            },
            cookie: {
                EXPIRESWITHUNIT: /[smhdMy]$/,
                TIMEUNITS: {
                    s: 1,
                    m: 60,
                    h: 3600,
                    d: 86400,
                    M: 2592e3,
                    y: 31536e3
                },
                encoder: window.encodeURIComponent,
                decoder: window.decodeURIComponent,
                get: function (e, t) {
                    var n = this;
                    e = n.encoder(e) + "=";
                    var i, o = document.cookie, r = o.indexOf(e);
                    return -1 === r ? t ? void 0 : "" : (r += e.length,
                        i = o.indexOf(";", r),
                        i === -1 && (i = o.length),
                        n.decoder(o.substring(r, i)))
                },
                set: function (e, t, n, i, o, r) {
                    var a = this
                        , s = [a.encoder(e) + "=" + a.encoder(t)];
                    if (n) {
                        var c, l;
                        n instanceof Date ? c = n : ("string" == typeof n && this.EXPIRESWITHUNIT.test(n) && (n = n.substring(0, n.length - 1),
                            l = RegExp.lastMatch),
                            isNaN(n) || (c = new Date,
                                c.setTime(c.getTime() + n * this.TIMEUNITS[l || "m"] * 1e3))),
                            c && s.push("expires=" + c.toUTCString())
                    }
                    o && s.push("path=" + o),
                        i && s.push("domain=" + i),
                        r && s.push("secure"),
                        document.cookie = s.join(";")
                },
                del: function (e, t, n) {
                    document.cookie = this.encoder(e) + "=" + (n ? ";path=" + n : "") + (t ? ";domain=" + t : "") + ";expires=Thu, 01-Jan-1970 00:00:01 GMT"
                }
            },
            formatDate: function (e, t) {
                var t = t || "yyyy-MM-dd hh:mm:ss"
                    , e = e || new Date;
                return Date.prototype.formatDt = Date.prototype.formatDt || function (e) {
                    var t = {
                        "M+": this.getMonth() + 1,
                        "d+": this.getDate(),
                        "h+": this.getHours(),
                        "m+": this.getMinutes(),
                        "s+": this.getSeconds(),
                        "q+": Math.floor((this.getMonth() + 3) / 3),
                        S: this.getMilliseconds()
                    };
                    /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
                    for (var n in t)
                        new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[n] : ("00" + t[n]).substr(("" + t[n]).length)));
                    return e
                }
                    ,
                    e.formatDt(t)
            },
            subChineseStr: function (e, t, n) {
                t = 2 * t;
                for (var i = "", o = 0, r = 0; r < e.length; r++) {
                    if (e.charCodeAt(r) > 255 ? o += 2 : o++ ,
                        o >= t)
                        return n ? i + "..." : i;
                    i += e.charAt(r)
                }
                return e
            },
            scrollY: function (e, t) {
                var t = t || 0;
                window.scrollTo(0, e.position().top + t)
            },
            scrollTo: function (e, n, i) {
                var o, r, a, s, c, l = 50;
                i ? (o = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft),
                    r = Math.max(document.documentElement.scrollTop, document.body.scrollTop),
                    s = (e - o) / (i / l),
                    c = (n - r) / (i / l),
                    a = setInterval(function () {
                        o += s,
                            r += c,
                            s > 0 && o > e || c > 0 && r > n || s < 0 && o < e || c < 0 && r < n ? clearInterval(a) : t(o, r)
                    }, l),
                    setTimeout(function () {
                        t(e, n)
                    }, i)) : t(e, n)
            },
            isNative: function (e) {
                return !!e && (/\{\s*\[native code\]\s*\}/.test(e + "") || /\{\s*\/\* source code not available \*\/\s*\}/.test(e + ""))
            },
            base64Encode: function (e) {
                var t, i, o, r, a, s;
                for (o = e.length,
                    i = 0,
                    t = ""; i < o;) {
                    if (r = 255 & e.charCodeAt(i++),
                        i == o) {
                        t += n.charAt(r >> 2),
                            t += n.charAt((3 & r) << 4),
                            t += "==";
                        break
                    }
                    if (a = e.charCodeAt(i++),
                        i == o) {
                        t += n.charAt(r >> 2),
                            t += n.charAt((3 & r) << 4 | (240 & a) >> 4),
                            t += n.charAt((15 & a) << 2),
                            t += "=";
                        break
                    }
                    s = e.charCodeAt(i++),
                        t += n.charAt(r >> 2),
                        t += n.charAt((3 & r) << 4 | (240 & a) >> 4),
                        t += n.charAt((15 & a) << 2 | (192 & s) >> 6),
                        t += n.charAt(63 & s)
                }
                return t
            },
            base64Decode: function (e) {
                var t, n, o, r, a, s, c;
                for (s = e.length,
                    a = 0,
                    c = ""; a < s;) {
                    do
                        t = i[255 & e.charCodeAt(a++)];
                    while (a < s && t == -1); if (t == -1)
                        break;
                    do
                        n = i[255 & e.charCodeAt(a++)];
                    while (a < s && n == -1); if (n == -1)
                        break;
                    c += String.fromCharCode(t << 2 | (48 & n) >> 4);
                    do {
                        if (o = 255 & e.charCodeAt(a++),
                            61 == o)
                            return c;
                        o = i[o]
                    } while (a < s && o == -1); if (o == -1)
                        break;
                    c += String.fromCharCode((15 & n) << 4 | (60 & o) >> 2);
                    do {
                        if (r = 255 & e.charCodeAt(a++),
                            61 == r)
                            return c;
                        r = i[r]
                    } while (a < s && r == -1); if (r == -1)
                        break;
                    c += String.fromCharCode((3 & o) << 6 | r)
                }
                return c
            },
            isMobileDevice: function () {
                var e = navigator.userAgent.toLowerCase()
                    , t = "ipad" == e.match(/ipad/i)
                    , n = "iphone os" == e.match(/iphone os/i)
                    , i = "midp" == e.match(/midp/i)
                    , o = "rv:1.2.3.4" == e.match(/rv:1.2.3.4/i)
                    , r = "ucweb" == e.match(/ucweb/i)
                    , a = "android" == e.match(/android/i)
                    , s = "windows ce" == e.match(/windows ce/i)
                    , c = "windows mobile" == e.match(/windows mobile/i);
                return t || n || i || o || r || a || s || c
            },
            isIE: function () {
                var e = navigator.userAgent;
                return e.indexOf("MSIE") >= 0 && e.indexOf("Opera") < 0
            },
            clone: function (t) {
                return e.parseJSON(e.stringify(t))
            },
            refresh: function (t, n) {
                var n = n || Tie.view.wrapper;
                n.find("[ne-id='" + t + "']").each(function (t) {
                    var n, i = e(this), o = i.attr("ne-tmpl"), r = i.attr("ne-data");
                    r && (n = Tie.getByUID(r)),
                        o && (/^\>/.test(o) ? i.html(e.render(Tie.tpl[o.substring(1)], n)) : (i.after(e.render(Tie.tpl[o], n)),
                            i.remove()))
                })
            }
        })
    }(Tie.tool),
    function (e) {
        function t() { }
        var n = e.tool
            , i = /<(iframe|script|form|embed|video|h1)[\s\S]*?<\/\1>|<(link|embed) .*?>/gi
            , o = /end\-?text|content\-?text/i
            , r = /copyright|siteinfo|biaoti|shmbody|head|foot|about|more|^wen$/i
            , a = function (e) {
                return e && e.tagName ? e.tagName.toLowerCase() : ""
            };
        t.prototype = {
            parse: function (e, t, i) {
                this.maxP = 0,
                    this.maxH = 0,
                    "function" == typeof e && (i = t,
                        t = e,
                        e = null),
                    e = e || document.body;
                var o = n(location.host.indexOf("blog.") == -1 ? "h1" : "h2");
                o[0] || (o = n(".title,h1,h2"));
                var r, a = document.title.replace(/\s/g, "");
                o.each(function (e, t) {
                    var n = t.innerHTML.replace(/<.*?>/g, "").replace(/\s|&nbsp;?/gi, "");
                    n && n.length < 90 && (!a || ~a.indexOf(n.substr(0, 5))) && (r = t)
                }),
                    r || n("h3").each(function (e, t) {
                        var n = t.innerHTML.replace(/<.*?>/g, "").replace(/\s|&nbsp;?/gi, "");
                        n && n.length < 90 && ~a.indexOf(n.substr(0, 6)) && (r = t)
                    });
                var s = r ? r.innerHTML.replace(/<.*?>/g, "").trim() : "";
                /\u52a0\u8f7d\u4e2d|loading|^\s+$/i.test(s) && (s = ""),
                    this.state = {
                        title: s || document.title
                    },
                    this.detectByHost(e) || this.detectByP(e),
                    "function" == typeof t && (i || (this.state.content = this.state.content.replace(/<img .*?>/gi, "")),
                        t(this.state))
            },
            detectByHost: function (e) {
                var t = !1
                    , o = location.host.replace(/.*?\.([^\s\.]+\.[^\s\.]+)$/, "$1")
                    , r = location.host.replace(/.*?\.([^\s\.]+\.[^\s\.]+\.[^\s\.]+)$/, "$1")
                    , a = {
                        "cfi.cn": function () {
                            var t = "";
                            return n("#tdcontent", e).each(function (e, n) {
                                var o = n.innerHTML.replace(i, "").replace(/<table[\s\S]*?<\/table>/gi, "");
                                t += o
                            }),
                                t
                        },
                        "sohu.com": function () {
                            var t = "";
                            return n("[itemprop=articleBody],#contentText", e).each(function (e, n) {
                                var o = n.innerHTML.replace(i, "");
                                t += o
                            }),
                                t
                        },
                        "blog.sina.com.cn": function () {
                            var t = "";
                            return n(".articalContent", e).each(function (e, n) {
                                var o = n.innerHTML.replace(i, "");
                                t += o
                            }),
                                t
                        },
                        "blog.163.com": function () {
                            var t = "";
                            return n(".nbw-blog", e).each(function (e, n) {
                                var o = n.innerHTML.replace(i, "");
                                t += o
                            }),
                                t
                        },
                        "k618.cn": function () {
                            var t = "";
                            return n("#photoContainer .fenshuwz", e).each(function (e) {
                                var n = e.innerHTML ? e.innerHTML.replace(i, "") : "";
                                t += n
                            }),
                                t
                        }
                    }
                    , s = a[location.host] || a[r] || a[o];
                return s && (t = s()) && (this.state.content = t),
                    t
            },
            detectByP: function (e) {
                var t = ""
                    , i = this
                    , o = []
                    , s = document.body.offsetHeight;
                n("p,div>br", e).each(function (e, c) {
                    if (!r.test(c.className) && ("p" != a(c) || c.innerHTML.replace(/\s|&nbsp;/gi, ""))) {
                        var l = c.parentNode;
                        i.query = "",
                            /^(i|font|b|em|strong|center)$/i.test(l.tagName) && (i.query = RegExp.$1,
                                l = l.parentNode),
                            o.indexOf(l) == -1 && (!i.detect(l) && n(c).position().top < .8 * s && (t += c.outerHTML),
                                o.push(l))
                    }
                }),
                    this.state.content || (this.state.content = t)
            },
            getContent: function (e) {
                var t = ""
                    , i = ".rdtj";
                if (n("li a", e).length < 3)
                    if (n(i, e)[0]) {
                        var o = e.cloneNode(!0);
                        n(i, o).remove(),
                            t = o.innerHTML
                    } else
                        t = e.innerHTML;
                else
                    n("p", e).each(function (e, n) {
                        t += n.outerHTML
                    });
                return t
            },
            detect: function (e) {
                var t = e.className || ""
                    , a = e.id || "";
                if (e == document.body || r.test(t) || r.test(a))
                    return !1;
                var s = Math.min(document.body.offsetWidth, 980)
                    , c = this.getContent(e).replace(i, "");
                if ((e.offsetWidth > s / 2 || /allContent/i.test(a)) && n(e).position().top < .6 * document.body.offsetHeight && (o.test(t) || o.test(a) || c.replace(/<(?!img).*?>/g, "").replace(/\s/g, "").length > 60)) {
                    var l = n(this.query + " p", e).length
                        , u = e.offsetHeight;
                    if (l > this.maxP || u > this.maxH)
                        return this.maxP = l,
                            this.maxH = u,
                            this.state.contentNode = e,
                            this.state.content = c,
                            !0
                }
                return !1
            }
        };
        var s = new t;
        e.third = e.third || {},
            e.third.extractor = s
    }(window.Tie),
    function (e) {
        var t = e.tool;
        e.controller = {
            create: function (e) {
                var n = function () {
                    this.init.apply(this, arguments)
                };
                return n.fn = n.prototype,
                    n.fn.init = function () { }
                    ,
                    n.fn.eventSplitter = /^(\w+)\s*(.*)$/,
                    n.fn.delegateEvents = function (e) {
                        function n(e) {
                            var n = [];
                            return e && t.each(e.split(/,/), function (e, t) {
                                a.test(t) && (t = new Function("return " + t.replace(a, "this.") + ";").call(o)),
                                    n.push(t)
                            }),
                                n
                        }
                        function i(e) {
                            var n = t(this).attr("ne-model");
                            o.temp = t.trim(t(this).val()),
                                new Function("this." + n + "= this.temp;").call(o)
                        }
                        var o = this
                            , r = {
                                stat: "click"
                            }
                            , a = /^scope\./;
                        t.each(e, function (e, i) {
                            var a, s, c = "ne-" + i;
                            i = r[i] || i,
                                o.el.on(i, "[" + c + "]", function (e) {
                                    for (var i = t(this).attr(c).split(/\s+/), r = 0; r < i.length; r++)
                                        a = i[r].match(/(\S+)\((\S+)?\)/),
                                            s = [e, o].concat(n(a[2])),
                                            o[a[1]].apply(this, s)
                                })
                        }),
                            this.el.on("keyup blur", "input,textarea", i)
                    }
                    ,
                    n.fn.$ = function (e) {
                        return t(e, this.el[0])
                    }
                    ,
                    n.include = function (e) {
                        t.extend(this.fn, e)
                    }
                    ,
                    e && n.include(e),
                    n
            }
        }
    }(window.Tie),
    function (e) {
        var t, n = e.tool, i = (e.set,
            function () {
                var e = 0;
                return function () {
                    return ++e
                }
            }()), o = {
                tie: function (e, o, r, a) {
                    var s = o.user
                        , c = this;
                    n.extend(this, o, {
                        id: o.commentId,
                        _uid: i(),
                        boardId: t.boardId,
                        photo: s.avatar,
                        pubTime: o.createTime,
                        up: o.vote,
                        down: o.against,
                        nickname: s.nickname || "\u4e91\u8ddf\u8d34\u7f51\u53cb",
                        from: s.location,
                        productKey: o.productKey || t.productKey,
                        docId: t.docId,
                        userId: s.id,
                        userNO: s.userId,
                        voice: c.getVoice(o),
                        type: "quote",
                        order: 1,
                        newly: o.newly || !1,
                        groupMemberSize: 1
                    }),
                        r ? n.extend(this, {
                            boardId: a.boardId,
                            docId: a.docId,
                            essayTitle: a.title,
                            essayURL: a.url
                        }) : n.extend(this, {
                            id: this.docId + "_" + this.id
                        })
                }
            };
        o.tie.fn = n.extend(o.tie.prototype, {
            getVoice: function (e) {
                var t = null;
                return t
            }
        }),
            o.tie.init = function (e, t, i) {
                var o, t = t, r = !1, a = "", s = "", c = "", l = !1;
                return 1 === i.code && (o = i.data,
                    t = o.user,
                    r = o.anonymous,
                    a = o.siteName,
                    s = o.ip,
                    c = o.content,
                    l = o.isDel),
                    {
                        newly: !0,
                        anonymous: r,
                        type: "trunk",
                        pubTime: n.formatDate(),
                        siteName: a,
                        from: t.location,
                        ip: s,
                        photo: t.avatar,
                        content: c || e,
                        nickname: t.nickname,
                        isDel: l
                    }
            }
            ,
            o.tie.adaptData = function (i, r) {
                var a, s, c, l, u, d, p = i.comments, h = [];
                t = e.config,
                    a = r ? i.commentIdsAndDocId : i.commentIds;
                for (var f = 0; f < a.length; f++) {
                    r ? (c = a[f].commentIds.split(","),
                        c = n.map(c, function (e) {
                            return a[f].docId + "_" + e
                        })) : c = a[f].split(","),
                        s = [];
                    for (var g = c.length, m = 0, v = 0; v < g; v++)
                        l = c[v],
                            p[l] && !p[l].isDel && m++;
                    for (var v = 0; v < g; v++)
                        l = c[v],
                            p[l] && !p[l].isDel && (r ? (d = i.threads[a[f].docId],
                                u = new o.tie(l, p[l], r, d)) : u = new o.tie(l, p[l], r),
                                u.order = v + 1,
                                u.groupMemberSize = m,
                                s.push(u));
                    s && s.length > 0 && (s[s.length - 1].type = "trunk",
                        h.push(n.clone(s)))
                }
                return h
            }
            ,
            o.tie.buildQuoteNode = function (i, o, r, a) {
                var s, c = "", l = i.length, u = e.tpl, d = u.floorTpl.upperTpl, p = u.floorTpl.lowerTpl, h = u.floorTpl.middleTpl, f = n.render;
                if (l >= 1 && "foldAll" === a || l >= t.startHideMdl && "off" === o) {
                    var g, m, v = "";
                    "startEnd" === a ? (v = f(d, i[0]) + f(p, i[0]),
                        g = f(d) + v + f(h, n.extend(r, {
                            hideMdlNum: l - 2,
                            order: 2
                        })),
                        m = f(d, i[l - 1]) + g + f(p, i[l - 1])) : (g = f(d) + v + f(h, n.extend(r, {
                            hideMdlNum: l,
                            order: 1
                        })),
                            m = g),
                        c = m
                } else if (t.nestedHierarchy > l)
                    for (var y = 0; y < l; y++)
                        s = i[y],
                            c = f(d, s) + c + f(p, s);
                else
                    for (var b = Math.round(t.nestedHierarchy / 2), y = 0; y < l; y++)
                        s = i[y],
                            c = s.order <= b || s.order > l - b ? f(d, s) + c + f(p, s) : c + f(d, s) + f(p, s);
                return c
            }
            ,
            o.tie.buildTrunkNode = function (t, i, r) {
                var a = t.length
                    , s = t[a - 1]
                    , c = t.slice(0, a - 1)
                    , i = i || "off"
                    , r = r || "startEnd"
                    , l = e.tpl;
                return n.render(l.trunkTpl.upperTpl, s) + o.tie.buildQuoteNode(c, i, s, r) + n.render(l.trunkTpl.lowerTpl, s)
            }
            ,
            o.tie.newTrunkNode = function (t, r) {
                var a = e.tpl;
                if (t) {
                    var s, c = o.tie.findTopsInGroup(t), l = (c.length,
                        []);
                    return n.each(c, function (e, t) {
                        var o = n.clone(t);
                        o._uid = i(),
                            l.push(o)
                    }),
                        s = n.render(a.trunkTpl.upperTpl, r) + o.tie.buildQuoteNode(l, !1) + n.render(a.trunkTpl.lowerTpl, r),
                        l.push(r),
                        o.tie.cache().unshift(l),
                        s
                }
                return n.render(a.trunkTpl.upperTpl, r) + n.render(a.trunkTpl.lowerTpl, r)
            }
            ,
            o.tie.buildView = function (e, t) {
                for (var n = "", i = 0, r = e.length, t = t || "startEnd"; i < r; i++)
                    n += o.tie.buildTrunkNode(e[i], "off", t);
                return n
            }
            ,
            o.tie.findGroupById = function (e, t) {
                for (var n = null, i = 0; i < e.length; i++) {
                    n = e[i];
                    var o = n.length - 1;
                    if (n[o].id === t)
                        return n
                }
            }
            ,
            o.tie.findTopsInGroup = function (e, t) {
                for (var n, t = t || o.tie.cache(), i = null, r = 0; r < t.length; r++) {
                    i = t[r];
                    for (var a = 0; a < i.length; a++)
                        if (n = i[a],
                            n.id === e)
                            return i.slice(0, a + 1)
                }
            }
            ,
            o.tie.findById = function (e, t) {
                for (var n, t = t || o.tie.cache() || o.tie.cacheI(), i = null, r = 0; r < t.length; r++) {
                    i = t[r];
                    for (var a = 0; a < i.length; a++)
                        if (n = i[a],
                            n.id === e)
                            return n
                }
            }
            ,
            o.tie._store = {},
            o.tie.cache = function (t) {
                var i = o.tie._store
                    , r = e.page;
                return t ? void (n.isArray(t) && (i[r.tab] = i[r.tab] || [],
                    i[r.tab] = i[r.tab].concat(t))) : i[r.tab] && i[r.tab]
            }
            ,
            o.tie.findByUID = function (e, t) {
                for (var n, t = t || o.tie.cache() || [], i = null, r = 0; r < t.length; r++) {
                    i = t[r];
                    for (var a = 0; a < i.length; a++)
                        if (n = i[a],
                            n._uid === parseInt(e))
                            return n
                }
            }
            ,
            e.model = e.model || {},
            n.extend(e.model, o)
    }(window.Tie),
    function (e) {
        function t() {
            c ? c = !0 : (r || (r = e.view.wrapper.child(-1),
                r = r && r[0].contentWindow),
                r || (r = e.view.wrapper.child(0),
                    r = r && r[0].contentWindow),
                r = r || a("#yun-tie-data-ifrm-923")[0].contentWindow)
        }
        function n(e) {
            t(),
                r.postMessage(a.stringify(e), "*")
        }
        function i() {
            n({
                action: "SSO_login"
            })
        }
        function o() {
            n({
                action: "SSO_exit"
            })
        }
        var r, a = e.tool, s = !0, c = !1;
        a(window).bind("message", function (e) {
            var i;
            t(),
                e.source === r && (i = e.data,
                    "string" == typeof i && (i = a.parseJSON(i)),
                    "getSSOUserInfo" === i.action && a.getData({
                        url: i.url,
                        jsonpCallback: "callback",
                        crossDomain: s
                    }, function (e) {
                        n({
                            action: "SSO_check",
                            result: e
                        })
                    }),
                    "wakeupSSOStatus" === i.action && a.getData({
                        url: i.url,
                        data: i.param,
                        jsonpCallback: "callback",
                        crossDomain: s
                    }, function (e) {
                        n({
                            action: "SSO_wakeup",
                            result: e
                        })
                    }))
        }),
            e.open = {
                ssoLogined: i,
                ssoExited: o
            }
    }(window.Tie),
    function (e) {
        e.convertPath = function (e) {
            var t;
            return "~" === e[0] ? (t = location.href.indexOf(/pc/),
                location.href.substring(0, t) + e.substring(1)) : e
        }
            ;
        var t = (e.tool,
            e.convertPath("https://api.gentie.163.com/pc/refresh.html"))
            , n = "https://reg.163.com/outerLogin/oauth2/connect.do";
        e.set = {
            barId: {
                shareWin: "shareListWin"
            },
            stateCls: {
                active: "z-active",
                visited: "z-visited",
                disable: "z-disable",
                parallelFlr: " z-parallel-floor",
                visible: "z-visible"
            },
            tabItem: {
                hot: "hot",
                xin: "xin",
                "\u6700\u70ed": "hot",
                "\u6700\u65b0": "xin"
            },
            statItem: {
                "\u6700\u70ed": "hotList",
                "\u6700\u65b0": "newList"
            },
            baseDataHost: /^http:\/\/(dev\.f2e|qa\.developer)\./.test(document.location.href) ? "https://qaapi.gentie.163.com" : /\?dev$/.test(document.location.href) ? "https://devapi.gentie.163.com" : "https://" + window.location.hostname,
            baseDataURL: "/products/<% this.productKey %>",
            exitAccountURL: "https://reg.163.com/Logout.jsp?url=",
            cookie: {
                syncWeibo: "NTES_SYNC_WEIBO",
                yunLogin: "NTES_YUN_LOGINED",
                domain: ".163.com"
            },
            skins: {   // skins
                1: {
                    name: "\u7f51\u6613\u7ea2",
                    code: 1,
                    css: e.convertPath("https://img1.ws.126.net/f2e/tie/yun/sdk/pc/red.1178673.css")
                },
                2: {
                    name: "APEAC\u84dd",
                    code: 2,
                    css: e.convertPath("https://img1.ws.126.net/f2e/tie/yun/sdk/pc/blue.1178673.css")
                },
                3: {
                    name: "\u6697\u591c\u9ed1",
                    code: 3,
                    css: e.convertPath("https://img1.cache.netease.com/f2e/tie/yun/sdk/pc/black.1184399.css")
                }
            },
            thirdOauth: {
                target: {
                    qzone: 1,
                    weibo: 3
                },
                product: "gentie",
                weibo: n + "?target=3&product=gentie&url=" + t + "&url2=" + t,
                qzone: n + "?target=1&product=gentie&url=" + t + "&url2=" + t
            },
            defaultConfig: {
                nestedHierarchy: 20,
                startHideMdl: 7,
                maxFloor: 70,
                operators: ["up", "down", "reply", "share"]
            },
            codeMsg: {
                2207: "\u8ddf\u8d34\u5df2\u5220\u9664\uff0c\u56de\u590d\u5931\u8d25",
                2208: "\u8d85\u8fc770\u5c42\u4e86\uff0c\u56de\u590d\u5176\u5b83\u697c\u5c42\u5427",
                1806: "\u8ddf\u8d34\u5df2\u5173\u95ed",
                1201: "\u8be5\u767b\u5f55\u5165\u53e3\u5173\u95ed\uff0c\u8bf7\u91cd\u65b0\u9009\u62e9\u767b\u5f55\u65b9\u5f0f",
                1104: "\u767b\u5f55\u5931\u6548\uff0c\u8bf7\u9000\u51fa\u540e\u91cd\u65b0\u767b\u5f55",
                2204: "\u8bf7\u786e\u4fdd\u6587\u5b57\u6570\u57282\u52301000\u7684\u8303\u56f4\u5185"
            }
        }
    }(window.Tie),
    function (e) {
        var t = ['<div class="arrow">', '<span class="arrow-top"></span>', '<span class="arrow-btm"></span>', "</div>"].join("")
            , n = ['<div class="user-bar" ne-id="userBar" ne-tmpl="userBar">', "<% if (Tie.userInfo) { %>", '<div class="user-info">', '<img src="<% Tie.userInfo.avatar || "https://simg.ws.126.net/e/img5.cache.netease.com/tie/images/yun/photo_default_62.png.32x32.100.jpg" %>" class="avatar" ne-click="showIwin()" ne-stat="stat(type-avatar|area-<% this.id ? 2 : 1 %>|userId-<% Tie.tpl.userId() %>|loginType-<% Tie.tpl.loginType() %>)"/>', '<span class="nickname" ne-click="showIwin()" ne-stat="stat(type-nickname|area-<% this.id ? 2 : 1 %>|userId-<% Tie.tpl.userId() %>|loginType-<% Tie.tpl.loginType() %>)">', "<% Tie.tpl.longStr(Tie.userInfo.nickname, 12) %></span>", '<span class="split-line">|</span>', '<span class="exit" ne-click="loginOut()" ne-stat="stat(type-logout|area-1)">\u9000\u51fa</span>', "</div>", "<% if (Tie.userInfo && Tie.userInfo.isWeibo) { %>", '<div class="tie-sync">', '<input class="sync-check" type="checkbox" <% if (Tie.tool.cookie.get( Tie.set.cookie.syncWeibo )) {%> checked <% } %> ne-click="wbSyncSet()"/>', '<span class="sync-txt">\u540c\u6b65\u81f3\u5fae\u535a</span>', "</div>", "<% } %>", "<% } else { %>", '<div class="tie-quick-login flt-lft">', '<span class="quick-txt">\u5feb\u901f\u767b\u5f55\uff1a</span>', "<% if ( Tie.tpl.ssoIcon() ) { %>", '<a href="javascript:void(0);" title="<% Tie.config.sso.webShowTitle %>" ne-click="ssoOauth()" ne-stat="stat(type-singleLogin|area-2)">', '<img src="<% Tie.config.sso.webIcon %>" class="sso-icon">', "</a>", "<% } %>", '<span class="icon i-mail" title="\u90ae\u7bb1\u8d26\u53f7\u767b\u5f55" ne-click="showLoginWin()" ne-stat="stat(type-163Login|area-2)"></span>', '<span class="icon i-weibo" title="\u5fae\u535a\u8d26\u53f7\u767b\u5f55" ne-click="thirdOauth(<% Tie.set.thirdOauth.weibo %>)" ne-stat="stat(type-sinaLogin|area-2)"></span>', '<span class="icon i-qq" title="QQ\u8d26\u53f7\u767b\u5f55" ne-click="thirdOauth(<% Tie.set.thirdOauth.qzone %>)" ne-stat="stat(type-qqLogin|area-2)"></span>', "</div>", "<% } %>", "</div>"].join("")
            , i = ["<% if ( this.total > 0 && this.count > this.size ) { %>", '<div class="tie-page">', "<span>\u8df3\u81f3</span>", '<input type="text" ne-model="toPage" ne-keyup="enterPage(scope.toPage)"/>', "<span>\u9875</span>", '<span class="to-btn" ne-click="changePage(scope.toPage)" ne-stat="stat(type-goPage|area-2)">Go</span>', "<% if ( this.current > 1 ) { %>", '<span class="page-btn" ne-click="changePage(<% this.current-1 %>)" ne-stat="stat(type-prePage|area-2)">\u4e0a\u4e00\u9875</span>', "<% } %>", "<% for ( var numArry = Tie.tpl.calPageNum(2), i = 0, len = numArry.length; i < len; i++ ) { %>", "<% if ( (i === 1 && numArry[i] > 2) || (i === len-1 && numArry[i-1] < this.total-1) ) { %>", '<span class="page-dot">......</span>', "<% } %>", "<% if ( numArry[i] === this.current ) { %>", '<span class="page-num z-current"><% numArry[i] %></span>', "<% } else { %>", '<span class="page-num" ne-click="changePage(<% numArry[i] %>)" ne-stat="stat(type-pageCount|area-2)"><% numArry[i] %></span>', "<% } %>", "<% } %>", "<% if ( this.current < this.total ) { %>", '<span class="page-btn z-next" ne-click="changePage(<% this.current+1 %>)" ne-stat="stat(type-nextPage|area-2)">\u4e0b\u4e00\u9875</span>', "<% } %>", "</div>", "<% } if (this.count <= this.size && this.total > 0) { %>", '<div class="no-more">\u6ca1\u6709\u66f4\u591a\u8ddf\u8d34\u4e86</div>', "<% } %>"].join("")
            , o = ['<a class="link-custom-page" href="<% Tie.config.linkUrl %>" target="_blank">\u5df2\u6709<span class="active-num"><% Tie.config.activeNum %></span>\u4eba\u53c2\u4e0e\u8bc4\u8bba\uff0c\u70b9\u51fb\u67e5\u770b\u66f4\u591a</a>'].join("")
            , r = ['<div ne-id="tipBox" ne-tmpl="tipTpl" ne-data="<% this._uid %>">', "<% if (Tie.tipTxt) { %>", '<div class="submit-tip">', '<i class="icon i-tip"></i>', '<span class="tip-txt"><% Tie.tipTxt %></span>', "</div>", "<% } %>", "</div>"].join("")
            , a = ['<textarea rows="8" cols="80" class="tie-textarea" name="content" ne-focus="hideInputTip(<% this._uid %>)" ne-blur="showInputTip(<% this._uid %>)" ne-model="boxTie.content"></textarea>', '<div class="input-tips" ne-click="hideInputTip(<% this._uid %>)"><% Tie.config.cmsTips %></div>', '<div class="tie-submit-row">', n, '<span class="tie-submit-btn" ne-click="submitTie(<% this._uid %>)"><i class="icon"></i>\u53d1\u8868\u8ddf\u8d34</span>', r, "</div>"].join("")
            , s = ['<div class="input-box" ne-id="tieBox" ne-tmpl="formTpl">', a, "</div>"].join("")
            , c = ["<% if (Tie.reply && Tie.reply === this) { %>", '<div class="input-box z-reply">', a, "</div>", "<% } %>"].join("")
            , l = ["<% if (this.anonymous) { %>", '<div class="photo z-disable">', "<% } else { %>", '<div class="photo" ne-click="showIwin(<% this._uid %>)" ne-stat="stat(type-avatar|area-<% this.id ? 2 : 1 %>|userId-<% Tie.tpl.userId() %>|loginType-<% Tie.tpl.loginType() %>)">', "<% } %>", '<img src="<% this.photo %>">', "</div>"].join("")
            , u = ["<% if (this.anonymous) { %>", '<span class="name-desp z-front"><% this.siteName %> &nbsp; <% this.from %>\u7f51\u53cb</span>', '<span class="name-ip">ip:<% this.ip %></span>', "<% } else { %>", '<span class="name-nick" ne-click="showIwin(<% this._uid %>)" ne-stat="stat(type-nickname|area-<% this.id ? 2 : 1 %>|userId-<% Tie.tpl.userId() %>|loginType-<% Tie.tpl.loginType() %>)"><% Tie.tpl.longStr(this.nickname, 12) %></span>', '<span class="name-desp">[<% this.siteName + this.from %>\u7f51\u53cb]</span>', "<% } %>"].join("")
            , d = ['<p class="tie-cnt">', "<% this.content %>", "</p>"].join("")
            , p = ['<% if ( this.type === "trunk" && this.essayTitle) { %>', '<span class="essay-link" title="<% this.essayTitle %>">\u6765\u81ea\uff1a<% Tie.tpl.longStr(this.essayTitle, 23) %> &nbsp;<% this.siteName %></span>', "<% } %>"].join("")
            , h = ['<div ne-click="upTie(<% this._uid %>)" ne-id="upTie:<% this._uid %>" ne-tmpl="upTieTpl" ne-data="<% this._uid %>" class="<% this.uped ? "z_over" : "" %>">', "<% if (this.uped && !this.upOver) { %>", '<span class="up-one">+1</span>', "<% } %>", '<span class="icon i-up"></span>', '<span class="u-num"><% this.up %></span>', "</div>"].join("")
            , f = ['<div ne-click="downTie(<% this._uid %>)" ne-id="downTie:<% this._uid %>" ne-tmpl="downTieTpl" ne-data="<% this._uid %>" class="<% this.downed ? "z_over" : "" %>">', "<% if (this.downed && !this.downOver) { %>", '<span class="down-one">+1</span>', "<% } %>", '<span class="icon i-down"></span>', '<span class="u-num"><% this.down %></span>', "</div>"].join("")
            , g = ['<div ne-click="buildReplyBox(<% this._uid %>)" ne-stat="stat(type-replyClick|area-2)">', '<span class="<% Tie.reply === this ? "z-fcs" : "" %>">\u56de\u590d</span>', "<% if (Tie.reply === this) { %>", t, "<% } %>", "</div>"].join("")
            , m = ['<div class="ygt-share-btn" ne-click="shareWin(<% this._uid %>)" ne-stat="stat(type-share|area-<% Tie.tpl.areaID() %>|commentId-<% this.commentId %>)" ne-id="shareBtn" ne-tmpl="shareTieTpl" ne-data="<% this._uid %>">', '<span class="<% Tie._share === this ? "z-fcs" : "" %>">\u5206\u4eab</span>', "</div>"].join("")
            , v = ['<div ne-id="toolBar" ne-tmpl="operateTpl" ne-data="<% this._uid %>">', '<div class="tool-bar <% (Tie.reply || Tie._share) == this ? "z-fcs" : ""%>">', p, h, f, "<% if (this.state !== 2 && !this.old) { %>", '<span class="i-split">|</span>', m, "<% } %>", "<% if ( Tie.config.enterSwitch && this.buildLevel < Tie.config.maxFloor ) { %>", '<span class="i-split">|</span>', g, "<% } %>", "</div>", '<div ne-id="replyBox" ne-tmpl=">replyTpl" ne-data="<% this._uid %>">', c, "</div>", "</div>"].join("")
            , y = ['<div class="tool-bar z-newly">', '<i class="icon i-<% this.isDel ? "del" : "ok" %>"></i>', '<span class="pub-txt-ok"><% this.isDel ? "\u8ddf\u8d34\u88ab\u5ba1\u6838" : "\u8ddf\u8d34\u53d1\u5e03\u6210\u529f" %></span>', "</div>"].join("")
            , b = ['<div class="tie-title-bar">', '<span class="tie-title"><% Tie.config.cmsTitle %></span>', '<div class="active-wrap">', '<span class="tie-actCount"><% Tie.tpl.formatNumber(Tie.config.activeNum) %></span>', '<span class="tie-join-txt">\u4eba\u53c2\u4e0e</span>', "</div>", "</div>"].join("")
            , w = ['<p class="promote-txt" ne-stat="stat(type-wordsLink|area-2)">', "<% if ( Tie.config.publishUrl ) { %>", '<a href="<% Tie.config.publishUrl %>" target="_blank"><% Tie.config.publishContent %></a>', "<% } else { %>", "<% Tie.config.publishContent %>", "<% } %>", "</p>"].join("")
            , T = ['<div class="tie-tab-bar">', "<ul>", "<% for (var i = 0, items = Tie.config.tabs, len = items.length; i < len; i++) { %>", "<% if (items[i].state === 1) { %>", '<li class="<% i == 0 ? "z-fcs" : "" %>" ne-click="changeTab(<% Tie.set.tabItem[items[i].tabName] %>)" ne-stat="stat(type-<% Tie.set.statItem[items[i].tabName] %>|area-2)">', "<span><% items[i].customName ? items[i].customName : items[i].tabName %></span>", "</li>", "<% } %>", "<% } %>", "</ul>", w, "</div>"].join("")
            , I = ['<div class="tie-list"></div>', '<div class="tie-empty-tip">', '<a href="https://gentie.163.com/" target="_blank">\u7f51\u6613\u4e91\u8ddf\u8d34\uff0c\u6709\u4f60\u66f4\u7cbe\u5f69</a>', "</div>", '<div class="tie-load-more" ne-click="loadMore()" ne-stat="stat(type-load|area-2)">', '<span class="load-sign">+</span>', '<span class="load-txt">\u52a0\u8f7d\u66f4\u591a\u8ddf\u8d34</span>', "</div>", '<div class="tie-page-wrapper"></div>'].join("")
            , x = ['<div class="tie-panel-bar">', '<div class="panel-new">', I, "</div>", '<div class="panel-hot">', I, "</div>", "</div>"].join("")
            , k = ['<div class="tie-list"></div>', '<div class="tie-load-more" ne-click="loadImore()">', '<span class="load-sign">+</span>', '<span class="load-txt">\u52a0\u8f7d\u66f4\u591a\u8ddf\u8d34</span>', "</div>", '<div class="no-more">\u6ca1\u6709\u66f4\u591a\u8ddf\u8d34\u4e86</div>', '<div class="tie-empty"><div class="empty-img"></div></div>'].join("")
            , _ = ['<div class="title-bar">', '<img src="<% this.photo || Tie.userInfo.avatar || "https://simg.ws.126.net/e/img5.cache.netease.com/tie/images/yun/photo_default_62.png.62x62.100.jpg" %>" class="photo">', '<div class="nickname"><% this.nickname || Tie.userInfo.nickname %></div>', "</div>", '<div class="tab-bar">', '<div class="i-cmnt z-fcs<% Tie.tpl.isI(this) ? "" : " z-both" %>" ne-click="changeItab(cmnt)"><% Tie.tpl.isI(this) ? "\u6211" : "TA" %>\u7684\u8ddf\u8d34</div>', "<% if (Tie.tpl.isI(this)) { %>", '<div class="i-tip" ne-click="changeItab(tip)">\u6211\u7684\u63d0\u9192<span class="tip-num"></span></div>', "<% } %>", "</div>", '<div id="cmnt-list" class="list-bar">', k, "</div>", '<div id="tip-list" class="list-bar">', k, "</div>", '<i class="cls-btn" ne-click="closeIwin()" ne-stat="stat(type-personagePageClose|area-4|userId-<% Tie.tpl.userId() %>|loginType-<% Tie.tpl.loginType() %>)"></i>'].join("")
            , S = [b, '<div class="tie-input-bar">', "<% if ( Tie.config.enterSwitch ) { %>", s, "<% } %>", "</div>", T, x, '<div class="tie-i-mask"></div>', '<div class="tie-i-wrap"></div>'].join("");
        e.tpl = {
            layout: ['<div id="yun-tie-sdk-wrap">', '<iframe id="yun-tie-data-ifrm-923" src="<% this.src %>" style="width:0;height:0;visibility: hidden;"></iframe>', "</div>"].join(""),
            mainTpl: S,
            pagingTpl: ["<% if (Tie.config.customized) { %>", o, "<% } else { %>", i, "<% } %>"].join(""),
            trunkTpl: {
                upperTpl: ['<div class="single-tie<% this.newly ? " z-self" :"" %>">', l, '<div class="tie-bdy">', '<div class="bdy-inner">', '<div class="tie-author">', u, '<span class="tie-time"><% Tie.tpl.formatDate(this.pubTime) %></span>', "</div>"].join(""),
                lowerTpl: [d, "<% if (this.newly) { %>", y, "<% } else { %>", v, "<% } %>", "</div>", "</div>", "</div>"].join("")
            },
            floorTpl: {
                upperTpl: '<div class="floor-tie<% Tie.tpl.parallelFlr(this) %>">',
                lowerTpl: ['<div class="floor-tie-self">', '<div class="tie-author">', u, '<span class="floor-NO"><% this.order %></span>', "</div>", d, v, "</div>", "</div>"].join(""),
                middleTpl: ['<div class="floor-tie-self">', '<div class="hide-middle-posts" ne-click="expandMdlFlr(<% this._uid %>,<% this.order %>)" ne-stat="stat(type-expand|area-<% Tie.tpl.areaID() %>)">', '<span class="hide-flr-txt"><% this.hideMdlNum %>\u5c42\u76d6\u697c\u88ab\u9690\u85cf\uff0c\u70b9\u51fb\u5c55\u5f00</span>', "</div>", "</div>", "</div>"].join("")
            },
            userBar: n,
            formTpl: s,
            replyTpl: c,
            upTieTpl: h,
            downTieTpl: f,
            shareTieTpl: m,
            operateTpl: v,
            tipTpl: r,
            ipageTpl: _,
            longStr: function (t, n) {
                return t = t || "",
                    t ? e.tool.subChineseStr(t, n, !0) : ""
            },
            parallelFlr: function (t) {
                var n = t.groupSize - 1
                    , i = t.order
                    , o = Math.floor(e.config.nestedHierarchy / 2)
                    , r = "";
                return e.config.nestedHierarchy <= n && !(i <= o || i > n - o) && (r = e.set.stateCls.parallelFlr),
                    r
            },
            calPageNum: function (t) {
                var n = [1]
                    , i = e.page
                    , o = i[i.tab]
                    , r = o.total
                    , a = o.current
                    , s = a - t
                    , c = a + t;
                s < 2 && (c += Math.abs(s - 2),
                    s = 2),
                    c > r - 1 && (s -= Math.abs(c - (r - 1)),
                        c = r - 1),
                    s < 2 && (s = 2),
                    c > r - 1 && (c = r - 1);
                for (var l = s; l <= c; l++)
                    n.push(l);
                return r > 1 && n.push(r),
                    n
            },
            formatDate: function (e) {
                var t, n = ((new Date).getTime() - new Date(e.replace(/-/g, "/")).getTime()) / 1e3;
                return t = n < 10 ? "\u521a\u521a" : n < 60 ? "15\u79d2\u524d" : n < 3600 ? parseInt(n / 60) + "\u5206\u949f\u524d" : n < 86400 ? parseInt(n / 60 / 60) + "\u5c0f\u65f6\u524d" : n < 259200 ? parseInt(n / 60 / 60 / 24) + "\u5929\u524d" : e
            },
            isSyncWeibo: function () {
                return e.tool.cookie.get(e.set.cookie.syncWeibo) ? "z-active" : "z-disable"
            },
            formatNumber: function (e) {
                return e ? e.toString().split("").reverse().join("").replace(/(\d{3})/g, "$1,").replace(/\,$/, "").split("").reverse().join("") : 0
            },
            ssoIcon: function () {
                var t = e.config.sso;
                return t && t.ssoSwitch && t.platformType.split(/,/)[0] && t.webSwitch && t.webStyle
            },
            isI: function (t) {
                return e.userInfo && parseInt(t.userNO) === parseInt(e.userInfo.userId)
            },
            areaID: function () {
                return e.iwin ? "cmnt" === e.pageI.tab ? e.tpl.isI(e.pageI) ? 6 : 5 : 7 : 2
            },
            loginType: function () {
                return e.userInfo && e.userInfo.loginType
            },
            userId: function () {
                return e.userInfo && e.userInfo.userId
            }
        }
    }(window.Tie),
    function (e) {
        function t(e, t) {
            var n, i = t.essayURL || e.essayUrl, o = t.essayURL || e.essayUrl, r = t.content, a = {};
            return r = r.replace(/<[^>]+>/g, "").replace(/"/g, "\u201c"),
                n = r,
                r.length > 32 && (r = r.substr(0, 32) + "..."),
                n.length > 16 && (n = n.substr(0, 16) + "..."),
                a.url = encodeURIComponent(i),
                a.title = encodeURIComponent("\u300e" + n + "\u300f-- \u6765\u81ea\u6587\u7ae0\u300a" + (t.essayTitle || e.essayTitle) + "\u300b"),
                a.digest = encodeURIComponent(r),
                a.image = "",
                a.url3g = o,
                a
        }
        var n, i, o = e.tool, r = (e.set,
            [{
                id: "qq",
                name: "QQ\u7a7a\u95f4",
                url: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=<% this.url %>&title=<% this.title %>&pics=<% this.image %>&summary=<% this.digest %>",
                stat: "type-shareQzone"
            }, {
                id: "weibo",
                name: "\u65b0\u6d6a\u5fae\u535a",
                url: "http://service.weibo.com/share/share.php?appkey=1755601839&title=<% this.title %>&url=<% this.url %>&pic=<% this.image %>&searchPic=false&source=" + encodeURIComponent("\u7f51\u6613\u8ddf\u8d34") + "sourceUrlhttp://tie.163.com/plaza/recommend.html",
                stat: "type-shareWeibo"
            }, {
                id: "yixin",
                name: "\u6613\u4fe1",
                url: "https://open.yixin.im/share?appkey=yxbf8731c27ff84214994b25be3a4ef1ac&type=image&title=<% this.title %>&pic=<% this.image %>&desc=<% this.digest %>&url=",
                stat: "type-shareYixin"
            }]), a = ['<div id="shareListWin" class="shareListWin">', "<% for (var i = 0, l = Tie.share.types.length; i < l; i++) { %>", '<a href="<% Tie.share.types[i].url %>" class="icon i-<% Tie.share.types[i].id %>" target="_blank" data-share="<% Tie.share.types[i].id %>">&nbsp;</a>', "<% } %>", '<div class="arrow"><span class="arrow-top"></span><span class="arrow-btm"></span></div>', "</div>", '<div id="shareLoadingWin" class="share-loading-win">', '<span class="icon icon-share-loading"></span>', '<span class="loading-txt">\u52a0\u8f7d\u4e2d</span>', "</div>"].join("");
        e.share = {
            types: r,
            template: a,
            show: function (s, c, l) {
                function u() {
                    var e = d.left - n.width() / 2 + l.width() / 2
                        , t = d.top - n.height() - 7;
                    n.css({
                        left: e + "px",
                        top: t + "px"
                    }),
                        i.hide()
                }
                var d = l.position()
                    , p = t(s, c);
                n || (o(document.body).append(o.render(a, c)),
                    n = o("#shareListWin"),
                    i = o("#shareLoadingWin"),
                    n.on("click", "a", function (t) {
                        e.stat(o(this).attr("stat"))
                    })),
                    i.css({
                        top: l.offset().top - n.height() - 60 + "px",
                        display: "block"
                    }),
                    c.shareImage && (p.image = c.shareImage,
                        o.each(n.children(), function (t, n) {
                            var i = o(n).attr("data-share");
                            i && o(n).attr("href", o.render(r[t].url, p)).attr("stat", e.share.types[t].stat + "|area-" + e.tpl.areaID() + "|commentId-" + c.commentId)
                        }),
                        u())
            },
            hide: function () {
                n && n.css({
                    left: "-999px",
                    top: "-999px"
                }),
                    i && i.hide()
            }
        }
    }(window.Tie),
    function (e) {
        function t() {
            var e = {
                skin: 1,
                isHttps: 1,
                product: "gentie",
                promark: "idWFJQV",
                host: "gentie.163.com",
                single: 1,
                page: "login",
                regUrl: "http://zc.reg.163.com/regInitialized",
                prdomain: "",
                placeholder: {
                    account: "\u5e38\u7528\u90ae\u7bb1/\u7f51\u6613\u90ae\u7bb1",
                    pwd: "\u5bc6\u7801"
                },
                needUnLogin: 1,
                defaultUnLogin: 1,
                needQrLogin: 0,
                needPrepare: 0,
                needanimation: 1,
                coverBackground: "background:-webkit-radial-gradient(center,rgba(0,0,0,0.3),#000 75%);",
                iframeShowAnimation: "showAnimation .5s",
                cssDomain: "https://img1.cache.netease.com/f2e/tie/yun/sitegov/css/",
                cssFiles: "sdk_common.css",
                errMode: 1,
                oauthLoginConfig: [{
                    name: "qq"
                }, {
                    name: "weibo"
                }],
                closecb: function () {
                    N.delCls("z-lock-scroll")
                },
                logincb: function () {
                    n({
                        action: "userInfo"
                    }),
                        N.delCls("z-lock-scroll")
                }
            };
            return new window.URS(e)
        }
        function n(e) {
            B.postMessage(x.stringify(e), "*")
        }
        function i() {
            var e = E.position().top;
            x.scrollTo(0, e + 246, 200)
        }
        function o(t, n) {
            var n = n || (e.iwin ? U[I.tab] : U[D.tab]);
            x.refresh(t, n)
        }
        function r(t, n) {
            var i, r = !1, a = e.tool, s = a.trim(t.content);
            return e.userInfo || C.anonymousSwitch ? (s.length <= 0 ? i = "\u8bf7\u8f93\u5165\u5185\u5bb9" : s.length < 2 ? i = "\u5185\u5bb9\u592a\u5c11\uff0c\u591a\u6253\u8d4f\u70b9\u6587\u5b57\u5427" : s.length > 1e3 ? i = "\u5185\u5bb9\u592a\u591a\uff0c\u8bf7\u7626\u8eab\u52301000\u5b57\u5185" : r = !0,
                r || (n.parent().prev().prev()[0].focus(),
                    e.tipTxt = i,
                    o("tipBox", n.parent()),
                    e.tipTxt = "",
                    setTimeout(function () {
                        n.parent().find(".submit-tip").hide()
                    }, 3e3)),
                r) : (e.lastInput = s,
                    P.showIframe({
                        page: "login"
                    }),
                    void N.addCls("z-lock-scroll"))
        }
        function a(t) {
            var n = t.boxTie
                , r = t.result
                , a = t.replyTie
                , s = e.submitScope;
            if (1 === r.code) {
                var c = S.tie.init(n.content, e.userInfo, r)
                    , l = e.userInfo ? e.userInfo.userId : ""
                    , u = {
                        commentId: r.data.commentId + "",
                        userId: l,
                        handleStatus: "true"
                    };
                U[D.tab].child(0).show().prepend(S.tie.newTrunkNode(a ? a.id : "", c)),
                    n.parentId ? (v(x.extend(u, {
                        type: "reply",
                        area: 2,
                        parentId: n.parentId
                    })),
                        e.reply = null,
                        o("toolBar")) : (v(x.extend(u, {
                            type: "addTie",
                            area: 1
                        })),
                            o("tieBox", E)),
                    U[D.tab].child(1).hide(),
                    i(),
                    s.boxTie = {}
            } else
                e.tipTxt = _.codeMsg[r.code],
                    o("tipBox", x(e.submitBtn).parent()),
                    e.tipTxt = "",
                    setTimeout(function () {
                        x(e.submitBtn).parent().find(".submit-tip").hide()
                    }, 3e3)
        }
        function s() {
            o("userBar", E)
        }
        function c(e) {
            return 1 === e.code
        }
        function l() {
            for (var e, t = [], n = C.tabs, i = 0, o = C.tabs.length; i < o; i++)
                e = n[i],
                    e.state && t.push(e);
            C.tabs = t,
                D.tab = "\u6700\u70ed" === C.tabs[0].tabName ? _.tabItem.hot : _.tabItem.xin
        }
        function u(e) {
            e.customized && (D.hot.size = D.xin.size = D.hot.load.step = D.xin.load.step = e.customSize),
                /\.k618\.cn$/.test(document.domain) && (D.hot.size = D.xin.size = D.hot.load.step = D.xin.load.step = 5)
        }
        function d(e) {
            return e ? void (x.isArray(e) && (W[D.tab] = W[D.tab] || {},
                W[D.tab][D[D.tab].current] = e)) : W[D.tab] && W[D.tab][D[D.tab].current]
        }
        function p(e) {
            if (I) {
                var t = I.tab;
                if (!e)
                    return W[t] && W[t][I[t].current];
                x.isArray(e) && (W[t] = W[t] || {},
                    W[t][I[t].current] = e)
            }
        }
        function h(e, t) {
            var n = D[D.tab]
                , i = e.child(0)
                , o = e.child(1)
                , r = e.child(2)
                , a = e.child(3);
            0 === t.length ? o.show() : (o.hide(),
                1 === n.current && n.count > n.load.step ? (n.load.flag < n.size ? (t = t.slice(n.load.flag, n.load.flag += n.load.step),
                    i.append(S.tie.buildView(t))) : i.html(S.tie.buildView(t)),
                    n.load.flag < n.size && n.load.flag < n.count ? r.show() : (r.hide(),
                        a.show().html(x.render(k.pagingTpl, n)))) : (i.html(S.tie.buildView(t)),
                            a.show().html(x.render(k.pagingTpl, n))),
                i.show())
        }
        function f(t) {
            var i, o, r = D[D.tab];
            return t && 500 === t.code ? void (e.errorCount ? e.errorCount = void 0 : (e.errorCount = 1,
                n({
                    action: "getList",
                    pageNum: r.current,
                    pageSize: r.size,
                    tab: D.tab
                }))) : void (t && 1 === t.code ? (i = t.data,
                    r.count = i.size,
                    r.total = Math.ceil(i.size / r.size),
                    i = S.tie.adaptData(i),
                    d(i),
                    h(U[D.tab], i)) : (U[D.tab].show().siblings().hide(),
                        o = d(),
                        o && o.length > 0 ? h(U[D.tab], o) : n({
                            action: "getList",
                            pageNum: r.current,
                            pageSize: r.size,
                            tab: D.tab
                        })))
        }
        function g() {
            l(),
                E.prepend(x.render(k.mainTpl)),
                C.skinId = C.skinId ? C.skinId : 1,
                // x.loadCSS(_.skins[C.skinId].css), 不加载皮肤
                U[_.tabItem.xin] = E.child(3).child(0),
                U[_.tabItem.hot] = E.child(3).child(1),
                f()
        }
        function m() {
            x(".cloud-tie-join-count .join-count").html(C.activeNum),
                x(".cloud-tie-join-count").bind("click", function (e) {
                    var t = E.position().top;
                    x.scrollTo(0, t, 200)
                })
        }
        function v(e) {
            n({
                action: "stat",
                ext: e
            })
        }
        function y(t) {
            if (c(t)) {
                if (x.extend(C, _.defaultConfig, window.cloudTieConfig, t.data),
                    x.extend(C, {
                        essayUrl: location.href,
                        essayTitle: document.title
                    }),
                    u(C),
                    x.extend(e, {
                        config: C,
                        page: D,
                        isSPEC: !1
                    }),
                    !C.cloudSwitch || !C.totalSwitch)
                    return !1;
                e.getUserInfo(),
                    v({
                        type: "threadCheckApi"
                    }),
                    g(),
                    C.needCrawler && e.third.extractor.parse(function (e) {
                        n({
                            action: "extractEssay",
                            title: e.title,
                            content: e.content,
                            url: location.href
                        })
                    }),
                    m()
            }
        }
        function b(t) {
            I = {
                tab: "cmnt",
                size: 10,
                cmnt: {
                    loaded: 0,
                    total: 0
                },
                tip: {
                    loaded: 0,
                    total: 0
                }
            },
                I.userNO = t,
                U.cmnt = z.child(2),
                U.tip = z.child(3),
                U.tipNum = z.child(1).find(".tip-num"),
                z.find(".tie-list").empty(),
                z.bind("scroll", function (t) {
                    e._share || (o("shareBtn"),
                        e.share.hide())
                });
            var i = I[I.tab].loaded / I.size + 1;
            n({
                action: "getIlist",
                pageNum: i,
                pageSize: I.size,
                tab: I.tab,
                userNO: I.userNO
            }),
                e.userInfo && e.userInfo.userId === I.userNO && n({
                    action: "myNotiecNum"
                })
        }
        function w(e) {
            var t = I.tab;
            if (1 === e.code) {
                var n = S.tie.adaptData(e.data, !0);
                p(n),
                    U[t].show().child(0).append(S.tie.buildView(n, "foldAll")),
                    I[t].loaded += e.data.commentIdsAndDocId.length,
                    I[t].total = e.data.total,
                    I[t].total > 0 ? I[t].loaded < I[t].total && e.data.commentIdsAndDocId.length > 0 ? U[t].child(1).show() : (U[t].child(1).hide(),
                        U[t].child(2).show()) : U[t].child(3).show()
            }
        }
        function T() {
            if (z) {
                var e = x(window).width()
                    , t = x(window).height()
                    , n = e < 752 ? e : 752
                    , i = .8 * t;
                z.css({
                    width: n + "px",
                    height: i + "px",
                    marginTop: -i / 2 + "px",
                    marginLeft: -n / 2 + "px"
                }),
                    z.child(2).height(i - 200),
                    z.child(3).height(i - 200)
            }
        }
        var I, x = e.tool, k = e.tpl, _ = e.set, S = e.model, C = {}, N = x(document.documentElement), D = {
            tab: _.tabItem.hot,
            hot: {
                total: 0,
                current: 1,
                size: 30,
                count: 0,
                load: {
                    flag: 0,
                    step: 10
                }
            },
            xin: {
                total: 0,
                current: 1,
                size: 30,
                count: 0,
                load: {
                    flag: 0,
                    step: 10
                }
            }
        };
        x(document.head || document.getElementsByTagName("head")[0]).append('<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>');
        var M = x.stringify({
            url: window.location.href,
            UA: navigator.userAgent
        });
        x.getData({
            url: "https://api.gentie.163.com/ack",
            data: {
                data: M
            },
            crossDomain: !0
        });
        var j = /(\?|&)debug=([a-zA-Z0-9]+)(&)?/
            , O = ""
            , L = "https://api.gentie.163.com/pc/inner.html";
        j.test(window.location.href) && (O = window.location.href.match(j)[2],
            "qa" === O && (O = "qaapi"),
            L = "https://" + O + ".gentie.163.com/pc/inner.html",
            /local/.test(O) && (L = "http://dev.f2e.gentie.163.com/tie/yun/sdk_dev/pc/inner.html"),
            /dev/.test(O) && (L = "inner.html?dev")),
            cloudTieConfig.dataApi && (L = cloudTieConfig.dataApi + "/pc/inner.html"),
            e.view = {};
        var A, z, E = e.view.wrapper = x("#" + window.cloudTieConfig.target).append(x.render(k.layout, {
            src: L
        })).child(0), U = {}, R = x("#yun-tie-data-ifrm-923"), B = R[0].contentWindow, P = t();
        x("[id^='x-URS']").on("click", "[id^='x-discover']", function () {
            P.closeIframe(),
                N.delCls("z-lock-scroll")
        }),
            e.view.sendMsg = n;
        var H = !0;
        R.bind("load", function (e) {
            H && (n({
                action: "initView",
                config: window.cloudTieConfig
            }),
                H = !1)
        });
        var G = e.getByUID = function (e) {
            return S.tie.findByUID(e, d()) || S.tie.findByUID(e, p())
        }
            ;
        e.view.refreshUserBar = s;
        var W = {};
        e.cache = d,
            S.tie.cache = d,
            e.getUserInfo = function () {
                n({
                    action: "userInfo"
                })
            }
            ,
            e.stat = v;
        var q = e.controller.create({
            init: function (t) {
                this.el = t,
                    this.boxTie = {},
                    this.delegateEvents(["click", "focus", "blur", "keyup", "stat"]),
                    x(document.body).on("click", function (t) {
                        e._share || (o("shareBtn"),
                            e.share.hide())
                    })
            },
            hideInputTip: function (e, t, n) {
                var i = x(this).parent();
                i.child(0)[0].focus(),
                    i.addCls("z-fcs"),
                    n && i.parent().prev().find(".arrow").addCls("z-fcs")
            },
            showInputTip: function (e, t, n) {
                var i = x(this).parent();
                x.trim(x(this).val()) || (i.delCls("z-fcs"),
                    n && i.parent().prev().find(".arrow").delCls("z-fcs"))
            },
            submitTie: function (t, i, o) {
                var a = this
                    , s = i.boxTie
                    , c = o ? G(o) : null;
                e.submitBtn = a,
                    e.submitScope = i,
                    c && (s.parentId = c.commentId),
                    e.userInfo && e.userInfo.isWeibo && x.cookie.get(_.cookie.syncWeibo) && x.extend(s, {
                        type: 1,
                        essayUrl: C.essayUrl,
                        essayTitle: C.essayTitle
                    }),
                    s.content = s.content || e.lastInput,
                    r(s, x(this)) ? n({
                        action: "submitTie",
                        boxTie: s,
                        replyTie: c
                    }) : i.boxTie = {}
            },
            showLoginWin: function (e, t) {
                P.showIframe({
                    page: "login"
                }),
                    N.addCls("z-lock-scroll")
            },
            expandMdlFlr: function (e, t, n, i) {
                var i = parseInt(i)
                    , o = x(this).parents()[3 + parseInt(i)]
                    , o = x(o)
                    , r = G(n)
                    , a = S.tie.findGroupById(2 === i ? d() : p(), r.id);
                setTimeout(function () {
                    o.before(S.tie.buildTrunkNode(a, "on")),
                        o.remove()
                }, 50)
            },
            buildReplyBox: function (t, n, i) {
                var r = G(i);
                e.reply = r === e.reply ? null : r,
                    setTimeout(function () {
                        o("toolBar"),
                            e.reply && E.find("textarea")[1].focus()
                    }, 20)
            },
            upTie: function (e, t, i) {
                var r = G(i);
                r.uped || (n({
                    action: "upTie",
                    tieID: r.id
                }),
                    setTimeout(function () {
                        r.uped = !0,
                            r.up++ ,
                            o("upTie:" + i),
                            r.upOver = !0,
                            v({
                                type: "vote",
                                area: 2,
                                commentId: r.commentId + "",
                                handleStatus: "true"
                            })
                    }, 100))
            },
            downTie: function (e, t, i) {
                var r = G(i);
                r.downed || (n({
                    action: "downTie",
                    tieID: r.id
                }),
                    setTimeout(function () {
                        r.downed = !0,
                            r.down++ ,
                            o("downTie:" + i),
                            r.downOver = !0,
                            v({
                                type: "down",
                                area: 2,
                                commentId: r.commentId + "",
                                handleStatus: "true"
                            })
                    }, 100))
            },
            shareWin: function (t, i, o) {
                var r = x(this)
                    , a = e._share = G(o);
                e._sharing = !0,
                    e._shareTarget = r,
                    n({
                        action: "shareData",
                        tie: a
                    })
            },
            enterPage: function (e, t, n) {
                13 === e.keyCode && t.changePage(e, t, n)
            },
            changePage: function (e, t, n) {
                var o = (x(e.target),
                    D[D.tab])
                    , n = parseInt(n) || 1;
                n > D.total && (n = D.total),
                    n < 1 && (n = 1),
                    o.current !== n && (o.current = n,
                        f(),
                        i())
            },
            stat: function (e, t, n) {
                n && v(n)
            },
            loginOut: function (t) {
                t.preventDefault(),
                    "ssoUser" === e.userInfo.loginType ? x.getData({
                        url: C.sso.logoutApi,
                        jsonpCallback: "callback"
                    }, function (e) {
                        n({
                            action: "exitAllUser"
                        })
                    }) : n({
                        action: "exitYunUser"
                    })
            },
            changeTab: function (e, t, n) {
                var i = x(this);
                n !== D.tab && (i.siblings().delCls("z-fcs"),
                    i.addCls("z-fcs"),
                    D.tab = n,
                    f())
            },
            loadMore: function (e, t) {
                D[D.tab];
                f()
            },
            wbSyncSet: function (e, t) {
                x.cookie.get(_.cookie.syncWeibo) ? x.cookie.del(_.cookie.syncWeibo, "", "/") : x.cookie.set(_.cookie.syncWeibo, "1", "3y", "", "/"),
                    o("userBar")
            },
            thirdOauth: function (e, t, i) {
                e.preventDefault(),
                    n({
                        action: "openWin",
                        url: i
                    })
            },
            ssoOauth: function (e, t) {
                1 === C.sso.webType && n({
                    action: "openWin",
                    url: C.sso.webStyle
                }),
                    2 === C.sso.webType && new Function(C.sso.webStyle).call()
            },
            showIwin: function (t, n, i) {
                if (!e.iwin) {
                    var o = i ? G(i) : void 0
                        , r = o && o.userNO || e.userInfo.userId;
                    A = A || E.child(-3),
                        z = z || E.child(-2),
                        A.show(),
                        z.show().html(x.render(k.ipageTpl, o ? o : {
                            userNO: r
                        })),
                        b(r),
                        T(),
                        N.addCls("z-lock-scroll"),
                        e.pageI = I,
                        e.iwin = !0
                }
            },
            closeIwin: function (t, n) {
                A.hide(),
                    z.hide(),
                    N.delCls("z-lock-scroll"),
                    e.iwin = !1
            },
            loadImore: function (e, t) {
                var i = Math.ceil(I[I.tab].loaded / I.size) + 1;
                n({
                    action: "getIlist",
                    pageNum: i,
                    pageSize: I.size,
                    tab: I.tab,
                    userNO: I.userNO
                }),
                    v({
                        type: "load",
                        area: k.areaID()
                    })
            },
            changeItab: function (t, i, o) {
                var r, a = x(this);
                o !== I.tab && (a.siblings().delCls("z-fcs"),
                    a.addCls("z-fcs"),
                    U[I.tab].hide(),
                    "tip" === I.tab && U.tipNum.hide(),
                    I.tab = o,
                    U[o].show(),
                    r = I[I.tab].loaded / I.size + 1,
                    I[I.tab].loaded <= 0 && n({
                        action: "getIlist",
                        pageNum: r,
                        pageSize: I.size,
                        tab: I.tab,
                        userNO: I.userNO
                    }),
                    k.isI(I) && v({
                        type: "tip" === I.tab ? "myRemindsClick" : "myCommentsClick",
                        userId: e.userInfo.userId,
                        loginType: e.userInfo.loginType,
                        area: k.areaID()
                    }))
            }
        });
        new q(E),
            x(window).bind("message", function (t) {
                var n, i;
                if (t.source === B) {
                    if (n = "object" == typeof t.data ? t.data : x.parseJSON(t.data),
                        i = n.action,
                        "initView" === i && y(n.config),
                        "getList" === i && f(n.obj),
                        "userInfo" === i) {
                        e.userInfo = n.userInfo
                    }
                    "loginSuccess" !== i && "userInfo" !== i && "SSO_login" !== i || (e.userInfo = n.userInfo) && s(),
                        "SSO_exit" === i && ((e.userInfo = n.userInfo) || s()),
                        "logout" === i && (e.userInfo = null,
                            s()),
                        "shareData" === i && (e.share.show(C, n.tie, e._shareTarget),
                            o("toolBar"),
                            e._share = null),
                        "submitTie" === i && a(n),
                        "getIlist" === i && w(n.obj),
                        "myNotiecNum" === i && 1 === n.obj.code && n.obj.data.newnoticecount > 0 && U.tipNum.html("(" + n.obj.data.newnoticecount + ")")
                }
            }),
            x(window).bind("resize", T)
    }(window.Tie),
    function (e) {
        window.define = e.define,
            e.define = void 0,
            window.__Tie && (window.Tie = window.__Tie)
    }(window.Tie);
