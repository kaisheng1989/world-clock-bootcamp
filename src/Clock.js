import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    // Initialise component state to contain "date" attribute with current date and time
    this.state = { date: new Date() };
  }

  componentDidMount() {
    // Set date value in state every second to current date and time
    // Save setInterval timer ID in class variable for teardown in another class method
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    // Teardown setInterval timer with timer ID saved as class variable
    clearInterval(this.timerId);
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>{`${this.props.timeZone}:`}</Col>

          <Col>{`${this.state.date.toLocaleString("ko-KR", {
            timeZone: this.props.timeZone,
          })}`}</Col>
        </Row>
      </Container>
    );
  }
}
export default Clock;

/*{
 */

/* 
  } */

/* return (
    // Render date value that is stored in state
    <p>
      {`${this.props.timeZone}:${this.state.date.toLocaleString("ko-KR", {
        timeZone: this.props.timeZone,
      })}`}
    </p>
  );*/
