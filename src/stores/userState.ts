import { atom } from "recoil";
import { UserStateProps } from "src/types/stores/userState";

export const userState = atom<UserStateProps>({
	key: "user",
	default: {
		firstName: "テスト",
		lastName: "テスト",
		age: 23,
	},
});
