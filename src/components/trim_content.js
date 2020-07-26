import React from 'react'

export default function TrimContent({ content, maxLength }) {
    if (maxLength == null)
        maxLength = 50;

    function trim() {
        const actualLength = content.length;
        const trimString = content.substring(0, maxLength);

        return actualLength > maxLength ? trimString + " ...." : trimString;
    }

    return (
        <span>
            {trim()}
        </span>
    )
}
