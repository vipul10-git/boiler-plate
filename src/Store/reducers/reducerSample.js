const reducerSample = (state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) =>{
    switch (action.type) {
        case 'REQUEST_PRODUCTS':
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case 'RECEIVE_PRODUCTS':
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}

export default reducerSample