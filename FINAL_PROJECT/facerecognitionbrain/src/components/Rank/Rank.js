import React from 'react';

const Rank = ({ name, entries }) => {
    return (
        <div className='white f2'>
            <div>
                {`${name}`}
            </div>
            <div>
                {'your current entry count is...'}
            </div>
            <div>
                {`${entries}`}
            </div>
        </div>
    )
}

export default Rank;
