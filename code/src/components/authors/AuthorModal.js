import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default class AuthorModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            formData: {
                name: '',
                books: '',
                dob: ''
            },
            title:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit() {
        this.props.actionType(this.state.formData)
    }
    componentWillReceiveProps(props) {
        if (props.action === 'edit')
            this.setState({
                formData: {
                    name: props.author.name,
                    books: props.author.books,
                    dob: props.author.dob
                },
                title:'Edit Author Details'
            })
            else  this.setState({
                title:'Add Author Details'
            })
    }
    render() {

        const { formData } = this.state
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">{this.state.title}</DialogTitle>
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                >
                    <DialogContent>

                        <DialogContentText>
                            Enter author details to make changes in the system.
                        </DialogContentText>
                        <TextValidator
                            label="Author Name"
                            onChange={this.handleChange}
                            name="name"
                            id="authorName"
                            value={formData.name}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            fullWidth
                        />
                        <br />
                        <TextValidator
                            label="Total Books"
                            onChange={this.handleChange}
                            name="books"
                            type="number"
                            id="authorTotalBooks"
                            value={formData.books}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            fullWidth
                        />
                        <br />
                        <TextValidator
                            label="Date of Birth"
                            onChange={this.handleChange}
                            name="dob"
                            type="date"
                            id="authorDob"
                            value={formData.dob}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
                        />
                        <br />
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={this.props.handleClose} color="primary">Cancel</Button>
                        <Button type="submit" color="primary">Submit</Button>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>
        );
    }
}