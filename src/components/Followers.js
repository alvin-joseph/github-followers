import React from 'react';
import FollowersData from './FollowersData'
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
`

const H2 = styled.h2`
    margin: 5% 0;
    font-size:2rem;
`

class Followers extends React.Component {
    render(){
        return(
            <>
                <H2>These are my followers:</H2>
            <Container>
                {  (this.props.followers.length === 0)?<p>Loading...</p>:
                    this.props.followers.map(follower => (
                        <FollowersData key={follower.id} follower={follower}/>
                    ))}
            </Container>
            </>
        )
    }
}

export default Followers;