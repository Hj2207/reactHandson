
import { useEffect } from "react";
import "./styles.css";
import {connect} from 'react-redux';
import {fetchData} from './redux/action';


const App = ({users,fetchData}) => {
 useEffect(() => {
  fetchData()
 },[]);

  return (
    <div>
      <h3> Redux</h3>
      <table>
      <tr>
        <th> Name</th>
        <th> Email</th>
        <th> Website</th>
      </tr>
      {
        users.length && users.map(user => {
         return( 
           <tr key={user.id}>
          <td>{user.name}</td>
          <td> {user.email}</td>
          <td> {user.website}</td>
          </tr>
         );
        })
      }
      </table>
    </div>
  );
}

const mapDispatchToProps = dispatch =>({
  fetchData: () => dispatch(fetchData())
});

const mapStateToProps = (state) => ({
users: state.users
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
