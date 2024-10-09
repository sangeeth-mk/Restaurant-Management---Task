import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid2';
import { Box, Button, Table, TableCell, TableContainer, TableHead, TableRow, Typography, Dialog, DialogTitle, DialogContent, TextField, DialogActions, TablePagination } from '@mui/material';
import Paper from '@mui/material/Paper';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import Axios from 'axios';
import BaseUrl from '../constants/index';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const CreateOrder = () => {
  const [open, setOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(0); 
  const [rowsPerPage, setRowsPerPage] = useState(5); 

  const [orderData, setOrderData] = useState({
    orderId: '',
    customerName: '',
    productName: '',
    price: '',
    quantity: '',
    location: '',
    status: '',
    date: ''
  });

  const [isEdit, setIsEdit] = useState(false); 

  useEffect(() => {
    Axios.get(BaseUrl)
      .then((res) => {
        setOrders(res.data.allItems);
      });
  }, []);

  const handleOpen = (order = null) => {
    if (order) {
      setOrderData(order); 
      setIsEdit(true); 
    } else {
      setOrderData({ orderId: '', customerName: '', productName: '', price: '', quantity: '', location: '', status: '', date: '' });
      setIsEdit(false); 
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const url = isEdit ? `${BaseUrl}/${orderData.orderId}` : `${BaseUrl}/add`;
    const method = isEdit ? Axios.put : Axios.post; 

    method(url, orderData)
      .then((response) => {
        if (isEdit) {
          const updatedOrders = orders.map(order => order.orderId === orderData.orderId ? response.data : order);
          setOrders(updatedOrders);
        } else {
          setOrders([...orders, response.data]); 
        }
        window.location.reload()
        handleClose();
      })
      .catch((error) => {
        console.error('There was an error processing the order!', error);
      });
  };

  const handleDelete = (Id) => {
    Axios.delete(`${BaseUrl}/${Id}`)
      .then(() => {
        setOrders(orders.filter(order => order.Id !== Id)); 
      })
      .catch((error) => {
        console.error('There was an error deleting the order!', error);
      });
  };

  const formatDate = (dateString) => {
    const options = {day: '2-digit',month: '2-digit', year: '2-digit'};
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options); 
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); 
  };

  return (
    <div>
      <Box sx={{ marginTop: '20px', width: '80vw' }}>
        <Grid container spacing={2}>
          <Grid size={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6">Order List</Typography>
            <Button variant="contained" sx={{ backgroundColor: '#F1F6F9', color: 'green' }} onClick={() => handleOpen()}>
              <PlaylistAddOutlinedIcon />
              Add Order
            </Button>
          </Grid>

          

          <Grid size={12}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead sx={{ backgroundColor: 'aquamarine' }}>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell align="center">OrderId</TableCell>
                    <TableCell align="center">Customer Name</TableCell>
                    <TableCell align="center">Product Name</TableCell>
                    <TableCell align="center">Price</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="center">Location</TableCell>
                    <TableCell align="center">Status</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                {orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">{formatDate(item.date)}</TableCell>
                    <TableCell align="center">{"#" + item.orderId}</TableCell>
                    <TableCell align="center">{item.customerName}</TableCell>
                    <TableCell align="center">{item.productName}</TableCell>
                    <TableCell align="center">{item.price}</TableCell>
                    <TableCell align="center">{item.location}</TableCell>
                    <TableCell align="center">{item.quantity}</TableCell>
                    <TableCell align="center">{item.status}</TableCell>
                    <TableCell align="center">
                      <EditNoteOutlinedIcon sx={{color:"#FF5733",cursor:"pointer"}} onClick={() => handleOpen(item)} />
                      <DeleteOutlineOutlinedIcon sx={{color:"#FF6961",cursor:"pointer"}} onClick={() => handleDelete(item.orderId)} />
                    </TableCell>
                  </TableRow>
                ))}
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={orders.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Grid>
        </Grid>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEdit ? 'Edit Order' : 'Add New Order'}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                margin="dense"
                name="orderId"
                label="Order ID"
                fullWidth
                variant="outlined"
                value={orderData.orderId}
                onChange={handleChange}
                disabled={isEdit} // Disable editing orderId when in edit mode
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                margin="dense"
                name="customerName"
                label="Customer Name"
                fullWidth
                variant="outlined"
                value={orderData.customerName}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <TextField
            margin="dense"
            name="productName"
            label="Product Name"
            fullWidth
            variant="outlined"
            value={orderData.productName}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="price"
            label="Price"
            fullWidth
            variant="outlined"
            value={orderData.price}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="quantity"
            label="Quantity"
            fullWidth
            variant="outlined"
            value={orderData.quantity}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="location"
            label="Location"
            fullWidth
            variant="outlined"
            value={orderData.location}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="status"
            label="Status"
            fullWidth
            variant="outlined"
            value={orderData.status}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="date"
            label="Date"
            type="date"
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={orderData.date}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateOrder;
