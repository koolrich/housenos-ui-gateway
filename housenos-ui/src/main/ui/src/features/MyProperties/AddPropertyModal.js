import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Modal, ModalBody, Button } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import AvText from '../../util/components/AvText';
import AvSelect from '../../util/components/AvSelect';
import { fetchRefData } from '../../service/refdata/RefDataActions';
import {createPropertyGroup} from './PropertyAction';
import { getPropertyTypes } from '../../service/refdata/RefDataReducer';


const AddPropertyModal = (props) => {
    const [federalStates,] = useState([{ value: "", display: 'Please select' }]
        .concat(props.federalStates.map(federalState => {
            return { value: federalState.name, display: federalState.name }
        })));

    const [towns, setTowns] = useState([{ value: "", display: 'Please select' }]);
    

    const onFederalStateChange = (event) => {
        const townsFromSelectedState = getTownsForState(event.target.value).map(town => {
            return { value: town, display: town }
        });
        setTowns(
            [{ value: "", display: 'Please select' }].concat(townsFromSelectedState)
        );
    }

    const getTownsForState = (selectedState) => {
        if (!selectedState) return [];

        return props.federalStates.filter(federalState =>
            federalState.name == selectedState)[0].towns;
    }

    const savePropertyGroup = (event, values) => {
        console.log('Property group to save: ' + JSON.stringify(values));
        if (!props.isNew) {
            console.log('Calling api to add property');
          props.createPropertyGroup(values);
        } 
      };

    useEffect(() => {
       alert('Is new?: ' +props.isNew);
    }, []);

    const { propertyGroup} = props;

    return (
        <Modal isOpen={props.isOpen} toggle={props.toggle}>

            <div className="modal-header">
                <h5 className="modal-title w-100 text-center">Add Property</h5>
                <button className="close" onClick={props.toggle}>&times;</button>
            </div>
            <AvForm onValidSubmit={savePropertyGroup}>
                <ModalBody>
                    <h6 className="mb-3">Please provide your property's info</h6>

                    <AvText name="propertyName"
                        value={propertyGroup.propertyName}
                        label="Property name"
                        validate={{
                            maxLength: {
                                value: 100,
                                errorMessage: 'Property name cannot be longer than 100 characters'
                            }
                        }}
                    />

                    <AvSelect name="propertyType"
                        value={propertyGroup.propertyType}
                        options={props.propertyTypes}
                        label="Property type"
                        validate={{
                            required: {
                                value: true,
                                errorMessage: 'Property type is required'
                            }
                        }}
                    />

                    <AvText name="address"
                        value={propertyGroup.address}
                        label="Property address"
                        validate={{
                            required: {
                                value: true,
                                errorMessage: 'Property address is required'
                            },
                            minLength: {
                                value: 1,
                                errorMessage: 'Property address is required to be atleast 1 character'
                            },
                            maxLength: {
                                value: 100,
                                errorMessage: 'Property address cannot be longer than 200 characters'
                            }
                        }}
                    />

                    <AvSelect name="state"
                        value={propertyGroup.state}
                        options={federalStates}
                        label="State"
                        onChange={onFederalStateChange}
                        validate={{
                            required: {
                                value: true,
                                errorMessage: 'State is required'
                            }
                        }}
                    />

                    <AvSelect name="town"
                        value={propertyGroup.town}
                        options={towns}
                        label="City/Town"
                        validate={{
                            required: {
                                value: true,
                                errorMessage: 'City is required'
                            }
                        }}
                    />

                    <Button color="primary" block>Create listing</Button>

                </ModalBody>
            </AvForm>
        </Modal>
    );
}

const mapDispatchToProps = dispatch => ({
    fetchRefData: () => dispatch(fetchRefData()),
    createPropertyGroup: (propertyGroup) => dispatch(createPropertyGroup(propertyGroup))
});

function mapStateToProps(state) {
    return {
        loaded: state.refData.loaded,
        propertyTypes: getPropertyTypes(state),
        federalStates: state.refData.staticRefData.federalStates,
        propertyGroup: state.property.propertyGroup
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPropertyModal);