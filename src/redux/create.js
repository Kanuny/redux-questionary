import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';

const initialState = {
  surveys: [],
  answers: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_SURVEY': {
      return {
        ...state,
        surveys: [...state.surveys, action.data],
      };
    }
    case 'ADD_ANSWER': { 
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.id]: [
            ...(state.answers[action.id] || []),
            action.data
          ],
        },
      };
    }
    default:
      return state;
  }
}

export function addSurvey(data) {
  return {
    type: 'ADD_SURVEY',
    data,
  };
}

export function addAnswer(id, data) {
  return {
    type: 'ADD_ANSWER',
    id,
    data,
  };
}
const savedSate = localStorage.getItem('questionary');
const nextState = JSON.parse(savedSate) || initialState;
const store = createStore(reducer, nextState, applyMiddleware(
  loggerMiddleware(),
));

store.subscribe(() => {
  localStorage
    .setItem('questionary', JSON.stringify(store.getState()));
})

window.store = store;
export default store;
