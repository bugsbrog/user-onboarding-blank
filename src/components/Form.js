import React from 'react';

export default function Form (props) {
    
    const { formVals, change, submitForm, errors, disabled } = props;

    const onChange = evt => {
        const { name, value, checked, type} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;

        change(name, valueToUse)
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submitForm();
    }

    return (
        <form className= 'Form' onSubmit={onSubmit}>
            <div className='errors'>
                <div>{errors.first_name}</div>
                <div>{errors.last_name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
            </div>
            <div className='firstName'>
                <label> First: 
                    <input
                        type="text"
                        name="first_name"
                        value={formVals.first_name}
                        onChange={onChange}
                        placeholder="Enter a first name"
                    />
                </label>
            <div className='lastName'>
                <label> Last:
                        <input
                            type="text"
                            name="last_name"
                            value={formVals.last_name}
                            onChange={onChange}
                            placeholder="Enter a last name"
                            />
                        </label>
                    <div className='Email'>
                        <label> Email:
                            <input
                                type="text"
                                name="email"
                                value={formVals.email}
                                onChange={onChange}
                                placeholder="Enter an email"
                                />
                            </label>
                        <div className='Password'>
                            <label> Password:
                            <input
                                type="password"
                                name="password"
                                value={formVals.password}
                                onChange={onChange}
                                placeholder="Enter a password"
                                />
                            </label>
                        <div className='serviceTerms'>
                            <label> Terms of service:
                            <input
                                type='checkbox'
                                name="serviceTerms"
                                checked={formVals.serviceTerms}
                                onChange={onChange}
                                />
                            </label>
                            <div className="submit">
                                <button disabled={disabled}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>
    )
}
