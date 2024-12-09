const example2 = storeApi => next => action => {
    console.log('from exampl2 state is ', storeApi.getState())
    if(action.type === 'tags/ADD_TAG') setTimeout(() => console.log('action payload', action.payload), 2000)
    next(action)
}

export default example2