/*Copyright (c) 2002 JSON.org - Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. The Software shall be used for Good, not Evil. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*/
"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(t){return 10>t?"0"+t:t}function quote(t){return escapable.lastIndex=0,escapable.test(t)?'"'+t.replace(escapable,function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var r,n,o,f,u,p=gap,a=e[t];switch(a&&"object"==typeof a&&"function"==typeof a.toJSON&&(a=a.toJSON(t)),"function"==typeof rep&&(a=rep.call(e,t,a)),typeof a){case"string":return quote(a);case"number":return isFinite(a)?a+"":"null";case"boolean":case"null":return a+"";case"object":if(!a)return"null";if(gap+=indent,u=[],"[object Array]"===Object.prototype.toString.apply(a)){for(f=a.length,r=0;f>r;r+=1)u[r]=str(r,a)||"null";return o=0===u.length?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+p+"]":"["+u.join(",")+"]",gap=p,o}if(rep&&"object"==typeof rep)for(f=rep.length,r=0;f>r;r+=1)"string"==typeof rep[r]&&(n=rep[r],o=str(n,a),o&&u.push(quote(n)+(gap?": ":":")+o));else for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(o=str(n,a),o&&u.push(quote(n)+(gap?": ":":")+o));return o=0===u.length?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+p+"}":"{"+u.join(",")+"}",gap=p,o}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx,escapable,gap,indent,meta,rep;"function"!=typeof JSON.stringify&&(escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;r>n;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,JSON.parse=function(text,reviver){function walk(t,e){var r,n,o=t[e];if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n=walk(o,r),void 0!==n?o[r]=n:delete o[r]);return reviver.call(t,e,o)}var j;if(text+="",cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();

