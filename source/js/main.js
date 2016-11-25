(function (w, d) {

    var body = d.body,
        $ = d.querySelector.bind(d),
        $$ = d.querySelectorAll.bind(d),
        root = $('html'),
        gotop = $('#gotop'),
        menu = $('#menu'),
        header = $('#header'),
        mask = $('#mask'),
        menuToggle = $('#menu-toggle'),
        menuOff = $('#menu-off'),
        loading = $('#loading'),
        animate = w.requestAnimationFrame,
        scrollSpeed = 200 / (1000 / 60),
        forEach = Array.prototype.forEach,
        even = ('ontouchstart' in w && /Mobile|Android|iOS|iPhone|iPad|iPod|Windows Phone|KFAPWI/i.test(navigator.userAgent)) ? 'touchstart' : 'click',
        isWX = /micromessenger/i.test(navigator.userAgent),
        noop = function () { },
        offset = function (el) {
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
        docEl = navigator.userAgent.indexOf('Firefox') !== -1 ? d.documentElement : body;

    var Blog = {
        goTop: function (end) {
            var top = docEl.scrollTop;
            var interval = arguments.length > 2 ? arguments[1] : Math.abs(top - end) / scrollSpeed;

            if (top && top > end) {
                docEl.scrollTop = Math.max(top - interval, 0);
                animate(arguments.callee.bind(this, end, interval));
            } else if (end && top < end) {
                docEl.scrollTop = Math.min(top + interval, end);
                animate(arguments.callee.bind(this, end, interval));
            } else {
                this.toc.actived(end);
            }
        },
        toggleGotop: function (top) {
            if (top > w.innerHeight / 2) {
                gotop.classList.add('in');
            } else {
                gotop.classList.remove('in');
            }
        },
        toggleMenu: function (flag) {
            var main = $('#main');
            if (flag) {
                menu.classList.remove('hide');

                if (w.innerWidth < 1241) {
                    mask.classList.add('in');
                    menu.classList.add('show');

                    if (isWX) {
                        var top = docEl.scrollTop;
                        main.classList.add('lock');
                        main.scrollTop = top;
                    } else {
                        root.classList.add('lock');
                    }
                }

            } else {
                menu.classList.remove('show');
                mask.classList.remove('in');
                if (isWX) {
                    var top = main.scrollTop;
                    main.classList.remove('lock');
                    docEl.scrollTop = top;
                } else {
                    root.classList.remove('lock');
                }

            }
        },
        fixedHeader: function (top) {
            if (top > header.clientHeight) {
                header.classList.add('fixed');
            } else {
                header.classList.remove('fixed');
            }
        },
        toc: (function () {
            var toc = $('#post-toc');

            if (!toc || !toc.children.length) {
                return {
                    fixed: noop,
                    actived: noop
                }
            }

            var tocOfs = offset(toc),
                tocTop = tocOfs.y,
                headerH = header.clientHeight,
                titles = $('#post-content').querySelectorAll('h1, h2, h3, h4, h5, h6');

            toc.querySelector('a[href="#' + titles[0].id + '"]').parentNode.classList.add('active');

            forEach.call($$('a[href^="#"]'), function (el) {

                el.addEventListener('click', function (e) {
                    e.preventDefault();
                    var top = offset($('[id="' + decodeURIComponent(this.hash).substr(1) + '"]')).y - headerH;
                    animate(Blog.goTop.bind(Blog, top));
                })
            });

            return {
                fixed: function (top) {
                    if (top > tocTop - headerH) {
                        toc.classList.add('fixed');
                    } else {
                        toc.classList.remove('fixed');
                    }
                },
                actived: function (top) {
                    for (i = 0, len = titles.length; i < len; i++) {
                        if (top > offset(titles[i]).y - headerH - 5) {
                            toc.querySelector('li.active').classList.remove('active');

                            var active = toc.querySelector('a[href="#' + titles[i].id + '"]').parentNode;
                            active.classList.add('active');
                        }
                    }

                    if (top < offset(titles[0]).y) {
                        toc.querySelector('li.active').classList.remove('active');
                        toc.querySelector('a[href="#' + titles[0].id + '"]').parentNode.classList.add('active');
                    }
                }
            }
        })(),
        hideOnMask: [],
        modal: function (target) {
            this.$modal = $(target);
            this.$off = this.$modal.querySelector('.close');

            var _this = this;

            this.show = function () {
                mask.classList.add('in');
                _this.$modal.classList.add('ready');
                setTimeout(function () {
                    _this.$modal.classList.add('in');
                }, 0)
            }

            this.onHide = noop;

            this.hide = function () {
                _this.onHide();
                mask.classList.remove('in');
                _this.$modal.classList.remove('in');
                setTimeout(function () {
                    _this.$modal.classList.remove('ready');
                }, 300)
            }

            this.toggle = function () {
                return _this.$modal.classList.contains('in') ? _this.hide() : _this.show();
            }

            Blog.hideOnMask.push(this.hide);
            this.$off && this.$off.addEventListener(even, this.hide);
        },
        share: function () {

            var pageShare = $('#pageShare'),
                fab = $('#shareFab');

            var shareModal = new this.modal('#globalShare');

            $('#menuShare').addEventListener(even, shareModal.toggle);

            if (fab) {
                fab.addEventListener(even, function () {
                    pageShare.classList.toggle('in')
                }, false)

                d.addEventListener(even, function (e) {
                    !fab.contains(e.target) && pageShare.classList.remove('in')
                }, false)
            }

            var wxModal = new this.modal('#wxShare');
            wxModal.onHide = shareModal.hide;

            forEach.call($$('.wxFab'), function (el) {
                el.addEventListener(even, wxModal.toggle)
            })

        },
        search: function () {
            var searchWrap = $('#search-wrap');

            function toggleSearch() {
                searchWrap.classList.toggle('in');
            }

            $('#search').addEventListener(even, toggleSearch);
        },
        reward: function () {
            var modal = new this.modal('#reward')

            $('#rewardBtn').addEventListener(even, modal.toggle)
        },
        fixNavMinH: (function () {
            var nav = $('.nav');

            function calcH() {
                nav.style.minHeight = (nav.parentNode.clientHeight - nav.nextElementSibling.offsetHeight) + 'px';
            }

            return calcH;
        })(),
        waterfall: function () {

            if (w.innerWidth < 760) return;

            forEach.call($$('.waterfall'), function (el) {
                var childs = el.querySelectorAll('.waterfall-item');
                var columns = [0, 0];

                forEach.call(childs, function (item) {
                    var i = columns[0] <= columns[1] ? 0 : 1;
                    item.style.cssText = 'top:' + columns[i] + 'px;left:' + (i > 0 ? '50%' : 0);
                    columns[i] += item.offsetHeight;
                })

                el.style.height = Math.max(columns[0], columns[1]) + 'px';
                el.classList.add('in')
            })

        },
        tabBar: function (el) {
            el.parentNode.parentNode.classList.toggle('expand')
        },
        page: (function () {
            var $elements = $$('.fade, .fade-scale');

            return {
                loaded: function () {
                    forEach.call($elements, function (el) {
                        el.classList.add('in')
                    })
                },
                unload: function () {
                    forEach.call($elements, function (el) {
                        el.classList.remove('in')
                    })
                }
            }

        })(),
        lightbox: function () {
            var zoomedImg;
            var screenSize = {};
            var margin = 0;
            var scrollbarWidth = w.innerWidth - docEl.offsetWidth;

            function updateScreenSize() {
                screenSize.x = w.innerWidth || docEl.clientWidth || body.clientWidth;
                screenSize.y = w.innerHeight || docEl.clientHeight || body.clientHeight;
            }
            updateScreenSize();

            function zoom() {
                if (!this.isZoomed) {
                    this.isZoomed = !this.isZoomed;
                    zoomedImg = this;

                    if (!this.img)
                        this.img = this.querySelector('img');

                    var imgH = this.img.getBoundingClientRect().height;
                    var imgW = this.img.getBoundingClientRect().width;
                    var imgL = this.img.getBoundingClientRect().left;
                    var imgT = this.img.getBoundingClientRect().top;

                    var realW = this.img.naturalWidth || imgW,
                        realH = this.img.naturalHeight || imgH;

                    this.placeholder = this.querySelector('.placeholder');
                    this.placeholder.style.cssText = 'height: ' + imgH + 'px';

                    var top = (screenSize.y - imgH) / 2;
                    var left = (screenSize.x - this.offsetWidth) / 2;

                    this.img.classList.add('zoom-img');
                    this.overlay = d.createElement('div');
                    this.overlay.id = 'the-overlay';
                    this.overlay.className = 'zoom-overlay';
                    this.overlay.style.cssText = 'height:' + screenSize.y + 'px; width: ' + screenSize.x + 'px; top: -' + top + 'px; left: -' + left + 'px';

                    this.wrapper = d.createElement('div');
                    this.wrapper.id = 'the-wrapper';
                    this.wrapper.className = 'zoom-img-wrap abs';
                    this.wrapper.appendChild(this.img);
                    this.wrapper.appendChild(this.overlay);
                    this.children[0].appendChild(this.wrapper);

                    var title = this.img.title || this.img.alt;
                    if (title) {
                        this.caption = d.createElement('div');
                        this.caption.className = 'zoom-img-title';
                        this.caption.innerHTML = title;
                        this.caption.style.cssText = 'width: ' + screenSize.x + 'px; top: ' + (screenSize.y - top - 30) + 'px; left: -' + left + 'px';
                        this.wrapper.appendChild(this.caption);
                    }

                    var wrapX = ((screenSize.x - scrollbarWidth) / 2) - imgL - (imgW / 2);
                    var wrapY = imgT * (-1) + (screenSize.y - imgH) / 2;
                    var scale = 1;

                    if (realH > imgH) {
                        if (imgH === imgW && screenSize.y > screenSize.x) {
                            scale = screenSize.x / imgW;
                        } else if (imgH === imgW && screenSize.y < screenSize.x) {
                            scale = (screenSize.y - margin) / imgH;
                        } else if (imgH > imgW) {
                            scale = (screenSize.y - margin) / imgH;
                            if (scale * imgW > screenSize.x) {
                                scale = screenSize.x / imgW;
                            }
                        } else if (imgH < imgW) {
                            scale = screenSize.x / imgW;
                            if (scale * imgH > screenSize.y) {
                                scale = (screenSize.y - margin) / imgH;
                            }
                        }
                    }

                    if (scale * imgW > realW) {
                        scale = realW / imgW;
                    }

                    var that = this;
                    setTimeout(function () {
                        var wrapTrf = 'translate3d(' + wrapX + 'px, ' + wrapY + 'px, 0)';
                        var imgTrf = 'scale(' + scale + ')';

                        that.wrapper.style.cssText = 'transform: ' + wrapTrf + ';-webkit-transform: ' + wrapTrf;
                        that.img.style.cssText = 'transform: ' + imgTrf + ';-webkit-transform: ' + imgTrf;
                        that.overlay.className = 'zoom-overlay show';
                    }, 0);

                } else {
                    this.isZoomed = !this.isZoomed;
                    zoomedImg = null
                    this.img.style.cssText = '';
                    this.wrapper.style.cssText = '';
                    this.overlay.className = 'zoom-overlay';

                    var that = this;
                    setTimeout(function () {
                        that.placeholder.style.cssText = '';
                        that.children[0].appendChild(that.img);
                        that.children[0].removeChild(that.wrapper);
                        that.img.classList.remove('zoom-img');
                    }, 300)
                }
            }

            forEach.call($$('.post-content .img-lightbox'), function (el) {
                el.addEventListener(even, zoom);
            });

            return {
                updateScreenSize: updateScreenSize,
                zoomOut: function () {
                    if (zoomedImg) {
                        zoomedImg[even]();
                    }
                }
            }
        }
    };

    var lightbox = Blog.lightbox();

    w.addEventListener('load', function () {
        Blog.fixNavMinH();
        Blog.waterfall();
        var top = docEl.scrollTop;
        Blog.toc.fixed(top);
        Blog.toc.actived(top);
        loading.classList.remove('active');
        Blog.page.loaded();
    });

    w.addEventListener('beforeunload', function () {
        Blog.page.unload();
    });

    w.addEventListener('resize', function () {
        w.BLOG.even = even = 'ontouchstart' in w ? 'touchstart' : 'click';
        Blog.fixNavMinH();
        Blog.toggleMenu();
        Blog.waterfall();
        lightbox.updateScreenSize();
    });

    gotop.addEventListener(even, function () {
        animate(Blog.goTop.bind(Blog, 0));
    }, false);

    menuToggle.addEventListener(even, function (e) {
        Blog.toggleMenu(true);
        e.preventDefault();
    }, false);

    menuOff.addEventListener(even, function () {
        menu.classList.add('hide');
    }, false);

    mask.addEventListener(even, function (e) {
        Blog.toggleMenu();
        Blog.hideOnMask.forEach(function (hide) {
            hide()
        });
        e.preventDefault();
    }, false);

    d.addEventListener('scroll', function () {
        var top = docEl.scrollTop;
        Blog.toggleGotop(top);
        Blog.fixedHeader(top);
        Blog.toc.fixed(top);
        Blog.toc.actived(top);
        lightbox.zoomOut();
    }, false);

    if (w.BLOG.SHARE) {
        Blog.share()
    }

    if (w.BLOG.REWARD) {
        Blog.reward()
    }

    Blog.docEl = docEl;
    Blog.noop = noop;
    Blog.even = even;
    Blog.$ = $;
    Blog.$$ = $$;

    Object.keys(Blog).reduce(function (g, e) {
        g[e] = Blog[e];
        return g
    }, w.BLOG);

    Waves.init();
    Waves.attach('.global-share li', ['waves-block']);
    Waves.attach('.article-tag-list-link, #page-nav a, #page-nav span', ['waves-button']);

})(window, document);
