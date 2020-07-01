import styles from './Button.module.scss';

const Button = (props) => {
    const classes = [styles.button];
    if (props.isLoading) classes.push(styles.button_loading);
    return (
        <button {...props} className={classes.join(' ')}>
            {props.children}
        </button>
    );
};

export default Button;