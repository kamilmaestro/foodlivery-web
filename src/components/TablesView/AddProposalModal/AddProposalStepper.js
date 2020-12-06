import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import { SearchBar } from '../../MainView/SearchBar';
import { getSupplierFoodPage, getSuppliersPage, searchSuppliersPage } from '../../../apiServices/supplierApi';
import { ItemsList } from './ItemsList';
import TextField from '@material-ui/core/TextField';
import { Tooltip } from '@material-ui/core';

export const AddProposalStepper = ({ onFinish }) => {

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [search, setSearch] = useState(null);
  const [suppliers, setSuppliers] = useState([]);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [food, setFood] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [amount, setAmount] = useState(null);
  const steps = [
    { 
      label: 'Wybierz dostawcę', 
      tooltip: 'Zaproponujesz innym zamawianie od tego dostawcy' 
    }, 
    { 
      label: `Wybierz pozycję z menu: ${selectedSupplier ? selectedSupplier.name : ''}`, 
      tooltip: 'Wybierz jedną pozycję, którą zachęcisz innych do zakupu u tego dostawcy' 
    }, 
    { 
      label: `Podaj ilość dla: ${selectedFood ? selectedFood.name : ''}`, 
      tooltip: 'Ilość zostanie rozważona w przypadku przekształcenia propozycji w zamówienie' 
    }
  ];

  useEffect(() => {
    if (search) {
      searchSuppliers(search);
    } else {
      getSuppliers();
    }
  }, [search])

  useEffect(() => {
    if (selectedSupplier) {
      getFood(selectedSupplier.id);
    }
  }, [selectedSupplier])

  const searchSuppliers = (search) => {
    searchSuppliersPage(search)
      .then((response) => {
        setSuppliers(response.data.content);
      }).catch(error => {
        console.log(error)
      })
  }

  const getSuppliers = () => {
    getSuppliersPage()
      .then((response) => {
        setSuppliers(response.data.content);
      }).catch(error => {
        console.log(error)
      })
  }

  const getFood = (supplierId) => {
    getSupplierFoodPage(supplierId)
      .then((response) => {
        setFood(response.data.content);
      }).catch(error => {
        console.log(error)
      })
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === steps.length - 1) {
      onFinish(selectedSupplier.id, selectedFood.id, amount);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const handleSupplierClick = (supplier) => {
    setSelectedSupplier(supplier);
  };

  const handleFoodClick = (food) => {
    setSelectedFood(food);
  };

  const handleAmountChanged = (event) => {
    setAmount(event.target.value);
  }

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div >
            <SearchBar text={search} placeholder={'Szukaj dostawcy'} onChange={updateSearch} />
            <ItemsList items={suppliers} selectedId={selectedSupplier ? selectedSupplier.id : null} onClick={handleSupplierClick} />
          </div>
        );
      case 1:
        return (
          <div >
            <ItemsList items={food} selectedId={selectedFood ? selectedFood.id : null} onClick={handleFoodClick} />
          </div>
        );
      case 2:
        return (
          <TextField
            margin="dense"
            label="Ilość"
            fullWidth
            type="number"
            onChange={handleAmountChanged}
            style={{marginRight: 50}}
          />
        );
      default:
        return 'Unknown step';
    }
  }

  const isNextStepEnabled = (step) => {
    switch (step) {
      case 0:
        return !!selectedSupplier;
      case 1:
        return !!selectedFood;
      case 2:
        return amount > 0;
      default:
        return true;
    }
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {
          steps.map((step, index) => (
            <Step key={index}>
              <Tooltip title={step.tooltip}>
                <StepLabel>{step.label}</StepLabel>
              </Tooltip>
              <StepContent>
                {
                  getStepContent(index)
                }
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Cofnij
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                      disabled={!isNextStepEnabled(index)}
                    >
                      { activeStep === steps.length - 1 ? 'Potwierdź' : 'Dalej' }
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))
        }
      </Stepper>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  list: {
    maxHeight: 150
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));
