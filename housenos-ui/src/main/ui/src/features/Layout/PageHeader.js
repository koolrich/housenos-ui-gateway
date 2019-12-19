import React from 'react';

const PageHeader = (props) => {
    return (
        <div className="pb-2 mt-4 mb-2 border-bottom">
            {props.pageTitle}
        </div>
    );
}

export default PageHeader;