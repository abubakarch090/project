import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const AuthGuard = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token"); // Retrieve token from cookies

    // If token exists, redirect to the profile page
    if (!token) {
      router.push("/Login");
    }
  }, [router]);

  // Render children if no token is found
  return <>{children}</>;
};

export default AuthGuard;
