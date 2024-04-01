const initialState = {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    ErrorMessage: null,
};

const menuPostReducers = (state = initialState, action) => {
    if (action.type === "POST_MENU_PENDING") {
        return {
            ...state,
            data: null,
            isError: false,
            isSuccess: false,
            isLoading: true,
            ErrorMessage: null
        };
    } else if (action.type === "POST_MENU_SUCCESS") {
        return {
            ...state,
            data: action.payload,
            isError: false,
            isSuccess: true,
            isLoading: false,
            ErrorMessage: null
        };
    } else if (action.type === "POST_MENU_ERROR") {
        return {
            ...state,
            data: null,
            isError: true,
            isSuccess: false,
            isLoading: false,
            ErrorMessage: action.payload
        };
    } else {
        return state;
    }
};

export default menuPostReducers;
