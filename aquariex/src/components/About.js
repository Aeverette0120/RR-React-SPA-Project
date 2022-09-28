import { Card, Container } from 'react-bootstrap'

export default function About () {
    return (
<Container>
    <Card border='info'>
        <Card.Header className="blockquote mb-0 card-body">About Us</Card.Header>
        <Card.Body>
            <Card.Text>When Customer Service meets Industry-Leading Technology.</Card.Text>
           
        </Card.Body>
        <Card.Img style={{ width: '50%', margin: '0 auto'}} variant="bottom" src="" />
    </Card>
</Container>

    )
}