/**
 * @説明  : マイページ
 *
 * 以下のページに沿って作成してみてください。
 * https://chuo-univ-app.web.app/MyPage
 */

import { signOut } from "firebase/auth";
import { NextPage } from "next";
import { useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "src/stores/userState";
import { UserStateProps } from "src/types/stores/userState";
import { authentication } from "src/utils/firebase";

const Profile: NextPage = () => {
	const [user, setUser] = useRecoilState(userState);

	const logoutGoogle = useCallback(async () => {
		signOut(authentication)
			.then(() => {
				setUser((): UserStateProps => {
					return { authenticated: false, name: "", email: "", photoUrl: "", uid: "" };
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div>
			<p className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">プロフィールページ</p>
			<p>userName: {user.name}</p>
			<p>userEmail: {user.email}</p>
			<p>userPhoto: {user.photoUrl}</p>
			<p>userUid: {user.uid}</p>
			<button onClick={logoutGoogle}>ログアウト</button>
		</div>
	);
};

export default Profile;
