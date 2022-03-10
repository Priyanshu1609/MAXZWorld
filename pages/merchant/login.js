import { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";

export default function Login() {
  const { isAuthenticated, login } = useMoralis();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    /* TODO: Remove Debugging */
    console.log("[DEBUG] useEffect from merchant/login just ran");
    if (isAuthenticated) {
      console.log(
        /* TODO: Remove Debugging */
        "[DEBUG] useEffect from merchant/login useEffect just ran, and isAuthenticated is",
        isAuthenticated,
        " Pushing to home [/]"
      );
      router.push("/");
    }
  }, [isAuthenticated]);


  const loginAsMerchant = () => login(username, password);

  const handleClickMerchantSignup = () => router.push("/merchant/create-account");

  return (
    <div className="py-6  h-screen">
      <div className="flex rounded-lg shadow-lg overflow-hidden mx-auto max-w-lg">
        {/* <img className="hidden lg:block lg:w-1/2 bg-cover" src="" alt='LoginImage'/> */}
        <div className="w-full p-8">
          <h2 className="text-2xl font-semibold text-center">
            Merchant Login
          </h2>

          <div className="mt-4">
            <label className="block text-xs font-bold mb-2">
              Email Address or Phone Number
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-200 text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="email"
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block  text-xs font-bold mb-2">
                Password
              </label>
              <a href="#" className="text-xs ">
                Forgot Password?
              </a>
            </div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-200 text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="password"
            />
          </div>
          <div className="mt-8">
            <button
              onClick={() => loginAsMerchant()}
              className="border-2 font-bold py-2 px-4 w-full rounded hover:opacity-80"
            >
              Login
            </button>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <span className="text-xs  uppercase hidden sm:inline-block">
              Not yet a merchant ?
            </span>
            <a
              onClick={handleClickMerchantSignup}
              className="text-xs font-bold uppercase cursor-pointer"
            >
              {/* TODO: [Visual Bug] Add some space between   ? and SIGN UP  */}
              sign up
            </a>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
