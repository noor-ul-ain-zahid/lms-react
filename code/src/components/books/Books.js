import React from 'react'
import { Link } from 'react-router-dom'
import * as Actions from '../../actions/Actions';
import BookList from './BookList'
import BookModal from './BookModal'
export default class Books extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            books: [],
            open: false,
            action: '',
            authors: [],
            publishers: []
        }
    }

    componentDidMount() {
        let authors = Actions.getItemFromLocalStorage('authors')
        let publishers = Actions.getItemFromLocalStorage('publishers')
        this.setState({
            authors,
            publishers
        })
    }
    toggleState = (action) => {
        this.setState({
            open: !this.state.open,
            action: action
        });
    }
    deleteData = (item) => {
        this.setState({
            currentDataItem: item
        })
        Actions.deleteData(this.state.books, "books", item)
    }
    editData = (data) => {
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
        const check = Actions.alreadyExists(this.state.books, updatedData.name, updatedData.id)
        if (check == 0) {
            this.toggleState('edit')
            Actions.editData(this.state.books, "books", updatedData)
        }
        else alert("Book with this name already exists")
    }
    addBook = (bookData) => {

        const book = {
            "id": this.state.books.length,
            ...bookData
        }
        const check = Actions.alreadyExists(this.state.books, book.name, book.id)
        if (check == 0) {
            const data = Actions.addData(this.state.books, "books", book)
            this.setState({
                books: data
            })
            this.toggleState('')
        }
        else alert("Book with this name already exists")

    }
    componentWillMount() {
        this.setState({
            books: Actions.getItemFromLocalStorage("books")
        })
    }

    render() {
        const { books, open, action, authors, publishers, currentDataItem } = this.state
        return (
            <div>
                <h2>Books</h2>
                <BookList
                    data={books}
                    editData={this.editData}
                    deleteData={this.deleteData}
                />
                {
                    authors.length > 0 && publishers.length > 0 ?
                        <button onClick={() => this.toggleState('add')} >Add book</button>
                        : <p>No Authors or publishers exist
                        </p>
                }
                <BookModal
                    open={open}
                    action={action}
                    handleClose={() => this.toggleState('')}
                    actionType={action == 'add' ? this.addBook : this.editDetails}
                    authors={authors}
                    data={currentDataItem}
                    publishers={publishers}
                />

            </div>
        )
    }
}