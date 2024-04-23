import React, { useState } from 'react';

const ReadMoreLess = ({ children, maxLength }) => {
    const [showMore, setShowMore] = useState(false);
    const toggleShowMore = () => setShowMore(!showMore);
    
    if (children.length <= maxLength) {
        return <p>{children}</p>;
    }

    return (
        <div>
            <p>
                {showMore ? children : `${children.substring(0, maxLength)}...`}
            </p>
            <  p onClick={toggleShowMore} className="read-more-less-button" style={{color:'red',fontWeight:'bold',marginTop:'0px',padding:'0'}}>
                {showMore ? 'Read Less' : 'Read More'}
            </p>
        </div>
    );
};
export default ReadMoreLess