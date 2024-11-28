/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom"

function ElementList({list}) {
    const {id} = useParams()
    const start = (id-1)*10
    const end = start + 10
    let subList = list.slice(start, end)

    return (
        <div className="list">
            <h2>Pagination</h2>
            <table>
            </table>
            {subList.map((item)=> {
                return(
                    <tr key={item.id}>
                        <td>{item.id}-</td>
                        <td>{item.title}</td>
                    </tr>
                )
            })}
        </div>
    )
    }

export default ElementList