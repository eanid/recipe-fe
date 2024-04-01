import { combineReducers } from "redux";
import auth from "./auth"
import menu from "./menu"
import menu_post from "./menu_post"

const rootReducers = combineReducers({
	auth,
	menu,
	menu_post
})

export default rootReducers