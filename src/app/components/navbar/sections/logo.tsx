
import Image from 'next/image';
import Link from 'next/link';

import classes from '../Nabar.module.css';


const LogoSection =()=>{
return (
    <div className={classes.logoSection}>
                <Image src="/img/logo.png" alt="Flipkart logo" height={27} width={100}/>
                <Link href="/plus" className='hover:underline'>
                    <div className={classes.exploreItems}>
                        <div className={classes.exploreText}>
                            Explore
                        </div>
                        <div className={classes.explorePlusText}>Plus</div>
                        <Image src="/img/star.png" height={2} width={12} className='mb-1' alt='plus member logo'></Image>
                    </div>                   
                </Link>
            </div>
);
}
export default LogoSection;