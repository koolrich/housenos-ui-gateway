import React, { useState, useCallback } from 'react';
import { Row, Col, Button, InputGroup, InputGroupAddon, Input, Label, FormGroup } from 'reactstrap';
import Number from '../../util/components/Number';
import Select from '../../util/components/Select';
import TextArea from '../../util/components/TextArea';
import Text from '../../util/components/Text';
import Email from '../../util/components/Email';
import Telephone from '../../util/components/Telephone';
import Checkbox from '../../util/components/Checkbox';
import useForm from '../../util/hooks/Forms';
import { formState } from './PropertyListFormState';
import Dropzone from './Dropzone';
import cuid from 'cuid';
import ImagePreview from './ImagePreview'
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'
import update from 'immutability-helper';

function PropertyListForm(props) {

    const onSubmit = () => {
        console.log('Submit');
    }

    const [images, setImages] = useState([]);
    const { formFields, setFormFields, handleChange, handleSubmit } = useForm(onSubmit, formState);

    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles.map(file => {
            const reader = new FileReader();
            reader.onload = function (e) {
                setImages(prevState => [
                    ...prevState,
                    { id: cuid(), src: e.target.result }
                ]);
            };
            reader.readAsDataURL(file);
            return file;
        });
    }, []);

    const moveImage = (dragIndex, targetIndex) => {
        const draggedImage = images[dragIndex];
        setImages(
            update(images, {
                $splice: [[dragIndex, 1], [targetIndex, 0, draggedImage]]
            })
        );
    }

    return (
        <>
            <Col sm="12"><h4>Details and description</h4></Col>

            <Col md={6}>
                <Number name="price"
                    placeholder="Enter amount"
                    title="Price"
                    hideLabel={false}

                    valid={true}
                    errorMessage={''}
                />
                <Select name="beds"
                    value={formFields.beds.value}
                    options={formFields.beds.options}
                    title="Beds"
                    onChange={handleChange}
                    valid={formFields.beds.valid}
                    errorMessage={formFields.beds.errorMessage}
                />
                <Select name="baths"
                    value={formFields.baths.value}
                    options={formFields.baths.options}
                    title="Baths"
                    onChange={handleChange}
                    valid={formFields.baths.valid}
                    errorMessage={formFields.baths.errorMessage}
                />

            </Col>
            <Col md={6}>
                <Select name="tenure"
                    value={formFields.tenure.value}
                    options={formFields.tenure.options}
                    hideLabel={false}
                    title="Duration"
                    onChange={handleChange}
                    valid={formFields.tenure.valid}
                    errorMessage={formFields.tenure.errorMessage}
                />
                <TextArea name="description" value={formFields.description.value}
                    placeholder="What makes your place awesome?"
                    title="Description"
                    onChange={handleChange}
                    valid={formFields.description.valid}
                    errorMessage={formFields.description.errorMessage}
                />
                <Select name="occupancy"
                    value={formFields.occupancy.value}
                    options={formFields.occupancy.options}
                    title="Occupancy"
                    onChange={handleChange}
                    valid={formFields.occupancy.valid}
                    errorMessage={formFields.occupancy.errorMessage}
                />
            </Col>

            <Col sm="12"><hr /></Col>

            <Col sm="12"><h4>Contact information</h4></Col>
            <Col md="6">
                <Text name="name" value={formFields.name.value}
                    placeholder="Your name here"
                    title="Name"
                    onChange={handleChange}
                    valid={formFields.name.valid}
                    errorMessage={formFields.name.errorMessage}
                />
                <Telephone name="phone" value={formFields.phone.value}
                    placeholder="Phone number"
                    title="Phone number"
                    onChange={handleChange}
                    valid={formFields.phone.valid}
                    errorMessage={formFields.phone.errorMessage}
                />

                <Row>
                    <Col md="6">
                        <Button block disabled color="outline-primary">Verify with text</Button>
                    </Col>
                    <Col md="6">
                        <Button block disabled color="outline-primary">Verify with call</Button>
                    </Col>
                </Row>
            </Col>
            <Col md="6">
                <Email name="email" value={formFields.email.value}
                    placeholder="Email address"
                    title="Email"
                    onChange={handleChange}
                    valid={formFields.email.valid}
                    errorMessage={formFields.email.errorMessage}
                />
            </Col>

            <Col sm="12"><hr /></Col>

            <Col sm="12"><h4>Amenities and appliances</h4></Col>
            <Col md="6">
                <Row>
                    <Col sm="12">
                        <span>Amenities</span>
                        <hr />
                    </Col>
                </Row>
                <Checkbox name="ac" title="Air Condition" />
                <Checkbox name="wardrobe" title="Wardrobe" />
                <Checkbox name="fittedKitchen" title="Fitted Kitchen" />
                <Checkbox name="singleBed" title="Single Bed" />
                <Checkbox name="doubleBed" title="Double Bed" />

                <FormGroup>
                    <Label className="mb-0" for="features">Additional amenities</Label>
                    <InputGroup>
                        <Input type="text" name="features" />
                        <InputGroupAddon addonType="append"><Button color="primary active">Add</Button></InputGroupAddon>
                    </InputGroup>
                </FormGroup>
            </Col>
            <Col md="6">
                <Row>
                    <Col sm="12">
                        <span>Appliances</span>
                        <hr />
                    </Col>
                </Row>
                <Checkbox name="ac" title="Air Condition" />
                <Checkbox name="wardrobe" title="Wardrobe" />
                <Checkbox name="fittedKitchen" title="Fitted Kitchen" />
                <Checkbox name="singleBed" title="Single Bed" />
                <Checkbox name="doubleBed" title="Double Bed" />
            </Col>

            <Col sm="12"><hr /></Col>

            <Col sm="12"><h4>Photos</h4></Col>

            <Col>
                <DndProvider backend={HTML5Backend}>
                    <ImagePreview images={images} moveImage={moveImage}/>
                </DndProvider>
            </Col>

            <Col sm="12">
                <Dropzone onDrop={onDrop} accept={"image/*"} />
            </Col>
            

        </>
    );
}

export default PropertyListForm;