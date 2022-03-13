import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";

export default function Login() {
  const { Moralis, authenticate, isAuthenticated, isAuthenticating } = useMoralis();

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

  const handleSignInAsMerchant = async () => {

    authenticate({
      provider: "web3Auth",
      clientId: "BDsD5Kpz8UTs6e0MJBN0gtNv5kvOZ1q4zxKyfGDd0lpVh6sL1kCQmlMos9aNLDPpqXEcGXL5UBQDvoxBKkaVtLc",
      theme: 'dark',
      loginMethodsOrder: ["email_passwordless", "google", "facebook", "twitter", "reddit", "discord", "twitch", "apple", "line", "github", "kakao", "linkedin", "weibo", "wechat"]
    });
  }

  const signInWithMetamask = () => {
    authenticate();
  };

  return (
    <div className="py-6 h-screen">
      <div className="flex  rounded-lg shadow-lg overflow-hidden mx-auto max-w-4xl ">
        {/* <img className="hidden lg:block lg:w-1/2 bg-cover" src="" /> */}
        <div className="w-full p-8 max-w-xl mx-auto">
          <div className="w-56 mx-auto md:ml-auto md:-mr-36">
            <button
              onClick={() => handleSignInAsMerchant()}
              className=" border-2 font-bold py-2 px-4 w-full rounded hover:opacity-80"
            >
              Sign in as Merchant
            </button>
          </div>
          <img src="/loginlogo.png" className="mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-center">
            DISCOVER THE GAME THAT GIVES REAL-WORLD VALUE
          </h2>

          <div className="mt-8">
            <button
              disabled={isAuthenticating}
              onClick={() => signInWithMetamask()}
              className=" font-bold py-2 px-4 border-2 w-full rounded hover:opacity-80"
            >
              Enter the Game
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
