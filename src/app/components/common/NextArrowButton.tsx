import Image from 'next/image';
import classes from './buttons.module.css';
type Props = {
  onClick?: React.MouseEventHandler<Element>;
};
const NextArrowButton = ({ onClick }: Props) => {
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className={`${classes.button} ${classes.rightButton}`}
      >
        <span className={classes.bottonWrapper}>
          <Image src="/img/banners/right_arrow.svg" alt="next button" fill />
        </span>
      </button>
    </>
  );
};

export default NextArrowButton;
