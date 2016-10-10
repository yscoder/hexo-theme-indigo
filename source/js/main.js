(function(w, d) {

    var body = d.body,
        root = d.querySelector('html'),
        gotop = d.getElementById('gotop'),
        menu = d.getElementById('menu'),
        header = d.getElementById('header'),
        mask = d.getElementById('mask'),
        menuToggle = d.getElementById('menu-toggle'),
        menuOff = d.getElementById('menu-off'),
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
        },
        docEl = ua.indexOf('Firefox') !== -1 ? d.documentElement : body;

    var Blog = {
        goTop: function() {
            var top = docEl.scrollTop;
            if (top > 400) {
                docEl.scrollTop = top - 400;
                animate(arguments.callee);
            } else {
                docEl.scrollTop = 0;
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

                if (w.innerWidth < 1241) {
                    mask.classList.add('in');
                    menu.classList.add('show');
                    root.classList.add('lock');
                }

            } else {
                menu.classList.remove('show');
                mask.classList.remove('in');
                root.classList.remove('lock');
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

            if (!toc || !toc.children.length) {
                return noop;
            }

            var tocOfs = offset(toc),
                tocTop = tocOfs.y,
                headerH = header.clientHeight,
                titles = d.getElementById('post-content').querySelectorAll('h1, h2, h3, h4, h5, h6');

            toc.querySelector('a[href="#' + titles[0].id + '"]').parentNode.classList.add('active');  

            [].forEach.call(toc.querySelectorAll('a[href*="#"]'), function(el){
                
                el.addEventListener('click', function(e){
                    e.preventDefault();
                    docEl.scrollTop = offset(d.querySelector('[id="'+ decodeURIComponent(this.hash).substr(1) +'"]')).y - headerH + 10;
                })
            });

            function setActive(top) {

                for (i = 0, len = titles.length; i < len; i++) {
                    if (top > offset(titles[i]).y - headerH) {
                        toc.querySelector('li.active').classList.remove('active');

                        var active = toc.querySelector('a[href="#' + titles[i].id + '"]').parentNode;
                        active.classList.add('active');

                        if(active.offsetTop >= toc.clientHeight - headerH) {
                            toc.scrollTop = active.offsetTop - toc.clientHeight + parseInt(w.innerHeight/3);
                        } else {
                            toc.scrollTop = 0;
                        }
                    } 
                }

                if(top < offset(titles[0]).y) {
                    toc.querySelector('li.active').classList.remove('active');
                    toc.querySelector('a[href="#' + titles[0].id + '"]').parentNode.classList.add('active');  
                }
            }

            return function(top) {
                if (top > tocTop - headerH) {
                    toc.classList.add('fixed');
                } else {
                    toc.classList.remove('fixed');
                    
                }

                setActive(top);

            };
        })(),
        share: function() {

            var share = d.getElementById('global-share'),
                menuShare = d.getElementById('menu-share'),
                div = d.createElement('div'),
                sns = d.getElementsByClassName('share-sns'),
                summary, api;

            div.innerHTML = BLOG_SHARE.summary;
            summary = div.innerText;
            div = undefined;

            api = 'http://www.jiathis.com/send/?webid={service}&url=' + BLOG_SHARE.url + '&title=' + BLOG_SHARE.title + '&summary=' + summary + '&pic=' + location.protocol + '//' + location.host + BLOG_SHARE.pic;

            function goShare(service) {
                w.open(encodeURI(api.replace('{service}', service)));
            }

            function show() {
                mask.classList.add('in');
                share.classList.add('in');
            }

            function hide() {
                share.classList.remove('in');
                mask.classList.remove('in');
            }

            [].forEach.call(sns, function(el) {
                el.addEventListener('click', function() {
                    goShare(this.dataset.service);
                }, false);
            });

            menuShare.addEventListener(even, function() {
                show();
            }, false);

            mask.addEventListener(even, function() {
                hide();
            }, false);
        },
        search: function() {
            var searchWrap = d.getElementById('search-wrap');

            function toggleSearch() {
                searchWrap.classList.toggle('in');
            }

            d.getElementById('search').addEventListener(even, toggleSearch);
        },
        reward: (function(){

            var reward = d.getElementById('reward');
            var rewardBtn = d.getElementById('rewardBtn');
            var rewardOff = d.getElementById('rewardOff');

            if(!reward) {
                return;
            }

            function show(){
                mask.classList.add('in');
                reward.classList.add('ready');
                setTimeout(function(){
                    reward.classList.add('in');
                    d.addEventListener(even, hideByBody);
                }, 0) 
            }

            function hide(){
                mask.classList.remove('in');
                reward.classList.remove('in');
                setTimeout(function(){
                    reward.classList.remove('ready');
                    d.removeEventListener(even, hideByBody);
                }, 300)
            }

            function hideByBody(e){
                if(!reward.contains(e.target)) {
                    hide();
                }
            }

            rewardBtn.addEventListener(even, function(){
                return reward.classList.contains('in') ? hide() : show();
            });
            rewardOff.addEventListener(even, hide);

        })(),
        fixNavMinH: (function(){
            var nav = d.querySelector('.nav');

            function calcH() {
                nav.style.minHeight =  (nav.parentNode.clientHeight - nav.nextElementSibling.offsetHeight) + 'px';
            }

            return calcH;
        })()
    };

    w.addEventListener('load', function() {
        Blog.fixNavMinH();
        loading.classList.remove('active');
    });

    w.addEventListener('resize', function() {
        Blog.fixNavMinH();
        Blog.toggleMenu();
    });

    gotop.addEventListener(even, function() {
        animate(Blog.goTop);
    }, false);

    menuToggle.addEventListener(even, function(e) {
        Blog.toggleMenu(true);
        e.preventDefault();
    }, false);

    menuOff.addEventListener(even, function() {
        menu.classList.add('hide');
    }, false);

    mask.addEventListener(even, function() {
        Blog.toggleMenu();
    }, false);

    d.addEventListener('scroll', function() {
        var top = docEl.scrollTop;
        Blog.toggleGotop(top);
        Blog.fixedHeader(top);
        Blog.fixedToc(top);
    }, false);

    if (typeof BLOG_SHARE !== 'undefined') {
        Blog.share();
    }

    Waves.init();
    Waves.attach('.global-share li', ['waves-block']);
    Waves.attach('.article-tag-list-link, #page-nav a, #page-nav span', ['waves-button']);

})(window, document);
