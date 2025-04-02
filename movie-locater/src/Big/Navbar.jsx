import{Link} from 'react-router-dom';
import"../Css/Hey.css";
function Navbar(){
    return(
        <>
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to='./'>Movie APP</Link>
                </div>
                <div className="navbar-links">
                    <Link to='/'className='navbar-home'>Home</Link>
                    <Link to='/favorites'className='navbar-home'>Favorite</Link>
                  
                </div>
            

        </nav>
        </>
    );
}
export default Navbar;