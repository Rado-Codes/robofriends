import React, { ReactNode } from 'react';

const Scroll = (props: { children: ReactNode}) => {
 
    return (
        <div style={{ overflowY: 'scroll', border: '5px solid black', height: '800px' }}>
            {props.children}
        </div>
    );
};

export default Scroll;