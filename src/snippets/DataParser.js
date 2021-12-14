import settings from '../Settings'

class DataParser {

  parse(data) {

    let visitIndex=1;
    let steps = data.template.STEP.reduce((o,v,i)=>{
      let leaveChief=((v.D)?v.D:"").toString();
      let step={
        id:v.A,
        index:i,
        smallTitle:v.B,
        order:v.C,
        leaveChief1:leaveChief.indexOf("1")>=0,
        leaveChief2:leaveChief.indexOf("2")>=0,
        isVisit:(v.A)?(v.A.toString().indexOf("VISIT")>=0):false,
        locations:{
          list:[],
          index:{},
        }
      };
      if (step.isVisit) {
        step.visitIndex=visitIndex;
        visitIndex++;
      }
      o.list.push(step);
      o.index[step.id]=step;
      return o;
    },{list:[],index:{}})

    steps.list.sort((a,b)=>{
      if (a.order<b.order) return -1;
      if (a.order>b.order) return 1;
      return 0;
    });

    let locations = data.template.LOCATION.reduce((o,v,i)=>{
      let location={
        id:v.A,
        title:v.B,
        pinX:v.E,
        pinY:v.F,
        src:settings.locationUrl().replace('{id}',v.A),
        isChief:v.D!=null,
        isActive:false,//v.D!=null,
        targets:{
          list:[],
          index:{},
        },
        decorations:{}
      }
      let parse = v.C.split(", ");
      parse.forEach((s,i)=>{
        steps.index[s.trim()].locations.list.push(location.id);
        steps.index[s.trim()].locations.index[location.id]=location.id;
      });

      if (v.G) {
        parse = v.G.split(", ");
        location.decorations=parse.reduce((o,s,i)=>{
          let sId=s.trim();
          o[sId]=settings.decorUrl().replace("{id0}",sId).replace("{id1}",location.id);
          return o;
        },{});
      }
      o.list.push(location);
      o.index[location.id]=location;
      return o;
    },{list:[],index:{}});

    let persons = data.template.PERSON.reduce((o,v,i)=>{
      let person={
        id: v.A,
        name:v.B,
        brief:v.D,
        description:v.C,
        summary:v.E
      }
      o.list.push(person);
      o.index[v.A]=person;
      return o;
    },{list:[],index:{}});

    let dialogues = {};

    let parseImage = (source) => {
      if (!source) return "";
      source=source.replace('image(your_dir_image_speak_/','').replace('image(your_dir_image_wait_/','').replace(')','').replace('jpg','png');
      return source;
    }


    for (let dialogueId in data.dialogues) {
      let dialogueData = data.dialogues[dialogueId];
      if ((dialogueData)&&(dialogueData.questions)) {
        let dialogue={
          firstQuestion:dialogueData.first_question
        };

        dialogue.reflexies=dialogueData.reflexy.reduce((o,v,i)=>{
          let reflexy = {
            id:v.id,
            success:v.success,
            text:v.data.text
          }
          o.list.push(reflexy);
          o.index[reflexy.id]=reflexy;
          return o;
        },{list:[],index:{}});

        dialogue.stages=dialogueData.stages.reduce((o,v,i)=>{
          let stage = {
            id:v.num,
            scoreMax:v.score_max,
            slug:v.slug,
            title:v.title,
            text:v.text
          }
          o.list.push(stage);
          o.index[stage.id]=stage;
          return o;
        },{list:[],index:{}});

        dialogue.questions=dialogueData.questions.reduce((o,v,i)=>{
          let question = {
            id:v.id,
            speakSrc:parseImage(v.image_speak),
            waitSrc:parseImage(v.image_wait),
            text:v.text
          }
          if (v.variants) {
            question.variants = v.variants.reduce((oo,vv,ii)=>{
              let variant = {
                id:vv.id,
                text:vv.text,
                nextStep:(vv.reflexy)?vv.reflexy.next_step:null,
                nextReflexy:(vv.reflexy)?vv.reflexy.next_reflexy:null,
                stages:vv.stages
              }
              oo.list.push(variant);
              oo.index[variant.id]=variant;
              return oo;
            },{list:[],index:{}});
          }
          o.list.push(question);
          o.index[question.id]=question;
          return o;
        },{list:[],index:{}});

        dialogues[dialogueId]=dialogue;

      }
    }

    let dialogueObjects = data.template.DIALOGUE.reduce((o,v,i)=>{
      if (!v.E||!v.F||!v.A) return o;

      let dialogueData=dialogues[v.A];
      let parsePhone=(v.G)?v.G.split("+"):[null,null];
      let person=persons.index[v.B];
      let resourceId=(v.P)?v.B+"_"+v.P:v.B;

      let dialogue={
        photoSrc:'',
        taskId: '',
        type:"Dialogue",
        isActive: true,

        id:v.A,
        runOnStart:(v.D)?(v.D.toString()!=="0")?true:false:false,
        order:v.D,
        stepId:v.E,
        phoneDialogueId:parsePhone[0],
        phoneDialogueDelay:parsePhone[1]*1000,
        happiness:v.H,
        maxScore:v.Q,
        x: v.I,
        y: v.J,
        title: v.O,
        src:settings.visualObjectUrl().replace('{id}',v.A),//resourceId),
        dialogue:
        {
          id:v.A,
          src:settings.dialogueImageUrl().replace('{id0}',resourceId).replace('{id1}',resourceId),//State
          bubbleX:v.K,
          bubbleY:v.L,
          personX:v.M,
          personY:v.N,
          isPhone:false,
          person:person,
          ...dialogueData
        }
      };

      let location=locations.index[v.F];
      if (location) {
        dialogue.isChief=location.isChief;
        let target={id:dialogue.id,type:dialogue.type};
        location.targets.list.push(target);
        location.targets.index[target.id]=target;
      }

      o.list.push(dialogue);
      o.index[v.A]=dialogue;
      return o;
    },{list:[],index:{}});

    let requestToHiddenObjectMap={};

    let hiddenObjects = data.template.HIDDEN.reduce((o,v,i)=>{

      let hiddenObject={

        type: "HiddenObject",
        status: "OK",
        taskId: "",
        isActive: false,

        id: v.A,
        title: v.B,
        serviceTitle:v.C,
        stepToFinished:v.D,
        happiness:v.E,
        locationId:v.F,
        stepToProblem:v.G,
        initialStatus:v.H,
        requestId:(v.I)?v.I:v.J,
        // statusToRequestIdMap:{
        //   PROBLEM:v.J
        // },
        statusToActionIdMap:{
          PROBLEM:v.K?v.K.split(/\s*,\s*/):null,
          NOT_FINISHED:v.L?v.L.split(/\s*,\s*/):null,
          FINISHED:v.M?v.M.split(/\s*,\s*/):null
        },
        checklist:{
          title:v.N,
          score:(v.O)?v.O:0,
          agreement:v.P,
        },

        x: v.Q,
        y: v.R,

        srcMap:{
          // OK:settings.visualObjectUrl().replace('{id}',v.A+'_OK'),
          PROBLEM:settings.visualObjectUrl().replace('{id}',v.A+'_PROBLEM'),
          NOT_FINISHED:settings.visualObjectUrl().replace('{id}',v.A+'_NOT_FINISHED'),
          FINISHED:settings.visualObjectUrl().replace('{id}',v.A+'_FINISHED'),
        },
        photoSrcMap:{
          // OK:settings.hiddenObjectPhotoUrl().replace('{id}',v.A+'_OK'),
          PROBLEM:settings.hiddenObjectPhotoUrl().replace('{id}',v.A+'_PROBLEM'),
          NOT_FINISHED:settings.hiddenObjectPhotoUrl().replace('{id}',v.A+'_NOT_FINISHED'),
          FINISHED:settings.hiddenObjectPhotoUrl().replace('{id}',v.A+'_FINISHED'),
        },

        noRequest:(v.S)?(v.S.toString()==="1"):false,

      }

      requestToHiddenObjectMap[hiddenObject.requestId]=hiddenObject.id;

      let location=locations.index[v.F];
      if (location) {
        let target={id:hiddenObject.id,type:hiddenObject.type};
        location.targets.list.push(target);
        location.targets.index[target.id]=target;
      }

      o.list.push(hiddenObject);
      o.index[v.A]=hiddenObject;
      return o;
    },{list:[],index:{}});


    let requests = data.template.TICKET.reduce((o,v,i)=>{
      let end = (steps.index[v.F])?steps.index[v.F].smallTitle:"";
      let endIndex = (steps.index[v.F])?steps.index[v.F].index:0;

      let hiddenObjectId = requestToHiddenObjectMap[v.A];
      let hiddenObject = hiddenObjects.index[hiddenObjectId];
      let locationId = "";
      let locationTitle = "";
      if (hiddenObject) {
        locationId=hiddenObject.locationId;
        let location = locations.index[locationId];
        if (location) {
          locationTitle = location.title;
        }
      }


      let request={
        isNew:false,
        isGenerated:false,

        id:v.A,

        hiddenObjectId:hiddenObjectId,
        locationId:locationId,
        locationTitle:locationTitle,

        index:v.B,
        title:v.C,
        existsAtStart:(((v.D)?v.D.toString():"")==="1"),
        initialStatus:v.E,
        end:end,
        endStepId:v.F,
        endStepIndex:endIndex,
        progressStateActionId:v.G?v.G.split(/\s*,\s*/):null,
        lazyProgressStateActionId:v.H?v.H.split(/\s*,\s*/):null,
        urgentResolvedStateActionId:v.I?v.I.split(/\s*,\s*/):null,
        resolvesOnNextStep:(((v.J)?v.J.toString():"")==="1"),
      };

      o.list.push(request);
      o.index[request.id]=request;
      return o;
    },{list:[],index:{}});


    let actions = data.template.PHONE.reduce((o,v,i)=>{
      let dialogueData=dialogues[v.A];
      let person=persons.index[v.B];
      let parsePhone=(v.H)?v.H.split("+"):[null,null];
      let dialogue={
        type:"Dialogue",
        isActive: true,
        taskId: '',

        id:v.A,
        photoSrc:'',


        stepIdForIncoming:v.E,
        order:v.F,
        hiddenObjectIdForPopup:v.G,

        phoneDialogueId:parsePhone[0],
        phoneDialogueDelay:parsePhone[1]*1000,

        happiness:v.I,
        maxScore:v.J,

        dialogue:
        {
          id:v.A,
          src:settings.phoneDialogueImageUrl().replace('{id}',v.B),
          bubbleX:40,
          bubbleY:15,
          personX:0,
          personY:0,
          isIncoming:(((v.D)?v.D.toString():"")==="1"),
          isPhone:true,
          person:person,
          ...dialogueData
        }

      };

      o.list.push(dialogue);
      o.index[dialogue.id]=dialogue;
      return o;
    },{list:[],index:{}});

    actions = data.template.RADIO.reduce((o,v,i)=>{
      let correctIndex=(v.C)?v.C.substr(-1):-1;
      let quiz={
        id:v.A,
        type:"Quiz",
        isActive: true,
        title:v.B,
      };

      quiz.options=[];
      if (v.D&&v.E) {quiz.options.push({question:v.D,answer:v.E,isCorrect:(correctIndex==="1")})};
      if (v.F&&v.G) {quiz.options.push({question:v.F,answer:v.G,isCorrect:(correctIndex==="2")})};
      if (v.H&&v.I) {quiz.options.push({question:v.H,answer:v.I,isCorrect:(correctIndex==="3")})};
      if (v.J&&v.K) {quiz.options.push({question:v.J,answer:v.J,isCorrect:(correctIndex==="4")})};
      if (v.L&&v.M) {quiz.options.push({question:v.L,answer:v.M,isCorrect:(correctIndex==="5")})};

      quiz.correctIndex=correctIndex-1;

      o.list.push(quiz);
      o.index[quiz.id]=quiz;
      return o;
    },actions);

    let parameters = {
      phoneDialogueInterval:data.template.PARAM[0].B*1000,
      phoneDialogueDispersion:data.template.PARAM[1].B*1000,
      penalty1StepDelay:data.template.PARAM[2].B,
      penalty2StepDelay:data.template.PARAM[3].B,
      penalty3StepDelay:data.template.PARAM[4].B,
      penalty4StepDelay:data.template.PARAM[5].B,
      wrongChiefVisitCount:data.template.PARAM[6].B,
      testVisitStepId:data.template.PARAM[7].B,
      testAppStepId:data.template.PARAM[8].B,
      testAppStepPhoneId:data.template.PARAM[9].B,//"PHONE_3",
      penaltyAutoRequest:data.template.PARAM[10].B,
      penaltyRepeatRequest:data.template.PARAM[11].B,
      happynessStart:data.template.PARAM[12].B,
      happynessFromDialogue:data.template.PARAM[13].B,
      happynessFromHiddenObjects:data.template.PARAM[14].B,
      happynessFromHiddenObjects1Score:data.template.PARAM[15].B,
      happynessFromDialogues1Score:data.template.PARAM[16].B,
      dissatisfactionFromAutoRequest:data.template.PARAM[17].B,

      happynessFromService:{
        economicRate:data.template.PARAM[18].B,
        technicalRate:data.template.PARAM[19].B,
        engineeringRate:data.template.PARAM[20].B,
      },

      happynessSuccessStatusThreshhold:data.template.PARAM[21].B,

      testCleaningId:data.template.PARAM[22].B,
      testTableId:data.template.PARAM[23].B,
      testCleaningDialogueId:data.template.PARAM[24].B,
      testTableDialogueId:data.template.PARAM[25].B,

      backOfficePhoneIds:data.template.PARAM[26].B.split(/\s*,\s*/),

      testVisitStepStepId:data.template.PARAM[27].B,
      noCheckHiddenObjects:data.template.PARAM[28].B.split(/\s*,\s*/),

    }

    let texts = {
      startText:data.template.TEXT[0].B,
      wrongFirstVisit:data.template.TEXT[1].B,
      wrongSecondVisit:data.template.TEXT[2].B,
      leaveLocationWarning:data.template.TEXT[3].B,
      hiddenObjectSolveMenu:data.template.TEXT[4].B,
      hiddenObjectRequestMenu:data.template.TEXT[5].B,
      hiddenObjectSkipMenu:data.template.TEXT[6].B,
      connectionLostError:data.template.TEXT[7].B,
      requestExistsWarning:data.template.TEXT[8].B,
      exitVisitTopMenu:data.template.TEXT[9].B,
      exitWorkTopMenu:data.template.TEXT[10].B,
      service1TopMenu:data.template.TEXT[11].B,
      service2TopMenu:data.template.TEXT[12].B,
      service3TopMenu:data.template.TEXT[13].B,
      qualityLost:data.template.TEXT[14].B,
      dialoguePopupTitle:data.template.TEXT[15].B,
      hiddenObjectPopupTitle:data.template.TEXT[16].B,

      summaryPassedText:data.template.TEXT[52].B,
      summaryFailedText:data.template.TEXT[53].B,

      checklistNotCompletedText:data.template.TEXT[70].B,

      startTexts:[
        data.template.TEXT[79].B,
        data.template.TEXT[80].B,
        data.template.TEXT[81].B,
        data.template.TEXT[82].B,
      ],

      checklistIsCorrectText:data.template.TEXT[89].B,
      checklistIsNotCorrectText:data.template.TEXT[90].B,
      workIsNotFinishedText:data.template.TEXT[87].B,

      welcomeToFirstVisit:data.template.TEXT[92].B,

    }

    let helperTexts = {
      vkHappiness:data.template.TEXT[18].B,
      vkQuests:data.template.TEXT[19].B,
      help:data.template.TEXT[20].B,
      normalScreen:data.template.TEXT[21].B,
      fullScreen:data.template.TEXT[22].B,
      exit:data.template.TEXT[23].B,
      locations:data.template.TEXT[24].B,
      personInfo:data.template.TEXT[25].B,
      dlgAnswers:data.template.TEXT[26].B,
      finishVisit:data.template.TEXT[27].B,
      mapMenu:data.template.TEXT[28].B,
      checklistMenu:data.template.TEXT[29].B,
      requestsMenu:data.template.TEXT[30].B,
      requestStatus:data.template.TEXT[31].B,
      requestTime:data.template.TEXT[71].B,
      hiddenObject:data.template.TEXT[32].B,
      solveHiddenObject:data.template.TEXT[33].B,
      requestHiddenObject:data.template.TEXT[34].B,
      skipHiddenObject:data.template.TEXT[35].B,
      incomingCall:data.template.TEXT[36].B,
      solveRequest:data.template.TEXT[37].B,
      finishWork:data.template.TEXT[38].B,
      serviceMenu:data.template.TEXT[77].B,
      serviceMenu1:data.template.TEXT[39].B,
      serviceMenu2:data.template.TEXT[40].B,
      serviceMenu3:data.template.TEXT[41].B,
      checklistMarks:data.template.TEXT[42].B,
      transfer_VISIT_1:data.template.TEXT[43].B,
      transfer_WORK_1:data.template.TEXT[44].B,
      transfer_VISIT_2:data.template.TEXT[45].B,
      transfer_WORK_2:data.template.TEXT[46].B,
      transfer_VISIT_3:data.template.TEXT[47].B,
      transfer_WORK_3:data.template.TEXT[48].B,
      requestListCounts:data.template.TEXT[49].B,
      needToFinishWork:data.template.TEXT[50].B,
      needToFinishVisit:data.template.TEXT[54].B,
      goToChief:data.template.TEXT[58].B,
      goToLocations:data.template.TEXT[66].B,
      firstLocation:data.template.TEXT[67].B,
      requestGenerated:data.template.TEXT[69].B,
      startWork:data.template.TEXT[68].B,
      miscMenu:data.template.TEXT[78].B,

      manualChecklist:data.template.TEXT[60].B,
      manualChecklistObjectArea:data.template.TEXT[61].B,
      manualChecklistScores:data.template.TEXT[62].B,
      manualChecklistTitle:data.template.TEXT[72].B,
      manualChecklistClose:data.template.TEXT[73].B,
      needToChecklist:data.template.TEXT[74].B,
      autoChecklist:data.template.TEXT[75].B,
      autoChecklistPart2:data.template.TEXT[91].B,
      compareChecklist:data.template.TEXT[84].B,

      callToBackOffice:data.template.TEXT[83].B,

      generatedRequests:data.template.TEXT[93].B,

      serviceTarget:data.template.TEXT[94].B,

    }

    return {
      steps:steps,
      locations:locations,
      hiddenObjects:hiddenObjects,
      dialogueObjects:dialogueObjects,
      requests:requests,
      actions:actions,
      parameters:parameters,
      texts:texts,
      helperTexts:helperTexts,
    };

  }

}

export default DataParser;


// import { base64Images } from "../images"
// var lib, images, createjs;
// images=base64Images;
// createjs=window.createjs;
//
// export default lib;
