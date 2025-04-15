import { useState } from "react"

const ListExample = () => {

    const [list] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'])
    const [users,setUsers] = useState([
        { id: 1, name: 'Edinho' },
        { id: 2, name: 'Lucas' },
        { id: 3, name: 'João' },
        { id: 4, name: 'Maria' },
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * list.length)
        
        setUsers((prevUsers) => {
            return prevUsers.filter((user) => {
                return user.id !== randomNumber
            })
        })
    }


    return(
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            <button onClick={
                deleteRandom
            }>Delete Random</button>
        </div>
    )


}

export default ListExample