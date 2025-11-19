import styles from "../WorkPlace.module.css";
import {Button} from "../../button/Button.tsx";
import type {ChangeEvent} from "react";

type SettingPlaceType = {
    maxValue: number;
    minValue: number;
    maxSetHandler: (event:  ChangeEvent<HTMLInputElement>)=>void;
    minSetHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    isSettingChanged: boolean;
    isErrorMax: boolean;
    isErrorMin: boolean;
    setMaxMinValue: ()=>void
}

export const SettingPlace = (props: SettingPlaceType   ) => {
    return (
        <div
            className={styles.window}>
            <div  className={styles.valuePlace}>
                <div className={styles.setValue}>
                    <><b>Max value:</b></>
                    <><b>Min value:</b></>
                </div>
                <div className={styles.setValue}>
                    <input
                        id={"max"}
                        type={"number"}
                        className={`${styles.input} ${props.isErrorMax ? styles.error : ''}`}
                        onChange={(e)=>props.maxSetHandler(e)}
                        value={props.maxValue}
                    />
                    <input
                        id={"min"}
                        type={"number"}
                        className={`${styles.input} ${props.isErrorMin ? styles.error : ''}`}
                        onChange={(e)=>{props.minSetHandler(e)}}
                        value={props.minValue}
                    />
                </div>
            </div>
            <div className={styles.buttonPlace}>
                <Button
                    onClick={()=>props.setMaxMinValue()}
                    disabled={!props.isSettingChanged || props.isErrorMax || props.isErrorMin}
                >set</Button>
            </div>
        </div>
    );
};
