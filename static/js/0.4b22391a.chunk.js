(this.webpackJsonptodonotes=this.webpackJsonptodonotes||[]).push([[0],{669:function(t,e,n){"use strict";n.r(e),n.d(e,"createSwipeBackGesture",(function(){return a}));var r=n(54),o=(n(127),n(217)),a=function(t,e,n,a,i){var c=t.ownerDocument.defaultView;return Object(o.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:n,onMove:function(t){var e=t.deltaX/c.innerWidth;a(e)},onEnd:function(t){var e=t.deltaX,n=c.innerWidth,o=e/n,a=t.velocityX,s=n/2,u=a>=0&&(a>.2||t.deltaX>s),d=(u?1-o:o)*n,h=0;if(d>5){var f=d/Math.abs(a);h=Math.min(f,540)}i(u,o<=0?.01:Object(r.h)(0,o,.9999),h)}})}}}]);
//# sourceMappingURL=0.4b22391a.chunk.js.map