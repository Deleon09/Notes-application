import { Form, Stack, Row, Col, Button } from 'react-bootstrap';
import CreatableReactSelect from 'react-select/creatable';
import { Link } from "react-router-dom";

const NoteForm = () => {
  return (
    <Form>
        <Stack gap={4}>
            <Row>
                <Col>
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control required type="text" placeholder="Enter title" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="tags">
                        <Form.Label>Tags</Form.Label>
                        <CreatableReactSelect isMulti />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group controlId="markdown">
                <Form.Label>Body</Form.Label>
                <Form.Control required as="textarea" rows={15} />
            </Form.Group>
            <Stack direction="horizontal" gap={2} className="justify-content-end">
                <Button type="submit" variant="primary">
                    Save
                </Button>
                <Link to=".." > {/* Move backwards one page */}
                    <Button type="button" variant="outline-secondary">
                        Cancel
                    </Button>
                </Link>
            </Stack>
        </Stack>
    </Form>
  )
}

export default NoteForm