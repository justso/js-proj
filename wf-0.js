// (phantom js in citrix) epsshared.hosting.wellsfargo.com/c/common/js/script.js?ZfKHkdevNKdRVGCrChttTw==
var YHPProfileSearch_SearchType =
{
    all: 0,
    fullname: 1,
    firstname: 2,
    lastname: 3,
    au: 4,
    mac: 5,
    company: 6,
    country: 7,
    email: 8,
    fax: 9,
    primaryphone: 10,
    pager: 11,
    mobile: 12,
    address: 13,
    floor: 14,
    city: 15,
    state: 16,
    zip: 17,
    jobtitle: 18,
    jobfamilycode: 19,
    jobfamilydesc: 20,
    legacycompany: 21,
    execcode: 22,
    execdesc: 23,
    orgcode: 24,
    orgdesc: 25,
    groupcode: 26,
    groupdesc: 27,
    regioncode: 28,
    regiondesc: 29,
    sectioncode: 30,
    sectiondesc: 31,
    areacode: 32,
    areadesc: 33,
    certifications: 34,
    education: 35,
    associations: 36,
    languages: 37,
    wellsfargovolunteers: 38,
    teammembernetworks: 39,
    elid: 40,
    employeelastname: 41,
    employeefirstname: 42,
    nonemployeelastname: 43,
    nonemployeefirstname: 44
}
jQuery(document).ready(function () {
    YHPProfileSearch_selectedOption(searchtypefirst, titlefirst, helpertextfirst);
    jQuery("input#YHPProfileSearch-lastname").autocomplete({
        minLength: 1,
        delay: 250,
        source: function (request, response) {
            request.term = request.term.replace("'", "''");

            var obj = document.getElementById("YHPProfileSearch-firstname");
            var term2 = "";
            var sType;
            var sTypeSelected = document.getElementById("YHPProfileSearch_currentItem").attributes["href"].value;
            if (sTypeSelected == "nonemployee") {
                sType = YHPProfileSearch_SearchType.nonemployeelastname;
            }
            else {
                sType = YHPProfileSearch_SearchType.employeelastname;
            }
            if (jQuery.trim(obj.value) != jQuery.trim(obj.defaultValue)) {
                term2 = obj.value;
            }

            jQuery.getJSON(AutocompleteServiceURL + "?source=profile&type=" + sType + "&term2=" + term2 + "&maxcount=" + AutocompleteMaxCount + "&callback=?", request, function (data) { response(data); })
        }
    });
    jQuery("input#YHPProfileSearch-firstname").autocomplete({
        minLength: 1,
        delay: 250,
        source: function (request, response) {
            request.term = request.term.replace("'", "''");
            var obj = document.getElementById("YHPProfileSearch-lastname");
            var term2 = "";
            var sType;
            var sTypeSelected = document.getElementById("YHPProfileSearch_currentItem").attributes["href"].value;
            if (sTypeSelected == "nonemployee") {
                sType = YHPProfileSearch_SearchType.nonemployeefirstname;
            }
            else {
                sType = YHPProfileSearch_SearchType.employeefirstname;
            }

            if (jQuery.trim(obj.value) != jQuery.trim(obj.defaultValue)) {
                term2 = obj.value;
            }
            jQuery.getJSON(AutocompleteServiceURL + "?source=profile&type=" + sType + "&term2=" + term2 + "&maxcount=" + AutocompleteMaxCount + "&callback=?", request, function (data) { response(data); })
        }
    });

    //    jQuery("input#YHPProfileSearch-search").autocomplete({
    //        minLength: 1,
    //        delay: 250,
    //        source: function (request, response) {
    //            request.term = request.term.replace("'", "''");
    //            var sType = document.getElementById("YHPProfileSearch_currentItem").attributes["href"].value;
    //            jQuery.getJSON(AutocompleteServiceURL + "?source=profile&type=" + sType + "&maxcount=" + AutocompleteMaxCount + "&callback=?", request, function (data) { response(data); });
    //        }
    //    });

    jQuery.ui.autocomplete.prototype._renderItem = function (ul, item) {
        var term = this.term.split(' ').join('|');
        var re = new RegExp("(" + term + ")", "gi");
        var t = item.label.replace(re, "<b>$1</b>");
        return jQuery("<li></li>")
.data("item.autocomplete", item)
.append("<a>" + t + "</a>")
.appendTo(ul);
    };
})
function extractPNLQuery(qs) {
    if (qs.indexOf("PNL:") == 0) {
        // Need to deconstruct Partial Name Search query
        var oq = "";
        if (qs.lastIndexOf("PNL:") > 0) {
            oq = qs.substring(qs.indexOf(":") + 1, qs.lastIndexOf("PNL:") - 1);
        } else {
            oq = qs.substring(qs.indexOf(":") + 1, qs.length);
        }
        oq = oq.replace(/\+/g, " ");   //replaces all <+> with < >
        oq = oq.replace(/%2B/g, " ");  //replaces all <%2B> with < >
    }
    return oq;
}

