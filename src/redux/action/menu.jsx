import axios from "axios";

const base_url = import.meta.env.VITE_BASE_URL;

export const getMenu = () => async (dispatch, getState) => {
    try {
        dispatch({ type: "GET_MENU_PENDING" });
        const res = await axios.get(base_url + "/recipes");
        dispatch({ type: "GET_MENU_SUCCESS", payload: res.data.data });
    } catch (err) {
        console.log(err?.message ? err.message : err);
        dispatch({ type: "GET_MENU_ERROR" });
    }
};

export const postMenu = (data,navigate) => async (dispatch, getState) => {
    try {
		let token = getState().auth.data.token
        dispatch({ type: "POST_MENU_PENDING" });
        const res = await axios.post(base_url+"/recipes",data,{
			headers: {
				"Authorization" : `Bearer ${token}`,
				"Content-Type": "multipart/form-data"
			}
		})
		console.log("res")
		console.log(res)
		if(res.data.code)
        dispatch({ type: "POST_MENU_SUCCESS", payload: res.data });
		navigate("/menu")
    } catch (err) {
		console.log("err")
		console.log(err)
        console.log(err?.message ? err.message : err);
        dispatch({ type: "POST_MENU_ERROR", payload: err?.response?.data?.message ?? "post menu error" });
    }
};
