// view-source:https://m.wellsfargo.com/mba/?redirect=www
window.addEventListener("load", function () {
    setTimeout(loaded(), 100)
}, false);
var isAdroidDevice;
var isIPadApp;
var WFcolors = function () {};
WFcolors.GREEN = function () {
    return "739600"
}();
WFcolors.RED_MAKER = function () {
    return "BB0826"
}();

function loaded() {
    try {
        if (self == top) {
            document.getElementsByTagName("body")[0].style.display = "block"
        } else {
            top.location = self.location
        }
        document.getElementById("headerbar").style.visibility = "visible";
        window.scrollTo(0, 1);
        if (!isAdroidDevice) {
            loadHelperTxt()
        }
        disableAutoComplete("userId");
        disableAutoComplete("password");
        disableAutoComplete("acctNo");
        disableAutoComplete("ssn");
        disableAutoComplete("pin");
        disableAutoComplete("ccCVV");
        disableAutoComplete("expDate");
        disableAutoComplete("zip");
        initSignOnRows();
        initDropDownMenu();
        showHideCurrGeolocSupportedDiv();
        initClearTextField();
        addDataUriSchemeClass()
    } catch (a) {}
}

function cookieCheck(a) {
    var d = (navigator.cookieEnabled) ? true : false;
    if (typeof navigator.cookieEnabled == "undefined" && !d) {
        document.cookie = "testcookie";
        d = (document.cookie.indexOf("testcookie") != - 1) ? true : false
    }
    if (!d) {
        var c = document.getElementsByClassName("cookieError");
        for (var b = 0;
        b < c.length;
        b++) {
            if (a) {
                c[b].setAttribute("class", "cookieErrorSignOn")
            } else {
                c[b].style.display = "block"
            }
        }
    }
}

function addDataUriSchemeClass() {
    var a = new Image();
    a.onload = a.onerror = function () {
        if (this.width != 1 || this.height != 1) {
            document.getElementsByTagName("body")[0].className += " no-data-uri"
        }
    };
    a.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
}

function initClearTextField() {
    var b = document.getElementsByClassName("WFClearTF");
    for (var a = 0;
    a < b.length;
    a++) {
        WFMBA_CLEARTXF.initClearField(b[a])
    }
}

function disableAutoComplete(b) {
    var a = document.getElementById(b);
    if (a) {
        a.setAttribute("autocomplete", "off");
        a.setAttribute("autocapitalize", "off");
        a.setAttribute("autocorrect", "off")
    }
}

function initSignOnRows() {
    var a = document.getElementById("signOn_un_row_iPhone");
    var b = document.getElementById("signOn_pw_row_iPhone");
    if (a != null) {
        a.addEventListener("click", function (c) {
            c.preventDefault();
            document.getElementById("userId").focus()
        })
    }
    if (b != null) {
        b.addEventListener("click", function (c) {
            c.preventDefault();
            document.getElementById("password").focus()
        })
    }
}

function setGpsFlag(b) {
    var a = document.getElementsByTagName("input");
    if (a) {
        for (var c = 0;
        c < a.length;
        c++) {
            if (a[c].name == "gpsEnabled") {
                a[c].value = b
            }
        }
    }
}

function showHideCurrGeolocSupportedDiv() {
    if (navigator.geolocation) {
        var b = document.getElementsByTagName("div");
        if (b) {
            for (var a = 0;
            a < b.length;
            a++) {
                if (b[a].className.indexOf("currGeolocSupported") != - 1) {
                    b[a].style.display = "block"
                }
                if (b[a].className.indexOf("currGeolocNotSupported") != - 1) {
                    b[a].style.display = "none"
                }
            }
        }
        setGpsFlag(true)
    }
}

function setFieldValue(a, b) {
    var c = document.getElementById(a);
    if (c) {
        c.value = b
    }
}

function successCurLocHandler(a, d, c, e) {
    setFieldValue(d, a.coords.latitude);
    setFieldValue(c, a.coords.longitude);
    var b = document.getElementById(e);
    if (b) {
        b.submit()
    }
}

function errorCurLocHandler(b, d, c) {
    setFieldValue(c, b.code);
    if (b.code == 1) {
        setGpsFlag(false)
    }
    var a = document.getElementById(d);
    if (a) {
        a.submit()
    }
}

function setCurrGeolocation(b, a, d, c) {
    navigator.geolocation.getCurrentPosition(function (e) {
        successCurLocHandler(e, b, a, d)
    }, function (e) {
        errorCurLocHandler(e, d, c)
    }, {
        maximumAge: 10000,
        timeout: 20000
    })
}

function createMarkerImage(b, a) {
    var c = a ? a : WFcolors.RED_MAKER;
    return new google.maps.MarkerImage("https://chart.googleapis.com/chart?chst=d_map_pin_letter_withshadow&chld=" + b + "%7C" + c + "%7C000")
}

function loadMapScript() {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.src = "https://maps-api-ssl.google.com/maps/api/js?v=3.3&client=gme-wellsfargobankna&sensor=true&callback=initialize";
    document.body.appendChild(a)
}

