(function(w, d) {

    var body = d.body,
        gotop = d.getElementById('gotop'),
        menu = d.getElementById('menu'),
        header = d.getElementById('header'),
        mask = d.getElementById('mask'),
        menuToggle = d.getElementById('menu-toggle'),
        menuOff = d.getElementById('menu-off'),
        menuShare = d.getElementById('menu-share'),
        loading = d.getElementById('loading'),
        animate = w.requestAnimationFrame,
        ua = navigator.userAgent,
        isMD = ua.indexOf('Mobile') !== -1 || ua.indexOf('Android') !== -1 || ua.indexOf('iPhone') !== -1 || ua.indexOf('iPad') !== -1 || ua.indexOf('KFAPWI') !== -1,
        even = isMD ? 'touchstart' : 'click',
        noop = function() {},
        offset = function(el) {
            var x = el.offsetLeft,
                y = el.offsetTop;

            if (el.offsetParent) {
                var pOfs = arguments.callee(el.offsetParent);
                x += pOfs.x;
                y += pOfs.y;
            }

            return {
                x: x,
                y: y
            };
        };

    var Blog = {
        goTop: function() {
            var top = body.scrollTop;
            if (top > 400) {
                body.scrollTop = top - 400;
                animate(arguments.callee);
            } else {
                body.scrollTop = 0;
            }
        },
        toggleGotop: function(top) {
            if (top > w.innerHeight / 2) {
                gotop.classList.add('in');
            } else {
                gotop.classList.remove('in');
            }
        },
        toggleMenu: function(flag) {
            if (flag) {
                menu.classList.remove('hide');

                if(w.innerWidth < 1241) {
                    mask.classList.add('in');
                    menu.classList.add('show');
                }

            } else {
                menu.classList.remove('show');
                mask.classList.remove('in');
            }
        },
        fixedHeader: function(top) {
            if (top > header.clientHeight) {
                header.classList.add('fixed');
            } else {
                header.classList.remove('fixed');
            }
        },
        fixedToc: (function() {
            var toc = d.getElementById('post-toc');

            if (!toc) {
                return noop;
            }

            var tocOfs = offset(toc),
                tocTop = tocOfs.y;

            return function(top) {
                if (top > tocTop) {
                    toc.classList.add('fixed');
                } else {
                    toc.classList.remove('fixed');
                }
            };
        })(),
        share: function() {

            var share = d.getElementById('global-share'),
                data = share.dataset,
                title = data.title,
                url = data.url,
                summary = data.summary,
                pic = data.pic,
                div = d.createElement('div'),
                sns = d.getElementsByClassName('share-sns'),
                api;

            div.innerHTML = summary;
            summary = div.innerText;
            div = undefined;

            api = 'http://www.jiathis.com/send/?webid={service}&url=' + url + '&title=' + title + '&summary=' + summary + '&pic=' + pic;

            function goShare(service) {
                w.open(encodeURI(api.replace('{service}', service)));
            }

            [].forEach.call(sns, function(el) {
                el.addEventListener('click', function() {
                    goShare(this.dataset.service);
                }, false);
            });

            return {
                show: function() {
                    mask.classList.add('in');
                    share.classList.add('in');
                },
                hide: function() {
                    share.classList.remove('in');
                    mask.classList.remove('in');
                }
            };
        }
    };

    menu.addEventListener('touchmove', function(e) {
        e.preventDefault();
    });


    w.addEventListener('load', function() {
        loading.classList.remove('active');
    });

    w.addEventListener('resize', function() {
        Blog.toggleMenu();
    });

    var share = Blog.share();

    menuShare.addEventListener(even, function() {
        share.show();
    }, false);

    gotop.addEventListener(even, function() {
        animate(Blog.goTop);
    }, false);

    menuToggle.addEventListener(even, function() {
        Blog.toggleMenu(true);
    }, false);

    menuOff.addEventListener(even, function() {
        menu.classList.add('hide');
    }, false);

    mask.addEventListener(even, function() {
        Blog.toggleMenu();
        share.hide();
    }, false);

    d.addEventListener('scroll', function() {
        var top = body.scrollTop;
        Blog.toggleGotop(top);
        Blog.fixedHeader(top);
        Blog.fixedToc(top);
    }, false);

    Waves.init();
    Waves.attach('.waves-button-light', ['waves-button', 'waves-light']);
    Waves.attach('.waves-circle-light', ['waves-circle', 'waves-light']);
    Waves.attach('.waves-block, .global-share li', ['waves-block']);
    Waves.attach('.article-tag-list-link, #page-nav a, #page-nav span', ['waves-button']);

})(window, document);
