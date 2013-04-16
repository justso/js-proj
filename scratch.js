// for (var i in this) console.log(i+':', this[i], ',');
// this === global >> // root === GLOBAL >> // env ~== ENV

var global = {
    process: {
        title: 'node',
        version: 'v0.4.10',
        installPrefix: '/usr',
        versions: {
            node: '0.4.10',
            v8: '3.1.8.26',
            ares: '1.7.4',
            ev: '4.4',
            openssl: '0.9.8r'
        },
        platform: 'darwin',
        argv: ['node'],
        env: {
            MANPATH: '/opt/local/share/man:',
            TERM_PROGRAM: 'Apple_Terminal',
            TERM: 'xterm-color',
            SHELL: '/bin/bash',
            HISTSIZE: '2048',
            color_gre0: '\\e[0;32m',
            TMPDIR: '/var/folders/ur/urzrykk1FdOu9Sjllxe2s++++TI/-Tmp-/',
            color_gre1: '\\e[1;32m',
            Apple_PubSub_Socket_Render: '/tmp/launch-QCMNcA/Render',
            TERM_PROGRAM_VERSION: '273.1',
            USER: 'drt',
            COMMAND_MODE: 'unix2003',
            color_bla1: '\\e[1;30m',
            color_bla0: '\\e[0;30m',
            SSH_AUTH_SOCK: '/tmp/launch-aJ0JTt/Listeners',
            __CF_USER_TEXT_ENCODING: '0x1F5:0:0',
            LSCOLORS: 'Gxfxcxdxbxegedabagacad',
            PATH: '/opt/local/bin:/opt/local/sbin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/usr/local/git/bin:/usr/X11/bin:/Developer/Tools:/Developer/usr:/Developer/usr/bin:/Developer/usr/sbin:/usr/local/sbin:/usr/local/git/bin:/usr/local/bin:~/.bin:~/.gem/ruby/1.8/bin:/Users/drt/.~/.git:/Users/drt/.~/.private:/Users/drt/.~/bash:/Users/drt/.~/bin:/Users/drt/.~/bore:/Users/drt/.~/cmd:/Users/drt/.~/fs:/Users/drt/.~/git:/Users/drt/.~/lib:/Users/drt/.~/mamp:/Users/drt/.~/misc:/Users/drt/.~/obj:/Users/drt/.~/osa:/Users/drt/.~/php:/Users/drt/.~/samples:/Users/drt/.~/Scripts:/Users/drt/.~/Services:/Users/drt/.~/stat:/Users/drt/.~/struct:/Users/drt/.~/sync:/Users/drt/.~/test:/Users/drt/.~/tools',
            color_none: '\\e[0;00m',
            PWD: '/Users/drt',
            EDITOR: '/usr/local/bin/mate',
            color_whi1: '\\e[1;37m',
            LANG: 'en_US.UTF-8',
            color_mag1: '\\e[1;35m',
            color_mag0: '\\e[0;35m',
            PS1: '\\[\\e[1;37m\\]<!---------------------------------- hist#:\\! cmd#:\\# jobs:\\j time:\\t ---------------------------lvl-1-->\\n \\u@GizBook \\H: \\w\\[\\e[0;00m\\] $ ',
            HISTIGNORE: '&:bash:cd:echo:exit:ll:lll:ls:man',
            HISTCONTROL: 'ignoreboth:erasedups',
            color_gry7: '\\e[0;37m',
            color_gry0: '\\e[0;90m',
            SHLVL: '1',
            HOME: '/Users/drt',
            DRT: '1',
            color_red1: '\\e[1;31m',
            color_red0: '\\e[0;31m',
            LOGNAME: 'drt',
            LC_CTYPE: 'en_US.UTF-8',
            NETRC: '/Users/drt/Developer/dot/.private',
            color_blu1: '\\e[1;34m',
            color_blu0: '\\e[0;34m',
            color_cya1: '\\e[1;36m',
            color_yel0: '\\e[0;33m',
            DISPLAY: '/tmp/launch-b7zmmk/org.x:0',
            color_cya0: '\\e[0;36m',
            color_yel1: '\\e[1;33m',
            LaunchCFMApp: '/System/Library/Frameworks/Carbon.framework/Versions/Current/Support/LaunchCFMApp',
            color_one0: '\\e[1;00m',
            HISTFILE: '/Users/drt/.~/bash/history.GizBook.sh',
            _: '/usr/bin/node'
        },
        pid: 35811,
        execPath: '/usr/bin/node',
        compile: [Function],
        _needTickCallback: [Function],
        reallyExit: [Function],
        chdir: [Function],
        cwd: [Function],
        getuid: [Function],
        setuid: [Function],
        setgid: [Function],
        getgid: [Function],
        umask: [Function],
        dlopen: [Function],
        _kill: [Function],
        memoryUsage: [Function],
        binding: [Function],
        EventEmitter: [Function: EventEmitter],
        assert: [Function],
        _tickCallback: [Function],
        nextTick: [Function],
        stdout: {
            bufferSize: 0,
            fd: 1,
            type: null,
            allowHalfOpen: false,
            _readWatcher: null,
            destroyed: false,
            readable: false,
            _writeQueue: [],
            _writeQueueEncoding: [],
            _writeQueueFD: [],
            _writeQueueCallbacks: [],
            _writeWatcher: {
                socket: [Circular],
                callback: [Function: onWritable]
            },
            writable: true,
            _writeImpl: [Function],
            _readImpl: [Function],
            _shutdownImpl: [Function]
        },
        stderr: {
            writable: true,
            readable: false,
            write: [Function],
            destroySoon: [Function],
            destroy: [Function],
            end: [Function]
        },
        stdin: {
            bufferSize: 0,
            fd: 0,
            type: null,
            allowHalfOpen: false,
            _readWatcher: {
                socket: [Circular],
                callback: [Function: onReadable]
            },
            destroyed: false,
            readable: true,
            _writeQueue: [],
            _writeQueueEncoding: [],
            _writeQueueFD: [],
            _writeQueueCallbacks: [],
            _writeWatcher: null,
            writable: false,
            _writeImpl: [Function],
            _readImpl: [Function],
            _shutdownImpl: [Function],
            _events: {
                keypress: [Object],
                data: [Function: onData]
            }
        },
        openStdin: [Function],
        exit: [Function],
        kill: [Function],
        addListener: [Function],
        on: [Function],
        removeListener: [Function],
        debug: [Function],
        error: [Function],
        watchFile: [Function],
        unwatchFile: [Function],
        mixin: [Function],
        createChildProcess: [Function],
        inherits: [Function],
        _byteLength: [Function],
        _events: {
            SIGWINCH: [[Function]]
        }
    },
    Buffer: function Buffer(subject, encoding, offset) {
        if (!(this instanceof Buffer)) {
            return new Buffer(subject, encoding, offset);
        }
        var type;
        // Are we slicing?
        if (typeof offset === 'number') {
            this.length = encoding;
            this.parent = subject;
            this.offset = offset;
        } else {
            // Find the length
            switch (type = typeof subject) {
            case 'number':
                this.length = subject;
                break;
            case 'string':
                this.length = Buffer.byteLength(subject, encoding);
                break;
            case 'object':
                // Assume object is an array
                this.length = subject.length;
                break;
            default:
                throw new Error('First argument needs to be a number, ' + 'array or string.');
            }
            if (this.length > Buffer.poolSize) {
                // Big buffer, just alloc one.
                this.parent = new SlowBuffer(this.length);
                this.offset = 0;
            } else {
                // Small buffer.
                if (!pool || pool.length - pool.used < this.length) allocPool();
                this.parent = pool;
                this.offset = pool.used;
                pool.used += this.length;
            }
            // Treat array-ish objects as a byte array.
            if (isArrayIsh(subject)) {
                for (var i = 0; i < this.length; i++) {
                    this.parent[i + this.offset] = subject[i];
                }
            } else if (type == 'string') {
                // We are a string
                this.length = this.write(subject, 0, encoding);
            }
        }
        SlowBuffer.makeFastBuffer(this.parent, this, this.offset, this.length);
    },
    setTimeout: function () {
        var t = NativeModule.require('timers');
        return t.setTimeout.apply(this, arguments);
    },
    setInterval: function () {
        var t = NativeModule.require('timers');
        return t.setInterval.apply(this, arguments);
    },
    clearTimeout: function () {
        var t = NativeModule.require('timers');
        return t.clearTimeout.apply(this, arguments);
    },
    clearInterval: function () {
        var t = NativeModule.require('timers');
        return t.clearInterval.apply(this, arguments);
    },
    console: {
        log: [Function],
        info: [Function],
        warn: [Function],
        error: [Function],
        dir: [Function],
        time: [Function],
        timeEnd: [Function],
        trace: [Function],
        assert: [Function]
    },
    module: {
        id: 'repl',
        exports: {
            writer: [Function],
            REPLServer: [Function: REPLServer],
            start: [Function],
            repl: {
                context: [Object],
                bufferedCommand: 'for (var i in this) console.log(i+\':\', this[i], \',\');\n',
                outputStream: [Object],
                inputStream: [Object],
                prompt: '> ',
                rli: [Object],
                commands: [Object]
            }
        },
        parent: undefined,
        filename: '/Users/drt/repl',
        loaded: false,
        exited: false,
        children: [],
        paths: ['/Users/drt/repl/node_modules', '/Users/drt/node_modules', '/Users/node_modules', '/node_modules']
    },
    require: function require(path) {
        return Module._load(path, self);
    },
    i: i
}



