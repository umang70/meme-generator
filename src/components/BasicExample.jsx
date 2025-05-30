import './BasicExample.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function BasicExample(props) {
    const navigate = useNavigate();
    return (
        <Card className="custom-card">
            <Card.Img className="custom-card-img" variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Button
                    className="custom-edit-btn"
                    onClick={e => navigate(`/edit?url=${props.img}`)}
                    variant="primary"
                >
                    Edit
                </Button>
            </Card.Body>
        </Card>
    );
}

export default BasicExample;