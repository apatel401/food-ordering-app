import React from 'react'
import CardShimmer from './CardShimmer';
import ProfileDetails from './ProfileDetails';
import ProfileHeader from './ProfileHeader';

export default class Profile extends React.Component {
    
constructor(){
super();

this.state = {
    profileData: null,
}

}

async componentDidMount(){
       const data = await fetch("https://jsonplaceholder.typicode.com/users/1");
       const jsonData = await data.json();
       this.setState({profileData: jsonData})
}

componentDidUpdate(){
    console.log("from didUpdate")
}

    render(){
        return !this.state.profileData ? <CardShimmer /> : (
            <div className='profile'>
            <ProfileHeader {...this.state.profileData} />
            <ProfileDetails {...this.state.profileData} />           
            </div>
        )
    }
}