//#!/usr/bin/env node #// -*- Mode: Node.js JavaScript; tab-width: 4; -*-

/*
---
url: http://gist.github.com/441101
name : safari-get-html
description : safari-get-html will rock your socks!
authors   : Thomas Aylott
copyright : © 2010 Thomas Aylott
license   : MIT
provides:
- AppleScriptApp
- Safari
- String.escapeShell
- String.escapeAppleScript
requires:
- Node.js/sys.p
- Node.js/sys.debug
- Node.js/child_process.exec
environment:
- osx
- osascript
- Safari.app
...
*/
var sys = require('sys');
// escape text to make it useable in a shell script as one “word” (string)
//	Based on TextMate.app/Contents/SharedSupport/Support/lib/escape.rb e_sh
String.escapeShell = function (str) {
    // Ruby: str.to_s.gsub(/(?=[^a-zA-Z0-9_.\/\-\x7F-\xFF\n])/n, '\\').gsub(/\n/, "'\n'").sub(/^$/, "''")
    return ('' + str).replace(/(?=[^a-zA-Z0-9_.\/\-\x7F-\xFF\n])/gm, '\\').replace(/\n/g, "'\n'").replace(/^$/, "''");
}
// escape text for use in an AppleScript string
//	Based on TextMate.app/Contents/SharedSupport/Support/lib/escape.rb e_as
String.escapeAppleScript = function (str) {
    // str.to_s.gsub(/(?=["\\])/, '\\')
    return ('' + str).replace(/(?=["\\])/g, '\\');
}

function AppleScriptApp(appName) {
    if (!(this instanceof AppleScriptApp)) throw new Error("Usage: `new AppleScriptApp(appName:String)`");
    this.appName = '' + appName;
}
AppleScriptApp.prototype.exec = require('child_process').exec;
// AppleScriptApp.prototype.exec = require('sys').print;
AppleScriptApp.prototype.tell = function (script) {
    var command = 'osascript -e ' + String.escapeShell('tell application "' + this.appName + '"') + ' -e ' + String.escapeShell(script) + ' -e ' + 'end tell';
    sys.debug(command);
    return this.exec(
    command, {
        encoding: 'utf8',
        timeout: 120 * 1000,
        maxBuffer: 10240 * 1024
        //,	killSignal: 'SIGKILL'
    }, this.handleExec);
}
AppleScriptApp.prototype.handleExec = function (error, stdout, stderr) {
    sys.print(stdout);
    sys.debug(stderr);
    if (error !== null) sys.p(error);
};

function Safari() {
    if (!(this instanceof Safari)) throw new Error("Usage: `new Safari`");
}
Safari.prototype = new AppleScriptApp('Safari');
Function.uneval = function (fn) {
    fn = '' + fn;
    var string = '';
    if (/^function\b/.test(fn)) string += '(' + fn + ')()';
    else return fn;
    return string;
}
Safari.prototype.doJavaScript = function (js) {
    js = Function.uneval(js);
    return this.tell('tell the first document to do javascript "' + String.escapeAppleScript(js) + '"');
}
Safari.prototype.getSource = function () {
    return this.tell('get the source of the first document');
}
// Safari.prototype.getHTML = function(){}
var safari = new Safari;
// safari.doJavaScript('document.documentElement.outerHTML');
safari.doJavaScript(function () {
    return document.documentElement.outerHTML;
});
// safari.getSource();
