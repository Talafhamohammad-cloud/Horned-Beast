import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vote: 0
    }
  }
  handleClick = () => {
    this.setState({
      vote: this.state.vote + 1,
    })
  }
  render() {
    return (
      <div>
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src={this.props.imgURL} alt={""} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text className='vote'>
              {this.state.vote}
            </Card.Text>
            <Button type="button" class="btn btn-secondary btn-lg" onClick={this.handleClick}>Vote</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Footer;
