import {makeAutoObservable} from "mobx";

//TODO: GH-PAGES
/*#region GH-PAGES*/
import sprint from "../static/thumbnails/7087b952-1ee2-4363-abca-8072ba3e6bf9.svg"
import this_site from "../static/thumbnails/efb36397-2122-4a54-af3f-d26cc7fccaed.svg"
import digital_craft from "../static/thumbnails/23211bff-3c8c-4a9e-b347-2332042701ca.svg"
import worldskills from "../static/thumbnails/9470097f-5ea9-4c1b-b39a-5f973eb98fef.svg"
/*#endregion GH-PAGES*/

export default class PortfolioStore{
    constructor() {
        //TODO: GH-PAGES
        /*#region GH-PAGES*/
        this._works = [
            {
                "id": 3,
                "name": "Sprint",
                "smallDescription": "An online store of goods for fishing from outdoor activities",
                "thumbnail": sprint,
                "bigDescription": "An online store of goods for fishing from outdoor activities. My first commercial project. Not the best tech stack, but good experience in design and team work. ",
                "website": "",
                "stack": "HTML, CSS, MODX CMS, PHP",
                "year": 2022,
                "createdAt": "2022-07-25T05:55:16.089Z",
                "updatedAt": "2022-07-25T05:55:16.089Z",
                "categoryId": 1
            },
            {
                "id": 1,
                "name": "This website",
                "smallDescription": "U’re here rn 🙂",
                "thumbnail": this_site,
                "bigDescription": "Pat-project made with PERN stack.",
                "website": "https://rupeople.github.io/portfolio-main/",
                "stack": "React, MobX, Axios, NodeJS, Express, PostgreSQL, Sequelize",
                "year": 2022,
                "createdAt": "2022-07-25T06:21:20.176Z",
                "updatedAt": "2022-07-25T06:21:20.176Z",
                "categoryId": 1
            },
            {
                "id": 2,
                "name": "Digital Craft",
                "smallDescription": "A website for in-University community",
                "thumbnail": digital_craft,
                "bigDescription": "Digital Craft is a in-University community where people share experiences and help each other find themselves in various fields such as electrical engineering, programming, computer graphics and digital production.",
                "website": "",
                "stack": "HTML, CSS, JavaScript",
                "year": 2020,
                "createdAt": "2022-07-25T06:03:41.632Z",
                "updatedAt": "2022-07-25T06:03:41.632Z",
                "categoryId": 1
            },
            {
                "id": 58,
                "name": "WorldSkills",
                "smallDescription": "My programming championship adventure",
                "thumbnail": worldskills,
                "bigDescription": "WorldSkills International is an international non-profit association whose goal is to raise the status and standards of professional training and qualifications around the world, popularize working professions through international competitions around the world. My participation in the championship began with participation in the regional championship, in which my teammate and I took first place. The next stage was our performance at the qualifying competitions in St. Petersburg, which we completed with success. Now we are the finalists of Russia in the competence \"Development of virtual and augmented reality\"!",
                "website": "",
                "stack": "Unity, ARCore, XR Interaction Toolkit",
                "year": 2021,
                "createdAt": "2022-07-25T07:12:10.441Z",
                "updatedAt": "2022-07-25T07:12:10.441Z",
                "categoryId": 2
            }
        ]
        this._categories = [
            {
                "id": 1,
                "name": "WEB",
                "createdAt": "2022-07-14T05:45:14.577Z",
                "updatedAt": "2022-07-14T05:45:14.577Z"
            },
            {
                "id": 2,
                "name": "Unity",
                "createdAt": "2022-07-14T05:45:22.282Z",
                "updatedAt": "2022-07-14T05:45:22.282Z"
            }
        ]
        this._images = []
        /*#endregion GH-PAGES*/


        //TODO: FullStack
        /*#region FullStack*/
        /*this._works = []
        this._categories = []
        this._images = []*/
        /*#endregion FullStack*/
        makeAutoObservable(this)
    }


    setWorks(works){
        this._works = works
    }
    get works(){
        return this._works
    }


    setCategories(categories){
        this._categories = categories
    }
    get categories(){
        return this._categories
    }

}