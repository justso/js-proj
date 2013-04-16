// view-source:https://www.wellsfargo.com/financial-education/credit-management/build-credit/
(function () {
    if (window.addEventListener) {
        window.addEventListener("load", a, false)
    } else {
        if (window.attachEvent) {
            window.attachEvent("onload", a)
        } else {
            onload = a
        }
    }
    var c = {};
    c.get_cshui_value = function (j) {
        var k = 4;
        var l;
        var h = 0;
        var e = "";
        var g = 3;
        e = "";
        for (var f = 0; f < k - 1; ++f) {
            l = Math.round(Math.random() * 9);
            e += l;
            h += l
        }
        if (e == "000") {
            e = "123"
        }
        while (true) {
            l = Math.round(Math.random() * 9);
            if ((h + l) % g == j) {
                return e + l
            }
        }
    };
    c.ILLEGAL_VALUE = 65535;
    c.CSHUI_RAPIDSURF_MAX_TIME_DURATION = 1000;
    c.CSHUI_RAPIDSURF_MAX_STEPS = 5;
    var d = document.getElementsByTagName("meta");
    c.CSHUI_RANDOM_DATA_NODE = null;
    for (var b = 0; b < d.length; b++) {
        if (d[b].getAttribute("scheme") && d[b].getAttribute("scheme") === "a1afcc517bec909bf5c3fddea7c83c3d") {
            c.CSHUI_RANDOM_DATA_NODE = d[b];
            c.CSHUI_COOKIE_NAME = d[b].getAttribute("name") + "_77";
            c.BD_TOKEN = d[b].getAttribute("content")
        } else {
            if (d[b].getAttribute("scheme") && d[b].getAttribute("scheme") === "eb1e31097f37b3d64bef23cbd5cab231") {
                c.CSHUI_RAPIDSURF_MAX_TIME_DURATION = d[b].getAttribute("name");
                c.CSHUI_RAPIDSURF_MAX_STEPS = d[b].getAttribute("content")
            }
        }
    }
    c.CSHUI_MOUSEMOVE_EVENTS_TARGET = 3;
    c.CSHUI_MOUSEMOVE_MAX_EVENTS = 1024;
    c.CSHUI_MOUSEMOVE_EVENTS_COUNTER = 0;
    c.CSHUI_MOUSEMOVE_LAST_X_LOCATION = 0;
    c.CSHUI_MOUSEMOVE_LAST_Y_LOCATION = 0;
    c.CSHUI_MOUSEMOVE_IS_CONTINUOUS = 0;
    c.CSHUI_KEYBOARD_EVENTS_TARGET = 1;
    c.CSHUI_KEYBOARD_EVENTS_COUNTER = 0;
    c.CSHUI_RAPIDSURF_BEGIN_DELIM = "_rsb_";
    c.CSHUI_RAPIDSURF_DELIM = "_rs_";
    c.CSHUI_COOKIE_VALUE_TRUE = c.get_cshui_value("1") + "_" + c.BD_TOKEN;
    c.CSHUI_COOKIE_VALUE_UNKNOWN = c.get_cshui_value("0") + "_" + c.BD_TOKEN;
    c.CSHUI_COOKIE_VALUE_FALSE = c.get_cshui_value("2") + "_" + c.BD_TOKEN;
    c.CSHUI_MONITOR_KEYBOARD = true;
    c.CSHUI_MONITOR_MOUSE = true;
    c.new_das_item = function () {
        return {
            page: {
                cookie: []
            },
            cshui: c.CSHUI_COOKIE_VALUE_UNKNOWN
        }
    };
    c.new_das = function () {
        return {}
    };
    c.das = c.new_das();
    c.extract_cookies = function () {
        var l = document.cookie || window.document.cookie;
        var g = [];
        var e = l.split(/\s*;\s*/);
        for (var f = 0; f < e.length; ++f) {
            var k = e[f].split(/\s*=\s*/);
            var h = k[0];
            var j = k.slice(1, k.length).join("");
            g.push({
                name: h,
                value: j
            })
        }
        return g
    };
    c.is_cshui_indication_true = function (f) {
        var e = f.split("_");
        return (e[0] % 3) == 1
    };
    c.implant_human_user_activity_indicator_event_listeners = function (e) {
        var h = new Date();
        var g = parseInt(h.getTime());
        if (!this.rapidsurf) {
            this.rapidsurf = {}
        }
        this.rapidsurf.start_time = g;
        var f = this;
        this.log_mousemove_event = function (j) {
            if (f.is_cshui_indication_true(f.das[e.location.href].cshui) || f.CSHUI_MOUSEMOVE_MAX_EVENTS < f.CSHUI_MOUSEMOVE_EVENTS_COUNTER) {
                if (f.CSHUI_MONITOR_MOUSE) {
                    if (e.document.removeEventListener) {
                        e.document.removeEventListener("mousemove", f.log_mousemove_event, false)
                    } else {
                        if (e.document.detachEvent) {
                            e.document.detachEvent("onmousemove", f.log_mousemove_event)
                        } else {
                            e.onmousemove = null
                        }
                    }
                }
                if (f.CSHUI_MONITOR_KEYBOARD) {
                    if (e.document.removeEventListener) {
                        e.document.removeEventListener("keypress", f.log_keyboard_event, false)
                    } else {
                        if (e.document.detachEvent) {
                            e.document.detachEvent("onkeypress", f.log_keyboard_event)
                        } else {
                            e.onkeypress = null
                        }
                    }
                }
                return
            }
            var i = 0;
            var k = 0;
            j = j || j.event || window.event || event;
            i = j.screenX;
            k = j.screenY;
            if (f.CSHUI_MOUSEMOVE_EVENTS_COUNTER == 0) {
                f.CSHUI_MOUSEMOVE_EVENTS_COUNTER = 1;
                f.CSHUI_MOUSEMOVE_LAST_X_LOCATION = i;
                f.CSHUI_MOUSEMOVE_LAST_Y_LOCATION = k
            } else {
                f.CSHUI_MOUSEMOVE_EVENTS_COUNTER++;
                if ((Math.abs(f.CSHUI_MOUSEMOVE_LAST_X_LOCATION - i) <= 1) && (Math.abs(f.CSHUI_MOUSEMOVE_LAST_Y_LOCATION - k) <= 1)) {
                    f.CSHUI_MOUSEMOVE_IS_CONTINUOUS++
                }
                f.CSHUI_MOUSEMOVE_LAST_X_LOCATION = i;
                f.CSHUI_MOUSEMOVE_LAST_Y_LOCATION = k
            }
            if (f.CSHUI_MOUSEMOVE_IS_CONTINUOUS >= f.CSHUI_MOUSEMOVE_EVENTS_TARGET) {
                f.das[e.location.href].cshui = c.CSHUI_COOKIE_VALUE_TRUE;
                f.update_cshui_cookie(e)
            }
        };
        this.log_keyboard_event = function (i) {
            if (f.is_cshui_indication_true(f.das[e.location.href].cshui)) {
                return
            }
            if (f.CSHUI_KEYBOARD_EVENTS_TARGET <= f.CSHUI_KEYBOARD_EVENTS_COUNTER) {
                f.das[e.location.href].cshui = c.CSHUI_COOKIE_VALUE_TRUE;
                f.update_cshui_cookie(e);
                if (f.CSHUI_MONITOR_MOUSE) {
                    if (e.document.removeEventListener) {
                        e.document.removeEventListener("mousemove", f.log_mousemove_event, false)
                    } else {
                        if (e.document.detachEvent) {
                            e.document.detachEvent("onmousemove", f.log_mousemove_event)
                        } else {
                            e.onmousemove = null
                        }
                    }
                }
                if (f.CSHUI_MONITOR_KEYBOARD) {
                    if (e.document.removeEventListener) {
                        e.document.removeEventListener("keypress", f.log_keyboard_event, false)
                    } else {
                        if (e.document.detachEvent) {
                            e.document.detachEvent("onkeypress", f.log_keyboard_event)
                        } else {
                            e.onkeypress = null
                        }
                    }
                }
            }
            f.CSHUI_KEYBOARD_EVENTS_COUNTER++
        };
        if (this["CSHUI_MONITOR_MOUSE"]) {
            if (e.document.addEventListener) {
                e.document.addEventListener("mousemove", this.log_mousemove_event, false)
            } else {
                if (e.document.attachEvent) {
                    e.document.attachEvent("onmousemove", this.log_mousemove_event)
                } else {
                    e.onmousemove = this.log_mousemove_event
                }
            }
        }
        if (this["CSHUI_MONITOR_KEYBOARD"]) {
            if (e.document.addEventListener) {
                e.document.addEventListener("keypress", this.log_keyboard_event, false)
            } else {
                if (e.document.attachEvent) {
                    e.document.attachEvent("onkeypress", this.log_keyboard_event)
                } else {
                    e.onkeypress = this.log_keyboard_event
                }
            }
        }
        return this
    };
    c.load_factory = function (e) {
        var f = this;
        this.do_on_load = function () {
            if (f.CSHUI_RANDOM_DATA_NODE !== undefined && f.CSHUI_RANDOM_DATA_NODE !== null) {
                f.implant_human_user_activity_indicator_event_listeners(e)
            }
            return f
        };
        return this.do_on_load()
    };
    c.set_cookie = function (e, g, h) {
        var f = g + "=" + h + ";path=/";
        if (e.document.cookie !== undefined) {
            e.document.cookie = f
        } else {
            if (window.document.cookie !== undefined) {
                window.document.cookie = f
            } else {
                document.cookie = f
            }
        }
        return this
    };
    c.get_cshui_cookie = function (e) {
        var l = this.extract_cookies();
        var f = this.ILLEGAL_VALUE;
        var k = "";
        var j = [c.das[e.location.href].cshui];
        for (var h = 0; h < l.length; ++h) {
            if (l[h].name === this.CSHUI_COOKIE_NAME) {
                var g = l[h].value;
                j = g.split(c.CSHUI_RAPIDSURF_BEGIN_DELIM);
                if (j.length == 2) {
                    k = j[0];
                    f = j[1]
                }
            }
        }
        return j
    };
    c.rapidsurf_on_unload = function (n) {
        var i = new Date();
        var e = parseInt(i.getTime());
        var k = e - parseInt(this.rapidsurf.start_time);
        var f = this.ILLEGAL_VALUE;
        var j = this.ILLEGAL_VALUE;
        var m = "\t---\t---\t---\t";
        var o = this.ILLEGAL_VALUE;
        var h = c.get_cshui_cookie(n);
        var g = c.das[n.location.href].cshui;
        if (h.length == 2) {
            var l = h[1].split(c.CSHUI_RAPIDSURF_DELIM);
            f = parseInt(l[0]);
            j = l[1];
            m = parseInt(l[2])
        } else {
            f = 0;
            j = encodeURIComponent(n.location.href);
            m = 0
        }
        if (j === encodeURIComponent(n.location.href)) {
            m++
        } else {
            if (k < this.CSHUI_RAPIDSURF_MAX_TIME_DURATION) {
                f++
            }
        }
        j = encodeURIComponent(n.location.href);
        this.set_cookie(n, this.CSHUI_COOKIE_NAME, g + c.CSHUI_RAPIDSURF_BEGIN_DELIM + f.toString() + c.CSHUI_RAPIDSURF_DELIM + j + c.CSHUI_RAPIDSURF_DELIM + m.toString());
        if (f > this.CSHUI_RAPIDSURF_MAX_STEPS) {
            this.das[n.location.href].cshui = this.CSHUI_COOKIE_VALUE_FALSE;
            c.update_cshui_cookie(n)
        }
        return this
    };
    c.new_rapid_surf_data = function (e) {
        return c.CSHUI_RAPIDSURF_BEGIN_DELIM + "0" + c.CSHUI_RAPIDSURF_DELIM + encodeURIComponent(e.location.href) + c.CSHUI_RAPIDSURF_DELIM + "0"
    };
    c.update_cshui_cookie = function (e) {
        var f = c.get_cshui_cookie(e);
        if (f.length == 2) {
            this.set_cookie(e, this["CSHUI_COOKIE_NAME"], this.das[e.location.href].cshui + c.CSHUI_RAPIDSURF_BEGIN_DELIM + f[1])
        } else {
            this.set_cookie(e, this.CSHUI_COOKIE_NAME, this.das[e.location.href].cshui + c.new_rapid_surf_data(e))
        }
        return this
    };
    c.unload_factory = function (e) {
        var f = this;
        this.do_on_unload = function () {
            f.rapidsurf_on_unload(e);
            return f
        };
        return this.do_on_unload
    };
    c.attach_page_load_and_unload_handler = function (e) {
        if (e.addEventListener) {
            e.addEventListener("load", this.load_factory(e), false);
            e.addEventListener("unload", this.unload_factory(e), false)
        } else {
            if (e.attachEvent) {
                e.attachEvent("onload", this.load_factory(e));
                e.attachEvent("onunload", this.unload_factory(e))
            } else {
                e.onload = this.load_factory(e);
                e.onunload = this.unload_factory(e)
            }
        }
        return this
    };
    c.frame_recurse = function (g) {
        if (this["das"].hasOwnProperty(g.location.href)) {
            return this
        } else {
            this["das"][g.location.href] = this.new_das_item()
        }
        this.attach_page_load_and_unload_handler(g);
        var f = "";
        for (var h = 0; h < g.frames.length; ++h) {
            try {
                f = g.frames[h].location.href
            } catch (j) {
                continue
            }
            if (f.indexOf("http") != 0) {
                continue
            }
            this.frame_recurse(g.frames[h])
        }
        return this
    };
    c.init_rapid_surf_data = function () {
        var f = c.get_cshui_cookie(window)[0];
        var e = f.split("_")[1];
        if ( !! e && e.length > 0 && c.BD_TOKEN != e) {
            c.set_cookie(window, c.CSHUI_COOKIE_NAME, c.das[location.href].cshui + c.new_rapid_surf_data(window))
        }
    };

    function a() {
        c.frame_recurse(window);
        c.init_rapid_surf_data()
    }
})();
