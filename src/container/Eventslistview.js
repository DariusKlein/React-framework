import React from "react";
import Axios from "axios";

import Events from "../component/Event";

const data = [


];


class Eventslistview extends React.Component{

    state={
        Events: []

    }

    componentDidMount() {
        Axios.get('https://127.0.0.1:8000/api/')
            .then(res => {
                Events: res.data
            });
    }

    render() {
        return(
            <Events data={data}/>


        )

    }


}

export default Eventslistview;