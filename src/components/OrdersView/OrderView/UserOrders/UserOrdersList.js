import * as React from 'react';
import {List} from "@material-ui/core";
import {UserOrderPreview} from "./UserOrderPreview";

export const UserOrdersList = ({ userOrders, users, onFoodClick }) => {

  const getUser = (userId) => {
    return users.find(user => user.userId === userId);
  }

  return (
    <List component="nav" style={{marginBottom: 100}}>
      {
        userOrders.map((userOrder, index) => (
          <UserOrderPreview
            userOrder={userOrder}
            user={getUser(userOrder.orderedFor)}
            onFoodClick={onFoodClick}
            key={index}
          />
        ))
      }
    </List>
  );
};