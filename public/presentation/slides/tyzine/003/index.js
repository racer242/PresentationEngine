(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib._01 = function() {
	this.initialize(img._01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2160,1620);


(lib._02 = function() {
	this.initialize(img._02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2160,1620);// helper functions:

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


(lib._06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-1028.8,-620.6)).s().p("A+OQLMAAAggVIN6AAIAAAeMAk3AAAIAAgeIJsAAMAAAAgVg");
	this.shape.setTransform(193.525,103.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._06, new cjs.Rectangle(0,0,387.1,207.1), null);


(lib._05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-642.7,-620.1)).s().p("A+FQQMAAAggfIHWAAIAAAoMArwAAAIAAgoIJFAAMAAAAgfg");
	this.shape.setTransform(192.55,104.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._05, new cjs.Rectangle(0,0,385.1,208.1), null);


(lib._04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-252.1,-621.1)).s().p("A92QGMAAAggLIKUAAIAAAUMAqMAAAIAAgUIHNAAMAAAAgLg");
	this.shape.setTransform(191.05,103.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._04, new cjs.Rectangle(0,0,382.1,206.1), null);


(lib._03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-1042.3,-260.1)).s().p("EgSbAopMAAAhRRMAk3AAAMAAABRRg");
	this.shape.setTransform(118.025,260.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._03, new cjs.Rectangle(0,0,236.1,520.2), null);


(lib._02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-637.2,-260.1)).s().p("EgV3AopMAAAhRRMArvAAAMAAABRRg");
	this.shape.setTransform(140.025,260.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._02_1, new cjs.Rectangle(0,0,280.1,520.2), null);


(lib._01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-262.1,-260.1)).s().p("EgVFAopMAAAhRRMAqLAAAMAAABRRg");
	this.shape.setTransform(135.025,260.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._01_1, new cjs.Rectangle(0,0,270.1,520.2), null);


// stage content:
(lib.tyzine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stop00:19});

	// Buttons
	this.show00popup1 = new lib.AreaButton();
	this.show00popup1.name = "show00popup1";
	this.show00popup1.setTransform(1183.6,794.2,0.7482,0.86,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.show00popup1, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.show00popup1).wait(25));

	// Layer_7
	this.instance = new lib._01_1();
	this.instance.setTransform(262.05,230.1,1,1,0,0,0,135,260.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:260.1,alpha:1},9,cjs.Ease.get(1)).wait(16));

	// Layer_6
	this.instance_1 = new lib._02_1();
	this.instance_1.setTransform(637.15,230.1,1,1,0,0,0,140,260.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({y:260.1,alpha:1},9,cjs.Ease.get(1)).wait(13));

	// Layer_5
	this.instance_2 = new lib._03();
	this.instance_2.setTransform(1042.25,230.1,1,1,0,0,0,118,260.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({y:260.1,alpha:1},9,cjs.Ease.get(1)).wait(10));

	// Layer_4
	this.instance_3 = new lib._04();
	this.instance_3.setTransform(252.15,651.1,1,1,0,0,0,191.1,103);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:621.1,alpha:1},9,cjs.Ease.get(1)).wait(16));

	// Layer_3
	this.instance_4 = new lib._05();
	this.instance_4.setTransform(642.75,650.1,1,1,0,0,0,192.6,104);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).to({y:620.1,alpha:1},9,cjs.Ease.get(1)).wait(13));

	// Layer_2
	this.instance_5 = new lib._06();
	this.instance_5.setTransform(1028.75,650.6,1,1,0,0,0,193.5,103.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({y:620.6,alpha:1},9,cjs.Ease.get(1)).wait(10));

	// Layer_1
	this.instance_6 = new lib._01();
	this.instance_6.setTransform(0,0,0.5926,0.5926);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,450,640,510);
// library properties:
lib.properties = {
	id: '284D0C179085334E961662CC8FA93117',
	width: 1280,
	height: 960,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/_01.jpg?1674223592727", id:"_01"},
		{src:"images/_02.png?1674223592727", id:"_02"}
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