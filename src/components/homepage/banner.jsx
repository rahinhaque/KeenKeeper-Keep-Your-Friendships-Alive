import React from 'react';

const Banner = () => {
 return (
  <div className="bg-gray-50 py-8 md:py-12 px-4 md:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-500 text-xs md:text-sm">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
      </div>
      
      <div className="flex justify-center mb-8 md:mb-10">
        <button className="btn bg-[#2c4f42] text-white hover:bg-[#234035] border-none text-xs md:text-sm">
          + Add a Friend
        </button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 text-center">
          <div className="text-xl md:text-2xl font-bold text-[#2c4f42] mb-1">10</div>
          <div className="text-xs md:text-sm text-gray-500">Total Friends</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 text-center">
          <div className="text-xl md:text-2xl font-bold text-[#2c4f42] mb-1">3</div>
          <div className="text-xs md:text-sm text-gray-500">On Track</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 text-center">
          <div className="text-xl md:text-2xl font-bold text-[#2c4f42] mb-1">6</div>
          <div className="text-xs md:text-sm text-gray-500">Need Attention</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 text-center">
          <div className="text-xl md:text-2xl font-bold text-[#2c4f42] mb-1">12</div>
          <div className="text-xs md:text-sm text-gray-500">Interactions This Month</div>
        </div>
      </div>
    </div>
  </div>
 );
};

export default Banner;