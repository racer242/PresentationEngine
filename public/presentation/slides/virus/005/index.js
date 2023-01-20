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
p.nominalBounds = new cjs.Rectangle(0,0,2160,1620);


(lib._04 = function() {
	this.initialize(img._04);
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


(lib._05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._04();
	this.instance.setTransform(0,0,0.5926,0.5926);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._05, new cjs.Rectangle(0,0,1280,960), null);


(lib._04_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._03();
	this.instance.setTransform(0,0,0.5926,0.5926);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._04_1, new cjs.Rectangle(0,0,1280,960), null);


(lib._03_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-1007.1,-579.2)).s().p("EgqoAXSMAAAgujMBVRAAAMAAAAujg");
	this.shape.setTransform(272.9,149.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._03_1, new cjs.Rectangle(0,0,545.8,298.1), null);


(lib._02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-963.1,-299.1)).s().p("EgxgAUeMAAAgo8MBjBAAAMAAAAo8g");
	this.shape.setTransform(316.925,131.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._02_1, new cjs.Rectangle(0,0,633.9,262.1), null);


(lib._01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-230.1,-597.1)).s().p("Egj8AYjMAAAgxFMBH5AAAMAAAAxFg");
	this.shape.setTransform(230.075,157.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._01_1, new cjs.Rectangle(0,0,460.2,314.1), null);


// stage content:
(lib.virus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stop00:19});

	// Buttons
	this.goto00virus2 = new lib.AreaButton();
	this.goto00virus2.name = "goto00virus2";
	this.goto00virus2.setTransform(25.1,801.25,0.7,0.7);
	new cjs.ButtonHelper(this.goto00virus2, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.goto00virus6 = new lib.AreaButton();
	this.goto00virus6.name = "goto00virus6";
	this.goto00virus6.setTransform(327.15,801.25,0.7,0.7);
	new cjs.ButtonHelper(this.goto00virus6, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.goto00virus4 = new lib.AreaButton();
	this.goto00virus4.name = "goto00virus4";
	this.goto00virus4.setTransform(175.6,801.25,0.7,0.7);
	new cjs.ButtonHelper(this.goto00virus4, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.goto00virus3 = new lib.AreaButton();
	this.goto00virus3.name = "goto00virus3";
	this.goto00virus3.setTransform(99.6,801.25,0.7,0.7);
	new cjs.ButtonHelper(this.goto00virus3, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.goto00virus3},{t:this.goto00virus4},{t:this.goto00virus6},{t:this.goto00virus2}]}).wait(25));

	// Layer_7
	this.instance = new lib._01_1();
	this.instance.setTransform(230.1,547.2,1,1,0,0,0,230.1,157.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({y:597.2,alpha:1},9,cjs.Ease.get(1)).wait(12));

	// Layer_6
	this.instance_1 = new lib._02_1();
	this.instance_1.setTransform(963.05,249.15,1,1,0,0,0,316.9,131.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({y:299.15,alpha:1},9,cjs.Ease.get(1)).wait(9));

	// Layer_3
	this.instance_2 = new lib._03_1();
	this.instance_2.setTransform(1007.1,529.15,1,1,0,0,0,272.9,149);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({y:579.15,alpha:1},9,cjs.Ease.get(1)).wait(6));

	// Layer_2
	this.instance_3 = new lib._05();
	this.instance_3.setTransform(640,480,1,1,0,0,0,640,480);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},10,cjs.Ease.get(1)).wait(15));

	// Layer_5
	this.instance_4 = new lib._04_1();
	this.instance_4.setTransform(690,480,1,1,0,0,0,640,480);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:640},19,cjs.Ease.get(1)).wait(6));

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
		{src:"images/_01.jpg?1674214654703", id:"_01"},
		{src:"images/_02.png?1674214654703", id:"_02"},
		{src:"images/_03.png?1674214654703", id:"_03"},
		{src:"images/_04.png?1674214654703", id:"_04"}
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