import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default class PublisherModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            formData: {
                name: '',
                books: '',
                address: ''
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
   componentWillReceiveProps(props)
    {
        if(props.action==='edit')
        this.setState({
            formData:{
                name:props.publisher.name,
                books:props.publisher.books,
                address:props.publisher.address
            },
            title:'Edit Publisher Details'
        })
        else  this.setState({
            title:'Add Publisher Details'
        })
    }
    render(){
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
                            Enter Publisher details to make changes in the system.
                        </DialogContentText>
                        <TextValidator
                            label="Publisher Name"
                            onChange={this.handleChange}
                            name="name"
                            id="publisherName"
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
                            id="publisherTotalBooks"
                            value={formData.books}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            fullWidth
                        />
                        <br />
                        <TextValidator
                            label="Address"
                            onChange={this.handleChange}
                            name="address"
                            id="publisherAddress"
                            value={formData.address}
                            validators={['required']}
                            errorMessages={['this field is required']}
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