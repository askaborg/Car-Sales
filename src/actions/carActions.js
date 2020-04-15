const ADD_FEATURE = "ADD_FEATURE"
const REMOVE_FEATURE = "REMOVE_FEATURE"

export const addFeature = acc => {
    return { type: ADD_FEATURE, payload: acc }
}

export const removeFeature = id => {
    return { type: REMOVE_FEATURE, payload: id }
}