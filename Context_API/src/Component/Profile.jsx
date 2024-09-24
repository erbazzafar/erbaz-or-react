import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'


function Profile() {

    const {user} = useContext(UserContext)

    if (!user) return <div>Please Login First</div>

    return <div> Welcome {user.userName } </div>
}

export default Profile
