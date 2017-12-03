export const IS_FETCHING = 'dogs/IS_FETCHING'
export const FETCH_SUCCESS = 'dogs/FETCH_SUCCESS'
export const FETCH_ERROR = 'dogs/FETCH_ERROR'

const initialState = {
  dogs: [],
  isFetching: false,
  fetchSuccess: false,
  fetchError: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_FETCHING:
      return {
        ...state,
        isFetching: 'nope',
        fetchSuccess: false
      }

    case FETCH_SUCCESS:
      return {
        ...state,
        dogs: action.data,
        isFetching: false,
        fetchSuccess: true,
        fetchError: null
      }

    case FETCH_ERROR:
      return {
        ...state,
        isFetching: false,
        fetchSuccess: false,
        fetchError: action.error
      }

    default:
      return state
  }
}

export const fetchError = (error) => {
  return { type: FETCH_ERROR, error }
}

export const fetchSuccess = (data) => {
  return { type: FETCH_SUCCESS, data }
}

export const fetchDogs = () => {
  return dispatch => {
    dispatch({ type: IS_FETCHING })
    fetch('https://data.austintexas.gov/resource/h8x4-nvyi.json')
      .then((res) => {
      	return res.json()
      }).then(
      	data => dispatch(fetchSuccess(data)),
        error => dispatch(fetchError(error))
      )
  }
}