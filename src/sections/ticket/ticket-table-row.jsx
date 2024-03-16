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

export default function TicketTableRow({
  key,
  tid,
  cid,
  email,
  subject,
  // problem,
  status,
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
    // console.log('New Status:', newStatus);
    handleClose();
  };
  return (
    <>
      <TableRow hover tabIndex={-1}  >


        <TableCell  >

            {tid}

        </TableCell>

        <TableCell>{cid}</TableCell>


        <TableCell >{email}</TableCell>
        <TableCell >{subject}</TableCell>
        {/* <TableCell >{problem}</TableCell> */}

        <TableCell onClick={handleClick1}>
        <Label color={
          (status === 'reject' && 'error') ||
          (status === 'pending' && 'warning') ||
          (status === 'in-process' && 'info') ||
          'success'
        }>
          {status}
        </Label>
      </TableCell>

      <TableCell >{date}</TableCell>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={() => handleStatusChange('reject')}>Reject</MenuItem>
        <MenuItem onClick={() => handleStatusChange('delivered')}>Delivered</MenuItem>
        <MenuItem onClick={() => handleStatusChange('in-process')}>In Process</MenuItem>
        <MenuItem onClick={() => handleStatusChange('pending')}>Pending</MenuItem>
      </Menu>

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

TicketTableRow.propTypes = {
  key: PropTypes.any,
  tid: PropTypes.any,
  cid: PropTypes.any,
  email: PropTypes.any,
  subject: PropTypes.any,
  // problem: PropTypes.any,
  status: PropTypes.string,
  date: PropTypes.any,
  handleClick: PropTypes.func,
};
