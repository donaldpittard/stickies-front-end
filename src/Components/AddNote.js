import React, { Component } from 'react';
import uuid from 'uuid';
import './AddNote.css';

class AddNote extends Component {
    state = {
        defaultColor: this.props.colors[0],
        show: false
    }

    showModal() {
        console.log("Showing Modal");
        this.setState({
            show: true
        });
    }

    hideModal() {
        this.setState({
            show: false
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.refs.comment.value === '') {
            alert('A comment is required');
            return;
        }

        this.setState({
            newNote: {
                id: uuid.v4(),
                color: this.refs.color.value,
                comment: this.refs.comment.value
            }
        }, function () {
            this.props.createNote(this.state.newNote);
        })
    }

    handleColorChange() {
        let color = this.refs.color.value;

        this.setState({
            defaultColor: color
        });
    }

    render() {
        let colors = [];
        let textAreaClasses = '';

        if (this.props.colors) {
            textAreaClasses = `note note--handwritten note--${this.state.defaultColor}`;

            colors = this.props.colors.map((color, index) => {
                return <option key={index} value={color}>{color}</option>
            });
        }

        return (
            <div className="add-note">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <textarea ref="comment" className={textAreaClasses} maxLength="100" placeholder="Add your note text here..."></textarea>
                    </div>
                    <div>
                        <select ref="color" onChange={this.handleColorChange.bind(this)}>
                            {colors}
                        </select>
                    </div>
                    <input type="submit" value="Add Note" className="add-note__submit" />
                </form>
            </div>
        );
    }
}

export default AddNote;
