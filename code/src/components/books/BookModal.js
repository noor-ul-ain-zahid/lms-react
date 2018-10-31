import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default class BookModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            formData: {
                name: '',
                author: '',
                publisher: ''
            },
            open: false,
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

    componentWillReceiveProps(props)
    {
        if(props.action==='edit')
        this.setState({
            formData:{
                name:props.data.name,
                author:props.data.author,
                publisher:props.data.publisher
            },
            title:'Edit Book Details'
        })
        else  this.setState({
            title:'Add Book Details'
        })
    }
    render() {

        const { formData } = this.state
        const { authors, publishers } = this.props

        if (authors === undefined)
            return false

        const renderAuthors = authors.map(item => {
            return (
                <MenuItem value={item.name} key={item.id}>{item.name}</MenuItem>
            )
        })

        const renderPublishers = publishers.map(item => {
            return (
                <MenuItem value={item.name} key={item.id}>{item.name}</MenuItem>
            )
        })

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
                            Enter Book details to make changes in the system.
                        </DialogContentText>
                        <TextValidator
                            label="Book Name"
                            onChange={this.handleChange}
                            name="name"
                            id="bookName"
                            value={formData.name}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            fullWidth
                        />

                        <div>
                            <InputLabel htmlFor="controlled-open-select">Authors</InputLabel>
                            &nbsp;

                            <Select
                                // open={this.state.open}
                                // onClose={this.handleClose}
                                // onOpen={this.handleOpen}
                                name="author"
                                onChange={this.handleChange}
                                value={this.state.formData.author}
                            >
                                {
                                    authors.length > 0 ?

                                        renderAuthors
                                        :
                                        <p>No authors found</p>
                                }
                            </Select>
                        </div>

                        <div>
                            <InputLabel htmlFor="controlled-open-select">Publishers</InputLabel>
                                &nbsp;
                            <Select
                                // open={this.state.open}
                                // onClose={this.handleClose}
                                // onOpen={this.handleOpen}
                                name="publisher"
                                onChange={this.handleChange}
                                value={this.state.formData.publisher}
                            >
                                {
                                    publishers.length > 0 ?
                                        renderPublishers
                                        :
                                        <p >No publishers found</p>
                                }
                            </Select>
                        </div>
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