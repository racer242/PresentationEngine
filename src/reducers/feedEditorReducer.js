let feedEditorReducer = (state={}, action) => {
  switch (action.type) {

    case 'OPEN_FEED_EDITOR': {
      return {
        ...state,
        feedsEditorisActive: true,
      };
    }

    case 'CLOSE_FEED_EDITOR':{
      return {
        ...state,
        feedsEditorisActive: false,
      }
    }

    case 'FEED_EDITOR_CHANGE_TABS':{
      let value = action.data.value;
      return {
        ...state,
        tabValue: value,
      }
    }

    case 'FEED_EDITOR_DELETE_TAB':{
      let testFeeds = state.testFeeds;
      let feedsContent = state.feedsContent;
      let index = state.activeTab;
      testFeeds.splice(index);
      feedsContent.splice(index);
      return {
        ...state,
        testFeeds,
        feedsContent,
    }
  }

    case 'FEED_EDITOR_ADD_TAB':{
      let feedsArray = Object.keys(state.testFeeds);
      let newFeedTitle = '';
      let activeFeedTitle = feedsArray[action.data.index_1];
      let feedArr = activeFeedTitle.split('');
      let fre = Number(feedArr[feedArr.length-1]);
      if (typeof fre === 'number' && isNaN(fre) === false) {
          fre +=1;
          newFeedTitle = `${feedsArray[action.data.index_1]}_${fre}`;
      } else {
        newFeedTitle = `${feedsArray[action.data.index_1]}_1`;
      }
      let feedsContent = state.feedsContent;
      let newFeedContent = feedsContent[action.data.index_1];
      let testFeeds = state.testFeeds;
      testFeeds[newFeedTitle] = newFeedContent;
      feedsContent.push(newFeedContent);
      return {
        ...state,
        testFeeds,
        feedsContent,
      }
    }

    default:
    return state
  }

}


export default feedEditorReducer
