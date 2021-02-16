{
d = document;
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}
function MM_showHideLayers() { //v3.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v='hide')?'hidden':v; }
    obj.visibility=v; }
}
function dc_layerWrite(theLayer, html) {
	if ((obj=MM_findObj(theLayer))!=null) with (obj)
			obj.innerHTML = (html); 
}
function bOver(theLayer) {
  if ((obj=MM_findObj(theLayer))!=null) with (obj)
			obj.style.border= '1px #000000 solid';
			obj.style.background= '#666666';
}
function bOut(theLayer) {
  if ((obj=MM_findObj(theLayer))!=null) with (obj)
			obj.style.border= '1px #EAEAEA solid';
			obj.style.background= '#EAEAEA';
}
function setOpacity(objId, i){
	if ((obj=MM_findObj(objId))!=null) with (obj)
		if (d.all){
			obj.style.filter = "alpha(opacity=" + i + ")";
		}
		else if (d.getElementById(objId)){
			obj.style.MozOpacity = i+'%';
	}
}
function P7AniMagic(el, x, y, a, b, c, s) { //v2.5 PVII
 var g,elo=el,f="",m=false,d="";x=parseInt(x);y=parseInt(y);
 var t = 'g.p7Magic = setTimeout("P7AniMagic(\''+elo+'\','; 
 if ((g=MM_findObj(el))!=null) {d=(document.layers)?g:g.style;}else{return;}
 if (parseInt(s)>0) {eval(t+x+','+y+','+a+','+b+','+c+',0)",' + s+')');return;}
 var xx=(parseInt(d.left))?parseInt(d.left):0;
 var yy=(parseInt(d.top))?parseInt(d.top):0;
 if(parseInt(c)==1) {x+=xx;y+=yy;m=true;c=0;}
 else if (c==2) {m=false;clearTimeout(g.p7Magic);}
 else {var i=parseInt(a);
  if (eval(g.moved)){clearTimeout(g.p7Magic);}
  if (xx<x){xx+=i;m=true;if(xx>x){xx=x;}}
  if (xx>x){xx-=i;m=true;if(xx<x){xx=x;}}
  if (yy<y){yy+=i;m=true;if(yy>y){yy=y;}}
  if (yy>y){yy-=i;m=true;if(yy<y){yy=y;}}}
 if (m) {if((navigator.appName=="Netscape") && parseInt(navigator.appVersion)>4){
    xx+="px";yy+="px";}
  d.left=xx;d.top=yy;g.moved=true;eval(t+x+','+y+','+a+','+b+','+c+',0)",'+b+')');
  }else {g.moved=false;}
}
function scrollNews(el, x, y, a, b, c, s) { //v2.5 PVII
 var g,elo=el,f="",m=false,d="";x=parseInt(x);y=parseInt(y);
 var t = 'g.scrnews = setTimeout("scrollNews(\''+elo+'\','; 
 if ((g=MM_findObj(el))!=null) {d=(document.layers)?g:g.style;}else{return;}
 if (parseInt(s)>0) {eval(t+x+','+y+','+a+','+b+','+c+',0)",' + s+')');return;}
 var xx=(parseInt(d.left))?parseInt(d.left):0;
 var yy=(parseInt(d.top))?parseInt(d.top):0;
 if(parseInt(c)==1) {x+=xx;y+=yy;m=true;c=0;}
 else if (c==2) {m=false;clearTimeout(g.scrnews);}
 else {var i=parseInt(a);
  if (eval(g.moved)){clearTimeout(g.scrnews);}
  if (xx<x){xx+=i;m=true;if(xx>x){xx=x;}}
  if (xx>x){xx-=i;m=true;if(xx<x){xx=x;}}
  if (yy<y){yy+=i;m=true;if(yy>y){yy=y;}}
  if (yy>y){yy-=i;m=true;if(yy<y){yy=y;}}}
 if (m) {if((navigator.appName=="Netscape") && parseInt(navigator.appVersion)>4){
    xx+="px";yy+="px";}
  d.left=xx;d.top=yy;g.moved=true;eval(t+x+','+y+','+a+','+b+','+c+',0)",'+b+')');
  } else {
		g.style.top='0px';
		scrollNews(el,0,-1050,1,50,0,0);
  }
}
function autoScroll() {
	scrollNews('newscont',0,-1050,1,50,0,0);
}
onload=autoScroll;

function comment(objId,html) { 
	dc_layerWrite('txt', html);
	playKroNos('comTL');
	setOpacity(objId, 60);
}
function unComment(objId) { 
	dc_layerWrite('txt', '');
	backKroNos('comTL');
	setOpacity(objId, 100);
}
function playKroNos(krnName, myID) { //v1.2
  var i,j,krn,props,keyFrm,sprite,numKeyFr,firstKeyFr,propNum,theObj,firstTime=false;
  if (d.KroNos == null) initKroNos(); //if *very* 1st time
  krn = d.KroNos[krnName];
  if (myID == null) { myID = ++krn.ID; firstTime=true;}//if new call, incr ID
  if (myID == krn.ID) { //if Im newest
    setTimeout('playKroNos("'+krnName+'",'+myID+')',70);
    fNew = ++krn.curFrame;
    for (i=0; i<krn.length; i++) {
      sprite = krn[i];
      if (sprite.charAt(0) == 's') {
        if (sprite.obj) {
          numKeyFr = sprite.keyFrames.length; firstKeyFr = sprite.keyFrames[0];
          if (fNew >= firstKeyFr && fNew <= sprite.keyFrames[numKeyFr-1]) {//in range
            keyFrm=1;
            for (j=0; j<sprite.values.length; j++) {
              props = sprite.values[j]; 
              if (numKeyFr != props.length) {
                if (props.prop2 == null) sprite.obj[props.prop] = props[fNew-firstKeyFr];
                else        sprite.obj[props.prop2][props.prop] = props[fNew-firstKeyFr];
              } else {
                while (keyFrm>numKeyFr && fNew>=sprite.keyFrames[keyFrm]) keyFrm++;
                if (firstTime || fNew==sprite.keyFrames[keyFrm-1]) {
                  if (props.prop2 == null) sprite.obj[props.prop] = props[keyFrm-1];
                  else        sprite.obj[props.prop2][props.prop] = props[keyFrm-1];
        } } } } }
      } else if (sprite.charAt(0)=='b' && fNew == sprite.frame) eval(sprite.value);
      if (fNew > krn.lastFrame) krn.ID = 0;
  } } }
function backKroNos(krnName, myID) { //v3.0
  var i,j,krn,props,keyFrm,sprite,numKeyFr,firstKeyFr,propNum,theObj,firstTime=false;
  if (d.KroNos == null) initKroNos(); //if *very* 1st time
  krn = d.KroNos[krnName];
  if (myID == null) { myID = ++krn.ID; firstTime=true;}//if new call, incr ID
  if (krn.curFrame>0 && myID == krn.ID) { //if Im newest
    setTimeout('backKroNos("'+krnName+'",'+myID+')',30);
    fNew = --krn.curFrame;
    for (i=0; i<krn.length; i++) {
      sprite = krn[i];
      if (sprite.charAt(0) == 's') {
        if (sprite.obj) {
          numKeyFr = sprite.keyFrames.length; firstKeyFr = sprite.keyFrames[0];
          if (fNew >= firstKeyFr && fNew <= sprite.keyFrames[numKeyFr-1]) {//in range
            keyFrm=1;
            for (j=0; j<sprite.values.length; j++) {
              props = sprite.values[j];
              if (numKeyFr != props.length) {
                if (props.prop2 == null) sprite.obj[props.prop] = props[fNew-firstKeyFr];
                else        sprite.obj[props.prop2][props.prop] = props[fNew-firstKeyFr];
              } else {
                while (keyFrm>numKeyFr && fNew>=sprite.keyFrames[keyFrm]) keyFrm--;
                if ((firstTime || fNew==sprite.keyFrames[keyFrm-1])&&(sprite.obj.length>0)) {
                  if (props.prop2 == null) sprite.obj[props.prop] = props[keyFrm-1];
                  else        sprite.obj[props.prop2][props.prop] = props[keyFrm-1];
        } } } } }
      } else if (sprite.charAt(0)=='b' && fNew == sprite.frame) eval(sprite.value);
      if (fNew > krn.lastFrame) krn.ID = 0;
  } } }
}