/**
 * @説明  : ログイン画面
 *
 * 以下のページに沿って作成してみてください。
 * https://chuo-univ-app.web.app/LogInPage
 */

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { userState } from "src/stores/userState";
import { UserStateProps } from "src/types/stores/userState";
import { authentication } from "src/utils/firebase";

const Login: NextPage = () => {
	const [user, setUser] = useRecoilState<UserStateProps>(userState);
	const router = useRouter();

	const loginWIthGoogle = useCallback(async (): Promise<void> => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(authentication, provider)
			.then((result) => {
				const userInfo = result.user;
				setUser((user): UserStateProps => {
					return {
						...user,
						authenticated: true,
						name: userInfo.displayName,
						email: userInfo.email,
						photoUrl: userInfo.photoURL,
						uid: userInfo.uid,
					};
				});
				router.push("/profile");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});
	}, []);

	return (
		<div>
			<p className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">ログインページ</p>
			{!user.authenticated && <button onClick={loginWIthGoogle}>google ログイン</button>}
			<p>userName: {user.name}</p>
			<p>userEmail: {user.email}</p>
			<p>userPhoto: {user.photoUrl}</p>
			<p>userUid: {user.uid}</p>
		</div>
	);
};

export default Login;
