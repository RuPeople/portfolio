import React, {useContext, useState, useEffect} from 'react';
import {Button, Card, Spinner} from "react-bootstrap";
import CreateWork from "../components/CreateWork";
import {Context} from "../index";
import CreateCategory from "../components/CreateCategory";
import {check} from "../http/userAPI";
import CreateGallery from "../components/CreateGallery";

const Admin = () => {
    const [workVisible, setWorkVisible] = useState(false)
    const [categoryVisible, setCategoryVisible] = useState(false)
    const [galleryVisible, setGalleryVisible] = useState(false)

    const {user} = useContext(Context)

    useEffect(()=> {
        setTimeout(()=> {
            check().then(data=>{
                user.setUser(true)
                user.setIsAuth(true)
            }).finally(()=> setLoading(false))
        }, 1000)
    }, [])

    const [loading, setLoading] = useState(true)

    if (loading){
        return <Spinner animation={"grow"}/>
    }
    return (
        <Card style={{width: 300}} className="text-white mx-auto p-2">
            <Button onClick={() => setWorkVisible(true)} className="my-2">
                Add Work
            </Button>
            <Button onClick={() => setCategoryVisible(true)} className="my-2">
                Add Category
            </Button>
            <Button onClick={() => setGalleryVisible(true)} className="my-2">
                Add gallery
            </Button>
            <CreateWork show={workVisible} onHide={() => setWorkVisible(false) } />
            <CreateCategory show={categoryVisible} onHide={() => setCategoryVisible(false) } />
            <CreateGallery show={galleryVisible} onHide={() => setGalleryVisible(false) } />
        </Card>
    );
};

export default Admin;