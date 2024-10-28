// import Header from "@/components/Header";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import ProfileHeader from "@/components/Profile/ProfileHeader";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
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
      {/* <Header /> */}
      {/* <ProfileHeader /> */}
      <Component {...pageProps} />
    </>
  );
}
