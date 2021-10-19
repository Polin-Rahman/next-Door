import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceId } = useParams();

    const [serviceDetails, setServiceDetails] = useState([]);

    useEffect(() => {
        fetch('/medical-fake-data.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data));
    }, []);


    const foundService = serviceDetails.find(
        (service) => service.id == serviceId);

    return (
        <div>
            <h3 className="text-center mt-5">Welcome to {foundService?.name} Department</h3>
            <div className="d-flex justify-content-center my-5">
                <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={foundService?.img} />
                    <Card.Body>
                        <Card.Title>Our Specialist : {foundService?.specialist}</Card.Title>
                        <h6 className="text-primary">About Us</h6>
                        <Card.Text>
                            {foundService?.description}
                        </Card.Text>
                        <Button variant="outline-dark">Book Appoinment</Button>
                    </Card.Body>
                </Card>
            </div>
        </div >
    );
};

export default ServiceDetails;