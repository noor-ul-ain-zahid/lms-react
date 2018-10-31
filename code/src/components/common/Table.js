import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const row = (x, i, header,editData,deleteData) =>
  <TableRow key={`tr-${i}`}>
    {header.map((y, k) =>
      <TableCell key={`trc-${k}`}>
        {x[y.prop]}
      </TableCell>
    )}
    <TableCell>
          <EditIcon onClick={() => editData(x)} />
          <DeleteIcon onClick={() => deleteData(x)}/>
    </TableCell>
  </TableRow>;

export default ({ data, header,editData,deleteData}) =>
  <Table>
    <TableHead>
      <TableRow>
        {header.map((x, i) =>
          <TableCell key={`thc-${i}`}>
            {x.label}
          </TableCell>
        )}
        <TableCell  key={`actions`}>Actions</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {data.map((x, i) => row(x, i, header,editData,deleteData))}
    </TableBody>
  </Table>;