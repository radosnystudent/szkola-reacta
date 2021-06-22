import React from "react"
import { useHistory } from "react-router"

import PageTitle from "../components/PageTitle"
import Button from "../components/Button"

const Homescreen: React.FC = () => {

    const history = useHistory();

    return (
        <div className="homepage-container">
            <PageTitle title="Homepage"/>
            <Button label="Lista użytkowników" variant="info" onClick={()=>history.push("/users")} />
        </div>
    )
}

export default Homescreen;