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
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-1060.5,-795.4)).s().p("EgiSAZuMAAAgzbMBElAAAMAAAAzbg");
	this.shape.setTransform(219.475,164.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._04, new cjs.Rectangle(0,0,439,329.1), null);


(lib._03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-420.5,-795.4)).s().p("EhBsAZuMAAAgzbMCDZAAAMAAAAzbg");
	this.shape.setTransform(420.525,164.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._03, new cjs.Rectangle(0,0,841.1,329.1), null);


(lib._02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-640,-510.9)).s().p("Ehj/ASwMAAAglfMDH/AAAMAAAAlfg");
	this.shape.setTransform(640,119.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._02_1, new cjs.Rectangle(0,0,1280,240), null);


(lib._01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-640,-355.5)).s().p("Ehj/AFiIAArDMDH/AAAIAALDg");
	this.shape.setTransform(640,35.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._01_1, new cjs.Rectangle(0,0,1280,70.9), null);


// stage content:
(lib.academy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stop00:22});

	// Buttons
	this.open00link1 = new lib.AreaButton();
	this.open00link1.name = "open00link1";
	this.open00link1.setTransform(327.55,737.2,3.286,0.5);
	new cjs.ButtonHelper(this.open00link1, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.show00popup5 = new lib.AreaButton();
	this.show00popup5.name = "show00popup5";
	this.show00popup5.setTransform(1140.95,519.05,0.53,1.1502,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.show00popup5, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.show00popup4 = new lib.AreaButton();
	this.show00popup4.name = "show00popup4";
	this.show00popup4.setTransform(901,519.05,0.53,1.1502,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.show00popup4, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.show00popup3 = new lib.AreaButton();
	this.show00popup3.name = "show00popup3";
	this.show00popup3.setTransform(626,519.05,0.53,1.1502,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.show00popup3, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.show00popup2 = new lib.AreaButton();
	this.show00popup2.name = "show00popup2";
	this.show00popup2.setTransform(452,519.05,0.53,1.1502,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.show00popup2, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.show00popup1 = new lib.AreaButton();
	this.show00popup1.name = "show00popup1";
	this.show00popup1.setTransform(178,519.05,0.53,1.1502,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.show00popup1, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.goto00academy2 = new lib.AreaButton();
	this.goto00academy2.name = "goto00academy2";
	this.goto00academy2.setTransform(451,335.95,2,0.65);
	new cjs.ButtonHelper(this.goto00academy2, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.goto00academy2},{t:this.show00popup1},{t:this.show00popup2},{t:this.show00popup3},{t:this.show00popup4},{t:this.show00popup5},{t:this.open00link1}]},9).wait(16));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-640,-160.1)).s().p("Ehj/gZAMDH/AAAMAAAAyAMjH/AABg");
	this.shape.setTransform(640,160.0625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(25));

	// Layer_7
	this.instance = new lib._01_1();
	this.instance.setTransform(640,325.5,1,1,0,0,0,640,35.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:355.5,alpha:1},9,cjs.Ease.get(1)).wait(16));

	// Layer_6
	this.instance_1 = new lib._02_1();
	this.instance_1.setTransform(640,540.95,1,1,0,0,0,640,120);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({y:510.95,alpha:1},9,cjs.Ease.get(1)).wait(13));

	// Layer_5
	this.instance_2 = new lib._03();
	this.instance_2.setTransform(470.5,795.5,1,1,0,0,0,420.5,164.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({x:420.5,alpha:1},9,cjs.Ease.get(1)).wait(8));

	// Layer_3
	this.instance_3 = new lib._04();
	this.instance_3.setTransform(1110.55,795.5,1,1,0,0,0,219.5,164.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).to({x:1060.55,alpha:1},9,cjs.Ease.get(1)).wait(3));

	// Layer_1
	this.instance_4 = new lib._01();
	this.instance_4.setTransform(0,0,0.5926,0.5926);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25));

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
		{src:"images/_01.jpg?1674252974607", id:"_01"},
		{src:"images/_02.png?1674252974607", id:"_02"}
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