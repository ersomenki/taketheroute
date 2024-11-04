import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store';
import Layout from "@/app/layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider store={store}>
                <Component {...pageProps} />
        </Provider>
    );
};

export default MyApp;
