import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import ProfileHeader from "@/components/Profile/ProfileHeader";
import "@/styles/globals.css";
import { Provider } from 'react-redux';
import { Store } from '@/Redux/Store';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AuthRoutes } from '@/components/AuthRoutes';
import {  useRouter } from 'next/router'; // Import useRouter
import AuthGuard from '@/components/AuthGuard';
import Header from '@/components/Header';
import Cookies from 'js-cookie';

export default function App({ Component, pageProps }) {
  const router = useRouter(); // Initialize useRouter hook to access current pathname
  const token = Cookies.get('token'); // Get the token from cookies

  useEffect(() => {
    AOS.init({
      // You can customize AOS options here (optional)
      duration: 800, // Animation duration in ms
      easing: 'ease-in-out', // Animation easing function
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <Provider store={Store}>
        {/* Check if the current pathname is in the AuthRoutes */}
        {AuthRoutes.includes(router.pathname) ? (
          <>
          {
            (router.pathname ==="/Login" || router.pathname === "/Signup") ?(
              <>
                            <Header/>
                            <Component {...pageProps} />
              </>
            ) :
            <Component {...pageProps} /> 
          }

          </>
        ) : (
          <>
            {/* If not in AuthRoutes, show ProfileHeader for authenticated users */}
            {token && (
              <AuthGuard>
                <ProfileHeader />
                <Component {...pageProps} />
              </AuthGuard>
            )}
          </>
        )}
      </Provider>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
