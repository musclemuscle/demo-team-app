import { addDoc, collection } from "firebase/firestore";
import type { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import styles from "src/pages/Home.module.css";
import { userState } from "src/stores/userState";
import { UserStateProps } from "src/types/stores/userState";
import { db } from "src/utils/firebase";

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
		<div className={styles.container}>
			<p>firebase fireStoreのテスト</p>
			<input type="text" value={text} onChange={setLatestText} />
			<button onClick={submitData}>Submit</button>
			<p>recoilのテスト</p>
			<p>{user.age}</p>
			<button onClick={incrementalUserAge}>+1</button>
		</div>
	);
};

export default Home;
