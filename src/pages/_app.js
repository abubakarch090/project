import Header from "@/components/Header";
import ProfileHeader from "@/components/Profile/ProfileHeader";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
     {/* <Header/> */}
     <ProfileHeader/>
   <Component {...pageProps} />
  

  
  </>
  )
}