function YHPProfileSearch_SetEvents(value, title, helpertext) {
    var qs = getParameter(window.top.location.search, 'k');
    var s = getParameter(window.top.location.search, 's');

    var frst = 'First name';
    var lst = 'Last name';
    var searchhelper = title;
    var fvalue = 'First name';
    var lvalue = 'Last name';
    var svalue = title;

    if (qs !== null) {
        if (s == 'People' && value == '0') {
            if (qs.indexOf('PNL:') > -1) {
                svalue = extractPNLQuery(qs);
            }
            else {
                svalue = qs;
            }
        }
        if (s == 'People' && value == '40') {
            if (qs.indexOf('ELID:') > -1) {
                svalue = qs.substring(5);
            }
        }
        if (s == 'NonEmployee' && value == 'nonemployee') {
            var ln = "";
            var fn = "";
            var helpertextvalues = helpertext.split(',');
            var fnvalue = jQuery.trim(helpertextvalues[0]);
            var lnvalue = jQuery.trim(helpertextvalues[1]);

            if (qs.indexOf('+') > -1) {
                ln = qs.substring(9);
                if (ln.indexOf("FirstName:") > -1) {
                    fnsub = ln.substring(ln.indexOf("FirstName:"));
                    fn = fnsub.substring(10);
                    ln = ln.substring(0, ln.indexOf("+FirstName:"));
                }
                else {
                    ln = qs.substring(9, qs.indexOf('+'));
                }
            }
            else if (qs.indexOf("FirstName:") > -1) {
                fn = qs.substring(10);
            }
            if (ln == "") {
                ln = lnvalue;
            }
            if (fn == "") {
                fn = fnvalue;
            }
            fvalue = fn;
            lvalue = ln;
        }
    }
    else {
        if (helpertext.indexOf(",") > 0) {
            var hlptxt = helpertext.split(',');
            frst = jQuery.trim(hlptxt[0]);
            lst = jQuery.trim(hlptxt[1]);
        }
        if (helpertext.length < 1) {
            searchhelper = title;
        } else {
            searchhelper = helpertext;
        }
    }

    var fieldText = [{ fld: 'YHPProfileSearch-firstname', txt: frst, stxt: fvalue },
{ fld: 'YHPProfileSearch-lastname', txt: lst, stxt: lvalue },
{ fld: 'YHPProfileSearch-search', txt: searchhelper, stxt: svalue}];
    for (var i = 0; i < fieldText.length; i++) {
        var fld = document.getElementById(fieldText[i].fld);

        if (fld.value) {
            if (qs != null) {
                fld.value = fieldText[i].stxt;
            }
            else {
                fld.value = fieldText[i].txt;
            }
            fld.title = fieldText[i].txt;
        }

        fld.setAttribute('index', i);

        fld.onblur = function () {
            if (this.value == '') {
                this.value = fieldText[this.getAttribute('index')].txt;
            }
            if (this.value == fieldText[this.getAttribute('index')].txt) {
                this.style.color = '#666';
            }
        };
        fld.onclick = function () {
            if (this.value == fieldText[this.getAttribute('index')].txt) {
                this.select();
                this.style.color = '#000';
            }
        };
        fld.onkeydown = function () {
            var setHelperText;
            if (this.value == fieldText[this.getAttribute('index')].txt) {
                setHelperText = 'use helper text';
            }
            if (setHelperText == 'use helper text') {
                this.value = '';
                this.style.color = '#000';
            }
            var isEnter = window.event == null ? e.keyCode == 13 : window.event.keyCode == 13;
            if (isEnter) {
                if (this.value == '') {
                    this.value = fieldText[this.getAttribute('index')].txt;
                    return false;
                }
                else {
                    YHPProfileSearch_ClickMe();
                    return false;
                }
            }
            else {
                return true;
            }
        };
    }
}

