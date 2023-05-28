import classes from './Category.module.css';
import CategoryMenuItem from './categoryMenuItem';
import { MenuItems } from './config/MenuItem';
const CategoryBar = () => {
  return (
    <div className={classes.categoryBar}>
      <div className={classes.categoryContainer}>
        {MenuItems.map((menu, index) => {
          return (
            <CategoryMenuItem
              title={menu.title}
              imgUrl={menu.imgUrl}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryBar;
