(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[707,410,191,191],[622,249,318,159],[0,249,620,169],[0,0,1114,247],[0,562,551,64],[0,420,705,140]]}
];


// symbols:



(lib.CachedBmp_6 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._01 = function() {
	this.initialize(img._01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2160,1620);


(lib._01_1 = function() {
	this.initialize(img._01_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2160,1620);


(lib._01_2 = function() {
	this.initialize(img._01_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2160,1620);


(lib._01pngcopy = function() {
	this.initialize(img._01pngcopy);
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
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(0,0,0.5248,0.5248);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100.3,100.3);


(lib._04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(58.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._04, new cjs.Rectangle(58.8,0,318,159), null);


(lib._03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(154.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._03, new cjs.Rectangle(154.1,0,620,169), null);


(lib._02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(115.15,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._02_1, new cjs.Rectangle(115.2,0,1114,247), null);


(lib._01_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(404.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._01_3, new cjs.Rectangle(404.2,0,551,64), null);


// stage content:
(lib.academy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{page0:24,stop00:27,page1:34,stop01:37,page2:44,stop02:47,page3:54,stop03:57});

	// timeline functions:
	this.frame_0 = function() {
		window.addEventListener("message", (function(event) {
			if ((event.data)&&(event.data.event=="broadcast")&&(event.data.data[0]=="frame")) {
				this.gotoAndStop(event.data.data[1]);
			}	
		}).bind(this))
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(69));

	// Layer_10
	this.dispatch00frame_page0 = new lib.AreaButton();
	this.dispatch00frame_page0.name = "dispatch00frame_page0";
	this.dispatch00frame_page0.setTransform(699.7,217.1,0.7056,0.91);
	this.dispatch00frame_page0._off = true;
	new cjs.ButtonHelper(this.dispatch00frame_page0, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.dispatch00frame_page0).wait(34).to({_off:false},0).wait(10).to({x:927.7},0).wait(10).to({x:917.7},0).wait(15));

	// Layer_9
	this.instance = new lib._01pngcopy();
	this.instance.setTransform(0,0,0.5926,0.5926);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).to({_off:true},10).wait(5));

	// Layer_8
	this.instance_1 = new lib._01_1();
	this.instance_1.setTransform(0,0,0.5926,0.5926);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({_off:false},0).to({_off:true},10).wait(15));

	// Layer_7
	this.instance_2 = new lib._01_2();
	this.instance_2.setTransform(0,0,0.5926,0.5926);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).to({_off:true},10).wait(25));

	// Buttons
	this.dispatch00frame_page3 = new lib.AreaButton();
	this.dispatch00frame_page3.name = "dispatch00frame_page3";
	this.dispatch00frame_page3.setTransform(910.3,515.1,0.5054,0.91);
	new cjs.ButtonHelper(this.dispatch00frame_page3, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.dispatch00frame_page2 = new lib.AreaButton();
	this.dispatch00frame_page2.name = "dispatch00frame_page2";
	this.dispatch00frame_page2.setTransform(638.75,515.1,0.5054,0.91);
	new cjs.ButtonHelper(this.dispatch00frame_page2, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.dispatch00frame_page1 = new lib.AreaButton();
	this.dispatch00frame_page1.name = "dispatch00frame_page1";
	this.dispatch00frame_page1.setTransform(413.7,515.1,0.5054,0.91);
	new cjs.ButtonHelper(this.dispatch00frame_page1, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.dispatch00frame_page1},{t:this.dispatch00frame_page2},{t:this.dispatch00frame_page3}]},9).to({state:[]},25).wait(35));

	// Buttons
	this.goto00academy3 = new lib.AreaButton();
	this.goto00academy3.name = "goto00academy3";
	this.goto00academy3.setTransform(719.75,343.1,1.9055,0.5);
	this.goto00academy3._off = true;
	new cjs.ButtonHelper(this.goto00academy3, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.goto00academy3).wait(9).to({_off:false},0).to({_off:true},25).wait(35));

	// Layer_3
	this.instance_3 = new lib.CachedBmp_1();
	this.instance_3.setTransform(335.55,188.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(69));

	// Layer_6
	this.instance_4 = new lib._01_3();
	this.instance_4.setTransform(640,330.1,1,1,0,0,0,640,32);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:360.1,alpha:1},9,cjs.Ease.get(1)).wait(60));

	// Layer_5
	this.instance_5 = new lib._02_1();
	this.instance_5.setTransform(640,545.6,1,1,0,0,0,640,123.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).to({y:515.6,alpha:1},9,cjs.Ease.get(1)).wait(57));

	// Layer_4
	this.instance_6 = new lib._03();
	this.instance_6.setTransform(437.1,799.55,1,1,0,0,0,387.1,160.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({x:387.1,alpha:1},9,cjs.Ease.get(1)).wait(52));

	// Layer_2
	this.instance_7 = new lib._04();
	this.instance_7.setTransform(1077.05,799.55,1,1,0,0,0,252.8,160.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(12).to({_off:false},0).to({x:1027.05,alpha:1},9,cjs.Ease.get(1)).wait(48));

	// Layer_1
	this.instance_8 = new lib._01();
	this.instance_8.setTransform(0,0,0.5926,0.5926);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(69));

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
		{src:"images/_01.jpg", id:"_01"},
		{src:"images/_01_1.png", id:"_01_1"},
		{src:"images/_01_2.png", id:"_01_2"},
		{src:"images/_01pngcopy.png", id:"_01pngcopy"},
		{src:"images/_02.png", id:"_02"},
		{src:"images/index_atlas_.png", id:"index_atlas_"}
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