import { atom } from "recoil";
import { UserStateProps } from "src/types/stores/userState";

export const userState = atom<UserStateProps>({
	key: "user",
	default: {
		name: "",
		email: "",
		photoUrl: "",
		uid: "",
	},
});
