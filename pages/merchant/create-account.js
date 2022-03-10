import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useMoralis } from "react-moralis";

export default function Register1() {
  const { signup, isAuthenticated, user } = useMoralis();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [email, setEmail] = useState("");

  useEffect(() => {
    /* TODO: Remove Debugging */
    console.log("[DEBUG] {user} object changed: ", user);
    console.log("Just in case, here's the {signup} object: ", signup);
  }, [user]);

  useEffect(() => {
    /* TODO: Remove Debugging */
    console.log("[DEBUG] {signup} object changed: ", signup);
    console.log("Just in case, here's the {user} object: ", user);
  }, [signup]);


  const handleNext = (e) => {
    e.preventDefault();
    router.push("/merchant/company-info");
  };

  const signUpAsMerchant = () => {
    console.log("[DEBUG] Merchant Sign up triggered...");
    if (password === passwordConfirmation) {
      signup(username, password, email);
    } else {
      console.log("[DEBUG] Passwords mismatch!");
    }
  };

  return (
    <div className="py-6  h-screen ">
      <div className="flex flex-col  rounded-lg overflow-hidden mx-auto max-w-lg ">
        <div className="w-full p-8 ">
          <h2 className="text-2xl font-semibold  text-left">
            Become a Merchant
          </h2>

          <div className="mt-4">
            <label className="block  text-xs font-bold mb-2">
              Company Name
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
            </div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-200 text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="password"
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block  text-xs font-bold mb-2">
                Confirm Password
              </label>
            </div>
            <input
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              className="bg-gray-200 text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="password"
            />
          </div>
          <div className="mt-4">
            <label className="block  text-xs font-bold mb-2">
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-200 text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="email"
            />
          </div>
        </div>

        <div className="p-8">
          <button
            onClick={() => signUpAsMerchant()}
            className="border-2 rounded-md font-bold py-2 px-4 w-full hover:opacity-80 mt-2"
          >
            Register
          </button>
          {/* TODO: REMOVE THIS TEST BUTTON */}

          <p className=" text-sm text-center mt-4">
            Already have an account{" "}
            <button
              onClick={() => router.push("/merchant/login")}
              className="font-bold cursor-pointer underline underline-offset-2"
            >
              Login
            </button>
          </p>
          <p className=" text-sm text-center mt-4">
            By creating an account , I agree to the{" "}
            <span className="cursor-pointer underline underline-offset-2">
              Fair Use Policiy
            </span>{" "}
            ans{" "}
            <span className=" cursor-pointer underline underline-offset-2">
              Terms and conditions
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
