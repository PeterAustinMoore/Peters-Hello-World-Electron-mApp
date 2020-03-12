import '../Styles/Event.css';
import React from 'react';
import {withRouter} from 'react-router-dom';
import APIClient from '../apiClient';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class RightBar extends React.Component {
    state = {
       events: []
     };
    async componentDidMount() {
    }
    render() {
        return (
          <Accordion bsPrefix="right">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Filters
                </Accordion.Toggle>
              </Card.Header>
            </Card>

              <Accordion.Collapse className="filters" eventKey="1">
                <Card className="filters">
                  <Card.Body>All The Filters</Card.Body>
                </Card>
              </Accordion.Collapse>

          </Accordion>
        );
    }
}

export default withRouter(RightBar);
