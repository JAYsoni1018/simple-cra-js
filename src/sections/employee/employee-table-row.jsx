import { useState } from 'react';
import PropTypes from 'prop-types';

import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import Menu from '@mui/material/Menu';
// ----------------------------------------------------------------------

export default function EmployeeTableRow({
  emp_id,
  emp_name,
  emp_email,
  emp_mobile,
  emp_role,
  emp_department,
  date,
  handleClick,
}) {
  const [open, setOpen] = useState(null);

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
    console.log('New Status:', newStatus);
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
        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}

EmployeeTableRow.propTypes = {
  handleClick: PropTypes.func,
  emp_id: PropTypes.any,
  emp_name: PropTypes.any,
  emp_email: PropTypes.any,
  emp_mobile: PropTypes.any,
  emp_role: PropTypes.any,
  emp_department: PropTypes.string,
  date: PropTypes.any,
};
