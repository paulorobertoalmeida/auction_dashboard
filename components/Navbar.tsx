import React from 'react'
import WalletButton from '../components/WalletButton'

function Navbar() {
    return (
        <div className="bg-white border-b m-2  border-gray-200 fixed z-30 w-full">
            <div className="flex justify-between">
                <div className="mb-2 sm:mb-0">
                    <a href="/#" className="text-xl no-underline text-grey-darkest hover:text-blue-dark">🌱</a>
                </div>

                <div className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
                    <div className="auth flex items-center w-full md:w-full"> <WalletButton />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Navbar