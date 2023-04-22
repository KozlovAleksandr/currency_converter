import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { RatesColumn } from '../types/types';
import createDataForTable from '../utils/createDataForTable';

const columns: RatesColumn[] = [
  { id: 'code', label: 'Код валюты', align: 'center', width: '50%' },
  {
    id: 'rate',
    label: 'Курс',
    format: (value: number) => value.toString(),
    align: 'center',
    width: '50%',
  },
];

type RatesProps = {
  [key: string]: any;
};

const RatesTable: React.FC<RatesProps> = ({ rates }): JSX.Element => {
  const page = 0;
  const rowsPerPage = 500;

  const rows = [];
  for (var key in rates) {
    rows.push(createDataForTable(key, rates[key]));
  }

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 840 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  width={column.width}
                  style={{
                    top: 0,
                    minWidth: column.minWidth,
                    background: '#8896AB',
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ backgroundColor: '#C5D5E4' }}>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default RatesTable;
