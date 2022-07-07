import React from 'react';
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/about.css"
import axios from 'axios';
import tmp from "./../assets/img/tmp_a3c76bd2-a8b0-4684-8f50-ad7f3f5daaa5.jpg"
export default class About extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            val: 0,
            messageContent: "",
        }
    }
    async componentDidMount() {
        console.log("envoie")
        let visit = await axios.get('https://localhost:3002/visitor')
        this.setState({val: visit.data[1]})
        console.log(visit.data)
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>About</h1>
                        <p>
                            This is the about page.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="vh-50"  >
                        <div className="container py-5 h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col col-md-9 col-lg-7 col-xl-5">
                                    <div className="card">
                                        <div className="card-body p-4">
                                            <div className="d-flex text-black">
                                                <div className="flex-shrink-0">
                                                    <img
                                                        src={tmp}
                                                        alt="Generic" className="img-fluid" id="img1"
                                                    />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h5 className="mb-1">Jacques</h5>
                                                    <p id="p1" className="mb-2 pb-1" >Développeur web</p>
                                                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                                                         id="index" >
                                                        <div>
                                                            <p className="small text-muted mb-1">Visite</p>
                                                            <p className="mb-0">
                                                                {this.state.val}
                                                            </p>
                                                        </div>
                                                        <div className="px-3">
                                                            <p className="small text-muted mb-1">Followers</p>
                                                            <p className="mb-0">976</p>
                                                        </div>
                                                        <div>
                                                            <p className="small text-muted mb-1">Rating</p>
                                                            <p className="mb-0">8.5</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}