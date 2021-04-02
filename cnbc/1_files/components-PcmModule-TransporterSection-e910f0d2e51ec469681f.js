(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[117],{1239:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"TransporterSection",(function(){return U}));var n=a(36),r=a.n(n),i=a(37),l=a.n(i),o=a(123),s=a.n(o),c=a(68),d=a.n(c),u=a(69),m=a.n(u),g=a(48),h=a.n(g),y=a(4),p=a.n(y),f=a(0),b=a.n(f),v=a(1),S=a.n(v),I=a(53),E=a(879),C=a.n(E),T=a(863),k=a.n(T),P=a(941),q=a.n(P),L=a(919),N=a(263),A=a(881),O=a(129),w=a(29),M=a(851),j=a(889),B=a(852),R=a(856),D=a(1815),x;function V(e){var t=_();return function(){var a,n=h()(e);if(t){var r=h()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return m()(this,a)}}function _(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var F={},H=w.b;F[w.a]=Object(M.a)({chunkName:"components/PcmModule/TransporterSection/styles.acorns.scss",requireAsync:function(){return a.e(206).then(a.t.bind(null,1365,7))},requireSync:function e(t){var n=this.resolve(t);return a(n)},resolve:function(){return 1365}}),F[w.b]=Object(M.a)({chunkName:"components/PcmModule/TransporterSection/styles.cnbc.scss",requireAsync:function(){return a.e(365).then(a.t.bind(null,1366,7))},requireSync:function e(t){var n=this.resolve(t);return a(n)},resolve:function(){return 1366}}),F[w.d]=Object(M.a)({chunkName:"components/PcmModule/TransporterSection/styles.makeit.scss",requireAsync:function(){return a.e(263).then(a.t.bind(null,1367,7))},requireSync:function e(t){var n=this.resolve(t);return a(n)},resolve:function(){return 1367}});var W=(x={},p()(x,w.a,C.a),p()(x,w.b,k.a),p()(x,w.d,k.a),p()(x,w.e,q.a),p()(x,"default",k.a),x),U=function(e){d()(a,e);var t=V(a);function a(){var e;r()(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return e=t.call.apply(t,[this].concat(i)),p()(s()(e),"organizeCards",(function(){var t=e.props,a=t.data,n=t.articleId,r=t.brand,i=W[r]||W.default;return a.assets.map((function(e){var t=e.author&&e.author.length?e.author[0].name:"",a=e.author&&e.author.length>0?e.author[0].url:"";return{id:e.id,title:e.title||"",type:e.type||"",isLive:!1,isPro:e.premium||!1,image:e.promoImage?e.promoImage.url:i,byline:e.creatorOverwrite?e.creatorOverwrite:t,bylineUrl:e.creatorOverwrite?"#":a,datePublished:e.datePublished,dateModified:e.dateModified,url:e.url?e.url:"#",formattedTimeStamp:e.dateLastPublishedSixHr,videoTime:Object(R.b)(e.duration)||"00:00",mediaType:"cnbcvideo"===e.type?"video":"",brand:e.brand,section:e.section,native:e.native||!1}})).filter((function(e){return e.id!==n}))})),e}return l()(a,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.dataAnalytics,n=e.dataTest,r=e.premium,i=e.isSpecialReportSubType,l=e.brand,o=e.template,s=e.sectionTitle,c=e.sectionUrl,d=e.type,u=e.dataCounter,m=e.styles;if(!(l!==w.b&&l!==w.d||i||r))return null;if(!t)return b.a.createElement(N.a,{data:{error:"AssetList query came back as null"},errorSource:"TransporterSection",errorProps:this.props});if(!Array.isArray(t.assets)||t.assets.length<3)return null;var g=this.organizeCards();if(0===g.length)return null;var h,y=Object(B.e)(o,"TransporterSection",u),p=!0,f=!1;l===w.e?(h="Latest From Select",p=!1,f=!0):h=s?"More In ".concat(s):t.title?"More In ".concat(t.title):"More";var v=c||t.url;return b.a.createElement("div",{className:m.transporterWrapper,id:y,"data-test":n,"data-analytics":a},b.a.createElement(A.c,{brand:l,title:h,titleLink:f?"":v,assetType:d},b.a.createElement(L.a,{brand:l,cards:g,layoutType:"square-lead",dataId:y}),v&&p&&b.a.createElement(D.a,{title:"Read More",url:v,brand:l},"Read More",b.a.createElement("span",{className:"icon-arrow-down-readmore ".concat(m.arrowIcon)}))))}}]),a}(b.a.Component);function z(e){var t=((e.page.page||{}).section||{}).subType;return{isSpecialReportSubType:Object(O.f)(t)}}U.propTypes={brand:S.a.string,data:S.a.object.isRequired,dataAnalytics:S.a.string.isRequired,dataTest:S.a.string.isRequired,sectionTitle:S.a.string,sectionUrl:S.a.string,articleId:S.a.number.isRequired,dataCounter:S.a.number.isRequired,template:S.a.string,type:S.a.string,premium:S.a.bool,isSpecialReportSubType:S.a.bool,styles:S.a.object.isRequired},U.defaultProps={brand:H,isSpecialReportSubType:!1,sectionTitle:null,sectionUrl:null,type:"",premium:!1,template:""};var K=Object(M.b)(F,U);t.default=Object(I.b)(z)(Object(j.a)(K))}.call(this,"/")},1815:function(e,t,a){"use strict";(function(e){var n=a(0),r=a.n(n),i=a(1),l=a.n(i),o=a(46),s=a(29),c=a(851),d={};d[s.a]=Object(c.a)({chunkName:"components/PcmModule/TransporterSection/Button/styles.acorns.scss",requireAsync:function(){return a.e(205).then(a.t.bind(null,1368,7))},requireSync:function e(t){var n=this.resolve(t);return a(n)},resolve:function(){return 1368}}),d[s.b]=Object(c.a)({chunkName:"components/PcmModule/TransporterSection/Button/styles.cnbc.scss",requireAsync:function(){return a.e(364).then(a.t.bind(null,1369,7))},requireSync:function e(t){var n=this.resolve(t);return a(n)},resolve:function(){return 1369}}),d[s.d]=Object(c.a)({chunkName:"components/PcmModule/TransporterSection/Button/styles.makeit.scss",requireAsync:function(){return a.e(262).then(a.t.bind(null,1370,7))},requireSync:function e(t){var n=this.resolve(t);return a(n)},resolve:function(){return 1370}});var u=function(e){var t=e.title,a=e.url,n=e.children,i=e.styles;return r.a.createElement("div",{className:"".concat(i.buttonContainer)},r.a.createElement(o.b,{className:i.buttonLink,to:a,title:t},n))};u.propTypes={title:l.a.string,url:l.a.string.isRequired,children:l.a.node,styles:l.a.object.isRequired},u.defaultProps={title:"",url:"",children:null},t.a=Object(c.b)(d,u)}).call(this,"/")},856:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i}));var n=function(e){return e<10?"0".concat(e):"".concat(e)},r=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=3600,r=60,i=e,l=Math.floor(i/a);i-=a*l;var o=Math.floor(i/r);if(i-=r*o,!t&&0===l)return"".concat(o,":").concat(n(i));if(!t&&l>0)return"".concat(l,":").concat(n(o),":").concat(n(i));var s="".concat(n(o),":").concat(n(i));return l>0&&(s="".concat(n(l),":").concat(s)),s},i=function(e){var t=e,a=Math.floor(t/3600);t-=3600*a;var n=Math.floor(t/60);return t-=60*n,a>0&&0===n&&0===t?"PT".concat(a,"H"):a>0&&n>0&&0===t?"PT".concat(a,"H").concat(n,"M"):a>0&&n>0&&t>0?"PT".concat(a,"H").concat(n,"M").concat(t,"S"):n>0&&0===t?"PT".concat(n,"M"):n>0&&t>0?"PT".concat(n,"M").concat(t,"S"):"PT".concat(t,"S")}},858:function(e,t,a){"use strict";(function(e){var n=a(0),r=a.n(n),i=a(1),l=a.n(i),o=a(29),s=a(851),c=a(855),d={};d[o.b]=Object(s.a)({chunkName:"components/shared/Mps/AdUnits/SponsorLogo/styles.cnbc.scss",requireAsync:function(){return a.e(390).then(a.t.bind(null,861,7))},requireSync:function e(t){var n=this.resolve(t);return a(n)},resolve:function(){return 861}}),d[o.d]=Object(s.a)({chunkName:"components/shared/Mps/AdUnits/SponsorLogo/styles.makeit.scss",requireAsync:function(){return a.e(283).then(a.t.bind(null,862,7))},requireSync:function e(t){var n=this.resolve(t);return a(n)},resolve:function(){return 862}});var u=function(e){var t=e.id,a=e.slotMethod,n=e.dataId,i=e.target,l=e.slot,o=e.styles,s=e.hideOnMobile;return r.a.createElement(c.a,{id:t,slot:l,clsName:o.container,slotMethod:a,dataId:n,target:i,hideOnMobile:s})};u.propTypes={id:l.a.string,slot:l.a.string,slotMethod:l.a.string,dataId:l.a.oneOfType([l.a.string,l.a.number]),target:l.a.string,styles:l.a.object.isRequired,hideOnMobile:l.a.bool},u.defaultProps={slot:"sponsorlogo",slotMethod:"cloneAd",id:"dart_wrapper_sponsorlogo",dataId:0,target:"",hideOnMobile:!0},t.a=Object(s.b)(d,u)}).call(this,"/")},863:function(e,t,a){e.exports=a.p+"7fd26026fd34587b562550a63aea7aae.jpg"},879:function(e,t,a){e.exports=a.p+"23dcd2f4e1897a45eaaaa7834b35fc48.png"},881:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n),i=a(1),l=a.n(i),o=a(35),s=a(46),c=a(29),d=a(851),u=a(921),m=c.b,g={};g[c.a]=Object(d.a)({chunkName:"components/shared/SectionWrapper/styles.acorns.scss",requireAsync:function(){return a.e(224).then(a.t.bind(null,902,7))},requireSync:function e(t){var n=this.resolve(t);return a(n)},resolve:function(){return 902}}),g[c.b]=Object(d.a)({chunkName:"components/shared/SectionWrapper/styles.cnbc.scss",requireAsync:function(){return a.e(395).then(a.t.bind(null,903,7))},requireSync:function e(t){var n=this.resolve(t);return a(n)},resolve:function(){return 903}}),g[c.d]=Object(d.a)({chunkName:"components/shared/SectionWrapper/styles.makeit.scss",requireAsync:function(){return a.e(287).then(a.t.bind(null,904,7))},requireSync:function e(t){var n=this.resolve(t);return a(n)},resolve:function(){return 904}}),g[c.e]=Object(d.a)({chunkName:"components/shared/SectionWrapper/styles.select.scss",requireAsync:function(){return a.e(325).then(a.t.bind(null,905,7))},requireSync:function e(t){var n=this.resolve(t);return a(n)},resolve:function(){return 905}});var h={dynamicContentFeed:"dynamicContentFeed",transporterSection:"transporterSection",cardCollection:"cardCollection",twoColumnImageDense:"twoColumnImageDense",unspecified:"unspecified"},y=function(e){var t=e.titleLink,a=e.link,n=e.linkText,i=e.brand,l=e.color,c=e.children,d=e.titleColor,m=e.titleImage,g=e.dataId,h=e.hasLogoAd,y=e.title,p=e.isVideoDetailPage,f=e.isBioPage,b=e.isSectionPage,v=e.parentComponent,S=e.noHeader,I=e.styles,E=Object(o.a)(I.container,{keyValuePairs:[[I.containerBackground,"dynamicContentFeed"!==v]]});return r.a.createElement("section",{id:g,className:E,"data-test":"SectionWrapper"},!S&&r.a.createElement(u.a,{brand:i,color:l,title:y,titleLink:t,titleColor:d,titleImage:m,parentComponent:v,hasLogoAd:h,styles:I,isVideoDetailPage:p,isBioPage:f,isSectionPage:b,dataId:g}),r.a.createElement("div",{className:I.content},c),a&&r.a.createElement(s.b,{to:a,title:n,className:I.link},n))};y.propTypes={title:l.a.string,titleLink:l.a.string,brand:l.a.string,link:l.a.string,linkText:l.a.string,color:l.a.string,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),titleColor:l.a.string,titleImage:l.a.string,dataId:l.a.oneOfType([l.a.string,l.a.number]),hasLogoAd:l.a.bool,isVideoDetailPage:l.a.bool,isBioPage:l.a.bool,isSectionPage:l.a.bool,noHeader:l.a.bool,parentComponent:l.a.oneOf(Object.keys(h)),styles:l.a.object.isRequired},y.defaultProps={titleLink:null,link:null,linkText:"See More",brand:m,color:null,children:null,titleColor:null,titleImage:null,dataId:null,hasLogoAd:!1,title:"",isVideoDetailPage:!1,isBioPage:!1,isSectionPage:!1,noHeader:!1,parentComponent:h.unspecified};var p=Object(d.b)(g,y);t.c=p}).call(this,"/")},889:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(43);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{useMobileWebviewContext:i.d},a=function(a){return(0,t.useMobileWebviewContext)().isMobileWebview?null:r.a.createElement(e,a)};return a}},895:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1),l=a.n(i),o=a(46),s=a(858),c=function(e){var t=e.title,a=e.color,n=e.dataId,i=e.titleColor,l=e.titleImage,c=e.titleLink,d=e.hasLogoAd,u=e.styles;return r.a.createElement("header",{className:u.header},r.a.createElement("span",{className:u.decoration,"aria-hidden":!0,style:a&&{backgroundColor:a}}),l?r.a.createElement("img",{className:u.titleImage,src:l,alt:t}):r.a.createElement("h2",{className:u.title,style:i&&{color:i}},c?r.a.createElement(o.b,{to:c},t):r.a.createElement("span",null,t)),d&&r.a.createElement("div",{className:u.sponsorIcon},r.a.createElement(s.a,{id:"SponsorLogo-".concat(n),target:"module=".concat(t)})))};c.propTypes={dataId:l.a.oneOfType([l.a.string,l.a.number]),styles:l.a.object.isRequired,color:l.a.string,title:l.a.string.isRequired,titleLink:l.a.string,titleColor:l.a.string,titleImage:l.a.string,hasLogoAd:l.a.bool},c.defaultProps={dataId:"",color:null,titleLink:null,titleColor:null,titleImage:null,hasLogoAd:!1},t.a=c},919:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1),l=a.n(i),o=a(59),s=a(29),c=a(920),d=a.n(c),u=Object(o.a)({resolved:{},chunkName:function(){return"components-Column"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!a.m[t]},importAsync:function(){return a.e(40).then(a.bind(null,878))},requireAsync:function(e){var t=this,a=this.resolve(e);return this.resolved[a]=!1,this.importAsync(e).then((function(e){return t.resolved[a]=!0,e}))},requireSync:function e(t){var n=this.resolve(t);return a(n)},resolve:function e(){return 878}}),m=Object(o.a)({resolved:{},chunkName:function(){return"components-Layout-MiniHeroPackageLayout"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!a.m[t]},importAsync:function(){return a.e(45).then(a.bind(null,910))},requireAsync:function(e){var t=this,a=this.resolve(e);return this.resolved[a]=!1,this.importAsync(e).then((function(e){return t.resolved[a]=!0,e}))},requireSync:function e(t){var n=this.resolve(t);return a(n)},resolve:function e(){return 910}}),g="Layout",h=function(e){var t=e.cards,a=e.layoutType,n=e.hasInlineVideoPlayback,i=e.displayThumbnailPreviews,l=e.hasPackage,o=e.packageTitle,s=e.flexibleLabels,c=e.brand,h=e.dataId,y=e.hasShareThrough,p=e.playFirstElementInline,f=e.hideByline,b=e.endCard,v={"single-lead-left":["featured-rectangle-media","rectangle-media-half","rectangle-media-half"],"single-lead-left-package":["featured-rectangle-media","title-byline","title-byline"],"single-lead-right":["square-media","title-only","title-only","title-only"],"single-lead-right-package":["square-to-rectangle-media","title-only","title-only","title-only"],"dual-lead-left":["featured-rectangle-media","left-square-media","title-only-half","title-only-half"],"dual-lead-left-package":["featured-rectangle-media","title-byline","title-only-half","title-only-half"],"dual-lead-right":["featured-secondary-rectangle-media","title-only","title-only","title-only","title-only"],"dual-lead-right-package":["featured-secondary-rectangle-media","title-only","title-only","title-only","title-only"],"square-image-dense-left":["square-lead-media-left"],"square-image-dense-right":["square-lead-left-rectangle-to-rectangle-media-half-right","square-lead-left-rectangle-to-rectangle-media-half-right"],"square-lead-left":["featured-square-to-rectangle-media"],"square-lead-right":["square-lead-right-rectangle-to-rectangle-media-half","square-lead-right-rectangle-to-rectangle-media-half"],"rectangle-lead-left":["featured-rectangle-to-rectangle-media"],"rectangle-lead-right":["rectangle-to-rectangle-media-half","rectangle-to-rectangle-media-half"],"two-up-left":["title-byline-no-border"],"two-up-right":["title-byline-right"],"three-up":["rectangle-to-left-square-media"],"four-up":["title-only-four-up"],"three-up-stack":["three-up-stack-rectangle-square-media","three-up-stack-rectangle-square-media","three-up-stack-rectangle-square-media","title-only-three-up-stack","title-only-three-up-stack","title-only-three-up-stack"],"three-up-stack-last":["three-up-stack-rectangle-square-media","three-up-stack-rectangle-square-media","three-up-stack-rectangle-square-media","title-only-three-up-stack-last","title-only-three-up-stack-last","title-only-three-up-stack-last"],river:["river-rectangle-square-media","river-rectangle-square-media","river-rectangle-square-media","title-only-river","title-only-river","title-only-river"],"river-last":["river-rectangle-square-media","river-rectangle-square-media","river-rectangle-square-media","title-only-river-last","title-only-river-last","title-only-river-last"],"dense-left":["rectangle-media-ultra-dense","title-only-ultra-dense","title-only-ultra-dense"],"dense-right":["title-only-no-border","title-only-ultra-dense","title-only-ultra-dense","title-only-ultra-dense","title-only-ultra-dense"],"dense-right-label":["title-only-no-border","title-only","title-only","title-only","title-only"],"image-dense-left":["left-rectangle-to-top-media","left-rectangle-to-top-media","left-rectangle-to-top-media"],"image-dense-right":["title-only-no-border","title-only","title-only","title-only","title-only"],"image-dense-right-label":["title-only-no-border","title-only","title-only","title-only","title-only"],"one-image-dense":["featured-rectangle-media","title-only","title-only","title-only"],"mini-hero-left":["featured-rectangle-media"],"mini-hero-right":["title-only-top-solid-border","title-only","title-only","title-only","title-only"],"image-dense-mod-right":["featured-rectangle-media-image-dense"],"image-dense-mod-left":["square-media-image-dense"],"ultra-dense-three-up":["rectangle-to-left-square-media-ultra-dense"],"image-dense-mod-mobile":["featured-rectangle-media-image-dense","title-only-image-dense","title-only-image-dense","title-only-image-dense","title-only-image-dense"]},S=function(e){var n,i=e.side,s=e.cardStart,d=e.cardEnd,m=e.label,g=e.dataId,h=e.inlineVideoPlayback,y=e.shareThrough,f=e.shareThroughIndex,b=e.displayThumbnailPreviews,S=e.hideByline,I=e.endCard,E=""!==i?"".concat(a,"-").concat(i):a,C=E;return l===i&&(C="".concat(E,"-package")),m&&"right"===i&&(C="".concat(C,"-label")),"single-lead"===a&&"right"===i&&"none"===l?n="border":"left"===l&&"right"===i&&(n="margin"),r.a.createElement(u,{colType:E,cardTypes:v[C],isPackage:l===i,packageTitle:o,cards:t.slice(s,d),flexibleLabel:m,brand:c,hasTopStyle:n,dataId:g,inlineVideoPlayback:h,shareThrough:y,shareThroughIndex:f,layoutType:a,displayThumbnailPreviews:b,playFirstElementInline:0===s&&p,hideByline:S,endCard:I})},I=d.a.layout;switch(a){case"single-lead":return r.a.createElement("div",{className:I,"data-test":g},S({side:"left",cardStart:0,cardEnd:3,dataId:"Column-1-".concat(h)}),S({side:"right",cardStart:3,cardEnd:7,dataId:"Column-2-".concat(h)}));case"dual-lead":return r.a.createElement("div",{className:I,"data-test":g},S({side:"left",cardStart:0,cardEnd:4,dataId:"Column-1-".concat(h)}),S({side:"right",cardStart:4,cardEnd:9,dataId:"Column-2-".concat(h)}));case"rectangle-lead":case"square-lead":return r.a.createElement("div",{className:I,"data-test":g},S({side:"left",cardStart:0,cardEnd:1,dataId:"Column-1-".concat(h),inlineVideoPlayback:n}),S({side:"right",cardStart:1,cardEnd:3,dataId:"Column-2-".concat(h)}));case"square-image-dense":return r.a.createElement("div",{className:I,"data-test":g},S({side:"left",cardStart:0,cardEnd:1,dataId:"Column-1-".concat(h),hideByline:f,endCard:b}),S({side:"right",cardStart:1,cardEnd:3,dataId:"Column-2-".concat(h),hideByline:f,endCard:b}));case"two-up":return r.a.createElement("div",{className:I,"data-test":g},S({side:"left",cardStart:0,cardEnd:1,dataId:"Column-1-".concat(h)}),S({side:"right",cardStart:1,cardEnd:2,dataId:"Column-2-".concat(h)}));case"three-up":return r.a.createElement("div",{className:I,"data-test":g},S({side:"",cardStart:0,cardEnd:1,dataId:"Column-1-".concat(h),displayThumbnailPreviews:i}),S({side:"",cardStart:1,cardEnd:2,dataId:"Column-2-".concat(h),displayThumbnailPreviews:i}),S({side:"",cardStart:2,cardEnd:3,dataId:"Column-3-".concat(h),shareThrough:y,displayThumbnailPreviews:i}));case"four-up":return r.a.createElement("div",{className:I,"data-test":g},S({side:"",cardStart:0,cardEnd:1,dataId:"Column-1-".concat(h)}),S({side:"",cardStart:1,cardEnd:2,dataId:"Column-2-".concat(h)}),S({side:"",cardStart:2,cardEnd:3,dataId:"Column-3-".concat(h)}),S({side:"",cardStart:3,cardEnd:4,dataId:"Column-3-".concat(h)}));case"three-up-stack":return r.a.createElement("div",{className:I,"data-test":g},S({side:"",cardStart:0,cardEnd:6,dataId:"Column-1-".concat(h),shareThrough:y,shareThroughIndex:2,displayThumbnailPreviews:i,hideByline:f}));case"river":case"river-last":case"three-up-stack-last":return r.a.createElement("div",{className:I,"data-test":g},S({side:"",cardStart:0,cardEnd:6,dataId:"Column-1-".concat(h),shareThrough:y,shareThroughIndex:2,displayThumbnailPreviews:i}));case"ultra-dense-three-up":return r.a.createElement("div",{className:I,"data-test":g},S({side:"",cardStart:0,cardEnd:1,dataId:"Column-1-".concat(h),displayThumbnailPreviews:i,hideByline:f}),S({side:"",cardStart:1,cardEnd:2,dataId:"Column-2-".concat(h),displayThumbnailPreviews:i,hideByline:f}),S({side:"",cardStart:2,cardEnd:3,dataId:"Column-3-".concat(h),displayThumbnailPreviews:i,hideByline:f}));case"dense":return r.a.createElement("div",{className:I,"data-test":g},S({side:"left",cardStart:0,cardEnd:3,label:s[0],dataId:"Column-1-".concat(h),shareThrough:y}),S({side:"right",cardStart:3,cardEnd:8,label:s[1],dataId:"Column-2-".concat(h)}),S({side:"right",cardStart:8,cardEnd:13,label:s[2],dataId:"Column-3-".concat(h)}));case"image-dense":return r.a.createElement("div",{className:I,"data-test":g},S({side:"left",cardStart:0,cardEnd:3,dataId:"Column-1-".concat(h)}),S({side:"right",cardStart:3,cardEnd:8,label:s[0],dataId:"Column-2-".concat(h)}));case"image-dense-mod":return r.a.createElement("div",{className:I,"data-test":g},S({side:"right",cardStart:0,cardEnd:1,dataId:"Column-1-".concat(h),displayThumbnailPreviews:i,hideByline:f,endCard:b}),S({side:"left",cardStart:1,cardEnd:2,dataId:"Column-2-".concat(h),displayThumbnailPreviews:i,hideByline:f,endCard:b}));case"image-dense-mod-mobile":return r.a.createElement("div",{className:I,"data-test":g},S({side:"",cardStart:0,cardEnd:5,dataId:"Column-1-".concat(h)}));case"mini-hero":return"none"!==l?r.a.createElement(m,{cards:t,packageTitle:o}):r.a.createElement("div",{className:d.a.layout,"data-test":g},S({side:"left",cardStart:0,cardEnd:1,dataId:"Column-1-".concat(h)}),S({side:"right",cardStart:1,cardEnd:6,dataId:"Column-2-".concat(h)}));case"one-image-dense":return r.a.createElement("div",{className:d.a.layout,"data-test":g},S({side:"",cardStart:0,cardEnd:1,dataId:"Column-1-".concat(h),hideByline:f,endCard:b}),S({side:"",cardStart:1,cardEnd:4,dataId:"Column-2-".concat(h),hideByline:f,endCard:b}));default:return r.a.createElement("div",null,"no match")}};h.defaultProps={hasPackage:"none",hasInlineVideoPlayback:!1,packageTitle:"",flexibleLabels:[],brand:s.b,dataId:"layout-fallback",hasShareThrough:!1,displayThumbnailPreviews:!1,playFirstElementInline:!1,hideByline:!1,endCard:""},h.propTypes={cards:l.a.array.isRequired,layoutType:l.a.string.isRequired,hasPackage:l.a.string,hasInlineVideoPlayback:l.a.bool,packageTitle:l.a.string,flexibleLabels:l.a.array,brand:l.a.string,dataId:l.a.oneOfType([l.a.string,l.a.number]).isRequired,hasShareThrough:l.a.bool,displayThumbnailPreviews:l.a.bool,playFirstElementInline:l.a.bool,hideByline:l.a.bool,endCard:l.a.string},t.a=h},920:function(e,t,a){e.exports={layout:"Layout-layout"}},921:function(e,t,a){"use strict";var n=a(28),r=a.n(n),i=a(0),l=a.n(i),o=a(1),s=a.n(o),c=a(29),d=a(895),u=a(46),m=a(858),g=a(881),h=a(35),y=function(e){var t=e.title,a=e.titleColor,n=e.dataId,r=e.titleImage,i=e.titleLink,o=e.hasLogoAd,s=e.isBioPage,c=e.isSectionPage,d=e.isVideoDetailPage,y=e.parentComponent,p=e.styles,f=s||c?"Latest from ".concat(t):t;return l.a.createElement("header",{className:p.header},l.a.createElement("span",{className:p.decoration,"aria-hidden":!0}),r&&l.a.createElement("img",{className:p.titleImage,src:r,alt:t}),l.a.createElement("h2",{className:Object(h.a)({keyValuePairs:[[p.titleLink,i],[p.title,!i],[p.dcfTitle,y===g.a.dynamicContentFeed&&!d],[p.videoDcfTitle,y===g.a.dynamicContentFeed&&d]]}),style:d&&a?{color:a}:{}},i?l.a.createElement(u.b,{to:i},f):l.a.createElement("span",null,f)),o&&l.a.createElement("div",{className:p.sponsorIcon},l.a.createElement(m.a,{id:"SponsorLogo-".concat(n),target:"module=".concat(t)})))};y.propTypes={dataId:s.a.oneOfType([s.a.string,s.a.number]),styles:s.a.object.isRequired,title:s.a.string.isRequired,titleLink:s.a.string,titleColor:s.a.string,titleImage:s.a.string,isBioPage:s.a.bool,isSectionPage:s.a.bool,isVideoDetailPage:s.a.bool,hasLogoAd:s.a.bool,parentComponent:s.a.string},y.defaultProps={dataId:"",titleLink:null,titleColor:null,titleImage:null,isBioPage:!1,isSectionPage:!1,isVideoDetailPage:!1,hasLogoAd:!1,parentComponent:""};var p=y,f=c.b,b=function(e){var t=e.brand,a=e.styles,n=e.dataId,i=e.title,o=e.titleLink,s=e.titleColor,u=e.titleImage,m=e.color,g=e.hasLogoAd,h=e.isVideoDetailPage,y=e.isBioPage,f=e.isSectionPage,b=e.parentComponent,v={styles:a,dataId:n,title:i,titleLink:o,titleColor:s,titleImage:u,hasLogoAd:g};return t===c.d||t===c.a?l.a.createElement(p,r()({},v,{isBioPage:y,isVideoDetailPage:h,isSectionPage:f,parentComponent:b})):l.a.createElement(d.a,r()({},v,{color:m}))};b.propTypes={brand:s.a.string,dataId:s.a.oneOfType([s.a.string,s.a.number]),styles:s.a.object.isRequired,title:s.a.string.isRequired,titleLink:s.a.string,titleColor:s.a.string,titleImage:s.a.string,color:s.a.string,isBioPage:s.a.bool,isSectionPage:s.a.bool,isVideoDetailPage:s.a.bool,hasLogoAd:s.a.bool,parentComponent:s.a.string},b.defaultProps={brand:f,dataId:"",titleLink:null,titleColor:null,titleImage:null,color:null,isBioPage:!1,isSectionPage:!1,isVideoDetailPage:!1,hasLogoAd:!1,parentComponent:""};t.a=b},941:function(e,t,a){e.exports=a.p+"906141a02c3e44e527ac24fa52b20e5c.png"}}]);
//# sourceMappingURL=../../source-maps/components-PcmModule-TransporterSection-e910f0d2e51ec469681f.js.map