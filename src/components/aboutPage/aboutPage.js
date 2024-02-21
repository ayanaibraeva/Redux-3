    import React, {useEffect} from 'react';
    import {useDispatch, useSelector} from "react-redux";
    import {fetchUsers} from "../../redux/actions";
    import UserCard from "../userCard/UserCard";
    import "./aboutPage.css"

    const AboutPage = () => {

        const users = useSelector(state => state.userReducer.users)
        const dispatch = useDispatch()

        useEffect(() => {
            dispatch(fetchUsers())
        }, [dispatch])

        console.log(users, "hi")

        return (
            <div className="cardUser">
                {users[0] && users[0].map(item => (<UserCard key={item.id} cardInfo={item} />))}
                {/*{users.length > 0 && <UserCard key={users[0].id} cardInfo={users[0]} />}*/}
            </div>
        );
    };

    export default AboutPage;