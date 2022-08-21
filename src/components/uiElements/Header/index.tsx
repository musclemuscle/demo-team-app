import { signOut } from "firebase/auth";
import Link from "next/link";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { userState } from "src/stores/userState";
import { UserStateProps } from "src/types/stores/userState";
import { authentication } from "src/utils/firebase";

const Header = (): JSX.Element => {
	const loggedInUserMenuList = ["post", "profile", "logout"];
	const notLoggedInUserMenuList = ["login"];
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
		<div className="flex justify-around bg-sky-700 px-4 py-2 text-white  sm:px-8 sm:py-3">
			<Link href={"/"}>
				<a className="mr-4 px-4 py-2 hover:bg-sky-800">みんなでご飯</a>
			</Link>
			<div>
				{user.authenticated
					? loggedInUserMenuList.map((menu) => {
							return (
								<>
									{menu === "logout" ? (
										<button className="mr-4 px-4 py-2 hover:bg-sky-800" onClick={logoutGoogle}>
											{menu}
										</button>
									) : (
										<Link href={`/${menu}`}>
											<a className="mr-4 px-4 py-2 hover:bg-sky-800">{menu}</a>
										</Link>
									)}
								</>
							);
					  })
					: notLoggedInUserMenuList.map((menu) => {
							// TODO: UIを見ると下に変な余白があるので修正する
							return (
								<>
									<Link href={`/${menu}`}>
										<a className="mr-4 px-4 py-2 hover:bg-sky-800">{menu}</a>
									</Link>
								</>
							);
					  })}
			</div>
		</div>
	);
};

export default Header;
