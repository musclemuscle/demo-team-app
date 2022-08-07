import { addDoc, collection } from "firebase/firestore";
import type { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import styles from "src/pages/Home.module.css";
import { db } from "src/utils/firebase";

const Home: NextPage = () => {
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
				born: 1815,
			});
			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	};

	return (
		<div className={styles.container}>
			<input type="text" value={text} onChange={setLatestText} />
			<button onClick={submitData}>Submit</button>
		</div>
	);
};

export default Home;
