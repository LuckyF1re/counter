import styles from "./Button.module.css"


type ButtonType = {
    children: React.ReactNode
    onClick: () => void
    disabled?: boolean
}

export const Button = (props: ButtonType) => {
    return (
        <button
            onClick={()=>{props.onClick()}}
            className={styles.button}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};
