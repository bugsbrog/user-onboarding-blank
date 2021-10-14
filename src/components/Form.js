// imports
import React from 'react';

// export default
export default function Form (props) {
    
// props
    const { formVals, change, submitForm, errors, disabled } = props;

// evt.target and 'checkbox'
    const onChange = evt => {
        const { name, value, checked, type} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;

// change and valueToUse
        change(name, valueToUse)
    }

// .preventDefault()
    const onSubmit = evt => {
        evt.preventDefault();
        submitForm();
    }

// return
    return (
        <form className= 'Form' onSubmit={onSubmit}>
            {/* errors */}
            <div className='errors'>
                <div>{errors.first_name}</div>
                <div>{errors.last_name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
            </div>
            {/* FirstName */}
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
                {/* lastName */}
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
                        {/* Email */}
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
                            {/* password */}
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
                            {/* Terms of service */}
                        <div className='serviceTerms'>
                            <label> Terms of service:
                            <input
                                type='checkbox'
                                name="serviceTerms"
                                checked={formVals.serviceTerms}
                                onChange={onChange}
                                />
                            </label>
                            {/* Submit button */}
                            <div className="submit">
                                <button id='submitBtn' disabled={disabled}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>
    )
}
