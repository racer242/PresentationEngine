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


(lib._05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-811,-771.2)).s().p("EhJRAKKIAA0TMCSiAAAIAAUTg");
	this.shape.setTransform(468.95,65.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._05, new cjs.Rectangle(0,0,937.9,130.1), null);


(lib._04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._03, null, new cjs.Matrix2D(0.593,0,0,0.593,-995.1,-611.2)).s().p("EgsgAPKIAA+TMBZBAAAIAAeTg");
	this.shape.setTransform(284.9,97.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._04, new cjs.Rectangle(0,0,569.8,194.1), null);


(lib._03_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-1077.1,-474.1)).s().p("A/sQkIAAjcIJEAAIAA9rMA2VAAAMAAAAhHg");
	this.shape.setTransform(202.875,106.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._03_1, new cjs.Rectangle(0,0,405.8,212.1), null);


(lib._02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-776.2,-279.1)).s().p("EgUTArnMAAAglNIkEAAMAAAgyAMAwvAAAMAAABXNg");
	this.shape.setTransform(156.025,279.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._02_1, new cjs.Rectangle(0,0,312.1,558.2), null);


(lib._01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._02, null, new cjs.Matrix2D(0.593,0,0,0.593,-323.1,-513.1)).s().p("EgyeAeLMAAAg8VMBk9AAAMAAAA8Vg");
	this.shape.setTransform(323.1,193.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._01_1, new cjs.Rectangle(0,0,646.2,386.1), null);


// stage content:
(lib.rinza = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stop00:22});

	// Buttons
	this.goto00rinza2 = new lib.AreaButton();
	this.goto00rinza2.name = "goto00rinza2";
	this.goto00rinza2.setTransform(971.5,290,2.501,0.86,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.goto00rinza2, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.show00popup1 = new lib.AreaButton();
	this.show00popup1.name = "show00popup1";
	this.show00popup1.setTransform(1183.6,794.2,0.7482,0.86,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.show00popup1, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.show00popup3 = new lib.AreaButton();
	this.show00popup3.name = "show00popup3";
	this.show00popup3.setTransform(976.05,706.2,2.4493,0.86,0,0,0,0.3,0);
	new cjs.ButtonHelper(this.show00popup3, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.show00popup2 = new lib.AreaButton();
	this.show00popup2.name = "show00popup2";
	this.show00popup2.setTransform(754.65,706.2,2.1694,0.86,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.show00popup2, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.goto00rinza9 = new lib.AreaButton();
	this.goto00rinza9.name = "goto00rinza9";
	this.goto00rinza9.setTransform(577.55,706.2,1.7399,0.86,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.goto00rinza9, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.goto00rinza3 = new lib.AreaButton();
	this.goto00rinza3.name = "goto00rinza3";
	this.goto00rinza3.setTransform(367.3,706.2,2.08,0.86,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.goto00rinza3, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.goto00rinza3},{t:this.goto00rinza9},{t:this.show00popup2},{t:this.show00popup3},{t:this.show00popup1},{t:this.goto00rinza2}]}).wait(25));

	// Layer_2
	this.instance = new lib._04();
	this.instance.setTransform(1045.1,611.15,1,1,0,0,0,284.9,97);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({x:995.1,alpha:1},9,cjs.Ease.get(1)).wait(6));

	// Layer_6
	this.instance_1 = new lib._02_1();
	this.instance_1.setTransform(826.2,279.1,1,1,0,0,0,156,279.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({x:776.2,alpha:1},9,cjs.Ease.get(1)).wait(12));

	// Layer_5
	this.instance_2 = new lib._03_1();
	this.instance_2.setTransform(1127.05,474.1,1,1,0,0,0,202.8,106);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({x:1077.05,alpha:1},9,cjs.Ease.get(1)).wait(9));

	// Layer_7
	this.instance_3 = new lib._01_1();
	this.instance_3.setTransform(323.1,483.2,1,1,0,0,0,323.1,193.1);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:513.2,alpha:1},9,cjs.Ease.get(1)).wait(16));

	// Layer_4
	this.instance_4 = new lib._05();
	this.instance_4.setTransform(811,801.2,1,1,0,0,0,468.9,65);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({y:771.2,alpha:1},9,cjs.Ease.get(1)).wait(12));

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
		{src:"images/_01.jpg?1674311901589", id:"_01"},
		{src:"images/_02.png?1674311901589", id:"_02"},
		{src:"images/_03.png?1674311901589", id:"_03"}
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