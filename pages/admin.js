import React from 'react';
import AddBrand from '../components/Admin/AddBrand';
import AddCampaign from '../components/Admin/AddCampaign';


function admin() {
    return (
        <div className="container mx-auto h-screen overflow-y-scroll p-2 pb-24 scrollbar-hide">
            <p className='text-3xl pt-8 ml-36 font-bold'>Create campaign : Game NFT Rewards</p>
            <div className="container flex flex-col md:flex-row justify-evenly">
                <div className=''>
                    <AddBrand />
                </div>
                <div className=''>
                    <AddCampaign />
                </div>
            </div>
        </div>
    );
}

export default admin;