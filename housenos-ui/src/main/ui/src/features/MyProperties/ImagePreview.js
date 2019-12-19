import React, { useRef } from 'react';
import { Card, CardImg, CardHeader, Button, Row, Col } from 'reactstrap';
import { useDrag, useDrop } from 'react-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const type = "Image";

const Image = ({ image, index, moveImage }) => {
    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: type,
        hover(item) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const targetIndex = index;

            if (dragIndex === targetIndex) {
                return;
            }

            moveImage(dragIndex, targetIndex);
            item.index = targetIndex;
        }
    });

    const [{ isDragging }, drag] = useDrag({
        item: { type, id: image.id, index },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    drag(drop(ref));

    return (
        <div className="col-lg-3 col-md-4 col-6 mb-2">

            <div ref={ref} style={{ opacity: isDragging ? 0 : 1 }} className="image-view">
                <Card className="d-block h-100">
                    <CardHeader className="text-center">
                        <Row>
                            <Col><span className="flot-left">{index + 1}</span></Col>
                            <Col><Button size="sm"><FontAwesomeIcon icon="share" className="fa-fw" /></Button></Col>
                            <Col><Button color="danger" size="sm"><FontAwesomeIcon icon="times" className="fa-fw" /></Button></Col>
                        </Row>
                    </CardHeader>
                    <CardImg className="card-img-bottom" src={image.src} />
                </Card>
            </div>
        </div>
    );
};

const ImagePreview = ({ images, moveImage }) => {
    const renderImage = (image, index) => {
        return (
            <Image image={image} index={index} moveImage={moveImage} key={`${image.id}-image`} />
        );
    };

    return (
        <div class="row text-center text-lg-left mt-3 mb-3">
            {images.map(renderImage)}
        </div>
    );
};

export default ImagePreview;