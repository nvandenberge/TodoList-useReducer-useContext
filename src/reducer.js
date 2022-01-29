import { ACTIONS } from "./const";

export const initialState = [];

export const reducer = (state, action) => {  
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [
        ...state,
        {
          id: state.length,
          text: action.payload,
          completed: false,
        },
      ];
    case ACTIONS.TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case ACTIONS.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};





