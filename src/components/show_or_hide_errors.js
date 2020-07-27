import React from 'react'
import { isErrorExist } from '../utils/is_error_exist';

export default function ShowOrHideErrors({ error, Errors, ...props }) {
    return isErrorExist(error) && <div {...props}>{Errors}</div>;
}
