const DELETE_CODE = 'DELETE_CODE';
const UPDATE_CODE = 'UPDATE_CODE';

export const deleteCode = () => ({
  type: DELETE_CODE,
  code: '',
});

export const updateCode = (code) => ({
  type: UPDATE_CODE,
  code,
});

const initialState = {
  code: '',
};

export const codeReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CODE: {
      return {
        ...state,
        code: '',
      };
    }
    case UPDATE_CODE: {
      return {
        ...state,
        code: action.code,
      };
    }
    default:
      return state;
  }
};
