// Import React Moralis Hooks
import { useMoralis } from "react-moralis";

import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {
  const {
    authenticate,
    logout,
    isAuthenticating,
    isLoggingOut,
    isAuthenticated,
  } = useMoralis();

  const router = useRouter();

  const handleClickSignin = () => router.push("/user/login");

  const handleClickAdmin = () => router.push("/admin");

  const handleClickHome = () => router.push("/");

  const handleClickProfile = () => router.push("/profile");

  const handleClickSignOut = () => logout() && router.push("/user/login");


  return (
    <div className="sticky top-0">
      <div className="shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            <div className="flex">
              <img
                onClick={handleClickHome}
                src="/logotextblack.png"
                className="w-10 h-10 text-yellow-600 "
                viewBox="0 0 24 24"
              />
              <p className="cursor-pointer text-xl font-bold ml-2 my-auto">MAXZWorld</p>
            </div>

            {/* NavBarItems */}

            {isAuthenticated && <div className="hidden sm:flex sm:items-center">
              <p className="text-black text-sm font-semibold hover:opacity-80 mr-4 cursor-pointer" onClick={handleClickHome} >Home</p>
              <p className="text-black text-sm font-semibold hover:opacity-80 mr-4 cursor-pointer" >Explore</p>
              <p className="text-black text-sm font-semibold hover:opacity-80 mr-4 cursor-pointer" onClick={handleClickProfile} >Profile</p>
            </div>}

            {/* Auth Buttons */}
            <div className="hidden sm:flex sm:items-center space-x-2">
              {isAuthenticated && (
                <>
                  <AuthButton
                    onClick={handleClickAdmin}
                    text="Create campaign"
                  />
                  <AuthButton
                    text="Sign out"
                    onClick={handleClickSignOut}
                    disabled={isLoggingOut}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AuthButton = ({ text, onClick, disabled }) => {
  return (
    <button
      className="text-black text-sm font-semibold border px-4 py-2 rounded-lg hover:text-black hover:border-black"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

const NavBarItem = ({ text, url }) => {
  return (
    <a
      href={url}
      className="text-black text-sm font-semibold hover:opacity-80 mr-4"
    >
      {text}
    </a>
  );
};

export default Navbar;
