(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{448:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(452),o=n.n(r),a=function(t){for(var e=t.data,n=3;n<e.length;n+=4)if(0===e[n])return!0;return!1},i=function(t){var e=t.canvas,n=t.url,r=t.firstLetter,i=t.shape;return new Promise(function(t,f){var l=e.getContext("2d"),s=new Image;s.onload=function(){if("square"!==i&&"round"!==i&&"rounded"!==i){var n=function(t){var e=document.createElement("canvas");e.width=512,e.height=512;var n=e.getContext("2d");return[n.getImageData(0,0,512,1),n.getImageData(0,0,1,512),n.getImageData(511,0,1,512),n.getImageData(0,511,512,1)].some(a)}();console.log("asdfasdfasdf"),i=n?"square":"rounded"}var f=(new o.a).getPalette(s,3)[0],h=(e.height-256)/2,v=e.cloneNode(!0),p=v.getContext("2d"),g=e.width-80,d=e.height-80;p.drawImage(s,0,0,s.width,s.height,80,40,g,d),p.fillStyle="#00000022",u(p,0,h+15,256,256,25,!0,!1),p.fillStyle="#00000022",u(p,15,h,256,271,25,!0,!1),p.fillStyle="#00000022",u(p,15,h,256,301,25,!0,!1),p.fillStyle="#00000022",u(p,30,h-15,256,301,25,!0,!1);var b=e.width-80,m=e.height-80;l.save(),"rounded"===i?c(l,80,40,b,m,b/2):"round"===i?l.arc(80+b/2,40+m/2,b/2,0,2*Math.PI,!0):"square"===i&&c(l,80,40,b,m,25),l.clip(),l.drawImage(s,0,0,s.width,s.height,80,40,b,m),l.globalCompositeOperation="source-in",l.drawImage(v,0,0),l.globalCompositeOperation="source-over",l.restore(),l.fillStyle="rgb(".concat(f.join(","),")"),u(l,0,128,256,256,25,!0,!1),l.font="206px 'Segoe UI'";var w=f.reduce(function(t,e){return t+e},0);l.fillStyle=w>600?"#000000":"#ffffff",l.textAlign="center",l.fillText(r.toUpperCase(),128,256+256/3.5),t(e)},s.crossOrigin="anonymous",s.src=n})};function u(t,e,n,r,o,a,i,u){if("undefined"==typeof u&&(u=!0),"undefined"===typeof a&&(a=5),"number"===typeof a)a={tl:a,tr:a,br:a,bl:a};else{var c={tl:0,tr:0,br:0,bl:0};for(var f in c)a[f]=a[f]||c[f]}t.beginPath(),t.moveTo(e+a.tl,n),t.lineTo(e+r-a.tr,n),t.quadraticCurveTo(e+r,n,e+r,n+a.tr),t.lineTo(e+r,n+o-a.br),t.quadraticCurveTo(e+r,n+o,e+r-a.br,n+o),t.lineTo(e+a.bl,n+o),t.quadraticCurveTo(e,n+o,e,n+o-a.bl),t.lineTo(e,n+a.tl),t.quadraticCurveTo(e,n,e+a.tl,n),t.closePath(),i&&t.fill(),u&&t.stroke()}function c(t,e,n,r,o,a){t.beginPath(),t.moveTo(e+a,n),t.lineTo(e+r-a,n),t.quadraticCurveTo(e+r,n,e+r,n+a),t.lineTo(e+r,n+o-a),t.quadraticCurveTo(e+r,n+o,e+r-a,n+o),t.lineTo(e+a,n+o),t.quadraticCurveTo(e,n+o,e,n+o-a),t.lineTo(e,n+a),t.quadraticCurveTo(e,n,e+a,n),t.closePath()}},452:function(t,e){var n=function(t){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),document.body.appendChild(this.canvas),this.width=this.canvas.width=t.width,this.height=this.canvas.height=t.height,this.context.drawImage(t,0,0,this.width,this.height)};n.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)},n.prototype.update=function(t){this.context.putImageData(t,0,0)},n.prototype.getPixelCount=function(){return this.width*this.height},n.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)},n.prototype.removeCanvas=function(){this.canvas.parentNode.removeChild(this.canvas)};var r=function(){};if(r.prototype.getColor=function(t,e){return this.getPalette(t,5,e)[0]},r.prototype.getPalette=function(t,e,r){"undefined"==typeof e&&(e=10),("undefined"==typeof r||1>r)&&(r=10);for(var o,i,u,c,f=new n(t),l=f.getImageData().data,s=f.getPixelCount(),h=[],v=0;s>v;v+=r)i=l[(o=4*v)+0],u=l[o+1],c=l[o+2],l[o+3]>=125&&(i>250&&u>250&&c>250||h.push([i,u,c]));var p=a.quantize(h,e),g=p?p.palette():null;return f.removeCanvas(),g},!o)var o={map:function(t,e){var n={};return e?t.map(function(t,r){return n.index=r,e.call(n,t)}):t.slice()},naturalOrder:function(t,e){return e>t?-1:t>e?1:0},sum:function(t,e){var n={};return t.reduce(e?function(t,r,o){return n.index=o,t+e.call(n,r)}:function(t,e){return t+e},0)},max:function(t,e){return Math.max.apply(null,e?o.map(t,e):t)}};var a=function(){function t(t,e,n){return(t<<2*c)+(e<<c)+n}function e(t){function e(){n.sort(t),r=!0}var n=[],r=!1;return{push:function(t){n.push(t),r=!1},peek:function(t){return r||e(),void 0===t&&(t=n.length-1),n[t]},pop:function(){return r||e(),n.pop()},size:function(){return n.length},map:function(t){return n.map(t)},debug:function(){return r||e(),n}}}function n(t,e,n,r,o,a,i){var u=this;u.r1=t,u.r2=e,u.g1=n,u.g2=r,u.b1=o,u.b2=a,u.histo=i}function r(){this.vboxes=new e(function(t,e){return o.naturalOrder(t.vbox.count()*t.vbox.volume(),e.vbox.count()*e.vbox.volume())})}function a(e){var n,r,o,a,i=new Array(1<<3*c);return e.forEach(function(e){r=e[0]>>f,o=e[1]>>f,a=e[2]>>f,n=t(r,o,a),i[n]=(i[n]||0)+1}),i}function i(t,e){var r,o,a,i=1e6,u=0,c=1e6,l=0,s=1e6,h=0;return t.forEach(function(t){r=t[0]>>f,o=t[1]>>f,a=t[2]>>f,i>r?i=r:r>u&&(u=r),c>o?c=o:o>l&&(l=o),s>a?s=a:a>h&&(h=a)}),new n(i,u,c,l,s,h,e)}function u(e,n){if(n.count()){var r=n.r2-n.r1+1,a=n.g2-n.g1+1,i=n.b2-n.b1+1,u=o.max([r,a,i]);if(1==n.count())return[n.copy()];var c,f,l,s,h=0,v=[],p=[];if(u==r)for(c=n.r1;c<=n.r2;c++){for(s=0,f=n.g1;f<=n.g2;f++)for(l=n.b1;l<=n.b2;l++)s+=e[t(c,f,l)]||0;h+=s,v[c]=h}else if(u==a)for(c=n.g1;c<=n.g2;c++){for(s=0,f=n.r1;f<=n.r2;f++)for(l=n.b1;l<=n.b2;l++)s+=e[t(f,c,l)]||0;h+=s,v[c]=h}else for(c=n.b1;c<=n.b2;c++){for(s=0,f=n.r1;f<=n.r2;f++)for(l=n.g1;l<=n.g2;l++)s+=e[t(f,l,c)]||0;h+=s,v[c]=h}return v.forEach(function(t,e){p[e]=h-t}),function(t){var e,r,o,a,i,u=t+"1",f=t+"2",l=0;for(c=n[u];c<=n[f];c++)if(v[c]>h/2){for(o=n.copy(),a=n.copy(),e=c-n[u],i=(r=n[f]-c)>=e?Math.min(n[f]-1,~~(c+r/2)):Math.max(n[u],~~(c-1-e/2));!v[i];)i++;for(l=p[i];!l&&v[i-1];)l=p[--i];return o[f]=i,a[u]=o[f]+1,[o,a]}}(u==r?"r":u==a?"g":"b")}}var c=5,f=8-c,l=1e3,s=.75;return n.prototype={volume:function(t){var e=this;return(!e._volume||t)&&(e._volume=(e.r2-e.r1+1)*(e.g2-e.g1+1)*(e.b2-e.b1+1)),e._volume},count:function(e){var n=this,r=n.histo;if(!n._count_set||e){var o,a,i,u=0;for(o=n.r1;o<=n.r2;o++)for(a=n.g1;a<=n.g2;a++)for(i=n.b1;i<=n.b2;i++)index=t(o,a,i),u+=r[index]||0;n._count=u,n._count_set=!0}return n._count},copy:function(){var t=this;return new n(t.r1,t.r2,t.g1,t.g2,t.b1,t.b2,t.histo)},avg:function(e){var n=this,r=n.histo;if(!n._avg||e){var o,a,i,u,f=0,l=1<<8-c,s=0,h=0,v=0;for(a=n.r1;a<=n.r2;a++)for(i=n.g1;i<=n.g2;i++)for(u=n.b1;u<=n.b2;u++)f+=o=r[t(a,i,u)]||0,s+=o*(a+.5)*l,h+=o*(i+.5)*l,v+=o*(u+.5)*l;n._avg=f?[~~(s/f),~~(h/f),~~(v/f)]:[~~(l*(n.r1+n.r2+1)/2),~~(l*(n.g1+n.g2+1)/2),~~(l*(n.b1+n.b2+1)/2)]}return n._avg},contains:function(t){var e=this,n=t[0]>>f;return gval=t[1]>>f,bval=t[2]>>f,n>=e.r1&&n<=e.r2&&gval>=e.g1&&gval<=e.g2&&bval>=e.b1&&bval<=e.b2}},r.prototype={push:function(t){this.vboxes.push({vbox:t,color:t.avg()})},palette:function(){return this.vboxes.map(function(t){return t.color})},size:function(){return this.vboxes.size()},map:function(t){for(var e=this.vboxes,n=0;n<e.size();n++)if(e.peek(n).vbox.contains(t))return e.peek(n).color;return this.nearest(t)},nearest:function(t){for(var e,n,r,o=this.vboxes,a=0;a<o.size();a++)(e>(n=Math.sqrt(Math.pow(t[0]-o.peek(a).color[0],2)+Math.pow(t[1]-o.peek(a).color[1],2)+Math.pow(t[2]-o.peek(a).color[2],2)))||void 0===e)&&(e=n,r=o.peek(a).color);return r},forcebw:function(){var t=this.vboxes;t.sort(function(t,e){return o.naturalOrder(o.sum(t.color),o.sum(e.color))});var e=t[0].color;e[0]<5&&e[1]<5&&e[2]<5&&(t[0].color=[0,0,0]);var n=t.length-1,r=t[n].color;r[0]>251&&r[1]>251&&r[2]>251&&(t[n].color=[255,255,255])}},{quantize:function(t,n){function c(t,e){for(var n,r=1,o=0;l>o;)if((n=t.pop()).count()){var a=u(f,n),i=a[0],c=a[1];if(!i)return;if(t.push(i),c&&(t.push(c),r++),r>=e)return;if(o++>l)return}else t.push(n),o++}if(!t.length||2>n||n>256)return!1;var f=a(t);f.forEach(function(){});var h=i(t,f),v=new e(function(t,e){return o.naturalOrder(t.count(),e.count())});v.push(h),c(v,s*n);for(var p=new e(function(t,e){return o.naturalOrder(t.count()*t.volume(),e.count()*e.volume())});v.size();)p.push(v.pop());c(p,n-p.size());for(var g=new r;p.size();)g.push(p.pop());return g}}}();t.exports=r},527:function(t,e,n){},529:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.r(e);var o=n(47),a=n.n(o),i=n(77),u=n(31),c=n(39),f=n(33),l=n(32),s=n(34),h=n(1),v=n.n(h),p=n(121),g=(n(527),n(55)),d=n(78),b=n.n(d),m=n(448),w=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(f.a)(this,Object(l.a)(e).call(this))).componentDidMount=Object(i.a)(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(m.a)({canvas:n.canvas,url:n.state.icon,firstLetter:n.state.title[0],shape:""});case 2:case"end":return t.stop()}},t)})),n.handleImageLoad=function(){},n.renderBottomToolbar=function(){return v.a.createElement(p.Toolbar,null,v.a.createElement("div",{className:"left"},v.a.createElement(p.BackButton,{onClick:n.props.history.goBack})),v.a.createElement("div",{className:"center"},"Office-like Icon Generator"),v.a.createElement("div",{className:"right"}))},n.state=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){r(t,e,n[e])})}return t}({},b.a.parse(t.location.search)),n}return Object(s.a)(e,t),Object(c.a)(e,[{key:"componentWillMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var t=this;return console.log(this.props),v.a.createElement(p.Page,{className:"Home",renderBottomToolbar:this.renderBottomToolbar},v.a.createElement("h2",null,this.state.title," Icon"),v.a.createElement("br",null),v.a.createElement("canvas",{width:"512",height:"512",ref:function(e){return t.canvas=e}}))}}]),e}(h.Component);e.default=Object(g.f)(w)}}]);
//# sourceMappingURL=5.8b930d47.chunk.js.map