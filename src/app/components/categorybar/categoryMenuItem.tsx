import Image from 'next/image';
import classes from './Category.module.css';
type Props = {
  title: string;
  imgUrl: string;
};
const CategoryMenuItem = ({ title, imgUrl }: Props) => {
  return (
    <>
      <div className={classes.menuContainer}>
        <div className={classes.menuItem}>
          <Image src={imgUrl} alt={title} height={110} width={80} />
          <p className={classes.categoryTile}>{title}</p>
        </div>
      </div>
    </>
  );
};

export default CategoryMenuItem;
