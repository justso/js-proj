var Host = {
    dev: (location.hostname === '10.89.101.100'),
    mfal: 'http://ecg.hosting.wellsfargo.com/mfal/drt/gchild/',
    qla2: 'http://10.89.101.100/tmp/gchild/',
};
var Test = {
    init: function () {
        console.log('init', docname);
        _opener();
    },
    parent: function () {
        this.init();
    // current domain
    // open link (child popup)
    // access page? (write child body to parent)
    // provide link (child utility)
    // after click
    // access page? (write child body to parent)
    },
    child: function () {
        this.init();
    // current domain
    // open link (child popup)
    // access page? (write child body to parent)
    // provide link (child utility)
    // after click
    // access page? (write child body to parent)
    },
    grandchild: function () {
        this.init();
    // current domain
    // open link (child popup)
    // access page? (write child body to parent)
    // provide link (child utility)
    // after click
    // access page? (write child body to parent)
    },
};
function _opener() {
    AAA = docname;
    try {

        console.log('opener:'+opener.AAA, 'self:'+AAA, [opener, window]);
        window.opener.focus();
    } catch (err) {
        console.log('orphan', AAA, [err, window]);
    }
    return true;
}
function _secrets() {
    try {
        console.log('secrets?', opener.document.body);
    } catch (err) {
        console.log(err);
    }
}

function offsite() {
    // jump to other domain
    if (Host.dev) {
        // goto mfal
        window.location = Host.mfal + docname + '.html';
    } else {
        // goto dev
        window.location = Host.qla2 + docname + '.html';
    }
}

