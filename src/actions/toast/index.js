// flow
import types from '../actionTypes'

export type ShowToastMessageAction = {
  type: string,
  toast: {
    title?: string,
    content: string,
  },
}
export const showToastMessage = ({
  title = '',
  content = '',
}): ShowToastMessageAction => {
  return {
    type: types.SHOW_TOASTER,
    toast: {
      title,
      content,
    },
  }
}
