import React from 'react';
import FollowersData from './FollowersData'
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;

    @media screen and (max-width:414px){
        flex-direction: column;
        align-items: center;
    }
`

const H2 = styled.h2`
    margin: 5% 0;
    font-size:2rem;

    @media screen and (max-width:375px){
        font-size: 1.6rem;
    }
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