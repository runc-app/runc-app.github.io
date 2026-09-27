import{j as G}from"./vendor-query-TeXLlnud.js";import{X as yr}from"./vendor-ui-DgmvP8To.js";import{j as vt}from"./vendor-react-ChcHQzVM.js";function xr(n,e){const t={};return(n[n.length-1]===""?[...n,""]:n).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}const kr=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,br=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,wr={};function He(n,e){return(wr.jsx?br:kr).test(n)}const Sr=/[ \t\n\f\r]/g;function Ir(n){return typeof n=="object"?n.type==="text"?Ve(n.value):!1:Ve(n)}function Ve(n){return n.replace(Sr,"")===""}class Hn{constructor(e,t,r){this.normal=t,this.property=e,r&&(this.space=r)}}Hn.prototype.normal={};Hn.prototype.property={};Hn.prototype.space=void 0;function At(n,e){const t={},r={};for(const i of n)Object.assign(t,i.property),Object.assign(r,i.normal);return new Hn(t,r,e)}function he(n){return n.toLowerCase()}class Z{constructor(e,t){this.attribute=t,this.property=e}}Z.prototype.attribute="";Z.prototype.booleanish=!1;Z.prototype.boolean=!1;Z.prototype.commaOrSpaceSeparated=!1;Z.prototype.commaSeparated=!1;Z.prototype.defined=!1;Z.prototype.mustUseProperty=!1;Z.prototype.number=!1;Z.prototype.overloadedBoolean=!1;Z.prototype.property="";Z.prototype.spaceSeparated=!1;Z.prototype.space=void 0;let Cr=0;const N=wn(),$=wn(),me=wn(),k=wn(),q=wn(),An=wn(),en=wn();function wn(){return 2**++Cr}const de=Object.freeze(Object.defineProperty({__proto__:null,boolean:N,booleanish:$,commaOrSpaceSeparated:en,commaSeparated:An,number:k,overloadedBoolean:me,spaceSeparated:q},Symbol.toStringTag,{value:"Module"})),ne=Object.keys(de);class Ie extends Z{constructor(e,t,r,i){let l=-1;if(super(e,t),qe(this,"space",i),typeof r=="number")for(;++l<ne.length;){const o=ne[l];qe(this,ne[l],(r&de[o])===de[o])}}}Ie.prototype.defined=!0;function qe(n,e,t){t&&(n[e]=t)}function Tn(n){const e={},t={};for(const[r,i]of Object.entries(n.properties)){const l=new Ie(r,n.transform(n.attributes||{},r),i,n.space);n.mustUseProperty&&n.mustUseProperty.includes(r)&&(l.mustUseProperty=!0),e[r]=l,t[he(r)]=r,t[he(l.attribute)]=r}return new Hn(e,t,n.space)}const Pt=Tn({properties:{ariaActiveDescendant:null,ariaAtomic:$,ariaAutoComplete:null,ariaBusy:$,ariaChecked:$,ariaColCount:k,ariaColIndex:k,ariaColSpan:k,ariaControls:q,ariaCurrent:null,ariaDescribedBy:q,ariaDetails:null,ariaDisabled:$,ariaDropEffect:q,ariaErrorMessage:null,ariaExpanded:$,ariaFlowTo:q,ariaGrabbed:$,ariaHasPopup:null,ariaHidden:$,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:q,ariaLevel:k,ariaLive:null,ariaModal:$,ariaMultiLine:$,ariaMultiSelectable:$,ariaOrientation:null,ariaOwns:q,ariaPlaceholder:null,ariaPosInSet:k,ariaPressed:$,ariaReadOnly:$,ariaRelevant:null,ariaRequired:$,ariaRoleDescription:q,ariaRowCount:k,ariaRowIndex:k,ariaRowSpan:k,ariaSelected:$,ariaSetSize:k,ariaSort:null,ariaValueMax:k,ariaValueMin:k,ariaValueNow:k,ariaValueText:null,role:null},transform(n,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()}});function Tt(n,e){return e in n?n[e]:e}function zt(n,e){return Tt(n,e.toLowerCase())}const Er=Tn({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:An,acceptCharset:q,accessKey:q,action:null,allow:null,allowFullScreen:N,allowPaymentRequest:N,allowUserMedia:N,alt:null,as:null,async:N,autoCapitalize:null,autoComplete:q,autoFocus:N,autoPlay:N,blocking:q,capture:null,charSet:null,checked:N,cite:null,className:q,cols:k,colSpan:null,content:null,contentEditable:$,controls:N,controlsList:q,coords:k|An,crossOrigin:null,data:null,dateTime:null,decoding:null,default:N,defer:N,dir:null,dirName:null,disabled:N,download:me,draggable:$,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:N,formTarget:null,headers:q,height:k,hidden:me,high:k,href:null,hrefLang:null,htmlFor:q,httpEquiv:q,id:null,imageSizes:null,imageSrcSet:null,inert:N,inputMode:null,integrity:null,is:null,isMap:N,itemId:null,itemProp:q,itemRef:q,itemScope:N,itemType:q,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:N,low:k,manifest:null,max:null,maxLength:k,media:null,method:null,min:null,minLength:k,multiple:N,muted:N,name:null,nonce:null,noModule:N,noValidate:N,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:N,optimum:k,pattern:null,ping:q,placeholder:null,playsInline:N,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:N,referrerPolicy:null,rel:q,required:N,reversed:N,rows:k,rowSpan:k,sandbox:q,scope:null,scoped:N,seamless:N,selected:N,shadowRootClonable:N,shadowRootDelegatesFocus:N,shadowRootMode:null,shape:null,size:k,sizes:null,slot:null,span:k,spellCheck:$,src:null,srcDoc:null,srcLang:null,srcSet:null,start:k,step:null,style:null,tabIndex:k,target:null,title:null,translate:null,type:null,typeMustMatch:N,useMap:null,value:$,width:k,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:q,axis:null,background:null,bgColor:null,border:k,borderColor:null,bottomMargin:k,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:N,declare:N,event:null,face:null,frame:null,frameBorder:null,hSpace:k,leftMargin:k,link:null,longDesc:null,lowSrc:null,marginHeight:k,marginWidth:k,noResize:N,noHref:N,noShade:N,noWrap:N,object:null,profile:null,prompt:null,rev:null,rightMargin:k,rules:null,scheme:null,scrolling:$,standby:null,summary:null,text:null,topMargin:k,valueType:null,version:null,vAlign:null,vLink:null,vSpace:k,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:N,disableRemotePlayback:N,prefix:null,property:null,results:k,security:null,unselectable:null},space:"html",transform:zt}),vr=Tn({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:en,accentHeight:k,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:k,amplitude:k,arabicForm:null,ascent:k,attributeName:null,attributeType:null,azimuth:k,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:k,by:null,calcMode:null,capHeight:k,className:q,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:k,diffuseConstant:k,direction:null,display:null,dur:null,divisor:k,dominantBaseline:null,download:N,dx:null,dy:null,edgeMode:null,editable:null,elevation:k,enableBackground:null,end:null,event:null,exponent:k,externalResourcesRequired:null,fill:null,fillOpacity:k,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:An,g2:An,glyphName:An,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:k,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:k,horizOriginX:k,horizOriginY:k,id:null,ideographic:k,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:k,k,k1:k,k2:k,k3:k,k4:k,kernelMatrix:en,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:k,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:k,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:k,overlineThickness:k,paintOrder:null,panose1:null,path:null,pathLength:k,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:q,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:k,pointsAtY:k,pointsAtZ:k,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:en,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:en,rev:en,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:en,requiredFeatures:en,requiredFonts:en,requiredFormats:en,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:k,specularExponent:k,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:k,strikethroughThickness:k,string:null,stroke:null,strokeDashArray:en,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:k,strokeOpacity:k,strokeWidth:null,style:null,surfaceScale:k,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:en,tabIndex:k,tableValues:null,target:null,targetX:k,targetY:k,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:en,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:k,underlineThickness:k,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:k,values:null,vAlphabetic:k,vMathematical:k,vectorEffect:null,vHanging:k,vIdeographic:k,version:null,vertAdvY:k,vertOriginX:k,vertOriginY:k,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:k,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Tt}),Lt=Tn({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(n,e){return"xlink:"+e.slice(5).toLowerCase()}}),Nt=Tn({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:zt}),Rt=Tn({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(n,e){return"xml:"+e.slice(3).toLowerCase()}}),Ar={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Pr=/[A-Z]/g,Xe=/-[a-z]/g,Tr=/^data[-\w.:]+$/i;function zr(n,e){const t=he(e);let r=e,i=Z;if(t in n.normal)return n.property[n.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&Tr.test(e)){if(e.charAt(4)==="-"){const l=e.slice(5).replace(Xe,Nr);r="data"+l.charAt(0).toUpperCase()+l.slice(1)}else{const l=e.slice(4);if(!Xe.test(l)){let o=l.replace(Pr,Lr);o.charAt(0)!=="-"&&(o="-"+o),e="data"+o}}i=Ie}return new i(r,e)}function Lr(n){return"-"+n.toLowerCase()}function Nr(n){return n.charAt(1).toUpperCase()}const Rr=At([Pt,Er,Lt,Nt,Rt],"html"),Ce=At([Pt,vr,Lt,Nt,Rt],"svg");function Dr(n){return n.join(" ").trim()}var En={},ee,$e;function Or(){if($e)return ee;$e=1;var n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,e=/\n/g,t=/^\s*/,r=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,i=/^:\s*/,l=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,o=/^[;\s]*/,a=/^\s+|\s+$/g,c=`
`,u="/",s="*",f="",d="comment",p="declaration";function w(E,x){if(typeof E!="string")throw new TypeError("First argument must be a string");if(!E)return[];x=x||{};var z=1,C=1;function B(P){var S=P.match(e);S&&(z+=S.length);var M=P.lastIndexOf(c);C=~M?P.length-M:C+P.length}function j(){var P={line:z,column:C};return function(S){return S.position=new y(P),_(),S}}function y(P){this.start=P,this.end={line:z,column:C},this.source=x.source}y.prototype.content=E;function D(P){var S=new Error(x.source+":"+z+":"+C+": "+P);if(S.reason=P,S.filename=x.source,S.line=z,S.column=C,S.source=E,!x.silent)throw S}function H(P){var S=P.exec(E);if(S){var M=S[0];return B(M),E=E.slice(M.length),S}}function _(){H(t)}function F(P){var S;for(P=P||[];S=A();)S!==!1&&P.push(S);return P}function A(){var P=j();if(!(u!=E.charAt(0)||s!=E.charAt(1))){for(var S=2;f!=E.charAt(S)&&(s!=E.charAt(S)||u!=E.charAt(S+1));)++S;if(S+=2,f===E.charAt(S-1))return D("End of comment missing");var M=E.slice(2,S-2);return C+=2,B(M),E=E.slice(S),C+=2,P({type:d,comment:M})}}function v(){var P=j(),S=H(r);if(S){if(A(),!H(i))return D("property missing ':'");var M=H(l),W=P({type:p,property:I(S[0].replace(n,f)),value:M?I(M[0].replace(n,f)):f});return H(o),W}}function V(){var P=[];F(P);for(var S;S=v();)S!==!1&&(P.push(S),F(P));return P}return _(),V()}function I(E){return E?E.replace(a,f):f}return ee=w,ee}var We;function _r(){if(We)return En;We=1;var n=En&&En.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(En,"__esModule",{value:!0}),En.default=t;const e=n(Or());function t(r,i){let l=null;if(!r||typeof r!="string")return l;const o=(0,e.default)(r),a=typeof i=="function";return o.forEach(c=>{if(c.type!=="declaration")return;const{property:u,value:s}=c;a?i(u,s,c):s&&(l=l||{},l[u]=s)}),l}return En}var Dn={},Ye;function Fr(){if(Ye)return Dn;Ye=1,Object.defineProperty(Dn,"__esModule",{value:!0}),Dn.camelCase=void 0;var n=/^--[a-zA-Z0-9_-]+$/,e=/-([a-z])/g,t=/^[^-]+$/,r=/^-(webkit|moz|ms|o|khtml)-/,i=/^-(ms)-/,l=function(u){return!u||t.test(u)||n.test(u)},o=function(u,s){return s.toUpperCase()},a=function(u,s){return"".concat(s,"-")},c=function(u,s){return s===void 0&&(s={}),l(u)?u:(u=u.toLowerCase(),s.reactCompat?u=u.replace(i,a):u=u.replace(r,a),u.replace(e,o))};return Dn.camelCase=c,Dn}var On,Qe;function Mr(){if(Qe)return On;Qe=1;var n=On&&On.__importDefault||function(i){return i&&i.__esModule?i:{default:i}},e=n(_r()),t=Fr();function r(i,l){var o={};return!i||typeof i!="string"||(0,e.default)(i,function(a,c){a&&c&&(o[(0,t.camelCase)(a,l)]=c)}),o}return r.default=r,On=r,On}var Br=Mr();const Ur=vt(Br),Dt=Ot("end"),Ee=Ot("start");function Ot(n){return e;function e(t){const r=t&&t.position&&t.position[n]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function jr(n){const e=Ee(n),t=Dt(n);if(e&&t)return{start:e,end:t}}function Mn(n){return!n||typeof n!="object"?"":"position"in n||"type"in n?Ge(n.position):"start"in n||"end"in n?Ge(n):"line"in n||"column"in n?ge(n):""}function ge(n){return Je(n&&n.line)+":"+Je(n&&n.column)}function Ge(n){return ge(n&&n.start)+"-"+ge(n&&n.end)}function Je(n){return n&&typeof n=="number"?n:1}class Q extends Error{constructor(e,t,r){super(),typeof t=="string"&&(r=t,t=void 0);let i="",l={},o=!1;if(t&&("line"in t&&"column"in t?l={place:t}:"start"in t&&"end"in t?l={place:t}:"type"in t?l={ancestors:[t],place:t.position}:l={...t}),typeof e=="string"?i=e:!l.cause&&e&&(o=!0,i=e.message,l.cause=e),!l.ruleId&&!l.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?l.ruleId=r:(l.source=r.slice(0,c),l.ruleId=r.slice(c+1))}if(!l.place&&l.ancestors&&l.ancestors){const c=l.ancestors[l.ancestors.length-1];c&&(l.place=c.position)}const a=l.place&&"start"in l.place?l.place.start:l.place;this.ancestors=l.ancestors||void 0,this.cause=l.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=a?a.line:void 0,this.name=Mn(l.place)||"1:1",this.place=l.place||void 0,this.reason=this.message,this.ruleId=l.ruleId||void 0,this.source=l.source||void 0,this.stack=o&&l.cause&&typeof l.cause.stack=="string"?l.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Q.prototype.file="";Q.prototype.name="";Q.prototype.reason="";Q.prototype.message="";Q.prototype.stack="";Q.prototype.column=void 0;Q.prototype.line=void 0;Q.prototype.ancestors=void 0;Q.prototype.cause=void 0;Q.prototype.fatal=void 0;Q.prototype.place=void 0;Q.prototype.ruleId=void 0;Q.prototype.source=void 0;const ve={}.hasOwnProperty,Hr=new Map,Vr=/[A-Z]/g,qr=new Set(["table","tbody","thead","tfoot","tr"]),Xr=new Set(["td","th"]),_t="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function $r(n,e){if(!e||e.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const t=e.filePath||void 0;let r;if(e.development){if(typeof e.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=ni(t,e.jsxDEV)}else{if(typeof e.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof e.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Zr(t,e.jsx,e.jsxs)}const i={Fragment:e.Fragment,ancestors:[],components:e.components||{},create:r,elementAttributeNameCase:e.elementAttributeNameCase||"react",evaluater:e.createEvaluater?e.createEvaluater():void 0,filePath:t,ignoreInvalidStyle:e.ignoreInvalidStyle||!1,passKeys:e.passKeys!==!1,passNode:e.passNode||!1,schema:e.space==="svg"?Ce:Rr,stylePropertyNameCase:e.stylePropertyNameCase||"dom",tableCellAlignToStyle:e.tableCellAlignToStyle!==!1},l=Ft(i,n,void 0);return l&&typeof l!="string"?l:i.create(n,i.Fragment,{children:l||void 0},void 0)}function Ft(n,e,t){if(e.type==="element")return Wr(n,e,t);if(e.type==="mdxFlowExpression"||e.type==="mdxTextExpression")return Yr(n,e);if(e.type==="mdxJsxFlowElement"||e.type==="mdxJsxTextElement")return Gr(n,e,t);if(e.type==="mdxjsEsm")return Qr(n,e);if(e.type==="root")return Jr(n,e,t);if(e.type==="text")return Kr(n,e)}function Wr(n,e,t){const r=n.schema;let i=r;e.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Ce,n.schema=i),n.ancestors.push(e);const l=Bt(n,e.tagName,!1),o=ei(n,e);let a=Pe(n,e);return qr.has(e.tagName)&&(a=a.filter(function(c){return typeof c=="string"?!Ir(c):!0})),Mt(n,o,l,e),Ae(o,a),n.ancestors.pop(),n.schema=r,n.create(e,l,o,t)}function Yr(n,e){if(e.data&&e.data.estree&&n.evaluater){const r=e.data.estree.body[0];return r.type,n.evaluater.evaluateExpression(r.expression)}jn(n,e.position)}function Qr(n,e){if(e.data&&e.data.estree&&n.evaluater)return n.evaluater.evaluateProgram(e.data.estree);jn(n,e.position)}function Gr(n,e,t){const r=n.schema;let i=r;e.name==="svg"&&r.space==="html"&&(i=Ce,n.schema=i),n.ancestors.push(e);const l=e.name===null?n.Fragment:Bt(n,e.name,!0),o=ti(n,e),a=Pe(n,e);return Mt(n,o,l,e),Ae(o,a),n.ancestors.pop(),n.schema=r,n.create(e,l,o,t)}function Jr(n,e,t){const r={};return Ae(r,Pe(n,e)),n.create(e,n.Fragment,r,t)}function Kr(n,e){return e.value}function Mt(n,e,t,r){typeof t!="string"&&t!==n.Fragment&&n.passNode&&(e.node=r)}function Ae(n,e){if(e.length>0){const t=e.length>1?e:e[0];t&&(n.children=t)}}function Zr(n,e,t){return r;function r(i,l,o,a){const u=Array.isArray(o.children)?t:e;return a?u(l,o,a):u(l,o)}}function ni(n,e){return t;function t(r,i,l,o){const a=Array.isArray(l.children),c=Ee(r);return e(i,l,o,a,{columnNumber:c?c.column-1:void 0,fileName:n,lineNumber:c?c.line:void 0},void 0)}}function ei(n,e){const t={};let r,i;for(i in e.properties)if(i!=="children"&&ve.call(e.properties,i)){const l=ri(n,i,e.properties[i]);if(l){const[o,a]=l;n.tableCellAlignToStyle&&o==="align"&&typeof a=="string"&&Xr.has(e.tagName)?r=a:t[o]=a}}if(r){const l=t.style||(t.style={});l[n.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return t}function ti(n,e){const t={};for(const r of e.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&n.evaluater){const l=r.data.estree.body[0];l.type;const o=l.expression;o.type;const a=o.properties[0];a.type,Object.assign(t,n.evaluater.evaluateExpression(a.argument))}else jn(n,e.position);else{const i=r.name;let l;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&n.evaluater){const a=r.value.data.estree.body[0];a.type,l=n.evaluater.evaluateExpression(a.expression)}else jn(n,e.position);else l=r.value===null?!0:r.value;t[i]=l}return t}function Pe(n,e){const t=[];let r=-1;const i=n.passKeys?new Map:Hr;for(;++r<e.children.length;){const l=e.children[r];let o;if(n.passKeys){const c=l.type==="element"?l.tagName:l.type==="mdxJsxFlowElement"||l.type==="mdxJsxTextElement"?l.name:void 0;if(c){const u=i.get(c)||0;o=c+"-"+u,i.set(c,u+1)}}const a=Ft(n,l,o);a!==void 0&&t.push(a)}return t}function ri(n,e,t){const r=zr(n.schema,e);if(!(t==null||typeof t=="number"&&Number.isNaN(t))){if(Array.isArray(t)&&(t=r.commaSeparated?xr(t):Dr(t)),r.property==="style"){let i=typeof t=="object"?t:ii(n,String(t));return n.stylePropertyNameCase==="css"&&(i=li(i)),["style",i]}return[n.elementAttributeNameCase==="react"&&r.space?Ar[r.property]||r.property:r.attribute,t]}}function ii(n,e){try{return Ur(e,{reactCompat:!0})}catch(t){if(n.ignoreInvalidStyle)return{};const r=t,i=new Q("Cannot parse `style` attribute",{ancestors:n.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=n.filePath||void 0,i.url=_t+"#cannot-parse-style-attribute",i}}function Bt(n,e,t){let r;if(!t)r={type:"Literal",value:e};else if(e.includes(".")){const i=e.split(".");let l=-1,o;for(;++l<i.length;){const a=He(i[l])?{type:"Identifier",name:i[l]}:{type:"Literal",value:i[l]};o=o?{type:"MemberExpression",object:o,property:a,computed:!!(l&&a.type==="Literal"),optional:!1}:a}r=o}else r=He(e)&&!/^[a-z]/.test(e)?{type:"Identifier",name:e}:{type:"Literal",value:e};if(r.type==="Literal"){const i=r.value;return ve.call(n.components,i)?n.components[i]:i}if(n.evaluater)return n.evaluater.evaluateExpression(r);jn(n)}function jn(n,e){const t=new Q("Cannot handle MDX estrees without `createEvaluater`",{ancestors:n.ancestors,place:e,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw t.file=n.filePath||void 0,t.url=_t+"#cannot-handle-mdx-estrees-without-createevaluater",t}function li(n){const e={};let t;for(t in n)ve.call(n,t)&&(e[oi(t)]=n[t]);return e}function oi(n){let e=n.replace(Vr,ai);return e.slice(0,3)==="ms-"&&(e="-"+e),e}function ai(n){return"-"+n.toLowerCase()}const te={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},ui={};function si(n,e){const t=ui,r=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,i=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return Ut(n,r,i)}function Ut(n,e,t){if(ci(n)){if("value"in n)return n.type==="html"&&!t?"":n.value;if(e&&"alt"in n&&n.alt)return n.alt;if("children"in n)return Ke(n.children,e,t)}return Array.isArray(n)?Ke(n,e,t):""}function Ke(n,e,t){const r=[];let i=-1;for(;++i<n.length;)r[i]=Ut(n[i],e,t);return r.join("")}function ci(n){return!!(n&&typeof n=="object")}const Ze=document.createElement("i");function Te(n){const e="&"+n+";";Ze.innerHTML=e;const t=Ze.textContent;return t.charCodeAt(t.length-1)===59&&n!=="semi"||t===e?!1:t}function pn(n,e,t,r){const i=n.length;let l=0,o;if(e<0?e=-e>i?0:i+e:e=e>i?i:e,t=t>0?t:0,r.length<1e4)o=Array.from(r),o.unshift(e,t),n.splice(...o);else for(t&&n.splice(e,t);l<r.length;)o=r.slice(l,l+1e4),o.unshift(e,0),n.splice(...o),l+=1e4,e+=1e4}function rn(n,e){return n.length>0?(pn(n,n.length,0,e),n):e}const nt={}.hasOwnProperty;function pi(n){const e={};let t=-1;for(;++t<n.length;)fi(e,n[t]);return e}function fi(n,e){let t;for(t in e){const i=(nt.call(n,t)?n[t]:void 0)||(n[t]={}),l=e[t];let o;if(l)for(o in l){nt.call(i,o)||(i[o]=[]);const a=l[o];hi(i[o],Array.isArray(a)?a:a?[a]:[])}}}function hi(n,e){let t=-1;const r=[];for(;++t<e.length;)(e[t].add==="after"?n:r).push(e[t]);pn(n,0,0,r)}function jt(n,e){const t=Number.parseInt(n,e);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function Pn(n){return n.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const cn=xn(/[A-Za-z]/),tn=xn(/[\dA-Za-z]/),mi=xn(/[#-'*+\--9=?A-Z^-~]/);function ye(n){return n!==null&&(n<32||n===127)}const xe=xn(/\d/),di=xn(/[\dA-Fa-f]/),gi=xn(/[!-/:-@[-`{-~]/);function T(n){return n!==null&&n<-2}function K(n){return n!==null&&(n<0||n===32)}function O(n){return n===-2||n===-1||n===32}const yi=xn(new RegExp("\\p{P}|\\p{S}","u")),xi=xn(/\s/);function xn(n){return e;function e(t){return t!==null&&t>-1&&n.test(String.fromCharCode(t))}}function zn(n){const e=[];let t=-1,r=0,i=0;for(;++t<n.length;){const l=n.charCodeAt(t);let o="";if(l===37&&tn(n.charCodeAt(t+1))&&tn(n.charCodeAt(t+2)))i=2;else if(l<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l))||(o=String.fromCharCode(l));else if(l>55295&&l<57344){const a=n.charCodeAt(t+1);l<56320&&a>56319&&a<57344?(o=String.fromCharCode(l,a),i=1):o="�"}else o=String.fromCharCode(l);o&&(e.push(n.slice(r,t),encodeURIComponent(o)),r=t+i+1,o=""),i&&(t+=i,i=0)}return e.join("")+n.slice(r)}function X(n,e,t,r){const i=r?r-1:Number.POSITIVE_INFINITY;let l=0;return o;function o(c){return O(c)?(n.enter(t),a(c)):e(c)}function a(c){return O(c)&&l++<i?(n.consume(c),a):(n.exit(t),e(c))}}const ki={tokenize:bi};function bi(n){const e=n.attempt(this.parser.constructs.contentInitial,r,i);let t;return e;function r(a){if(a===null){n.consume(a);return}return n.enter("lineEnding"),n.consume(a),n.exit("lineEnding"),X(n,e,"linePrefix")}function i(a){return n.enter("paragraph"),l(a)}function l(a){const c=n.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=c),t=c,o(a)}function o(a){if(a===null){n.exit("chunkText"),n.exit("paragraph"),n.consume(a);return}return T(a)?(n.consume(a),n.exit("chunkText"),l):(n.consume(a),o)}}const wi={tokenize:Si},et={tokenize:Ii};function Si(n){const e=this,t=[];let r=0,i,l,o;return a;function a(C){if(r<t.length){const B=t[r];return e.containerState=B[1],n.attempt(B[0].continuation,c,u)(C)}return u(C)}function c(C){if(r++,e.containerState._closeFlow){e.containerState._closeFlow=void 0,i&&z();const B=e.events.length;let j=B,y;for(;j--;)if(e.events[j][0]==="exit"&&e.events[j][1].type==="chunkFlow"){y=e.events[j][1].end;break}x(r);let D=B;for(;D<e.events.length;)e.events[D][1].end={...y},D++;return pn(e.events,j+1,0,e.events.slice(B)),e.events.length=D,u(C)}return a(C)}function u(C){if(r===t.length){if(!i)return d(C);if(i.currentConstruct&&i.currentConstruct.concrete)return w(C);e.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return e.containerState={},n.check(et,s,f)(C)}function s(C){return i&&z(),x(r),d(C)}function f(C){return e.parser.lazy[e.now().line]=r!==t.length,o=e.now().offset,w(C)}function d(C){return e.containerState={},n.attempt(et,p,w)(C)}function p(C){return r++,t.push([e.currentConstruct,e.containerState]),d(C)}function w(C){if(C===null){i&&z(),x(0),n.consume(C);return}return i=i||e.parser.flow(e.now()),n.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:l}),I(C)}function I(C){if(C===null){E(n.exit("chunkFlow"),!0),x(0),n.consume(C);return}return T(C)?(n.consume(C),E(n.exit("chunkFlow")),r=0,e.interrupt=void 0,a):(n.consume(C),I)}function E(C,B){const j=e.sliceStream(C);if(B&&j.push(null),C.previous=l,l&&(l.next=C),l=C,i.defineSkip(C.start),i.write(j),e.parser.lazy[C.start.line]){let y=i.events.length;for(;y--;)if(i.events[y][1].start.offset<o&&(!i.events[y][1].end||i.events[y][1].end.offset>o))return;const D=e.events.length;let H=D,_,F;for(;H--;)if(e.events[H][0]==="exit"&&e.events[H][1].type==="chunkFlow"){if(_){F=e.events[H][1].end;break}_=!0}for(x(r),y=D;y<e.events.length;)e.events[y][1].end={...F},y++;pn(e.events,H+1,0,e.events.slice(D)),e.events.length=y}}function x(C){let B=t.length;for(;B-- >C;){const j=t[B];e.containerState=j[1],j[0].exit.call(e,n)}t.length=C}function z(){i.write([null]),l=void 0,i=void 0,e.containerState._closeFlow=void 0}}function Ii(n,e,t){return X(n,n.attempt(this.parser.constructs.document,e,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function tt(n){if(n===null||K(n)||xi(n))return 1;if(yi(n))return 2}function ze(n,e,t){const r=[];let i=-1;for(;++i<n.length;){const l=n[i].resolveAll;l&&!r.includes(l)&&(e=l(e,t),r.push(l))}return e}const ke={name:"attention",resolveAll:Ci,tokenize:Ei};function Ci(n,e){let t=-1,r,i,l,o,a,c,u,s;for(;++t<n.length;)if(n[t][0]==="enter"&&n[t][1].type==="attentionSequence"&&n[t][1]._close){for(r=t;r--;)if(n[r][0]==="exit"&&n[r][1].type==="attentionSequence"&&n[r][1]._open&&e.sliceSerialize(n[r][1]).charCodeAt(0)===e.sliceSerialize(n[t][1]).charCodeAt(0)){if((n[r][1]._close||n[t][1]._open)&&(n[t][1].end.offset-n[t][1].start.offset)%3&&!((n[r][1].end.offset-n[r][1].start.offset+n[t][1].end.offset-n[t][1].start.offset)%3))continue;c=n[r][1].end.offset-n[r][1].start.offset>1&&n[t][1].end.offset-n[t][1].start.offset>1?2:1;const f={...n[r][1].end},d={...n[t][1].start};rt(f,-c),rt(d,c),o={type:c>1?"strongSequence":"emphasisSequence",start:f,end:{...n[r][1].end}},a={type:c>1?"strongSequence":"emphasisSequence",start:{...n[t][1].start},end:d},l={type:c>1?"strongText":"emphasisText",start:{...n[r][1].end},end:{...n[t][1].start}},i={type:c>1?"strong":"emphasis",start:{...o.start},end:{...a.end}},n[r][1].end={...o.start},n[t][1].start={...a.end},u=[],n[r][1].end.offset-n[r][1].start.offset&&(u=rn(u,[["enter",n[r][1],e],["exit",n[r][1],e]])),u=rn(u,[["enter",i,e],["enter",o,e],["exit",o,e],["enter",l,e]]),u=rn(u,ze(e.parser.constructs.insideSpan.null,n.slice(r+1,t),e)),u=rn(u,[["exit",l,e],["enter",a,e],["exit",a,e],["exit",i,e]]),n[t][1].end.offset-n[t][1].start.offset?(s=2,u=rn(u,[["enter",n[t][1],e],["exit",n[t][1],e]])):s=0,pn(n,r-1,t-r+3,u),t=r+u.length-s-2;break}}for(t=-1;++t<n.length;)n[t][1].type==="attentionSequence"&&(n[t][1].type="data");return n}function Ei(n,e){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,i=tt(r);let l;return o;function o(c){return l=c,n.enter("attentionSequence"),a(c)}function a(c){if(c===l)return n.consume(c),a;const u=n.exit("attentionSequence"),s=tt(c),f=!s||s===2&&i||t.includes(c),d=!i||i===2&&s||t.includes(r);return u._open=!!(l===42?f:f&&(i||!d)),u._close=!!(l===42?d:d&&(s||!f)),e(c)}}function rt(n,e){n.column+=e,n.offset+=e,n._bufferIndex+=e}const vi={name:"autolink",tokenize:Ai};function Ai(n,e,t){let r=0;return i;function i(p){return n.enter("autolink"),n.enter("autolinkMarker"),n.consume(p),n.exit("autolinkMarker"),n.enter("autolinkProtocol"),l}function l(p){return cn(p)?(n.consume(p),o):p===64?t(p):u(p)}function o(p){return p===43||p===45||p===46||tn(p)?(r=1,a(p)):u(p)}function a(p){return p===58?(n.consume(p),r=0,c):(p===43||p===45||p===46||tn(p))&&r++<32?(n.consume(p),a):(r=0,u(p))}function c(p){return p===62?(n.exit("autolinkProtocol"),n.enter("autolinkMarker"),n.consume(p),n.exit("autolinkMarker"),n.exit("autolink"),e):p===null||p===32||p===60||ye(p)?t(p):(n.consume(p),c)}function u(p){return p===64?(n.consume(p),s):mi(p)?(n.consume(p),u):t(p)}function s(p){return tn(p)?f(p):t(p)}function f(p){return p===46?(n.consume(p),r=0,s):p===62?(n.exit("autolinkProtocol").type="autolinkEmail",n.enter("autolinkMarker"),n.consume(p),n.exit("autolinkMarker"),n.exit("autolink"),e):d(p)}function d(p){if((p===45||tn(p))&&r++<63){const w=p===45?d:f;return n.consume(p),w}return t(p)}}const Jn={partial:!0,tokenize:Pi};function Pi(n,e,t){return r;function r(l){return O(l)?X(n,i,"linePrefix")(l):i(l)}function i(l){return l===null||T(l)?e(l):t(l)}}const Ht={continuation:{tokenize:zi},exit:Li,name:"blockQuote",tokenize:Ti};function Ti(n,e,t){const r=this;return i;function i(o){if(o===62){const a=r.containerState;return a.open||(n.enter("blockQuote",{_container:!0}),a.open=!0),n.enter("blockQuotePrefix"),n.enter("blockQuoteMarker"),n.consume(o),n.exit("blockQuoteMarker"),l}return t(o)}function l(o){return O(o)?(n.enter("blockQuotePrefixWhitespace"),n.consume(o),n.exit("blockQuotePrefixWhitespace"),n.exit("blockQuotePrefix"),e):(n.exit("blockQuotePrefix"),e(o))}}function zi(n,e,t){const r=this;return i;function i(o){return O(o)?X(n,l,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):l(o)}function l(o){return n.attempt(Ht,e,t)(o)}}function Li(n){n.exit("blockQuote")}const Vt={name:"characterEscape",tokenize:Ni};function Ni(n,e,t){return r;function r(l){return n.enter("characterEscape"),n.enter("escapeMarker"),n.consume(l),n.exit("escapeMarker"),i}function i(l){return gi(l)?(n.enter("characterEscapeValue"),n.consume(l),n.exit("characterEscapeValue"),n.exit("characterEscape"),e):t(l)}}const qt={name:"characterReference",tokenize:Ri};function Ri(n,e,t){const r=this;let i=0,l,o;return a;function a(f){return n.enter("characterReference"),n.enter("characterReferenceMarker"),n.consume(f),n.exit("characterReferenceMarker"),c}function c(f){return f===35?(n.enter("characterReferenceMarkerNumeric"),n.consume(f),n.exit("characterReferenceMarkerNumeric"),u):(n.enter("characterReferenceValue"),l=31,o=tn,s(f))}function u(f){return f===88||f===120?(n.enter("characterReferenceMarkerHexadecimal"),n.consume(f),n.exit("characterReferenceMarkerHexadecimal"),n.enter("characterReferenceValue"),l=6,o=di,s):(n.enter("characterReferenceValue"),l=7,o=xe,s(f))}function s(f){if(f===59&&i){const d=n.exit("characterReferenceValue");return o===tn&&!Te(r.sliceSerialize(d))?t(f):(n.enter("characterReferenceMarker"),n.consume(f),n.exit("characterReferenceMarker"),n.exit("characterReference"),e)}return o(f)&&i++<l?(n.consume(f),s):t(f)}}const it={partial:!0,tokenize:Oi},lt={concrete:!0,name:"codeFenced",tokenize:Di};function Di(n,e,t){const r=this,i={partial:!0,tokenize:j};let l=0,o=0,a;return c;function c(y){return u(y)}function u(y){const D=r.events[r.events.length-1];return l=D&&D[1].type==="linePrefix"?D[2].sliceSerialize(D[1],!0).length:0,a=y,n.enter("codeFenced"),n.enter("codeFencedFence"),n.enter("codeFencedFenceSequence"),s(y)}function s(y){return y===a?(o++,n.consume(y),s):o<3?t(y):(n.exit("codeFencedFenceSequence"),O(y)?X(n,f,"whitespace")(y):f(y))}function f(y){return y===null||T(y)?(n.exit("codeFencedFence"),r.interrupt?e(y):n.check(it,I,B)(y)):(n.enter("codeFencedFenceInfo"),n.enter("chunkString",{contentType:"string"}),d(y))}function d(y){return y===null||T(y)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),f(y)):O(y)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),X(n,p,"whitespace")(y)):y===96&&y===a?t(y):(n.consume(y),d)}function p(y){return y===null||T(y)?f(y):(n.enter("codeFencedFenceMeta"),n.enter("chunkString",{contentType:"string"}),w(y))}function w(y){return y===null||T(y)?(n.exit("chunkString"),n.exit("codeFencedFenceMeta"),f(y)):y===96&&y===a?t(y):(n.consume(y),w)}function I(y){return n.attempt(i,B,E)(y)}function E(y){return n.enter("lineEnding"),n.consume(y),n.exit("lineEnding"),x}function x(y){return l>0&&O(y)?X(n,z,"linePrefix",l+1)(y):z(y)}function z(y){return y===null||T(y)?n.check(it,I,B)(y):(n.enter("codeFlowValue"),C(y))}function C(y){return y===null||T(y)?(n.exit("codeFlowValue"),z(y)):(n.consume(y),C)}function B(y){return n.exit("codeFenced"),e(y)}function j(y,D,H){let _=0;return F;function F(S){return y.enter("lineEnding"),y.consume(S),y.exit("lineEnding"),A}function A(S){return y.enter("codeFencedFence"),O(S)?X(y,v,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(S):v(S)}function v(S){return S===a?(y.enter("codeFencedFenceSequence"),V(S)):H(S)}function V(S){return S===a?(_++,y.consume(S),V):_>=o?(y.exit("codeFencedFenceSequence"),O(S)?X(y,P,"whitespace")(S):P(S)):H(S)}function P(S){return S===null||T(S)?(y.exit("codeFencedFence"),D(S)):H(S)}}}function Oi(n,e,t){const r=this;return i;function i(o){return o===null?t(o):(n.enter("lineEnding"),n.consume(o),n.exit("lineEnding"),l)}function l(o){return r.parser.lazy[r.now().line]?t(o):e(o)}}const re={name:"codeIndented",tokenize:Fi},_i={partial:!0,tokenize:Mi};function Fi(n,e,t){const r=this;return i;function i(u){return n.enter("codeIndented"),X(n,l,"linePrefix",5)(u)}function l(u){const s=r.events[r.events.length-1];return s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?o(u):t(u)}function o(u){return u===null?c(u):T(u)?n.attempt(_i,o,c)(u):(n.enter("codeFlowValue"),a(u))}function a(u){return u===null||T(u)?(n.exit("codeFlowValue"),o(u)):(n.consume(u),a)}function c(u){return n.exit("codeIndented"),e(u)}}function Mi(n,e,t){const r=this;return i;function i(o){return r.parser.lazy[r.now().line]?t(o):T(o)?(n.enter("lineEnding"),n.consume(o),n.exit("lineEnding"),i):X(n,l,"linePrefix",5)(o)}function l(o){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?e(o):T(o)?i(o):t(o)}}const Bi={name:"codeText",previous:ji,resolve:Ui,tokenize:Hi};function Ui(n){let e=n.length-4,t=3,r,i;if((n[t][1].type==="lineEnding"||n[t][1].type==="space")&&(n[e][1].type==="lineEnding"||n[e][1].type==="space")){for(r=t;++r<e;)if(n[r][1].type==="codeTextData"){n[t][1].type="codeTextPadding",n[e][1].type="codeTextPadding",t+=2,e-=2;break}}for(r=t-1,e++;++r<=e;)i===void 0?r!==e&&n[r][1].type!=="lineEnding"&&(i=r):(r===e||n[r][1].type==="lineEnding")&&(n[i][1].type="codeTextData",r!==i+2&&(n[i][1].end=n[r-1][1].end,n.splice(i+2,r-i-2),e-=r-i-2,r=i+2),i=void 0);return n}function ji(n){return n!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Hi(n,e,t){let r=0,i,l;return o;function o(f){return n.enter("codeText"),n.enter("codeTextSequence"),a(f)}function a(f){return f===96?(n.consume(f),r++,a):(n.exit("codeTextSequence"),c(f))}function c(f){return f===null?t(f):f===32?(n.enter("space"),n.consume(f),n.exit("space"),c):f===96?(l=n.enter("codeTextSequence"),i=0,s(f)):T(f)?(n.enter("lineEnding"),n.consume(f),n.exit("lineEnding"),c):(n.enter("codeTextData"),u(f))}function u(f){return f===null||f===32||f===96||T(f)?(n.exit("codeTextData"),c(f)):(n.consume(f),u)}function s(f){return f===96?(n.consume(f),i++,s):i===r?(n.exit("codeTextSequence"),n.exit("codeText"),e(f)):(l.type="codeTextData",u(f))}}class Vi{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){const r=t??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(e,r):e>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(e,t,r){const i=t||0;this.setCursor(Math.trunc(e));const l=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&_n(this.left,r),l.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),_n(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),_n(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){const t=this.left.splice(e,Number.POSITIVE_INFINITY);_n(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);_n(this.left,t.reverse())}}}function _n(n,e){let t=0;if(e.length<1e4)n.push(...e);else for(;t<e.length;)n.push(...e.slice(t,t+1e4)),t+=1e4}function Xt(n){const e={};let t=-1,r,i,l,o,a,c,u;const s=new Vi(n);for(;++t<s.length;){for(;t in e;)t=e[t];if(r=s.get(t),t&&r[1].type==="chunkFlow"&&s.get(t-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,l=0,l<c.length&&c[l][1].type==="lineEndingBlank"&&(l+=2),l<c.length&&c[l][1].type==="content"))for(;++l<c.length&&c[l][1].type!=="content";)c[l][1].type==="chunkText"&&(c[l][1]._isInFirstContentOfListItem=!0,l++);if(r[0]==="enter")r[1].contentType&&(Object.assign(e,qi(s,t)),t=e[t],u=!0);else if(r[1]._container){for(l=t,i=void 0;l--;)if(o=s.get(l),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(s.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=l);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(r[1].end={...s.get(i)[1].start},a=s.slice(i,t),a.unshift(r),s.splice(i,t-i+1,a))}}return pn(n,0,Number.POSITIVE_INFINITY,s.slice(0)),!u}function qi(n,e){const t=n.get(e)[1],r=n.get(e)[2];let i=e-1;const l=[];let o=t._tokenizer;o||(o=r.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const a=o.events,c=[],u={};let s,f,d=-1,p=t,w=0,I=0;const E=[I];for(;p;){for(;n.get(++i)[1]!==p;);l.push(i),p._tokenizer||(s=r.sliceStream(p),p.next||s.push(null),f&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(s),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),f=p,p=p.next}for(p=t;++d<a.length;)a[d][0]==="exit"&&a[d-1][0]==="enter"&&a[d][1].type===a[d-1][1].type&&a[d][1].start.line!==a[d][1].end.line&&(I=d+1,E.push(I),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):E.pop(),d=E.length;d--;){const x=a.slice(E[d],E[d+1]),z=l.pop();c.push([z,z+x.length-1]),n.splice(z,2,x)}for(c.reverse(),d=-1;++d<c.length;)u[w+c[d][0]]=w+c[d][1],w+=c[d][1]-c[d][0]-1;return u}const Xi={resolve:Wi,tokenize:Yi},$i={partial:!0,tokenize:Qi};function Wi(n){return Xt(n),n}function Yi(n,e){let t;return r;function r(a){return n.enter("content"),t=n.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?l(a):T(a)?n.check($i,o,l)(a):(n.consume(a),i)}function l(a){return n.exit("chunkContent"),n.exit("content"),e(a)}function o(a){return n.consume(a),n.exit("chunkContent"),t.next=n.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,i}}function Qi(n,e,t){const r=this;return i;function i(o){return n.exit("chunkContent"),n.enter("lineEnding"),n.consume(o),n.exit("lineEnding"),X(n,l,"linePrefix")}function l(o){if(o===null||T(o))return t(o);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?e(o):n.interrupt(r.parser.constructs.flow,t,e)(o)}}function $t(n,e,t,r,i,l,o,a,c){const u=c||Number.POSITIVE_INFINITY;let s=0;return f;function f(x){return x===60?(n.enter(r),n.enter(i),n.enter(l),n.consume(x),n.exit(l),d):x===null||x===32||x===41||ye(x)?t(x):(n.enter(r),n.enter(o),n.enter(a),n.enter("chunkString",{contentType:"string"}),I(x))}function d(x){return x===62?(n.enter(l),n.consume(x),n.exit(l),n.exit(i),n.exit(r),e):(n.enter(a),n.enter("chunkString",{contentType:"string"}),p(x))}function p(x){return x===62?(n.exit("chunkString"),n.exit(a),d(x)):x===null||x===60||T(x)?t(x):(n.consume(x),x===92?w:p)}function w(x){return x===60||x===62||x===92?(n.consume(x),p):p(x)}function I(x){return!s&&(x===null||x===41||K(x))?(n.exit("chunkString"),n.exit(a),n.exit(o),n.exit(r),e(x)):s<u&&x===40?(n.consume(x),s++,I):x===41?(n.consume(x),s--,I):x===null||x===32||x===40||ye(x)?t(x):(n.consume(x),x===92?E:I)}function E(x){return x===40||x===41||x===92?(n.consume(x),I):I(x)}}function Wt(n,e,t,r,i,l){const o=this;let a=0,c;return u;function u(p){return n.enter(r),n.enter(i),n.consume(p),n.exit(i),n.enter(l),s}function s(p){return a>999||p===null||p===91||p===93&&!c||p===94&&!a&&"_hiddenFootnoteSupport"in o.parser.constructs?t(p):p===93?(n.exit(l),n.enter(i),n.consume(p),n.exit(i),n.exit(r),e):T(p)?(n.enter("lineEnding"),n.consume(p),n.exit("lineEnding"),s):(n.enter("chunkString",{contentType:"string"}),f(p))}function f(p){return p===null||p===91||p===93||T(p)||a++>999?(n.exit("chunkString"),s(p)):(n.consume(p),c||(c=!O(p)),p===92?d:f)}function d(p){return p===91||p===92||p===93?(n.consume(p),a++,f):f(p)}}function Yt(n,e,t,r,i,l){let o;return a;function a(d){return d===34||d===39||d===40?(n.enter(r),n.enter(i),n.consume(d),n.exit(i),o=d===40?41:d,c):t(d)}function c(d){return d===o?(n.enter(i),n.consume(d),n.exit(i),n.exit(r),e):(n.enter(l),u(d))}function u(d){return d===o?(n.exit(l),c(o)):d===null?t(d):T(d)?(n.enter("lineEnding"),n.consume(d),n.exit("lineEnding"),X(n,u,"linePrefix")):(n.enter("chunkString",{contentType:"string"}),s(d))}function s(d){return d===o||d===null||T(d)?(n.exit("chunkString"),u(d)):(n.consume(d),d===92?f:s)}function f(d){return d===o||d===92?(n.consume(d),s):s(d)}}function Bn(n,e){let t;return r;function r(i){return T(i)?(n.enter("lineEnding"),n.consume(i),n.exit("lineEnding"),t=!0,r):O(i)?X(n,r,t?"linePrefix":"lineSuffix")(i):e(i)}}const Gi={name:"definition",tokenize:Ki},Ji={partial:!0,tokenize:Zi};function Ki(n,e,t){const r=this;let i;return l;function l(p){return n.enter("definition"),o(p)}function o(p){return Wt.call(r,n,a,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function a(p){return i=Pn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),p===58?(n.enter("definitionMarker"),n.consume(p),n.exit("definitionMarker"),c):t(p)}function c(p){return K(p)?Bn(n,u)(p):u(p)}function u(p){return $t(n,s,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function s(p){return n.attempt(Ji,f,f)(p)}function f(p){return O(p)?X(n,d,"whitespace")(p):d(p)}function d(p){return p===null||T(p)?(n.exit("definition"),r.parser.defined.push(i),e(p)):t(p)}}function Zi(n,e,t){return r;function r(a){return K(a)?Bn(n,i)(a):t(a)}function i(a){return Yt(n,l,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function l(a){return O(a)?X(n,o,"whitespace")(a):o(a)}function o(a){return a===null||T(a)?e(a):t(a)}}const nl={name:"hardBreakEscape",tokenize:el};function el(n,e,t){return r;function r(l){return n.enter("hardBreakEscape"),n.consume(l),i}function i(l){return T(l)?(n.exit("hardBreakEscape"),e(l)):t(l)}}const tl={name:"headingAtx",resolve:rl,tokenize:il};function rl(n,e){let t=n.length-2,r=3,i,l;return n[r][1].type==="whitespace"&&(r+=2),t-2>r&&n[t][1].type==="whitespace"&&(t-=2),n[t][1].type==="atxHeadingSequence"&&(r===t-1||t-4>r&&n[t-2][1].type==="whitespace")&&(t-=r+1===t?2:4),t>r&&(i={type:"atxHeadingText",start:n[r][1].start,end:n[t][1].end},l={type:"chunkText",start:n[r][1].start,end:n[t][1].end,contentType:"text"},pn(n,r,t-r+1,[["enter",i,e],["enter",l,e],["exit",l,e],["exit",i,e]])),n}function il(n,e,t){let r=0;return i;function i(s){return n.enter("atxHeading"),l(s)}function l(s){return n.enter("atxHeadingSequence"),o(s)}function o(s){return s===35&&r++<6?(n.consume(s),o):s===null||K(s)?(n.exit("atxHeadingSequence"),a(s)):t(s)}function a(s){return s===35?(n.enter("atxHeadingSequence"),c(s)):s===null||T(s)?(n.exit("atxHeading"),e(s)):O(s)?X(n,a,"whitespace")(s):(n.enter("atxHeadingText"),u(s))}function c(s){return s===35?(n.consume(s),c):(n.exit("atxHeadingSequence"),a(s))}function u(s){return s===null||s===35||K(s)?(n.exit("atxHeadingText"),a(s)):(n.consume(s),u)}}const ll=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],ot=["pre","script","style","textarea"],ol={concrete:!0,name:"htmlFlow",resolveTo:sl,tokenize:cl},al={partial:!0,tokenize:fl},ul={partial:!0,tokenize:pl};function sl(n){let e=n.length;for(;e--&&!(n[e][0]==="enter"&&n[e][1].type==="htmlFlow"););return e>1&&n[e-2][1].type==="linePrefix"&&(n[e][1].start=n[e-2][1].start,n[e+1][1].start=n[e-2][1].start,n.splice(e-2,2)),n}function cl(n,e,t){const r=this;let i,l,o,a,c;return u;function u(m){return s(m)}function s(m){return n.enter("htmlFlow"),n.enter("htmlFlowData"),n.consume(m),f}function f(m){return m===33?(n.consume(m),d):m===47?(n.consume(m),l=!0,I):m===63?(n.consume(m),i=3,r.interrupt?e:h):cn(m)?(n.consume(m),o=String.fromCharCode(m),E):t(m)}function d(m){return m===45?(n.consume(m),i=2,p):m===91?(n.consume(m),i=5,a=0,w):cn(m)?(n.consume(m),i=4,r.interrupt?e:h):t(m)}function p(m){return m===45?(n.consume(m),r.interrupt?e:h):t(m)}function w(m){const an="CDATA[";return m===an.charCodeAt(a++)?(n.consume(m),a===an.length?r.interrupt?e:v:w):t(m)}function I(m){return cn(m)?(n.consume(m),o=String.fromCharCode(m),E):t(m)}function E(m){if(m===null||m===47||m===62||K(m)){const an=m===47,kn=o.toLowerCase();return!an&&!l&&ot.includes(kn)?(i=1,r.interrupt?e(m):v(m)):ll.includes(o.toLowerCase())?(i=6,an?(n.consume(m),x):r.interrupt?e(m):v(m)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?t(m):l?z(m):C(m))}return m===45||tn(m)?(n.consume(m),o+=String.fromCharCode(m),E):t(m)}function x(m){return m===62?(n.consume(m),r.interrupt?e:v):t(m)}function z(m){return O(m)?(n.consume(m),z):F(m)}function C(m){return m===47?(n.consume(m),F):m===58||m===95||cn(m)?(n.consume(m),B):O(m)?(n.consume(m),C):F(m)}function B(m){return m===45||m===46||m===58||m===95||tn(m)?(n.consume(m),B):j(m)}function j(m){return m===61?(n.consume(m),y):O(m)?(n.consume(m),j):C(m)}function y(m){return m===null||m===60||m===61||m===62||m===96?t(m):m===34||m===39?(n.consume(m),c=m,D):O(m)?(n.consume(m),y):H(m)}function D(m){return m===c?(n.consume(m),c=null,_):m===null||T(m)?t(m):(n.consume(m),D)}function H(m){return m===null||m===34||m===39||m===47||m===60||m===61||m===62||m===96||K(m)?j(m):(n.consume(m),H)}function _(m){return m===47||m===62||O(m)?C(m):t(m)}function F(m){return m===62?(n.consume(m),A):t(m)}function A(m){return m===null||T(m)?v(m):O(m)?(n.consume(m),A):t(m)}function v(m){return m===45&&i===2?(n.consume(m),M):m===60&&i===1?(n.consume(m),W):m===62&&i===4?(n.consume(m),on):m===63&&i===3?(n.consume(m),h):m===93&&i===5?(n.consume(m),fn):T(m)&&(i===6||i===7)?(n.exit("htmlFlowData"),n.check(al,hn,V)(m)):m===null||T(m)?(n.exit("htmlFlowData"),V(m)):(n.consume(m),v)}function V(m){return n.check(ul,P,hn)(m)}function P(m){return n.enter("lineEnding"),n.consume(m),n.exit("lineEnding"),S}function S(m){return m===null||T(m)?V(m):(n.enter("htmlFlowData"),v(m))}function M(m){return m===45?(n.consume(m),h):v(m)}function W(m){return m===47?(n.consume(m),o="",ln):v(m)}function ln(m){if(m===62){const an=o.toLowerCase();return ot.includes(an)?(n.consume(m),on):v(m)}return cn(m)&&o.length<8?(n.consume(m),o+=String.fromCharCode(m),ln):v(m)}function fn(m){return m===93?(n.consume(m),h):v(m)}function h(m){return m===62?(n.consume(m),on):m===45&&i===2?(n.consume(m),h):v(m)}function on(m){return m===null||T(m)?(n.exit("htmlFlowData"),hn(m)):(n.consume(m),on)}function hn(m){return n.exit("htmlFlow"),e(m)}}function pl(n,e,t){const r=this;return i;function i(o){return T(o)?(n.enter("lineEnding"),n.consume(o),n.exit("lineEnding"),l):t(o)}function l(o){return r.parser.lazy[r.now().line]?t(o):e(o)}}function fl(n,e,t){return r;function r(i){return n.enter("lineEnding"),n.consume(i),n.exit("lineEnding"),n.attempt(Jn,e,t)}}const hl={name:"htmlText",tokenize:ml};function ml(n,e,t){const r=this;let i,l,o;return a;function a(h){return n.enter("htmlText"),n.enter("htmlTextData"),n.consume(h),c}function c(h){return h===33?(n.consume(h),u):h===47?(n.consume(h),j):h===63?(n.consume(h),C):cn(h)?(n.consume(h),H):t(h)}function u(h){return h===45?(n.consume(h),s):h===91?(n.consume(h),l=0,w):cn(h)?(n.consume(h),z):t(h)}function s(h){return h===45?(n.consume(h),p):t(h)}function f(h){return h===null?t(h):h===45?(n.consume(h),d):T(h)?(o=f,W(h)):(n.consume(h),f)}function d(h){return h===45?(n.consume(h),p):f(h)}function p(h){return h===62?M(h):h===45?d(h):f(h)}function w(h){const on="CDATA[";return h===on.charCodeAt(l++)?(n.consume(h),l===on.length?I:w):t(h)}function I(h){return h===null?t(h):h===93?(n.consume(h),E):T(h)?(o=I,W(h)):(n.consume(h),I)}function E(h){return h===93?(n.consume(h),x):I(h)}function x(h){return h===62?M(h):h===93?(n.consume(h),x):I(h)}function z(h){return h===null||h===62?M(h):T(h)?(o=z,W(h)):(n.consume(h),z)}function C(h){return h===null?t(h):h===63?(n.consume(h),B):T(h)?(o=C,W(h)):(n.consume(h),C)}function B(h){return h===62?M(h):C(h)}function j(h){return cn(h)?(n.consume(h),y):t(h)}function y(h){return h===45||tn(h)?(n.consume(h),y):D(h)}function D(h){return T(h)?(o=D,W(h)):O(h)?(n.consume(h),D):M(h)}function H(h){return h===45||tn(h)?(n.consume(h),H):h===47||h===62||K(h)?_(h):t(h)}function _(h){return h===47?(n.consume(h),M):h===58||h===95||cn(h)?(n.consume(h),F):T(h)?(o=_,W(h)):O(h)?(n.consume(h),_):M(h)}function F(h){return h===45||h===46||h===58||h===95||tn(h)?(n.consume(h),F):A(h)}function A(h){return h===61?(n.consume(h),v):T(h)?(o=A,W(h)):O(h)?(n.consume(h),A):_(h)}function v(h){return h===null||h===60||h===61||h===62||h===96?t(h):h===34||h===39?(n.consume(h),i=h,V):T(h)?(o=v,W(h)):O(h)?(n.consume(h),v):(n.consume(h),P)}function V(h){return h===i?(n.consume(h),i=void 0,S):h===null?t(h):T(h)?(o=V,W(h)):(n.consume(h),V)}function P(h){return h===null||h===34||h===39||h===60||h===61||h===96?t(h):h===47||h===62||K(h)?_(h):(n.consume(h),P)}function S(h){return h===47||h===62||K(h)?_(h):t(h)}function M(h){return h===62?(n.consume(h),n.exit("htmlTextData"),n.exit("htmlText"),e):t(h)}function W(h){return n.exit("htmlTextData"),n.enter("lineEnding"),n.consume(h),n.exit("lineEnding"),ln}function ln(h){return O(h)?X(n,fn,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(h):fn(h)}function fn(h){return n.enter("htmlTextData"),o(h)}}const Le={name:"labelEnd",resolveAll:xl,resolveTo:kl,tokenize:bl},dl={tokenize:wl},gl={tokenize:Sl},yl={tokenize:Il};function xl(n){let e=-1;const t=[];for(;++e<n.length;){const r=n[e][1];if(t.push(n[e]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",e+=i}}return n.length!==t.length&&pn(n,0,n.length,t),n}function kl(n,e){let t=n.length,r=0,i,l,o,a;for(;t--;)if(i=n[t][1],l){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;n[t][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(o){if(n[t][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(l=t,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(o=t);const c={type:n[l][1].type==="labelLink"?"link":"image",start:{...n[l][1].start},end:{...n[n.length-1][1].end}},u={type:"label",start:{...n[l][1].start},end:{...n[o][1].end}},s={type:"labelText",start:{...n[l+r+2][1].end},end:{...n[o-2][1].start}};return a=[["enter",c,e],["enter",u,e]],a=rn(a,n.slice(l+1,l+r+3)),a=rn(a,[["enter",s,e]]),a=rn(a,ze(e.parser.constructs.insideSpan.null,n.slice(l+r+4,o-3),e)),a=rn(a,[["exit",s,e],n[o-2],n[o-1],["exit",u,e]]),a=rn(a,n.slice(o+1)),a=rn(a,[["exit",c,e]]),pn(n,l,n.length,a),n}function bl(n,e,t){const r=this;let i=r.events.length,l,o;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){l=r.events[i][1];break}return a;function a(d){return l?l._inactive?f(d):(o=r.parser.defined.includes(Pn(r.sliceSerialize({start:l.end,end:r.now()}))),n.enter("labelEnd"),n.enter("labelMarker"),n.consume(d),n.exit("labelMarker"),n.exit("labelEnd"),c):t(d)}function c(d){return d===40?n.attempt(dl,s,o?s:f)(d):d===91?n.attempt(gl,s,o?u:f)(d):o?s(d):f(d)}function u(d){return n.attempt(yl,s,f)(d)}function s(d){return e(d)}function f(d){return l._balanced=!0,t(d)}}function wl(n,e,t){return r;function r(f){return n.enter("resource"),n.enter("resourceMarker"),n.consume(f),n.exit("resourceMarker"),i}function i(f){return K(f)?Bn(n,l)(f):l(f)}function l(f){return f===41?s(f):$t(n,o,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(f)}function o(f){return K(f)?Bn(n,c)(f):s(f)}function a(f){return t(f)}function c(f){return f===34||f===39||f===40?Yt(n,u,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(f):s(f)}function u(f){return K(f)?Bn(n,s)(f):s(f)}function s(f){return f===41?(n.enter("resourceMarker"),n.consume(f),n.exit("resourceMarker"),n.exit("resource"),e):t(f)}}function Sl(n,e,t){const r=this;return i;function i(a){return Wt.call(r,n,l,o,"reference","referenceMarker","referenceString")(a)}function l(a){return r.parser.defined.includes(Pn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?e(a):t(a)}function o(a){return t(a)}}function Il(n,e,t){return r;function r(l){return n.enter("reference"),n.enter("referenceMarker"),n.consume(l),n.exit("referenceMarker"),i}function i(l){return l===93?(n.enter("referenceMarker"),n.consume(l),n.exit("referenceMarker"),n.exit("reference"),e):t(l)}}const Cl={name:"labelStartImage",resolveAll:Le.resolveAll,tokenize:El};function El(n,e,t){const r=this;return i;function i(a){return n.enter("labelImage"),n.enter("labelImageMarker"),n.consume(a),n.exit("labelImageMarker"),l}function l(a){return a===91?(n.enter("labelMarker"),n.consume(a),n.exit("labelMarker"),n.exit("labelImage"),o):t(a)}function o(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(a):e(a)}}const vl={name:"labelStartLink",resolveAll:Le.resolveAll,tokenize:Al};function Al(n,e,t){const r=this;return i;function i(o){return n.enter("labelLink"),n.enter("labelMarker"),n.consume(o),n.exit("labelMarker"),n.exit("labelLink"),l}function l(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(o):e(o)}}const ie={name:"lineEnding",tokenize:Pl};function Pl(n,e){return t;function t(r){return n.enter("lineEnding"),n.consume(r),n.exit("lineEnding"),X(n,e,"linePrefix")}}const Yn={name:"thematicBreak",tokenize:Tl};function Tl(n,e,t){let r=0,i;return l;function l(u){return n.enter("thematicBreak"),o(u)}function o(u){return i=u,a(u)}function a(u){return u===i?(n.enter("thematicBreakSequence"),c(u)):r>=3&&(u===null||T(u))?(n.exit("thematicBreak"),e(u)):t(u)}function c(u){return u===i?(n.consume(u),r++,c):(n.exit("thematicBreakSequence"),O(u)?X(n,a,"whitespace")(u):a(u))}}const J={continuation:{tokenize:Rl},exit:Ol,name:"list",tokenize:Nl},zl={partial:!0,tokenize:_l},Ll={partial:!0,tokenize:Dl};function Nl(n,e,t){const r=this,i=r.events[r.events.length-1];let l=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return a;function a(p){const w=r.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(w==="listUnordered"?!r.containerState.marker||p===r.containerState.marker:xe(p)){if(r.containerState.type||(r.containerState.type=w,n.enter(w,{_container:!0})),w==="listUnordered")return n.enter("listItemPrefix"),p===42||p===45?n.check(Yn,t,u)(p):u(p);if(!r.interrupt||p===49)return n.enter("listItemPrefix"),n.enter("listItemValue"),c(p)}return t(p)}function c(p){return xe(p)&&++o<10?(n.consume(p),c):(!r.interrupt||o<2)&&(r.containerState.marker?p===r.containerState.marker:p===41||p===46)?(n.exit("listItemValue"),u(p)):t(p)}function u(p){return n.enter("listItemMarker"),n.consume(p),n.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||p,n.check(Jn,r.interrupt?t:s,n.attempt(zl,d,f))}function s(p){return r.containerState.initialBlankLine=!0,l++,d(p)}function f(p){return O(p)?(n.enter("listItemPrefixWhitespace"),n.consume(p),n.exit("listItemPrefixWhitespace"),d):t(p)}function d(p){return r.containerState.size=l+r.sliceSerialize(n.exit("listItemPrefix"),!0).length,e(p)}}function Rl(n,e,t){const r=this;return r.containerState._closeFlow=void 0,n.check(Jn,i,l);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,X(n,e,"listItemIndent",r.containerState.size+1)(a)}function l(a){return r.containerState.furtherBlankLines||!O(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,n.attempt(Ll,e,o)(a))}function o(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,X(n,n.attempt(J,e,t),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function Dl(n,e,t){const r=this;return X(n,i,"listItemIndent",r.containerState.size+1);function i(l){const o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?e(l):t(l)}}function Ol(n){n.exit(this.containerState.type)}function _l(n,e,t){const r=this;return X(n,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(l){const o=r.events[r.events.length-1];return!O(l)&&o&&o[1].type==="listItemPrefixWhitespace"?e(l):t(l)}}const at={name:"setextUnderline",resolveTo:Fl,tokenize:Ml};function Fl(n,e){let t=n.length,r,i,l;for(;t--;)if(n[t][0]==="enter"){if(n[t][1].type==="content"){r=t;break}n[t][1].type==="paragraph"&&(i=t)}else n[t][1].type==="content"&&n.splice(t,1),!l&&n[t][1].type==="definition"&&(l=t);const o={type:"setextHeading",start:{...n[r][1].start},end:{...n[n.length-1][1].end}};return n[i][1].type="setextHeadingText",l?(n.splice(i,0,["enter",o,e]),n.splice(l+1,0,["exit",n[r][1],e]),n[r][1].end={...n[l][1].end}):n[r][1]=o,n.push(["exit",o,e]),n}function Ml(n,e,t){const r=this;let i;return l;function l(u){let s=r.events.length,f;for(;s--;)if(r.events[s][1].type!=="lineEnding"&&r.events[s][1].type!=="linePrefix"&&r.events[s][1].type!=="content"){f=r.events[s][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||f)?(n.enter("setextHeadingLine"),i=u,o(u)):t(u)}function o(u){return n.enter("setextHeadingLineSequence"),a(u)}function a(u){return u===i?(n.consume(u),a):(n.exit("setextHeadingLineSequence"),O(u)?X(n,c,"lineSuffix")(u):c(u))}function c(u){return u===null||T(u)?(n.exit("setextHeadingLine"),e(u)):t(u)}}const Bl={tokenize:Ul};function Ul(n){const e=this,t=n.attempt(Jn,r,n.attempt(this.parser.constructs.flowInitial,i,X(n,n.attempt(this.parser.constructs.flow,i,n.attempt(Xi,i)),"linePrefix")));return t;function r(l){if(l===null){n.consume(l);return}return n.enter("lineEndingBlank"),n.consume(l),n.exit("lineEndingBlank"),e.currentConstruct=void 0,t}function i(l){if(l===null){n.consume(l);return}return n.enter("lineEnding"),n.consume(l),n.exit("lineEnding"),e.currentConstruct=void 0,t}}const jl={resolveAll:Gt()},Hl=Qt("string"),Vl=Qt("text");function Qt(n){return{resolveAll:Gt(n==="text"?ql:void 0),tokenize:e};function e(t){const r=this,i=this.parser.constructs[n],l=t.attempt(i,o,a);return o;function o(s){return u(s)?l(s):a(s)}function a(s){if(s===null){t.consume(s);return}return t.enter("data"),t.consume(s),c}function c(s){return u(s)?(t.exit("data"),l(s)):(t.consume(s),c)}function u(s){if(s===null)return!0;const f=i[s];let d=-1;if(f)for(;++d<f.length;){const p=f[d];if(!p.previous||p.previous.call(r,r.previous))return!0}return!1}}}function Gt(n){return e;function e(t,r){let i=-1,l;for(;++i<=t.length;)l===void 0?t[i]&&t[i][1].type==="data"&&(l=i,i++):(!t[i]||t[i][1].type!=="data")&&(i!==l+2&&(t[l][1].end=t[i-1][1].end,t.splice(l+2,i-l-2),i=l+2),l=void 0);return n?n(t,r):t}}function ql(n,e){let t=0;for(;++t<=n.length;)if((t===n.length||n[t][1].type==="lineEnding")&&n[t-1][1].type==="data"){const r=n[t-1][1],i=e.sliceStream(r);let l=i.length,o=-1,a=0,c;for(;l--;){const u=i[l];if(typeof u=="string"){for(o=u.length;u.charCodeAt(o-1)===32;)a++,o--;if(o)break;o=-1}else if(u===-2)c=!0,a++;else if(u!==-1){l++;break}}if(e._contentTypeTextTrailing&&t===n.length&&(a=0),a){const u={type:t===n.length||c||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:l?o:r.start._bufferIndex+o,_index:r.start._index+l,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(n.splice(t,0,["enter",u,e],["exit",u,e]),t+=2)}t++}return n}const Xl={42:J,43:J,45:J,48:J,49:J,50:J,51:J,52:J,53:J,54:J,55:J,56:J,57:J,62:Ht},$l={91:Gi},Wl={[-2]:re,[-1]:re,32:re},Yl={35:tl,42:Yn,45:[at,Yn],60:ol,61:at,95:Yn,96:lt,126:lt},Ql={38:qt,92:Vt},Gl={[-5]:ie,[-4]:ie,[-3]:ie,33:Cl,38:qt,42:ke,60:[vi,hl],91:vl,92:[nl,Vt],93:Le,95:ke,96:Bi},Jl={null:[ke,jl]},Kl={null:[42,95]},Zl={null:[]},no=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Kl,contentInitial:$l,disable:Zl,document:Xl,flow:Yl,flowInitial:Wl,insideSpan:Jl,string:Ql,text:Gl},Symbol.toStringTag,{value:"Module"}));function eo(n,e,t){let r={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const i={},l=[];let o=[],a=[];const c={attempt:D(j),check:D(y),consume:z,enter:C,exit:B,interrupt:D(y,{interrupt:!0})},u={code:null,containerState:{},defineSkip:I,events:[],now:w,parser:n,previous:null,sliceSerialize:d,sliceStream:p,write:f};let s=e.tokenize.call(u,c);return e.resolveAll&&l.push(e),u;function f(A){return o=rn(o,A),E(),o[o.length-1]!==null?[]:(H(e,0),u.events=ze(l,u.events,u),u.events)}function d(A,v){return ro(p(A),v)}function p(A){return to(o,A)}function w(){const{_bufferIndex:A,_index:v,line:V,column:P,offset:S}=r;return{_bufferIndex:A,_index:v,line:V,column:P,offset:S}}function I(A){i[A.line]=A.column,F()}function E(){let A;for(;r._index<o.length;){const v=o[r._index];if(typeof v=="string")for(A=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===A&&r._bufferIndex<v.length;)x(v.charCodeAt(r._bufferIndex));else x(v)}}function x(A){s=s(A)}function z(A){T(A)?(r.line++,r.column=1,r.offset+=A===-3?2:1,F()):A!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=A}function C(A,v){const V=v||{};return V.type=A,V.start=w(),u.events.push(["enter",V,u]),a.push(V),V}function B(A){const v=a.pop();return v.end=w(),u.events.push(["exit",v,u]),v}function j(A,v){H(A,v.from)}function y(A,v){v.restore()}function D(A,v){return V;function V(P,S,M){let W,ln,fn,h;return Array.isArray(P)?hn(P):"tokenize"in P?hn([P]):on(P);function on(Y){return Ln;function Ln(gn){const Sn=gn!==null&&Y[gn],In=gn!==null&&Y.null,qn=[...Array.isArray(Sn)?Sn:Sn?[Sn]:[],...Array.isArray(In)?In:In?[In]:[]];return hn(qn)(gn)}}function hn(Y){return W=Y,ln=0,Y.length===0?M:m(Y[ln])}function m(Y){return Ln;function Ln(gn){return h=_(),fn=Y,Y.partial||(u.currentConstruct=Y),Y.name&&u.parser.constructs.disable.null.includes(Y.name)?kn():Y.tokenize.call(v?Object.assign(Object.create(u),v):u,c,an,kn)(gn)}}function an(Y){return A(fn,h),S}function kn(Y){return h.restore(),++ln<W.length?m(W[ln]):M}}}function H(A,v){A.resolveAll&&!l.includes(A)&&l.push(A),A.resolve&&pn(u.events,v,u.events.length-v,A.resolve(u.events.slice(v),u)),A.resolveTo&&(u.events=A.resolveTo(u.events,u))}function _(){const A=w(),v=u.previous,V=u.currentConstruct,P=u.events.length,S=Array.from(a);return{from:P,restore:M};function M(){r=A,u.previous=v,u.currentConstruct=V,u.events.length=P,a=S,F()}}function F(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function to(n,e){const t=e.start._index,r=e.start._bufferIndex,i=e.end._index,l=e.end._bufferIndex;let o;if(t===i)o=[n[t].slice(r,l)];else{if(o=n.slice(t,i),r>-1){const a=o[0];typeof a=="string"?o[0]=a.slice(r):o.shift()}l>0&&o.push(n[i].slice(0,l))}return o}function ro(n,e){let t=-1;const r=[];let i;for(;++t<n.length;){const l=n[t];let o;if(typeof l=="string")o=l;else switch(l){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=e?" ":"	";break}case-1:{if(!e&&i)continue;o=" ";break}default:o=String.fromCharCode(l)}i=l===-2,r.push(o)}return r.join("")}function io(n){const r={constructs:pi([no,...(n||{}).extensions||[]]),content:i(ki),defined:[],document:i(wi),flow:i(Bl),lazy:{},string:i(Hl),text:i(Vl)};return r;function i(l){return o;function o(a){return eo(r,l,a)}}}function lo(n){for(;!Xt(n););return n}const ut=/[\0\t\n\r]/g;function oo(){let n=1,e="",t=!0,r;return i;function i(l,o,a){const c=[];let u,s,f,d,p;for(l=e+(typeof l=="string"?l.toString():new TextDecoder(o||void 0).decode(l)),f=0,e="",t&&(l.charCodeAt(0)===65279&&f++,t=void 0);f<l.length;){if(ut.lastIndex=f,u=ut.exec(l),d=u&&u.index!==void 0?u.index:l.length,p=l.charCodeAt(d),!u){e=l.slice(f);break}if(p===10&&f===d&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),f<d&&(c.push(l.slice(f,d)),n+=d-f),p){case 0:{c.push(65533),n++;break}case 9:{for(s=Math.ceil(n/4)*4,c.push(-2);n++<s;)c.push(-1);break}case 10:{c.push(-4),n=1;break}default:r=!0,n=1}f=d+1}return a&&(r&&c.push(-5),e&&c.push(e),c.push(null)),c}}const ao=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function uo(n){return n.replace(ao,so)}function so(n,e,t){if(e)return e;if(t.charCodeAt(0)===35){const i=t.charCodeAt(1),l=i===120||i===88;return jt(t.slice(l?2:1),l?16:10)}return Te(t)||n}const Jt={}.hasOwnProperty;function co(n,e,t){return e&&typeof e=="object"&&(t=e,e=void 0),po(t)(lo(io(t).document().write(oo()(n,e,!0))))}function po(n){const e={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:l(Ue),autolinkProtocol:_,autolinkEmail:_,atxHeading:l(Fe),blockQuote:l(In),characterEscape:_,characterReference:_,codeFenced:l(qn),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:l(qn,o),codeText:l(ur,o),codeTextData:_,data:_,codeFlowValue:_,definition:l(sr),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:l(cr),hardBreakEscape:l(Me),hardBreakTrailing:l(Me),htmlFlow:l(Be,o),htmlFlowData:_,htmlText:l(Be,o),htmlTextData:_,image:l(pr),label:o,link:l(Ue),listItem:l(fr),listItemValue:d,listOrdered:l(je,f),listUnordered:l(je),paragraph:l(hr),reference:m,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:l(Fe),strong:l(mr),thematicBreak:l(gr)},exit:{atxHeading:c(),atxHeadingSequence:j,autolink:c(),autolinkEmail:Sn,autolinkProtocol:gn,blockQuote:c(),characterEscapeValue:F,characterReferenceMarkerHexadecimal:kn,characterReferenceMarkerNumeric:kn,characterReferenceValue:Y,characterReference:Ln,codeFenced:c(E),codeFencedFence:I,codeFencedFenceInfo:p,codeFencedFenceMeta:w,codeFlowValue:F,codeIndented:c(x),codeText:c(S),codeTextData:F,data:F,definition:c(),definitionDestinationString:B,definitionLabelString:z,definitionTitleString:C,emphasis:c(),hardBreakEscape:c(v),hardBreakTrailing:c(v),htmlFlow:c(V),htmlFlowData:F,htmlText:c(P),htmlTextData:F,image:c(W),label:fn,labelText:ln,lineEnding:A,link:c(M),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:an,resourceDestinationString:h,resourceTitleString:on,resource:hn,setextHeading:c(H),setextHeadingLineSequence:D,setextHeadingText:y,strong:c(),thematicBreak:c()}};Kt(e,(n||{}).mdastExtensions||[]);const t={};return r;function r(g){let b={type:"root",children:[]};const L={stack:[b],tokenStack:[],config:e,enter:a,exit:u,buffer:o,resume:s,data:t},R=[];let U=-1;for(;++U<g.length;)if(g[U][1].type==="listOrdered"||g[U][1].type==="listUnordered")if(g[U][0]==="enter")R.push(U);else{const un=R.pop();U=i(g,un,U)}for(U=-1;++U<g.length;){const un=e[g[U][0]];Jt.call(un,g[U][1].type)&&un[g[U][1].type].call(Object.assign({sliceSerialize:g[U][2].sliceSerialize},L),g[U][1])}if(L.tokenStack.length>0){const un=L.tokenStack[L.tokenStack.length-1];(un[1]||st).call(L,void 0,un[0])}for(b.position={start:yn(g.length>0?g[0][1].start:{line:1,column:1,offset:0}),end:yn(g.length>0?g[g.length-2][1].end:{line:1,column:1,offset:0})},U=-1;++U<e.transforms.length;)b=e.transforms[U](b)||b;return b}function i(g,b,L){let R=b-1,U=-1,un=!1,bn,mn,Nn,Rn;for(;++R<=L;){const nn=g[R];switch(nn[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{nn[0]==="enter"?U++:U--,Rn=void 0;break}case"lineEndingBlank":{nn[0]==="enter"&&(bn&&!Rn&&!U&&!Nn&&(Nn=R),Rn=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Rn=void 0}if(!U&&nn[0]==="enter"&&nn[1].type==="listItemPrefix"||U===-1&&nn[0]==="exit"&&(nn[1].type==="listUnordered"||nn[1].type==="listOrdered")){if(bn){let Cn=R;for(mn=void 0;Cn--;){const dn=g[Cn];if(dn[1].type==="lineEnding"||dn[1].type==="lineEndingBlank"){if(dn[0]==="exit")continue;mn&&(g[mn][1].type="lineEndingBlank",un=!0),dn[1].type="lineEnding",mn=Cn}else if(!(dn[1].type==="linePrefix"||dn[1].type==="blockQuotePrefix"||dn[1].type==="blockQuotePrefixWhitespace"||dn[1].type==="blockQuoteMarker"||dn[1].type==="listItemIndent"))break}Nn&&(!mn||Nn<mn)&&(bn._spread=!0),bn.end=Object.assign({},mn?g[mn][1].start:nn[1].end),g.splice(mn||R,0,["exit",bn,nn[2]]),R++,L++}if(nn[1].type==="listItemPrefix"){const Cn={type:"listItem",_spread:!1,start:Object.assign({},nn[1].start),end:void 0};bn=Cn,g.splice(R,0,["enter",Cn,nn[2]]),R++,L++,Nn=void 0,Rn=!0}}}return g[b][1]._spread=un,L}function l(g,b){return L;function L(R){a.call(this,g(R),R),b&&b.call(this,R)}}function o(){this.stack.push({type:"fragment",children:[]})}function a(g,b,L){this.stack[this.stack.length-1].children.push(g),this.stack.push(g),this.tokenStack.push([b,L||void 0]),g.position={start:yn(b.start),end:void 0}}function c(g){return b;function b(L){g&&g.call(this,L),u.call(this,L)}}function u(g,b){const L=this.stack.pop(),R=this.tokenStack.pop();if(R)R[0].type!==g.type&&(b?b.call(this,g,R[0]):(R[1]||st).call(this,g,R[0]));else throw new Error("Cannot close `"+g.type+"` ("+Mn({start:g.start,end:g.end})+"): it’s not open");L.position.end=yn(g.end)}function s(){return si(this.stack.pop())}function f(){this.data.expectingFirstListItemValue=!0}function d(g){if(this.data.expectingFirstListItemValue){const b=this.stack[this.stack.length-2];b.start=Number.parseInt(this.sliceSerialize(g),10),this.data.expectingFirstListItemValue=void 0}}function p(){const g=this.resume(),b=this.stack[this.stack.length-1];b.lang=g}function w(){const g=this.resume(),b=this.stack[this.stack.length-1];b.meta=g}function I(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function E(){const g=this.resume(),b=this.stack[this.stack.length-1];b.value=g.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function x(){const g=this.resume(),b=this.stack[this.stack.length-1];b.value=g.replace(/(\r?\n|\r)$/g,"")}function z(g){const b=this.resume(),L=this.stack[this.stack.length-1];L.label=b,L.identifier=Pn(this.sliceSerialize(g)).toLowerCase()}function C(){const g=this.resume(),b=this.stack[this.stack.length-1];b.title=g}function B(){const g=this.resume(),b=this.stack[this.stack.length-1];b.url=g}function j(g){const b=this.stack[this.stack.length-1];if(!b.depth){const L=this.sliceSerialize(g).length;b.depth=L}}function y(){this.data.setextHeadingSlurpLineEnding=!0}function D(g){const b=this.stack[this.stack.length-1];b.depth=this.sliceSerialize(g).codePointAt(0)===61?1:2}function H(){this.data.setextHeadingSlurpLineEnding=void 0}function _(g){const L=this.stack[this.stack.length-1].children;let R=L[L.length-1];(!R||R.type!=="text")&&(R=dr(),R.position={start:yn(g.start),end:void 0},L.push(R)),this.stack.push(R)}function F(g){const b=this.stack.pop();b.value+=this.sliceSerialize(g),b.position.end=yn(g.end)}function A(g){const b=this.stack[this.stack.length-1];if(this.data.atHardBreak){const L=b.children[b.children.length-1];L.position.end=yn(g.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&e.canContainEols.includes(b.type)&&(_.call(this,g),F.call(this,g))}function v(){this.data.atHardBreak=!0}function V(){const g=this.resume(),b=this.stack[this.stack.length-1];b.value=g}function P(){const g=this.resume(),b=this.stack[this.stack.length-1];b.value=g}function S(){const g=this.resume(),b=this.stack[this.stack.length-1];b.value=g}function M(){const g=this.stack[this.stack.length-1];if(this.data.inReference){const b=this.data.referenceType||"shortcut";g.type+="Reference",g.referenceType=b,delete g.url,delete g.title}else delete g.identifier,delete g.label;this.data.referenceType=void 0}function W(){const g=this.stack[this.stack.length-1];if(this.data.inReference){const b=this.data.referenceType||"shortcut";g.type+="Reference",g.referenceType=b,delete g.url,delete g.title}else delete g.identifier,delete g.label;this.data.referenceType=void 0}function ln(g){const b=this.sliceSerialize(g),L=this.stack[this.stack.length-2];L.label=uo(b),L.identifier=Pn(b).toLowerCase()}function fn(){const g=this.stack[this.stack.length-1],b=this.resume(),L=this.stack[this.stack.length-1];if(this.data.inReference=!0,L.type==="link"){const R=g.children;L.children=R}else L.alt=b}function h(){const g=this.resume(),b=this.stack[this.stack.length-1];b.url=g}function on(){const g=this.resume(),b=this.stack[this.stack.length-1];b.title=g}function hn(){this.data.inReference=void 0}function m(){this.data.referenceType="collapsed"}function an(g){const b=this.resume(),L=this.stack[this.stack.length-1];L.label=b,L.identifier=Pn(this.sliceSerialize(g)).toLowerCase(),this.data.referenceType="full"}function kn(g){this.data.characterReferenceType=g.type}function Y(g){const b=this.sliceSerialize(g),L=this.data.characterReferenceType;let R;L?(R=jt(b,L==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):R=Te(b);const U=this.stack[this.stack.length-1];U.value+=R}function Ln(g){const b=this.stack.pop();b.position.end=yn(g.end)}function gn(g){F.call(this,g);const b=this.stack[this.stack.length-1];b.url=this.sliceSerialize(g)}function Sn(g){F.call(this,g);const b=this.stack[this.stack.length-1];b.url="mailto:"+this.sliceSerialize(g)}function In(){return{type:"blockquote",children:[]}}function qn(){return{type:"code",lang:null,meta:null,value:""}}function ur(){return{type:"inlineCode",value:""}}function sr(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function cr(){return{type:"emphasis",children:[]}}function Fe(){return{type:"heading",depth:0,children:[]}}function Me(){return{type:"break"}}function Be(){return{type:"html",value:""}}function pr(){return{type:"image",title:null,url:"",alt:null}}function Ue(){return{type:"link",title:null,url:"",children:[]}}function je(g){return{type:"list",ordered:g.type==="listOrdered",start:null,spread:g._spread,children:[]}}function fr(g){return{type:"listItem",spread:g._spread,checked:null,children:[]}}function hr(){return{type:"paragraph",children:[]}}function mr(){return{type:"strong",children:[]}}function dr(){return{type:"text",value:""}}function gr(){return{type:"thematicBreak"}}}function yn(n){return{line:n.line,column:n.column,offset:n.offset}}function Kt(n,e){let t=-1;for(;++t<e.length;){const r=e[t];Array.isArray(r)?Kt(n,r):fo(n,r)}}function fo(n,e){let t;for(t in e)if(Jt.call(e,t))switch(t){case"canContainEols":{const r=e[t];r&&n[t].push(...r);break}case"transforms":{const r=e[t];r&&n[t].push(...r);break}case"enter":case"exit":{const r=e[t];r&&Object.assign(n[t],r);break}}}function st(n,e){throw n?new Error("Cannot close `"+n.type+"` ("+Mn({start:n.start,end:n.end})+"): a different token (`"+e.type+"`, "+Mn({start:e.start,end:e.end})+") is open"):new Error("Cannot close document, a token (`"+e.type+"`, "+Mn({start:e.start,end:e.end})+") is still open")}function ho(n){const e=this;e.parser=t;function t(r){return co(r,{...e.data("settings"),...n,extensions:e.data("micromarkExtensions")||[],mdastExtensions:e.data("fromMarkdownExtensions")||[]})}}function mo(n,e){const t={type:"element",tagName:"blockquote",properties:{},children:n.wrap(n.all(e),!0)};return n.patch(e,t),n.applyData(e,t)}function go(n,e){const t={type:"element",tagName:"br",properties:{},children:[]};return n.patch(e,t),[n.applyData(e,t),{type:"text",value:`
`}]}function yo(n,e){const t=e.value?e.value+`
`:"",r={},i=e.lang?e.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let l={type:"element",tagName:"code",properties:r,children:[{type:"text",value:t}]};return e.meta&&(l.data={meta:e.meta}),n.patch(e,l),l=n.applyData(e,l),l={type:"element",tagName:"pre",properties:{},children:[l]},n.patch(e,l),l}function xo(n,e){const t={type:"element",tagName:"del",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function ko(n,e){const t={type:"element",tagName:"em",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function bo(n,e){const t=typeof n.options.clobberPrefix=="string"?n.options.clobberPrefix:"user-content-",r=String(e.identifier).toUpperCase(),i=zn(r.toLowerCase()),l=n.footnoteOrder.indexOf(r);let o,a=n.footnoteCounts.get(r);a===void 0?(a=0,n.footnoteOrder.push(r),o=n.footnoteOrder.length):o=l+1,a+=1,n.footnoteCounts.set(r,a);const c={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+i,id:t+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};n.patch(e,c);const u={type:"element",tagName:"sup",properties:{},children:[c]};return n.patch(e,u),n.applyData(e,u)}function wo(n,e){const t={type:"element",tagName:"h"+e.depth,properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function So(n,e){if(n.options.allowDangerousHtml){const t={type:"raw",value:e.value};return n.patch(e,t),n.applyData(e,t)}}function Zt(n,e){const t=e.referenceType;let r="]";if(t==="collapsed"?r+="[]":t==="full"&&(r+="["+(e.label||e.identifier)+"]"),e.type==="imageReference")return[{type:"text",value:"!["+e.alt+r}];const i=n.all(e),l=i[0];l&&l.type==="text"?l.value="["+l.value:i.unshift({type:"text",value:"["});const o=i[i.length-1];return o&&o.type==="text"?o.value+=r:i.push({type:"text",value:r}),i}function Io(n,e){const t=String(e.identifier).toUpperCase(),r=n.definitionById.get(t);if(!r)return Zt(n,e);const i={src:zn(r.url||""),alt:e.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const l={type:"element",tagName:"img",properties:i,children:[]};return n.patch(e,l),n.applyData(e,l)}function Co(n,e){const t={src:zn(e.url)};e.alt!==null&&e.alt!==void 0&&(t.alt=e.alt),e.title!==null&&e.title!==void 0&&(t.title=e.title);const r={type:"element",tagName:"img",properties:t,children:[]};return n.patch(e,r),n.applyData(e,r)}function Eo(n,e){const t={type:"text",value:e.value.replace(/\r?\n|\r/g," ")};n.patch(e,t);const r={type:"element",tagName:"code",properties:{},children:[t]};return n.patch(e,r),n.applyData(e,r)}function vo(n,e){const t=String(e.identifier).toUpperCase(),r=n.definitionById.get(t);if(!r)return Zt(n,e);const i={href:zn(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const l={type:"element",tagName:"a",properties:i,children:n.all(e)};return n.patch(e,l),n.applyData(e,l)}function Ao(n,e){const t={href:zn(e.url)};e.title!==null&&e.title!==void 0&&(t.title=e.title);const r={type:"element",tagName:"a",properties:t,children:n.all(e)};return n.patch(e,r),n.applyData(e,r)}function Po(n,e,t){const r=n.all(e),i=t?To(t):nr(e),l={},o=[];if(typeof e.checked=="boolean"){const s=r[0];let f;s&&s.type==="element"&&s.tagName==="p"?f=s:(f={type:"element",tagName:"p",properties:{},children:[]},r.unshift(f)),f.children.length>0&&f.children.unshift({type:"text",value:" "}),f.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:e.checked,disabled:!0},children:[]}),l.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const s=r[a];(i||a!==0||s.type!=="element"||s.tagName!=="p")&&o.push({type:"text",value:`
`}),s.type==="element"&&s.tagName==="p"&&!i?o.push(...s.children):o.push(s)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&o.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:l,children:o};return n.patch(e,u),n.applyData(e,u)}function To(n){let e=!1;if(n.type==="list"){e=n.spread||!1;const t=n.children;let r=-1;for(;!e&&++r<t.length;)e=nr(t[r])}return e}function nr(n){const e=n.spread;return e??n.children.length>1}function zo(n,e){const t={},r=n.all(e);let i=-1;for(typeof e.start=="number"&&e.start!==1&&(t.start=e.start);++i<r.length;){const o=r[i];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const l={type:"element",tagName:e.ordered?"ol":"ul",properties:t,children:n.wrap(r,!0)};return n.patch(e,l),n.applyData(e,l)}function Lo(n,e){const t={type:"element",tagName:"p",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function No(n,e){const t={type:"root",children:n.wrap(n.all(e))};return n.patch(e,t),n.applyData(e,t)}function Ro(n,e){const t={type:"element",tagName:"strong",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function Do(n,e){const t=n.all(e),r=t.shift(),i=[];if(r){const o={type:"element",tagName:"thead",properties:{},children:n.wrap([r],!0)};n.patch(e.children[0],o),i.push(o)}if(t.length>0){const o={type:"element",tagName:"tbody",properties:{},children:n.wrap(t,!0)},a=Ee(e.children[1]),c=Dt(e.children[e.children.length-1]);a&&c&&(o.position={start:a,end:c}),i.push(o)}const l={type:"element",tagName:"table",properties:{},children:n.wrap(i,!0)};return n.patch(e,l),n.applyData(e,l)}function Oo(n,e,t){const r=t?t.children:void 0,l=(r?r.indexOf(e):1)===0?"th":"td",o=t&&t.type==="table"?t.align:void 0,a=o?o.length:e.children.length;let c=-1;const u=[];for(;++c<a;){const f=e.children[c],d={},p=o?o[c]:void 0;p&&(d.align=p);let w={type:"element",tagName:l,properties:d,children:[]};f&&(w.children=n.all(f),n.patch(f,w),w=n.applyData(f,w)),u.push(w)}const s={type:"element",tagName:"tr",properties:{},children:n.wrap(u,!0)};return n.patch(e,s),n.applyData(e,s)}function _o(n,e){const t={type:"element",tagName:"td",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}const ct=9,pt=32;function Fo(n){const e=String(n),t=/\r?\n|\r/g;let r=t.exec(e),i=0;const l=[];for(;r;)l.push(ft(e.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=t.exec(e);return l.push(ft(e.slice(i),i>0,!1)),l.join("")}function ft(n,e,t){let r=0,i=n.length;if(e){let l=n.codePointAt(r);for(;l===ct||l===pt;)r++,l=n.codePointAt(r)}if(t){let l=n.codePointAt(i-1);for(;l===ct||l===pt;)i--,l=n.codePointAt(i-1)}return i>r?n.slice(r,i):""}function Mo(n,e){const t={type:"text",value:Fo(String(e.value))};return n.patch(e,t),n.applyData(e,t)}function Bo(n,e){const t={type:"element",tagName:"hr",properties:{},children:[]};return n.patch(e,t),n.applyData(e,t)}const Uo={blockquote:mo,break:go,code:yo,delete:xo,emphasis:ko,footnoteReference:bo,heading:wo,html:So,imageReference:Io,image:Co,inlineCode:Eo,linkReference:vo,link:Ao,listItem:Po,list:zo,paragraph:Lo,root:No,strong:Ro,table:Do,tableCell:_o,tableRow:Oo,text:Mo,thematicBreak:Bo,toml:Xn,yaml:Xn,definition:Xn,footnoteDefinition:Xn};function Xn(){}const er=-1,Kn=0,Un=1,Qn=2,Ne=3,Re=4,De=5,Oe=6,tr=7,rr=8,ht=typeof self=="object"?self:globalThis,jo=(n,e)=>{const t=(i,l)=>(n.set(l,i),i),r=i=>{if(n.has(i))return n.get(i);const[l,o]=e[i];switch(l){case Kn:case er:return t(o,i);case Un:{const a=t([],i);for(const c of o)a.push(r(c));return a}case Qn:{const a=t({},i);for(const[c,u]of o)a[r(c)]=r(u);return a}case Ne:return t(new Date(o),i);case Re:{const{source:a,flags:c}=o;return t(new RegExp(a,c),i)}case De:{const a=t(new Map,i);for(const[c,u]of o)a.set(r(c),r(u));return a}case Oe:{const a=t(new Set,i);for(const c of o)a.add(r(c));return a}case tr:{const{name:a,message:c}=o;return t(new ht[a](c),i)}case rr:return t(BigInt(o),i);case"BigInt":return t(Object(BigInt(o)),i);case"ArrayBuffer":return t(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:a}=new Uint8Array(o);return t(new DataView(a),o)}}return t(new ht[l](o),i)};return r},mt=n=>jo(new Map,n)(0),vn="",{toString:Ho}={},{keys:Vo}=Object,Fn=n=>{const e=typeof n;if(e!=="object"||!n)return[Kn,e];const t=Ho.call(n).slice(8,-1);switch(t){case"Array":return[Un,vn];case"Object":return[Qn,vn];case"Date":return[Ne,vn];case"RegExp":return[Re,vn];case"Map":return[De,vn];case"Set":return[Oe,vn];case"DataView":return[Un,t]}return t.includes("Array")?[Un,t]:t.includes("Error")?[tr,t]:[Qn,t]},$n=([n,e])=>n===Kn&&(e==="function"||e==="symbol"),qo=(n,e,t,r)=>{const i=(o,a)=>{const c=r.push(o)-1;return t.set(a,c),c},l=o=>{if(t.has(o))return t.get(o);let[a,c]=Fn(o);switch(a){case Kn:{let s=o;switch(c){case"bigint":a=rr,s=o.toString();break;case"function":case"symbol":if(n)throw new TypeError("unable to serialize "+c);s=null;break;case"undefined":return i([er],o)}return i([a,s],o)}case Un:{if(c){let d=o;return c==="DataView"?d=new Uint8Array(o.buffer):c==="ArrayBuffer"&&(d=new Uint8Array(o)),i([c,[...d]],o)}const s=[],f=i([a,s],o);for(const d of o)s.push(l(d));return f}case Qn:{if(c)switch(c){case"BigInt":return i([c,o.toString()],o);case"Boolean":case"Number":case"String":return i([c,o.valueOf()],o)}if(e&&"toJSON"in o)return l(o.toJSON());const s=[],f=i([a,s],o);for(const d of Vo(o))(n||!$n(Fn(o[d])))&&s.push([l(d),l(o[d])]);return f}case Ne:return i([a,o.toISOString()],o);case Re:{const{source:s,flags:f}=o;return i([a,{source:s,flags:f}],o)}case De:{const s=[],f=i([a,s],o);for(const[d,p]of o)(n||!($n(Fn(d))||$n(Fn(p))))&&s.push([l(d),l(p)]);return f}case Oe:{const s=[],f=i([a,s],o);for(const d of o)(n||!$n(Fn(d)))&&s.push(l(d));return f}}const{message:u}=o;return i([a,{name:c,message:u}],o)};return l},dt=(n,{json:e,lossy:t}={})=>{const r=[];return qo(!(e||t),!!e,new Map,r)(n),r},Gn=typeof structuredClone=="function"?(n,e)=>e&&("json"in e||"lossy"in e)?mt(dt(n,e)):structuredClone(n):(n,e)=>mt(dt(n,e));function Xo(n,e){const t=[{type:"text",value:"↩"}];return e>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(e)}]}),t}function $o(n,e){return"Back to reference "+(n+1)+(e>1?"-"+e:"")}function Wo(n){const e=typeof n.options.clobberPrefix=="string"?n.options.clobberPrefix:"user-content-",t=n.options.footnoteBackContent||Xo,r=n.options.footnoteBackLabel||$o,i=n.options.footnoteLabel||"Footnotes",l=n.options.footnoteLabelTagName||"h2",o=n.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let c=-1;for(;++c<n.footnoteOrder.length;){const u=n.footnoteById.get(n.footnoteOrder[c]);if(!u)continue;const s=n.all(u),f=String(u.identifier).toUpperCase(),d=zn(f.toLowerCase());let p=0;const w=[],I=n.footnoteCounts.get(f);for(;I!==void 0&&++p<=I;){w.length>0&&w.push({type:"text",value:" "});let z=typeof t=="string"?t:t(c,p);typeof z=="string"&&(z={type:"text",value:z}),w.push({type:"element",tagName:"a",properties:{href:"#"+e+"fnref-"+d+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,p),className:["data-footnote-backref"]},children:Array.isArray(z)?z:[z]})}const E=s[s.length-1];if(E&&E.type==="element"&&E.tagName==="p"){const z=E.children[E.children.length-1];z&&z.type==="text"?z.value+=" ":E.children.push({type:"text",value:" "}),E.children.push(...w)}else s.push(...w);const x={type:"element",tagName:"li",properties:{id:e+"fn-"+d},children:n.wrap(s,!0)};n.patch(u,x),a.push(x)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:l,properties:{...Gn(o),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:n.wrap(a,!0)},{type:"text",value:`
`}]}}const ir=(function(n){if(n==null)return Jo;if(typeof n=="function")return Zn(n);if(typeof n=="object")return Array.isArray(n)?Yo(n):Qo(n);if(typeof n=="string")return Go(n);throw new Error("Expected function, string, or object as test")});function Yo(n){const e=[];let t=-1;for(;++t<n.length;)e[t]=ir(n[t]);return Zn(r);function r(...i){let l=-1;for(;++l<e.length;)if(e[l].apply(this,i))return!0;return!1}}function Qo(n){const e=n;return Zn(t);function t(r){const i=r;let l;for(l in n)if(i[l]!==e[l])return!1;return!0}}function Go(n){return Zn(e);function e(t){return t&&t.type===n}}function Zn(n){return e;function e(t,r,i){return!!(Ko(t)&&n.call(this,t,typeof r=="number"?r:void 0,i||void 0))}}function Jo(){return!0}function Ko(n){return n!==null&&typeof n=="object"&&"type"in n}const lr=[],Zo=!0,gt=!1,na="skip";function ea(n,e,t,r){let i;typeof e=="function"&&typeof t!="function"?(r=t,t=e):i=e;const l=ir(i),o=r?-1:1;a(n,void 0,[])();function a(c,u,s){const f=c&&typeof c=="object"?c:{};if(typeof f.type=="string"){const p=typeof f.tagName=="string"?f.tagName:typeof f.name=="string"?f.name:void 0;Object.defineProperty(d,"name",{value:"node ("+(c.type+(p?"<"+p+">":""))+")"})}return d;function d(){let p=lr,w,I,E;if((!e||l(c,u,s[s.length-1]||void 0))&&(p=ta(t(c,s)),p[0]===gt))return p;if("children"in c&&c.children){const x=c;if(x.children&&p[0]!==na)for(I=(r?x.children.length:-1)+o,E=s.concat(x);I>-1&&I<x.children.length;){const z=x.children[I];if(w=a(z,I,E)(),w[0]===gt)return w;I=typeof w[1]=="number"?w[1]:I+o}}return p}}}function ta(n){return Array.isArray(n)?n:typeof n=="number"?[Zo,n]:n==null?lr:[n]}function or(n,e,t,r){let i,l,o;typeof e=="function"&&typeof t!="function"?(l=void 0,o=e,i=t):(l=e,o=t,i=r),ea(n,l,a,i);function a(c,u){const s=u[u.length-1],f=s?s.children.indexOf(c):void 0;return o(c,f,s)}}const be={}.hasOwnProperty,ra={};function ia(n,e){const t=e||ra,r=new Map,i=new Map,l=new Map,o={...Uo,...t.handlers},a={all:u,applyData:oa,definitionById:r,footnoteById:i,footnoteCounts:l,footnoteOrder:[],handlers:o,one:c,options:t,patch:la,wrap:ua};return or(n,function(s){if(s.type==="definition"||s.type==="footnoteDefinition"){const f=s.type==="definition"?r:i,d=String(s.identifier).toUpperCase();f.has(d)||f.set(d,s)}}),a;function c(s,f){const d=s.type,p=a.handlers[d];if(be.call(a.handlers,d)&&p)return p(a,s,f);if(a.options.passThrough&&a.options.passThrough.includes(d)){if("children"in s){const{children:I,...E}=s,x=Gn(E);return x.children=a.all(s),x}return Gn(s)}return(a.options.unknownHandler||aa)(a,s,f)}function u(s){const f=[];if("children"in s){const d=s.children;let p=-1;for(;++p<d.length;){const w=a.one(d[p],s);if(w){if(p&&d[p-1].type==="break"&&(!Array.isArray(w)&&w.type==="text"&&(w.value=yt(w.value)),!Array.isArray(w)&&w.type==="element")){const I=w.children[0];I&&I.type==="text"&&(I.value=yt(I.value))}Array.isArray(w)?f.push(...w):f.push(w)}}}return f}}function la(n,e){n.position&&(e.position=jr(n))}function oa(n,e){let t=e;if(n&&n.data){const r=n.data.hName,i=n.data.hChildren,l=n.data.hProperties;if(typeof r=="string")if(t.type==="element")t.tagName=r;else{const o="children"in t?t.children:[t];t={type:"element",tagName:r,properties:{},children:o}}t.type==="element"&&l&&Object.assign(t.properties,Gn(l)),"children"in t&&t.children&&i!==null&&i!==void 0&&(t.children=i)}return t}function aa(n,e){const t=e.data||{},r="value"in e&&!(be.call(t,"hProperties")||be.call(t,"hChildren"))?{type:"text",value:e.value}:{type:"element",tagName:"div",properties:{},children:n.all(e)};return n.patch(e,r),n.applyData(e,r)}function ua(n,e){const t=[];let r=-1;for(e&&t.push({type:"text",value:`
`});++r<n.length;)r&&t.push({type:"text",value:`
`}),t.push(n[r]);return e&&n.length>0&&t.push({type:"text",value:`
`}),t}function yt(n){let e=0,t=n.charCodeAt(e);for(;t===9||t===32;)e++,t=n.charCodeAt(e);return n.slice(e)}function xt(n,e){const t=ia(n,e),r=t.one(n,void 0),i=Wo(t),l=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&l.children.push({type:"text",value:`
`},i),l}function sa(n,e){return n&&"run"in n?async function(t,r){const i=xt(t,{file:r,...e});await n.run(i,r)}:function(t,r){return xt(t,{file:r,...n||e})}}function kt(n){if(n)throw n}var le,bt;function ca(){if(bt)return le;bt=1;var n=Object.prototype.hasOwnProperty,e=Object.prototype.toString,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,i=function(u){return typeof Array.isArray=="function"?Array.isArray(u):e.call(u)==="[object Array]"},l=function(u){if(!u||e.call(u)!=="[object Object]")return!1;var s=n.call(u,"constructor"),f=u.constructor&&u.constructor.prototype&&n.call(u.constructor.prototype,"isPrototypeOf");if(u.constructor&&!s&&!f)return!1;var d;for(d in u);return typeof d>"u"||n.call(u,d)},o=function(u,s){t&&s.name==="__proto__"?t(u,s.name,{enumerable:!0,configurable:!0,value:s.newValue,writable:!0}):u[s.name]=s.newValue},a=function(u,s){if(s==="__proto__")if(n.call(u,s)){if(r)return r(u,s).value}else return;return u[s]};return le=function c(){var u,s,f,d,p,w,I=arguments[0],E=1,x=arguments.length,z=!1;for(typeof I=="boolean"&&(z=I,I=arguments[1]||{},E=2),(I==null||typeof I!="object"&&typeof I!="function")&&(I={});E<x;++E)if(u=arguments[E],u!=null)for(s in u)f=a(I,s),d=a(u,s),I!==d&&(z&&d&&(l(d)||(p=i(d)))?(p?(p=!1,w=f&&i(f)?f:[]):w=f&&l(f)?f:{},o(I,{name:s,newValue:c(z,w,d)})):typeof d<"u"&&o(I,{name:s,newValue:d}));return I},le}var pa=ca();const oe=vt(pa);function we(n){if(typeof n!="object"||n===null)return!1;const e=Object.getPrototypeOf(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)}function fa(){const n=[],e={run:t,use:r};return e;function t(...i){let l=-1;const o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);a(null,...i);function a(c,...u){const s=n[++l];let f=-1;if(c){o(c);return}for(;++f<i.length;)(u[f]===null||u[f]===void 0)&&(u[f]=i[f]);i=u,s?ha(s,a)(...u):o(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return n.push(i),e}}function ha(n,e){let t;return r;function r(...o){const a=n.length>o.length;let c;a&&o.push(i);try{c=n.apply(this,o)}catch(u){const s=u;if(a&&t)throw s;return i(s)}a||(c&&c.then&&typeof c.then=="function"?c.then(l,i):c instanceof Error?i(c):l(c))}function i(o,...a){t||(t=!0,e(o,...a))}function l(o){i(null,o)}}const sn={basename:ma,dirname:da,extname:ga,join:ya,sep:"/"};function ma(n,e){if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');Vn(n);let t=0,r=-1,i=n.length,l;if(e===void 0||e.length===0||e.length>n.length){for(;i--;)if(n.codePointAt(i)===47){if(l){t=i+1;break}}else r<0&&(l=!0,r=i+1);return r<0?"":n.slice(t,r)}if(e===n)return"";let o=-1,a=e.length-1;for(;i--;)if(n.codePointAt(i)===47){if(l){t=i+1;break}}else o<0&&(l=!0,o=i+1),a>-1&&(n.codePointAt(i)===e.codePointAt(a--)?a<0&&(r=i):(a=-1,r=o));return t===r?r=o:r<0&&(r=n.length),n.slice(t,r)}function da(n){if(Vn(n),n.length===0)return".";let e=-1,t=n.length,r;for(;--t;)if(n.codePointAt(t)===47){if(r){e=t;break}}else r||(r=!0);return e<0?n.codePointAt(0)===47?"/":".":e===1&&n.codePointAt(0)===47?"//":n.slice(0,e)}function ga(n){Vn(n);let e=n.length,t=-1,r=0,i=-1,l=0,o;for(;e--;){const a=n.codePointAt(e);if(a===47){if(o){r=e+1;break}continue}t<0&&(o=!0,t=e+1),a===46?i<0?i=e:l!==1&&(l=1):i>-1&&(l=-1)}return i<0||t<0||l===0||l===1&&i===t-1&&i===r+1?"":n.slice(i,t)}function ya(...n){let e=-1,t;for(;++e<n.length;)Vn(n[e]),n[e]&&(t=t===void 0?n[e]:t+"/"+n[e]);return t===void 0?".":xa(t)}function xa(n){Vn(n);const e=n.codePointAt(0)===47;let t=ka(n,!e);return t.length===0&&!e&&(t="."),t.length>0&&n.codePointAt(n.length-1)===47&&(t+="/"),e?"/"+t:t}function ka(n,e){let t="",r=0,i=-1,l=0,o=-1,a,c;for(;++o<=n.length;){if(o<n.length)a=n.codePointAt(o);else{if(a===47)break;a=47}if(a===47){if(!(i===o-1||l===1))if(i!==o-1&&l===2){if(t.length<2||r!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(c=t.lastIndexOf("/"),c!==t.length-1){c<0?(t="",r=0):(t=t.slice(0,c),r=t.length-1-t.lastIndexOf("/")),i=o,l=0;continue}}else if(t.length>0){t="",r=0,i=o,l=0;continue}}e&&(t=t.length>0?t+"/..":"..",r=2)}else t.length>0?t+="/"+n.slice(i+1,o):t=n.slice(i+1,o),r=o-i-1;i=o,l=0}else a===46&&l>-1?l++:l=-1}return t}function Vn(n){if(typeof n!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}const ba={cwd:wa};function wa(){return"/"}function Se(n){return!!(n!==null&&typeof n=="object"&&"href"in n&&n.href&&"protocol"in n&&n.protocol&&n.auth===void 0)}function Sa(n){if(typeof n=="string")n=new URL(n);else if(!Se(n)){const e=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+n+"`");throw e.code="ERR_INVALID_ARG_TYPE",e}if(n.protocol!=="file:"){const e=new TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e}return Ia(n)}function Ia(n){if(n.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const e=n.pathname;let t=-1;for(;++t<e.length;)if(e.codePointAt(t)===37&&e.codePointAt(t+1)===50){const r=e.codePointAt(t+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(e)}const ae=["history","path","basename","stem","extname","dirname"];class ar{constructor(e){let t;e?Se(e)?t={path:e}:typeof e=="string"||Ca(e)?t={value:e}:t=e:t={},this.cwd="cwd"in t?"":ba.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<ae.length;){const l=ae[r];l in t&&t[l]!==void 0&&t[l]!==null&&(this[l]=l==="history"?[...t[l]]:t[l])}let i;for(i in t)ae.includes(i)||(this[i]=t[i])}get basename(){return typeof this.path=="string"?sn.basename(this.path):void 0}set basename(e){se(e,"basename"),ue(e,"basename"),this.path=sn.join(this.dirname||"",e)}get dirname(){return typeof this.path=="string"?sn.dirname(this.path):void 0}set dirname(e){wt(this.basename,"dirname"),this.path=sn.join(e||"",this.basename)}get extname(){return typeof this.path=="string"?sn.extname(this.path):void 0}set extname(e){if(ue(e,"extname"),wt(this.dirname,"extname"),e){if(e.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(e.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=sn.join(this.dirname,this.stem+(e||""))}get path(){return this.history[this.history.length-1]}set path(e){Se(e)&&(e=Sa(e)),se(e,"path"),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path=="string"?sn.basename(this.path,this.extname):void 0}set stem(e){se(e,"stem"),ue(e,"stem"),this.path=sn.join(this.dirname||"",e+(this.extname||""))}fail(e,t,r){const i=this.message(e,t,r);throw i.fatal=!0,i}info(e,t,r){const i=this.message(e,t,r);return i.fatal=void 0,i}message(e,t,r){const i=new Q(e,t,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(e){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(e||void 0).decode(this.value)}}function ue(n,e){if(n&&n.includes(sn.sep))throw new Error("`"+e+"` cannot be a path: did not expect `"+sn.sep+"`")}function se(n,e){if(!n)throw new Error("`"+e+"` cannot be empty")}function wt(n,e){if(!n)throw new Error("Setting `"+e+"` requires `path` to be set too")}function Ca(n){return!!(n&&typeof n=="object"&&"byteLength"in n&&"byteOffset"in n)}const Ea=(function(n){const r=this.constructor.prototype,i=r[n],l=function(){return i.apply(l,arguments)};return Object.setPrototypeOf(l,r),l}),va={}.hasOwnProperty;class _e extends Ea{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=fa()}copy(){const e=new _e;let t=-1;for(;++t<this.attachers.length;){const r=this.attachers[t];e.use(...r)}return e.data(oe(!0,{},this.namespace)),e}data(e,t){return typeof e=="string"?arguments.length===2?(fe("data",this.frozen),this.namespace[e]=t,this):va.call(this.namespace,e)&&this.namespace[e]||void 0:e?(fe("data",this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;const e=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=t.call(e,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(e){this.freeze();const t=Wn(e),r=this.parser||this.Parser;return ce("parse",r),r(String(t),t)}process(e,t){const r=this;return this.freeze(),ce("process",this.parser||this.Parser),pe("process",this.compiler||this.Compiler),t?i(void 0,t):new Promise(i);function i(l,o){const a=Wn(e),c=r.parse(a);r.run(c,a,function(s,f,d){if(s||!f||!d)return u(s);const p=f,w=r.stringify(p,d);Ta(w)?d.value=w:d.result=w,u(s,d)});function u(s,f){s||!f?o(s):l?l(f):t(void 0,f)}}}processSync(e){let t=!1,r;return this.freeze(),ce("processSync",this.parser||this.Parser),pe("processSync",this.compiler||this.Compiler),this.process(e,i),It("processSync","process",t),r;function i(l,o){t=!0,kt(l),r=o}}run(e,t,r){St(e),this.freeze();const i=this.transformers;return!r&&typeof t=="function"&&(r=t,t=void 0),r?l(void 0,r):new Promise(l);function l(o,a){const c=Wn(t);i.run(e,c,u);function u(s,f,d){const p=f||e;s?a(s):o?o(p):r(void 0,p,d)}}}runSync(e,t){let r=!1,i;return this.run(e,t,l),It("runSync","run",r),i;function l(o,a){kt(o),i=a,r=!0}}stringify(e,t){this.freeze();const r=Wn(t),i=this.compiler||this.Compiler;return pe("stringify",i),St(e),i(e,r)}use(e,...t){const r=this.attachers,i=this.namespace;if(fe("use",this.frozen),e!=null)if(typeof e=="function")c(e,t);else if(typeof e=="object")Array.isArray(e)?a(e):o(e);else throw new TypeError("Expected usable value, not `"+e+"`");return this;function l(u){if(typeof u=="function")c(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[s,...f]=u;c(s,f)}else o(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function o(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(u.plugins),u.settings&&(i.settings=oe(!0,i.settings,u.settings))}function a(u){let s=-1;if(u!=null)if(Array.isArray(u))for(;++s<u.length;){const f=u[s];l(f)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function c(u,s){let f=-1,d=-1;for(;++f<r.length;)if(r[f][0]===u){d=f;break}if(d===-1)r.push([u,...s]);else if(s.length>0){let[p,...w]=s;const I=r[d][1];we(I)&&we(p)&&(p=oe(!0,I,p)),r[d]=[u,p,...w]}}}}const Aa=new _e().freeze();function ce(n,e){if(typeof e!="function")throw new TypeError("Cannot `"+n+"` without `parser`")}function pe(n,e){if(typeof e!="function")throw new TypeError("Cannot `"+n+"` without `compiler`")}function fe(n,e){if(e)throw new Error("Cannot call `"+n+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function St(n){if(!we(n)||typeof n.type!="string")throw new TypeError("Expected node, got `"+n+"`")}function It(n,e,t){if(!t)throw new Error("`"+n+"` finished async. Use `"+e+"` instead")}function Wn(n){return Pa(n)?n:new ar(n)}function Pa(n){return!!(n&&typeof n=="object"&&"message"in n&&"messages"in n)}function Ta(n){return typeof n=="string"||za(n)}function za(n){return!!(n&&typeof n=="object"&&"byteLength"in n&&"byteOffset"in n)}const La="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Ct=[],Et={allowDangerousHtml:!0},Na=/^(https?|ircs?|mailto|xmpp)$/i,Ra=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Da(n){const e=Oa(n),t=_a(n);return Fa(e.runSync(e.parse(t),t),n)}function Oa(n){const e=n.rehypePlugins||Ct,t=n.remarkPlugins||Ct,r=n.remarkRehypeOptions?{...n.remarkRehypeOptions,...Et}:Et;return Aa().use(ho).use(t).use(sa,r).use(e)}function _a(n){const e=n.children||"",t=new ar;return typeof e=="string"&&(t.value=e),t}function Fa(n,e){const t=e.allowedElements,r=e.allowElement,i=e.components,l=e.disallowedElements,o=e.skipHtml,a=e.unwrapDisallowed,c=e.urlTransform||Ma;for(const s of Ra)Object.hasOwn(e,s.from)&&(""+s.from+(s.to?"use `"+s.to+"` instead":"remove it")+La+s.id,void 0);return or(n,u),$r(n,{Fragment:G.Fragment,components:i,ignoreInvalidStyle:!0,jsx:G.jsx,jsxs:G.jsxs,passKeys:!0,passNode:!0});function u(s,f,d){if(s.type==="raw"&&d&&typeof f=="number")return o?d.children.splice(f,1):d.children[f]={type:"text",value:s.value},f;if(s.type==="element"){let p;for(p in te)if(Object.hasOwn(te,p)&&Object.hasOwn(s.properties,p)){const w=s.properties[p],I=te[p];(I===null||I.includes(s.tagName))&&(s.properties[p]=c(String(w||""),p,s))}}if(s.type==="element"){let p=t?!t.includes(s.tagName):l?l.includes(s.tagName):!1;if(!p&&r&&typeof f=="number"&&(p=!r(s,f,d)),p&&d&&typeof f=="number")return a&&s.children?d.children.splice(f,1,...s.children):d.children.splice(f,1),f}}}function Ma(n){const e=n.indexOf(":"),t=n.indexOf("?"),r=n.indexOf("#"),i=n.indexOf("/");return e===-1||i!==-1&&e>i||t!==-1&&e>t||r!==-1&&e>r||Na.test(n.slice(0,e))?n:""}const Ba=`## v0.46.2 (2026-09-27)

### 🚀 서비스 개선 및 최적화
* **앱 로딩 및 성능 향상**: 릴리즈 노트 및 개발용 모달 창을 분리하여 앱의 첫 로딩 속도와 전반적인 성능을 최적화했습니다.

### 🔒 보안 및 사용자 보호 강화
* **개인 초댓코드 보안 강화**: 초댓코드 관련 보안 구조를 개편하여 회원 전용 정보 보호를 한층 강화했습니다.
* **데이터 및 게시글 작성 권한 강화**: 서비스 내 레코드 및 게시글 작성 시 그룹/크루 멤버십 확인 절차를 강화하여 무단 작성을 방지했습니다.
* **AI 분석 기능 사용 권한 및 쿼터 제한**: 사용자의 앙상블/개별 AI 분석 요청 시 로그인 인증 및 계정별 사용량 제한(Quota)을 적용해 서비스 안정성과 보안을 높였습니다.
* **데이터베이스 보안 정책 강화**: 전반적인 사용자 데이터 액세스 정책(RLS) 및 읽기 권한을 점검하여 비인가 접근으로부터 사용자 데이터를 안전하게 보호하도록 개선했습니다.

## v0.46.1 (2026-09-07)

### 🚀 개선 및 버그 수정

* **AI 운동 데이터 측정 정확도 향상**
  * 트레드밀 운동 시 AI가 페이스나 거리를 크게 잘못 인식하는 경우, 자동으로 실제 계산된 페이스 값으로 보정되어 기록이 올바르게 저장되도록 개선했습니다.

### ⚡ 성능 최적화

* **장부 및 랭킹 화면 로딩 속도 개선**
  * 랭킹과 장부 데이터를 조회할 때 필요한 정보만 효율적으로 불러오도록 처리하여 화면 로딩 속도를 향상했습니다.

## v0.46.0 (2026-09-06)

### ✨ 새로운 기능

* **벌금 알림 이력 조회**
  * 멤버가 자신이 받은 벌금/회비 관련 리마인더 내역을 직접 확인할 수 있는 기능이 추가되었습니다.
* **스쿼드 게시글 삭제**
  * 스쿼드 게시판에 올린 게시글을 자유롭게 삭제할 수 있습니다.
* **인증 직후 AI 사진 재분석**
  * 러닝 인증 사진을 제출한 직후, 즉시 AI 재분석을 실행할 수 있습니다.

---

### 🎨 서비스 및 UI/UX 개선

* **AI 재분석 동선 최적화**
  * 대시보드에 위치해 있던 AI 재분석 기능이 **기록 화면**으로 이동했습니다. 이제 기록 상세 페이지에서 인증 사진 분석을 더 쉽고 직관적으로 진행할 수 있습니다.

## v0.45.1 (2026-09-06)

### 🏃‍♂️ 카카오 러닝 공유 문구 개선
- 카카오톡으로 러닝 기록 공유 시 **러닝 거리가 포함**되도록 수정되어, 기록을 더 직관적으로 전달할 수 있습니다.

### 📊 대시보드 및 벌금 관리 개선
- **대시보드 거리 표시 소수점 정밀도 향상**: 대시보드의 러닝 거리가 **소수점 둘째 자리까지 정확하게 표시**됩니다.
- **크루 종료일 이후 벌금 누적 방지**: 크루 활동 기간이 종료된 이후에는 벌금이 추가로 부과되지 않도록 정산 로직이 개선되었습니다.
- **벌금 장부 데이터 안정성 강화**: 벌금 조회 실패 시 화면 오류가 발생하지 않도록 안정성을 높였습니다.

### 🤖 AI 분석 및 기타 안정성 강화
- 이미지 분석 및 AI 자동 분석 시스템의 모델 연결을 최신화하고 안정성을 개선하였습니다.
- 크루 생성자 정보 및 데이터 보안 정책을 강화하였습니다.

## v0.45.0 (2026-09-03)

### 🚀 기능 개선 및 UX 향상

* **AI 분석 실패 안내 및 사용성 개선 (달림 기록 화면)**
  * AI 분석 작업이 실패했을 때 보다 직관적이고 친절한 안내 메시지 및 화면(UX)을 제공하여, 문제 상황을 쉽게 이해하고 대처할 수 있도록 개선했습니다.

* **AI 생성 릴리즈 노트 품질 향상**

## v0.44.6 (2026-09-03)

### 🐛 버그 수정 및 개선 사항

* **모바일 카카오톡 모임 초청 기능 개선**
  * 모바일 환경에서 카카오톡으로 모임을 초청할 때 모임 아이콘 파일이 함께 공유되던 현상을 수정하였습니다. 이제 초청 메시지가 한결 깔끔하고 전달력 있게 전송됩니다.

## v0.44.5 (2026-09-02)

## 러닝 인증 사진 업로드 안정성 개선

- **갤러리 사진 인증 첫 시도 실패 문제 수정**: 안드로이드 기기(특히 구글 포토 등 클라우드 백업 연동 환경)에서 갤러리로 사진을 선택해 러닝 인증을 시도할 때, 앱 실행 후 첫 시도에서만 "사진 업로드 실패" 또는 "이미지를 불러올 수 없습니다" 오류가 뜨고 재시도하면 성공하던 문제를 해결했습니다. 이제 선택한 사진을 처음 한 번만 안전하게 불러온 뒤 그대로 사용해, 첫 시도부터 안정적으로 인증됩니다.
- **사진 압축 실패 시 원본이 그대로 업로드되는 문제 방지**: 사진 압축 과정에 문제가 생겼을 때 용량이 크거나 손상된 원본 사진이 조용히 업로드되어 실패로 이어지던 상황을 막고, 문제 발생 시 명확하게 오류를 알리도록 개선했습니다.

## v0.44.4 (2026-09-02)

### 개선 사항

- **러닝 인증 사진 업로드 안정성 강화**: 네트워크가 불안정한 환경에서 사진 업로드가 실패할 경우, 원인을 더 정확하게 안내하고 재시도 로직을 개선하여 업로드 성공률을 높였습니다.
- **오늘 기록이 있을 때 배너 오표시 수정**: 이미 오늘의 러닝 기록을 인증했는데도 "계속 달리는 중" 배너가 남아있던 문제를 수정했습니다.
- **크루 그룹 화면 정리**: 팀 거리 라벨을 제거하여 화면을 더 깔끔하게 정리했습니다.

### 버그 수정

- **멤버 그룹 해제 불가 문제 해결**: 관리자가 멤버의 그룹 지정을 해제할 수 없어 그룹 설정 자체를 끌 수 없었던 문제를 수정했습니다. 이제 멤버 그룹을 자유롭게 해제/변경할 수 있습니다.

## v0.44.3 (2026-09-01)

## 러닝 인증 및 기록 정확도 개선

- **중복 인증 방지 강화**: 더블탭이나 여러 기기에서 거의 동시에 인증을 시도해도 같은 날 유효 기록이 두 번 집계되지 않도록 서버 단에서 한 번 더 검증하도록 개선했습니다. 동시에 제출된 인증은 자동으로 "추가 기록"으로 저장되어 주간 횟수에 중복 반영되지 않습니다.
- **AI 분석 실패 시 처리 개선**: AI 분석이 정상적으로 완료되지 않았을 때 빈 결과가 그대로 저장되던 문제를 수정하여, 인증 실패를 더 정확하게 감지하도록 했습니다.
- **자동 입력 후 수동 수정 시 페이스 재계산**: AI가 자동으로 채운 거리·시간을 사용자가 직접 수정했을 때, 이전 AI 분석값이 아닌 수정된 값 기준으로 페이스가 정확히 다시 계산되도록 수정했습니다.
- **활동 기간 외 사진 인증 방어 강화**: 카카오톡 파일명으로 활동 기간 외 사진임을 감지한 뒤에도, AI 분석 결과에 의해 해당 경고가 잘못 해제되어 인증이 통과되던 문제를 수정했습니다.
- **인증 기준 검증 누락 수정**: 러닝 시간이 비어있는 등 일부 케이스에서 크루의 최대 시간/페이스 기준 검증을 건너뛰던 문제를 수정하여, 기준 미달 기록이 유효 기록으로 잘못 인정되지 않도록 했습니다.

## 대시보드

- **기록 삭제 시 잘못된 기록이 표시되던 문제 수정**: 기록을 삭제한 뒤 화면에 반영되는 삭제 대상이 실제로 삭제한 기록과 다르게 표시되던 문제를 수정했습니다.

## 관리자 화면

- **멤버 삭제 실패 시 오류 안내 개선**: 멤버 삭제가 실제로는 실패했는데도 성공 메시지가 표시되던 문제를 수정하여, 실패 시 정확히 안내되도록 했습니다.

## v0.44.2 (2026-09-01)

## 이번 업데이트 내용

**벌금·랭킹 정확도 개선**
- 크루 보드의 전체 기간 벌금 랭킹 계산이 정확해지도록 수정했습니다.
- 벌금 금액을 수동으로 수정하면 랭킹에 즉시 반영되도록 개선했습니다.
- 벌금 단가를 변경해도 이전 주의 벌금에는 소급 적용되지 않도록 수정했습니다.

**크루 가입 보안 강화**
- 비공개 크루는 초대 코드가 있어야만 가입할 수 있도록 보완했습니다.
- 크루 가입 요청 승인 처리의 안정성과 보안을 강화했습니다.

**기타 개선**
- 벌금 영수증 표의 항목명을 "부과내역"으로 정리했습니다.

## v0.44.1 (2026-08-31)

## 개선사항

- **크루 벌금 계산 정확도 개선**: 크루에 가입하기 전 주(週)는 벌금 계산에서 제외되도록 수정했습니다. 이제 가입 이전 기간이 벌금 대상에 잘못 포함되는 문제가 해결됩니다.
- **벌금 독촉 메시지 문구 다듬음**: 독촉 메시지의 표현을 좀 더 자연스럽게 개선했습니다.

## v0.44.0 (2026-08-31)

## 새로운 소식 🎉

**신규 기능**
- **정산소 벌금 독촉하기**: 크루 방장/관리자가 미납 크루원에게 벌금·회비 납부를 독촉할 수 있어요. 마지막으로 독촉한 시간이 버튼에 함께 표시되고, 독촉 이력도 확인할 수 있어요.
- **정산 완료 후 감사 공유**: 정산을 마치면 고마운 마음을 담아 공유할 수 있는 감사 인사 카드가 추가됐어요.
- **주간 클리어 연속 기록 뱃지**: 프로필에서 몇 주 연속으로 미션을 클리어했는지 뱃지로 바로 확인할 수 있어요.
- **주간 포스터 문구 랜덤화**: 매주 생성되는 포스터의 헤드라인 문구와 배경 템플릿이 랜덤으로 바뀌어 더 다양한 느낌을 줍니다.

**개선 및 수정**
- 클리어한 주에도 페이스 페널티로 부과된 벌금이 벌금함 상세 화면에 정확히 표시되도록 수정했어요.
- 기록 화면(RecordPage)에서 발생하던 반복 렌더링 문제를 해결해 더 안정적으로 동작해요.

## v0.43.0 (2026-08-29)

## ✨ 새 기능

- **정산소에 기부금 장부 추가**: 크루원 여부와 무관하게 이벤트·외부 기부금 내역을 기록할 수 있는 탭이 정산소에 새로 생겼습니다. 모든 멤버는 누적 기부금 총액과 상세 내역(기부자/출처, 금액, 메모)을 확인할 수 있고, 관리자는 내역을 추가·삭제할 수 있습니다.

## 🛠 개선 및 수정

- **인스타 스토리 공유 이미지에 러닝 기록 상세 추가**: 주간 미션 완료 스토리 이미지 하단에 이번 주 달린 날짜·요일, 거리, 시간, 페이스를 한눈에 볼 수 있는 기록 리스트 카드가 추가되었습니다.
- **누적 벌금 순위의 동점 처리 개선**: 전체 기간 기준으로 벌금 총액을 정렬할 때, 금액이 같은 멤버들이 같은 순위로 표시되도록 수정했습니다.
- **랭킹 보드에서 유예 멤버 표시 명확화**: 벌금이 유예된 멤버는 랭킹 목록에서 흐리게 표시되고 상위 3위 강조에서도 제외되어, 유예 상태를 더 쉽게 구분할 수 있습니다.

## v0.42.0 (2026-08-28)

## ✨ 새로운 기능
- 주간 목표 달성 시 공유용 스토리 이미지가 완주 포스터 스타일로 새롭게 생성됩니다.

## 🛠 개선 사항
- 벌금과 회비 정산 화면이 하나로 통합되어 총액을 한눈에 확인할 수 있고, 중복 표시되던 UI가 정리되었습니다.
- 벌금 금액을 직접 수정할 수 있게 되었습니다.
- 카카오톡 공유 시 이미지가 미리 준비되기 전까지 공유 버튼이 비활성화되어, 불완전한 이미지가 공유되는 문제를 방지합니다.
- 모바일 크루 초대 이미지 공유 시 초대 링크가 함께 포함됩니다.

## 🐛 버그 수정
- 청구서(인보이스) 총액과 미납 목록에 회비가 누락되던 문제를 수정했습니다.
- 회비만 미납된 경우에도 미납 안내 배너가 정상적으로 표시되도록 수정했습니다.

## v0.41.0 (2026-08-28)

## RUNC 업데이트 소식

**주간 목표 달성 공유 기능이 더 풍성해졌어요! 🎉**

- 카카오톡으로 러닝 사진을 공유할 때, 주간 목표를 달성한 경우 **"미션 완료" 캡션이 사진에 함께 새겨집니다.**
- 사진 하단에 캡션 바가 추가되어, RUNC 아이콘과 함께 크루 정보·주간 진행 상황이 더 깔끔하게 표시됩니다.
- 캡션 내 텍스트 크기를 통일해 가독성을 개선했습니다.

앞으로도 나만의 러닝 기록을 더 멋지게 자랑해보세요!

## v0.40.0 (2026-08-28)

## 릴리즈 노트

### ✨ 새로운 기능
- 러닝 기록을 공유할 때 사진에 크루 이름과 주차 정보가 워터마크로 새겨져, 어떤 크루의 몇 주차 기록인지 한눈에 알아볼 수 있습니다.

### 🛠 개선 사항
- 모바일에서 크루 초대 및 주간 목표 공유 시, 기본 공유(Web Share) 방식이 우선 적용되어 더 매끄럽게 공유할 수 있습니다.
- 러닝 기록 공유 시 텍스트에 제목이 중복으로 표시되던 문제를 수정했습니다.

## v0.39.1 (2026-08-27)

## 개선 사항

- 📸 **사진 공유 기능 개선**: 러닝 인증 사진을 공유할 때 실제 인증샷이 아닌 다른 이미지가 공유되던 문제를 수정했습니다. 이제 모바일에서 공유하기를 누르면 정확한 러닝 사진이 전달됩니다.
- 📶 **업로드 안정성 강화**: 모바일에서 네트워크가 불안정하거나 순간적으로 끊기는 상황에서도 러닝 인증 사진 업로드가 더 안정적으로 완료되도록 개선했습니다.
- 👑 **크루 선택 화면 표시 개선**: 크루 선택 화면에서 각 크루의 방장 닉네임이 해당 크루 기준으로 정확하게 표시되도록 수정했습니다.

## v0.39.0 (2026-08-27)

## 업데이트 소식

### 새로운 기능
- **스쿼드 페이지 강화**: 주간 활동 현황, 멤버 명단, 게시글 고정 기능이 추가되고 화면이 더 넓게 확장되었습니다.
- **스쿼드 멤버 현황 구분**: 멤버 목록이 완료/미완료 그룹으로 나뉘어 한눈에 진행 상황을 파악할 수 있습니다.

### 개선 및 수정
- 크루 그룹 기능이 꺼져 있을 때 대시보드와 관리자 멤버 목록에 "자유모드"로 올바르게 표시됩니다.
- 스쿼드 게시글 작성자의 닉네임이 해당 크루 전용 닉네임으로 정확히 표시됩니다.
- 크루 검색 버튼에 스크린 리더용 이름을 추가해 접근성을 개선했습니다.
- 주간 목표(횟수·거리)를 달성했더라도 페이스 기준에 미달하면 패널티가 정상적으로 적용되도록 수정했습니다.
- 관리자 그룹 선택 시 비활성화된 그룹은 목록에서 제외되며, 더 이상 존재하지 않는 그룹 배지가 남아있던 문제를 해결했습니다.

## v0.38.0 (2026-08-27)

## ✨ 새로운 기능

- **정산 진입 경로 세분화**: 대시보드, 스쿼드, 프로필 등 각 화면에서 정산 화면으로 진입할 때 상황에 맞는 방식으로 연결되도록 개선했습니다.

## 🛠 개선 사항

- **대시보드 미납 안내 배너 강화**: 정산할 미납 금액이 있을 때만 배너가 표시되며, 놓치지 않도록 시각적으로 더 눈에 띄게 디자인을 개선했습니다.
- **크루 설정 정합성 개선**: 크루 설정값을 불러오는 로직을 일원화하여 화면마다 다르게 보이던 문제를 방지했습니다.
- **크루 삭제 안전장치 추가**: 크루 삭제 시 예기치 않은 데이터 손실을 막기 위한 보호 로직을 추가했습니다.
- **설정 변경 시점 명확화**: 크루 설정을 변경해도 이미 지난 기록에는 소급 적용되지 않도록 하여, 과거 기록이 의도치 않게 바뀌는 문제를 방지했습니다.

## v0.37.0 (2026-08-27)

### ✨ 새로운 기능

* **러닝 인증 · 주간 목표 공유 미리보기 추가**
  * 카카오톡으로 공유한 러닝 인증이나 주간 목표 달성 카드를 눌렀을 때, 로그인 여부와 상관없이 바로 확인할 수 있는 미리보기 화면이 추가되었습니다.
  * 미리보기 화면에서 바로 해당 크루에 참여할 수 있는 버튼도 함께 제공됩니다.

### 🐛 버그 수정

* **카카오톡 공유 오류 수정**
  * 카카오톡이 정상적으로 설치되어 있어도 "설치가 필요합니다" 안내가 잘못 표시되던 문제를 해결했습니다.
* **주간 기록 조회 실패 안내 추가**
  * 일시적인 오류로 이번 주 기록을 불러오지 못했을 때 "0km"로 잘못 표시되던 문제를 고치고, 오류 안내와 다시 시도 버튼을 추가했습니다.
* **멤버 목록 빈 화면 개선**
  * 크루에 멤버가 없을 때 빈 화면 대신 안내 문구가 표시됩니다.

### 🔒 보안 및 시스템 안정성

* **크루 관리자 권한 보안 취약점 조치**
  * 정상적인 초대 절차 없이 임의의 크루 관리자 권한을 얻을 수 있었던 취약점을 발견하여 즉시 조치했습니다.
* **오류 발생 시 영향 범위 최소화**
  * 일부 데이터 표시 오류가 앱 전체에 영향을 주지 않도록 안전장치를 추가했습니다.
* **벌금 계산 로직 검증 강화**
  * 벌금 및 주간 목표 달성 판정 로직의 정확성을 별도로 검증하여 신뢰도를 높였습니다.

## v0.36.0 (2026-08-26)

### ✨ 기능 개선 및 버그 수정

* **주간 통계 데이터 정확도 개선**
  * 기록을 삭제했을 때 주간 통계가 즉시 다시 계산되도록 수정하여, 항상 최신의 정확한 통계 정보를 확인하실 수 있습니다.
* **카카오톡 공유 기능 표준화**
  * 카카오톡 피드 공유 형식을 표준화하여 보다 깔끔하고 일관된 형태로 소식을 공유할 수 있도록 개선했습니다.

### 🔒 보안 및 시스템 안정성

* **데이터 및 파일 보안 강화**
  * 데이터베이스 및 저장소의 보안 접근 제어를 강화하여 사용자의 소중한 데이터와 파일을 더욱 안전하게 보호하도록 조치했습니다.

## v0.35.0 (2026-08-26)

### ✨ 새로운 기능

* **주간 목표 공유 포스터 배경 템플릿 추가**
  * 주간 목표를 공유할 때 내 취향에 맞는 다양한 포스터 배경 템플릿을 선택하고 꾸밀 수 있습니다.
  * 나만의 스타일로 완성된 목표 포스터를 만들어 친구나 팀원들에게 공유해 보세요!

## v0.34.0 (2026-08-26)

### ✨ 새로워진 점

- **주간 목표 달성 공유 화면 개선**
  - 주간 목표를 달성했을 때 공유되는 메시지가 한층 더 깔끔해졌습니다.
  - 복잡한 내용을 덜어내고, 축하 문구와 핵심 이미지를 중심으로 보기 쉽게 정돈되어 달성의 기쁨을 더 직관적으로 공유할 수 있습니다.

## v0.33.0 (2026-08-26)

### ✨ 신규 기능 및 개선 사항

- **주간 보드에서 오늘 러닝 확인**
  - 주간 보드 화면에서 오늘 달린 러닝 기록을 바로 확인할 수 있도록 개선되었습니다.
- **벌금/정산 장부 목록 개선**
  - 장부 내역을 더욱 한눈에 파악하기 쉽고 깔끔하게 정리하여 사용 편의성을 높였습니다.

---

### 🛠️ 버그 수정 및 안정성 향상

- **기록 일자 표시 오류 수정**
  - 접속 환경(타임존)에 따라 러닝 기록의 날짜가 다르게 표시되던 문제를 수정했습니다.
- **모바일 사진 업로드 안정성 강화**
  - 모바일 환경에서 러닝 인증 사진을 업로드할 때 발생하던 오류를 개선하여 더욱 안정적으로 업로드할 수 있습니다.
- **모바일 공유 기능 개선**
  - 모바일 기기에서 카카오톡 등 외부 앱으로 러닝 기록을 공유할 때 팝업 및 연동이 더 매끄럽게 동작하도록 개선했습니다.

## v0.32.0 (2026-08-25)

### 🚀 새로운 기능

- **대표 러닝 지정 기능 추가**
  - 하루에 여러 번 달렸을 때, 원하는 기록을 당일의 **대표 유효 러닝**으로 직접 선택하고 변경할 수 있습니다.
- **정산소 및 회비 관리 시스템 도입**
  - 크루 벌금 현황을 한눈에 보고 정산할 수 있는 **정산소(1~3단계 페널티 장부 및 크루 팟)**가 추가되었습니다.
  - **회비 장부** 탭이 신설되어 개인 영수증에서 벌금과 회비 내역을 함께 확인할 수 있습니다.
- **개별 러닝 기준 페이스 벌금 누적 산정**
  - 유효 러닝마다 개별 페이스를 평가하여 기준 미달 시 페널티 벌금이 정확하게 누적 계산되도록 개선되었습니다.

---

### 🎨 UI / UX 개선

- **직관적인 메뉴 명칭 변경 ('정산소')**
  - 기존 '스쿼드 벌금 장부', '벌금 팟' 등으로 나뉘어 있던 명칭을 **'정산소'**로 통일하여 접근성을 높였습니다.
- **영수증 및 정산 화면 가독성 향상**
  - 영수증 헤더를 깔끔하게 정돈하고, 상태 표시를 **'완납'**으로 통일했습니다.
  - 정산소 모달에서 멤버별 벌금 상세 내역을 기본 접힘 상태로 제공하여 필요할 때 클릭해서 펼쳐볼 수 있습니다.
  - 작은 화면에서도 벌금 금액과 납부 상태 배지가 줄바꿈되거나 잘리지 않도록 레이아웃을 개선했습니다.
- **그룹 정책 설정 UI 개선**
  - 페이스 벌금 설정 시 모호했던 \`~ 0:00\` 표기 대신 **'~ 이상'** 배지로 명확하게 표시되도록 변경했습니다.

---

### 🛠️ 주요 오류 수정 및 성능 개선

- **AI 기록 이미지 분석(OCR) 멈춤 현상 해결**
  - 러닝 인증 사진 업로드 시 AI 분석이 지연되거나 멈추던 문제를 해결하고 분석 안정성을 높였습니다.
- **주간 목표 미달 페널티 정상화**
  - 주간 목표 거리를 채우지 못했을 때 부족한 거리 상세 정보가 명확히 표시되고 정상적으로 벌금이 부과되도록 수정했습니다.
- **랭킹 및 페널티 데이터 정합성 개선**
  - 멤버 조회 오류를 해결하고, 랭킹 페이지와 페널티 계산 로직 간의 데이터 불일치 문제를 수정했습니다.

## v0.31.0 (2026-08-25)

### 🌟 주간 목표 공유 & 포스터 기능 업그레이드

- **인스타그램 스토리(9:16) 포스터 지원**: 인스타그램 스토리에 딱 맞는 9:16 비율의 공유 이미지를 저장하고 복사할 수 있습니다. (카카오톡 공유는 기존 1:1 최적화 유지)
- **포스터 디자인 및 정보 가독성 개선**:
  - 러너 아바타, 닉네임, 크루명을 더 크고 돋보이게 배치했습니다.
  - 러닝 횟수 대신 **총 달린 시간(소요 시간)**이 표시되며, 날짜·요일·거리별 세부 기록을 깔끔하게 한눈에 확인할 수 있습니다.
  - 2회부터 최대 10회까지의 러닝 기록을 유연하게 담을 수 있도록 포스터 레이아웃을 최적화했습니다.
- **카카오톡 공유 카드 간소화**: 복잡한 텍스트 대신 시각적인 포스터 카드와 핵심 스코어 중심으로 간결하게 공유되도록 개선했습니다.

---

### 📊 대시보드 및 미션 화면 개선

- **슈퍼 골(Super Goal) 달성 연출 추가**: 미션 달성 시 더욱 특별한 성취감을 느낄 수 있도록 화려한 스타일과 축하 애니메이션을 적용했습니다.
- **유효 러닝 기준 안내 강화**:
  - 1일 1회 인정 기준 및 누적 거리 등 '유효 러닝' 인정 조건을 대시보드 카드 아래에서 바로 확인할 수 있습니다.
  - 전체 러닝 횟수와 유효 러닝 횟수를 명확하게 구분하여 표시합니다.
- **대시보드 액션 바 복원 및 버튼 정리**:
  - 화면 어디서든 빠르게 기록을 시작할 수 있는 **'새 기록 시작' 액션 바**를 다시 제공합니다.
  - 중복 노출되던 공유 버튼을 하나로 통합해 화면을 깔끔하게 정리했습니다.

---

### 🏃 러닝 기록 및 통계 뷰 정돈

- **깔끔해진 러닝 로그**: 날짜와 거리, 유효성 상태 태그를 보기 쉽게 정돈하여 러닝 히스토리를 직관적으로 파악할 수 있습니다.
- **시각 지표 최적화**: 텍스트 간격, 폰트 크기, 지표 배치를 전반적으로 다듬어 중요한 기록 정보를 더 시원하고 또렷하게 볼 수 있습니다.

## v0.30.0 (2026-08-25)

### 🚀 신규 기능

- **주간 목표 달성 '자랑하기' 포스터 & 공유 기능 추가**
  - 주간 미션(거리 + 횟수)을 100% 완수한 러너를 위한 전용 축하 배너 및 '자랑하기' 기능이 추가되었습니다.
  - **📸 인스타 스토리 / 고해상도 이미지 저장**: RUNC 네온 테마의 주간 완주 포스터(1080x1350)를 생성하여 인스타그램 스토리나 피드에 바로 공유하거나 갤러리에 저장할 수 있습니다.
  - **💬 카카오톡 자랑하기**: 크루 단톡방에 주간 달성 성과와 벌금 방어 인증 카드를 원클릭으로 공유할 수 있습니다.
- **크루보드 ALL-TIME '벌금순' 랭킹 정렬 추가**
  - 크루 활동 기간 동안 누적된 벌금순으로 순위를 확인할 수 있는 탭이 추가되었습니다. (동률 시 누적 거리순)

### 🛠 벌금 산정 로직 개선 및 공정성 강화

- **완료된 주차 기준 벌금 확정**: 진행 중인 이번 주는 제외하고, 일요일이 지난 완료 주차만 누적 벌금에 포함되도록 개선되었습니다.
- **회당 비례 부과 방식 적용**: 횟수/거리 미달을 러닝 회차별로 공정하게 판정하여 계산합니다.
- **미달 런 페이스 중복 면제**: 거리 미달로 이미 벌금이 부과된 기록에 대해 페이스 벌금이 중복 부과되어 비참여자가 유리해지던 역인센티브 문제를 해결했습니다.

## v0.29.0 (2026-08-24)

### 🚀 신규 기능 및 개선 사항

- **러닝 앱 인증 이미지 인식(OCR) 성능 개선**
  - Garmin, Nike Run Club(NRC), Strava 등 주요 러닝 앱의 스크린샷 이미지 인식 정확도와 해상도 처리가 크게 향상되었습니다. 러닝 기록 이미지를 더욱 빠르고 정확하게 자동 인식합니다.

### 🛠 오류 수정 및 안정성 개선

- **크루 랭킹 및 러닝 횟수 집계 오류 수정**
  - 특정 러닝 기록 집계 시 카운트가 누락되거나 오작동하던 현상을 해결했습니다.
  - 크루 프로필 내 랭킹(순위) 정보가 정상적으로 표시되도록 수정되었습니다.

## v0.28.0 (2026-08-24)

### ✨ 신규 기능

- **크루원 패널티 유예 및 그룹 관리 기능 추가 (관리자)**
  - 관리자 페이지에서 크루원의 패널티 유예 설정 및 그룹을 보다 간편하게 관리할 수 있는 기능이 추가되었습니다.

---

### 🎨 UI/UX 개선

- **패널티 유예 주차 정렬 및 자동 스크롤 적용**
  - 패널티 유예 주차 목록이 시간 순서(오름차순)대로 정렬되어 주차별 내역을 직관적으로 확인할 수 있습니다.
  - 페이지 진입 시 **현재 주차 위치로 화면이 자동 스크롤**되어, 매번 스크롤할 필요 없이 현재 주차 정보를 즉시 확인할 수 있습니다.

## v0.27.0 (2026-08-24)

### ✨ 새로운 기능

- **크루 관리자 기능 강화**
  - **크루 설정 수정**: 크루 관리자가 직접 크루 정보 및 설정을 변경할 수 있습니다.
  - **크루원 러닝 기록 관리**: 부적절하거나 잘못 등록된 크루원의 러닝 기록을 관리자가 직접 삭제하고 정리할 수 있습니다.

---

### 🎨 UI/UX 및 디자인 개선

- **카카오톡 공유 스타일 개편**: 러닝 기록을 카카오톡으로 공유할 때 더 보기 좋고 깔끔한 레이아웃으로 공유됩니다.
- **거리 표시 네온 스타일 적용**: 러닝 거리 표시 영역에 감각적인 네온 스타일을 적용하여 시각적 몰입감을 높였습니다.

---

### 🛠️ 버그 수정 및 개선

- **러닝 기록 삭제 즉시 반영**: 러닝 기록을 삭제한 후 화면 목록에 바로 업데이트되지 않던 현상을 수정하여 더욱 쾌적하게 관리할 수 있습니다.

## v0.26.1 (2026-08-23)

### ⚡ 성능 및 사용성 개선

- **모바일 환경 이미지 처리 속도 및 반응성 향상**
  - 모바일 기기에서 이미지를 업로드하거나 가공할 때 발생하는 속도 저하 및 버벅임 현상을 크게 개선했습니다.
  - 리소스 사용을 대폭 줄여 저사양 기기나 불안정한 네트워크 환경에서도 보다 빠르고 끊김 없이 쾌적하게 이미지를 처리할 수 있습니다.

## v0.26.0 (2026-08-23)

### 🚀 새로운 기능 및 사용성 개선

- **카카오톡 공유 후 대시보드 자동 이동**
  - 카카오톡 공유를 완료하면 번거로운 추가 조작 없이 바로 크루 대시보드로 자동 이동되어 흐름이 더욱 편리해졌습니다.

### 🛠 안정성 개선 및 버그 수정

- **파일 업로드 안정성 향상**
  - 사진 및 파일 업로드 중 네트워크 지연이나 세션 만료 등으로 인해 발생하던 간헐적 오류를 수정하여, 더욱 안정적으로 업로드할 수 있도록 개선했습니다.

## v0.25.3 (2026-08-23)

### ✨ 사용성 개선 (UI/UX)

- **기록 페이지 분석 경험 개선**: 기록 페이지 내 분석 기능의 화면 흐름과 UI를 개선하여, 분석 진행 및 결과 확인이 더욱 직관적이고 편리해졌습니다.

### 🛠️ 버그 수정 및 안정성 향상

- **이미지 분석 안정성 강화**: 이미지 업로드 및 분석 처리 과정에서 발생할 수 있는 오류를 수정하여 보다 안정적인 분석 서비스를 제공합니다.

## v0.25.2 (2026-08-23)

### 📱 모바일 이미지 업로드 및 안정성 개선

- **모바일 이미지 업로드 안정화**
  - 모바일 환경에서 사진 및 이미지를 첨부할 때 발생할 수 있는 업로드 실패 현상을 개선하여 더욱 안정적인 업로드가 가능해졌습니다.
- **이미지 압축 처리 보완**
  - 다양한 모바일 기기 환경에서 이미지 압축 시 발생하던 예외 상황에 안전하게 대응하여, 끊김 없이 원활하게 이미지를 등록할 수 있도록 최적화했습니다.

## v0.25.1 (2026-08-23)

### 🛠️ 개선 및 수정 사항

- **기록 페이지 이미지 업로드 안정성 향상**
  - 러닝 기록에 사진을 첨부할 때 보다 안정적이고 빠르게 업로드되도록 개선했습니다.

- **오류 발생 시 안내(피드백) 강화**
  - 기록 페이지 이용 중 일시적인 오류나 문제가 발생했을 때, 상황을 직관적으로 이해하고 대처할 수 있도록 오류 안내 메시지와 화면 피드백을 개선했습니다.

## v0.25.0 (2026-08-23)

### ✨ 새로운 기능

- **카카오톡 그룹 공유 지원**: 콘텐츠 및 모임 정보를 카카오톡 그룹/채팅방으로 더 쉽고 빠르게 공유할 수 있는 전용 공유 팝업(모달)이 추가되었습니다.

---

### 🚀 개선 사항

- **AI 응답 안정성 향상**: AI 기능 이용 시 일시적인 오류나 지연이 발생하더라도 대체 모델을 통해 끊김 없이 안정적으로 답변을 받아보실 수 있도록 서비스 안정성을 강화했습니다.

## v0.24.0 (2026-08-23)

### 🚀 기능 개선 및 안정성 강화

- **오류 복구 및 안내 화면 추가**: 앱 실행 중 예기치 않은 오류가 발생하더라도 화면이 멈추지 않고, 안전하게 안내 화면을 통해 서비스를 계속 이용할 수 있도록 안정성을 강화했습니다.
- **페이지 로딩 속도 개선**: 앱 리소스 로딩 방식을 최적화하여 초기 접속 및 화면 전환 속도가 더 빨라졌습니다.

### 🐛 버그 수정

- **종료일 기간 선택 오류 수정**: 기간이나 일정을 설정할 때 마지막 날(종료일) 기준 데이터가 올바르게 포함 및 반영되지 않던 현상을 수정했습니다.

## v0.23.0 (2026-08-23)

### ✨ 새로운 기능 및 UX 개선

- **크루 탭 좌우 스와이프 제스처 네비게이션 추가**
  - 이제 크루 화면에서 좌우로 화면을 쓸어 넘기는(스와이프) 제스처로 탭 간 이동이 가능합니다.
  - 상단 탭을 직접 터치하지 않고도 직관적이고 부드럽게 화면을 전환하며 편리하게 크루 정보를 탐색해 보세요.

## v0.22.0 (2026-08-23)

### 🚀 주요 업데이트

- **스쿼드 게시글 유형 개편 및 추가**
  - 스쿼드 활동 목적에 맞춰 보다 다양하고 직관적인 유형의 게시글을 작성하고 탐색할 수 있도록 게시글 형식이 개선되었습니다.

- **개발자 모드 툴킷 도입**
  - 기능 테스트와 디버깅을 효율적으로 지원하는 개발자 모드 환경이 새롭게 추가되었습니다.

## v0.21.0 (2026-08-23)

### ✨ 새로운 기능 및 UI 개선

- **크루 리더 뱃지 표시**: 크루 게시판에서 크루장을 한눈에 알아볼 수 있도록 리더 전용 뱃지가 추가되었습니다.

### ⚡ 성능 및 사용성 개선

- **앱 성능 최적화**: 전반적인 앱 동작 성능을 개선하여 더욱 빠르고 쾌적하게 서비스를 이용하실 수 있습니다.

## v0.20.0 (2026-08-22)

### 🚀 새로운 기능

- **역대 크루 보드 '런 횟수' 정렬 옵션 추가**: 역대 크루(All-time Crew) 보드에서 크루원들의 기록을 **달리기 횟수(Run Count)** 기준으로 정렬하여 볼 수 있는 기능이 추가되었습니다.

### 🎨 UI/UX 개선

- **화면 가독성 향상**: 불필요하게 중복 표시되던 합계(Sum) 텍스트를 제거하여 보드 화면을 더욱 깔끔하고 직관적으로 개선했습니다.

## v0.19.0 (2026-08-22)

### ✨ 새로운 기능 및 개선 사항

- **카카오 계정 프로필 자동 기본값 적용**
  - 크루 프로필 설정 시 카카오 계정의 닉네임과 프로필 이미지가 기본값으로 자동 반영됩니다.
  - 별도의 추가 입력 없이도 카카오 계정 정보를 기반으로 더욱 빠르고 편리하게 프로필을 완성하고 시작해보세요.

## v0.18.0 (2026-08-22)

### ✨ 새로운 기능 및 개선 사항

- **크루 선택 화면에서 초대받은 크루 확인**
  - 초대받은 크루가 있는 경우, 크루 선택 화면에 해당 크루 카드가 표시되어 바로 확인하고 손쉽게 참여할 수 있습니다.

- **대기 중인 크루 초대 내역 유지**
  - 수락 대기 중인 크루 초대 정보가 안전하게 보존되어, 페이지를 벗어나거나 다시 접속하더라도 초대 내역을 놓치지 않고 이어서 진행할 수 있습니다.

## v0.17.0 (2026-08-22)

### ✨ 크루 보드 및 랭킹 기능 강화

- **팀 챌린지 & 주간 이벤트 목표 지원**: 크루 보드에서 팀 챌린지와 주간 이벤트 목표를 한눈에 확인하고, 진행률 기준으로 정렬하여 크루원들의 현황을 손쉽게 살펴볼 수 있습니다.
- **크루 활동 기간에 맞춘 랭킹 표시**: 주간 및 월간 랭킹 기간이 크루의 실제 활동 기간에 맞춰 정확하게 반영되며, 크루 시작 전 대기 상태를 직관적으로 확인할 수 있도록 안내가 추가되었습니다.

---

### 🧭 네비게이션 및 사용성(UX) 개선

- **앱 버전 및 릴리즈 노트 바로가기**: 하단 네비게이션 영역에서 현재 앱 버전을 쉽게 확인하고, 최신 업데이트 내역으로 바로 이동할 수 있는 링크가 추가되었습니다.
- **동선 간소화 및 사용성 개선**: 화면 이동 과정의 불편 요소를 개선하고 전반적인 탐색 동선을 간소화하여 더욱 쾌적한 사용 환경을 제공합니다.

## v0.16.0 (2026-08-22)

### ✨ 새로운 기능

- **크루장 권한 위임 기능**
  - 이제 크루장이 다른 크루원에게 크루장 권한을 직접 위임(양도)할 수 있습니다.
  - 크루장 변경 시에도 기존 크루를 유지하며 유연하게 역할을 넘겨줄 수 있어 크루 운영이 더욱 편리해집니다.

---

### 🛠 기타 개선

- 서비스 배포 프로세스 및 시스템 안정성 개선이 진행되었습니다.

## v0.15.0 (2026-08-22)

### 🏆 랭킹 및 내비게이션 개선

- **편리해진 랭킹 페이지 탐색**: 랭킹 페이지의 내비게이션이 개선되어 원하는 순위와 크루 정보를 더욱 빠르고 직관적으로 이동하며 확인할 수 있습니다.

### 👥 크루 진행 상황(Progress) 확인 강화

- **크루 진행도 한눈에 보기**: 함께하는 크루원들의 활동 및 진행 현황을 보다 명확하고 직관적으로 파악할 수 있도록 표시 방식이 개선되었습니다.

### 📊 통계 요약(Stats Summary) 개편

- **핵심 성과 지표 요약 제공**: 주요 활동 데이터와 성과를 한눈에 비교하고 확인할 수 있도록 통계 요약 화면의 가독성이 향상되었습니다.

## v0.14.0 (2026-05-14)

### UI/UX 개선 및 멤버 프로필 네비게이션

- **멤버 상세 프로필 이동 기능**: 랭킹 페이지에서 멤버 항목을 클릭하면 해당 멤버의 프로필 페이지로 바로 이동할 수 있도록 네비게이션이 추가되었습니다.
- **헤더 디자인 및 시각적 위계 개편**:
  - 페이지 제목과 크루 이름의 스타일을 조정하여 현재 위치한 페이지의 가독성을 높였습니다.
  - 대시보드 헤더의 로고(또는 크루 아이콘)를 클릭하면 내 프로필 이미지를 크게 확인할 수 있는 미리보기 기능이 추가되었습니다.
- **인터랙션 경험 향상**: 랭킹 리스트 등 클릭 가능한 요소에 터치 피드백(누름 효과)을 적용하여 보다 직관적인 사용감을 제공합니다.

## v0.13.21 (2026-05-14)

### 🚀 주요 업데이트

- **크루 전용 프로필 적용**: 대시보드 상단 헤더에 해당 크루에서 사용하는 개인 프로필 이미지가 표시되도록 개선되었습니다.
- **크루 정보 화면 가독성 개선**: 크루 정보 모달에서 운영 정책 섹션이 기본적으로 접힌 상태로 표시되어, 주요 정보를 더 빠르게 확인할 수 있습니다.

### 🎨 디자인 및 사용성 개선

- **멤버 프로필 이동 편의성**: 크루 멤버 목록에서 아바타를 클릭하면 이미지 미리보기 대신 해당 멤버의 프로필 페이지로 즉시 이동하도록 변경되었습니다.
- **크루 선택 화면 UI 정돈**: 크루 선택 페이지의 헤더 타이틀을 더 깔끔하고 일관성 있는 스타일로 업데이트했습니다.

## v0.13.20 (2026-05-13)

### 🎨 UI/UX 개선

- **대시보드 진행 현황 가독성 개선**: 대시보드 내 목표 달성률 표시 방식을 최적화하여 현재 진행 상태를 보다 직관적으로 확인할 수 있도록 개선했습니다.

### 🐛 버그 수정 및 기능 개선

- **러닝 이미지 AI 분석 정확도 향상**: 기록 인증 이미지 분석 시 페이스(Pace) 데이터를 날짜로 오인하던 문제를 해결했습니다. 이제 사진을 통한 자동 기록 입력이 더욱 정확해졌습니다.

## v0.13.19 (2026-05-11)

제공해주신 커밋 내역을 바탕으로 작성한 릴리즈 노트입니다.

### 🎨 UI/UX 개선

- **대시보드 시각적 요소 최적화**: 주간 달성률 표시에서 상태 이모지를 제거하여 UI를 더욱 간결하고 깔끔하게 개선했습니다. 불필요한 요소를 줄여 사용자가 목표 달성 수치 등 핵심 정보에 더욱 집중할 수 있도록 가독성을 높였습니다.

## v0.13.18 (2026-05-11)

### 🚀 주요 업데이트

#### **디자인 시스템 및 모바일 경험 대규모 개편**

- **모바일 퍼스트 디자인 적용**: 다양한 기기의 노치 및 다이나믹 아일랜드를 고려한 세이프 에어리어(Safe Area)를 완벽히 지원합니다.
- **Sporty Neon 테마 도입**: Space Grotesk 폰트와 강렬한 네온 컬러를 적용하여 RUNC만의 역동적인 브랜드 이미지를 강화했습니다.
- **터치 최적화**: 버튼 터치 영역 및 인터랙션 피드백을 개선하여 모바일 환경에서 더욱 쾌적한 조작이 가능합니다.

#### **페이지 전환 애니메이션 개선**

- 화면 이동 시 더욱 자연스럽고 부드러운 전환 효과(Framer Motion 기반)를 적용하여 앱 사용 전반의 시각적 즐거움을 더했습니다.

#### **멀티 크루 동시 인증 기능**

- 한 번의 기록 등록으로 여러 크루에 동시에 인증할 수 있는 기능이 추가되었습니다. 레이아웃 최적화를 통해 많은 크루에 가입된 사용자도 안정적으로 인증 버튼을 사용할 수 있습니다.

#### **대시보드 및 달성률 시각화 개선**

- **주간 달성률 상세화**: 이제 목표를 초과 달성했을 때 100% 이상의 수치가 정확하게 표시됩니다.
- **상태 이모지 추가**: 주간 목표 달성 여부를 직관적으로 확인할 수 있도록 상태 이모지가 추가되었습니다. (미달성 시 ⏳ 아이콘으로 변경)

## v0.13.17 (2026-05-11)

### 🚀 주요 업데이트

- **러닝 기록 이미지 확대 기능**: 업로드된 러닝 기록 이미지를 클릭하여 크게 확인할 수 있는 미리보기 모달이 추가되었습니다. 기록의 세부 내용을 더욱 선명하게 확인해 보세요.
- **실시간 상태 알림(Toast) 도입**: 작업 성공, 오류 등 서비스 이용 중 발생하는 주요 피드백을 직관적인 토스트 메시지로 즉시 확인할 수 있어 사용성이 개선되었습니다.
- **거리 직접 수정 기능**: 자동 인식된 결과 외에도 사용자가 직접 러닝 거리를 입력하고 수정할 수 있는 필드가 추가되어, 더욱 정확한 기록 관리가 가능해졌습니다.

### 🛠 개선 사항

- 코드 가독성 및 시스템 안정성을 위한 내부 최적화 작업을 진행하였습니다.

## v0.13.16 (2026-05-07)

### 🚀 신규 기능 및 개선 사항

- **트레드밀(러닝머신) 기록 분석 지원**: 이제 야외 러닝뿐만 아니라 트레드밀(러닝머신) 계기판 이미지도 AI가 자동으로 분석합니다. 사진 한 장으로 실내 운동 기록까지 간편하게 인증해 보세요.
- **AI 기록 인식 고도화**: 트레드밀 환경 특유의 다양한 화면 구성을 더 정교하게 인식할 수 있도록 AI 분석 로직을 개선하여 데이터 추출의 정확도를 높였습니다.

### 💡 사용자 영향

날씨나 장소에 상관없이 실내 트레드밀 기록까지 스마트하게 관리할 수 있게 되어, 더욱 끊김 없는 러닝 루틴 관리가 가능해졌습니다. 기기 화면을 촬영해 업로드하는 것만으로 거리와 페이스 등 주요 정보를 자동으로 입력할 수 있어 기록 등록이 훨씬 편리해졌습니다.

## v0.13.15 (2026-05-07)

- **대시보드 가독성 개선**: 대시보드의 주요 상태 카드(러닝 횟수, 목표 거리, 평균 페이스) 레이아웃을 최적화했습니다. 카드별 너비 비율을 재조정하여, 정보량이 많은 항목도 잘림 없이 균형 있게 표시되도록 시각적 편의성을 높였습니다.

## v0.13.14 (2026-05-07)

### 🛠️ 개선 및 수정 사항

**대시보드 데이터 가독성 및 정확도 향상**

- **활동 거리 표시 표준화**: 모든 활동 거리가 소수점 둘째 자리까지 일관되게 표시되도록 개선되어, 더욱 깔끔하고 정돈된 대시보드를 확인하실 수 있습니다.
- **평균 페이스 노출 오류 수정**: 특정 상황에서 평균 페이스가 \`NaN:NaN\`으로 잘못 표시되던 문제를 해결하여, 이제 언제나 정확한 기록 확인이 가능합니다.

## v0.13.13 (2026-05-05)

### UI/UX 개선

- **그룹 선택 편의성 향상**: 그룹 선택 버튼의 크기를 키우고 레이블 표시 방식을 개선하여 보다 직관적이고 편리하게 조작할 수 있도록 업데이트했습니다.
- **기록 안내 시인성 강화**: 러닝 기록 입력 시 날짜가 지정되지 않았을 때 나타나는 안내 문구를 Amber 색상으로 강조하여 사용자가 쉽게 인지할 수 있도록 개선했습니다.

### 기능 및 편의성

- **자동 닉네임 설정**: 카카오톡 초대 링크를 통해 크루에 가입할 경우, 별도의 입력 없이도 카카오 프로필의 닉네임이 자동으로 크루 프로필에 반영되어 가입 절차가 간소화되었습니다.

## v0.13.12 (2026-05-05)

### 🚀 기능 개선

- **기록 이미지 날짜 정보 안내 추가**: 업로드한 이미지에서 날짜 정보를 자동으로 추출할 수 없는 경우, 사용자에게 안내 메시지를 표시하여 수동 입력을 돕도록 개선되었습니다.

### 🛠️ 버그 수정 및 최적화

- **이미지 데이터 분석 자동 입력 강화**: 이미지의 날짜가 크루 활동 기간을 벗어나더라도, 분석된 거리와 페이스 정보는 자동으로 입력되도록 수정되었습니다. 이제 날짜와 관계없이 분석된 수치를 즉시 확인하고 활용할 수 있습니다.

### 💡 사용자 영향

기록 인증 시 발생할 수 있는 예외 상황에 대한 안내가 강화되었고, 데이터 자동 입력 로직이 유연해짐에 따라 기록 등록 과정이 더욱 빠르고 편리해졌습니다.

## v0.13.11 (2026-05-05)

제공해주신 커밋 내역을 바탕으로, 사용자가 체감할 수 있는 변화를 중심으로 정리한 릴리즈 노트입니다.

### 🛠️ 기능 수정 및 최적화

- **러닝 기록 분석 정확도 향상**: 러닝 기록 이미지에서 날짜 정보가 명확하게 보이지 않거나 포함되지 않은 경우, AI가 잘못된 날짜를 임의로 추측하지 않도록 로직을 정교화했습니다. 이를 통해 분석 결과의 신뢰도를 높이고, 잘못된 데이터가 등록되는 것을 사전에 방지합니다.

### 💡 사용자 영향

기록 인증 과정에서의 데이터 정합성을 강화하여, 사용자가 업로드한 이미지를 기반으로 더욱 정확하고 신뢰할 수 있는 러닝 기록 관리가 가능해졌습니다.

## v0.13.10 (2026-05-05)

제공해주신 커밋 내역과 이전 버전(\`v0.13.8\`) 이후의 변경 사항들을 종합하여, 사용자가 체감할 수 있는 가치 중심의 릴리즈 노트를 작성해 드립니다.

### 🚀 신규 기능 및 UI 개선

- **멤버 프로필 정보 강화**: 이제 멤버 프로필 화면에서 크루 이름 옆에 소속 그룹 배지와 함께 개인별 주간 목표(거리 및 횟수)를 한눈에 확인할 수 있습니다. 동료들의 목표 달성 현황을 더 직관적으로 파악해 보세요.
- **버전 정보 표시**: 크루 선택 화면에 현재 앱의 버전 정보가 담긴 배지가 추가되었습니다. 내가 사용 중인 앱의 최신 여부를 더욱 쉽게 확인할 수 있습니다.
- **프로필 이미지 반영 개선**: 프로필 사진을 변경했을 때 이전 이미지가 계속 남아있던 현상을 수정했습니다. 이제 변경된 사진이 즉시 화면에 반영됩니다.

### 🛠️ 기능 수정 및 최적화

- **러닝 기록 분석 정확도 향상**: 기록 이미지 분석 시 연도 정보가 없는 경우에도 AI가 날짜를 정확하게 인식하도록 로직을 개선했습니다. 이제 기록 누락이나 오차 걱정 없이 러닝을 인증할 수 있습니다.
- **시스템 안정성 및 내부 최적화**: 앱 전반의 성능 안정성을 위해 크루 선택 페이지의 내부 모듈 로딩 구조를 정돈하고 최적화했습니다.

### 💡 사용자 영향

이번 업데이트를 통해 멤버 간의 목표 공유가 활발해지고, 기록 인증의 정확도가 높아져 더욱 신뢰할 수 있는 크루 활동이 가능해집니다.

## v0.13.9 (2026-05-04)

### 🚀 신규 기능 및 UI 개선

- **멤버 프로필 정보 강화**: 멤버 프로필 화면에서 크루 이름 옆에 소속 그룹 배지와 함께 개인별 목표(주간 거리 및 횟수)를 한눈에 확인할 수 있습니다.
- **버전 정보 표시**: 크루 선택 화면에 현재 앱의 버전 배지가 추가되었습니다.
- **프로필 이미지 반영 개선**: 프로필 사진 변경 시 간혹 이전 이미지가 계속 보이던 현상을 수정하여, 변경된 사진이 즉시 반영되도록 개선했습니다.

### 🛠️ 기능 수정 및 최적화

- **러닝 기록 분석 정확도 향상**: 기록 이미지 분석 시 연도 정보가 없는 경우 AI가 잘못된 연도를 추측하지 않도록 로직을 개선하여, 기록 측정의 정확도를 높였습니다.

## v0.13.8 (2026-05-04)

### 🛠️ 개선 및 수정 사항

- **크루 활동 기간 설정 유효성 검사 강화**: 크루 생성 및 관리자 설정 시, 종료일이 시작일보다 이전 날짜로 설정되지 않도록 개선되었습니다. 이를 통해 잘못된 기간 설정으로 인한 혼란을 방지하고, 크루 활동 데이터를 더욱 정확하게 관리할 수 있습니다.

## v0.13.7 (2026-05-04)

### UI/UX 개선

- **대시보드 시각적 일관성 강화**: 프리 모드 안내 문구 내 'Profile' 표기를 디자인 시스템 가이드에 맞춰 대문자(**PROFILE**)로 변경하여 브랜드 아이덴티티와 시각적 통일성을 높였습니다.

## v0.13.6 (2026-05-04)

### 🚀 새로운 기능

- **자율 목표 설정 지원 (자율 모드)**: 크루 내 그룹 활동이 없는 상태에서도 멤버 개인이 직접 주간 목표를 설정하고 달성량을 관리할 수 있는 '자율 모드' 기능이 추가되었습니다.
- **프로필 배지 및 바로가기 추가**: 프로필 화면의 크루 이름 옆에 '자율 모드' 상태임을 알리는 배지가 표시됩니다. 이 배지를 클릭하면 목표 설정 화면으로 즉시 이동할 수 있는 단축 경로가 제공됩니다.

### 🛠️ 개선 및 수정 사항

- **카카오톡 초대 링크 오류 해결**: 카카오톡 공유 링크를 통해 접속 시 화면이 검게 표시되던 현상을 수정하여 이제 정상적으로 초대 페이지에 접속할 수 있습니다.
- **사용자 프로필 조회 안정화**: 일부 환경에서 멤버 프로필 정보를 불러오지 못하던 오류를 수정하여 서비스 이용의 안정성을 높였습니다.

## v0.13.5 (2026-05-04)

### ✨ 사용자 경험(UX) 개선

- **대시보드 목표 거리 표시 최적화**: 대시보드에서 설정된 목표 거리가 생략되거나 잘리지 않고 전체 수치가 명확하게 표시되도록 개선했습니다. 이제 나의 목표 달성 현황을 더욱 정확하게 확인하실 수 있습니다.

## v0.13.4 (2026-05-04)

### ✨ 사용자 경험(UX) 및 디자인 개선

- **대시보드 가독성 최적화**: 대시보드의 상태 카드(Condition Card) 레이아웃을 개선하여 정보가 줄바꿈 없이 한 줄로 깔끔하게 표시되도록 했습니다. 이제 주요 수치와 진행 상황을 더욱 직관적으로 확인할 수 있습니다.

### 🛠️ 시스템 안정성 향상

- **앱 업데이트 환경 안정화**: 새로운 버전 업데이트 시 발생할 수 있는 페이지 로딩 오류를 방지하고, 항상 최신 상태의 서비스를 끊김 없이 안정적으로 이용하실 수 있도록 업데이트 로직을 보강했습니다.

## v0.13.3 (2026-05-04)

### 🚀 기능 개선

- **카카오톡 초대 공유 이미지 최적화**: 이제 크루 초대 링크를 카카오톡으로 공유할 때, 해당 크루의 **고유 아이콘**이 썸네일로 함께 전달됩니다. 크루 아이콘이 설정되지 않은 경우에도 기본 RUNC 아이콘이 자동으로 적용되어, 어떤 상황에서도 깔끔하고 전문적인 공유 화면을 제공합니다. 이를 통해 크루의 아이덴티티를 더욱 효과적으로 드러낼 수 있습니다.

## v0.13.2 (2026-05-03)

### 🚀 주요 업데이트

#### 📊 통계 및 랭킹 정확도 개선

- **크루 시작일 기준 기록 필터링:** 이제 모든 통계와 랭킹 데이터에 크루 시작일 이후의 기록만 반영됩니다. 크루 활동 시작 전의 데이터가 포함되지 않아 더욱 공정하고 정확한 순위 확인이 가능합니다.

#### 📱 UI/UX 및 사용성 최적화

- **모바일 대시보드 가독성 향상:** 모바일 화면에서 거리(Distance) 레이아웃이 깨지거나 줄바꿈되던 현상을 수정하여, 운동 기록을 더 쾌적하게 확인할 수 있습니다.
- **프로필 설정 화면 정돈:** 프로필 내 그룹 목표 할당 등 주요 정보의 레이아웃을 더 깔끔하게 개선했습니다.

#### 🔄 데이터 실시간 동기화 강화

- **설정 변경 즉시 반영:** 프로필 정보를 수정하면 대시보드의 통계와 그룹 설정이 즉시 최신 상태로 업데이트되도록 개선되었습니다.
- **랭킹 및 목표 데이터 정합성 확보:** 프로필 변경 시 발생할 수 있던 랭킹 정보나 그룹 설정 간의 데이터 불일치 문제를 해결하여 서비스 안정성을 높였습니다.

## v0.13.1 (2026-05-03)

### ✨ 사용자 경험(UX) 개선

- **모바일 대시보드 레이아웃 최적화**: 모바일 환경에서 주행 거리 수치가 레이아웃을 벗어나지 않고 깔끔하게 표시되도록 개선했습니다.
- **프로필 설정 UI 정돈**: 사용자 프로필 화면에서 그룹 목표 설정 영역의 가독성을 높이기 위해 텍스트 포맷을 정교하게 다듬었습니다.

### 🛠️ 주요 수정 사항

- **실시간 데이터 동기화 강화**: 프로필 정보를 변경하거나 목표를 수정했을 때, 대시보드 통계와 랭킹 정보가 즉시 최신 상태로 반영되도록 개선되었습니다.
- **랭킹 및 통계 정확도 향상**: 크루의 활동 시작일을 기준으로 기록을 필터링하도록 수정하여, 크루 활동 기간 외의 데이터가 랭킹이나 통계에 영향을 주지 않도록 정확도를 높였습니다.
- **데이터 일관성 보완**: 설정 변경 시 발생할 수 있는 데이터 불일치 문제를 해결하기 위해 내부 캐시 및 쿼리 갱신 로직을 보강했습니다.

## v0.13.0 (2026-05-03)

### 🚀 신규 기능

- **그룹 관리 및 자율성 확대**: 멤버가 직접 그룹을 변경하거나, 관리자가 특정 그룹으로 멤버를 지정할 수 있는 기능이 추가되었습니다.
- **그룹 종류 확장**: 기존 5개(A~E)에서 최대 10개(A~J) 그룹까지 지원하여 더욱 세밀한 그룹 운영이 가능해졌습니다.
- **주간 벌금 유예(Deferral) 도입**: 멤버별로 주간 벌금을 유예할 수 있는 기능이 추가되어 운영의 유연성을 높였습니다.
- **관리자 모니터링 강화**: 관리자 페이지 리스트에서 멤버별 주간 미션 달성 현황과 예상 벌금을 한눈에 확인할 수 있습니다.

### ✨ 사용자 경험(UX) 개선

- **기록 등록 편의성 향상**: 기록 등록 시 거리, 페이스, 케이던스는 분석값에 따라 고정(Read-only)되며, 날짜 수정 및 소요 시간 자동 포맷팅 기능이 추가되어 등록이 더 간편해졌습니다.
- **시각적 경고 알림**: 평균 페이스 미달로 벌금이 적용되는 경우 수치를 강조 표시하여 사용자가 쉽게 인지할 수 있도록 개선했습니다.
- **그룹별 맞춤 정책 설정**: 정책 설정 UI가 개선되었으며, 그룹별로 상이한 목표치를 더욱 쉽게 설정할 수 있습니다.

### 🛠️ 주요 수정 사항

- **랭킹 시스템 정교화**: 탈퇴 멤버를 순위에서 제외하고 공동 순위 처리를 지원하여 더욱 정확한 랭킹 정보를 제공합니다.
- **이미지 날짜 인식 고도화**: 기록 이미지 분석 시 연도 정보가 없는 경우 현재 연도를 지능적으로 추론하여 정확한 날짜로 등록합니다.
- **데이터 실시간 반영**: 그룹 변경 사항이 대시보드와 프로필에 즉시 업데이트되도록 개선되었습니다.
- **페이스 계산 및 표시 최적화**: 평균 페이스를 항상 확인할 수 있도록 표시 방식을 개선하고 벌금 계산 로직을 정교하게 수정했습니다.

## v0.12.0 (2026-05-03)

### 🚀 신규 기능

- **평균 페이스 패널티 범위 설정 추가**: 크루 관리자가 평균 페이스에 따른 패널티 범위를 직접 세부적으로 설정할 수 있는 기능이 도입되었습니다.
- **패널티 정책 시각화**: 설정된 페이스 패널티 범위를 사용자가 직관적으로 확인할 수 있도록 전용 디스플레이 영역이 추가되었습니다.

### 💡 주요 개선 사항

- **정책 관리 유연성 강화**: 크루의 운동 강도나 운영 방식에 맞춰 더욱 정교한 패널티 시스템을 구축할 수 있습니다.
- **UI/UX 최적화**: 복잡할 수 있는 패널티 수치를 시각적으로 정리하여 정책 이해도를 높였습니다.

### 🛠️ 사용자 영향

- 이제 크루 멤버들은 본인의 페이스가 패널티 범위에 해당하는지 명확하게 인지할 수 있으며, 관리자는 크루의 성격에 맞는 공정한 규칙을 적용할 수 있습니다.

## v0.11.0 (2026-05-03)

### 🚀 신규 기능

- **크루 멤버 내보내기 기능**: 크루 관리자(Admin)를 위한 멤버 관리 권한이 강화되었습니다. 이제 관리자는 크루 멤버 목록에서 특정 멤버를 내보낼 수 있어, 더욱 체계적이고 활발한 크루 운영이 가능해집니다.

### 🎨 관리 도구 및 UX 개선

- **직관적인 멤버 관리 UI**: 크루 관리자 페이지의 멤버 리스트에 삭제 버튼이 추가되었습니다. 관리자가 여러 단계를 거치지 않고도 즉시 멤버 현황을 정리할 수 있도록 UX를 최적화했습니다.

### 💡 사용자 영향

- **크루 운영 효율성 증대**: 크루의 성격에 맞지 않는 활동을 하거나 활동이 없는 멤버를 직접 관리할 수 있게 되어, 크루의 활동성과 커뮤니티 품질을 더욱 효과적으로 유지할 수 있습니다.

## v0.10.0 (2026-05-03)

### 🚀 새로운 기능

- **멤버 상세 프로필 조회**: 크루 멤버들의 개별 활동 현황과 기록을 확인할 수 있는 상세 프로필 페이지가 추가되었습니다. 동료들의 러닝 데이터를 확인하며 함께 달리는 동기부여를 얻어보세요.
- **개인 최고 기록(PB) 표시**: 내 프로필 화면에서 **최고 거리**와 **최고 페이스**를 한눈에 확인할 수 있습니다. 나의 러닝 성취도를 직관적으로 파악해 보세요.
- **스탯 박스 연동 기능**: 대시보드의 스탯 박스를 클릭하면 해당 기록으로 즉시 화면이 포커스되어, 원하는 정보를 더 빠르고 편리하게 확인할 수 있습니다.
- **관리자 전용 멤버 리스트**: 크루 관리자 페이지 내에 멤버 관리 전용 리스트가 도입되어, 크루장과 관리자가 멤버 현황을 더 효율적으로 관리할 수 있게 되었습니다.

### 🎨 UI/UX 및 사용성 개선

- **자동 스크롤 최적화**: 페이지 이동 시 화면이 항상 최상단에서 시작되도록 개선하여, 긴 리스트를 확인한 후에도 끊김 없는 탐색이 가능해졌습니다.
- **관리자 경로 직관화**: 관리자 페이지의 접근 경로를 크루 서비스 구조에 맞춰 재구성하여 접근성을 높였습니다.

### 🛠 시스템 안정화 및 버그 수정

- **데이터 실시간성 강화**: 러닝 기록 등록 후 주간 통계가 즉시 반영되지 않던 문제를 해결하고, 데이터 캐시 정책을 최적화하여 항상 최신 정보를 보장합니다.
- **프로필 설정 오류 수정**: 크루 생성 시 관리자의 닉네임이 정상적으로 적용되지 않던 문제와 서비스 이용 중 발생하던 마이너 버그들을 수정하여 안정성을 강화했습니다.

## v0.9.0 (2026-05-03)

### 🚀 주요 업데이트

- **크루 멤버 프로필 상세 조회 기능 추가**
  - 이제 크루 내 다른 멤버들의 러닝 통계와 활동 내역을 확인할 수 있는 상세 프로필 페이지가 도입되었습니다.
  - 크루원들의 목표 달성 현황과 최근 러닝 기록을 확인하며 함께 달리는 즐거움을 느껴보세요.

### 🎨 디자인 및 UI/UX 개선

- **멤버 프로필 레이아웃 최적화**
  - RUNC만의 강렬한 **스포티 네온(Sporty Neon)** 디자인을 적용하여 프로필 정보의 가독성을 높였습니다.
  - 멤버 리스트에서 프로필로 이어지는 흐름을 개선하여 더욱 직관적인 탐색이 가능해졌습니다.

### 📈 사용자 경험 향상

- **동료 활동 확인을 통한 동기부여**
  - 단순한 명단 확인을 넘어, 동료들의 운동 성과를 구체적으로 확인하고 크루 내 유대감을 강화할 수 있습니다.

## v0.8.0 (2026-05-03)

신규 기능 및 개선 사항을 담은 릴리즈 노트입니다.

### 🚀 신규 기능

**관리자 페이지 내 크루 멤버 리스트 도입**

- 이제 크루 관리자 페이지에서 모든 크루 멤버를 한눈에 확인하고 관리할 수 있습니다.
- 멤버들의 상태를 직관적으로 파악하여 더욱 효율적인 크루 운영이 가능해졌습니다.

### 🎨 UI/UX 개선

**관리자 대시보드 레이아웃 최적화**

- 크루 멤버 리스트가 관리자 페이지에 자연스럽게 통합되었습니다. RUNC 특유의 강렬한 네온 디자인 시스템을 유지하면서도, 많은 정보를 쾌적하게 볼 수 있도록 가독성을 높였습니다.

### 💡 사용자 영향

- **크루장/관리자:** 멤버 현황 파악을 위해 다른 화면으로 이동할 필요 없이, 관리자 페이지 내에서 즉시 멤버 명단을 확인할 수 있어 운영 편의성이 크게 향상되었습니다.

## v0.7.0 (2026-05-03)

### 🚀 신규 기능

- **프로필 개인 최고 기록 표시**: 프로필 화면에서 나의 **최고 거리**와 **최고 페이스**를 확인할 수 있는 항목이 추가되었습니다. 이제 자신의 러닝 성취도를 한눈에 파악해 보세요.
- **통계 박스 클릭 상호작용**: 대시보드 등의 통계 박스를 클릭하면 해당되는 상세 기록으로 화면이 자동 포커스됩니다. 원하는 기록을 더 빠르고 편리하게 찾아볼 수 있습니다.

### 🛠 개선 사항

- **관리 페이지 접근성 개선**: 크루 관리자 페이지의 경로를 크루 서비스 구조에 맞춰 더욱 직관적으로 재구성하였습니다.

## v0.6.4 (2026-05-02)

포괄적인 사용자 경험 개선을 위해 다음과 같이 릴리즈 노트를 작성하였습니다.

### 🎨 UI/UX 개선

- **페이지 이동 시 스크롤 자동 최적화**: 다른 메뉴나 페이지로 이동할 때 화면이 항상 최상단에서 시작되도록 개선되었습니다. 이제 긴 리스트를 보다가 페이지를 전환하더라도 수동으로 올릴 필요 없이 즉시 새로운 콘텐츠를 확인할 수 있습니다.

## v0.6.3 (2026-05-02)

### 🚀 주요 업데이트 및 개선 사항

**1. 데이터 업데이트 실시간성 개선**

- **주간 기록 즉시 반영**: 새로운 러닝 기록을 등록한 후, 메인 화면의 주간 통계가 즉시 업데이트되지 않던 문제를 해결했습니다. 이제 별도의 새로고침 없이도 최신 기록을 바로 확인할 수 있습니다.
- **데이터 정확도 향상**: 화면에 표시되는 정보의 최신 상태를 보장하기 위해 데이터 관리 방식을 최적화했습니다.

**2. 크루 관리 기능 수정**

- **닉네임 설정 오류 해결**: 크루를 처음 생성할 때 관리자의 닉네임이 정상적으로 등록되지 않던 문제를 수정했습니다. 이제 크루 생성과 동시에 프로필 정보가 올바르게 적용됩니다.

**3. 시스템 안정성 강화**

- 데이터 업데이트 프로세스를 개선하여 전반적인 앱 사용 경험이 더욱 매끄러워졌습니다.

## v0.6.2 (2026-05-02)

\`RELEASES.md\` 및 최근 변경 사항을 바탕으로 정리한 릴리즈 노트입니다.

### 🚀 새로운 기능 및 개선 사항

- **크루 가입 신청 시스템 도입**: 이제 새로운 크루에 가입 신청을 보낼 수 있으며, 크루 관리자는 신청 내역을 확인하고 승인할 수 있는 기능이 추가되었습니다.
- **월간 목표 설정**: 크루 프로필에서 매달 달성하고자 하는 개인별 월간 목표 거리를 설정하고 관리할 수 있습니다.
- **크루 공개 설정**: 크루의 성격에 따라 누구나 검색하고 참여할 수 있도록 공개 여부를 설정할 수 있는 옵션이 추가되었습니다.
- **러닝 기록 상세 정보 강화**: 러닝 기록에 케이던스(Cadence)와 페이스(Pace) 정보가 추가되어 더욱 전문적인 분석이 가능해졌습니다.

### 🛠 안정성 및 성능 개선

- **시스템 안정성 강화**: 서비스 이용 중 발생하던 예기치 않은 오류들을 수정하여 더욱 매끄러운 사용 경험을 제공합니다.
- **내부 구조 최적화**: 앱 내부 데이터 구조와 폴더 체계를 정리하여 전반적인 앱 성능과 로딩 속도를 개선하였습니다.
- **개발 환경 고도화**: UI 테스트 환경을 강화하여 향후 업데이트 시 발생할 수 있는 시각적 오류를 사전에 방지하도록 개선하였습니다.

## v0.6.1 (2026-05-02)

### ✨ 주요 업데이트

#### 🛠️ 기능 개선 및 버그 수정

- **크루 가입 프로세스 안정화**: 크루 가입 시 발생하던 오류를 수정하여 이제 막힘없이 크루에 참여할 수 있습니다.
- **데이터 최신화 유지**: 정보 모달을 열 때 최신 데이터를 실시간으로 다시 불러오도록 개선하여 데이터의 정확성을 높였습니다.
- **페이지 이동 및 경로 최적화**: 기록 페이지와 대시보드 간의 연결을 매끄럽게 다듬고, 서비스 전반의 경로(Route) 구조를 더욱 효율적으로 재구성했습니다.

#### 📱 사용자 경험(UX) 향상

- **앱 업데이트 속도 개선**: 웹 앱(PWA) 사용 시 최신 버전을 더 빠르게 적용할 수 있도록 업데이트 설정을 최적화했습니다.
- **서비스 안정성 강화**: 내부 시스템 구조를 체계적으로 정리하여 더욱 빠르고 안정적인 서비스 환경을 구축했습니다.

## v0.6.0 (2026-05-02)

릴리즈 노트를 정리했습니다.

### 🚀 신규 기능 및 개선 사항

- **크루 초대 경험 개선**: 초대 링크를 클릭했을 때 크루 가입 모달이 즉시 표시되지 않던 문제를 수정하여 가입 과정이 더욱 매끄러워졌습니다.
- **실시간 데이터 동기화**: 정보 모달을 열 때마다 최신 데이터를 다시 불러오도록 개선하여 항상 정확한 정보를 확인할 수 있습니다.
- **내비게이션 편의성 향상**: 기록 페이지에서 대시보드로 바로 이동할 수 있도록 경로와 버튼 동작을 최적화했습니다.
- **앱 업데이트 가속화**: PWA(Progressive Web App) 환경에서 새로운 버전이 배포되었을 때 보다 즉각적으로 업데이트가 반영되도록 설정했습니다.

### 🛠 버그 수정

- **크루 가입 로직 안정화**: 유효하지 않은 방식으로 크루에 가입되던 보안 및 논리 오류를 수정했습니다.
- **라우팅 경로 정규화**: 서비스 내부의 이동 경로를 더욱 직관적으로 정리했습니다.

### ⚙️ 시스템 최적화

- **성능 및 안정성 강화**: Vite 7 및 최신 TypeScript 환경으로 업그레이드하여 앱의 반응 속도와 시스템 안정성을 높였습니다.
- **데이터 처리 구조 고도화**: 내부 데이터베이스(Supabase) 연동 로직을 리팩토링하여 향후 기능 확장이 용이하도록 기반을 다졌습니다.

## v0.5.1 (2026-05-02)

### 🚀 주요 업데이트

#### ⚡️ 앱 로딩 및 실행 속도 개선

- **화면 지연 로딩(Lazy Loading) 적용**: 앱을 처음 켤 때 모든 데이터를 한꺼번에 불러오지 않고, 필요한 시점에 나누어 불러오도록 최적화했습니다. 이로 인해 초기 로딩 시간이 단축되고 데이터 소모가 줄어들었습니다.
- **최신 구동 엔진 교체**: 앱의 기반이 되는 시스템(Vite 7)을 최신 버전으로 업데이트하여 전반적인 반응 속도와 화면 전환이 더욱 매끄러워졌습니다.

#### 👥 크루 선택 환경 고도화

- **크루 선택 페이지 안정화**: 사용자가 참여할 크루를 탐색하고 선택하는 과정에서의 시각적 완성도를 높이고, 화면 구성의 안정성을 강화했습니다.

#### 🛠 서비스 안정성 강화

- **최신 보안 및 시스템 패치**: 내부 시스템(TypeScript 등)을 최신 상태로 유지하여 잠재적인 오류를 방지하고, 더욱 쾌적하고 안전한 서비스 이용 환경을 구축했습니다.

## v0.5.0 (2026-05-02)

### 🚀 주요 개선 사항

- **초대 링크 참여 경험 개선**: 초대 링크를 통해 접속했을 때 크루 참여 모달이 즉시 열리지 않던 현상을 수정했습니다. 이제 링크 클릭 한 번으로 더 빠르게 크루에 합류할 수 있습니다.
- **데이터 연동 안정성 강화**: 내부 데이터 처리 방식을 최적화하여 서비스 이용 중 발생할 수 있는 오류를 줄이고, 보다 안정적인 환경을 구축했습니다.

### 🛠 시스템 업데이트

- **개발 및 품질 관리 환경 고도화**: 모바일 중심의 UI 환경을 더 정교하게 테스트할 수 있는 시스템을 도입하여, 향후 더 높은 퀄리티의 기능을 빠르게 제공할 수 있는 기반을 마련했습니다.
- **인프라 최적화**: 데이터베이스 마이그레이션 및 관리 효율을 높이기 위한 내부 시스템 업데이트가 진행되었습니다.

## v0.4.1 (2026-05-02)

### 🛡️ 데이터 연동 및 시스템 안정성 강화

- **데이터 관리 체계 고도화**: 내부 데이터 처리 방식(Supabase API)을 개선하여 더욱 빠르고 안정적인 서비스 환경을 구축했습니다.
- **데이터베이스 정합성 보완**: 데이터베이스 동기화 과정에서 발생하던 오류를 해결하여, 사용자의 러닝 기록과 크루 정보가 보다 정확하고 안전하게 관리되도록 수정했습니다.

### 🛠️ 서비스 품질 유지 및 최적화

- **시스템 자동화 및 검증 강화**: 코드 품질 관리 시스템을 최적화하여 향후 기능 업데이트 시 발생할 수 있는 오류를 사전에 방지하고, 지속적으로 안정적인 서비스를 제공할 수 있는 기반을 마련했습니다.

## v0.4.0 (2026-05-02)

### ✨ 신규 기능

- **크루 참여 승인제**: 공개 크루에 참여 신청을 하면 크루장의 승인 후 입장이 가능합니다. 크루장은 관리자 설정 화면에서 대기 중인 참여 요청을 승인하거나 거절할 수 있습니다.
- **초대 링크**: 크루 초대 코드가 포함된 링크(\`/invite/코드\`)로 바로 접속하면 해당 크루의 참여 화면이 즉시 표시됩니다. 초대 링크를 통한 참여는 승인 없이 즉시 가입됩니다.
- **전체 기간 랭킹**: 랭킹 화면에서 주간·월간 외에 전체 기간(ALL-TIME) 기준 랭킹을 확인할 수 있습니다.

### 📱 사용성 개선

- **크루 카드 레이아웃 개선**: 크루 목록의 입장/참여 버튼이 카드 우측 중앙에 배치되어 더 보기 편해졌습니다.
- **랭킹 아바타 표시**: 랭킹 목록에서 각 멤버의 프로필 아바타가 표시됩니다.

## v0.3.0 (2026-05-02)

### ✨ 신규 기능

- **카카오톡 공유**: 크루 초대 코드를 카카오톡으로 바로 공유할 수 있습니다. 크루 정보 모달에서 '카카오 초대' 버튼을 눌러보세요.
- **크루 공개/비공개 설정**: 크루 생성 시 공개 여부를 선택할 수 있습니다. 비공개 크루는 이름 검색에 노출되지 않으며, 초대 코드로만 참여할 수 있습니다.

### 📱 사용성 개선

- **크루 아이콘 표시 개선**: 페이지 상단 헤더와 크루 목록에 크루 아이콘이 표시됩니다.
- **크루 카드 공개 뱃지**: 크루 목록에서 공개/비공개 상태를 한눈에 확인할 수 있습니다.

## v0.2.0 (2026-05-01)

버전 업데이트 소식입니다.

### 📱 사용성 개선

- **홈 화면 아이콘 개선**: iOS 기기에서 홈 화면에 추가했을 때 앱 아이콘이 더 선명하게 보이도록 PNG 형식으로 최적화했습니다. 이제 아이폰에서도 런씨(RUNC) 아이콘을 더 깔끔하게 만나보실 수 있습니다.

### ✨ 신규 기능

- **업데이트 알림창 추가**: 새로운 기능이나 변경 사항이 있을 때, 앱 접속 시 릴리즈 노트를 바로 확인하실 수 있는 알림창 기능을 추가했습니다. 런씨의 발전 과정을 가장 먼저 확인해보세요.

## v0.1.0 (2026-05-01)

커밋 내역을 바탕으로 작성한 릴리즈 노트입니다.

### 🚀 주요 신규 기능

- **RUNC 정식 서비스 런칭**: 러닝 크루 활동을 위한 통합 플랫폼 RUNC가 시작되었습니다.
- **크루 관리 시스템**: 원하는 러닝 크루를 선택하고 소속되어 활동할 수 있는 시스템이 구축되었습니다.
- **AI 러닝 인증 분석**: 러닝 기록 이미지를 업로드하면 AI가 자동으로 데이터를 분석하여 기록을 인증해줍니다.

### ✨ 디자인 및 UX 개선

- **UI/UX 전면 리뉴얼**: 사용자 편의를 위해 더 직관적이고 세련된 디자인으로 앱 환경을 개선했습니다.
- **크루 데이터 격리 및 보안**: 소속된 크루 내에서만 데이터를 안전하게 공유하고 관리할 수 있도록 보안을 강화했습니다.
- **모바일 앱(PWA) 지원**: 모바일 웹 브라우저에서 '홈 화면에 추가' 기능을 통해 실제 앱처럼 간편하게 실행할 수 있습니다.
- **AI 분석 성능 고도화**: 러닝 기록 이미지 인식 엔진을 개선하여 데이터 추출의 정확도를 높였습니다.

### 🛠️ 주요 수정 사항

- **로그인 안정화**: 카카오 소셜 로그인 과정에서 발생하던 연결 오류를 수정했습니다.
- **앱 아이콘 및 실행 최적화**: 모바일 환경에서 앱 아이콘이 표시되지 않던 문제와 실행 안정성을 개선했습니다.
`;function Va({isOpen:n,onClose:e}){return n?G.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200",children:G.jsxs("div",{className:"bg-zinc-900 w-full max-w-lg max-h-[80vh] rounded-2xl border border-zinc-800 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200",children:[G.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/50 sticky top-0 z-10",children:[G.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[G.jsx("span",{className:"w-2 h-2 rounded-full bg-neon-yellow animate-pulse"}),"업데이트 소식"]}),G.jsx("button",{onClick:e,className:"p-2 hover:bg-zinc-800 rounded-full transition-colors text-zinc-400 hover:text-white",children:G.jsx(yr,{size:20})})]}),G.jsx("div",{className:"flex-1 overflow-y-auto px-6 py-6 custom-scrollbar",children:G.jsx("div",{className:`prose prose-invert prose-zinc max-w-none 
            prose-headings:text-white prose-headings:font-bold prose-h2:text-xl prose-h2:mt-0 prose-h2:mb-4
            prose-h3:text-neon-yellow prose-h3:text-sm prose-h3:uppercase prose-h3:tracking-wider prose-h3:mt-6 prose-h3:mb-3
            prose-p:text-zinc-400 prose-p:leading-relaxed
            prose-ul:text-zinc-400 prose-li:my-1 prose-li:marker:text-neon-yellow/50`,children:G.jsx(Da,{children:Ba})})}),G.jsx("div",{className:"p-4 border-t border-zinc-800 bg-zinc-900/50",children:G.jsx("button",{onClick:e,className:"w-full bg-neon-yellow text-black font-bold py-3 rounded-xl hover:opacity-90 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(204,255,0,0.2)]",children:"확인했습니다"})})]})}):null}export{Va as default};
