import React from 'react';
import AddCampaign from '../components/Brand/AddCampaign';
import AddBudjet from '../components/Brand/AddBudget';


function branding() {
    return (
        <div className="container mx-auto h-screen overflow-y-scroll p-2 pb-24 scrollbar-hide">
            <p className='text-3xl pt-8 ml-36 font-bold'>Create campaign : Game Rewards</p>
            <div className="container flex flex-col md:flex-row justify-evenly">
                <div className=''>
                    <AddBudjet />
                </div>
                <div className=''>
                    <AddCampaign />
                </div>
            </div>
        </div>
    );
}

export default branding;