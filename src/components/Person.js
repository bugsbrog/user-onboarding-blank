// imports
import React from 'react';

// export default
export default function Person(props) {
// props
    const { details } = props;

// return
    return (
        <div className='container'>
            <h3>The Meme Squad welcomes {details.first_name} {details.last_name}</h3>
            <p>You can contact this person @ {details.email}</p>
        </div>
    )
}
