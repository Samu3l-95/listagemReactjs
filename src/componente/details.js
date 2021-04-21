import { Accordion, Card } from "@material-ui/core";
import axios from "axios";
import { Button } from "bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import { Table, useAccordionToggle } from "react-bootstrap";

function Details() {
    const [data, setData] = useState([])
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');
    const getDetailsService = () => {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        axios.get(url).then(res => {
            const result = res.data.find(el => el.id == myParam)
            setData(result)
        })
    }

    useEffect(() => {
        getDetailsService()
    }, [])

   

    return (
        <>


            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{myParam}</td>
                        <td>{data.title}</td>
                        <td>{data.body}</td>
                    </tr>

                </tbody>
            </Table>

         

        </>
    )
}
export default Details;
