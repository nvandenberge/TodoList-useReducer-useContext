import { createContext, useReducer } from 'react';
import { reducer, initialState } from './reducer';

export const TodoContext = createContext();

export const Store = ({ children }) => {
    const [todos, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
        {children}
    </TodoContext.Provider>
  )
};

export default Store;
