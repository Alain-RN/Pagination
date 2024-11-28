/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"

function Navigation({ len }) {

    if(len === 0) {
        return
    }
    let tbIndex = []
    for(let i=0; i<Math.ceil(len/10); i++) {
        tbIndex.push(i+1)
    }
    return (
        <table>
            <tr>
            {
                tbIndex.map( (index)=> {
                    return(<td key={index}>
                            <NavLink className={({ isActive })=> isActive?"":""} to={"/"+index} href={`/${index-1}`}>{index}</NavLink>
                        </td>
                    )
                })
            }
            </tr>
        </table>
    )
}

export default Navigation