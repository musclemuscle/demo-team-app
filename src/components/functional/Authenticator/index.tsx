import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { userState } from "src/stores/userState";

type AuthenticatorProps = {
	children?: React.ReactNode;
};

const Authenticator = ({ children }: AuthenticatorProps): JSX.Element | null => {
	const user = useRecoilValue(userState);
	const router = useRouter();

	if (router.pathname !== "/" && router.pathname !== "/login" && !user.authenticated) {
		router.push("/login");
		return null;
	}

	return <div>{children}</div>;
};

export default Authenticator;