function YHPProfileSearchButtonTooltip(value, title) {
    var gobtn = document.getElementById("YHPProfileSearchGoButton");
    var btntooltip = "Search";
    switch (value) {
        case "employee":
            btntooltip = 'Search for team members';
            break;
        case "nonemployee":
            btntooltip = 'Search nonemployee';
            break;

        case "40":
            btntooltip = 'Search enterprise logon ID';
            break;
        default:
            btntooltip = btntooltip + ' ' + title;
    }

    gobtn.attributes["title"].value = btntooltip;
}
function YHPProfileSearch_SearchUI(value, title, helpertext) {
    switch (value) {
        case "advanced":
            window.open(profileSearchAdvancedPeopleSearchUrl, '_self')
            break;
        case "employee":
            document.getElementById("YHPProfileSearch-lastname").style.visibility = "visible";
            document.getElementById("YHPProfileSearch-lastname").style.display = "inline";
            document.getElementById("YHPProfileSearch-firstname").style.visibility = "visible";
            document.getElementById("YHPProfileSearch-firstname").style.display = "inline";
            document.getElementById("YHPProfileSearch-search").style.visibility = "hidden";
            document.getElementById("YHPProfileSearch-search").style.display = "none";
            YHPProfileSearch_SetEvents(value, title, helpertext);
            break;
        case "nonemployee":
            document.getElementById("YHPProfileSearch-lastname").style.visibility = "visible";
            document.getElementById("YHPProfileSearch-lastname").style.display = "inline";
            document.getElementById("YHPProfileSearch-firstname").style.visibility = "visible";
            document.getElementById("YHPProfileSearch-firstname").style.display = "inline";
            document.getElementById("YHPProfileSearch-search").style.visibility = "hidden";
            document.getElementById("YHPProfileSearch-search").style.display = "none";
            YHPProfileSearch_SetEvents(value, title, helpertext);
            break;
        default:
            document.getElementById("YHPProfileSearch-lastname").style.visibility = "hidden";
            document.getElementById("YHPProfileSearch-lastname").style.display = "none";
            document.getElementById("YHPProfileSearch-firstname").style.visibility = "hidden";
            document.getElementById("YHPProfileSearch-firstname").style.display = "none";
            document.getElementById("YHPProfileSearch-search").style.visibility = "visible";
            document.getElementById("YHPProfileSearch-search").style.display = "inline";
            document.getElementById("YHPProfileSearch-search").value = title;
            YHPProfileSearch_SetEvents(value, title, helpertext);
            break;
    }

    YHPProfileSearchButtonTooltip(value, title);
}
function GetHelperTextIndex(searchType) {
    var typeArray = yhpProfileSearchTypes.split(';');
    var index;
    for (var x = 0; x < typeArray.length; x++) {
        var type = typeArray[x];
        if (type == searchType) {
            index = x;
        }
    }
    return index;
}
function YHPProfileSearch_ClickMe() {
	var helperArray = yhpProfileSearchHelperText.split(';');
	var sTypeSelected = document.getElementById("YHPProfileSearch_currentItem").attributes["href"].value;
	var obj = {};
	var input;
	var indexLocation;
	var searchTextEntered = 'true';
	switch (sTypeSelected) {
		case "employee":
			var lastNameEntered = 'true';
			var firstNameEntered = 'true';
			indexLocation = GetHelperTextIndex('employee');
			var htArray = helperArray[indexLocation].split(',');
			var fn = jQuery.trim(htArray[0]);
			var ln = jQuery.trim(htArray[1]);

			input = document.getElementById("YHPProfileSearch-lastname");
			if (jQuery.trim(input.value) == ln || jQuery.trim(input.value) == '') {
				obj["lastname_in"] = "";
				lastNameEntered = 'false';
			}
			else {
				obj["lastname_in"] = jQuery.trim(input.value);
			}
			input = document.getElementById("YHPProfileSearch-firstname");
			if (jQuery.trim(input.value) == fn || jQuery.trim(input.value) == '') {
				obj["firstname_in"] = "";
				firstNameEntered = 'false';
			}
			else {
				obj["firstname_in"] = jQuery.trim(input.value);
			}
			if (lastNameEntered == 'false' && firstNameEntered == 'false') {
				return false;
			}
			else {
				YHPProfileSearch_post_to_url(profileSearchLookupSearchUrl, obj, "POST");
			}
			break;
		case "4":
			indexLocation = GetHelperTextIndex('4');
			input = document.getElementById("YHPProfileSearch-search");
			if (jQuery.trim(input.value) == helperArray[indexLocation] || jQuery.trim(input.value) == '') {
				obj["au"] = "";
				searchTextEntered = 'false';
			}
			else {
				obj["au"] = jQuery.trim(input.value);
			}
			if (searchTextEntered == 'false') {
				return false;
			}
			else {
				YHPProfileSearch_post_to_url(profileSearchLookupSearchUrl, obj, "GET");
			}
			break;
		case "5":
			indexLocation = GetHelperTextIndex('5');
			input = document.getElementById("YHPProfileSearch-search");
			if (jQuery.trim(input.value) == helperArray[indexLocation] || jQuery.trim(input.value) == '') {
				obj["mac1"] = "";
				obj["mac2"] = "";
				searchTextEntered = 'false';
			}
			else {
				var mac = input.value.split("-", 2);
				if (mac.length == 1) {
					if (input.value.length <= 5) {
						obj["mac1"] = input.value.toUpperCase();
					}
					else {
						var itemOne = input.value.substring(0, 5);
						obj["mac1"] = itemOne.toUpperCase();
						var itemTwo = input.value.substring(5);
						obj["mac2"] = itemTwo;
					}
				}
				else {
					if (mac[0] == undefined) {
						obj["mac1"] = "";
					}
					else {
						obj["mac1"] = mac[0];
					}
					if (mac[1] == undefined) {
						obj["mac2"] = "";
					}
					else {
						obj["mac2"] = mac[1];
					}
				}
			}
			if (searchTextEntered == 'false') {
				return false;
			}
			else {
				YHPProfileSearch_post_to_url(profileSearchLookupSearchUrl, obj, "GET");
			}
			break;
		case "40":
			indexLocation = GetHelperTextIndex('40');
			input = document.getElementById("YHPProfileSearch-search");
			if (jQuery.trim(input.value) == helperArray[indexLocation] || jQuery.trim(input.value) == '') {
				obj["k"] = "";
				searchTextEntered = 'false';
			}
			else {
				obj["k"] = "ELID:" + input.value;
			}
			obj["s"] = "People";
			if (searchTextEntered == 'false') {
				return false;
			}
			else {
				YHPProfileSearch_post_to_url(profileSearchMySiteUrl, obj, "GET");
			}
			break;
		case "nonemployee":
			var lastNameEntered = 'true';
			var firstNameEntered = 'true';
			indexLocation = GetHelperTextIndex('nonemployee');
			var htArray = helperArray[indexLocation].split(',');
			var first = htArray[0];
			var last = htArray[1];
			input = document.getElementById("YHPProfileSearch-lastname");
			var ln;
			var fn;
			if (jQuery.trim(input.value) == last || jQuery.trim(input.value) == '') {
				ln = "";
				lastNameEntered = 'false';
			}
			else {
				ln = "LastName:" + input.value + " ";
			}
			input = document.getElementById("YHPProfileSearch-firstname");
			if (jQuery.trim(input.value) == first || jQuery.trim(input.value) == '') {
				fn = "";
				firstNameEntered = 'false';
			}
			else {
				fn = "FirstName:" + input.value;
			}
			obj["k"] = ln + fn;
			obj["s"] = "NonEmployee";
			if (lastNameEntered == 'false' && firstNameEntered == 'false') {
				return false;
			}
			else {
				YHPProfileSearch_post_to_url(profileSearchNonemployeeUrl, obj, "GET");
			}
			break;
		default:
			indexLocation = GetHelperTextIndex('0');
			input = document.getElementById("YHPProfileSearch-search");
			if (jQuery.trim(input.value) == helperArray[indexLocation] || jQuery.trim(input.value) == '') {
				obj["k"] = "";
				searchTextEntered = 'false';
			}
			else {
				obj["k"] = jQuery.trim(input.value);
			}
			obj["s"] = "People";
			if (searchTextEntered == 'false') {
				return false;
			}
			else {
				YHPProfileSearch_post_to_url(profileSearchMySiteUrl, obj, "GET");
			}
	}
}

