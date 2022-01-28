import React from "react"
import axios from "axios"
import { Card, CardHeader, CardTitle } from 'reactstrap'

class TableBasic extends React.Component {
    state = {
        listUsers: [],
        data: []
    }
    async componentDidMount () {
        const res = await axios.get('https://randomuser.me/api/?results=5')
        this.setState({
            listUsers: res && res.data && res.data.results ? res.data.results : []
        })
        console.log("res", res)
        console.log("setState", this.state.listUsers)
    }

    render() {
        const { listUsers } = this.state
        return (
            <Card>
                <CardHeader>
                    <CardTitle tag='h4'>Danh sách người dùng</CardTitle>
                </CardHeader>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} -{item.name.title} {item.name.first} {item.last_name}
                                </div>
                            )
                        })
                    }
                </div>
            </Card>
        )
    }
}

export default TableBasic