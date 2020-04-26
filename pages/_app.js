import '../scss/config.scss';

import Header from '../modules/header/component/Header';

export default function App({ Component, pageProps }) {
    return (
        <div>
            <Header />
            <Component {...pageProps} />
        </div>
    )
}