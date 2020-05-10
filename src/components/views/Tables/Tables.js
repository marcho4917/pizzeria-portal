import React from 'react';
import styles from './Tables.module.scss';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';

const demoContent = [
  {hour: '10:00', kind: 'event', table1: null, table2: 214, table3: 111, table4: null, table5: null, table6: null},
  {hour: '10:30', kind: 'event', table1: null, table2: 123, table3: null, table4: null, table5: 356, table6: null},
  {hour: '11:00', kind: null, table1: 241, table2: null, table3: null, table4: null, table5: 356, table6: null},
  {hour: '11:30', kind: 'event', table1: null, table2: null, table3: 167, table4: 298, table5: 356, table6: null},
  {hour: '12:00', kind: null, table1: null, table2: null, table3: 126, table4: null, table5: null, table6: null},
  {hour: '12:30', kind: 'event', table1: 576, table2: null, table3: null, table4: null, table5: null, table6: 747},
  {hour: '13:00', kind: null, table1: 576, table2: null, table3: null, table4: null, table5: null, table6: 747},
  {hour: '13:30', kind: 'event', table1: null, table2: 128, table3: null, table4: 931, table5: null, table6: null},
  {hour: '14:00', kind: 'event', table1: null, table2: 128, table3: null, table4: 931, table5: null, table6: null},
  {hour: '14:30', kind: null, table1: null, table2: 128, table3: null, table4: 931, table5: null, table6: null},
  {hour: '15:00', kind: 'event', table1: null, table2: 128, table3: null, table4: 931, table5: null, table6: null},
  {hour: '15:30', kind: null, table1: null, table2: 128, table3: null, table4: 931, table5: null, table6: null},
  {hour: '16:00', kind: 'event', table1: null, table2: 128, table3: null, table4: 931, table5: null, table6: null},
  {hour: '16:30', kind: 'event', table1: null, table2: 128, table3: null, table4: 931, table5: null, table6: null},
  {hour: '17:00', kind: null, table1: null, table2: 128, table3: null, table4: 931, table5: null, table6: null},
  {hour: '17:30', kind: 'event', table1: null, table2: 128, table3: null, table4: 931, table5: null, table6: null},
];

const renderAction = (row, kind) => {
  switch (kind) {
    case 'event':
      return (
        <Badge color="secondary" variant="dot">
          <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row}`}>
            {row}
          </Button>
        </Badge>
      );
    default:
      return <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row}`}>
        {row}
      </Button>;
  }
};   

const Tables = () => {
  return(
    <div className={styles.component}>
      <TextField
        id="datetime-local"
        label="Pick day"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Box m={2} component="div" display="inline">
        <Button variant="contained" color="primary" component={Link} to={process.env.PUBLIC_URL + '/tables/booking/new'}>new reservation</Button>
      </Box>
      <Box m={2} component="div" display="inline">
        <Button variant="contained" color="primary" component={Link} to={process.env.PUBLIC_URL + '/tables/events/new'}>new event</Button>
      </Box>
      <Paper className={styles.component} elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Table 1</TableCell>
              <TableCell>Table 2</TableCell>
              <TableCell>Table 3</TableCell>
              <TableCell>Table 4</TableCell>
              <TableCell>Table 5</TableCell>
              <TableCell>Table 6</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContent.map(row => (
              <TableRow key={row.hour}>
                <TableCell component="th" scope="row">
                  {row.hour}
                </TableCell>
                <TableCell>
                  {row.table1 && renderAction(row.table1, row.kind)}
                </TableCell>
                <TableCell>
                  {row.table2 && renderAction(row.table2, row.kind)}
                </TableCell>
                <TableCell>
                  {row.table3 && renderAction(row.table3, row.kind)}
                </TableCell>
                <TableCell>
                  {row.table4 && renderAction(row.table4, row.kind)}
                </TableCell>
                <TableCell>
                  {row.table5 && renderAction(row.table5, row.kind)}
                </TableCell>
                <TableCell>
                  {row.table6 && renderAction(row.table6, row.kind)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

    </div>


  );
};

export default Tables;