import React from 'react';

const Select = ({defaultName, options}) => {
    return (
        <select className='form-control' name="category">
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
