import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';

class ManageTabs extends React.Component {

    render(){
        return (
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Update Event">
                    Tab 1 content
                </Tab>
                <Tab eventKey={2} title="Judge Event">
                    Tab 2 content
                </Tab>
            </Tabs>
        );
    }

}
export default ManageTabs;