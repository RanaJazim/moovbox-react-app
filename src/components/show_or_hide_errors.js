import React from 'react'

export default function ShowOrHideErrors({ error, Errors, ...props }) {
    return !(Object.keys(error).length === 0 && error.constructor === Object) && <div {...props}>{Errors}</div>;
}
