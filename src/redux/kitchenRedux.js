import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAll = ({orders}) => orders.data;
export const getLoadingState = ({orders}) => orders.loading;


/* action name creator */
const reducerName = 'orders';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const ORDER_UPDATE = createActionName('ORDER_UPDATE');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const updateStarted = (order, status) => ({ order, status, type: ORDER_UPDATE });

/* thunk creators */
export const fetchFromAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
  
    Axios
      .get(`${api.url}/${api.orders}`)
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};
  
export const orderStatusUpdate = (order, status) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/${api.orders}`)
      .then(() => {
        dispatch(updateStarted(order, status));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case ORDER_UPDATE: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: statePart.data.map(order => order.order === action.order ? {...order, status: action.status} : order),
      };
    }
    default:
      return statePart;
  }
}
