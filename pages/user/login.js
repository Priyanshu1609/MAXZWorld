import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";

export default function Login() {
  const { authenticate, isAuthenticated, isAuthenticating } = useMoralis();

  /* Check if Login was Succesful, then push user to Homepage */

  useEffect(() => {
    /* TODO: Remove Debugging */
    console.log("[DEBUG] useEffect from user/login just ran");
    if (isAuthenticated) {
      console.log(
        /* TODO: Remove Debugging */
        "[DEBUG] useEffect from user/login useEffect just ran, and isAuthenticated is",
        isAuthenticated,
        " Pushing to home [/]"
      );
      router.push("/");
    }
  }, [isAuthenticated]);

  const router = useRouter();

  const handleSignInAsMerchant = () => {
    router.push("/merchant/login");
  };

  const signInWithMetamask = () => {
    /* TODO: Remove Debugging */
    console.log("[DEBUG] Just triggered login");
    authenticate();
  };

  return (
    <div className="py-6 h-screen">
      <div className="flex  rounded-lg shadow-lg overflow-hidden mx-auto max-w-lg ">
        {/* <img className="hidden lg:block lg:w-1/2 bg-cover" src="" /> */}
        <div className="w-full p-8 max-w-lg">
          <img src="/metamask.png" className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-center">
            LOGIN
          </h2>

          <div className="mt-8">
            <button
              disabled={isAuthenticating}
              onClick={() => signInWithMetamask()}
              className=" font-bold py-2 px-4 border-2 w-full rounded hover:opacity-80"
            >
              Sign in with Metamask
            </button>
          </div>

          <div className="mt-8">
            <button
              onClick={() => handleSignInAsMerchant()}
              className=" border-2 font-bold py-2 px-4 w-full rounded hover:opacity-80"
            >
              Sign in as Merchant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
