import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar'
import Footer  from './Footer';


// import { Container } from './styles';

 const Layout: React.FC<PropsWithLayout> = ({ children }) => {
    return <div>
        <Navbar />
        <div className='flex'>
            <Sidebar />
            <main>{children}</main>
        </div>

        {/* <Footer /> */}
    </div>;
}
export default Layout;
