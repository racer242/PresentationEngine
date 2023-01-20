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
p.nominalBounds = new cjs.Rectangle(0,0,2160,1620);


(lib._03 = function() {
	this.initialize(img._03);
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


(lib._03_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._03, null, new cjs.Matrix2D(0.593,0,0,0.593,-1126.1,-627)).s().p("EgQ2A0CMAAAhnvInMAAIAAgUMAwFAAAMAAABoDg");
	this.shape.setTransform(153.875,332.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._03_1, new cjs.Rectangle(0,0,307.8,666), null);


(lib._02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._03, null, new cjs.Matrix2D(0.593,0,0,0.593,-875.2,-628)).s().p("EgWVAz4MAAAgp3ILkiWMAAAg3yIrkAAIAAjwMAsrAAAMAAABnvg");
	this.shape.setTransform(143.025,331.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._02_1, new cjs.Rectangle(0,0,286.1,664), null);


(lib._01111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-427.6,-661.1)).s().p("EhCzAJYIAAyvMCFnAAAIAASvg");
	this.shape.setTransform(427.625,60.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._01111, new cjs.Rectangle(0,0,855.3,120.1), null);


(lib._0111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-428.1,-549.1)).s().p("EhC4AIIIAAwPMCFxAAAIAAQPg");
	this.shape.setTransform(428.125,52);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._0111, new cjs.Rectangle(0,0,856.3,104), null);


(lib._011 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-428.1,-445.1)).s().p("EhC4AIIIAAwPMCFxAAAIAAQPg");
	this.shape.setTransform(428.125,52.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._011, new cjs.Rectangle(0,0,856.3,104.1), null);


(lib._01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-428.1,-345.5)).s().p("EhC4AHbIAAu1MCFxAAAIAAO1g");
	this.shape.setTransform(428.125,47.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._01_1, new cjs.Rectangle(0,0,856.3,95), null);


// stage content:
(lib.tyzine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stop00:19});

	// Buttons
	this.show00popup1 = new lib.AreaButton();
	this.show00popup1.name = "show00popup1";
	this.show00popup1.setTransform(1183.6,794.2,0.7482,0.86,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.show00popup1, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.goto00tyzine6 = new lib.AreaButton();
	this.goto00tyzine6.name = "goto00tyzine6";
	this.goto00tyzine6.setTransform(175.1,797.8,0.7301,0.7551,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.goto00tyzine6, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.goto00tyzine4 = new lib.AreaButton();
	this.goto00tyzine4.name = "goto00tyzine4";
	this.goto00tyzine4.setTransform(23.6,797.8,0.7301,0.7551,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.goto00tyzine4, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.goto00tyzine4},{t:this.goto00tyzine6},{t:this.show00popup1}]}).wait(20));

	// Layer_3
	this.instance = new lib._02_1();
	this.instance.setTransform(845.2,627.95,1,1,0,0,0,143,331.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:875.2,alpha:1},9,cjs.Ease.get(1)).wait(7));

	// Layer_2
	this.instance_1 = new lib._03_1();
	this.instance_1.setTransform(1156.05,626.95,1,1,0,0,0,153.8,332.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({x:1126.05,alpha:1},9,cjs.Ease.get(1)).wait(7));

	// Layer_8
	this.instance_2 = new lib._01_1();
	this.instance_2.setTransform(428.1,315.55,1,1,0,0,0,428.1,47.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:345.55,alpha:1},9,cjs.Ease.get(1)).wait(11));

	// Layer_7
	this.instance_3 = new lib._011();
	this.instance_3.setTransform(428.1,415.05,1,1,0,0,0,428.1,52);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({y:445.05,alpha:1},9,cjs.Ease.get(1)).wait(9));

	// Layer_6
	this.instance_4 = new lib._0111();
	this.instance_4.setTransform(428.1,519.1,1,1,0,0,0,428.1,52);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({y:549.1,alpha:1},9,cjs.Ease.get(1)).wait(7));

	// Layer_5
	this.instance_5 = new lib._01111();
	this.instance_5.setTransform(427.6,631.1,1,1,0,0,0,427.6,60);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({y:661.1,alpha:1},9,cjs.Ease.get(1)).wait(5));

	// Layer_1
	this.instance_6 = new lib._01();
	this.instance_6.setTransform(0,0,0.5926,0.5926);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,480,670,480);
// library properties:
lib.properties = {
	id: '284D0C179085334E961662CC8FA93117',
	width: 1280,
	height: 960,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/_01.jpg?1674224569949", id:"_01"},
		{src:"images/_02.png?1674224569949", id:"_02"},
		{src:"images/_03.png?1674224569949", id:"_03"}
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