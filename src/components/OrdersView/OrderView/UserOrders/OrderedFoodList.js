import * as React from 'react';
import {List} from "@material-ui/core";
import {OrderedFoodPreview} from "./OrderedFoodPreview";

export const OrderedFoodList = ({ orderedFood, onFoodClick }) => {
  return (
    <List component="nav" style={{marginBottom: 10}}>
      {
        orderedFood.map((food, index) => (
          <OrderedFoodPreview
            food={food}
            onClick={onFoodClick}
            key={index}
          />
        ))
      }
    </List>
  );
};