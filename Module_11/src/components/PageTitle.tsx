import React from "react";

interface Props {
    title: string;
}

const PageTitle: React.FC<Props> = ({title}) => {

    return (
        <h2 className="page-title">
            { title }
        </h2>
    );
}

export default PageTitle;
