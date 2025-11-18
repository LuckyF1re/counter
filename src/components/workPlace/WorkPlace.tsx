import styles from "../workPlace/WorkPlace.module.css"
import {CounterPlace} from "./counterPlace/CounterPlace.tsx";
import {SettingPlace} from "./settingPlace/SettingPlace.tsx";
import {type ChangeEvent, useState} from "react";


export const WorkPlace = () => {

    const [count, setCounter] = useState(0);
    const [maxValue, setMaxValue] = useState(5);
    const [minValue, setMinValue] = useState(0);
    const [isSettingChanged, setIsSettingChanged] = useState(false);


    const incrementHandler = () => {
        setCounter(count + 1);
    }

    const resetHandler = () => {
        setCounter(0);
    }

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setMaxValue(parseInt(e.currentTarget.value));
            setIsSettingChanged(true);
    }

    const mixValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(parseInt(e.currentTarget.value));
        setIsSettingChanged(true);
    }

    const isErrorMin = () => {

        if (minValue > maxValue || minValue < 0 || maxValue == minValue) {
            return true;
        }
        return false
    }

    const isErrorMax = () => {

        if (minValue > maxValue || maxValue < 0 || maxValue == minValue) {
            return true;
        }
        return false
    }

    const setMaxMinValue = () => {
        setMinValue(minValue)
        setMaxValue(maxValue)
        setCounter(minValue)
        setIsSettingChanged(false)
    }

    console.log(isSettingChanged)


    return (
        <div className={styles.WorkPlace}>
            <div className={styles.body}>
                <SettingPlace
                    maxValue={maxValue}
                    minValue={minValue}
                    maxSetHandler={(e)=>maxValueHandler(e)}
                    minSetHandler={(e)=>mixValueHandler(e)}
                    isSettingChanged={isSettingChanged}
                    isErrorMax={isErrorMax()}
                    isErrorMin={isErrorMin()}
                    setMaxMinValue={()=>setMaxMinValue()}

                />

                <CounterPlace
                    isError={isErrorMin() || isErrorMax()}
                    count={count}
                    incHandler={()=>incrementHandler()}
                    resetHandler={()=>resetHandler()}
                    maxValue={maxValue}
                    minValue={minValue}
                    isSettingChanged={isSettingChanged}
                />
            </div>
        </div>
    );
};

