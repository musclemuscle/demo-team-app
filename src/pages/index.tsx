import { addDoc, collection } from "firebase/firestore";
import type { NextPage } from "next";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "src/stores/userState";
import { UserStateProps } from "src/types/stores/userState";
import { db } from "src/utils/firebase";

/**
 * @説明  : トップページ
 *
 * ここでは、投稿の羅列を行う。（後回し）
 */

const Home: NextPage = () => {
	const [user, setUser] = useRecoilState<UserStateProps>(userState);
	const [text, setText] = useState("");

	const setLatestText = (e: ChangeEvent<HTMLInputElement>): void => {
		const value = e.target.value;
		setText(value);
	};

	const submitData = async (): Promise<void> => {
		try {
			const docRef = await addDoc(collection(db, "users"), {
				first: "Ada",
				last: "Lovelace",
				age: 23,
				born: 1815,
			});
			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	};

	const incrementalUserAge = (): void => {
		setUser((user): UserStateProps => {
			return { ...user, age: user.age + 1 };
		});
	};

	return (
		<div>
			<p className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">firebase fireStoreのテスト</p>
			<input type="text" value={text} onChange={setLatestText} />
			<button onClick={submitData}>Submit</button>
			<p>recoilのテスト</p>
			<p>{user.age}</p>
			<button onClick={incrementalUserAge}>+1</button>
			<p>deploy test test test test</p>
			<Link href={"/login"}>
				<a>Loginページへ</a>
			</Link>
			<Link href={"/profile"}>
				<a>Profileページへ</a>
			</Link>
			<Link href={"/post"}>
				<a>Postページへ</a>
			</Link>
		</div>
	);
};

export default Home;
