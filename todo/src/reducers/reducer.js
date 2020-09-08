import React from 'react'
// Initial State
export const initialState = [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3492987589
    },
    {
      item: 'Upload pictures',
      completed: false,
      id: 3892987549
    },
    {
      item: 'Go to grocerystore',
      completed: false,
      id: 3892987589
    },
    {
      item: 'Install Lyrebird',
      completed: false,
      id: 3894987589
    },
    {
      item: 'Install Discord',
      completed: false,
      id: 3892989589
    }
  ]
// reducer function
export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'COMPLETED':
      return state
    case 'NEW_TODO':
      return [...state, {item: action.payload, completed: false, id: new Date()}]
    default:
      return state
    }
}
