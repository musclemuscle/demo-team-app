import type { NextPage } from "next";
import Link from "next/link";

/**
 * @説明  : トップページ
 *
 * ここでは、投稿の羅列を行う。（後回し）
 */

const Home: NextPage = () => {
	return (
		<div>
			<p className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">ホームページ</p>
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
