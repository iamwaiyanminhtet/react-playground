import { Link, Outlet } from "react-router-dom"
import { useParams } from "react-router-dom";



const Userlist = () => {
    const {id} = useParams();
    let userList = [
        { name : 'user1', email : 'user1@gmail.com'},
        { name : 'user2', email : 'user2@gmail.com'},
    ];

  return (
    <>
    <h1>This is Userlist Page</h1>
    <Link to='/'>Back to Home page</Link>

    <div>
        {userList.map((user, idx) => <Link key={idx} to={`/userlist/${idx}`}>{user.name}</Link>)}
    </div>

    {
       id ==  0 ? <User user={userList[0]}/>  : ''
    }
    {
       id == 1 ? <User user={userList[1]}/>  : ''
    }
    </>
  )
}

const User = ({user}) => {
    return (
        <>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        </>
    )
}

export {User}

export default Userlist