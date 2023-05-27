import Link from "next/link";
import Image from 'next/image'
import classes from '../Nabar.module.css';
type Props ={
    text:string;
    href:string;
    preIcon?:string;
    sufIcon?:string;
}
const NavLink =({text, href,preIcon,sufIcon}:Props)=>{
    return <>
    <div className={classes.navLink}>
        {preIcon?(
            <Image src={preIcon} height={20} width={20} alt={text}/>
        ):null}
    <Link href={href}>{text}</Link>
    {sufIcon?(
            <Image src={sufIcon} height={20} width={20} alt={text}/>
        ):null}
    </div>
    </>
}
export default NavLink;