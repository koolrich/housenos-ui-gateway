import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import PropertyListingForm from './PropertyListForm';
import './index.css';

function PropertyListing(props) {

    const [activeTab, setActiveTab] = useState('listing');

    const toggleTab = (currentTab) => {
        if (activeTab !== currentTab) {
            setActiveTab(currentTab)
        }
    }

    return (
        <Container>
            <p>My properties goes here</p>

            <Nav tabs className="border-0">
                <NavItem>
                    <NavLink href="#" className={classnames({ active: activeTab === 'listing', 'border': true, 'border-bottom-0': true })}
                        onClick={() => { toggleTab('listing') }}>
                        Listing
                        </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className={classnames({ active: activeTab === 'messages', 'border': true, 'border-bottom-0': true })}
                        onClick={() => { toggleTab('messages') }}>
                        Messages
                        </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className={classnames({ active: activeTab === 'payments' })}
                        onClick={() => { toggleTab('payments') }}>
                        Payments
                        </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="listing" className="p-3 border">
                    <Row>
                        <PropertyListingForm />
                    </Row>
                </TabPane>

                <TabPane tabId="messages" className="p-3 border">
                    <Row>
                    <Col sm="12"><h4>Messages here</h4></Col>
                    </Row>
                </TabPane>
            </TabContent>

        </Container>


    )

}

export default PropertyListing;