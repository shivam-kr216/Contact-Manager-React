import React, { Component } from 'react';
import Contact from './Contact';
import  {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {GET_CONTACTS} from '../../action/Types.js';
import {getContacts} from '../../action/contactAction.js';

class Contacts extends Component {
  componentDidMount(){
    //console.log("abc1");
    this.props.getContacts();
  }

  render() {
    
    const { contacts } = this.props;
    //console.log(this.props.contacts);
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes={
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
}

const mapStateToprops=(state)=>({
  contacts: state.contact.contacts  
})

/*
const mapDispatchToProps = (dispatch)=>({
  getContacts:()=>dispatch({type: GET_CONTACTS})
})

export default connect(mapStateToprops,mapDispatchToProps)(Contacts);
*/
export default connect(mapStateToprops,{getContacts})(Contacts);