import React, { useEffect, useState } from "react";
import AuthenticationRouter from "./Router/AuthenticationRouter";
import UnAuthenticatedRouter from "./Router/UnAuthenticatedRouter";
import { LoginVerify } from "ApiService/LoginVerify";
import SuperAdminRouter from "Router/SuperAdminRouter";
import "react-calendar/dist/Calendar.css";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSuperAdmin, setSuperAdmin] = useState(false);

  // Utility function to set user info in localStorage
  const setUserInfoToLocalStorage = (userInfo: any) => {
    localStorage.setItem("FullName", userInfo.FullName);
    localStorage.setItem("UserID", userInfo.UserID);
    localStorage.setItem("Mobile", userInfo.Mobile);
    localStorage.setItem("Email", userInfo.Email);
    localStorage.setItem("Image", userInfo.Image);
    localStorage.setItem("Status", userInfo.Status);
    localStorage.setItem("UserRole", userInfo.UserRole);
    localStorage.setItem("CreateDate", userInfo.CreateDate);
  };

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const token = localStorage.getItem("Token");

        if (!token) {
          console.log("No token found in localStorage");
          return;
        }

        const response = await LoginVerify(token);

        // Check if login is successful and UserInfo exists
        if (response.status === "Login Success" && response.data?.UserInfo) {
          console.log(response);
          setIsLoggedIn(true);

          const { UserInfo } = response.data;
          setUserInfoToLocalStorage(UserInfo);

          // Check for SuperAdmin role
          if (UserInfo.UserRole === "SuperAdmin&&2024##") {
            setSuperAdmin(true);
          }
        } else {
          console.log("Login failed or UserInfo is missing");
        }
      } catch (error) {
        console.error("Error verifying login:", error);
      }
    };

    checkLogin();
  }, []);

  return (
    <>
      {isSuperAdmin ? (
        <SuperAdminRouter />
      ) : isLoggedIn ? (
        <AuthenticationRouter />
      ) : (
        <UnAuthenticatedRouter />
      )}
    </>
  );
};

export default App;
