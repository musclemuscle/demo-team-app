import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { UserStateProps } from "src/types/stores/userState";

const { persistAtom } = recoilPersist({
	key: "user-persist",
	storage: typeof window === "undefined" ? undefined : localStorage,
});

export const userState = atom<UserStateProps>({
	key: "user",
	default: {
		authenticated: false,
		name: "",
		email: "",
		photoUrl: "",
		uid: "",
	},
	effects_UNSTABLE: [persistAtom],
});
