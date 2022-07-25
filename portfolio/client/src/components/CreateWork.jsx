import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../index";
import {createWork, fetchCategories} from "../http/portfolioAPI";
import {observer} from "mobx-react-lite";

const CreateWork = observer(({show, onHide}) => {
    const {work} = useContext(Context)

    const [name, setName] = useState('')
    const [smallDescription, setSmallDescription] = useState('')
    const [thumbnail, setThumbnail] = useState(null)
    const [bigDescription, setBigDescription] = useState('')
    const [website, setWebsite] = useState('')
    const [stack, setStack] = useState('')
    const [year, setYear] = useState(0)

    const [category, setCategory] = useState([])

    useEffect(() => {
        fetchCategories().then(data=>work.setCategories(data))
    }, [])

    const addWork = () => {
        const formData = new FormData()
        formData.append('name',name)
        formData.append('smallDescription',smallDescription)
        formData.append('thumbnail', thumbnail)
        formData.append('bigDescription',bigDescription)
        formData.append('website',website)
        formData.append('stack', stack)
        formData.append('year', year)
        formData.append('categoryId', category.id)

        createWork(formData).then(data => onHide())
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
                            {category.name || "Pick category"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                work.categories.map(cat =>
                                <Dropdown.Item key={cat.id} onClick={()=> {
                                    setCategory(cat)
                                }} >
                                    {cat.name}
                                </Dropdown.Item>
                                )
                            }
                        </Dropdown.Menu>
                    </Dropdown>

                    <Form.Control
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        className="my-2"
                    />
                    <Form.Control
                        value={smallDescription}
                        onChange={(e) => setSmallDescription(e.target.value)}
                        placeholder="Small Description"
                        className="my-2"
                    />
                    <Form.Control
                        placeholder="Thumbnail"
                        type="file"
                        className="my-2"
                        onChange={e => {
                            setThumbnail(e.target.files[0])
                            console.log(thumbnail)
                        }}
                    />
                    <Form.Control
                        value={bigDescription}
                        onChange={(e) => setBigDescription(e.target.value)}
                        placeholder="Big Description"
                        className="my-2"
                    />
                    <Form.Control
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="Website"
                        className="my-2"
                    />
                    <Form.Control
                        value={stack}
                        onChange={(e) => setStack(e.target.value)}
                        placeholder="Stack"
                        className="my-2"
                    />
                    <Form.Control
                        value={year}
                        onChange={(e) => setYear(Number(e.target.value))}
                        placeholder="Year"
                        type="number"
                        className="my-2"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={addWork} >
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateWork;