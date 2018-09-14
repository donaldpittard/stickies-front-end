import React, { Component } from 'react';
import Modal from './Modal';
import AddNote from './AddNote';
import './AppHeader.css';

class AppHeader extends Component {
    state = {
        show: false
    };

    showModal = () => {
        this.setState({show: true});
    };

    hideModal = () => {
        this.setState({show: false});
    };

    createNote = (newNote) => {
        this.props.createNote(newNote);
        this.hideModal();
    };

    render() {
        return (
            <div className="app-header">
                {/* <div className="app-header__logo"></div> */}
                {/* <div className="app-header__title"> */}
                    <h1 className="app-header__title">Notes</h1>
                {/* </div> */}
                {/* <div className="app-header__menu"> */}
                    <button className="app-header__button" type="button" onClick={this.showModal}>
                        <i className="fa fa-plus-square" aria-hidden="true"></i>
                    </button>
                {/* </div> */}
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <AddNote createNote={this.createNote} colors={this.props.colors} defaultColor={this.props.defaultColor} />
                </Modal>
            </div>
        );
    }
}

export default AppHeader;
