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
			<p className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">プロフィールページ</p>
			<p>{user.name}</p>
			<p>{user.email}</p>
			<p>{user.photoUrl}</p>
			<p>{user.uid}</p>
		</div>
	);
};

export default Profile;
