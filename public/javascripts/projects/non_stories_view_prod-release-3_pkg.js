(function(a,b){
    function cy(a){
        return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1
        }
        function cv(a){
        if(!cj[a]){
            var b=f("<"+a+">").appendTo("body"),d=b.css("display");
            b.remove();
            if(d==="none"||d===""){
                ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),c.body.appendChild(ck);
                if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write("<!doctype><html><body></body></html>");
                b=cl.createElement(a),cl.body.appendChild(b),d=f.css(b,"display"),c.body.removeChild(ck)
                }
                cj[a]=d
            }
            return cj[a]
        }
        function cu(a,b){
        var c={};

        f.each(cp.concat.apply([],cp.slice(0,b)),function(){
            c[this]=a
            });
        return c
        }
        function ct(){
        cq=b
        }
        function cs(){
        setTimeout(ct,0);
        return cq=f.now()
        }
        function ci(){
        try{
            return new a.ActiveXObject("Microsoft.XMLHTTP")
            }catch(b){}
    }
    function ch(){
    try{
        return new a.XMLHttpRequest
        }catch(b){}
}
function cb(a,c){
    a.dataFilter&&(c=a.dataFilter(c,a.dataType));
    var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;
    for(g=1;g<i;g++){
        if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];
        if(k==="*")k=l;
        else if(l!=="*"&&l!==k){
            m=l+" "+k,n=e[m]||e["* "+k];
            if(!n){
                p=b;
                for(o in e){
                    j=o.split(" ");
                    if(j[0]===l||j[0]==="*"){
                        p=e[j[1]+" "+k];
                        if(p){
                            o=e[o],o===!0?n=p:p===!0&&(n=o);
                            break
                        }
                    }
                }
                }!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))
    }
}
return c
}
function ca(a,c,d){
    var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;
    for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));
    if(h)for(i in e)if(e[i]&&e[i].test(h)){
        f.unshift(i);
        break
    }
    if(f[0]in d)j=f[0];
    else{
        for(i in d){
            if(!f[0]||a.converters[i+" "+f[0]]){
                j=i;
                break
            }
            k||(k=i)
            }
            j=j||k
        }
        if(j){
        j!==f[0]&&f.unshift(j);
        return d[j]
        }
    }
function b_(a,b,c,d){
    if(f.isArray(b))f.each(b,function(b,e){
        c||bF.test(a)?d(a,e):b_(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)
        });
    else if(!c&&b!=null&&typeof b=="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)
        }
        function b$(a,c,d,e,f,g){
    f=f||c.dataTypes[0],g=g||{},g[f]=!0;
    var h=a[f],i=0,j=h?h.length:0,k=a===bU,l;
    for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));
    (k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));
    return l
    }
    function bZ(a){
    return function(b,c){
        typeof b!="string"&&(c=b,b="*");
        if(f.isFunction(c)){
            var d=b.toLowerCase().split(bQ),e=0,g=d.length,h,i,j;
            for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)
                }
            }
}
function bD(a,b,c){
    var d=b==="width"?bx:by,e=b==="width"?a.offsetWidth:a.offsetHeight;
    if(c==="border")return e;
    f.each(d,function(){
        c||(e-=parseFloat(f.css(a,"padding"+this))||0),c==="margin"?e+=parseFloat(f.css(a,"margin"+this))||0:e-=parseFloat(f.css(a,"border"+this+"Width"))||0
        });
    return e
    }
    function bn(a,b){
    b.src?f.ajax({
        url:b.src,
        async:!1,
        dataType:"script"
    }):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)
    }
    function bm(a){
    f.nodeName(a,"input")?bl(a):a.getElementsByTagName&&f.grep(a.getElementsByTagName("input"),bl)
    }
    function bl(a){
    if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked
        }
        function bk(a){
    return"getElementsByTagName"in a?a.getElementsByTagName("*"):"querySelectorAll"in a?a.querySelectorAll("*"):[]
    }
    function bj(a,b){
    var c;
    if(b.nodeType===1){
        b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();
        if(c==="object")b.outerHTML=a.outerHTML;
        else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){
            if(c==="option")b.selected=a.defaultSelected;
            else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue
                }else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);
        b.removeAttribute(f.expando)
        }
    }
function bi(a,b){
    if(b.nodeType===1&&!!f.hasData(a)){
        var c=f.expando,d=f.data(a),e=f.data(b,d);
        if(d=d[c]){
            var g=d.events;
            e=e[c]=f.extend({},d);
            if(g){
                delete e.handle,e.events={};

                for(var h in g)for(var i=0,j=g[h].length;i<j;i++)f.event.add(b,h+(g[h][i].namespace?".":"")+g[h][i].namespace,g[h][i],g[h][i].data)
                    }
                }
    }
}
function bh(a,b){
    return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a
    }
    function X(a,b,c){
    b=b||0;
    if(f.isFunction(b))return f.grep(a,function(a,d){
        var e=!!b.call(a,d,a);
        return e===c
        });
    if(b.nodeType)return f.grep(a,function(a,d){
        return a===b===c
        });
    if(typeof b=="string"){
        var d=f.grep(a,function(a){
            return a.nodeType===1
            });
        if(S.test(b))return f.filter(b,d,!c);
        b=f.filter(b,d)
        }
        return f.grep(a,function(a,d){
        return f.inArray(a,b)>=0===c
        })
    }
    function W(a){
    return!a||!a.parentNode||a.parentNode.nodeType===11
    }
    function O(a,b){
    return(a&&a!=="*"?a+".":"")+b.replace(A,"`").replace(B,"&")
    }
    function N(a){
    var b,c,d,e,g,h,i,j,k,l,m,n,o,p=[],q=[],r=f._data(this,"events");
    if(!(a.liveFired===this||!r||!r.live||a.target.disabled||a.button&&a.type==="click")){
        a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;
        var s=r.live.slice(0);
        for(i=0;i<s.length;i++)g=s[i],g.origType.replace(y,"")===a.type?q.push(g.selector):s.splice(i--,1);
        e=f(a.target).closest(q,a.currentTarget);
        for(j=0,k=e.length;j<k;j++){
            m=e[j];
            for(i=0;i<s.length;i++){
                g=s[i];
                if(m.selector===g.selector&&(!n||n.test(g.namespace))&&!m.elem.disabled){
                    h=m.elem,d=null;
                    if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,d=f(a.relatedTarget).closest(g.selector)[0],d&&f.contains(h,d)&&(d=h);
                    (!d||d!==h)&&p.push({
                        elem:h,
                        handleObj:g,
                        level:m.level
                        })
                    }
                }
            }
        for(j=0,k=p.length;j<k;j++){
    e=p[j];
    if(c&&e.level>c)break;
    a.currentTarget=e.elem,a.data=e.handleObj.data,a.handleObj=e.handleObj,o=e.handleObj.origHandler.apply(e.elem,arguments);
    if(o===!1||a.isPropagationStopped()){
        c=e.level,o===!1&&(b=!1);
        if(a.isImmediatePropagationStopped())break
    }
}
return b
}
}
function L(a,c,d){
    var e=f.extend({},d[0]);
    e.type=a,e.originalEvent={},e.liveFired=b,f.event.handle.call(c,e),e.isDefaultPrevented()&&d[0].preventDefault()
    }
    function F(){
    return!0
    }
    function E(){
    return!1
    }
    function m(a,c,d){
    var e=c+"defer",g=c+"queue",h=c+"mark",i=f.data(a,e,b,!0);
    i&&(d==="queue"||!f.data(a,g,b,!0))&&(d==="mark"||!f.data(a,h,b,!0))&&setTimeout(function(){
        !f.data(a,g,b,!0)&&!f.data(a,h,b,!0)&&(f.removeData(a,e,!0),i.resolve())
        },0)
    }
    function l(a){
    for(var b in a)if(b!=="toJSON")return!1;return!0
    }
    function k(a,c,d){
    if(d===b&&a.nodeType===1){
        var e="data-"+c.replace(j,"$1-$2").toLowerCase();
        d=a.getAttribute(e);
        if(typeof d=="string"){
            try{
                d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNaN(d)?i.test(d)?f.parseJSON(d):d:parseFloat(d)
                }catch(g){}
            f.data(a,c,d)
            }else d=b
            }
            return d
    }
    var c=a.document,d=a.navigator,e=a.location,f=function(){
    function H(){
        if(!e.isReady){
            try{
                c.documentElement.doScroll("left")
                }catch(a){
                setTimeout(H,1);
                return
            }
            e.ready()
            }
        }
    var e=function(a,b){
    return new e.fn.init(a,b,h)
    },f=a.jQuery,g=a.$,h,i=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/\d/,n=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,o=/^[\],:{}\s]*$/,p=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,q=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,r=/(?:^|:|,)(?:\s*\[)+/g,s=/(webkit)[ \/]([\w.]+)/,t=/(opera)(?:.*version)?[ \/]([\w.]+)/,u=/(msie) ([\w.]+)/,v=/(mozilla)(?:.*? rv:([\w.]+))?/,w=d.userAgent,x,y,z,A=Object.prototype.toString,B=Object.prototype.hasOwnProperty,C=Array.prototype.push,D=Array.prototype.slice,E=String.prototype.trim,F=Array.prototype.indexOf,G={};

e.fn=e.prototype={
    constructor:e,
    init:function(a,d,f){
        var g,h,j,k;
        if(!a)return this;
        if(a.nodeType){
            this.context=this[0]=a,this.length=1;
            return this
            }
            if(a==="body"&&!d&&c.body){
            this.context=c,this[0]=c.body,this.selector=a,this.length=1;
            return this
            }
            if(typeof a=="string"){
            a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];
            if(g&&(g[1]||!d)){
                if(g[1]){
                    d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=n.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);
                    return e.merge(this,a)
                    }
                    h=c.getElementById(g[2]);
                if(h&&h.parentNode){
                    if(h.id!==g[2])return f.find(a);
                    this.length=1,this[0]=h
                    }
                    this.context=c,this.selector=a;
                return this
                }
                return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)
            }
            if(e.isFunction(a))return f.ready(a);
        a.selector!==b&&(this.selector=a.selector,this.context=a.context);
        return e.makeArray(a,this)
        },
    selector:"",
    jquery:"1.6.1",
    length:0,
    size:function(){
        return this.length
        },
    toArray:function(){
        return D.call(this,0)
        },
    get:function(a){
        return a==null?this.toArray():a<0?this[this.length+a]:this[a]
        },
    pushStack:function(a,b,c){
        var d=this.constructor();
        e.isArray(a)?C.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");
        return d
        },
    each:function(a,b){
        return e.each(this,a,b)
        },
    ready:function(a){
        e.bindReady(),y.done(a);
        return this
        },
    eq:function(a){
        return a===-1?this.slice(a):this.slice(a,+a+1)
        },
    first:function(){
        return this.eq(0)
        },
    last:function(){
        return this.eq(-1)
        },
    slice:function(){
        return this.pushStack(D.apply(this,arguments),"slice",D.call(arguments).join(","))
        },
    map:function(a){
        return this.pushStack(e.map(this,function(b,c){
            return a.call(b,c,b)
            }))
        },
    end:function(){
        return this.prevObject||this.constructor(null)
        },
    push:C,
    sort:[].sort,
    splice:[].splice
    },e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){
    var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;
    typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);
    for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){
        d=i[c],f=a[c];
        if(i===f)continue;
        l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)
        }
        return i
    },e.extend({
    noConflict:function(b){
        a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);
        return e
        },
    isReady:!1,
    readyWait:1,
    holdReady:function(a){
        a?e.readyWait++:e.ready(!0)
        },
    ready:function(a){
        if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){
            if(!c.body)return setTimeout(e.ready,1);
            e.isReady=!0;
            if(a!==!0&&--e.readyWait>0)return;
            y.resolveWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").unbind("ready")
            }
        },
bindReady:function(){
    if(!y){
        y=e._Deferred();
        if(c.readyState==="complete")return setTimeout(e.ready,1);
        if(c.addEventListener)c.addEventListener("DOMContentLoaded",z,!1),a.addEventListener("load",e.ready,!1);
        else if(c.attachEvent){
            c.attachEvent("onreadystatechange",z),a.attachEvent("onload",e.ready);
            var b=!1;
            try{
                b=a.frameElement==null
                }catch(d){}
            c.documentElement.doScroll&&b&&H()
            }
        }
},
isFunction:function(a){
    return e.type(a)==="function"
    },
isArray:Array.isArray||function(a){
    return e.type(a)==="array"
    },
isWindow:function(a){
    return a&&typeof a=="object"&&"setInterval"in a
    },
isNaN:function(a){
    return a==null||!m.test(a)||isNaN(a)
    },
type:function(a){
    return a==null?String(a):G[A.call(a)]||"object"
    },
isPlainObject:function(a){
    if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;
    if(a.constructor&&!B.call(a,"constructor")&&!B.call(a.constructor.prototype,"isPrototypeOf"))return!1;
    var c;
    for(c in a);return c===b||B.call(a,c)
    },
isEmptyObject:function(a){
    for(var b in a)return!1;return!0
    },
error:function(a){
    throw a
    },
parseJSON:function(b){
    if(typeof b!="string"||!b)return null;
    b=e.trim(b);
    if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);
    if(o.test(b.replace(p,"@").replace(q,"]").replace(r,"")))return(new Function("return "+b))();
    e.error("Invalid JSON: "+b)
    },
parseXML:function(b,c,d){
    a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b)),d=c.documentElement,(!d||!d.nodeName||d.nodeName==="parsererror")&&e.error("Invalid XML: "+b);
    return c
    },
noop:function(){},
globalEval:function(b){
    b&&j.test(b)&&(a.execScript||function(b){
        a.eval.call(a,b)
        })(b)
    },
nodeName:function(a,b){
    return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()
    },
each:function(a,c,d){
    var f,g=0,h=a.length,i=h===b||e.isFunction(a);
    if(d){
        if(i){
            for(f in a)if(c.apply(a[f],d)===!1)break
                }else for(;g<h;)if(c.apply(a[g++],d)===!1)break
            }else if(i){
        for(f in a)if(c.call(a[f],f,a[f])===!1)break
            }else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a
    },
trim:E?function(a){
    return a==null?"":E.call(a)
    }:function(a){
    return a==null?"":(a+"").replace(k,"").replace(l,"")
    },
makeArray:function(a,b){
    var c=b||[];
    if(a!=null){
        var d=e.type(a);
        a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?C.call(c,a):e.merge(c,a)
        }
        return c
    },
inArray:function(a,b){
    if(F)return F.call(b,a);
    for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1
    },
merge:function(a,c){
    var d=a.length,e=0;
    if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];
    a.length=d;
    return a
    },
grep:function(a,b,c){
    var d=[],e;
    c=!!c;
    for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);
    return d
    },
map:function(a,c,d){
    var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));
    if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)
    },
guid:1,
proxy:function(a,c){
    if(typeof c=="string"){
        var d=a[c];
        c=a,a=d
        }
        if(!e.isFunction(a))return b;
    var f=D.call(arguments,2),g=function(){
        return a.apply(c,f.concat(D.call(arguments)))
        };

    g.guid=a.guid=a.guid||g.guid||e.guid++;
    return g
    },
access:function(a,c,d,f,g,h){
    var i=a.length;
    if(typeof c=="object"){
        for(var j in c)e.access(a,j,c[j],f,g,d);return a
        }
        if(d!==b){
        f=!h&&f&&e.isFunction(d);
        for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);
        return a
        }
        return i?g(a[0],c):b
    },
now:function(){
    return(new Date).getTime()
    },
uaMatch:function(a){
    a=a.toLowerCase();
    var b=s.exec(a)||t.exec(a)||u.exec(a)||a.indexOf("compatible")<0&&v.exec(a)||[];
    return{
        browser:b[1]||"",
        version:b[2]||"0"
        }
    },
sub:function(){
    function a(b,c){
        return new a.fn.init(b,c)
        }
        e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){
        f&&f instanceof e&&!(f instanceof a)&&(f=a(f));
        return e.fn.init.call(this,d,f,b)
        },a.fn.init.prototype=a.fn;
    var b=a(c);
    return a
    },
browser:{}
}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){
    G["[object "+b+"]"]=b.toLowerCase()
    }),x=e.uaMatch(w),x.browser&&(e.browser[x.browser]=!0,e.browser.version=x.version),e.browser.webkit&&(e.browser.safari=!0),j.test("Â ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?z=function(){
    c.removeEventListener("DOMContentLoaded",z,!1),e.ready()
    }:c.attachEvent&&(z=function(){
    c.readyState==="complete"&&(c.detachEvent("onreadystatechange",z),e.ready())
    });
return e
}(),g="done fail isResolved isRejected promise then always pipe".split(" "),h=[].slice;
f.extend({
    _Deferred:function(){
        var a=[],b,c,d,e={
            done:function(){
                if(!d){
                    var c=arguments,g,h,i,j,k;
                    b&&(k=b,b=0);
                    for(g=0,h=c.length;g<h;g++)i=c[g],j=f.type(i),j==="array"?e.done.apply(e,i):j==="function"&&a.push(i);
                    k&&e.resolveWith(k[0],k[1])
                    }
                    return this
                },
            resolveWith:function(e,f){
                if(!d&&!b&&!c){
                    f=f||[],c=1;
                    try{
                        while(a[0])a.shift().apply(e,f)
                            }finally{
                        b=[e,f],c=0
                        }
                    }
                return this
            },
        resolve:function(){
            e.resolveWith(this,arguments);
            return this
            },
        isResolved:function(){
            return!!c||!!b
            },
        cancel:function(){
            d=1,a=[];
            return this
            }
        };

return e
},
Deferred:function(a){
    var b=f._Deferred(),c=f._Deferred(),d;
    f.extend(b,{
        then:function(a,c){
            b.done(a).fail(c);
            return this
            },
        always:function(){
            return b.done.apply(b,arguments).fail.apply(this,arguments)
            },
        fail:c.done,
        rejectWith:c.resolveWith,
        reject:c.resolve,
        isRejected:c.isResolved,
        pipe:function(a,c){
            return f.Deferred(function(d){
                f.each({
                    done:[a,"resolve"],
                    fail:[c,"reject"]
                    },function(a,c){
                    var e=c[0],g=c[1],h;
                    f.isFunction(e)?b[a](function(){
                        h=e.apply(this,arguments),h&&f.isFunction(h.promise)?h.promise().then(d.resolve,d.reject):d[g](h)
                        }):b[a](d[g])
                    })
                }).promise()
            },
        promise:function(a){
            if(a==null){
                if(d)return d;
                d=a={}
            }
            var c=g.length;
        while(c--)a[g[c]]=b[g[c]];
        return a
        }
    }),b.done(c.cancel).fail(b.cancel),delete b.cancel,a&&a.call(b,b);
return b
},
when:function(a){
    function i(a){
        return function(c){
            b[a]=arguments.length>1?h.call(arguments,0):c,--e||g.resolveWith(g,h.call(b,0))
            }
        }
    var b=arguments,c=0,d=b.length,e=d,g=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred();
if(d>1){
    for(;c<d;c++)b[c]&&f.isFunction(b[c].promise)?b[c].promise().then(i(c),g.reject):--e;
    e||g.resolveWith(g,b)
    }else g!==a&&g.resolveWith(g,d?[a]:[]);
return g.promise()
}
}),f.support=function(){
    var a=c.createElement("div"),b=c.documentElement,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;
    a.setAttribute("className","t"),a.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=a.getElementsByTagName("*"),e=a.getElementsByTagName("a")[0];
    if(!d||!d.length||!e)return{};

    f=c.createElement("select"),g=f.appendChild(c.createElement("option")),h=a.getElementsByTagName("input")[0],j={
        leadingWhitespace:a.firstChild.nodeType===3,
        tbody:!a.getElementsByTagName("tbody").length,
        htmlSerialize:!!a.getElementsByTagName("link").length,
        style:/top/.test(e.getAttribute("style")),
        hrefNormalized:e.getAttribute("href")==="/a",
        opacity:/^0.55$/.test(e.style.opacity),
        cssFloat:!!e.style.cssFloat,
        checkOn:h.value==="on",
        optSelected:g.selected,
        getSetAttribute:a.className!=="t",
        submitBubbles:!0,
        changeBubbles:!0,
        focusinBubbles:!1,
        deleteExpando:!0,
        noCloneEvent:!0,
        inlineBlockNeedsLayout:!1,
        shrinkWrapBlocks:!1,
        reliableMarginRight:!0
        },h.checked=!0,j.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,j.optDisabled=!g.disabled;
    try{
        delete a.test
        }catch(s){
        j.deleteExpando=!1
        }!a.addEventListener&&a.attachEvent&&a.fireEvent&&(a.attachEvent("onclick",function b(){
        j.noCloneEvent=!1,a.detachEvent("onclick",b)
        }),a.cloneNode(!0).fireEvent("onclick")),h=c.createElement("input"),h.value="t",h.setAttribute("type","radio"),j.radioValue=h.value==="t",h.setAttribute("checked","checked"),a.appendChild(h),k=c.createDocumentFragment(),k.appendChild(a.firstChild),j.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,a.innerHTML="",a.style.width=a.style.paddingLeft="1px",l=c.createElement("body"),m={
        visibility:"hidden",
        width:0,
        height:0,
        border:0,
        margin:0,
        background:"none"
    };

    for(q in m)l.style[q]=m[q];l.appendChild(a),b.insertBefore(l,b.firstChild),j.appendChecked=h.checked,j.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,j.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",j.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",n=a.getElementsByTagName("td"),r=n[0].offsetHeight===0,n[0].style.display="",n[1].style.display="none",j.reliableHiddenOffsets=r&&n[0].offsetHeight===0,a.innerHTML="",c.defaultView&&c.defaultView.getComputedStyle&&(i=c.createElement("div"),i.style.width="0",i.style.marginRight="0",a.appendChild(i),j.reliableMarginRight=(parseInt((c.defaultView.getComputedStyle(i,null)||{
        marginRight:0
    }).marginRight,10)||0)===0),l.innerHTML="",b.removeChild(l);
    if(a.attachEvent)for(q in{
        submit:1,
        change:1,
        focusin:1
    })p="on"+q,r=p in a,r||(a.setAttribute(p,"return;"),r=typeof a[p]=="function"),j[q+"Bubbles"]=r;return j
    }(),f.boxModel=f.support.boxModel;
var i=/^(?:\{.*\}|\[.*\])$/,j=/([a-z])([A-Z])/g;
f.extend({
    cache:{},
    uuid:0,
    expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),
    noData:{
        embed:!0,
        object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
        applet:!0
        },
    hasData:function(a){
        a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];
        return!!a&&!l(a)
        },
    data:function(a,c,d,e){
        if(!!f.acceptData(a)){
            var g=f.expando,h=typeof c=="string",i,j=a.nodeType,k=j?f.cache:a,l=j?a[f.expando]:a[f.expando]&&f.expando;
            if((!l||e&&l&&!k[l][g])&&h&&d===b)return;
            l||(j?a[f.expando]=l=++f.uuid:l=f.expando),k[l]||(k[l]={},j||(k[l].toJSON=f.noop));
            if(typeof c=="object"||typeof c=="function")e?k[l][g]=f.extend(k[l][g],c):k[l]=f.extend(k[l],c);
            i=k[l],e&&(i[g]||(i[g]={}),i=i[g]),d!==b&&(i[f.camelCase(c)]=d);
            if(c==="events"&&!i[c])return i[g]&&i[g].events;
            return h?i[f.camelCase(c)]:i
            }
        },
removeData:function(b,c,d){
    if(!!f.acceptData(b)){
        var e=f.expando,g=b.nodeType,h=g?f.cache:b,i=g?b[f.expando]:f.expando;
        if(!h[i])return;
        if(c){
            var j=d?h[i][e]:h[i];
            if(j){
                delete j[c];
                if(!l(j))return
            }
        }
        if(d){
        delete h[i][e];
        if(!l(h[i]))return
    }
    var k=h[i][e];
    f.support.deleteExpando||h!=a?delete h[i]:h[i]=null,k?(h[i]={},g||(h[i].toJSON=f.noop),h[i][e]=k):g&&(f.support.deleteExpando?delete b[f.expando]:b.removeAttribute?b.removeAttribute(f.expando):b[f.expando]=null)
    }
},
_data:function(a,b,c){
    return f.data(a,b,c,!0)
    },
acceptData:function(a){
    if(a.nodeName){
        var b=f.noData[a.nodeName.toLowerCase()];
        if(b)return b!==!0&&a.getAttribute("classid")===b
            }
            return!0
    }
}),f.fn.extend({
    data:function(a,c){
        var d=null;
        if(typeof a=="undefined"){
            if(this.length){
                d=f.data(this[0]);
                if(this[0].nodeType===1){
                    var e=this[0].attributes,g;
                    for(var h=0,i=e.length;h<i;h++)g=e[h].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),k(this[0],g,d[g]))
                        }
                    }
            return d
        }
        if(typeof a=="object")return this.each(function(){
        f.data(this,a)
        });
    var j=a.split(".");
    j[1]=j[1]?"."+j[1]:"";
    if(c===b){
        d=this.triggerHandler("getData"+j[1]+"!",[j[0]]),d===b&&this.length&&(d=f.data(this[0],a),d=k(this[0],a,d));
        return d===b&&j[1]?this.data(j[0]):d
        }
        return this.each(function(){
        var b=f(this),d=[j[0],c];
        b.triggerHandler("setData"+j[1]+"!",d),f.data(this,a,c),b.triggerHandler("changeData"+j[1]+"!",d)
        })
    },
removeData:function(a){
    return this.each(function(){
        f.removeData(this,a)
        })
    }
}),f.extend({
    _mark:function(a,c){
        a&&(c=(c||"fx")+"mark",f.data(a,c,(f.data(a,c,b,!0)||0)+1,!0))
        },
    _unmark:function(a,c,d){
        a!==!0&&(d=c,c=a,a=!1);
        if(c){
            d=d||"fx";
            var e=d+"mark",g=a?0:(f.data(c,e,b,!0)||1)-1;
            g?f.data(c,e,g,!0):(f.removeData(c,e,!0),m(c,d,"mark"))
            }
        },
queue:function(a,c,d){
    if(a){
        c=(c||"fx")+"queue";
        var e=f.data(a,c,b,!0);
        d&&(!e||f.isArray(d)?e=f.data(a,c,f.makeArray(d),!0):e.push(d));
        return e||[]
        }
    },
dequeue:function(a,b){
    b=b||"fx";
    var c=f.queue(a,b),d=c.shift(),e;
    d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),d.call(a,function(){
        f.dequeue(a,b)
        })),c.length||(f.removeData(a,b+"queue",!0),m(a,b,"queue"))
    }
}),f.fn.extend({
    queue:function(a,c){
        typeof a!="string"&&(c=a,a="fx");
        if(c===b)return f.queue(this[0],a);
        return this.each(function(){
            var b=f.queue(this,a,c);
            a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)
            })
        },
    dequeue:function(a){
        return this.each(function(){
            f.dequeue(this,a)
            })
        },
    delay:function(a,b){
        a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";
        return this.queue(b,function(){
            var c=this;
            setTimeout(function(){
                f.dequeue(c,b)
                },a)
            })
        },
    clearQueue:function(a){
        return this.queue(a||"fx",[])
        },
    promise:function(a,c){
        function m(){
            --h||d.resolveWith(e,[e])
            }
            typeof a!="string"&&(c=a,a=b),a=a||"fx";
        var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;
        while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f._Deferred(),!0))h++,l.done(m);
        m();
        return d.promise()
        }
    });
var n=/[\n\t\r]/g,o=/\s+/,p=/\r/g,q=/^(?:button|input)$/i,r=/^(?:button|input|object|select|textarea)$/i,s=/^a(?:rea)?$/i,t=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,u=/\:/,v,w;
f.fn.extend({
    attr:function(a,b){
        return f.access(this,a,b,!0,f.attr)
        },
    removeAttr:function(a){
        return this.each(function(){
            f.removeAttr(this,a)
            })
        },
    prop:function(a,b){
        return f.access(this,a,b,!0,f.prop)
        },
    removeProp:function(a){
        a=f.propFix[a]||a;
        return this.each(function(){
            try{
                this[a]=b,delete this[a]
            }catch(c){}
        })
    },
addClass:function(a){
    if(f.isFunction(a))return this.each(function(b){
        var c=f(this);
        c.addClass(a.call(this,b,c.attr("class")||""))
        });
    if(a&&typeof a=="string"){
        var b=(a||"").split(o);
        for(var c=0,d=this.length;c<d;c++){
            var e=this[c];
            if(e.nodeType===1)if(!e.className)e.className=a;
                else{
                var g=" "+e.className+" ",h=e.className;
                for(var i=0,j=b.length;i<j;i++)g.indexOf(" "+b[i]+" ")<0&&(h+=" "+b[i]);
                e.className=f.trim(h)
                }
            }
        }
    return this
},
removeClass:function(a){
    if(f.isFunction(a))return this.each(function(b){
        var c=f(this);
        c.removeClass(a.call(this,b,c.attr("class")))
        });
    if(a&&typeof a=="string"||a===b){
        var c=(a||"").split(o);
        for(var d=0,e=this.length;d<e;d++){
            var g=this[d];
            if(g.nodeType===1&&g.className)if(a){
                var h=(" "+g.className+" ").replace(n," ");
                for(var i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");
                g.className=f.trim(h)
                }else g.className=""
                }
            }
        return this
},
toggleClass:function(a,b){
    var c=typeof a,d=typeof b=="boolean";
    if(f.isFunction(a))return this.each(function(c){
        var d=f(this);
        d.toggleClass(a.call(this,c,d.attr("class"),b),b)
        });
    return this.each(function(){
        if(c==="string"){
            var e,g=0,h=f(this),i=b,j=a.split(o);
            while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)
                }else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""
            })
    },
hasClass:function(a){
    var b=" "+a+" ";
    for(var c=0,d=this.length;c<d;c++)if((" "+this[c].className+" ").replace(n," ").indexOf(b)>-1)return!0;return!1
    },
val:function(a){
    var c,d,e=this[0];
    if(!arguments.length){
        if(e){
            c=f.valHooks[e.nodeName.toLowerCase()]||f.valHooks[e.type];
            if(c&&"get"in c&&(d=c.get(e,"value"))!==b)return d;
            return(e.value||"").replace(p,"")
            }
            return b
        }
        var g=f.isFunction(a);
    return this.each(function(d){
        var e=f(this),h;
        if(this.nodeType===1){
            g?h=a.call(this,d,e.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){
                return a==null?"":a+""
                })),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];
            if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h
                }
            })
}
}),f.extend({
    valHooks:{
        option:{
            get:function(a){
                var b=a.attributes.value;
                return!b||b.specified?a.value:a.text
                }
            },
    select:{
        get:function(a){
            var b,c=a.selectedIndex,d=[],e=a.options,g=a.type==="select-one";
            if(c<0)return null;
            for(var h=g?c:0,i=g?c+1:e.length;h<i;h++){
                var j=e[h];
                if(j.selected&&(f.support.optDisabled?!j.disabled:j.getAttribute("disabled")===null)&&(!j.parentNode.disabled||!f.nodeName(j.parentNode,"optgroup"))){
                    b=f(j).val();
                    if(g)return b;
                    d.push(b)
                    }
                }
            if(g&&!d.length&&e.length)return f(e[c]).val();
        return d
        },
    set:function(a,b){
        var c=f.makeArray(b);
        f(a).find("option").each(function(){
            this.selected=f.inArray(f(this).val(),c)>=0
            }),c.length||(a.selectedIndex=-1);
        return c
        }
    }
},
attrFn:{
    val:!0,
    css:!0,
    html:!0,
    text:!0,
    data:!0,
    width:!0,
    height:!0,
    offset:!0
    },
attrFix:{
    tabindex:"tabIndex"
},
attr:function(a,c,d,e){
    var g=a.nodeType;
    if(!a||g===3||g===8||g===2)return b;
    if(e&&c in f.attrFn)return f(a)[c](d);
    if(!("getAttribute"in a))return f.prop(a,c,d);
    var h,i,j=g!==1||!f.isXMLDoc(a);
    c=j&&f.attrFix[c]||c,i=f.attrHooks[c],i||(!t.test(c)||typeof d!="boolean"&&d!==b&&d.toLowerCase()!==c.toLowerCase()?v&&(f.nodeName(a,"form")||u.test(c))&&(i=v):i=w);
    if(d!==b){
        if(d===null){
            f.removeAttr(a,c);
            return b
            }
            if(i&&"set"in i&&j&&(h=i.set(a,d,c))!==b)return h;
        a.setAttribute(c,""+d);
        return d
        }
        if(i&&"get"in i&&j)return i.get(a,c);
    h=a.getAttribute(c);
    return h===null?b:h
    },
removeAttr:function(a,b){
    var c;
    a.nodeType===1&&(b=f.attrFix[b]||b,f.support.getSetAttribute?a.removeAttribute(b):(f.attr(a,b,""),a.removeAttributeNode(a.getAttributeNode(b))),t.test(b)&&(c=f.propFix[b]||b)in a&&(a[c]=!1))
    },
attrHooks:{
    type:{
        set:function(a,b){
            if(q.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");
            else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){
                var c=a.value;
                a.setAttribute("type",b),c&&(a.value=c);
                return b
                }
            }
    },
tabIndex:{
    get:function(a){
        var c=a.getAttributeNode("tabIndex");
        return c&&c.specified?parseInt(c.value,10):r.test(a.nodeName)||s.test(a.nodeName)&&a.href?0:b
        }
    }
},
propFix:{
    tabindex:"tabIndex",
    readonly:"readOnly",
    "for":"htmlFor",
    "class":"className",
    maxlength:"maxLength",
    cellspacing:"cellSpacing",
    cellpadding:"cellPadding",
    rowspan:"rowSpan",
    colspan:"colSpan",
    usemap:"useMap",
    frameborder:"frameBorder",
    contenteditable:"contentEditable"
},
prop:function(a,c,d){
    var e=a.nodeType;
    if(!a||e===3||e===8||e===2)return b;
    var g,h,i=e!==1||!f.isXMLDoc(a);
    c=i&&f.propFix[c]||c,h=f.propHooks[c];
    return d!==b?h&&"set"in h&&(g=h.set(a,d,c))!==b?g:a[c]=d:h&&"get"in h&&(g=h.get(a,c))!==b?g:a[c]
    },
propHooks:{}
}),w={
    get:function(a,c){
        return a[f.propFix[c]||c]?c.toLowerCase():b
        },
    set:function(a,b,c){
        var d;
        b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=b),a.setAttribute(c,c.toLowerCase()));
        return c
        }
    },f.attrHooks.value={
    get:function(a,b){
        if(v&&f.nodeName(a,"button"))return v.get(a,b);
        return a.value
        },
    set:function(a,b,c){
        if(v&&f.nodeName(a,"button"))return v.set(a,b,c);
        a.value=b
        }
    },f.support.getSetAttribute||(f.attrFix=f.propFix,v=f.attrHooks.name=f.valHooks.button={
    get:function(a,c){
        var d;
        d=a.getAttributeNode(c);
        return d&&d.nodeValue!==""?d.nodeValue:b
        },
    set:function(a,b,c){
        var d=a.getAttributeNode(c);
        if(d){
            d.nodeValue=b;
            return b
            }
        }
},f.each(["width","height"],function(a,b){
    f.attrHooks[b]=f.extend(f.attrHooks[b],{
        set:function(a,c){
            if(c===""){
                a.setAttribute(b,"auto");
                return c
                }
            }
    })
})),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){
    f.attrHooks[c]=f.extend(f.attrHooks[c],{
        get:function(a){
            var d=a.getAttribute(c,2);
            return d===null?b:d
            }
        })
}),f.support.style||(f.attrHooks.style={
    get:function(a){
        return a.style.cssText.toLowerCase()||b
        },
    set:function(a,b){
        return a.style.cssText=""+b
        }
    }),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{
    get:function(a){
        var b=a.parentNode;
        b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)
        }
    })),f.support.checkOn||f.each(["radio","checkbox"],function(){
    f.valHooks[this]={
        get:function(a){
            return a.getAttribute("value")===null?"on":a.value
            }
        }
}),f.each(["radio","checkbox"],function(){
    f.valHooks[this]=f.extend(f.valHooks[this],{
        set:function(a,b){
            if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0
                }
            })
});
var x=Object.prototype.hasOwnProperty,y=/\.(.*)$/,z=/^(?:textarea|input|select)$/i,A=/\./g,B=/ /g,C=/[^\w\s.|`]/g,D=function(a){
    return a.replace(C,"\\$&")
    };

f.event={
    add:function(a,c,d,e){
        if(a.nodeType!==3&&a.nodeType!==8){
            if(d===!1)d=E;
            else if(!d)return;
            var g,h;
            d.handler&&(g=d,d=g.handler),d.guid||(d.guid=f.guid++);
            var i=f._data(a);
            if(!i)return;
            var j=i.events,k=i.handle;
            j||(i.events=j={}),k||(i.handle=k=function(a){
                return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.handle.apply(k.elem,arguments):b
                }),k.elem=a,c=c.split(" ");
            var l,m=0,n;
            while(l=c[m++]){
                h=g?f.extend({},g):{
                    handler:d,
                    data:e
                },l.indexOf(".")>-1?(n=l.split("."),l=n.shift(),h.namespace=n.slice(0).sort().join(".")):(n=[],h.namespace=""),h.type=l,h.guid||(h.guid=d.guid);
                var o=j[l],p=f.event.special[l]||{};

                if(!o){
                    o=j[l]=[];
                    if(!p.setup||p.setup.call(a,e,n,k)===!1)a.addEventListener?a.addEventListener(l,k,!1):a.attachEvent&&a.attachEvent("on"+l,k)
                        }
                        p.add&&(p.add.call(a,h),h.handler.guid||(h.handler.guid=d.guid)),o.push(h),f.event.global[l]=!0
                }
                a=null
            }
        },
global:{},
remove:function(a,c,d,e){
    if(a.nodeType!==3&&a.nodeType!==8){
        d===!1&&(d=E);
        var g,h,i,j,k=0,l,m,n,o,p,q,r,s=f.hasData(a)&&f._data(a),t=s&&s.events;
        if(!s||!t)return;
        c&&c.type&&(d=c.handler,c=c.type);
        if(!c||typeof c=="string"&&c.charAt(0)==="."){
            c=c||"";
            for(h in t)f.event.remove(a,h+c);return
        }
        c=c.split(" ");
        while(h=c[k++]){
            r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+f.map(m.slice(0).sort(),D).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=t[h];
            if(!p)continue;
            if(!d){
                for(j=0;j<p.length;j++){
                    q=p[j];
                    if(l||n.test(q.namespace))f.event.remove(a,r,q.handler,j),p.splice(j--,1)
                        }
                        continue
            }
            o=f.event.special[h]||{};

            for(j=e||0;j<p.length;j++){
                q=p[j];
                if(d.guid===q.guid){
                    if(l||n.test(q.namespace))e==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);
                    if(e!=null)break
                }
            }
            if(p.length===0||e!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&f.removeEvent(a,h,s.handle),g=null,delete t[h]
    }
    if(f.isEmptyObject(t)){
        var u=s.handle;
        u&&(u.elem=null),delete s.events,delete s.handle,f.isEmptyObject(s)&&f.removeData(a,b,!0)
        }
    }
},
customEvent:{
    getData:!0,
    setData:!0,
    changeData:!0
    },
trigger:function(c,d,e,g){
    var h=c.type||c,i=[],j;
    h.indexOf("!")>=0&&(h=h.slice(0,-1),j=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());
    if(!!e&&!f.event.customEvent[h]||!!f.event.global[h]){
        c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.exclusive=j,c.namespace=i.join("."),c.namespace_re=new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)");
        if(g||!e)c.preventDefault(),c.stopPropagation();
        if(!e){
            f.each(f.cache,function(){
                var a=f.expando,b=this[a];
                b&&b.events&&b.events[h]&&f.event.trigger(c,d,b.handle.elem)
                });
            return
        }
        if(e.nodeType===3||e.nodeType===8)return;
        c.result=b,c.target=e,d=d?f.makeArray(d):[],d.unshift(c);
        var k=e,l=h.indexOf(":")<0?"on"+h:"";
        do{
            var m=f._data(k,"handle");
            c.currentTarget=k,m&&m.apply(k,d),l&&f.acceptData(k)&&k[l]&&k[l].apply(k,d)===!1&&(c.result=!1,c.preventDefault()),k=k.parentNode||k.ownerDocument||k===c.target.ownerDocument&&a
            }while(k&&!c.isPropagationStopped());
        if(!c.isDefaultPrevented()){
            var n,o=f.event.special[h]||{};

            if((!o._default||o._default.call(e.ownerDocument,c)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)){
                try{
                    l&&e[h]&&(n=e[l],n&&(e[l]=null),f.event.triggered=h,e[h]())
                    }catch(p){}
                n&&(e[l]=n),f.event.triggered=b
                }
            }
        return c.result
    }
},
handle:function(c){
    c=f.event.fix(c||a.event);
    var d=((f._data(this,"events")||{})[c.type]||[]).slice(0),e=!c.exclusive&&!c.namespace,g=Array.prototype.slice.call(arguments,0);
    g[0]=c,c.currentTarget=this;
    for(var h=0,i=d.length;h<i;h++){
        var j=d[h];
        if(e||c.namespace_re.test(j.namespace)){
            c.handler=j.handler,c.data=j.data,c.handleObj=j;
            var k=j.handler.apply(this,g);
            k!==b&&(c.result=k,k===!1&&(c.preventDefault(),c.stopPropagation()));
            if(c.isImmediatePropagationStopped())break
        }
    }
    return c.result
},
props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(a){
    if(a[f.expando])return a;
    var d=a;
    a=f.Event(d);
    for(var e=this.props.length,g;e;)g=this.props[--e],a[g]=d[g];
    a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);
    if(a.pageX==null&&a.clientX!=null){
        var h=a.target.ownerDocument||c,i=h.documentElement,j=h.body;
        a.pageX=a.clientX+(i&&i.scrollLeft||j&&j.scrollLeft||0)-(i&&i.clientLeft||j&&j.clientLeft||0),a.pageY=a.clientY+(i&&i.scrollTop||j&&j.scrollTop||0)-(i&&i.clientTop||j&&j.clientTop||0)
        }
        a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);
    return a
    },
guid:1e8,
proxy:f.proxy,
special:{
    ready:{
        setup:f.bindReady,
        teardown:f.noop
        },
    live:{
        add:function(a){
            f.event.add(this,O(a.origType,a.selector),f.extend({},a,{
                handler:N,
                guid:a.handler.guid
                }))
            },
        remove:function(a){
            f.event.remove(this,O(a.origType,a.selector),a)
            }
        },
beforeunload:{
    setup:function(a,b,c){
        f.isWindow(this)&&(this.onbeforeunload=c)
        },
    teardown:function(a,b){
        this.onbeforeunload===b&&(this.onbeforeunload=null)
        }
    }
}
},f.removeEvent=c.removeEventListener?function(a,b,c){
    a.removeEventListener&&a.removeEventListener(b,c,!1)
    }:function(a,b,c){
    a.detachEvent&&a.detachEvent("on"+b,c)
    },f.Event=function(a,b){
    if(!this.preventDefault)return new f.Event(a,b);
    a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?F:E):this.type=a,b&&f.extend(this,b),this.timeStamp=f.now(),this[f.expando]=!0
    },f.Event.prototype={
    preventDefault:function(){
        this.isDefaultPrevented=F;
        var a=this.originalEvent;
        !a||(a.preventDefault?a.preventDefault():a.returnValue=!1)
        },
    stopPropagation:function(){
        this.isPropagationStopped=F;
        var a=this.originalEvent;
        !a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)
        },
    stopImmediatePropagation:function(){
        this.isImmediatePropagationStopped=F,this.stopPropagation()
        },
    isDefaultPrevented:E,
    isPropagationStopped:E,
    isImmediatePropagationStopped:E
};

var G=function(a){
    var b=a.relatedTarget;
    a.type=a.data;
    try{
        if(b&&b!==c&&!b.parentNode)return;
        while(b&&b!==this)b=b.parentNode;
        b!==this&&f.event.handle.apply(this,arguments)
        }catch(d){}
},H=function(a){
    a.type=a.data,f.event.handle.apply(this,arguments)
    };

f.each({
    mouseenter:"mouseover",
    mouseleave:"mouseout"
},function(a,b){
    f.event.special[a]={
        setup:function(c){
            f.event.add(this,b,c&&c.selector?H:G,a)
            },
        teardown:function(a){
            f.event.remove(this,b,a&&a.selector?H:G)
            }
        }
}),f.support.submitBubbles||(f.event.special.submit={
    setup:function(a,b){
        if(!f.nodeName(this,"form"))f.event.add(this,"click.specialSubmit",function(a){
            var b=a.target,c=b.type;
            (c==="submit"||c==="image")&&f(b).closest("form").length&&L("submit",this,arguments)
            }),f.event.add(this,"keypress.specialSubmit",function(a){
            var b=a.target,c=b.type;
            (c==="text"||c==="password")&&f(b).closest("form").length&&a.keyCode===13&&L("submit",this,arguments)
            });else return!1
            },
    teardown:function(a){
        f.event.remove(this,".specialSubmit")
        }
    });
if(!f.support.changeBubbles){
    var I,J=function(a){
        var b=a.type,c=a.value;
        b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?f.map(a.options,function(a){
            return a.selected
            }).join("-"):"":f.nodeName(a,"select")&&(c=a.selectedIndex);
        return c
        },K=function(c){
        var d=c.target,e,g;
        if(!!z.test(d.nodeName)&&!d.readOnly){
            e=f._data(d,"_change_data"),g=J(d),(c.type!=="focusout"||d.type!=="radio")&&f._data(d,"_change_data",g);
            if(e===b||g===e)return;
            if(e!=null||g)c.type="change",c.liveFired=b,f.event.trigger(c,arguments[1],d)
                }
            };

f.event.special.change={
    filters:{
        focusout:K,
        beforedeactivate:K,
        click:function(a){
            var b=a.target,c=f.nodeName(b,"input")?b.type:"";
            (c==="radio"||c==="checkbox"||f.nodeName(b,"select"))&&K.call(this,a)
            },
        keydown:function(a){
            var b=a.target,c=f.nodeName(b,"input")?b.type:"";
            (a.keyCode===13&&!f.nodeName(b,"textarea")||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")&&K.call(this,a)
            },
        beforeactivate:function(a){
            var b=a.target;
            f._data(b,"_change_data",J(b))
            }
        },
setup:function(a,b){
    if(this.type==="file")return!1;
    for(var c in I)f.event.add(this,c+".specialChange",I[c]);return z.test(this.nodeName)
    },
teardown:function(a){
    f.event.remove(this,".specialChange");
    return z.test(this.nodeName)
    }
},I=f.event.special.change.filters,I.focus=I.beforeactivate
}
f.support.focusinBubbles||f.each({
    focus:"focusin",
    blur:"focusout"
},function(a,b){
    function e(a){
        var c=f.event.fix(a);
        c.type=b,c.originalEvent={},f.event.trigger(c,null,c.target),c.isDefaultPrevented()&&a.preventDefault()
        }
        var d=0;
    f.event.special[b]={
        setup:function(){
            d++===0&&c.addEventListener(a,e,!0)
            },
        teardown:function(){
            --d===0&&c.removeEventListener(a,e,!0)
            }
        }
}),f.each(["bind","one"],function(a,c){
    f.fn[c]=function(a,d,e){
        var g;
        if(typeof a=="object"){
            for(var h in a)this[c](h,d,a[h],e);return this
            }
            if(arguments.length===2||d===!1)e=d,d=b;
        c==="one"?(g=function(a){
            f(this).unbind(a,g);
            return e.apply(this,arguments)
            },g.guid=e.guid||f.guid++):g=e;
        if(a==="unload"&&c!=="one")this.one(a,d,e);else for(var i=0,j=this.length;i<j;i++)f.event.add(this[i],a,g,d);
        return this
        }
    }),f.fn.extend({
    unbind:function(a,b){
        if(typeof a=="object"&&!a.preventDefault)for(var c in a)this.unbind(c,a[c]);else for(var d=0,e=this.length;d<e;d++)f.event.remove(this[d],a,b);
        return this
        },
    delegate:function(a,b,c,d){
        return this.live(b,c,d,a)
        },
    undelegate:function(a,b,c){
        return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)
        },
    trigger:function(a,b){
        return this.each(function(){
            f.event.trigger(a,b,this)
            })
        },
    triggerHandler:function(a,b){
        if(this[0])return f.event.trigger(a,b,this[0],!0)
            },
    toggle:function(a){
        var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){
            var e=(f.data(this,"lastToggle"+a.guid)||0)%d;
            f.data(this,"lastToggle"+a.guid,e+1),c.preventDefault();
            return b[e].apply(this,arguments)||!1
            };

        e.guid=c;
        while(d<b.length)b[d++].guid=c;
        return this.click(e)
        },
    hover:function(a,b){
        return this.mouseenter(a).mouseleave(b||a)
        }
    });
var M={
    focus:"focusin",
    blur:"focusout",
    mouseenter:"mouseover",
    mouseleave:"mouseout"
};

f.each(["live","die"],function(a,c){
    f.fn[c]=function(a,d,e,g){
        var h,i=0,j,k,l,m=g||this.selector,n=g?this:f(this.context);
        if(typeof a=="object"&&!a.preventDefault){
            for(var o in a)n[c](o,d,a[o],m);return this
            }
            if(c==="die"&&!a&&g&&g.charAt(0)==="."){
            n.unbind(g);
            return this
            }
            if(d===!1||f.isFunction(d))e=d||E,d=b;
        a=(a||"").split(" ");
        while((h=a[i++])!=null){
            j=y.exec(h),k="",j&&(k=j[0],h=h.replace(y,""));
            if(h==="hover"){
                a.push("mouseenter"+k,"mouseleave"+k);
                continue
            }
            l=h,M[h]?(a.push(M[h]+k),h=h+k):h=(M[h]||h)+k;
            if(c==="live")for(var p=0,q=n.length;p<q;p++)f.event.add(n[p],"live."+O(h,m),{
                data:d,
                selector:m,
                handler:e,
                origType:h,
                origHandler:e,
                preType:l
            });else n.unbind("live."+O(h,m),e)
                }
                return this
        }
    }),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){
    f.fn[b]=function(a,c){
        c==null&&(c=a,a=null);
        return arguments.length>0?this.bind(b,a,c):this.trigger(b)
        },f.attrFn&&(f.attrFn[b]=!0)
    }),function(){
    function u(a,b,c,d,e,f){
        for(var g=0,h=d.length;g<h;g++){
            var i=d[g];
            if(i){
                var j=!1;
                i=i[a];
                while(i){
                    if(i.sizcache===c){
                        j=d[i.sizset];
                        break
                    }
                    if(i.nodeType===1){
                        f||(i.sizcache=c,i.sizset=g);
                        if(typeof b!="string"){
                            if(i===b){
                                j=!0;
                                break
                            }
                        }else if(k.filter(b,[i]).length>0){
                        j=i;
                        break
                    }
                }
                i=i[a]
            }
            d[g]=j
        }
        }
}
function t(a,b,c,d,e,f){
    for(var g=0,h=d.length;g<h;g++){
        var i=d[g];
        if(i){
            var j=!1;
            i=i[a];
            while(i){
                if(i.sizcache===c){
                    j=d[i.sizset];
                    break
                }
                i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);
                if(i.nodeName.toLowerCase()===b){
                    j=i;
                    break
                }
                i=i[a]
                }
                d[g]=j
            }
        }
    }
var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d=0,e=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;
[0,0].sort(function(){
    h=!1;
    return 0
    });
var k=function(b,d,f,g){
    f=f||[],d=d||c;
    var h=d;
    if(d.nodeType!==1&&d.nodeType!==9)return[];
    if(!b||typeof b!="string")return f;
    var i,j,n,o,q,r,s,t,u=!0,w=k.isXML(d),x=[],y=b;
    do{
        a.exec(""),i=a.exec(y);
        if(i){
            y=i[3],x.push(i[1]);
            if(i[2]){
                o=i[3];
                break
            }
        }
    }while(i);
if(x.length>1&&m.exec(b))if(x.length===2&&l.relative[x[0]])j=v(x[0]+x[1],d);
    else{
    j=l.relative[x[0]]?[d]:k(x.shift(),d);
    while(x.length)b=x.shift(),l.relative[b]&&(b+=x.shift()),j=v(b,j)
        }else{
    !g&&x.length>1&&d.nodeType===9&&!w&&l.match.ID.test(x[0])&&!l.match.ID.test(x[x.length-1])&&(q=k.find(x.shift(),d,w),d=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]);
    if(d){
        q=g?{
            expr:x.pop(),
            set:p(g)
            }:k.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),j=q.expr?k.filter(q.expr,q.set):q.set,x.length>0?n=p(j):u=!1;
        while(x.length)r=x.pop(),s=r,l.relative[r]?s=x.pop():r="",s==null&&(s=d),l.relative[r](n,s,w)
            }else n=x=[]
        }
        n||(n=j),n||k.error(r||b);
if(e.call(n)==="[object Array]")if(!u)f.push.apply(f,n);
    else if(d&&d.nodeType===1)for(t=0;n[t]!=null;t++)n[t]&&(n[t]===!0||n[t].nodeType===1&&k.contains(d,n[t]))&&f.push(j[t]);else for(t=0;n[t]!=null;t++)n[t]&&n[t].nodeType===1&&f.push(j[t]);else p(n,f);
o&&(k(o,h,f,g),k.uniqueSort(f));
return f
};

k.uniqueSort=function(a){
    if(r){
        g=h,a.sort(r);
        if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)
            }
            return a
    },k.matches=function(a,b){
    return k(a,null,null,b)
    },k.matchesSelector=function(a,b){
    return k(b,null,null,[a]).length>0
    },k.find=function(a,b,c){
    var d;
    if(!a)return[];
    for(var e=0,f=l.order.length;e<f;e++){
        var g,h=l.order[e];
        if(g=l.leftMatch[h].exec(a)){
            var j=g[1];
            g.splice(1,1);
            if(j.substr(j.length-1)!=="\\"){
                g[1]=(g[1]||"").replace(i,""),d=l.find[h](g,b,c);
                if(d!=null){
                    a=a.replace(l.match[h],"");
                    break
                }
            }
        }
    }
d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);
return{
    set:d,
    expr:a
}
},k.filter=function(a,c,d,e){
    var f,g,h=a,i=[],j=c,m=c&&c[0]&&k.isXML(c[0]);
    while(a&&c.length){
        for(var n in l.filter)if((f=l.leftMatch[n].exec(a))!=null&&f[2]){
            var o,p,q=l.filter[n],r=f[1];
            g=!1,f.splice(1,1);
            if(r.substr(r.length-1)==="\\")continue;
            j===i&&(i=[]);
            if(l.preFilter[n]){
                f=l.preFilter[n](f,j,d,i,e,m);
                if(!f)g=o=!0;
                else if(f===!0)continue
            }
            if(f)for(var s=0;(p=j[s])!=null;s++)if(p){
                o=q(p,f,s,j);
                var t=e^!!o;
                d&&o!=null?t?g=!0:j[s]=!1:t&&(i.push(p),g=!0)
                }
                if(o!==b){
                d||(j=i),a=a.replace(l.match[n],"");
                if(!g)return[];
                break
            }
        }
        if(a===h)if(g==null)k.error(a);else break;
    h=a
    }
    return j
},k.error=function(a){
    throw"Syntax error, unrecognized expression: "+a
    };

var l=k.selectors={
    order:["ID","NAME","TAG"],
    match:{
        ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
        CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
        NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
        ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
        TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
        CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
        POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
        PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
    },
    leftMatch:{},
    attrMap:{
        "class":"className",
        "for":"htmlFor"
    },
    attrHandle:{
        href:function(a){
            return a.getAttribute("href")
            },
        type:function(a){
            return a.getAttribute("type")
            }
        },
relative:{
    "+":function(a,b){
        var c=typeof b=="string",d=c&&!j.test(b),e=c&&!d;
        d&&(b=b.toLowerCase());
        for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){
            while((h=h.previousSibling)&&h.nodeType!==1);
            a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b
            }
            e&&k.filter(b,a,!0)
        },
    ">":function(a,b){
        var c,d=typeof b=="string",e=0,f=a.length;
        if(d&&!j.test(b)){
            b=b.toLowerCase();
            for(;e<f;e++){
                c=a[e];
                if(c){
                    var g=c.parentNode;
                    a[e]=g.nodeName.toLowerCase()===b?g:!1
                    }
                }
            }else{
    for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);
    d&&k.filter(b,a,!0)
    }
},
"":function(a,b,c){
    var e,f=d++,g=u;
    typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("parentNode",b,f,a,e,c)
    },
"~":function(a,b,c){
    var e,f=d++,g=u;
    typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("previousSibling",b,f,a,e,c)
    }
},
find:{
    ID:function(a,b,c){
        if(typeof b.getElementById!="undefined"&&!c){
            var d=b.getElementById(a[1]);
            return d&&d.parentNode?[d]:[]
            }
        },
NAME:function(a,b){
    if(typeof b.getElementsByName!="undefined"){
        var c=[],d=b.getElementsByName(a[1]);
        for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);
        return c.length===0?null:c
        }
    },
TAG:function(a,b){
    if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])
        }
    },
preFilter:{
    CLASS:function(a,b,c,d,e,f){
        a=" "+a[1].replace(i,"")+" ";
        if(f)return a;
        for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));
        return!1
        },
    ID:function(a){
        return a[1].replace(i,"")
        },
    TAG:function(a,b){
        return a[1].replace(i,"").toLowerCase()
        },
    CHILD:function(a){
        if(a[1]==="nth"){
            a[2]||k.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");
            var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);
            a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0
        }else a[2]&&k.error(a[0]);
        a[0]=d++;
        return a
        },
    ATTR:function(a,b,c,d,e,f){
        var g=a[1]=a[1].replace(i,"");
        !f&&l.attrMap[g]&&(a[1]=l.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(i,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");
        return a
        },
    PSEUDO:function(b,c,d,e,f){
        if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=k(b[3],null,null,c);
            else{
            var g=k.filter(b[3],c,d,!0^f);
            d||e.push.apply(e,g);
            return!1
            }else if(l.match.POS.test(b[0])||l.match.CHILD.test(b[0]))return!0;
        return b
        },
    POS:function(a){
        a.unshift(!0);
        return a
        }
    },
filters:{
    enabled:function(a){
        return a.disabled===!1&&a.type!=="hidden"
        },
    disabled:function(a){
        return a.disabled===!0
        },
    checked:function(a){
        return a.checked===!0
        },
    selected:function(a){
        a.parentNode&&a.parentNode.selectedIndex;
        return a.selected===!0
        },
    parent:function(a){
        return!!a.firstChild
        },
    empty:function(a){
        return!a.firstChild
        },
    has:function(a,b,c){
        return!!k(c[3],a).length
        },
    header:function(a){
        return/h\d/i.test(a.nodeName)
        },
    text:function(a){
        var b=a.getAttribute("type"),c=a.type;
        return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)
        },
    radio:function(a){
        return a.nodeName.toLowerCase()==="input"&&"radio"===a.type
        },
    checkbox:function(a){
        return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type
        },
    file:function(a){
        return a.nodeName.toLowerCase()==="input"&&"file"===a.type
        },
    password:function(a){
        return a.nodeName.toLowerCase()==="input"&&"password"===a.type
        },
    submit:function(a){
        var b=a.nodeName.toLowerCase();
        return(b==="input"||b==="button")&&"submit"===a.type
        },
    image:function(a){
        return a.nodeName.toLowerCase()==="input"&&"image"===a.type
        },
    reset:function(a){
        var b=a.nodeName.toLowerCase();
        return(b==="input"||b==="button")&&"reset"===a.type
        },
    button:function(a){
        var b=a.nodeName.toLowerCase();
        return b==="input"&&"button"===a.type||b==="button"
        },
    input:function(a){
        return/input|select|textarea|button/i.test(a.nodeName)
        },
    focus:function(a){
        return a===a.ownerDocument.activeElement
        }
    },
setFilters:{
    first:function(a,b){
        return b===0
        },
    last:function(a,b,c,d){
        return b===d.length-1
        },
    even:function(a,b){
        return b%2===0
        },
    odd:function(a,b){
        return b%2===1
        },
    lt:function(a,b,c){
        return b<c[3]-0
        },
    gt:function(a,b,c){
        return b>c[3]-0
        },
    nth:function(a,b,c){
        return c[3]-0===b
        },
    eq:function(a,b,c){
        return c[3]-0===b
        }
    },
filter:{
    PSEUDO:function(a,b,c,d){
        var e=b[1],f=l.filters[e];
        if(f)return f(a,c,b,d);
        if(e==="contains")return(a.textContent||a.innerText||k.getText([a])||"").indexOf(b[3])>=0;
        if(e==="not"){
            var g=b[3];
            for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0
            }
            k.error(e)
        },
    CHILD:function(a,b){
        var c=b[1],d=a;
        switch(c){
            case"only":case"first":
                while(d=d.previousSibling)if(d.nodeType===1)return!1;
                if(c==="first")return!0;
                d=a;
            case"last":
                while(d=d.nextSibling)if(d.nodeType===1)return!1;
                return!0;
            case"nth":
                var e=b[2],f=b[3];
                if(e===1&&f===0)return!0;
                var g=b[0],h=a.parentNode;
                if(h&&(h.sizcache!==g||!a.nodeIndex)){
                var i=0;
                for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);
                h.sizcache=g
                }
                var j=a.nodeIndex-f;
            return e===0?j===0:j%e===0&&j/e>=0
            }
            },
ID:function(a,b){
    return a.nodeType===1&&a.getAttribute("id")===b
    },
TAG:function(a,b){
    return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b
    },
CLASS:function(a,b){
    return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1
    },
ATTR:function(a,b){
    var c=b[1],d=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];
    return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1
    },
POS:function(a,b,c,d){
    var e=b[2],f=l.setFilters[e];
    if(f)return f(a,c,b,d)
        }
    }
},m=l.match.POS,n=function(a,b){
    return"\\"+(b-0+1)
    };

for(var o in l.match)l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source),l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace(/\\(\d+)/g,n));var p=function(a,b){
    a=Array.prototype.slice.call(a,0);
    if(b){
        b.push.apply(b,a);
        return b
        }
        return a
    };

try{
    Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType
    }catch(q){
    p=function(a,b){
        var c=0,d=b||[];
        if(e.call(a)==="[object Array]")Array.prototype.push.apply(d,a);
        else if(typeof a.length=="number")for(var f=a.length;c<f;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);
        return d
        }
    }
var r,s;
c.documentElement.compareDocumentPosition?r=function(a,b){
    if(a===b){
        g=!0;
        return 0
        }
        if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;
    return a.compareDocumentPosition(b)&4?-1:1
    }:(r=function(a,b){
    if(a===b){
        g=!0;
        return 0
        }
        if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;
    var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;
    if(h===i)return s(a,b);
    if(!h)return-1;
    if(!i)return 1;
    while(j)e.unshift(j),j=j.parentNode;
    j=i;
    while(j)f.unshift(j),j=j.parentNode;
    c=e.length,d=f.length;
    for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return s(e[k],f[k]);return k===c?s(a,f[k],-1):s(e[k],b,1)
    },s=function(a,b,c){
    if(a===b)return c;
    var d=a.nextSibling;
    while(d){
        if(d===b)return-1;
        d=d.nextSibling
        }
        return 1
    }),k.getText=function(a){
    var b="",c;
    for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=k.getText(c.childNodes));
    return b
    },function(){
    var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;
    a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(l.find.ID=function(a,c,d){
        if(typeof c.getElementById!="undefined"&&!d){
            var e=c.getElementById(a[1]);
            return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]
            }
        },l.filter.ID=function(a,b){
        var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");
        return a.nodeType===1&&c&&c.nodeValue===b
        }),e.removeChild(a),e=a=null
}(),function(){
    var a=c.createElement("div");
    a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(l.find.TAG=function(a,b){
        var c=b.getElementsByTagName(a[1]);
        if(a[1]==="*"){
            var d=[];
            for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);
            c=d
            }
            return c
        }),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(l.attrHandle.href=function(a){
        return a.getAttribute("href",2)
        }),a=null
    }(),c.querySelectorAll&&function(){
    var a=k,b=c.createElement("div"),d="__sizzle__";
    b.innerHTML="<p class='TEST'></p>";
    if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){
        k=function(b,e,f,g){
            e=e||c;
            if(!g&&!k.isXML(e)){
                var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                if(h&&(e.nodeType===1||e.nodeType===9)){
                    if(h[1])return p(e.getElementsByTagName(b),f);
                    if(h[2]&&l.find.CLASS&&e.getElementsByClassName)return p(e.getElementsByClassName(h[2]),f)
                        }
                        if(e.nodeType===9){
                    if(b==="body"&&e.body)return p([e.body],f);
                    if(h&&h[3]){
                        var i=e.getElementById(h[3]);
                        if(!i||!i.parentNode)return p([],f);
                        if(i.id===h[3])return p([i],f)
                            }
                            try{
                        return p(e.querySelectorAll(b),f)
                        }catch(j){}
                }else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){
                var m=e,n=e.getAttribute("id"),o=n||d,q=e.parentNode,r=/^\s*[+~]/.test(b);
                n?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),r&&q&&(e=e.parentNode);
                try{
                    if(!r||q)return p(e.querySelectorAll("[id='"+o+"'] "+b),f)
                        }catch(s){}finally{
                    n||m.removeAttribute("id")
                    }
                }
        }
    return a(b,e,f,g)
};

for(var e in a)k[e]=a[e];b=null
}
}(),function(){
    var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;
    if(b){
        var d=!b.call(c.createElement("div"),"div"),e=!1;
        try{
            b.call(c.documentElement,"[test!='']:sizzle")
            }catch(f){
            e=!0
            }
            k.matchesSelector=function(a,c){
            c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");
            if(!k.isXML(a))try{
                if(e||!l.match.PSEUDO.test(c)&&!/!=/.test(c)){
                    var f=b.call(a,c);
                    if(f||!d||a.document&&a.document.nodeType!==11)return f
                        }
                    }catch(g){}
            return k(c,null,null,[a]).length>0
        }
    }
}(),function(){
    var a=c.createElement("div");
    a.innerHTML="<div class='test e'></div><div class='test'></div>";
    if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){
        a.lastChild.className="e";
        if(a.getElementsByClassName("e").length===1)return;
        l.order.splice(1,0,"CLASS"),l.find.CLASS=function(a,b,c){
            if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])
                },a=null
        }
    }(),c.documentElement.contains?k.contains=function(a,b){
    return a!==b&&(a.contains?a.contains(b):!0)
    }:c.documentElement.compareDocumentPosition?k.contains=function(a,b){
    return!!(a.compareDocumentPosition(b)&16)
    }:k.contains=function(){
    return!1
    },k.isXML=function(a){
    var b=(a?a.ownerDocument||a:0).documentElement;
    return b?b.nodeName!=="HTML":!1
    };

var v=function(a,b){
    var c,d=[],e="",f=b.nodeType?[b]:b;
    while(c=l.match.PSEUDO.exec(a))e+=c[0],a=a.replace(l.match.PSEUDO,"");
    a=l.relative[a]?a+"*":a;
    for(var g=0,h=f.length;g<h;g++)k(a,f[g],d);
    return k.filter(e,d)
    };

f.find=k,f.expr=k.selectors,f.expr[":"]=f.expr.filters,f.unique=k.uniqueSort,f.text=k.getText,f.isXMLDoc=k.isXML,f.contains=k.contains
}();
var P=/Until$/,Q=/^(?:parents|prevUntil|prevAll)/,R=/,/,S=/^.[^:#\[\.,]*$/,T=Array.prototype.slice,U=f.expr.match.POS,V={
    children:!0,
    contents:!0,
    next:!0,
    prev:!0
    };

f.fn.extend({
    find:function(a){
        var b=this,c,d;
        if(typeof a!="string")return f(a).filter(function(){
            for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0
                });
        var e=this.pushStack("","find",a),g,h,i;
        for(c=0,d=this.length;c<d;c++){
            g=e.length,f.find(a,this[c],e);
            if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){
                e.splice(h--,1);
                break
            }
            }
            return e
    },
has:function(a){
    var b=f(a);
    return this.filter(function(){
        for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0
            })
    },
not:function(a){
    return this.pushStack(X(this,a,!1),"not",a)
    },
filter:function(a){
    return this.pushStack(X(this,a,!0),"filter",a)
    },
is:function(a){
    return!!a&&(typeof a=="string"?f.filter(a,this).length>0:this.filter(a).length>0)
    },
closest:function(a,b){
    var c=[],d,e,g=this[0];
    if(f.isArray(a)){
        var h,i,j={},k=1;
        if(g&&a.length){
            for(d=0,e=a.length;d<e;d++)i=a[d],j[i]||(j[i]=U.test(i)?f(i,b||this.context):i);
            while(g&&g.ownerDocument&&g!==b){
                for(i in j)h=j[i],(h.jquery?h.index(g)>-1:f(g).is(h))&&c.push({
                    selector:i,
                    elem:g,
                    level:k
                });g=g.parentNode,k++
            }
        }
        return c
    }
    var l=U.test(a)||typeof a!="string"?f(a,b||this.context):0;
    for(d=0,e=this.length;d<e;d++){
    g=this[d];
    while(g){
        if(l?l.index(g)>-1:f.find.matchesSelector(g,a)){
            c.push(g);
            break
        }
        g=g.parentNode;
        if(!g||!g.ownerDocument||g===b||g.nodeType===11)break
    }
}
c=c.length>1?f.unique(c):c;
return this.pushStack(c,"closest",a)
},
index:function(a){
    if(!a||typeof a=="string")return f.inArray(this[0],a?f(a):this.parent().children());
    return f.inArray(a.jquery?a[0]:a,this)
    },
add:function(a,b){
    var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);
    return this.pushStack(W(c[0])||W(d[0])?d:f.unique(d))
    },
andSelf:function(){
    return this.add(this.prevObject)
    }
}),f.each({
    parent:function(a){
        var b=a.parentNode;
        return b&&b.nodeType!==11?b:null
        },
    parents:function(a){
        return f.dir(a,"parentNode")
        },
    parentsUntil:function(a,b,c){
        return f.dir(a,"parentNode",c)
        },
    next:function(a){
        return f.nth(a,2,"nextSibling")
        },
    prev:function(a){
        return f.nth(a,2,"previousSibling")
        },
    nextAll:function(a){
        return f.dir(a,"nextSibling")
        },
    prevAll:function(a){
        return f.dir(a,"previousSibling")
        },
    nextUntil:function(a,b,c){
        return f.dir(a,"nextSibling",c)
        },
    prevUntil:function(a,b,c){
        return f.dir(a,"previousSibling",c)
        },
    siblings:function(a){
        return f.sibling(a.parentNode.firstChild,a)
        },
    children:function(a){
        return f.sibling(a.firstChild)
        },
    contents:function(a){
        return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)
        }
    },function(a,b){
    f.fn[a]=function(c,d){
        var e=f.map(this,b,c),g=T.call(arguments);
        P.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!V[a]?f.unique(e):e,(this.length>1||R.test(d))&&Q.test(a)&&(e=e.reverse());
        return this.pushStack(e,a,g.join(","))
        }
    }),f.extend({
    filter:function(a,b,c){
        c&&(a=":not("+a+")");
        return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)
        },
    dir:function(a,c,d){
        var e=[],g=a[c];
        while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];
        return e
        },
    nth:function(a,b,c,d){
        b=b||1;
        var e=0;
        for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a
        },
    sibling:function(a,b){
        var c=[];
        for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);
        return c
        }
    });
var Y=/ jQuery\d+="(?:\d+|null)"/g,Z=/^\s+/,$=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,_=/<([\w:]+)/,ba=/<tbody/i,bb=/<|&#?\w+;/,bc=/<(?:script|object|embed|option|style)/i,bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={
    option:[1,"<select multiple='multiple'>","</select>"],
    legend:[1,"<fieldset>","</fieldset>"],
    thead:[1,"<table>","</table>"],
    tr:[2,"<table><tbody>","</tbody></table>"],
    td:[3,"<table><tbody><tr>","</tr></tbody></table>"],
    col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],
    area:[1,"<map>","</map>"],
    _default:[0,"",""]
    };

bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({
    text:function(a){
        if(f.isFunction(a))return this.each(function(b){
            var c=f(this);
            c.text(a.call(this,b,c.text()))
            });
        if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));
        return f.text(this)
        },
    wrapAll:function(a){
        if(f.isFunction(a))return this.each(function(b){
            f(this).wrapAll(a.call(this,b))
            });
        if(this[0]){
            var b=f(a,this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){
                var a=this;
                while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;
                return a
                }).append(this)
            }
            return this
        },
    wrapInner:function(a){
        if(f.isFunction(a))return this.each(function(b){
            f(this).wrapInner(a.call(this,b))
            });
        return this.each(function(){
            var b=f(this),c=b.contents();
            c.length?c.wrapAll(a):b.append(a)
            })
        },
    wrap:function(a){
        return this.each(function(){
            f(this).wrapAll(a)
            })
        },
    unwrap:function(){
        return this.parent().each(function(){
            f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)
            }).end()
        },
    append:function(){
        return this.domManip(arguments,!0,function(a){
            this.nodeType===1&&this.appendChild(a)
            })
        },
    prepend:function(){
        return this.domManip(arguments,!0,function(a){
            this.nodeType===1&&this.insertBefore(a,this.firstChild)
            })
        },
    before:function(){
        if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){
            this.parentNode.insertBefore(a,this)
            });
        if(arguments.length){
            var a=f(arguments[0]);
            a.push.apply(a,this.toArray());
            return this.pushStack(a,"before",arguments)
            }
        },
after:function(){
    if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){
        this.parentNode.insertBefore(a,this.nextSibling)
        });
    if(arguments.length){
        var a=this.pushStack(this,"after",arguments);
        a.push.apply(a,f(arguments[0]).toArray());
        return a
        }
    },
remove:function(a,b){
    for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this
    },
empty:function(){
    for(var a=0,b;(b=this[a])!=null;a++){
        b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));
        while(b.firstChild)b.removeChild(b.firstChild)
            }
            return this
    },
clone:function(a,b){
    a=a==null?!1:a,b=b==null?a:b;
    return this.map(function(){
        return f.clone(this,a,b)
        })
    },
html:function(a){
    if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Y,""):null;
    if(typeof a=="string"&&!bc.test(a)&&(f.support.leadingWhitespace||!Z.test(a))&&!bg[(_.exec(a)||["",""])[1].toLowerCase()]){
        a=a.replace($,"<$1></$2>");
        try{
            for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)
                }catch(e){
            this.empty().append(a)
            }
        }else f.isFunction(a)?this.each(function(b){
    var c=f(this);
    c.html(a.call(this,b,c.html()))
    }):this.empty().append(a);
return this
},
replaceWith:function(a){
    if(this[0]&&this[0].parentNode){
        if(f.isFunction(a))return this.each(function(b){
            var c=f(this),d=c.html();
            c.replaceWith(a.call(this,b,d))
            });
        typeof a!="string"&&(a=f(a).detach());
        return this.each(function(){
            var b=this.nextSibling,c=this.parentNode;
            f(this).remove(),b?f(b).before(a):f(c).append(a)
            })
        }
        return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this
    },
detach:function(a){
    return this.remove(a,!0)
    },
domManip:function(a,c,d){
    var e,g,h,i,j=a[0],k=[];
    if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){
        f(this).domManip(a,c,d,!0)
        });
    if(f.isFunction(j))return this.each(function(e){
        var g=f(this);
        a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)
        });
    if(this[0]){
        i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={
            fragment:i
        }:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;
        if(g){
            c=c&&f.nodeName(g,"tr");
            for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bh(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)
                }
                k.length&&f.each(k,bn)
        }
        return this
    }
}),f.buildFragment=function(a,b,d){
    var e,g,h,i=b&&b[0]?b[0].ownerDocument||b[0]:c;
    a.length===1&&typeof a[0]=="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!bc.test(a[0])&&(f.support.checkClone||!bd.test(a[0]))&&(g=!0,h=f.fragments[a[0]],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[a[0]]=h?e:1);
    return{
        fragment:e,
        cacheable:g
    }
},f.fragments={},f.each({
    appendTo:"append",
    prependTo:"prepend",
    insertBefore:"before",
    insertAfter:"after",
    replaceAll:"replaceWith"
},function(a,b){
    f.fn[a]=function(c){
        var d=[],e=f(c),g=this.length===1&&this[0].parentNode;
        if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){
            e[b](this[0]);
            return this
            }
            for(var h=0,i=e.length;h<i;h++){
            var j=(h>0?this.clone(!0):this).get();
            f(e[h])[b](j),d=d.concat(j)
            }
            return this.pushStack(d,a,e.selector)
        }
    }),f.extend({
    clone:function(a,b,c){
        var d=a.cloneNode(!0),e,g,h;
        if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){
            bj(a,d),e=bk(a),g=bk(d);
            for(h=0;e[h];++h)bj(e[h],g[h])
                }
                if(b){
            bi(a,d);
            if(c){
                e=bk(a),g=bk(d);
                for(h=0;e[h];++h)bi(e[h],g[h])
                    }
                }
        return d
    },
clean:function(a,b,d,e){
    var g;
    b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);
    var h=[],i;
    for(var j=0,k;(k=a[j])!=null;j++){
        typeof k=="number"&&(k+="");
        if(!k)continue;
        if(typeof k=="string")if(!bb.test(k))k=b.createTextNode(k);
            else{
            k=k.replace($,"<$1></$2>");
            var l=(_.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");
            o.innerHTML=m[1]+k+m[2];
            while(n--)o=o.lastChild;
            if(!f.support.tbody){
                var p=ba.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];
                for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])
                    }!f.support.leadingWhitespace&&Z.test(k)&&o.insertBefore(b.createTextNode(Z.exec(k)[0]),o.firstChild),k=o.childNodes
            }
            var r;
        if(!f.support.appendChecked)if(k[0]&&typeof(r=k.length)=="number")for(i=0;i<r;i++)bm(k[i]);else bm(k);
        k.nodeType?h.push(k):h=f.merge(h,k)
        }
        if(d){
        g=function(a){
            return!a.type||be.test(a.type)
            };

        for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);
            else{
            if(h[j].nodeType===1){
                var s=f.grep(h[j].getElementsByTagName("script"),g);
                h.splice.apply(h,[j+1,0].concat(s))
                }
                d.appendChild(h[j])
            }
        }
        return h
},
cleanData:function(a){
    var b,c,d=f.cache,e=f.expando,g=f.event.special,h=f.support.deleteExpando;
    for(var i=0,j;(j=a[i])!=null;i++){
        if(j.nodeName&&f.noData[j.nodeName.toLowerCase()])continue;
        c=j[f.expando];
        if(c){
            b=d[c]&&d[c][e];
            if(b&&b.events){
                for(var k in b.events)g[k]?f.event.remove(j,k):f.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)
                }
                h?delete j[f.expando]:j.removeAttribute&&j.removeAttribute(f.expando),delete d[c]
        }
    }
    }
});
var bo=/alpha\([^)]*\)/i,bp=/opacity=([^)]*)/,bq=/-([a-z])/ig,br=/([A-Z]|^ms)/g,bs=/^-?\d+(?:px)?$/i,bt=/^-?\d/,bu=/^[+\-]=/,bv=/[^+\-\.\de]+/g,bw={
    position:"absolute",
    visibility:"hidden",
    display:"block"
},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB,bC=function(a,b){
    return b.toUpperCase()
    };

f.fn.css=function(a,c){
    if(arguments.length===2&&c===b)return this;
    return f.access(this,a,c,!0,function(a,c,d){
        return d!==b?f.style(a,c,d):f.css(a,c)
        })
    },f.extend({
    cssHooks:{
        opacity:{
            get:function(a,b){
                if(b){
                    var c=bz(a,"opacity","opacity");
                    return c===""?"1":c
                    }
                    return a.style.opacity
                }
            }
    },
cssNumber:{
    zIndex:!0,
    fontWeight:!0,
    opacity:!0,
    zoom:!0,
    lineHeight:!0,
    widows:!0,
    orphans:!0
    },
cssProps:{
    "float":f.support.cssFloat?"cssFloat":"styleFloat"
    },
style:function(a,c,d,e){
    if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){
        var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];
        c=f.cssProps[i]||i;
        if(d===b){
            if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;
            return j[c]
            }
            h=typeof d;
        if(h==="number"&&isNaN(d)||d==null)return;
        h==="string"&&bu.test(d)&&(d=+d.replace(bv,"")+parseFloat(f.css(a,c))),h==="number"&&!f.cssNumber[i]&&(d+="px");
        if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{
            j[c]=d
            }catch(l){}
        }
    },
css:function(a,c,d){
    var e,g;
    c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");
    if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;
    if(bz)return bz(a,c)
        },
swap:function(a,b,c){
    var d={};

    for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);
    for(e in b)a.style[e]=d[e]
        },
camelCase:function(a){
    return a.replace(bq,bC)
    }
}),f.curCSS=f.css,f.each(["height","width"],function(a,b){
    f.cssHooks[b]={
        get:function(a,c,d){
            var e;
            if(c){
                a.offsetWidth!==0?e=bD(a,b,d):f.swap(a,bw,function(){
                    e=bD(a,b,d)
                    });
                if(e<=0){
                    e=bz(a,b,b),e==="0px"&&bB&&(e=bB(a,b,b));
                    if(e!=null)return e===""||e==="auto"?"0px":e
                        }
                        if(e<0||e==null){
                    e=a.style[b];
                    return e===""||e==="auto"?"0px":e
                    }
                    return typeof e=="string"?e:e+"px"
                }
            },
    set:function(a,b){
        if(!bs.test(b))return b;
        b=parseFloat(b);
        if(b>=0)return b+"px"
            }
        }
}),f.support.opacity||(f.cssHooks.opacity={
    get:function(a,b){
        return bp.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""
        },
    set:function(a,b){
        var c=a.style,d=a.currentStyle;
        c.zoom=1;
        var e=f.isNaN(b)?"":"alpha(opacity="+b*100+")",g=d&&d.filter||c.filter||"";
        c.filter=bo.test(g)?g.replace(bo,e):g+" "+e
        }
    }),f(function(){
    f.support.reliableMarginRight||(f.cssHooks.marginRight={
        get:function(a,b){
            var c;
            f.swap(a,{
                display:"inline-block"
            },function(){
                b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight
                });
            return c
            }
        })
}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,c){
    var d,e,g;
    c=c.replace(br,"-$1").toLowerCase();
    if(!(e=a.ownerDocument.defaultView))return b;
    if(g=e.getComputedStyle(a,null))d=g.getPropertyValue(c),d===""&&!f.contains(a.ownerDocument.documentElement,a)&&(d=f.style(a,c));
    return d
    }),c.documentElement.currentStyle&&(bB=function(a,b){
    var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;
    !bs.test(d)&&bt.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));
    return d===""?"auto":d
    }),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){
    var b=a.offsetWidth,c=a.offsetHeight;
    return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style.display||f.css(a,"display"))==="none"
    },f.expr.filters.visible=function(a){
    return!f.expr.filters.hidden(a)
    });
var bE=/%20/g,bF=/\[\]$/,bG=/\r?\n/g,bH=/#.*$/,bI=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bJ=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bK=/^(?:about|app|app\-storage|.+\-extension|file|widget):$/,bL=/^(?:GET|HEAD)$/,bM=/^\/\//,bN=/\?/,bO=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bP=/^(?:select|textarea)/i,bQ=/\s+/,bR=/([?&])_=[^&]*/,bS=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bT=f.fn.load,bU={},bV={},bW,bX;
try{
    bW=e.href
    }catch(bY){
    bW=c.createElement("a"),bW.href="",bW=bW.href
    }
    bX=bS.exec(bW.toLowerCase())||[],f.fn.extend({
    load:function(a,c,d){
        if(typeof a!="string"&&bT)return bT.apply(this,arguments);
        if(!this.length)return this;
        var e=a.indexOf(" ");
        if(e>=0){
            var g=a.slice(e,a.length);
            a=a.slice(0,e)
            }
            var h="GET";
        c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));
        var i=this;
        f.ajax({
            url:a,
            type:h,
            dataType:"html",
            data:c,
            complete:function(a,b,c){
                c=a.responseText,a.isResolved()&&(a.done(function(a){
                    c=a
                    }),i.html(g?f("<div>").append(c.replace(bO,"")).find(g):c)),d&&i.each(d,[c,b,a])
                }
            });
    return this
    },
serialize:function(){
    return f.param(this.serializeArray())
    },
serializeArray:function(){
    return this.map(function(){
        return this.elements?f.makeArray(this.elements):this
        }).filter(function(){
        return this.name&&!this.disabled&&(this.checked||bP.test(this.nodeName)||bJ.test(this.type))
        }).map(function(a,b){
        var c=f(this).val();
        return c==null?null:f.isArray(c)?f.map(c,function(a,c){
            return{
                name:b.name,
                value:a.replace(bG,"\r\n")
                }
            }):{
        name:b.name,
        value:c.replace(bG,"\r\n")
        }
    }).get()
}
}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){
    f.fn[b]=function(a){
        return this.bind(b,a)
        }
    }),f.each(["get","post"],function(a,c){
    f[c]=function(a,d,e,g){
        f.isFunction(d)&&(g=g||e,e=d,d=b);
        return f.ajax({
            type:c,
            url:a,
            data:d,
            success:e,
            dataType:g
        })
        }
    }),f.extend({
    getScript:function(a,c){
        return f.get(a,b,c,"script")
        },
    getJSON:function(a,b,c){
        return f.get(a,b,c,"json")
        },
    ajaxSetup:function(a,b){
        b?f.extend(!0,a,f.ajaxSettings,b):(b=a,a=f.extend(!0,f.ajaxSettings,b));
        for(var c in{
            context:1,
            url:1
        })c in b?a[c]=b[c]:c in f.ajaxSettings&&(a[c]=f.ajaxSettings[c]);return a
        },
    ajaxSettings:{
        url:bW,
        isLocal:bK.test(bX[1]),
        global:!0,
        type:"GET",
        contentType:"application/x-www-form-urlencoded",
        processData:!0,
        async:!0,
        accepts:{
            xml:"application/xml, text/xml",
            html:"text/html",
            text:"text/plain",
            json:"application/json, text/javascript",
            "*":"*/*"
        },
        contents:{
            xml:/xml/,
            html:/html/,
            json:/json/
        },
        responseFields:{
            xml:"responseXML",
            text:"responseText"
        },
        converters:{
            "* text":a.String,
            "text html":!0,
            "text json":f.parseJSON,
            "text xml":f.parseXML
            }
        },
ajaxPrefilter:bZ(bU),
    ajaxTransport:bZ(bV),
    ajax:function(a,c){
    function w(a,c,l,m){
        if(s!==2){
            s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a?4:0;
            var o,r,u,w=l?ca(d,v,l):b,x,y;
            if(a>=200&&a<300||a===304){
                if(d.ifModified){
                    if(x=v.getResponseHeader("Last-Modified"))f.lastModified[k]=x;
                    if(y=v.getResponseHeader("Etag"))f.etag[k]=y
                        }
                        if(a===304)c="notmodified",o=!0;else try{
                    r=cb(d,w),c="success",o=!0
                    }catch(z){
                    c="parsererror",u=z
                    }
                }else{
            u=c;
            if(!c||a)c="error",a<0&&(a=0)
                }
                v.status=a,v.statusText=c,o?h.resolveWith(e,[r,c,v]):h.rejectWith(e,[v,c,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.resolveWith(e,[v,c]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))
        }
    }
typeof a=="object"&&(c=a,a=b),c=c||{};

var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f._Deferred(),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={
    readyState:0,
    setRequestHeader:function(a,b){
        if(!s){
            var c=a.toLowerCase();
            a=m[c]=m[c]||a,l[a]=b
            }
            return this
        },
    getAllResponseHeaders:function(){
        return s===2?n:null
        },
    getResponseHeader:function(a){
        var c;
        if(s===2){
            if(!o){
                o={};
                while(c=bI.exec(n))o[c[1].toLowerCase()]=c[2]
                    }
                    c=o[a.toLowerCase()]
            }
            return c===b?null:c
        },
    overrideMimeType:function(a){
        s||(d.mimeType=a);
        return this
        },
    abort:function(a){
        a=a||"abort",p&&p.abort(a),w(0,a);
        return this
        }
    };

h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.done,v.statusCode=function(a){
    if(a){
        var b;
        if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)
            }
            return this
    },d.url=((a||d.url)+"").replace(bH,"").replace(bM,bX[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bQ),d.crossDomain==null&&(r=bS.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bX[1]&&r[2]==bX[2]&&(r[3]||(r[1]==="http:"?80:443))==(bX[3]||(bX[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bU,d,c,v);
if(s===2)return!1;
t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bL.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");
if(!d.hasContent){
    d.data&&(d.url+=(bN.test(d.url)?"&":"?")+d.data),k=d.url;
    if(d.cache===!1){
        var x=f.now(),y=d.url.replace(bR,"$1_="+x);
        d.url=y+(y===d.url?(bN.test(d.url)?"&":"?")+"_="+x:"")
        }
    }(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", */*; q=0.01":""):d.accepts["*"]);
for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){
    v.abort();
    return!1
    }
    for(u in{
    success:1,
    error:1,
    complete:1
})v[u](d[u]);p=b$(bV,d,c,v);
if(!p)w(-1,"No Transport");
else{
    v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){
        v.abort("timeout")
        },d.timeout));
    try{
        s=1,p.send(l,w)
        }catch(z){
        status<2?w(-1,z):f.error(z)
        }
    }
return v
},
param:function(a,c){
    var d=[],e=function(a,b){
        b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)
        };

    c===b&&(c=f.ajaxSettings.traditional);
    if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){
        e(this.name,this.value)
        });else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bE,"+")
    }
}),f.extend({
    active:0,
    lastModified:{},
    etag:{}
});
var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;
f.ajaxSetup({
    jsonp:"callback",
    jsonpCallback:function(){
        return f.expando+"_"+cc++
        }
    }),f.ajaxPrefilter("json jsonp",function(b,c,d){
    var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";
    if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){
        var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";
        b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){
            g=[a]
            },d.always(function(){
            a[h]=i,g&&f.isFunction(i)&&a[h](g[0])
            }),b.converters["script json"]=function(){
            g||f.error(h+" was not called");
            return g[0]
            },b.dataTypes[0]="json";
        return"script"
        }
    }),f.ajaxSetup({
    accepts:{
        script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents:{
        script:/javascript|ecmascript/
    },
    converters:{
        "text script":function(a){
            f.globalEval(a);
            return a
            }
        }
}),f.ajaxPrefilter("script",function(a){
    a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)
    }),f.ajaxTransport("script",function(a){
    if(a.crossDomain){
        var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;
        return{
            send:function(f,g){
                d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){
                    if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")
                        },e.insertBefore(d,e.firstChild)
                },
            abort:function(){
                d&&d.onload(0,1)
                }
            }
    }
});
var ce=a.ActiveXObject?function(){
    for(var a in cg)cg[a](0,1)
        }:!1,cf=0,cg;
f.ajaxSettings.xhr=a.ActiveXObject?function(){
    return!this.isLocal&&ch()||ci()
    }:ch,function(a){
    f.extend(f.support,{
        ajax:!!a,
        cors:!!a&&"withCredentials"in a
        })
    }(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){
    if(!c.crossDomain||f.support.cors){
        var d;
        return{
            send:function(e,g){
                var h=c.xhr(),i,j;
                c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);
                if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");
                try{
                    for(j in e)h.setRequestHeader(j,e[j])
                        }catch(k){}
                h.send(c.hasContent&&c.data||null),d=function(a,e){
                    var j,k,l,m,n;
                    try{
                        if(d&&(e||h.readyState===4)){
                            d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);
                            if(e)h.readyState!==4&&h.abort();
                            else{
                                j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;
                                try{
                                    k=h.statusText
                                    }catch(o){
                                    k=""
                                    }!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)
                                }
                            }
                    }catch(p){
                e||g(-1,p)
                }
                m&&g(j,k,m,l)
            },!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)
        },
    abort:function(){
        d&&d(0,1)
        }
    }
}
});
var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq,cr=a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame;
f.fn.extend({
    show:function(a,b,c){
        var d,e;
        if(a||a===0)return this.animate(cu("show",3),a,b,c);
        for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));
        for(g=0;g<h;g++){
            d=this[g];
            if(d.style){
                e=d.style.display;
                if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""
                    }
                }
        return this
    },
hide:function(a,b,c){
    if(a||a===0)return this.animate(cu("hide",3),a,b,c);
    for(var d=0,e=this.length;d<e;d++)if(this[d].style){
        var g=f.css(this[d],"display");
        g!=="none"&&!f._data(this[d],"olddisplay")&&f._data(this[d],"olddisplay",g)
        }
        for(d=0;d<e;d++)this[d].style&&(this[d].style.display="none");
    return this
    },
_toggle:f.fn.toggle,
toggle:function(a,b,c){
    var d=typeof a=="boolean";
    f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){
        var b=d?a:f(this).is(":hidden");
        f(this)[b?"show":"hide"]()
        }):this.animate(cu("toggle",3),a,b,c);
    return this
    },
fadeTo:function(a,b,c,d){
    return this.filter(":hidden").css("opacity",0).show().end().animate({
        opacity:b
    },a,c,d)
    },
animate:function(a,b,c,d){
    var e=f.speed(b,c,d);
    if(f.isEmptyObject(a))return this.each(e.complete,[!1]);
    a=f.extend({},a);
    return this[e.queue===!1?"each":"queue"](function(){
        e.queue===!1&&f._mark(this);
        var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;
        b.animatedProperties={};

        for(i in a){
            g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";
            if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);
            c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(f.support.inlineBlockNeedsLayout?(j=cv(this.nodeName),j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)):this.style.display="inline-block"))
            }
            b.overflow!=null&&(this.style.overflow="hidden");
        for(i in a)k=new f.fx(this,b,i),h=a[i],cm.test(h)?k[h==="toggle"?d?"show":"hide":h]():(l=cn.exec(h),m=k.cur(),l?(n=parseFloat(l[2]),o=l[3]||(f.cssNumber[i]?"":"px"),o!=="px"&&(f.style(this,i,(n||1)+o),m=(n||1)/k.cur()*m,f.style(this,i,m+o)),l[1]&&(n=(l[1]==="-="?-1:1)*n+m),k.custom(m,n,o)):k.custom(m,h,""));return!0
        })
    },
stop:function(a,b){
    a&&this.queue([]),this.each(function(){
        var a=f.timers,c=a.length;
        b||f._unmark(!0,this);
        while(c--)a[c].elem===this&&(b&&a[c](!0),a.splice(c,1))
            }),b||this.dequeue();
    return this
    }
}),f.each({
    slideDown:cu("show",1),
    slideUp:cu("hide",1),
    slideToggle:cu("toggle",1),
    fadeIn:{
        opacity:"show"
    },
    fadeOut:{
        opacity:"hide"
    },
    fadeToggle:{
        opacity:"toggle"
    }
},function(a,b){
    f.fn[a]=function(a,c,d){
        return this.animate(b,a,c,d)
        }
    }),f.extend({
    speed:function(a,b,c){
        var d=a&&typeof a=="object"?f.extend({},a):{
            complete:c||!c&&b||f.isFunction(a)&&a,
            duration:a,
            easing:c&&b||b&&!f.isFunction(b)&&b
            };

        d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default,d.old=d.complete,d.complete=function(a){
            d.queue!==!1?f.dequeue(this):a!==!1&&f._unmark(this),f.isFunction(d.old)&&d.old.call(this)
            };

        return d
        },
    easing:{
        linear:function(a,b,c,d){
            return c+d*a
            },
        swing:function(a,b,c,d){
            return(-Math.cos(a*Math.PI)/2+.5)*d+c
            }
        },
timers:[],
fx:function(a,b,c){
    this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}
}
}),f.fx.prototype={
    update:function(){
        this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)
        },
    cur:function(){
        if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];
        var a,b=f.css(this.elem,this.prop);
        return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a
        },
    custom:function(a,b,c){
        function h(a){
            return d.step(a)
            }
            var d=this,e=f.fx,g;
        this.startTime=cq||cs(),this.start=a,this.end=b,this.unit=c||this.unit||(f.cssNumber[this.prop]?"":"px"),this.now=this.start,this.pos=this.state=0,h.elem=this.elem,h()&&f.timers.push(h)&&!co&&(cr?(co=1,g=function(){
            co&&(cr(g),e.tick())
            },cr(g)):co=setInterval(e.tick,e.interval))
        },
    show:function(){
        this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()
        },
    hide:function(){
        this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)
        },
    step:function(a){
        var b=cq||cs(),c=!0,d=this.elem,e=this.options,g,h;
        if(a||b>=e.duration+this.startTime){
            this.now=this.end,this.pos=this.state=1,this.update(),e.animatedProperties[this.prop]=!0;
            for(g in e.animatedProperties)e.animatedProperties[g]!==!0&&(c=!1);if(c){
                e.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){
                    d.style["overflow"+b]=e.overflow[a]
                    }),e.hide&&f(d).hide();
                if(e.hide||e.show)for(var i in e.animatedProperties)f.style(d,i,e.orig[i]);e.complete.call(d)
                }
                return!1
            }
            e.duration==Infinity?this.now=b:(h=b-this.startTime,this.state=h/e.duration,this.pos=f.easing[e.animatedProperties[this.prop]](this.state,h,0,1,e.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();
        return!0
        }
    },f.extend(f.fx,{
    tick:function(){
        for(var a=f.timers,b=0;b<a.length;++b)a[b]()||a.splice(b--,1);
        a.length||f.fx.stop()
        },
    interval:13,
    stop:function(){
        clearInterval(co),co=null
        },
    speeds:{
        slow:600,
        fast:200,
        _default:400
    },
    step:{
        opacity:function(a){
            f.style(a.elem,"opacity",a.now)
            },
        _default:function(a){
            a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now
            }
        }
}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){
    return f.grep(f.timers,function(b){
        return a===b.elem
        }).length
    });
var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;
"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){
    var b=this[0],c;
    if(a)return this.each(function(b){
        f.offset.setOffset(this,a,b)
        });
    if(!b||!b.ownerDocument)return null;
    if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);
    try{
        c=b.getBoundingClientRect()
        }catch(d){}
    var e=b.ownerDocument,g=e.documentElement;
    if(!c||!f.contains(g,b))return c?{
        top:c.top,
        left:c.left
        }:{
        top:0,
        left:0
    };

    var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;
    return{
        top:n,
        left:o
    }
}:f.fn.offset=function(a){
    var b=this[0];
    if(a)return this.each(function(b){
        f.offset.setOffset(this,a,b)
        });
    if(!b||!b.ownerDocument)return null;
    if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);
    f.offset.initialize();
    var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;
    while((b=b.parentNode)&&b!==i&&b!==h){
        if(f.offset.supportsFixedPosition&&k.position==="fixed")break;
        c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.offset.doesNotAddBorder&&(!f.offset.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c
        }
        if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;
    f.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));
    return{
        top:l,
        left:m
    }
},f.offset={
    initialize:function(){
        var a=c.body,b=c.createElement("div"),d,e,g,h,i=parseFloat(f.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
        f.extend(b.style,{
            position:"absolute",
            top:0,
            left:0,
            margin:0,
            border:0,
            width:"1px",
            height:"1px",
            visibility:"hidden"
        }),b.innerHTML=j,a.insertBefore(b,a.firstChild),d=b.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,this.doesNotAddBorder=e.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,e.style.position="fixed",e.style.top="20px",this.supportsFixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",this.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),f.offset.initialize=f.noop
        },
    bodyOffset:function(a){
        var b=a.offsetTop,c=a.offsetLeft;
        f.offset.initialize(),f.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);
        return{
            top:b,
            left:c
        }
    },
setOffset:function(a,b,c){
    var d=f.css(a,"position");
    d==="static"&&(a.style.position="relative");
    var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;
    j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)
    }
},f.fn.extend({
    position:function(){
        if(!this[0])return null;
        var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{
            top:0,
            left:0
        }:b.offset();
        c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;
        return{
            top:c.top-d.top,
            left:c.left-d.left
            }
        },
offsetParent:function(){
    return this.map(function(){
        var a=this.offsetParent||c.body;
        while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;
        return a
        })
    }
}),f.each(["Left","Top"],function(a,c){
    var d="scroll"+c;
    f.fn[d]=function(c){
        var e,g;
        if(c===b){
            e=this[0];
            if(!e)return null;
            g=cy(e);
            return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]
            }
            return this.each(function(){
            g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c
            })
        }
    }),f.each(["Height","Width"],function(a,c){
    var d=c.toLowerCase();
    f.fn["inner"+c]=function(){
        return this[0]?parseFloat(f.css(this[0],d,"padding")):null
        },f.fn["outer"+c]=function(a){
        return this[0]?parseFloat(f.css(this[0],d,a?"margin":"border")):null
        },f.fn[d]=function(a){
        var e=this[0];
        if(!e)return a==null?null:this;
        if(f.isFunction(a))return this.each(function(b){
            var c=f(this);
            c[d](a.call(this,b,c[d]()))
            });
        if(f.isWindow(e)){
            var g=e.document.documentElement["client"+c];
            return e.document.compatMode==="CSS1Compat"&&g||e.document.body["client"+c]||g
            }
            if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);
        if(a===b){
            var h=f.css(e,d),i=parseFloat(h);
            return f.isNaN(i)?h:i
            }
            return this.css(d,typeof a=="string"?a:a+"px")
        }
    }),a.jQuery=a.$=f
})(window);
window.j=window.jQuery.noConflict();
j(document).bind("tracker:isReady",function(){
    for(var key in j.browser){
        if(j.browser[key]==true){
            j('body').addClass(key);
        }
    }
if(j.scrollbarWidth()==0){
    j('body').addClass("lion_scrollbars");
}
});
(function($){
    $.InFieldLabels=function(label,field,options){
        var base=this;
        base.$label=$(label);
        base.$field=$(field);
        base.$label.data("InFieldLabels",base);
        base.showing=true;
        base.init=function(){
            base.options=$.extend({},$.InFieldLabels.defaultOptions,options);
            base.$label.css('position','absolute');
            var fieldPosition=base.$field.position();
            base.$label.css({
                'left':fieldPosition.left,
                'top':fieldPosition.top
                }).addClass(base.options.labelClass);
            if(base.$field.val()!=""){
                base.$label.hide();
                base.showing=false;
            };

            base.$field.focus(function(){
                base.fadeOnFocus();
            }).blur(function(){
                base.checkForEmpty(true);
            }).bind('keydown.infieldlabel',function(e){
                base.hideOnChange(e);
            }).change(function(e){
                base.checkForEmpty();
            }).bind('onPropertyChange',function(){
                base.checkForEmpty();
            });
        };

        base.fadeOnFocus=function(){
            if(base.showing){
                base.setOpacity(base.options.fadeOpacity);
            };

    };

    base.setOpacity=function(opacity){
        base.$label.stop().animate({
            opacity:opacity
        },base.options.fadeDuration);
        base.showing=(opacity>0.0);
    };

    base.checkForEmpty=function(blur){
        if(base.$field.val()==""){
            base.prepForShow();
            base.setOpacity(blur?1.0:base.options.fadeOpacity);
        }else{
            base.setOpacity(0.0);
        };

};

base.prepForShow=function(e){
    if(!base.showing){
        base.$label.css({
            opacity:0.0
        }).show();
        base.$field.bind('keydown.infieldlabel',function(e){
            base.hideOnChange(e);
        });
    };

};

base.hideOnChange=function(e){
    if((e.keyCode==16)||(e.keyCode==9))return;
    if(base.showing){
        base.$label.hide();
        base.showing=false;
    };

    base.$field.unbind('keydown.infieldlabel');
};

base.init();
};

$.InFieldLabels.defaultOptions={
    fadeOpacity:0.5,
    fadeDuration:300,
    labelClass:'infield'
};

$.fn.inFieldLabels=function(options){
    return this.each(function(){
        var for_attr=$(this).attr('for');
        if(!for_attr)return;
        var $field=$("input#"+for_attr+"[type='text'],"+"input#"+for_attr+"[type='password'],"+"textarea#"+for_attr);
        if($field.length==0)return;
        (new $.InFieldLabels(this,$field[0],options));
    });
};

})(jQuery);
var Prototype={
    Version:'1.7',
    Browser:(function(){
        var ua=navigator.userAgent;
        var isOpera=Object.prototype.toString.call(window.opera)=='[object Opera]';
        return{
            IE:!!window.attachEvent&&!isOpera,
            Opera:isOpera,
            WebKit:ua.indexOf('AppleWebKit/')>-1,
            Gecko:ua.indexOf('Gecko')>-1&&ua.indexOf('KHTML')===-1,
            MobileSafari:/Apple.*Mobile/.test(ua)
            }
        })(),
BrowserFeatures:{
    XPath:!!document.evaluate,
    SelectorsAPI:!!document.querySelector,
    ElementExtensions:(function(){
        var constructor=window.Element||window.HTMLElement;
        return!!(constructor&&constructor.prototype);
    })(),
    SpecificElementExtensions:(function(){
        if(typeof window.HTMLDivElement!=='undefined')
            return true;
        var div=document.createElement('div'),form=document.createElement('form'),isSupported=false;
        if(div['__proto__']&&(div['__proto__']!==form['__proto__'])){
            isSupported=true;
        }
        div=form=null;
        return isSupported;
    })()
    },
ScriptFragment:'<script[^>]*>([\\S\\s]*?)<\/script>',
JSONFilter:/^\/\*-secure-([\s\S]*)\*\/\s*$/,
emptyFunction:function(){},
K:function(x){
    return x
    }
};

if(Prototype.Browser.MobileSafari)
    Prototype.BrowserFeatures.SpecificElementExtensions=false;
var Abstract={};

var Try={
    these:function(){
        var returnValue;
        for(var i=0,length=arguments.length;i<length;i++){
            var lambda=arguments[i];
            try{
                returnValue=lambda();
                break;
            }catch(e){}
        }
    return returnValue;
}
};

var Class=(function(){
    var IS_DONTENUM_BUGGY=(function(){
        for(var p in{
            toString:1
        }){
            if(p==='toString')return false;
        }
        return true;
    })();
    function subclass(){};

    function create(){
        var parent=null,properties=$A(arguments);
        if(Object.isFunction(properties[0]))
            parent=properties.shift();
        function klass(){
            this.initialize.apply(this,arguments);
        }
        Object.extend(klass,Class.Methods);
        klass.superclass=parent;
        klass.subclasses=[];
        if(parent){
            subclass.prototype=parent.prototype;
            klass.prototype=new subclass;
            parent.subclasses.push(klass);
        }
        for(var i=0,length=properties.length;i<length;i++)
            klass.addMethods(properties[i]);
        if(!klass.prototype.initialize)
            klass.prototype.initialize=Prototype.emptyFunction;
        klass.prototype.constructor=klass;
        return klass;
    }
    function addMethods(source){
        var ancestor=this.superclass&&this.superclass.prototype,properties=Object.keys(source);
        if(IS_DONTENUM_BUGGY){
            if(source.toString!=Object.prototype.toString)
                properties.push("toString");
            if(source.valueOf!=Object.prototype.valueOf)
                properties.push("valueOf");
        }
        for(var i=0,length=properties.length;i<length;i++){
            var property=properties[i],value=source[property];
            if(ancestor&&Object.isFunction(value)&&value.argumentNames()[0]=="$super"){
                var method=value;
                value=(function(m){
                    return function(){
                        return ancestor[m].apply(this,arguments);
                    };

                })(property).wrap(method);
            value.valueOf=method.valueOf.bind(method);
            value.toString=method.toString.bind(method);
        }
        this.prototype[property]=value;
        }
    return this;
}
return{
    create:create,
    Methods:{
        addMethods:addMethods
    }
};

})();
(function(){
    var _toString=Object.prototype.toString,NULL_TYPE='Null',UNDEFINED_TYPE='Undefined',BOOLEAN_TYPE='Boolean',NUMBER_TYPE='Number',STRING_TYPE='String',OBJECT_TYPE='Object',FUNCTION_CLASS='[object Function]',BOOLEAN_CLASS='[object Boolean]',NUMBER_CLASS='[object Number]',STRING_CLASS='[object String]',ARRAY_CLASS='[object Array]',DATE_CLASS='[object Date]',NATIVE_JSON_STRINGIFY_SUPPORT=window.JSON&&typeof JSON.stringify==='function'&&JSON.stringify(0)==='0'&&typeof JSON.stringify(Prototype.K)==='undefined';
    function Type(o){
        switch(o){
            case null:
                return NULL_TYPE;
            case(void 0):
                return UNDEFINED_TYPE;
        }
        var type=typeof o;
        switch(type){
            case'boolean':
                return BOOLEAN_TYPE;
            case'number':
                return NUMBER_TYPE;
            case'string':
                return STRING_TYPE;
        }
        return OBJECT_TYPE;
    }
    function extend(destination,source){
        for(var property in source)
            destination[property]=source[property];return destination;
    }
    function inspect(object){
        try{
            if(isUndefined(object))return'undefined';
            if(object===null)return'null';
            return object.inspect?object.inspect():String(object);
        }catch(e){
            if(e instanceof RangeError)return'...';
            throw e;
        }
    }
function toJSON(value){
    return Str('',{
        '':value
    },[]);
}
function Str(key,holder,stack){
    var value=holder[key],type=typeof value;
    if(Type(value)===OBJECT_TYPE&&typeof value.toJSON==='function'){
        value=value.toJSON(key);
    }
    var _class=_toString.call(value);
    switch(_class){
        case NUMBER_CLASS:case BOOLEAN_CLASS:case STRING_CLASS:
            value=value.valueOf();
    }
    switch(value){
        case null:
            return'null';
        case true:
            return'true';
        case false:
            return'false';
    }
    type=typeof value;
    switch(type){
        case'string':
            return value.inspect(true);
        case'number':
            return isFinite(value)?String(value):'null';
        case'object':
            for(var i=0,length=stack.length;i<length;i++){
            if(stack[i]===value){
                throw new TypeError();
            }
        }
        stack.push(value);
        var partial=[];
        if(_class===ARRAY_CLASS){
            for(var i=0,length=value.length;i<length;i++){
                var str=Str(i,value,stack);
                partial.push(typeof str==='undefined'?'null':str);
            }
            partial='['+partial.join(',')+']';
        }else{
            var keys=Object.keys(value);
            for(var i=0,length=keys.length;i<length;i++){
                var key=keys[i],str=Str(key,value,stack);
                if(typeof str!=="undefined"){
                    partial.push(key.inspect(true)+':'+str);
                }
            }
        partial='{'+partial.join(',')+'}';
    }
    stack.pop();
    return partial;
}
}
function stringify(object){
    return JSON.stringify(object);
}
function toQueryString(object){
    return $H(object).toQueryString();
}
function toHTML(object){
    return object&&object.toHTML?object.toHTML():String.interpret(object);
}
function keys(object){
    if(Type(object)!==OBJECT_TYPE){
        throw new TypeError();
    }
    var results=[];
    for(var property in object){
        if(object.hasOwnProperty(property)){
            results.push(property);
        }
    }
return results;
}
function values(object){
    var results=[];
    for(var property in object)
        results.push(object[property]);return results;
}
function clone(object){
    return extend({},object);
}
function isElement(object){
    return!!(object&&object.nodeType==1);
}
function isArray(object){
    return _toString.call(object)===ARRAY_CLASS;
}
var hasNativeIsArray=(typeof Array.isArray=='function')&&Array.isArray([])&&!Array.isArray({});
if(hasNativeIsArray){
    isArray=Array.isArray;
}
function isHash(object){
    return object instanceof Hash;
}
function isFunction(object){
    return _toString.call(object)===FUNCTION_CLASS;
}
function isString(object){
    return _toString.call(object)===STRING_CLASS;
}
function isNumber(object){
    return _toString.call(object)===NUMBER_CLASS;
}
function isDate(object){
    return _toString.call(object)===DATE_CLASS;
}
function isUndefined(object){
    return typeof object==="undefined";
}
extend(Object,{
    extend:extend,
    inspect:inspect,
    toJSON:NATIVE_JSON_STRINGIFY_SUPPORT?stringify:toJSON,
    toQueryString:toQueryString,
    toHTML:toHTML,
    keys:Object.keys||keys,
    values:values,
    clone:clone,
    isElement:isElement,
    isArray:isArray,
    isHash:isHash,
    isFunction:isFunction,
    isString:isString,
    isNumber:isNumber,
    isDate:isDate,
    isUndefined:isUndefined
});
})();
Object.extend(Function.prototype,(function(){
    var slice=Array.prototype.slice;
    function update(array,args){
        var arrayLength=array.length,length=args.length;
        while(length--)array[arrayLength+length]=args[length];
        return array;
    }
    function merge(array,args){
        array=slice.call(array,0);
        return update(array,args);
    }
    function argumentNames(){
        var names=this.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1].replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g,'').replace(/\s+/g,'').split(',');
        return names.length==1&&!names[0]?[]:names;
    }
    function bind(context){
        if(arguments.length<2&&Object.isUndefined(arguments[0]))return this;
        var __method=this,args=slice.call(arguments,1);
        return function(){
            var a=merge(args,arguments);
            return __method.apply(context,a);
        }
    }
function bindAsEventListener(context){
    var __method=this,args=slice.call(arguments,1);
    return function(event){
        var a=update([event||window.event],args);
        return __method.apply(context,a);
    }
}
function curry(){
    if(!arguments.length)return this;
    var __method=this,args=slice.call(arguments,0);
    return function(){
        var a=merge(args,arguments);
        return __method.apply(this,a);
    }
}
function delay(timeout){
    var __method=this,args=slice.call(arguments,1);
    timeout=timeout*1000;
    return window.setTimeout(function(){
        return __method.apply(__method,args);
    },timeout);
}
function defer(){
    var args=update([0.01],arguments);
    return this.delay.apply(this,args);
}
function wrap(wrapper){
    var __method=this;
    return function(){
        var a=update([__method.bind(this)],arguments);
        return wrapper.apply(this,a);
    }
}
function methodize(){
    if(this._methodized)return this._methodized;
    var __method=this;
    return this._methodized=function(){
        var a=update([this],arguments);
        return __method.apply(null,a);
    };

}
return{
    argumentNames:argumentNames,
    bind:bind,
    bindAsEventListener:bindAsEventListener,
    curry:curry,
    delay:delay,
    defer:defer,
    wrap:wrap,
    methodize:methodize
}
})());
(function(proto){
    function toISOString(){
        return this.getUTCFullYear()+'-'+
        (this.getUTCMonth()+1).toPaddedString(2)+'-'+
        this.getUTCDate().toPaddedString(2)+'T'+
        this.getUTCHours().toPaddedString(2)+':'+
        this.getUTCMinutes().toPaddedString(2)+':'+
        this.getUTCSeconds().toPaddedString(2)+'Z';
    }
    function toJSON(){
        return this.toISOString();
    }
    if(!proto.toISOString)proto.toISOString=toISOString;
    if(!proto.toJSON)proto.toJSON=toJSON;
})(Date.prototype);
RegExp.prototype.match=RegExp.prototype.test;
RegExp.escape=function(str){
    return String(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g,'\\$1');
};

var PeriodicalExecuter=Class.create({
    initialize:function(callback,frequency){
        this.callback=callback;
        this.frequency=frequency;
        this.currentlyExecuting=false;
        this.registerCallback();
    },
    registerCallback:function(){
        this.timer=setInterval(this.onTimerEvent.bind(this),this.frequency*1000);
    },
    execute:function(){
        this.callback(this);
    },
    stop:function(){
        if(!this.timer)return;
        clearInterval(this.timer);
        this.timer=null;
    },
    onTimerEvent:function(){
        if(!this.currentlyExecuting){
            try{
                this.currentlyExecuting=true;
                this.execute();
                this.currentlyExecuting=false;
            }catch(e){
                this.currentlyExecuting=false;
                throw e;
            }
        }
    }
});
Object.extend(String,{
    interpret:function(value){
        return value==null?'':String(value);
    },
    specialChar:{
        '\b':'\\b',
        '\t':'\\t',
        '\n':'\\n',
        '\f':'\\f',
        '\r':'\\r',
        '\\':'\\\\'
    }
});
Object.extend(String.prototype,(function(){
    var NATIVE_JSON_PARSE_SUPPORT=window.JSON&&typeof JSON.parse==='function'&&JSON.parse('{"test": true}').test;
    function prepareReplacement(replacement){
        if(Object.isFunction(replacement))return replacement;
        var template=new Template(replacement);
        return function(match){
            return template.evaluate(match)
            };

}
function gsub(pattern,replacement){
    var result='',source=this,match;
    replacement=prepareReplacement(replacement);
    if(Object.isString(pattern))
        pattern=RegExp.escape(pattern);
    if(!(pattern.length||pattern.source)){
        replacement=replacement('');
        return replacement+source.split('').join(replacement)+replacement;
    }
    while(source.length>0){
        if(match=source.match(pattern)){
            result+=source.slice(0,match.index);
            result+=String.interpret(replacement(match));
            source=source.slice(match.index+match[0].length);
        }else{
            result+=source,source='';
        }
    }
return result;
}
function sub(pattern,replacement,count){
    replacement=prepareReplacement(replacement);
    count=Object.isUndefined(count)?1:count;
    return this.gsub(pattern,function(match){
        if(--count<0)return match[0];
        return replacement(match);
    });
}
function scan(pattern,iterator){
    this.gsub(pattern,iterator);
    return String(this);
}
function truncate(length,truncation){
    length=length||30;
    truncation=Object.isUndefined(truncation)?'...':truncation;
    return this.length>length?this.slice(0,length-truncation.length)+truncation:String(this);
}
function strip(){
    return this.replace(/^\s+/,'').replace(/\s+$/,'');
}
function stripTags(){
    return this.replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi,'');
}
function stripScripts(){
    return this.replace(new RegExp(Prototype.ScriptFragment,'img'),'');
}
function extractScripts(){
    var matchAll=new RegExp(Prototype.ScriptFragment,'img'),matchOne=new RegExp(Prototype.ScriptFragment,'im');
    return(this.match(matchAll)||[]).map(function(scriptTag){
        return(scriptTag.match(matchOne)||['',''])[1];
    });
}
function evalScripts(){
    return this.extractScripts().map(function(script){
        return eval(script)
        });
}
function escapeHTML(){
    return this.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function unescapeHTML(){
    return this.stripTags().replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
}
function toQueryParams(separator){
    var match=this.strip().match(/([^?#]*)(#.*)?$/);
    if(!match)return{};

    return match[1].split(separator||'&').inject({},function(hash,pair){
        if((pair=pair.split('='))[0]){
            var key=decodeURIComponent(pair.shift()),value=pair.length>1?pair.join('='):pair[0];
            if(value!=undefined)value=decodeURIComponent(value);
            if(key in hash){
                if(!Object.isArray(hash[key]))hash[key]=[hash[key]];
                hash[key].push(value);
            }
            else hash[key]=value;
        }
        return hash;
    });
}
function toArray(){
    return this.split('');
}
function succ(){
    return this.slice(0,this.length-1)+
    String.fromCharCode(this.charCodeAt(this.length-1)+1);
}
function times(count){
    return count<1?'':new Array(count+1).join(this);
}
function camelize(){
    return this.replace(/-+(.)?/g,function(match,chr){
        return chr?chr.toUpperCase():'';
    });
}
function capitalize(){
    return this.charAt(0).toUpperCase()+this.substring(1).toLowerCase();
}
function underscore(){
    return this.replace(/::/g,'/').replace(/([A-Z]+)([A-Z][a-z])/g,'$1_$2').replace(/([a-z\d])([A-Z])/g,'$1_$2').replace(/-/g,'_').toLowerCase();
}
function dasherize(){
    return this.replace(/_/g,'-');
}
function inspect(useDoubleQuotes){
    var escapedString=this.replace(/[\x00-\x1f\\]/g,function(character){
        if(character in String.specialChar){
            return String.specialChar[character];
        }
        return'\\u00'+character.charCodeAt().toPaddedString(2,16);
    });
    if(useDoubleQuotes)return'"'+escapedString.replace(/"/g,'\\"')+'"';
    return"'"+escapedString.replace(/'/g,'\\\'')+"'";
}
function unfilterJSON(filter){
    return this.replace(filter||Prototype.JSONFilter,'$1');
}
function isJSON(){
    var str=this;
    if(str.blank())return false;
    str=str.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@');
    str=str.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']');
    str=str.replace(/(?:^|:|,)(?:\s*\[)+/g,'');
    return(/^[\],:{}\s]*$/).test(str);
}
function evalJSON(sanitize){
    var json=this.unfilterJSON(),cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    if(cx.test(json)){
        json=json.replace(cx,function(a){
            return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);
        });
    }
    try{
        if(!sanitize||json.isJSON())return eval('('+json+')');
    }catch(e){}
    throw new SyntaxError('Badly formed JSON string: '+this.inspect());
}
function parseJSON(){
    var json=this.unfilterJSON();
    return JSON.parse(json);
}
function include(pattern){
    return this.indexOf(pattern)>-1;
}
function startsWith(pattern){
    return this.lastIndexOf(pattern,0)===0;
}
function endsWith(pattern){
    var d=this.length-pattern.length;
    return d>=0&&this.indexOf(pattern,d)===d;
}
function empty(){
    return this=='';
}
function blank(){
    return/^\s*$/.test(this);
}
function interpolate(object,pattern){
    return new Template(this,pattern).evaluate(object);
}
return{
    gsub:gsub,
    sub:sub,
    scan:scan,
    truncate:truncate,
    strip:String.prototype.trim||strip,
    stripTags:stripTags,
    stripScripts:stripScripts,
    extractScripts:extractScripts,
    evalScripts:evalScripts,
    escapeHTML:escapeHTML,
    unescapeHTML:unescapeHTML,
    toQueryParams:toQueryParams,
    parseQuery:toQueryParams,
    toArray:toArray,
    succ:succ,
    times:times,
    camelize:camelize,
    capitalize:capitalize,
    underscore:underscore,
    dasherize:dasherize,
    inspect:inspect,
    unfilterJSON:unfilterJSON,
    isJSON:isJSON,
    evalJSON:NATIVE_JSON_PARSE_SUPPORT?parseJSON:evalJSON,
    include:include,
    startsWith:startsWith,
    endsWith:endsWith,
    empty:empty,
    blank:blank,
    interpolate:interpolate
};

})());
var Template=Class.create({
    initialize:function(template,pattern){
        this.template=template.toString();
        this.pattern=pattern||Template.Pattern;
    },
    evaluate:function(object){
        if(object&&Object.isFunction(object.toTemplateReplacements))
            object=object.toTemplateReplacements();
        return this.template.gsub(this.pattern,function(match){
            if(object==null)return(match[1]+'');
            var before=match[1]||'';
            if(before=='\\')return match[2];
            var ctx=object,expr=match[3],pattern=/^([^.[]+|\[((?:.*?[^\\])?)\])(\.|\[|$)/;
            match=pattern.exec(expr);
            if(match==null)return before;
            while(match!=null){
                var comp=match[1].startsWith('[')?match[2].replace(/\\\\]/g,']'):match[1];
                ctx=ctx[comp];
                if(null==ctx||''==match[3])break;
                expr=expr.substring('['==match[3]?match[1].length:match[0].length);
                match=pattern.exec(expr);
            }
            return before+String.interpret(ctx);
        });
    }
});
Template.Pattern=/(^|.|\r|\n)(#\{(.*?)\})/;
var $break={};

var Enumerable=(function(){
    function each(iterator,context){
        var index=0;
        try{
            this._each(function(value){
                iterator.call(context,value,index++);
            });
        }catch(e){
            if(e!=$break)throw e;
        }
        return this;
    }
    function eachSlice(number,iterator,context){
        var index=-number,slices=[],array=this.toArray();
        if(number<1)return array;
        while((index+=number)<array.length)
            slices.push(array.slice(index,index+number));
        return slices.collect(iterator,context);
    }
    function all(iterator,context){
        iterator=iterator||Prototype.K;
        var result=true;
        this.each(function(value,index){
            result=result&&!!iterator.call(context,value,index);
            if(!result)throw $break;
        });
        return result;
    }
    function any(iterator,context){
        iterator=iterator||Prototype.K;
        var result=false;
        this.each(function(value,index){
            if(result=!!iterator.call(context,value,index))
                throw $break;
        });
        return result;
    }
    function collect(iterator,context){
        iterator=iterator||Prototype.K;
        var results=[];
        this.each(function(value,index){
            results.push(iterator.call(context,value,index));
        });
        return results;
    }
    function detect(iterator,context){
        var result;
        this.each(function(value,index){
            if(iterator.call(context,value,index)){
                result=value;
                throw $break;
            }
        });
    return result;
}
function findAll(iterator,context){
    var results=[];
    this.each(function(value,index){
        if(iterator.call(context,value,index))
            results.push(value);
    });
    return results;
}
function grep(filter,iterator,context){
    iterator=iterator||Prototype.K;
    var results=[];
    if(Object.isString(filter))
        filter=new RegExp(RegExp.escape(filter));
    this.each(function(value,index){
        if(filter.match(value))
            results.push(iterator.call(context,value,index));
    });
    return results;
}
function include(object){
    if(Object.isFunction(this.indexOf))
        if(this.indexOf(object)!=-1)return true;
    var found=false;
    this.each(function(value){
        if(value==object){
            found=true;
            throw $break;
        }
    });
return found;
}
function inGroupsOf(number,fillWith){
    fillWith=Object.isUndefined(fillWith)?null:fillWith;
    return this.eachSlice(number,function(slice){
        while(slice.length<number)slice.push(fillWith);
        return slice;
    });
}
function inject(memo,iterator,context){
    this.each(function(value,index){
        memo=iterator.call(context,memo,value,index);
    });
    return memo;
}
function invoke(method){
    var args=$A(arguments).slice(1);
    return this.map(function(value){
        return value[method].apply(value,args);
    });
}
function max(iterator,context){
    iterator=iterator||Prototype.K;
    var result;
    this.each(function(value,index){
        value=iterator.call(context,value,index);
        if(result==null||value>=result)
            result=value;
    });
    return result;
}
function min(iterator,context){
    iterator=iterator||Prototype.K;
    var result;
    this.each(function(value,index){
        value=iterator.call(context,value,index);
        if(result==null||value<result)
            result=value;
    });
    return result;
}
function partition(iterator,context){
    iterator=iterator||Prototype.K;
    var trues=[],falses=[];
    this.each(function(value,index){
        (iterator.call(context,value,index)?trues:falses).push(value);
    });
    return[trues,falses];
}
function pluck(property){
    var results=[];
    this.each(function(value){
        results.push(value[property]);
    });
    return results;
}
function reject(iterator,context){
    var results=[];
    this.each(function(value,index){
        if(!iterator.call(context,value,index))
            results.push(value);
    });
    return results;
}
function sortBy(iterator,context){
    return this.map(function(value,index){
        return{
            value:value,
            criteria:iterator.call(context,value,index)
            };

    }).sort(function(left,right){
    var a=left.criteria,b=right.criteria;
    return a<b?-1:a>b?1:0;
}).pluck('value');
}
function toArray(){
    return this.map();
}
function zip(){
    var iterator=Prototype.K,args=$A(arguments);
    if(Object.isFunction(args.last()))
        iterator=args.pop();
    var collections=[this].concat(args).map($A);
    return this.map(function(value,index){
        return iterator(collections.pluck(index));
    });
}
function size(){
    return this.toArray().length;
}
function inspect(){
    return'#<Enumerable:'+this.toArray().inspect()+'>';
}
return{
    each:each,
    eachSlice:eachSlice,
    all:all,
    every:all,
    any:any,
    some:any,
    collect:collect,
    map:collect,
    detect:detect,
    findAll:findAll,
    select:findAll,
    filter:findAll,
    grep:grep,
    include:include,
    member:include,
    inGroupsOf:inGroupsOf,
    inject:inject,
    invoke:invoke,
    max:max,
    min:min,
    partition:partition,
    pluck:pluck,
    reject:reject,
    sortBy:sortBy,
    toArray:toArray,
    entries:toArray,
    zip:zip,
    size:size,
    inspect:inspect,
    find:detect
};

})();
function $A(iterable){
    if(!iterable)return[];
    if('toArray'in Object(iterable))return iterable.toArray();
    var length=iterable.length||0,results=new Array(length);
    while(length--)results[length]=iterable[length];
    return results;
}
function $w(string){
    if(!Object.isString(string))return[];
    string=string.strip();
    return string?string.split(/\s+/):[];
}
Array.from=$A;
(function(){
    var arrayProto=Array.prototype,slice=arrayProto.slice,_each=arrayProto.forEach;
    function each(iterator,context){
        for(var i=0,length=this.length>>>0;i<length;i++){
            if(i in this)iterator.call(context,this[i],i,this);
        }
        }
if(!_each)_each=each;
    function clear(){
    this.length=0;
    return this;
}
function first(){
    return this[0];
}
function last(){
    return this[this.length-1];
}
function compact(){
    return this.select(function(value){
        return value!=null;
    });
}
function flatten(){
    return this.inject([],function(array,value){
        if(Object.isArray(value))
            return array.concat(value.flatten());
        array.push(value);
        return array;
    });
}
function without(){
    var values=slice.call(arguments,0);
    return this.select(function(value){
        return!values.include(value);
    });
}
function reverse(inline){
    return(inline===false?this.toArray():this)._reverse();
}
function uniq(sorted){
    return this.inject([],function(array,value,index){
        if(0==index||(sorted?array.last()!=value:!array.include(value)))
            array.push(value);
        return array;
    });
}
function intersect(array){
    return this.uniq().findAll(function(item){
        return array.detect(function(value){
            return item===value
            });
    });
}
function clone(){
    return slice.call(this,0);
}
function size(){
    return this.length;
}
function inspect(){
    return'['+this.map(Object.inspect).join(', ')+']';
}
function indexOf(item,i){
    i||(i=0);
    var length=this.length;
    if(i<0)i=length+i;
    for(;i<length;i++)
        if(this[i]===item)return i;return-1;
}
function lastIndexOf(item,i){
    i=isNaN(i)?this.length:(i<0?this.length+i:i)+1;
    var n=this.slice(0,i).reverse().indexOf(item);
    return(n<0)?n:i-n-1;
}
function concat(){
    var array=slice.call(this,0),item;
    for(var i=0,length=arguments.length;i<length;i++){
        item=arguments[i];
        if(Object.isArray(item)&&!('callee'in item)){
            for(var j=0,arrayLength=item.length;j<arrayLength;j++)
                array.push(item[j]);
        }else{
            array.push(item);
        }
    }
return array;
}
Object.extend(arrayProto,Enumerable);
    if(!arrayProto._reverse)
    arrayProto._reverse=arrayProto.reverse;
Object.extend(arrayProto,{
    _each:_each,
    clear:clear,
    first:first,
    last:last,
    compact:compact,
    flatten:flatten,
    without:without,
    reverse:reverse,
    uniq:uniq,
    intersect:intersect,
    clone:clone,
    toArray:clone,
    size:size,
    inspect:inspect
});
var CONCAT_ARGUMENTS_BUGGY=(function(){
    return[].concat(arguments)[0][0]!==1;
})(1,2)
    if(CONCAT_ARGUMENTS_BUGGY)arrayProto.concat=concat;
    if(!arrayProto.indexOf)arrayProto.indexOf=indexOf;
    if(!arrayProto.lastIndexOf)arrayProto.lastIndexOf=lastIndexOf;
})();
function $H(object){
    return new Hash(object);
};

var Hash=Class.create(Enumerable,(function(){
    function initialize(object){
        this._object=Object.isHash(object)?object.toObject():Object.clone(object);
    }
    function _each(iterator){
        for(var key in this._object){
            var value=this._object[key],pair=[key,value];
            pair.key=key;
            pair.value=value;
            iterator(pair);
        }
        }
function set(key,value){
    return this._object[key]=value;
}
function get(key){
    if(this._object[key]!==Object.prototype[key])
        return this._object[key];
}
function unset(key){
    var value=this._object[key];
    delete this._object[key];
    return value;
}
function toObject(){
    return Object.clone(this._object);
}
function keys(){
    return this.pluck('key');
}
function values(){
    return this.pluck('value');
}
function index(value){
    var match=this.detect(function(pair){
        return pair.value===value;
    });
    return match&&match.key;
}
function merge(object){
    return this.clone().update(object);
}
function update(object){
    return new Hash(object).inject(this,function(result,pair){
        result.set(pair.key,pair.value);
        return result;
    });
}
function toQueryPair(key,value){
    if(Object.isUndefined(value))return key;
    return key+'='+encodeURIComponent(String.interpret(value));
}
function toQueryString(){
    return this.inject([],function(results,pair){
        var key=encodeURIComponent(pair.key),values=pair.value;
        if(values&&typeof values=='object'){
            if(Object.isArray(values)){
                var queryValues=[];
                for(var i=0,len=values.length,value;i<len;i++){
                    value=values[i];
                    queryValues.push(toQueryPair(key,value));
                }
                return results.concat(queryValues);
            }
        }else results.push(toQueryPair(key,values));
        return results;
    }).join('&');
    }
    function inspect(){
        return'#<Hash:{'+this.map(function(pair){
            return pair.map(Object.inspect).join(': ');
        }).join(', ')+'}>';
    }
    function clone(){
        return new Hash(this);
    }
    return{
        initialize:initialize,
        _each:_each,
        set:set,
        get:get,
        unset:unset,
        toObject:toObject,
        toTemplateReplacements:toObject,
        keys:keys,
        values:values,
        index:index,
        merge:merge,
        update:update,
        toQueryString:toQueryString,
        inspect:inspect,
        toJSON:toObject,
        clone:clone
    };

})());
Hash.from=$H;
Object.extend(Number.prototype,(function(){
    function toColorPart(){
        return this.toPaddedString(2,16);
    }
    function succ(){
        return this+1;
    }
    function times(iterator,context){
        $R(0,this,true).each(iterator,context);
        return this;
    }
    function toPaddedString(length,radix){
        var string=this.toString(radix||10);
        return'0'.times(length-string.length)+string;
    }
    function abs(){
        return Math.abs(this);
    }
    function round(){
        return Math.round(this);
    }
    function ceil(){
        return Math.ceil(this);
    }
    function floor(){
        return Math.floor(this);
    }
    return{
        toColorPart:toColorPart,
        succ:succ,
        times:times,
        toPaddedString:toPaddedString,
        abs:abs,
        round:round,
        ceil:ceil,
        floor:floor
    };

})());
function $R(start,end,exclusive){
    return new ObjectRange(start,end,exclusive);
}
var ObjectRange=Class.create(Enumerable,(function(){
    function initialize(start,end,exclusive){
        this.start=start;
        this.end=end;
        this.exclusive=exclusive;
    }
    function _each(iterator){
        var value=this.start;
        while(this.include(value)){
            iterator(value);
            value=value.succ();
        }
    }
function include(value){
    if(value<this.start)
        return false;
    if(this.exclusive)
        return value<this.end;
    return value<=this.end;
}
return{
    initialize:initialize,
    _each:_each,
    include:include
};

})());
var Ajax={
    getTransport:function(){
        return Try.these(function(){
            return new XMLHttpRequest()
            },function(){
            return new ActiveXObject('Msxml2.XMLHTTP')
            },function(){
            return new ActiveXObject('Microsoft.XMLHTTP')
            })||false;
    },
    activeRequestCount:0
};

Ajax.Responders={
    responders:[],
    _each:function(iterator){
        this.responders._each(iterator);
    },
    register:function(responder){
        if(!this.include(responder))
            this.responders.push(responder);
    },
    unregister:function(responder){
        this.responders=this.responders.without(responder);
    },
    dispatch:function(callback,request,transport,json){
        this.each(function(responder){
            if(Object.isFunction(responder[callback])){
                try{
                    responder[callback].apply(responder,[request,transport,json]);
                }catch(e){}
            }
        });
}
};

Object.extend(Ajax.Responders,Enumerable);
Ajax.Responders.register({
    onCreate:function(){
        Ajax.activeRequestCount++
    },
    onComplete:function(){
        Ajax.activeRequestCount--
    }
});
Ajax.Base=Class.create({
    initialize:function(options){
        this.options={
            method:'post',
            asynchronous:true,
            contentType:'application/x-www-form-urlencoded',
            encoding:'UTF-8',
            parameters:'',
            evalJSON:true,
            evalJS:true
        };

        Object.extend(this.options,options||{});
        this.options.method=this.options.method.toLowerCase();
        if(Object.isHash(this.options.parameters))
            this.options.parameters=this.options.parameters.toObject();
    }
});
Ajax.Request=Class.create(Ajax.Base,{
    _complete:false,
    initialize:function($super,url,options){
        $super(options);
        this.transport=Ajax.getTransport();
        this.request(url);
    },
    request:function(url){
        this.url=url;
        this.method=this.options.method;
        var params=Object.isString(this.options.parameters)?this.options.parameters:Object.toQueryString(this.options.parameters);
        if(!['get','post'].include(this.method)){
            params+=(params?'&':'')+"_method="+this.method;
            this.method='post';
        }
        if(params&&this.method==='get'){
            this.url+=(this.url.include('?')?'&':'?')+params;
        }
        this.parameters=params.toQueryParams();
        try{
            var response=new Ajax.Response(this);
            if(this.options.onCreate)this.options.onCreate(response);
            Ajax.Responders.dispatch('onCreate',this,response);
            this.transport.open(this.method.toUpperCase(),this.url,this.options.asynchronous);
            if(this.options.asynchronous)this.respondToReadyState.bind(this).defer(1);
            this.transport.onreadystatechange=this.onStateChange.bind(this);
            this.setRequestHeaders();
            this.body=this.method=='post'?(this.options.postBody||params):null;
            this.transport.send(this.body);
            if(!this.options.asynchronous&&this.transport.overrideMimeType)
                this.onStateChange();
        }
        catch(e){
            this.dispatchException(e);
        }
    },
onStateChange:function(){
    var readyState=this.transport.readyState;
    if(readyState>1&&!((readyState==4)&&this._complete))
        this.respondToReadyState(this.transport.readyState);
},
setRequestHeaders:function(){
    var headers={
        'X-Requested-With':'XMLHttpRequest',
        'X-Prototype-Version':Prototype.Version,
        'Accept':'text/javascript, text/html, application/xml, text/xml, */*'
    };

    if(this.method=='post'){
        headers['Content-type']=this.options.contentType+
        (this.options.encoding?'; charset='+this.options.encoding:'');
        if(this.transport.overrideMimeType&&(navigator.userAgent.match(/Gecko\/(\d{4})/)||[0,2005])[1]<2005)
            headers['Connection']='close';
    }
    if(typeof this.options.requestHeaders=='object'){
        var extras=this.options.requestHeaders;
        if(Object.isFunction(extras.push))
            for(var i=0,length=extras.length;i<length;i+=2)
                headers[extras[i]]=extras[i+1];else
            $H(extras).each(function(pair){
                headers[pair.key]=pair.value
                });
    }
    for(var name in headers)
        this.transport.setRequestHeader(name,headers[name]);
    },
success:function(){
    var status=this.getStatus();
    return!status||(status>=200&&status<300)||status==304;
},
getStatus:function(){
    try{
        if(this.transport.status===1223)return 204;
        return this.transport.status||0;
    }catch(e){
        return 0
        }
    },
    respondToReadyState:function(readyState){
    var state=Ajax.Request.Events[readyState],response=new Ajax.Response(this);
    if(state=='Complete'){
        try{
            this._complete=true;
            (this.options['on'+response.status]||this.options['on'+(this.success()?'Success':'Failure')]||Prototype.emptyFunction)(response,response.headerJSON);
        }catch(e){
            this.dispatchException(e);
        }
        var contentType=response.getHeader('Content-type');
        if(this.options.evalJS=='force'||(this.options.evalJS&&this.isSameOrigin()&&contentType&&contentType.match(/^\s*(text|application)\/(x-)?(java|ecma)script(;.*)?\s*$/i)))
            this.evalResponse();
    }
    try{
        (this.options['on'+state]||Prototype.emptyFunction)(response,response.headerJSON);
        Ajax.Responders.dispatch('on'+state,this,response,response.headerJSON);
    }catch(e){
        this.dispatchException(e);
    }
    if(state=='Complete'){
        this.transport.onreadystatechange=Prototype.emptyFunction;
    }
},
isSameOrigin:function(){
    var m=this.url.match(/^\s*https?:\/\/[^\/]*/);
    return!m||(m[0]=='#{protocol}//#{domain}#{port}'.interpolate({
        protocol:location.protocol,
        domain:document.domain,
        port:location.port?':'+location.port:''
        }));
},
getHeader:function(name){
    try{
        return this.transport.getResponseHeader(name)||null;
    }catch(e){
        return null;
    }
},
evalResponse:function(){
    try{
        return eval((this.transport.responseText||'').unfilterJSON());
    }catch(e){
        this.dispatchException(e);
    }
},
dispatchException:function(exception){
    (this.options.onException||Prototype.emptyFunction)(this,exception);
    Ajax.Responders.dispatch('onException',this,exception);
}
});
Ajax.Request.Events=['Uninitialized','Loading','Loaded','Interactive','Complete'];
Ajax.Response=Class.create({
    initialize:function(request){
        this.request=request;
        var transport=this.transport=request.transport,readyState=this.readyState=transport.readyState;
        if((readyState>2&&!Prototype.Browser.IE)||readyState==4){
            this.status=this.getStatus();
            this.statusText=this.getStatusText();
            this.responseText=String.interpret(transport.responseText);
            this.headerJSON=this._getHeaderJSON();
        }
        if(readyState==4){
            var xml=transport.responseXML;
            this.responseXML=Object.isUndefined(xml)?null:xml;
            this.responseJSON=this._getResponseJSON();
        }
    },
status:0,
statusText:'',
getStatus:Ajax.Request.prototype.getStatus,
getStatusText:function(){
    try{
        return this.transport.statusText||'';
    }catch(e){
        return''
        }
    },
    getHeader:Ajax.Request.prototype.getHeader,
    getAllHeaders:function(){
    try{
        return this.getAllResponseHeaders();
    }catch(e){
        return null
        }
    },
getResponseHeader:function(name){
    return this.transport.getResponseHeader(name);
},
getAllResponseHeaders:function(){
    return this.transport.getAllResponseHeaders();
},
_getHeaderJSON:function(){
    var json=this.getHeader('X-JSON');
    if(!json)return null;
    json=decodeURIComponent(escape(json));
    try{
        return json.evalJSON(this.request.options.sanitizeJSON||!this.request.isSameOrigin());
    }catch(e){
        this.request.dispatchException(e);
    }
},
_getResponseJSON:function(){
    var options=this.request.options;
    if(!options.evalJSON||(options.evalJSON!='force'&&!(this.getHeader('Content-type')||'').include('application/json'))||this.responseText.blank())
        return null;
    try{
        return this.responseText.evalJSON(options.sanitizeJSON||!this.request.isSameOrigin());
    }catch(e){
        this.request.dispatchException(e);
    }
}
});
Ajax.Updater=Class.create(Ajax.Request,{
    initialize:function($super,container,url,options){
        this.container={
            success:(container.success||container),
            failure:(container.failure||(container.success?null:container))
            };

        options=Object.clone(options);
        var onComplete=options.onComplete;
        options.onComplete=(function(response,json){
            this.updateContent(response.responseText);
            if(Object.isFunction(onComplete))onComplete(response,json);
        }).bind(this);
        $super(url,options);
    },
    updateContent:function(responseText){
        var receiver=this.container[this.success()?'success':'failure'],options=this.options;
        if(!options.evalScripts)responseText=responseText.stripScripts();
        if(receiver=$(receiver)){
            if(options.insertion){
                if(Object.isString(options.insertion)){
                    var insertion={};

                    insertion[options.insertion]=responseText;
                    receiver.insert(insertion);
                }
                else options.insertion(receiver,responseText);
            }
            else receiver.update(responseText);
        }
    }
});
Ajax.PeriodicalUpdater=Class.create(Ajax.Base,{
    initialize:function($super,container,url,options){
        $super(options);
        this.onComplete=this.options.onComplete;
        this.frequency=(this.options.frequency||2);
        this.decay=(this.options.decay||1);
        this.updater={};

        this.container=container;
        this.url=url;
        this.start();
    },
    start:function(){
        this.options.onComplete=this.updateComplete.bind(this);
        this.onTimerEvent();
    },
    stop:function(){
        this.updater.options.onComplete=undefined;
        clearTimeout(this.timer);
        (this.onComplete||Prototype.emptyFunction).apply(this,arguments);
    },
    updateComplete:function(response){
        if(this.options.decay){
            this.decay=(response.responseText==this.lastText?this.decay*this.options.decay:1);
            this.lastText=response.responseText;
        }
        this.timer=this.onTimerEvent.bind(this).delay(this.decay*this.frequency);
    },
    onTimerEvent:function(){
        this.updater=new Ajax.Updater(this.container,this.url,this.options);
    }
});
function $(element){
    if(arguments.length>1){
        for(var i=0,elements=[],length=arguments.length;i<length;i++)
            elements.push($(arguments[i]));
        return elements;
    }
    if(Object.isString(element))
        element=document.getElementById(element);
    return Element.extend(element);
}
if(Prototype.BrowserFeatures.XPath){
    document._getElementsByXPath=function(expression,parentElement){
        var results=[];
        var query=document.evaluate(expression,$(parentElement)||document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
        for(var i=0,length=query.snapshotLength;i<length;i++)
            results.push(Element.extend(query.snapshotItem(i)));
        return results;
    };

}
if(!Node)var Node={};

if(!Node.ELEMENT_NODE){
    Object.extend(Node,{
        ELEMENT_NODE:1,
        ATTRIBUTE_NODE:2,
        TEXT_NODE:3,
        CDATA_SECTION_NODE:4,
        ENTITY_REFERENCE_NODE:5,
        ENTITY_NODE:6,
        PROCESSING_INSTRUCTION_NODE:7,
        COMMENT_NODE:8,
        DOCUMENT_NODE:9,
        DOCUMENT_TYPE_NODE:10,
        DOCUMENT_FRAGMENT_NODE:11,
        NOTATION_NODE:12
    });
}
(function(global){
    function shouldUseCache(tagName,attributes){
        if(tagName==='select')return false;
        if('type'in attributes)return false;
        return true;
    }
    var HAS_EXTENDED_CREATE_ELEMENT_SYNTAX=(function(){
        try{
            var el=document.createElement('<input name="x">');
            return el.tagName.toLowerCase()==='input'&&el.name==='x';
        }
        catch(err){
            return false;
        }
    })();
    var element=global.Element;
    global.Element=function(tagName,attributes){
    attributes=attributes||{};

    tagName=tagName.toLowerCase();
    var cache=Element.cache;
    if(HAS_EXTENDED_CREATE_ELEMENT_SYNTAX&&attributes.name){
        tagName='<'+tagName+' name="'+attributes.name+'">';
        delete attributes.name;
        return Element.writeAttribute(document.createElement(tagName),attributes);
    }
    if(!cache[tagName])cache[tagName]=Element.extend(document.createElement(tagName));
    var node=shouldUseCache(tagName,attributes)?cache[tagName].cloneNode(false):document.createElement(tagName);
    return Element.writeAttribute(node,attributes);
};

Object.extend(global.Element,element||{});
    if(element)global.Element.prototype=element.prototype;
    })(this);
Element.idCounter=1;
Element.cache={};

Element._purgeElement=function(element){
    var uid=element._prototypeUID;
    if(uid){
        Element.stopObserving(element);
        element._prototypeUID=void 0;
        delete Element.Storage[uid];
    }
}
Element.Methods={
    visible:function(element){
        return $(element).style.display!='none';
    },
    toggle:function(element){
        element=$(element);
        Element[Element.visible(element)?'hide':'show'](element);
        return element;
    },
    hide:function(element){
        element=$(element);
        element.style.display='none';
        return element;
    },
    show:function(element){
        element=$(element);
        element.style.display='';
        return element;
    },
    remove:function(element){
        element=$(element);
        element.parentNode.removeChild(element);
        return element;
    },
    update:(function(){
        var SELECT_ELEMENT_INNERHTML_BUGGY=(function(){
            var el=document.createElement("select"),isBuggy=true;
            el.innerHTML="<option value=\"test\">test</option>";
            if(el.options&&el.options[0]){
                isBuggy=el.options[0].nodeName.toUpperCase()!=="OPTION";
            }
            el=null;
            return isBuggy;
        })();
        var TABLE_ELEMENT_INNERHTML_BUGGY=(function(){
            try{
                var el=document.createElement("table");
                if(el&&el.tBodies){
                    el.innerHTML="<tbody><tr><td>test</td></tr></tbody>";
                    var isBuggy=typeof el.tBodies[0]=="undefined";
                    el=null;
                    return isBuggy;
                }
            }catch(e){
            return true;
        }
        })();
    var LINK_ELEMENT_INNERHTML_BUGGY=(function(){
        try{
            var el=document.createElement('div');
            el.innerHTML="<link>";
            var isBuggy=(el.childNodes.length===0);
            el=null;
            return isBuggy;
        }catch(e){
            return true;
        }
    })();
    var ANY_INNERHTML_BUGGY=SELECT_ELEMENT_INNERHTML_BUGGY||TABLE_ELEMENT_INNERHTML_BUGGY||LINK_ELEMENT_INNERHTML_BUGGY;
    var SCRIPT_ELEMENT_REJECTS_TEXTNODE_APPENDING=(function(){
    var s=document.createElement("script"),isBuggy=false;
    try{
        s.appendChild(document.createTextNode(""));
        isBuggy=!s.firstChild||s.firstChild&&s.firstChild.nodeType!==3;
    }catch(e){
        isBuggy=true;
    }
    s=null;
    return isBuggy;
})();
    function update(element,content){
    element=$(element);
    var purgeElement=Element._purgeElement;
    var descendants=element.getElementsByTagName('*'),i=descendants.length;
    while(i--)purgeElement(descendants[i]);
    if(content&&content.toElement)
        content=content.toElement();
    if(Object.isElement(content))
        return element.update().insert(content);
    content=Object.toHTML(content);
    var tagName=element.tagName.toUpperCase();
    if(tagName==='SCRIPT'&&SCRIPT_ELEMENT_REJECTS_TEXTNODE_APPENDING){
        element.text=content;
        return element;
    }
    if(ANY_INNERHTML_BUGGY){
        if(tagName in Element._insertionTranslations.tags){
            while(element.firstChild){
                element.removeChild(element.firstChild);
            }
            Element._getContentFromAnonymousElement(tagName,content.stripScripts()).each(function(node){
                element.appendChild(node)
                });
        }else if(LINK_ELEMENT_INNERHTML_BUGGY&&Object.isString(content)&&content.indexOf('<link')>-1){
            while(element.firstChild){
                element.removeChild(element.firstChild);
            }
            var nodes=Element._getContentFromAnonymousElement(tagName,content.stripScripts(),true);
            nodes.each(function(node){
                element.appendChild(node)
                });
        }
        else{
            element.innerHTML=content.stripScripts();
        }
    }
else{
    element.innerHTML=content.stripScripts();
}
content.evalScripts.bind(content).defer();
    return element;
}
return update;
})(),
replace:function(element,content){
    element=$(element);
    if(content&&content.toElement)content=content.toElement();
    else if(!Object.isElement(content)){
        content=Object.toHTML(content);
        var range=element.ownerDocument.createRange();
        range.selectNode(element);
        content.evalScripts.bind(content).defer();
        content=range.createContextualFragment(content.stripScripts());
    }
    element.parentNode.replaceChild(content,element);
    return element;
},
insert:function(element,insertions){
    element=$(element);
    if(Object.isString(insertions)||Object.isNumber(insertions)||Object.isElement(insertions)||(insertions&&(insertions.toElement||insertions.toHTML)))
        insertions={
            bottom:insertions
        };

    var content,insert,tagName,childNodes;
    for(var position in insertions){
        content=insertions[position];
        position=position.toLowerCase();
        insert=Element._insertionTranslations[position];
        if(content&&content.toElement)content=content.toElement();
        if(Object.isElement(content)){
            insert(element,content);
            continue;
        }
        content=Object.toHTML(content);
        tagName=((position=='before'||position=='after')?element.parentNode:element).tagName.toUpperCase();
        childNodes=Element._getContentFromAnonymousElement(tagName,content.stripScripts());
        if(position=='top'||position=='after')childNodes.reverse();
        childNodes.each(insert.curry(element));
        content.evalScripts.bind(content).defer();
    }
    return element;
},
wrap:function(element,wrapper,attributes){
    element=$(element);
    if(Object.isElement(wrapper))
        $(wrapper).writeAttribute(attributes||{});
    else if(Object.isString(wrapper))wrapper=new Element(wrapper,attributes);else wrapper=new Element('div',wrapper);
    if(element.parentNode)
        element.parentNode.replaceChild(wrapper,element);
    wrapper.appendChild(element);
    return wrapper;
},
inspect:function(element){
    element=$(element);
    var result='<'+element.tagName.toLowerCase();
    $H({
        'id':'id',
        'className':'class'
    }).each(function(pair){
        var property=pair.first(),attribute=pair.last(),value=(element[property]||'').toString();
        if(value)result+=' '+attribute+'='+value.inspect(true);
    });
    return result+'>';
},
recursivelyCollect:function(element,property,maximumLength){
    element=$(element);
    maximumLength=maximumLength||-1;
    var elements=[];
    while(element=element[property]){
        if(element.nodeType==1)
            elements.push(Element.extend(element));
        if(elements.length==maximumLength)
            break;
    }
    return elements;
},
ancestors:function(element){
    return Element.recursivelyCollect(element,'parentNode');
},
descendants:function(element){
    return Element.select(element,"*");
},
firstDescendant:function(element){
    element=$(element).firstChild;
    while(element&&element.nodeType!=1)element=element.nextSibling;
    return $(element);
},
immediateDescendants:function(element){
    var results=[],child=$(element).firstChild;
    while(child){
        if(child.nodeType===1){
            results.push(Element.extend(child));
        }
        child=child.nextSibling;
    }
    return results;
},
previousSiblings:function(element,maximumLength){
    return Element.recursivelyCollect(element,'previousSibling');
},
nextSiblings:function(element){
    return Element.recursivelyCollect(element,'nextSibling');
},
siblings:function(element){
    element=$(element);
    return Element.previousSiblings(element).reverse().concat(Element.nextSiblings(element));
},
match:function(element,selector){
    element=$(element);
    if(Object.isString(selector))
        return Prototype.Selector.match(element,selector);
    return selector.match(element);
},
up:function(element,expression,index){
    element=$(element);
    if(arguments.length==1)return $(element.parentNode);
    var ancestors=Element.ancestors(element);
    return Object.isNumber(expression)?ancestors[expression]:Prototype.Selector.find(ancestors,expression,index);
},
down:function(element,expression,index){
    element=$(element);
    if(arguments.length==1)return Element.firstDescendant(element);
    return Object.isNumber(expression)?Element.descendants(element)[expression]:Element.select(element,expression)[index||0];
},
previous:function(element,expression,index){
    element=$(element);
    if(Object.isNumber(expression))index=expression,expression=false;
    if(!Object.isNumber(index))index=0;
    if(expression){
        return Prototype.Selector.find(element.previousSiblings(),expression,index);
    }else{
        return element.recursivelyCollect("previousSibling",index+1)[index];
    }
},
next:function(element,expression,index){
    element=$(element);
    if(Object.isNumber(expression))index=expression,expression=false;
    if(!Object.isNumber(index))index=0;
    if(expression){
        return Prototype.Selector.find(element.nextSiblings(),expression,index);
    }else{
        var maximumLength=Object.isNumber(index)?index+1:1;
        return element.recursivelyCollect("nextSibling",index+1)[index];
    }
},
select:function(element){
    element=$(element);
    var expressions=Array.prototype.slice.call(arguments,1).join(', ');
    return Prototype.Selector.select(expressions,element);
},
adjacent:function(element){
    element=$(element);
    var expressions=Array.prototype.slice.call(arguments,1).join(', ');
    return Prototype.Selector.select(expressions,element.parentNode).without(element);
},
identify:function(element){
    element=$(element);
    var id=Element.readAttribute(element,'id');
    if(id)return id;
    do{
        id='anonymous_element_'+Element.idCounter++
    }while($(id));
    Element.writeAttribute(element,'id',id);
    return id;
},
readAttribute:function(element,name){
    element=$(element);
    if(Prototype.Browser.IE){
        var t=Element._attributeTranslations.read;
        if(t.values[name])return t.values[name](element,name);
        if(t.names[name])name=t.names[name];
        if(name.include(':')){
            return(!element.attributes||!element.attributes[name])?null:element.attributes[name].value;
        }
    }
return element.getAttribute(name);
},
writeAttribute:function(element,name,value){
    element=$(element);
    var attributes={},t=Element._attributeTranslations.write;
    if(typeof name=='object')attributes=name;else attributes[name]=Object.isUndefined(value)?true:value;
    for(var attr in attributes){
        name=t.names[attr]||attr;
        value=attributes[attr];
        if(t.values[attr])name=t.values[attr](element,value);
        if(value===false||value===null)
            element.removeAttribute(name);
        else if(value===true)
            element.setAttribute(name,name);else element.setAttribute(name,value);
    }
    return element;
},
getHeight:function(element){
    return Element.getDimensions(element).height;
},
getWidth:function(element){
    return Element.getDimensions(element).width;
},
classNames:function(element){
    return new Element.ClassNames(element);
},
hasClassName:function(element,className){
    if(!(element=$(element)))return;
    var elementClassName=element.className;
    return(elementClassName.length>0&&(elementClassName==className||new RegExp("(^|\\s)"+className+"(\\s|$)").test(elementClassName)));
},
addClassName:function(element,className){
    if(!(element=$(element)))return;
    if(!Element.hasClassName(element,className))
        element.className+=(element.className?' ':'')+className;
    return element;
},
removeClassName:function(element,className){
    if(!(element=$(element)))return;
    element.className=element.className.replace(new RegExp("(^|\\s+)"+className+"(\\s+|$)"),' ').strip();
    return element;
},
toggleClassName:function(element,className){
    if(!(element=$(element)))return;
    return Element[Element.hasClassName(element,className)?'removeClassName':'addClassName'](element,className);
},
cleanWhitespace:function(element){
    element=$(element);
    var node=element.firstChild;
    while(node){
        var nextNode=node.nextSibling;
        if(node.nodeType==3&&!/\S/.test(node.nodeValue))
            element.removeChild(node);
        node=nextNode;
    }
    return element;
},
empty:function(element){
    return $(element).innerHTML.blank();
},
descendantOf:function(element,ancestor){
    element=$(element),ancestor=$(ancestor);
    if(element.compareDocumentPosition)
        return(element.compareDocumentPosition(ancestor)&8)===8;
    if(ancestor.contains)
        return ancestor.contains(element)&&ancestor!==element;
    while(element=element.parentNode)
        if(element==ancestor)return true;
    return false;
},
scrollTo:function(element){
    element=$(element);
    var pos=Element.cumulativeOffset(element);
    window.scrollTo(pos[0],pos[1]);
    return element;
},
getStyle:function(element,style){
    element=$(element);
    style=style=='float'?'cssFloat':style.camelize();
    var value=element.style[style];
    if(!value||value=='auto'){
        var css=document.defaultView.getComputedStyle(element,null);
        value=css?css[style]:null;
    }
    if(style=='opacity')return value?parseFloat(value):1.0;
    return value=='auto'?null:value;
},
getOpacity:function(element){
    return $(element).getStyle('opacity');
},
setStyle:function(element,styles){
    element=$(element);
    var elementStyle=element.style,match;
    if(Object.isString(styles)){
        element.style.cssText+=';'+styles;
        return styles.include('opacity')?element.setOpacity(styles.match(/opacity:\s*(\d?\.?\d*)/)[1]):element;
    }
    for(var property in styles)
        if(property=='opacity')element.setOpacity(styles[property]);else
            elementStyle[(property=='float'||property=='cssFloat')?(Object.isUndefined(elementStyle.styleFloat)?'cssFloat':'styleFloat'):property]=styles[property];return element;
},
setOpacity:function(element,value){
    element=$(element);
    element.style.opacity=(value==1||value==='')?'':(value<0.00001)?0:value;
    return element;
},
makePositioned:function(element){
    element=$(element);
    var pos=Element.getStyle(element,'position');
    if(pos=='static'||!pos){
        element._madePositioned=true;
        element.style.position='relative';
        if(Prototype.Browser.Opera){
            element.style.top=0;
            element.style.left=0;
        }
    }
return element;
},
undoPositioned:function(element){
    element=$(element);
    if(element._madePositioned){
        element._madePositioned=undefined;
        element.style.position=element.style.top=element.style.left=element.style.bottom=element.style.right='';
    }
    return element;
},
makeClipping:function(element){
    element=$(element);
    if(element._overflow)return element;
    element._overflow=Element.getStyle(element,'overflow')||'auto';
    if(element._overflow!=='hidden')
        element.style.overflow='hidden';
    return element;
},
undoClipping:function(element){
    element=$(element);
    if(!element._overflow)return element;
    element.style.overflow=element._overflow=='auto'?'':element._overflow;
    element._overflow=null;
    return element;
},
clonePosition:function(element,source){
    var options=Object.extend({
        setLeft:true,
        setTop:true,
        setWidth:true,
        setHeight:true,
        offsetTop:0,
        offsetLeft:0
    },arguments[2]||{});
    source=$(source);
    var p=Element.viewportOffset(source),delta=[0,0],parent=null;
    element=$(element);
    if(Element.getStyle(element,'position')=='absolute'){
        parent=Element.getOffsetParent(element);
        delta=Element.viewportOffset(parent);
    }
    if(parent==document.body){
        delta[0]-=document.body.offsetLeft;
        delta[1]-=document.body.offsetTop;
    }
    if(options.setLeft)element.style.left=(p[0]-delta[0]+options.offsetLeft)+'px';
    if(options.setTop)element.style.top=(p[1]-delta[1]+options.offsetTop)+'px';
    if(options.setWidth)element.style.width=source.offsetWidth+'px';
    if(options.setHeight)element.style.height=source.offsetHeight+'px';
    return element;
}
};

Object.extend(Element.Methods,{
    getElementsBySelector:Element.Methods.select,
    childElements:Element.Methods.immediateDescendants
    });
Element._attributeTranslations={
    write:{
        names:{
            className:'class',
            htmlFor:'for'
        },
        values:{}
}
};

if(Prototype.Browser.Opera){
    Element.Methods.getStyle=Element.Methods.getStyle.wrap(function(proceed,element,style){
        switch(style){
            case'height':case'width':
                if(!Element.visible(element))return null;
                var dim=parseInt(proceed(element,style),10);
                if(dim!==element['offset'+style.capitalize()])
                return dim+'px';
            var properties;
            if(style==='height'){
                properties=['border-top-width','padding-top','padding-bottom','border-bottom-width'];
            }
            else{
                properties=['border-left-width','padding-left','padding-right','border-right-width'];
            }
            return properties.inject(dim,function(memo,property){
                var val=proceed(element,property);
                return val===null?memo:memo-parseInt(val,10);
            })+'px';
            default:
                return proceed(element,style);
        }
    });
Element.Methods.readAttribute=Element.Methods.readAttribute.wrap(function(proceed,element,attribute){
    if(attribute==='title')return element.title;
    return proceed(element,attribute);
});
}
else if(Prototype.Browser.IE){
    Element.Methods.getStyle=function(element,style){
        element=$(element);
        style=(style=='float'||style=='cssFloat')?'styleFloat':style.camelize();
        var value=element.style[style];
        if(!value&&element.currentStyle)value=element.currentStyle[style];
        if(style=='opacity'){
            if(value=(element.getStyle('filter')||'').match(/alpha\(opacity=(.*)\)/))
                if(value[1])return parseFloat(value[1])/100;
            return 1.0;
        }
        if(value=='auto'){
            if((style=='width'||style=='height')&&(element.getStyle('display')!='none'))
                return element['offset'+style.capitalize()]+'px';
            return null;
        }
        return value;
    };

    Element.Methods.setOpacity=function(element,value){
        function stripAlpha(filter){
            return filter.replace(/alpha\([^\)]*\)/gi,'');
        }
        element=$(element);
        var currentStyle=element.currentStyle;
        if((currentStyle&&!currentStyle.hasLayout)||(!currentStyle&&element.style.zoom=='normal'))
            element.style.zoom=1;
        var filter=element.getStyle('filter'),style=element.style;
        if(value==1||value===''){
            (filter=stripAlpha(filter))?style.filter=filter:style.removeAttribute('filter');
            return element;
        }else if(value<0.00001)value=0;
        style.filter=stripAlpha(filter)+'alpha(opacity='+(value*100)+')';
        return element;
    };

    Element._attributeTranslations=(function(){
        var classProp='className',forProp='for',el=document.createElement('div');
        el.setAttribute(classProp,'x');
        if(el.className!=='x'){
            el.setAttribute('class','x');
            if(el.className==='x'){
                classProp='class';
            }
        }
    el=null;
    el=document.createElement('label');
        el.setAttribute(forProp,'x');
        if(el.htmlFor!=='x'){
        el.setAttribute('htmlFor','x');
        if(el.htmlFor==='x'){
            forProp='htmlFor';
        }
    }
    el=null;
    return{
        read:{
            names:{
                'class':classProp,
                'className':classProp,
                'for':forProp,
                'htmlFor':forProp
            },
            values:{
                _getAttr:function(element,attribute){
                    return element.getAttribute(attribute);
                },
                _getAttr2:function(element,attribute){
                    return element.getAttribute(attribute,2);
                },
                _getAttrNode:function(element,attribute){
                    var node=element.getAttributeNode(attribute);
                    return node?node.value:"";
                },
                _getEv:(function(){
                    var el=document.createElement('div'),f;
                    el.onclick=Prototype.emptyFunction;
                    var value=el.getAttribute('onclick');
                    if(String(value).indexOf('{')>-1){
                        f=function(element,attribute){
                            attribute=element.getAttribute(attribute);
                            if(!attribute)return null;
                            attribute=attribute.toString();
                            attribute=attribute.split('{')[1];
                            attribute=attribute.split('}')[0];
                            return attribute.strip();
                        };

                }
                else if(value===''){
                    f=function(element,attribute){
                        attribute=element.getAttribute(attribute);
                        if(!attribute)return null;
                        return attribute.strip();
                    };

                }
                el=null;
                return f;
            })(),
        _flag:function(element,attribute){
            return $(element).hasAttribute(attribute)?attribute:null;
        },
        style:function(element){
            return element.style.cssText.toLowerCase();
        },
        title:function(element){
            return element.title;
        }
    }
    }
}
})();
Element._attributeTranslations.write={
    names:Object.extend({
        cellpadding:'cellPadding',
        cellspacing:'cellSpacing'
    },Element._attributeTranslations.read.names),
    values:{
        checked:function(element,value){
            element.checked=!!value;
        },
        style:function(element,value){
            element.style.cssText=value?value:'';
        }
    }
};

Element._attributeTranslations.has={};

$w('colSpan rowSpan vAlign dateTime accessKey tabIndex '+'encType maxLength readOnly longDesc frameBorder').each(function(attr){
    Element._attributeTranslations.write.names[attr.toLowerCase()]=attr;
    Element._attributeTranslations.has[attr.toLowerCase()]=attr;
});
(function(v){
    Object.extend(v,{
        href:v._getAttr2,
        src:v._getAttr2,
        type:v._getAttr,
        action:v._getAttrNode,
        disabled:v._flag,
        checked:v._flag,
        readonly:v._flag,
        multiple:v._flag,
        onload:v._getEv,
        onunload:v._getEv,
        onclick:v._getEv,
        ondblclick:v._getEv,
        onmousedown:v._getEv,
        onmouseup:v._getEv,
        onmouseover:v._getEv,
        onmousemove:v._getEv,
        onmouseout:v._getEv,
        onfocus:v._getEv,
        onblur:v._getEv,
        onkeypress:v._getEv,
        onkeydown:v._getEv,
        onkeyup:v._getEv,
        onsubmit:v._getEv,
        onreset:v._getEv,
        onselect:v._getEv,
        onchange:v._getEv
        });
})(Element._attributeTranslations.read.values);
if(Prototype.BrowserFeatures.ElementExtensions){
    (function(){
        function _descendants(element){
            var nodes=element.getElementsByTagName('*'),results=[];
            for(var i=0,node;node=nodes[i];i++)
                if(node.tagName!=="!")
                    results.push(node);return results;
        }
        Element.Methods.down=function(element,expression,index){
            element=$(element);
            if(arguments.length==1)return element.firstDescendant();
            return Object.isNumber(expression)?_descendants(element)[expression]:Element.select(element,expression)[index||0];
        }
    })();
}
}
else if(Prototype.Browser.Gecko&&/rv:1\.8\.0/.test(navigator.userAgent)){
    Element.Methods.setOpacity=function(element,value){
        element=$(element);
        element.style.opacity=(value==1)?0.999999:(value==='')?'':(value<0.00001)?0:value;
        return element;
    };

}
else if(Prototype.Browser.WebKit){
    Element.Methods.setOpacity=function(element,value){
        element=$(element);
        element.style.opacity=(value==1||value==='')?'':(value<0.00001)?0:value;
        if(value==1)
            if(element.tagName.toUpperCase()=='IMG'&&element.width){
                element.width++;
                element.width--;
            }else try{
                var n=document.createTextNode(' ');
                element.appendChild(n);
                element.removeChild(n);
            }catch(e){}
        return element;
    };

}
if('outerHTML'in document.documentElement){
    Element.Methods.replace=function(element,content){
        element=$(element);
        if(content&&content.toElement)content=content.toElement();
        if(Object.isElement(content)){
            element.parentNode.replaceChild(content,element);
            return element;
        }
        content=Object.toHTML(content);
        var parent=element.parentNode,tagName=parent.tagName.toUpperCase();
        if(Element._insertionTranslations.tags[tagName]){
            var nextSibling=element.next(),fragments=Element._getContentFromAnonymousElement(tagName,content.stripScripts());
            parent.removeChild(element);
            if(nextSibling)
                fragments.each(function(node){
                    parent.insertBefore(node,nextSibling)
                    });else
                fragments.each(function(node){
                    parent.appendChild(node)
                    });
        }
        else element.outerHTML=content.stripScripts();
        content.evalScripts.bind(content).defer();
        return element;
    };

}
Element._returnOffset=function(l,t){
    var result=[l,t];
    result.left=l;
    result.top=t;
    return result;
};

Element._getContentFromAnonymousElement=function(tagName,html,force){
    var div=new Element('div'),t=Element._insertionTranslations.tags[tagName];
    var workaround=false;
    if(t)workaround=true;
    else if(force){
        workaround=true;
        t=['','',0];
    }
    if(workaround){
        div.innerHTML='&nbsp;'+t[0]+html+t[1];
        div.removeChild(div.firstChild);
        for(var i=t[2];i--;){
            div=div.firstChild;
        }
        }
else{
    div.innerHTML=html;
}
return $A(div.childNodes);
};

Element._insertionTranslations={
    before:function(element,node){
        element.parentNode.insertBefore(node,element);
    },
    top:function(element,node){
        element.insertBefore(node,element.firstChild);
    },
    bottom:function(element,node){
        element.appendChild(node);
    },
    after:function(element,node){
        element.parentNode.insertBefore(node,element.nextSibling);
    },
    tags:{
        TABLE:['<table>','</table>',1],
        TBODY:['<table><tbody>','</tbody></table>',2],
        TR:['<table><tbody><tr>','</tr></tbody></table>',3],
        TD:['<table><tbody><tr><td>','</td></tr></tbody></table>',4],
        SELECT:['<select>','</select>',1]
        }
    };
(function(){
    var tags=Element._insertionTranslations.tags;
    Object.extend(tags,{
        THEAD:tags.TBODY,
        TFOOT:tags.TBODY,
        TH:tags.TD
        });
})();
Element.Methods.Simulated={
    hasAttribute:function(element,attribute){
        attribute=Element._attributeTranslations.has[attribute]||attribute;
        var node=$(element).getAttributeNode(attribute);
        return!!(node&&node.specified);
    }
};

Element.Methods.ByTag={};

Object.extend(Element,Element.Methods);
(function(div){
    if(!Prototype.BrowserFeatures.ElementExtensions&&div['__proto__']){
        window.HTMLElement={};

        window.HTMLElement.prototype=div['__proto__'];
        Prototype.BrowserFeatures.ElementExtensions=true;
    }
    div=null;
})(document.createElement('div'));
Element.extend=(function(){
    function checkDeficiency(tagName){
        if(typeof window.Element!='undefined'){
            var proto=window.Element.prototype;
            if(proto){
                var id='_'+(Math.random()+'').slice(2),el=document.createElement(tagName);
                proto[id]='x';
                var isBuggy=(el[id]!=='x');
                delete proto[id];
                el=null;
                return isBuggy;
            }
        }
    return false;
}
function extendElementWith(element,methods){
    for(var property in methods){
        var value=methods[property];
        if(Object.isFunction(value)&&!(property in element))
            element[property]=value.methodize();
    }
    }
var HTMLOBJECTELEMENT_PROTOTYPE_BUGGY=checkDeficiency('object');
    if(Prototype.BrowserFeatures.SpecificElementExtensions){
    if(HTMLOBJECTELEMENT_PROTOTYPE_BUGGY){
        return function(element){
            if(element&&typeof element._extendedByPrototype=='undefined'){
                var t=element.tagName;
                if(t&&(/^(?:object|applet|embed)$/i.test(t))){
                    extendElementWith(element,Element.Methods);
                    extendElementWith(element,Element.Methods.Simulated);
                    extendElementWith(element,Element.Methods.ByTag[t.toUpperCase()]);
                }
            }
        return element;
    }
}
return Prototype.K;
}
var Methods={},ByTag=Element.Methods.ByTag;
var extend=Object.extend(function(element){
    if(!element||typeof element._extendedByPrototype!='undefined'||element.nodeType!=1||element==window)return element;
    var methods=Object.clone(Methods),tagName=element.tagName.toUpperCase();
    if(ByTag[tagName])Object.extend(methods,ByTag[tagName]);
    extendElementWith(element,methods);
    element._extendedByPrototype=Prototype.emptyFunction;
    return element;
},{
    refresh:function(){
        if(!Prototype.BrowserFeatures.ElementExtensions){
            Object.extend(Methods,Element.Methods);
            Object.extend(Methods,Element.Methods.Simulated);
        }
    }
});
extend.refresh();
return extend;
})();
if(document.documentElement.hasAttribute){
    Element.hasAttribute=function(element,attribute){
        return element.hasAttribute(attribute);
    };

}
else{
    Element.hasAttribute=Element.Methods.Simulated.hasAttribute;
}
Element.addMethods=function(methods){
    var F=Prototype.BrowserFeatures,T=Element.Methods.ByTag;
    if(!methods){
        Object.extend(Form,Form.Methods);
        Object.extend(Form.Element,Form.Element.Methods);
        Object.extend(Element.Methods.ByTag,{
            "FORM":Object.clone(Form.Methods),
            "INPUT":Object.clone(Form.Element.Methods),
            "SELECT":Object.clone(Form.Element.Methods),
            "TEXTAREA":Object.clone(Form.Element.Methods),
            "BUTTON":Object.clone(Form.Element.Methods)
            });
    }
    if(arguments.length==2){
        var tagName=methods;
        methods=arguments[1];
    }
    if(!tagName)Object.extend(Element.Methods,methods||{});
    else{
        if(Object.isArray(tagName))tagName.each(extend);else extend(tagName);
    }
    function extend(tagName){
        tagName=tagName.toUpperCase();
        if(!Element.Methods.ByTag[tagName])
            Element.Methods.ByTag[tagName]={};

        Object.extend(Element.Methods.ByTag[tagName],methods);
    }
    function copy(methods,destination,onlyIfAbsent){
        onlyIfAbsent=onlyIfAbsent||false;
        for(var property in methods){
            var value=methods[property];
            if(!Object.isFunction(value))continue;
            if(!onlyIfAbsent||!(property in destination))
                destination[property]=value.methodize();
        }
        }
function findDOMClass(tagName){
    var klass;
    var trans={
        "OPTGROUP":"OptGroup",
        "TEXTAREA":"TextArea",
        "P":"Paragraph",
        "FIELDSET":"FieldSet",
        "UL":"UList",
        "OL":"OList",
        "DL":"DList",
        "DIR":"Directory",
        "H1":"Heading",
        "H2":"Heading",
        "H3":"Heading",
        "H4":"Heading",
        "H5":"Heading",
        "H6":"Heading",
        "Q":"Quote",
        "INS":"Mod",
        "DEL":"Mod",
        "A":"Anchor",
        "IMG":"Image",
        "CAPTION":"TableCaption",
        "COL":"TableCol",
        "COLGROUP":"TableCol",
        "THEAD":"TableSection",
        "TFOOT":"TableSection",
        "TBODY":"TableSection",
        "TR":"TableRow",
        "TH":"TableCell",
        "TD":"TableCell",
        "FRAMESET":"FrameSet",
        "IFRAME":"IFrame"
    };

    if(trans[tagName])klass='HTML'+trans[tagName]+'Element';
    if(window[klass])return window[klass];
    klass='HTML'+tagName+'Element';
    if(window[klass])return window[klass];
    klass='HTML'+tagName.capitalize()+'Element';
    if(window[klass])return window[klass];
    var element=document.createElement(tagName),proto=element['__proto__']||element.constructor.prototype;
    element=null;
    return proto;
}
var elementPrototype=window.HTMLElement?HTMLElement.prototype:Element.prototype;
if(F.ElementExtensions){
    copy(Element.Methods,elementPrototype);
    copy(Element.Methods.Simulated,elementPrototype,true);
}
if(F.SpecificElementExtensions){
    for(var tag in Element.Methods.ByTag){
        var klass=findDOMClass(tag);
        if(Object.isUndefined(klass))continue;
        copy(T[tag],klass.prototype);
    }
    }
Object.extend(Element,Element.Methods);
delete Element.ByTag;
if(Element.extend.refresh)Element.extend.refresh();
Element.cache={};

};

document.viewport={
    getDimensions:function(){
        return{
            width:this.getWidth(),
            height:this.getHeight()
            };

},
getScrollOffsets:function(){
    return Element._returnOffset(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop);
}
};
(function(viewport){
    var B=Prototype.Browser,doc=document,element,property={};

    function getRootElement(){
        if(B.WebKit&&!doc.evaluate)
            return document;
        if(B.Opera&&window.parseFloat(window.opera.version())<9.5)
            return document.body;
        return document.documentElement;
    }
    function define(D){
        if(!element)element=getRootElement();
        property[D]='client'+D;
        viewport['get'+D]=function(){
            return element[property[D]]
            };

        return viewport['get'+D]();
    }
    viewport.getWidth=define.curry('Width');
    viewport.getHeight=define.curry('Height');
})(document.viewport);
Element.Storage={
    UID:1
};

Element.addMethods({
    getStorage:function(element){
        if(!(element=$(element)))return;
        var uid;
        if(element===window){
            uid=0;
        }else{
            if(typeof element._prototypeUID==="undefined")
                element._prototypeUID=Element.Storage.UID++;
            uid=element._prototypeUID;
        }
        if(!Element.Storage[uid])
            Element.Storage[uid]=$H();
        return Element.Storage[uid];
    },
    store:function(element,key,value){
        if(!(element=$(element)))return;
        if(arguments.length===2){
            Element.getStorage(element).update(key);
        }else{
            Element.getStorage(element).set(key,value);
        }
        return element;
    },
    retrieve:function(element,key,defaultValue){
        if(!(element=$(element)))return;
        var hash=Element.getStorage(element),value=hash.get(key);
        if(Object.isUndefined(value)){
            hash.set(key,defaultValue);
            value=defaultValue;
        }
        return value;
    },
    clone:function(element,deep){
        if(!(element=$(element)))return;
        var clone=element.cloneNode(deep);
        clone._prototypeUID=void 0;
        if(deep){
            var descendants=Element.select(clone,'*'),i=descendants.length;
            while(i--){
                descendants[i]._prototypeUID=void 0;
            }
        }
    return Element.extend(clone);
},
purge:function(element){
    if(!(element=$(element)))return;
    var purgeElement=Element._purgeElement;
    purgeElement(element);
    var descendants=element.getElementsByTagName('*'),i=descendants.length;
    while(i--)purgeElement(descendants[i]);
    return null;
}
});
(function(){
    function toDecimal(pctString){
        var match=pctString.match(/^(\d+)%?$/i);
        if(!match)return null;
        return(Number(match[1])/100);
    }
    function getPixelValue(value,property,context){
        var element=null;
        if(Object.isElement(value)){
            element=value;
            value=element.getStyle(property);
        }
        if(value===null){
            return null;
        }
        if((/^(?:-)?\d+(\.\d+)?(px)?$/i).test(value)){
            return window.parseFloat(value);
        }
        var isPercentage=value.include('%'),isViewport=(context===document.viewport);
        if(/\d/.test(value)&&element&&element.runtimeStyle&&!(isPercentage&&isViewport)){
            var style=element.style.left,rStyle=element.runtimeStyle.left;
            element.runtimeStyle.left=element.currentStyle.left;
            element.style.left=value||0;
            value=element.style.pixelLeft;
            element.style.left=style;
            element.runtimeStyle.left=rStyle;
            return value;
        }
        if(element&&isPercentage){
            context=context||element.parentNode;
            var decimal=toDecimal(value);
            var whole=null;
            var position=element.getStyle('position');
            var isHorizontal=property.include('left')||property.include('right')||property.include('width');
            var isVertical=property.include('top')||property.include('bottom')||property.include('height');
            if(context===document.viewport){
                if(isHorizontal){
                    whole=document.viewport.getWidth();
                }else if(isVertical){
                    whole=document.viewport.getHeight();
                }
            }else{
            if(isHorizontal){
                whole=$(context).measure('width');
            }else if(isVertical){
                whole=$(context).measure('height');
            }
        }
    return(whole===null)?0:whole*decimal;
}
return 0;
}
function toCSSPixels(number){
    if(Object.isString(number)&&number.endsWith('px')){
        return number;
    }
    return number+'px';
}
function isDisplayed(element){
    var originalElement=element;
    while(element&&element.parentNode){
        var display=element.getStyle('display');
        if(display==='none'){
            return false;
        }
        element=$(element.parentNode);
    }
    return true;
}
var hasLayout=Prototype.K;
if('currentStyle'in document.documentElement){
    hasLayout=function(element){
        if(!element.currentStyle.hasLayout){
            element.style.zoom=1;
        }
        return element;
    };

}
function cssNameFor(key){
    if(key.include('border'))key=key+'-width';
    return key.camelize();
}
Element.Layout=Class.create(Hash,{
    initialize:function($super,element,preCompute){
        $super();
        this.element=$(element);
        Element.Layout.PROPERTIES.each(function(property){
            this._set(property,null);
        },this);
        if(preCompute){
            this._preComputing=true;
            this._begin();
            Element.Layout.PROPERTIES.each(this._compute,this);
            this._end();
            this._preComputing=false;
        }
    },
_set:function(property,value){
    return Hash.prototype.set.call(this,property,value);
},
set:function(property,value){
    throw"Properties of Element.Layout are read-only.";
},
get:function($super,property){
    var value=$super(property);
    return value===null?this._compute(property):value;
},
_begin:function(){
    if(this._prepared)return;
    var element=this.element;
    if(isDisplayed(element)){
        this._prepared=true;
        return;
    }
    var originalStyles={
        position:element.style.position||'',
        width:element.style.width||'',
        visibility:element.style.visibility||'',
        display:element.style.display||''
        };

    element.store('prototype_original_styles',originalStyles);
    var position=element.getStyle('position'),width=element.getStyle('width');
    if(width==="0px"||width===null){
        element.style.display='block';
        width=element.getStyle('width');
    }
    var context=(position==='fixed')?document.viewport:element.parentNode;
    element.setStyle({
        position:'absolute',
        visibility:'hidden',
        display:'block'
    });
    var positionedWidth=element.getStyle('width');
    var newWidth;
    if(width&&(positionedWidth===width)){
        newWidth=getPixelValue(element,'width',context);
    }else if(position==='absolute'||position==='fixed'){
        newWidth=getPixelValue(element,'width',context);
    }else{
        var parent=element.parentNode,pLayout=$(parent).getLayout();
        newWidth=pLayout.get('width')-
        this.get('margin-left')-
        this.get('border-left')-
        this.get('padding-left')-
        this.get('padding-right')-
        this.get('border-right')-
        this.get('margin-right');
    }
    element.setStyle({
        width:newWidth+'px'
        });
    this._prepared=true;
},
_end:function(){
    var element=this.element;
    var originalStyles=element.retrieve('prototype_original_styles');
    element.store('prototype_original_styles',null);
    element.setStyle(originalStyles);
    this._prepared=false;
},
_compute:function(property){
    var COMPUTATIONS=Element.Layout.COMPUTATIONS;
    if(!(property in COMPUTATIONS)){
        throw"Property not found.";
    }
    return this._set(property,COMPUTATIONS[property].call(this,this.element));
},
toObject:function(){
    var args=$A(arguments);
    var keys=(args.length===0)?Element.Layout.PROPERTIES:args.join(' ').split(' ');
    var obj={};

    keys.each(function(key){
        if(!Element.Layout.PROPERTIES.include(key))return;
        var value=this.get(key);
        if(value!=null)obj[key]=value;
    },this);
    return obj;
},
toHash:function(){
    var obj=this.toObject.apply(this,arguments);
    return new Hash(obj);
},
toCSS:function(){
    var args=$A(arguments);
    var keys=(args.length===0)?Element.Layout.PROPERTIES:args.join(' ').split(' ');
    var css={};

    keys.each(function(key){
        if(!Element.Layout.PROPERTIES.include(key))return;
        if(Element.Layout.COMPOSITE_PROPERTIES.include(key))return;
        var value=this.get(key);
        if(value!=null)css[cssNameFor(key)]=value+'px';
    },this);
    return css;
},
inspect:function(){
    return"#<Element.Layout>";
}
});
Object.extend(Element.Layout,{
    PROPERTIES:$w('height width top left right bottom border-left border-right border-top border-bottom padding-left padding-right padding-top padding-bottom margin-top margin-bottom margin-left margin-right padding-box-width padding-box-height border-box-width border-box-height margin-box-width margin-box-height'),
    COMPOSITE_PROPERTIES:$w('padding-box-width padding-box-height margin-box-width margin-box-height border-box-width border-box-height'),
    COMPUTATIONS:{
        'height':function(element){
            if(!this._preComputing)this._begin();
            var bHeight=this.get('border-box-height');
            if(bHeight<=0){
                if(!this._preComputing)this._end();
                return 0;
            }
            var bTop=this.get('border-top'),bBottom=this.get('border-bottom');
            var pTop=this.get('padding-top'),pBottom=this.get('padding-bottom');
            if(!this._preComputing)this._end();
            return bHeight-bTop-bBottom-pTop-pBottom;
        },
        'width':function(element){
            if(!this._preComputing)this._begin();
            var bWidth=this.get('border-box-width');
            if(bWidth<=0){
                if(!this._preComputing)this._end();
                return 0;
            }
            var bLeft=this.get('border-left'),bRight=this.get('border-right');
            var pLeft=this.get('padding-left'),pRight=this.get('padding-right');
            if(!this._preComputing)this._end();
            return bWidth-bLeft-bRight-pLeft-pRight;
        },
        'padding-box-height':function(element){
            var height=this.get('height'),pTop=this.get('padding-top'),pBottom=this.get('padding-bottom');
            return height+pTop+pBottom;
        },
        'padding-box-width':function(element){
            var width=this.get('width'),pLeft=this.get('padding-left'),pRight=this.get('padding-right');
            return width+pLeft+pRight;
        },
        'border-box-height':function(element){
            if(!this._preComputing)this._begin();
            var height=element.offsetHeight;
            if(!this._preComputing)this._end();
            return height;
        },
        'border-box-width':function(element){
            if(!this._preComputing)this._begin();
            var width=element.offsetWidth;
            if(!this._preComputing)this._end();
            return width;
        },
        'margin-box-height':function(element){
            var bHeight=this.get('border-box-height'),mTop=this.get('margin-top'),mBottom=this.get('margin-bottom');
            if(bHeight<=0)return 0;
            return bHeight+mTop+mBottom;
        },
        'margin-box-width':function(element){
            var bWidth=this.get('border-box-width'),mLeft=this.get('margin-left'),mRight=this.get('margin-right');
            if(bWidth<=0)return 0;
            return bWidth+mLeft+mRight;
        },
        'top':function(element){
            var offset=element.positionedOffset();
            return offset.top;
        },
        'bottom':function(element){
            var offset=element.positionedOffset(),parent=element.getOffsetParent(),pHeight=parent.measure('height');
            var mHeight=this.get('border-box-height');
            return pHeight-mHeight-offset.top;
        },
        'left':function(element){
            var offset=element.positionedOffset();
            return offset.left;
        },
        'right':function(element){
            var offset=element.positionedOffset(),parent=element.getOffsetParent(),pWidth=parent.measure('width');
            var mWidth=this.get('border-box-width');
            return pWidth-mWidth-offset.left;
        },
        'padding-top':function(element){
            return getPixelValue(element,'paddingTop');
        },
        'padding-bottom':function(element){
            return getPixelValue(element,'paddingBottom');
        },
        'padding-left':function(element){
            return getPixelValue(element,'paddingLeft');
        },
        'padding-right':function(element){
            return getPixelValue(element,'paddingRight');
        },
        'border-top':function(element){
            return getPixelValue(element,'borderTopWidth');
        },
        'border-bottom':function(element){
            return getPixelValue(element,'borderBottomWidth');
        },
        'border-left':function(element){
            return getPixelValue(element,'borderLeftWidth');
        },
        'border-right':function(element){
            return getPixelValue(element,'borderRightWidth');
        },
        'margin-top':function(element){
            return getPixelValue(element,'marginTop');
        },
        'margin-bottom':function(element){
            return getPixelValue(element,'marginBottom');
        },
        'margin-left':function(element){
            return getPixelValue(element,'marginLeft');
        },
        'margin-right':function(element){
            return getPixelValue(element,'marginRight');
        }
    }
});
if('getBoundingClientRect'in document.documentElement){
    Object.extend(Element.Layout.COMPUTATIONS,{
        'right':function(element){
            var parent=hasLayout(element.getOffsetParent());
            var rect=element.getBoundingClientRect(),pRect=parent.getBoundingClientRect();
            return(pRect.right-rect.right).round();
        },
        'bottom':function(element){
            var parent=hasLayout(element.getOffsetParent());
            var rect=element.getBoundingClientRect(),pRect=parent.getBoundingClientRect();
            return(pRect.bottom-rect.bottom).round();
        }
    });
}
Element.Offset=Class.create({
    initialize:function(left,top){
        this.left=left.round();
        this.top=top.round();
        this[0]=this.left;
        this[1]=this.top;
    },
    relativeTo:function(offset){
        return new Element.Offset(this.left-offset.left,this.top-offset.top);
    },
    inspect:function(){
        return"#<Element.Offset left: #{left} top: #{top}>".interpolate(this);
    },
    toString:function(){
        return"[#{left}, #{top}]".interpolate(this);
    },
    toArray:function(){
        return[this.left,this.top];
    }
});
function getLayout(element,preCompute){
    return new Element.Layout(element,preCompute);
}
function measure(element,property){
    return $(element).getLayout().get(property);
}
function getDimensions(element){
    element=$(element);
    var display=Element.getStyle(element,'display');
    if(display&&display!=='none'){
        return{
            width:element.offsetWidth,
            height:element.offsetHeight
            };

}
var style=element.style;
var originalStyles={
    visibility:style.visibility,
    position:style.position,
    display:style.display
    };

var newStyles={
    visibility:'hidden',
    display:'block'
};

if(originalStyles.position!=='fixed')
    newStyles.position='absolute';
Element.setStyle(element,newStyles);
var dimensions={
    width:element.offsetWidth,
    height:element.offsetHeight
    };

Element.setStyle(element,originalStyles);
return dimensions;
}
function getOffsetParent(element){
    element=$(element);
    if(isDocument(element)||isDetached(element)||isBody(element)||isHtml(element))
        return $(document.body);
    var isInline=(Element.getStyle(element,'display')==='inline');
    if(!isInline&&element.offsetParent)return $(element.offsetParent);
    while((element=element.parentNode)&&element!==document.body){
        if(Element.getStyle(element,'position')!=='static'){
            return isHtml(element)?$(document.body):$(element);
        }
    }
return $(document.body);
}
function cumulativeOffset(element){
    element=$(element);
    var valueT=0,valueL=0;
    if(element.parentNode){
        do{
            valueT+=element.offsetTop||0;
            valueL+=element.offsetLeft||0;
            element=element.offsetParent;
        }while(element);
    }
    return new Element.Offset(valueL,valueT);
}
function positionedOffset(element){
    element=$(element);
    var layout=element.getLayout();
    var valueT=0,valueL=0;
    do{
        valueT+=element.offsetTop||0;
        valueL+=element.offsetLeft||0;
        element=element.offsetParent;
        if(element){
            if(isBody(element))break;
            var p=Element.getStyle(element,'position');
            if(p!=='static')break;
        }
    }while(element);
valueL-=layout.get('margin-top');
valueT-=layout.get('margin-left');
return new Element.Offset(valueL,valueT);
}
function cumulativeScrollOffset(element){
    var valueT=0,valueL=0;
    do{
        valueT+=element.scrollTop||0;
        valueL+=element.scrollLeft||0;
        element=element.parentNode;
    }while(element);
    return new Element.Offset(valueL,valueT);
}
function viewportOffset(forElement){
    element=$(element);
    var valueT=0,valueL=0,docBody=document.body;
    var element=forElement;
    do{
        valueT+=element.offsetTop||0;
        valueL+=element.offsetLeft||0;
        if(element.offsetParent==docBody&&Element.getStyle(element,'position')=='absolute')break;
    }while(element=element.offsetParent);
    element=forElement;
    do{
        if(element!=docBody){
            valueT-=element.scrollTop||0;
            valueL-=element.scrollLeft||0;
        }
    }while(element=element.parentNode);
return new Element.Offset(valueL,valueT);
}
function absolutize(element){
    element=$(element);
    if(Element.getStyle(element,'position')==='absolute'){
        return element;
    }
    var offsetParent=getOffsetParent(element);
    var eOffset=element.viewportOffset(),pOffset=offsetParent.viewportOffset();
    var offset=eOffset.relativeTo(pOffset);
    var layout=element.getLayout();
    element.store('prototype_absolutize_original_styles',{
        left:element.getStyle('left'),
        top:element.getStyle('top'),
        width:element.getStyle('width'),
        height:element.getStyle('height')
        });
    element.setStyle({
        position:'absolute',
        top:offset.top+'px',
        left:offset.left+'px',
        width:layout.get('width')+'px',
        height:layout.get('height')+'px'
        });
    return element;
}
function relativize(element){
    element=$(element);
    if(Element.getStyle(element,'position')==='relative'){
        return element;
    }
    var originalStyles=element.retrieve('prototype_absolutize_original_styles');
    if(originalStyles)element.setStyle(originalStyles);
    return element;
}
if(Prototype.Browser.IE){
    getOffsetParent=getOffsetParent.wrap(function(proceed,element){
        element=$(element);
        if(isDocument(element)||isDetached(element)||isBody(element)||isHtml(element))
            return $(document.body);
        var position=element.getStyle('position');
        if(position!=='static')return proceed(element);
        element.setStyle({
            position:'relative'
        });
        var value=proceed(element);
        element.setStyle({
            position:position
        });
        return value;
    });
    positionedOffset=positionedOffset.wrap(function(proceed,element){
        element=$(element);
        if(!element.parentNode)return new Element.Offset(0,0);
        var position=element.getStyle('position');
        if(position!=='static')return proceed(element);
        var offsetParent=element.getOffsetParent();
        if(offsetParent&&offsetParent.getStyle('position')==='fixed')
            hasLayout(offsetParent);
        element.setStyle({
            position:'relative'
        });
        var value=proceed(element);
        element.setStyle({
            position:position
        });
        return value;
    });
}else if(Prototype.Browser.Webkit){
    cumulativeOffset=function(element){
        element=$(element);
        var valueT=0,valueL=0;
        do{
            valueT+=element.offsetTop||0;
            valueL+=element.offsetLeft||0;
            if(element.offsetParent==document.body)
                if(Element.getStyle(element,'position')=='absolute')break;
            element=element.offsetParent;
        }while(element);
        return new Element.Offset(valueL,valueT);
    };

}
Element.addMethods({
    getLayout:getLayout,
    measure:measure,
    getDimensions:getDimensions,
    getOffsetParent:getOffsetParent,
    cumulativeOffset:cumulativeOffset,
    positionedOffset:positionedOffset,
    cumulativeScrollOffset:cumulativeScrollOffset,
    viewportOffset:viewportOffset,
    absolutize:absolutize,
    relativize:relativize
});
function isBody(element){
    return element.nodeName.toUpperCase()==='BODY';
}
function isHtml(element){
    return element.nodeName.toUpperCase()==='HTML';
}
function isDocument(element){
    return element.nodeType===Node.DOCUMENT_NODE;
}
function isDetached(element){
    return element!==document.body&&!Element.descendantOf(element,document.body);
}
if('getBoundingClientRect'in document.documentElement){
    Element.addMethods({
        viewportOffset:function(element){
            element=$(element);
            if(isDetached(element))return new Element.Offset(0,0);
            var rect=element.getBoundingClientRect(),docEl=document.documentElement;
            return new Element.Offset(rect.left-docEl.clientLeft,rect.top-docEl.clientTop);
        }
    });
}
})();
window.$$=function(){
    var expression=$A(arguments).join(', ');
    return Prototype.Selector.select(expression,document);
};

Prototype.Selector=(function(){
    function select(){
        throw new Error('Method "Prototype.Selector.select" must be defined.');
    }
    function match(){
        throw new Error('Method "Prototype.Selector.match" must be defined.');
    }
    function find(elements,expression,index){
        index=index||0;
        var match=Prototype.Selector.match,length=elements.length,matchIndex=0,i;
        for(i=0;i<length;i++){
            if(match(elements[i],expression)&&index==matchIndex++){
                return Element.extend(elements[i]);
            }
        }
        }
function extendElements(elements){
    for(var i=0,length=elements.length;i<length;i++){
        Element.extend(elements[i]);
    }
    return elements;
}
var K=Prototype.K;
return{
    select:select,
    match:match,
    find:find,
    extendElements:(Element.extend===K)?K:extendElements,
    extendElement:Element.extend
    };

})();
Prototype._original_property=window.Sizzle;
(function(){
    var chunker=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,done=0,toString=Object.prototype.toString,hasDuplicate=false,baseHasDuplicate=true;
    [0,0].sort(function(){
        baseHasDuplicate=false;
        return 0;
    });
    var Sizzle=function(selector,context,results,seed){
        results=results||[];
        var origContext=context=context||document;
        if(context.nodeType!==1&&context.nodeType!==9){
            return[];
        }
        if(!selector||typeof selector!=="string"){
            return results;
        }
        var parts=[],m,set,checkSet,check,mode,extra,prune=true,contextXML=isXML(context),soFar=selector;
        while((chunker.exec(""),m=chunker.exec(soFar))!==null){
            soFar=m[3];
            parts.push(m[1]);
            if(m[2]){
                extra=m[3];
                break;
            }
        }
    if(parts.length>1&&origPOS.exec(selector)){
        if(parts.length===2&&Expr.relative[parts[0]]){
            set=posProcess(parts[0]+parts[1],context);
        }else{
            set=Expr.relative[parts[0]]?[context]:Sizzle(parts.shift(),context);
            while(parts.length){
                selector=parts.shift();
                if(Expr.relative[selector])
                    selector+=parts.shift();
                set=posProcess(selector,set);
            }
        }
    }else{
    if(!seed&&parts.length>1&&context.nodeType===9&&!contextXML&&Expr.match.ID.test(parts[0])&&!Expr.match.ID.test(parts[parts.length-1])){
        var ret=Sizzle.find(parts.shift(),context,contextXML);
        context=ret.expr?Sizzle.filter(ret.expr,ret.set)[0]:ret.set[0];
    }
    if(context){
        var ret=seed?{
            expr:parts.pop(),
            set:makeArray(seed)
            }:Sizzle.find(parts.pop(),parts.length===1&&(parts[0]==="~"||parts[0]==="+")&&context.parentNode?context.parentNode:context,contextXML);
        set=ret.expr?Sizzle.filter(ret.expr,ret.set):ret.set;
        if(parts.length>0){
            checkSet=makeArray(set);
        }else{
            prune=false;
        }
        while(parts.length){
            var cur=parts.pop(),pop=cur;
            if(!Expr.relative[cur]){
                cur="";
            }else{
                pop=parts.pop();
            }
            if(pop==null){
                pop=context;
            }
            Expr.relative[cur](checkSet,pop,contextXML);
        }
    }else{
    checkSet=parts=[];
}
}
if(!checkSet){
    checkSet=set;
}
if(!checkSet){
    throw"Syntax error, unrecognized expression: "+(cur||selector);
}
if(toString.call(checkSet)==="[object Array]"){
    if(!prune){
        results.push.apply(results,checkSet);
    }else if(context&&context.nodeType===1){
        for(var i=0;checkSet[i]!=null;i++){
            if(checkSet[i]&&(checkSet[i]===true||checkSet[i].nodeType===1&&contains(context,checkSet[i]))){
                results.push(set[i]);
            }
        }
        }else{
    for(var i=0;checkSet[i]!=null;i++){
        if(checkSet[i]&&checkSet[i].nodeType===1){
            results.push(set[i]);
        }
    }
    }
}else{
    makeArray(checkSet,results);
}
if(extra){
    Sizzle(extra,origContext,results,seed);
    Sizzle.uniqueSort(results);
}
return results;
};

Sizzle.uniqueSort=function(results){
    if(sortOrder){
        hasDuplicate=baseHasDuplicate;
        results.sort(sortOrder);
        if(hasDuplicate){
            for(var i=1;i<results.length;i++){
                if(results[i]===results[i-1]){
                    results.splice(i--,1);
                }
            }
            }
    }
return results;
};

Sizzle.matches=function(expr,set){
    return Sizzle(expr,null,null,set);
};

Sizzle.find=function(expr,context,isXML){
    var set,match;
    if(!expr){
        return[];
    }
    for(var i=0,l=Expr.order.length;i<l;i++){
        var type=Expr.order[i],match;
        if((match=Expr.leftMatch[type].exec(expr))){
            var left=match[1];
            match.splice(1,1);
            if(left.substr(left.length-1)!=="\\"){
                match[1]=(match[1]||"").replace(/\\/g,"");
                set=Expr.find[type](match,context,isXML);
                if(set!=null){
                    expr=expr.replace(Expr.match[type],"");
                    break;
                }
            }
        }
    }
if(!set){
    set=context.getElementsByTagName("*");
}
return{
    set:set,
    expr:expr
};

};

Sizzle.filter=function(expr,set,inplace,not){
    var old=expr,result=[],curLoop=set,match,anyFound,isXMLFilter=set&&set[0]&&isXML(set[0]);
    while(expr&&set.length){
        for(var type in Expr.filter){
            if((match=Expr.match[type].exec(expr))!=null){
                var filter=Expr.filter[type],found,item;
                anyFound=false;
                if(curLoop==result){
                    result=[];
                }
                if(Expr.preFilter[type]){
                    match=Expr.preFilter[type](match,curLoop,inplace,result,not,isXMLFilter);
                    if(!match){
                        anyFound=found=true;
                    }else if(match===true){
                        continue;
                    }
                }
            if(match){
                for(var i=0;(item=curLoop[i])!=null;i++){
                    if(item){
                        found=filter(item,match,i,curLoop);
                        var pass=not^!!found;
                        if(inplace&&found!=null){
                            if(pass){
                                anyFound=true;
                            }else{
                                curLoop[i]=false;
                            }
                        }else if(pass){
                        result.push(item);
                        anyFound=true;
                    }
                }
                }
        }
    if(found!==undefined){
        if(!inplace){
            curLoop=result;
        }
        expr=expr.replace(Expr.match[type],"");
        if(!anyFound){
            return[];
        }
        break;
    }
}
}
if(expr==old){
    if(anyFound==null){
        throw"Syntax error, unrecognized expression: "+expr;
    }else{
        break;
    }
}
old=expr;
}
return curLoop;
};

var Expr=Sizzle.selectors={
    order:["ID","NAME","TAG"],
    match:{
        ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
        CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
        NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,
        ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
        TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,
        CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
        POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
        PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/
    },
    leftMatch:{},
    attrMap:{
        "class":"className",
        "for":"htmlFor"
    },
    attrHandle:{
        href:function(elem){
            return elem.getAttribute("href");
        }
    },
relative:{
    "+":function(checkSet,part,isXML){
        var isPartStr=typeof part==="string",isTag=isPartStr&&!/\W/.test(part),isPartStrNotTag=isPartStr&&!isTag;
        if(isTag&&!isXML){
            part=part.toUpperCase();
        }
        for(var i=0,l=checkSet.length,elem;i<l;i++){
            if((elem=checkSet[i])){
                while((elem=elem.previousSibling)&&elem.nodeType!==1){}
                checkSet[i]=isPartStrNotTag||elem&&elem.nodeName===part?elem||false:elem===part;
            }
        }
    if(isPartStrNotTag){
        Sizzle.filter(part,checkSet,true);
    }
},
">":function(checkSet,part,isXML){
    var isPartStr=typeof part==="string";
    if(isPartStr&&!/\W/.test(part)){
        part=isXML?part:part.toUpperCase();
        for(var i=0,l=checkSet.length;i<l;i++){
            var elem=checkSet[i];
            if(elem){
                var parent=elem.parentNode;
                checkSet[i]=parent.nodeName===part?parent:false;
            }
        }
        }else{
    for(var i=0,l=checkSet.length;i<l;i++){
        var elem=checkSet[i];
        if(elem){
            checkSet[i]=isPartStr?elem.parentNode:elem.parentNode===part;
        }
    }
if(isPartStr){
    Sizzle.filter(part,checkSet,true);
}
}
},
"":function(checkSet,part,isXML){
    var doneName=done++,checkFn=dirCheck;
    if(!/\W/.test(part)){
        var nodeCheck=part=isXML?part:part.toUpperCase();
        checkFn=dirNodeCheck;
    }
    checkFn("parentNode",part,doneName,checkSet,nodeCheck,isXML);
},
"~":function(checkSet,part,isXML){
    var doneName=done++,checkFn=dirCheck;
    if(typeof part==="string"&&!/\W/.test(part)){
        var nodeCheck=part=isXML?part:part.toUpperCase();
        checkFn=dirNodeCheck;
    }
    checkFn("previousSibling",part,doneName,checkSet,nodeCheck,isXML);
}
},
find:{
    ID:function(match,context,isXML){
        if(typeof context.getElementById!=="undefined"&&!isXML){
            var m=context.getElementById(match[1]);
            return m?[m]:[];
        }
    },
NAME:function(match,context,isXML){
    if(typeof context.getElementsByName!=="undefined"){
        var ret=[],results=context.getElementsByName(match[1]);
        for(var i=0,l=results.length;i<l;i++){
            if(results[i].getAttribute("name")===match[1]){
                ret.push(results[i]);
            }
        }
    return ret.length===0?null:ret;
}
},
TAG:function(match,context){
    return context.getElementsByTagName(match[1]);
}
},
preFilter:{
    CLASS:function(match,curLoop,inplace,result,not,isXML){
        match=" "+match[1].replace(/\\/g,"")+" ";
        if(isXML){
            return match;
        }
        for(var i=0,elem;(elem=curLoop[i])!=null;i++){
            if(elem){
                if(not^(elem.className&&(" "+elem.className+" ").indexOf(match)>=0)){
                    if(!inplace)
                        result.push(elem);
                }else if(inplace){
                    curLoop[i]=false;
                }
            }
        }
return false;
},
ID:function(match){
    return match[1].replace(/\\/g,"");
},
TAG:function(match,curLoop){
    for(var i=0;curLoop[i]===false;i++){}
    return curLoop[i]&&isXML(curLoop[i])?match[1]:match[1].toUpperCase();
},
CHILD:function(match){
    if(match[1]=="nth"){
        var test=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(match[2]=="even"&&"2n"||match[2]=="odd"&&"2n+1"||!/\D/.test(match[2])&&"0n+"+match[2]||match[2]);
        match[2]=(test[1]+(test[2]||1))-0;
        match[3]=test[3]-0;
    }
    match[0]=done++;
    return match;
},
ATTR:function(match,curLoop,inplace,result,not,isXML){
    var name=match[1].replace(/\\/g,"");
    if(!isXML&&Expr.attrMap[name]){
        match[1]=Expr.attrMap[name];
    }
    if(match[2]==="~="){
        match[4]=" "+match[4]+" ";
    }
    return match;
},
PSEUDO:function(match,curLoop,inplace,result,not){
    if(match[1]==="not"){
        if((chunker.exec(match[3])||"").length>1||/^\w/.test(match[3])){
            match[3]=Sizzle(match[3],null,null,curLoop);
        }else{
            var ret=Sizzle.filter(match[3],curLoop,inplace,true^not);
            if(!inplace){
                result.push.apply(result,ret);
            }
            return false;
        }
    }else if(Expr.match.POS.test(match[0])||Expr.match.CHILD.test(match[0])){
    return true;
}
return match;
},
POS:function(match){
    match.unshift(true);
    return match;
}
},
filters:{
    enabled:function(elem){
        return elem.disabled===false&&elem.type!=="hidden";
    },
    disabled:function(elem){
        return elem.disabled===true;
    },
    checked:function(elem){
        return elem.checked===true;
    },
    selected:function(elem){
        elem.parentNode.selectedIndex;
        return elem.selected===true;
    },
    parent:function(elem){
        return!!elem.firstChild;
    },
    empty:function(elem){
        return!elem.firstChild;
    },
    has:function(elem,i,match){
        return!!Sizzle(match[3],elem).length;
    },
    header:function(elem){
        return/h\d/i.test(elem.nodeName);
    },
    text:function(elem){
        return"text"===elem.type;
    },
    radio:function(elem){
        return"radio"===elem.type;
    },
    checkbox:function(elem){
        return"checkbox"===elem.type;
    },
    file:function(elem){
        return"file"===elem.type;
    },
    password:function(elem){
        return"password"===elem.type;
    },
    submit:function(elem){
        return"submit"===elem.type;
    },
    image:function(elem){
        return"image"===elem.type;
    },
    reset:function(elem){
        return"reset"===elem.type;
    },
    button:function(elem){
        return"button"===elem.type||elem.nodeName.toUpperCase()==="BUTTON";
    },
    input:function(elem){
        return/input|select|textarea|button/i.test(elem.nodeName);
    }
},
setFilters:{
    first:function(elem,i){
        return i===0;
    },
    last:function(elem,i,match,array){
        return i===array.length-1;
    },
    even:function(elem,i){
        return i%2===0;
    },
    odd:function(elem,i){
        return i%2===1;
    },
    lt:function(elem,i,match){
        return i<match[3]-0;
    },
    gt:function(elem,i,match){
        return i>match[3]-0;
    },
    nth:function(elem,i,match){
        return match[3]-0==i;
    },
    eq:function(elem,i,match){
        return match[3]-0==i;
    }
},
filter:{
    PSEUDO:function(elem,match,i,array){
        var name=match[1],filter=Expr.filters[name];
        if(filter){
            return filter(elem,i,match,array);
        }else if(name==="contains"){
            return(elem.textContent||elem.innerText||"").indexOf(match[3])>=0;
        }else if(name==="not"){
            var not=match[3];
            for(var i=0,l=not.length;i<l;i++){
                if(not[i]===elem){
                    return false;
                }
            }
        return true;
    }
},
CHILD:function(elem,match){
    var type=match[1],node=elem;
    switch(type){
        case'only':case'first':
            while((node=node.previousSibling)){
            if(node.nodeType===1)return false;
        }
        if(type=='first')return true;
            node=elem;
        case'last':
            while((node=node.nextSibling)){
            if(node.nodeType===1)return false;
        }
        return true;
        case'nth':
            var first=match[2],last=match[3];
            if(first==1&&last==0){
            return true;
        }
        var doneName=match[0],parent=elem.parentNode;
        if(parent&&(parent.sizcache!==doneName||!elem.nodeIndex)){
            var count=0;
            for(node=parent.firstChild;node;node=node.nextSibling){
                if(node.nodeType===1){
                    node.nodeIndex=++count;
                }
            }
        parent.sizcache=doneName;
        }
        var diff=elem.nodeIndex-last;
        if(first==0){
            return diff==0;
        }else{
            return(diff%first==0&&diff/first>=0);
        }
    }
},
ID:function(elem,match){
    return elem.nodeType===1&&elem.getAttribute("id")===match;
},
TAG:function(elem,match){
    return(match==="*"&&elem.nodeType===1)||elem.nodeName===match;
},
CLASS:function(elem,match){
    return(" "+(elem.className||elem.getAttribute("class"))+" ").indexOf(match)>-1;
},
ATTR:function(elem,match){
    var name=match[1],result=Expr.attrHandle[name]?Expr.attrHandle[name](elem):elem[name]!=null?elem[name]:elem.getAttribute(name),value=result+"",type=match[2],check=match[4];
    return result==null?type==="!=":type==="="?value===check:type==="*="?value.indexOf(check)>=0:type==="~="?(" "+value+" ").indexOf(check)>=0:!check?value&&result!==false:type==="!="?value!=check:type==="^="?value.indexOf(check)===0:type==="$="?value.substr(value.length-check.length)===check:type==="|="?value===check||value.substr(0,check.length+1)===check+"-":false;
},
POS:function(elem,match,i,array){
    var name=match[2],filter=Expr.setFilters[name];
    if(filter){
        return filter(elem,i,match,array);
    }
}
}
};

var origPOS=Expr.match.POS;
for(var type in Expr.match){
    Expr.match[type]=new RegExp(Expr.match[type].source+/(?![^\[]*\])(?![^\(]*\))/.source);
    Expr.leftMatch[type]=new RegExp(/(^(?:.|\r|\n)*?)/.source+Expr.match[type].source);
}
var makeArray=function(array,results){
    array=Array.prototype.slice.call(array,0);
    if(results){
        results.push.apply(results,array);
        return results;
    }
    return array;
};

try{
    Array.prototype.slice.call(document.documentElement.childNodes,0);
}catch(e){
    makeArray=function(array,results){
        var ret=results||[];
        if(toString.call(array)==="[object Array]"){
            Array.prototype.push.apply(ret,array);
        }else{
            if(typeof array.length==="number"){
                for(var i=0,l=array.length;i<l;i++){
                    ret.push(array[i]);
                }
                }else{
            for(var i=0;array[i];i++){
                ret.push(array[i]);
            }
            }
        }
return ret;
};

}
var sortOrder;
if(document.documentElement.compareDocumentPosition){
    sortOrder=function(a,b){
        if(!a.compareDocumentPosition||!b.compareDocumentPosition){
            if(a==b){
                hasDuplicate=true;
            }
            return 0;
        }
        var ret=a.compareDocumentPosition(b)&4?-1:a===b?0:1;
        if(ret===0){
            hasDuplicate=true;
        }
        return ret;
    };

}else if("sourceIndex"in document.documentElement){
    sortOrder=function(a,b){
        if(!a.sourceIndex||!b.sourceIndex){
            if(a==b){
                hasDuplicate=true;
            }
            return 0;
        }
        var ret=a.sourceIndex-b.sourceIndex;
        if(ret===0){
            hasDuplicate=true;
        }
        return ret;
    };

}else if(document.createRange){
    sortOrder=function(a,b){
        if(!a.ownerDocument||!b.ownerDocument){
            if(a==b){
                hasDuplicate=true;
            }
            return 0;
        }
        var aRange=a.ownerDocument.createRange(),bRange=b.ownerDocument.createRange();
        aRange.setStart(a,0);
        aRange.setEnd(a,0);
        bRange.setStart(b,0);
        bRange.setEnd(b,0);
        var ret=aRange.compareBoundaryPoints(Range.START_TO_END,bRange);
        if(ret===0){
            hasDuplicate=true;
        }
        return ret;
    };

}
(function(){
    var form=document.createElement("div"),id="script"+(new Date).getTime();
    form.innerHTML="<a name='"+id+"'/>";
    var root=document.documentElement;
    root.insertBefore(form,root.firstChild);
    if(!!document.getElementById(id)){
        Expr.find.ID=function(match,context,isXML){
            if(typeof context.getElementById!=="undefined"&&!isXML){
                var m=context.getElementById(match[1]);
                return m?m.id===match[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===match[1]?[m]:undefined:[];
            }
        };

    Expr.filter.ID=function(elem,match){
        var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");
        return elem.nodeType===1&&node&&node.nodeValue===match;
    };

}
root.removeChild(form);
root=form=null;
})();
(function(){
    var div=document.createElement("div");
    div.appendChild(document.createComment(""));
    if(div.getElementsByTagName("*").length>0){
        Expr.find.TAG=function(match,context){
            var results=context.getElementsByTagName(match[1]);
            if(match[1]==="*"){
                var tmp=[];
                for(var i=0;results[i];i++){
                    if(results[i].nodeType===1){
                        tmp.push(results[i]);
                    }
                }
            results=tmp;
        }
        return results;
    };

}
div.innerHTML="<a href='#'></a>";
if(div.firstChild&&typeof div.firstChild.getAttribute!=="undefined"&&div.firstChild.getAttribute("href")!=="#"){
    Expr.attrHandle.href=function(elem){
        return elem.getAttribute("href",2);
    };

}
div=null;
})();
if(document.querySelectorAll)(function(){
    var oldSizzle=Sizzle,div=document.createElement("div");
    div.innerHTML="<p class='TEST'></p>";
    if(div.querySelectorAll&&div.querySelectorAll(".TEST").length===0){
        return;
    }
    Sizzle=function(query,context,extra,seed){
        context=context||document;
        if(!seed&&context.nodeType===9&&!isXML(context)){
            try{
                return makeArray(context.querySelectorAll(query),extra);
            }catch(e){}
        }
    return oldSizzle(query,context,extra,seed);
};

for(var prop in oldSizzle){
    Sizzle[prop]=oldSizzle[prop];
}
div=null;
})();
if(document.getElementsByClassName&&document.documentElement.getElementsByClassName)(function(){
    var div=document.createElement("div");
    div.innerHTML="<div class='test e'></div><div class='test'></div>";
    if(div.getElementsByClassName("e").length===0)
        return;
    div.lastChild.className="e";
    if(div.getElementsByClassName("e").length===1)
        return;
    Expr.order.splice(1,0,"CLASS");
    Expr.find.CLASS=function(match,context,isXML){
        if(typeof context.getElementsByClassName!=="undefined"&&!isXML){
            return context.getElementsByClassName(match[1]);
        }
    };

div=null;
})();
function dirNodeCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){
    var sibDir=dir=="previousSibling"&&!isXML;
    for(var i=0,l=checkSet.length;i<l;i++){
        var elem=checkSet[i];
        if(elem){
            if(sibDir&&elem.nodeType===1){
                elem.sizcache=doneName;
                elem.sizset=i;
            }
            elem=elem[dir];
            var match=false;
            while(elem){
                if(elem.sizcache===doneName){
                    match=checkSet[elem.sizset];
                    break;
                }
                if(elem.nodeType===1&&!isXML){
                    elem.sizcache=doneName;
                    elem.sizset=i;
                }
                if(elem.nodeName===cur){
                    match=elem;
                    break;
                }
                elem=elem[dir];
            }
            checkSet[i]=match;
        }
    }
    }
function dirCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){
    var sibDir=dir=="previousSibling"&&!isXML;
    for(var i=0,l=checkSet.length;i<l;i++){
        var elem=checkSet[i];
        if(elem){
            if(sibDir&&elem.nodeType===1){
                elem.sizcache=doneName;
                elem.sizset=i;
            }
            elem=elem[dir];
            var match=false;
            while(elem){
                if(elem.sizcache===doneName){
                    match=checkSet[elem.sizset];
                    break;
                }
                if(elem.nodeType===1){
                    if(!isXML){
                        elem.sizcache=doneName;
                        elem.sizset=i;
                    }
                    if(typeof cur!=="string"){
                        if(elem===cur){
                            match=true;
                            break;
                        }
                    }else if(Sizzle.filter(cur,[elem]).length>0){
                    match=elem;
                    break;
                }
            }
        elem=elem[dir];
    }
    checkSet[i]=match;
    }
}
}
var contains=document.compareDocumentPosition?function(a,b){
    return a.compareDocumentPosition(b)&16;
}:function(a,b){
    return a!==b&&(a.contains?a.contains(b):true);
};

var isXML=function(elem){
    return elem.nodeType===9&&elem.documentElement.nodeName!=="HTML"||!!elem.ownerDocument&&elem.ownerDocument.documentElement.nodeName!=="HTML";
};

var posProcess=function(selector,context){
    var tmpSet=[],later="",match,root=context.nodeType?[context]:context;
    while((match=Expr.match.PSEUDO.exec(selector))){
        later+=match[0];
        selector=selector.replace(Expr.match.PSEUDO,"");
    }
    selector=Expr.relative[selector]?selector+"*":selector;
    for(var i=0,l=root.length;i<l;i++){
        Sizzle(selector,root[i],tmpSet);
    }
    return Sizzle.filter(later,tmpSet);
};

window.Sizzle=Sizzle;
})();
;
(function(engine){
    var extendElements=Prototype.Selector.extendElements;
    function select(selector,scope){
        return extendElements(engine(selector,scope||document));
    }
    function match(element,selector){
        return engine.matches(selector,[element]).length==1;
    }
    Prototype.Selector.engine=engine;
    Prototype.Selector.select=select;
    Prototype.Selector.match=match;
})(Sizzle);
window.Sizzle=Prototype._original_property;
delete Prototype._original_property;
var Form={
    reset:function(form){
        form=$(form);
        form.reset();
        return form;
    },
    serializeElements:function(elements,options){
        if(typeof options!='object')options={
            hash:!!options
            };
        else if(Object.isUndefined(options.hash))options.hash=true;
        var key,value,submitted=false,submit=options.submit,accumulator,initial;
        if(options.hash){
            initial={};

            accumulator=function(result,key,value){
                if(key in result){
                    if(!Object.isArray(result[key]))result[key]=[result[key]];
                    result[key].push(value);
                }else result[key]=value;
                return result;
            };

    }else{
        initial='';
        accumulator=function(result,key,value){
            return result+(result?'&':'')+encodeURIComponent(key)+'='+encodeURIComponent(value);
        }
    }
return elements.inject(initial,function(result,element){
    if(!element.disabled&&element.name){
        key=element.name;
        value=$(element).getValue();
        if(value!=null&&element.type!='file'&&(element.type!='submit'||(!submitted&&submit!==false&&(!submit||key==submit)&&(submitted=true)))){
            result=accumulator(result,key,value);
        }
    }
return result;
});
}
};

Form.Methods={
    serialize:function(form,options){
        return Form.serializeElements(Form.getElements(form),options);
    },
    getElements:function(form){
        var elements=$(form).getElementsByTagName('*'),element,arr=[],serializers=Form.Element.Serializers;
        for(var i=0;element=elements[i];i++){
            arr.push(element);
        }
        return arr.inject([],function(elements,child){
            if(serializers[child.tagName.toLowerCase()])
                elements.push(Element.extend(child));
            return elements;
        })
        },
    getInputs:function(form,typeName,name){
        form=$(form);
        var inputs=form.getElementsByTagName('input');
        if(!typeName&&!name)return $A(inputs).map(Element.extend);
        for(var i=0,matchingInputs=[],length=inputs.length;i<length;i++){
            var input=inputs[i];
            if((typeName&&input.type!=typeName)||(name&&input.name!=name))
                continue;
            matchingInputs.push(Element.extend(input));
        }
        return matchingInputs;
    },
    disable:function(form){
        form=$(form);
        Form.getElements(form).invoke('disable');
        return form;
    },
    enable:function(form){
        form=$(form);
        Form.getElements(form).invoke('enable');
        return form;
    },
    findFirstElement:function(form){
        var elements=$(form).getElements().findAll(function(element){
            return'hidden'!=element.type&&!element.disabled;
        });
        var firstByIndex=elements.findAll(function(element){
            return element.hasAttribute('tabIndex')&&element.tabIndex>=0;
        }).sortBy(function(element){
            return element.tabIndex
            }).first();
        return firstByIndex?firstByIndex:elements.find(function(element){
            return/^(?:input|select|textarea)$/i.test(element.tagName);
        });
    },
    focusFirstElement:function(form){
        form=$(form);
        var element=form.findFirstElement();
        if(element)element.activate();
        return form;
    },
    request:function(form,options){
        form=$(form),options=Object.clone(options||{});
        var params=options.parameters,action=form.readAttribute('action')||'';
        if(action.blank())action=window.location.href;
        options.parameters=form.serialize(true);
        if(params){
            if(Object.isString(params))params=params.toQueryParams();
            Object.extend(options.parameters,params);
        }
        if(form.hasAttribute('method')&&!options.method)
            options.method=form.method;
        return new Ajax.Request(action,options);
    }
};

Form.Element={
    focus:function(element){
        $(element).focus();
        return element;
    },
    select:function(element){
        $(element).select();
        return element;
    }
};

Form.Element.Methods={
    serialize:function(element){
        element=$(element);
        if(!element.disabled&&element.name){
            var value=element.getValue();
            if(value!=undefined){
                var pair={};

                pair[element.name]=value;
                return Object.toQueryString(pair);
            }
        }
    return'';
},
getValue:function(element){
    element=$(element);
    var method=element.tagName.toLowerCase();
    return Form.Element.Serializers[method](element);
},
setValue:function(element,value){
    element=$(element);
    var method=element.tagName.toLowerCase();
    Form.Element.Serializers[method](element,value);
    return element;
},
clear:function(element){
    $(element).value='';
    return element;
},
present:function(element){
    return $(element).value!='';
},
activate:function(element){
    element=$(element);
    try{
        element.focus();
        if(element.select&&(element.tagName.toLowerCase()!='input'||!(/^(?:button|reset|submit)$/i.test(element.type))))
            element.select();
    }catch(e){}
    return element;
},
disable:function(element){
    element=$(element);
    element.disabled=true;
    return element;
},
enable:function(element){
    element=$(element);
    element.disabled=false;
    return element;
}
};

var Field=Form.Element;
var $F=Form.Element.Methods.getValue;
Form.Element.Serializers=(function(){
    function input(element,value){
        switch(element.type.toLowerCase()){
            case'checkbox':case'radio':
                return inputSelector(element,value);
            default:
                return valueSelector(element,value);
        }
    }
function inputSelector(element,value){
    if(Object.isUndefined(value))
        return element.checked?element.value:null;else element.checked=!!value;
}
function valueSelector(element,value){
    if(Object.isUndefined(value))return element.value;else element.value=value;
}
function select(element,value){
    if(Object.isUndefined(value))
        return(element.type==='select-one'?selectOne:selectMany)(element);
    var opt,currentValue,single=!Object.isArray(value);
    for(var i=0,length=element.length;i<length;i++){
        opt=element.options[i];
        currentValue=this.optionValue(opt);
        if(single){
            if(currentValue==value){
                opt.selected=true;
                return;
            }
        }
    else opt.selected=value.include(currentValue);
    }
}
function selectOne(element){
    var index=element.selectedIndex;
    return index>=0?optionValue(element.options[index]):null;
}
function selectMany(element){
    var values,length=element.length;
    if(!length)return null;
    for(var i=0,values=[];i<length;i++){
        var opt=element.options[i];
        if(opt.selected)values.push(optionValue(opt));
    }
    return values;
}
function optionValue(opt){
    return Element.hasAttribute(opt,'value')?opt.value:opt.text;
}
return{
    input:input,
    inputSelector:inputSelector,
    textarea:valueSelector,
    select:select,
    selectOne:selectOne,
    selectMany:selectMany,
    optionValue:optionValue,
    button:valueSelector
};

})();
Abstract.TimedObserver=Class.create(PeriodicalExecuter,{
    initialize:function($super,element,frequency,callback){
        $super(callback,frequency);
        this.element=$(element);
        this.lastValue=this.getValue();
    },
    execute:function(){
        var value=this.getValue();
        if(Object.isString(this.lastValue)&&Object.isString(value)?this.lastValue!=value:String(this.lastValue)!=String(value)){
            this.callback(this.element,value);
            this.lastValue=value;
        }
    }
});
Form.Element.Observer=Class.create(Abstract.TimedObserver,{
    getValue:function(){
        return Form.Element.getValue(this.element);
    }
});
Form.Observer=Class.create(Abstract.TimedObserver,{
    getValue:function(){
        return Form.serialize(this.element);
    }
});
Abstract.EventObserver=Class.create({
    initialize:function(element,callback){
        this.element=$(element);
        this.callback=callback;
        this.lastValue=this.getValue();
        if(this.element.tagName.toLowerCase()=='form')
            this.registerFormCallbacks();else
            this.registerCallback(this.element);
    },
    onElementEvent:function(){
        var value=this.getValue();
        if(this.lastValue!=value){
            this.callback(this.element,value);
            this.lastValue=value;
        }
    },
registerFormCallbacks:function(){
    Form.getElements(this.element).each(this.registerCallback,this);
},
registerCallback:function(element){
    if(element.type){
        switch(element.type.toLowerCase()){
            case'checkbox':case'radio':
                Event.observe(element,'click',this.onElementEvent.bind(this));
                break;
            default:
                Event.observe(element,'change',this.onElementEvent.bind(this));
                break;
        }
    }
}
});
Form.Element.EventObserver=Class.create(Abstract.EventObserver,{
    getValue:function(){
        return Form.Element.getValue(this.element);
    }
});
Form.EventObserver=Class.create(Abstract.EventObserver,{
    getValue:function(){
        return Form.serialize(this.element);
    }
});
(function(){
    var Event={
        KEY_BACKSPACE:8,
        KEY_TAB:9,
        KEY_RETURN:13,
        KEY_ESC:27,
        KEY_LEFT:37,
        KEY_UP:38,
        KEY_RIGHT:39,
        KEY_DOWN:40,
        KEY_DELETE:46,
        KEY_HOME:36,
        KEY_END:35,
        KEY_PAGEUP:33,
        KEY_PAGEDOWN:34,
        KEY_INSERT:45,
        cache:{}
};

var docEl=document.documentElement;
var MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED='onmouseenter'in docEl&&'onmouseleave'in docEl;
var isIELegacyEvent=function(event){
    return false;
};

if(window.attachEvent){
    if(window.addEventListener){
        isIELegacyEvent=function(event){
            return!(event instanceof window.Event);
        };

}else{
    isIELegacyEvent=function(event){
        return true;
    };

}
}
var _isButton;
function _isButtonForDOMEvents(event,code){
    return event.which?(event.which===code+1):(event.button===code);
}
var legacyButtonMap={
    0:1,
    1:4,
    2:2
};

function _isButtonForLegacyEvents(event,code){
    return event.button===legacyButtonMap[code];
}
function _isButtonForWebKit(event,code){
    switch(code){
        case 0:
            return event.which==1&&!event.metaKey;
        case 1:
            return event.which==2||(event.which==1&&event.metaKey);
        case 2:
            return event.which==3;
        default:
            return false;
    }
}
if(window.attachEvent){
    if(!window.addEventListener){
        _isButton=_isButtonForLegacyEvents;
    }else{
        _isButton=function(event,code){
            return isIELegacyEvent(event)?_isButtonForLegacyEvents(event,code):_isButtonForDOMEvents(event,code);
        }
    }
}else if(Prototype.Browser.WebKit){
    _isButton=_isButtonForWebKit;
}else{
    _isButton=_isButtonForDOMEvents;
}
function isLeftClick(event){
    return _isButton(event,0)
    }
function isMiddleClick(event){
    return _isButton(event,1)
    }
function isRightClick(event){
    return _isButton(event,2)
    }
function element(event){
    event=Event.extend(event);
    var node=event.target,type=event.type,currentTarget=event.currentTarget;
    if(currentTarget&&currentTarget.tagName){
        if(type==='load'||type==='error'||(type==='click'&&currentTarget.tagName.toLowerCase()==='input'&&currentTarget.type==='radio'))
            node=currentTarget;
    }
    if(node.nodeType==Node.TEXT_NODE)
        node=node.parentNode;
    return Element.extend(node);
}
function findElement(event,expression){
    var element=Event.element(event);
    if(!expression)return element;
    while(element){
        if(Object.isElement(element)&&Prototype.Selector.match(element,expression)){
            return Element.extend(element);
        }
        element=element.parentNode;
    }
}
function pointer(event){
    return{
        x:pointerX(event),
        y:pointerY(event)
        };

}
function pointerX(event){
    var docElement=document.documentElement,body=document.body||{
        scrollLeft:0
    };

    return event.pageX||(event.clientX+
        (docElement.scrollLeft||body.scrollLeft)-
        (docElement.clientLeft||0));
}
function pointerY(event){
    var docElement=document.documentElement,body=document.body||{
        scrollTop:0
    };

    return event.pageY||(event.clientY+
        (docElement.scrollTop||body.scrollTop)-
        (docElement.clientTop||0));
}
function stop(event){
    Event.extend(event);
    event.preventDefault();
    event.stopPropagation();
    event.stopped=true;
}
Event.Methods={
    isLeftClick:isLeftClick,
    isMiddleClick:isMiddleClick,
    isRightClick:isRightClick,
    element:element,
    findElement:findElement,
    pointer:pointer,
    pointerX:pointerX,
    pointerY:pointerY,
    stop:stop
};

var methods=Object.keys(Event.Methods).inject({},function(m,name){
    m[name]=Event.Methods[name].methodize();
    return m;
});
if(window.attachEvent){
    function _relatedTarget(event){
        var element;
        switch(event.type){
            case'mouseover':case'mouseenter':
                element=event.fromElement;
                break;
            case'mouseout':case'mouseleave':
                element=event.toElement;
                break;
            default:
                return null;
        }
        return Element.extend(element);
    }
    var additionalMethods={
        stopPropagation:function(){
            this.cancelBubble=true
            },
        preventDefault:function(){
            this.returnValue=false
            },
        inspect:function(){
            return'[object Event]'
            }
        };

Event.extend=function(event,element){
    if(!event)return false;
    if(!isIELegacyEvent(event))return event;
    if(event._extendedByPrototype)return event;
    event._extendedByPrototype=Prototype.emptyFunction;
    var pointer=Event.pointer(event);
    Object.extend(event,{
        target:event.srcElement||element,
        relatedTarget:_relatedTarget(event),
        pageX:pointer.x,
        pageY:pointer.y
        });
    Object.extend(event,methods);
    Object.extend(event,additionalMethods);
    return event;
};

}else{
    Event.extend=Prototype.K;
}
if(window.addEventListener){
    Event.prototype=window.Event.prototype||document.createEvent('HTMLEvents').__proto__;
    Object.extend(Event.prototype,methods);
}
function _createResponder(element,eventName,handler){
    var registry=Element.retrieve(element,'prototype_event_registry');
    if(Object.isUndefined(registry)){
        CACHE.push(element);
        registry=Element.retrieve(element,'prototype_event_registry',$H());
    }
    var respondersForEvent=registry.get(eventName);
    if(Object.isUndefined(respondersForEvent)){
        respondersForEvent=[];
        registry.set(eventName,respondersForEvent);
    }
    if(respondersForEvent.pluck('handler').include(handler))return false;
    var responder;
    if(eventName.include(":")){
        responder=function(event){
            if(Object.isUndefined(event.eventName))
                return false;
            if(event.eventName!==eventName)
                return false;
            Event.extend(event,element);
            handler.call(element,event);
        };

}else{
    if(!MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED&&(eventName==="mouseenter"||eventName==="mouseleave")){
        if(eventName==="mouseenter"||eventName==="mouseleave"){
            responder=function(event){
                Event.extend(event,element);
                var parent=event.relatedTarget;
                while(parent&&parent!==element){
                    try{
                        parent=parent.parentNode;
                    }
                    catch(e){
                        parent=element;
                    }
                }
            if(parent===element)return;
            handler.call(element,event);
        };

}
}else{
    responder=function(event){
        Event.extend(event,element);
        handler.call(element,event);
    };

}
}
responder.handler=handler;
respondersForEvent.push(responder);
return responder;
}
function _destroyCache(){
    for(var i=0,length=CACHE.length;i<length;i++){
        Event.stopObserving(CACHE[i]);
        CACHE[i]=null;
    }
    }
var CACHE=[];
if(Prototype.Browser.IE)
    window.attachEvent('onunload',_destroyCache);
if(Prototype.Browser.WebKit)
    window.addEventListener('unload',Prototype.emptyFunction,false);
var _getDOMEventName=Prototype.K,translations={
    mouseenter:"mouseover",
    mouseleave:"mouseout"
};

if(!MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED){
    _getDOMEventName=function(eventName){
        return(translations[eventName]||eventName);
    };

}
function observe(element,eventName,handler){
    element=$(element);
    var responder=_createResponder(element,eventName,handler);
    if(!responder)return element;
    if(eventName.include(':')){
        if(element.addEventListener)
            element.addEventListener("dataavailable",responder,false);
        else{
            element.attachEvent("ondataavailable",responder);
            element.attachEvent("onlosecapture",responder);
        }
    }else{
    var actualEventName=_getDOMEventName(eventName);
    if(element.addEventListener)
        element.addEventListener(actualEventName,responder,false);else
        element.attachEvent("on"+actualEventName,responder);
}
return element;
}
function stopObserving(element,eventName,handler){
    element=$(element);
    var registry=Element.retrieve(element,'prototype_event_registry');
    if(!registry)return element;
    if(!eventName){
        registry.each(function(pair){
            var eventName=pair.key;
            stopObserving(element,eventName);
        });
        return element;
    }
    var responders=registry.get(eventName);
    if(!responders)return element;
    if(!handler){
        responders.each(function(r){
            stopObserving(element,eventName,r.handler);
        });
        return element;
    }
    var i=responders.length,responder;
    while(i--){
        if(responders[i].handler===handler){
            responder=responders[i];
            break;
        }
    }
if(!responder)return element;
if(eventName.include(':')){
    if(element.removeEventListener)
        element.removeEventListener("dataavailable",responder,false);
    else{
        element.detachEvent("ondataavailable",responder);
        element.detachEvent("onlosecapture",responder);
    }
}else{
    var actualEventName=_getDOMEventName(eventName);
    if(element.removeEventListener)
        element.removeEventListener(actualEventName,responder,false);else
        element.detachEvent('on'+actualEventName,responder);
}
registry.set(eventName,responders.without(responder));
return element;
}
function fire(element,eventName,memo,bubble){
    element=$(element);
    if(Object.isUndefined(bubble))
        bubble=true;
    if(element==document&&document.createEvent&&!element.dispatchEvent)
        element=document.documentElement;
    var event;
    if(document.createEvent){
        event=document.createEvent('HTMLEvents');
        event.initEvent('dataavailable',bubble,true);
    }else{
        event=document.createEventObject();
        event.eventType=bubble?'ondataavailable':'onlosecapture';
    }
    event.eventName=eventName;
    event.memo=memo||{};

    if(document.createEvent)
        element.dispatchEvent(event);else
        element.fireEvent(event.eventType,event);
    return Event.extend(event);
}
Event.Handler=Class.create({
    initialize:function(element,eventName,selector,callback){
        this.element=$(element);
        this.eventName=eventName;
        this.selector=selector;
        this.callback=callback;
        this.handler=this.handleEvent.bind(this);
    },
    start:function(){
        Event.observe(this.element,this.eventName,this.handler);
        return this;
    },
    stop:function(){
        Event.stopObserving(this.element,this.eventName,this.handler);
        return this;
    },
    handleEvent:function(event){
        var element=Event.findElement(event,this.selector);
        if(element)this.callback.call(this.element,event,element);
    }
});
function on(element,eventName,selector,callback){
    element=$(element);
    if(Object.isFunction(selector)&&Object.isUndefined(callback)){
        callback=selector,selector=null;
    }
    return new Event.Handler(element,eventName,selector,callback).start();
}
Object.extend(Event,Event.Methods);
Object.extend(Event,{
    fire:fire,
    observe:observe,
    stopObserving:stopObserving,
    on:on
});
Element.addMethods({
    fire:fire,
    observe:observe,
    stopObserving:stopObserving,
    on:on
});
Object.extend(document,{
    fire:fire.methodize(),
    observe:observe.methodize(),
    stopObserving:stopObserving.methodize(),
    on:on.methodize(),
    loaded:false
});
if(window.Event)Object.extend(window.Event,Event);else window.Event=Event;
})();
(function(){
    var timer;
    function fireContentLoadedEvent(){
        if(document.loaded)return;
        if(timer)window.clearTimeout(timer);
        document.loaded=true;
        document.fire('dom:loaded');
    }
    function checkReadyState(){
        if(document.readyState==='complete'){
            document.stopObserving('readystatechange',checkReadyState);
            fireContentLoadedEvent();
        }
    }
function pollDoScroll(){
    try{
        document.documentElement.doScroll('left');
    }
    catch(e){
        timer=pollDoScroll.defer();
        return;
    }
    fireContentLoadedEvent();
}
if(document.addEventListener){
    document.addEventListener('DOMContentLoaded',fireContentLoadedEvent,false);
}else{
    document.observe('readystatechange',checkReadyState);
    if(window==top)
        timer=pollDoScroll.defer();
}
Event.observe(window,'load',fireContentLoadedEvent);
    })();
Element.addMethods();
Hash.toQueryString=Object.toQueryString;
var Toggle={
    display:Element.toggle
    };

Element.Methods.childOf=Element.Methods.descendantOf;
var Insertion={
    Before:function(element,content){
        return Element.insert(element,{
            before:content
        });
    },
    Top:function(element,content){
        return Element.insert(element,{
            top:content
        });
    },
    Bottom:function(element,content){
        return Element.insert(element,{
            bottom:content
        });
    },
    After:function(element,content){
        return Element.insert(element,{
            after:content
        });
    }
};

var $continue=new Error('"throw $continue" is deprecated, use "return" instead');
var Position={
    includeScrollOffsets:false,
    prepare:function(){
        this.deltaX=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;
        this.deltaY=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
    },
    within:function(element,x,y){
        if(this.includeScrollOffsets)
            return this.withinIncludingScrolloffsets(element,x,y);
        this.xcomp=x;
        this.ycomp=y;
        this.offset=Element.cumulativeOffset(element);
        return(y>=this.offset[1]&&y<this.offset[1]+element.offsetHeight&&x>=this.offset[0]&&x<this.offset[0]+element.offsetWidth);
    },
    withinIncludingScrolloffsets:function(element,x,y){
        var offsetcache=Element.cumulativeScrollOffset(element);
        this.xcomp=x+offsetcache[0]-this.deltaX;
        this.ycomp=y+offsetcache[1]-this.deltaY;
        this.offset=Element.cumulativeOffset(element);
        return(this.ycomp>=this.offset[1]&&this.ycomp<this.offset[1]+element.offsetHeight&&this.xcomp>=this.offset[0]&&this.xcomp<this.offset[0]+element.offsetWidth);
    },
    overlap:function(mode,element){
        if(!mode)return 0;
        if(mode=='vertical')
            return((this.offset[1]+element.offsetHeight)-this.ycomp)/element.offsetHeight;
        if(mode=='horizontal')
            return((this.offset[0]+element.offsetWidth)-this.xcomp)/element.offsetWidth;
    },
    cumulativeOffset:Element.Methods.cumulativeOffset,
    positionedOffset:Element.Methods.positionedOffset,
    absolutize:function(element){
        Position.prepare();
        return Element.absolutize(element);
    },
    relativize:function(element){
        Position.prepare();
        return Element.relativize(element);
    },
    realOffset:Element.Methods.cumulativeScrollOffset,
    offsetParent:Element.Methods.getOffsetParent,
    page:Element.Methods.viewportOffset,
    clone:function(source,target,options){
        options=options||{};

        return Element.clonePosition(target,source,options);
    }
};

if(!document.getElementsByClassName)document.getElementsByClassName=function(instanceMethods){
    function iter(name){
        return name.blank()?null:"[contains(concat(' ', @class, ' '), ' "+name+" ')]";
    }
    instanceMethods.getElementsByClassName=Prototype.BrowserFeatures.XPath?function(element,className){
        className=className.toString().strip();
        var cond=/\s/.test(className)?$w(className).map(iter).join(''):iter(className);
        return cond?document._getElementsByXPath('.//*'+cond,element):[];
    }:function(element,className){
        className=className.toString().strip();
        var elements=[],classNames=(/\s/.test(className)?$w(className):null);
        if(!classNames&&!className)return elements;
        var nodes=$(element).getElementsByTagName('*');
        className=' '+className+' ';
        for(var i=0,child,cn;child=nodes[i];i++){
            if(child.className&&(cn=' '+child.className+' ')&&(cn.include(className)||(classNames&&classNames.all(function(name){
                return!name.toString().blank()&&cn.include(' '+name+' ');
            }))))
                elements.push(Element.extend(child));
        }
        return elements;
    };

    return function(className,parentElement){
        return $(parentElement||document.body).getElementsByClassName(className);
    };

}(Element.Methods);
Element.ClassNames=Class.create();
Element.ClassNames.prototype={
    initialize:function(element){
        this.element=$(element);
    },
    _each:function(iterator){
        this.element.className.split(/\s+/).select(function(name){
            return name.length>0;
        })._each(iterator);
    },
    set:function(className){
        this.element.className=className;
    },
    add:function(classNameToAdd){
        if(this.include(classNameToAdd))return;
        this.set($A(this).concat(classNameToAdd).join(' '));
    },
    remove:function(classNameToRemove){
        if(!this.include(classNameToRemove))return;
        this.set($A(this).without(classNameToRemove).join(' '));
    },
    toString:function(){
        return $A(this).join(' ');
    }
};

Object.extend(Element.ClassNames.prototype,Enumerable);
(function(){
    window.Selector=Class.create({
        initialize:function(expression){
            this.expression=expression.strip();
        },
        findElements:function(rootElement){
            return Prototype.Selector.select(this.expression,rootElement);
        },
        match:function(element){
            return Prototype.Selector.match(element,this.expression);
        },
        toString:function(){
            return this.expression;
        },
        inspect:function(){
            return"#<Selector: "+this.expression+">";
        }
    });
Object.extend(Selector,{
    matchElements:function(elements,expression){
        var match=Prototype.Selector.match,results=[];
        for(var i=0,length=elements.length;i<length;i++){
            var element=elements[i];
            if(match(element,expression)){
                results.push(Element.extend(element));
            }
        }
    return results;
},
findElement:function(elements,expression,index){
    index=index||0;
    var matchIndex=0,element;
    for(var i=0,length=elements.length;i<length;i++){
        element=elements[i];
        if(Prototype.Selector.match(element,expression)&&index===matchIndex++){
            return Element.extend(element);
        }
    }
    },
findChildElements:function(element,expressions){
    var selector=expressions.toArray().join(', ');
    return Prototype.Selector.select(selector,element||document);
}
});
})();
String.prototype.parseColor=function(){
    var color='#';
    if(this.slice(0,4)=='rgb('){
        var cols=this.slice(4,this.length-1).split(',');
        var i=0;
        do{
            color+=parseInt(cols[i]).toColorPart()
            }while(++i<3);
    }else{
        if(this.slice(0,1)=='#'){
            if(this.length==4)for(var i=1;i<4;i++)color+=(this.charAt(i)+this.charAt(i)).toLowerCase();
            if(this.length==7)color=this.toLowerCase();
        }
    }
return(color.length==7?color:(arguments[0]||this));
};

Element.collectTextNodes=function(element){
    return $A($(element).childNodes).collect(function(node){
        return(node.nodeType==3?node.nodeValue:(node.hasChildNodes()?Element.collectTextNodes(node):''));
    }).flatten().join('');
};

Element.collectTextNodesIgnoreClass=function(element,className){
    return $A($(element).childNodes).collect(function(node){
        return(node.nodeType==3?node.nodeValue:((node.hasChildNodes()&&!Element.hasClassName(node,className))?Element.collectTextNodesIgnoreClass(node,className):''));
    }).flatten().join('');
};

Element.setContentZoom=function(element,percent){
    element=$(element);
    element.setStyle({
        fontSize:(percent/100)+'em'
        });
    if(Prototype.Browser.WebKit)window.scrollBy(0,0);
    return element;
};

Element.getInlineOpacity=function(element){
    return $(element).style.opacity||'';
};

Element.forceRerendering=function(element){
    try{
        element=$(element);
        var n=document.createTextNode(' ');
        element.appendChild(n);
        element.removeChild(n);
    }catch(e){}
};

var Effect={
    _elementDoesNotExistError:{
        name:'ElementDoesNotExistError',
        message:'The specified DOM element does not exist, but is required for this effect to operate'
    },
    Transitions:{
        linear:Prototype.K,
        sinoidal:function(pos){
            return(-Math.cos(pos*Math.PI)/2)+0.5;
        },
        reverse:function(pos){
            return 1-pos;
        },
        flicker:function(pos){
            var pos=((-Math.cos(pos*Math.PI)/4)+0.75)+Math.random()/4;
            return pos>1?1:pos;
        },
        wobble:function(pos){
            return(-Math.cos(pos*Math.PI*(9*pos))/2)+0.5;
        },
        pulse:function(pos,pulses){
            pulses=pulses||5;
            return(((pos%(1/pulses))*pulses).round()==0?((pos*pulses*2)-(pos*pulses*2).floor()):1-((pos*pulses*2)-(pos*pulses*2).floor()));
        },
        spring:function(pos){
            return 1-(Math.cos(pos*4.5*Math.PI)*Math.exp(-pos*6));
        },
        none:function(pos){
            return 0;
        },
        full:function(pos){
            return 1;
        }
    },
DefaultOptions:{
    duration:1.0,
    fps:100,
    sync:false,
    from:0.0,
    to:1.0,
    delay:0.0,
    queue:'parallel'
},
tagifyText:function(element){
    var tagifyStyle='position:relative';
    if(Prototype.Browser.IE)tagifyStyle+=';zoom:1';
    element=$(element);
    $A(element.childNodes).each(function(child){
        if(child.nodeType==3){
            child.nodeValue.toArray().each(function(character){
                element.insertBefore(new Element('span',{
                    style:tagifyStyle
                }).update(character==' '?String.fromCharCode(160):character),child);
            });
            Element.remove(child);
        }
    });
},
multiple:function(element,effect){
    var elements;
    if(((typeof element=='object')||Object.isFunction(element))&&(element.length))
        elements=element;else
        elements=$(element).childNodes;
    var options=Object.extend({
        speed:0.1,
        delay:0.0
    },arguments[2]||{});
    var masterDelay=options.delay;
    $A(elements).each(function(element,index){
        new effect(element,Object.extend(options,{
            delay:index*options.speed+masterDelay
            }));
    });
},
PAIRS:{
    'slide':['SlideDown','SlideUp'],
    'blind':['BlindDown','BlindUp'],
    'appear':['Appear','Fade']
    },
toggle:function(element,effect){
    element=$(element);
    effect=(effect||'appear').toLowerCase();
    var options=Object.extend({
        queue:{
            position:'end',
            scope:(element.id||'global'),
            limit:1
        }
    },arguments[2]||{});
Effect[element.visible()?Effect.PAIRS[effect][1]:Effect.PAIRS[effect][0]](element,options);
}
};

Effect.DefaultOptions.transition=Effect.Transitions.sinoidal;
Effect.ScopedQueue=Class.create(Enumerable,{
    initialize:function(){
        this.effects=[];
        this.interval=null;
    },
    _each:function(iterator){
        this.effects._each(iterator);
    },
    add:function(effect){
        var timestamp=new Date().getTime();
        var position=Object.isString(effect.options.queue)?effect.options.queue:effect.options.queue.position;
        switch(position){
            case'front':
                this.effects.findAll(function(e){
                return e.state=='idle'
                }).each(function(e){
                e.startOn+=effect.finishOn;
                e.finishOn+=effect.finishOn;
            });
            break;
            case'with-last':
                timestamp=this.effects.pluck('startOn').max()||timestamp;
                break;
            case'end':
                timestamp=this.effects.pluck('finishOn').max()||timestamp;
                break;
        }
        effect.startOn+=timestamp;
        effect.finishOn+=timestamp;
        if(!effect.options.queue.limit||(this.effects.length<effect.options.queue.limit))
            this.effects.push(effect);
        if(!this.interval)
            this.interval=setInterval(this.loop.bind(this),15);
    },
    remove:function(effect){
        this.effects=this.effects.reject(function(e){
            return e==effect
            });
        if(this.effects.length==0){
            clearInterval(this.interval);
            this.interval=null;
        }
    },
loop:function(){
    var timePos=new Date().getTime();
    for(var i=0,len=this.effects.length;i<len;i++)
        this.effects[i]&&this.effects[i].loop(timePos);
}
});
Effect.Queues={
    instances:$H(),
    get:function(queueName){
        if(!Object.isString(queueName))return queueName;
        return this.instances.get(queueName)||this.instances.set(queueName,new Effect.ScopedQueue());
    }
};

Effect.Queue=Effect.Queues.get('global');
Effect.Base=Class.create({
    position:null,
    start:function(options){
        function codeForEvent(options,eventName){
            return((options[eventName+'Internal']?'this.options.'+eventName+'Internal(this);':'')+
                (options[eventName]?'this.options.'+eventName+'(this);':''));
        }
        if(options&&options.transition===false)options.transition=Effect.Transitions.linear;
        this.options=Object.extend(Object.extend({},Effect.DefaultOptions),options||{});
        this.currentFrame=0;
        this.state='idle';
        this.startOn=this.options.delay*1000;
        this.finishOn=this.startOn+(this.options.duration*1000);
        this.fromToDelta=this.options.to-this.options.from;
        this.totalTime=this.finishOn-this.startOn;
        this.totalFrames=this.options.fps*this.options.duration;
        eval('this.render = function(pos){ '+'if (this.state=="idle"){this.state="running";'+
            codeForEvent(this.options,'beforeSetup')+
            (this.setup?'this.setup();':'')+
            codeForEvent(this.options,'afterSetup')+'};if (this.state=="running"){'+'pos=this.options.transition(pos)*'+this.fromToDelta+'+'+this.options.from+';'+'this.position=pos;'+
            codeForEvent(this.options,'beforeUpdate')+
            (this.update?'this.update(pos);':'')+
            codeForEvent(this.options,'afterUpdate')+'}}');
        this.event('beforeStart');
        if(!this.options.sync)
            Effect.Queues.get(Object.isString(this.options.queue)?'global':this.options.queue.scope).add(this);
    },
    loop:function(timePos){
        if(timePos>=this.startOn){
            if(timePos>=this.finishOn){
                this.render(1.0);
                this.cancel();
                this.event('beforeFinish');
                if(this.finish)this.finish();
                this.event('afterFinish');
                return;
            }
            var pos=(timePos-this.startOn)/this.totalTime,frame=(pos*this.totalFrames).round();
            if(frame>this.currentFrame){
                this.render(pos);
                this.currentFrame=frame;
            }
        }
    },
cancel:function(){
    if(!this.options.sync)
        Effect.Queues.get(Object.isString(this.options.queue)?'global':this.options.queue.scope).remove(this);
    this.state='finished';
},
event:function(eventName){
    if(this.options[eventName+'Internal'])this.options[eventName+'Internal'](this);
    if(this.options[eventName])this.options[eventName](this);
},
inspect:function(){
    var data=$H();
    for(property in this)
        if(!Object.isFunction(this[property]))data.set(property,this[property]);return'#<Effect:'+data.inspect()+',options:'+$H(this.options).inspect()+'>';
}
});
Effect.Parallel=Class.create(Effect.Base,{
    initialize:function(effects){
        this.effects=effects||[];
        this.start(arguments[1]);
    },
    update:function(position){
        this.effects.invoke('render',position);
    },
    finish:function(position){
        this.effects.each(function(effect){
            effect.render(1.0);
            effect.cancel();
            effect.event('beforeFinish');
            if(effect.finish)effect.finish(position);
            effect.event('afterFinish');
        });
    }
});
Effect.Tween=Class.create(Effect.Base,{
    initialize:function(object,from,to){
        object=Object.isString(object)?$(object):object;
        var args=$A(arguments),method=args.last(),options=args.length==5?args[3]:null;
        this.method=Object.isFunction(method)?method.bind(object):Object.isFunction(object[method])?object[method].bind(object):function(value){
            object[method]=value
            };

        this.start(Object.extend({
            from:from,
            to:to
        },options||{}));
    },
    update:function(position){
        this.method(position);
    }
});
Effect.Event=Class.create(Effect.Base,{
    initialize:function(){
        this.start(Object.extend({
            duration:0
        },arguments[0]||{}));
    },
    update:Prototype.emptyFunction
    });
Effect.Opacity=Class.create(Effect.Base,{
    initialize:function(element){
        this.element=$(element);
        if(!this.element)throw(Effect._elementDoesNotExistError);
        if(Prototype.Browser.IE&&(!this.element.currentStyle.hasLayout))
            this.element.setStyle({
                zoom:1
            });
        var options=Object.extend({
            from:this.element.getOpacity()||0.0,
            to:1.0
        },arguments[1]||{});
        this.start(options);
    },
    update:function(position){
        this.element.setOpacity(position);
    }
});
Effect.Move=Class.create(Effect.Base,{
    initialize:function(element){
        this.element=$(element);
        if(!this.element)throw(Effect._elementDoesNotExistError);
        var options=Object.extend({
            x:0,
            y:0,
            mode:'relative'
        },arguments[1]||{});
        this.start(options);
    },
    setup:function(){
        this.element.makePositioned();
        this.originalLeft=parseFloat(this.element.getStyle('left')||'0');
        this.originalTop=parseFloat(this.element.getStyle('top')||'0');
        if(this.options.mode=='absolute'){
            this.options.x=this.options.x-this.originalLeft;
            this.options.y=this.options.y-this.originalTop;
        }
    },
update:function(position){
    this.element.setStyle({
        left:(this.options.x*position+this.originalLeft).round()+'px',
        top:(this.options.y*position+this.originalTop).round()+'px'
        });
}
});
Effect.MoveBy=function(element,toTop,toLeft){
    return new Effect.Move(element,Object.extend({
        x:toLeft,
        y:toTop
    },arguments[3]||{}));
};

Effect.Scale=Class.create(Effect.Base,{
    initialize:function(element,percent){
        this.element=$(element);
        if(!this.element)throw(Effect._elementDoesNotExistError);
        var options=Object.extend({
            scaleX:true,
            scaleY:true,
            scaleContent:true,
            scaleFromCenter:false,
            scaleMode:'box',
            scaleFrom:100.0,
            scaleTo:percent
        },arguments[2]||{});
        this.start(options);
    },
    setup:function(){
        this.restoreAfterFinish=this.options.restoreAfterFinish||false;
        this.elementPositioning=this.element.getStyle('position');
        this.originalStyle={};

        ['top','left','width','height','fontSize'].each(function(k){
            this.originalStyle[k]=this.element.style[k];
        }.bind(this));
        this.originalTop=this.element.offsetTop;
        this.originalLeft=this.element.offsetLeft;
        var fontSize=this.element.getStyle('font-size')||'100%';
        ['em','px','%','pt'].each(function(fontSizeType){
            if(fontSize.indexOf(fontSizeType)>0){
                this.fontSize=parseFloat(fontSize);
                this.fontSizeType=fontSizeType;
            }
        }.bind(this));
    this.factor=(this.options.scaleTo-this.options.scaleFrom)/100;
    this.dims=null;
    if(this.options.scaleMode=='box')
        this.dims=[this.element.offsetHeight,this.element.offsetWidth];
    if(/^content/.test(this.options.scaleMode))
        this.dims=[this.element.scrollHeight,this.element.scrollWidth];
    if(!this.dims)
        this.dims=[this.options.scaleMode.originalHeight,this.options.scaleMode.originalWidth];
},
update:function(position){
    var currentScale=(this.options.scaleFrom/100.0)+(this.factor*position);
    if(this.options.scaleContent&&this.fontSize)
        this.element.setStyle({
            fontSize:this.fontSize*currentScale+this.fontSizeType
            });
    this.setDimensions(this.dims[0]*currentScale,this.dims[1]*currentScale);
},
finish:function(position){
    if(this.restoreAfterFinish)this.element.setStyle(this.originalStyle);
},
setDimensions:function(height,width){
    var d={};

    if(this.options.scaleX)d.width=width.round()+'px';
    if(this.options.scaleY)d.height=height.round()+'px';
    if(this.options.scaleFromCenter){
        var topd=(height-this.dims[0])/2;
        var leftd=(width-this.dims[1])/2;
        if(this.elementPositioning=='absolute'){
            if(this.options.scaleY)d.top=this.originalTop-topd+'px';
            if(this.options.scaleX)d.left=this.originalLeft-leftd+'px';
        }else{
            if(this.options.scaleY)d.top=-topd+'px';
            if(this.options.scaleX)d.left=-leftd+'px';
        }
    }
this.element.setStyle(d);
    }
});
Effect.Highlight=Class.create(Effect.Base,{
    initialize:function(element){
        this.element=$(element);
        if(!this.element)throw(Effect._elementDoesNotExistError);
        var options=Object.extend({
            startcolor:'#ffff99'
        },arguments[1]||{});
        this.start(options);
    },
    setup:function(){
        if(this.element.getStyle('display')=='none'){
            this.cancel();
            return;
        }
        this.oldStyle={};

        if(!this.options.keepBackgroundImage){
            this.oldStyle.backgroundImage=this.element.getStyle('background-image');
            this.element.setStyle({
                backgroundImage:'none'
            });
        }
        if(!this.options.endcolor)
            this.options.endcolor=this.element.getStyle('background-color').parseColor('#ffffff');
        if(!this.options.restorecolor)
            this.options.restorecolor=this.element.getStyle('background-color');
        this._base=$R(0,2).map(function(i){
            return parseInt(this.options.startcolor.slice(i*2+1,i*2+3),16)
            }.bind(this));
        this._delta=$R(0,2).map(function(i){
            return parseInt(this.options.endcolor.slice(i*2+1,i*2+3),16)-this._base[i]
            }.bind(this));
    },
    update:function(position){
        this.element.setStyle({
            backgroundColor:$R(0,2).inject('#',function(m,v,i){
                return m+((this._base[i]+(this._delta[i]*position)).round().toColorPart());
            }.bind(this))
            });
    },
    finish:function(){
        this.element.setStyle(Object.extend(this.oldStyle,{
            backgroundColor:this.options.restorecolor
            }));
    }
});
Effect.ScrollTo=function(element){
    var options=arguments[1]||{},scrollOffsets=document.viewport.getScrollOffsets(),elementOffsets=$(element).cumulativeOffset(),max=(window.height||document.body.scrollHeight)-document.viewport.getHeight();
    if(options.offset)elementOffsets[1]+=options.offset;
    return new Effect.Tween(null,scrollOffsets.top,elementOffsets[1]>max?max:elementOffsets[1],options,function(p){
        scrollTo(scrollOffsets.left,p.round())
        });
};

Effect.Fade=function(element){
    element=$(element);
    var oldOpacity=element.getInlineOpacity();
    var options=Object.extend({
        from:element.getOpacity()||1.0,
        to:0.0,
        afterFinishInternal:function(effect){
            if(effect.options.to!=0)return;
            effect.element.hide().setStyle({
                opacity:oldOpacity
            });
        }
    },arguments[1]||{});
return new Effect.Opacity(element,options);
};

Effect.Appear=function(element){
    element=$(element);
    var options=Object.extend({
        from:(element.getStyle('display')=='none'?0.0:element.getOpacity()||0.0),
        to:1.0,
        afterFinishInternal:function(effect){
            effect.element.forceRerendering();
        },
        beforeSetup:function(effect){
            effect.element.setOpacity(effect.options.from).show();
        }
    },arguments[1]||{});
return new Effect.Opacity(element,options);
};

Effect.Puff=function(element){
    element=$(element);
    var oldStyle={
        opacity:element.getInlineOpacity(),
        position:element.getStyle('position'),
        top:element.style.top,
        left:element.style.left,
        width:element.style.width,
        height:element.style.height
        };

    return new Effect.Parallel([new Effect.Scale(element,200,{
        sync:true,
        scaleFromCenter:true,
        scaleContent:true,
        restoreAfterFinish:true
    }),new Effect.Opacity(element,{
        sync:true,
        to:0.0
    })],Object.extend({
        duration:1.0,
        beforeSetupInternal:function(effect){
            Position.absolutize(effect.effects[0].element)
            },
        afterFinishInternal:function(effect){
            effect.effects[0].element.hide().setStyle(oldStyle);
        }
    },arguments[1]||{}));
};

Effect.BlindUp=function(element){
    element=$(element);
    element.makeClipping();
    return new Effect.Scale(element,0,Object.extend({
        scaleContent:false,
        scaleX:false,
        restoreAfterFinish:true,
        afterFinishInternal:function(effect){
            effect.element.hide().undoClipping();
        }
    },arguments[1]||{}));
};

Effect.BlindDown=function(element){
    element=$(element);
    var elementDimensions=element.getDimensions();
    return new Effect.Scale(element,100,Object.extend({
        scaleContent:false,
        scaleX:false,
        scaleFrom:0,
        scaleMode:{
            originalHeight:elementDimensions.height,
            originalWidth:elementDimensions.width
            },
        restoreAfterFinish:true,
        afterSetup:function(effect){
            effect.element.makeClipping().setStyle({
                height:'0px'
            }).show();
        },
        afterFinishInternal:function(effect){
            effect.element.undoClipping();
        }
    },arguments[1]||{}));
};

Effect.SwitchOff=function(element){
    element=$(element);
    var oldOpacity=element.getInlineOpacity();
    return new Effect.Appear(element,Object.extend({
        duration:0.4,
        from:0,
        transition:Effect.Transitions.flicker,
        afterFinishInternal:function(effect){
            new Effect.Scale(effect.element,1,{
                duration:0.3,
                scaleFromCenter:true,
                scaleX:false,
                scaleContent:false,
                restoreAfterFinish:true,
                beforeSetup:function(effect){
                    effect.element.makePositioned().makeClipping();
                },
                afterFinishInternal:function(effect){
                    effect.element.hide().undoClipping().undoPositioned().setStyle({
                        opacity:oldOpacity
                    });
                }
            })
        }
    },arguments[1]||{}));
};

Effect.DropOut=function(element){
    element=$(element);
    var oldStyle={
        top:element.getStyle('top'),
        left:element.getStyle('left'),
        opacity:element.getInlineOpacity()
        };

    return new Effect.Parallel([new Effect.Move(element,{
        x:0,
        y:100,
        sync:true
    }),new Effect.Opacity(element,{
        sync:true,
        to:0.0
    })],Object.extend({
        duration:0.5,
        beforeSetup:function(effect){
            effect.effects[0].element.makePositioned();
        },
        afterFinishInternal:function(effect){
            effect.effects[0].element.hide().undoPositioned().setStyle(oldStyle);
        }
    },arguments[1]||{}));
};

Effect.Shake=function(element){
    element=$(element);
    var options=Object.extend({
        distance:20,
        duration:0.5
    },arguments[1]||{});
    var distance=parseFloat(options.distance);
    var split=parseFloat(options.duration)/10.0;
    var oldStyle={
        top:element.getStyle('top'),
        left:element.getStyle('left')
        };

    return new Effect.Move(element,{
        x:distance,
        y:0,
        duration:split,
        afterFinishInternal:function(effect){
            new Effect.Move(effect.element,{
                x:-distance*2,
                y:0,
                duration:split*2,
                afterFinishInternal:function(effect){
                    new Effect.Move(effect.element,{
                        x:distance*2,
                        y:0,
                        duration:split*2,
                        afterFinishInternal:function(effect){
                            new Effect.Move(effect.element,{
                                x:-distance*2,
                                y:0,
                                duration:split*2,
                                afterFinishInternal:function(effect){
                                    new Effect.Move(effect.element,{
                                        x:distance*2,
                                        y:0,
                                        duration:split*2,
                                        afterFinishInternal:function(effect){
                                            new Effect.Move(effect.element,{
                                                x:-distance,
                                                y:0,
                                                duration:split,
                                                afterFinishInternal:function(effect){
                                                    effect.element.undoPositioned().setStyle(oldStyle);
                                                }
                                            })
                                        }
                                    })
                            }
                            })
                    }
                })
        }
    })
}
});
};

Effect.SlideDown=function(element){
    element=$(element).cleanWhitespace();
    var oldInnerBottom=element.down().getStyle('bottom');
    var elementDimensions=element.getDimensions();
    return new Effect.Scale(element,100,Object.extend({
        scaleContent:false,
        scaleX:false,
        scaleFrom:window.opera?0:1,
        scaleMode:{
            originalHeight:elementDimensions.height,
            originalWidth:elementDimensions.width
            },
        restoreAfterFinish:true,
        afterSetup:function(effect){
            effect.element.makePositioned();
            effect.element.down().makePositioned();
            if(window.opera)effect.element.setStyle({
                top:''
            });
            effect.element.makeClipping().setStyle({
                height:'0px'
            }).show();
        },
        afterUpdateInternal:function(effect){
            effect.element.down().setStyle({
                bottom:(effect.dims[0]-effect.element.clientHeight)+'px'
                });
        },
        afterFinishInternal:function(effect){
            effect.element.undoClipping().undoPositioned();
            effect.element.down().undoPositioned().setStyle({
                bottom:oldInnerBottom
            });
        }
    },arguments[1]||{}));
};

Effect.SlideUp=function(element){
    element=$(element).cleanWhitespace();
    var oldInnerBottom=element.down().getStyle('bottom');
    var elementDimensions=element.getDimensions();
    return new Effect.Scale(element,window.opera?0:1,Object.extend({
        scaleContent:false,
        scaleX:false,
        scaleMode:'box',
        scaleFrom:100,
        scaleMode:{
            originalHeight:elementDimensions.height,
            originalWidth:elementDimensions.width
            },
        restoreAfterFinish:true,
        afterSetup:function(effect){
            effect.element.makePositioned();
            effect.element.down().makePositioned();
            if(window.opera)effect.element.setStyle({
                top:''
            });
            effect.element.makeClipping().show();
        },
        afterUpdateInternal:function(effect){
            effect.element.down().setStyle({
                bottom:(effect.dims[0]-effect.element.clientHeight)+'px'
                });
        },
        afterFinishInternal:function(effect){
            effect.element.hide().undoClipping().undoPositioned();
            effect.element.down().undoPositioned().setStyle({
                bottom:oldInnerBottom
            });
        }
    },arguments[1]||{}));
};

Effect.Squish=function(element){
    return new Effect.Scale(element,window.opera?1:0,{
        restoreAfterFinish:true,
        beforeSetup:function(effect){
            effect.element.makeClipping();
        },
        afterFinishInternal:function(effect){
            effect.element.hide().undoClipping();
        }
    });
};

Effect.Grow=function(element){
    element=$(element);
    var options=Object.extend({
        direction:'center',
        moveTransition:Effect.Transitions.sinoidal,
        scaleTransition:Effect.Transitions.sinoidal,
        opacityTransition:Effect.Transitions.full
        },arguments[1]||{});
    var oldStyle={
        top:element.style.top,
        left:element.style.left,
        height:element.style.height,
        width:element.style.width,
        opacity:element.getInlineOpacity()
        };

    var dims=element.getDimensions();
    var initialMoveX,initialMoveY;
    var moveX,moveY;
    switch(options.direction){
        case'top-left':
            initialMoveX=initialMoveY=moveX=moveY=0;
            break;
        case'top-right':
            initialMoveX=dims.width;
            initialMoveY=moveY=0;
            moveX=-dims.width;
            break;
        case'bottom-left':
            initialMoveX=moveX=0;
            initialMoveY=dims.height;
            moveY=-dims.height;
            break;
        case'bottom-right':
            initialMoveX=dims.width;
            initialMoveY=dims.height;
            moveX=-dims.width;
            moveY=-dims.height;
            break;
        case'center':
            initialMoveX=dims.width/2;
            initialMoveY=dims.height/2;
            moveX=-dims.width/2;
            moveY=-dims.height/2;
            break;
    }
    return new Effect.Move(element,{
        x:initialMoveX,
        y:initialMoveY,
        duration:0.01,
        beforeSetup:function(effect){
            effect.element.hide().makeClipping().makePositioned();
        },
        afterFinishInternal:function(effect){
            new Effect.Parallel([new Effect.Opacity(effect.element,{
                sync:true,
                to:1.0,
                from:0.0,
                transition:options.opacityTransition
                }),new Effect.Move(effect.element,{
                x:moveX,
                y:moveY,
                sync:true,
                transition:options.moveTransition
                }),new Effect.Scale(effect.element,100,{
                scaleMode:{
                    originalHeight:dims.height,
                    originalWidth:dims.width
                    },
                sync:true,
                scaleFrom:window.opera?1:0,
                transition:options.scaleTransition,
                restoreAfterFinish:true
            })],Object.extend({
                beforeSetup:function(effect){
                    effect.effects[0].element.setStyle({
                        height:'0px'
                    }).show();
                },
                afterFinishInternal:function(effect){
                    effect.effects[0].element.undoClipping().undoPositioned().setStyle(oldStyle);
                }
            },options))
        }
    });
};

Effect.Shrink=function(element){
    element=$(element);
    var options=Object.extend({
        direction:'center',
        moveTransition:Effect.Transitions.sinoidal,
        scaleTransition:Effect.Transitions.sinoidal,
        opacityTransition:Effect.Transitions.none
        },arguments[1]||{});
    var oldStyle={
        top:element.style.top,
        left:element.style.left,
        height:element.style.height,
        width:element.style.width,
        opacity:element.getInlineOpacity()
        };

    var dims=element.getDimensions();
    var moveX,moveY;
    switch(options.direction){
        case'top-left':
            moveX=moveY=0;
            break;
        case'top-right':
            moveX=dims.width;
            moveY=0;
            break;
        case'bottom-left':
            moveX=0;
            moveY=dims.height;
            break;
        case'bottom-right':
            moveX=dims.width;
            moveY=dims.height;
            break;
        case'center':
            moveX=dims.width/2;
            moveY=dims.height/2;
            break;
    }
    return new Effect.Parallel([new Effect.Opacity(element,{
        sync:true,
        to:0.0,
        from:1.0,
        transition:options.opacityTransition
        }),new Effect.Scale(element,window.opera?1:0,{
        sync:true,
        transition:options.scaleTransition,
        restoreAfterFinish:true
    }),new Effect.Move(element,{
        x:moveX,
        y:moveY,
        sync:true,
        transition:options.moveTransition
        })],Object.extend({
        beforeStartInternal:function(effect){
            effect.effects[0].element.makePositioned().makeClipping();
        },
        afterFinishInternal:function(effect){
            effect.effects[0].element.hide().undoClipping().undoPositioned().setStyle(oldStyle);
        }
    },options));
};

Effect.Pulsate=function(element){
    element=$(element);
    var options=arguments[1]||{};

    var oldOpacity=element.getInlineOpacity();
    var transition=options.transition||Effect.Transitions.sinoidal;
    var reverser=function(pos){
        return transition(1-Effect.Transitions.pulse(pos,options.pulses))
        };

    reverser.bind(transition);
    return new Effect.Opacity(element,Object.extend(Object.extend({
        duration:2.0,
        from:0,
        afterFinishInternal:function(effect){
            effect.element.setStyle({
                opacity:oldOpacity
            });
        }
    },options),{
        transition:reverser
    }));
};

Effect.Fold=function(element){
    element=$(element);
    var oldStyle={
        top:element.style.top,
        left:element.style.left,
        width:element.style.width,
        height:element.style.height
        };

    element.makeClipping();
    return new Effect.Scale(element,5,Object.extend({
        scaleContent:false,
        scaleX:false,
        afterFinishInternal:function(effect){
            new Effect.Scale(element,1,{
                scaleContent:false,
                scaleY:false,
                afterFinishInternal:function(effect){
                    effect.element.hide().undoClipping().setStyle(oldStyle);
                }
            });
    }
    },arguments[1]||{}));
};

Effect.Morph=Class.create(Effect.Base,{
    initialize:function(element){
        this.element=$(element);
        if(!this.element)throw(Effect._elementDoesNotExistError);
        var options=Object.extend({
            style:{}
        },arguments[1]||{});
    if(!Object.isString(options.style))this.style=$H(options.style);
    else{
        if(options.style.include(':'))
            this.style=options.style.parseStyle();
        else{
            this.element.addClassName(options.style);
            this.style=$H(this.element.getStyles());
            this.element.removeClassName(options.style);
            var css=this.element.getStyles();
            this.style=this.style.reject(function(style){
                return style.value==css[style.key];
            });
            options.afterFinishInternal=function(effect){
                effect.element.addClassName(effect.options.style);
                effect.transforms.each(function(transform){
                    effect.element.style[transform.style]='';
                });
            }
        }
    }
this.start(options);
},
setup:function(){
    function parseColor(color){
        if(!color||['rgba(0, 0, 0, 0)','transparent'].include(color))color='#ffffff';
        color=color.parseColor();
        return $R(0,2).map(function(i){
            return parseInt(color.slice(i*2+1,i*2+3),16)
            });
    }
    this.transforms=this.style.map(function(pair){
        var property=pair[0],value=pair[1],unit=null;
        if(value.parseColor('#zzzzzz')!='#zzzzzz'){
            value=value.parseColor();
            unit='color';
        }else if(property=='opacity'){
            value=parseFloat(value);
            if(Prototype.Browser.IE&&(!this.element.currentStyle.hasLayout))
                this.element.setStyle({
                    zoom:1
                });
        }else if(Element.CSS_LENGTH.test(value)){
            var components=value.match(/^([\+\-]?[0-9\.]+)(.*)$/);
            value=parseFloat(components[1]);
            unit=(components.length==3)?components[2]:null;
        }
        var originalValue=this.element.getStyle(property);
        return{
            style:property.camelize(),
            originalValue:unit=='color'?parseColor(originalValue):parseFloat(originalValue||0),
            targetValue:unit=='color'?parseColor(value):value,
            unit:unit
        };

    }.bind(this)).reject(function(transform){
    return((transform.originalValue==transform.targetValue)||(transform.unit!='color'&&(isNaN(transform.originalValue)||isNaN(transform.targetValue))))
    });
},
update:function(position){
    var style={},transform,i=this.transforms.length;
    while(i--)
        style[(transform=this.transforms[i]).style]=transform.unit=='color'?'#'+
        (Math.round(transform.originalValue[0]+
            (transform.targetValue[0]-transform.originalValue[0])*position)).toColorPart()+
        (Math.round(transform.originalValue[1]+
            (transform.targetValue[1]-transform.originalValue[1])*position)).toColorPart()+
        (Math.round(transform.originalValue[2]+
            (transform.targetValue[2]-transform.originalValue[2])*position)).toColorPart():(transform.originalValue+
            (transform.targetValue-transform.originalValue)*position).toFixed(3)+
        (transform.unit===null?'':transform.unit);
    this.element.setStyle(style,true);
}
});
Effect.Transform=Class.create({
    initialize:function(tracks){
        this.tracks=[];
        this.options=arguments[1]||{};

        this.addTracks(tracks);
    },
    addTracks:function(tracks){
        tracks.each(function(track){
            track=$H(track);
            var data=track.values().first();
            this.tracks.push($H({
                ids:track.keys().first(),
                effect:Effect.Morph,
                options:{
                    style:data
                }
            }));
        }.bind(this));
    return this;
},
play:function(){
    return new Effect.Parallel(this.tracks.map(function(track){
        var ids=track.get('ids'),effect=track.get('effect'),options=track.get('options');
        var elements=[$(ids)||$$(ids)].flatten();
        return elements.map(function(e){
            return new effect(e,Object.extend({
                sync:true
            },options))
            });
    }).flatten(),this.options);
}
});
Element.CSS_PROPERTIES=$w('backgroundColor backgroundPosition borderBottomColor borderBottomStyle '+'borderBottomWidth borderLeftColor borderLeftStyle borderLeftWidth '+'borderRightColor borderRightStyle borderRightWidth borderSpacing '+'borderTopColor borderTopStyle borderTopWidth bottom clip color '+'fontSize fontWeight height left letterSpacing lineHeight '+'marginBottom marginLeft marginRight marginTop markerOffset maxHeight '+'maxWidth minHeight minWidth opacity outlineColor outlineOffset '+'outlineWidth paddingBottom paddingLeft paddingRight paddingTop '+'right textIndent top width wordSpacing zIndex');
Element.CSS_LENGTH=/^(([\+\-]?[0-9\.]+)(em|ex|px|in|cm|mm|pt|pc|\%))|0$/;
String.__parseStyleElement=document.createElement('div');
String.prototype.parseStyle=function(){
    var style,styleRules=$H();
    if(Prototype.Browser.WebKit)
        style=new Element('div',{
            style:this
        }).style;
    else{
        String.__parseStyleElement.innerHTML='<div style="'+this+'"></div>';
        style=String.__parseStyleElement.childNodes[0].style;
    }
    Element.CSS_PROPERTIES.each(function(property){
        if(style[property])styleRules.set(property,style[property]);
    });
    if(Prototype.Browser.IE&&this.include('opacity'))
        styleRules.set('opacity',this.match(/opacity:\s*((?:0|1)?(?:\.\d*)?)/)[1]);
    return styleRules;
};

if(document.defaultView&&document.defaultView.getComputedStyle){
    Element.getStyles=function(element){
        var css=document.defaultView.getComputedStyle($(element),null);
        return Element.CSS_PROPERTIES.inject({},function(styles,property){
            styles[property]=css[property];
            return styles;
        });
    };

}else{
    Element.getStyles=function(element){
        element=$(element);
        var css=element.currentStyle,styles;
        styles=Element.CSS_PROPERTIES.inject({},function(hash,property){
            hash.set(property,css[property]);
            return hash;
        });
        if(!styles.opacity)styles.set('opacity',element.getOpacity());
        return styles;
    };

};

Effect.Methods={
    morph:function(element,style){
        element=$(element);
        new Effect.Morph(element,Object.extend({
            style:style
        },arguments[2]||{}));
        return element;
    },
    visualEffect:function(element,effect,options){
        element=$(element)
        var s=effect.dasherize().camelize(),klass=s.charAt(0).toUpperCase()+s.substring(1);
        new Effect[klass](element,options);
        return element;
    },
    highlight:function(element,options){
        element=$(element);
        new Effect.Highlight(element,options);
        return element;
    }
};

$w('fade appear grow shrink fold blindUp blindDown slideUp slideDown '+'pulsate shake puff squish switchOff dropOut').each(function(effect){
    Effect.Methods[effect]=function(element,options){
        element=$(element);
        Effect[effect.charAt(0).toUpperCase()+effect.substring(1)](element,options);
        return element;
    }
});
$w('getInlineOpacity forceRerendering setContentZoom collectTextNodes collectTextNodesIgnoreClass getStyles').each(function(f){
    Effect.Methods[f]=Element[f];
});
Element.addMethods(Effect.Methods);
if(typeof Effect=='undefined')
    throw("controls.js requires including script.aculo.us' effects.js library");
var Autocompleter={}
Autocompleter.Base=Class.create({
    baseInitialize:function(element,update,options){
        element=$(element)
        this.element=element;
        this.update=$(update);
        this.hasFocus=false;
        this.changed=false;
        this.active=false;
        this.index=0;
        this.entryCount=0;
        this.oldElementValue=this.element.value;
        if(this.setOptions)
            this.setOptions(options);else
            this.options=options||{};

        this.options.paramName=this.options.paramName||this.element.name;
        this.options.tokens=this.options.tokens||[];
        this.options.frequency=this.options.frequency||0.4;
        this.options.minChars=this.options.minChars||1;
        this.options.onShow=this.options.onShow||function(element,update){
            if(!update.style.position||update.style.position=='absolute'){
                update.style.position='absolute';
                Position.clone(element,update,{
                    setHeight:false,
                    offsetTop:element.offsetHeight
                    });
            }
            Effect.Appear(update,{
                duration:0.15
            });
        };

        this.options.onHide=this.options.onHide||function(element,update){
            new Effect.Fade(update,{
                duration:0.15
            })
            };

        if(typeof(this.options.tokens)=='string')
            this.options.tokens=new Array(this.options.tokens);
        if(!this.options.tokens.include('\n'))
            this.options.tokens.push('\n');
        this.observer=null;
        this.element.setAttribute('autocomplete','off');
        Element.hide(this.update);
        Event.observe(this.element,'blur',this.onBlur.bindAsEventListener(this));
        Event.observe(this.element,'keypress',this.onKeyPress.bindAsEventListener(this));
    },
    show:function(){
        if(Element.getStyle(this.update,'display')=='none')this.options.onShow(this.element,this.update);
        if(!this.iefix&&(Prototype.Browser.IE)&&(Element.getStyle(this.update,'position')=='absolute')){
            new Insertion.After(this.update,'<iframe id="'+this.update.id+'_iefix" '+'style="display:none;position:absolute;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0);" '+'src="javascript:false;" frameborder="0" scrolling="no"></iframe>');
            this.iefix=$(this.update.id+'_iefix');
        }
        if(this.iefix)setTimeout(this.fixIEOverlapping.bind(this),50);
    },
    fixIEOverlapping:function(){
        Position.clone(this.update,this.iefix,{
            setTop:(!this.update.style.height)
            });
        this.iefix.style.zIndex=1;
        this.update.style.zIndex=2;
        Element.show(this.iefix);
    },
    hide:function(){
        this.stopIndicator();
        if(Element.getStyle(this.update,'display')!='none')this.options.onHide(this.element,this.update);
        if(this.iefix)Element.hide(this.iefix);
    },
    startIndicator:function(){
        if(this.options.indicator)Element.show(this.options.indicator);
    },
    stopIndicator:function(){
        if(this.options.indicator)Element.hide(this.options.indicator);
    },
    onKeyPress:function(event){
        if(this.active)
            switch(event.keyCode){
                case Event.KEY_TAB:case Event.KEY_RETURN:
                    this.selectEntry();
                    Event.stop(event);
                case Event.KEY_ESC:
                    this.hide();
                    this.active=false;
                    Event.stop(event);
                    return;
                case Event.KEY_LEFT:case Event.KEY_RIGHT:
                    return;
                case Event.KEY_UP:
                    this.markPrevious();
                    this.render();
                    if(Prototype.Browser.WebKit)Event.stop(event);
                    return;
                case Event.KEY_DOWN:
                    this.markNext();
                    this.render();
                    if(Prototype.Browser.WebKit)Event.stop(event);
                    return;
            }
        else
        if(event.keyCode==Event.KEY_TAB||event.keyCode==Event.KEY_RETURN||(Prototype.Browser.WebKit>0&&event.keyCode==0))return;
        this.changed=true;
        this.hasFocus=true;
        if(this.observer)clearTimeout(this.observer);
        this.observer=setTimeout(this.onObserverEvent.bind(this),this.options.frequency*1000);
    },
    activate:function(){
        this.changed=false;
        this.hasFocus=true;
        this.getUpdatedChoices();
    },
    onHover:function(event){
        var element=Event.findElement(event,'LI');
        if(this.index!=element.autocompleteIndex)

        {
            this.index=element.autocompleteIndex;
            this.render();
        }
        Event.stop(event);
    },
    onClick:function(event){
        var element=Event.findElement(event,'LI');
        this.index=element.autocompleteIndex;
        this.selectEntry();
        this.hide();
    },
    onBlur:function(event){
        setTimeout(this.hide.bind(this),250);
        this.hasFocus=false;
        this.active=false;
    },
    render:function(){
        if(this.entryCount>0){
            for(var i=0;i<this.entryCount;i++)
                this.index==i?Element.addClassName(this.getEntry(i),"selected"):Element.removeClassName(this.getEntry(i),"selected");
            if(this.hasFocus){
                this.show();
                this.active=true;
            }
        }else{
        this.active=false;
        this.hide();
    }
},
markPrevious:function(){
    if(this.index>0)this.index--
    else this.index=this.entryCount-1;
    this.getEntry(this.index).scrollIntoView(true);
},
markNext:function(){
    if(this.index<this.entryCount-1)this.index++
    else this.index=0;
    this.getEntry(this.index).scrollIntoView(false);
},
getEntry:function(index){
    return this.update.firstChild.childNodes[index];
},
getCurrentEntry:function(){
    return this.getEntry(this.index);
},
selectEntry:function(){
    this.active=false;
    this.updateElement(this.getCurrentEntry());
},
updateElement:function(selectedElement){
    if(this.options.updateElement){
        this.options.updateElement(selectedElement);
        return;
    }
    var value='';
    if(this.options.select){
        var nodes=$(selectedElement).select('.'+this.options.select)||[];
        if(nodes.length>0)value=Element.collectTextNodes(nodes[0],this.options.select);
    }else
        value=Element.collectTextNodesIgnoreClass(selectedElement,'informal');
    var bounds=this.getTokenBounds();
    if(bounds[0]!=-1){
        var newValue=this.element.value.substr(0,bounds[0]);
        var whitespace=this.element.value.substr(bounds[0]).match(/^\s+/);
        if(whitespace)
            newValue+=whitespace[0];
        this.element.value=newValue+value+this.element.value.substr(bounds[1]);
    }else{
        this.element.value=value;
    }
    this.oldElementValue=this.element.value;
    this.element.focus();
    if(this.options.afterUpdateElement)
        this.options.afterUpdateElement(this.element,selectedElement);
},
updateChoices:function(choices){
    if(!this.changed&&this.hasFocus){
        this.update.innerHTML=choices;
        Element.cleanWhitespace(this.update);
        Element.cleanWhitespace(this.update.down());
        if(this.update.firstChild&&this.update.down().childNodes){
            this.entryCount=this.update.down().childNodes.length;
            for(var i=0;i<this.entryCount;i++){
                var entry=this.getEntry(i);
                entry.autocompleteIndex=i;
                this.addObservers(entry);
            }
            }else{
        this.entryCount=0;
    }
    this.stopIndicator();
    this.index=0;
    if(this.entryCount==1&&this.options.autoSelect){
        this.selectEntry();
        this.hide();
    }else{
        this.render();
    }
}
},
addObservers:function(element){
    Event.observe(element,"mouseover",this.onHover.bindAsEventListener(this));
    Event.observe(element,"click",this.onClick.bindAsEventListener(this));
},
onObserverEvent:function(){
    this.changed=false;
    this.tokenBounds=null;
    if(this.getToken().length>=this.options.minChars){
        this.getUpdatedChoices();
    }else{
        this.active=false;
        this.hide();
    }
    this.oldElementValue=this.element.value;
},
getToken:function(){
    var bounds=this.getTokenBounds();
    return this.element.value.substring(bounds[0],bounds[1]).strip();
},
getTokenBounds:function(){
    if(null!=this.tokenBounds)return this.tokenBounds;
    var value=this.element.value;
    if(value.strip().empty())return[-1,0];
    var diff=arguments.callee.getFirstDifferencePos(value,this.oldElementValue);
    var offset=(diff==this.oldElementValue.length?1:0);
    var prevTokenPos=-1,nextTokenPos=value.length;
    var tp;
    for(var index=0,l=this.options.tokens.length;index<l;++index){
        tp=value.lastIndexOf(this.options.tokens[index],diff+offset-1);
        if(tp>prevTokenPos)prevTokenPos=tp;
        tp=value.indexOf(this.options.tokens[index],diff+offset);
        if(-1!=tp&&tp<nextTokenPos)nextTokenPos=tp;
    }
    return(this.tokenBounds=[prevTokenPos+1,nextTokenPos]);
}
});
Autocompleter.Base.prototype.getTokenBounds.getFirstDifferencePos=function(newS,oldS){
    var boundary=Math.min(newS.length,oldS.length);
    for(var index=0;index<boundary;++index)
        if(newS[index]!=oldS[index])
            return index;return boundary;
};

Ajax.Autocompleter=Class.create(Autocompleter.Base,{
    initialize:function(element,update,url,options){
        this.baseInitialize(element,update,options);
        this.options.asynchronous=true;
        this.options.onComplete=this.onComplete.bind(this);
        this.options.defaultParams=this.options.parameters||null;
        this.url=url;
    },
    getUpdatedChoices:function(){
        this.startIndicator();
        var entry=encodeURIComponent(this.options.paramName)+'='+
        encodeURIComponent(this.getToken());
        this.options.parameters=this.options.callback?this.options.callback(this.element,entry):entry;
        if(this.options.defaultParams)
            this.options.parameters+='&'+this.options.defaultParams;
        new Ajax.Request(this.url,this.options);
    },
    onComplete:function(request){
        this.updateChoices(request.responseText);
    }
});
Autocompleter.Local=Class.create(Autocompleter.Base,{
    initialize:function(element,update,array,options){
        this.baseInitialize(element,update,options);
        this.options.array=array;
    },
    getUpdatedChoices:function(){
        this.updateChoices(this.options.selector(this));
    },
    setOptions:function(options){
        this.options=Object.extend({
            choices:10,
            partialSearch:true,
            partialChars:2,
            ignoreCase:true,
            fullSearch:false,
            selector:function(instance){
                var ret=[];
                var partial=[];
                var entry=instance.getToken();
                var count=0;
                for(var i=0;i<instance.options.array.length&&ret.length<instance.options.choices;i++){
                    var elem=instance.options.array[i];
                    var foundPos=instance.options.ignoreCase?elem.toLowerCase().indexOf(entry.toLowerCase()):elem.indexOf(entry);
                    while(foundPos!=-1){
                        if(foundPos==0&&elem.length!=entry.length){
                            ret.push("<li><strong>"+elem.substr(0,entry.length)+"</strong>"+
                                elem.substr(entry.length)+"</li>");
                            break;
                        }else if(entry.length>=instance.options.partialChars&&instance.options.partialSearch&&foundPos!=-1){
                            if(instance.options.fullSearch||/\s/.test(elem.substr(foundPos-1,1))){
                                partial.push("<li>"+elem.substr(0,foundPos)+"<strong>"+
                                    elem.substr(foundPos,entry.length)+"</strong>"+elem.substr(foundPos+entry.length)+"</li>");
                                break;
                            }
                        }
                    foundPos=instance.options.ignoreCase?elem.toLowerCase().indexOf(entry.toLowerCase(),foundPos+1):elem.indexOf(entry,foundPos+1);
                }
                }
        if(partial.length)
            ret=ret.concat(partial.slice(0,instance.options.choices-ret.length))
        return"<ul>"+ret.join('')+"</ul>";
        }
    },options||{});
}
});
Field.scrollFreeActivate=function(field){
    setTimeout(function(){
        Field.activate(field);
    },1);
}
Ajax.InPlaceEditor=Class.create({
    initialize:function(element,url,options){
        this.url=url;
        this.element=element=$(element);
        this.prepareOptions();
        this._controls={};

        arguments.callee.dealWithDeprecatedOptions(options);
        Object.extend(this.options,options||{});
        if(!this.options.formId&&this.element.id){
            this.options.formId=this.element.id+'-inplaceeditor';
            if($(this.options.formId))
                this.options.formId='';
        }
        if(this.options.externalControl)
            this.options.externalControl=$(this.options.externalControl);
        if(!this.options.externalControl)
            this.options.externalControlOnly=false;
        this._originalBackground=this.element.getStyle('background-color')||'transparent';
        this.element.title=this.options.clickToEditText;
        this._boundCancelHandler=this.handleFormCancellation.bind(this);
        this._boundComplete=(this.options.onComplete||Prototype.emptyFunction).bind(this);
        this._boundFailureHandler=this.handleAJAXFailure.bind(this);
        this._boundSubmitHandler=this.handleFormSubmission.bind(this);
        this._boundWrapperHandler=this.wrapUp.bind(this);
        this.registerListeners();
    },
    checkForEscapeOrReturn:function(e){
        if(!this._editing||e.ctrlKey||e.altKey||e.shiftKey)return;
        if(Event.KEY_ESC==e.keyCode)
            this.handleFormCancellation(e);
        else if(Event.KEY_RETURN==e.keyCode)
            this.handleFormSubmission(e);
    },
    createControl:function(mode,handler,extraClasses){
        var control=this.options[mode+'Control'];
        var text=this.options[mode+'Text'];
        if('button'==control){
            var btn=document.createElement('input');
            btn.type='submit';
            btn.value=text;
            btn.className='editor_'+mode+'_button';
            if('cancel'==mode)
                btn.onclick=this._boundCancelHandler;
            this._form.appendChild(btn);
            this._controls[mode]=btn;
        }else if('link'==control){
            var link=document.createElement('a');
            link.href='#';
            link.appendChild(document.createTextNode(text));
            link.onclick='cancel'==mode?this._boundCancelHandler:this._boundSubmitHandler;
            link.className='editor_'+mode+'_link';
            if(extraClasses)
                link.className+=' '+extraClasses;
            this._form.appendChild(link);
            this._controls[mode]=link;
        }
    },
createEditField:function(){
    var text=(this.options.loadTextURL?this.options.loadingText:this.getText());
    var fld;
    if(1>=this.options.rows&&!/\r|\n/.test(this.getText())){
        fld=document.createElement('input');
        fld.type='text';
        var size=this.options.size||this.options.cols||0;
        if(0<size)fld.size=size;
    }else{
        fld=document.createElement('textarea');
        fld.rows=(1>=this.options.rows?this.options.autoRows:this.options.rows);
        fld.cols=this.options.cols||40;
    }
    fld.name=this.options.paramName;
    fld.value=text;
    fld.className='editor_field';
    if(this.options.submitOnBlur)
        fld.onblur=this._boundSubmitHandler;
    this._controls.editor=fld;
    if(this.options.loadTextURL)
        this.loadExternalText();
    this._form.appendChild(this._controls.editor);
},
createForm:function(){
    var ipe=this;
    function addText(mode,condition){
        var text=ipe.options['text'+mode+'Controls'];
        if(!text||condition===false)return;
        ipe._form.appendChild(document.createTextNode(text));
    };

    this._form=$(document.createElement('form'));
    this._form.id=this.options.formId;
    this._form.addClassName(this.options.formClassName);
    this._form.onsubmit=this._boundSubmitHandler;
    this.createEditField();
    if('textarea'==this._controls.editor.tagName.toLowerCase())
        this._form.appendChild(document.createElement('br'));
    if(this.options.onFormCustomization)
        this.options.onFormCustomization(this,this._form);
    addText('Before',this.options.okControl||this.options.cancelControl);
    this.createControl('ok',this._boundSubmitHandler);
    addText('Between',this.options.okControl&&this.options.cancelControl);
    this.createControl('cancel',this._boundCancelHandler,'editor_cancel');
    addText('After',this.options.okControl||this.options.cancelControl);
},
destroy:function(){
    if(this._oldInnerHTML)
        this.element.innerHTML=this._oldInnerHTML;
    this.leaveEditMode();
    this.unregisterListeners();
},
enterEditMode:function(e){
    if(this._saving||this._editing)return;
    this._editing=true;
    this.triggerCallback('onEnterEditMode');
    if(this.options.externalControl)
        this.options.externalControl.hide();
    this.element.hide();
    this.createForm();
    this.element.parentNode.insertBefore(this._form,this.element);
    if(!this.options.loadTextURL)
        this.postProcessEditField();
    if(e)Event.stop(e);
},
enterHover:function(e){
    if(this.options.hoverClassName)
        this.element.addClassName(this.options.hoverClassName);
    if(this._saving)return;
    this.triggerCallback('onEnterHover');
},
getText:function(){
    return this.element.innerHTML;
},
handleAJAXFailure:function(transport){
    this.triggerCallback('onFailure',transport);
    if(this._oldInnerHTML){
        this.element.innerHTML=this._oldInnerHTML;
        this._oldInnerHTML=null;
    }
},
handleFormCancellation:function(e){
    this.wrapUp();
    if(e)Event.stop(e);
},
handleFormSubmission:function(e){
    var form=this._form;
    var value=$F(this._controls.editor);
    this.prepareSubmission();
    var params=this.options.callback(form,value)||'';
    if(Object.isString(params))
        params=params.toQueryParams();
    params.editorId=this.element.id;
    if(this.options.htmlResponse){
        var options=Object.extend({
            evalScripts:true
        },this.options.ajaxOptions);
        Object.extend(options,{
            parameters:params,
            onComplete:this._boundWrapperHandler,
            onFailure:this._boundFailureHandler
            });
        new Ajax.Updater({
            success:this.element
            },this.url,options);
    }else{
        var options=Object.extend({
            method:'get'
        },this.options.ajaxOptions);
        Object.extend(options,{
            parameters:params,
            onComplete:this._boundWrapperHandler,
            onFailure:this._boundFailureHandler
            });
        new Ajax.Request(this.url,options);
    }
    if(e)Event.stop(e);
},
leaveEditMode:function(){
    this.element.removeClassName(this.options.savingClassName);
    this.removeForm();
    this.leaveHover();
    this.element.style.backgroundColor=this._originalBackground;
    this.element.show();
    if(this.options.externalControl)
        this.options.externalControl.show();
    this._saving=false;
    this._editing=false;
    this._oldInnerHTML=null;
    this.triggerCallback('onLeaveEditMode');
},
leaveHover:function(e){
    if(this.options.hoverClassName)
        this.element.removeClassName(this.options.hoverClassName);
    if(this._saving)return;
    this.triggerCallback('onLeaveHover');
},
loadExternalText:function(){
    this._form.addClassName(this.options.loadingClassName);
    this._controls.editor.disabled=true;
    var options=Object.extend({
        method:'get'
    },this.options.ajaxOptions);
    Object.extend(options,{
        parameters:'editorId='+encodeURIComponent(this.element.id),
        onComplete:Prototype.emptyFunction,
        onSuccess:function(transport){
            this._form.removeClassName(this.options.loadingClassName);
            var text=transport.responseText;
            if(this.options.stripLoadedTextTags)
                text=text.stripTags();
            this._controls.editor.value=text;
            this._controls.editor.disabled=false;
            this.postProcessEditField();
        }.bind(this),
        onFailure:this._boundFailureHandler
        });
    new Ajax.Request(this.options.loadTextURL,options);
},
postProcessEditField:function(){
    var fpc=this.options.fieldPostCreation;
    if(fpc)
        $(this._controls.editor)['focus'==fpc?'focus':'activate']();
},
prepareOptions:function(){
    this.options=Object.clone(Ajax.InPlaceEditor.DefaultOptions);
    Object.extend(this.options,Ajax.InPlaceEditor.DefaultCallbacks);
    [this._extraDefaultOptions].flatten().compact().each(function(defs){
        Object.extend(this.options,defs);
    }.bind(this));
},
prepareSubmission:function(){
    this._saving=true;
    this.removeForm();
    this.leaveHover();
    this.showSaving();
},
registerListeners:function(){
    this._listeners={};

    var listener;
    $H(Ajax.InPlaceEditor.Listeners).each(function(pair){
        listener=this[pair.value].bind(this);
        this._listeners[pair.key]=listener;
        if(!this.options.externalControlOnly)
            this.element.observe(pair.key,listener);
        if(this.options.externalControl)
            this.options.externalControl.observe(pair.key,listener);
    }.bind(this));
},
removeForm:function(){
    if(!this._form)return;
    this._form.remove();
    this._form=null;
    this._controls={};

},
showSaving:function(){
    this._oldInnerHTML=this.element.innerHTML;
    this.element.innerHTML=this.options.savingText;
    this.element.addClassName(this.options.savingClassName);
    this.element.style.backgroundColor=this._originalBackground;
    this.element.show();
},
triggerCallback:function(cbName,arg){
    if('function'==typeof this.options[cbName]){
        this.options[cbName](this,arg);
    }
},
unregisterListeners:function(){
    $H(this._listeners).each(function(pair){
        if(!this.options.externalControlOnly)
            this.element.stopObserving(pair.key,pair.value);
        if(this.options.externalControl)
            this.options.externalControl.stopObserving(pair.key,pair.value);
    }.bind(this));
},
wrapUp:function(transport){
    this.leaveEditMode();
    this._boundComplete(transport,this.element);
}
});
Object.extend(Ajax.InPlaceEditor.prototype,{
    dispose:Ajax.InPlaceEditor.prototype.destroy
    });
Ajax.InPlaceCollectionEditor=Class.create(Ajax.InPlaceEditor,{
    initialize:function($super,element,url,options){
        this._extraDefaultOptions=Ajax.InPlaceCollectionEditor.DefaultOptions;
        $super(element,url,options);
    },
    createEditField:function(){
        var list=document.createElement('select');
        list.name=this.options.paramName;
        list.size=1;
        this._controls.editor=list;
        this._collection=this.options.collection||[];
        if(this.options.loadCollectionURL)
            this.loadCollection();else
            this.checkForExternalText();
        this._form.appendChild(this._controls.editor);
    },
    loadCollection:function(){
        this._form.addClassName(this.options.loadingClassName);
        this.showLoadingText(this.options.loadingCollectionText);
        var options=Object.extend({
            method:'get'
        },this.options.ajaxOptions);
        Object.extend(options,{
            parameters:'editorId='+encodeURIComponent(this.element.id),
            onComplete:Prototype.emptyFunction,
            onSuccess:function(transport){
                var js=transport.responseText.strip();
                if(!/^\[.*\]$/.test(js))
                    throw'Server returned an invalid collection representation.';
                this._collection=eval(js);
                this.checkForExternalText();
            }.bind(this),
            onFailure:this.onFailure
            });
        new Ajax.Request(this.options.loadCollectionURL,options);
    },
    showLoadingText:function(text){
        this._controls.editor.disabled=true;
        var tempOption=this._controls.editor.firstChild;
        if(!tempOption){
            tempOption=document.createElement('option');
            tempOption.value='';
            this._controls.editor.appendChild(tempOption);
            tempOption.selected=true;
        }
        tempOption.update((text||'').stripScripts().stripTags());
    },
    checkForExternalText:function(){
        this._text=this.getText();
        if(this.options.loadTextURL)
            this.loadExternalText();else
            this.buildOptionList();
    },
    loadExternalText:function(){
        this.showLoadingText(this.options.loadingText);
        var options=Object.extend({
            method:'get'
        },this.options.ajaxOptions);
        Object.extend(options,{
            parameters:'editorId='+encodeURIComponent(this.element.id),
            onComplete:Prototype.emptyFunction,
            onSuccess:function(transport){
                this._text=transport.responseText.strip();
                this.buildOptionList();
            }.bind(this),
            onFailure:this.onFailure
            });
        new Ajax.Request(this.options.loadTextURL,options);
    },
    buildOptionList:function(){
        this._form.removeClassName(this.options.loadingClassName);
        this._collection=this._collection.map(function(entry){
            return 2===entry.length?entry:[entry,entry].flatten();
        });
        var marker=('value'in this.options)?this.options.value:this._text;
        var textFound=this._collection.any(function(entry){
            return entry[0]==marker;
        }.bind(this));
        this._controls.editor.update('');
        var option;
        this._collection.each(function(entry,index){
            option=document.createElement('option');
            option.value=entry[0];
            option.selected=textFound?entry[0]==marker:0==index;
            option.appendChild(document.createTextNode(entry[1]));
            this._controls.editor.appendChild(option);
        }.bind(this));
        this._controls.editor.disabled=false;
        Field.scrollFreeActivate(this._controls.editor);
    }
});
Ajax.InPlaceEditor.prototype.initialize.dealWithDeprecatedOptions=function(options){
    if(!options)return;
    function fallback(name,expr){
        if(name in options||expr===undefined)return;
        options[name]=expr;
    };

    fallback('cancelControl',(options.cancelLink?'link':(options.cancelButton?'button':options.cancelLink==options.cancelButton==false?false:undefined)));
    fallback('okControl',(options.okLink?'link':(options.okButton?'button':options.okLink==options.okButton==false?false:undefined)));
    fallback('highlightColor',options.highlightcolor);
    fallback('highlightEndColor',options.highlightendcolor);
};

Object.extend(Ajax.InPlaceEditor,{
    DefaultOptions:{
        ajaxOptions:{},
        autoRows:3,
        cancelControl:'link',
        cancelText:'cancel',
        clickToEditText:'Click to edit',
        externalControl:null,
        externalControlOnly:false,
        fieldPostCreation:'activate',
        formClassName:'inplaceeditor-form',
        formId:null,
        highlightColor:'#ffff99',
        highlightEndColor:'#ffffff',
        hoverClassName:'',
        htmlResponse:true,
        loadingClassName:'inplaceeditor-loading',
        loadingText:'Loading...',
        okControl:'button',
        okText:'ok',
        paramName:'value',
        rows:1,
        savingClassName:'inplaceeditor-saving',
        savingText:'Saving...',
        size:0,
        stripLoadedTextTags:false,
        submitOnBlur:false,
        textAfterControls:'',
        textBeforeControls:'',
        textBetweenControls:''
    },
    DefaultCallbacks:{
        callback:function(form){
            return Form.serialize(form);
        },
        onComplete:function(transport,element){
            new Effect.Highlight(element,{
                startcolor:this.options.highlightColor,
                keepBackgroundImage:true
            });
        },
        onEnterEditMode:null,
        onEnterHover:function(ipe){
            ipe.element.style.backgroundColor=ipe.options.highlightColor;
            if(ipe._effect)
                ipe._effect.cancel();
        },
        onFailure:function(transport,ipe){
            alert('Error communication with the server: '+transport.responseText.stripTags());
        },
        onFormCustomization:null,
        onLeaveEditMode:null,
        onLeaveHover:function(ipe){
            ipe._effect=new Effect.Highlight(ipe.element,{
                startcolor:ipe.options.highlightColor,
                endcolor:ipe.options.highlightEndColor,
                restorecolor:ipe._originalBackground,
                keepBackgroundImage:true
            });
        }
    },
Listeners:{
    click:'enterEditMode',
    keydown:'checkForEscapeOrReturn',
    mouseover:'enterHover',
    mouseout:'leaveHover'
}
});
Ajax.InPlaceCollectionEditor.DefaultOptions={
    loadingCollectionText:'Loading options...'
};

Form.Element.DelayedObserver=Class.create({
    initialize:function(element,delay,callback){
        this.delay=delay||0.5;
        this.element=$(element);
        this.callback=callback;
        this.timer=null;
        this.lastValue=$F(this.element);
        Event.observe(this.element,'keyup',this.delayedListener.bindAsEventListener(this));
    },
    delayedListener:function(event){
        if(this.lastValue==$F(this.element))return;
        if(this.timer)clearTimeout(this.timer);
        this.timer=setTimeout(this.onTimerEvent.bind(this),this.delay*1000);
        this.lastValue=$F(this.element);
    },
    onTimerEvent:function(){
        this.timer=null;
        this.callback(this.element,$F(this.element));
    }
});
var Scriptaculous={
    Version:'1.8.0',
    require:function(libraryName){
        document.write('<script type="text/javascript" src="'+libraryName+'"><\/script>');
    },
    REQUIRED_PROTOTYPE:'1.6.0',
    load:function(){
        function convertVersionString(versionString){
            var r=versionString.split('.');
            return parseInt(r[0])*100000+parseInt(r[1])*1000+parseInt(r[2]);
        }
        if((typeof Prototype=='undefined')||(typeof Element=='undefined')||(typeof Element.Methods=='undefined')||(convertVersionString(Prototype.Version)<convertVersionString(Scriptaculous.REQUIRED_PROTOTYPE)))
            throw("script.aculo.us requires the Prototype JavaScript framework >= "+
                Scriptaculous.REQUIRED_PROTOTYPE);
        $A(document.getElementsByTagName("script")).findAll(function(s){
            return(s.src&&s.src.match(/scriptaculous\.js(\?.*)?$/))
            }).each(function(s){
            var path=s.src.replace(/scriptaculous\.js(\?.*)?$/,'');
            var includes=s.src.match(/\?.*load=([a-z,]*)/);
            (includes?includes[1]:'builder,effects,dragdrop,controls,slider,sound').split(',').each(function(include){
                Scriptaculous.require(path+include+'.js')
                });
        });
    }
}
Scriptaculous.load();
if(typeof YAHOO=="undefined"||!YAHOO){
    var YAHOO={};

}
YAHOO.namespace=function(){
    var A=arguments,E=null,C,B,D;
    for(C=0;C<A.length;C=C+1){
        D=A[C].split(".");
        E=YAHOO;
        for(B=(D[0]=="YAHOO")?1:0;B<D.length;B=B+1){
            E[D[B]]=E[D[B]]||{};

            E=E[D[B]];
        }
        }
        return E;
};

YAHOO.log=function(D,A,C){
    var B=YAHOO.widget.Logger;
    if(B&&B.log){
        return B.log(D,A,C);
    }else{
        return false;
    }
};

YAHOO.register=function(A,E,D){
    var I=YAHOO.env.modules;
    if(!I[A]){
        I[A]={
            versions:[],
            builds:[]
        };

}
var B=I[A],H=D.version,G=D.build,F=YAHOO.env.listeners;
B.name=A;
B.version=H;
B.build=G;
B.versions.push(H);
    B.builds.push(G);
    B.mainClass=E;
    for(var C=0;C<F.length;C=C+1){
    F[C](B);
}
if(E){
    E.VERSION=H;
    E.BUILD=G;
}else{
    YAHOO.log("mainClass is undefined for module "+A,"warn");
}
};

YAHOO.env=YAHOO.env||{
    modules:[],
    listeners:[]
};

YAHOO.env.getVersion=function(A){
    return YAHOO.env.modules[A]||null;
};

YAHOO.env.ua=function(){
    var C={
        ie:0,
        opera:0,
        gecko:0,
        webkit:0,
        mobile:null
    };

    var B=navigator.userAgent,A;
    if((/KHTML/).test(B)){
        C.webkit=1;
    }
    A=B.match(/AppleWebKit\/([^\s]*)/);
    if(A&&A[1]){
        C.webkit=parseFloat(A[1]);
        if(/ Mobile\//.test(B)){
            C.mobile="Apple";
        }else{
            A=B.match(/NokiaN[^\/]*/);
            if(A){
                C.mobile=A[0];
            }
        }
    }
if(!C.webkit){
    A=B.match(/Opera[\s\/]([^\s]*)/);
    if(A&&A[1]){
        C.opera=parseFloat(A[1]);
        A=B.match(/Opera Mini[^;]*/);
        if(A){
            C.mobile=A[0];
        }
    }else{
    A=B.match(/MSIE\s([^;]*)/);
    if(A&&A[1]){
        C.ie=parseFloat(A[1]);
    }else{
        A=B.match(/Gecko\/([^\s]*)/);
        if(A){
            C.gecko=1;
            A=B.match(/rv:([^\s\)]*)/);
            if(A&&A[1]){
                C.gecko=parseFloat(A[1]);
            }
        }
    }
}
}
return C;
}();
(function(){
    YAHOO.namespace("util","widget","example");
    if("undefined"!==typeof YAHOO_config){
        var B=YAHOO_config.listener,A=YAHOO.env.listeners,D=true,C;
        if(B){
            for(C=0;C<A.length;C=C+1){
                if(A[C]==B){
                    D=false;
                    break;
                }
            }
            if(D){
            A.push(B);
        }
    }
}
})();
YAHOO.lang=YAHOO.lang||{
    isArray:function(B){
        if(B){
            var A=YAHOO.lang;
            return A.isNumber(B.length)&&A.isFunction(B.splice);
        }
        return false;
    },
    isBoolean:function(A){
        return typeof A==="boolean";
    },
    isFunction:function(A){
        return typeof A==="function";
    },
    isNull:function(A){
        return A===null;
    },
    isNumber:function(A){
        return typeof A==="number"&&isFinite(A);
    },
    isObject:function(A){
        return(A&&(typeof A==="object"||YAHOO.lang.isFunction(A)))||false;
    },
    isString:function(A){
        return typeof A==="string";
    },
    isUndefined:function(A){
        return typeof A==="undefined";
    },
    hasOwnProperty:function(A,B){
        if(Object.prototype.hasOwnProperty){
            return A.hasOwnProperty(B);
        }
        return!YAHOO.lang.isUndefined(A[B])&&A.constructor.prototype[B]!==A[B];
    },
    _IEEnumFix:function(C,B){
        if(YAHOO.env.ua.ie){
            var E=["toString","valueOf"],A;
            for(A=0;A<E.length;A=A+1){
                var F=E[A],D=B[F];
                if(YAHOO.lang.isFunction(D)&&D!=Object.prototype[F]){
                    C[F]=D;
                }
            }
            }
    },
extend:function(D,E,C){
    if(!E||!D){
        throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
    }
    var B=function(){};

    B.prototype=E.prototype;
    D.prototype=new B();
    D.prototype.constructor=D;
    D.superclass=E.prototype;
    if(E.prototype.constructor==Object.prototype.constructor){
        E.prototype.constructor=E;
    }
    if(C){
        for(var A in C){
            D.prototype[A]=C[A];
        }
        YAHOO.lang._IEEnumFix(D.prototype,C);
    }
},
augmentObject:function(E,D){
    if(!D||!E){
        throw new Error("Absorb failed, verify dependencies.");
    }
    var A=arguments,C,F,B=A[2];
    if(B&&B!==true){
        for(C=2;C<A.length;C=C+1){
            E[A[C]]=D[A[C]];
        }
        }else{
    for(F in D){
        if(B||!E[F]){
            E[F]=D[F];
        }
    }
    YAHOO.lang._IEEnumFix(E,D);
}
},
augmentProto:function(D,C){
    if(!C||!D){
        throw new Error("Augment failed, verify dependencies.");
    }
    var A=[D.prototype,C.prototype];
    for(var B=2;B<arguments.length;B=B+1){
        A.push(arguments[B]);
    }
    YAHOO.lang.augmentObject.apply(this,A);
},
dump:function(A,G){
    var C=YAHOO.lang,D,F,I=[],J="{...}",B="f(){...}",H=", ",E=" => ";
    if(!C.isObject(A)){
        return A+"";
    }else{
        if(A instanceof Date||("nodeType"in A&&"tagName"in A)){
            return A;
        }else{
            if(C.isFunction(A)){
                return B;
            }
        }
    }
G=(C.isNumber(G))?G:3;
if(C.isArray(A)){
    I.push("[");
    for(D=0,F=A.length;D<F;D=D+1){
        if(C.isObject(A[D])){
            I.push((G>0)?C.dump(A[D],G-1):J);
        }else{
            I.push(A[D]);
        }
        I.push(H);
    }
    if(I.length>1){
        I.pop();
    }
    I.push("]");
}else{
    I.push("{");
    for(D in A){
        if(C.hasOwnProperty(A,D)){
            I.push(D+E);
            if(C.isObject(A[D])){
                I.push((G>0)?C.dump(A[D],G-1):J);
            }else{
                I.push(A[D]);
            }
            I.push(H);
        }
    }
    if(I.length>1){
    I.pop();
}
I.push("}");
}
return I.join("");
},
substitute:function(Q,B,J){
    var G,F,E,M,N,P,D=YAHOO.lang,L=[],C,H="dump",K=" ",A="{",O="}";
    for(;;){
        G=Q.lastIndexOf(A);
        if(G<0){
            break;
        }
        F=Q.indexOf(O,G);
        if(G+1>=F){
            break;
        }
        C=Q.substring(G+1,F);
        M=C;
        P=null;
        E=M.indexOf(K);
        if(E>-1){
            P=M.substring(E+1);
            M=M.substring(0,E);
        }
        N=B[M];
        if(J){
            N=J(M,N,P);
        }
        if(D.isObject(N)){
            if(D.isArray(N)){
                N=D.dump(N,parseInt(P,10));
            }else{
                P=P||"";
                var I=P.indexOf(H);
                if(I>-1){
                    P=P.substring(4);
                }
                if(N.toString===Object.prototype.toString||I>-1){
                    N=D.dump(N,parseInt(P,10));
                }else{
                    N=N.toString();
                }
            }
        }else{
        if(!D.isString(N)&&!D.isNumber(N)){
            N="~-"+L.length+"-~";
            L[L.length]=C;
        }
    }
    Q=Q.substring(0,G)+N+Q.substring(F+1);
}
for(G=L.length-1;G>=0;G=G-1){
    Q=Q.replace(new RegExp("~-"+G+"-~"),"{"+L[G]+"}","g");
}
return Q;
},
trim:function(A){
    try{
        return A.replace(/^\s+|\s+$/g,"");
    }catch(B){
        return A;
    }
},
merge:function(){
    var D={},B=arguments;
    for(var C=0,A=B.length;C<A;C=C+1){
        YAHOO.lang.augmentObject(D,B[C],true);
    }
    return D;
},
later:function(H,B,I,D,E){
    H=H||0;
    B=B||{};

    var C=I,G=D,F,A;
    if(YAHOO.lang.isString(I)){
        C=B[I];
    }
    if(!C){
        throw new TypeError("method undefined");
    }
    if(!YAHOO.lang.isArray(G)){
        G=[D];
    }
    F=function(){
        C.apply(B,G);
    };

    A=(E)?setInterval(F,H):setTimeout(F,H);
    return{
        interval:E,
        cancel:function(){
            if(this.interval){
                clearInterval(A);
            }else{
                clearTimeout(A);
            }
        }
    };

},
isValue:function(B){
    var A=YAHOO.lang;
    return(A.isObject(B)||A.isString(B)||A.isNumber(B)||A.isBoolean(B));
}
};

YAHOO.util.Lang=YAHOO.lang;
YAHOO.lang.augment=YAHOO.lang.augmentProto;
YAHOO.augment=YAHOO.lang.augmentProto;
YAHOO.extend=YAHOO.lang.extend;
YAHOO.register("yahoo",YAHOO,{
    version:"2.4.0",
    build:"733"
});
(function(){
    var B=YAHOO.util,L,J,H=0,K={},F={},N=window.document;
    var C=YAHOO.env.ua.opera,M=YAHOO.env.ua.webkit,A=YAHOO.env.ua.gecko,G=YAHOO.env.ua.ie;
    var E={
        HYPHEN:/(-[a-z])/i,
        ROOT_TAG:/^body|html$/i
    };

    var O=function(Q){
        if(!E.HYPHEN.test(Q)){
            return Q;
        }
        if(K[Q]){
            return K[Q];
        }
        var R=Q;
        while(E.HYPHEN.exec(R)){
            R=R.replace(RegExp.$1,RegExp.$1.substr(1).toUpperCase());
        }
        K[Q]=R;
        return R;
    };

    var P=function(R){
        var Q=F[R];
        if(!Q){
            Q=new RegExp("(?:^|\\s+)"+R+"(?:\\s+|$)");
            F[R]=Q;
        }
        return Q;
    };

    if(N.defaultView&&N.defaultView.getComputedStyle){
        L=function(Q,T){
            var S=null;
            if(T=="float"){
                T="cssFloat";
            }
            var R=N.defaultView.getComputedStyle(Q,"");
            if(R){
                S=R[O(T)];
            }
            return Q.style[T]||S;
        };

}else{
    if(N.documentElement.currentStyle&&G){
        L=function(Q,S){
            switch(O(S)){
                case"opacity":
                    var U=100;
                    try{
                    U=Q.filters["DXImageTransform.Microsoft.Alpha"].opacity;
                }catch(T){
                    try{
                        U=Q.filters("alpha").opacity;
                    }catch(T){}
                }
                return U/100;
            case"float":
                S="styleFloat";
            default:
                var R=Q.currentStyle?Q.currentStyle[S]:null;
                return(Q.style[S]||R);
        }
    };

}else{
    L=function(Q,R){
        return Q.style[R];
    };

}
}
if(G){
    J=function(Q,R,S){
        switch(R){
            case"opacity":
                if(YAHOO.lang.isString(Q.style.filter)){
                Q.style.filter="alpha(opacity="+S*100+")";
                if(!Q.currentStyle||!Q.currentStyle.hasLayout){
                    Q.style.zoom=1;
                }
            }
            break;
        case"float":
            R="styleFloat";
        default:
            Q.style[R]=S;
    }
};

}else{
    J=function(Q,R,S){
        if(R=="float"){
            R="cssFloat";
        }
        Q.style[R]=S;
    };

}
var D=function(Q,R){
    return Q&&Q.nodeType==1&&(!R||R(Q));
};

YAHOO.util.Dom={
    get:function(S){
        if(S&&(S.tagName||S.item)){
            return S;
        }
        if(YAHOO.lang.isString(S)||!S){
            return N.getElementById(S);
        }
        if(S.length!==undefined){
            var T=[];
            for(var R=0,Q=S.length;R<Q;++R){
                T[T.length]=B.Dom.get(S[R]);
            }
            return T;
        }
        return S;
    },
    getStyle:function(Q,S){
        S=O(S);
        var R=function(T){
            return L(T,S);
        };

        return B.Dom.batch(Q,R,B.Dom,true);
    },
    setStyle:function(Q,S,T){
        S=O(S);
        var R=function(U){
            J(U,S,T);
        };

        B.Dom.batch(Q,R,B.Dom,true);
    },
    getXY:function(Q){
        var R=function(S){
            if((S.parentNode===null||S.offsetParent===null||this.getStyle(S,"display")=="none")&&S!=S.ownerDocument.body){
                return false;
            }
            return I(S);
        };

        return B.Dom.batch(Q,R,B.Dom,true);
    },
    getX:function(Q){
        var R=function(S){
            return B.Dom.getXY(S)[0];
        };

        return B.Dom.batch(Q,R,B.Dom,true);
    },
    getY:function(Q){
        var R=function(S){
            return B.Dom.getXY(S)[1];
        };

        return B.Dom.batch(Q,R,B.Dom,true);
    },
    setXY:function(Q,T,S){
        var R=function(W){
            var V=this.getStyle(W,"position");
            if(V=="static"){
                this.setStyle(W,"position","relative");
                V="relative";
            }
            var Y=this.getXY(W);
            if(Y===false){
                return false;
            }
            var X=[parseInt(this.getStyle(W,"left"),10),parseInt(this.getStyle(W,"top"),10)];
            if(isNaN(X[0])){
                X[0]=(V=="relative")?0:W.offsetLeft;
            }
            if(isNaN(X[1])){
                X[1]=(V=="relative")?0:W.offsetTop;
            }
            if(T[0]!==null){
                W.style.left=T[0]-Y[0]+X[0]+"px";
            }
            if(T[1]!==null){
                W.style.top=T[1]-Y[1]+X[1]+"px";
            }
            if(!S){
                var U=this.getXY(W);
                if((T[0]!==null&&U[0]!=T[0])||(T[1]!==null&&U[1]!=T[1])){
                    this.setXY(W,T,true);
                }
            }
        };

B.Dom.batch(Q,R,B.Dom,true);
},
setX:function(R,Q){
    B.Dom.setXY(R,[Q,null]);
},
setY:function(Q,R){
    B.Dom.setXY(Q,[null,R]);
},
getRegion:function(Q){
    var R=function(S){
        if((S.parentNode===null||S.offsetParent===null||this.getStyle(S,"display")=="none")&&S!=N.body){
            return false;
        }
        var T=B.Region.getRegion(S);
        return T;
    };

    return B.Dom.batch(Q,R,B.Dom,true);
},
getClientWidth:function(){
    return B.Dom.getViewportWidth();
},
getClientHeight:function(){
    return B.Dom.getViewportHeight();
},
getElementsByClassName:function(U,Y,V,W){
    Y=Y||"*";
    V=(V)?B.Dom.get(V):null||N;
    if(!V){
        return[];
    }
    var R=[],Q=V.getElementsByTagName(Y),X=P(U);
    for(var S=0,T=Q.length;S<T;++S){
        if(X.test(Q[S].className)){
            R[R.length]=Q[S];
            if(W){
                W.call(Q[S],Q[S]);
            }
        }
    }
    return R;
},
hasClass:function(S,R){
    var Q=P(R);
    var T=function(U){
        return Q.test(U.className);
    };

    return B.Dom.batch(S,T,B.Dom,true);
},
addClass:function(R,Q){
    var S=function(T){
        if(this.hasClass(T,Q)){
            return false;
        }
        T.className=YAHOO.lang.trim([T.className,Q].join(" "));
        return true;
    };

    return B.Dom.batch(R,S,B.Dom,true);
},
removeClass:function(S,R){
    var Q=P(R);
    var T=function(U){
        if(!this.hasClass(U,R)){
            return false;
        }
        var V=U.className;
        U.className=V.replace(Q," ");
        if(this.hasClass(U,R)){
            this.removeClass(U,R);
        }
        U.className=YAHOO.lang.trim(U.className);
        return true;
    };

    return B.Dom.batch(S,T,B.Dom,true);
},
replaceClass:function(T,R,Q){
    if(!Q||R===Q){
        return false;
    }
    var S=P(R);
    var U=function(V){
        if(!this.hasClass(V,R)){
            this.addClass(V,Q);
            return true;
        }
        V.className=V.className.replace(S," "+Q+" ");
        if(this.hasClass(V,R)){
            this.replaceClass(V,R,Q);
        }
        V.className=YAHOO.lang.trim(V.className);
        return true;
    };

    return B.Dom.batch(T,U,B.Dom,true);
},
generateId:function(Q,S){
    S=S||"yui-gen";
    var R=function(T){
        if(T&&T.id){
            return T.id;
        }
        var U=S+H++;
        if(T){
            T.id=U;
        }
        return U;
    };

    return B.Dom.batch(Q,R,B.Dom,true)||R.apply(B.Dom,arguments);
},
isAncestor:function(Q,R){
    Q=B.Dom.get(Q);
    R=B.Dom.get(R);
    if(!Q||!R){
        return false;
    }
    if(Q.contains&&R.nodeType&&!M){
        return Q.contains(R);
    }else{
        if(Q.compareDocumentPosition&&R.nodeType){
            return!!(Q.compareDocumentPosition(R)&16);
        }else{
            if(R.nodeType){
                return!!this.getAncestorBy(R,function(S){
                    return S==Q;
                });
            }
        }
    }
return false;
},
inDocument:function(Q){
    return this.isAncestor(N.documentElement,Q);
},
getElementsBy:function(X,R,S,U){
    R=R||"*";
    S=(S)?B.Dom.get(S):null||N;
    if(!S){
        return[];
    }
    var T=[],W=S.getElementsByTagName(R);
    for(var V=0,Q=W.length;V<Q;++V){
        if(X(W[V])){
            T[T.length]=W[V];
            if(U){
                U(W[V]);
            }
        }
    }
    return T;
},
batch:function(U,X,W,S){
    U=(U&&(U.tagName||U.item))?U:B.Dom.get(U);
    if(!U||!X){
        return false;
    }
    var T=(S)?W:window;
    if(U.tagName||U.length===undefined){
        return X.call(T,U,W);
    }
    var V=[];
    for(var R=0,Q=U.length;R<Q;++R){
        V[V.length]=X.call(T,U[R],W);
    }
    return V;
},
getDocumentHeight:function(){
    var R=(N.compatMode!="CSS1Compat")?N.body.scrollHeight:N.documentElement.scrollHeight;
    var Q=Math.max(R,B.Dom.getViewportHeight());
    return Q;
},
getDocumentWidth:function(){
    var R=(N.compatMode!="CSS1Compat")?N.body.scrollWidth:N.documentElement.scrollWidth;
    var Q=Math.max(R,B.Dom.getViewportWidth());
    return Q;
},
getViewportHeight:function(){
    var Q=self.innerHeight;
    var R=N.compatMode;
    if((R||G)&&!C){
        Q=(R=="CSS1Compat")?N.documentElement.clientHeight:N.body.clientHeight;
    }
    return Q;
},
getViewportWidth:function(){
    var Q=self.innerWidth;
    var R=N.compatMode;
    if(R||G){
        Q=(R=="CSS1Compat")?N.documentElement.clientWidth:N.body.clientWidth;
    }
    return Q;
},
getAncestorBy:function(Q,R){
    while(Q=Q.parentNode){
        if(D(Q,R)){
            return Q;
        }
    }
    return null;
},
getAncestorByClassName:function(R,Q){
    R=B.Dom.get(R);
    if(!R){
        return null;
    }
    var S=function(T){
        return B.Dom.hasClass(T,Q);
    };

    return B.Dom.getAncestorBy(R,S);
},
getAncestorByTagName:function(R,Q){
    R=B.Dom.get(R);
    if(!R){
        return null;
    }
    var S=function(T){
        return T.tagName&&T.tagName.toUpperCase()==Q.toUpperCase();
    };

    return B.Dom.getAncestorBy(R,S);
},
getPreviousSiblingBy:function(Q,R){
    while(Q){
        Q=Q.previousSibling;
        if(D(Q,R)){
            return Q;
        }
    }
    return null;
},
getPreviousSibling:function(Q){
    Q=B.Dom.get(Q);
    if(!Q){
        return null;
    }
    return B.Dom.getPreviousSiblingBy(Q);
},
getNextSiblingBy:function(Q,R){
    while(Q){
        Q=Q.nextSibling;
        if(D(Q,R)){
            return Q;
        }
    }
    return null;
},
getNextSibling:function(Q){
    Q=B.Dom.get(Q);
    if(!Q){
        return null;
    }
    return B.Dom.getNextSiblingBy(Q);
},
getFirstChildBy:function(Q,S){
    var R=(D(Q.firstChild,S))?Q.firstChild:null;
    return R||B.Dom.getNextSiblingBy(Q.firstChild,S);
},
getFirstChild:function(Q,R){
    Q=B.Dom.get(Q);
    if(!Q){
        return null;
    }
    return B.Dom.getFirstChildBy(Q);
},
getLastChildBy:function(Q,S){
    if(!Q){
        return null;
    }
    var R=(D(Q.lastChild,S))?Q.lastChild:null;
    return R||B.Dom.getPreviousSiblingBy(Q.lastChild,S);
},
getLastChild:function(Q){
    Q=B.Dom.get(Q);
    return B.Dom.getLastChildBy(Q);
},
getChildrenBy:function(R,T){
    var S=B.Dom.getFirstChildBy(R,T);
    var Q=S?[S]:[];
    B.Dom.getNextSiblingBy(S,function(U){
        if(!T||T(U)){
            Q[Q.length]=U;
        }
        return false;
    });
    return Q;
},
getChildren:function(Q){
    Q=B.Dom.get(Q);
    if(!Q){}
    return B.Dom.getChildrenBy(Q);
},
getDocumentScrollLeft:function(Q){
    Q=Q||N;
    return Math.max(Q.documentElement.scrollLeft,Q.body.scrollLeft);
},
getDocumentScrollTop:function(Q){
    Q=Q||N;
    return Math.max(Q.documentElement.scrollTop,Q.body.scrollTop);
},
insertBefore:function(R,Q){
    R=B.Dom.get(R);
    Q=B.Dom.get(Q);
    if(!R||!Q||!Q.parentNode){
        return null;
    }
    return Q.parentNode.insertBefore(R,Q);
},
insertAfter:function(R,Q){
    R=B.Dom.get(R);
    Q=B.Dom.get(Q);
    if(!R||!Q||!Q.parentNode){
        return null;
    }
    if(Q.nextSibling){
        return Q.parentNode.insertBefore(R,Q.nextSibling);
    }else{
        return Q.parentNode.appendChild(R);
    }
},
getClientRegion:function(){
    var S=B.Dom.getDocumentScrollTop(),R=B.Dom.getDocumentScrollLeft(),T=B.Dom.getViewportWidth()+R,Q=B.Dom.getViewportHeight()+S;
    return new B.Region(S,T,Q,R);
}
};

var I=function(){
    if(N.documentElement.getBoundingClientRect){
        return function(R){
            var S=R.getBoundingClientRect();
            var Q=R.ownerDocument;
            return[S.left+B.Dom.getDocumentScrollLeft(Q),S.top+B.Dom.getDocumentScrollTop(Q)];
        };

}else{
    return function(S){
        var T=[S.offsetLeft,S.offsetTop];
        var R=S.offsetParent;
        var Q=(M&&B.Dom.getStyle(S,"position")=="absolute"&&S.offsetParent==S.ownerDocument.body);
        if(R!=S){
            while(R){
                T[0]+=R.offsetLeft;
                T[1]+=R.offsetTop;
                if(!Q&&M&&B.Dom.getStyle(R,"position")=="absolute"){
                    Q=true;
                }
                R=R.offsetParent;
            }
        }
        if(Q){
        T[0]-=S.ownerDocument.body.offsetLeft;
        T[1]-=S.ownerDocument.body.offsetTop;
    }
    R=S.parentNode;
    while(R.tagName&&!E.ROOT_TAG.test(R.tagName)){
        if(B.Dom.getStyle(R,"display").search(/^inline|table-row.*$/i)){
            T[0]-=R.scrollLeft;
            T[1]-=R.scrollTop;
        }
        R=R.parentNode;
    }
    return T;
};

}
}();
})();
YAHOO.util.Region=function(C,D,A,B){
    this.top=C;
    this[1]=C;
    this.right=D;
    this.bottom=A;
    this.left=B;
    this[0]=B;
};

YAHOO.util.Region.prototype.contains=function(A){
    return(A.left>=this.left&&A.right<=this.right&&A.top>=this.top&&A.bottom<=this.bottom);
};

YAHOO.util.Region.prototype.getArea=function(){
    return((this.bottom-this.top)*(this.right-this.left));
};

YAHOO.util.Region.prototype.intersect=function(E){
    var C=Math.max(this.top,E.top);
    var D=Math.min(this.right,E.right);
    var A=Math.min(this.bottom,E.bottom);
    var B=Math.max(this.left,E.left);
    if(A>=C&&D>=B){
        return new YAHOO.util.Region(C,D,A,B);
    }else{
        return null;
    }
};

YAHOO.util.Region.prototype.union=function(E){
    var C=Math.min(this.top,E.top);
    var D=Math.max(this.right,E.right);
    var A=Math.max(this.bottom,E.bottom);
    var B=Math.min(this.left,E.left);
    return new YAHOO.util.Region(C,D,A,B);
};

YAHOO.util.Region.prototype.toString=function(){
    return("Region {top: "+this.top+", right: "+this.right+", bottom: "+this.bottom+", left: "+this.left+"}");
};

YAHOO.util.Region.getRegion=function(D){
    var F=YAHOO.util.Dom.getXY(D);
    var C=F[1];
    var E=F[0]+D.offsetWidth;
    var A=F[1]+D.offsetHeight;
    var B=F[0];
    return new YAHOO.util.Region(C,E,A,B);
};

YAHOO.util.Point=function(A,B){
    if(YAHOO.lang.isArray(A)){
        B=A[1];
        A=A[0];
    }
    this.x=this.right=this.left=this[0]=A;
    this.y=this.top=this.bottom=this[1]=B;
};

YAHOO.util.Point.prototype=new YAHOO.util.Region();
YAHOO.register("dom",YAHOO.util.Dom,{
    version:"2.4.0",
    build:"733"
});
YAHOO.util.CustomEvent=function(D,B,C,A){
    this.type=D;
    this.scope=B||window;
    this.silent=C;
    this.signature=A||YAHOO.util.CustomEvent.LIST;
    this.subscribers=[];
    if(!this.silent){}
    var E="_YUICEOnSubscribe";
    if(D!==E){
        this.subscribeEvent=new YAHOO.util.CustomEvent(E,this,true);
    }
    this.lastError=null;
};

YAHOO.util.CustomEvent.LIST=0;
YAHOO.util.CustomEvent.FLAT=1;
YAHOO.util.CustomEvent.prototype={
    subscribe:function(B,C,A){
        if(!B){
            throw new Error("Invalid callback for subscriber to '"+this.type+"'");
        }
        if(this.subscribeEvent){
            this.subscribeEvent.fire(B,C,A);
        }
        this.subscribers.push(new YAHOO.util.Subscriber(B,C,A));
    },
    unsubscribe:function(D,F){
        if(!D){
            return this.unsubscribeAll();
        }
        var E=false;
        for(var B=0,A=this.subscribers.length;B<A;++B){
            var C=this.subscribers[B];
            if(C&&C.contains(D,F)){
                this._delete(B);
                E=true;
            }
        }
        return E;
},
fire:function(){
    var D=this.subscribers.length;
    if(!D&&this.silent){
        return true;
    }
    var G=[],F=true,C,H=false;
    for(C=0;C<arguments.length;++C){
        G.push(arguments[C]);
    }
    if(!this.silent){}
    for(C=0;C<D;++C){
        var K=this.subscribers[C];
        if(!K){
            H=true;
        }else{
            if(!this.silent){}
            var J=K.getScope(this.scope);
            if(this.signature==YAHOO.util.CustomEvent.FLAT){
                var A=null;
                if(G.length>0){
                    A=G[0];
                }
                try{
                    F=K.fn.call(J,A,K.obj);
                }catch(E){
                    this.lastError=E;
                }
            }else{
            try{
                F=K.fn.call(J,this.type,G,K.obj);
            }catch(E){
                this.lastError=E;
            }
        }
        if(false===F){
        if(!this.silent){}
        return false;
    }
    }
}
if(H){
    var I=[],B=this.subscribers;
    for(C=0,D=B.length;C<D;C=C+1){
        I.push(B[C]);
    }
    this.subscribers=I;
}
return true;
},
unsubscribeAll:function(){
    for(var B=0,A=this.subscribers.length;B<A;++B){
        this._delete(A-1-B);
    }
    this.subscribers=[];
    return B;
},
_delete:function(A){
    var B=this.subscribers[A];
    if(B){
        delete B.fn;
        delete B.obj;
    }
    this.subscribers[A]=null;
},
toString:function(){
    return"CustomEvent: '"+this.type+"', scope: "+this.scope;
}
};

YAHOO.util.Subscriber=function(B,C,A){
    this.fn=B;
    this.obj=YAHOO.lang.isUndefined(C)?null:C;
    this.override=A;
};

YAHOO.util.Subscriber.prototype.getScope=function(A){
    if(this.override){
        if(this.override===true){
            return this.obj;
        }else{
            return this.override;
        }
    }
    return A;
};

YAHOO.util.Subscriber.prototype.contains=function(A,B){
    if(B){
        return(this.fn==A&&this.obj==B);
    }else{
        return(this.fn==A);
    }
};

YAHOO.util.Subscriber.prototype.toString=function(){
    return"Subscriber { obj: "+this.obj+", override: "+(this.override||"no")+" }";
};

if(!YAHOO.util.Event){
    YAHOO.util.Event=function(){
        var H=false;
        var I=[];
        var J=[];
        var G=[];
        var E=[];
        var C=0;
        var F=[];
        var B=[];
        var A=0;
        var D={
            63232:38,
            63233:40,
            63234:37,
            63235:39,
            63276:33,
            63277:34,
            25:9
        };

        return{
            POLL_RETRYS:4000,
            POLL_INTERVAL:10,
            EL:0,
            TYPE:1,
            FN:2,
            WFN:3,
            UNLOAD_OBJ:3,
            ADJ_SCOPE:4,
            OBJ:5,
            OVERRIDE:6,
            lastError:null,
            isSafari:YAHOO.env.ua.webkit,
            webkit:YAHOO.env.ua.webkit,
            isIE:YAHOO.env.ua.ie,
            _interval:null,
            _dri:null,
            DOMReady:false,
            startInterval:function(){
                if(!this._interval){
                    var K=this;
                    var L=function(){
                        K._tryPreloadAttach();
                    };

                    this._interval=setInterval(L,this.POLL_INTERVAL);
                }
            },
        onAvailable:function(P,M,Q,O,N){
            var K=(YAHOO.lang.isString(P))?[P]:P;
            for(var L=0;L<K.length;L=L+1){
                F.push({
                    id:K[L],
                    fn:M,
                    obj:Q,
                    override:O,
                    checkReady:N
                });
            }
            C=this.POLL_RETRYS;
            this.startInterval();
        },
        onContentReady:function(M,K,N,L){
            this.onAvailable(M,K,N,L,true);
        },
        onDOMReady:function(K,M,L){
            if(this.DOMReady){
                setTimeout(function(){
                    var N=window;
                    if(L){
                        if(L===true){
                            N=M;
                        }else{
                            N=L;
                        }
                    }
                    K.call(N,"DOMReady",[],M);
                },0);
        }else{
            this.DOMReadyEvent.subscribe(K,M,L);
        }
    },
    addListener:function(M,K,V,Q,L){
        if(!V||!V.call){
            return false;
        }
        if(this._isValidCollection(M)){
            var W=true;
            for(var R=0,T=M.length;R<T;++R){
                W=this.on(M[R],K,V,Q,L)&&W;
            }
            return W;
        }else{
            if(YAHOO.lang.isString(M)){
                var P=this.getEl(M);
                if(P){
                    M=P;
                }else{
                    this.onAvailable(M,function(){
                        YAHOO.util.Event.on(M,K,V,Q,L);
                    });
                    return true;
                }
            }
        }
    if(!M){
    return false;
}
if("unload"==K&&Q!==this){
    J[J.length]=[M,K,V,Q,L];
    return true;
}
var Y=M;
if(L){
    if(L===true){
        Y=Q;
    }else{
        Y=L;
    }
}
var N=function(Z){
    return V.call(Y,YAHOO.util.Event.getEvent(Z,M),Q);
};

var X=[M,K,V,N,Y,Q,L];
var S=I.length;
I[S]=X;
if(this.useLegacyEvent(M,K)){
    var O=this.getLegacyIndex(M,K);
    if(O==-1||M!=G[O][0]){
        O=G.length;
        B[M.id+K]=O;
        G[O]=[M,K,M["on"+K]];
        E[O]=[];
        M["on"+K]=function(Z){
            YAHOO.util.Event.fireLegacyEvent(YAHOO.util.Event.getEvent(Z),O);
        };

}
E[O].push(X);
}else{
    try{
        this._simpleAdd(M,K,N,false);
    }catch(U){
        this.lastError=U;
        this.removeListener(M,K,V);
        return false;
    }
}
return true;
},
fireLegacyEvent:function(O,M){
    var Q=true,K,S,R,T,P;
    S=E[M];
    for(var L=0,N=S.length;L<N;++L){
        R=S[L];
        if(R&&R[this.WFN]){
            T=R[this.ADJ_SCOPE];
            P=R[this.WFN].call(T,O);
            Q=(Q&&P);
        }
    }
    K=G[M];
if(K&&K[2]){
    K[2](O);
}
return Q;
},
getLegacyIndex:function(L,M){
    var K=this.generateId(L)+M;
    if(typeof B[K]=="undefined"){
        return-1;
    }else{
        return B[K];
    }
},
useLegacyEvent:function(L,M){
    if(this.webkit&&("click"==M||"dblclick"==M)){
        var K=parseInt(this.webkit,10);
        if(!isNaN(K)&&K<418){
            return true;
        }
    }
    return false;
},
removeListener:function(L,K,T){
    var O,R,V;
    if(typeof L=="string"){
        L=this.getEl(L);
    }else{
        if(this._isValidCollection(L)){
            var U=true;
            for(O=0,R=L.length;O<R;++O){
                U=(this.removeListener(L[O],K,T)&&U);
            }
            return U;
        }
    }
    if(!T||!T.call){
    return this.purgeElement(L,false,K);
}
if("unload"==K){
    for(O=0,R=J.length;O<R;O++){
        V=J[O];
        if(V&&V[0]==L&&V[1]==K&&V[2]==T){
            J[O]=null;
            return true;
        }
    }
    return false;
}
var P=null;
var Q=arguments[3];
if("undefined"===typeof Q){
    Q=this._getCacheIndex(L,K,T);
}
if(Q>=0){
    P=I[Q];
}
if(!L||!P){
    return false;
}
if(this.useLegacyEvent(L,K)){
    var N=this.getLegacyIndex(L,K);
    var M=E[N];
    if(M){
        for(O=0,R=M.length;O<R;++O){
            V=M[O];
            if(V&&V[this.EL]==L&&V[this.TYPE]==K&&V[this.FN]==T){
                M[O]=null;
                break;
            }
        }
        }
}else{
    try{
        this._simpleRemove(L,K,P[this.WFN],false);
    }catch(S){
        this.lastError=S;
        return false;
    }
}
delete I[Q][this.WFN];
delete I[Q][this.FN];
I[Q]=null;
return true;
},
getTarget:function(M,L){
    var K=M.target||M.srcElement;
    return this.resolveTextNode(K);
},
resolveTextNode:function(K){
    if(K&&3==K.nodeType){
        return K.parentNode;
    }else{
        return K;
    }
},
getPageX:function(L){
    var K=L.pageX;
    if(!K&&0!==K){
        K=L.clientX||0;
        if(this.isIE){
            K+=this._getScrollLeft();
        }
    }
    return K;
},
getPageY:function(K){
    var L=K.pageY;
    if(!L&&0!==L){
        L=K.clientY||0;
        if(this.isIE){
            L+=this._getScrollTop();
        }
    }
    return L;
},
getXY:function(K){
    return[this.getPageX(K),this.getPageY(K)];
},
getRelatedTarget:function(L){
    var K=L.relatedTarget;
    if(!K){
        if(L.type=="mouseout"){
            K=L.toElement;
        }else{
            if(L.type=="mouseover"){
                K=L.fromElement;
            }
        }
    }
return this.resolveTextNode(K);
},
getTime:function(M){
    if(!M.time){
        var L=new Date().getTime();
        try{
            M.time=L;
        }catch(K){
            this.lastError=K;
            return L;
        }
    }
    return M.time;
},
stopEvent:function(K){
    this.stopPropagation(K);
    this.preventDefault(K);
},
stopPropagation:function(K){
    if(K.stopPropagation){
        K.stopPropagation();
    }else{
        K.cancelBubble=true;
    }
},
preventDefault:function(K){
    if(K.preventDefault){
        K.preventDefault();
    }else{
        K.returnValue=false;
    }
},
getEvent:function(M,K){
    var L=M||window.event;
    if(!L){
        var N=this.getEvent.caller;
        while(N){
            L=N.arguments[0];
            if(L&&Event==L.constructor){
                break;
            }
            N=N.caller;
        }
    }
    return L;
},
getCharCode:function(L){
    var K=L.keyCode||L.charCode||0;
    if(YAHOO.env.ua.webkit&&(K in D)){
        K=D[K];
    }
    return K;
},
_getCacheIndex:function(O,P,N){
    for(var M=0,L=I.length;M<L;++M){
        var K=I[M];
        if(K&&K[this.FN]==N&&K[this.EL]==O&&K[this.TYPE]==P){
            return M;
        }
    }
    return-1;
},
generateId:function(K){
    var L=K.id;
    if(!L){
        L="yuievtautoid-"+A;
        ++A;
        K.id=L;
    }
    return L;
},
_isValidCollection:function(L){
    try{
        return(L&&typeof L!=="string"&&L.length&&!L.tagName&&!L.alert&&typeof L[0]!=="undefined");
    }catch(K){
        return false;
    }
},
elCache:{},
getEl:function(K){
    return(typeof K==="string")?document.getElementById(K):K;
},
clearCache:function(){},
DOMReadyEvent:new YAHOO.util.CustomEvent("DOMReady",this),
_load:function(L){
    if(!H){
        H=true;
        var K=YAHOO.util.Event;
        K._ready();
        K._tryPreloadAttach();
    }
},
_ready:function(L){
    var K=YAHOO.util.Event;
    if(!K.DOMReady){
        K.DOMReady=true;
        K.DOMReadyEvent.fire();
        K._simpleRemove(document,"DOMContentLoaded",K._ready);
    }
},
_tryPreloadAttach:function(){
    if(this.locked){
        return false;
    }
    if(this.isIE){
        if(!this.DOMReady){
            this.startInterval();
            return false;
        }
    }
    this.locked=true;
var P=!H;
if(!P){
    P=(C>0);
}
var O=[];
var Q=function(S,T){
    var R=S;
    if(T.override){
        if(T.override===true){
            R=T.obj;
        }else{
            R=T.override;
        }
    }
    T.fn.call(R,T.obj);
};

var L,K,N,M;
for(L=0,K=F.length;L<K;++L){
    N=F[L];
    if(N&&!N.checkReady){
        M=this.getEl(N.id);
        if(M){
            Q(M,N);
            F[L]=null;
        }else{
            O.push(N);
        }
    }
}
for(L=0,K=F.length;L<K;++L){
    N=F[L];
    if(N&&N.checkReady){
        M=this.getEl(N.id);
        if(M){
            if(H||M.nextSibling){
                Q(M,N);
                F[L]=null;
            }
        }else{
        O.push(N);
    }
}
}
C=(O.length===0)?0:C-1;
if(P){
    this.startInterval();
}else{
    clearInterval(this._interval);
    this._interval=null;
}
this.locked=false;
return true;
},
purgeElement:function(O,P,R){
    var M=(YAHOO.lang.isString(O))?this.getEl(O):O;
    var Q=this.getListeners(M,R),N,K;
    if(Q){
        for(N=0,K=Q.length;N<K;++N){
            var L=Q[N];
            this.removeListener(M,L.type,L.fn,L.index);
        }
        }
        if(P&&M&&M.childNodes){
    for(N=0,K=M.childNodes.length;N<K;++N){
        this.purgeElement(M.childNodes[N],P,R);
    }
    }
},
getListeners:function(M,K){
    var P=[],L;
    if(!K){
        L=[I,J];
    }else{
        if(K==="unload"){
            L=[J];
        }else{
            L=[I];
        }
    }
    var R=(YAHOO.lang.isString(M))?this.getEl(M):M;
for(var O=0;O<L.length;O=O+1){
    var T=L[O];
    if(T&&T.length>0){
        for(var Q=0,S=T.length;Q<S;++Q){
            var N=T[Q];
            if(N&&N[this.EL]===R&&(!K||K===N[this.TYPE])){
                P.push({
                    type:N[this.TYPE],
                    fn:N[this.FN],
                    obj:N[this.OBJ],
                    adjust:N[this.OVERRIDE],
                    scope:N[this.ADJ_SCOPE],
                    index:Q
                });
            }
        }
        }
}
return(P.length)?P:null;
},
_unload:function(R){
    var Q=YAHOO.util.Event,O,N,L,K,M;
    for(O=0,K=J.length;O<K;++O){
        L=J[O];
        if(L){
            var P=window;
            if(L[Q.ADJ_SCOPE]){
                if(L[Q.ADJ_SCOPE]===true){
                    P=L[Q.UNLOAD_OBJ];
                }else{
                    P=L[Q.ADJ_SCOPE];
                }
            }
            L[Q.FN].call(P,Q.getEvent(R,L[Q.EL]),L[Q.UNLOAD_OBJ]);
        J[O]=null;
        L=null;
        P=null;
    }
    }
    J=null;
if(YAHOO.env.ua.IE&&I&&I.length>0){
    N=I.length;
    while(N){
        M=N-1;
        L=I[M];
        if(L){
            L[Q.EL].clearAttributes();
        }
        N=N-1;
    }
    L=null;
}
G=null;
Q._simpleRemove(window,"unload",Q._unload);
},
_getScrollLeft:function(){
    return this._getScroll()[1];
},
_getScrollTop:function(){
    return this._getScroll()[0];
},
_getScroll:function(){
    var K=document.documentElement,L=document.body;
    if(K&&(K.scrollTop||K.scrollLeft)){
        return[K.scrollTop,K.scrollLeft];
    }else{
        if(L){
            return[L.scrollTop,L.scrollLeft];
        }else{
            return[0,0];
        }
    }
},
regCE:function(){},
_simpleAdd:function(){
    if(window.addEventListener){
        return function(M,N,L,K){
            M.addEventListener(N,L,(K));
        };

}else{
    if(window.attachEvent){
        return function(M,N,L,K){
            M.attachEvent("on"+N,L);
        };

}else{
    return function(){};

}
}
}(),
_simpleRemove:function(){
    if(window.removeEventListener){
        return function(M,N,L,K){
            M.removeEventListener(N,L,(K));
        };

}else{
    if(window.detachEvent){
        return function(L,M,K){
            L.detachEvent("on"+M,K);
        };

}else{
    return function(){};

}
}
}()
};

}();
(function(){
    var A=YAHOO.util.Event;
    A.on=A.addListener;
    if(A.isIE){
        YAHOO.util.Event.onDOMReady(YAHOO.util.Event._tryPreloadAttach,YAHOO.util.Event,true);
        A._dri=setInterval(function(){
            var C=document.createElement("p");
            try{
                C.doScroll("left");
                clearInterval(A._dri);
                A._dri=null;
                A._ready();
                C=null;
            }catch(B){
                C=null;
            }
        },A.POLL_INTERVAL);
}else{
    if(A.webkit){
        A._dri=setInterval(function(){
            var B=document.readyState;
            if("loaded"==B||"complete"==B){
                clearInterval(A._dri);
                A._dri=null;
                A._ready();
            }
        },A.POLL_INTERVAL);
}else{
    A._simpleAdd(document,"DOMContentLoaded",A._ready);
}
}
A._simpleAdd(window,"load",A._load);
A._simpleAdd(window,"unload",A._unload);
A._tryPreloadAttach();
})();
}
YAHOO.util.EventProvider=function(){};

YAHOO.util.EventProvider.prototype={
    __yui_events:null,
    __yui_subscribers:null,
    subscribe:function(A,C,F,E){
        this.__yui_events=this.__yui_events||{};

        var D=this.__yui_events[A];
        if(D){
            D.subscribe(C,F,E);
        }else{
            this.__yui_subscribers=this.__yui_subscribers||{};

            var B=this.__yui_subscribers;
            if(!B[A]){
                B[A]=[];
            }
            B[A].push({
                fn:C,
                obj:F,
                override:E
            });
        }
    },
unsubscribe:function(C,E,G){
    this.__yui_events=this.__yui_events||{};

    var A=this.__yui_events;
    if(C){
        var F=A[C];
        if(F){
            return F.unsubscribe(E,G);
        }
    }else{
    var B=true;
    for(var D in A){
        if(YAHOO.lang.hasOwnProperty(A,D)){
            B=B&&A[D].unsubscribe(E,G);
        }
    }
    return B;
}
return false;
},
unsubscribeAll:function(A){
    return this.unsubscribe(A);
},
createEvent:function(G,D){
    this.__yui_events=this.__yui_events||{};

    var A=D||{};

    var I=this.__yui_events;
    if(I[G]){}else{
        var H=A.scope||this;
        var E=(A.silent);
        var B=new YAHOO.util.CustomEvent(G,H,E,YAHOO.util.CustomEvent.FLAT);
        I[G]=B;
        if(A.onSubscribeCallback){
            B.subscribeEvent.subscribe(A.onSubscribeCallback);
        }
        this.__yui_subscribers=this.__yui_subscribers||{};

        var F=this.__yui_subscribers[G];
        if(F){
            for(var C=0;C<F.length;++C){
                B.subscribe(F[C].fn,F[C].obj,F[C].override);
            }
            }
        }
return I[G];
},
fireEvent:function(E,D,A,C){
    this.__yui_events=this.__yui_events||{};

    var G=this.__yui_events[E];
    if(!G){
        return null;
    }
    var B=[];
    for(var F=1;F<arguments.length;++F){
        B.push(arguments[F]);
    }
    return G.fire.apply(G,B);
},
hasEvent:function(A){
    if(this.__yui_events){
        if(this.__yui_events[A]){
            return true;
        }
    }
    return false;
}
};

YAHOO.util.KeyListener=function(A,F,B,C){
    if(!A){}else{
        if(!F){}else{
            if(!B){}
    }
}
if(!C){
    C=YAHOO.util.KeyListener.KEYDOWN;
}
var D=new YAHOO.util.CustomEvent("keyPressed");
this.enabledEvent=new YAHOO.util.CustomEvent("enabled");
this.disabledEvent=new YAHOO.util.CustomEvent("disabled");
if(typeof A=="string"){
    A=document.getElementById(A);
}
if(typeof B=="function"){
    D.subscribe(B);
}else{
    D.subscribe(B.fn,B.scope,B.correctScope);
}
function E(J,I){
    if(!F.shift){
        F.shift=false;
    }
    if(!F.alt){
        F.alt=false;
    }
    if(!F.ctrl){
        F.ctrl=false;
    }
    if(J.shiftKey==F.shift&&J.altKey==F.alt&&J.ctrlKey==F.ctrl){
        var G;
        if(F.keys instanceof Array){
            for(var H=0;H<F.keys.length;H++){
                G=F.keys[H];
                if(G==J.charCode){
                    D.fire(J.charCode,J);
                    break;
                }else{
                    if(G==J.keyCode){
                        D.fire(J.keyCode,J);
                        break;
                    }
                }
            }
        }else{
    G=F.keys;
    if(G==J.charCode){
        D.fire(J.charCode,J);
    }else{
        if(G==J.keyCode){
            D.fire(J.keyCode,J);
        }
    }
}
}
}
this.enable=function(){
    if(!this.enabled){
        YAHOO.util.Event.addListener(A,C,E);
        this.enabledEvent.fire(F);
    }
    this.enabled=true;
};

this.disable=function(){
    if(this.enabled){
        YAHOO.util.Event.removeListener(A,C,E);
        this.disabledEvent.fire(F);
    }
    this.enabled=false;
};

this.toString=function(){
    return"KeyListener ["+F.keys+"] "+A.tagName+(A.id?"["+A.id+"]":"");
};

};

YAHOO.util.KeyListener.KEYDOWN="keydown";
YAHOO.util.KeyListener.KEYUP="keyup";
YAHOO.util.KeyListener.KEY={
    ALT:18,
    BACK_SPACE:8,
    CAPS_LOCK:20,
    CONTROL:17,
    DELETE:46,
    DOWN:40,
    END:35,
    ENTER:13,
    ESCAPE:27,
    HOME:36,
    LEFT:37,
    META:224,
    NUM_LOCK:144,
    PAGE_DOWN:34,
    PAGE_UP:33,
    PAUSE:19,
    PRINTSCREEN:44,
    RIGHT:39,
    SCROLL_LOCK:145,
    SHIFT:16,
    SPACE:32,
    TAB:9,
    UP:38
};

YAHOO.register("event",YAHOO.util.Event,{
    version:"2.4.0",
    build:"733"
});
YAHOO.register("yahoo-dom-event",YAHOO,{
    version:"2.4.0",
    build:"733"
});
(function(){
    YAHOO.util.Config=function(owner){
        if(owner){
            this.init(owner);
        }
    };

var Lang=YAHOO.lang,CustomEvent=YAHOO.util.CustomEvent,Config=YAHOO.util.Config;
Config.CONFIG_CHANGED_EVENT="configChanged";
Config.BOOLEAN_TYPE="boolean";
Config.prototype={
    owner:null,
    queueInProgress:false,
    config:null,
    initialConfig:null,
    eventQueue:null,
    configChangedEvent:null,
    init:function(owner){
        this.owner=owner;
        this.configChangedEvent=this.createEvent(Config.CONFIG_CHANGED_EVENT);
        this.configChangedEvent.signature=CustomEvent.LIST;
        this.queueInProgress=false;
        this.config={};

        this.initialConfig={};

        this.eventQueue=[];
    },
    checkBoolean:function(val){
        return(typeof val==Config.BOOLEAN_TYPE);
    },
    checkNumber:function(val){
        return(!isNaN(val));
    },
    fireEvent:function(key,value){
        var property=this.config[key];
        if(property&&property.event){
            property.event.fire(value);
        }
    },
addProperty:function(key,propertyObject){
    key=key.toLowerCase();
    this.config[key]=propertyObject;
    propertyObject.event=this.createEvent(key,{
        scope:this.owner
        });
    propertyObject.event.signature=CustomEvent.LIST;
    propertyObject.key=key;
    if(propertyObject.handler){
        propertyObject.event.subscribe(propertyObject.handler,this.owner);
    }
    this.setProperty(key,propertyObject.value,true);
    if(!propertyObject.suppressEvent){
        this.queueProperty(key,propertyObject.value);
    }
},
getConfig:function(){
    var cfg={},prop,property;
    for(prop in this.config){
        property=this.config[prop];
        if(property&&property.event){
            cfg[prop]=property.value;
        }
    }
return cfg;
},
getProperty:function(key){
    var property=this.config[key.toLowerCase()];
    if(property&&property.event){
        return property.value;
    }else{
        return undefined;
    }
},
resetProperty:function(key){
    key=key.toLowerCase();
    var property=this.config[key];
    if(property&&property.event){
        if(this.initialConfig[key]&&!Lang.isUndefined(this.initialConfig[key])){
            this.setProperty(key,this.initialConfig[key]);
            return true;
        }
    }else{
    return false;
}
},
setProperty:function(key,value,silent){
    var property;
    key=key.toLowerCase();
    if(this.queueInProgress&&!silent){
        this.queueProperty(key,value);
        return true;
    }else{
        property=this.config[key];
        if(property&&property.event){
            if(property.validator&&!property.validator(value)){
                return false;
            }else{
                property.value=value;
                if(!silent){
                    this.fireEvent(key,value);
                    this.configChangedEvent.fire([key,value]);
                }
                return true;
            }
        }else{
        return false;
    }
}
},
queueProperty:function(key,value){
    key=key.toLowerCase();
    var property=this.config[key],foundDuplicate=false,iLen,queueItem,queueItemKey,queueItemValue,sLen,supercedesCheck,qLen,queueItemCheck,queueItemCheckKey,queueItemCheckValue,i,s,q;
    if(property&&property.event){
        if(!Lang.isUndefined(value)&&property.validator&&!property.validator(value)){
            return false;
        }else{
            if(!Lang.isUndefined(value)){
                property.value=value;
            }else{
                value=property.value;
            }
            foundDuplicate=false;
            iLen=this.eventQueue.length;
            for(i=0;i<iLen;i++){
                queueItem=this.eventQueue[i];
                if(queueItem){
                    queueItemKey=queueItem[0];
                    queueItemValue=queueItem[1];
                    if(queueItemKey==key){
                        this.eventQueue[i]=null;
                        this.eventQueue.push([key,(!Lang.isUndefined(value)?value:queueItemValue)]);
                        foundDuplicate=true;
                        break;
                    }
                }
            }
    if(!foundDuplicate&&!Lang.isUndefined(value)){
        this.eventQueue.push([key,value]);
    }
}
if(property.supercedes){
    sLen=property.supercedes.length;
    for(s=0;s<sLen;s++){
        supercedesCheck=property.supercedes[s];
        qLen=this.eventQueue.length;
        for(q=0;q<qLen;q++){
            queueItemCheck=this.eventQueue[q];
            if(queueItemCheck){
                queueItemCheckKey=queueItemCheck[0];
                queueItemCheckValue=queueItemCheck[1];
                if(queueItemCheckKey==supercedesCheck.toLowerCase()){
                    this.eventQueue.push([queueItemCheckKey,queueItemCheckValue]);
                    this.eventQueue[q]=null;
                    break;
                }
            }
        }
    }
}
return true;
}else{
    return false;
}
},
refireEvent:function(key){
    key=key.toLowerCase();
    var property=this.config[key];
    if(property&&property.event&&!Lang.isUndefined(property.value)){
        if(this.queueInProgress){
            this.queueProperty(key);
        }else{
            this.fireEvent(key,property.value);
        }
    }
},
applyConfig:function(userConfig,init){
    var sKey,oConfig;
    if(init){
        oConfig={};

        for(sKey in userConfig){
            if(Lang.hasOwnProperty(userConfig,sKey)){
                oConfig[sKey.toLowerCase()]=userConfig[sKey];
            }
        }
    this.initialConfig=oConfig;
}
for(sKey in userConfig){
    if(Lang.hasOwnProperty(userConfig,sKey)){
        this.queueProperty(sKey,userConfig[sKey]);
    }
}
},
refresh:function(){
    var prop;
    for(prop in this.config){
        this.refireEvent(prop);
    }
    },
fireQueue:function(){
    var i,queueItem,key,value,property;
    this.queueInProgress=true;
    for(i=0;i<this.eventQueue.length;i++){
        queueItem=this.eventQueue[i];
        if(queueItem){
            key=queueItem[0];
            value=queueItem[1];
            property=this.config[key];
            property.value=value;
            this.fireEvent(key,value);
        }
    }
this.queueInProgress=false;
this.eventQueue=[];
},
subscribeToConfigEvent:function(key,handler,obj,override){
    var property=this.config[key.toLowerCase()];
    if(property&&property.event){
        if(!Config.alreadySubscribed(property.event,handler,obj)){
            property.event.subscribe(handler,obj,override);
        }
        return true;
    }else{
        return false;
    }
},
unsubscribeFromConfigEvent:function(key,handler,obj){
    var property=this.config[key.toLowerCase()];
    if(property&&property.event){
        return property.event.unsubscribe(handler,obj);
    }else{
        return false;
    }
},
toString:function(){
    var output="Config";
    if(this.owner){
        output+=" ["+this.owner.toString()+"]";
    }
    return output;
},
outputEventQueue:function(){
    var output="",queueItem,q,nQueue=this.eventQueue.length;
    for(q=0;q<nQueue;q++){
        queueItem=this.eventQueue[q];
        if(queueItem){
            output+=queueItem[0]+"="+queueItem[1]+", ";
        }
    }
return output;
},
destroy:function(){
    var oConfig=this.config,sProperty,oProperty;
    for(sProperty in oConfig){
        if(Lang.hasOwnProperty(oConfig,sProperty)){
            oProperty=oConfig[sProperty];
            oProperty.event.unsubscribeAll();
            oProperty.event=null;
        }
    }
this.configChangedEvent.unsubscribeAll();
this.configChangedEvent=null;
this.owner=null;
this.config=null;
this.initialConfig=null;
this.eventQueue=null;
}
};

Config.alreadySubscribed=function(evt,fn,obj){
    var nSubscribers=evt.subscribers.length,subsc,i;
    if(nSubscribers>0){
        i=nSubscribers-1;
        do{
            subsc=evt.subscribers[i];
            if(subsc&&subsc.obj==obj&&subsc.fn==fn){
                return true;
            }
        }
    while(i--);
}
return false;
};

YAHOO.lang.augmentProto(Config,YAHOO.util.EventProvider);
}());
(function(){
    YAHOO.widget.Module=function(el,userConfig){
        if(el){
            this.init(el,userConfig);
        }else{}
};

var Dom=YAHOO.util.Dom,Config=YAHOO.util.Config,Event=YAHOO.util.Event,CustomEvent=YAHOO.util.CustomEvent,Module=YAHOO.widget.Module,m_oModuleTemplate,m_oHeaderTemplate,m_oBodyTemplate,m_oFooterTemplate,EVENT_TYPES={
    "BEFORE_INIT":"beforeInit",
    "INIT":"init",
    "APPEND":"append",
    "BEFORE_RENDER":"beforeRender",
    "RENDER":"render",
    "CHANGE_HEADER":"changeHeader",
    "CHANGE_BODY":"changeBody",
    "CHANGE_FOOTER":"changeFooter",
    "CHANGE_CONTENT":"changeContent",
    "DESTORY":"destroy",
    "BEFORE_SHOW":"beforeShow",
    "SHOW":"show",
    "BEFORE_HIDE":"beforeHide",
    "HIDE":"hide"
},DEFAULT_CONFIG={
    "VISIBLE":{
        key:"visible",
        value:true,
        validator:YAHOO.lang.isBoolean
        },
    "EFFECT":{
        key:"effect",
        suppressEvent:true,
        supercedes:["visible"]
        },
    "MONITOR_RESIZE":{
        key:"monitorresize",
        value:true
    },
    "APPEND_TO_DOCUMENT_BODY":{
        key:"appendtodocumentbody",
        value:false
    }
};

Module.IMG_ROOT=null;
Module.IMG_ROOT_SSL=null;
Module.CSS_MODULE="yui-module";
Module.CSS_HEADER="hd";
Module.CSS_BODY="bd";
Module.CSS_FOOTER="ft";
Module.RESIZE_MONITOR_SECURE_URL="javascript:false;";
Module.textResizeEvent=new CustomEvent("textResize");
    function createModuleTemplate(){
    if(!m_oModuleTemplate){
        m_oModuleTemplate=document.createElement("div");
        m_oModuleTemplate.innerHTML=("<div class=\""+
            Module.CSS_HEADER+"\"></div>"+"<div class=\""+
            Module.CSS_BODY+"\"></div><div class=\""+
            Module.CSS_FOOTER+"\"></div>");
        m_oHeaderTemplate=m_oModuleTemplate.firstChild;
        m_oBodyTemplate=m_oHeaderTemplate.nextSibling;
        m_oFooterTemplate=m_oBodyTemplate.nextSibling;
    }
    return m_oModuleTemplate;
}
function createHeader(){
    if(!m_oHeaderTemplate){
        createModuleTemplate();
    }
    return(m_oHeaderTemplate.cloneNode(false));
}
function createBody(){
    if(!m_oBodyTemplate){
        createModuleTemplate();
    }
    return(m_oBodyTemplate.cloneNode(false));
}
function createFooter(){
    if(!m_oFooterTemplate){
        createModuleTemplate();
    }
    return(m_oFooterTemplate.cloneNode(false));
}
Module.prototype={
    constructor:Module,
    element:null,
    header:null,
    body:null,
    footer:null,
    id:null,
    imageRoot:Module.IMG_ROOT,
    initEvents:function(){
        var SIGNATURE=CustomEvent.LIST;
        this.beforeInitEvent=this.createEvent(EVENT_TYPES.BEFORE_INIT);
        this.beforeInitEvent.signature=SIGNATURE;
        this.initEvent=this.createEvent(EVENT_TYPES.INIT);
        this.initEvent.signature=SIGNATURE;
        this.appendEvent=this.createEvent(EVENT_TYPES.APPEND);
        this.appendEvent.signature=SIGNATURE;
        this.beforeRenderEvent=this.createEvent(EVENT_TYPES.BEFORE_RENDER);
        this.beforeRenderEvent.signature=SIGNATURE;
        this.renderEvent=this.createEvent(EVENT_TYPES.RENDER);
        this.renderEvent.signature=SIGNATURE;
        this.changeHeaderEvent=this.createEvent(EVENT_TYPES.CHANGE_HEADER);
        this.changeHeaderEvent.signature=SIGNATURE;
        this.changeBodyEvent=this.createEvent(EVENT_TYPES.CHANGE_BODY);
        this.changeBodyEvent.signature=SIGNATURE;
        this.changeFooterEvent=this.createEvent(EVENT_TYPES.CHANGE_FOOTER);
        this.changeFooterEvent.signature=SIGNATURE;
        this.changeContentEvent=this.createEvent(EVENT_TYPES.CHANGE_CONTENT);
        this.changeContentEvent.signature=SIGNATURE;
        this.destroyEvent=this.createEvent(EVENT_TYPES.DESTORY);
        this.destroyEvent.signature=SIGNATURE;
        this.beforeShowEvent=this.createEvent(EVENT_TYPES.BEFORE_SHOW);
        this.beforeShowEvent.signature=SIGNATURE;
        this.showEvent=this.createEvent(EVENT_TYPES.SHOW);
        this.showEvent.signature=SIGNATURE;
        this.beforeHideEvent=this.createEvent(EVENT_TYPES.BEFORE_HIDE);
        this.beforeHideEvent.signature=SIGNATURE;
        this.hideEvent=this.createEvent(EVENT_TYPES.HIDE);
        this.hideEvent.signature=SIGNATURE;
    },
    platform:function(){
        var ua=navigator.userAgent.toLowerCase();
        if(ua.indexOf("windows")!=-1||ua.indexOf("win32")!=-1){
            return"windows";
        }else if(ua.indexOf("macintosh")!=-1){
            return"mac";
        }else{
            return false;
        }
    }(),
    browser:function(){
    var ua=navigator.userAgent.toLowerCase();
    if(ua.indexOf('opera')!=-1){
        return'opera';
    }else if(ua.indexOf('msie 7')!=-1){
        return'ie7';
    }else if(ua.indexOf('msie')!=-1){
        return'ie';
    }else if(ua.indexOf('safari')!=-1){
        return'safari';
    }else if(ua.indexOf('gecko')!=-1){
        return'gecko';
    }else{
        return false;
    }
}(),
isSecure:function(){
    if(window.location.href.toLowerCase().indexOf("https")===0){
        return true;
    }else{
        return false;
    }
}(),
initDefaultConfig:function(){
    this.cfg.addProperty(DEFAULT_CONFIG.VISIBLE.key,{
        handler:this.configVisible,
        value:DEFAULT_CONFIG.VISIBLE.value,
        validator:DEFAULT_CONFIG.VISIBLE.validator
        });
    this.cfg.addProperty(DEFAULT_CONFIG.EFFECT.key,{
        suppressEvent:DEFAULT_CONFIG.EFFECT.suppressEvent,
        supercedes:DEFAULT_CONFIG.EFFECT.supercedes
        });
    this.cfg.addProperty(DEFAULT_CONFIG.MONITOR_RESIZE.key,{
        handler:this.configMonitorResize,
        value:DEFAULT_CONFIG.MONITOR_RESIZE.value
        });
    this.cfg.addProperty(DEFAULT_CONFIG.APPEND_TO_DOCUMENT_BODY.key,{
        value:DEFAULT_CONFIG.APPEND_TO_DOCUMENT_BODY.value
        });
},
init:function(el,userConfig){
    var elId,child;
    this.initEvents();
    this.beforeInitEvent.fire(Module);
    this.cfg=new Config(this);
    if(this.isSecure){
        this.imageRoot=Module.IMG_ROOT_SSL;
    }
    if(typeof el=="string"){
        elId=el;
        el=document.getElementById(el);
        if(!el){
            el=(createModuleTemplate()).cloneNode(false);
            el.id=elId;
        }
    }
this.element=el;
if(el.id){
    this.id=el.id;
}
child=this.element.firstChild;
if(child){
    var fndHd=false,fndBd=false,fndFt=false;
    do{
        if(1==child.nodeType){
            if(!fndHd&&Dom.hasClass(child,Module.CSS_HEADER)){
                this.header=child;
                fndHd=true;
            }else if(!fndBd&&Dom.hasClass(child,Module.CSS_BODY)){
                this.body=child;
                fndBd=true;
            }else if(!fndFt&&Dom.hasClass(child,Module.CSS_FOOTER)){
                this.footer=child;
                fndFt=true;
            }
        }
    }while((child=child.nextSibling));
}
this.initDefaultConfig();
Dom.addClass(this.element,Module.CSS_MODULE);
if(userConfig){
    this.cfg.applyConfig(userConfig,true);
}
if(!Config.alreadySubscribed(this.renderEvent,this.cfg.fireQueue,this.cfg)){
    this.renderEvent.subscribe(this.cfg.fireQueue,this.cfg,true);
}
this.initEvent.fire(Module);
},
initResizeMonitor:function(){
    var oDoc,oIFrame,sHTML;
    function fireTextResize(){
        Module.textResizeEvent.fire();
    }
    if(!YAHOO.env.ua.opera){
        oIFrame=Dom.get("_yuiResizeMonitor");
        if(!oIFrame){
            oIFrame=document.createElement("iframe");
            if(this.isSecure&&Module.RESIZE_MONITOR_SECURE_URL&&YAHOO.env.ua.ie){
                oIFrame.src=Module.RESIZE_MONITOR_SECURE_URL;
            }
            if(YAHOO.env.ua.gecko){
                sHTML=["<html><head><script ","type=\"text/javascript\">","window.onresize=function(){window.parent.","YAHOO.widget.Module.textResizeEvent.","fire();}","<\/script></head>","<body></body></html>"].join('');
                oIFrame.src="data:text/html;charset=utf-8,"+
                encodeURIComponent(sHTML);
            }
            oIFrame.id="_yuiResizeMonitor";
            oIFrame.style.position="absolute";
            oIFrame.style.visibility="hidden";
            var fc=document.body.firstChild;
            if(fc){
                document.body.insertBefore(oIFrame,fc);
            }else{
                document.body.appendChild(oIFrame);
            }
            oIFrame.style.width="10em";
            oIFrame.style.height="10em";
            oIFrame.style.top=(-1*oIFrame.offsetHeight)+"px";
            oIFrame.style.left=(-1*oIFrame.offsetWidth)+"px";
            oIFrame.style.borderWidth="0";
            oIFrame.style.visibility="visible";
            if(YAHOO.env.ua.webkit){
                oDoc=oIFrame.contentWindow.document;
                oDoc.open();
                oDoc.close();
            }
        }
    if(oIFrame&&oIFrame.contentWindow){
        Module.textResizeEvent.subscribe(this.onDomResize,this,true);
        if(!Module.textResizeInitialized){
            if(!YAHOO.env.ua.gecko){
                if(!Event.on(oIFrame.contentWindow,"resize",fireTextResize)){
                    Event.on(oIFrame,"resize",fireTextResize);
                }
            }
        Module.textResizeInitialized=true;
    }
    this.resizeMonitor=oIFrame;
}
}
},
onDomResize:function(e,obj){
    var nLeft=-1*this.resizeMonitor.offsetWidth,nTop=-1*this.resizeMonitor.offsetHeight;
    this.resizeMonitor.style.top=nTop+"px";
    this.resizeMonitor.style.left=nLeft+"px";
},
setHeader:function(headerContent){
    var oHeader=this.header||(this.header=createHeader());
    if(typeof headerContent=="string"){
        oHeader.innerHTML=headerContent;
    }else{
        oHeader.innerHTML="";
        oHeader.appendChild(headerContent);
    }
    this.changeHeaderEvent.fire(headerContent);
    this.changeContentEvent.fire();
},
appendToHeader:function(element){
    var oHeader=this.header||(this.header=createHeader());
    oHeader.appendChild(element);
    this.changeHeaderEvent.fire(element);
    this.changeContentEvent.fire();
},
setBody:function(bodyContent){
    var oBody=this.body||(this.body=createBody());
    if(typeof bodyContent=="string"){
        oBody.innerHTML=bodyContent;
    }else{
        oBody.innerHTML="";
        oBody.appendChild(bodyContent);
    }
    this.changeBodyEvent.fire(bodyContent);
    this.changeContentEvent.fire();
},
appendToBody:function(element){
    var oBody=this.body||(this.body=createBody());
    oBody.appendChild(element);
    this.changeBodyEvent.fire(element);
    this.changeContentEvent.fire();
},
setFooter:function(footerContent){
    var oFooter=this.footer||(this.footer=createFooter());
    if(typeof footerContent=="string"){
        oFooter.innerHTML=footerContent;
    }else{
        oFooter.innerHTML="";
        oFooter.appendChild(footerContent);
    }
    this.changeFooterEvent.fire(footerContent);
    this.changeContentEvent.fire();
},
appendToFooter:function(element){
    var oFooter=this.footer||(this.footer=createFooter());
    oFooter.appendChild(element);
    this.changeFooterEvent.fire(element);
    this.changeContentEvent.fire();
},
render:function(appendToNode,moduleElement){
    var me=this,firstChild;
    function appendTo(parentNode){
        if(typeof parentNode=="string"){
            parentNode=document.getElementById(parentNode);
        }
        if(parentNode){
            me._addToParent(parentNode,me.element);
            me.appendEvent.fire();
        }
    }
this.beforeRenderEvent.fire();
if(!moduleElement){
    moduleElement=this.element;
}
if(appendToNode){
    appendTo(appendToNode);
}else{
    if(!Dom.inDocument(this.element)){
        return false;
    }
}
if(this.header&&!Dom.inDocument(this.header)){
    firstChild=moduleElement.firstChild;
    if(firstChild){
        moduleElement.insertBefore(this.header,firstChild);
    }else{
        moduleElement.appendChild(this.header);
    }
}
if(this.body&&!Dom.inDocument(this.body)){
    if(this.footer&&Dom.isAncestor(this.moduleElement,this.footer)){
        moduleElement.insertBefore(this.body,this.footer);
    }else{
        moduleElement.appendChild(this.body);
    }
}
if(this.footer&&!Dom.inDocument(this.footer)){
    moduleElement.appendChild(this.footer);
}
this.renderEvent.fire();
return true;
},
destroy:function(){
    var parent,e;
    if(this.element){
        Event.purgeElement(this.element,true);
        parent=this.element.parentNode;
    }
    if(parent){
        parent.removeChild(this.element);
    }
    this.element=null;
    this.header=null;
    this.body=null;
    this.footer=null;
    Module.textResizeEvent.unsubscribe(this.onDomResize,this);
    this.cfg.destroy();
    this.cfg=null;
    this.destroyEvent.fire();
    for(e in this){
        if(e instanceof CustomEvent){
            e.unsubscribeAll();
        }
    }
    },
show:function(){
    this.cfg.setProperty("visible",true);
},
hide:function(){
    this.cfg.setProperty("visible",false);
},
configVisible:function(type,args,obj){
    var visible=args[0];
    if(visible){
        this.beforeShowEvent.fire();
        Dom.setStyle(this.element,"display","block");
        this.showEvent.fire();
    }else{
        this.beforeHideEvent.fire();
        Dom.setStyle(this.element,"display","none");
        this.hideEvent.fire();
    }
},
configMonitorResize:function(type,args,obj){
    var monitor=args[0];
    if(monitor){
        this.initResizeMonitor();
    }else{
        Module.textResizeEvent.unsubscribe(this.onDomResize,this,true);
        this.resizeMonitor=null;
    }
},
_addToParent:function(parentNode,element){
    if(!this.cfg.getProperty("appendtodocumentbody")&&parentNode===document.body&&parentNode.firstChild){
        parentNode.insertBefore(element,parentNode.firstChild);
    }else{
        parentNode.appendChild(element);
    }
},
toString:function(){
    return"Module "+this.id;
}
};

YAHOO.lang.augmentProto(Module,YAHOO.util.EventProvider);
}());
(function(){
    YAHOO.widget.Overlay=function(el,userConfig){
        YAHOO.widget.Overlay.superclass.constructor.call(this,el,userConfig);
    };

    var Lang=YAHOO.lang,CustomEvent=YAHOO.util.CustomEvent,Module=YAHOO.widget.Module,Event=YAHOO.util.Event,Dom=YAHOO.util.Dom,Config=YAHOO.util.Config,Overlay=YAHOO.widget.Overlay,m_oIFrameTemplate,EVENT_TYPES={
        "BEFORE_MOVE":"beforeMove",
        "MOVE":"move"
    },DEFAULT_CONFIG={
        "X":{
            key:"x",
            validator:Lang.isNumber,
            suppressEvent:true,
            supercedes:["iframe"]
            },
        "Y":{
            key:"y",
            validator:Lang.isNumber,
            suppressEvent:true,
            supercedes:["iframe"]
            },
        "XY":{
            key:"xy",
            suppressEvent:true,
            supercedes:["iframe"]
            },
        "CONTEXT":{
            key:"context",
            suppressEvent:true,
            supercedes:["iframe"]
            },
        "FIXED_CENTER":{
            key:"fixedcenter",
            value:false,
            validator:Lang.isBoolean,
            supercedes:["iframe","visible"]
            },
        "WIDTH":{
            key:"width",
            suppressEvent:true,
            supercedes:["context","fixedcenter","iframe"]
            },
        "HEIGHT":{
            key:"height",
            suppressEvent:true,
            supercedes:["context","fixedcenter","iframe"]
            },
        "ZINDEX":{
            key:"zindex",
            value:null
        },
        "CONSTRAIN_TO_VIEWPORT":{
            key:"constraintoviewport",
            value:false,
            validator:Lang.isBoolean,
            supercedes:["iframe","x","y","xy"]
            },
        "IFRAME":{
            key:"iframe",
            value:(YAHOO.env.ua.ie==6?true:false),
            validator:Lang.isBoolean,
            supercedes:["zindex"]
            }
        };

Overlay.IFRAME_SRC="javascript:false;";
Overlay.IFRAME_OFFSET=3;
Overlay.VIEWPORT_OFFSET=10;
Overlay.TOP_LEFT="tl";
Overlay.TOP_RIGHT="tr";
Overlay.BOTTOM_LEFT="bl";
Overlay.BOTTOM_RIGHT="br";
Overlay.CSS_OVERLAY="yui-overlay";
Overlay.windowScrollEvent=new CustomEvent("windowScroll");
    Overlay.windowResizeEvent=new CustomEvent("windowResize");
    Overlay.windowScrollHandler=function(e){
    if(YAHOO.env.ua.ie){
        if(!window.scrollEnd){
            window.scrollEnd=-1;
        }
        clearTimeout(window.scrollEnd);
        window.scrollEnd=setTimeout(function(){
            Overlay.windowScrollEvent.fire();
        },1);
    }else{
        Overlay.windowScrollEvent.fire();
    }
};

Overlay.windowResizeHandler=function(e){
    if(YAHOO.env.ua.ie){
        if(!window.resizeEnd){
            window.resizeEnd=-1;
        }
        clearTimeout(window.resizeEnd);
        window.resizeEnd=setTimeout(function(){
            Overlay.windowResizeEvent.fire();
        },100);
    }else{
        Overlay.windowResizeEvent.fire();
    }
};

Overlay._initialized=null;
if(Overlay._initialized===null){
    Event.on(window,"scroll",Overlay.windowScrollHandler);
    Event.on(window,"resize",Overlay.windowResizeHandler);
    Overlay._initialized=true;
}
YAHOO.extend(Overlay,Module,{
    init:function(el,userConfig){
        Overlay.superclass.init.call(this,el);
        this.beforeInitEvent.fire(Overlay);
        Dom.addClass(this.element,Overlay.CSS_OVERLAY);
        if(userConfig){
            this.cfg.applyConfig(userConfig,true);
        }
        if(this.platform=="mac"&&YAHOO.env.ua.gecko){
            if(!Config.alreadySubscribed(this.showEvent,this.showMacGeckoScrollbars,this)){
                this.showEvent.subscribe(this.showMacGeckoScrollbars,this,true);
            }
            if(!Config.alreadySubscribed(this.hideEvent,this.hideMacGeckoScrollbars,this)){
                this.hideEvent.subscribe(this.hideMacGeckoScrollbars,this,true);
            }
        }
    this.initEvent.fire(Overlay);
},
initEvents:function(){
    Overlay.superclass.initEvents.call(this);
    var SIGNATURE=CustomEvent.LIST;
    this.beforeMoveEvent=this.createEvent(EVENT_TYPES.BEFORE_MOVE);
    this.beforeMoveEvent.signature=SIGNATURE;
    this.moveEvent=this.createEvent(EVENT_TYPES.MOVE);
    this.moveEvent.signature=SIGNATURE;
},
initDefaultConfig:function(){
    Overlay.superclass.initDefaultConfig.call(this);
    this.cfg.addProperty(DEFAULT_CONFIG.X.key,{
        handler:this.configX,
        validator:DEFAULT_CONFIG.X.validator,
        suppressEvent:DEFAULT_CONFIG.X.suppressEvent,
        supercedes:DEFAULT_CONFIG.X.supercedes
        });
    this.cfg.addProperty(DEFAULT_CONFIG.Y.key,{
        handler:this.configY,
        validator:DEFAULT_CONFIG.Y.validator,
        suppressEvent:DEFAULT_CONFIG.Y.suppressEvent,
        supercedes:DEFAULT_CONFIG.Y.supercedes
        });
    this.cfg.addProperty(DEFAULT_CONFIG.XY.key,{
        handler:this.configXY,
        suppressEvent:DEFAULT_CONFIG.XY.suppressEvent,
        supercedes:DEFAULT_CONFIG.XY.supercedes
        });
    this.cfg.addProperty(DEFAULT_CONFIG.CONTEXT.key,{
        handler:this.configContext,
        suppressEvent:DEFAULT_CONFIG.CONTEXT.suppressEvent,
        supercedes:DEFAULT_CONFIG.CONTEXT.supercedes
        });
    this.cfg.addProperty(DEFAULT_CONFIG.FIXED_CENTER.key,{
        handler:this.configFixedCenter,
        value:DEFAULT_CONFIG.FIXED_CENTER.value,
        validator:DEFAULT_CONFIG.FIXED_CENTER.validator,
        supercedes:DEFAULT_CONFIG.FIXED_CENTER.supercedes
        });
    this.cfg.addProperty(DEFAULT_CONFIG.WIDTH.key,{
        handler:this.configWidth,
        suppressEvent:DEFAULT_CONFIG.WIDTH.suppressEvent,
        supercedes:DEFAULT_CONFIG.WIDTH.supercedes
        });
    this.cfg.addProperty(DEFAULT_CONFIG.HEIGHT.key,{
        handler:this.configHeight,
        suppressEvent:DEFAULT_CONFIG.HEIGHT.suppressEvent,
        supercedes:DEFAULT_CONFIG.HEIGHT.supercedes
        });
    this.cfg.addProperty(DEFAULT_CONFIG.ZINDEX.key,{
        handler:this.configzIndex,
        value:DEFAULT_CONFIG.ZINDEX.value
        });
    this.cfg.addProperty(DEFAULT_CONFIG.CONSTRAIN_TO_VIEWPORT.key,{
        handler:this.configConstrainToViewport,
        value:DEFAULT_CONFIG.CONSTRAIN_TO_VIEWPORT.value,
        validator:DEFAULT_CONFIG.CONSTRAIN_TO_VIEWPORT.validator,
        supercedes:DEFAULT_CONFIG.CONSTRAIN_TO_VIEWPORT.supercedes
        });
    this.cfg.addProperty(DEFAULT_CONFIG.IFRAME.key,{
        handler:this.configIframe,
        value:DEFAULT_CONFIG.IFRAME.value,
        validator:DEFAULT_CONFIG.IFRAME.validator,
        supercedes:DEFAULT_CONFIG.IFRAME.supercedes
        });
},
moveTo:function(x,y){
    this.cfg.setProperty("xy",[x,y]);
},
hideMacGeckoScrollbars:function(){
    Dom.removeClass(this.element,"show-scrollbars");
    Dom.addClass(this.element,"hide-scrollbars");
},
showMacGeckoScrollbars:function(){
    Dom.removeClass(this.element,"hide-scrollbars");
    Dom.addClass(this.element,"show-scrollbars");
},
configVisible:function(type,args,obj){
    var visible=args[0],currentVis=Dom.getStyle(this.element,"visibility"),effect=this.cfg.getProperty("effect"),effectInstances=[],isMacGecko=(this.platform=="mac"&&YAHOO.env.ua.gecko),alreadySubscribed=Config.alreadySubscribed,eff,ei,e,i,j,k,h,nEffects,nEffectInstances;
    if(currentVis=="inherit"){
        e=this.element.parentNode;
        while(e.nodeType!=9&&e.nodeType!=11){
            currentVis=Dom.getStyle(e,"visibility");
            if(currentVis!="inherit"){
                break;
            }
            e=e.parentNode;
        }
        if(currentVis=="inherit"){
            currentVis="visible";
        }
    }
if(effect){
    if(effect instanceof Array){
        nEffects=effect.length;
        for(i=0;i<nEffects;i++){
            eff=effect[i];
            effectInstances[effectInstances.length]=eff.effect(this,eff.duration);
        }
        }else{
    effectInstances[effectInstances.length]=effect.effect(this,effect.duration);
}
}
if(visible){
    if(isMacGecko){
        this.showMacGeckoScrollbars();
    }
    if(effect){
        if(visible){
            if(currentVis!="visible"||currentVis===""){
                this.beforeShowEvent.fire();
                nEffectInstances=effectInstances.length;
                for(j=0;j<nEffectInstances;j++){
                    ei=effectInstances[j];
                    if(j===0&&!alreadySubscribed(ei.animateInCompleteEvent,this.showEvent.fire,this.showEvent)){
                        ei.animateInCompleteEvent.subscribe(this.showEvent.fire,this.showEvent,true);
                    }
                    ei.animateIn();
                }
                }
            }
}else{
    if(currentVis!="visible"||currentVis===""){
        this.beforeShowEvent.fire();
        Dom.setStyle(this.element,"visibility","visible");
        this.cfg.refireEvent("iframe");
        this.showEvent.fire();
    }
}
}else{
    if(isMacGecko){
        this.hideMacGeckoScrollbars();
    }
    if(effect){
        if(currentVis=="visible"){
            this.beforeHideEvent.fire();
            nEffectInstances=effectInstances.length;
            for(k=0;k<nEffectInstances;k++){
                h=effectInstances[k];
                if(k===0&&!alreadySubscribed(h.animateOutCompleteEvent,this.hideEvent.fire,this.hideEvent)){
                    h.animateOutCompleteEvent.subscribe(this.hideEvent.fire,this.hideEvent,true);
                }
                h.animateOut();
            }
            }else if(currentVis===""){
        Dom.setStyle(this.element,"visibility","hidden");
    }
}else{
    if(currentVis=="visible"||currentVis===""){
        this.beforeHideEvent.fire();
        Dom.setStyle(this.element,"visibility","hidden");
        this.hideEvent.fire();
    }
}
}
},
doCenterOnDOMEvent:function(){
    if(this.cfg.getProperty("visible")){
        this.center();
    }
},
configFixedCenter:function(type,args,obj){
    var val=args[0],alreadySubscribed=Config.alreadySubscribed,windowResizeEvent=Overlay.windowResizeEvent,windowScrollEvent=Overlay.windowScrollEvent;
    if(val){
        this.center();
        if(!alreadySubscribed(this.beforeShowEvent,this.center,this)){
            this.beforeShowEvent.subscribe(this.center);
        }
        if(!alreadySubscribed(windowResizeEvent,this.doCenterOnDOMEvent,this)){
            windowResizeEvent.subscribe(this.doCenterOnDOMEvent,this,true);
        }
        if(!alreadySubscribed(windowScrollEvent,this.doCenterOnDOMEvent,this)){
            windowScrollEvent.subscribe(this.doCenterOnDOMEvent,this,true);
        }
    }else{
    this.beforeShowEvent.unsubscribe(this.center);
    windowResizeEvent.unsubscribe(this.doCenterOnDOMEvent,this);
    windowScrollEvent.unsubscribe(this.doCenterOnDOMEvent,this);
}
},
configHeight:function(type,args,obj){
    var height=args[0],el=this.element;
    Dom.setStyle(el,"height",height);
    this.cfg.refireEvent("iframe");
},
configWidth:function(type,args,obj){
    var width=args[0],el=this.element;
    Dom.setStyle(el,"width",width);
    this.cfg.refireEvent("iframe");
},
configzIndex:function(type,args,obj){
    var zIndex=args[0],el=this.element;
    if(!zIndex){
        zIndex=Dom.getStyle(el,"zIndex");
        if(!zIndex||isNaN(zIndex)){
            zIndex=0;
        }
    }
if(this.iframe||this.cfg.getProperty("iframe")===true){
    if(zIndex<=0){
        zIndex=1;
    }
}
Dom.setStyle(el,"zIndex",zIndex);
this.cfg.setProperty("zIndex",zIndex,true);
if(this.iframe){
    this.stackIframe();
}
},
configXY:function(type,args,obj){
    var pos=args[0],x=pos[0],y=pos[1];
    this.cfg.setProperty("x",x);
    this.cfg.setProperty("y",y);
    this.beforeMoveEvent.fire([x,y]);
    x=this.cfg.getProperty("x");
    y=this.cfg.getProperty("y");
    this.cfg.refireEvent("iframe");
    this.moveEvent.fire([x,y]);
},
configX:function(type,args,obj){
    var x=args[0],y=this.cfg.getProperty("y");
    this.cfg.setProperty("x",x,true);
    this.cfg.setProperty("y",y,true);
    this.beforeMoveEvent.fire([x,y]);
    x=this.cfg.getProperty("x");
    y=this.cfg.getProperty("y");
    Dom.setX(this.element,x,true);
    this.cfg.setProperty("xy",[x,y],true);
    this.cfg.refireEvent("iframe");
    this.moveEvent.fire([x,y]);
},
configY:function(type,args,obj){
    var x=this.cfg.getProperty("x"),y=args[0];
    this.cfg.setProperty("x",x,true);
    this.cfg.setProperty("y",y,true);
    this.beforeMoveEvent.fire([x,y]);
    x=this.cfg.getProperty("x");
    y=this.cfg.getProperty("y");
    Dom.setY(this.element,y,true);
    this.cfg.setProperty("xy",[x,y],true);
    this.cfg.refireEvent("iframe");
    this.moveEvent.fire([x,y]);
},
showIframe:function(){
    var oIFrame=this.iframe,oParentNode;
    if(oIFrame){
        oParentNode=this.element.parentNode;
        if(oParentNode!=oIFrame.parentNode){
            this._addToParent(oParentNode,oIFrame);
        }
        oIFrame.style.display="block";
    }
},
hideIframe:function(){
    if(this.iframe){
        this.iframe.style.display="none";
    }
},
syncIframe:function(){
    var oIFrame=this.iframe,oElement=this.element,nOffset=Overlay.IFRAME_OFFSET,nDimensionOffset=(nOffset*2),aXY;
    if(oIFrame){
        oIFrame.style.width=(oElement.offsetWidth+nDimensionOffset+"px");
        oIFrame.style.height=(oElement.offsetHeight+nDimensionOffset+"px");
        aXY=this.cfg.getProperty("xy");
        if(!Lang.isArray(aXY)||(isNaN(aXY[0])||isNaN(aXY[1]))){
            this.syncPosition();
            aXY=this.cfg.getProperty("xy");
        }
        Dom.setXY(oIFrame,[(aXY[0]-nOffset),(aXY[1]-nOffset)]);
    }
},
stackIframe:function(){
    if(this.iframe){
        var overlayZ=Dom.getStyle(this.element,"zIndex");
        if(!YAHOO.lang.isUndefined(overlayZ)&&!isNaN(overlayZ)){
            Dom.setStyle(this.iframe,"zIndex",(overlayZ-1));
        }
    }
},
configIframe:function(type,args,obj){
    var bIFrame=args[0];
    function createIFrame(){
        var oIFrame=this.iframe,oElement=this.element,oParent;
        if(!oIFrame){
            if(!m_oIFrameTemplate){
                m_oIFrameTemplate=document.createElement("iframe");
                if(this.isSecure){
                    m_oIFrameTemplate.src=Overlay.IFRAME_SRC;
                }
                if(YAHOO.env.ua.ie){
                    m_oIFrameTemplate.style.filter="alpha(opacity=0)";
                    m_oIFrameTemplate.frameBorder=0;
                }
                else{
                    m_oIFrameTemplate.style.opacity="0";
                }
                m_oIFrameTemplate.style.position="absolute";
                m_oIFrameTemplate.style.border="none";
                m_oIFrameTemplate.style.margin="0";
                m_oIFrameTemplate.style.padding="0";
                m_oIFrameTemplate.style.display="none";
            }
            oIFrame=m_oIFrameTemplate.cloneNode(false);
            oParent=oElement.parentNode;
            var parentNode=oParent||document.body;
            this._addToParent(parentNode,oIFrame);
            this.iframe=oIFrame;
        }
        this.showIframe();
        this.syncIframe();
        this.stackIframe();
        if(!this._hasIframeEventListeners){
            this.showEvent.subscribe(this.showIframe);
            this.hideEvent.subscribe(this.hideIframe);
            this.changeContentEvent.subscribe(this.syncIframe);
            this._hasIframeEventListeners=true;
        }
    }
function onBeforeShow(){
    createIFrame.call(this);
    this.beforeShowEvent.unsubscribe(onBeforeShow);
    this._iframeDeferred=false;
}
if(bIFrame){
    if(this.cfg.getProperty("visible")){
        createIFrame.call(this);
    }else{
        if(!this._iframeDeferred){
            this.beforeShowEvent.subscribe(onBeforeShow);
            this._iframeDeferred=true;
        }
    }
}else{
    this.hideIframe();
    if(this._hasIframeEventListeners){
        this.showEvent.unsubscribe(this.showIframe);
        this.hideEvent.unsubscribe(this.hideIframe);
        this.changeContentEvent.unsubscribe(this.syncIframe);
        this._hasIframeEventListeners=false;
    }
}
},
configConstrainToViewport:function(type,args,obj){
    function constrainBeforeShow(){
        if(YAHOO.lang.isUndefined(this.cfg.getProperty("xy"))){
            this.syncPosition();
        }
        var x=this.cfg.getProperty("x");
        var y=this.cfg.getProperty("y");
        var cXY=this.getConstrainedXY(x,y);
        if(cXY[0]!==x||cXY[1]!==y){
            this.moveTo(cXY[0],cXY[1]);
        }
    }
var val=args[0];
if(val){
    if(!Config.alreadySubscribed(this.beforeMoveEvent,this.enforceConstraints,this)){
        this.beforeMoveEvent.subscribe(this.enforceConstraints,this,true);
    }
    if(!Config.alreadySubscribed(this.beforeShowEvent,constrainBeforeShow)){
        this.beforeShowEvent.subscribe(constrainBeforeShow);
    }
}else{
    this.beforeShowEvent.unsubscribe(constrainBeforeShow);
    this.beforeMoveEvent.unsubscribe(this.enforceConstraints,this);
}
},
configContext:function(type,args,obj){
    var contextArgs=args[0],contextEl,elementMagnetCorner,contextMagnetCorner;
    if(contextArgs){
        contextEl=contextArgs[0];
        elementMagnetCorner=contextArgs[1];
        contextMagnetCorner=contextArgs[2];
        if(contextEl){
            if(typeof contextEl=="string"){
                this.cfg.setProperty("context",[document.getElementById(contextEl),elementMagnetCorner,contextMagnetCorner],true);
            }
            if(elementMagnetCorner&&contextMagnetCorner){
                this.align(elementMagnetCorner,contextMagnetCorner);
            }
        }
    }
},
align:function(elementAlign,contextAlign){
    var contextArgs=this.cfg.getProperty("context"),me=this,context,element,contextRegion;
    function doAlign(v,h){
        switch(elementAlign){
            case Overlay.TOP_LEFT:
                me.moveTo(h,v);
                break;
            case Overlay.TOP_RIGHT:
                me.moveTo((h-element.offsetWidth),v);
                break;
            case Overlay.BOTTOM_LEFT:
                me.moveTo(h,(v-element.offsetHeight));
                break;
            case Overlay.BOTTOM_RIGHT:
                me.moveTo((h-element.offsetWidth),(v-element.offsetHeight));
                break;
        }
    }
if(contextArgs){
    context=contextArgs[0];
    element=this.element;
    me=this;
    if(!elementAlign){
        elementAlign=contextArgs[1];
    }
    if(!contextAlign){
        contextAlign=contextArgs[2];
    }
    if(element&&context){
        contextRegion=Dom.getRegion(context);
        switch(contextAlign){
            case Overlay.TOP_LEFT:
                doAlign(contextRegion.top,contextRegion.left);
                break;
            case Overlay.TOP_RIGHT:
                doAlign(contextRegion.top,contextRegion.right);
                break;
            case Overlay.BOTTOM_LEFT:
                doAlign(contextRegion.bottom,contextRegion.left);
                break;
            case Overlay.BOTTOM_RIGHT:
                doAlign(contextRegion.bottom,contextRegion.right);
                break;
        }
    }
}
},
enforceConstraints:function(type,args,obj){
    var pos=args[0];
    var cXY=this.getConstrainedXY(pos[0],pos[1]);
    this.cfg.setProperty("x",cXY[0],true);
    this.cfg.setProperty("y",cXY[1],true);
    this.cfg.setProperty("xy",cXY,true);
},
getConstrainedXY:function(x,y){
    var nViewportOffset=Overlay.VIEWPORT_OFFSET,viewPortWidth=Dom.getViewportWidth(),viewPortHeight=Dom.getViewportHeight(),offsetHeight=this.element.offsetHeight,offsetWidth=this.element.offsetWidth,scrollX=Dom.getDocumentScrollLeft(),scrollY=Dom.getDocumentScrollTop();
    var xNew=x;
    var yNew=y;
    if(offsetWidth+nViewportOffset<viewPortWidth){
        var leftConstraint=scrollX+nViewportOffset;
        var rightConstraint=scrollX+viewPortWidth-offsetWidth-nViewportOffset;
        if(x<leftConstraint){
            xNew=leftConstraint;
        }else if(x>rightConstraint){
            xNew=rightConstraint;
        }
    }else{
    xNew=nViewportOffset+scrollX;
}
if(offsetHeight+nViewportOffset<viewPortHeight){
    var topConstraint=scrollY+nViewportOffset;
    var bottomConstraint=scrollY+viewPortHeight-offsetHeight-nViewportOffset;
    if(y<topConstraint){
        yNew=topConstraint;
    }else if(y>bottomConstraint){
        yNew=bottomConstraint;
    }
}else{
    yNew=nViewportOffset+scrollY;
}
return[xNew,yNew];
},
center:function(){
    var nViewportOffset=Overlay.VIEWPORT_OFFSET,elementWidth=this.element.offsetWidth,elementHeight=this.element.offsetHeight,viewPortWidth=Dom.getViewportWidth(),viewPortHeight=Dom.getViewportHeight(),x,y;
    if(elementWidth<viewPortWidth){
        x=(viewPortWidth/2)-(elementWidth/2)+Dom.getDocumentScrollLeft();
    }else{
        x=nViewportOffset+Dom.getDocumentScrollLeft();
    }
    if(elementHeight<viewPortHeight){
        y=(viewPortHeight/2)-(elementHeight/2)+Dom.getDocumentScrollTop();
    }else{
        y=nViewportOffset+Dom.getDocumentScrollTop();
    }
    this.cfg.setProperty("xy",[parseInt(x,10),parseInt(y,10)]);
    this.cfg.refireEvent("iframe");
},
syncPosition:function(){
    var pos=Dom.getXY(this.element);
    this.cfg.setProperty("x",pos[0],true);
    this.cfg.setProperty("y",pos[1],true);
    this.cfg.setProperty("xy",pos,true);
},
onDomResize:function(e,obj){
    var me=this;
    Overlay.superclass.onDomResize.call(this,e,obj);
    setTimeout(function(){
        me.syncPosition();
        me.cfg.refireEvent("iframe");
        me.cfg.refireEvent("context");
    },0);
},
bringToTop:function(){
    var aOverlays=[],oElement=this.element;
    function compareZIndexDesc(p_oOverlay1,p_oOverlay2){
        var sZIndex1=Dom.getStyle(p_oOverlay1,"zIndex"),sZIndex2=Dom.getStyle(p_oOverlay2,"zIndex"),nZIndex1=(!sZIndex1||isNaN(sZIndex1))?0:parseInt(sZIndex1,10),nZIndex2=(!sZIndex2||isNaN(sZIndex2))?0:parseInt(sZIndex2,10);
        if(nZIndex1>nZIndex2){
            return-1;
        }else if(nZIndex1<nZIndex2){
            return 1;
        }else{
            return 0;
        }
    }
function isOverlayElement(p_oElement){
    var oOverlay=Dom.hasClass(p_oElement,Overlay.CSS_OVERLAY),Panel=YAHOO.widget.Panel;
    if(oOverlay&&!Dom.isAncestor(oElement,oOverlay)){
        if(Panel&&Dom.hasClass(p_oElement,Panel.CSS_PANEL)){
            aOverlays[aOverlays.length]=p_oElement.parentNode;
        }else{
            aOverlays[aOverlays.length]=p_oElement;
        }
    }
}
Dom.getElementsBy(isOverlayElement,"DIV",document.body);
aOverlays.sort(compareZIndexDesc);
var oTopOverlay=aOverlays[0],nTopZIndex;
if(oTopOverlay){
    nTopZIndex=Dom.getStyle(oTopOverlay,"zIndex");
    if(!isNaN(nTopZIndex)){
        var bRequiresBump=false;
        if(oTopOverlay!=oElement){
            bRequiresBump=true;
        }else if(aOverlays.length>1){
            var nNextZIndex=Dom.getStyle(aOverlays[1],"zIndex");
            if(!isNaN(nNextZIndex)&&(nTopZIndex==nNextZIndex)){
                bRequiresBump=true;
            }
        }
    if(bRequiresBump){
        this.cfg.setProperty("zindex",(parseInt(nTopZIndex,10)+2));
    }
}
}
},
destroy:function(){
    if(this.iframe){
        this.iframe.parentNode.removeChild(this.iframe);
    }
    this.iframe=null;
    Overlay.windowResizeEvent.unsubscribe(this.doCenterOnDOMEvent,this);
    Overlay.windowScrollEvent.unsubscribe(this.doCenterOnDOMEvent,this);
    Overlay.superclass.destroy.call(this);
},
toString:function(){
    return"Overlay "+this.id;
}
});
}());
(function(){
    YAHOO.widget.OverlayManager=function(userConfig){
        this.init(userConfig);
    };

    var Overlay=YAHOO.widget.Overlay,Event=YAHOO.util.Event,Dom=YAHOO.util.Dom,Config=YAHOO.util.Config,CustomEvent=YAHOO.util.CustomEvent,OverlayManager=YAHOO.widget.OverlayManager;
    OverlayManager.CSS_FOCUSED="focused";
    OverlayManager.prototype={
        constructor:OverlayManager,
        overlays:null,
        initDefaultConfig:function(){
            this.cfg.addProperty("overlays",{
                suppressEvent:true
            });
            this.cfg.addProperty("focusevent",{
                value:"mousedown"
            });
        },
        init:function(userConfig){
            this.cfg=new Config(this);
            this.initDefaultConfig();
            if(userConfig){
                this.cfg.applyConfig(userConfig,true);
            }
            this.cfg.fireQueue();
            var activeOverlay=null;
            this.getActive=function(){
                return activeOverlay;
            };

            this.focus=function(overlay){
                var o=this.find(overlay);
                if(o){
                    if(activeOverlay!=o){
                        if(activeOverlay){
                            activeOverlay.blur();
                        }
                        this.bringToTop(o);
                        activeOverlay=o;
                        Dom.addClass(activeOverlay.element,OverlayManager.CSS_FOCUSED);
                        o.focusEvent.fire();
                    }
                }
            };

    this.remove=function(overlay){
        var o=this.find(overlay),originalZ;
        if(o){
            if(activeOverlay==o){
                activeOverlay=null;
            }
            var bDestroyed=(o.element===null&&o.cfg===null)?true:false;
            if(!bDestroyed){
                originalZ=Dom.getStyle(o.element,"zIndex");
                o.cfg.setProperty("zIndex",-1000,true);
            }
            this.overlays.sort(this.compareZIndexDesc);
            this.overlays=this.overlays.slice(0,(this.overlays.length-1));
            o.hideEvent.unsubscribe(o.blur);
            o.destroyEvent.unsubscribe(this._onOverlayDestroy,o);
            if(!bDestroyed){
                Event.removeListener(o.element,this.cfg.getProperty("focusevent"),this._onOverlayElementFocus);
                o.cfg.setProperty("zIndex",originalZ,true);
                o.cfg.setProperty("manager",null);
            }
            o.focusEvent.unsubscribeAll();
            o.blurEvent.unsubscribeAll();
            o.focusEvent=null;
            o.blurEvent=null;
            o.focus=null;
            o.blur=null;
        }
    };

this.blurAll=function(){
    var nOverlays=this.overlays.length,i;
    if(nOverlays>0){
        i=nOverlays-1;
        do{
            this.overlays[i].blur();
        }
        while(i--);
    }
};

this._onOverlayBlur=function(p_sType,p_aArgs){
    activeOverlay=null;
};

var overlays=this.cfg.getProperty("overlays");
    if(!this.overlays){
    this.overlays=[];
}
if(overlays){
    this.register(overlays);
    this.overlays.sort(this.compareZIndexDesc);
}
},
_onOverlayElementFocus:function(p_oEvent){
    var oTarget=Event.getTarget(p_oEvent),oClose=this.close;
    if(oClose&&(oTarget==oClose||Dom.isAncestor(oClose,oTarget))){
        this.blur();
    }else{
        this.focus();
    }
},
_onOverlayDestroy:function(p_sType,p_aArgs,p_oOverlay){
    this.remove(p_oOverlay);
},
register:function(overlay){
    var mgr=this,zIndex,regcount,i,nOverlays;
    if(overlay instanceof Overlay){
        overlay.cfg.addProperty("manager",{
            value:this
        });
        overlay.focusEvent=overlay.createEvent("focus");
        overlay.focusEvent.signature=CustomEvent.LIST;
        overlay.blurEvent=overlay.createEvent("blur");
        overlay.blurEvent.signature=CustomEvent.LIST;
        overlay.focus=function(){
            mgr.focus(this);
        };

        overlay.blur=function(){
            if(mgr.getActive()==this){
                Dom.removeClass(this.element,OverlayManager.CSS_FOCUSED);
                this.blurEvent.fire();
            }
        };

    overlay.blurEvent.subscribe(mgr._onOverlayBlur);
    overlay.hideEvent.subscribe(overlay.blur);
    overlay.destroyEvent.subscribe(this._onOverlayDestroy,overlay,this);
    Event.on(overlay.element,this.cfg.getProperty("focusevent"),this._onOverlayElementFocus,null,overlay);
    zIndex=Dom.getStyle(overlay.element,"zIndex");
    if(!isNaN(zIndex)){
        overlay.cfg.setProperty("zIndex",parseInt(zIndex,10));
    }else{
        overlay.cfg.setProperty("zIndex",0);
    }
    this.overlays.push(overlay);
    this.bringToTop(overlay);
    return true;
}else if(overlay instanceof Array){
    regcount=0;
    nOverlays=overlay.length;
    for(i=0;i<nOverlays;i++){
        if(this.register(overlay[i])){
            regcount++;
        }
    }
if(regcount>0){
    return true;
}
}else{
    return false;
}
},
bringToTop:function(p_oOverlay){
    var oOverlay=this.find(p_oOverlay),nTopZIndex,oTopOverlay,aOverlays;
    if(oOverlay){
        aOverlays=this.overlays;
        aOverlays.sort(this.compareZIndexDesc);
        oTopOverlay=aOverlays[0];
        if(oTopOverlay){
            nTopZIndex=Dom.getStyle(oTopOverlay.element,"zIndex");
            if(!isNaN(nTopZIndex)){
                var bRequiresBump=false;
                if(oTopOverlay!==oOverlay){
                    bRequiresBump=true;
                }else if(aOverlays.length>1){
                    var nNextZIndex=Dom.getStyle(aOverlays[1].element,"zIndex");
                    if(!isNaN(nNextZIndex)&&(nTopZIndex==nNextZIndex)){
                        bRequiresBump=true;
                    }
                }
            if(bRequiresBump){
                oOverlay.cfg.setProperty("zindex",(parseInt(nTopZIndex,10)+2));
            }
        }
    aOverlays.sort(this.compareZIndexDesc);
}
}
},
find:function(overlay){
    var aOverlays=this.overlays,nOverlays=aOverlays.length,i;
    if(nOverlays>0){
        i=nOverlays-1;
        if(overlay instanceof Overlay){
            do{
                if(aOverlays[i]==overlay){
                    return aOverlays[i];
                }
            }
        while(i--);
    }else if(typeof overlay=="string"){
        do{
            if(aOverlays[i].id==overlay){
                return aOverlays[i];
            }
        }
    while(i--);
}
return null;
}
},
compareZIndexDesc:function(o1,o2){
    var zIndex1=(o1.cfg)?o1.cfg.getProperty("zIndex"):null,zIndex2=(o2.cfg)?o2.cfg.getProperty("zIndex"):null;
    if(zIndex1===null&&zIndex2===null){
        return 0;
    }else if(zIndex1===null){
        return 1;
    }else if(zIndex2===null){
        return-1;
    }else if(zIndex1>zIndex2){
        return-1;
    }else if(zIndex1<zIndex2){
        return 1;
    }else{
        return 0;
    }
},
showAll:function(){
    var aOverlays=this.overlays,nOverlays=aOverlays.length,i;
    if(nOverlays>0){
        i=nOverlays-1;
        do{
            aOverlays[i].show();
        }
        while(i--);
    }
},
hideAll:function(){
    var aOverlays=this.overlays,nOverlays=aOverlays.length,i;
    if(nOverlays>0){
        i=nOverlays-1;
        do{
            aOverlays[i].hide();
        }
        while(i--);
    }
},
toString:function(){
    return"OverlayManager";
}
};

}());
(function(){
    YAHOO.widget.ContainerEffect=function(overlay,attrIn,attrOut,targetElement,animClass){
        if(!animClass){
            animClass=YAHOO.util.Anim;
        }
        this.overlay=overlay;
        this.attrIn=attrIn;
        this.attrOut=attrOut;
        this.targetElement=targetElement||overlay.element;
        this.animClass=animClass;
    };

    var Dom=YAHOO.util.Dom,CustomEvent=YAHOO.util.CustomEvent,Easing=YAHOO.util.Easing,ContainerEffect=YAHOO.widget.ContainerEffect;
    ContainerEffect.FADE=function(overlay,dur){
        var fin={
            attributes:{
                opacity:{
                    from:0,
                    to:1
                }
            },
        duration:dur,
        method:Easing.easeIn
        };

    var fout={
        attributes:{
            opacity:{
                to:0
            }
        },
    duration:dur,
    method:Easing.easeOut
    };

var fade=new ContainerEffect(overlay,fin,fout,overlay.element);
    fade.handleUnderlayStart=function(){
    var underlay=this.overlay.underlay;
    if(underlay&&YAHOO.env.ua.ie){
        var hasFilters=(underlay.filters&&underlay.filters.length>0);
        if(hasFilters){
            Dom.addClass(overlay.element,"yui-effect-fade");
        }
    }
};

fade.handleUnderlayComplete=function(){
    var underlay=this.overlay.underlay;
    if(underlay&&YAHOO.env.ua.ie){
        Dom.removeClass(overlay.element,"yui-effect-fade");
    }
};

fade.handleStartAnimateIn=function(type,args,obj){
    Dom.addClass(obj.overlay.element,"hide-select");
    if(!obj.overlay.underlay){
        obj.overlay.cfg.refireEvent("underlay");
    }
    obj.handleUnderlayStart();
    Dom.setStyle(obj.overlay.element,"visibility","visible");
    Dom.setStyle(obj.overlay.element,"opacity",0);
};

fade.handleCompleteAnimateIn=function(type,args,obj){
    Dom.removeClass(obj.overlay.element,"hide-select");
    if(obj.overlay.element.style.filter){
        obj.overlay.element.style.filter=null;
    }
    obj.handleUnderlayComplete();
    obj.overlay.cfg.refireEvent("iframe");
    obj.animateInCompleteEvent.fire();
};

fade.handleStartAnimateOut=function(type,args,obj){
    Dom.addClass(obj.overlay.element,"hide-select");
    obj.handleUnderlayStart();
};

fade.handleCompleteAnimateOut=function(type,args,obj){
    Dom.removeClass(obj.overlay.element,"hide-select");
    if(obj.overlay.element.style.filter){
        obj.overlay.element.style.filter=null;
    }
    Dom.setStyle(obj.overlay.element,"visibility","hidden");
    Dom.setStyle(obj.overlay.element,"opacity",1);
    obj.handleUnderlayComplete();
    obj.overlay.cfg.refireEvent("iframe");
    obj.animateOutCompleteEvent.fire();
};

fade.init();
return fade;
};

ContainerEffect.SLIDE=function(overlay,dur){
    var x=overlay.cfg.getProperty("x")||Dom.getX(overlay.element),y=overlay.cfg.getProperty("y")||Dom.getY(overlay.element),clientWidth=Dom.getClientWidth(),offsetWidth=overlay.element.offsetWidth,slide=new ContainerEffect(overlay,{
        attributes:{
            points:{
                to:[x,y]
                }
            },
    duration:dur,
    method:Easing.easeIn
    },{
        attributes:{
            points:{
                to:[(clientWidth+25),y]
                }
            },
    duration:dur,
    method:Easing.easeOut
    },overlay.element,YAHOO.util.Motion);
slide.handleStartAnimateIn=function(type,args,obj){
    obj.overlay.element.style.left=((-25)-offsetWidth)+"px";
    obj.overlay.element.style.top=y+"px";
};

slide.handleTweenAnimateIn=function(type,args,obj){
    var pos=Dom.getXY(obj.overlay.element),currentX=pos[0],currentY=pos[1];
    if(Dom.getStyle(obj.overlay.element,"visibility")=="hidden"&&currentX<x){
        Dom.setStyle(obj.overlay.element,"visibility","visible");
    }
    obj.overlay.cfg.setProperty("xy",[currentX,currentY],true);
    obj.overlay.cfg.refireEvent("iframe");
};

slide.handleCompleteAnimateIn=function(type,args,obj){
    obj.overlay.cfg.setProperty("xy",[x,y],true);
    obj.startX=x;
    obj.startY=y;
    obj.overlay.cfg.refireEvent("iframe");
    obj.animateInCompleteEvent.fire();
};

slide.handleStartAnimateOut=function(type,args,obj){
    var vw=Dom.getViewportWidth(),pos=Dom.getXY(obj.overlay.element),yso=pos[1];
    obj.animOut.attributes.points.to=[(vw+25),yso];
};

slide.handleTweenAnimateOut=function(type,args,obj){
    var pos=Dom.getXY(obj.overlay.element),xto=pos[0],yto=pos[1];
    obj.overlay.cfg.setProperty("xy",[xto,yto],true);
    obj.overlay.cfg.refireEvent("iframe");
};

slide.handleCompleteAnimateOut=function(type,args,obj){
    Dom.setStyle(obj.overlay.element,"visibility","hidden");
    obj.overlay.cfg.setProperty("xy",[x,y]);
    obj.animateOutCompleteEvent.fire();
};

slide.init();
return slide;
};

ContainerEffect.prototype={
    init:function(){
        this.beforeAnimateInEvent=this.createEvent("beforeAnimateIn");
        this.beforeAnimateInEvent.signature=CustomEvent.LIST;
        this.beforeAnimateOutEvent=this.createEvent("beforeAnimateOut");
        this.beforeAnimateOutEvent.signature=CustomEvent.LIST;
        this.animateInCompleteEvent=this.createEvent("animateInComplete");
        this.animateInCompleteEvent.signature=CustomEvent.LIST;
        this.animateOutCompleteEvent=this.createEvent("animateOutComplete");
        this.animateOutCompleteEvent.signature=CustomEvent.LIST;
        this.animIn=new this.animClass(this.targetElement,this.attrIn.attributes,this.attrIn.duration,this.attrIn.method);
        this.animIn.onStart.subscribe(this.handleStartAnimateIn,this);
        this.animIn.onTween.subscribe(this.handleTweenAnimateIn,this);
        this.animIn.onComplete.subscribe(this.handleCompleteAnimateIn,this);
        this.animOut=new this.animClass(this.targetElement,this.attrOut.attributes,this.attrOut.duration,this.attrOut.method);
        this.animOut.onStart.subscribe(this.handleStartAnimateOut,this);
        this.animOut.onTween.subscribe(this.handleTweenAnimateOut,this);
        this.animOut.onComplete.subscribe(this.handleCompleteAnimateOut,this);
    },
    animateIn:function(){
        this.beforeAnimateInEvent.fire();
        this.animIn.animate();
    },
    animateOut:function(){
        this.beforeAnimateOutEvent.fire();
        this.animOut.animate();
    },
    handleStartAnimateIn:function(type,args,obj){},
    handleTweenAnimateIn:function(type,args,obj){},
    handleCompleteAnimateIn:function(type,args,obj){},
    handleStartAnimateOut:function(type,args,obj){},
    handleTweenAnimateOut:function(type,args,obj){},
    handleCompleteAnimateOut:function(type,args,obj){},
    toString:function(){
        var output="ContainerEffect";
        if(this.overlay){
            output+=" ["+this.overlay.toString()+"]";
        }
        return output;
    }
};

YAHOO.lang.augmentProto(ContainerEffect,YAHOO.util.EventProvider);
})();
YAHOO.register("containercore",YAHOO.widget.Module,{
    version:"2.4.0",
    build:"733"
});
(function(){
    var Dom=YAHOO.util.Dom,Event=YAHOO.util.Event;
    YAHOO.widget.MenuManager=function(){
        var m_bInitializedEventHandlers=false,m_oMenus={},m_oVisibleMenus={},m_oItems={},m_oEventTypes={
            "click":"clickEvent",
            "mousedown":"mouseDownEvent",
            "mouseup":"mouseUpEvent",
            "mouseover":"mouseOverEvent",
            "mouseout":"mouseOutEvent",
            "keydown":"keyDownEvent",
            "keyup":"keyUpEvent",
            "keypress":"keyPressEvent"
        },m_oFocusedMenuItem=null;
        function getMenuRootElement(p_oElement){
            var oParentNode;
            if(p_oElement&&p_oElement.tagName){
                switch(p_oElement.tagName.toUpperCase()){
                    case"DIV":
                        oParentNode=p_oElement.parentNode;
                        if((Dom.hasClass(p_oElement,"hd")||Dom.hasClass(p_oElement,"bd")||Dom.hasClass(p_oElement,"ft"))&&oParentNode&&oParentNode.tagName&&oParentNode.tagName.toUpperCase()=="DIV")

                        {
                        return oParentNode;
                    }
                    else{
                        return p_oElement;
                    }
                    break;
                    case"LI":
                        return p_oElement;
                    default:
                        oParentNode=p_oElement.parentNode;
                        if(oParentNode){
                        return getMenuRootElement(oParentNode);
                    }
                    break;
                }
            }
        }
function onDOMEvent(p_oEvent){
    var oTarget=Event.getTarget(p_oEvent),oElement=getMenuRootElement(oTarget),sCustomEventType,sTagName,sId,oMenuItem,oMenu;
    if(oElement){
        sTagName=oElement.tagName.toUpperCase();
        if(sTagName=="LI"){
            sId=oElement.id;
            if(sId&&m_oItems[sId]){
                oMenuItem=m_oItems[sId];
                oMenu=oMenuItem.parent;
            }
        }
    else if(sTagName=="DIV"){
        if(oElement.id){
            oMenu=m_oMenus[oElement.id];
        }
    }
}
if(oMenu){
    sCustomEventType=m_oEventTypes[p_oEvent.type];
    if(oMenuItem&&!oMenuItem.cfg.getProperty("disabled")){
        oMenuItem[sCustomEventType].fire(p_oEvent);
        if(p_oEvent.type=="keyup"||p_oEvent.type=="mousedown")

        {
            if(m_oFocusedMenuItem!=oMenuItem){
                if(m_oFocusedMenuItem){
                    m_oFocusedMenuItem.blurEvent.fire();
                }
                oMenuItem.focusEvent.fire();
            }
        }
    }
oMenu[sCustomEventType].fire(p_oEvent,oMenuItem);
}
else if(p_oEvent.type=="mousedown"){
    if(m_oFocusedMenuItem){
        m_oFocusedMenuItem.blurEvent.fire();
        m_oFocusedMenuItem=null;
    }
    for(var i in m_oVisibleMenus){
        if(YAHOO.lang.hasOwnProperty(m_oVisibleMenus,i)){
            oMenu=m_oVisibleMenus[i];
            if(oMenu.cfg.getProperty("clicktohide")&&!(oMenu instanceof YAHOO.widget.MenuBar)&&oMenu.cfg.getProperty("position")=="dynamic"){
                oMenu.hide();
            }
            else{
                oMenu.clearActiveItem(true);
            }
        }
    }
    }
else if(p_oEvent.type=="keyup"){
    if(m_oFocusedMenuItem){
        m_oFocusedMenuItem.blurEvent.fire();
        m_oFocusedMenuItem=null;
    }
}
}
function onMenuDestroy(p_sType,p_aArgs,p_oMenu){
    if(m_oMenus[p_oMenu.id]){
        this.removeMenu(p_oMenu);
    }
}
function onMenuFocus(p_sType,p_aArgs){
    var oItem=p_aArgs[0];
    if(oItem){
        m_oFocusedMenuItem=oItem;
    }
}
function onMenuBlur(p_sType,p_aArgs){
    m_oFocusedMenuItem=null;
}
function onMenuVisibleConfigChange(p_sType,p_aArgs){
    var bVisible=p_aArgs[0],sId=this.id;
    if(bVisible){
        m_oVisibleMenus[sId]=this;
    }
    else if(m_oVisibleMenus[sId]){
        delete m_oVisibleMenus[sId];
    }
}
function onItemDestroy(p_sType,p_aArgs){
    removeItem(this);
}
function removeItem(p_oMenuItem){
    var sId=p_oMenuItem.id;
    if(sId&&m_oItems[sId]){
        if(m_oFocusedMenuItem==p_oMenuItem){
            m_oFocusedMenuItem=null;
        }
        delete m_oItems[sId];
        p_oMenuItem.destroyEvent.unsubscribe(onItemDestroy);
    }
}
function onItemAdded(p_sType,p_aArgs){
    var oItem=p_aArgs[0],sId;
    if(oItem instanceof YAHOO.widget.MenuItem){
        sId=oItem.id;
        if(!m_oItems[sId]){
            m_oItems[sId]=oItem;
            oItem.destroyEvent.subscribe(onItemDestroy);
        }
    }
}
return{
    addMenu:function(p_oMenu){
        var oDoc;
        if(p_oMenu instanceof YAHOO.widget.Menu&&p_oMenu.id&&!m_oMenus[p_oMenu.id]){
            m_oMenus[p_oMenu.id]=p_oMenu;
            if(!m_bInitializedEventHandlers){
                oDoc=document;
                Event.on(oDoc,"mouseover",onDOMEvent,this,true);
                Event.on(oDoc,"mouseout",onDOMEvent,this,true);
                Event.on(oDoc,"mousedown",onDOMEvent,this,true);
                Event.on(oDoc,"mouseup",onDOMEvent,this,true);
                Event.on(oDoc,"click",onDOMEvent,this,true);
                Event.on(oDoc,"keydown",onDOMEvent,this,true);
                Event.on(oDoc,"keyup",onDOMEvent,this,true);
                Event.on(oDoc,"keypress",onDOMEvent,this,true);
                m_bInitializedEventHandlers=true;
            }
            p_oMenu.cfg.subscribeToConfigEvent("visible",onMenuVisibleConfigChange);
            p_oMenu.destroyEvent.subscribe(onMenuDestroy,p_oMenu,this);
            p_oMenu.itemAddedEvent.subscribe(onItemAdded);
            p_oMenu.focusEvent.subscribe(onMenuFocus);
            p_oMenu.blurEvent.subscribe(onMenuBlur);
        }
    },
removeMenu:function(p_oMenu){
    var sId,aItems,i;
    if(p_oMenu){
        sId=p_oMenu.id;
        if(m_oMenus[sId]==p_oMenu){
            aItems=p_oMenu.getItems();
            if(aItems&&aItems.length>0){
                i=aItems.length-1;
                do{
                    removeItem(aItems[i]);
                }
                while(i--);
            }
            delete m_oMenus[sId];
            if(m_oVisibleMenus[sId]==p_oMenu){
                delete m_oVisibleMenus[sId];
            }
            if(p_oMenu.cfg){
                p_oMenu.cfg.unsubscribeFromConfigEvent("visible",onMenuVisibleConfigChange);
            }
            p_oMenu.destroyEvent.unsubscribe(onMenuDestroy,p_oMenu);
            p_oMenu.itemAddedEvent.unsubscribe(onItemAdded);
            p_oMenu.focusEvent.unsubscribe(onMenuFocus);
            p_oMenu.blurEvent.unsubscribe(onMenuBlur);
        }
    }
},
hideVisible:function(){
    var oMenu;
    for(var i in m_oVisibleMenus){
        if(YAHOO.lang.hasOwnProperty(m_oVisibleMenus,i)){
            oMenu=m_oVisibleMenus[i];
            if(!(oMenu instanceof YAHOO.widget.MenuBar)&&oMenu.cfg.getProperty("position")=="dynamic"){
                oMenu.hide();
            }
        }
    }
    },
getVisible:function(){
    return m_oVisibleMenus;
},
getMenus:function(){
    return m_oMenus;
},
getMenu:function(p_sId){
    var oMenu=m_oMenus[p_sId];
    if(oMenu){
        return oMenu;
    }
},
getMenuItem:function(p_sId){
    var oItem=m_oItems[p_sId];
    if(oItem){
        return oItem;
    }
},
getMenuItemGroup:function(p_sId){
    var oUL=Dom.get(p_sId),aItems,oNode,oItem,sId;
    if(oUL&&oUL.tagName&&oUL.tagName.toUpperCase()=="UL"){
        oNode=oUL.firstChild;
        if(oNode){
            aItems=[];
            do{
                sId=oNode.id;
                if(sId){
                    oItem=this.getMenuItem(sId);
                    if(oItem){
                        aItems[aItems.length]=oItem;
                    }
                }
            }
    while((oNode=oNode.nextSibling));
    if(aItems.length>0){
        return aItems;
    }
}
}
},
getFocusedMenuItem:function(){
    return m_oFocusedMenuItem;
},
getFocusedMenu:function(){
    if(m_oFocusedMenuItem){
        return(m_oFocusedMenuItem.parent.getRoot());
    }
},
toString:function(){
    return"MenuManager";
}
};

}();
})();
(function(){
    YAHOO.widget.Menu=function(p_oElement,p_oConfig){
        if(p_oConfig){
            this.parent=p_oConfig.parent;
            this.lazyLoad=p_oConfig.lazyLoad||p_oConfig.lazyload;
            this.itemData=p_oConfig.itemData||p_oConfig.itemdata;
        }
        YAHOO.widget.Menu.superclass.constructor.call(this,p_oElement,p_oConfig);
    };

    function checkPosition(p_sPosition){
        if(typeof p_sPosition=="string"){
            return("dynamic,static".indexOf((p_sPosition.toLowerCase()))!=-1);
        }
    }
var Dom=YAHOO.util.Dom,Event=YAHOO.util.Event,Module=YAHOO.widget.Module,Overlay=YAHOO.widget.Overlay,Menu=YAHOO.widget.Menu,MenuManager=YAHOO.widget.MenuManager,CustomEvent=YAHOO.util.CustomEvent,Lang=YAHOO.lang,UA=YAHOO.env.ua,m_oShadowTemplate,EVENT_TYPES={
    "MOUSE_OVER":"mouseover",
    "MOUSE_OUT":"mouseout",
    "MOUSE_DOWN":"mousedown",
    "MOUSE_UP":"mouseup",
    "CLICK":"click",
    "KEY_PRESS":"keypress",
    "KEY_DOWN":"keydown",
    "KEY_UP":"keyup",
    "FOCUS":"focus",
    "BLUR":"blur",
    "ITEM_ADDED":"itemAdded",
    "ITEM_REMOVED":"itemRemoved"
},DEFAULT_CONFIG={
    "VISIBLE":{
        key:"visible",
        value:false,
        validator:Lang.isBoolean
        },
    "CONSTRAIN_TO_VIEWPORT":{
        key:"constraintoviewport",
        value:true,
        validator:Lang.isBoolean,
        supercedes:["iframe","x","y","xy"]
        },
    "POSITION":{
        key:"position",
        value:"dynamic",
        validator:checkPosition,
        supercedes:["visible","iframe"]
        },
    "SUBMENU_ALIGNMENT":{
        key:"submenualignment",
        value:["tl","tr"],
        suppressEvent:true
    },
    "AUTO_SUBMENU_DISPLAY":{
        key:"autosubmenudisplay",
        value:true,
        validator:Lang.isBoolean,
        suppressEvent:true
    },
    "SHOW_DELAY":{
        key:"showdelay",
        value:250,
        validator:Lang.isNumber,
        suppressEvent:true
    },
    "HIDE_DELAY":{
        key:"hidedelay",
        value:0,
        validator:Lang.isNumber,
        suppressEvent:true
    },
    "SUBMENU_HIDE_DELAY":{
        key:"submenuhidedelay",
        value:250,
        validator:Lang.isNumber,
        suppressEvent:true
    },
    "CLICK_TO_HIDE":{
        key:"clicktohide",
        value:true,
        validator:Lang.isBoolean,
        suppressEvent:true
    },
    "CONTAINER":{
        key:"container",
        suppressEvent:true
    },
    "SCROLL_INCREMENT":{
        key:"scrollincrement",
        value:1,
        validator:Lang.isNumber,
        supercedes:["maxheight"],
        suppressEvent:true
    },
    "MIN_SCROLL_HEIGHT":{
        key:"minscrollheight",
        value:90,
        validator:Lang.isNumber,
        supercedes:["maxheight"],
        suppressEvent:true
    },
    "MAX_HEIGHT":{
        key:"maxheight",
        value:0,
        validator:Lang.isNumber,
        supercedes:["iframe"],
        suppressEvent:true
    },
    "CLASS_NAME":{
        key:"classname",
        value:null,
        validator:Lang.isString,
        suppressEvent:true
    },
    "DISABLED":{
        key:"disabled",
        value:false,
        validator:Lang.isBoolean,
        suppressEvent:true
    }
};

YAHOO.lang.extend(Menu,Overlay,{
    CSS_CLASS_NAME:"yuimenu",
    ITEM_TYPE:null,
    GROUP_TITLE_TAG_NAME:"h6",
    OFF_SCREEN_POSITION:[-10000,-10000],
    _nHideDelayId:null,
    _nShowDelayId:null,
    _nSubmenuHideDelayId:null,
    _nBodyScrollId:null,
    _bHideDelayEventHandlersAssigned:false,
    _bHandledMouseOverEvent:false,
    _bHandledMouseOutEvent:false,
    _aGroupTitleElements:null,
    _aItemGroups:null,
    _aListElements:null,
    _nCurrentMouseX:0,
    _bStopMouseEventHandlers:false,
    _sClassName:null,
    lazyLoad:false,
    itemData:null,
    activeItem:null,
    parent:null,
    srcElement:null,
    mouseOverEvent:null,
    mouseOutEvent:null,
    mouseDownEvent:null,
    mouseUpEvent:null,
    clickEvent:null,
    keyPressEvent:null,
    keyDownEvent:null,
    keyUpEvent:null,
    itemAddedEvent:null,
    itemRemovedEvent:null,
    init:function(p_oElement,p_oConfig){
        this._aItemGroups=[];
        this._aListElements=[];
        this._aGroupTitleElements=[];
        if(!this.ITEM_TYPE){
            this.ITEM_TYPE=YAHOO.widget.MenuItem;
        }
        var oElement;
        if(typeof p_oElement=="string"){
            oElement=document.getElementById(p_oElement);
        }
        else if(p_oElement.tagName){
            oElement=p_oElement;
        }
        if(oElement&&oElement.tagName){
            switch(oElement.tagName.toUpperCase()){
                case"DIV":
                    this.srcElement=oElement;
                    if(!oElement.id){
                    oElement.setAttribute("id",Dom.generateId());
                }
                Menu.superclass.init.call(this,oElement);
                    this.beforeInitEvent.fire(Menu);
                    break;
                case"SELECT":
                    this.srcElement=oElement;
                    Menu.superclass.init.call(this,Dom.generateId());
                    this.beforeInitEvent.fire(Menu);
                    break;
            }
        }
    else{
        Menu.superclass.init.call(this,p_oElement);
        this.beforeInitEvent.fire(Menu);
    }
    if(this.element){
        Dom.addClass(this.element,this.CSS_CLASS_NAME);
        this.initEvent.subscribe(this._onInit);
        this.beforeRenderEvent.subscribe(this._onBeforeRender);
        this.renderEvent.subscribe(this._onRender);
        this.renderEvent.subscribe(this.onRender);
        this.beforeShowEvent.subscribe(this._onBeforeShow);
        this.hideEvent.subscribe(this.positionOffScreen);
        this.showEvent.subscribe(this._onShow);
        this.beforeHideEvent.subscribe(this._onBeforeHide);
        this.mouseOverEvent.subscribe(this._onMouseOver);
        this.mouseOutEvent.subscribe(this._onMouseOut);
        this.clickEvent.subscribe(this._onClick);
        this.keyDownEvent.subscribe(this._onKeyDown);
        this.keyPressEvent.subscribe(this._onKeyPress);
        if(UA.gecko||UA.webkit){
            this.cfg.subscribeToConfigEvent("y",this._onYChange);
        }
        if(p_oConfig){
            this.cfg.applyConfig(p_oConfig,true);
        }
        MenuManager.addMenu(this);
        this.initEvent.fire(Menu);
    }
},
_initSubTree:function(){
    var oSrcElement=this.srcElement,sSrcElementTagName,nGroup,sGroupTitleTagName,oNode,aListElements,nListElements,i;
    if(oSrcElement){
        sSrcElementTagName=(oSrcElement.tagName&&oSrcElement.tagName.toUpperCase());
        if(sSrcElementTagName=="DIV"){
            oNode=this.body.firstChild;
            if(oNode){
                nGroup=0;
                sGroupTitleTagName=this.GROUP_TITLE_TAG_NAME.toUpperCase();
                do{
                    if(oNode&&oNode.tagName){
                        switch(oNode.tagName.toUpperCase()){
                            case sGroupTitleTagName:
                                this._aGroupTitleElements[nGroup]=oNode;
                                break;
                            case"UL":
                                this._aListElements[nGroup]=oNode;
                                this._aItemGroups[nGroup]=[];
                                nGroup++;
                                break;
                        }
                    }
                }
        while((oNode=oNode.nextSibling));
        if(this._aListElements[0]){
            Dom.addClass(this._aListElements[0],"first-of-type");
        }
    }
}
oNode=null;
if(sSrcElementTagName){
    switch(sSrcElementTagName){
        case"DIV":
            aListElements=this._aListElements;
            nListElements=aListElements.length;
            if(nListElements>0){
            i=nListElements-1;
            do{
                oNode=aListElements[i].firstChild;
                if(oNode){
                    do{
                        if(oNode&&oNode.tagName&&oNode.tagName.toUpperCase()=="LI"){
                            this.addItem(new this.ITEM_TYPE(oNode,{
                                parent:this
                            }),i);
                        }
                    }
                while((oNode=oNode.nextSibling));
            }
        }
        while(i--);
    }
    break;
case"SELECT":
    oNode=oSrcElement.firstChild;
    do{
    if(oNode&&oNode.tagName){
        switch(oNode.tagName.toUpperCase()){
            case"OPTGROUP":case"OPTION":
                this.addItem(new this.ITEM_TYPE(oNode,{
                parent:this
            }));
            break;
        }
    }
}
while((oNode=oNode.nextSibling));
break;
}
}
}
},
_getFirstEnabledItem:function(){
    var aItems=this.getItems(),nItems=aItems.length,oItem;
    for(var i=0;i<nItems;i++){
        oItem=aItems[i];
        if(oItem&&!oItem.cfg.getProperty("disabled")&&oItem.element.style.display!="none"){
            return oItem;
        }
    }
    },
_addItemToGroup:function(p_nGroupIndex,p_oItem,p_nItemIndex){
    var oItem,nGroupIndex,aGroup,oGroupItem,bAppend,oNextItemSibling,nItemIndex;
    function getNextItemSibling(p_aArray,p_nStartIndex){
        return(p_aArray[p_nStartIndex]||getNextItemSibling(p_aArray,(p_nStartIndex+1)));
    }
    if(p_oItem instanceof this.ITEM_TYPE){
        oItem=p_oItem;
        oItem.parent=this;
    }
    else if(typeof p_oItem=="string"){
        oItem=new this.ITEM_TYPE(p_oItem,{
            parent:this
        });
    }
    else if(typeof p_oItem=="object"){
        p_oItem.parent=this;
        oItem=new this.ITEM_TYPE(p_oItem.text,p_oItem);
    }
    if(oItem){
        if(oItem.cfg.getProperty("selected")){
            this.activeItem=oItem;
        }
        nGroupIndex=typeof p_nGroupIndex=="number"?p_nGroupIndex:0;
        aGroup=this._getItemGroup(nGroupIndex);
        if(!aGroup){
            aGroup=this._createItemGroup(nGroupIndex);
        }
        if(typeof p_nItemIndex=="number"){
            bAppend=(p_nItemIndex>=aGroup.length);
            if(aGroup[p_nItemIndex]){
                aGroup.splice(p_nItemIndex,0,oItem);
            }
            else{
                aGroup[p_nItemIndex]=oItem;
            }
            oGroupItem=aGroup[p_nItemIndex];
            if(oGroupItem){
                if(bAppend&&(!oGroupItem.element.parentNode||oGroupItem.element.parentNode.nodeType==11)){
                    this._aListElements[nGroupIndex].appendChild(oGroupItem.element);
                }
                else{
                    oNextItemSibling=getNextItemSibling(aGroup,(p_nItemIndex+1));
                    if(oNextItemSibling&&(!oGroupItem.element.parentNode||oGroupItem.element.parentNode.nodeType==11)){
                        this._aListElements[nGroupIndex].insertBefore(oGroupItem.element,oNextItemSibling.element);
                    }
                }
            oGroupItem.parent=this;
            this._subscribeToItemEvents(oGroupItem);
            this._configureSubmenu(oGroupItem);
            this._updateItemProperties(nGroupIndex);
            this.itemAddedEvent.fire(oGroupItem);
            this.changeContentEvent.fire();
            return oGroupItem;
        }
    }
else{
    nItemIndex=aGroup.length;
    aGroup[nItemIndex]=oItem;
    oGroupItem=aGroup[nItemIndex];
    if(oGroupItem){
        if(!Dom.isAncestor(this._aListElements[nGroupIndex],oGroupItem.element)){
            this._aListElements[nGroupIndex].appendChild(oGroupItem.element);
        }
        oGroupItem.element.setAttribute("groupindex",nGroupIndex);
        oGroupItem.element.setAttribute("index",nItemIndex);
        oGroupItem.parent=this;
        oGroupItem.index=nItemIndex;
        oGroupItem.groupIndex=nGroupIndex;
        this._subscribeToItemEvents(oGroupItem);
        this._configureSubmenu(oGroupItem);
        if(nItemIndex===0){
            Dom.addClass(oGroupItem.element,"first-of-type");
        }
        this.itemAddedEvent.fire(oGroupItem);
        this.changeContentEvent.fire();
        return oGroupItem;
    }
}
}
},
_removeItemFromGroupByIndex:function(p_nGroupIndex,p_nItemIndex){
    var nGroupIndex=typeof p_nGroupIndex=="number"?p_nGroupIndex:0,aGroup=this._getItemGroup(nGroupIndex),aArray,oItem,oUL;
    if(aGroup){
        aArray=aGroup.splice(p_nItemIndex,1);
        oItem=aArray[0];
        if(oItem){
            this._updateItemProperties(nGroupIndex);
            if(aGroup.length===0){
                oUL=this._aListElements[nGroupIndex];
                if(this.body&&oUL){
                    this.body.removeChild(oUL);
                }
                this._aItemGroups.splice(nGroupIndex,1);
                this._aListElements.splice(nGroupIndex,1);
                oUL=this._aListElements[0];
                if(oUL){
                    Dom.addClass(oUL,"first-of-type");
                }
            }
        this.itemRemovedEvent.fire(oItem);
        this.changeContentEvent.fire();
        return oItem;
    }
}
},
_removeItemFromGroupByValue:function(p_nGroupIndex,p_oItem){
    var aGroup=this._getItemGroup(p_nGroupIndex),nItems,nItemIndex,i;
    if(aGroup){
        nItems=aGroup.length;
        nItemIndex=-1;
        if(nItems>0){
            i=nItems-1;
            do{
                if(aGroup[i]==p_oItem){
                    nItemIndex=i;
                    break;
                }
            }
        while(i--);
        if(nItemIndex>-1){
            return(this._removeItemFromGroupByIndex(p_nGroupIndex,nItemIndex));
        }
    }
}
},
_updateItemProperties:function(p_nGroupIndex){
    var aGroup=this._getItemGroup(p_nGroupIndex),nItems=aGroup.length,oItem,oLI,i;
    if(nItems>0){
        i=nItems-1;
        do{
            oItem=aGroup[i];
            if(oItem){
                oLI=oItem.element;
                oItem.index=i;
                oItem.groupIndex=p_nGroupIndex;
                oLI.setAttribute("groupindex",p_nGroupIndex);
                oLI.setAttribute("index",i);
                Dom.removeClass(oLI,"first-of-type");
            }
        }
    while(i--);
    if(oLI){
        Dom.addClass(oLI,"first-of-type");
    }
}
},
_createItemGroup:function(p_nIndex){
    var oUL;
    if(!this._aItemGroups[p_nIndex]){
        this._aItemGroups[p_nIndex]=[];
        oUL=document.createElement("ul");
        this._aListElements[p_nIndex]=oUL;
        return this._aItemGroups[p_nIndex];
    }
},
_getItemGroup:function(p_nIndex){
    var nIndex=((typeof p_nIndex=="number")?p_nIndex:0);
    return this._aItemGroups[nIndex];
},
_configureSubmenu:function(p_oItem){
    var oSubmenu=p_oItem.cfg.getProperty("submenu");
    if(oSubmenu){
        this.cfg.configChangedEvent.subscribe(this._onParentMenuConfigChange,oSubmenu,true);
        this.renderEvent.subscribe(this._onParentMenuRender,oSubmenu,true);
        oSubmenu.beforeShowEvent.subscribe(this._onSubmenuBeforeShow);
    }
},
_subscribeToItemEvents:function(p_oItem){
    p_oItem.focusEvent.subscribe(this._onMenuItemFocus);
    p_oItem.blurEvent.subscribe(this._onMenuItemBlur);
    p_oItem.destroyEvent.subscribe(this._onMenuItemDestroy,p_oItem,this);
    p_oItem.cfg.configChangedEvent.subscribe(this._onMenuItemConfigChange,p_oItem,this);
},
_onVisibleChange:function(p_sType,p_aArgs){
    var bVisible=p_aArgs[0];
    if(bVisible){
        Dom.addClass(this.element,"visible");
    }
    else{
        Dom.removeClass(this.element,"visible");
    }
},
_cancelHideDelay:function(){
    var oRoot=this.getRoot();
    if(oRoot._nHideDelayId){
        window.clearTimeout(oRoot._nHideDelayId);
    }
},
_execHideDelay:function(){
    this._cancelHideDelay();
    var oRoot=this.getRoot(),me=this;
    function hideMenu(){
        if(oRoot.activeItem){
            oRoot.clearActiveItem();
        }
        if(oRoot==me&&!(me instanceof YAHOO.widget.MenuBar)&&me.cfg.getProperty("position")=="dynamic"){
            me.hide();
        }
    }
oRoot._nHideDelayId=window.setTimeout(hideMenu,oRoot.cfg.getProperty("hidedelay"));
},
_cancelShowDelay:function(){
    var oRoot=this.getRoot();
    if(oRoot._nShowDelayId){
        window.clearTimeout(oRoot._nShowDelayId);
    }
},
_execShowDelay:function(p_oMenu){
    var oRoot=this.getRoot();
    function showMenu(){
        if(p_oMenu.parent.cfg.getProperty("selected")){
            p_oMenu.show();
        }
    }
oRoot._nShowDelayId=window.setTimeout(showMenu,oRoot.cfg.getProperty("showdelay"));
},
_execSubmenuHideDelay:function(p_oSubmenu,p_nMouseX,p_nHideDelay){
    var me=this;
    p_oSubmenu._nSubmenuHideDelayId=window.setTimeout(function(){
        if(me._nCurrentMouseX>(p_nMouseX+10)){
            p_oSubmenu._nSubmenuHideDelayId=window.setTimeout(function(){
                p_oSubmenu.hide();
            },p_nHideDelay);
        }
        else{
            p_oSubmenu.hide();
        }
    },50);
},
_disableScrollHeader:function(){
    if(!this._bHeaderDisabled){
        Dom.addClass(this.header,"topscrollbar_disabled");
        this._bHeaderDisabled=true;
    }
},
_disableScrollFooter:function(){
    if(!this._bFooterDisabled){
        Dom.addClass(this.footer,"bottomscrollbar_disabled");
        this._bFooterDisabled=true;
    }
},
_enableScrollHeader:function(){
    if(this._bHeaderDisabled){
        Dom.removeClass(this.header,"topscrollbar_disabled");
        this._bHeaderDisabled=false;
    }
},
_enableScrollFooter:function(){
    if(this._bFooterDisabled){
        Dom.removeClass(this.footer,"bottomscrollbar_disabled");
        this._bFooterDisabled=false;
    }
},
_onMouseOver:function(p_sType,p_aArgs){
    if(this._bStopMouseEventHandlers){
        return false;
    }
    var oEvent=p_aArgs[0],oItem=p_aArgs[1],oTarget=Event.getTarget(oEvent),oParentMenu,nShowDelay,bShowDelay,oActiveItem,oItemCfg,oSubmenu;
    if(!this._bHandledMouseOverEvent&&(oTarget==this.element||Dom.isAncestor(this.element,oTarget))){
        this._nCurrentMouseX=0;
        Event.on(this.element,"mousemove",this._onMouseMove,this,true);
        this.clearActiveItem();
        if(this.parent&&this._nSubmenuHideDelayId){
            window.clearTimeout(this._nSubmenuHideDelayId);
            this.parent.cfg.setProperty("selected",true);
            oParentMenu=this.parent.parent;
            oParentMenu._bHandledMouseOutEvent=true;
            oParentMenu._bHandledMouseOverEvent=false;
        }
        this._bHandledMouseOverEvent=true;
        this._bHandledMouseOutEvent=false;
    }
    if(oItem&&!oItem.handledMouseOverEvent&&!oItem.cfg.getProperty("disabled")&&(oTarget==oItem.element||Dom.isAncestor(oItem.element,oTarget))){
        nShowDelay=this.cfg.getProperty("showdelay");
        bShowDelay=(nShowDelay>0);
        if(bShowDelay){
            this._cancelShowDelay();
        }
        oActiveItem=this.activeItem;
        if(oActiveItem){
            oActiveItem.cfg.setProperty("selected",false);
        }
        oItemCfg=oItem.cfg;
        oItemCfg.setProperty("selected",true);
        if(this.hasFocus()){
            oItem.focus();
        }
        if(this.cfg.getProperty("autosubmenudisplay")){
            oSubmenu=oItemCfg.getProperty("submenu");
            if(oSubmenu){
                if(bShowDelay){
                    this._execShowDelay(oSubmenu);
                }
                else{
                    oSubmenu.show();
                }
            }
        }
oItem.handledMouseOverEvent=true;
oItem.handledMouseOutEvent=false;
}
},
_onMouseOut:function(p_sType,p_aArgs){
    if(this._bStopMouseEventHandlers){
        return false;
    }
    var oEvent=p_aArgs[0],oItem=p_aArgs[1],oRelatedTarget=Event.getRelatedTarget(oEvent),bMovingToSubmenu=false,oItemCfg,oSubmenu,nSubmenuHideDelay,nShowDelay;
    if(oItem&&!oItem.cfg.getProperty("disabled")){
        oItemCfg=oItem.cfg;
        oSubmenu=oItemCfg.getProperty("submenu");
        if(oSubmenu&&(oRelatedTarget==oSubmenu.element||Dom.isAncestor(oSubmenu.element,oRelatedTarget))){
            bMovingToSubmenu=true;
        }
        if(!oItem.handledMouseOutEvent&&((oRelatedTarget!=oItem.element&&!Dom.isAncestor(oItem.element,oRelatedTarget))||bMovingToSubmenu)){
            if(!bMovingToSubmenu){
                oItem.cfg.setProperty("selected",false);
                if(oSubmenu){
                    nSubmenuHideDelay=this.cfg.getProperty("submenuhidedelay");
                    nShowDelay=this.cfg.getProperty("showdelay");
                    if(!(this instanceof YAHOO.widget.MenuBar)&&nSubmenuHideDelay>0&&nShowDelay>=nSubmenuHideDelay){
                        this._execSubmenuHideDelay(oSubmenu,Event.getPageX(oEvent),nSubmenuHideDelay);
                    }
                    else{
                        oSubmenu.hide();
                    }
                }
            }
    oItem.handledMouseOutEvent=true;
    oItem.handledMouseOverEvent=false;
}
}
if(!this._bHandledMouseOutEvent&&((oRelatedTarget!=this.element&&!Dom.isAncestor(this.element,oRelatedTarget))||bMovingToSubmenu)){
    Event.removeListener(this.element,"mousemove",this._onMouseMove);
    this._nCurrentMouseX=Event.getPageX(oEvent);
    this._bHandledMouseOutEvent=true;
    this._bHandledMouseOverEvent=false;
}
},
_onMouseMove:function(p_oEvent,p_oMenu){
    if(this._bStopMouseEventHandlers){
        return false;
    }
    this._nCurrentMouseX=Event.getPageX(p_oEvent);
},
_onClick:function(p_sType,p_aArgs){
    var oEvent=p_aArgs[0],oItem=p_aArgs[1],oSubmenu,bInMenuAnchor=false,oRoot,sId,sURL,nHashPos,nLen;
    if(oItem&&!oItem.cfg.getProperty("disabled")){
        oSubmenu=oItem.cfg.getProperty("submenu");
        sURL=oItem.cfg.getProperty("url");
        if(sURL){
            nHashPos=sURL.indexOf("#");
            nLen=sURL.length;
            if(nHashPos!=-1){
                sURL=sURL.substr(nHashPos,nLen);
                nLen=sURL.length;
                if(nLen>1){
                    sId=sURL.substr(1,nLen);
                    bInMenuAnchor=Dom.isAncestor(this.element,sId);
                }
                else if(nLen===1){
                    bInMenuAnchor=true;
                }
            }
        }
if(bInMenuAnchor&&!oItem.cfg.getProperty("target")){
    Event.preventDefault(oEvent);
    oItem.focus();
}
if(!oSubmenu){
    oRoot=this.getRoot();
    if(oRoot instanceof YAHOO.widget.MenuBar||oRoot.cfg.getProperty("position")=="static"){
        oRoot.clearActiveItem();
    }
    else{
        oRoot.hide();
    }
}
}
},
_onKeyDown:function(p_sType,p_aArgs){
    var oEvent=p_aArgs[0],oItem=p_aArgs[1],me=this,oSubmenu,oItemCfg,oParentItem,oRoot,oNextItem,oBody,nBodyScrollTop,nBodyOffsetHeight,aItems,nItems,nNextItemOffsetTop,nScrollTarget,oParentMenu;
    function stopMouseEventHandlers(){
        me._bStopMouseEventHandlers=true;
        window.setTimeout(function(){
            me._bStopMouseEventHandlers=false;
        },10);
    }
    if(oItem&&!oItem.cfg.getProperty("disabled")){
        oItemCfg=oItem.cfg;
        oParentItem=this.parent;
        switch(oEvent.keyCode){
            case 38:case 40:
                oNextItem=(oEvent.keyCode==38)?oItem.getPreviousEnabledSibling():oItem.getNextEnabledSibling();
                if(oNextItem){
                this.clearActiveItem();
                oNextItem.cfg.setProperty("selected",true);
                oNextItem.focus();
                if(this.cfg.getProperty("maxheight")>0){
                    oBody=this.body;
                    nBodyScrollTop=oBody.scrollTop;
                    nBodyOffsetHeight=oBody.offsetHeight;
                    aItems=this.getItems();
                    nItems=aItems.length-1;
                    nNextItemOffsetTop=oNextItem.element.offsetTop;
                    if(oEvent.keyCode==40){
                        if(nNextItemOffsetTop>=(nBodyOffsetHeight+nBodyScrollTop)){
                            oBody.scrollTop=nNextItemOffsetTop-nBodyOffsetHeight;
                        }
                        else if(nNextItemOffsetTop<=nBodyScrollTop){
                            oBody.scrollTop=0;
                        }
                        if(oNextItem==aItems[nItems]){
                            oBody.scrollTop=oNextItem.element.offsetTop;
                        }
                    }
                else{
                    if(nNextItemOffsetTop<=nBodyScrollTop){
                        oBody.scrollTop=nNextItemOffsetTop-oNextItem.element.offsetHeight;
                    }
                    else if(nNextItemOffsetTop>=(nBodyScrollTop+nBodyOffsetHeight)){
                        oBody.scrollTop=nNextItemOffsetTop;
                    }
                    if(oNextItem==aItems[0]){
                        oBody.scrollTop=0;
                    }
                }
            nBodyScrollTop=oBody.scrollTop;
            nScrollTarget=oBody.scrollHeight-oBody.offsetHeight;
            if(nBodyScrollTop===0){
                this._disableScrollHeader();
                this._enableScrollFooter();
            }
            else if(nBodyScrollTop==nScrollTarget){
                this._enableScrollHeader();
                this._disableScrollFooter();
            }
            else{
                this._enableScrollHeader();
                this._enableScrollFooter();
            }
            }
        }
Event.preventDefault(oEvent);
stopMouseEventHandlers();
break;
case 39:
    oSubmenu=oItemCfg.getProperty("submenu");
    if(oSubmenu){
    if(!oItemCfg.getProperty("selected")){
        oItemCfg.setProperty("selected",true);
    }
    oSubmenu.show();
    oSubmenu.setInitialFocus();
    oSubmenu.setInitialSelection();
}
else{
    oRoot=this.getRoot();
    if(oRoot instanceof YAHOO.widget.MenuBar){
        oNextItem=oRoot.activeItem.getNextEnabledSibling();
        if(oNextItem){
            oRoot.clearActiveItem();
            oNextItem.cfg.setProperty("selected",true);
            oSubmenu=oNextItem.cfg.getProperty("submenu");
            if(oSubmenu){
                oSubmenu.show();
            }
            oNextItem.focus();
        }
    }
}
Event.preventDefault(oEvent);
stopMouseEventHandlers();
break;
case 37:
    if(oParentItem){
    oParentMenu=oParentItem.parent;
    if(oParentMenu instanceof YAHOO.widget.MenuBar){
        oNextItem=oParentMenu.activeItem.getPreviousEnabledSibling();
        if(oNextItem){
            oParentMenu.clearActiveItem();
            oNextItem.cfg.setProperty("selected",true);
            oSubmenu=oNextItem.cfg.getProperty("submenu");
            if(oSubmenu){
                oSubmenu.show();
            }
            oNextItem.focus();
        }
    }
else{
    this.hide();
    oParentItem.focus();
}
}
Event.preventDefault(oEvent);
stopMouseEventHandlers();
break;
}
}
if(oEvent.keyCode==27){
    if(this.cfg.getProperty("position")=="dynamic"){
        this.hide();
        if(this.parent){
            this.parent.focus();
        }
    }
else if(this.activeItem){
    oSubmenu=this.activeItem.cfg.getProperty("submenu");
    if(oSubmenu&&oSubmenu.cfg.getProperty("visible")){
        oSubmenu.hide();
        this.activeItem.focus();
    }
    else{
        this.activeItem.blur();
        this.activeItem.cfg.setProperty("selected",false);
    }
}
Event.preventDefault(oEvent);
}
},
_onKeyPress:function(p_sType,p_aArgs){
    var oEvent=p_aArgs[0];
    if(oEvent.keyCode==40||oEvent.keyCode==38){
        Event.preventDefault(oEvent);
    }
},
_onYChange:function(p_sType,p_aArgs){
    var oParent=this.parent,nScrollTop,oIFrame,nY;
    if(oParent){
        nScrollTop=oParent.parent.body.scrollTop;
        if(nScrollTop>0){
            nY=(this.cfg.getProperty("y")-nScrollTop);
            Dom.setY(this.element,nY);
            oIFrame=this.iframe;
            if(oIFrame){
                Dom.setY(oIFrame,nY);
            }
            this.cfg.setProperty("y",nY,true);
        }
    }
},
_onScrollTargetMouseOver:function(p_oEvent,p_oMenu){
    this._cancelHideDelay();
    var oTarget=Event.getTarget(p_oEvent),oBody=this.body,me=this,nScrollIncrement=this.cfg.getProperty("scrollincrement"),nScrollTarget,fnScrollFunction;
    function scrollBodyDown(){
        var nScrollTop=oBody.scrollTop;
        if(nScrollTop<nScrollTarget){
            oBody.scrollTop=(nScrollTop+nScrollIncrement);
            me._enableScrollHeader();
        }
        else{
            oBody.scrollTop=nScrollTarget;
            window.clearInterval(me._nBodyScrollId);
            me._disableScrollFooter();
        }
    }
function scrollBodyUp(){
    var nScrollTop=oBody.scrollTop;
    if(nScrollTop>0){
        oBody.scrollTop=(nScrollTop-nScrollIncrement);
        me._enableScrollFooter();
    }
    else{
        oBody.scrollTop=0;
        window.clearInterval(me._nBodyScrollId);
        me._disableScrollHeader();
    }
}
if(Dom.hasClass(oTarget,"hd")){
    fnScrollFunction=scrollBodyUp;
}
else{
    nScrollTarget=oBody.scrollHeight-oBody.offsetHeight;
    fnScrollFunction=scrollBodyDown;
}
this._nBodyScrollId=window.setInterval(fnScrollFunction,10);
},
_onScrollTargetMouseOut:function(p_oEvent,p_oMenu){
    window.clearInterval(this._nBodyScrollId);
    this._cancelHideDelay();
},
_onInit:function(p_sType,p_aArgs){
    this.cfg.subscribeToConfigEvent("visible",this._onVisibleChange);
    var bRootMenu=!this.parent,bLazyLoad=this.lazyLoad;
    if(((bRootMenu&&!bLazyLoad)||(bRootMenu&&(this.cfg.getProperty("visible")||this.cfg.getProperty("position")=="static"))||(!bRootMenu&&!bLazyLoad))&&this.getItemGroups().length===0){
        if(this.srcElement){
            this._initSubTree();
        }
        if(this.itemData){
            this.addItems(this.itemData);
        }
    }
else if(bLazyLoad){
    this.cfg.fireQueue();
}
},
_onBeforeRender:function(p_sType,p_aArgs){
    var oEl=this.element,nListElements=this._aListElements.length,bFirstList=true,i=0,oUL,oGroupTitle;
    if(nListElements>0){
        do{
            oUL=this._aListElements[i];
            if(oUL){
                if(bFirstList){
                    Dom.addClass(oUL,"first-of-type");
                    bFirstList=false;
                }
                if(!Dom.isAncestor(oEl,oUL)){
                    this.appendToBody(oUL);
                }
                oGroupTitle=this._aGroupTitleElements[i];
                if(oGroupTitle){
                    if(!Dom.isAncestor(oEl,oGroupTitle)){
                        oUL.parentNode.insertBefore(oGroupTitle,oUL);
                    }
                    Dom.addClass(oUL,"hastitle");
                }
            }
        i++;
    }
    while(i<nListElements);
}
},
_onRender:function(p_sType,p_aArgs){
    if(this.cfg.getProperty("position")=="dynamic"){
        if(!this.cfg.getProperty("visible")){
            this.positionOffScreen();
        }
    }
},
_onBeforeShow:function(p_sType,p_aArgs){
    var nOptions,n,nViewportHeight,oRegion,oSrcElement;
    if(this.lazyLoad&&this.getItemGroups().length===0){
        if(this.srcElement){
            this._initSubTree();
        }
        if(this.itemData){
            if(this.parent&&this.parent.parent&&this.parent.parent.srcElement&&this.parent.parent.srcElement.tagName.toUpperCase()=="SELECT"){
                nOptions=this.itemData.length;
                for(n=0;n<nOptions;n++){
                    if(this.itemData[n].tagName){
                        this.addItem((new this.ITEM_TYPE(this.itemData[n])));
                    }
                }
                }
    else{
        this.addItems(this.itemData);
    }
}
oSrcElement=this.srcElement;
if(oSrcElement){
    if(oSrcElement.tagName.toUpperCase()=="SELECT"){
        if(Dom.inDocument(oSrcElement)){
            this.render(oSrcElement.parentNode);
        }
        else{
            this.render(this.cfg.getProperty("container"));
        }
    }
else{
    this.render();
}
}
else{
    if(this.parent){
        this.render(this.parent.element);
    }
    else{
        this.render(this.cfg.getProperty("container"));
    }
}
}
var nMaxHeight=this.cfg.getProperty("maxheight"),nMinScrollHeight=this.cfg.getProperty("minscrollheight"),bDynamicPos=this.cfg.getProperty("position")=="dynamic";
if(!this.parent&&bDynamicPos){
    this.cfg.refireEvent("xy");
}
function clearMaxHeight(){
    this.cfg.setProperty("maxheight",0);
    this.hideEvent.unsubscribe(clearMaxHeight);
}
if(!(this instanceof YAHOO.widget.MenuBar)&&bDynamicPos){
    if(nMaxHeight===0){
        nViewportHeight=Dom.getViewportHeight();
        if(this.parent&&this.parent.parent instanceof YAHOO.widget.MenuBar){
            oRegion=YAHOO.util.Region.getRegion(this.parent.element);
            nViewportHeight=(nViewportHeight-oRegion.bottom);
        }
        if(this.element.offsetHeight>=nViewportHeight){
            nMaxHeight=(nViewportHeight-(Overlay.VIEWPORT_OFFSET*2));
            if(nMaxHeight<nMinScrollHeight){
                nMaxHeight=nMinScrollHeight;
            }
            this.cfg.setProperty("maxheight",nMaxHeight);
            this.hideEvent.subscribe(clearMaxHeight);
        }
    }
}
},
_onShow:function(p_sType,p_aArgs){
    var oParent=this.parent,oParentMenu,aParentAlignment,aAlignment;
    function disableAutoSubmenuDisplay(p_oEvent){
        var oTarget;
        if(p_oEvent.type=="mousedown"||(p_oEvent.type=="keydown"&&p_oEvent.keyCode==27)){
            oTarget=Event.getTarget(p_oEvent);
            if(oTarget!=oParentMenu.element||!Dom.isAncestor(oParentMenu.element,oTarget)){
                oParentMenu.cfg.setProperty("autosubmenudisplay",false);
                Event.removeListener(document,"mousedown",disableAutoSubmenuDisplay);
                Event.removeListener(document,"keydown",disableAutoSubmenuDisplay);
            }
        }
    }
if(oParent){
    oParentMenu=oParent.parent;
    aParentAlignment=oParentMenu.cfg.getProperty("submenualignment");
    aAlignment=this.cfg.getProperty("submenualignment");
    if((aParentAlignment[0]!=aAlignment[0])&&(aParentAlignment[1]!=aAlignment[1])){
        this.cfg.setProperty("submenualignment",[aParentAlignment[0],aParentAlignment[1]]);
    }
    if(!oParentMenu.cfg.getProperty("autosubmenudisplay")&&(oParentMenu instanceof YAHOO.widget.MenuBar||oParentMenu.cfg.getProperty("position")=="static")){
        oParentMenu.cfg.setProperty("autosubmenudisplay",true);
        Event.on(document,"mousedown",disableAutoSubmenuDisplay);
        Event.on(document,"keydown",disableAutoSubmenuDisplay);
    }
}
},
_onBeforeHide:function(p_sType,p_aArgs){
    var oActiveItem=this.activeItem,oConfig,oSubmenu;
    if(oActiveItem){
        oConfig=oActiveItem.cfg;
        oConfig.setProperty("selected",false);
        oSubmenu=oConfig.getProperty("submenu");
        if(oSubmenu){
            oSubmenu.hide();
        }
    }
if(this.getRoot()==this){
    this.blur();
}
},
_onParentMenuConfigChange:function(p_sType,p_aArgs,p_oSubmenu){
    var sPropertyName=p_aArgs[0][0],oPropertyValue=p_aArgs[0][1];
    switch(sPropertyName){
        case"iframe":case"constraintoviewport":case"hidedelay":case"showdelay":case"submenuhidedelay":case"clicktohide":case"effect":case"classname":case"scrollincrement":case"minscrollheight":
            p_oSubmenu.cfg.setProperty(sPropertyName,oPropertyValue);
            break;
    }
},
_onParentMenuRender:function(p_sType,p_aArgs,p_oSubmenu){
    var oParentCfg=p_oSubmenu.parent.parent.cfg,oConfig={
        constraintoviewport:oParentCfg.getProperty("constraintoviewport"),
        xy:[0,0],
        clicktohide:oParentCfg.getProperty("clicktohide"),
        effect:oParentCfg.getProperty("effect"),
        showdelay:oParentCfg.getProperty("showdelay"),
        hidedelay:oParentCfg.getProperty("hidedelay"),
        submenuhidedelay:oParentCfg.getProperty("submenuhidedelay"),
        classname:oParentCfg.getProperty("classname"),
        scrollincrement:oParentCfg.getProperty("scrollincrement"),
        minscrollheight:oParentCfg.getProperty("minscrollheight"),
        iframe:oParentCfg.getProperty("iframe")
        },oLI;
    p_oSubmenu.cfg.applyConfig(oConfig);
    if(!this.lazyLoad){
        oLI=this.parent.element;
        if(this.element.parentNode==oLI){
            this.render();
        }
        else{
            this.render(oLI);
        }
    }
},
_onSubmenuBeforeShow:function(p_sType,p_aArgs){
    var oParent=this.parent,aAlignment=oParent.parent.cfg.getProperty("submenualignment");
    if(!this.cfg.getProperty("context")){
        this.cfg.setProperty("context",[oParent.element,aAlignment[0],aAlignment[1]]);
    }
    else{
        this.align();
    }
},
_onMenuItemFocus:function(p_sType,p_aArgs){
    this.parent.focusEvent.fire(this);
},
_onMenuItemBlur:function(p_sType,p_aArgs){
    this.parent.blurEvent.fire(this);
},
_onMenuItemDestroy:function(p_sType,p_aArgs,p_oItem){
    this._removeItemFromGroupByValue(p_oItem.groupIndex,p_oItem);
},
_onMenuItemConfigChange:function(p_sType,p_aArgs,p_oItem){
    var sPropertyName=p_aArgs[0][0],oPropertyValue=p_aArgs[0][1],oSubmenu;
    switch(sPropertyName){
        case"selected":
            if(oPropertyValue===true){
            this.activeItem=p_oItem;
        }
        break;
        case"submenu":
            oSubmenu=p_aArgs[0][1];
            if(oSubmenu){
            this._configureSubmenu(p_oItem);
        }
        break;
    }
},
enforceConstraints:function(type,args,obj){
    var oParentMenuItem=this.parent,nViewportOffset=Overlay.VIEWPORT_OFFSET,oElement=this.element,oConfig=this.cfg,pos=args[0],offsetHeight=oElement.offsetHeight,offsetWidth=oElement.offsetWidth,viewPortWidth=Dom.getViewportWidth(),viewPortHeight=Dom.getViewportHeight(),nPadding=(oParentMenuItem&&oParentMenuItem.parent instanceof YAHOO.widget.MenuBar)?0:nViewportOffset,aContext=oConfig.getProperty("context"),oContextElement=aContext?aContext[0]:null,topConstraint,leftConstraint,bottomConstraint,rightConstraint,scrollX,scrollY,x,y;
    if(offsetWidth<viewPortWidth){
        x=pos[0];
        scrollX=Dom.getDocumentScrollLeft();
        leftConstraint=scrollX+nPadding;
        rightConstraint=scrollX+viewPortWidth-offsetWidth-nPadding;
        if(x<nViewportOffset){
            x=leftConstraint;
        }else if((x+offsetWidth)>viewPortWidth){
            if(oContextElement&&((x-oContextElement.offsetWidth)>offsetWidth)){
                if(oParentMenuItem&&oParentMenuItem.parent instanceof YAHOO.widget.MenuBar){
                    x=(x-(offsetWidth-oContextElement.offsetWidth));
                }
                else{
                    x=(x-(oContextElement.offsetWidth+offsetWidth));
                }
            }
        else{
            x=rightConstraint;
        }
    }
}
if(offsetHeight<viewPortHeight){
    y=pos[1];
    scrollY=Dom.getDocumentScrollTop();
    topConstraint=scrollY+nPadding;
    bottomConstraint=scrollY+viewPortHeight-offsetHeight-nPadding;
    if(y<nViewportOffset){
        y=topConstraint;
    }else if(y>bottomConstraint){
        if(oContextElement&&(y>offsetHeight)){
            y=((y+oContextElement.offsetHeight)-offsetHeight);
        }
        else{
            y=bottomConstraint;
        }
    }
}
oConfig.setProperty("x",x,true);
oConfig.setProperty("y",y,true);
oConfig.setProperty("xy",[x,y],true);
},
configVisible:function(p_sType,p_aArgs,p_oMenu){
    var bVisible,sDisplay;
    if(this.cfg.getProperty("position")=="dynamic"){
        Menu.superclass.configVisible.call(this,p_sType,p_aArgs,p_oMenu);
    }
    else{
        bVisible=p_aArgs[0];
        sDisplay=Dom.getStyle(this.element,"display");
        Dom.setStyle(this.element,"visibility","visible");
        if(bVisible){
            if(sDisplay!="block"){
                this.beforeShowEvent.fire();
                Dom.setStyle(this.element,"display","block");
                this.showEvent.fire();
            }
        }
    else{
        if(sDisplay=="block"){
            this.beforeHideEvent.fire();
            Dom.setStyle(this.element,"display","none");
            this.hideEvent.fire();
        }
    }
}
},
configPosition:function(p_sType,p_aArgs,p_oMenu){
    var oElement=this.element,sCSSPosition=p_aArgs[0]=="static"?"static":"absolute",oCfg=this.cfg,nZIndex;
    Dom.setStyle(oElement,"position",sCSSPosition);
    if(sCSSPosition=="static"){
        Dom.setStyle(oElement,"display","block");
        oCfg.setProperty("visible",true);
    }
    else{
        Dom.setStyle(oElement,"visibility","hidden");
    }
    if(sCSSPosition=="absolute"){
        nZIndex=oCfg.getProperty("zindex");
        if(!nZIndex||nZIndex===0){
            nZIndex=this.parent?(this.parent.parent.cfg.getProperty("zindex")+1):1;
            oCfg.setProperty("zindex",nZIndex);
        }
    }
},
configIframe:function(p_sType,p_aArgs,p_oMenu){
    if(this.cfg.getProperty("position")=="dynamic"){
        Menu.superclass.configIframe.call(this,p_sType,p_aArgs,p_oMenu);
    }
},
configHideDelay:function(p_sType,p_aArgs,p_oMenu){
    var nHideDelay=p_aArgs[0],oMouseOutEvent=this.mouseOutEvent,oMouseOverEvent=this.mouseOverEvent,oKeyDownEvent=this.keyDownEvent;
    if(nHideDelay>0){
        if(!this._bHideDelayEventHandlersAssigned){
            oMouseOutEvent.subscribe(this._execHideDelay);
            oMouseOverEvent.subscribe(this._cancelHideDelay);
            oKeyDownEvent.subscribe(this._cancelHideDelay);
            this._bHideDelayEventHandlersAssigned=true;
        }
    }
else{
    oMouseOutEvent.unsubscribe(this._execHideDelay);
    oMouseOverEvent.unsubscribe(this._cancelHideDelay);
    oKeyDownEvent.unsubscribe(this._cancelHideDelay);
    this._bHideDelayEventHandlersAssigned=false;
}
},
configContainer:function(p_sType,p_aArgs,p_oMenu){
    var oElement=p_aArgs[0];
    if(typeof oElement=='string'){
        this.cfg.setProperty("container",document.getElementById(oElement),true);
    }
},
_setMaxHeight:function(p_sType,p_aArgs,p_nMaxHeight){
    this.cfg.setProperty("maxheight",p_nMaxHeight);
    this.renderEvent.unsubscribe(this._setMaxHeight);
},
configMaxHeight:function(p_sType,p_aArgs,p_oMenu){
    var nMaxHeight=p_aArgs[0],oElement=this.element,oBody=this.body,oHeader=this.header,oFooter=this.footer,fnMouseOver=this._onScrollTargetMouseOver,fnMouseOut=this._onScrollTargetMouseOut,nMinScrollHeight=this.cfg.getProperty("minscrollheight"),nHeight,nOffsetWidth;
    if(nMaxHeight!==0&&nMaxHeight<nMinScrollHeight){
        nMaxHeight=nMinScrollHeight;
    }
    if(this.lazyLoad&&!oBody){
        this.renderEvent.unsubscribe(this._setMaxHeight);
        if(nMaxHeight>0){
            this.renderEvent.subscribe(this._setMaxHeight,nMaxHeight,this);
        }
        return;
    }
    Dom.setStyle(oBody,"height","");
    Dom.removeClass(oBody,"yui-menu-body-scrolled");
    if(UA.gecko&&this.parent&&this.parent.parent&&this.parent.parent.cfg.getProperty("position")=="dynamic"&&!this.cfg.getProperty("width")){
        nOffsetWidth=oElement.offsetWidth;
        oElement.style.width=nOffsetWidth+"px";
        oElement.style.width=(nOffsetWidth-(oElement.offsetWidth-nOffsetWidth))+"px";
    }
    if(!oHeader&&!oFooter){
        this.setHeader("&#32;");
        this.setFooter("&#32;");
        oHeader=this.header;
        oFooter=this.footer;
        Dom.addClass(oHeader,"topscrollbar");
        Dom.addClass(oFooter,"bottomscrollbar");
        oElement.insertBefore(oHeader,oBody);
        oElement.appendChild(oFooter);
    }
    nHeight=(nMaxHeight-(oHeader.offsetHeight+oHeader.offsetHeight));
    if(nHeight>0&&(oBody.offsetHeight>nMaxHeight)){
        Dom.addClass(oBody,"yui-menu-body-scrolled");
        Dom.setStyle(oBody,"height",(nHeight+"px"));
        Event.on(oHeader,"mouseover",fnMouseOver,this,true);
        Event.on(oHeader,"mouseout",fnMouseOut,this,true);
        Event.on(oFooter,"mouseover",fnMouseOver,this,true);
        Event.on(oFooter,"mouseout",fnMouseOut,this,true);
        this._disableScrollHeader();
        this._enableScrollFooter();
    }
    else if(oHeader&&oFooter){
        this._enableScrollHeader();
        this._enableScrollFooter();
        Event.removeListener(oHeader,"mouseover",fnMouseOver);
        Event.removeListener(oHeader,"mouseout",fnMouseOut);
        Event.removeListener(oFooter,"mouseover",fnMouseOver);
        Event.removeListener(oFooter,"mouseout",fnMouseOut);
        oElement.removeChild(oHeader);
        oElement.removeChild(oFooter);
        this.header=null;
        this.footer=null;
    }
    this.cfg.refireEvent("iframe");
},
configClassName:function(p_sType,p_aArgs,p_oMenu){
    var sClassName=p_aArgs[0];
    if(this._sClassName){
        Dom.removeClass(this.element,this._sClassName);
    }
    Dom.addClass(this.element,sClassName);
    this._sClassName=sClassName;
},
_onItemAdded:function(p_sType,p_aArgs){
    var oItem=p_aArgs[0];
    if(oItem){
        oItem.cfg.setProperty("disabled",true);
    }
},
configDisabled:function(p_sType,p_aArgs,p_oMenu){
    var bDisabled=p_aArgs[0],aItems=this.getItems(),nItems,i;
    if(Lang.isArray(aItems)){
        nItems=aItems.length;
        if(nItems>0){
            i=nItems-1;
            do{
                aItems[i].cfg.setProperty("disabled",bDisabled);
            }
            while(i--);
        }
        if(bDisabled){
            this.clearActiveItem(true);
            Dom.addClass(this.element,"disabled");
            this.itemAddedEvent.subscribe(this._onItemAdded);
        }
        else{
            Dom.removeClass(this.element,"disabled");
            this.itemAddedEvent.unsubscribe(this._onItemAdded);
        }
    }
},
onRender:function(p_sType,p_aArgs){
    function sizeShadow(){
        var oElement=this.element,oShadow=this._shadow;
        if(oShadow&&oElement){
            oShadow.style.width=(oElement.offsetWidth+6)+"px";
            oShadow.style.height=(oElement.offsetHeight+1)+"px";
        }
    }
function replaceShadow(){
    this.element.appendChild(this._shadow);
}
function addShadowVisibleClass(){
    Dom.addClass(this._shadow,"yui-menu-shadow-visible");
}
function removeShadowVisibleClass(){
    Dom.removeClass(this._shadow,"yui-menu-shadow-visible");
}
function createShadow(){
    var oShadow=this._shadow,oElement,me;
    if(!oShadow){
        oElement=this.element;
        me=this;
        if(!m_oShadowTemplate){
            m_oShadowTemplate=document.createElement("div");
            m_oShadowTemplate.className="yui-menu-shadow yui-menu-shadow-visible";
        }
        oShadow=m_oShadowTemplate.cloneNode(false);
        oElement.appendChild(oShadow);
        this._shadow=oShadow;
        this.beforeShowEvent.subscribe(addShadowVisibleClass);
        this.beforeHideEvent.subscribe(removeShadowVisibleClass);
        if(UA.ie){
            window.setTimeout(function(){
                sizeShadow.call(me);
                me.syncIframe();
            },0);
            this.cfg.subscribeToConfigEvent("width",sizeShadow);
            this.cfg.subscribeToConfigEvent("height",sizeShadow);
            this.cfg.subscribeToConfigEvent("maxheight",sizeShadow);
            this.changeContentEvent.subscribe(sizeShadow);
            Module.textResizeEvent.subscribe(sizeShadow,me,true);
            this.destroyEvent.subscribe(function(){
                Module.textResizeEvent.unsubscribe(sizeShadow,me);
            });
        }
        this.cfg.subscribeToConfigEvent("maxheight",replaceShadow);
    }
}
function onBeforeShow(){
    createShadow.call(this);
    this.beforeShowEvent.unsubscribe(onBeforeShow);
}
if(this.cfg.getProperty("position")=="dynamic"){
    if(this.cfg.getProperty("visible")){
        createShadow.call(this);
    }
    else{
        this.beforeShowEvent.subscribe(onBeforeShow);
    }
}
},
initEvents:function(){
    Menu.superclass.initEvents.call(this);
    var SIGNATURE=CustomEvent.LIST;
    this.mouseOverEvent=this.createEvent(EVENT_TYPES.MOUSE_OVER);
    this.mouseOverEvent.signature=SIGNATURE;
    this.mouseOutEvent=this.createEvent(EVENT_TYPES.MOUSE_OUT);
    this.mouseOutEvent.signature=SIGNATURE;
    this.mouseDownEvent=this.createEvent(EVENT_TYPES.MOUSE_DOWN);
    this.mouseDownEvent.signature=SIGNATURE;
    this.mouseUpEvent=this.createEvent(EVENT_TYPES.MOUSE_UP);
    this.mouseUpEvent.signature=SIGNATURE;
    this.clickEvent=this.createEvent(EVENT_TYPES.CLICK);
    this.clickEvent.signature=SIGNATURE;
    this.keyPressEvent=this.createEvent(EVENT_TYPES.KEY_PRESS);
    this.keyPressEvent.signature=SIGNATURE;
    this.keyDownEvent=this.createEvent(EVENT_TYPES.KEY_DOWN);
    this.keyDownEvent.signature=SIGNATURE;
    this.keyUpEvent=this.createEvent(EVENT_TYPES.KEY_UP);
    this.keyUpEvent.signature=SIGNATURE;
    this.focusEvent=this.createEvent(EVENT_TYPES.FOCUS);
    this.focusEvent.signature=SIGNATURE;
    this.blurEvent=this.createEvent(EVENT_TYPES.BLUR);
    this.blurEvent.signature=SIGNATURE;
    this.itemAddedEvent=this.createEvent(EVENT_TYPES.ITEM_ADDED);
    this.itemAddedEvent.signature=SIGNATURE;
    this.itemRemovedEvent=this.createEvent(EVENT_TYPES.ITEM_REMOVED);
    this.itemRemovedEvent.signature=SIGNATURE;
},
positionOffScreen:function(){
    var oIFrame=this.iframe,aPos=this.OFF_SCREEN_POSITION;
    Dom.setXY(this.element,aPos);
    if(oIFrame){
        Dom.setXY(oIFrame,aPos);
    }
},
getRoot:function(){
    var oItem=this.parent,oParentMenu;
    if(oItem){
        oParentMenu=oItem.parent;
        return oParentMenu?oParentMenu.getRoot():this;
    }
    else{
        return this;
    }
},
toString:function(){
    var sReturnVal="Menu",sId=this.id;
    if(sId){
        sReturnVal+=(" "+sId);
    }
    return sReturnVal;
},
setItemGroupTitle:function(p_sGroupTitle,p_nGroupIndex){
    var nGroupIndex,oTitle,i,nFirstIndex;
    if(typeof p_sGroupTitle=="string"&&p_sGroupTitle.length>0){
        nGroupIndex=typeof p_nGroupIndex=="number"?p_nGroupIndex:0;
        oTitle=this._aGroupTitleElements[nGroupIndex];
        if(oTitle){
            oTitle.innerHTML=p_sGroupTitle;
        }
        else{
            oTitle=document.createElement(this.GROUP_TITLE_TAG_NAME);
            oTitle.innerHTML=p_sGroupTitle;
            this._aGroupTitleElements[nGroupIndex]=oTitle;
        }
        i=this._aGroupTitleElements.length-1;
        do{
            if(this._aGroupTitleElements[i]){
                Dom.removeClass(this._aGroupTitleElements[i],"first-of-type");
                nFirstIndex=i;
            }
        }
    while(i--);
    if(nFirstIndex!==null){
        Dom.addClass(this._aGroupTitleElements[nFirstIndex],"first-of-type");
    }
    this.changeContentEvent.fire();
}
},
addItem:function(p_oItem,p_nGroupIndex){
    if(p_oItem){
        return this._addItemToGroup(p_nGroupIndex,p_oItem);
    }
},
addItems:function(p_aItems,p_nGroupIndex){
    var nItems,aItems,oItem,i;
    if(Lang.isArray(p_aItems)){
        nItems=p_aItems.length;
        aItems=[];
        for(i=0;i<nItems;i++){
            oItem=p_aItems[i];
            if(oItem){
                if(Lang.isArray(oItem)){
                    aItems[aItems.length]=this.addItems(oItem,i);
                }
                else{
                    aItems[aItems.length]=this._addItemToGroup(p_nGroupIndex,oItem);
                }
            }
        }
if(aItems.length){
    return aItems;
}
}
},
insertItem:function(p_oItem,p_nItemIndex,p_nGroupIndex){
    if(p_oItem){
        return this._addItemToGroup(p_nGroupIndex,p_oItem,p_nItemIndex);
    }
},
removeItem:function(p_oObject,p_nGroupIndex){
    var oItem;
    if(typeof p_oObject!="undefined"){
        if(p_oObject instanceof YAHOO.widget.MenuItem){
            oItem=this._removeItemFromGroupByValue(p_nGroupIndex,p_oObject);
        }
        else if(typeof p_oObject=="number"){
            oItem=this._removeItemFromGroupByIndex(p_nGroupIndex,p_oObject);
        }
        if(oItem){
            oItem.destroy();
            return oItem;
        }
    }
},
getItems:function(){
    var aGroups=this._aItemGroups,nGroups,aItems=[];
    if(Lang.isArray(aGroups)){
        nGroups=aGroups.length;
        return((nGroups==1)?aGroups[0]:(Array.prototype.concat.apply(aItems,aGroups)));
    }
},
getItemGroups:function(){
    return this._aItemGroups;
},
getItem:function(p_nItemIndex,p_nGroupIndex){
    var aGroup;
    if(typeof p_nItemIndex=="number"){
        aGroup=this._getItemGroup(p_nGroupIndex);
        if(aGroup){
            return aGroup[p_nItemIndex];
        }
    }
},
getSubmenus:function(){
    var aItems=this.getItems(),nItems=aItems.length,aSubmenus,oSubmenu,oItem,i;
    if(nItems>0){
        aSubmenus=[];
        for(i=0;i<nItems;i++){
            oItem=aItems[i];
            if(oItem){
                oSubmenu=oItem.cfg.getProperty("submenu");
                if(oSubmenu){
                    aSubmenus[aSubmenus.length]=oSubmenu;
                }
            }
        }
    }
return aSubmenus;
},
clearContent:function(){
    var aItems=this.getItems(),nItems=aItems.length,oElement=this.element,oBody=this.body,oHeader=this.header,oFooter=this.footer,oItem,oSubmenu,i;
    if(nItems>0){
        i=nItems-1;
        do{
            oItem=aItems[i];
            if(oItem){
                oSubmenu=oItem.cfg.getProperty("submenu");
                if(oSubmenu){
                    this.cfg.configChangedEvent.unsubscribe(this._onParentMenuConfigChange,oSubmenu);
                    this.renderEvent.unsubscribe(this._onParentMenuRender,oSubmenu);
                }
                this.removeItem(oItem);
            }
        }
    while(i--);
}
if(oHeader){
    Event.purgeElement(oHeader);
    oElement.removeChild(oHeader);
}
if(oFooter){
    Event.purgeElement(oFooter);
    oElement.removeChild(oFooter);
}
if(oBody){
    Event.purgeElement(oBody);
    oBody.innerHTML="";
}
this.activeItem=null;
this._aItemGroups=[];
this._aListElements=[];
this._aGroupTitleElements=[];
this.cfg.setProperty("width",null);
},
destroy:function(){
    this.clearContent();
    this._aItemGroups=null;
    this._aListElements=null;
    this._aGroupTitleElements=null;
    Menu.superclass.destroy.call(this);
},
setInitialFocus:function(){
    var oItem=this._getFirstEnabledItem();
    if(oItem){
        oItem.focus();
    }
},
setInitialSelection:function(){
    var oItem=this._getFirstEnabledItem();
    if(oItem){
        oItem.cfg.setProperty("selected",true);
    }
},
clearActiveItem:function(p_bBlur){
    if(this.cfg.getProperty("showdelay")>0){
        this._cancelShowDelay();
    }
    var oActiveItem=this.activeItem,oConfig,oSubmenu;
    if(oActiveItem){
        oConfig=oActiveItem.cfg;
        if(p_bBlur){
            oActiveItem.blur();
        }
        oConfig.setProperty("selected",false);
        oSubmenu=oConfig.getProperty("submenu");
        if(oSubmenu){
            oSubmenu.hide();
        }
        this.activeItem=null;
    }
},
focus:function(){
    if(!this.hasFocus()){
        this.setInitialFocus();
    }
},
blur:function(){
    var oItem;
    if(this.hasFocus()){
        oItem=MenuManager.getFocusedMenuItem();
        if(oItem){
            oItem.blur();
        }
    }
},
hasFocus:function(){
    return(MenuManager.getFocusedMenu()==this.getRoot());
},
subscribe:function(){
    function onItemAdded(p_sType,p_aArgs,p_oObject){
        var oItem=p_aArgs[0],oSubmenu=oItem.cfg.getProperty("submenu");
        if(oSubmenu){
            oSubmenu.subscribe.apply(oSubmenu,p_oObject);
        }
    }
function onSubmenuAdded(p_sType,p_aArgs,p_oObject){
    var oSubmenu=this.cfg.getProperty("submenu");
    if(oSubmenu){
        oSubmenu.subscribe.apply(oSubmenu,p_oObject);
    }
}
Menu.superclass.subscribe.apply(this,arguments);
Menu.superclass.subscribe.call(this,"itemAdded",onItemAdded,arguments);
var aItems=this.getItems(),nItems,oItem,oSubmenu,i;
if(aItems){
    nItems=aItems.length;
    if(nItems>0){
        i=nItems-1;
        do{
            oItem=aItems[i];
            oSubmenu=oItem.cfg.getProperty("submenu");
            if(oSubmenu){
                oSubmenu.subscribe.apply(oSubmenu,arguments);
            }
            else{
                oItem.cfg.subscribeToConfigEvent("submenu",onSubmenuAdded,arguments);
            }
        }
    while(i--);
}
}
},
initDefaultConfig:function(){
    Menu.superclass.initDefaultConfig.call(this);
    var oConfig=this.cfg;
    oConfig.addProperty(DEFAULT_CONFIG.VISIBLE.key,{
        handler:this.configVisible,
        value:DEFAULT_CONFIG.VISIBLE.value,
        validator:DEFAULT_CONFIG.VISIBLE.validator
        });
    oConfig.addProperty(DEFAULT_CONFIG.CONSTRAIN_TO_VIEWPORT.key,{
        handler:this.configConstrainToViewport,
        value:DEFAULT_CONFIG.CONSTRAIN_TO_VIEWPORT.value,
        validator:DEFAULT_CONFIG.CONSTRAIN_TO_VIEWPORT.validator,
        supercedes:DEFAULT_CONFIG.CONSTRAIN_TO_VIEWPORT.supercedes
        });
    oConfig.addProperty(DEFAULT_CONFIG.POSITION.key,{
        handler:this.configPosition,
        value:DEFAULT_CONFIG.POSITION.value,
        validator:DEFAULT_CONFIG.POSITION.validator,
        supercedes:DEFAULT_CONFIG.POSITION.supercedes
        });
    oConfig.addProperty(DEFAULT_CONFIG.SUBMENU_ALIGNMENT.key,{
        value:DEFAULT_CONFIG.SUBMENU_ALIGNMENT.value,
        suppressEvent:DEFAULT_CONFIG.SUBMENU_ALIGNMENT.suppressEvent
        });
    oConfig.addProperty(DEFAULT_CONFIG.AUTO_SUBMENU_DISPLAY.key,{
        value:DEFAULT_CONFIG.AUTO_SUBMENU_DISPLAY.value,
        validator:DEFAULT_CONFIG.AUTO_SUBMENU_DISPLAY.validator,
        suppressEvent:DEFAULT_CONFIG.AUTO_SUBMENU_DISPLAY.suppressEvent
        });
    oConfig.addProperty(DEFAULT_CONFIG.SHOW_DELAY.key,{
        value:DEFAULT_CONFIG.SHOW_DELAY.value,
        validator:DEFAULT_CONFIG.SHOW_DELAY.validator,
        suppressEvent:DEFAULT_CONFIG.SHOW_DELAY.suppressEvent
        });
    oConfig.addProperty(DEFAULT_CONFIG.HIDE_DELAY.key,{
        handler:this.configHideDelay,
        value:DEFAULT_CONFIG.HIDE_DELAY.value,
        validator:DEFAULT_CONFIG.HIDE_DELAY.validator,
        suppressEvent:DEFAULT_CONFIG.HIDE_DELAY.suppressEvent
        });
    oConfig.addProperty(DEFAULT_CONFIG.SUBMENU_HIDE_DELAY.key,{
        value:DEFAULT_CONFIG.SUBMENU_HIDE_DELAY.value,
        validator:DEFAULT_CONFIG.SUBMENU_HIDE_DELAY.validator,
        suppressEvent:DEFAULT_CONFIG.SUBMENU_HIDE_DELAY.suppressEvent
        });
    oConfig.addProperty(DEFAULT_CONFIG.CLICK_TO_HIDE.key,{
        value:DEFAULT_CONFIG.CLICK_TO_HIDE.value,
        validator:DEFAULT_CONFIG.CLICK_TO_HIDE.validator,
        suppressEvent:DEFAULT_CONFIG.CLICK_TO_HIDE.suppressEvent
        });
    oConfig.addProperty(DEFAULT_CONFIG.CONTAINER.key,{
        handler:this.configContainer,
        value:document.body,
        suppressEvent:DEFAULT_CONFIG.CONTAINER.suppressEvent
        });
    oConfig.addProperty(DEFAULT_CONFIG.SCROLL_INCREMENT.key,{
        value:DEFAULT_CONFIG.SCROLL_INCREMENT.value,
        validator:DEFAULT_CONFIG.SCROLL_INCREMENT.validator,
        supercedes:DEFAULT_CONFIG.SCROLL_INCREMENT.supercedes,
        suppressEvent:DEFAULT_CONFIG.SCROLL_INCREMENT.suppressEvent
        });
    oConfig.addProperty(DEFAULT_CONFIG.MIN_SCROLL_HEIGHT.key,{
        value:DEFAULT_CONFIG.MIN_SCROLL_HEIGHT.value,
        validator:DEFAULT_CONFIG.MIN_SCROLL_HEIGHT.validator,
        supercedes:DEFAULT_CONFIG.MIN_SCROLL_HEIGHT.supercedes,
        suppressEvent:DEFAULT_CONFIG.MIN_SCROLL_HEIGHT.suppressEvent
        });
    oConfig.addProperty(DEFAULT_CONFIG.MAX_HEIGHT.key,{
        handler:this.configMaxHeight,
        value:DEFAULT_CONFIG.MAX_HEIGHT.value,
        validator:DEFAULT_CONFIG.MAX_HEIGHT.validator,
        suppressEvent:DEFAULT_CONFIG.MAX_HEIGHT.suppressEvent,
        supercedes:DEFAULT_CONFIG.MAX_HEIGHT.supercedes
        });
    oConfig.addProperty(DEFAULT_CONFIG.CLASS_NAME.key,{
        handler:this.configClassName,
        value:DEFAULT_CONFIG.CLASS_NAME.value,
        validator:DEFAULT_CONFIG.CLASS_NAME.validator,
        supercedes:DEFAULT_CONFIG.CLASS_NAME.supercedes
        });
    oConfig.addProperty(DEFAULT_CONFIG.DISABLED.key,{
        handler:this.configDisabled,
        value:DEFAULT_CONFIG.DISABLED.value,
        validator:DEFAULT_CONFIG.DISABLED.validator,
        suppressEvent:DEFAULT_CONFIG.DISABLED.suppressEvent
        });
}
});
})();
(function(){
    YAHOO.widget.MenuItem=function(p_oObject,p_oConfig){
        if(p_oObject){
            if(p_oConfig){
                this.parent=p_oConfig.parent;
                this.value=p_oConfig.value;
                this.id=p_oConfig.id;
            }
            this.init(p_oObject,p_oConfig);
        }
    };

var Dom=YAHOO.util.Dom,Module=YAHOO.widget.Module,Menu=YAHOO.widget.Menu,MenuItem=YAHOO.widget.MenuItem,CustomEvent=YAHOO.util.CustomEvent,Lang=YAHOO.lang,m_oMenuItemTemplate,EVENT_TYPES={
    "MOUSE_OVER":"mouseover",
    "MOUSE_OUT":"mouseout",
    "MOUSE_DOWN":"mousedown",
    "MOUSE_UP":"mouseup",
    "CLICK":"click",
    "KEY_PRESS":"keypress",
    "KEY_DOWN":"keydown",
    "KEY_UP":"keyup",
    "ITEM_ADDED":"itemAdded",
    "ITEM_REMOVED":"itemRemoved",
    "FOCUS":"focus",
    "BLUR":"blur",
    "DESTROY":"destroy"
},DEFAULT_CONFIG={
    "TEXT":{
        key:"text",
        value:"",
        validator:Lang.isString,
        suppressEvent:true
    },
    "HELP_TEXT":{
        key:"helptext",
        supercedes:["text"],
        suppressEvent:true
    },
    "URL":{
        key:"url",
        value:"#",
        suppressEvent:true
    },
    "TARGET":{
        key:"target",
        suppressEvent:true
    },
    "EMPHASIS":{
        key:"emphasis",
        value:false,
        validator:Lang.isBoolean,
        suppressEvent:true,
        supercedes:["text"]
        },
    "STRONG_EMPHASIS":{
        key:"strongemphasis",
        value:false,
        validator:Lang.isBoolean,
        suppressEvent:true,
        supercedes:["text"]
        },
    "CHECKED":{
        key:"checked",
        value:false,
        validator:Lang.isBoolean,
        suppressEvent:true,
        supercedes:["disabled","selected"]
        },
    "SUBMENU":{
        key:"submenu",
        suppressEvent:true,
        supercedes:["disabled","selected"]
        },
    "DISABLED":{
        key:"disabled",
        value:false,
        validator:Lang.isBoolean,
        suppressEvent:true,
        supercedes:["text","selected"]
        },
    "SELECTED":{
        key:"selected",
        value:false,
        validator:Lang.isBoolean,
        suppressEvent:true
    },
    "ONCLICK":{
        key:"onclick",
        suppressEvent:true
    },
    "CLASS_NAME":{
        key:"classname",
        value:null,
        validator:Lang.isString,
        suppressEvent:true
    }
};

MenuItem.prototype={
    CSS_CLASS_NAME:"yuimenuitem",
    CSS_LABEL_CLASS_NAME:"yuimenuitemlabel",
    SUBMENU_TYPE:null,
    _oAnchor:null,
    _oHelpTextEM:null,
    _oSubmenu:null,
    _oOnclickAttributeValue:null,
    _sClassName:null,
    constructor:MenuItem,
    index:null,
    groupIndex:null,
    parent:null,
    element:null,
    srcElement:null,
    value:null,
    browser:Module.prototype.browser,
    id:null,
    destroyEvent:null,
    mouseOverEvent:null,
    mouseOutEvent:null,
    mouseDownEvent:null,
    mouseUpEvent:null,
    clickEvent:null,
    keyPressEvent:null,
    keyDownEvent:null,
    keyUpEvent:null,
    focusEvent:null,
    blurEvent:null,
    init:function(p_oObject,p_oConfig){
        if(!this.SUBMENU_TYPE){
            this.SUBMENU_TYPE=Menu;
        }
        this.cfg=new YAHOO.util.Config(this);
        this.initDefaultConfig();
        var SIGNATURE=CustomEvent.LIST,oConfig=this.cfg,sURL="#",oAnchor,sTarget,sText,sId;
        if(Lang.isString(p_oObject)){
            this._createRootNodeStructure();
            oConfig.queueProperty("text",p_oObject);
        }
        else if(p_oObject&&p_oObject.tagName){
            switch(p_oObject.tagName.toUpperCase()){
                case"OPTION":
                    this._createRootNodeStructure();
                    oConfig.queueProperty("text",p_oObject.text);
                    oConfig.queueProperty("disabled",p_oObject.disabled);
                    this.value=p_oObject.value;
                    this.srcElement=p_oObject;
                    break;
                case"OPTGROUP":
                    this._createRootNodeStructure();
                    oConfig.queueProperty("text",p_oObject.label);
                    oConfig.queueProperty("disabled",p_oObject.disabled);
                    this.srcElement=p_oObject;
                    this._initSubTree();
                    break;
                case"LI":
                    oAnchor=Dom.getFirstChild(p_oObject);
                    if(oAnchor){
                    sURL=oAnchor.getAttribute("href");
                    sTarget=oAnchor.getAttribute("target");
                    sText=oAnchor.innerHTML;
                }
                this.srcElement=p_oObject;
                this.element=p_oObject;
                this._oAnchor=oAnchor;
                oConfig.setProperty("text",sText,true);
                    oConfig.setProperty("url",sURL,true);
                    oConfig.setProperty("target",sTarget,true);
                    this._initSubTree();
                    break;
            }
        }
    if(this.element){
        sId=(this.srcElement||this.element).id;
        if(!sId){
            sId=this.id||Dom.generateId();
            this.element.id=sId;
        }
        this.id=sId;
        Dom.addClass(this.element,this.CSS_CLASS_NAME);
        Dom.addClass(this._oAnchor,this.CSS_LABEL_CLASS_NAME);
        this.mouseOverEvent=this.createEvent(EVENT_TYPES.MOUSE_OVER);
        this.mouseOverEvent.signature=SIGNATURE;
        this.mouseOutEvent=this.createEvent(EVENT_TYPES.MOUSE_OUT);
        this.mouseOutEvent.signature=SIGNATURE;
        this.mouseDownEvent=this.createEvent(EVENT_TYPES.MOUSE_DOWN);
        this.mouseDownEvent.signature=SIGNATURE;
        this.mouseUpEvent=this.createEvent(EVENT_TYPES.MOUSE_UP);
        this.mouseUpEvent.signature=SIGNATURE;
        this.clickEvent=this.createEvent(EVENT_TYPES.CLICK);
        this.clickEvent.signature=SIGNATURE;
        this.keyPressEvent=this.createEvent(EVENT_TYPES.KEY_PRESS);
        this.keyPressEvent.signature=SIGNATURE;
        this.keyDownEvent=this.createEvent(EVENT_TYPES.KEY_DOWN);
        this.keyDownEvent.signature=SIGNATURE;
        this.keyUpEvent=this.createEvent(EVENT_TYPES.KEY_UP);
        this.keyUpEvent.signature=SIGNATURE;
        this.focusEvent=this.createEvent(EVENT_TYPES.FOCUS);
        this.focusEvent.signature=SIGNATURE;
        this.blurEvent=this.createEvent(EVENT_TYPES.BLUR);
        this.blurEvent.signature=SIGNATURE;
        this.destroyEvent=this.createEvent(EVENT_TYPES.DESTROY);
        this.destroyEvent.signature=SIGNATURE;
        if(p_oConfig){
            oConfig.applyConfig(p_oConfig);
        }
        oConfig.fireQueue();
    }
},
_createRootNodeStructure:function(){
    var oElement,oAnchor;
    if(!m_oMenuItemTemplate){
        m_oMenuItemTemplate=document.createElement("li");
        m_oMenuItemTemplate.innerHTML="<a href=\"#\"></a>";
    }
    oElement=m_oMenuItemTemplate.cloneNode(true);
    oElement.className=this.CSS_CLASS_NAME;
    oAnchor=oElement.firstChild;
    oAnchor.className=this.CSS_LABEL_CLASS_NAME;
    this.element=oElement;
    this._oAnchor=oAnchor;
},
_initSubTree:function(){
    var oSrcEl=this.srcElement,oConfig=this.cfg,oNode,aOptions,nOptions,oMenu,n;
    if(oSrcEl.childNodes.length>0){
        if(this.parent.lazyLoad&&this.parent.srcElement&&this.parent.srcElement.tagName.toUpperCase()=="SELECT"){
            oConfig.setProperty("submenu",{
                id:Dom.generateId(),
                itemdata:oSrcEl.childNodes
                });
        }
        else{
            oNode=oSrcEl.firstChild;
            aOptions=[];
            do{
                if(oNode&&oNode.tagName){
                    switch(oNode.tagName.toUpperCase()){
                        case"DIV":
                            oConfig.setProperty("submenu",oNode);
                            break;
                        case"OPTION":
                            aOptions[aOptions.length]=oNode;
                            break;
                    }
                }
            }
    while((oNode=oNode.nextSibling));
    nOptions=aOptions.length;
    if(nOptions>0){
        oMenu=new this.SUBMENU_TYPE(Dom.generateId());
        oConfig.setProperty("submenu",oMenu);
        for(n=0;n<nOptions;n++){
            oMenu.addItem((new oMenu.ITEM_TYPE(aOptions[n])));
        }
        }
    }
}
},
configText:function(p_sType,p_aArgs,p_oItem){
    var sText=p_aArgs[0],oConfig=this.cfg,oAnchor=this._oAnchor,sHelpText=oConfig.getProperty("helptext"),sHelpTextHTML="",sEmphasisStartTag="",sEmphasisEndTag="";
    if(sText){
        if(sHelpText){
            sHelpTextHTML="<em class=\"helptext\">"+sHelpText+"</em>";
        }
        if(oConfig.getProperty("emphasis")){
            sEmphasisStartTag="<em>";
            sEmphasisEndTag="</em>";
        }
        if(oConfig.getProperty("strongemphasis")){
            sEmphasisStartTag="<strong>";
            sEmphasisEndTag="</strong>";
        }
        oAnchor.innerHTML=(sEmphasisStartTag+sText+
            sEmphasisEndTag+sHelpTextHTML);
    }
},
configHelpText:function(p_sType,p_aArgs,p_oItem){
    this.cfg.refireEvent("text");
},
configURL:function(p_sType,p_aArgs,p_oItem){
    var sURL=p_aArgs[0];
    if(!sURL){
        sURL="#";
    }
    var oAnchor=this._oAnchor;
    if(YAHOO.env.ua.opera){
        oAnchor.removeAttribute("href");
    }
    oAnchor.setAttribute("href",sURL);
},
configTarget:function(p_sType,p_aArgs,p_oItem){
    var sTarget=p_aArgs[0],oAnchor=this._oAnchor;
    if(sTarget&&sTarget.length>0){
        oAnchor.setAttribute("target",sTarget);
    }
    else{
        oAnchor.removeAttribute("target");
    }
},
configEmphasis:function(p_sType,p_aArgs,p_oItem){
    var bEmphasis=p_aArgs[0],oConfig=this.cfg;
    if(bEmphasis&&oConfig.getProperty("strongemphasis")){
        oConfig.setProperty("strongemphasis",false);
    }
    oConfig.refireEvent("text");
},
configStrongEmphasis:function(p_sType,p_aArgs,p_oItem){
    var bStrongEmphasis=p_aArgs[0],oConfig=this.cfg;
    if(bStrongEmphasis&&oConfig.getProperty("emphasis")){
        oConfig.setProperty("emphasis",false);
    }
    oConfig.refireEvent("text");
},
configChecked:function(p_sType,p_aArgs,p_oItem){
    var bChecked=p_aArgs[0],oElement=this.element,oAnchor=this._oAnchor,oConfig=this.cfg,sState="-checked",sClassName=this.CSS_CLASS_NAME+sState,sLabelClassName=this.CSS_LABEL_CLASS_NAME+sState;
    if(bChecked){
        Dom.addClass(oElement,sClassName);
        Dom.addClass(oAnchor,sLabelClassName);
    }
    else{
        Dom.removeClass(oElement,sClassName);
        Dom.removeClass(oAnchor,sLabelClassName);
    }
    oConfig.refireEvent("text");
    if(oConfig.getProperty("disabled")){
        oConfig.refireEvent("disabled");
    }
    if(oConfig.getProperty("selected")){
        oConfig.refireEvent("selected");
    }
},
configDisabled:function(p_sType,p_aArgs,p_oItem){
    var bDisabled=p_aArgs[0],oConfig=this.cfg,oSubmenu=oConfig.getProperty("submenu"),bChecked=oConfig.getProperty("checked"),oElement=this.element,oAnchor=this._oAnchor,sState="-disabled",sCheckedState="-checked"+sState,sSubmenuState="-hassubmenu"+sState,sClassName=this.CSS_CLASS_NAME+sState,sLabelClassName=this.CSS_LABEL_CLASS_NAME+sState,sCheckedClassName=this.CSS_CLASS_NAME+sCheckedState,sLabelCheckedClassName=this.CSS_LABEL_CLASS_NAME+sCheckedState,sSubmenuClassName=this.CSS_CLASS_NAME+sSubmenuState,sLabelSubmenuClassName=this.CSS_LABEL_CLASS_NAME+sSubmenuState;
    if(bDisabled){
        if(oConfig.getProperty("selected")){
            oConfig.setProperty("selected",false);
        }
        Dom.addClass(oElement,sClassName);
        Dom.addClass(oAnchor,sLabelClassName);
        if(oSubmenu){
            Dom.addClass(oElement,sSubmenuClassName);
            Dom.addClass(oAnchor,sLabelSubmenuClassName);
        }
        if(bChecked){
            Dom.addClass(oElement,sCheckedClassName);
            Dom.addClass(oAnchor,sLabelCheckedClassName);
        }
    }
else{
    Dom.removeClass(oElement,sClassName);
    Dom.removeClass(oAnchor,sLabelClassName);
    if(oSubmenu){
        Dom.removeClass(oElement,sSubmenuClassName);
        Dom.removeClass(oAnchor,sLabelSubmenuClassName);
    }
    if(bChecked){
        Dom.removeClass(oElement,sCheckedClassName);
        Dom.removeClass(oAnchor,sLabelCheckedClassName);
    }
}
},
configSelected:function(p_sType,p_aArgs,p_oItem){
    var oConfig=this.cfg,bSelected=p_aArgs[0],oElement=this.element,oAnchor=this._oAnchor,bChecked=oConfig.getProperty("checked"),oSubmenu=oConfig.getProperty("submenu"),sState="-selected",sCheckedState="-checked"+sState,sSubmenuState="-hassubmenu"+sState,sClassName=this.CSS_CLASS_NAME+sState,sLabelClassName=this.CSS_LABEL_CLASS_NAME+sState,sCheckedClassName=this.CSS_CLASS_NAME+sCheckedState,sLabelCheckedClassName=this.CSS_LABEL_CLASS_NAME+sCheckedState,sSubmenuClassName=this.CSS_CLASS_NAME+sSubmenuState,sLabelSubmenuClassName=this.CSS_LABEL_CLASS_NAME+sSubmenuState;
    if(YAHOO.env.ua.opera){
        oAnchor.blur();
    }
    if(bSelected&&!oConfig.getProperty("disabled")){
        Dom.addClass(oElement,sClassName);
        Dom.addClass(oAnchor,sLabelClassName);
        if(oSubmenu){
            Dom.addClass(oElement,sSubmenuClassName);
            Dom.addClass(oAnchor,sLabelSubmenuClassName);
        }
        if(bChecked){
            Dom.addClass(oElement,sCheckedClassName);
            Dom.addClass(oAnchor,sLabelCheckedClassName);
        }
    }
else{
    Dom.removeClass(oElement,sClassName);
    Dom.removeClass(oAnchor,sLabelClassName);
    if(oSubmenu){
        Dom.removeClass(oElement,sSubmenuClassName);
        Dom.removeClass(oAnchor,sLabelSubmenuClassName);
    }
    if(bChecked){
        Dom.removeClass(oElement,sCheckedClassName);
        Dom.removeClass(oAnchor,sLabelCheckedClassName);
    }
}
if(this.hasFocus()&&YAHOO.env.ua.opera){
    oAnchor.focus();
}
},
_onSubmenuBeforeHide:function(p_sType,p_aArgs){
    var oItem=this.parent,oMenu;
    function onHide(){
        oItem._oAnchor.blur();
        oMenu.beforeHideEvent.unsubscribe(onHide);
    }
    if(oItem.hasFocus()){
        oMenu=oItem.parent;
        oMenu.beforeHideEvent.subscribe(onHide);
    }
},
configSubmenu:function(p_sType,p_aArgs,p_oItem){
    var oSubmenu=p_aArgs[0],oConfig=this.cfg,oElement=this.element,oAnchor=this._oAnchor,bLazyLoad=this.parent&&this.parent.lazyLoad,sState="-hassubmenu",sClassName=this.CSS_CLASS_NAME+sState,sLabelClassName=this.CSS_LABEL_CLASS_NAME+sState,oMenu,sSubmenuId,oSubmenuConfig;
    if(oSubmenu){
        if(oSubmenu instanceof Menu){
            oMenu=oSubmenu;
            oMenu.parent=this;
            oMenu.lazyLoad=bLazyLoad;
        }
        else if(typeof oSubmenu=="object"&&oSubmenu.id&&!oSubmenu.nodeType){
            sSubmenuId=oSubmenu.id;
            oSubmenuConfig=oSubmenu;
            oSubmenuConfig.lazyload=bLazyLoad;
            oSubmenuConfig.parent=this;
            oMenu=new this.SUBMENU_TYPE(sSubmenuId,oSubmenuConfig);
            oConfig.setProperty("submenu",oMenu,true);
        }
        else{
            oMenu=new this.SUBMENU_TYPE(oSubmenu,{
                lazyload:bLazyLoad,
                parent:this
            });
            oConfig.setProperty("submenu",oMenu,true);
        }
        if(oMenu){
            Dom.addClass(oElement,sClassName);
            Dom.addClass(oAnchor,sLabelClassName);
            this._oSubmenu=oMenu;
            if(YAHOO.env.ua.opera){
                oMenu.beforeHideEvent.subscribe(this._onSubmenuBeforeHide);
            }
        }
    }
else{
    Dom.removeClass(oElement,sClassName);
    Dom.removeClass(oAnchor,sLabelClassName);
    if(this._oSubmenu){
        this._oSubmenu.destroy();
    }
}
if(oConfig.getProperty("disabled")){
    oConfig.refireEvent("disabled");
}
if(oConfig.getProperty("selected")){
    oConfig.refireEvent("selected");
}
},
configOnClick:function(p_sType,p_aArgs,p_oItem){
    var oObject=p_aArgs[0];
    if(this._oOnclickAttributeValue&&(this._oOnclickAttributeValue!=oObject)){
        this.clickEvent.unsubscribe(this._oOnclickAttributeValue.fn,this._oOnclickAttributeValue.obj);
        this._oOnclickAttributeValue=null;
    }
    if(!this._oOnclickAttributeValue&&typeof oObject=="object"&&typeof oObject.fn=="function"){
        this.clickEvent.subscribe(oObject.fn,((!YAHOO.lang.isUndefined(oObject.obj))?oObject.obj:this),oObject.scope);
        this._oOnclickAttributeValue=oObject;
    }
},
configClassName:function(p_sType,p_aArgs,p_oItem){
    var sClassName=p_aArgs[0];
    if(this._sClassName){
        Dom.removeClass(this.element,this._sClassName);
    }
    Dom.addClass(this.element,sClassName);
    this._sClassName=sClassName;
},
initDefaultConfig:function(){
    var oConfig=this.cfg;
    oConfig.addProperty(DEFAULT_CONFIG.TEXT.key,{
        handler:this.configText,
        value:DEFAULT_CONFIG.TEXT.value,
        validator:DEFAULT_CONFIG.TEXT.validator,
        suppressEvent:DEFAULT_CONFIG.TEXT.suppressEvent
        });
    oConfig.addProperty(DEFAULT_CONFIG.HELP_TEXT.key,{
        handler:this.configHelpText,
        supercedes:DEFAULT_CONFIG.HELP_TEXT.supercedes,
        suppressEvent:DEFAULT_CONFIG.HELP_TEXT.suppressEvent
        });
    oConfig.addProperty(DEFAULT_CONFIG.URL.key,{
        handler:this.configURL,
        value:DEFAULT_CONFIG.URL.value,
        suppressEvent:DEFAULT_CONFIG.URL.suppressEvent
        });
    oConfig.addProperty(DEFAULT_CONFIG.TARGET.key,{
        handler:this.configTarget,
        suppressEvent:DEFAULT_CONFIG.TARGET.suppressEvent
        });
    oConfig.addProperty(DEFAULT_CONFIG.EMPHASIS.key,{
        handler:this.configEmphasis,
        value:DEFAULT_CONFIG.EMPHASIS.value,
        validator:DEFAULT_CONFIG.EMPHASIS.validator,
        suppressEvent:DEFAULT_CONFIG.EMPHASIS.suppressEvent,
        supercedes:DEFAULT_CONFIG.EMPHASIS.supercedes
        });
    oConfig.addProperty(DEFAULT_CONFIG.STRONG_EMPHASIS.key,{
        handler:this.configStrongEmphasis,
        value:DEFAULT_CONFIG.STRONG_EMPHASIS.value,
        validator:DEFAULT_CONFIG.STRONG_EMPHASIS.validator,
        suppressEvent:DEFAULT_CONFIG.STRONG_EMPHASIS.suppressEvent,
        supercedes:DEFAULT_CONFIG.STRONG_EMPHASIS.supercedes
        });
    oConfig.addProperty(DEFAULT_CONFIG.CHECKED.key,{
        handler:this.configChecked,
        value:DEFAULT_CONFIG.CHECKED.value,
        validator:DEFAULT_CONFIG.CHECKED.validator,
        suppressEvent:DEFAULT_CONFIG.CHECKED.suppressEvent,
        supercedes:DEFAULT_CONFIG.CHECKED.supercedes
        });
    oConfig.addProperty(DEFAULT_CONFIG.DISABLED.key,{
        handler:this.configDisabled,
        value:DEFAULT_CONFIG.DISABLED.value,
        validator:DEFAULT_CONFIG.DISABLED.validator,
        suppressEvent:DEFAULT_CONFIG.DISABLED.suppressEvent
        });
    oConfig.addProperty(DEFAULT_CONFIG.SELECTED.key,{
        handler:this.configSelected,
        value:DEFAULT_CONFIG.SELECTED.value,
        validator:DEFAULT_CONFIG.SELECTED.validator,
        suppressEvent:DEFAULT_CONFIG.SELECTED.suppressEvent
        });
    oConfig.addProperty(DEFAULT_CONFIG.SUBMENU.key,{
        handler:this.configSubmenu,
        supercedes:DEFAULT_CONFIG.SUBMENU.supercedes,
        suppressEvent:DEFAULT_CONFIG.SUBMENU.suppressEvent
        });
    oConfig.addProperty(DEFAULT_CONFIG.ONCLICK.key,{
        handler:this.configOnClick,
        suppressEvent:DEFAULT_CONFIG.ONCLICK.suppressEvent
        });
    oConfig.addProperty(DEFAULT_CONFIG.CLASS_NAME.key,{
        handler:this.configClassName,
        value:DEFAULT_CONFIG.CLASS_NAME.value,
        validator:DEFAULT_CONFIG.CLASS_NAME.validator,
        suppressEvent:DEFAULT_CONFIG.CLASS_NAME.suppressEvent
        });
},
getNextEnabledSibling:function(){
    var nGroupIndex,aItemGroups,oNextItem,nNextGroupIndex,aNextGroup;
    function getNextArrayItem(p_aArray,p_nStartIndex){
        return p_aArray[p_nStartIndex]||getNextArrayItem(p_aArray,(p_nStartIndex+1));
    }
    if(this.parent instanceof Menu){
        nGroupIndex=this.groupIndex;
        aItemGroups=this.parent.getItemGroups();
        if(this.index<(aItemGroups[nGroupIndex].length-1)){
            oNextItem=getNextArrayItem(aItemGroups[nGroupIndex],(this.index+1));
        }
        else{
            if(nGroupIndex<(aItemGroups.length-1)){
                nNextGroupIndex=nGroupIndex+1;
            }
            else{
                nNextGroupIndex=0;
            }
            aNextGroup=getNextArrayItem(aItemGroups,nNextGroupIndex);
            oNextItem=getNextArrayItem(aNextGroup,0);
        }
        return(oNextItem.cfg.getProperty("disabled")||oNextItem.element.style.display=="none")?oNextItem.getNextEnabledSibling():oNextItem;
    }
},
getPreviousEnabledSibling:function(){
    var nGroupIndex,aItemGroups,oPreviousItem,nPreviousGroupIndex,aPreviousGroup;
    function getPreviousArrayItem(p_aArray,p_nStartIndex){
        return p_aArray[p_nStartIndex]||getPreviousArrayItem(p_aArray,(p_nStartIndex-1));
    }
    function getFirstItemIndex(p_aArray,p_nStartIndex){
        return p_aArray[p_nStartIndex]?p_nStartIndex:getFirstItemIndex(p_aArray,(p_nStartIndex+1));
    }
    if(this.parent instanceof Menu){
        nGroupIndex=this.groupIndex;
        aItemGroups=this.parent.getItemGroups();
        if(this.index>getFirstItemIndex(aItemGroups[nGroupIndex],0)){
            oPreviousItem=getPreviousArrayItem(aItemGroups[nGroupIndex],(this.index-1));
        }
        else{
            if(nGroupIndex>getFirstItemIndex(aItemGroups,0)){
                nPreviousGroupIndex=nGroupIndex-1;
            }
            else{
                nPreviousGroupIndex=aItemGroups.length-1;
            }
            aPreviousGroup=getPreviousArrayItem(aItemGroups,nPreviousGroupIndex);
            oPreviousItem=getPreviousArrayItem(aPreviousGroup,(aPreviousGroup.length-1));
        }
        return(oPreviousItem.cfg.getProperty("disabled")||oPreviousItem.element.style.display=="none")?oPreviousItem.getPreviousEnabledSibling():oPreviousItem;
    }
},
focus:function(){
    var oParent=this.parent,oAnchor=this._oAnchor,oActiveItem=oParent.activeItem,me=this;
    function setFocus(){
        try{
            if(YAHOO.env.ua.ie&&!document.hasFocus()){
                return;
            }
            if(oActiveItem){
                oActiveItem.blurEvent.fire();
            }
            oAnchor.focus();
            me.focusEvent.fire();
        }
        catch(e){}
    }
if(!this.cfg.getProperty("disabled")&&oParent&&oParent.cfg.getProperty("visible")&&this.element.style.display!="none"){
    window.setTimeout(setFocus,0);
}
},
blur:function(){
    var oParent=this.parent;
    if(!this.cfg.getProperty("disabled")&&oParent&&oParent.cfg.getProperty("visible")){
        var me=this;
        window.setTimeout(function(){
            try{
                me._oAnchor.blur();
                me.blurEvent.fire();
            }
            catch(e){}
        },0);
}
},
hasFocus:function(){
    return(YAHOO.widget.MenuManager.getFocusedMenuItem()==this);
},
destroy:function(){
    var oEl=this.element,oSubmenu,oParentNode;
    if(oEl){
        oSubmenu=this.cfg.getProperty("submenu");
        if(oSubmenu){
            oSubmenu.destroy();
        }
        this.mouseOverEvent.unsubscribeAll();
        this.mouseOutEvent.unsubscribeAll();
        this.mouseDownEvent.unsubscribeAll();
        this.mouseUpEvent.unsubscribeAll();
        this.clickEvent.unsubscribeAll();
        this.keyPressEvent.unsubscribeAll();
        this.keyDownEvent.unsubscribeAll();
        this.keyUpEvent.unsubscribeAll();
        this.focusEvent.unsubscribeAll();
        this.blurEvent.unsubscribeAll();
        this.cfg.configChangedEvent.unsubscribeAll();
        oParentNode=oEl.parentNode;
        if(oParentNode){
            oParentNode.removeChild(oEl);
            this.destroyEvent.fire();
        }
        this.destroyEvent.unsubscribeAll();
    }
},
toString:function(){
    var sReturnVal="MenuItem",sId=this.id;
    if(sId){
        sReturnVal+=(" "+sId);
    }
    return sReturnVal;
}
};

Lang.augmentProto(MenuItem,YAHOO.util.EventProvider);
})();
(function(){
    YAHOO.widget.ContextMenu=function(p_oElement,p_oConfig){
        YAHOO.widget.ContextMenu.superclass.constructor.call(this,p_oElement,p_oConfig);
    };

    var Event=YAHOO.util.Event,ContextMenu=YAHOO.widget.ContextMenu,EVENT_TYPES={
        "TRIGGER_CONTEXT_MENU":"triggerContextMenu",
        "CONTEXT_MENU":(YAHOO.env.ua.opera?"mousedown":"contextmenu"),
        "CLICK":"click"
    },DEFAULT_CONFIG={
        "TRIGGER":{
            key:"trigger",
            suppressEvent:true
        }
    };

function position(p_sType,p_aArgs,p_aPos){
    this.cfg.setProperty("xy",p_aPos);
    this.beforeShowEvent.unsubscribe(position,p_aPos);
}
YAHOO.lang.extend(ContextMenu,YAHOO.widget.Menu,{
    _oTrigger:null,
    _bCancelled:false,
    contextEventTarget:null,
    triggerContextMenuEvent:null,
    init:function(p_oElement,p_oConfig){
        ContextMenu.superclass.init.call(this,p_oElement);
        this.beforeInitEvent.fire(ContextMenu);
        if(p_oConfig){
            this.cfg.applyConfig(p_oConfig,true);
        }
        this.initEvent.fire(ContextMenu);
    },
    initEvents:function(){
        ContextMenu.superclass.initEvents.call(this);
        this.triggerContextMenuEvent=this.createEvent(EVENT_TYPES.TRIGGER_CONTEXT_MENU);
        this.triggerContextMenuEvent.signature=YAHOO.util.CustomEvent.LIST;
    },
    cancel:function(){
        this._bCancelled=true;
    },
    _removeEventHandlers:function(){
        var oTrigger=this._oTrigger;
        if(oTrigger){
            Event.removeListener(oTrigger,EVENT_TYPES.CONTEXT_MENU,this._onTriggerContextMenu);
            if(YAHOO.env.ua.opera){
                Event.removeListener(oTrigger,EVENT_TYPES.CLICK,this._onTriggerClick);
            }
        }
    },
_onTriggerClick:function(p_oEvent,p_oMenu){
    if(p_oEvent.ctrlKey){
        Event.stopEvent(p_oEvent);
    }
},
_onTriggerContextMenu:function(p_oEvent,p_oMenu){
    if(p_oEvent.type=="mousedown"&&!p_oEvent.ctrlKey){
        return;
    }
    var aXY;
    Event.stopEvent(p_oEvent);
    this.contextEventTarget=Event.getTarget(p_oEvent);
    this.triggerContextMenuEvent.fire(p_oEvent);
    YAHOO.widget.MenuManager.hideVisible();
    if(!this._bCancelled){
        aXY=Event.getXY(p_oEvent);
        if(!YAHOO.util.Dom.inDocument(this.element)){
            this.beforeShowEvent.subscribe(position,aXY);
        }
        else{
            this.cfg.setProperty("xy",aXY);
        }
        this.show();
    }
    this._bCancelled=false;
},
toString:function(){
    var sReturnVal="ContextMenu",sId=this.id;
    if(sId){
        sReturnVal+=(" "+sId);
    }
    return sReturnVal;
},
initDefaultConfig:function(){
    ContextMenu.superclass.initDefaultConfig.call(this);
    this.cfg.addProperty(DEFAULT_CONFIG.TRIGGER.key,{
        handler:this.configTrigger,
        suppressEvent:DEFAULT_CONFIG.TRIGGER.suppressEvent
        });
},
destroy:function(){
    this._removeEventHandlers();
    ContextMenu.superclass.destroy.call(this);
},
configTrigger:function(p_sType,p_aArgs,p_oMenu){
    var oTrigger=p_aArgs[0];
    if(oTrigger){
        if(this._oTrigger){
            this._removeEventHandlers();
        }
        this._oTrigger=oTrigger;
        Event.on(oTrigger,EVENT_TYPES.CONTEXT_MENU,this._onTriggerContextMenu,this,true);
        if(YAHOO.env.ua.opera){
            Event.on(oTrigger,EVENT_TYPES.CLICK,this._onTriggerClick,this,true);
        }
    }
else{
    this._removeEventHandlers();
}
}
});
}());
YAHOO.widget.ContextMenuItem=YAHOO.widget.MenuItem;
(function(){
    YAHOO.widget.MenuBar=function(p_oElement,p_oConfig){
        YAHOO.widget.MenuBar.superclass.constructor.call(this,p_oElement,p_oConfig);
    };

    function checkPosition(p_sPosition){
        if(typeof p_sPosition=="string"){
            return("dynamic,static".indexOf((p_sPosition.toLowerCase()))!=-1);
        }
    }
var Event=YAHOO.util.Event,MenuBar=YAHOO.widget.MenuBar,DEFAULT_CONFIG={
    "POSITION":{
        key:"position",
        value:"static",
        validator:checkPosition,
        supercedes:["visible"]
        },
    "SUBMENU_ALIGNMENT":{
        key:"submenualignment",
        value:["tl","bl"],
        suppressEvent:true
    },
    "AUTO_SUBMENU_DISPLAY":{
        key:"autosubmenudisplay",
        value:false,
        validator:YAHOO.lang.isBoolean,
        suppressEvent:true
    }
};

YAHOO.lang.extend(MenuBar,YAHOO.widget.Menu,{
    init:function(p_oElement,p_oConfig){
        if(!this.ITEM_TYPE){
            this.ITEM_TYPE=YAHOO.widget.MenuBarItem;
        }
        MenuBar.superclass.init.call(this,p_oElement);
        this.beforeInitEvent.fire(MenuBar);
        if(p_oConfig){
            this.cfg.applyConfig(p_oConfig,true);
        }
        this.initEvent.fire(MenuBar);
    },
    CSS_CLASS_NAME:"yuimenubar",
    _onKeyDown:function(p_sType,p_aArgs,p_oMenuBar){
        var oEvent=p_aArgs[0],oItem=p_aArgs[1],oSubmenu,oItemCfg,oNextItem;
        if(oItem&&!oItem.cfg.getProperty("disabled")){
            oItemCfg=oItem.cfg;
            switch(oEvent.keyCode){
                case 37:case 39:
                    if(oItem==this.activeItem&&!oItemCfg.getProperty("selected")){
                    oItemCfg.setProperty("selected",true);
                }
                else{
                    oNextItem=(oEvent.keyCode==37)?oItem.getPreviousEnabledSibling():oItem.getNextEnabledSibling();
                    if(oNextItem){
                        this.clearActiveItem();
                        oNextItem.cfg.setProperty("selected",true);
                        if(this.cfg.getProperty("autosubmenudisplay")){
                            oSubmenu=oNextItem.cfg.getProperty("submenu");
                            if(oSubmenu){
                                oSubmenu.show();
                            }
                        }
                    oNextItem.focus();
                }
                }
            Event.preventDefault(oEvent);
            break;
        case 40:
            if(this.activeItem!=oItem){
            this.clearActiveItem();
            oItemCfg.setProperty("selected",true);
            oItem.focus();
        }
        oSubmenu=oItemCfg.getProperty("submenu");
            if(oSubmenu){
            if(oSubmenu.cfg.getProperty("visible")){
                oSubmenu.setInitialSelection();
                oSubmenu.setInitialFocus();
            }
            else{
                oSubmenu.show();
            }
        }
        Event.preventDefault(oEvent);
        break;
}
}
if(oEvent.keyCode==27&&this.activeItem){
    oSubmenu=this.activeItem.cfg.getProperty("submenu");
    if(oSubmenu&&oSubmenu.cfg.getProperty("visible")){
        oSubmenu.hide();
        this.activeItem.focus();
    }
    else{
        this.activeItem.cfg.setProperty("selected",false);
        this.activeItem.blur();
    }
    Event.preventDefault(oEvent);
}
},
_onClick:function(p_sType,p_aArgs,p_oMenuBar){
    MenuBar.superclass._onClick.call(this,p_sType,p_aArgs,p_oMenuBar);
    var oItem=p_aArgs[1],oEvent,oTarget,oActiveItem,oConfig,oSubmenu;
    if(oItem&&!oItem.cfg.getProperty("disabled")){
        oEvent=p_aArgs[0];
        oTarget=Event.getTarget(oEvent);
        oActiveItem=this.activeItem;
        oConfig=this.cfg;
        if(oActiveItem&&oActiveItem!=oItem){
            this.clearActiveItem();
        }
        oItem.cfg.setProperty("selected",true);
        oSubmenu=oItem.cfg.getProperty("submenu");
        if(oSubmenu){
            if(oSubmenu.cfg.getProperty("visible")){
                oSubmenu.hide();
            }
            else{
                oSubmenu.show();
            }
        }
    }
},
toString:function(){
    var sReturnVal="MenuBar",sId=this.id;
    if(sId){
        sReturnVal+=(" "+sId);
    }
    return sReturnVal;
},
initDefaultConfig:function(){
    MenuBar.superclass.initDefaultConfig.call(this);
    var oConfig=this.cfg;
    oConfig.addProperty(DEFAULT_CONFIG.POSITION.key,{
        handler:this.configPosition,
        value:DEFAULT_CONFIG.POSITION.value,
        validator:DEFAULT_CONFIG.POSITION.validator,
        supercedes:DEFAULT_CONFIG.POSITION.supercedes
        });
    oConfig.addProperty(DEFAULT_CONFIG.SUBMENU_ALIGNMENT.key,{
        value:DEFAULT_CONFIG.SUBMENU_ALIGNMENT.value,
        suppressEvent:DEFAULT_CONFIG.SUBMENU_ALIGNMENT.suppressEvent
        });
    oConfig.addProperty(DEFAULT_CONFIG.AUTO_SUBMENU_DISPLAY.key,{
        value:DEFAULT_CONFIG.AUTO_SUBMENU_DISPLAY.value,
        validator:DEFAULT_CONFIG.AUTO_SUBMENU_DISPLAY.validator,
        suppressEvent:DEFAULT_CONFIG.AUTO_SUBMENU_DISPLAY.suppressEvent
        });
}
});
}());
YAHOO.widget.MenuBarItem=function(p_oObject,p_oConfig){
    YAHOO.widget.MenuBarItem.superclass.constructor.call(this,p_oObject,p_oConfig);
};

YAHOO.lang.extend(YAHOO.widget.MenuBarItem,YAHOO.widget.MenuItem,{
    init:function(p_oObject,p_oConfig){
        if(!this.SUBMENU_TYPE){
            this.SUBMENU_TYPE=YAHOO.widget.Menu;
        }
        YAHOO.widget.MenuBarItem.superclass.init.call(this,p_oObject);
        var oConfig=this.cfg;
        if(p_oConfig){
            oConfig.applyConfig(p_oConfig,true);
        }
        oConfig.fireQueue();
    },
    CSS_CLASS_NAME:"yuimenubaritem",
    CSS_LABEL_CLASS_NAME:"yuimenubaritemlabel",
    toString:function(){
        var sReturnVal="MenuBarItem";
        if(this.cfg&&this.cfg.getProperty("text")){
            sReturnVal+=(": "+this.cfg.getProperty("text"));
        }
        return sReturnVal;
    }
});
YAHOO.register("menu",YAHOO.widget.Menu,{
    version:"2.4.0",
    build:"733"
});
var Base64={
    _keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode:function(input){
        var output="";
        var chr1,chr2,chr3,enc1,enc2,enc3,enc4;
        var i=0;
        input=Base64._utf8_encode(input);
        while(i<input.length){
            chr1=input.charCodeAt(i++);
            chr2=input.charCodeAt(i++);
            chr3=input.charCodeAt(i++);
            enc1=chr1>>2;
            enc2=((chr1&3)<<4)|(chr2>>4);
            enc3=((chr2&15)<<2)|(chr3>>6);
            enc4=chr3&63;
            if(isNaN(chr2)){
                enc3=enc4=64;
            }else if(isNaN(chr3)){
                enc4=64;
            }
            output=output+
            this._keyStr.charAt(enc1)+this._keyStr.charAt(enc2)+
            this._keyStr.charAt(enc3)+this._keyStr.charAt(enc4);
        }
        return output;
    },
    decode:function(input){
        var output="";
        var chr1,chr2,chr3;
        var enc1,enc2,enc3,enc4;
        var i=0;
        input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");
        while(i<input.length){
            enc1=this._keyStr.indexOf(input.charAt(i++));
            enc2=this._keyStr.indexOf(input.charAt(i++));
            enc3=this._keyStr.indexOf(input.charAt(i++));
            enc4=this._keyStr.indexOf(input.charAt(i++));
            chr1=(enc1<<2)|(enc2>>4);
            chr2=((enc2&15)<<4)|(enc3>>2);
            chr3=((enc3&3)<<6)|enc4;
            output=output+String.fromCharCode(chr1);
            if(enc3!=64){
                output=output+String.fromCharCode(chr2);
            }
            if(enc4!=64){
                output=output+String.fromCharCode(chr3);
            }
        }
    output=Base64._utf8_decode(output);
    return output;
},
_utf8_encode:function(string){
    string=string.replace(/\r\n/g,"\n");
    var utftext="";
    for(var n=0;n<string.length;n++){
        var c=string.charCodeAt(n);
        if(c<128){
            utftext+=String.fromCharCode(c);
        }
        else if((c>127)&&(c<2048)){
            utftext+=String.fromCharCode((c>>6)|192);
            utftext+=String.fromCharCode((c&63)|128);
        }
        else{
            utftext+=String.fromCharCode((c>>12)|224);
            utftext+=String.fromCharCode(((c>>6)&63)|128);
            utftext+=String.fromCharCode((c&63)|128);
        }
    }
return utftext;
},
_utf8_decode:function(utftext){
    var string="";
    var i=0;
    var c=c1=c2=0;
    while(i<utftext.length){
        c=utftext.charCodeAt(i);
        if(c<128){
            string+=String.fromCharCode(c);
            i++;
        }
        else if((c>191)&&(c<224)){
            c2=utftext.charCodeAt(i+1);
            string+=String.fromCharCode(((c&31)<<6)|(c2&63));
            i+=2;
        }
        else{
            c2=utftext.charCodeAt(i+1);
            c3=utftext.charCodeAt(i+2);
            string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));
            i+=3;
        }
    }
return string;
}
}
var BrowserDetect={
    init:function(){
        this.browser=this.searchString(this.dataBrowser)||"An unknown browser";
        this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";
        this.OS=this.searchString(this.dataOS)||"an unknown OS";
    },
    searchString:function(data){
        for(var i=0;i<data.length;i++){
            var dataString=data[i].string;
            var dataProp=data[i].prop;
            this.versionSearchString=data[i].versionSearch||data[i].identity;
            if(dataString){
                if(dataString.indexOf(data[i].subString)!=-1)
                    return data[i].identity;
            }
            else if(dataProp)
                return data[i].identity;
        }
        },
searchVersion:function(dataString){
    var index=dataString.indexOf(this.versionSearchString);
    if(index==-1)return;
    return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
},
dataBrowser:[{
    string:navigator.userAgent,
    subString:"OmniWeb",
    versionSearch:"OmniWeb/",
    identity:"OmniWeb"
},{
    string:navigator.vendor,
    subString:"Apple",
    identity:"Safari"
},{
    prop:window.opera,
    identity:"Opera"
},{
    string:navigator.vendor,
    subString:"iCab",
    identity:"iCab"
},{
    string:navigator.vendor,
    subString:"KDE",
    identity:"Konqueror"
},{
    string:navigator.userAgent,
    subString:"Firefox",
    identity:"Firefox"
},{
    string:navigator.vendor,
    subString:"Camino",
    identity:"Camino"
},{
    string:navigator.userAgent,
    subString:"Netscape",
    identity:"Netscape"
},{
    string:navigator.userAgent,
    subString:"MSIE",
    identity:"Explorer",
    versionSearch:"MSIE"
},{
    string:navigator.userAgent,
    subString:"Gecko",
    identity:"Mozilla",
    versionSearch:"rv"
},{
    string:navigator.userAgent,
    subString:"Mozilla",
    identity:"Netscape",
    versionSearch:"Mozilla"
}],
dataOS:[{
    string:navigator.platform,
    subString:"Win",
    identity:"Windows"
},{
    string:navigator.platform,
    subString:"Mac",
    identity:"Mac"
},{
    string:navigator.platform,
    subString:"Linux",
    identity:"Linux"
}]
};

BrowserDetect.init();
Element.ELEMENT_NODE=1;
Element.descendantsWithClassName=function(parentElement,className){
    var children=parentElement.getElementsByTagName('*');
    return $A(children).inject([],function(elements,child){
        if(Element.hasClassName(child,className)){
            elements.push(child);
        }
        return elements;
    });
};

Element.conceal=function(element){
    element.style.visibility='hidden';
};

Element.reveal=function(element){
    element.style.visibility='visible';
};

Element.create=function(name){
    return document.createElement(name);
};

Element.newTextNode=function(text){
    return document.createTextNode(text);
};

Element.asHTML=function(el){
    var bar=Element.create('bar');
    bar.appendChild(el);
    return bar.innerHTML;
};

Element.previousSiblingElement=function(el){
    var sibling=el.previousSibling;
    while(sibling&&sibling.nodeType!=Element.ELEMENT_NODE){
        sibling=sibling.previousSibling;
    }
    return sibling;
};

Element.nextSiblingElement=function(el){
    var sibling=el.nextSibling;
    while(sibling&&sibling.nodeType!=Element.ELEMENT_NODE){
        sibling=sibling.nextSibling;
    }
    return sibling;
};

Element.getPosY=function(element){
    return YAHOO.util.DragDropMgr.getPosY(element);
};

Element.getPosX=function(element){
    return YAHOO.util.DragDropMgr.getPosX(element);
};

Element.isElementOverVerticalScrollbar=function(element,scrollableElement){
    if(scrollableElement.clientHeight>=scrollableElement.scrollHeight){
        return false;
    }
    var elementPosition={
        y:Element.getPosY(element),
        x:Element.getPosX(element)
        }
    var scrollableElementPosition={
        y:Element.getPosY(scrollableElement),
        x:Element.getPosX(scrollableElement)
        }
    var elementRegion=new Region(elementPosition.y,elementPosition.x+element.clientWidth,elementPosition.y+element.clientHeight,elementPosition.x);
    var verticalScrollbarRegion=new Region(scrollableElementPosition.y,scrollableElementPosition.x+scrollableElement.clientWidth,scrollableElementPosition.y+scrollableElement.clientHeight,scrollableElementPosition.x+scrollableElement.clientWidth-15);
    return elementRegion.intersects(verticalScrollbarRegion);
}
Element.hideScrollbarsUnderElement=function(element,scrollableElementIds){
    if(BrowserDetect.OS!="Mac"||(BrowserDetect.browser=="Firefox"&&BrowserDetect.version==3)||(BrowserDetect.browser=="Safari")){
        return;
    }
    for(var i=0;i<scrollableElementIds.length;i++){
        var scrollableElement=document.getElementById(scrollableElementIds[i]);
        if(scrollableElement){
            if(Element.isElementOverHorizontalScrollbar(element,scrollableElement)){
                Element.addClassName(scrollableElement,"no_xscroll");
            };

            if(Element.isElementOverVerticalScrollbar(element,scrollableElement)){
                Element.addClassName(scrollableElement,"no_yscroll");
            };

    }
    }
}
Element.unhideScrollbars=function(scrollableElementIds){
    for(var i=0;i<scrollableElementIds.length;i++){
        var element=document.getElementById(scrollableElementIds[i]);
        if(element){
            Element.removeClassName(element,"no_xscroll");
            Element.removeClassName(element,"no_yscroll");
        };

    }
}
Element.isElementOverHorizontalScrollbar=function(element,scrollableElement){
    if(scrollableElement.clientWidth>=scrollableElement.scrollWidth){
        return false;
    }
    var elementPosition={
        y:Element.getPosY(element),
        x:Element.getPosX(element)
        }
    var scrollableElementPosition={
        y:Element.getPosY(scrollableElement),
        x:Element.getPosX(scrollableElement)
        }
    var elementRegion=new Region(elementPosition.y,elementPosition.x+element.clientWidth,elementPosition.y+element.clientHeight,elementPosition.x);
    var horizontalScrollbarRegion=new Region(scrollableElementPosition.y+scrollableElement.clientHeight-15,scrollableElementPosition.x+scrollableElement.clientWidth,scrollableElementPosition.y+scrollableElement.clientHeight,scrollableElementPosition.x);
    return elementRegion.intersects(horizontalScrollbarRegion);
}
if(typeof String.prototype.trim=="undefined"){
    String.prototype.trim=function(){
        return this.replace(/^\s+|\s+$/g,"");
    };

}
if(typeof String.prototype.substrCount=="undefined"){
    String.prototype.substrCount=function(s){
        return this.split(s).length-1;
    };

}
String.prototype.isAlpha=function(){
    return(this>='a'&&this<='z\uffff')||(this>='A'&&this<='Z\uffff');
};

String.prototype.isDigit=function(){
    return(this>='0'&&this<='9');
};

String.prototype.htmlEscape=function(){
    var s=this;
    s=s.replace(/&/g,'&amp;');
    s=s.replace(/>/g,'&gt;');
    s=s.replace(/</g,'&lt;');
    s=s.replace(/"/g,'&quot;');
    return s;
};

Array.prototype.contains=function(value){
    return this.indexOf(value)!=-1;
};

Array.prototype.last=function(){
    return this[this.length-1];
};

Array.prototype.isEmpty=function(){
    return this.length===0;
};

Array.prototype.collect=function(f){
    var result=[];
    for(var i=0;i<this.length;i++){
        result.push(f(this[i]));
    }
    return result;
};

Array.prototype.detect=function(f){
    var result=[];
    for(var i=0;i<this.length;i++){
        if(f(this[i])){
            return this[i];
        }
    }
return null;
};

var Utils={
    centerInWindow:function(element){
        this.alignInWindow(element,0.5,0.5);
    },
    alignInWindow:function(element,horizontalRatio,verticalRatio){
        var windowDimensions=Utils.windowDimensions();
        var elementDimensions=Element.getDimensions(element);
        var new_left=(windowDimensions.width-elementDimensions.width)*horizontalRatio+"px";
        var new_top=(windowDimensions.height-elementDimensions.height)*verticalRatio+"px";
        element.style.position='absolute';
        element.style.left=new_left;
        element.style.top=new_top;
    },
    windowDimensions:function(){
        return{
            height:this.window().innerHeight||document.documentElement.clientHeight||document.body.clientHeight,
            width:this.window().innerWidth||document.documentElement.clientWidth||document.body.clientWidth
            };

},
useMockWindow:function(w){
    this.mockedWindow=w;
},
window:function(){
    return this.mockedWindow||window;
},
redirectTo:function(url){
    window.location.href=url;
},
heightWithBorders:function(elem){
    return Element.getDimensions(elem).height;
},
widthWithBorders:function(elem){
    return Element.getDimensions(elem).width;
},
widthWithBordersAndMargins:function(elem){
    var width=Element.getDimensions(elem).width;
    width=width+this.styleAsNum(elem,"margin-left");
    width=width+this.styleAsNum(elem,"margin-right");
    return width;
},
height:function(elem){
    return this.heightWithBorders(elem)-this.heightPaddingAndBorders(elem);
},
heightPaddingAndBorders:function(elem){
    var padding=this.styleAsNum(elem,"padding-top");
    padding+=this.styleAsNum(elem,"padding-bottom");
    padding+=this.styleAsNum(elem,"border-top-width");
    padding+=this.styleAsNum(elem,"border-bottom-width");
    return padding;
},
width:function(elem){
    var width=this.widthWithBorders(elem);
    width=width-this.styleAsNum(elem,"padding-left");
    width=width-this.styleAsNum(elem,"padding-right");
    width=width-this.styleAsNum(elem,"border-left-width");
    width=width-this.styleAsNum(elem,"border-right-width");
    return width;
},
setWidth:function(elem,pixels){
    elem.style.width=this._pixelsAsStyleUnit(pixels);
},
setHeight:function(elem,pixels){
    elem.style.height=this._pixelsAsStyleUnit(pixels);
},
_pixelsAsStyleUnit:function(pixels){
    if(pixels==NaN||(""+pixels)=="NaN"){
        pixels=0;
    }
    pixels=parseInt(pixels);
    if(pixels<0){
        pixels=0;
    }
    return pixels.toString()+"px";
},
marginLeft:function(elem){
    return this.styleAsNum(elem,"margin-left");
},
marginRight:function(elem){
    return this.styleAsNum(elem,"margin-right");
},
borderLeft:function(elem){
    return this.styleAsNum(elem,"border-left-width");
},
borderRight:function(elem){
    return this.styleAsNum(elem,"border-right-width");
},
styleAsNum:function(elem,mozillaProp){
    var computedStyle=Element.getStyle(elem,mozillaProp);
    if(!computedStyle){
        return 0;
    }
    computedStyle=computedStyle.substr(0,computedStyle.length-2);
    if(isNaN(computedStyle)){
        return 0;
    }
    return parseInt(computedStyle);
},
asString:function(hash){
    var str="{";
    for(var key in hash){
        str=str+key+":"+hash[key]+",";
    }
    return str+"}";
},
hashEquals:function(hash1,hash2){
    if(hash1==null&&hash2==null){
        return true;
    }
    if(hash1==null||hash2==null){
        return false;
    }
    for(var key1 in hash1){
        if(hash2[key1]==null){
            return false;
        }
        if(hash1[key1]!=hash2[key1]){
            return false;
        }
    }
for(var key2 in hash2){
    if(hash1[key2]==null){
        return false;
    }
}
return true;
},
debug:function(obj){
    var info=[];
    if(typeof obj in["string","number"]){
        return obj;
    }else{
        for(property in obj){
            if(typeof obj[property]=="function"){
                info.push(property+' => function');
            }else{
                info.push(property+' => '+
                    (typeof obj[property]=="string"?'"'+obj[property]+'"':obj[property]));
            }
        }
        }
return("'"+obj+"' #"+typeof obj+": {"+info.join(", ")+"}");
},
truncatedText:function(origText,maxLength){
    if(origText==null){
        return"&nbsp;";
    }else if(origText.length>maxLength){
        return origText.substr(0,maxLength-2)+"...";
    }else{
        return origText;
    }
},
stripAccents:function(s){
    var stripped_string="";
    for(var i=0;i<s.length;i++){
        ch=s.charAt(i);
        stripped=Utils.characterMap[ch];
        if(stripped!=null){
            ch=stripped;
        }
        stripped_string+=ch;
    }
    return stripped_string;
}
};

Utils.isIE=(navigator.userAgent.toLowerCase().indexOf("msie")!=-1);
Utils.isOpera=(navigator.userAgent.toLowerCase().indexOf("opera")!=-1);
Utils.isSafari=(navigator.userAgent.toLowerCase().indexOf("safari")!=-1);
Utils.characterMap={
    '\u00c0':'A',
    '\u00c1':'A',
    '\u00c2':'A',
    '\u00c3':'A',
    '\u00c4':'A',
    '\u00c5':'A',
    '\u00c6':"AE",
    '\u00c7':'C',
    '\u00c8':'E',
    '\u00c9':'E',
    '\u00ca':'E',
    '\u00cb':'E',
    '\u00cc':'I',
    '\u00cd':'I',
    '\u00ce':'I',
    '\u00cf':'I',
    '\u00d1':'N',
    '\u00d2':'O',
    '\u00d3':'O',
    '\u00d4':'O',
    '\u00d5':'O',
    '\u00d6':'O',
    '\u00d8':'O',
    '\u00d9':'U',
    '\u00da':'U',
    '\u00db':'U',
    '\u00dc':'U',
    '\u00dd':'Y',
    '\u00e0':'a',
    '\u00e1':'a',
    '\u00e2':'a',
    '\u00e3':'a',
    '\u00e4':'a',
    '\u00e5':'a',
    '\u00e6':"ae",
    '\u00e7':'c',
    '\u00e8':'e',
    '\u00e9':'e',
    '\u00ea':'e',
    '\u00eb':'e',
    '\u00ec':'i',
    '\u00ed':'i',
    '\u00ee':'i',
    '\u00ef':'i',
    '\u00f1':'n',
    '\u00f2':'o',
    '\u00f3':'o',
    '\u00f4':'o',
    '\u00f5':'o',
    '\u00f6':'o',
    '\u00f8':'o',
    '\u00f9':'u',
    '\u00fa':'u',
    '\u00fb':'u',
    '\u00fc':'u',
    '\u00fd':'y',
    '\u00ff':'y'
};

Object.overrides=function(descendant,base){
    for(property in base.prototype){
        if(undefined==descendant.prototype[property]){
            descendant.prototype[property]=base.prototype[property];
        }else{
            descendant.prototype["super_"+property]=base.prototype[property];
        }
    }
    };

CruftyPopup=Class.create();
CruftyPopup.prototype={
    initialize:function(_popupElementName,_maskElementName){
        if(_popupElementName==undefined){
            _popupElementName='detailPane';
        }
        if(_maskElementName==undefined){
            _maskElementName='mask';
        }
        this.popupElement=$(_popupElementName);
        if(this.popupElement==null){
            this.popupElement=document.createElement('div');
            document.body.appendChild(this.popupElement);
            this.popupElement.id=_popupElementName;
            this.popupElement.style.display="none";
            this.popupElement.style.zindex="2000";
        }
        this.maskElement=$(_maskElementName);
        if(this.maskElement==null){
            this.maskElement=document.createElement('div');
            document.body.appendChild(this.maskElement);
            this.maskElement.id=_maskElementName;
            this.maskElement.style.width="100%";
            this.maskElement.style.height="100%";
            this.maskElement.style.position="absolute";
            this.maskElement.style.top="0px";
            this.maskElement.style.left="0px";
            this.maskElement.style.opacity=".50";
            this.maskElement.style.zindex="1000";
            this.maskElement.style.display="none";
        }
        this.visible=false;
    },
    maskAndPopup:function(){
        this.mask();
        this.popup();
    },
    maskAndPopupAndCenter:function(){
        this.center();
        this.maskAndPopup();
    },
    mask:function(){
        Element.show(this.maskElement);
    },
    popup:function(){
        Element.show(this.popupElement);
        this.visible=true;
    },
    popupAndCenter:function(){
        this.popup();
        this.center();
    },
    center:function(){
        Utils.centerInWindow(this.popupElement);
    },
    hide:function(){
        Element.hide(this.popupElement);
        Element.hide(this.maskElement);
        this.visible=false;
    }
};

Popup2=Class.create();
Popup2.prototype={
    initialize:function(popupElementId,options){
        this.popupElementId=popupElementId;
        this.options={
            placement:Placement.CENTER_IN_WINDOW,
            maskOpacity:0.5,
            maskElementId:"mask",
            maskZindex:1000,
            maskBackgroundColor:"#FFFFFF",
            popupZindex:2000,
            popupCssClass:"popup",
            scrollableElementIds:[]
        };

        Object.extend(this.options,options||{});
        this._initializePopupElement();
    },
    visible:function(){
        return this.popupElement.visible();
    },
    showPopup:function(){
        this.options.placement.placeElement(this.popupElement);
        Element.show(this.popupElement);
        Element.hideScrollbarsUnderElement(this.popupElement,this.options.scrollableElementIds);
        Element.reveal(this.popupElement);
    },
    showMask:function(){
        this._initializeMaskElement();
        Element.reveal(this.maskElement);
        Element.hideScrollbarsUnderElement(this.maskElement,this.options.scrollableElementIds);
    },
    showPopupWithMask:function(){
        this.showMask();
        this.showPopup();
    },
    hide:function(){
        Element.conceal(this.popupElement);
        Element.hide(this.popupElement);
        if(this.maskElement){
            Element.conceal(this.maskElement);
        }
        Element.unhideScrollbars(this.options.scrollableElementIds);
    },
    _initializeMaskElement:function(){
        this.maskElement=$(this.options.maskElementId);
        if(this.maskElement==null){
            this.maskElement=document.createElement('div');
            document.body.appendChild(this.maskElement);
            document.body.style.height="100%";
            this.maskElement.id=this.options.maskElementId;
            this.maskElement.style.backgroundColor=this.options.maskBackgroundColor;
            this.maskElement.style.width="100%";
            this.maskElement.style.height=document.documentElement.scrollHeight+"px";
            this.maskElement.style.position="absolute";
            this.maskElement.style.top="0px";
            this.maskElement.style.left="0px";
            Element.setOpacity(this.maskElement,this.options.maskOpacity);
            this.maskElement.style.zIndex=this.options.maskZindex.toString();
            Element.conceal(this.maskElement);
        }
    },
_initializePopupElement:function(){
    this.popupElement=$(this.popupElementId);
    if(this.popupElement==null){
        this.popupElement=document.createElement('div');
        document.body.appendChild(this.popupElement);
        this.popupElement.id=this.popupElementId;
    }
    this.popupElement.className=this.options.popupCssClass;
    this.popupElement.style.zIndex=this.options.popupZindex.toString();
    Element.hide(this.popupElement);
    Element.conceal(this.popupElement);
}
};

Placement=Class.create();
Placement.prototype={
    initialize:function(positionCode,options){
        this.positionCode=positionCode;
        this.options={
            spacingPixels:5,
            align:Placement.ALIGN_LEFT_EDGE,
            offsetHorizontal:0,
            offsetVertical:0
        };

        Object.extend(this.options,options||{});
    },
    placeElement:function(element){
        switch(this.positionCode){
            case Placement.CENTER_CODE:
                Utils.centerInWindow(element);
                break;
            case Placement.DO_NOT_POSITION_CODE:
                break;
            case Placement.BELOW_CODE:
                var relatedElement=$(this.options.relatedElementId);
                var relatedOffset=this.getOffsetFor(relatedElement);
                var relatedHeight=Utils.heightWithBorders(relatedElement);
                element.style.position="absolute";
                switch(this.options.align){
                case Placement.ALIGN_LEFT_EDGE:
                    element.style.left=(relatedOffset[0]+this.options.offsetHorizontal)+"px";
                    break;
                case Placement.ALIGN_RIGHT_EDGE:
                    var relatedWidth=Utils.widthWithBorders(relatedElement);
                    var elementWidth=Utils.widthWithBorders(element);
                    element.style.left=(relatedOffset[0]+relatedWidth-elementWidth+this.options.offsetHorizontal)+"px";
                    break;
                default:
                    throw new Error("Unknown alignment - "+this.options.align);
            }
            element.style.top=(relatedOffset[1]+relatedHeight+this.options.offsetVertical+this.options.spacingPixels)+"px";
                break;
            default:
                throw new Error("Unknown position code - "+this.positionCode);
        }
    },
getOffsetFor:function(element){
    return Position.cumulativeOffset(element);
}
};

Placement.CENTER_CODE="center";
Placement.DO_NOT_POSITION_CODE="noposition";
Placement.BELOW_CODE="below";
Placement.ALIGN_LEFT_EDGE="leftedge";
Placement.ALIGN_RIGHT_EDGE="rightedge";
Placement.CENTER_IN_WINDOW=new Placement(Placement.CENTER_CODE);
Placement.DO_NOT_POSITION=new Placement(Placement.DO_NOT_POSITION_CODE);
Placement.belowElement=function(elementId,options){
    options.relatedElementId=elementId;
    return new Placement(Placement.BELOW_CODE,options);
}
PopupWindow=Class.create();
PopupWindow.prototype={
    initialize:function(url){
        this.super_initialize();
        this.mask();
        new Ajax.Updater(this.popupElement,url,{
            asynchronous:true,
            evalScripts:true,
            method:'get',
            onComplete:this.popupAndCenter.bind(this)
            });
    }
};

Object.overrides(PopupWindow,CruftyPopup);
Confirm=Class.create();
Confirm.prototype={
    initialize:function(text,onComplete){
        this.onComplete=onComplete;
        this.super_initialize();
        this.mask();
        this.popupElement.innerHTML="";
        var popupTemplate=$('popup_window_template').cloneNode(true);
        Element.show(popupTemplate);
        this.popupElement.appendChild(popupTemplate);
        this.setHeader('confirm');
        this.setContents(text);
        this.confirmButton=this.createButton("/images/b_delete.png",this.clickConfirm.bind(this));
        this.cancelButton=this.createButton("/images/b_cancel.png",this.hide.bind(this));
        this.addButton(this.confirmButton);
        this.addButton(this.cancelButton);
        this.popup();
        this.center();
    },
    setHeader:function(headerText){
        this.popupHeaderElement=Element.descendantsWithClassName(this.popupElement,'module_box_title')[0];
        this.popupHeaderElement.innerHTML=headerText;
    },
    setContents:function(contents){
        this.popupContentsElement=Element.descendantsWithClassName(this.popupElement,'module_box_contents')[0];
        this.popupContentsElement.innerHTML=contents;
    },
    addButton:function(button){
        if(this.buttonAreaElement==null){
            this.buttonAreaElement=document.createElement("div");
            this.buttonAreaElement.className='button_area';
            this.popupContentsElement.appendChild(this.buttonAreaElement);
        }else{
            this.buttonAreaElement.appendChild(document.createTextNode(' '));
        }
        this.buttonAreaElement.appendChild(button);
    },
    createButton:function(buttonSrc,buttonFunction){
        var button=document.createElement("a");
        button.innerHTML="<img src='"+buttonSrc+"' />";
        button.onclick=buttonFunction;
        return button;
    },
    clickConfirm:function(){
        this.hide();
        this.onComplete();
    }
};

Object.overrides(Confirm,CruftyPopup);
DateUtils={
    SUNDAY:0,
    MONDAY:1,
    TUESDAY:2,
    WEDNESDAY:3,
    THURSDAY:4,
    FRIDAY:5,
    SATURDAY:6,
    systemTime:null,
    now:function(){
        if(this.systemTime!=null){
            return this.systemTime;
        }else{
            return new Date();
        }
    },
setTime:function(date){
    this.systemTime=date;
},
previousMonday:function(fromDate){
    var date=fromDate?new Date(fromDate):DateUtils.now();
    var dayOfWeek=date.getDay();
    if(dayOfWeek==DateUtils.SUNDAY){
        dayOfWeek=7;
    }
    var rightDayWrongTime=new Date(date-DateUtils.days(dayOfWeek-1));
    var monday=rightDayWrongTime.atMidnight();
    if(monday.getDay()!=1){
        throw"Monday isn't Monday";
    }
    return monday;
},
weeks:function(numberOfWeeks){
    return numberOfWeeks*DateUtils.days(7);
},
days:function(numberOfDays){
    return numberOfDays*60*60*24*1000;
}
};

Date.prototype.previousMonday=function(){
    return DateUtils.previousMonday(this);
};

Date.prototype.beginningOfWeekWithStartDay=function(weekStartDay){
    var daysAgo;
    if(weekStartDay<=this.getDay()){
        daysAgo=this.getDay()-weekStartDay;
    }else{
        daysAgo=7-(weekStartDay-this.getDay());
    }
    return this.plusDays(0-daysAgo).atMidnight();
};

Date.prototype.atMidnight=function(){
    return new Date(this.getFullYear(),this.getMonth(),this.getDate());
}
Date.prototype.elapsedDaysFrom=function(anotherDate){
    var timeDifference=this.getTime()-anotherDate.getTime();
    return Math.floor((timeDifference+3600000)/DateUtils.days(1));
};

Date.prototype.isBetween=function(start,finish){
    if(finish<start){
        var x=start;
        start=finish;
        finish=x;
    }
    if(this<start){
        return false;
    }
    if(start<finish&&this>=finish){
        return false;
    }
    return true;
};

Date.prototype.plusMsec=function(msec){
    return new Date(this.getTime()+msec);
};

Date.prototype.plusHours=function(hours){
    return new Date(this.getTime()+(hours*60*60*1000));
};

Date.prototype.plusDays=function(days){
    var newDate=new Date(this.getTime());
    newDate.setDate(newDate.getDate()+days);
    return newDate;
};

Date.prototype.plusWeeks=function(numWeeks){
    return this.plusDays(7*numWeeks);
};

Date.prototype.minusWeeks=function(numWeeks){
    return this.plusDays(-(7*numWeeks));
};

Date.equals=function(a,b){
    return((a==null&&b==null)||(a!=null&&b!=null&&a.getTime()==b.getTime()));
}
Date.equalsMDYYYY=function(a,b){
    return((a==null&&b==null)||(a!=null&&b!=null&&a.toMDYYYY()==b.toMDYYYY()));
}
Date.prototype.toMDYYYY=function(){
    var date_str=this.getMonth()+1;
    date_str+='/'+this.getDate();
    date_str+='/'+this.getFullYear();
    return date_str;
}
Date.prototype.isBefore=function(otherDate){
    return this.getTime()<otherDate.getTime();
}
Region=Class.create();
Region.prototype={
    initialize:function(top,right,bottom,left){
        this.top=top;
        this.right=right;
        this.bottom=bottom;
        this.left=left;
    }
}
Region.prototype.intersects=function(anotherRectangle){
    var verticalOverlap=false;
    var horizontalOverlap=false;
    if(this.top<=anotherRectangle.top&&this.bottom>=anotherRectangle.bottom){
        verticalOverlap=true;
    }
    if(this.top>=anotherRectangle.top&&this.top<=anotherRectangle.bottom){
        verticalOverlap=true;
    }
    if(this.bottom>=anotherRectangle.top&&this.bottom<=anotherRectangle.bottom){
        verticalOverlap=true;
    }
    if(this.left<=anotherRectangle.left&&this.right>=anotherRectangle.right){
        horizontalOverlap=true;
    }
    if(this.left>=anotherRectangle.left&&this.left<=anotherRectangle.right){
        horizontalOverlap=true;
    }
    if(this.right>=anotherRectangle.left&&this.right<=anotherRectangle.right){
        horizontalOverlap=true;
    }
    return verticalOverlap&&horizontalOverlap;
}
function funcname(f){
    var s=f.toString().match(/function (\w*)/)[1];
    if((s==null)||(s.length==0))return"anonymous";
    return s;
}
function stacktrace(){
    var s="";
    for(var a=arguments.caller;a!=null;a=a.caller){
        s+=funcname(a.callee)+"\n";
        if(a.caller==a)break;
    }
    return s;
}
function rand(max){
    return Math.floor(Math.random()*(max));
}
function shuffle(myArray){
    var i=myArray.length;
    if(i==0){
        return false;
    }
    while(--i){
        var j=rand(i+1);
        var tempi=myArray[i];
        var tempj=myArray[j];
        myArray[i]=tempj;
        myArray[j]=tempi;
    }
}
var Cookie={
    set:function(name,value,daysToExpire){
        var expire='';
        if(!daysToExpire)daysToExpire=365;
        var d=new Date();
        d.setTime(d.getTime()+(86400000*parseFloat(daysToExpire)));
        expire='expires='+d.toGMTString();
        var path="path=/"
        var cookieValue=escape(name)+'='+escape(value||'')+'; '+path+'; '+expire+';';
        return document.cookie=cookieValue;
    },
    get:function(name){
        var cookie=document.cookie.match(new RegExp('(^|;)\\s*'+escape(name)+'=([^;\\s]+)'));
        return(cookie?unescape(cookie[2]):null);
    },
    erase:function(name){
        var cookie=Cookie.get(name)||true;
        Cookie.set(name,'',-1);
        return cookie;
    },
    eraseAll:function(){
        var cookieString=""+document.cookie;
        var cookieArray=cookieString.split("; ");
        for(var i=0;i<cookieArray.length;++i)

        {
            var singleCookie=cookieArray[i].split("=");
            if(singleCookie.length!=2)
                continue;
            var name=unescape(singleCookie[0]);
            Cookie.erase(name);
        }
        },
accept:function(){
    if(typeof navigator.cookieEnabled=='boolean'){
        return navigator.cookieEnabled;
    }
    Cookie.set('_test','1');
    return(Cookie.erase('_test')==='1');
},
exists:function(cookieName){
    var cookieValue=Cookie.get(cookieName);
    if(!cookieValue)return false;
    return cookieValue.toString()!="";
}
};

function asCgiString(hash,model){
    var pairs=[];
    for(var key in hash){
        var name;
        if(model){
            name=model+"["+key+"]";
        }else{
            name=key;
        }
        pairs[pairs.length]=name+"="+encodeURIComponent(hash[key]);
    }
    return pairs.join("&");
};

function fromCgiString(cgiString){
    var hash={};

    var pairs=cgiString.split("&");
    for(var i=0;i<pairs.length;++i){
        var stuff=pairs[i].split("=");
        hash[stuff[0]]=decodeURIComponent(stuff[1]);
    }
    return hash;
}
function formToCgiHash(form){
    var params={};

    $A(form.elements).each(function(inputItem){
        if(inputItem.type=="submit"||inputItem.type=="button"){
            return;
        }
        if(inputItem.type=='checkbox'||inputItem.type=='radio'){
            if(inputItem.checked){
                if(params[inputItem.name]){
                    throw'Multiple checkboxes/radio buttons with the same name are not supported!';
                }
                params[inputItem.name]=inputItem.value;
            }
        }
    else{
        params[inputItem.name]=inputItem.value;
    }
    });
return params;
}
function addJavaScriptToHead(src){
    var e=document.createElement("script");
    e.type="text/javascript";
    e.src=src;
    document.getElementsByTagName("head")[0].appendChild(e);
}
ApiWebUi={
    execute:function(args){
        var apiToken=$('api_token').getValue();
        var exampleId=$('api_web_ui_selection').getValue();
        args.version=$('api_web_ui_version').getValue();
        $('api_web_ui_results').hide();
        if(apiToken==''){
            alert('API Token is required');
            return;
        }
        var url=ApiWebUi.buildUrl(exampleId,args);
        var ajaxParams={
            onComplete:ApiWebUi.showResult,
            method:args.method||'get',
            requestHeaders:['X-TrackerToken',apiToken]
            }
        if(args.storyXml){
            ajaxParams.contentType="application/xml";
            ajaxParams.postBody=args.storyXml;
        }
        $('api_curl_command').value=ApiWebUi.curlCommand(apiToken,url,ajaxParams);
        new Ajax.Request(url,ajaxParams);
    },
    showResult:function(response){
        var result=response.status+" "+response.statusText+'\r\n\r\n';
        result+=response.responseText;
        $('api_results').value=result;
        $('api_web_ui_results').show();
    },
    curlCommand:function(apiToken,url,ajaxParams){
        var host=document.location.protocol+'//'+document.location.host;
        var postData='';
        if(ajaxParams.postBody!=undefined){
            postData=' -d "'+ajaxParams.postBody+'" ';
        }
        var command='curl -H "X-TrackerToken: '+apiToken+'" -H "Content-type: application/xml" -X '+ajaxParams.method.toUpperCase()+' '+postData+host+url;
        return command;
    },
    buildUrl:function(exampleId,args){
        var prefix='/services/'+args.version+'/projects/';
        switch(exampleId){
            case'retrieve_token':
                return'/services/tokens/active?username='+encodeURIComponent(args.username)+'&password='+encodeURIComponent(args.password);
            case'stories_index_all':
                return prefix+args.projectId+'/stories';
            case'stories_show':
                return prefix+args.projectId+'/stories/'+args.storyId;
            case'stories_index_filtered':
                return prefix+args.projectId+'/stories?filter='+encodeURIComponent(args.filter);
            case'stories_create':
                return prefix+args.projectId+'/stories';
        }
    },
showExample:function(exampleId){
    $('api_web_ui_results').hide();
    var ApiWebUiDiv=$('api_web_ui');
    if(exampleId==''){
        ApiWebUiDiv.hide();
        return;
    }
    ApiWebUiDiv.show();
    ApiWebUiDiv.select('div').each(function(element){
        element.hide()
        });
    $(exampleId).show();
}
}
DateWithZone=Class.create();
DateWithZone.setOffset=function(offsetInSecs){
    DateWithZone.offsetInSecs=offsetInSecs;
};

DateWithZone.newDateFromString=function(dateString,timeZoneName){
    var unadjustedDate=new Date(dateString);
    var timeZoneInfo=TimeZoneInfo.forNameOrDefault(timeZoneName);
    if(timeZoneInfo==undefined){
        return unadjustedDate;
    }
    var timeZonePeriod=timeZoneInfo.timeZonePeriodFor(unadjustedDate);
    var utcOffsetInSecs=unadjustedDate.getTimezoneOffset()*60;
    if(timeZonePeriod==undefined||timeZonePeriod.utc_offset==-utcOffsetInSecs){
        return unadjustedDate;
    }else{
        var utc=unadjustedDate.getTime()-(utcOffsetInSecs*1000);
        return new Date(utc-(timeZonePeriod.utc_offset*1000));
    }
};

DateWithZone.prototype={
    initialize:function(date,timeZoneName){
        this.date=date||new Date();
        this.timeZoneInfo=TimeZoneInfo.forNameOrDefault(timeZoneName);
        this.timeZonePeriod=this.timeZoneInfo==null?null:this.timeZoneInfo.timeZonePeriodFor(this.date);
        this.adjustedDate=this._getAdjustedDate(this.date);
    },
    asDate:function(){
        return this.date;
    },
    _getAdjustedDate:function(date){
        var adjustedDate=null;
        var utcOffsetInSecs=date.getTimezoneOffset()*60;
        if(this.timeZonePeriod==undefined||this.timeZonePeriod.utc_offset==-utcOffsetInSecs){
            adjustedDate=date;
        }else{
            var utc=date.getTime()+(utcOffsetInSecs*1000);
            adjustedDate=new Date(utc+(this.timeZonePeriod.utc_offset*1000));
        }
        return adjustedDate;
    },
    asDateBeginningOfWeekWithStartDay:function(weekStartDay){
        return DateWithZone.newDateFromString(this.adjustedDate.beginningOfWeekWithStartDay(weekStartDay).toDateString(),this.getTimeZoneName());
    },
    asDisplayStringWithTimezone:function(){
        if(this.timeZonePeriod==null){
            return this.adjustedDate.asDisplayString();
        }else{
            return this.adjustedDate.asDisplayString()+" "+this.timeZonePeriod.abbreviation;
        }
    },
getTimeZoneName:function(){
    return this.timeZoneInfo?this.timeZoneInfo.name:null;
},
getTimezoneOffset:function(){
    return this.timeZonePeriod?-(this.timeZonePeriod.utc_offset/60):this.date.getTimezoneOffset();
}
};

var adjustedDateMethods=["getMilliseconds","getMinutes","getMonth","getSeconds","getHours","getYear","getShortMonthString","getMonthString","getShortDowString","getAmpmString","getMinutesString","getMinutesString","asDisplayStringWithTime","asDisplayString","asDisplayStringNoYear","asShortDisplayString","toMDYYYY","atMidnight"];
for(var i=0;i<adjustedDateMethods.length;i++){
    var methodName=adjustedDateMethods[i];
    function setFunction(){
        var theMethodName=methodName;
        DateWithZone.prototype[methodName]=function(){
            return this.adjustedDate[theMethodName].apply(this.adjustedDate,arguments);
        }
    };

setFunction();
}
TimeZoneInfo=Class.create();
TimeZoneInfo.registeredTimeZoneInfos={};

TimeZoneInfo.register=function(timezoneInfo){
    TimeZoneInfo.registeredTimeZoneInfos[timezoneInfo.name]=timezoneInfo;
};

TimeZoneInfo.forName=function(name){
    return TimeZoneInfo.registeredTimeZoneInfos[name];
};

TimeZoneInfo.forNameOrDefault=function(name){
    return TimeZoneInfo.forName(name)||TimeZoneInfo.userTimeZoneInfo;
};

TimeZoneInfo.setUserTimezone=function(timeZoneName){
    TimeZoneInfo.userTimeZoneInfo=TimeZoneInfo.forName(timeZoneName);
};

TimeZoneInfo.prototype={
    initialize:function(json){
        this.name=json.name;
        this.periods=json.periods;
    },
    timeZonePeriodFor:function(date){
        var date_milliseconds=date.getTime();
        var period;
        for(var i=0;i<this.periods.length;i++){
            period=this.periods[i];
            if((period.start==null&&period.finish==null)||date_milliseconds>=period.start&&date_milliseconds<=period.finish){
                return period;
            }
        }
    return null;
}
};

Date.SHORT_MONTH_NAMES=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
Date.MONTH_NAMES=["January","February","March","April","May","June","July","August","September","October","November","December"];
Date.SHORT_DOW_NAMES=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
Date.prototype.getShortMonthString=function(){
    return Date.SHORT_MONTH_NAMES[this.getMonth()];
};

Date.prototype.getMonthString=function(){
    return Date.MONTH_NAMES[this.getMonth()];
};

Date.prototype.getShortDowString=function(){
    return Date.SHORT_DOW_NAMES[this.getDay()];
};

Date.prototype.getAmpmString=function(){
    var hours=this.getHours();
    if(hours==0){
        return"12:"+this.getMinutesString()+"am";
    }else if(hours<12){
        return hours+":"+this.getMinutesString()+"am";
    }else if(hours==12){
        return"12:"+this.getMinutesString()+"pm";
    }else{
        return(hours-12)+":"+this.getMinutesString()+"pm";
    }
};

Date.prototype.asFriendlyDateString=function(){
    return this.getMonthString()+" "+this.getDate();
};

Date.prototype.getMinutesString=function(){
    var minutes=this.getMinutes();
    if(minutes==0){
        return"00";
    }else if(minutes<10){
        return"0"+minutes;
    }else{
        return minutes.toString();
    }
};

Date.prototype.getTimezoneName=function(){
    try{
        var timeZonePattern=/(\([\w\s]+\))$/;
        return this.toTimeString().match(timeZonePattern)[0];
    }catch(e){
        return"";
    }
};

Date.prototype.asDisplayStringWithTime=function(){
    return this.asDisplayString()+", "+this.getAmpmString();
};

Date.prototype.asDisplayString=function(){
    return this.asDisplayStringNoYear()+" "+this.getFullYear();
};

Date.prototype.asDisplayStringWithTimezone=function(){
    return this.asDisplayString()+" "+this.getTimezoneName();
};

Date.prototype.asDisplayStringNoYear=function(){
    return this.getDate()+" "+this.getShortMonthString();
};

Date.prototype.asShortDisplayString=function(){
    return this.asDisplayStringNoYear()+" "+this.getAmpmString();
};

Date.prototype.asShortDisplayStringWithTimezone=function(){
    return this.asShortDisplayString()+" "+this.getTimezoneName();
};

Date.prototype.atNoon=function(){
    return new Date(this.getFullYear(),this.getMonth(),this.getDate(),12);
};

Date.prototype.asDateWithZone=function(timeZoneName){
    return new DateWithZone(this,timeZoneName);
};

Date.prototype.minusSeconds=function(seconds){
    return new Date(this.getTime()-(seconds*1000));
};

Date.prototype.timeAgo=function(){
    var diff=(((new Date()).getTime()-this.getTime())/1000);
    var min_diff=Math.round(diff/60);
    return(diff<30&&"less than a minute ago"||diff<90&&"1 minute ago"||min_diff<45&&min_diff+" minutes ago"||min_diff<90&&"about 1 hour ago"||min_diff<1440&&"about "+Math.round(min_diff/60)+" hours ago"||min_diff<2880&&"1 day ago"||min_diff<43200&&Math.floor(min_diff/1440)+" days ago"||min_diff<86400&&"about 1 month ago"||min_diff<525600&&Math.floor(min_diff/43200)+" months ago"||min_diff<1051200&&"about 1 year ago"||min_diff>1051199&&"over "+Math.floor(min_diff/525600)+" years ago");
};

Date.naturalNameForRange=function(start,end){
    if(end>=new Date().plusHours(-2)){
        var diff=((new Date()).getTime()-start.getTime())/1000;
        var min_diff=Math.ceil(diff/60);
        return"in the last "+(diff<30&&"minute"||diff<90&&"minute"||min_diff<=45&&min_diff+" minutes"||min_diff<90&&"hour"||min_diff<1440&&+Math.round(min_diff/60)+" hours"||min_diff<2880&&"day"||min_diff>=2880&&Math.floor(min_diff/1440)+" days");
    }else{
        return end.timeAgo();
    }
};

function compute_image_path(relative_image_path){
    var asset_path="";
    if(relative_image_path.match('^http')){
        return relative_image_path;
    }
    if(window.app!=undefined&&app.cdnDomain){
        var cdnDomain=app.cdnDomain;
        if(app.isSecure()){
            cdnDomain=app.cdnSslDomain;
        }
        asset_path=document.location.protocol+"//"+cdnDomain.gsub('%d',(Math.abs(relative_image_path.hash())%app.numberOfCdnHosts));
    }
    return asset_path+relative_image_path;
}
function story_icon_path(image_name){
    return compute_image_path("/images/v7/application/stories_view/icons/"+image_name);
}
Element.newImageLink=function(options,eventHash){
    options.src=compute_image_path(options.src);
    var renderedElement=Element.create("img",options);
    for(var eventName in eventHash){
        YAHOO.util.Event.addListener(renderedElement,eventName,eventHash[eventName]);
    }
    if(options.hover_src!=undefined){
        options.hover_src=compute_image_path(options.hover_src);
        renderedElement.setAttribute('onmouseover',"this.src='"+options.hover_src+"'");
        renderedElement.setAttribute('onmouseout',"this.src='"+options.src+"'");
    }
    return renderedElement;
};

Element.newImage=function(src,options){
    var _options=options||{};

    _options.src=compute_image_path(src);
    return Element.create("img",_options);
};

YAHOO.util.Event.onDOMReady(function(){
    window.SimpleOverlay=Class.create({
        initialize:function(fn,options){
            this.fn=fn;
            this.options=options||{
                showCloseButton:false
            };

            this.bindify(this);
            this.overlay=new Element('div').setOpacity(0.0).addClassName('simple-overlay');
            this.setupElements();
            this.setupBehaviors(this);
        },
        bindify:function(){
            this.cancel=this.cancel.bind(this);
            this.keyCancel=this.keyCancel.bind(this);
            this.fixPosition=this.fixPosition.bind(this);
        },
        cancel:function(event){
            if(event){
                Event.extend(event).stop();
            }
            YAHOO.util.Event.removeListener(document,"keydown",this.keyCancel);
            YAHOO.util.Event.purgeElement(this.overlay,true);
            YAHOO.util.Event.purgeElement(this.message,true);
            if(this.onCancel){
                this.onCancel();
            }
            this.message.hide();
            this.overlay.hide();
            $$('.simple-overlay').invoke('remove');
            if(this.afterCancel){
                this.afterCancel();
            }
            if(this.options.removeOnCancel){
                this.message.remove();
            }
        },
    appendElement:function(element){
        $(document.body).insert(element);
        this.fixPosition();
    },
    fixPosition:function(){
        var topOffset=document.viewport.getScrollOffsets().top;
        this.overlay.setStyle({
            width:'100%',
            height:'100%',
            position:'absolute',
            left:'0px',
            top:(topOffset+'px')
            });
        if(this.options.anchor){
            this.message.clonePosition($(this.options.anchor),{
                setWidth:false,
                setHeight:false,
                offsetLeft:this.options.offsetLeft,
                offsetTop:this.options.offsetTop
                });
        }else{
            this.message.setStyle({
                top:((this.overlay.getHeight()-this.message.getHeight())/2+topOffset)+'px',
                left:((this.overlay.getWidth()-this.message.getWidth())/2)+'px',
                position:'absolute'
            });
        }
    },
    setupElements:function(){
        this.message=this.fn(this);
        var image_id=this.message.id+"_close_image";
        if(this.options.showCloseButton&&$(image_id)==null){
            var img_src='/images/v7/application/icons/close_button_overlay.png';
            if(this.options.closeButtonImage)
                img_src=this.options.closeButtonImage;
            var img=new Element('img',{
                src:img_src,
                'class':'close_button',
                "id":image_id
            });
            img.setAttribute('onmouseout',"this.src='"+img_src+"'");
            img.setAttribute('onmouseover',"this.src='"+img_src+"'");
            YAHOO.util.Event.addListener(img,'click',this.cancel.bind(this));
            this.message.appendChild(img);
        }
        this.appendElement(this.overlay);
        this.appendElement(this.message);
    },
    setupBehaviors:function(overlay){
        YAHOO.util.Event.addListener(window,"scroll",this.fixPosition);
        YAHOO.util.Event.addListener(window,"resize",this.fixPosition);
        YAHOO.util.Event.addListener(document,"keydown",this.keyCancel);
        YAHOO.util.Event.addListener(this.overlay,'click',this.cancel);
    },
    keyCancel:function(event){
        if((event.keyCode||event.charCode)==Event.KEY_ESC){
            this.cancel(event);
        }
    }
});
Object.extend(SimpleOverlay,{
    create:function(contentFn,options){
        return new SimpleOverlay(contentFn,options);
    }
});
});
DropdownMenu={
    register:function(name){
        document.observe("dom:loaded",function(){
            var buttonId=name+'_button',dropdownId=name+'_dropdown';
            $(buttonId).observe('click',function(event){
                var el=event.findElement('#'+buttonId);
                var already_open=el.hasClassName('active');
                DropdownMenu.deactivateAll();
                if(!already_open){
                    el.toggleClassName('active');
                    $(dropdownId).toggle();
                    $(dropdownId).toggleClassName('open');
                    document.observe('click',DropdownMenu.deactivateAll);
                }
                event.stop();
            });
        });
    },
    deactivateAll:function(){
        $$('.dropdown .active').invoke('removeClassName','active');
        $$('.dropdown .open').invoke('hide');
        $$('.dropdown .open').invoke('removeClassName','open');
        document.stopObserving('click',DropdownMenu.deactivateAll);
    }
};

AccountMembershipActions={
    addOverlayTemplate:null,
    setAdminCheckBoxState:function(){
        var msg="administrators and owners always have this permission";
        $$('.disable_for_admin').each(function(el){
            el.writeAttribute('title',msg)
            });
        $$('.disable_for_admin input').each(function(el){
            el.disabled=1;
            el.checked=1;
        });
    },
    setDefaultMemberCheckboxState:function(){
        $$('.disable_for_admin').each(function(el){
            el.writeAttribute('title',null)
            });
        $$('.disable_for_admin input').each(function(el){
            el.disabled=0;
            el.checked=0;
        });
    },
    setAppropriateCheckBoxState:function(role_dropdown){
        if(role_dropdown.getValue()=="Member"){
            AccountMembershipActions.setDefaultMemberCheckboxState();
            AccountMembershipActions.activeRoleFilters().each(function(role){
                var filter_checkbox_id="membership_"+role;
                if($(filter_checkbox_id)){
                    $(filter_checkbox_id).checked=true;
                }
            });
    }else{
        AccountMembershipActions.setAdminCheckBoxState();
    }
},
removeOverlays:function(){
    $('new_member_button').show();
    $$('.actions_wrapper a').invoke('show');
    $$('.popup_wrapper').invoke('setStyle',"position:static;");
    $$('.removable').invoke('remove');
    $$('.hideable').invoke('hide');
    YAHOO.util.Event.removeListener(document,"keydown",AccountMembershipActions.keyCancel);
},
setupAutocomplete:function(){
    var options={
        fullSearch:true,
        frequency:0,
        minChars:1
    };

    new Autocompleter.Local('members_for_lookup','members_for_lookup_auto_complete',members_for_lookup,options);
},
addedMember:function(memberString){
    members_for_lookup=members_for_lookup.reject(function(value){
        return value==memberString;
    });
},
removedMember:function(memberString){
    members_for_lookup.push(memberString);
    members_for_lookup=members_for_lookup.sortBy(function(s){
        return s.toLowerCase();
    });
},
showHeaderActionsOverlay:function(){
    if(AccountMembershipActions.addOverlayTemplate==null){
        AccountMembershipActions.addOverlayTemplate=$('add_overlay_container').innerHTML;
    }
    AccountMembershipActions.removeOverlays();
    var header_actions_link=$$('.header_actions a').first();
    var headerActions=$$('.header_actions').first();
    headerActions.setStyle('position:relative;');
    header_actions_link.hide();
    $('add_overlay_container').innerHTML=AccountMembershipActions.addOverlayTemplate;
    $('add_overlay_container').show();
    $('add_member_overlay').show();
    AccountMembershipActions.setupAutocomplete();
    $('members_for_lookup').focus();
    YAHOO.util.Event.addListener(document,"keydown",AccountMembershipActions.keyCancel);
},
showRowActionsOverlay:function(row_id,person_id){
    AccountMembershipActions.removeOverlays();
    var row_actions_link=$$('#'+row_id+' .actions_wrapper a').first();
    var actionsWrapper=$$('#'+row_id+' .actions_wrapper').first();
    actionsWrapper.setStyle("position:relative;");
    var html=''+'<span class="ama_overlay removable">Actions</span>'+'<div class="actions_overlay removable">'+'  <div class="inner">'+'    <ul class="action_tabs">'+'      <li id="change_roles_tab"><a href="javascript:void(0);" onclick="AccountMembershipActions.selectActionTab(\'change_roles_tab\')">Change Roles</a></li>'+'      <li id="add_to_projects_tab"><a href="javascript:void(0);" onclick="AccountMembershipActions.selectActionTab(\'add_to_projects_tab\')">Add to Projects</a></li>'+'      <li id="remove_member_tab"><a href="javascript:void(0);" onclick="AccountMembershipActions.selectActionTab(\'remove_member_tab\')">Remove Member</a></li>'+'    </ul>'+'    <div id="'+row_id+'_content" class ="content">'+'    <img style="margin: 64px 192px;" src="/images/projects/spinner_adding.gif" />'+'    </div>'+'  </div>'+'</div>';
    row_actions_link.hide();
    row_actions_link.insert({
        after:html
    });
    YAHOO.util.Event.addListener(document,"keydown",AccountMembershipActions.keyCancel);
    new Ajax.Request('memberships/actions?person_id='+person_id,{
        asynchronous:true,
        evalScripts:true,
        method:'get'
    });
},
selectActionTab:function(action_tab){
    $$('.actions_overlay .selected').invoke('removeClassName','selected');
    $$('#'+action_tab).first().addClassName("selected");
    $$('#'+action_tab+'_content').first().addClassName("selected");
},
keyCancel:function(event){
    if((event.keyCode||event.charCode)==Event.KEY_ESC){
        AccountMembershipActions.removeOverlays();
    }
},
filterRole:function(link,role){
    var elem=$(link).ancestors().first();
    if(role=='all'){
        $$('.member_type_filter li.active').invoke('removeClassName','active');
        elem.addClassName('active');
    }else{
        $$('.member_type_filter li.all').invoke('removeClassName','active');
        elem.toggleClassName('active');
        if(AccountMembershipActions.activeRoleFilters().size()==0){
            $$('.member_type_filter li.all').invoke('addClassName','active');
        }
    }
AccountMembershipActions.filter({});
},
activeRoleFilters:function(){
    return['admin','project_creator','timekeeper','time_enterer'].findAll(function(filter){
        var filter_elements=$$('.member_type_filter li.'+filter);
        return((filter_elements.length>0)&&filter_elements.first().hasClassName('active'));
    })
    },
filter:function(options){
    var filter_options=options||{};

    if(filter_options.url==null){
        filter_options.url="memberships/filter?"
        filter_options.url+=AccountMembershipActions.activeRoleFilters().map(function(filter){
            return"filter[roles][]="+filter;
        }).join("&");
        filter_options.url+="&filter[text]=";
        filter_options.url+=$('filter_text').value;
    }
    var image_html='<img src="/images/v7/application/icons/ajax-loader.gif"  style="position: absolute; left: 45%; top: 45px;" alt="Loading..." />';
    var members_element=$('members');
    members_element.setStyle({
        position:'relative'
    });
    members_element.childElements().invoke('setOpacity',"0.1");
    members_element.childElements().first().insert({
        before:image_html
    });
    new Ajax.Request(filter_options.url,{
        asynchronous:true,
        evalScripts:true,
        method:'get'
    });
}
};

document.observe("dom:loaded",function(){
    var container=$(document.body);
    if(container&&container.hasClassName('accounts_pages')&&container.hasClassName('memberships_page')){
        container.observe('click',function(e){
            var el=e.element();
            if(el.match('.pagination a')){
                AccountMembershipActions.filter({
                    url:el.href
                    });
                e.stop();
            }
        })
    }
});
AccountBillingActions={
    validate_coupon:function(){
        var coupon_code=$$('input[name=coupon_code]').first().value;
        var plan_id=$$('input[name=plan_id]').first().value;
        var account_id=document.location.href.match(/accounts\/([0-9]+)/)[1];
        new Ajax.Request('/accounts/'+account_id+'/subscription/validate_coupon?coupon_code='+coupon_code+'&plan_id='+plan_id,{
            asynchronous:true,
            evalScripts:true,
            method:'get'
        });
    },
    enable_available_plan_buttons:function(){
        $$(".button input.enabled").each(function(value,index){
            value.enable();
        });
    }
};

ProjectPopup={
    ajaxBefore:function(popupId){
        var image_html='<img src="/images/v7/application/icons/ajax-loader.gif"  id="popup_spinner" style="position: absolute; left: 45%; top: 30%;" alt="Loading..." />';
        $$('#'+popupId+' .add_project_flash').invoke('hide');
        $$('#'+popupId+' label.infield').invoke('hide');
        var popup_content=$$('#'+popupId+' .popup_content').first();
        var submit_buttons=$$('#'+popupId+' input[type="submit"]');
        submit_buttons.invoke('disable');
        submit_buttons.invoke('addClassName','disabled');
        popup_content.setStyle({
            position:'relative'
        });
        popup_content.childElements().invoke('setOpacity',0.2);
        popup_content.childElements().first().insert({
            before:image_html
        });
    },
    ajaxFailure:function(popupId){
        var popup_content=$$('#'+popupId+' .popup_content').first();
        var submit_buttons=$$('#'+popupId+' input[type="submit"]');
        submit_buttons.invoke('enable');
        submit_buttons.invoke('removeClassName','disabled');
        popup_content.childElements().invoke('setOpacity',1);
        popup_content.setStyle({
            position:'static'
        }).show();
        $$('#'+popupId+' label.infield').invoke('show');
        $('popup_spinner').remove();
    }
};

ProjectPointScaleActions={
    originalValue:null,
    initialize:function(){
        j('select.point_scale').bind('change',ProjectPointScaleActions.onChange);
        ProjectPointScaleActions.originalValue=j('select.point_scale').val();
        ProjectPointScaleActions.checkCustom();
    },
    checkCustom:function(){
        if(j('select.point_scale').val()=='custom'){
            j('input.#project_point_scale').closest('td').find('span').show();
            j('input.#project_point_scale').show().focus();
            return true;
        }else{
            j('input.#project_point_scale').closest('td').find('span').hide();
            j('input.#project_point_scale').hide();
            return false;
        }
    },
onChange:function(){
    if(!ProjectPointScaleActions.checkCustom()){
        j('input.#project_point_scale').val(j(this).val());
    }
    j(this).closest('form').bind('submit',ProjectPointScaleActions.onSubmit);
},
onSubmit:function(e){
    var newValue=j('select.point_scale').val();
    if(ProjectPointScaleActions.originalValue!=newValue){
        if(newValue=='custom'){
            if(!confirm("You are changing your project's point scale to a custom one.  You will not be able to change "+"back to one of the standard point scales later.")){
                e.stopPropagation();
                e.stopImmediatePropagation();
                e.preventDefault();
            }
        }
    else{
        if(!confirm("You are changing the project's point scale. This will change estimates on stories and may "+"not be reversible. Are you sure you want to do this?")){
            e.stopPropagation();
            e.stopImmediatePropagation();
            e.preventDefault();
        }
    }
}
}
};
(function($){
    $(function(){
        $(document).trigger('document:ready');
    });
    var base={
        namespace:function namespace(path){
            var context=window;
            var parts=path.split('.');
            function define(){
                var definition={
                    dict:{},
                    each:function each(callback){
                        $.each(this.dict,function(name,entry){
                            callback.call(entry,name,entry);
                        });
                    },
                    find:function find(name){
                        return this.dict[name];
                    }
                };

            var add=function add(name){
                this.dict[name]={
                    name:name
                };

                return this.dict[name];
            };

            return $.extend($.proxy(add,definition),definition);
        }
        $.each(parts,function(i,part){
            context[part]=context[part]||define();
            context=context[part];
        });
        return context;
    }
};

$.extend(window,base);
})(jQuery);
(function($,ns){
    $(document).bind('document:ready',function(e){
        ns.each(function(name,view){
            if(should.activate(view)){
                view.initialize();
            }
        });
    });
$.extend(ns,{
    Base:function Base(){}
});
$.extend(ns.Base.prototype,{
    config:{},
    initialize:function initialize(){}
});
var should={
    activate:function activate(view){
        return(undefined===view.config.binding||0!==$(view.config.binding).length);
    }
};

})(jQuery,namespace('com.pivotal.time.views'));
(function($,ns){
    $.extend(ns('time_alerts#show'),new ns.Base(),{
        config:{
            binding:'body.timeshifts_page'
        },
        initialize:function initialize(){
            this.calendar=internal.calendar.build(this);
            $('select#shift_person_id').live('change',internal.events.onChange_person);
        }
    });
var internal={
    calendar:{
        build:function build(view){
            if($('#alertsCal').length==0){
                return null;
            }
            var calendar=new YAHOO.widget.Calendar('alertsCal');
            var missingShiftLinks=$('div#shift_alerts li.shift_alert.missing   > a[data-shift-date]');
            var duplicateShiftLinks=$('div#shift_alerts li.shift_alert.duplicate > a[data-shift-date]');
            var allShiftLinks=$.merge(missingShiftLinks,duplicateShiftLinks);
            function addAlertToCalendar(date){
                calendar.addRenderer(date,calendar.renderCellStyleHighlight3);
            }
            function onSelect(eventType,calendarItem){
                var dateString=dateFromCalendarItem(calendarItem);
                var matching=allShiftLinks.filter('[data-shift-date="'+dateString+'"]');
                var href=matching.attr('href');
                if(href){
                    location.href=href;
                }
                return false;
            }
            function dateFromCalendarItem(calendarItem){
                var data=calendarItem[0][0];
                return data[1]+"/"+data[2]+"/"+data[0];
            }
            $.each(allShiftLinks,function(){
                addAlertToCalendar($(this).attr('data-shift-date'))
                });
            calendar.selectEvent.subscribe(onSelect,view,true);
            calendar.render();
            return calendar;
        }
    },
events:{
    onChange_person:function onChange_person(e){
        var element=$(this);
        var alerts=$('div#shift_alerts');
        alerts.toggle(alerts.attr('data-person')===element.val());
    }
}
};

})(jQuery,namespace('com.pivotal.time.views'));
    http:if(j.browser.msie){
    j(document).ready(function(){
        j('select').each(function(){
            this.rejectDisabled=function(){
                if(this.options[this.selectedIndex].disabled){
                    if(this.lastSelectedIndex){
                        this.selectedIndex=this.lastSelectedIndex;
                    }else{
                        var first_enabled=$(this).children('option:not(:disabled)').get(0);
                        this.selectedIndex=first_enabled?first_enabled.index:0;
                    }
                }else{
                this.lastSelectedIndex=this.selectedIndex;
            }
        };

        this.rejectDisabled();
        this.lastSelectedIndex=this.selectedIndex;
        j(this).children('option[disabled]').each(function(){
            j(this).css('color','#CCC');
        });
        j(this).change(function(){
            this.rejectDisabled();
        });
    });
    });
}