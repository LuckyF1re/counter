import styles from "../WorkPlace.module.css"
import {Button} from "../../button/Button.tsx";

type CounterPlace = {
    count: number
    incHandler: ()=>void
    resetHandler: ()=>void
    maxValue: number
    minValue: number
    isSettingChanged: boolean
    isError: boolean
}

export const CounterPlace = (props: CounterPlace   ) => {
    const isDisabled = () => {
        if (props.maxValue === props.count) {
            return true;
        }
        if (props.isSettingChanged) {
            return true;
        }
        return false;
    }
    return (
        <div className={styles.window}>
            <div className={styles.valuePlace} style={{padding:'0px'}}>
                {props.isError
                    ?
                    (<p className={styles.setValue} style={{color:'red', fontSize:'40px'}}><b>Incorrect value!</b></p>)
                    :
                    (props.isSettingChanged
                            ?
                            (<p className={styles.setValue} style={{padding: '35px'}}><b>enter values and press
                                "set"</b></p>)
                            :
                            (
                                <p className={props.count === props.maxValue ? styles.maxNumber : styles.number}
                                >
                                    {props.count}
                                </p>
                            )
                    )
                }
            </div>
            <div className={styles.buttonPlace}>
                <Button
                    onClick={()=>props.incHandler()}
                    disabled={isDisabled()}
                >
                    inc
                </Button>
                <Button
                    onClick={()=>props.resetHandler()}
                    disabled={props.isSettingChanged}
                >
                    reset
                </Button>
            </div>
        </div>
    );
};
