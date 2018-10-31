import React from 'react'
import { Link } from 'react-router-dom'
import * as Actions from '../../actions/Actions';
import AuthorsList from './AuthorsList'
import AuthorModal from './AuthorModal'

export default class Authors extends React.Component {

    state = {
        authors: [],
        open: false,
        action: ''
    }

    toggleState=(action)=>{
        this.setState({
            open: !this.state.open,
            action: action
        });
    }
    deleteData=(item)=>{
        this.setState({
            currentDataItem: item
        })
        Actions.deleteData(this.state.authors,"authors",item)
    }
    editData=(data)=>{
        this.setState({
            currentDataItem: data
        })
        this.toggleState('edit')
    }
    editDetails = (data) => {
        const updatedData = {
            "id": this.state.currentDataItem.id,
            ...data
        }
        const check = Actions.alreadyExists(this.state.authors, updatedData.name,updatedData.id)
        if (check == 0) {
        this.toggleState('edit')
        Actions.editData(this.state.authors, "authors", updatedData)}
        else alert("Author with this name already exists")
    }
        addAuthor= (authorData) => {
    
            const author = {
                "id": this.state.authors.length,
                ...authorData
            }
            const check = Actions.alreadyExists(this.state.authors, author.name, author.id)
            if (check == 0) {
                const data = Actions.addData(this.state.authors, "authors", author)
                this.setState({
                    authors: data
                })
                this.toggleState('')
            }
            else alert("Author with this name already exists")
    
        }
    componentWillMount() {
        this.setState({
            authors: Actions.getItemFromLocalStorage("authors")
        })
    }

    render() {
        const { authors, open, action,currentDataItem } = this.state
        return (
            <div>
                <h2>Authors</h2>
                <AuthorsList authors={authors} editData={this.editData} deleteData={this.deleteData}/>
                <button onClick={()=>this.toggleState('add')}>Add Author</button>
                <AuthorModal
                    open={open}
                    action={action}
                    handleClose={this.toggleState}
                    actionType={action=='add'?this.addAuthor:this.editDetails}
                    author={currentDataItem}
                     />
            </div>
        )
    }
}