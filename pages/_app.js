import { Provider } from 'react-redux';
import { MoralisProvider } from "react-moralis";
import 'react-perfect-scrollbar/dist/css/styles.css';

// import 'swiper/swiper.min.css';
// import 'swiper/swiper.scss';
// import 'swiper/swiper-bundle.css';

import "swiper/css";
import "swiper/css/navigation";
import '../public/css/style.css';
import store from '../redux/store';

function MyApp({ Component, pageProps }) {
  console.log("######"+process.env.NEXT_PUBLIC_APP_ID)
  return (
    <>
      {/* <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head> */}
        <MoralisProvider
          appId={process.env.NEXT_PUBLIC_APP_ID}
          serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
        >
      <Provider store={store}>
   
          <Component {...pageProps} />
          </Provider>
        </MoralisProvider>
     
    </>
  )
}

export default MyApp
