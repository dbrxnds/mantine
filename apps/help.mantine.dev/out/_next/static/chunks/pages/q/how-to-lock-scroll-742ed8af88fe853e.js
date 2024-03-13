(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1146],{8113:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(99882).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},74691:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(99882).Z)("bug","IconBug",[["path",{d:"M9 9v-1a3 3 0 0 1 6 0v1",key:"svg-0"}],["path",{d:"M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3",key:"svg-1"}],["path",{d:"M3 13l4 0",key:"svg-2"}],["path",{d:"M17 13l4 0",key:"svg-3"}],["path",{d:"M12 20l0 -6",key:"svg-4"}],["path",{d:"M4 19l3.35 -2",key:"svg-5"}],["path",{d:"M20 19l-3.35 -2",key:"svg-6"}],["path",{d:"M4 7l3.75 2.4",key:"svg-7"}],["path",{d:"M20 7l-3.75 2.4",key:"svg-8"}]])},23856:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(99882).Z)("info-circle","IconInfoCircle",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 9h.01",key:"svg-1"}],["path",{d:"M11 12h1v4h1",key:"svg-2"}]])},31650:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(99882).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},62655:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(99882).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},67593:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/q/how-to-lock-scroll",function(){return n(68685)}])},68685:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a},meta:function(){return i}});var r=n(52322),o=n(34665),c=n(21938);let i={title:"How can I lock scroll in my application?",description:"Use react-remove-scroll library to lock scroll in your application",slug:"how-to-lock-scroll",category:"common",tags:["lockScroll","scroll lock","remove scroll","scrollbar"],created_at:"February 15, 2024",last_updated_at:"February 15, 2024"},l=(0,c.A)(i);function s(e){let t={a:"a",code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Mantine components use ",(0,r.jsx)(t.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"\nlibrary to lock scroll. You can use it in your application to lock scroll. For your\nconvenience, ",(0,r.jsx)(t.code,{children:"@mantine/core"})," package exports ",(0,r.jsx)(t.code,{children:"RemoveScroll"})," component:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { RemoveScroll } from '@mantine/core';\n\nfunction App() {\n  return (\n    <RemoveScroll>\n      <div>Content</div>\n    </RemoveScroll>\n  );\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The component supports all props that are supported by ",(0,r.jsx)(t.code,{children:"react-remove-scroll"})," library,\nyou can find the full list of props in the ",(0,r.jsx)(t.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"official documentation"}),"."]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(l,{...e,children:(0,r.jsx)(s,{...e})})}},5632:function(e,t,n){e.exports=n(65123)},34406:function(e){var t,n,r,o=e.exports={};function c(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===c||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:c}catch(e){t=c}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var s=[],a=!1,u=-1;function h(){a&&r&&(a=!1,r.length?s=r.concat(s):u=-1,s.length&&p())}function p(){if(!a){var e=l(h);a=!0;for(var t=s.length;t;){for(r=s,s=[];++u<t;)r&&r[u].run();u=-1,t=s.length}r=null,a=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function f(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new d(e,t)),1!==s.length||a||l(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=f,o.addListener=f,o.once=f,o.off=f,o.removeListener=f,o.removeAllListeners=f,o.emit=f,o.prependListener=f,o.prependOnceListener=f,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},function(e){e.O(0,[1466,9774,2888,179],function(){return e(e.s=67593)}),_N_E=e.O()}]);