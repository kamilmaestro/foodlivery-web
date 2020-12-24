import * as React from 'react';
import {FoodPreview} from "../../../TablesView/ProposalFoodPreviewList/FoodPreview";

export const OrderedFoodPreview = ({ food, onClick }) => {

  const foodValue = {
    amount: food.amountOfFood,
    name: food.foodName,
    price: food.foodPrice
  };

  return (
    <FoodPreview food={foodValue} onClick={onClick} />
  );
};