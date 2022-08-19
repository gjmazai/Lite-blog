import React from "react";
import classes from './MyModalWindow.module.css';

const MyModalWindow = ({ children, visible, setVisible }) => {

    const rootClasses = [classes.myModal];

    if (visible) {
        rootClasses.push(classes.active);
    }

    return (
        //конструкция с join добавит класс active
        <div className={rootClasses.join(' ')} onClick={() => { setVisible(false) }} >
            {/* stopProoagation почитать - предотвращает другие события */}
            <div className={classes.myModalContent} onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default MyModalWindow;