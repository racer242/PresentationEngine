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


(lib._07 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-824,-836.6)).s().p("EhHPATSMAAAgmjMCOeAAAMAAAAmjg");
	this.shape.setTransform(455.95,123.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._07, new cjs.Rectangle(0,0,911.9,246.9), null);


(lib._06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-852.7,-523.6)).s().p("AygcsMAAAg5XMAg0AAAIAAAKIENAAMAAAA5Ng");
	this.shape.setTransform(118.525,183.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._06, new cjs.Rectangle(0,0,237.1,367.1), null);


(lib._05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-1125.6,-526.6)).s().p("A4Hc/MAAAg5+MAwPAAAMAAAA5+g");
	this.shape.setTransform(154.4,185.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._05, new cjs.Rectangle(0,0,308.8,371.1), null);


(lib._03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-1112.1,-296)).s().p("A6OHCIAAuDMA0dAAAIAAODg");
	this.shape.setTransform(167.875,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._03, new cjs.Rectangle(0,0,335.8,90), null);


(lib._02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-979.1,-206)).s().p("EgvAAG4IAAtvMBeBAAAIAANvg");
	this.shape.setTransform(300.925,44.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._02_1, new cjs.Rectangle(0,0,601.9,88.1), null);


(lib._01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-338.1,-505.1)).s().p("Eg00ggWMBppAAAMAAABAsMhppAABg");
	this.shape.setTransform(338.1,207.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._01_1, new cjs.Rectangle(0,0,676.2,414.2), null);


// stage content:
(lib.tyzine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stop00:14});

	// Buttons
	this.goto00tyzine4 = new lib.AreaButton();
	this.goto00tyzine4.name = "goto00tyzine4";
	this.goto00tyzine4.setTransform(977.05,717.15,2.419,0.7395);
	new cjs.ButtonHelper(this.goto00tyzine4, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.goto00tyzine7 = new lib.AreaButton();
	this.goto00tyzine7.name = "goto00tyzine7";
	this.goto00tyzine7.setTransform(754,717.15,2.2193,0.7395);
	new cjs.ButtonHelper(this.goto00tyzine7, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.goto00tyzine9 = new lib.AreaButton();
	this.goto00tyzine9.name = "goto00tyzine9";
	this.goto00tyzine9.setTransform(576.1,717.15,1.7592,0.7395);
	new cjs.ButtonHelper(this.goto00tyzine9, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.goto00tyzine3 = new lib.AreaButton();
	this.goto00tyzine3.name = "goto00tyzine3";
	this.goto00tyzine3.setTransform(370.15,717.15,2.0397,0.7395);
	new cjs.ButtonHelper(this.goto00tyzine3, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.goto00tyzine2 = new lib.AreaButton();
	this.goto00tyzine2.name = "goto00tyzine2";
	this.goto00tyzine2.setTransform(971.2,256.05,2.4905,0.7395);
	new cjs.ButtonHelper(this.goto00tyzine2, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.goto00tyzine2},{t:this.goto00tyzine3},{t:this.goto00tyzine9},{t:this.goto00tyzine7},{t:this.goto00tyzine4}]},9).wait(11));

	// Layer_3
	this.instance = new lib._01_1();
	this.instance.setTransform(338.1,455.15,1,1,0,0,0,338.1,207.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:505.15,alpha:1},9,cjs.Ease.get(1)).wait(11));

	// Layer_8
	this.instance_1 = new lib._02_1();
	this.instance_1.setTransform(979.05,156,1,1,0,0,0,300.9,44);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({y:206,alpha:1},9,cjs.Ease.get(1)).wait(8));

	// Layer_7
	this.instance_2 = new lib._03();
	this.instance_2.setTransform(1112.05,296.05,1,1,0,0,0,167.8,45);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},9,cjs.Ease.get(1)).wait(11));

	// Layer_6
	this.instance_3 = new lib._06();
	this.instance_3.setTransform(802.65,523.65,1,1,0,0,0,118.5,183.6);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:852.65,alpha:1},9,cjs.Ease.get(1)).wait(11));

	// Layer_5
	this.instance_4 = new lib._05();
	this.instance_4.setTransform(1175.6,526.65,1,1,0,0,0,154.4,185.6);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:1125.6,alpha:1},9,cjs.Ease.get(1)).wait(11));

	// Layer_4
	this.instance_5 = new lib._07();
	this.instance_5.setTransform(824,866.55,1,1,0,0,0,455.9,123.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).to({y:836.55,alpha:1},9,cjs.Ease.get(1)).wait(8));

	// Layer_1
	this.instance_6 = new lib._01();
	this.instance_6.setTransform(0,0,0.5926,0.5926);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,480,690,510);
// library properties:
lib.properties = {
	id: '284D0C179085334E961662CC8FA93117',
	width: 1280,
	height: 960,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/_01.jpg?1674325227857", id:"_01"},
		{src:"images/_02.png?1674325227857", id:"_02"}
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