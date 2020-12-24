import * as React from 'react';
import Card from "@material-ui/core/Card";
import {getImageUrl} from "../../../utils/imagesGetter";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {useEffect, useState} from "react";
import {getUsersByIds} from "../../../apiServices/userApi";
import {UserOrdersList} from "./UserOrders/UserOrdersList";
import {Header} from "./Header/Header";
import {getOrderWithUserOrders} from "../../../apiServices/orderApi";
import {supplierUrl} from "../../../utils/urlProvider";

export const OrderView = ({ orderId, supplier, table, history }) => {

  const classes = useStyles();
  const [order, setOrder] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (orderId) {
      getOrder(orderId);
    }
  }, [orderId]);

  useEffect(() => {
    if (order) {
      getUsers(order);
    }
  }, [order]);

  const getOrder = (orderId) => {
    getOrderWithUserOrders(orderId)
      .then((response) => {
        setOrder(response.data);
      }).catch(error => {
        console.log(error)
      });
  }

  const getUsers = (order) => {
    const userIds = order.userOrders.map(userOrder => userOrder.orderedFor);
    userIds.push(order.purchaserId);
    getUsersByIds(userIds)
      .then((response) => {
        setUsers(response.data);
      }).catch(error => {
        console.log(error)
      });
  }

  const getPurchaserName = () => {
    const purchaser = users.find(user => order.purchaserId === user.userId);
    return purchaser ? purchaser.username : '';
  }

  const goToSupplier = () => {
    history.push(supplierUrl(supplier.id, supplier.name));
  }

  return (
    <div className={classes.root} >
      <Card >
        <Header
          supplierName={supplier ? supplier.name : null}
          tableName={table ? table.name : null}
          purchaserName={getPurchaserName()}
          orderStatus={order ? order.status : null}
        />
        <img
          className={classes.media}
          src={getImageUrl(supplier ? supplier.imageId : null)}
          alt=''
        />
        <div className={classes.info}>
          <CardActions className={classes.action}>
            <Button size="medium" color="primary" variant="contained">
              Zamów jedzenie
            </Button>
          </CardActions>
        </div>
      </Card>
      <UserOrdersList userOrders={order ? order.userOrders : []} users={users} onFoodClick={goToSupplier} />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '2%'
  },
  media: {
    marginTop: 25,
    maxHeight: 250,
    objectFit: 'contain',
    width: '100%',
    borderRadius: '10%'
  },
  info: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '3%',
    marginRight: '3%'
  },
  action: {
    marginRight: '2%'
  }
}));
