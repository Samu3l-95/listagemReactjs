import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";


function ScreenList() {
    const [data, setData] = useState([])

    const getListService = () => {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        axios.get(url).then(res => {
            setData(res.data)
        })

    }


    useEffect(() => {
        getListService()
    }, [])


    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>


                    {
                        data.map(res => {
                            return (
                                <tr>
                                    <td>{res.id}</td>
                                    <td>
                                        <a href={`/Details?id=${res.id}`}>
                                            <div>
                                                {res.title}
                                            </div>
                                        </a>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>


        </>
    )
}
export default ScreenList;
