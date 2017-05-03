!function (e) {
    function t(e, t) {
        var n = document.createElement("script");
        return n.src = e,
            n.async = !1,
            n.charset = "utf-8",
            t ? l.appendChild(n) : h.appendChild(n),
            n
    }
    function n(e, t) {
        var n = document.createElement("link");
        return n.rel = "stylesheet",
            n.type = "text/css",
            n.href = e,
            t ? l.appendChild(n) : h.appendChild(n),
            n
    }
    function a(e) {
        if (!u) {
            for (var a, i = 0, r = e.length; i < r; i++)
                a = e[i],
                    d.test(a) && t(a, !1),
                    c.test(a) && n(a, !1);
            l.appendChild(h),
                u = !0
        }
    }
    function r(e) {
        a(window.cloudTieConfig[e === 'pc' ? 'pcFiles' : 'mobileFiles'])
    }
    function o() {
        var e = navigator.userAgent.toLowerCase()
            , t = "ipad" == e.match(/ipad/i)
            , n = "iphone os" == e.match(/iphone os/i)
            , a = "midp" == e.match(/midp/i)
            , i = "rv:1.2.3.4" == e.match(/rv:1.2.3.4/i)
            , r = "ucweb" == e.match(/ucweb/i)
            , o = "android" == e.match(/android/i)
            , d = "windows ce" == e.match(/windows ce/i)
            , c = "windows mobile" == e.match(/windows mobile/i);
        return t || n || a || i || r || o || d || c
    }
    var d = /\.js(\?.*)?$/
        , c = /\.css(\?.*)?$/
        , h = document.createDocumentFragment()
        , u = !1
        , l = document.head || document.getElementsByTagName("head")[0];
    window.yunManualLoad || window.yunModuleEnv || (o() ? r('mobile') : r('pc')),
        e.Tie = e.Tie || {},
        e.Tie.loader = r
}(window);
