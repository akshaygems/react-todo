import React, { Component } from "react"
import { Container, Row, Col, Button } from "reactstrap";

class Footer extends Component {
  getLeftItemsCount = (props) => {
    let count = 0;
    props.todoList.map((item) => {
      if (item.status === "active") {
        count = count + 1;
      }
      return item
    });
    return count;
  }

  hasAnyCompletedItem = (itemList) => {
    const completedItemList = itemList.filter((item) => {
      return (item.status === "completed");
    });
    return completedItemList.length > 0;
  }

  render() {
    const {updateShowTodoListStatus} = this.props;
    let leftItemsCount = this.getLeftItemsCount(this.props);

    return(
      <Container className="mt-3">
        <Row>
          <Col md="2">
            {leftItemsCount} items left
          </Col>
          <Col md="2">
            <Button color="primary" size="sm" onClick={ () => updateShowTodoListStatus("all") } >
              All
            </Button>
          </Col>
          <Col md="2">
            <Button color="warning" size="sm" onClick={ () => updateShowTodoListStatus("active") } >
              Active
            </Button>
          </Col>
          <Col md="2">
            <Button color="success" size="sm" onClick={ () => updateShowTodoListStatus("completed")} >
              Completed
            </Button>
          </Col>
          {
            this.hasAnyCompletedItem(this.props.todoList) &&
            <Col md="2">
              <Button color="danger" size="sm" onClick={ () => this.props.clearCompletedAllTodoFromList()} >
                Clear completed
              </Button>
            </Col>
          }
        </Row>
      </Container>
    )
  }
}

export default Footer;