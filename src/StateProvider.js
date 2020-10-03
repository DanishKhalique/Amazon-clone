import React, { createContext, useContext, useReducer } from 'react';

// Prepares the Data Layer
export const StateContext = createContext();

// Wrap our app and provide the data layer to every component in our app
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
