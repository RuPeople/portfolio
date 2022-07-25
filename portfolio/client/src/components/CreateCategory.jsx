import React, {useContext, useEffect, useState} from 'react';
import {Button, Form, ListGroup, Modal} from "react-bootstrap";
import {Context} from "../index";
import {createCategory, fetchCategories} from "../http/portfolioAPI";
import {observer} from "mobx-react-lite";

const CreateCategory = observer(({show, onHide}) => {
    const [value, setValue] = useState('')
    const {work} = useContext(Context)

    useEffect(() => {
        fetchCategories().then(data=>work.setCategories(data))
        console.log(work.categories)
    }, [])

    const addCategory = () => {
        createCategory({name:value}).then(data =>{
            setValue('')
            onHide()
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Create category</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Categories:</h5>
                <ListGroup className="mb-2">
                    {work.categories.map(category =>
                        <ListGroup.Item key={category.id} >{category.name}</ListGroup.Item>
                    )}
                </ListGroup>

                <Form>
                    <Form.Control
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Type category name"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={addCategory} >
                    addCategory
                </Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateCategory;