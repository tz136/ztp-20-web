import { Provider } from 'react-redux';
import store from '../redux/store';

import '../scss/config.scss';

import Header from '../modules/header/component/Header';

export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Header />
            <Component {...pageProps} />
        </Provider>
    )
}