// Copyright (c) 2015 Big Nerd Software, LLC
// ALL RIGHTS RESERVED
if (typeof window.SOM !== 'object')
window.SOM = (function (window) {
    var som = {};

    (function() {
        som.spLoading = false;
        som.apiPath = '';
        som.urlParams = {};

        var jsscript = document.getElementsByTagName("script");
        for (var i = 0; i < jsscript.length; i++) {
            var pattern = /som\.js/i;
            if ( pattern.test( jsscript[i].getAttribute("src") ) ) {
                som.apiPath = jsscript[i].getAttribute("src").split("som.js",2)[0];
                som.urlParams = (function() {
                    var match,
                        pl     = /\+/g,
                        search = /([^&=]+)=?([^&]*)/g,
                        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
                        query  = jsscript[i].getAttribute("src").replace(/^[^\?]+\??/,'');

                    var urlParams = {};

                    while (match = search.exec(query))
                        urlParams[decode(match[1])] = decode(match[2]);

                    return urlParams;
                })();

                break;
            }
        }

        // IF we aren't setup to try SP then we can setup for desktop launch right away.
        if (som.urlParams.spEnabled!=='true')
            setupForDesktopLaunch();
    })();

    function setupForScreenPal(id) {
        if (!window.ScreenPal && !som.spLoading) {
            // Mark we're loading ScreenPal so multiple calls toe SOM.Recorder(...) won't try and load more than once.
            som.spLoading = true;

            var somHostURL = new URL(som.apiPath);
            fetch('https://' + somHostURL.host + '/mobile/upload/channel-recorder?id=r:' + id)
                .then(response => {
                    if (!response.ok) {
                        // If the above call fails then fail over to normal desktop launch.
                        setupForDesktopLaunch();
                        return undefined;
                    }
                    return response.json();
                })
                .then(settings => {
                    // Bail if we couldn't get channel-recorder settings.
                    if (!settings)
                        return;

                    var spPath = 'https://files2.screencast-o-matic.com/screenpal/0.1.0.34/api/sp.js';
                    if (som.urlParams.spPath)
                        spPath = som.urlParams.spPath;
                    spPath += '?r='+id;
                    spPath += '&host='+ encodeURIComponent(somHostURL.protocol+"//"+somHostURL.host);
                    spPath += '&createUrl='+ encodeURIComponent(settings.channelCreateUploadURL + '&streaming=true');
                    spPath += '&noFolder=true';

                    if (som.urlParams.spDebug)
                        spPath += '&debug=true';

                    var spScript = document.createElement('script');
                    spScript.setAttribute('type', 'text/javascript');
                    spScript.setAttribute('src', spPath);
                    spScript.onload = function() {
                        // If this browser doesn't support then we fail over to desktop recorder
                        if (!ScreenPal.isSupportedBrowser()) {
                            setupForDesktopLaunch();
                            return;
                        }

                        // collectTitle is either set to the label that we should show for the textbox (ie 'Title') or
                        // its not defined meaning they don't want to collect a title, so we shouldn't show it.
                        let spConfig = {
                            // We aren't using animated gifs
                            animatedGif: 'never',
                            // We only show title if collectTitle is defined
                            showTitle: (settings.collectTitle !== undefined),
                            // If collectTitle is not defined then this title is what all recordings will have which is
                            // how the current desktop client works...
                            defaultTitle: 'Screencast'
                        };

                        // Current title label could be very long since desktop UI allows for that but ScreenPal UI can't
                        // handle so if the title label in collectTitle is too long then we use it as a placeholder/tooltip
                        // and default the showing "Enter" as the label.  Note the !! prefix tells ScreenPal that the
                        // user is required to enter a title and the one we're providing should only be placeholder/tooltip
                        if (settings.collectTitle) {
                            if (settings.collectTitle.length<20) {
                                spConfig.titleLabel = settings.collectTitle;
                                spConfig.defaultTitle = '!!';
                            }
                            else {
                                spConfig.titleLabel = 'Enter';
                                spConfig.defaultTitle = '!!' + settings.collectTitle;
                            }
                        }

                        ScreenPal.init(spConfig);
                    };

                    document.getElementsByTagName('head')[0].appendChild(spScript);
                });
        }
    }

    function setupForDesktopLaunch() {
        if (!window.Opentip) {
            var opentipCSSLink = document.createElement('link');
            opentipCSSLink.setAttribute('rel', 'stylesheet');
            opentipCSSLink.setAttribute('type', 'text/css');
            opentipCSSLink.setAttribute('href', som.apiPath+'opentip.css');
            document.getElementsByTagName('head')[0].appendChild(opentipCSSLink);

            var opentipScript = document.createElement('script');
            opentipScript.setAttribute('type', 'text/javascript');
            opentipScript.setAttribute('src', som.apiPath+'opentip-native.min.js');
            // opentipScript.setAttribute('src', som.apiPath+'opentip-native.js');
            document.getElementsByTagName('head')[0].appendChild(opentipScript);
        }

        if (window.addEventListener) {
            window.addEventListener('message', listenForLaunch, false);
        } else if (window.attachEvent) {
            window.attachEvent('onmessage', listenForLaunch);
        }
    }

    function listenForLaunch(e) {
        var data = '' + e.data;
        if(data.indexOf('som-launcher-download')==0) {
            showDownloadPointer();
        }
        else if(data.indexOf('som-')==0) {
            hideDownloadPointer();

            var dataparts = data.split('-');
            if (dataparts.length==3 && som.currentSettings.callback) {
                var recId = dataparts[2];

                som.waitingCallback = som.currentSettings.callback;

                if (som.currentSettings.callbackRequired==undefined || som.currentSettings.callbackRequired!=false) {
                    window.onbeforeunload = function(e) {
                        var e = e || window.event;
                        if (e) { e.returnValue = 'Screen recorder still working.\nAre you sure you want to leave?'; }
                        return 'Screen recorder still working.\nAre you sure you want to leave?';
                    };
                }

                monitor(recId, function () {
                    var script = document.createElement('script');
                    var url = som.apiPath+'getscreencast?recordingId='+recId;
                    script.src = url;
                    document.getElementsByTagName('head')[0].appendChild(script);
                });

                return;
            }

            setTimeout(som.cancel,5000);
        }
    }

    function showDownloadPointer() {
        var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

        // We only show pointer if this is chrome and they haven't explicitly said not to AND if we're the top frame
        if (!isChrome || som.currentSettings.downloadPointer===false || (window.top !== window.self))
            return;

        var div = document.createElement("div");
        div.id = "somShowDownloadPointer";
        div.style.position = "fixed";
        div.style.left = "0px";
        div.style.bottom = "0px";
        div.innerHTML = "";
        document.body.appendChild(div);

        var url = som.apiPath+"pointer";
        var somPointerFrameHtml = '<iframe width="290" height="80" id="somPointerFrame" allowTransparency="true" scrolling="no" frameborder="no" src="' + url + '"></iframe>';
        showPointerTooltip(div, somPointerFrameHtml);

        setTimeout(function() {
            hideDownloadPointer();
        },20000);
    }

    function showPointerTooltip(e, html) {
        som.downloadpointer = new Opentip(e, html, {target: true, offset: [ 100, 0 ], showOn: null, hideTrigger: null, tipJoint: 'bottom', removeElementsOnHide: true,
            borderWidth: 2, borderColor: '#ffffff', background: '#68da71', stemLength: 12, stemBase: 15, containInViewport: true
            //borderWidth: 5, stemLength: 18, stemBase: 20, borderColor: "rgba(156,156,156,0.7)",borderRadius:18, background:"rgba(255, 255, 255, 0.8)"
        });

        som.downloadpointer.show();

        var ote = document.getElementById("opentip-2");
        if (!ote)
            ote = document.getElementById("opentip-1");
        ote.style.top = '';
        ote.style.bottom = '20px';
        ote.style.position = "fixed";
        ote.style.zIndex = "3000";
    }

    function hideDownloadPointer() {
        if (som.downloadpointer) {
            som.downloadpointer.hide();
            som.downloadpointer = undefined;
        }
    }

    function buildUrlArgs(prefix, options) {
        var result = [];
        var subresult = "";

        if (prefix.length>0)
            prefix += '.';

        for(var n in options) {
            var keys = getKeys(options[n]);
            if (keys.length==0)
                result.push(prefix+encodeURIComponent(n) + "=" + encodeURIComponent(options[n]));
            else
                subresult += (subresult.length>0 ? '&' : '') + buildUrlArgs(prefix+n, options[n]);
        }
        return result.join("&") + (result.length>0 && subresult.length>0 ? '&' : '') + subresult;
    }

    function getKeys(o) {
        var result = [];

        if (Object.prototype.toString.call(o) == '[object String]')
            return result;

        for(var prop in o) {
            if (o.hasOwnProperty(prop)) {
                result.push(prop);
            }
        }
        return result;
    }

    function isShowingFrame() {
        return document.getElementById("somRecorderFrame")!=undefined;
    }

    function monitor(recId, callback) {
        var func = function(port) {
            if (port==0) {
                callback();
                return;
            }

            setTimeout(function() {
                checkIsRunning(recId,[port],func);
            },1000);
        }

        setTimeout(function() {
            checkIsRunning(recId,[64321, 62345, 52345, 58765, 53456],func);
        },5000);
    }

    function isFunc(functionToCheck) {
        var getType = {};
        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
    }

    function checkIsRunning(recId, ports, callback) {
        var div = document.getElementById('somIsRunningDiv');
        if (!div) {
            div = document.createElement('div');
            div.id = 'somIsRunningDiv';
            document.body.appendChild(div);
        }

        div.innerHTML="";

        for (var i=0; i<ports.length; i++) {
            var imgElement = document.createElement('img');

            // Get function scope so img can be called in onerror
            (function(img,port){
                img.style.width="1px";
                img.style.height="1px";
                img.src = 'http://127.0.0.1:'+port+'/unique-'+(new Date().getTime())+'/hello?hold=15&wr='+recId;
                img.onerror=function() {
                    div.removeChild(img);
                    if (div.childNodes.length==0) {
                        callback(0);
                    }
                };
                img.onload=function() {
                    callback(port);
                }
            })(imgElement,ports[i]);

            div.appendChild(imgElement);
        }
    }

    function isChromeOS() {
        return navigator.userAgent.indexOf("CrOS")>0;
    }

    function isAndroidOS() {
        return !isChromeOS() && navigator.userAgent.indexOf(" Android ")>0;
    }

    function isIOS() {
        let userAgent = navigator.userAgent.toLowerCase();
        return userAgent.indexOf("mac") > 0 && (userAgent.indexOf("iphone") > 0 || userAgent.indexOf("ipad") > 0 || navigator.maxTouchPoints > 1);
    }

    function openCentered(url, w, h) {
        // screen position                       All but Firefox     All but IE 8 and older
        var l = window.screenLeft != undefined ? window.screenLeft : window.screenX;
        var t = window.screenTop  != undefined ? window.screenTop  : window.screenY;
        var y = (window.top.outerHeight) / 2 + t - (h / 2);
        var x = (window.top.outerWidth)  / 2 + l - (w / 2);

        var win = window.open(url, 'launchWindow', 'toolbar=no, titlebar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+y+', left='+x);
        if (win.focus) {
            win.focus();
        }

        return win;
    }

    function startScreenPal() {
        if (!window.ScreenPal || !window.ScreenPal.isSupportedBrowser())
            return false;

        let waitingRecId = undefined;

        window.ScreenPal.show({
            elementId: som.currentSettings.element.substring(1),

            onStartRecording: function () {
                window.onbeforeunload = function (e) {
                    var e = e || window.event;
                    if (e) {
                        e.returnValue = 'Recorder still working.\nAre you sure you want to leave?';
                    }
                    return 'Recorder still working.\nAre you sure you want to leave?';
                };

                window.recorderInit = function (recId, s) {
                    if (recId && recId !== '0') {
                        waitingRecId = recId;

                        window.ScreenPal.__setRecordingId(recId);
                        if (som.currentSettings.callback) {
                            som.waitingCallback = som.currentSettings.callback;
                        }

                        fetch(som.apiPath + 'recorder-launched?recordingId=' + recId);
                    }
                }

                var url = som.apiPath + "recorder-init?id=" + encodeURIComponent(som.currentSettings.id);
                if (som.currentSettings.callback)
                    url += "&cb=true";
                if (som.currentSettings.customData)
                    url += "&cd=" + encodeURIComponent(JSON.stringify(som.currentSettings.customData));

                var script = document.createElement('script');
                script.src = url;
                document.getElementsByTagName('head')[0].appendChild(script);

                // If they have new SP callback defined we'll call that back as well
                if (som.currentSettings.onStartRecording)
                    som.currentSettings.onStartRecording();
            },

            onCancelRecording: function () {
                window.onbeforeunload = function () {};

                // If they have new SP callback defined we'll call that back as well
                if (som.currentSettings.onCancelRecording)
                    som.currentSettings.onCancelRecording();
            },

            onDoneRecording: function (recording) {
                if (som.currentSettings.callback) {
                    // Recording so poll to see when screencast is ready
                    let startPolling = Date.now();
                    som.intervalPollingForReady = setInterval(function () {
                        // Only poll for 15 min max then give up...
                        if (Date.now() - startPolling > 900 * 1000) {
                            clearInterval(som.intervalPollingForReady);
                            console.error('Timed out waiting for getscreencast');
                            return;
                        }

                        // See if the screencast is ready
                        fetch(som.apiPath + 'getscreencast?recordingId=' + waitingRecId + '&json=true')
                            .then(response => {
                                if (!response.ok) {
                                    console.error('Failed to check getscreencast');
                                    return;
                                }
                                return response.json();
                            })
                            .then(json => {
                                if (json.id !== undefined) {
                                    clearInterval(som.intervalPollingForReady);
                                    som.__gotscreencast(json);
                                }
                            });
                    }, 5000);
                }

                // If they have new SP callback defined we'll call that back as well
                if (som.currentSettings.onDoneRecording)
                    som.currentSettings.onDoneRecording();
            }
        });

        return true;
    }

    som.Recorder = function (settings) {
        // If we're setup to do ScreenPal then we add javascript when host calls to setup Recorder (so we have the recorderId)
        if (som.urlParams.spEnabled==='true')
            setupForScreenPal(settings.id);

        return {
            embed: function() {
                this.addRecordButtonAfterId("som_recorder_"+settings.id, settings.customButton);
            },

            attach: function(id) {
                settings.element = '#' + id;
                document.getElementById(id).onclick = this.start;
            },

            addRecordButtonAfterId: function(id, customButton) {
                var button = document.createElement("img");

                button.src = (settings.buttonImageUrl) ? settings.buttonImageUrl : som.apiPath+'images/record_button.png';
                if (customButton) {
                    button = document.createElement("button");
                    button.innerHTML = '<i class="fas fa-video"></i> Add Recording to Channel';
                    button.className = 'recording-button';
                }
                button.id = "som_record_button_"+settings.id;
                button.style.border = "none";
                button.title = "Launch screen recorder";
                button.onclick = this.start;
                button.onmouseover = function() { button.style["cursor"] = 'pointer'};

                settings.element = '#'+button.id;

                var element = document.getElementById(id);
                element.parentNode.insertBefore(button, element.nextSibling);
            },

            start: function() {
                if (isShowingFrame()) {
                    if (som.opentip)
                        som.opentip.hide();
                    return;
                }

                som.currentSettings = settings;

                if (startScreenPal())
                    return;

                var version = settings.v;
                if (!version)
                    version = 2;

                var url = som.apiPath+"launch?id="+settings.id+"&v="+version;

                if (som.urlParams.installed)
                    url += '&installed=true';

                if (isChromeOS() && som.urlParams.chromeAppId)
                    url += '&chromeAppId=' + encodeURIComponent(som.urlParams.chromeAppId);

                if ((isChromeOS() || isAndroidOS()) && som.urlParams.androidEnabled)
                    url += '&androidEnabled=true';

                if (isIOS() && som.urlParams.iosEnabled)
                    url += '&iosEnabled=true';

                if (settings.options)
                    url += "&" + buildUrlArgs('',settings.options ? settings.options : {});

                if (settings.callback)
                    url += '&cb=true';

                if (settings.callback && (som.currentSettings.callbackRequired==undefined || som.currentSettings.callbackRequired!=false))
                    url += '&stay=true';

                if (settings.customData)
                    url += '&cd=' + encodeURIComponent(JSON.stringify(settings.customData));

                if ((isChromeOS() || isAndroidOS()) && som.urlParams.androidEnabled) {
                    if (settings.type == 'new-tab')
                        window.open(url);
                    else
                        openCentered(url, 410, 110);

                    return;
                }

                var somRecorderFrameHtml = '<iframe width="300" height="90" id="somRecorderFrame" allowTransparency="true" scrolling="no" frameborder="no" src="' + url + '"></iframe>';

                som.launchtype = settings.type;
                if (!som.launchtype)
                    som.launchtype = 'tooltip';

                if (isFunc(som.launchtype))
                    som.launchtype = som.launchtype();

                som.opentip = undefined;

                if (som.launchtype=='bottom-bar') {
                    var frame = document.createElement("iframe");
                    frame.style.boxSizing = 'content-box';
                    frame.style.width = "100%";
                    frame.style.height = "90px";
                    frame.style.padding = "7px 0 3px 0";
                    frame.style.zIndex = "1000";
                    frame.style.position = "fixed";
                    frame.style.bottom = "-110px";
                    frame.style.left = "0px";
                    frame.style.boxShadow = "0 0 4px 1px rgba(0, 0, 0, 0.3)";
                    frame.style.background = "#ffffff";
                    frame.style.opacity = "0.95";
                    frame.scrolling = "no";
                    frame.id = "somRecorderFrame";
                    frame.name = "somRecorderFrame";
                    frame.setAttribute("frameBorder", 0);
                    frame.src = url;
                    document.body.appendChild(frame);

                    var closeDiv = document.createElement("div");
                    closeDiv.id = "somCloseDiv";
                    closeDiv.style.position = "fixed";
                    closeDiv.style.right = "10px";
                    closeDiv.style.bottom = "70px";
                    closeDiv.style.zIndex = "2000";
                    closeDiv.innerHTML = '<a href="javascript:SOM.cancel()"><img style="border:0;" src="'+som.apiPath+'/images/close_button.png"></a>';

                    som.bottomFrame = -110;
                    var interval = setInterval(function () {
                        som.bottomFrame += 10;
                        frame.style.bottom = som.bottomFrame + 'px';
                        if (som.bottomFrame == 0) {
                            document.body.appendChild(closeDiv);
                            clearInterval(interval);
                        }
                    } ,50);
                }
                else if (som.launchtype=='in-div') {
                    var e = document.getElementById(settings.element.substring(1));
                    e.innerHTML = somRecorderFrameHtml;
                }
                else {
                    som.opentip = new Opentip(settings.element, somRecorderFrameHtml, {target: true, showOn: null, hideTrigger: "closeButton", tipJoint: 'bottom', removeElementsOnHide: true,
                        closeButtonCrossColor: "#aaaaaa",
                        borderWidth: 1, borderColor: '#aaaaaa', background: '#ffffff', stemLength: 12, stemBase: 15
                        //borderWidth: 5, stemLength: 18, stemBase: 20, borderColor: "rgba(156,156,156,0.7)",borderRadius:18, background:"rgba(255, 255, 255, 0.8)"
                    });

                    som.opentip.show();
                }
            }
        }
    };

    som.cancel = function() {
        if (isShowingFrame()) {
            if (som.opentip) {
                som.opentip.hide();
            }
            else if (som.launchtype=='bottom-bar') {
                var closeDiv = document.getElementById("somCloseDiv");
                document.body.removeChild(closeDiv);

                var frame = document.getElementById("somRecorderFrame");
                som.bottomFrame = 0;
                var interval = setInterval(function () {
                    som.bottomFrame -= 10;
                    frame.style.bottom = som.bottomFrame + 'px';
                    if (som.bottomFrame == -110) {
                        document.body.removeChild(frame);
                        clearInterval(interval);
                    }
                } ,50);
            }
        }
    }

    som.__gotscreencast = function (screencast) {
        if (som.waitingCallback) {
            window.onbeforeunload=function(){};
            som.cancel();
            som.waitingCallback(screencast);
        }
    }

    return som;
}(window));
