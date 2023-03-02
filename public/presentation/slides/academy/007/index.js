(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[1282,0,201,201],[1110,324,261,178],[0,569,621,151],[0,324,1108,243],[0,722,1280,69],[0,0,1280,322]]}
];


// symbols:



(lib.CachedBmp_12 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
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


(lib._01_3 = function() {
	this.initialize(img._01_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2160,1620);


(lib._01_4 = function() {
	this.initialize(img._01_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2160,1620);


(lib._01pngcopy = function() {
	this.initialize(img._01pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2160,1620);


(lib._01pngcopy2 = function() {
	this.initialize(img._01pngcopy2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2160,1620);


(lib._01pngcopy3 = function() {
	this.initialize(img._01pngcopy3);
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
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(0,0,0.4976,0.4976);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib._04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(83,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._04, new cjs.Rectangle(83,0,261,178), null);


(lib._03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(153.95,16.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._03, new cjs.Rectangle(154,16.1,621,151), null);


(lib._02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(121.95,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._02_1, new cjs.Rectangle(122,0,1108,243), null);


(lib._01_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._01_5, new cjs.Rectangle(0,0,1280,69), null);


// stage content:
(lib.academy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{page0:24,stop00:27,page1:34,stop01:37,page2:44,stop02:47,page3:54,stop03:57,page4:64,stop04:67,page5:74,stop05:77,page6:84,stop06:87,page7:94,stop07:97});

	// timeline functions:
	this.frame_0 = function() {
		window.addEventListener("message", (function(event) {
			if ((event.data)&&(event.data.event=="broadcast")&&(event.data.data[0]=="frame")) {
				this.gotoAndStop(event.data.data[1]);
			}	
		}).bind(this))
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(120));

	// Layer_10
	this.dispatch00frame_page0 = new lib.AreaButton();
	this.dispatch00frame_page0.name = "dispatch00frame_page0";
	this.dispatch00frame_page0.setTransform(470.7,148.1,0.7056,0.91);
	this.dispatch00frame_page0._off = true;
	new cjs.ButtonHelper(this.dispatch00frame_page0, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.dispatch00frame_page0).wait(34).to({_off:false},0).wait(10).to({x:712.3,y:217.1},0).wait(10).to({x:883.3,y:184.15},0).wait(10).to({x:951.3,y:217.1},0).wait(10).to({x:1115.65,y:221.15},0).wait(10).to({x:909.7,y:215.1},0).wait(9).to({x:1149.65,y:144.15},0).to({_off:true},11).wait(16));

	// Layer_14
	this.instance = new lib._01pngcopy3();
	this.instance.setTransform(0,0,0.5926,0.5926);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(93).to({_off:false},0).to({_off:true},11).wait(16));

	// Layer_13
	this.instance_1 = new lib._01pngcopy2();
	this.instance_1.setTransform(0,0,0.5926,0.5926);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(84).to({_off:false},0).to({_off:true},9).wait(27));

	// Layer_12
	this.instance_2 = new lib._01pngcopy();
	this.instance_2.setTransform(0,0,0.5926,0.5926);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(74).to({_off:false},0).to({_off:true},10).wait(36));

	// Layer_11
	this.instance_3 = new lib._01_3();
	this.instance_3.setTransform(0,0,0.5926,0.5926);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(64).to({_off:false},0).to({_off:true},10).wait(46));

	// Layer_9
	this.instance_4 = new lib._01_4();
	this.instance_4.setTransform(0,0,0.5926,0.5926);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(54).to({_off:false},0).to({_off:true},10).wait(56));

	// Layer_8
	this.instance_5 = new lib._01();
	this.instance_5.setTransform(0,0,0.5926,0.5926);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(44).to({_off:false},0).to({_off:true},10).wait(66));

	// Layer_7
	this.instance_6 = new lib._01_1();
	this.instance_6.setTransform(0,0,0.5926,0.5926);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(34).to({_off:false},0).to({_off:true},10).wait(76));

	// Buttons
	this.dispatch00frame_page7 = new lib.AreaButton();
	this.dispatch00frame_page7.name = "dispatch00frame_page7";
	this.dispatch00frame_page7.setTransform(1140.75,515.1,0.5054,1.14);
	new cjs.ButtonHelper(this.dispatch00frame_page7, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.dispatch00frame_page6 = new lib.AreaButton();
	this.dispatch00frame_page6.name = "dispatch00frame_page6";
	this.dispatch00frame_page6.setTransform(900.75,515.1,0.5054,1.14);
	new cjs.ButtonHelper(this.dispatch00frame_page6, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.dispatch00frame_page5 = new lib.AreaButton();
	this.dispatch00frame_page5.name = "dispatch00frame_page5";
	this.dispatch00frame_page5.setTransform(832.75,515.1,0.5054,1.14);
	new cjs.ButtonHelper(this.dispatch00frame_page5, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.dispatch00frame_page4 = new lib.AreaButton();
	this.dispatch00frame_page4.name = "dispatch00frame_page4";
	this.dispatch00frame_page4.setTransform(661.75,515.1,0.5054,1.14);
	new cjs.ButtonHelper(this.dispatch00frame_page4, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.dispatch00frame_page3 = new lib.AreaButton();
	this.dispatch00frame_page3.name = "dispatch00frame_page3";
	this.dispatch00frame_page3.setTransform(592.3,515.1,0.5054,1.14);
	new cjs.ButtonHelper(this.dispatch00frame_page3, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.dispatch00frame_page2 = new lib.AreaButton();
	this.dispatch00frame_page2.name = "dispatch00frame_page2";
	this.dispatch00frame_page2.setTransform(420.75,515.1,0.5054,1.14);
	new cjs.ButtonHelper(this.dispatch00frame_page2, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.dispatch00frame_page1 = new lib.AreaButton();
	this.dispatch00frame_page1.name = "dispatch00frame_page1";
	this.dispatch00frame_page1.setTransform(175.75,515.1,0.5054,1.14);
	new cjs.ButtonHelper(this.dispatch00frame_page1, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.dispatch00frame_page1},{t:this.dispatch00frame_page2},{t:this.dispatch00frame_page3},{t:this.dispatch00frame_page4},{t:this.dispatch00frame_page5},{t:this.dispatch00frame_page6},{t:this.dispatch00frame_page7}]},9).to({state:[]},25).wait(86));

	// Buttons
	this.goto00academy6 = new lib.AreaButton();
	this.goto00academy6.name = "goto00academy6";
	this.goto00academy6.setTransform(450,340.95,2.0096,0.5694);
	this.goto00academy6._off = true;
	new cjs.ButtonHelper(this.goto00academy6, 0, 1, 2, false, new lib.AreaButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.goto00academy6).wait(9).to({_off:false},0).to({_off:true},25).wait(86));

	// Layer_6
	this.instance_7 = new lib.CachedBmp_7();

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120));

	// Layer_5
	this.instance_8 = new lib._01_5();
	this.instance_8.setTransform(640,326.65,1,1,0,0,0,640,34.5);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:356.65,alpha:1},9,cjs.Ease.get(1)).wait(111));

	// Layer_4
	this.instance_9 = new lib._02_1();
	this.instance_9.setTransform(640,542.55,1,1,0,0,0,640,121.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3).to({_off:false},0).to({y:512.55,alpha:1},9,cjs.Ease.get(1)).wait(108));

	// Layer_3
	this.instance_10 = new lib._03();
	this.instance_10.setTransform(437.6,797.05,1,1,0,0,0,387.6,162.9);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(8).to({_off:false},0).to({x:387.6,alpha:1},9,cjs.Ease.get(1)).wait(103));

	// Layer_2
	this.instance_11 = new lib._04();
	this.instance_11.setTransform(1077.55,797.05,1,1,0,0,0,252.3,162.9);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(13).to({_off:false},0).to({x:1027.55,alpha:1},9,cjs.Ease.get(1)).wait(98));

	// Layer_1
	this.instance_12 = new lib._01_2();
	this.instance_12.setTransform(0,0,0.5926,0.5926);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(120));

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
		{src:"images/_01.png", id:"_01"},
		{src:"images/_01_1.png", id:"_01_1"},
		{src:"images/_01_2.jpg", id:"_01_2"},
		{src:"images/_01_3.png", id:"_01_3"},
		{src:"images/_01_4.png", id:"_01_4"},
		{src:"images/_01pngcopy.png", id:"_01pngcopy"},
		{src:"images/_01pngcopy2.png", id:"_01pngcopy2"},
		{src:"images/_01pngcopy3.png", id:"_01pngcopy3"},
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