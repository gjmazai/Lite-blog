import React from 'react';
import classes from './MyInput.module.css';


// обернул в React.forwardRef, чтобы реакт понял 
// куда ссылку юхать в неуправляемом компоненте
const MyInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} {...props} className={classes.MyInput} />
    );
});

export default MyInput;