import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useRouteMatch } from "react-router-dom";
import { SUPPLIER_VIEW_URL, SUPPLIERS_VIEW_URL } from '../utils/urlProvider';
import {MainViewDrawer} from '../components/MainView/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Header } from '../components/MainView/Header';
import { TablesList } from '../components/TablesView/TablesList';
import { getMembersList, getTablesPage, joinNewTable } from '../apiServices/tablesApi';
import { AddTableModal } from '../components/TablesView/AddTableModal';
import { ProposalsList } from '../components/TablesView/ProposalsList';
import { JoinTableModal } from '../components/TablesView/JoinTableModal';
import { InvitationPopover } from '../components/TablesView/InvitationPopover';
import { MembersDrawer } from '../components/TablesView/MembersDrawer';
import { AddProposalFAB } from '../components/TablesView/AddProposalFAB';
import { AddProposalModal } from '../components/TablesView/AddProposalModal/AddProposalModal';
import { getProposalsPage, createNewProposal } from '../apiServices/orderApi';

export const TablesView = () => {

  const classes = useStyles();
  const match = useRouteMatch();
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [tables, setTables] = useState([]);
  const [currentTable, setCurrentTable] = useState(null);
  const [proposals, setProposals] = useState([]);
  const [members, setMembers] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isJoinTableModalOpen, setIsJoinTableModalOpen] = useState(false);
  const [isAddProposalModalOpen, setIsAddProposalModalOpen] = useState(false);
  const [isInviatationPopoverOpen, setIsInviatationPopoverOpen] = useState(false);
  const [isMembersDrawerOpen, setIsMembersDrawerOpen] = useState(false);

  useEffect(() => {
    getTables();
  }, [])

  useEffect(() => {
    getTableMembers(currentTable);
  }, [currentTable])

  
  useEffect(() => {
    if (currentTable) {
      getProposals(currentTable);
    }
  }, [currentTable])

  const getTables = () => {
    getTablesPage()
      .then((response) => {
        setTables(response.data.content);
        if (response.data.content.length >= 1) {
          setCurrentTable(response.data.content[0].id);
        }
      }).catch(error => {
        console.log(error)
      });
  }

  const getTableMembers = (tableId) => {
    if (tableId) {
    getMembersList(tableId)
      .then((response) => {
        setMembers(response.data);
      }).catch(error => {
        console.log(error)
      });
    }
  }

  const getProposals = (tableId) => {
    getProposalsPage(tableId)
      .then((response) => {
        console.log('prop ', response.data.content)
        setProposals(response.data.content);
      }).catch(error => {
        console.log(error)
      })
  }

  const handleMembersDrawerOpen = () => {
    setIsMembersDrawerOpen(true);
  };

  const handleMembersDrawerClose = () => {
    setIsMembersDrawerOpen(false);
  };

  const handleAddModalOpen = () => {
    setIsAddModalOpen(true);
  };

  const handleAddModalClose = () => {
    setIsAddModalOpen(false);
  };

  const handleAddProposalModalOpen = () => {
    setIsAddProposalModalOpen(true);
  };

  const handleAddProposalModalClose = () => {
    setIsAddProposalModalOpen(false);
  };

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const onTableClick = (id) => {
    console.log('tabe: ', id)
    setCurrentTable(id)
  }

  const addProposal = (newProposal) => {
    createNewProposal(newProposal)
      .then(() => {
        getProposals(currentTable);
      }).catch(error => {
        console.log(error)
      })
  }

  const joinTable = (invitation) => {
    joinNewTable(invitation)
      .then(() => {
        getTables();
      }).catch(error => {
        console.log(error)
      })
  }

  const handleGenerateInvitationOpen = () => {
    setIsInviatationPopoverOpen(true);
  }

  const handleGenerateInvitationClose = () => {
    setIsInviatationPopoverOpen(false);
  }

  const handleJoinTableModalOpen = () => {
    setIsJoinTableModalOpen(true);
  }

  const handleJoinTableModalClose = () => {
    setIsJoinTableModalOpen(false);
  }

  return (
    <div style={{display: "flex", height: '100vh'}} >
      <CssBaseline />
      <Header 
        title={'Stoliki'}
        handleDrawerOpen={handleDrawerOpen} 
        isDrawerOpen={isDrawerOpen} 
        handleAdd={handleAddModalOpen}
        handleJoin={handleGenerateInvitationOpen}
        handlePeople={handleMembersDrawerOpen} 
      />
      <MainViewDrawer handleDrawerClose={handleDrawerClose} open={isDrawerOpen}/>
      <main className={classes.content}>
        <AddTableModal isOpen={isAddModalOpen} handleClose={handleAddModalClose} />
        <JoinTableModal isOpen={isJoinTableModalOpen} handleAccept={joinTable} handleClose={handleJoinTableModalClose} />
        <AddProposalModal isOpen={isAddProposalModalOpen} handleClose={handleAddProposalModalClose} onAddProposal={addProposal} tableId={currentTable} />
        <InvitationPopover isOpen={isInviatationPopoverOpen} handleClose={handleGenerateInvitationClose} tableId={currentTable} />
        <MembersDrawer members={members} isOpen={isMembersDrawerOpen} handleClose={handleMembersDrawerClose} />
        <div className={classes.toolbar} />
        <div style={{display: 'flex'}}>
          <TablesList 
            tables={tables} 
            onTableClick={onTableClick} 
            onAddClick={handleJoinTableModalOpen} 
            currentTableId={currentTable} 
          />
          <ProposalsList tableId={currentTable} proposals={proposals} members={members} />
          <AddProposalFAB onClick={handleAddProposalModalOpen} />
        </div>
      </main>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1
  }
}));
