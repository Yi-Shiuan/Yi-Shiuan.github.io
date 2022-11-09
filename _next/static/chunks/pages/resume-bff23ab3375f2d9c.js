(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[647],{7484:function(e){var t;t=function(){"use strict";var e="millisecond",t="second",s="minute",i="hour",r="week",n="month",a="quarter",l="year",c="date",h="Invalid Date",o=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,A=function(e,t,s){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(s)+e},g="en",u={};u[g]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],s=e%100;return"["+e+(t[(s-20)%10]||t[s]||"th")+"]"}};var m=function(e){return e instanceof j},f=function e(t,s,i){var r;if(!t)return g;if("string"==typeof t){var n=t.toLowerCase();u[n]&&(r=n),s&&(u[n]=s,r=n);var a=t.split("-");if(!r&&a.length>1)return e(a[0])}else{var l=t.name;u[l]=t,r=l}return!i&&r&&(g=r),r||!i&&g},x=function(e,t){if(m(e))return e.clone();var s="object"==typeof t?t:{};return s.date=e,s.args=arguments,new j(s)},v={s:A,z:function(e){var t=-e.utcOffset(),s=Math.abs(t);return(t<=0?"+":"-")+A(Math.floor(s/60),2,"0")+":"+A(s%60,2,"0")},m:function e(t,s){if(t.date()<s.date())return-e(s,t);var i=12*(s.year()-t.year())+(s.month()-t.month()),r=t.clone().add(i,n),a=s-r<0,l=t.clone().add(i+(a?-1:1),n);return+(-(i+(s-r)/(a?r-l:l-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(h){return({M:n,y:l,w:r,d:"day",D:c,h:i,m:s,s:t,ms:e,Q:a})[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};v.l=f,v.i=m,v.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var j=function(){function A(e){this.$L=f(e.locale,null,!0),this.parse(e)}var g=A.prototype;return g.parse=function(e){this.$d=function(e){var t=e.date,s=e.utc;if(null===t)return new Date(NaN);if(v.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(o);if(i){var r=i[2]-1||0,n=(i[7]||"0").substring(0,3);return s?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,n)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,n)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},g.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},g.$utils=function(){return v},g.isValid=function(){return this.$d.toString()!==h},g.isSame=function(e,t){var s=x(e);return this.startOf(t)<=s&&s<=this.endOf(t)},g.isAfter=function(e,t){return x(e)<this.startOf(t)},g.isBefore=function(e,t){return this.endOf(t)<x(e)},g.$g=function(e,t,s){return v.u(e)?this[t]:this.set(s,e)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(e,a){var h=this,o=!!v.u(a)||a,d=v.p(e),A=function(e,t){var s=v.w(h.$u?Date.UTC(h.$y,t,e):new Date(h.$y,t,e),h);return o?s:s.endOf("day")},g=function(e,t){return v.w(h.toDate()[e].apply(h.toDate("s"),(o?[0,0,0,0]:[23,59,59,999]).slice(t)),h)},u=this.$W,m=this.$M,f=this.$D,x="set"+(this.$u?"UTC":"");switch(d){case l:return o?A(1,0):A(31,11);case n:return o?A(1,m):A(0,m+1);case r:var j=this.$locale().weekStart||0,p=(u<j?u+7:u)-j;return A(o?f-p:f+(6-p),m);case"day":case c:return g(x+"Hours",0);case i:return g(x+"Minutes",1);case s:return g(x+"Seconds",2);case t:return g(x+"Milliseconds",3);default:return this.clone()}},g.endOf=function(e){return this.startOf(e,!1)},g.$set=function(r,a){var h,o=v.p(r),d="set"+(this.$u?"UTC":""),A=((h={}).day=d+"Date",h[c]=d+"Date",h[n]=d+"Month",h[l]=d+"FullYear",h[i]=d+"Hours",h[s]=d+"Minutes",h[t]=d+"Seconds",h[e]=d+"Milliseconds",h)[o],g="day"===o?this.$D+(a-this.$W):a;if(o===n||o===l){var u=this.clone().set(c,1);u.$d[A](g),u.init(),this.$d=u.set(c,Math.min(this.$D,u.daysInMonth())).$d}else A&&this.$d[A](g);return this.init(),this},g.set=function(e,t){return this.clone().$set(e,t)},g.get=function(e){return this[v.p(e)]()},g.add=function(e,a){var c,h=this;e=Number(e);var o=v.p(a),d=function(t){var s=x(h);return v.w(s.date(s.date()+Math.round(t*e)),h)};if(o===n)return this.set(n,this.$M+e);if(o===l)return this.set(l,this.$y+e);if("day"===o)return d(1);if(o===r)return d(7);var A=((c={})[s]=6e4,c[i]=36e5,c[t]=1e3,c)[o]||1,g=this.$d.getTime()+e*A;return v.w(g,this)},g.subtract=function(e,t){return this.add(-1*e,t)},g.format=function(e){var t=this,s=this.$locale();if(!this.isValid())return s.invalidDate||h;var i=e||"YYYY-MM-DDTHH:mm:ssZ",r=v.z(this),n=this.$H,a=this.$m,l=this.$M,c=s.weekdays,o=s.months,A=function(e,s,r,n){return e&&(e[s]||e(t,i))||r[s].slice(0,n)},g=function(e){return v.s(n%12||12,e,"0")},u=s.meridiem||function(e,t,s){var i=e<12?"AM":"PM";return s?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:v.s(l+1,2,"0"),MMM:A(s.monthsShort,l,o,3),MMMM:A(o,l),D:this.$D,DD:v.s(this.$D,2,"0"),d:String(this.$W),dd:A(s.weekdaysMin,this.$W,c,2),ddd:A(s.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(n),HH:v.s(n,2,"0"),h:g(1),hh:g(2),a:u(n,a,!0),A:u(n,a,!1),m:String(a),mm:v.s(a,2,"0"),s:String(this.$s),ss:v.s(this.$s,2,"0"),SSS:v.s(this.$ms,3,"0"),Z:r};return i.replace(d,function(e,t){return t||m[e]||r.replace(":","")})},g.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},g.diff=function(e,c,h){var o,d=v.p(c),A=x(e),g=(A.utcOffset()-this.utcOffset())*6e4,u=this-A,m=v.m(this,A);return m=((o={})[l]=m/12,o[n]=m,o[a]=m/3,o[r]=(u-g)/6048e5,o.day=(u-g)/864e5,o[i]=u/36e5,o[s]=u/6e4,o[t]=u/1e3,o)[d]||u,h?m:v.a(m)},g.daysInMonth=function(){return this.endOf(n).$D},g.$locale=function(){return u[this.$L]},g.locale=function(e,t){if(!e)return this.$L;var s=this.clone(),i=f(e,t,!0);return i&&(s.$L=i),s},g.clone=function(){return v.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},A}(),p=j.prototype;return x.prototype=p,[["$ms",e],["$s",t],["$m",s],["$H",i],["$W","day"],["$M",n],["$y",l],["$D",c]].forEach(function(e){p[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),x.extend=function(e,t){return e.$i||(e(t,j,x),e.$i=!0),x},x.locale=f,x.isDayjs=m,x.unix=function(e){return x(1e3*e)},x.en=u[g],x.Ls=u,x.p={},x},e.exports=t()},2567:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resume",function(){return s(4e3)}])},1434:function(e,t){"use strict";t.Z={src:"/_next/static/media/myimage.85e4330e.jpg",height:4032,width:3024,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAL/xAAeEAABAwUBAQAAAAAAAAAAAAACAAEEAwUREiGBBv/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAXEQEAAwAAAAAAAAAAAAAAAAACAAMR/9oADAMBAAIRAxEAPwCo3115iX6bPoBb6jyxF9AEtmFuDnxvcs/EREM2rIp1nZ//2Q==",blurWidth:6,blurHeight:8}},7890:function(e,t,s){"use strict";s.d(t,{Z:function(){return A}});var i=s(5893),r=s(3024),n=s(9417),a=s(7814),l=s(4184),c=s.n(l);s(7294);let h=e=>{let{icon:t,url:s}=e;return(0,i.jsx)("li",{className:c()("list-inline-item","g-mx-2"),children:(0,i.jsxs)("a",{className:c()("u-icon-v1","u-icon-size--sm","u-icon-slide-up--hover","g-color-gray-light-v1","g-bg-gray-light-v5","g-color-gray-light-v1--hover","rounded-circle"),href:s,target:"_blank",children:[(0,i.jsx)("i",{className:c()("g-font-size-default","g-line-height-1","u-icon__elem-regular"),children:(0,i.jsx)(a.G,{width:14,height:14,icon:t})}),(0,i.jsx)("i",{className:c()("g-font-size-default","g-line-height-1","u-icon__elem-hover"),children:(0,i.jsx)(a.G,{width:14,height:14,icon:t})})]})})};var o=s(3740);let d=e=>{let{study4:t,facebook:s,github:l,linkedin:d,line:A}=o.Z.links;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:c()("d-flex","align-items-center","justify-content-between","g-mb-5"),children:[(0,i.jsx)("h2",{className:c()("g-font-weight-300","g-mr-10"),children:o.Z.name}),(0,i.jsxs)("ul",{className:c()("list-inline","mb-0"),children:[(0,i.jsx)(h,{url:t.path,icon:n.XEC}),(0,i.jsx)(h,{url:s.path,icon:r.neY}),(0,i.jsx)(h,{url:l.path,icon:r.zhw}),(0,i.jsx)(h,{url:d.path,icon:r.hwn}),(0,i.jsx)(h,{url:A.path,icon:r.OPk})]})]}),(0,i.jsxs)("h6",{className:c()("h6","g-font-weight-300","g-mb-10"),children:[(0,i.jsx)("i",{className:c()("g-pos-rel","g-top-1","g-mr-5","g-color-gray-dark-v5"),children:(0,i.jsx)(a.G,{width:10.5,height:14,icon:n.O7Q})}),o.Z.job_title]}),e.children,(0,i.jsx)("hr",{className:c()("g-brd-gray-light-v4","g-my-5")}),(0,i.jsx)("p",{className:c()("lead","g-line-height-18"),children:"我是Bruno Jan在開發技術上熱愛網頁開發相關技術，嫻熟.net, ReactJS, 容器化, DevOps, 巨量交易, 高流量以及AWS的開發與維運， 因熱愛分享自身所學所以加入Study4.TW成為核心成員，曾分享自身過往的開發經驗, .net 的效能調校以及報表伺服器等等 在認證方面具有CSM、CSD與CSPO認證，也曾獲選兩任MVP(微軟最有價值專家)"})]})};var A=d},4e3:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return B},default:function(){return z}});var i=s(5893),r=s(9417),n=s(7814),a=s(4184),l=s.n(a),c=s(5675),h=s.n(c),o=s(7294),d={src:"/_next/static/media/csm.95721426.png",height:601,width:600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEX+5rT946f93Zj96r380G/82Ib93ZdMaXH8yFb80nX7wkP82Yr80XP93JP80XL93Zf7vzv7wkX93578zGPeVWFXAAAAE3RSTlMdErEmqvz9AP39+mpQ8QEB8eynByH1ZQAAAAlwSFlzAAAD6AAAA+gBtXtSawAAAD1JREFUeJwdy8cRwDAMBLFVPFLBif336rHxB6cE0oFSbl6TUG4+rArMe7cLyrDW7S7MiAiPCavu/axv/l0vQMIB857Zd04AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},A={src:"/_next/static/media/cspo.8c81e524.png",height:601,width:600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEX6x7D6wqn2nHH6zrr4uJrzfUX4tpb1kmRMaXH3poD2m3D3r433rYv2nHP1mnD4tpf1kWP0h1Qa4brBAAAAEXRSTlMdEqolrfH5/gD++/VpUAEBqRnfuosAAAAJcEhZcwAAA+gAAAPoAbV7UmsAAAA9SURBVHicHctLFoAwCAPAtAUS+lG5/2V9OvvBLQHSBTVbszdBlln1CGBG0IHhlVk+sElycgOnr7Dzzb/rBUO2AdXO0sowAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},g={src:"/_next/static/media/csd.5da3b933.png",height:522,width:600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAPFBMVEX79fXolJLgbmvnkI3hc3DrpKPro6Hnj4zkfnvmjInsqKbgb2vsq6nnkI7sqajjf3ztsbDfa2jpmZblh4Sfu2nLAAAAEXRSTlMCQv2m+9D9/v5/HVZ917+mgMd6RlYAAAAJcEhZcwAAA+gAAAPoAbV7UmsAAAA4SURBVHicBcEBFoAgCETBr/Bc0LSo+9+1GeDaOwHsVdUNTZL3aqyQxuiLrB7hlZjHF3KDmec8kx8y5QGwqrtISQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:7},u={src:"/_next/static/media/mvp.b1d2a674.png",height:272,width:820,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAJFBMVEXX3OO8xdHM0tzM0twRL1zT2eFugJzp7PC3wM3k5+zs7/JdcpA/Sy6CAAAACnRSTlP7/f3hwyrN4OS/bQjCwgAAAAlwSFlzAAAD6AAAA+gBtXtSawAAACJJREFUeJwFwYEBACAIw7BugAr8/68JGchziz0YpsmHrKgPBUAAXwwAL40AAAAASUVORK5CYII=",blurWidth:8,blurHeight:3};let m=o.memo(e=>(0,i.jsxs)("div",{className:l()("row"),children:[(0,i.jsx)("div",{className:l()("col"),children:(0,i.jsx)(h(),{className:l()("img-fluid","w-100"),src:d,alt:"CSM"})}),(0,i.jsx)("div",{className:l()("col"),children:(0,i.jsx)(h(),{className:l()("img-fluid","w-100"),src:g,alt:"CSD"})}),(0,i.jsx)("div",{className:l()("col"),children:(0,i.jsx)(h(),{className:l()("img-fluid","w-100"),src:A,alt:"CSPO"})}),(0,i.jsx)("div",{className:l()("col","d-flex","align-items-center"),children:(0,i.jsx)(h(),{className:l()("img-fluid","w-100"),src:u,alt:"MVP"})})]}));var f=s(7484),x=s.n(f),v=s(3985);let j=e=>{let{children:t}=e;return(0,i.jsx)("h2",{className:l()("h4"),children:t})},p=e=>{let{children:t}=e;return(0,i.jsx)("p",{className:l()("g-pl-20"),children:t})},w=e=>{let{children:t}=e;return(0,i.jsx)("li",{className:l()("g-pb-10"),children:t})},b={h2:j,p:p,li:w},N=e=>{let{company:t,title:s,during:r,english:n}=e;return(0,i.jsx)("li",{className:l()("col-12","g-brd-gray-light-v4","animate__animated","animate__fadeInDown"),children:(0,i.jsxs)("div",{className:l()("row"),children:[(0,i.jsxs)("div",{className:l()("col-4","g-py-15","text-align-end","g-pr-30","g-brd-right","g-brd-gray-light-v4"),children:[(0,i.jsx)("h4",{className:l()("h4","g-font-weight-300"),children:t}),(0,i.jsx)("h4",{className:l()("h4","g-font-weight-300"),children:n}),(0,i.jsx)("h5",{className:l()("h5","g-font-weight-300"),children:s}),(0,i.jsxs)("h6",{className:l()("h6","g-font-weight-300","mb-0"),children:[x()(r.start).format("YYYY.MM")," - ",r.end?x()(r.end).format("YYYY.MM"):"present"]})]}),(0,i.jsxs)("div",{className:l()("col-8","align-self-center","g-brd-darkblue-left","g-brd-5","g-pos-rel"),children:[(0,i.jsx)("div",{className:l()("g-left-minus-10","g-pos-abs","g-top-35"),children:(0,i.jsx)("i",{className:l()("d-block","g-width-18","g-height-18","g-bg-purple","g-brd-around","g-brd-4","g-brd-gray-light-v4","rounded-circle")})}),(0,i.jsx)("article",{className:l()("g-pb-50","g-px-20"),children:(0,i.jsx)(v.D,{components:b,children:e.content})})]})]})})},y=e=>{let{exps:t}=e;return(0,i.jsxs)("div",{className:l()("card","border-0","g-mb-40"),children:[(0,i.jsx)("div",{className:l()("u-heading-v3","g-mb-40","g-mx-20"),children:(0,i.jsxs)("h2",{className:l()("h2","u-heading-v3__title"),children:[(0,i.jsx)(n.G,{width:20,icon:r.HXv,className:l()("g-pos-rel","g-top-1","g-mr-5")}),"工作經歷"]})}),(0,i.jsx)("div",{className:l()("u-info-v1-1","g-bg-white-gradient-v1--after","g-pa-0"),children:(0,i.jsx)("div",{className:l()("c-scrollbar","g-pb-40"),children:(0,i.jsx)("ul",{className:l()("row","list-unstyled"),children:t.map((e,t)=>(0,o.createElement)(N,{...e,key:t}))})})})]})};var $=s(7890),D=s(3740),M=s(1434),S=s(3204);function O(e){return console.info(),(0,i.jsx)("div",{className:"col-lg-4 g-mb-30",children:(0,i.jsx)("div",{className:"u-block-hover g-height-100x",children:(0,i.jsxs)("a",{href:e.href,className:"g-height-100x",children:[(0,i.jsx)("figure",{className:"u-bg-overlay g-bg-black-gradient-opacity-v1--after g-height-100x d-flex",children:"string"==typeof e.image?(0,i.jsx)("img",{className:"d-flex m-auto img-fluid u-block-hover__main--zoom-v1",src:e.image,alt:e.title}):(0,i.jsx)(h(),{src:e.image,placeholder:"blur",className:"d-flex m-auto img-fluid u-block-hover__main--zoom-v1",style:{objectFit:"cover"},quality:50,alt:"background image"})}),(0,i.jsxs)("div",{className:"g-pos-abs g-right-20 g-bottom-10 g-left-20",children:[(0,i.jsxs)("span",{className:"g-color-white",children:[(0,i.jsx)("i",{className:"icon-clock g-pos-rel g-top-1 g-mr-2"}),e.description]}),(0,i.jsx)("h3",{className:"h2 g-font-weight-300",children:(0,i.jsx)("span",{className:"g-color-white g-color-white--hover",children:e.title})})]})]})})})}let _=e=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("section",{className:l()("g-layout-boxed","g-bgi-v8"),children:(0,i.jsx)("main",{className:l()("container"),children:(0,i.jsxs)("div",{className:l()("row","justify-content-between","g-pt-100"),children:[(0,i.jsx)("div",{className:l()("col-12"),children:(0,i.jsx)("div",{className:l()("g-brd-around","g-brd-gray-light-v4","g-pa-12","g-mb-40"),children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:l()("col-4"),children:(0,i.jsx)("div",{className:"g-py-30",children:(0,i.jsx)(h(),{className:l()("img-fluid","w-100"),src:M.Z,alt:"Bruno Jan"})})}),(0,i.jsxs)("div",{className:l()("col-8"),children:[(0,i.jsx)($.Z,{children:(0,i.jsxs)("ul",{className:l()("list-inline","g-font-weight-300"),children:[(0,i.jsxs)("li",{className:l()("list-inline-item","g-mr-20"),children:[(0,i.jsx)("i",{className:l()("g-pos-rel","g-top-1","g-mr-8","g-color-gray-dark-v5"),children:(0,i.jsx)(n.G,{width:10.5,height:14,icon:r.xiy})}),D.Z.birthday]}),(0,i.jsxs)("li",{className:l()("list-inline-item","g-mr-20"),children:[(0,i.jsx)("i",{className:l()("g-pos-rel","g-top-1","g-mr-8","g-color-gray-dark-v5"),children:(0,i.jsx)(n.G,{width:10.5,height:14,icon:r.IBq})}),D.Z.email]}),(0,i.jsxs)("li",{className:l()("list-inline-item","g-mr-20"),children:[(0,i.jsx)("i",{className:l()("g-pos-rel","g-top-1","g-mr-8","g-color-gray-dark-v5"),children:(0,i.jsx)(n.G,{width:10.5,height:14,icon:r.Xf_})}),D.Z.education]})]})}),(0,i.jsx)("hr",{className:l()("g-brd-gray-light-v4","g-my-20")}),(0,i.jsx)(m,{})]})]})})}),(0,i.jsxs)("div",{className:l()("col-12"),children:[(0,i.jsx)("div",{className:l()("u-heading-v3","g-mb-40","g-mx-20"),children:(0,i.jsxs)("h2",{className:l()("h2","u-heading-v3__title"),children:[(0,i.jsx)(n.G,{width:20,icon:r.a3I,className:l()("g-pos-rel","g-top-1","g-mr-5")}),"作品集"]})}),(0,i.jsx)("div",{className:l()("u-info-v1-1","g-bg-white-gradient-v1--after","g-px-20"),children:(0,i.jsxs)("div",{className:l()("c-scrollbar","g-pb-40","row"),children:[(0,i.jsx)(O,{image:S.Z,description:D.Z.description,title:D.Z.title,href:"https://brunojan.net"}),(0,i.jsx)(O,{image:"https://a-guan.adhome.com.tw/images/logo.jpg",description:"線上訂購，line收單",title:"阿冠水產",href:"https://a-guan.adhome.com.tw"}),(0,i.jsx)(O,{image:"https://cancer.adhome.com.tw/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.0b4efabd.png&w=640&q=75",description:"癌症資訊網站有獎徵答",title:"癌症協會",href:"https://cancer.adhome.com.tw"})]})})]}),(0,i.jsx)("div",{className:l()("col-12"),children:(0,i.jsx)(y,{exps:e.exps})})]})})})}),E=e=>(0,i.jsx)(i.Fragment,{children:e});_.getLayout=E;var B=!0,z=_}},function(e){e.O(0,[985,774,888,179],function(){return e(e.s=2567)}),_N_E=e.O()}]);