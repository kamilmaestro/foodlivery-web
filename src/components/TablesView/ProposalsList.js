import React, { useState, useEffect } from 'react';
import { getFoodByIds, getSupplierByIds, getSuppliersPage } from '../../apiServices/supplierApi';
import { AddSupplierModal } from '../../components/SuppliersView/AddSupplierModal';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import { SupplierPreview } from '../../components/SuppliersView/SupplierPreview';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { supplierUrl } from '../../utils/urlProvider';
import { getProposalsPage } from '../../apiServices/orderApi';
import { ProposalPreview } from './ProposalPreview';

export const ProposalsList = ({ tableId, proposals, members }) => {

  const history = useHistory();
  //const [proposals, setProposals] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [food, setFood] = useState([]);

  // useEffect(() => {
  //   if (tableId) {
  //     getProposals(tableId);
  //   }
  // }, [tableId])

  // const getProposals = (tableId) => {
  //   getProposalsPage(tableId)
  //     .then((response) => {
  //       setProposals(response.data.content);
  //       getSuppliers(response.data.content);
  //       getFood(response.data.content);
  //     }).catch(error => {
  //       console.log(error)
  //     })
  // }

  useEffect(() => {
    if (proposals) {
      getSuppliers(proposals);
      getFood(proposals);
    }
  }, [proposals])

  const getSuppliers = (proposals) => {
    const supplierIds = proposals.map(proposal => proposal.supplierId)
    getSupplierByIds(supplierIds)
      .then((response) => {
        setSuppliers(response.data);
      }).catch(error => {
        console.log(error)
      })
  }

  const getFood = (proposals) => {
    const foodIds = proposals.map(proposal => proposal.foodId)
    getFoodByIds(foodIds)
      .then((response) => {
        setFood(response.data);
      }).catch(error => {
        console.log(error)
      })
  }

  const onPreviewClick = (supplierId, supplierName) => {
    //history.push(supplierUrl(supplierId, supplierName));
  }

  const getMemberName = (proposal) => {
    const member = members.find(member => member.memberId === proposal.createdBy)
    return member ?
      member.memberName
      : null;
  }

  return (
    <div style={{marginLeft: '10%', marginRight: '15%', marginBottom: '10%', width: '100%'}}>
      <List component="nav">
        {
          proposals.map((proposal, index) => (
            <ProposalPreview 
              proposal={proposal}
              supplier={suppliers.find(supplier => supplier.id === proposal.supplierId)}
              food={food.find(food => food.id === proposal.foodId)}
              memberName={getMemberName(proposal)}
              onClick={onPreviewClick} 
              key={index} 
            />
          ))
        }
      </List>
    </div>
  );
};
