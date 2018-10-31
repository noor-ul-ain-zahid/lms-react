import React from 'react'
import Table from '../common/Table'
const PublishersList = (props) => {

    const { publishers, editData, deleteData } = props

    return (
        <div>
            <Table
                data={publishers}
                header={[
                    {
                        label: "Number",
                        prop: "id"
                    },
                    {
                        label: "Name",
                        prop: "name"
                    },
                    {
                        label: "Address",
                        prop: "address"
                    },
                    {
                        label: "Total Books",
                        prop: "books"
                    }
                ]}
                editData={editData}
                deleteData={deleteData}
            />
        </div>
    )
}

export default PublishersList;