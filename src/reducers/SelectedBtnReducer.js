import { TYPE } from '../actions/index.js'

export const initialSelectedBtn = 'all'

export default (state = initialSelectedBtn, {type, payload}) => {
  switch (type) {
    case TYPE.SELECTED_BTN:
      return state = payload.btnName
    default:
      return state
  }
}