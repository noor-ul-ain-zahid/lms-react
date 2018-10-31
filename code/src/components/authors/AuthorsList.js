import React from 'react'
import Table from '../common/Table'
const AuthorsList = (props) => {

    const { authors, editData, deleteData } = props

    return (
        <div>
            <Table
                data={authors}
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
                        label: "Date of Birth",
                        prop: "dob"
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

export default AuthorsList;