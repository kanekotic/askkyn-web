(this["webpackJsonpreact-saas-template"]=this["webpackJsonpreact-saas-template"]||[]).push([[6],{112:function(e,a,t){"use strict";t(1);var n=t(86),c=t.n(n),i=t(258),s=t(24),r=t(5);a.a=Object(s.a)((function(e){return{main:{backgroundColor:e.palette.warning.light,border:"".concat(e.border.borderWidth,"px solid ").concat(e.palette.warning.main),padding:e.spacing(2),borderRadius:e.shape.borderRadius}}}),{withTheme:!0})((function(e){var a=e.className,t=e.children,n=e.classes;return Object(r.jsx)("div",{className:c()(n.main,a||null),children:Object(r.jsx)(i.a,{variant:"body2",children:t})})}))},113:function(e,a,t){"use strict";var n=1/0;function c(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0&&n>e?(n=e,window.requestAnimationFrame(c),window.scrollTo(0,e-e/8)):n=1/0}a.a=function(){setTimeout((function(){c()}),10)}},117:function(e,a,t){"use strict";var n=t(94),c=t(95),i=t(1),s=t.n(i),r=t(2),o=t(5);a.a=function(e){var a=e.component,t=Object(c.a)(e,["component"]);return Object(o.jsx)(r.a,Object(n.a)(Object(n.a)({},t),{},{render:function(e){return function(e){for(var a=arguments.length,t=new Array(a>1?a-1:0),n=1;n<a;n++)t[n-1]=arguments[n];var c=Object.assign.apply(Object,[{}].concat(t));return s.a.createElement(e,c)}(a,e,t)}}))}},118:function(e,a,t){"use strict";var n=t(1),c=t(30),i=t(305),s=t(306),r=t(256),o=t(273),l=t(259),d=t(263),b=t(278),j=t(257),m=t(258),p=t(24),g=t(119),u=t.n(g),h=t(5);a.a=Object(i.a)()(Object(p.a)((function(e){return{closeIcon:{marginRight:e.spacing(.5)},headSection:{width:200},blackList:{backgroundColor:e.palette.common.black,height:"100%"},noDecoration:{textDecoration:"none !important"}}}),{withTheme:!0})((function(e){var a=e.width,t=e.open,p=e.onClose,g=e.anchor,O=e.classes,x=e.menuItems,f=e.selectedItem,v=e.theme;return Object(n.useEffect)((function(){window.onresize=function(){Object(i.c)("sm",a)&&t&&p()}}),[a,t,p]),Object(h.jsxs)(s.a,{variant:"temporary",open:t,onClose:p,anchor:g,children:[Object(h.jsx)(r.a,{className:O.headSection,children:Object(h.jsx)(o.a,{style:{paddingTop:v.spacing(0),paddingBottom:v.spacing(0),height:"100%",justifyContent:"left"===g?"flex-start":"flex-end"},disableGutters:!0,children:Object(h.jsx)(l.a,{className:O.closeIcon,children:Object(h.jsx)(d.a,{onClick:p,"aria-label":"Close Navigation",children:Object(h.jsx)(u.a,{color:"primary"})})})})}),Object(h.jsx)(b.a,{className:O.blackList,children:x.map((function(e){return e.link?Object(h.jsx)(c.b,{to:e.link,className:O.noDecoration,onClick:p,children:Object(h.jsxs)(o.a,{button:!0,selected:f===e.name,disableRipple:!0,disableTouchRipple:!0,children:[Object(h.jsx)(l.a,{children:e.icon}),Object(h.jsx)(j.a,{primary:Object(h.jsx)(m.a,{variant:"subtitle1",className:"text-white",children:e.name})})]})},e.name):Object(h.jsxs)(o.a,{button:!0,onClick:e.onClick,children:[Object(h.jsx)(l.a,{children:e.icon}),Object(h.jsx)(j.a,{primary:Object(h.jsx)(m.a,{variant:"subtitle1",className:"text-white",children:e.name})})]},e.name)}))})]})})))},295:function(e,a,t){"use strict";t.r(a);var n=t(88),c=t(3),i=t(1),s=t(86),r=t.n(s),o=t(24),l=t(2),d=t(294),b=t(258),j=t(255),m=t(256),p=t(257),g=t(259),u=t(261),h=t(262),O=t(159),x=t.n(O),f=t(5);var v=Object(o.a)((function(e){return{paper:{borderBottomLeftRadius:0,borderBottomRightRadius:0},toolbar:{justifyContent:"space-between"},scaleMinus:{transform:"scaleX(-1)"},"@keyframes spin":{from:{transform:"rotate(359deg)"},to:{transform:"rotate(0deg)"}},spin:{animation:"$spin 2s infinite linear"},listItemSecondaryAction:{paddingRight:e.spacing(1)}}}),{withTheme:!0})((function(e){var a=e.classes,t=e.toggleAccountActivation,n=e.isAccountActivated;return Object(f.jsx)(j.a,{className:a.paper,children:Object(f.jsxs)(m.a,{className:a.toolbar,children:[Object(f.jsxs)(d.a,{display:"flex",alignItems:"center",children:[Object(f.jsx)(d.a,{mr:2,children:Object(f.jsx)(p.a,{primary:"Status",secondary:n?"Activated":"Not activated",className:"mr-2"})}),Object(f.jsx)(g.a,{children:Object(f.jsx)(x.a,{className:r()(n?a.spin:null,a.scaleMinus)})})]}),Object(f.jsx)(u.a,{className:a.listItemSecondaryAction,children:Object(f.jsx)(h.a,{color:"secondary",checked:n,onClick:t,inputProps:{"aria-label":n?"Deactivate Account":"Activate Account"}})})]})})})),w=t(299),k=t(269),y=t(270),C=t(271),T=t(272),N=t(265),S=t(266),L=t(263),R=t(162),A=t.n(R),D=t(264),B=t(302),I=t(303);var M=Object(o.a)((function(e){return{tableSortLabel:{cursor:"text",userSelect:"auto",color:"inherit !important"},noIcon:{"& path":{display:"none !important"}},paddingFix:{paddingLeft:e.spacing(3)}}}),{withTheme:!0})((function(e){var a=e.order,t=e.orderBy,n=e.rows,c=e.onRequestSort,s=e.classes,o=Object(i.useCallback)((function(e){return function(a){c(a,e)}}),[c]);return Object(f.jsx)(D.a,{children:Object(f.jsx)(N.a,{children:n.map((function(e,n){return Object(f.jsx)(S.a,{align:e.numeric?"right":"inherit",padding:"default",sortDirection:t===e.name&&a,className:0===n?s.paddingFix:null,children:c?Object(f.jsx)(B.a,{title:"Sort",placement:e.numeric?"bottom-end":"bottom-start",enterDelay:300,children:Object(f.jsx)(I.a,{active:t===e.id,direction:a,onClick:o(e.id),children:Object(f.jsx)(b.a,{variant:"body2",children:e.label})})}):Object(f.jsx)(I.a,{className:r()(s.tableSortLabel,s.noIcon),children:Object(f.jsx)(b.a,{variant:"body2",className:s.label,children:e.label})})},n)}))})})})),P=t(112),F=t(163),_=t.n(F),E=[{id:"name",numeric:!1,label:"Name"},{id:"type",numeric:!1,label:"Type"},{id:"state",numeric:!1,label:"State"},{id:"action",numeric:!1,label:"Action"}];var W=Object(o.a)((function(e){var a;return{tableWrapper:{overflowX:"auto",width:"100%"},blackBackground:{backgroundColor:e.palette.primary.main},contentWrapper:(a={padding:e.spacing(3)},Object(c.a)(a,e.breakpoints.down("xs"),{padding:e.spacing(2)}),Object(c.a)(a,"width","100%"),a),dBlock:{display:"block !important"},dNone:{display:"none !important"},firstData:{paddingLeft:e.spacing(3)}}}),{withTheme:!0})((function(e){var a=e.toggles,t=e.classes,n=Object(i.useCallback)((function(e){console.log("deleting row")}),[]);return Object(f.jsxs)(w.a,{children:[Object(f.jsx)(k.a,{expandIcon:Object(f.jsx)(A.a,{}),children:Object(f.jsx)(b.a,{children:"Toggles Project Awesome"})}),Object(f.jsx)(y.a,{className:t.dBlock,children:a.length>0?Object(f.jsxs)(C.a,{"aria-labelledby":"tableTitle",children:[Object(f.jsx)(M,{rowCount:a.length,rows:E}),Object(f.jsx)(T.a,{children:a.map((function(e,a){return Object(f.jsxs)(N.a,{hover:!0,tabIndex:-1,children:[Object(f.jsx)(S.a,{component:"th",scope:"row",className:t.firstData,children:e.name}),Object(f.jsx)(S.a,{component:"th",scope:"row",children:e.type}),Object(f.jsx)(S.a,{component:"th",scope:"row",children:"release"===e.type?e.value?"On":"Off":""}),Object(f.jsx)(S.a,{component:"th",scope:"row",children:Object(f.jsx)(L.a,{className:t.iconButton,onClick:function(){n(a)},"aria-label":"Delete",children:Object(f.jsx)(_.a,{className:t.blackIcon})})})]},a)}))})]}):Object(f.jsx)(P.a,{children:"No toggles defined yet."})})]})}));var z=function(e){var a=e.selectDashboard,t=e.pushMessageToSnackbar,n=e.isAccountActivated,c=e.toggleAccountActivation;return Object(i.useEffect)(a,[a]),Object(f.jsxs)(i.Fragment,{children:[Object(f.jsx)(d.a,{mt:4,children:Object(f.jsx)(b.a,{variant:"subtitle1",gutterBottom:!0,children:"Your Account"})}),Object(f.jsx)(v,{isAccountActivated:n,toggleAccountActivation:c}),Object(f.jsx)(W,{pushMessageToSnackbar:t,toggles:[{name:"myawesometoggle",type:"release",value:!0},{name:"myotherawesometoggle",type:"context",conditions:[{field:"a",value:"b",operation:"eq"}]}]})]})},q=t(117);function G(e){var a=e.classes,t=e.pushMessageToSnackbar,n=e.selectDashboard;return Object(f.jsx)("div",{className:a.wrapper,children:Object(f.jsx)(l.c,{children:Object(f.jsx)(q.a,{path:"",component:z,pushMessageToSnackbar:t,selectDashboard:n})})})}var J=Object(o.a)((function(e){var a;return{wrapper:(a={margin:e.spacing(1),width:"auto"},Object(c.a)(a,e.breakpoints.up("xs"),{width:"95%",marginLeft:"auto",marginRight:"auto",marginTop:e.spacing(4),marginBottom:e.spacing(4)}),Object(c.a)(a,e.breakpoints.up("sm"),{marginTop:e.spacing(6),marginBottom:e.spacing(6),width:"90%",marginLeft:"auto",marginRight:"auto"}),Object(c.a)(a,e.breakpoints.up("md"),{marginTop:e.spacing(6),marginBottom:e.spacing(6),width:"82.5%",marginLeft:"auto",marginRight:"auto"}),Object(c.a)(a,e.breakpoints.up("lg"),{marginTop:e.spacing(6),marginBottom:e.spacing(6),width:"70%",marginLeft:"auto",marginRight:"auto"}),a)}}),{withTheme:!0})(Object(i.memo)(G)),X=t(30),Y=t(276),H=t(300),U=t(273),V=t(304),$=t(305),K=t(306),Q=t(278),Z=t(184),ee=t.n(Z),ae=t(185),te=t.n(ae),ne=t(135),ce=t.n(ne),ie=t(275),se=t(277),re=t(133),oe=t.n(re),le=t(274),de=t(164),be=t.n(de),je=t(165),me=t.n(je);var pe=function(e){var a=e.message,t=e.divider,c=Object(i.useState)(!1),s=Object(n.a)(c,2),r=s[0],o=s[1],l=Object(i.useCallback)((function(){o(!0)}),[o]);return Object(f.jsxs)(U.a,{divider:t,children:[Object(f.jsx)(le.a,{children:r?Object(f.jsx)(be.a,{color:"secondary"}):Object(f.jsx)(V.a,{src:r?null:a.src,onError:l})}),Object(f.jsx)(p.a,{primary:a.text,secondary:"".concat(me()(1e3*a.date,new Date)," ago")})]})};var ge=Object(o.a)((function(e){return{tabContainer:{overflowY:"auto",maxHeight:350},popoverPaper:Object(c.a)({width:"100%",maxWidth:350,marginLeft:e.spacing(2),marginRight:e.spacing(1)},e.breakpoints.down("sm"),{maxWidth:270}),divider:{marginTop:-2},noShadow:{boxShadow:"none !important"}}}),{withTheme:!0})((function(e){var a=e.classes,t=e.messages,c=Object(i.useRef)(),s=Object(i.useState)(!1),r=Object(n.a)(s,2),o=r[0],l=r[1],j=Object(i.useCallback)((function(){l(!o)}),[o,l]),m=Object(i.useCallback)((function(){l(!1)}),[l]),g=o?"scroll-playground":null;return Object(f.jsxs)(i.Fragment,{children:[Object(f.jsx)(L.a,{onClick:j,buttonRef:c,"aria-label":"Open Messages","aria-describedby":g,color:"primary",children:Object(f.jsx)(oe.a,{})}),Object(f.jsxs)(ie.a,{disableScrollLock:!0,id:g,open:o,anchorEl:c.current,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},classes:{paper:a.popoverPaper},onClose:m,children:[Object(f.jsxs)(Y.a,{position:"static",color:"inherit",className:a.noShadow,children:[Object(f.jsx)(d.a,{pt:1,pl:2,pb:1,pr:1,children:Object(f.jsx)(b.a,{variant:"subtitle1",children:"Messages"})}),Object(f.jsx)(se.a,{className:a.divider})]}),Object(f.jsx)(Q.a,{dense:!0,className:a.tabContainer,children:0===t.length?Object(f.jsx)(U.a,{children:Object(f.jsx)(p.a,{children:"You haven't received any messages yet."})}):t.map((function(e,a){return Object(f.jsx)(pe,{message:e,divider:a!==t.length-1},a)}))})]})]})})),ue=t(118);var he=Object($.a)()(Object(o.a)((function(e){var a,t;return{appBar:Object(c.a)({boxShadow:e.shadows[6],backgroundColor:e.palette.common.white,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},e.breakpoints.down("xs"),{width:"100%",marginLeft:0}),appBarToolbar:(a={display:"flex",justifyContent:"space-between",paddingLeft:e.spacing(1),paddingRight:e.spacing(1)},Object(c.a)(a,e.breakpoints.up("sm"),{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}),Object(c.a)(a,e.breakpoints.up("md"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),Object(c.a)(a,e.breakpoints.up("lg"),{paddingLeft:e.spacing(4),paddingRight:e.spacing(4)}),a),accountAvatar:Object(c.a)({backgroundColor:e.palette.secondary.main,height:24,width:24,marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.down("xs"),{marginLeft:e.spacing(1.5),marginRight:e.spacing(1.5)}),drawerPaper:(t={height:"100%vh",whiteSpace:"nowrap",border:0,width:e.spacing(7),overflowX:"hidden",marginTop:e.spacing(8)},Object(c.a)(t,e.breakpoints.up("sm"),{width:e.spacing(9)}),Object(c.a)(t,"backgroundColor",e.palette.common.black),t),smBordered:Object(c.a)({},e.breakpoints.down("xs"),{borderRadius:"50% !important"}),menuLink:{textDecoration:"none",color:e.palette.text.primary},iconListItem:{width:"auto",borderRadius:e.shape.borderRadius,paddingTop:11,paddingBottom:11,marginLeft:e.spacing(1),marginRight:e.spacing(1)},textPrimary:{color:e.palette.primary.main},mobileItemSelected:{backgroundColor:"".concat(e.palette.primary.main," !important")},brandText:{fontFamily:"'Baloo Bhaijaan', cursive",fontWeight:400},username:{paddingLeft:0,paddingRight:e.spacing(2)},justifyCenter:{justifyContent:"center"},permanentDrawerListItem:{justifyContent:"center",paddingTop:e.spacing(2),paddingBottom:e.spacing(2)}}}),{withTheme:!0})((function(e){var a=e.selectedTab,t=e.messages,c=e.classes,s=e.width,o=Object(i.useRef)([]),l=Object(i.useState)(!1),j=Object(n.a)(l,2),u=j[0],h=j[1],O=Object(i.useCallback)((function(){h(!0)}),[h]),x=Object(i.useCallback)((function(){h(!1)}),[h]),v=[{link:"/c/dashboard",name:"Dashboard",onClick:x,icon:{desktop:Object(f.jsx)(ee.a,{className:"Dashboard"===a?c.textPrimary:"text-white",fontSize:"small"}),mobile:Object(f.jsx)(ee.a,{className:"text-white"})}}];return Object(f.jsxs)(i.Fragment,{children:[Object(f.jsx)(Y.a,{position:"sticky",className:c.appBar,children:Object(f.jsxs)(m.a,{className:c.appBarToolbar,children:[Object(f.jsxs)(d.a,{display:"flex",alignItems:"center",children:[Object(f.jsx)(H.a,{smUp:!0,children:Object(f.jsx)(d.a,{mr:1,children:Object(f.jsx)(L.a,{"aria-label":"Open Navigation",onClick:O,color:"primary",children:Object(f.jsx)(ce.a,{})})})}),Object(f.jsxs)(H.a,{xsDown:!0,children:[Object(f.jsx)(b.a,{variant:"h4",className:c.brandText,display:"inline",color:"secondary",children:"T"}),Object(f.jsx)(b.a,{variant:"h4",className:c.brandText,display:"inline",color:"primary",children:"o"}),Object(f.jsx)(b.a,{variant:"h4",className:c.brandText,display:"inline",color:"secondary",children:"ggl"}),Object(f.jsx)(b.a,{variant:"h4",className:c.brandText,display:"inline",color:"primary",children:"ee"})]})]}),Object(f.jsxs)(d.a,{display:"flex",justifyContent:"flex-end",alignItems:"center",width:"100%",children:[Object(f.jsx)(ge,{messages:t}),Object(f.jsxs)(U.a,{disableGutters:!0,className:r()(c.iconListItem,c.smBordered),children:[Object(f.jsx)(V.a,{alt:"profile picture",src:"".concat("","/images/logged_in/profilePicture.jpg"),className:r()(c.accountAvatar)}),Object($.c)("sm",s)&&Object(f.jsx)(p.a,{className:c.username,primary:Object(f.jsx)(b.a,{color:"textPrimary",children:"Username"})})]})]}),Object(f.jsx)(X.b,{to:"/",children:Object(f.jsx)(te.a,{})})]})}),Object(f.jsx)(H.a,{xsDown:!0,children:Object(f.jsx)(K.a,{variant:"permanent",classes:{paper:c.drawerPaper},open:!1,children:Object(f.jsx)(Q.a,{children:v.map((function(e,t){return Object(f.jsx)(X.b,{to:e.link,className:c.menuLink,onClick:e.onClick,ref:function(e){o.current[t]=e},children:Object(f.jsx)(B.a,{title:e.name,placement:"right",children:Object(f.jsx)(U.a,{selected:a===e.name,button:!0,divider:t!==v.length-1,className:c.permanentDrawerListItem,onClick:function(){o.current[t].click()},"aria-label":"Logout"===e.name?"Logout":"Go to ".concat(e.name),children:Object(f.jsx)(g.a,{className:c.justifyCenter,children:e.icon.desktop})})},e.name)},t)}))})})}),Object(f.jsx)(ue.a,{menuItems:v.map((function(e){return{link:e.link,name:e.name,icon:e.icon.mobile,onClick:e.onClick}})),anchor:"left",open:u,selectedItem:a,onClose:x})]})}))),Oe=t(301);var xe=Object(o.a)((function(e){return{root:{backgroundColor:e.palette.primary.main,paddingTop:0,paddingBottom:0}}}),{withTheme:!0})((function(e){var a=e.classes,t=e.getPushMessageFromChild,c=Object(i.useState)(!1),s=Object(n.a)(c,2),r=s[0],o=s[1],l=Object(i.useState)({}),d=Object(n.a)(l,2),b=d[0],j=d[1],m=Object(i.useRef)([]),p=Object(i.useCallback)((function(){m.current.length>0&&(j(m.current.shift()),o(!0))}),[j,o,m]),g=Object(i.useCallback)((function(e,a){"clickaway"!==a&&o(!1)}),[o]),u=Object(i.useCallback)((function(e){m.current.push({message:e,key:(new Date).getTime()}),r?o(!1):p()}),[m,r,o,p]);return Object(i.useEffect)((function(){t(u)}),[t,u]),Object(f.jsx)(Oe.a,{disableWindowBlurListener:!0,anchorOrigin:{vertical:"bottom",horizontal:"left"},open:r,autoHideDuration:6e3,onClose:g,onExited:p,ContentProps:{classes:{root:a.root}},message:Object(f.jsx)("span",{children:b.message?b.message.text:null})},b.key)})),fe=t(113),ve=[{src:"".concat("","/images/logged_in/image1.jpg"),name:"Markus"},{src:"".concat("","/images/logged_in/image2.jpg"),name:"David"},{src:"".concat("","/images/logged_in/image3.jpg"),name:"Arold"},{src:"".concat("","/images/logged_in/image4.jpg"),name:"Joanic"},{src:"".concat("","/images/logged_in/image5.jpg"),name:"Sophia"},{src:"".concat("","/images/logged_in/image6.jpg"),name:"Aaron"},{src:"".concat("","/images/logged_in/image7.jpg"),name:"Steven"},{src:"".concat("","/images/logged_in/image8.jpg"),name:"Felix"},{src:"".concat("","/images/logged_in/image9.jpg"),name:"Vivien"},{src:"".concat("","/images/logged_in/image10.jpg"),name:"Leonie"}];function we(e){var a=e.classes,t=Object(i.useState)(null),c=Object(n.a)(t,2),s=c[0],o=c[1],l=Object(i.useState)(!1),d=Object(n.a)(l,2),b=d[0],j=d[1],m=Object(i.useState)([]),p=Object(n.a)(m,2),g=p[0],u=p[1],h=Object(i.useState)(null),O=Object(n.a)(h,2),x=O[0],v=O[1],w=Object(i.useCallback)((function(){!function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}}(ve);for(var e=[],a=ve.length,t=Math.round((new Date).getTime()/1e3-86400*a),n=0;n<a;n+=1){var c={id:n,src:ve[n].src,date:t,text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed."};t+=86400,e.push(c)}e.reverse(),u(e)}),[u]),k=Object(i.useCallback)((function(){Object(fe.a)(),document.title="Toggle - Dashboard",o("Dashboard"),b||j(!0)}),[o,b,j]),y=Object(i.useCallback)((function(e){v((function(){return e}))}),[v]);return Object(i.useEffect)((function(){w()}),[w]),Object(f.jsxs)(i.Fragment,{children:[Object(f.jsx)(he,{selectedTab:s,messages:g}),Object(f.jsx)(xe,{getPushMessageFromChild:y}),Object(f.jsx)("main",{className:r()(a.main),children:Object(f.jsx)(J,{pushMessageToSnackbar:x,selectDashboard:k})})]})}a.default=Object(o.a)((function(e){return{main:Object(c.a)({marginLeft:e.spacing(9),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},e.breakpoints.down("xs"),{marginLeft:0})}}),{withTheme:!0})(Object(i.memo)(we))}}]);
//# sourceMappingURL=6.6396595e.chunk.js.map