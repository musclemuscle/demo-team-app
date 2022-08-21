import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Authenticator from "src/components/functional/Authenticator";
import Header from "src/components/uiElements/Header";
import "src/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<RecoilRoot>
			<Header />
			<Authenticator>
				<Component {...pageProps} />
			</Authenticator>
		</RecoilRoot>
	);
}

export default MyApp;
