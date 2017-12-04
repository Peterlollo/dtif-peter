export const START_PLAY = 'therapy/START_PLAY'
export const STOP_PLAY = 'therapy/STOP_PLAY'

const initialState = {
  playing: false,
  dogCount: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case START_PLAY:
      return {
        ...state,
        playing: true,
        dogCount: action.dogCount
      }

    case STOP_PLAY:
      return {
        ...state,
        playing: false,
        dogCount: ''
      }

    default:
      return state
  }
}

export const startPlay = (dogCount) => {
  return ({ type: START_PLAY, dogCount })
}

export const stopPlay = () => {
  return ({ type: STOP_PLAY })
}
