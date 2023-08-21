import React from 'react';

const InputBox = ({ value, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
        />
    );
};

export default InputBox;