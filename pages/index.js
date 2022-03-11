import Head from "next/head";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated, Moralis } = useMoralis();

  const Card = ({ title, num }) => (
    <div className="border-[1px] w-56 h-36 rounded-lg shadow-lg p-4 text-center mt-4">
      <p className="text-lg mt-4">{title}</p>
      <p className={`text-2xl font-bold mt-41 text-blue-500 mt-4`}>{num}</p>
    </div>
  )
  let wallet;

  return (
    <div>
      <Head>
        <title>MAXZ</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* TODO: Provide favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isAuthenticated ? <div className="w-full h-screen overflow-y-scroll scrollbar-hide">
        <div className="flex justify-between mx-4 mt-8">
          <p className="font-bold text-3xl">Hello [{wallet}]!</p>
        </div>
        <div className="sm:mx-8 md:mx-16 lg:mx-32 my-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Card title="Total NFTs Minted" num="2236" />
          <Card title="Total NFTs Reedemed" num="364" />
          <Card title="Total NFTs Footfalls" num="156" />
          <Card title="No. of Played NFTs" num="546" />
          <Card title="NFTs Sold by users" num="
          45" />
          <Card title="NFTs swapped by users" num="4569" />
          <Card title="Total NFTs merged" num="452" />
        </div>
        <div className="mx-16 ">
          <p className="font-bold text-2xl mb-6">Active Campaigns</p>
          <div className="flex justify-around text-center">
            <div>
              <p className="font-bold">Name</p>
              <p>Lebron 17</p>
            </div>
            <div>
              <p className="font-bold">Start Date</p>
              <p>March 1, 2022</p>
            </div>
            <div>
              <p className="font-bold">End Date</p>
              <p>March 31, 2022</p>
            </div>
            <div>
              <p className="font-bold">Day Running</p>
              <p>7 days</p>
            </div>
          </div>
        </div>

      </div> :
        <p className="text-5xl font-bold w-full h-screen flex items-center justify-center">Please login first</p>
      }
    </div>
  );
}
