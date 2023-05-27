import Image from 'next/image';
import classes from '../Nabar.module.css';
const SearchInputSection = () => {
    return (
    <div className={classes.searchSection}>
        <input type='text' placeholder='Search fot products, brands and more' 
        title='Search fot products, brands and more' 
        className={
            classes.searchInput
        }/>
        <Image src="/img/icon-search.svg"
        height={25}
        width={25}
        alt="Search icon"
        className='mt-1 mr-2'/>
    </div>
    );
}

export default SearchInputSection;