import React from 'react';

// import { Container } from './styles';

const Counter: React.FC = () => {
  return   <div className="flex justify-center items-center">
  
  <div className="absolute top-1/2 left-1/2 w-[699px] h-[458px] -translate-x-1/2 -translate-y-1/2">
    <div className="flex justify-center items-center h-full">
      <div className="relative w-[280px] h-[96px] bg-gradient-to-bl from-black/100 to-black/50 rounded-xl">
        <div className="flex justify-center items-center pt-6">
          <div className="mx-2">
            <div className="flex justify-center items-center w-[25px] h-[25px] bg-gradient-to-bl from-black/100 to-black/20 rounded">
              <p className="text-[16px] font-bold text-white">
                23
              </p>
            </div>
            <p className="my-1 text-xs font-bold text-center text-white">
              DAYS
            </p>
          </div>
          <div className="mx-2">
            <div className="flex justify-center items-center w-[25px] h-[25px] bg-gradient-to-bl from-black/100 to-black/20 rounded">
              <p className="text-[16px] font-bold text-white">
                8
              </p>
            </div>
            <p className="my-1 text-xs font-bold text-center text-white">
              HOURS
            </p>
          </div>
          <div className="mx-2">
            <div className="flex justify-center items-center w-[25px] h-[25px] bg-gradient-to-bl from-black/100 to-black/20 rounded">
              <p className="text-[16px] font-bold text-white">
                12
              </p>
            </div>
            <p className="my-1 text-xs font-bold text-center text-white">
              MINUTES
            </p>
          </div>
          <div className="mx-2">
            <div className="flex justify-center items-center w-[25px] h-[25px] bg-gradient-to-bl from-black/100 to-black/20 rounded">
              <p className="text-[16px] font-bold text-white">
                11
              </p>
            </div>
            <p className="my-1 text-xs font-bold text-center text-white">
              SECONDS
            </p>
          </div>
        </div>
        <p className="text-xs font-bold text-center text-[#969696]">
          UNTIL THE END OF THIS AUCTION
        </p>
      </div>
    </div>
  </div>
</div>;
}

export default Counter;