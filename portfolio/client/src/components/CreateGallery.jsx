import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../index";
import work from "../pages/Work";
import {createImage, createWork, fetchCategories, fetchWorks} from "../http/portfolioAPI";
import {observer} from "mobx-react-lite";

const CreateWork = observer(({show, onHide}) => {
    const {work} = useContext(Context)


    const [image, setImage] = useState(null)
    const [workId, setWorkId] = useState('')

    useEffect(() => {
        console.log(work.works)
        fetchWorks(null).then(data=>work.setWorks(data.rows))
        console.log(work.works)
    }, [])

    /*const addImage = () => {
        setImage([...image, {img: File.name, number: Date.now()}])
    }
    const removeImage = (number) => {
        setImage(image.filter(i => i.number !== number))
    }
    const changeImage = (key, image, number) => {
        setImage(image.map(i => i.number === number ? {...i, [key]:value}:i))
    }

    const addImages = () => {
        image.map(img => {
            console.log(img)
            let formData = new FormData()
            formData.append('workId', workId)
            formData.append('img', img.files)
            createImage(formData)
        })
    }*/
    const addImages = () => {
        let formData = new FormData()
        formData.append('workId', workId)
        formData.append('img', image)
        createImage(formData).then(data => onHide())
    }


    return (
        <Modal
            show={show}
            onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Create work</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle>
                            {/*{work.selectedCategory.name || "Pick category"}*/}

                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                work.works.map(work =>
                                    <Dropdown.Item key={work.id} onClick={()=> {
                                        setWorkId(work.id)
                                    }} >
                                        {work.name}
                                    </Dropdown.Item>
                                )
                            }
                        </Dropdown.Menu>
                    </Dropdown>


                    {/*<Button onClick={addImage}>
                        Add new Image
                    </Button>*/}
                    {/*{image.map(i =>
                        <Row key={i.number} className="my-2">
                            <Col className="col-9">
                                <Form.Control
                                    value={i.image}
                                    onChange={(e) => {
                                        console.log(e.target.files[0])
                                        console.log(image)
                                        changeImage('img', e.target.files, i.number)
                                    }}
                                    placeholder="image"
                                    type="file"
                                />
                            </Col>
                            <Col>
                                <Button onClick={() => removeImage(i.number)}>Delete</Button>
                            </Col>
                        </Row>
                    )}*/}
                    <input type="file" onChange={event => {
                        setImage(event.target.files[0])
                        console.log(image)
                    }} />

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={addImages} >
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateWork;