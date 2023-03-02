(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib._01 = function() {
	this.initialize(img._01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,1200);


(lib._02 = function() {
	this.initialize(img._02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,1200);


(lib._02_1 = function() {
	this.initialize(img._02_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,1200);


(lib._02_2 = function() {
	this.initialize(img._02_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,1200);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.AreaButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,255,0.902)").s().p("AnzH0IAAvnIPnAAIAAPng");
	this.shape.setTransform(50,50);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib._02_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02_2, null, new cjs.Matrix2D(0.8,0,0,0.8,-640,-510.1)).s().p("Ehj/AjpMAAAhEdMCMWAAAIAAi0MA7pAAAMAAABHRg");
	this.shape.setTransform(640,228.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._02_3, new cjs.Rectangle(0,0,1280,456.1), null);


(lib._01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02_2, null, new cjs.Matrix2D(0.8,0,0,0.8,-1139.1,-210.1)).s().p("A2AH0IAAvnMAsBAAAIAAPng");
	this.shape.setTransform(140.875,50.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._01_1, new cjs.Rectangle(0,0,281.8,100.1), null);


// stage content:
(lib.hexoral = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{page0:14,stop00:19,page1:24,stop01:29,page2:34,stop02:39});

	// timeline functions:
	this.frame_0 = function() {
		window.addEventListener("message", (function(event) {
			if ((event.data)&&(event.data.event=="broadcast")&&(event.data.data[0]=="frame")) {
				this.gotoAndPlay(event.data.data[1]);
			}	
		}).bind(this))
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49));

	// Buttons
	this.show00popup1 = new lib.AreaButton();
	this.show00popup1.name = "show00popup1";
	this.show00popup1.setTransform(1169.95,783.05);
	this.show00popup1._off = true;
	new cjs.ButtonHelper(this.show00popup1, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.show00popup1).wait(13).to({_off:false},0).wait(36));

	// Layer_10
	this.dispatch00frame_page1 = new lib.AreaButton();
	this.dispatch00frame_page1.name = "dispatch00frame_page1";
	this.dispatch00frame_page1.setTransform(1155.7,676.05,0.6254,0.692,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.dispatch00frame_page1, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.dispatch00frame_page2 = new lib.AreaButton();
	this.dispatch00frame_page2.name = "dispatch00frame_page2";
	this.dispatch00frame_page2.setTransform(1155.7,675.25,0.6254,0.692,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.dispatch00frame_page2, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.dispatch00frame_page0 = new lib.AreaButton();
	this.dispatch00frame_page0.name = "dispatch00frame_page0";
	this.dispatch00frame_page0.setTransform(1155.7,606.05,0.6254,0.692,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.dispatch00frame_page0, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.dispatch00frame_page1,p:{y:676.05}}]},14).to({state:[{t:this.dispatch00frame_page0},{t:this.dispatch00frame_page2}]},10).to({state:[{t:this.dispatch00frame_page1,p:{y:603.05}}]},10).wait(15));

	// Buttons
	this.instance = new lib._02();
	this.instance.setTransform(0,0,0.8,0.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).to({_off:true},10).wait(5));

	// Buttons
	this.instance_1 = new lib._02_1();
	this.instance_1.setTransform(0,0,0.8,0.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({_off:true},10).wait(15));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02_2, null, new cjs.Matrix2D(0.8,0,0,0.8,-640,-541)).s().p("EBSjBBeIAA7yIRdAAIAAbygEhj/gloIAA71MCMWAAAIAAb1g");
	this.shape.setTransform(640,541.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(49));

	// Layer_4
	this.instance_2 = new lib._01_1();
	this.instance_2.setTransform(1139.05,210.05,1,1,0,0,0,140.8,50);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},9,cjs.Ease.get(1)).wait(40));

	// Layer_2
	this.instance_3 = new lib._02_3();
	this.instance_3.setTransform(640,480.2,1,1,0,0,0,640,228.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({y:510.2,alpha:1},9,cjs.Ease.get(1)).to({_off:true},11).wait(25));

	// Layer_1
	this.instance_4 = new lib._01();
	this.instance_4.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,480,640,480);
// library properties:
lib.properties = {
	id: '284D0C179085334E961662CC8FA93117',
	width: 1280,
	height: 960,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/_01.jpg?1676038868155", id:"_01"},
		{src:"images/_02.png?1676038868155", id:"_02"},
		{src:"images/_02_1.png?1676038868155", id:"_02_1"},
		{src:"images/_02_2.png?1676038868155", id:"_02_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['284D0C179085334E961662CC8FA93117'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;