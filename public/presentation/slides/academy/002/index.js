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


(lib._04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-1027.1,-799.6)).s().p("EgngAZEMAAAgyHMBPBAAAMAAAAyHg");
	this.shape.setTransform(252.875,160.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._04, new cjs.Rectangle(0,0,505.8,320.9), null);


(lib._03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-387.1,-799.6)).s().p("Eg8eAZEMAAAgyHMB49AAAMAAAAyHg");
	this.shape.setTransform(387.125,160.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._03, new cjs.Rectangle(0,0,774.3,320.9), null);


(lib._02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-640,-515.6)).s().p("Ehj/ATTMAAAgmlMDH/AAAMAAAAmlg");
	this.shape.setTransform(640,123.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._02_1, new cjs.Rectangle(0,0,1280,247.1), null);


(lib._01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-640,-360.1)).s().p("Ehj/AFAIAAp/MDH/AAAIAAJ/g");
	this.shape.setTransform(640,32);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._01_1, new cjs.Rectangle(0,0,1280,64), null);


// stage content:
(lib.academy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stop00:21});

	// Buttons
	this.show00popup2 = new lib.AreaButton();
	this.show00popup2.name = "show00popup2";
	this.show00popup2.setTransform(412.75,515.1,0.5054,0.91);
	new cjs.ButtonHelper(this.show00popup2, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.show00popup1 = new lib.AreaButton();
	this.show00popup1.name = "show00popup1";
	this.show00popup1.setTransform(187.7,515.1,0.5054,0.91);
	new cjs.ButtonHelper(this.show00popup1, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.goto00academy3 = new lib.AreaButton();
	this.goto00academy3.name = "goto00academy3";
	this.goto00academy3.setTransform(719.75,343.1,1.9055,0.5);
	new cjs.ButtonHelper(this.goto00academy3, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.instance = new lib.AreaButton();
	this.instance.setTransform(321.6,737.2,3.286,0.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.goto00academy3},{t:this.show00popup1},{t:this.show00popup2}]},9).wait(16));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-640,-164)).s().p("Ehj/AZpMAAAgzRMDH/AAAMAAAAzRg");
	this.shape.setTransform(640,164.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(25));

	// Layer_6
	this.instance_1 = new lib._01_1();
	this.instance_1.setTransform(640,330.1,1,1,0,0,0,640,32);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:360.1,alpha:1},9,cjs.Ease.get(1)).wait(16));

	// Layer_5
	this.instance_2 = new lib._02_1();
	this.instance_2.setTransform(640,545.6,1,1,0,0,0,640,123.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({y:515.6,alpha:1},9,cjs.Ease.get(1)).wait(13));

	// Layer_4
	this.instance_3 = new lib._03();
	this.instance_3.setTransform(437.1,799.55,1,1,0,0,0,387.1,160.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({x:387.1,alpha:1},9,cjs.Ease.get(1)).wait(8));

	// Layer_2
	this.instance_4 = new lib._04();
	this.instance_4.setTransform(1077.05,799.55,1,1,0,0,0,252.8,160.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({x:1027.05,alpha:1},9,cjs.Ease.get(1)).wait(4));

	// Layer_1
	this.instance_5 = new lib._01();
	this.instance_5.setTransform(0,0,0.5926,0.5926);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,480,690,480);
// library properties:
lib.properties = {
	id: '284D0C179085334E961662CC8FA93117',
	width: 1280,
	height: 960,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/_01.jpg?1674209804534", id:"_01"},
		{src:"images/_02.png?1674209804534", id:"_02"}
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