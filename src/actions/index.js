export const TYPE = {
  TOGGLE_TODO: 'TOGGLE_TODO',
  ADD_TODO: 'ADD_TODO',
  SELECTED_BTN: 'SELECTED_BTN'
}

export const addTodoAction = description => ({ type: TYPE.ADD_TODO, payload: {description} })
export const toggleTodoAction = id => ({ type: TYPE.TOGGLE_TODO, payload: {id} })
export const selectedBtnAction = btnName => ({ type: TYPE.SELECTED_BTN, payload: {btnName} })