import {GET_CONTACTS, GET_CONTACT, DELETE_CONTACT, ADD_CONTACT, UPDATE_CONTACT} 
from './Types.js';
import axios from 'axios';

//FOR SIMPLE
/*export const getContacts = ()=>{
	return {
		type: GET_CONTACTS
	}
}*/

//USING API
export const getContacts = ()=> async dispatch=>{
	//console.log("abc1")
	const res = await axios.get('https://jsonplaceholder.typicode.com/users')
	dispatch({
		type: GET_CONTACTS,
		payload: res.data
	})
}

//FOR UPDATE
export const getContact = (id)=> async dispatch=>{
	const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
	//console.log(res)
	dispatch({
		type: GET_CONTACT,
		payload: res.data
	})
}

//USING API
/*export const deleteContact = id=>async dispatch=>{
	await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
	dispatch ({
			type: DELETE_CONTACT,
			payload:id
		})
}*/

//FORCEFUL DELETION
export const deleteContact = id=>async dispatch=>{
	
	try{
		await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
		dispatch ({
			type: DELETE_CONTACT,
			payload:id
		})
	}
	catch(e){
		dispatch ({
			type: DELETE_CONTACT,
			payload:id
		})
	}
	
}

//FOR SIMPLE
/*export const deleteContact = id=>{
	return{
			type: DELETE_CONTACT,
			payload:id
		}
}*/

//USING API
export const addContact = (contact)=>async dispatch=>{
	const res = await axios.post('https://jsonplaceholder.typicode.com/users',contact)
	dispatch({
			type: ADD_CONTACT,
			payload: res.data
		})
}

//FOR SIMPLE
/*export const addContact = (contact)=>{
	console.log("abc1")
	return {
		type: ADD_CONTACT,
		payload: contact
	}
}*/

export const updateContact = (contact)=> async dispatch=>{
	const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${contact.id}`,
		contact)
	dispatch({
			type: UPDATE_CONTACT,
			payload: res.data
		})
}