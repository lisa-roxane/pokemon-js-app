"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1609],{11609:function(e,t,r){r.d(t,{Z:function(){return z}});var n=r(92809),l=r(97131),i=r(79056),c=r(67294),o=r(45187),s=r(80723),u=r(223),a=r(32046),d=r(91761),p=r(96887),f=r(55104),h=r(10921),b=r(11069),g=r(49512),m=r(82457),Z=r(70917),v=r(30281),O=r(10277),y=r(53753),w=r(85984),j=r(61850),P=r(35944);function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S=(0,g.K)("input"),U=(0,g.K)("div"),D=(0,g.K)("li"),E=(0,Z.iv)([v.gU.filled,m.l0.p(8),{color:m.TV.foregroundDefault,border:"0 none",outline:"0 none",fontSize:m.TV.fontSizeDefault,lineHeight:"16px",display:"block",width:"100%","::placeholder":{color:m.TV.foregroundDimmer},":not([disabled])":{cursor:"text"}}],"",""),k={name:"bjn8wh",styles:"position:relative"},V={name:"bjn8wh",styles:"position:relative"},T={name:"bjn8wh",styles:"position:relative"};function z(e){var t,r=e.disabled,n=e.filter,Z=e.manualSelect,v=e.excludePrivate,I=e.onSelect,z=e.selectedIconOverride,B=c.useState([]),C=(0,i.Z)(B,2),K=C[0],X=C[1],_=c.useState(""),F=(0,i.Z)(_,2),N=F[0],H=F[1],M=c.useRef(null),R=n?K.filter(n):K,q=(0,s.Kb)({items:R,initialHighlightedIndex:Z?-1:0,itemToString:function(e){var t;return e?"".concat(null===(t=e.owner)||void 0===t?void 0:t.username,"/").concat(e.title):""}});c.useEffect((function(){return H(q.inputValue)}),[q.inputValue]);var A=(0,a.Z)(N,100),G=(0,o.aFh)({variables:{search:A,excludePrivate:v},onCompleted:function(e){if(!e.currentUser)throw new Error("Expected currentUser");e.currentUser.replSearch?X(e.currentUser.replSearch.reduce((function(e,t){return t?[].concat((0,l.Z)(e),[t]):e}),[])):X([])}}).loading,J=(0,p.Z)(I);c.useEffect((function(){var e;q.selectedItem&&(null===(e=M.current)||void 0===e||e.blur(),J.current(q.selectedItem))}),[q.selectedItem,J]);var L=(0,j.Z)("flag-posts-feed-v2")?h.Z:f.Z,Q=null!==(t=q.selectedItem)&&void 0!==t&&t.iconUrl&&q.inputValue?(0,P.tZ)(g.Z,{css:[m.l0.px(8),m.l0.center,"position:absolute;top:0;left:0;height:100%;",""],children:z||(0,P.tZ)(L,{alt:q.selectedItem.title,iconUrl:q.selectedItem.iconUrl,size:16})}):null;return(0,P.BX)(g.Z,{css:k,children:[(0,P.BX)(U,x(x({},q.getComboboxProps()),{},{css:V,children:[Q,(0,P.tZ)(S,x({css:[E,m.l0.pr(32),Q&&m.l0.pl(32),"",""]},q.getInputProps({ref:M,placeholder:"Search for a repl",onFocus:function(e){q.selectedItem&&(e.preventDefault(),e.currentTarget.select(),H("")),q.openMenu()}}))),(0,P.tZ)(g.Z,{css:[m.l0.center,m.l0.px(8),"position:absolute;top:0;right:0;height:100%;",""],children:(0,P.tZ)(O.Z,{})})]})),(0,P.tZ)(U,x(x({},q.getMenuProps()),{},{css:T,children:q.isOpen&&!r?(0,P.BX)(y.Z,{children:[G?(0,P.tZ)(D,{css:[m.l0.center,m.l0.py(32),"",""],children:(0,P.tZ)(b.Z,{})}):null,R.length||G?null:(0,P.tZ)(D,{css:[m.l0.center,m.l0.py(32),"",""],children:(0,P.BX)(u.x,{color:"dimmer",variant:"small",children:["No ",K.length>0?"more ":null,"repls found"]})}),R.map((function(e,t){return(0,P.tZ)(D,x(x({},q.getItemProps({item:e,index:t})),{},{children:(0,P.tZ)(w.Z,{filter:N,title:e.title,subtitle:(0,d.F)(e.timeUpdated),selected:q.selectedItem===e,highlighted:q.highlightedIndex===t,icon:e.iconUrl?(0,P.tZ)(L,{iconUrl:e.iconUrl,alt:e.title,size:16}):void 0})}),e.id)}))]}):null}))]})}}}]);
//# sourceMappingURL=1609-38fbfc7b44516ede8b86.js.map