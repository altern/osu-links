function getWindowHeight() {
    var windowHeight = 0;
    if (typeof(window.innerHeight) == 'number') {
        windowHeight = window.innerHeight;
    }
    else {
        if (document.documentElement && document.documentElement.clientHeight) {
            windowHeight = document.documentElement.clientHeight;
        }
        else {
            if (document.body && document.body.clientHeight) {
                windowHeight = document.body.clientHeight;
            }
        }
    }
    return windowHeight;
}
function setContent() {
    if (document.getElementById) {
        var windowHeight = getWindowHeight();
        if (windowHeight > 0) {
            var contentElement = document.getElementById('content');
            var contentHeight = contentElement.offsetHeight;
            if (windowHeight - contentHeight > 0) {
                contentElement.style.position = 'relative';
                contentElement.style.top = ((windowHeight / 2) - (contentHeight / 2)) + 'px';
            }
            else {
                contentElement.style.position = 'static';
            }
        }
    }
}
var showShortcuts = function(elems) {
    if(!elems) {        
        $('.links_list li').each(function(index) {
            var shortcut = $(this).attr('shortcut');
            if(shortcut) {
                $('<span class="shortcut">' + shortcut + '</span>').appendTo($(this));
            }
        });
    } else {
        elems.each(function(index) {
            var shortcut = $(this).attr('shortcut');
            if(shortcut) {
                $('<span class="shortcut">' + shortcut + '</span>').appendTo($(this));
            }
        });
    }
}
var hideShortcuts = function(elems) {
    // if(!elems) {
        $('.shortcut').remove();
    // } else {
        // elems.remove()
    // }
}
var useShortcut = function(keyCode, keysChain) {
     // $('.links_list li').each(function(index) {
    if(keysChain) {
        var allStartingWithKey = $('.links_list li').map(function(index, elem) { 
            var sh = $(elem).attr('shortcut'); 
            if(sh.charAt(0) == keysChain && sh.charCodeAt(1) == keyCode) return sh
        })
    } else {        
        var allStartingWithKey = $('.links_list li').map(function(index, elem) { 
            var sh = $(elem).attr('shortcut'); 
            if(sh.charCodeAt(0) == keyCode) return sh
        })
    }
    if(allStartingWithKey.length > 1) {
        hideShortcuts()
        var allElemsStartingWithKey = $('.links_list li').map(function(index, elem) { 
            var sh = $(elem).attr('shortcut'); 
            if(sh.charCodeAt(0) == keyCode) return elem
        })
        showShortcuts(allElemsStartingWithKey)
        var c = String.fromCharCode(keyCode)
        return c;
    } else {                
        if(keysChain) {
            var elem = $('.links_list li').map(function(index, elem) { 
                var sh = $(elem).attr('shortcut'); 
                if(sh.charAt(0) == keysChain && sh.charCodeAt(1) == keyCode) return elem
            })
        } else {
            var elem = $('.links_list li').map(function(index, elem) { 
                var sh = $(elem).attr('shortcut'); 
                if(sh.charCodeAt(0) == keyCode) return elem
            })
        }
        var link = $(elem).find('a')[0];
        if(link.href) {
            window.open(link.href, '_blank');
        }
        hideShortcuts();
    }
    // });
}
window.onload = function() {
    setContent();
    var gKeyPressed = false;
    window.keysChain = '';
    $(document).keydown(function(event) {
        if(event.keyCode == 27) { // ESC 
            hideShortcuts()
            gKeyPressed = false;
            window.keysChain = '';
        }
        if (event.keyCode == 'G'.charCodeAt(0) && !gKeyPressed) {
            gKeyPressed = true;
            showShortcuts();
        } else {            
            if (gKeyPressed && !window.keysChain) {
                window.keysChain = useShortcut(event.keyCode);
                if(!window.keysChain) {
                    gKeyPressed = false;
                }
            } else if (gKeyPressed && window.keysChain) {
                useShortcut(event.keyCode, window.keysChain);
                gKeyPressed = false;
                window.keysChain = '';
            } 
        }
    });
}
window.onresize = function() {
    setContent();
}