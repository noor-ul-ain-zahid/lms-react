import React from 'react'
import Table from '../common/Table'
const BookList=(props)=> {
        const { data, editData, deleteData } = props

        return (
            <div>
                <Table
                    data={data}
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
                            label: "Author",
                            prop: "author"
                        },
                        {
                            label: "Publisher",
                            prop: "publisher"
                        }
                    ]}
                    editData={editData}
                    deleteData={deleteData}
                />
            </div>
        )
    }

export default BookList;