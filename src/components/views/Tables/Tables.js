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

const demoContent = [
  {hour: '10:00', table1: null, table2: 214, table3: 111, table4: null, table5: null, table6: null},
  {hour: '11:00', table1: null, table2: 123, table3: null, table4: null, table5: 356, table6: null},
  {hour: '12:00', table1: 241, table2: null, table3: null, table4: null, table5: 356, table6: null},
  {hour: '13:00', table1: null, table2: null, table3: 167, table4: 298, table5: 356, table6: null},
  {hour: '14:00', table1: null, table2: null, table3: 126, table4: null, table5: null, table6: null},
  {hour: '15:00', table1: 576, table2: null, table3: null, table4: null, table5: null, table6: 747},
  {hour: '16:00', table1: 576, table2: null, table3: null, table4: null, table5: null, table6: 747},
  {hour: '17:00', table1: null, table2: 128, table3: null, table4: 931, table5: null, table6: null},
];

const Tables = () => {
  return(
    <div className={styles.component}>
      <TextField
        id="date"
        label="Pick day"
        type="date"
        defaultValue=""
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Paper className={styles.component}>
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
                  {row.table1 && (
                    <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.table1}`}>
                      {row.table1}
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {row.table2 && (
                    <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.table2}`}>
                      {row.table2}
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {row.table3 && (
                    <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.table3}`}>
                      {row.table3}
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {row.table4 && (
                    <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.table4}`}>
                      {row.table4}
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {row.table5 && (
                    <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.table5}`}>
                      {row.table5}
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {row.table6 && (
                    <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.table6}`}>
                      {row.table6}
                    </Button>
                  )}
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