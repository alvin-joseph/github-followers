import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    padding-bottom:4%;
    
    input {
        padding:1%;
        text-align:left;
        color:black;

        &:focus{
            background-color:white;
        }
    }

    button {
        padding:1%;
        width:20%;
        background-image:linear-gradient(white, #D7CEC7);
        &:hover{
            cursor: pointer;
            filter:brightness(1.05);
        }
    }
`
class SearchUser extends React.Component {
    render(){
        return(
            <StyledForm onSubmit={this.props.onSubmit}>
              <p>Search github users below:</p>
              <input
              type="text"
              value={this.props.username}
              onChange={this.props.onChange}
              placeholder="input username"
              />
              <button>Search</button>
            </StyledForm>
        )
    }
}

export default SearchUser;