import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button"

class ChosenPic extends React.Component {

    render() {
        return (
            <Modal show={this.props.showChosenPic} onHide={this.props.hideModal} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.modalElement.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body><img src={this.props.modalElement.image_url} alt={this.props.modalElement.title} />
                    <p>
                        {this.props.modalElement.description}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.hideModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        )
    }
}


export default ChosenPic;