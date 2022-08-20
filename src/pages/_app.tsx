import "src/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Authenticator from "src/components/functional/Authenticator";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<RecoilRoot>
			<Authenticator>
				<Component {...pageProps} />
			</Authenticator>
		</RecoilRoot>
	);
}

export default MyApp;
