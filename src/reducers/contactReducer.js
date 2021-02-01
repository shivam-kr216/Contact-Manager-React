import {GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT} from '../action/Types.js';

/*const initialState = {contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 2,
        name: 'Karen Williams',
        email: 'karen@gmail.com',
        phone: '444-444-4444'
      },
      {
        id: 3,
        name: 'Henry Johnson',
        email: 'henry@gmail.com',
        phone: '333-333-333'
      }
    ]};*/

const initialState={
  contacts:[],
  contact:{}
}

export default function(state=initialState, action){
	switch(action.type){
		case GET_CONTACTS: return{
			...state,
      contacts: action.payload
		};

		case ADD_CONTACT: 
    //console.log("abc1");
    return{
			...state,
			contacts: [action.payload,...state.contacts]
		}

		case DELETE_CONTACT: return{
			...state,
			contacts: state.contacts.filter(contact=>
				contact.id!==action.payload)
		}

    case 'GET_CONTACT': 
    //console.log(action.payload)
    return{
      ...state,
      contact: action.payload
    }
    //FOR UPDATE
    case 'UPDATE_CONTACT':
    return{
      ...state,
      contacts: state.contacts.map(contact=>contact.id===action.payload.id?contact=action.payload
        :contact)
    }
		default: return state;
	}
}