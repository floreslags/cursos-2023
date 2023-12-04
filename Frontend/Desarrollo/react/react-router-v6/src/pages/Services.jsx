import {Link, Outlet} from 'react-router-dom'
export const Services = ()=>{
    return(
        <>
            <h2>Services</h2>
            <nav className='menu'>
                <Link to={'/services'} >Home</Link>
                <Link to={'/services/list'} >List</Link>
                <Link to={'/services/guarantee'} >Guaranties</Link>
                <Link to={'/services/policies'} >Policies</Link>
            </nav>
            <Outlet/>
        </>
    );
}