function YHPProfileSearch_post_to_url(path, params, method) {
    method = method || "post"; // Set method to post by default, if not specified.
    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);
    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);
            form.appendChild(hiddenField);
        }
    }
    document.body.appendChild(form);
    form.submit();
}
var YHPProfileSearch_timeout = 500;
var YHPProfileSearch_closetimer = 0;
var YHPProfileSearch_ddmenuitem = 0;
var YHPProfileSearch_Container = 'YHPProfileSearch_Container';
function YHPProfileSearch_CheckInputFields() {
    var lastName = document.getElementById('YHPProfileSearch_lname');
    var firstName = document.getElementById('YHPProfileSearch_fname');
    var lastNameEntered = 'true';
    var firstNameEntered = 'true';
    if (lastName.value == 'Last name' || lastName.value == '') {
        lastNameEntered = 'false';
    }
    if (firstName.value == 'First name' || firstName.value == '') {
        firstNameEntered = 'false';
    }
    if (lastNameEntered == 'false' && firstNameEntered == 'false') {
        return false;
    }
    else {
        YHPProfileSearch_post_to_url();
        return false;
    }
}
// open hidden layer
function YHPProfileSearch_openLayer(id) {
    YHPProfileSearch_ddmenuitem = document.getElementById(id)

    if (YHPProfileSearch_ddmenuitem.style.display == 'block') {
        YHPProfileSearch_closetime();
    }
    else {
        // cancel close timer
        YHPProfileSearch_cancelclosetime();
        // close old layer
        if (YHPProfileSearch_ddmenuitem) YHPProfileSearch_ddmenuitem.style.display = 'none';
        // get new layer and show it

        YHPProfileSearch_ddmenuitem.style.display = 'block';
    }
}
// close showed layer
function YHPProfileSearch_closeLayer() {
    if (YHPProfileSearch_ddmenuitem) YHPProfileSearch_ddmenuitem.style.display = 'none';
}
// go close timer
function YHPProfileSearch_closetime() {
    YHPProfileSearch_closetimer = window.setTimeout(YHPProfileSearch_closeLayer,
YHPProfileSearch_timeout);
}
// cancel close timer
function YHPProfileSearch_cancelclosetime() {
    if (YHPProfileSearch_closetimer) {
        window.clearTimeout(YHPProfileSearch_closetimer);
        YHPProfileSearch_closetimer = null;
    }
}
//MODIFIED
function YHPProfileSearch_selectedOption(value, title, helpertext) {
    var currentItem = document.getElementById("YHPProfileSearch_currentItem");
    if (currentItem != null) {
        currentItem.title = title;
        currentItem.innerHTML = title;
        currentItem.attributes["href"].value = value;
        YHPProfileSearch_SearchUI(value, title, helpertext);
        YHPProfileSearch_closetime();
    }
}
//ENDMODIFIED
function YHPProfileSearch_GO() {
    //var currentItem = document.getElementById("YHPProfileSearch_currentItem");
    // window.location = currentItem.attributes["href"].value;
    //CheckInputFields();
    YHPProfileSearch_ClickMe();
}

function YHPProfileSearchActive(e) {
    jQuery('.YHPProfileSearchActive').each(function (i, context) {
        howDoI_removeClass(context, 'YHPProfileSearchActive');
    });
    howDoI_addClass(e, 'YHPProfileSearchActive');
}
