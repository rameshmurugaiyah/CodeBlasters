import React from 'react';
import {Col} from 'react-bootstrap';
import EventBody from './Events/EventBody.jsx'
import LeaderBody from './LeaderBoard/LeaderBody.jsx';
import ManageTab from './ManageEvents/ManageTabs.jsx'

class SideBody extends React.Component {

    getSideBody(){
        switch (this.props.sideMenuIndex) {
            case 0 :
                return <EventBody/>
            case 1 :
                return <LeaderBody/>
            case 3 :
                return <ManageTab/>
        }
        return null;
    }

    render(){
        return (
            <Col xs={10} id ="sideBody">
                {this.getSideBody()}
            </Col>
        );
    }

}
export default SideBody;