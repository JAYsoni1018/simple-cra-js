/* eslint-disable import/order */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import { useState } from 'react';
import PropTypes from 'prop-types';

import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import Menu from '@mui/material/Menu';

import { useBoolean } from 'src/hooks/use-boolean';
import { ConfirmDialog } from 'src/components/custom-dialog';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import CustomDialog from 'src/components/Dialog/dialog';
import EditEmployee from './EditEmployee';

import TableHeadCustom from 'src/components/table/table-head-custom';
import {
  TableEmptyRows,
  TableNoData,
  TablePaginationCustom,
  TableSelectedAction,
  emptyRows,
  getComparator,
  useTable,
} from 'src/components/table';
// ----------------------------------------------------------------------

export default function EmployeeTableRow({
  row,
  emp_id,
  emp_name,
  emp_email,
  emp_mobile,
  emp_role,
  emp_department,
  date,
  handleClick,
}) {
  const rowConfirm = useBoolean();

  const popover = usePopover();
  const table = useTable({ defaultOrderBy: 'createDate' });
  const [open, setOpen] = useState(null);
  const [editEmployee, setEditEmployee] = useState(false);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStatusChange = (newStatus) => {
    // Handle status change here
    // console.log('New Status:', newStatus);
    handleClose();
  };
  return (
    <>
      <TableRow hover tabIndex={-1}   >


        <TableCell  >
          {emp_id}
        </TableCell>
        <TableCell  >
          {emp_name}
        </TableCell>
        <TableCell  >
          {emp_email}
        </TableCell>
        <TableCell  >
          {emp_mobile}
        </TableCell>
        <TableCell  >
          {emp_role}
        </TableCell>
        <TableCell  >
          {emp_department}
        </TableCell>

        <TableCell  >
          {date}
        </TableCell>

        <TableCell sx={{ pr: 0 }}>
          <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        sx={{ width: 160 }}
      >
        <MenuItem
          onClick={() => {
            setEditEmployee(true);
            popover.onClose();
          }}
        >
          <Iconify icon="solar:pen-bold" />
          Edit
        </MenuItem>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem
          onClick={() => {
            // confirm.onTrue();
            rowConfirm.onTrue();
            popover.onClose();
          }}
          sx={{ color: 'error.main' }}
        >
          <Iconify icon="solar:trash-bin-trash-bold" />
          Delete
        </MenuItem>
      </CustomPopover >
      <CustomDialog
        openFlag={editEmployee}
        setonClose={() => setEditEmployee(false)}
        placeHolder="Edit Employee Details"
        component={<EditEmployee row={row} />}
      />
      <ConfirmDialog
        open={confirm.value}
        onClose={confirm.onFalse}
        title="Delete"
        content={
          <>
            Are you sure want to delete <strong> {table.selected.length} </strong> items?
          </>
        }
        action={
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              // alert('Deleted');
              // handleDeleteRows();
              confirm.onFalse();
            }}
          >
            Delete
          </Button>
        }
      />
      <ConfirmDialog
        open={rowConfirm.value}
        onClose={rowConfirm.onFalse}
        title="Delete"
        content={<>Are you sure want to delete this item?</>}
        action={
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              rowConfirm.onFalse();
            }}
          >
            Delete
          </Button>
        }
      />
    </>
  );
}

EmployeeTableRow.propTypes = {
  handleClick: PropTypes.func,
  emp_id: PropTypes.any,
  row: PropTypes.any,
  emp_name: PropTypes.any,
  emp_email: PropTypes.any,
  emp_mobile: PropTypes.any,
  emp_role: PropTypes.any,
  emp_department: PropTypes.string,
  date: PropTypes.any,
};
