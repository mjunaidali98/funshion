import '../styles/globals.css'
import { StoreProvider, useStore } from '../context';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const { dispatch } = useStore();
  function getDateXDaysAgo(numOfDays = 5, date = new Date()) {
    const daysAgo = new Date(date.getTime());
    daysAgo.setDate(date.getDate() + numOfDays);
    return daysAgo;
  }
  useEffect(() => {
    dispatch({
      type: "SET_DISCOUNT_END_DATE",
      payload: getDateXDaysAgo()
    })
  }, [])

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}


const Wrapper = ({ Component, pageProps }) => {
  return (
    <StoreProvider>
      <MyApp Component={Component} pageProps={pageProps} />
    </StoreProvider>
  );
};

export default Wrapper;
