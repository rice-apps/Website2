import { useReducer } from "react";

const reducer = (state = {}, action) => {
	switch (action.type) {
		case "TOGGLE_DARK_MODE":
			return {
				isDark: !state.isDark
			};
		default:
			return state;
	}
};

export const [state, dispatch] = useReducer(reducer, {
    isDark: false
  });

export default reducer;