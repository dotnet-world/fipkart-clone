import classes from './Nabar.module.css';
import LoginButton from './sections/loginButton';
import LogoSection from './sections/logo';
import NavLink from './sections/navLink';
import SearchInputSection from './sections/serchInput';

const Navbar = () => {
    return (
        <div className={classes.navBarMain}>
            <div className={classes.navBarContainer}>
            <LogoSection/>
            <SearchInputSection/>
            <LoginButton/>
            <NavLink href='/' text='Become a Seller'/>
            <NavLink href='/' text='More' sufIcon='/img/down-arrow.png'/>
            <NavLink href='/' text='Cart' preIcon='/img/cart.svg'/>
            </div>
        </div>
    )
}

export default Navbar;