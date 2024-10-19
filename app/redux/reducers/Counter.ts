import { DECREMENT, INCREMENT } from '../actions/CounterActions';

interface State {
  counter: number;
}

const initialState: State = {
  counter: 0,
};

const CounterReducer = (state: State = initialState, action:{type: string, payload: any}): State => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + (action?.payload?.by ?? 1) };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

export default CounterReducer;