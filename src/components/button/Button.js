import React from 'react';

export default function Button(className, text, setSwitch, switchButton) {
    return (
        <button
            className={className}
            onClick={() => {
                if (switchButton === false) {
                    setSwitch(true);
                } else {
                    setSwitch(false);
                }
            }}
        >btngt
        </button>
    );
}
