"use strict";(()=>{function M1(c){(document.readyState==="complete"||document.readyState==="interactive")&&c(),document.addEventListener("DOMContentLoaded",c)}function g1(c,a){(a==null||a>c.length)&&(a=c.length);for(var l=0,e=Array(a);l<a;l++)e[l]=c[l];return e}function q3(c){if(Array.isArray(c))return c}function E3(c){if(Array.isArray(c))return g1(c)}function U3(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function X1(c,a){for(var l=0;l<a.length;l++){var e=a[l];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,k2(e.key),e)}}function G3(c,a,l){return a&&X1(c.prototype,a),l&&X1(c,l),Object.defineProperty(c,"prototype",{writable:!1}),c}function c1(c,a){var l=typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(!l){if(Array.isArray(c)||(l=H1(c))||a&&c&&typeof c.length=="number"){l&&(c=l);var e=0,r=function(){};return{s:r,n:function(){return e>=c.length?{done:!0}:{done:!1,value:c[e++]}},e:function(n){throw n},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var f,i=!0,s=!1;return{s:function(){l=l.call(c)},n:function(){var n=l.next();return i=n.done,n},e:function(n){s=!0,f=n},f:function(){try{i||l.return==null||l.return()}finally{if(s)throw f}}}}function p(c,a,l){return(a=k2(a))in c?Object.defineProperty(c,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):c[a]=l,c}function I3(c){if(typeof Symbol!="undefined"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function W3(c,a){var l=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(l!=null){var e,r,f,i,s=[],n=!0,t=!1;try{if(f=(l=l.call(c)).next,a===0){if(Object(l)!==l)return;n=!1}else for(;!(n=(e=f.call(l)).done)&&(s.push(e.value),s.length!==a);n=!0);}catch(M){t=!0,r=M}finally{try{if(!n&&l.return!=null&&(i=l.return(),Object(i)!==i))return}finally{if(t)throw r}}return s}}function O3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y1(c,a){var l=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);a&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),l.push.apply(l,e)}return l}function o(c){for(var a=1;a<arguments.length;a++){var l=arguments[a]!=null?arguments[a]:{};a%2?Y1(Object(l),!0).forEach(function(e){p(c,e,l[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(l)):Y1(Object(l)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(l,e))})}return c}function f1(c,a){return q3(c)||W3(c,a)||H1(c,a)||O3()}function y(c){return E3(c)||I3(c)||H1(c)||j3()}function V3(c,a){if(typeof c!="object"||!c)return c;var l=c[Symbol.toPrimitive];if(l!==void 0){var e=l.call(c,a||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(c)}function k2(c){var a=V3(c,"string");return typeof a=="symbol"?a:a+""}function e1(c){"@babel/helpers - typeof";return e1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},e1(c)}function H1(c,a){if(c){if(typeof c=="string")return g1(c,a);var l={}.toString.call(c).slice(8,-1);return l==="Object"&&c.constructor&&(l=c.constructor.name),l==="Map"||l==="Set"?Array.from(c):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?g1(c,a):void 0}}var K1=function(){},q1={},y2={},w2=null,A2={mark:K1,measure:K1};try{typeof window!="undefined"&&(q1=window),typeof document!="undefined"&&(y2=document),typeof MutationObserver!="undefined"&&(w2=MutationObserver),typeof performance!="undefined"&&(A2=performance)}catch(c){}var _3=q1.navigator||{},J1=_3.userAgent,Q1=J1===void 0?"":J1,D=q1,v=y2,Z1=w2,Q=A2,c5=!!D.document,T=!!v.documentElement&&!!v.head&&typeof v.addEventListener=="function"&&typeof v.createElement=="function",P2=~Q1.indexOf("MSIE")||~Q1.indexOf("Trident/"),p1,$3=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,X3=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,F2={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Y3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},T2=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],g="classic",Y="duotone",B2="sharp",D2="sharp-duotone",R2="chisel",H2="etch",q2="graphite",E2="jelly",U2="jelly-duo",G2="jelly-fill",I2="notdog",W2="notdog-duo",O2="slab",j2="slab-press",V2="thumbprint",_2="utility",$2="utility-duo",X2="utility-fill",Y2="whiteboard",K3="Classic",J3="Duotone",Q3="Sharp",Z3="Sharp Duotone",c4="Chisel",a4="Etch",l4="Graphite",e4="Jelly",r4="Jelly Duo",i4="Jelly Fill",f4="Notdog",s4="Notdog Duo",n4="Slab",o4="Slab Press",t4="Thumbprint",z4="Utility",m4="Utility Duo",M4="Utility Fill",p4="Whiteboard",K2=[g,Y,B2,D2,R2,H2,q2,E2,U2,G2,I2,W2,O2,j2,V2,_2,$2,X2,Y2],a5=(p1={},p(p(p(p(p(p(p(p(p(p(p1,g,K3),Y,J3),B2,Q3),D2,Z3),R2,c4),H2,a4),q2,l4),E2,e4),U2,r4),G2,i4),p(p(p(p(p(p(p(p(p(p1,I2,f4),W2,s4),O2,n4),j2,o4),V2,t4),_2,z4),$2,m4),X2,M4),Y2,p4)),L4={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},u4={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},v4=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),d4={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},J2=["fak","fa-kit","fakd","fa-kit-duotone"],c2={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},C4=["kit"],h4="kit",g4="kit-duotone",x4="Kit",b4="Kit Duotone",l5=p(p({},h4,x4),g4,b4),N4={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},S4={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},k4={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},a2={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},L1,Z={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},y4=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],w4="classic",A4="duotone",P4="sharp",F4="sharp-duotone",T4="chisel",B4="etch",D4="graphite",R4="jelly",H4="jelly-duo",q4="jelly-fill",E4="notdog",U4="notdog-duo",G4="slab",I4="slab-press",W4="thumbprint",O4="utility",j4="utility-duo",V4="utility-fill",_4="whiteboard",$4="Classic",X4="Duotone",Y4="Sharp",K4="Sharp Duotone",J4="Chisel",Q4="Etch",Z4="Graphite",c0="Jelly",a0="Jelly Duo",l0="Jelly Fill",e0="Notdog",r0="Notdog Duo",i0="Slab",f0="Slab Press",s0="Thumbprint",n0="Utility",o0="Utility Duo",t0="Utility Fill",z0="Whiteboard",e5=(L1={},p(p(p(p(p(p(p(p(p(p(L1,w4,$4),A4,X4),P4,Y4),F4,K4),T4,J4),B4,Q4),D4,Z4),R4,c0),H4,a0),q4,l0),p(p(p(p(p(p(p(p(p(L1,E4,e0),U4,r0),G4,i0),I4,f0),W4,s0),O4,n0),j4,o0),V4,t0),_4,z0)),m0="kit",M0="kit-duotone",p0="Kit",L0="Kit Duotone",r5=p(p({},m0,p0),M0,L0),u0={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},v0={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},x1={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},d0=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Q2=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(y4,d0),C0=["solid","regular","light","thin","duotone","brands","semibold"],Z2=[1,2,3,4,5,6,7,8,9,10],h0=Z2.concat([11,12,13,14,15,16,17,18,19,20]),g0=["aw","fw","pull-left","pull-right"],x0=[].concat(y(Object.keys(v0)),C0,g0,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Z.GROUP,Z.SWAP_OPACITY,Z.PRIMARY,Z.SECONDARY]).concat(Z2.map(function(c){return"".concat(c,"x")})).concat(h0.map(function(c){return"w-".concat(c)})),b0={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},P="___FONT_AWESOME___",b1=16,c3="fa",a3="svg-inline--fa",E="data-fa-i2svg",N1="data-fa-pseudo-element",N0="data-fa-pseudo-element-pending",E1="data-prefix",U1="data-icon",l2="fontawesome-i2svg",S0="async",k0=["HTML","HEAD","STYLE","SCRIPT"],l3=["::before","::after",":before",":after"],e3=(function(){try{return!0}catch(c){return!1}})();function K(c){return new Proxy(c,{get:function(l,e){return e in l?l[e]:l[g]}})}var r3=o({},F2);r3[g]=o(o(o(o({},{"fa-duotone":"duotone"}),F2[g]),c2.kit),c2["kit-duotone"]);var y0=K(r3),S1=o({},d4);S1[g]=o(o(o(o({},{duotone:"fad"}),S1[g]),a2.kit),a2["kit-duotone"]);var e2=K(S1),k1=o({},x1);k1[g]=o(o({},k1[g]),k4.kit);var G1=K(k1),y1=o({},u0);y1[g]=o(o({},y1[g]),N4.kit);var i5=K(y1),w0=$3,i3="fa-layers-text",A0=X3,P0=o({},L4),f5=K(P0),F0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],u1=Y3,T0=[].concat(y(C4),y(x0)),_=D.FontAwesomeConfig||{};function B0(c){var a=v.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function D0(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}v&&typeof v.querySelector=="function"&&(r2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],r2.forEach(function(c){var a=f1(c,2),l=a[0],e=a[1],r=D0(B0(l));r!=null&&(_[e]=r)}));var r2,f3={styleDefault:"solid",familyDefault:g,cssPrefix:c3,replacementClass:a3,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};_.familyPrefix&&(_.cssPrefix=_.familyPrefix);var O=o(o({},f3),_);O.autoReplaceSvg||(O.observeMutations=!1);var m={};Object.keys(f3).forEach(function(c){Object.defineProperty(m,c,{enumerable:!0,set:function(l){O[c]=l,$.forEach(function(e){return e(m)})},get:function(){return O[c]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(a){O.cssPrefix=a,$.forEach(function(l){return l(m)})},get:function(){return O.cssPrefix}});D.FontAwesomeConfig=m;var $=[];function R0(c){return $.push(c),function(){$.splice($.indexOf(c),1)}}var B=b1,w={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function H0(c){if(!(!c||!T)){var a=v.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var l=v.head.childNodes,e=null,r=l.length-1;r>-1;r--){var f=l[r],i=(f.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(e=f)}return v.head.insertBefore(a,e),c}}var q0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function i2(){for(var c=12,a="";c-- >0;)a+=q0[Math.random()*62|0];return a}function j(c){for(var a=[],l=(c||[]).length>>>0;l--;)a[l]=c[l];return a}function I1(c){return c.classList?j(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function s3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function E0(c){return Object.keys(c||{}).reduce(function(a,l){return a+"".concat(l,'="').concat(s3(c[l]),'" ')},"").trim()}function s1(c){return Object.keys(c||{}).reduce(function(a,l){return a+"".concat(l,": ").concat(c[l].trim(),";")},"")}function W1(c){return c.size!==w.size||c.x!==w.x||c.y!==w.y||c.rotate!==w.rotate||c.flipX||c.flipY}function U0(c){var a=c.transform,l=c.containerWidth,e=c.iconWidth,r={transform:"translate(".concat(l/2," 256)")},f="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),s="rotate(".concat(a.rotate," 0 0)"),n={transform:"".concat(f," ").concat(i," ").concat(s)},t={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:n,path:t}}function G0(c){var a=c.transform,l=c.width,e=l===void 0?b1:l,r=c.height,f=r===void 0?b1:r,i=c.startCentered,s=i===void 0?!1:i,n="";return s&&P2?n+="translate(".concat(a.x/B-e/2,"em, ").concat(a.y/B-f/2,"em) "):s?n+="translate(calc(-50% + ".concat(a.x/B,"em), calc(-50% + ").concat(a.y/B,"em)) "):n+="translate(".concat(a.x/B,"em, ").concat(a.y/B,"em) "),n+="scale(".concat(a.size/B*(a.flipX?-1:1),", ").concat(a.size/B*(a.flipY?-1:1),") "),n+="rotate(".concat(a.rotate,"deg) "),n}var I0=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function n3(){var c=c3,a=a3,l=m.cssPrefix,e=m.replacementClass,r=I0;if(l!==c||e!==a){var f=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),s=new RegExp("\\.".concat(a),"g");r=r.replace(f,".".concat(l,"-")).replace(i,"--".concat(l,"-")).replace(s,".".concat(e))}return r}var f2=!1;function v1(){m.autoAddCss&&!f2&&(H0(n3()),f2=!0)}var W0={mixout:function(){return{dom:{css:n3,insertCss:v1}}},hooks:function(){return{beforeDOMElementCreation:function(){v1()},beforeI2svg:function(){v1()}}}},F=D||{};F[P]||(F[P]={});F[P].styles||(F[P].styles={});F[P].hooks||(F[P].hooks={});F[P].shims||(F[P].shims=[]);var k=F[P],o3=[],t3=function(){v.removeEventListener("DOMContentLoaded",t3),r1=1,o3.map(function(a){return a()})},r1=!1;T&&(r1=(v.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(v.readyState),r1||v.addEventListener("DOMContentLoaded",t3));function O0(c){T&&(r1?setTimeout(c,0):o3.push(c))}function J(c){var a=c.tag,l=c.attributes,e=l===void 0?{}:l,r=c.children,f=r===void 0?[]:r;return typeof c=="string"?s3(c):"<".concat(a," ").concat(E0(e),">").concat(f.map(J).join(""),"</").concat(a,">")}function s2(c,a,l){if(c&&c[a]&&c[a][l])return{prefix:a,iconName:l,icon:c[a][l]}}var j0=function(a,l){return function(e,r,f,i){return a.call(l,e,r,f,i)}},d1=function(a,l,e,r){var f=Object.keys(a),i=f.length,s=r!==void 0?j0(l,r):l,n,t,M;for(e===void 0?(n=1,M=a[f[0]]):(n=0,M=e);n<i;n++)t=f[n],M=s(M,a[t],t,a);return M};function z3(c){return y(c).length!==1?null:c.codePointAt(0).toString(16)}function n2(c){return Object.keys(c).reduce(function(a,l){var e=c[l],r=!!e.icon;return r?a[e.iconName]=e.icon:a[l]=e,a},{})}function w1(c,a){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=l.skipHooks,r=e===void 0?!1:e,f=n2(a);typeof k.hooks.addPack=="function"&&!r?k.hooks.addPack(c,n2(a)):k.styles[c]=o(o({},k.styles[c]||{}),f),c==="fas"&&w1("fa",a)}var X=k.styles,V0=k.shims,m3=Object.keys(G1),_0=m3.reduce(function(c,a){return c[a]=Object.keys(G1[a]),c},{}),O1=null,M3={},p3={},L3={},u3={},v3={};function $0(c){return~T0.indexOf(c)}function X0(c,a){var l=a.split("-"),e=l[0],r=l.slice(1).join("-");return e===c&&r!==""&&!$0(r)?r:null}var d3=function(){var a=function(f){return d1(X,function(i,s,n){return i[n]=d1(s,f,{}),i},{})};M3=a(function(r,f,i){if(f[3]&&(r[f[3]]=i),f[2]){var s=f[2].filter(function(n){return typeof n=="number"});s.forEach(function(n){r[n.toString(16)]=i})}return r}),p3=a(function(r,f,i){if(r[i]=i,f[2]){var s=f[2].filter(function(n){return typeof n=="string"});s.forEach(function(n){r[n]=i})}return r}),v3=a(function(r,f,i){var s=f[2];return r[i]=i,s.forEach(function(n){r[n]=i}),r});var l="far"in X||m.autoFetchSvg,e=d1(V0,function(r,f){var i=f[0],s=f[1],n=f[2];return s==="far"&&!l&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:n}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:n}),r},{names:{},unicodes:{}});L3=e.names,u3=e.unicodes,O1=n1(m.styleDefault,{family:m.familyDefault})};R0(function(c){O1=n1(c.styleDefault,{family:m.familyDefault})});d3();function j1(c,a){return(M3[c]||{})[a]}function Y0(c,a){return(p3[c]||{})[a]}function q(c,a){return(v3[c]||{})[a]}function C3(c){return L3[c]||{prefix:null,iconName:null}}function K0(c){var a=u3[c],l=j1("fas",c);return a||(l?{prefix:"fas",iconName:l}:null)||{prefix:null,iconName:null}}function R(){return O1}var h3=function(){return{prefix:null,iconName:null,rest:[]}};function J0(c){var a=g,l=m3.reduce(function(e,r){return e[r]="".concat(m.cssPrefix,"-").concat(r),e},{});return K2.forEach(function(e){(c.includes(l[e])||c.some(function(r){return _0[e].includes(r)}))&&(a=e)}),a}function n1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.family,e=l===void 0?g:l,r=y0[e][c];if(e===Y&&!c)return"fad";var f=e2[e][c]||e2[e][r],i=c in k.styles?c:null,s=f||i||null;return s}function Q0(c){var a=[],l=null;return c.forEach(function(e){var r=X0(m.cssPrefix,e);r?l=r:e&&a.push(e)}),{iconName:l,rest:a}}function o2(c){return c.sort().filter(function(a,l,e){return e.indexOf(a)===l})}var t2=Q2.concat(J2);function o1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.skipLookups,e=l===void 0?!1:l,r=null,f=o2(c.filter(function(L){return t2.includes(L)})),i=o2(c.filter(function(L){return!t2.includes(L)})),s=f.filter(function(L){return r=L,!T2.includes(L)}),n=f1(s,1),t=n[0],M=t===void 0?null:t,z=J0(f),u=o(o({},Q0(i)),{},{prefix:n1(M,{family:z})});return o(o(o({},u),l6({values:c,family:z,styles:X,config:m,canonical:u,givenPrefix:r})),Z0(e,r,u))}function Z0(c,a,l){var e=l.prefix,r=l.iconName;if(c||!e||!r)return{prefix:e,iconName:r};var f=a==="fa"?C3(r):{},i=q(e,r);return r=f.iconName||i||r,e=f.prefix||e,e==="far"&&!X.far&&X.fas&&!m.autoFetchSvg&&(e="fas"),{prefix:e,iconName:r}}var c6=K2.filter(function(c){return c!==g||c!==Y}),a6=Object.keys(x1).filter(function(c){return c!==g}).map(function(c){return Object.keys(x1[c])}).flat();function l6(c){var a=c.values,l=c.family,e=c.canonical,r=c.givenPrefix,f=r===void 0?"":r,i=c.styles,s=i===void 0?{}:i,n=c.config,t=n===void 0?{}:n,M=l===Y,z=a.includes("fa-duotone")||a.includes("fad"),u=t.familyDefault==="duotone",L=e.prefix==="fad"||e.prefix==="fa-duotone";if(!M&&(z||u||L)&&(e.prefix="fad"),(a.includes("fa-brands")||a.includes("fab"))&&(e.prefix="fab"),!e.prefix&&c6.includes(l)){var C=Object.keys(s).find(function(x){return a6.includes(x)});if(C||t.autoFetchSvg){var d=v4.get(l).defaultShortPrefixId;e.prefix=d,e.iconName=q(e.prefix,e.iconName)||e.iconName}}return(e.prefix==="fa"||f==="fa")&&(e.prefix=R()||"fas"),e}var e6=(function(){function c(){U3(this,c),this.definitions={}}return G3(c,[{key:"add",value:function(){for(var l=this,e=arguments.length,r=new Array(e),f=0;f<e;f++)r[f]=arguments[f];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){l.definitions[s]=o(o({},l.definitions[s]||{}),i[s]),w1(s,i[s]);var n=G1[g][s];n&&w1(n,i[s]),d3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(l,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(f){var i=r[f],s=i.prefix,n=i.iconName,t=i.icon,M=t[2];l[s]||(l[s]={}),M.length>0&&M.forEach(function(z){typeof z=="string"&&(l[s][z]=t)}),l[s][n]=t}),l}}])})(),z2=[],I={},W={},r6=Object.keys(W);function i6(c,a){var l=a.mixoutsTo;return z2=c,I={},Object.keys(W).forEach(function(e){r6.indexOf(e)===-1&&delete W[e]}),z2.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(l[i]=r[i]),e1(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){l[i]||(l[i]={}),l[i][s]=r[i][s]})}),e.hooks){var f=e.hooks();Object.keys(f).forEach(function(i){I[i]||(I[i]=[]),I[i].push(f[i])})}e.provides&&e.provides(W)}),l}function A1(c,a){for(var l=arguments.length,e=new Array(l>2?l-2:0),r=2;r<l;r++)e[r-2]=arguments[r];var f=I[c]||[];return f.forEach(function(i){a=i.apply(null,[a].concat(e))}),a}function U(c){for(var a=arguments.length,l=new Array(a>1?a-1:0),e=1;e<a;e++)l[e-1]=arguments[e];var r=I[c]||[];r.forEach(function(f){f.apply(null,l)})}function H(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return W[c]?W[c].apply(null,a):void 0}function P1(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,l=c.prefix||R();if(a)return a=q(l,a)||a,s2(g3.definitions,l,a)||s2(k.styles,l,a)}var g3=new e6,f6=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,U("noAuto")},s6={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return T?(U("beforeI2svg",a),H("pseudoElements2svg",a),H("i2svg",a)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=a.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,O0(function(){o6({autoReplaceSvgRoot:l}),U("watch",a)})}},n6={icon:function(a){if(a===null)return null;if(e1(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:q(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var l=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=n1(a[0]);return{prefix:e,iconName:q(e,l)||l}}if(typeof a=="string"&&(a.indexOf("".concat(m.cssPrefix,"-"))>-1||a.match(w0))){var r=o1(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||R(),iconName:q(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var f=R();return{prefix:f,iconName:q(f,a)||a}}}},N={noAuto:f6,config:m,dom:s6,parse:n6,library:g3,findIconDefinition:P1,toHtml:J},o6=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=a.autoReplaceSvgRoot,e=l===void 0?v:l;(Object.keys(k.styles).length>0||m.autoFetchSvg)&&T&&m.autoReplaceSvg&&N.dom.i2svg({node:e})};function t1(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return J(e)})}}),Object.defineProperty(c,"node",{get:function(){if(T){var e=v.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function t6(c){var a=c.children,l=c.main,e=c.mask,r=c.attributes,f=c.styles,i=c.transform;if(W1(i)&&l.found&&!e.found){var s=l.width,n=l.height,t={x:s/n/2,y:.5};r.style=s1(o(o({},f),{},{"transform-origin":"".concat(t.x+i.x/16,"em ").concat(t.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function z6(c){var a=c.prefix,l=c.iconName,e=c.children,r=c.attributes,f=c.symbol,i=f===!0?"".concat(a,"-").concat(m.cssPrefix,"-").concat(l):f;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:o(o({},r),{},{id:i}),children:e}]}]}function m6(c){var a=["aria-label","aria-labelledby","title","role"];return a.some(function(l){return l in c})}function V1(c){var a=c.icons,l=a.main,e=a.mask,r=c.prefix,f=c.iconName,i=c.transform,s=c.symbol,n=c.maskId,t=c.extra,M=c.watchable,z=M===void 0?!1:M,u=e.found?e:l,L=u.width,C=u.height,d=[m.replacementClass,f?"".concat(m.cssPrefix,"-").concat(f):""].filter(function(A){return t.classes.indexOf(A)===-1}).filter(function(A){return A!==""||!!A}).concat(t.classes).join(" "),x={children:[],attributes:o(o({},t.attributes),{},{"data-prefix":r,"data-icon":f,class:d,role:t.attributes.role||"img",viewBox:"0 0 ".concat(L," ").concat(C)})};!m6(t.attributes)&&!t.attributes["aria-hidden"]&&(x.attributes["aria-hidden"]="true"),z&&(x.attributes[E]="");var h=o(o({},x),{},{prefix:r,iconName:f,main:l,mask:e,maskId:n,transform:i,symbol:s,styles:o({},t.styles)}),b=e.found&&l.found?H("generateAbstractMask",h)||{children:[],attributes:{}}:H("generateAbstractIcon",h)||{children:[],attributes:{}},S=b.children,G=b.attributes;return h.children=S,h.attributes=G,s?z6(h):t6(h)}function m2(c){var a=c.content,l=c.width,e=c.height,r=c.transform,f=c.extra,i=c.watchable,s=i===void 0?!1:i,n=o(o({},f.attributes),{},{class:f.classes.join(" ")});s&&(n[E]="");var t=o({},f.styles);W1(r)&&(t.transform=G0({transform:r,startCentered:!0,width:l,height:e}),t["-webkit-transform"]=t.transform);var M=s1(t);M.length>0&&(n.style=M);var z=[];return z.push({tag:"span",attributes:n,children:[a]}),z}function M6(c){var a=c.content,l=c.extra,e=o(o({},l.attributes),{},{class:l.classes.join(" ")}),r=s1(l.styles);r.length>0&&(e.style=r);var f=[];return f.push({tag:"span",attributes:e,children:[a]}),f}var C1=k.styles;function F1(c){var a=c[0],l=c[1],e=c.slice(4),r=f1(e,1),f=r[0],i=null;return Array.isArray(f)?i={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(u1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(u1.SECONDARY),fill:"currentColor",d:f[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(u1.PRIMARY),fill:"currentColor",d:f[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:f}},{found:!0,width:a,height:l,icon:i}}var p6={found:!1,width:512,height:512};function L6(c,a){!e3&&!m.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function T1(c,a){var l=a;return a==="fa"&&m.styleDefault!==null&&(a=R()),new Promise(function(e,r){if(l==="fa"){var f=C3(c)||{};c=f.iconName||c,a=f.prefix||a}if(c&&a&&C1[a]&&C1[a][c]){var i=C1[a][c];return e(F1(i))}L6(c,a),e(o(o({},p6),{},{icon:m.showMissingIcons&&c?H("missingIconAbstract")||{}:{}}))})}var M2=function(){},B1=m.measurePerformance&&Q&&Q.mark&&Q.measure?Q:{mark:M2,measure:M2},V='FA "7.2.0"',u6=function(a){return B1.mark("".concat(V," ").concat(a," begins")),function(){return x3(a)}},x3=function(a){B1.mark("".concat(V," ").concat(a," ends")),B1.measure("".concat(V," ").concat(a),"".concat(V," ").concat(a," begins"),"".concat(V," ").concat(a," ends"))},_1={begin:u6,end:x3},a1=function(){};function p2(c){var a=c.getAttribute?c.getAttribute(E):null;return typeof a=="string"}function v6(c){var a=c.getAttribute?c.getAttribute(E1):null,l=c.getAttribute?c.getAttribute(U1):null;return a&&l}function d6(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(m.replacementClass)}function C6(){if(m.autoReplaceSvg===!0)return l1.replace;var c=l1[m.autoReplaceSvg];return c||l1.replace}function h6(c){return v.createElementNS("http://www.w3.org/2000/svg",c)}function g6(c){return v.createElement(c)}function b3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.ceFn,e=l===void 0?c.tag==="svg"?h6:g6:l;if(typeof c=="string")return v.createTextNode(c);var r=e(c.tag);Object.keys(c.attributes||[]).forEach(function(i){r.setAttribute(i,c.attributes[i])});var f=c.children||[];return f.forEach(function(i){r.appendChild(b3(i,{ceFn:e}))}),r}function x6(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var l1={replace:function(a){var l=a[0];if(l.parentNode)if(a[1].forEach(function(r){l.parentNode.insertBefore(b3(r),l)}),l.getAttribute(E)===null&&m.keepOriginalSource){var e=v.createComment(x6(l));l.parentNode.replaceChild(e,l)}else l.remove()},nest:function(a){var l=a[0],e=a[1];if(~I1(l).indexOf(m.replacementClass))return l1.replace(a);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var f=e[0].attributes.class.split(" ").reduce(function(s,n){return n===m.replacementClass||n.match(r)?s.toSvg.push(n):s.toNode.push(n),s},{toNode:[],toSvg:[]});e[0].attributes.class=f.toSvg.join(" "),f.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",f.toNode.join(" "))}var i=e.map(function(s){return J(s)}).join(`
`);l.setAttribute(E,""),l.innerHTML=i}};function L2(c){c()}function N3(c,a){var l=typeof a=="function"?a:a1;if(c.length===0)l();else{var e=L2;m.mutateApproach===S0&&(e=D.requestAnimationFrame||L2),e(function(){var r=C6(),f=_1.begin("mutate");c.map(r),f(),l()})}}var $1=!1;function S3(){$1=!0}function D1(){$1=!1}var i1=null;function u2(c){if(Z1&&m.observeMutations){var a=c.treeCallback,l=a===void 0?a1:a,e=c.nodeCallback,r=e===void 0?a1:e,f=c.pseudoElementsCallback,i=f===void 0?a1:f,s=c.observeMutationsRoot,n=s===void 0?v:s;i1=new Z1(function(t){if(!$1){var M=R();j(t).forEach(function(z){if(z.type==="childList"&&z.addedNodes.length>0&&!p2(z.addedNodes[0])&&(m.searchPseudoElements&&i(z.target),l(z.target)),z.type==="attributes"&&z.target.parentNode&&m.searchPseudoElements&&i([z.target],!0),z.type==="attributes"&&p2(z.target)&&~F0.indexOf(z.attributeName))if(z.attributeName==="class"&&v6(z.target)){var u=o1(I1(z.target)),L=u.prefix,C=u.iconName;z.target.setAttribute(E1,L||M),C&&z.target.setAttribute(U1,C)}else d6(z.target)&&r(z.target)})}}),T&&i1.observe(n,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function b6(){i1&&i1.disconnect()}function N6(c){var a=c.getAttribute("style"),l=[];return a&&(l=a.split(";").reduce(function(e,r){var f=r.split(":"),i=f[0],s=f.slice(1);return i&&s.length>0&&(e[i]=s.join(":").trim()),e},{})),l}function S6(c){var a=c.getAttribute("data-prefix"),l=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",r=o1(I1(c));return r.prefix||(r.prefix=R()),a&&l&&(r.prefix=a,r.iconName=l),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=Y0(r.prefix,c.innerText)||j1(r.prefix,z3(c.innerText))),!r.iconName&&m.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function k6(c){var a=j(c.attributes).reduce(function(l,e){return l.name!=="class"&&l.name!=="style"&&(l[e.name]=e.value),l},{});return a}function y6(){return{iconName:null,prefix:null,transform:w,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function v2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},l=S6(c),e=l.iconName,r=l.prefix,f=l.rest,i=k6(c),s=A1("parseNodeAttributes",{},c),n=a.styleParser?N6(c):[];return o({iconName:e,prefix:r,transform:w,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:f,styles:n,attributes:i}},s)}var w6=k.styles;function k3(c){var a=m.autoReplaceSvg==="nest"?v2(c,{styleParser:!1}):v2(c);return~a.extra.classes.indexOf(i3)?H("generateLayersText",c,a):H("generateSvgReplacementMutation",c,a)}function A6(){return[].concat(y(J2),y(Q2))}function d2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!T)return Promise.resolve();var l=v.documentElement.classList,e=function(z){return l.add("".concat(l2,"-").concat(z))},r=function(z){return l.remove("".concat(l2,"-").concat(z))},f=m.autoFetchSvg?A6():T2.concat(Object.keys(w6));f.includes("fa")||f.push("fa");var i=[".".concat(i3,":not([").concat(E,"])")].concat(f.map(function(M){return".".concat(M,":not([").concat(E,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=j(c.querySelectorAll(i))}catch(M){}if(s.length>0)e("pending"),r("complete");else return Promise.resolve();var n=_1.begin("onTree"),t=s.reduce(function(M,z){try{var u=k3(z);u&&M.push(u)}catch(L){e3||L.name==="MissingIcon"&&console.error(L)}return M},[]);return new Promise(function(M,z){Promise.all(t).then(function(u){N3(u,function(){e("active"),e("complete"),r("pending"),typeof a=="function"&&a(),n(),M()})}).catch(function(u){n(),z(u)})})}function P6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;k3(c).then(function(l){l&&N3([l],a)})}function F6(c){return function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:P1(a||{}),r=l.mask;return r&&(r=(r||{}).icon?r:P1(r||{})),c(e,o(o({},l),{},{mask:r}))}}var T6=function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=l.transform,r=e===void 0?w:e,f=l.symbol,i=f===void 0?!1:f,s=l.mask,n=s===void 0?null:s,t=l.maskId,M=t===void 0?null:t,z=l.classes,u=z===void 0?[]:z,L=l.attributes,C=L===void 0?{}:L,d=l.styles,x=d===void 0?{}:d;if(a){var h=a.prefix,b=a.iconName,S=a.icon;return t1(o({type:"icon"},a),function(){return U("beforeDOMElementCreation",{iconDefinition:a,params:l}),V1({icons:{main:F1(S),mask:n?F1(n.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:b,transform:o(o({},w),r),symbol:i,maskId:M,extra:{attributes:C,styles:x,classes:u}})})}},B6={mixout:function(){return{icon:F6(T6)}},hooks:function(){return{mutationObserverCallbacks:function(l){return l.treeCallback=d2,l.nodeCallback=P6,l}}},provides:function(a){a.i2svg=function(l){var e=l.node,r=e===void 0?v:e,f=l.callback,i=f===void 0?function(){}:f;return d2(r,i)},a.generateSvgReplacementMutation=function(l,e){var r=e.iconName,f=e.prefix,i=e.transform,s=e.symbol,n=e.mask,t=e.maskId,M=e.extra;return new Promise(function(z,u){Promise.all([T1(r,f),n.iconName?T1(n.iconName,n.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(L){var C=f1(L,2),d=C[0],x=C[1];z([l,V1({icons:{main:d,mask:x},prefix:f,iconName:r,transform:i,symbol:s,maskId:t,extra:M,watchable:!0})])}).catch(u)})},a.generateAbstractIcon=function(l){var e=l.children,r=l.attributes,f=l.main,i=l.transform,s=l.styles,n=s1(s);n.length>0&&(r.style=n);var t;return W1(i)&&(t=H("generateAbstractTransformGrouping",{main:f,transform:i,containerWidth:f.width,iconWidth:f.width})),e.push(t||f.icon),{children:e,attributes:r}}}},D6={mixout:function(){return{layer:function(l){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,f=r===void 0?[]:r;return t1({type:"layer"},function(){U("beforeDOMElementCreation",{assembler:l,params:e});var i=[];return l(function(s){Array.isArray(s)?s.map(function(n){i=i.concat(n.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(y(f)).join(" ")},children:i}]})}}}},R6={mixout:function(){return{counter:function(l){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,f=r===void 0?null:r,i=e.classes,s=i===void 0?[]:i,n=e.attributes,t=n===void 0?{}:n,M=e.styles,z=M===void 0?{}:M;return t1({type:"counter",content:l},function(){return U("beforeDOMElementCreation",{content:l,params:e}),M6({content:l.toString(),title:f,extra:{attributes:t,styles:z,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(y(s))}})})}}}},H6={mixout:function(){return{text:function(l){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,f=r===void 0?w:r,i=e.classes,s=i===void 0?[]:i,n=e.attributes,t=n===void 0?{}:n,M=e.styles,z=M===void 0?{}:M;return t1({type:"text",content:l},function(){return U("beforeDOMElementCreation",{content:l,params:e}),m2({content:l,transform:o(o({},w),f),extra:{attributes:t,styles:z,classes:["".concat(m.cssPrefix,"-layers-text")].concat(y(s))}})})}}},provides:function(a){a.generateLayersText=function(l,e){var r=e.transform,f=e.extra,i=null,s=null;if(P2){var n=parseInt(getComputedStyle(l).fontSize,10),t=l.getBoundingClientRect();i=t.width/n,s=t.height/n}return Promise.resolve([l,m2({content:l.innerHTML,width:i,height:s,transform:r,extra:f,watchable:!0})])}}},y3=new RegExp('"',"ug"),C2=[1105920,1112319],h2=o(o(o(o({},{FontAwesome:{normal:"fas",400:"fas"}}),u4),b0),S4),R1=Object.keys(h2).reduce(function(c,a){return c[a.toLowerCase()]=h2[a],c},{}),q6=Object.keys(R1).reduce(function(c,a){var l=R1[a];return c[a]=l[900]||y(Object.entries(l))[0][1],c},{});function E6(c){var a=c.replace(y3,"");return z3(y(a)[0]||"")}function U6(c){var a=c.getPropertyValue("font-feature-settings").includes("ss01"),l=c.getPropertyValue("content"),e=l.replace(y3,""),r=e.codePointAt(0),f=r>=C2[0]&&r<=C2[1],i=e.length===2?e[0]===e[1]:!1;return f||i||a}function G6(c,a){var l=c.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(a),r=isNaN(e)?"normal":e;return(R1[l]||{})[r]||q6[l]}function g2(c,a){var l="".concat(N0).concat(a.replace(":","-"));return new Promise(function(e,r){if(c.getAttribute(l)!==null)return e();var f=j(c.children),i=f.filter(function(z1){return z1.getAttribute(N1)===a})[0],s=D.getComputedStyle(c,a),n=s.getPropertyValue("font-family"),t=n.match(A0),M=s.getPropertyValue("font-weight"),z=s.getPropertyValue("content");if(i&&!t)return c.removeChild(i),e();if(t&&z!=="none"&&z!==""){var u=s.getPropertyValue("content"),L=G6(n,M),C=E6(u),d=t[0].startsWith("FontAwesome"),x=U6(s),h=j1(L,C),b=h;if(d){var S=K0(C);S.iconName&&S.prefix&&(h=S.iconName,L=S.prefix)}if(h&&!x&&(!i||i.getAttribute(E1)!==L||i.getAttribute(U1)!==b)){c.setAttribute(l,b),i&&c.removeChild(i);var G=y6(),A=G.extra;A.attributes[N1]=a,T1(h,L).then(function(z1){var R3=V1(o(o({},G),{},{icons:{main:z1,mask:h3()},prefix:L,iconName:b,extra:A,watchable:!0})),m1=v.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(m1,c.firstChild):c.appendChild(m1),m1.outerHTML=R3.map(function(H3){return J(H3)}).join(`
`),c.removeAttribute(l),e()}).catch(r)}else e()}else e()})}function I6(c){return Promise.all([g2(c,"::before"),g2(c,"::after")])}function W6(c){return c.parentNode!==document.head&&!~k0.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(N1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}var O6=function(a){return!!a&&l3.some(function(l){return a.includes(l)})},j6=function(a){if(!a)return[];var l=new Set,e=a.split(/,(?![^()]*\))/).map(function(n){return n.trim()});e=e.flatMap(function(n){return n.includes("(")?n:n.split(",").map(function(t){return t.trim()})});var r=c1(e),f;try{for(r.s();!(f=r.n()).done;){var i=f.value;if(O6(i)){var s=l3.reduce(function(n,t){return n.replace(t,"")},i);s!==""&&s!=="*"&&l.add(s)}}}catch(n){r.e(n)}finally{r.f()}return l};function x2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(T){var l;if(a)l=c;else if(m.searchPseudoElementsFullScan)l=c.querySelectorAll("*");else{var e=new Set,r=c1(document.styleSheets),f;try{for(r.s();!(f=r.n()).done;){var i=f.value;try{var s=c1(i.cssRules),n;try{for(s.s();!(n=s.n()).done;){var t=n.value,M=j6(t.selectorText),z=c1(M),u;try{for(z.s();!(u=z.n()).done;){var L=u.value;e.add(L)}}catch(d){z.e(d)}finally{z.f()}}}catch(d){s.e(d)}finally{s.f()}}catch(d){m.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(d.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(d){r.e(d)}finally{r.f()}if(!e.size)return;var C=Array.from(e).join(", ");try{l=c.querySelectorAll(C)}catch(d){}}return new Promise(function(d,x){var h=j(l).filter(W6).map(I6),b=_1.begin("searchPseudoElements");S3(),Promise.all(h).then(function(){b(),D1(),d()}).catch(function(){b(),D1(),x()})})}}var V6={hooks:function(){return{mutationObserverCallbacks:function(l){return l.pseudoElementsCallback=x2,l}}},provides:function(a){a.pseudoElements2svg=function(l){var e=l.node,r=e===void 0?v:e;m.searchPseudoElements&&x2(r)}}},b2=!1,_6={mixout:function(){return{dom:{unwatch:function(){S3(),b2=!0}}}},hooks:function(){return{bootstrap:function(){u2(A1("mutationObserverCallbacks",{}))},noAuto:function(){b6()},watch:function(l){var e=l.observeMutationsRoot;b2?D1():u2(A1("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},N2=function(a){var l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,r){var f=r.toLowerCase().split("-"),i=f[0],s=f.slice(1).join("-");if(i&&s==="h")return e.flipX=!0,e;if(i&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(i){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},l)},$6={mixout:function(){return{parse:{transform:function(l){return N2(l)}}}},hooks:function(){return{parseNodeAttributes:function(l,e){var r=e.getAttribute("data-fa-transform");return r&&(l.transform=N2(r)),l}}},provides:function(a){a.generateAbstractTransformGrouping=function(l){var e=l.main,r=l.transform,f=l.containerWidth,i=l.iconWidth,s={transform:"translate(".concat(f/2," 256)")},n="translate(".concat(r.x*32,", ").concat(r.y*32,") "),t="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),M="rotate(".concat(r.rotate," 0 0)"),z={transform:"".concat(n," ").concat(t," ").concat(M)},u={transform:"translate(".concat(i/2*-1," -256)")},L={outer:s,inner:z,path:u};return{tag:"g",attributes:o({},L.outer),children:[{tag:"g",attributes:o({},L.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:o(o({},e.icon.attributes),L.path)}]}]}}}},h1={x:0,y:0,width:"100%",height:"100%"};function S2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function X6(c){return c.tag==="g"?c.children:[c]}var Y6={hooks:function(){return{parseNodeAttributes:function(l,e){var r=e.getAttribute("data-fa-mask"),f=r?o1(r.split(" ").map(function(i){return i.trim()})):h3();return f.prefix||(f.prefix=R()),l.mask=f,l.maskId=e.getAttribute("data-fa-mask-id"),l}}},provides:function(a){a.generateAbstractMask=function(l){var e=l.children,r=l.attributes,f=l.main,i=l.mask,s=l.maskId,n=l.transform,t=f.width,M=f.icon,z=i.width,u=i.icon,L=U0({transform:n,containerWidth:z,iconWidth:t}),C={tag:"rect",attributes:o(o({},h1),{},{fill:"white"})},d=M.children?{children:M.children.map(S2)}:{},x={tag:"g",attributes:o({},L.inner),children:[S2(o({tag:M.tag,attributes:o(o({},M.attributes),L.path)},d))]},h={tag:"g",attributes:o({},L.outer),children:[x]},b="mask-".concat(s||i2()),S="clip-".concat(s||i2()),G={tag:"mask",attributes:o(o({},h1),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,h]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:X6(u)},G]};return e.push(A,{tag:"rect",attributes:o({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(b,")")},h1)}),{children:e,attributes:r}}}},K6={provides:function(a){var l=!1;D.matchMedia&&(l=D.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},f={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:o(o({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=o(o({},f),{},{attributeName:"opacity"}),s={tag:"circle",attributes:o(o({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return l||s.children.push({tag:"animate",attributes:o(o({},f),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:o(o({},i),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:o(o({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:o(o({},i),{},{values:"1;0;0;0;0;1;"})}]}),l||e.push({tag:"path",attributes:o(o({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:o(o({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},J6={hooks:function(){return{parseNodeAttributes:function(l,e){var r=e.getAttribute("data-fa-symbol"),f=r===null?!1:r===""?!0:r;return l.symbol=f,l}}}},Q6=[W0,B6,D6,R6,H6,V6,_6,$6,Y6,K6,J6];i6(Q6,{mixoutsTo:N});var s5=N.noAuto,n5=N.config,w3=N.library,A3=N.dom,o5=N.parse,t5=N.findIconDefinition,z5=N.toHtml,m5=N.icon,M5=N.layer,p5=N.text,L5=N.counter;var P3={prefix:"fab",iconName:"windows",icon:[448,512,[],"f17a","M0 93.7l183.6-25.3 0 177.4-183.6 0 0-152.1zM0 418.3l183.6 25.3 0-175.2-183.6 0 0 149.9zm203.8 28l244.2 33.7 0-211.6-244.2 0 0 177.9zm0-380.6l0 180.1 244.2 0 0-213.8-244.2 33.7z"]};var F3={prefix:"fab",iconName:"paypal",icon:[384,512,[],"f1ed","M111.9 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5l-74.6 0c-7.6 0-13.1-6.6-12.1-13.9L59.3 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.6 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9l63.5 0c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"]};var T3={prefix:"fab",iconName:"github",icon:[512,512,[],"f09b","M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};var B3={prefix:"fab",iconName:"apple",icon:[384,512,[],"f179","M319.1 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7-55.8 .9-115.1 44.5-115.1 133.2 0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM262.5 104.5c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"]};var D3={prefix:"fas",iconName:"scale-balanced",icon:[640,512,[9878,"balance-scale"],"f24e","M384 32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L398.4 96c-5.2 25.8-22.9 47.1-46.4 57.3l0 294.7 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-384 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0 0-294.7c-23.5-10.3-41.2-31.6-46.4-57.3L128 96c-17.7 0-32-14.3-32-32s14.3-32 32-32l128 0c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288L584.4 320 512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1-10.8 44.8-63.1 78.9-126 78.9zM126.8 195.8L54.4 320 199.3 320 126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1-10.8 44.8-63.1 78.9-126 78.9S11.7 382 .9 337.1z"]};w3.add(P3,B3,T3,F3,D3);A3.watch();M1(()=>{});})();
/*! Bundled license information:

@fortawesome/fontawesome-svg-core/index.mjs:
@fortawesome/free-brands-svg-icons/index.mjs:
@fortawesome/free-solid-svg-icons/index.mjs:
  (*!
   * Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com
   * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
   * Copyright 2026 Fonticons, Inc.
   *)
*/
