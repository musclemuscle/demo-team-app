/**
 * @説明  : マイページ
 *
 * 以下のページに沿って作成してみてください。
 * https://chuo-univ-app.web.app/MyPage
 */

import { NextPage } from "next";
import { useRecoilValue } from "recoil";
import { userState } from "src/stores/userState";

const Profile: NextPage = () => {
	const user = useRecoilValue(userState);

	return (
		<div>
			<p>プロフィールページ</p>
			<p>userName: {user.name}</p>
			<p>userEmail: {user.email}</p>
			<p>userPhoto: {user.photoUrl}</p>
			<p>userUid: {user.uid}</p>
		</div>
	);
};

export default Profile;
