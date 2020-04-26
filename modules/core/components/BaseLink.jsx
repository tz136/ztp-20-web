import React from 'react';
import Link from 'next/link'

const BaseLink = (props) => {
    let className = 'gu-link';
    
    if (props.applyHover) {
        className = className + ' gu-link__hover';
    }

    return (
        <Link href={ props.to }>
            <a className={ className }>{ props.content }</a>
        </Link>
    );
}

export default BaseLink;