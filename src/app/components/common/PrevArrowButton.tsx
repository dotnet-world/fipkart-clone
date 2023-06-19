import Image from 'next/image';
import classes from './buttons.module.css';
type Props = {
  onClick?: React.MouseEventHandler<Element>;
};

const PrevArrowButton = ({ onClick }: Props) => {
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className={`${classes.button} ${classes.leftButton}`}
      >
        <span className={classes.bottonWrapper}>
          <Image src="/img/banners/left_arrow.svg" alt="next button" fill />
        </span>
      </button>
    </>
  );
};

export default PrevArrowButton;
