export const appInit = () => {
  return {
    type: 'APP_INIT',
  }
}

export const setStoreData = (data) => {
  return {
    type: 'SET_STORE_DATA',
    data:{
      ...data,
      dataLoaded:true,
      loadDataError:false,
    },
  }
}

export const loadStoreDataError = (data) => {
  return {
    type: 'LOAD_STORE_DATA_ERROR',
    data:{
      ...data,
      dataLoaded:false,
      loadDataError:true,
    },
  }
}
