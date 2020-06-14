import React from "react";
import Axios from "axios";

import Events from "../component/Event";




class Eventslistview extends React.Component{

    state={
        Events: []

    }

    componentDidMount() {
        Axios.get('http://192.168.178.4:8000/api/')
            .then(res => {
                this.setState({
                    Events: res.data
                })
                console.log(res.data)
            });
    }

    render() {
        return(
                <Events data={this.state.Events}/>
        )
    }
}

export default Eventslistview;