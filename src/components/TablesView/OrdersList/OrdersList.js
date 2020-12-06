import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getOrdersPage } from '../../../apiServices/orderApi';
import List from '@material-ui/core/List';
import { OrderPreview } from './OrderPreview';

export const OrdersList = ({ tableId, members }) => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (tableId) {
      getOrders(tableId);
    }
  }, [tableId]);

  const getOrders = (tableId) => {
    getOrdersPage(tableId)
      .then((response) => {
        setOrders(response.data.content);
      }).catch(error => {
        console.log(error)
      })
  }

  return (
    <div>
      <List component="nav">
        {
          orders.map((order, index) => (
            <OrderPreview
              order={order}
              key={index}
            />
          ))
        }
      </List>
    </div>
  );
};