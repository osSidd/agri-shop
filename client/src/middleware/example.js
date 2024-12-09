export default function example(storeApi){
    return function wrapDispatch(next){
        return function handleAction(action){
            console.log('from example 1, state is ', storeApi.getState())
            next(action)
            // const result = next(action)
            // console.log('next state', storeApi.getState())
            // return result
        }
    }
}