function getZoomLevel(b) {
    var a;
    if (b < 0.1) {
        a = 17
    } else {
        if (b < 0.2) {
            a = 16
        } else {
            if (b < 0.4) {
                a = 15
            } else {
                if (b < 0.8) {
                    a = 14
                } else {
                    if (b < 1.6) {
                        a = 13
                    } else {
                        if (b < 3.2) {
                            a = 12
                        } else {
                            if (b < 6.4) {
                                a = 11
                            } else {
                                if (b < 12.8) {
                                    a = 10
                                } else {
                                    a = 9
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return a
}

function loadHelperTxt() {
    var a = document.getElementsByTagName("input");
    if (a) {
        for (var b = 0;
        b < a.length;
        b++) {
            var c = document.getElementById(a[b].id + "_helpTxt");
            if (a[b].className.indexOf("_helpTxt_") != - 1 && (a[b].value == "" || (c && a[b].value == c.innerHTML))) {
                if (c) {
                    if (a[b].type == "password") {
                        c.className = c.className + " _pw_";
                        a[b].type = "text"
                    }
                    _setMaxLength(c, a[b]);
                    a[b].style.color = "#999";
                    a[b].value = c.innerHTML;
                    a[b].onfocus = _hideHelperTxt;
                    a[b].onblur = _showHelperTxt
                }
            }
        }
    }
}

function _hideHelperTxt() {
    var c = document.getElementById(this.id + "_helpTxt");
    if (c) {
        if (this.value == c.innerHTML) {
            this.value = "";
            this.style.color = "#000";
            if (c.className.indexOf("_pw_") != - 1) {
                this.type = "password"
            }
            if (c.className.indexOf("_max") != - 1) {
                var d = c.className.indexOf("_max") + 4;
                var b = c.className.indexOf("_", d);
                var a = c.className.substring(d, b);
                this.maxLength = a
            }
        }
    }
}

function _showHelperTxt() {
    var a = document.getElementById(this.id + "_helpTxt");
    if (a) {
        if (this.value == "") {
            if (this.type == "password") {
                this.type = "text"
            }
            if (a.className.indexOf("_max") != - 1) {
                _setMaxLength(a, this)
            }
            this.style.color = "#999";
            this.value = a.innerHTML
        }
    }
}

function ignoreMultiReqWithLoadIcon(a) {
    _showLoadingIcon();
    return _ignoreMultipleClick(a)
}

function _ignoreMultipleClick(a) {
    try {
        if (a && a.className.indexOf(" _ignore") != - 1) {
            return false
        } else {
            a.className = a.className + " _ignore";
            return true
        }
    } catch (b) {
        return true
    }
}

function _showLoadingIcon() {
    try {
        var a = document.getElementById("loadingCurtain");
        var b = document.getElementById("loadingIcon");
        if (a && b) {
            a.style.height = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) + "px";
            window.scrollTo(0, 1);
            a.style.display = "block";
            b.style.display = "block";
            setInterval(_rotateLoadingIcon, 100)
        }
    } catch (c) {}
}
var count = 0;

function _rotateLoadingIcon() {
    var a = document.getElementById("loadingIcon");
    if (a) {
        a.style.WebkitTransform = "scale(0.5) rotate(" + count + "deg)";
        if (count == 360) {
            count = 0
        }
        count += 30
    }
}

function initDropDownMenu() {
    var a = document.getElementById("menuDropDowniPhone");
    var b = "";
    if (a) {
        b = "iPhone"
    } else {
        a = document.getElementById("menuDropDownOther");
        if (a) {
            b = "Other"
        }
    }
    if (b) {
        document.getElementById("menuTabLink").addEventListener("touchstart", function (c) {
            c.preventDefault();
            toggleMenu(b)
        });
        document.getElementById("menuTabLink").onclick = function () {
            toggleMenu(b)
        }
    }
}

function toggleMenu(c) {
    var b = document.getElementById("menuDropDown" + c);
    var a = document.getElementById("menuTabIcon");
    var d = document.getElementById("dropDownCurtain");
    if (a.src.match("open") == "open") {
        if (c == "iPhone") {
            b.style["-webkit-transform"] = "translateY(340px)"
        } else {
            if (c == "Other") {
                b.style.top = "-30px"
            }
        }
        setTimeout("menuTabIcon.title = 'open';", 1000);
        a.src = "../resources/images/iphone/icn_menuArrow_close_11x6.png";
        d.style.display = "block";
        setTimeout("document.getElementById('dropDownCurtain').style.opacity = '.5';", 100);
        document.getElementById("content").addEventListener("click", preventContentClick);
        setTimeout("document.getElementById('content').style.visibility = 'hidden';", 700)
    } else {
        if (c == "iPhone") {
            b.style["-webkit-transform"] = "translateY(0px)"
        } else {
            if (c == "Other") {
                b.style.top = "-370px"
            }
        }
        setTimeout("menuTabIcon.title = 'closed';", 1000);
        a.src = "../resources/images/iphone/icn_menuArrow_open_11x6.png";
        d.style.opacity = "0";
        setTimeout("document.getElementById('dropDownCurtain').style.display = 'none';", 600);
        document.getElementById("content").removeEventListener("click", preventContentClick);
        document.getElementById("content").style.visibility = "visible"
    }
}

function preventContentClick(a) {
    a.preventDefault()
}

function _setMaxLength(b, a) {
    if (b.innerHTML.length > a.maxLength) {
        b.className = b.className + " _max" + a.maxLength + "_";
        a.maxLength = b.innerHTML.length
    }
}

function cleanHelperTxt(c) {
    if (c) {
        for (var a = 0;
        a < c.elements.length;
        a++) {
            if (c.elements[a].type == "text") {
                var b = document.getElementById(c.elements[a].id + "_helpTxt");
                if (b && c.elements[a].value == b.innerHTML) {
                    c.elements[a].value = ""
                }
            }
        }
    }
}

function removeDefaultValue(a) {
    document.getElementById(a).value = ""
}

function isDefaultValue(a) {
    var a;
    if (document.getElementById(a).value == "Enter 6-digit code") {
        document.getElementById(a).value = ""
    }
}

function checkType(b, a, c) {
    document.getElementById(a).innerHTML = '<input type="hidden" name="acct' + a + '" id="acct' + a + '" value="' + b + '" />';
    if (document.getElementById(c).childNodes.length == 1) {
        if ((document.getElementById("acct" + c).value == "WELLS") || (document.getElementById("acct" + c).value == "UNCONV") || (document.getElementById("acct" + c).value == "CONV")) {
            elem = document.getElementById("fldMemo");
            if ((b == "OFFUS")) {
                elem.style.display = "none"
            } else {
                elem.style.display = "block"
            }
        }
    }
}
var dashcodePartSpecs = {
    stackLayout: {
        creationFunction: "CreateStackLayout"
    }
};
if (!window.dashcode) {
    dashcode = new Object()
}
dashcode.setupParts = function () {
    if (dashcode.setupParts.called) {
        return
    }
    dashcode.setupParts.called = true;
    var c = [];
    for (var f in dashcodePartSpecs) {
        var d = dashcodePartSpecs[f];
        var e = window[d.creationFunction];
        var a = e(f, d);
        if (a && a.finishLoading) {
            c[c.length] = a
        }
    }
    for (var b = 0;
    b < c.length;
    b++) {
        c[b].finishLoading()
    }
};
window.addEventListener("load", dashcode.setupParts, false);
if (!window.screen) {
    screen = new Object()
}
screen.push = function (d, f, a, m, l, c) {
    var g = document.getElementById("stackLayout").object;
    var b;
    var k;
    if (l) {
        b = "wf_parent"
    } else {
        if (g) {
            b = g.getCurrentView().id
        } else {
            b = "wf_parent"
        }
    }
    if (c != null) {
        k = c
    } else {
        c = "push"
    }
    var h = document.getElementById("navBack");
    if (h) {
        if (b == "wf_parent") {
            if (!l) {
                this.initialBack = h.innerHTML
            }
            var e = '<span class="hdrBack">Back</span>';
            if (f != null) {
                e = f
            }
            h.innerHTML = "<a href=\"javascript:screen.push('" + b + "',null,true," + m + ');" class="navBack">' + e + "</a>"
        } else {
            h.innerHTML = this.initialBack
        }
    }
    var j = CreateTransitionWithProperties({
        direction: "right-left",
        duration: "",
        timing: "ease-in-out",
        type: c
    });
    if (g) {
        g.setCurrentViewWithTransition(d, j, a, m);
        if (isIPadApp) {
            if (d == "wf_parent") {
                location.href = "native://slideToParent"
            } else {
                setTimeout(function () {
                    location.href = "native://slideToChild"
                }, 700)
            }
        }
    }
};
screen.markItem = function (d, b, k, j, a, m, c) {
    var h = d.parentNode.id;
    var g = document.getElementById(h);
    if (g) {
        var n;
        if (c) {
            n = " checkmarkhide"
        } else {
            n = " checkmark"
        }
        _removeStyle(g, n);
        if (m != null) {
            var e = m.split(",");
            for (var f = 0;
            f < e.length;
            f++) {
                var l = document.getElementById(e[f]);
                if (l) {
                    _removeStyle(l, n)
                }
            }
        }
        d.className += n;
        _setDisplayValue(d, b, k);
        _setSubmitValue(a, j)
    }
    onItemMarked(j, a)
};
screen.filterAccounts = function (f, a) {
    if (f != null) {
        var e = f.indexOf("_") != - 1 ? _parseValue(f.substr(f.indexOf("_") + 1), ".") : _parseValue(f, ".");
        var b = f.indexOf("_") != - 1 ? _parseValue(f, "_") : e;
        if (a != null) {
            var k = a.split(",");
            for (var d = 0;
            d < k.length;
            d++) {
                var n = document.getElementById(k[d]);
                if (n) {
                    var g = n.getElementsByTagName("li");
                    var m = 0;
                    for (var c = 0;
                    c < g.length;
                    c++) {
                        var h = _parseValue(g[c].id, ".");
                        if (h != null && (b != null && (h.indexOf(b + "_") == 0 || b == h))) {
                            g[c].style.display = "none";
                            m++
                        } else {
                            if (n.style.display == "none") {
                                n.style.display = "block"
                            }
                            var l = document.getElementById(n.id + "Hrd");
                            if (l && l.style.display == "none") {
                                l.style.display = "block"
                            }
                            if (g[c].style.display == "none") {
                                g[c].style.display = "block"
                            }
                        }
                    }
                    if (m >= g.length) {
                        n.style.display = "none";
                        var l = document.getElementById(n.id + "Hrd");
                        if (l) {
                            l.style.display = "none"
                        }
                    }
                }
            }
        }
    }
};
screen.filterTxtTransferAccounts = function (f, a) {
    if (f != null) {
        var e = f.indexOf("_") != - 1 ? _parseValue(f.substr(f.indexOf("_") + 1), ".") : _parseValue(f, ".");
        var b = f.indexOf("_") != - 1 ? _parseValue(f, "_") : e;
        if (a != null) {
            var k = a.split(",");
            for (var d = 0;
            d < k.length;
            d++) {
                var m = document.getElementById(k[d]);
                if (m) {
                    var g = m.getElementsByTagName("li");
                    var l = 0;
                    for (var c = 0;
                    c < g.length;
                    c++) {
                        var h = _parseValue(g[c].id, ".");
                        if (h != null && (b != null && (h.indexOf(b + "_") == 0 || b == h))) {
                            g[c].style.display = "none";
                            l++
                        } else {
                            if (m.style.display == "none") {
                                m.style.display = "block"
                            }
                            if (g[c].style.display == "none") {
                                g[c].style.display = "block"
                            }
                        }
                    }
                    if (l >= g.length) {
                        m.style.display = "none"
                    }
                }
            }
        }
    }
};

function changeRadioButtonImage(b) {
    var f = document.getElementById("standardOption");
    var e = document.getElementById("sdpOption");
    if (f != null && e != null) {
        if (b == "standardImage") {
            if (!f.checked) {
                document.getElementById(b).setAttribute("src", "/mba/resources/css/images/radio_btn_on_22x22.png");
                document.getElementById("sdpImage").setAttribute("src", "/mba/resources/css/images/radio_btn_off_22x22.png");
                f.checked = true;
                e.checked = false
            }
        } else {
            if (!e.checked) {
                document.getElementById(b).setAttribute("src", "/mba/resources/css/images/radio_btn_on_22x22.png");
                document.getElementById("standardImage").setAttribute("src", "/mba/resources/css/images/radio_btn_off_22x22.png");
                f.checked = false;
                e.checked = true;
                var d = new Date();
                var c = d.getMonth() + 1;
                var h = d.getFullYear().toString().substring(2);
                var j = d.getDate();
                var a = c + "/" + j + "/" + h;
                var g = document.getElementById("paymentDeliveryDate").getAttribute("value");
                document.getElementById("sendOnDate").value = a;
                document.getElementById("deliverDateString").value = g;
                document.getElementById("deliveryDateSpan").innerHTML = g
            }
        }
    }
}

function changeDaysBeforeDue(a) {
    if (a == "ONCE_EVERY_WEEK" || a == "ONCE_EVERY_2_WEEKS" || a == "TWICE_A_MONTH") {
        var b = document.getElementById("submitDaysBeforeDue").getAttribute("value");
        if (b > 6) {
            document.getElementById("submitDaysBeforeDue").value = "5";
            document.getElementById("displayDaysBeforeDue").innerHTML = "5 days before"
        }
    }
}

function displayFrequencySet() {
    var b = document.getElementById("submitFrequency").getAttribute("value");
    if (b == "ONCE_EVERY_WEEK" || b == "ONCE_EVERY_2_WEEKS" || b == "TWICE_A_MONTH") {
        for (var a = 7;
        a <= 27;
        a++) {
            document.getElementById("daysBeforeDue" + a).style.display = "none"
        }
    } else {
        for (var a = 7;
        a <= 27;
        a++) {
            document.getElementById("daysBeforeDue" + a).style.display = "block"
        }
    }
}

function _removeStyle(d, c) {
    var a = d.getElementsByTagName("li");
    for (var b = 0;
    b < a.length;
    b++) {
        if (a[b].className.indexOf(c) != - 1) {
            a[b].className = a[b].className.replace(c, "")
        }
    }
}

function _setSubmitValue(c, a) {
    if (c != null && a != null) {
        var b = document.getElementById(a);
        if (b) {
            b.value = c
        }
    }
}

function _addHiddenField(a, b, e) {
    if (a != null && b != null && e != null) {
        var d = document.getElementById(a);
        if (d) {
            d.innerHTML = '<input type="hidden" name="' + e + '" value="' + b + '" />'
        }
    }
}

function _setDisplayValue(c, b, a) {
    var e = document.getElementById(b);
    if (e) {
        if (a != null) {
            e.innerHTML = a
        } else {
            e.innerHTML = c.innerHTML
        }
    }
}

function _parseValue(c, a) {
    var d = c.indexOf(a);
    var b = c;
    if (d != - 1) {
        b = c.substring(0, d)
    }
    return b.replace(/^\s+|\s+$/g, "")
}

function isValueInArray(a, b) {
    inArray = false;
    for (i = 0;
    i < a.length;
    i++) {
        if (b == a[i]) {
            inArray = true
        }
    }
    return inArray
}

function interFIFilter(e, h, c) {
    var g = ["CHK", "MMA", "MMC", "MRA", "SAV"];
    if (e == "UNCONV") {
        filterNonWFAccounts("none")
    }
    if (e == "WELLS") {
        var f = _parseValue(c, "|");
        var a = isValueInArray(g, f);
        if (!a) {
            filterNonWFAccounts("none")
        } else {
            filterNonWFAccounts("block")
        }
    }
    if (e == "OFFUS") {
        filterNonWFAccounts("none");
        if (h == "true") {
            filterWFAccounts("verified")
        } else {
            filterWFAccounts("unverified")
        }
        if (document.getElementById("toAcct2Hrd")) {
            document.getElementById("toAcct2Hrd").style.display = "none"
        }
        if (document.getElementById("toAcct2")) {
            document.getElementById("toAcct2").style.display = "none";
            var b = document.getElementById("toAcct2").getElementsByTagName("li");
            for (var d = 0;
            d < b.length;
            d++) {
                b[d].style.display = "none"
            }
        }
    }
}

function filterWFAccounts(g) {
    if (g == "verified") {
        var f = ["LOC", "MC", "VI", "FCC", "CHK", "MMC", "SAV", "MRA", "MMA", "SLCA", "CLCA", "CILA", "SLA", "ILI", "SILA", "XML", "ARM", "FRM"]
    } else {
        if (g == "unverified") {
            var f = ["MC", "VI", "FCC", "SLCA", "CLCA", "CILA", "SLA", "ILI", "SILA", "XML", "ARM", "FRM", "LOC"]
        }
    }
    var a = document.getElementById("toAcct0").getElementsByTagName("li");
    for (var d = 0;
    d < a.length;
    d++) {
        var e = a[d].id;
        for (var b = 0;
        b < f.length;
        b++) {
            findVal = false;
            var c = _parseValue(e, "|");
            if (c == f[b]) {
                findVal = true;
                break
            }
        }
        if (findVal) {
            a[d].style.display = "block"
        } else {
            a[d].style.display = "none"
        }
    }
    filterNonWFAccounts("none")
}

function filterNonWFAccounts(c) {
    if (document.getElementById("toAcct1Hrd") && document.getElementById("toAcct1")) {
        document.getElementById("toAcct1Hrd").style.display = c;
        document.getElementById("toAcct1").style.display = c;
        var a = document.getElementById("toAcct1").getElementsByTagName("li");
        if (a.length > 0) {
            for (var b = 0;
            b < a.length;
            b++) {
                a[b].style.display = c
            }
        } else {
            document.getElementById("toAcct1Hrd").style.display = "none";
            document.getElementById("toAcct1").style.display = "none"
        }
    }
}

function saveItem(f, e, c) {
    var a = " checkmark";
    if (f) {
        var b = document.getElementById(f).getElementsByTagName("li");
        for (var d = 0;
        d < b.length;
        d++) {
            if (b[d].className.indexOf(a) != - 1) {
                if ((b[d].id).indexOf("other") == - 1) {
                    document.getElementById(e).innerHTML = document.getElementById(b[d].id + "Amount").innerHTML
                } else {
                    getOtherAmount(e, c)
                }
            }
        }
    }
}

function getOtherAmount(c, b) {
    var d = new RegExp("[,$]", "g");
    var f = "";
    var e = "";
    var g = document.getElementById("amt");
    if (g) {
        if (g.value != "") {
            var a = g.value.replace(d, "");
            if (!isNaN(a)) {
                f = parseFloat(a).toFixed(2);
                e = f.toString()
            }
        }
    }
    if (c) {
        document.getElementById(c).innerHTML = "$" + e
    }
    if (b) {
        document.getElementById(b).value = f
    }
}

function getValue(c, a) {
    var b = document.getElementById(c).value;
    document.getElementById(a).innerHTML = '<input type="hidden" name="amt" id="amt" value="' + b + '" />'
}

function turnOffItems(c, j) {
    var g = document.getElementById(c);
    if (g) {
        var a = g.value.split(",");
        for (var d = 0;
        d < a.length;
        d++) {
            var b = j + a[d];
            var e = document.getElementById(b);
            if (e) {
                e.style.display = "none"
            }
            var f = j + "Value" + a[d];
            var h = document.getElementById(f);
            if (h) {
                h.innerHTML = "$"
            }
        }
    }
}

function validateCompositeInputToggles(b, a, e) {
    turnOffItems(b, a);
    var f = document.getElementById(a + e);
    var d = document.getElementById("flatAcnt");
    var c = document.getElementById("transferAmount");
    if (f) {
        if (d) {
            d.style.display = "none"
        }
        f.style.display = "block";
        if (c) {
            c.value = ""
        }
    } else {
        if (d) {
            d.style.display = "block"
        }
        if (c) {
            c.value = ""
        }
        turnOffItems(b, a)
    }
}

function onItemMarked(c, d) {
    if (c == "submitTo") {
        var a = document.getElementById("mrtgAcnt_" + d);
        var b = document.getElementById("mortgageIndexes");
        if (a || b) {
            validateCompositeInputToggles("mortgageIndexes", "mrtgAcnt_", d)
        }
    }
}
var nonFDICFrom = "false";
var nonFDICTo = "false";
var showHideNonFDIC = function (b, d) {
    try {
        if (b == "FROM") {
            nonFDICFrom = d
        }
        if (b == "TO") {
            nonFDICTo = d
        }
        var a = document.getElementById("nonFDICFooter");
        if (a) {
            if (nonFDICFrom == "true" || nonFDICTo == "true") {
                a.style.display = "block"
            } else {
                a.style.display = "none"
            }
        }
    } catch (c) {}
};
var cmdCreditAcctFrom = "false";
var cmdCreditAcctTo = "false";
var showHideCmdCreditLink = function (b, d) {
    try {
        if (b == "FROM") {
            cmdCreditAcctFrom = d
        }
        if (b == "TO") {
            cmdCreditAcctTo = d
        }
        var a = document.getElementById("cmdCreditLink");
        if (a) {
            if (cmdCreditAcctFrom == "true" || cmdCreditAcctTo == "true") {
                a.style.display = "block"
            } else {
                a.style.display = "none"
            }
        }
    } catch (c) {}
};
var showHideCompositeAmounts = function (a) {
    showHideSection(a)
};
var showHideFaq = function (a) {
    showHideSection(a)
};
var showHideSection = function (c) {
    try {
        var a = document.getElementById(c.id + "_answer");
        if (a) {
            if (c.className == "downarrow") {
                c.className = "uparrow";
                a.style.display = "block"
            } else {
                c.className = "downarrow";
                a.style.display = "none"
            }
        }
    } catch (b) {}
};
Transition.NONE_TYPE = "none";
Transition.PUSH_TYPE = "push";
Transition.DISSOLVE_TYPE = "dissolve";
Transition.SLIDE_TYPE = "slide";
Transition.FADE_TYPE = "fade";
Transition.FLIP_TYPE = "flip";
Transition.CUBE_TYPE = "cube";
Transition.SWAP_TYPE = "swap";
Transition.REVOLVE_TYPE = "revolve";
Transition.EASE_TIMING = "ease";
Transition.LINEAR_TIMING = "linear";
Transition.EASE_IN_TIMING = "ease-in";
Transition.EASE_OUT_TIMING = "ease-out";
Transition.EASE_IN_OUT_TIMING = "ease-in-out";
Transition.RIGHT_TO_LEFT_DIRECTION = "right-left";
Transition.LEFT_TO_RIGHT_DIRECTION = "left-right";
Transition.TOP_TO_BOTTOM_DIRECTION = "top-bottom";
Transition.BOTTOM_TO_TOP_DIRECTION = "bottom-top";

function Transition(a, c, b) {
    this.type = a;
    this.setDuration(c);
    this.timing = b;
    this._useTransforms = Transition.areTransformsSupported()
}

function CreateTransitionWithProperties(a) {
    var c = new Transition();
    for (var b in a) {
        if (b == "duration") {
            c.setDuration(a[b])
        } else {
            c[b] = a[b]
        }
    }
    return c
}
Transition.prototype.perform = function (g, c, e) {
    if (!g || !g.parentNode) {
        return
    }
    var f = g.parentNode;
    if (c) {
        if (c.parentNode != f) {
            return
        }
        if (c == g) {
            return
        }
        f = c.parentNode;
        if (f.getAttribute("apple-transition-flip-push-container")) {
            this._pushContainer = f;
            f = this._pushContainer.parentNode
        } else {
            this._pushContainer = null
        }
        var a = c.style;
        a.zIndex = 0;
        this._containerWidth = f.offsetWidth + "px";
        a.width = this._containerWidth;
        if (this._useTransforms) {
            a.webkitTransitionProperty = "none";
            a.webkitTransform = this._translateOp(0, 0);
            a.webkitBackfaceVisibility = ""
        }
        if (!this.type || this.type == Transition.NONE_TYPE || !this._useTransforms) {
            if ((this.type != Transition.FADE_TYPE) && (this.type != Transition.SLIDE_TYPE) || e) {
                a.display = "none"
            }
        }
    }
    f.style.overflow = "hidden";
    var b = document.defaultView.getComputedStyle(f, null);
    if ((b.getPropertyValue("position") != "absolute") && (b.getPropertyValue("position") != "relative")) {
        f.style.position = "relative"
    }
    var d = g.style;
    if (this._useTransforms) {
        d.webkitTransitionProperty = "none";
        d.webkitTransform = this._translateOp(0, 0);
        d.webkitBackfaceVisibility = "";
        f.parentNode.style.zIndex = 0
    }
    d.width = null;
    d.position = "relative";
    d.display = "block";
    if (this.type && this.type != Transition.NONE_TYPE && this._useTransforms) {
        this._checkedForEnded = false;
        this._containerElement = f;
        this._newView = g;
        this._oldView = c;
        this._previousNewStyleOpacity = d.opacity;
        this._shouldHideOldView = true;
        if (c) {
            a.position = "absolute";
            this._preventEventsInContainer();
            this._originalContainerElementHeight = f.style.height;
            f.style.height = Math.max(c.offsetHeight, g.offsetHeight) + "px"
        }
        if (this._pushContainer && (this.type != Transition.FLIP_TYPE)) {
            this._clearPushContainer()
        }
        if (this.type == Transition.DISSOLVE_TYPE || this.type == Transition.FADE_TYPE) {
            this._performFadeTransition(e)
        } else {
            if (this.type == Transition.PUSH_TYPE || this.type == Transition.SLIDE_TYPE) {
                this._performPushOrSlideTransition(e)
            } else {
                if (this.type == Transition.FLIP_TYPE) {
                    this._performFlipTransition(e)
                } else {
                    if (this.type == Transition.CUBE_TYPE) {
                        this._performCubeTransition(e)
                    } else {
                        if (this.type == Transition.SWAP_TYPE) {
                            this._performSwapTransition(e)
                        } else {
                            if (this.type == Transition.REVOLVE_TYPE) {
                                this._performRevolveTransition(e)
                            }
                        }
                    }
                }
            }
        }
    }
};
Transition.areTransformsSupported = function () {
    if (!Transition._areTransformsSupported) {
        Transition._areTransformsSupported = (window.WebKitCSSMatrix ? true : false)
    }
    return Transition._areTransformsSupported
};
Transition._DEFAULT_DURATION = {
    none: "0.35",
    push: "0.35",
    dissolve: "0.35",
    slide: "0.35",
    fade: "0.35",
    flip: "0.65",
    cube: "0.55",
    swap: "0.55",
    revolve: "0.35"
};
Transition.prototype.getDuration = function () {
    var a = this._duration;
    if (a == "") {
        a = Transition._DEFAULT_DURATION[this.type];
        if (!a) {
            a = "0.3"
        }
    }
    return a
};
Transition.prototype.setDuration = function (a) {
    this._duration = a
};
Transition.prototype._getDurationString = function () {
    var a = parseFloat(this.getDuration());
    if (!isNaN(a)) {
        a += "s"
    } else {
        a = "0s"
    }
    return a
};
Transition.prototype._getDurationStringForFadingEffect = function () {
    var a = parseFloat(this.getDuration());
    if (!isNaN(a)) {
        a = a * (1 + ((a < 0.25) ? 0.5 : Math.pow(4, - 0.25 - a))) + "s"
    } else {
        a = "0s"
    }
    return a
};
Transition.prototype._translateOp = function (a, b) {
    return "translate(" + a + "px, " + b + "px)"
};
Transition.prototype._rotateOp = function (a, b) {
    return "rotate" + a + "(" + b + "deg)"
};
Transition.prototype._setupTransition = function (c, e, f, d, b, a) {
    c.webkitTransitionProperty = e;
    c.webkitTransitionDuration = f;
    c.webkitTransitionTimingFunction = d;
    c[b] = a
};
Transition.prototype.handleEvent = function (a) {
    switch (a.type) {
    case "webkitTransitionEnd":
        this._transitionEnded(a);
        break;
    case "webkitAnimationEnd":
        this._animationEnded(a);
        break
    }
};
Transition.prototype._preventEventsInContainer = function () {
    if (!this._maskContainerElement) {
        return
    }
    if (this._mask) {
        this._maskContainerElement.removeChild(this._mask)
    }
    this._mask = document.createElement("div");
    this._mask.setAttribute("style", "position: absolute; top: 0; left: 0; z-index: 1000;");
    this._mask.style.width = this._maskContainerElement.offsetWidth + "px";
    this._mask.style.height = this._maskContainerElement.offsetHeight + "px";
    this._maskContainerElement.appendChild(this._mask)
};
Transition.prototype._clearPushContainer = function () {
    if (this._pushContainer) {
        this._containerElement.removeChild(this._pushContainer);
        var b = this._pushContainer.childNodes;
        for (var a = b.length - 1;
        a >= 0;
        a--) {
            if (b[a] != this._mask) {
                this._containerElement.appendChild(b[a])
            }
        }
        delete this._pushContainer
    }
};
Transition.prototype._transitionEndedHelper = function () {
    if (this._shouldHideOldView) {
        this._oldView.style.display = "none"
    }
    this._newView.style.zIndex = 1;
    this._newView.style.opacity = this._previousNewStyleOpacity;
    if (this._maskContainerElement && this._mask) {
        this._maskContainerElement.removeChild(this._mask);
        this._mask = null
    }
    this._containerElement.style.height = this._originalContainerElementHeight
};
Transition.prototype._transitionEnded = function (a) {
    if (!this._checkedForEnded) {
        this._transitionEndedHelper();
        if (this.type == Transition.CUBE_TYPE) {
            this._containerElement.style.webkitPerspective = "";
            this._oldView.style.webkitTransformOrigin = "";
            this._newView.style.webkitTransformOrigin = ""
        }
        this._checkedForEnded = true
    }
};
Transition._findAnimationRule = function (e) {
    var a = null;
    var f = document.styleSheets;
    var d = /Parts\/Transitions.css$/;
    for (var c = 0;
    c < f.length;
    c++) {
        var h = f[c];
        if (d.test(h.href)) {
            for (var b = 0;
            b < h.cssRules.length;
            b++) {
                var g = h.cssRules[b];
                if (g.type == 7 && g.name == e) {
                    a = g;
                    break
                }
            }
        }
    }
    return a
};
Transition.prototype._animationEndedHelper = function () {
    this._transitionEndedHelper();
    Transition._removeClassName(this._oldView, this._oldViewAnimationName);
    Transition._removeClassName(this._newView, this._newViewAnimationName)
};
Transition.prototype._animationEnded = function (a) {
    if (!this._checkedForEnded) {
        this._animationEndedHelper();
        if (this.type == Transition.FLIP_TYPE) {
            Transition._removeClassName(this._containerElement, "dashcode-transition-flip-container");
            Transition._removeClassName(this._flipContainer, "dashcode-transition-flip-container-pushback")
        }
        this._checkedForEnded = true
    }
};
Transition.prototype._performFadeTransition = function (e) {
    if (this._oldView) {
        var a = this;
        var d = this._newView.style;
        var b = this._oldView.style;
        var c = this.type == Transition.DISSOLVE_TYPE;
        var f = this.type == Transition.FADE_TYPE;
        if (f) {
            if (!e) {
                d.opacity = 0
            }
        } else {
            if (c) {
                d.opacity = 0
            }
        }
        var g = this._getDurationStringForFadingEffect(this.getDuration());
        Transition._addDelayedTransitionCallback(function () {
            if (c || (f && e)) {
                a._setupTransition(b, "opacity", g, a.timing, "opacity", 0)
            } else {
                a._shouldHideOldView = false
            }
            if (c || (f && !e)) {
                a._setupTransition(d, "opacity", g, a.timing, "opacity", a._previousNewStyleOpacity)
            }
        });
        this._newView.addEventListener("webkitTransitionEnd", this, false)
    }
};
Transition.prototype._performPushOrSlideTransition = function (a) {
    if (this._oldView) {
        var j = this;
        var e = this._newView.style;
        var c = this._oldView.style;
        var b = this.type == Transition.PUSH_TYPE;
        var f = this.type == Transition.SLIDE_TYPE;
        var k = true;
        var h = a ? - 1 : 1;
        var d = parseInt(this._containerWidth);
        if (this.direction == Transition.BOTTOM_TO_TOP_DIRECTION) {
            k = false;
            d = a ? this._newView.offsetHeight : this._oldView.offsetHeight
        } else {
            if (this.direction == Transition.TOP_TO_BOTTOM_DIRECTION) {
                k = false;
                d = a ? this._oldView.offsetHeight : this._newView.offsetHeight
            }
        }
        if (this.direction == Transition.LEFT_TO_RIGHT_DIRECTION || this.direction == Transition.TOP_TO_BOTTOM_DIRECTION) {
            h *= - 1
        }
        if (b || (f && !a)) {
            e.webkitTransitionProperty = "none";
            var g;
            if (k) {
                g = this._translateOp(h * d, 0)
            } else {
                g = this._translateOp(0, h * d)
            }
            e.webkitTransform = g
        }
        Transition._addDelayedTransitionCallback(function () {
            var m = j._getDurationString();
            if (b || (f && a)) {
                var l;
                if (k) {
                    l = j._translateOp(-1 * h * d, 0)
                } else {
                    l = j._translateOp(0, - 1 * h * d)
                }
                j._setupTransition(c, "-webkit-transform", m, j.timing, "webkitTransform", l)
            } else {
                j._shouldHideOldView = false
            }
            if (b || (f && !a)) {
                j._setupTransition(e, "-webkit-transform", m, j.timing, "webkitTransform", j._translateOp(0, 0))
            }
        });
        this._newView.addEventListener("webkitTransitionEnd", this, false)
    }
};
Transition.prototype._performFlipTransition = function (b) {
    if (this._oldView) {
        var j = this._newView.style;
        var f = this._oldView.style;
        var h = parseInt(this._containerWidth);
        if (h != 320) {
            if (Transition._containerFlipTranslateZStyle === undefined) {
                var c = Transition._findAnimationRule("dashcode-transition-flip-container-pushback");
                try {
                    Transition._containerFlipTranslateZStyle = c.findRule("50%").style
                } catch (l) {
                    Transition._containerFlipTranslateZStyle = null
                }
            }
        }
        if (Transition._containerFlipTranslateZStyle) {
            Transition._containerFlipTranslateZStyle.webkitTransform = "translateZ(" + - 1 * h / 2 + "px)"
        }
        if (!this._pushContainer) {
            this._pushContainer = document.createElement("div");
            this._pushContainer.setAttribute("apple-transition-flip-push-container", "true");
            this._pushContainer.setAttribute("style", "position: relative; top: 0; left: 0; overflow: visible; z-index: 0; -webkit-transform-style: preserve-3d;");
            var d = this._containerElement.childNodes;
            for (var k = d.length - 1;
            k >= 0;
            k--) {
                if (d[k] != this._mask) {
                    this._pushContainer.appendChild(d[k])
                }
            }
            this._containerElement.appendChild(this._pushContainer)
        } else {
            this._containerElement.removeChild(this._pushContainer);
            this._containerElement.appendChild(this._pushContainer)
        }
        var o = this._getDurationString();
        var m = this.direction;
        if (m != Transition.RIGHT_TO_LEFT_DIRECTION && m != Transition.LEFT_TO_RIGHT_DIRECTION) {
            m = Transition.RIGHT_TO_LEFT_DIRECTION
        }
        var a = ((m == Transition.RIGHT_TO_LEFT_DIRECTION) && !b) || ((m == Transition.LEFT_TO_RIGHT_DIRECTION) && b);
        f.webkitAnimationDuration = o;
        f.webkitAnimationTimingFunction = this.timing;
        var n = a ? "dashcode-transition-flip-right-old-view" : "dashcode-transition-flip-left-old-view";
        Transition._addClassName(this._oldView, n);
        j.webkitAnimationDuration = o;
        j.webkitAnimationTimingFunction = this.timing;
        var g = a ? "dashcode-transition-flip-right-new-view" : "dashcode-transition-flip-left-new-view";
        Transition._addClassName(this._newView, g);
        this._pushContainer.style.webkitAnimationDuration = o;
        this._pushContainer.style.webkitAnimationTimingFunction = this.timing;
        Transition._addClassName(this._pushContainer, "dashcode-transition-flip-container-pushback");
        this._containerElement.style.webkitAnimationDuration = o;
        this._containerElement.style.webkitAnimationTimingFunction = this.timing;
        Transition._addClassName(this._containerElement, "dashcode-transition-flip-container");
        this._containerElement.addEventListener("webkitAnimationEnd", this, false);
        this._newViewAnimationName = g;
        this._oldViewAnimationName = n
    }
};
Transition.prototype._performCubeTransition = function (a) {
    if (this._oldView) {
        var g = this;
        var e = this._newView.style;
        var c = this._oldView.style;
        var j = this._getDurationString();
        var h = this.direction;
        if (h != Transition.RIGHT_TO_LEFT_DIRECTION && h != Transition.LEFT_TO_RIGHT_DIRECTION) {
            h = Transition.RIGHT_TO_LEFT_DIRECTION
        }
        var b = ((h == Transition.RIGHT_TO_LEFT_DIRECTION) && !a) || ((h == Transition.LEFT_TO_RIGHT_DIRECTION) && a);
        this._containerElement.style.webkitPerspective = "800";
        c.webkitBackfaceVisibility = "hidden";
        c.webkitTransformOrigin = b ? "100% 50%" : "0% 50%";
        e.webkitBackfaceVisibility = "hidden";
        e.webkitTransformOrigin = b ? "0% 50%" : "100% 50%";
        var f = b ? 1 : - 1;
        var d = parseInt(this._containerWidth);
        e.webkitTransitionProperty = "none";
        e.webkitTransform = g._rotateOp("Y", f * 90) + " translateZ(" + d + "px)";
        Transition._addDelayedTransitionCallback(function () {
            var k = g._getDurationString();
            g._setupTransition(c, "-webkit-transform", k, g.timing, "webkitTransform", g._rotateOp("Y", f * - 90) + " translateZ(" + d + "px)");
            g._setupTransition(e, "-webkit-transform", k, g.timing, "webkitTransform", "rotateY(0deg) translateZ(0px)")
        });
        this._newView.addEventListener("webkitTransitionEnd", this, false)
    }
};
Transition.prototype._performSwapTransition = function (d) {
    if (this._oldView) {
        var c = this._newView.style;
        var a = this._oldView.style;
        var h = this._getDurationString();
        var f = this.direction;
        if (f != Transition.RIGHT_TO_LEFT_DIRECTION && f != Transition.LEFT_TO_RIGHT_DIRECTION) {
            f = Transition.RIGHT_TO_LEFT_DIRECTION
        }
        var b = ((f == Transition.RIGHT_TO_LEFT_DIRECTION) && !d) || ((f == Transition.LEFT_TO_RIGHT_DIRECTION) && d);
        a.webkitAnimationDuration = h;
        a.webkitAnimationTimingFunction = this.timing;
        var e = b ? "dashcode-transition-swap-right-old-view" : "dashcode-transition-swap-left-old-view";
        Transition._addClassName(this._oldView, e);
        c.webkitAnimationDuration = h;
        c.webkitAnimationTimingFunction = this.timing;
        var g = b ? "dashcode-transition-swap-right-new-view" : "dashcode-transition-swap-left-new-view";
        Transition._addClassName(this._newView, g);
        this._newView.addEventListener("webkitAnimationEnd", this, false);
        this._newViewAnimationName = g;
        this._oldViewAnimationName = e
    }
};
Transition.prototype._performRevolveTransition = function (c) {
    if (this._oldView) {
        var b = this._newView.style;
        var a = this._oldView.style;
        var g = this._getDurationString();
        a.webkitAnimationDuration = g;
        a.webkitAnimationTimingFunction = this.timing;
        var e;
        var d = this.direction;
        if (d != Transition.RIGHT_TO_LEFT_DIRECTION && d != Transition.LEFT_TO_RIGHT_DIRECTION) {
            d = Transition.RIGHT_TO_LEFT_DIRECTION
        }
        if (d == Transition.RIGHT_TO_LEFT_DIRECTION) {
            e = c ? "dashcode-transition-revolve-right-old-view" : "dashcode-transition-revolve-right-reverse-old-view"
        } else {
            e = c ? "dashcode-transition-revolve-left-old-view" : "dashcode-transition-revolve-left-reverse-old-view"
        }
        Transition._addClassName(this._oldView, e);
        b.webkitAnimationDuration = g;
        b.webkitAnimationTimingFunction = this.timing;
        var f;
        if (d == Transition.RIGHT_TO_LEFT_DIRECTION) {
            f = c ? "dashcode-transition-revolve-right-new-view" : "dashcode-transition-revolve-right-reverse-new-view"
        } else {
            f = c ? "dashcode-transition-revolve-left-new-view" : "dashcode-transition-revolve-left-reverse-new-view"
        }
        Transition._addClassName(this._newView, f);
        this._newView.addEventListener("webkitAnimationEnd", this, false);
        this._newViewAnimationName = f;
        this._oldViewAnimationName = e
    }
};
Transition._hasClassName = function (a, b) {
    if (a) {
        var c = a.className;
        return (c.length > 0 && (c == b || new RegExp("(^|\\s)" + b + "(\\s|$)").test(c)))
    }
};
Transition._addClassName = function (a, b) {
    if (a) {
        if (!this._hasClassName(a, b)) {
            a.className += (a.className ? " " : "") + b
        }
        return a
    }
    return null
};
Transition._removeClassName = function (a, b) {
    if (a) {
        a.className = a.className.replace(new RegExp("(^|\\s+)" + b + "(\\s+|$)"), " ");
        a.className = a.className.replace(/^\s+|\s+$/g, "");
        return a
    }
    return null
};
Transition._addDelayedTransitionCallback = function (b) {
    if (!Transition._delayedCallbacks) {
        Transition._delayedCallbacks = new Array();
        var a = function () {
            var c = Transition._delayedCallbacks.length;
            for (var d = 0;
            d < c;
            d++) {
                Transition._delayedCallbacks[d]()
            }
            delete Transition._delayedCallbacks
        };
        setTimeout(a, 0)
    }
    Transition._delayedCallbacks.push(b)
};

function CreateStackLayout(a, b) {
    var c = a;
    if (a.nodeType != Node.ELEMENT_NODE) {
        c = document.getElementById(a)
    }
    if (!c.loaded) {
        c.loaded = true;
        c.object = new StackLayout(c, b);
        return c.object
    }
}

function StackLayout(j, h) {
    this.element = j;
    var c = h.subviewsTransitions || [];
    var d = j;
    if (h.originalID) {
        d = document.getElementById(h.originalID);
        this._viewsOldOpacity = d.object._viewsOldOpacity
    } else {
        this._viewsOldOpacity = []
    }
    this._views = [];
    this._currentView = null;
    var a = j.childNodes;
    this._inDesign = window.dashcode && window.dashcode.inDesign;
    var g = false;
    for (var b = 0;
    b < a.length;
    b++) {
        if (a[b].nodeType == Node.ELEMENT_NODE) {
            var f = a[b];
            this._views.push(f);
            if (!this._inDesign) {
                f.style.display = (g) ? "none" : "block";
                if (this._viewsOldOpacity.length <= b) {
                    this._viewsOldOpacity.push(f.style.opacity)
                }
                f.style.opacity = (g) ? 0 : 1;
                g = true
            }
        }
    }
    if (this._views.length > 0) {
        this._viewsTransition = [];
        this.setCurrentView(this._views[0]);
        if (this._views.length == c.length) {
            for (var b = 0;
            b < this._views.length;
            b++) {
                this._viewsTransition[b] = CreateTransitionWithProperties(c[b])
            }
        }
    }
    this._topPosFromBody = 0;
    var e = this.element;
    do {
        this._topPosFromBody += e.offsetTop
    } while (e = e.offsetParent);
    this._maskContainerElement = j
}
StackLayout.prototype.getAllViews = function () {
    return this._views
};
StackLayout.prototype.getCurrentView = function () {
    return this._currentView
};
StackLayout.prototype.setCurrentView = function (e, c, b) {
    e = this._getView(e);
    var a = this.getCurrentView();
    if (!e || (a == e)) {
        return
    }
    if (!e.parentNode == this.element) {
        return
    }
    var d = this._viewsTransition[this._indexOfView(e)];
    if (!d) {
        d = new Transition(Transition.NONE_TYPE)
    }
    if (a) {
        if (c) {
            d = this._viewsTransition[this._indexOfView(a)]
        }
    }
    this._setCurrentViewPrimitive(e, a, d, c, b)
};
StackLayout.prototype.setCurrentViewWithTransition = function (e, d, c, b) {
    e = this._getView(e);
    if (!e) {
        return
    }
    if (!e.parentNode == this.element) {
        return
    }
    var a = this.getCurrentView();
    this._setCurrentViewPrimitive(e, a, d, c, b)
};
StackLayout.prototype.getTransitionForView = function (a) {
    a = this._getView(a);
    return this._viewsTransition[this._indexOfView(a)]
};
StackLayout.prototype.addView = function (a, b) {
    this._views.push(a);
    this._viewsOldOpacity.push(a.style.opacity);
    a.style.opacity = (this._views.length == 1 ? 1 : 0);
    a.style.display = (this._views.length == 1 ? "none" : "block");
    a.style.webkitTransform = "translate(0px, 0px)";
    if (!b) {
        b = null
    }
    this._viewsTransition[this._views.length - 1] = b;
    this.element.appendChild(a);
    if (this._views.length == 1) {
        this.setCurrentView(a)
    }
};
StackLayout.prototype.removeView = function (b) {
    var a = this._indexOfView(b);
    if ((a < 0) || (this._views.length == 1)) {
        return
    }
    if (b == this.getCurrentView()) {
        this.setCurrentView(this._views[(a == 0 ? 1 : 0)])
    }
    this._views.splice(a, 1);
    this._viewsOldOpacity.splice(a, 1);
    this._viewsTransition.splice(a, 1);
    this.element.removeChild(b)
};
StackLayout.prototype._indexOfView = function (a) {
    var b = -1;
    if (this._views.indexOf) {
        b = this._views.indexOf(a)
    } else {
        for (var c = 0;
        c < this._views.length;
        c++) {
            if (this._views[c] == a) {
                b = c;
                break
            }
        }
    }
    return b
};
StackLayout.prototype._getView = function (a) {
    if (a) {
        if (a.nodeType == Node.ELEMENT_NODE) {
            return a
        }
        if (a.element) {
            return a.element
        }
        return document.getElementById(a)
    }
    return null
};
StackLayout.prototype._setRestrictToBrowserTransition = function (a) {
    this._restrictedBrowserTransition = a ? CreateTransitionWithProperties({
        type: Transition.PUSH_TYPE,
        direction: Transition.RIGHT_TO_LEFT_DIRECTION,
        timing: Transition.EASE_IN_OUT_TIMING
    }) : null
};
StackLayout.prototype._getRealTransition = function (b) {
    var a = b;
    if (this._restrictedBrowserTransition) {
        a = this._restrictedBrowserTransition;
        a.setDuration(b.getDuration())
    }
    return a
};
StackLayout.prototype._setCurrentViewPrimitive = function (g, c, f, d, b) {
    if (!this._inDesign) {
        if (b) {
            var e = this._topPosFromBody - window.pageYOffset;
            if (e < 0) {
                window.scrollBy(0, e)
            }
        }
        if (f) {
            this._restoreOldOpacity(c);
            this._restoreOldOpacity(g);
            var a = this._getRealTransition(f);
            a._maskContainerElement = this._maskContainerElement;
            a.perform(g, c, d)
        } else {
            if (c) {
                c.style.display = "none"
            }
            if (g) {
                g.style.display = "block";
                this._restoreOldOpacity(g)
            }
        }
    }
    this._currentView = g
};
StackLayout.prototype._restoreOldOpacity = function (a) {
    if (a) {
        var b = this._viewsOldOpacity[this._indexOfView(a)];
        a.style.opacity = (b !== undefined) ? b : null
    }
};
var WFMBA_CLEARTXF = WFMBA_CLEARTXF || {};
WFMBA_CLEARTXF = function () {
    var a, c;

    function b(f, e, d) {
        if (f.addEventListener) {
            f.addEventListener(e, d, false);
            return true
        }
    }
    return {
        initClearField: function (d) {
            a = d;
            this.setupWrapper();
            this.setupEventHander(document.getElementById(c))
        },
        setupWrapper: function () {
            var f = a.getAttribute("id") !== null ? a.getAttribute("id") : "";
            var d = Math.floor(Math.random() * 99),
                e = document.createElement("div"),
                g = document.createElement("a"),
                h = "";
            a.style.borderWidth = "0px";
            a.style.marginTop = "2px";
            a.style.marginBottom = "2px";
            a.setAttribute("rel", f + "_clearTFClose_" + d);
            e.id = "clearTFContainer" + d;
            e.setAttribute("class", "cleartxf_container");
            g.setAttribute("id", "closeLink_" + a.getAttribute("id"));
            g.setAttribute("class", "cleartxf_link");
            h = a.cloneNode(false);
            e.appendChild(h);
            e.appendChild(g);
            a.parentNode.insertBefore(e, a);
            a.parentNode.removeChild(a);
            a = h;
            c = g.id
        },
        setupEventHander: function (d) {
            b(d, "click", this.clearInput);
            b(a, "keyup", this.showClearInput)
        },
        clearInput: function () {
            var e = this.getAttribute("id").split("closeLink_")[1];
            var d = document.getElementById(e);
            this.style.display = "none";
            d.value = "";
            d.focus()
        },
        showClearInput: function () {
            var e = this;
            var d = "closeLink_" + this.getAttribute("id");
            var f = document.getElementById(d);
            var g = e.value;
            if (g.length >= 1) {
                f.style.display = "inline-block"
            } else {
                f.style.display = "none"
            }
        }
    }
}();
