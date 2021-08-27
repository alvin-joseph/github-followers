import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    padding:2%;
    width:30%;
    border:5px solid black;
    margin-bottom:6%;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.24);

    img {
        width: 50%;
    }

    @media screen and (max-width:1024px){
        img {
            width: 80%;
        }
    }
    @media screen and (max-width:414px){
        width: 59%;
    }
`
class FollowersData extends React.Component {
    render(){
        const { follower } = this.props;
        return(
            <Container key={follower.id}>
                <img 
                alt ="follower" 
                src={follower.avatar_url}
                />
                <h3>{follower.login}</h3>
                <a rel="noreferrer" target="_blank" href={follower.html_url}>GitHub Link</a>
            </Container>
        )
    }
}

export default FollowersData;