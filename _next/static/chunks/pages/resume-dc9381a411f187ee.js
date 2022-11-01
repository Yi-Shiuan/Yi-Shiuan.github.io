(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[647],{7484:function(t){var e;e=function(){"use strict";var t="millisecond",e="second",s="minute",i="hour",n="week",r="month",a="quarter",l="year",c="date",A="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=function(t,e,s){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(s)+t},u="en",g={};g[u]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],s=t%100;return"["+t+(e[(s-20)%10]||e[s]||"th")+"]"}};var m=function(t){return t instanceof w},f=function t(e,s,i){var n;if(!e)return u;if("string"==typeof e){var r=e.toLowerCase();g[r]&&(n=r),s&&(g[r]=s,n=r);var a=e.split("-");if(!n&&a.length>1)return t(a[0])}else{var l=e.name;g[l]=e,n=l}return!i&&n&&(u=n),n||!i&&u},x=function(t,e){if(m(t))return t.clone();var s="object"==typeof e?e:{};return s.date=t,s.args=arguments,new w(s)},v={s:d,z:function(t){var e=-t.utcOffset(),s=Math.abs(e);return(e<=0?"+":"-")+d(Math.floor(s/60),2,"0")+":"+d(s%60,2,"0")},m:function t(e,s){if(e.date()<s.date())return-t(s,e);var i=12*(s.year()-e.year())+(s.month()-e.month()),n=e.clone().add(i,r),a=s-n<0,l=e.clone().add(i+(a?-1:1),r);return+(-(i+(s-n)/(a?n-l:l-n))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(A){return({M:r,y:l,w:n,d:"day",D:c,h:i,m:s,s:e,ms:t,Q:a})[A]||String(A||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}};v.l=f,v.i=m,v.w=function(t,e){return x(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function d(t){this.$L=f(t.locale,null,!0),this.parse(t)}var u=d.prototype;return u.parse=function(t){this.$d=function(t){var e=t.date,s=t.utc;if(null===e)return new Date(NaN);if(v.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(h);if(i){var n=i[2]-1||0,r=(i[7]||"0").substring(0,3);return s?new Date(Date.UTC(i[1],n,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],n,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},u.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},u.$utils=function(){return v},u.isValid=function(){return this.$d.toString()!==A},u.isSame=function(t,e){var s=x(t);return this.startOf(e)<=s&&s<=this.endOf(e)},u.isAfter=function(t,e){return x(t)<this.startOf(e)},u.isBefore=function(t,e){return this.endOf(e)<x(t)},u.$g=function(t,e,s){return v.u(t)?this[e]:this.set(s,t)},u.unix=function(){return Math.floor(this.valueOf()/1e3)},u.valueOf=function(){return this.$d.getTime()},u.startOf=function(t,a){var A=this,h=!!v.u(a)||a,o=v.p(t),d=function(t,e){var s=v.w(A.$u?Date.UTC(A.$y,e,t):new Date(A.$y,e,t),A);return h?s:s.endOf("day")},u=function(t,e){return v.w(A.toDate()[t].apply(A.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(e)),A)},g=this.$W,m=this.$M,f=this.$D,x="set"+(this.$u?"UTC":"");switch(o){case l:return h?d(1,0):d(31,11);case r:return h?d(1,m):d(0,m+1);case n:var w=this.$locale().weekStart||0,p=(g<w?g+7:g)-w;return d(h?f-p:f+(6-p),m);case"day":case c:return u(x+"Hours",0);case i:return u(x+"Minutes",1);case s:return u(x+"Seconds",2);case e:return u(x+"Milliseconds",3);default:return this.clone()}},u.endOf=function(t){return this.startOf(t,!1)},u.$set=function(n,a){var A,h=v.p(n),o="set"+(this.$u?"UTC":""),d=((A={}).day=o+"Date",A[c]=o+"Date",A[r]=o+"Month",A[l]=o+"FullYear",A[i]=o+"Hours",A[s]=o+"Minutes",A[e]=o+"Seconds",A[t]=o+"Milliseconds",A)[h],u="day"===h?this.$D+(a-this.$W):a;if(h===r||h===l){var g=this.clone().set(c,1);g.$d[d](u),g.init(),this.$d=g.set(c,Math.min(this.$D,g.daysInMonth())).$d}else d&&this.$d[d](u);return this.init(),this},u.set=function(t,e){return this.clone().$set(t,e)},u.get=function(t){return this[v.p(t)]()},u.add=function(t,a){var c,A=this;t=Number(t);var h=v.p(a),o=function(e){var s=x(A);return v.w(s.date(s.date()+Math.round(e*t)),A)};if(h===r)return this.set(r,this.$M+t);if(h===l)return this.set(l,this.$y+t);if("day"===h)return o(1);if(h===n)return o(7);var d=((c={})[s]=6e4,c[i]=36e5,c[e]=1e3,c)[h]||1,u=this.$d.getTime()+t*d;return v.w(u,this)},u.subtract=function(t,e){return this.add(-1*t,e)},u.format=function(t){var e=this,s=this.$locale();if(!this.isValid())return s.invalidDate||A;var i=t||"YYYY-MM-DDTHH:mm:ssZ",n=v.z(this),r=this.$H,a=this.$m,l=this.$M,c=s.weekdays,h=s.months,d=function(t,s,n,r){return t&&(t[s]||t(e,i))||n[s].slice(0,r)},u=function(t){return v.s(r%12||12,t,"0")},g=s.meridiem||function(t,e,s){var i=t<12?"AM":"PM";return s?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:v.s(l+1,2,"0"),MMM:d(s.monthsShort,l,h,3),MMMM:d(h,l),D:this.$D,DD:v.s(this.$D,2,"0"),d:String(this.$W),dd:d(s.weekdaysMin,this.$W,c,2),ddd:d(s.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(r),HH:v.s(r,2,"0"),h:u(1),hh:u(2),a:g(r,a,!0),A:g(r,a,!1),m:String(a),mm:v.s(a,2,"0"),s:String(this.$s),ss:v.s(this.$s,2,"0"),SSS:v.s(this.$ms,3,"0"),Z:n};return i.replace(o,function(t,e){return e||m[t]||n.replace(":","")})},u.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},u.diff=function(t,c,A){var h,o=v.p(c),d=x(t),u=(d.utcOffset()-this.utcOffset())*6e4,g=this-d,m=v.m(this,d);return m=((h={})[l]=m/12,h[r]=m,h[a]=m/3,h[n]=(g-u)/6048e5,h.day=(g-u)/864e5,h[i]=g/36e5,h[s]=g/6e4,h[e]=g/1e3,h)[o]||g,A?m:v.a(m)},u.daysInMonth=function(){return this.endOf(r).$D},u.$locale=function(){return g[this.$L]},u.locale=function(t,e){if(!t)return this.$L;var s=this.clone(),i=f(t,e,!0);return i&&(s.$L=i),s},u.clone=function(){return v.w(this.$d,this)},u.toDate=function(){return new Date(this.valueOf())},u.toJSON=function(){return this.isValid()?this.toISOString():null},u.toISOString=function(){return this.$d.toISOString()},u.toString=function(){return this.$d.toUTCString()},d}(),p=w.prototype;return x.prototype=p,[["$ms",t],["$s",e],["$m",s],["$H",i],["$W","day"],["$M",r],["$y",l],["$D",c]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),x.extend=function(t,e){return t.$i||(t(e,w,x),t.$i=!0),x},x.locale=f,x.isDayjs=m,x.unix=function(t){return x(1e3*t)},x.en=g[u],x.Ls=g,x.p={},x},t.exports=e()},2567:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resume",function(){return s(1028)}])},1434:function(t,e){"use strict";e.Z={src:"/_next/static/media/myimage.85e4330e.jpg",height:4032,width:3024,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAL/xAAeEAACAgICAwAAAAAAAAAAAAABAgAEAwURgQYSIf/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAXEQEAAwAAAAAAAAAAAAAAAAACAAMR/9oADAMBAAIRAxEAPwCq3l+4qb67fwJr8ptqpKIrewUfF56HfIMREGbVkW6zs//Z",blurWidth:6,blurHeight:8}},7890:function(t,e,s){"use strict";s.d(e,{Z:function(){return d}});var i=s(5893),n=s(3024),r=s(9417),a=s(7814),l=s(4184),c=s.n(l);s(7294);let A=t=>{let{icon:e,url:s}=t;return(0,i.jsx)("li",{className:c()("list-inline-item","g-mx-2"),children:(0,i.jsxs)("a",{className:c()("u-icon-v1","u-icon-size--sm","u-icon-slide-up--hover","g-color-gray-light-v1","g-bg-gray-light-v5","g-color-gray-light-v1--hover","rounded-circle"),href:s,target:"_blank",children:[(0,i.jsx)("i",{className:c()("g-font-size-default","g-line-height-1","u-icon__elem-regular"),children:(0,i.jsx)(a.G,{width:14,height:14,icon:e})}),(0,i.jsx)("i",{className:c()("g-font-size-default","g-line-height-1","u-icon__elem-hover"),children:(0,i.jsx)(a.G,{width:14,height:14,icon:e})})]})})};var h=s(3740);let o=t=>{let{study4:e,facebook:s,github:l,linkedin:o,line:d}=h.Z.links;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:c()("d-flex","align-items-center","justify-content-between","g-mb-5"),children:[(0,i.jsx)("h2",{className:c()("g-font-weight-300","g-mr-10"),children:h.Z.name}),(0,i.jsxs)("ul",{className:c()("list-inline","mb-0"),children:[(0,i.jsx)(A,{url:e.path,icon:r.XEC}),(0,i.jsx)(A,{url:s.path,icon:n.neY}),(0,i.jsx)(A,{url:l.path,icon:n.zhw}),(0,i.jsx)(A,{url:o.path,icon:n.hwn}),(0,i.jsx)(A,{url:d.path,icon:n.OPk})]})]}),(0,i.jsxs)("h6",{className:c()("h6","g-font-weight-300","g-mb-10"),children:[(0,i.jsx)("i",{className:c()("g-pos-rel","g-top-1","g-mr-5","g-color-gray-dark-v5"),children:(0,i.jsx)(a.G,{width:10.5,height:14,icon:r.O7Q})}),h.Z.job_title]}),t.children,(0,i.jsx)("hr",{className:c()("g-brd-gray-light-v4","g-my-5")}),(0,i.jsx)("p",{className:c()("lead","g-line-height-18"),children:"我是Bruno Jan在開發技術上熱愛網頁開發相關技術，嫻熟.net, ReactJS, 容器化, DevOps, 巨量交易, 高流量以及AWS的開發與維運， 因熱愛分享自身所學所以加入Study4.TW成為核心成員，曾分享自身過往的開發經驗, .net 的效能調校以及報表伺服器等等 在認證方面具有CSM、CSD與CSPO認證，也曾獲選兩任MVP(微軟最有價值專家)"})]})};var d=o},1028:function(t,e,s){"use strict";s.r(e),s.d(e,{__N_SSG:function(){return _},default:function(){return E}});var i=s(5893),n=s(9417),r=s(7814),a=s(4184),l=s.n(a),c=s(5675),A=s.n(c),h=s(7294),o={src:"/_next/static/media/csm.95721426.png",height:601,width:600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEX+5rT946f93Zj96r380G/82Ib93ZdMaXH8yFb80nX7wkP82Yr80XP93JP80XL93Zf7vzv7wkX93578zGPeVWFXAAAAE3RSTlMdErEmqvz9AP39+mpQ8QEB8eynByH1ZQAAAAlwSFlzAAAD6AAAA+gBtXtSawAAAD1JREFUeJwdy8cRwDAMBLFVPFLBif336rHxB6cE0oFSbl6TUG4+rArMe7cLyrDW7S7MiAiPCavu/axv/l0vQMIB857Zd04AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},d={src:"/_next/static/media/cspo.8c81e524.png",height:601,width:600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEX6x7D6wqn2nHH6zrr4uJrzfUX4tpb1kmRMaXH3poD2m3D3r433rYv2nHP1mnD4tpf1kWP0h1Qa4brBAAAAEXRSTlMdEqolrfH5/gD++/VpUAEBqRnfuosAAAAJcEhZcwAAA+gAAAPoAbV7UmsAAAA9SURBVHicHctLFoAwCAPAtAUS+lG5/2V9OvvBLQHSBTVbszdBlln1CGBG0IHhlVk+sElycgOnr7Dzzb/rBUO2AdXO0sowAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},u={src:"/_next/static/media/csd.5da3b933.png",height:522,width:600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAPFBMVEX79fXolJLgbmvnkI3hc3DrpKPro6Hnj4zkfnvmjInsqKbgb2vsq6nnkI7sqajjf3ztsbDfa2jpmZblh4Sfu2nLAAAAEXRSTlMCQv2m+9D9/v5/HVZ917+mgMd6RlYAAAAJcEhZcwAAA+gAAAPoAbV7UmsAAAA4SURBVHicBcEBFoAgCETBr/Bc0LSo+9+1GeDaOwHsVdUNTZL3aqyQxuiLrB7hlZjHF3KDmec8kx8y5QGwqrtISQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:7},g={src:"/_next/static/media/mvp.b1d2a674.png",height:272,width:820,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAJFBMVEXX3OO8xdHM0tzM0twRL1zT2eFugJzp7PC3wM3k5+zs7/JdcpA/Sy6CAAAACnRSTlP7/f3hwyrN4OS/bQjCwgAAAAlwSFlzAAAD6AAAA+gBtXtSawAAACJJREFUeJwFwYEBACAIw7BugAr8/68JGchziz0YpsmHrKgPBUAAXwwAL40AAAAASUVORK5CYII=",blurWidth:8,blurHeight:3};let m=h.memo(t=>(0,i.jsxs)("div",{className:l()("row"),children:[(0,i.jsx)("div",{className:l()("col"),children:(0,i.jsx)(A(),{className:l()("img-fluid","w-100"),src:o,alt:"CSM"})}),(0,i.jsx)("div",{className:l()("col"),children:(0,i.jsx)(A(),{className:l()("img-fluid","w-100"),src:u,alt:"CSD"})}),(0,i.jsx)("div",{className:l()("col"),children:(0,i.jsx)(A(),{className:l()("img-fluid","w-100"),src:d,alt:"CSPO"})}),(0,i.jsx)("div",{className:l()("col","d-flex","align-items-center"),children:(0,i.jsx)(A(),{className:l()("img-fluid","w-100"),src:g,alt:"MVP"})})]}));var f=s(7484),x=s.n(f),v=s(3985);let w=t=>{let{children:e}=t;return(0,i.jsx)("h2",{className:l()("h4"),children:e})},p=t=>{let{children:e}=t;return(0,i.jsx)("p",{className:l()("g-pl-20"),children:e})},j=t=>{let{children:e}=t;return(0,i.jsx)("li",{className:l()("g-pb-10"),children:e})},b={h2:w,p:p,li:j},y=t=>{let{company:e,title:s,during:n,english:r}=t;return(0,i.jsx)("li",{className:l()("col-12","g-brd-gray-light-v4","animate__animated","animate__fadeInDown"),children:(0,i.jsxs)("div",{className:l()("row"),children:[(0,i.jsxs)("div",{className:l()("col-4","g-py-15","text-align-end","g-pr-30","g-brd-right","g-brd-gray-light-v4"),children:[(0,i.jsx)("h4",{className:l()("h4","g-font-weight-300"),children:e}),(0,i.jsx)("h4",{className:l()("h4","g-font-weight-300"),children:r}),(0,i.jsx)("h5",{className:l()("h5","g-font-weight-300"),children:s}),(0,i.jsxs)("h6",{className:l()("h6","g-font-weight-300","mb-0"),children:[x()(n.start).format("YYYY.MM")," - ",n.end?x()(n.end).format("YYYY.MM"):"present"]})]}),(0,i.jsxs)("div",{className:l()("col-8","align-self-center","g-brd-darkblue-left","g-brd-5","g-pos-rel"),children:[(0,i.jsx)("div",{className:l()("g-left-minus-10","g-pos-abs","g-top-35"),children:(0,i.jsx)("i",{className:l()("d-block","g-width-18","g-height-18","g-bg-purple","g-brd-around","g-brd-4","g-brd-gray-light-v4","rounded-circle")})}),(0,i.jsx)("article",{className:l()("g-pb-50","g-px-20"),children:(0,i.jsx)(v.D,{components:b,children:t.content})})]})]})})},N=t=>{let{exps:e}=t;return(0,i.jsxs)("div",{className:l()("card","border-0","g-mb-40"),children:[(0,i.jsx)("div",{className:l()("u-heading-v3","g-mb-40","g-mx-20"),children:(0,i.jsxs)("h2",{className:l()("h2","u-heading-v3__title"),children:[(0,i.jsx)(r.G,{width:14,icon:n.HXv,className:l()("g-pos-rel","g-top-1","g-mr-5")}),"工作經歷"]})}),(0,i.jsx)("div",{className:l()("u-info-v1-1","g-bg-white-gradient-v1--after","g-pa-0"),children:(0,i.jsx)("div",{className:l()("c-scrollbar","g-pb-40"),children:(0,i.jsx)("ul",{className:l()("row","list-unstyled"),children:e.map((t,e)=>(0,h.createElement)(y,{...t,key:e}))})})})]})};var $=s(7890),M=s(3740),D=s(1434);let S=t=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("section",{className:l()("g-layout-boxed","g-bgi-v8"),children:(0,i.jsx)("main",{className:l()("container"),children:(0,i.jsxs)("div",{className:l()("row","justify-content-between","g-pt-100"),children:[(0,i.jsx)("div",{className:l()("col-12"),children:(0,i.jsx)("div",{className:l()("g-brd-around","g-brd-gray-light-v4","g-pa-12","g-mb-40"),children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:l()("col-4"),children:(0,i.jsx)("div",{className:"g-py-30",children:(0,i.jsx)(A(),{className:l()("img-fluid","w-100"),src:D.Z,alt:"Bruno Jan"})})}),(0,i.jsxs)("div",{className:l()("col-8"),children:[(0,i.jsx)($.Z,{children:(0,i.jsxs)("ul",{className:l()("list-inline","g-font-weight-300"),children:[(0,i.jsxs)("li",{className:l()("list-inline-item","g-mr-20"),children:[(0,i.jsx)("i",{className:l()("g-pos-rel","g-top-1","g-mr-8","g-color-gray-dark-v5"),children:(0,i.jsx)(r.G,{width:10.5,height:14,icon:n.xiy})}),M.Z.birthday]}),"c ",(0,i.jsxs)("li",{className:l()("list-inline-item","g-mr-20"),children:[(0,i.jsx)("i",{className:l()("g-pos-rel","g-top-1","g-mr-8","g-color-gray-dark-v5"),children:(0,i.jsx)(r.G,{width:10.5,height:14,icon:n.IBq})}),M.Z.email]}),(0,i.jsxs)("li",{className:l()("list-inline-item","g-mr-20"),children:[(0,i.jsx)("i",{className:l()("g-pos-rel","g-top-1","g-mr-8","g-color-gray-dark-v5"),children:(0,i.jsx)(r.G,{width:10.5,height:14,icon:n.Xf_})}),M.Z.education]})]})}),(0,i.jsx)("hr",{className:l()("g-brd-gray-light-v4","g-my-20")}),(0,i.jsx)(m,{})]})]})})}),(0,i.jsx)("div",{className:l()("col-12"),children:(0,i.jsx)(N,{exps:t.exps})})]})})})}),O=t=>(0,i.jsx)(i.Fragment,{children:t});S.getLayout=O;var _=!0,E=S}},function(t){t.O(0,[985,774,888,179],function(){return t(t.s=2567)}),_N_E=t.O()}]);