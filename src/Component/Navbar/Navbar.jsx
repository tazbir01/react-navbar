import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill, RiCloseFill } from 'react-icons/ri';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        {path: '/', name: 'Home', id: 'home-route',},
        {path: '/about', name: 'About', id: 'about-route',},
        {path: '/contact', name: 'Contact', id: 'contact-route',},
        {path: '/products', name: 'Products', id: 'products-route',},
        {path: '*', name: 'Not Found', id: 'not-found-route',},
      ];

      
    return (
        <nav>
            <div className="md:hidden p-6" onClick={()=> setOpen(!open)}>
                {
                    open === true ? <RiCloseFill className="text-2xl"></RiCloseFill> : <RiMenu2Fill className="text-2xl"></RiMenu2Fill>
                }
            </div>
            <ul className={`md:flex absolute md:static p-5 duration-1000 bg-slate-300 rounded-lg
            ${open ? 'left-0' : '-left-60'}`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;