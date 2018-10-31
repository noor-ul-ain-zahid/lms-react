import React from 'react'
import * as Actions from '../../actions/Actions';
import PublishersList from './PublishersList'
import PublisherModal from './PublisherModal'

export default class Publishers extends React.Component {

    state = {
        publishers: [],
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
        Actions.deleteData(this.state.publishers,"publishers",item)
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
        const check = Actions.alreadyExists(this.state.publishers, updatedData.name,updatedData.id)
        if (check == 0) {
        this.toggleState('')
        Actions.editData(this.state.publishers, "publishers", updatedData)}
        else alert("Publisher with this name already exists")
    }
    addPublisher = (data) => {

        const publisher = {
            "id": this.state.publishers.length,
            ...data
        }
        const check = Actions.alreadyExists(this.state.publishers, publisher.name,publisher.id)
        if (check == 0) {
            const data = Actions.addData(this.state.publishers, "publishers", publisher)
            this.setState({
                publishers: data
            })

            this.toggleState('')
        }
        else alert("Publisher with this name already exists")
    }

    componentWillMount() {
        this.setState({
            publishers: Actions.getItemFromLocalStorage("publishers")
            
        })
    }

    render() {
        const { publishers, open, action,currentDataItem} = this.state
        return (
            <div>
            <h2>Publishers</h2>
                <PublishersList publishers={publishers} editData={this.editData} deleteData={this.deleteData}/>
                <button onClick={()=>this.toggleState('add')}>Add Publisher</button>
                <PublisherModal
                    open={open}
                    action={action}
                    handleClose={this.toggleState}
                    actionType={action=='add'?this.addPublisher:this.editDetails}
                    publisher={currentDataItem}
                     />
            </div>
        )
    }
}