import React from 'react';

const Select = (props) => {
    const {defaultName, options, onChange} = props;

    return (
        <select
            className='form-control'
            onChange={onChange}
        >
            <option value="">{ defaultName }</option>
            {options.map(option => (
                <option
                key={option.value}
                value={option.value}
                >{option.label}</option>
            ))}
        </select>
    )
}

export default Select
