'use client'

import React, { useState } from "react";
import { useFormStatus, useFormState } from "react-dom";
import submit from "./submit";
const initialState = {
  message: null,
};


import style from './page.module.css'

export default function Order(){

  const [state, formAction] = useFormState(submit, initialState);
  const { response } = useFormStatus();
  const [errTxt, setErrTxt] = useState('');
  const [loading, setLoading] = useState(false);


	return(

		 <main>
 		   <form action={formAction}>
		     <div className={style.mainCont}>
		       <p className={style.p1}>Order Cake</p>
		      
		       <p className={style.errTxt}>{errTxt}</p>

		       <label htmlFor="#">Name (On cake)</label>
		       <input type="text" placeholder="Name (on cake)" name='name' />

		       <label htmlFor="#">Contact No</label>
		       <input type="number" placeholder="Contact No." name='contactNo' />

		       <label htmlFor="#">Date:</label>
		       <input type="date" name='date' />

		       <p className={style.p2}>Cake Flavour :</p>

		       <div className={style.wrap}>
		         <label className={style.l1} htmlFor="choco"><input type="radio" id='choco' name='flavour' value='choco'/>Chocalete</label>
		         <label className={style.l1} htmlFor="vanila"><input type="radio" id='vanila' name='flavour' value='vanila'/>Vanila</label>
		         <label className={style.l1} htmlFor="strawberry"><input type="radio" id='strawberry' name='flavour' value='strawberry'/>Strawberry</label><br /><br />
		         <label className={style.l1} htmlFor="any"><input type="radio" id='any' name='flavour' value='any'/>Any</label>
			     </div>

			   <p className={style.p2}>Size :</p>
 
		       <div className={style.wrap}>
		         <label className={style.l1} htmlFor="one"><input type="radio" name='size' id='one' value='one'/>1 Stack
		          <svg fill="#000000" width="24px" height="24px" viewBox="0 0 24 24" id="cake" data-name="Line Color" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path id="secondary" d="M12,7a2,2,0,1,0,2,2A2,2,0,0,0,12,7Zm1-2a2.53,2.53,0,0,0-1,2" fill='none' stroke= '#000000' strokeLinecap='round' strokeLinejoin= 'round' strokeWidth='2'></path><path id="primary" d="M20,19H4V12a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1ZM3,19H21" fill='none' stroke= '#000000' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'></path></g></svg>
		         </label>

		         <label className={style.l1} htmlFor="two"><input type="radio" name='size' id='two' value='two'/>2 stack
		          <svg fill="#000000" width="24px" height="24px" viewBox="0 0 24 24" id="birthday-cake-3" data-name="Line Color" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path id="secondary" d="M9,21h6m-3-4v4M12,3V6M8,3V6m8-3V6" fill='none' stroke='#000000' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'></path><path id="primary" d="M3,17H21m-1,0H4V12a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Zm-1-6H5a1,1,0,0,0-1,1v5H20V12A1,1,0,0,0,19,11Zm1,6H4V12a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1ZM18,6H6A1,1,0,0,0,5,7v4H19V7A1,1,0,0,0,18,6Z" fill='none' stroke='#000000' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'></path></g></svg>
		         </label>		         
			   </div>

			   <p className={style.p2}>Shape :</p>

		       <div className={style.wrap}>
		         <label className={style.l1} htmlFor="circle"><input type="radio" id='circle' name='shape' value='circle'/>Circle
		          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0 0q-134 0-227-93t-93-227q0-134 93-227t227-93q134 0 227 93t93 227q0 134-93 227t-227 93Z"/></svg>
		         </label>

		         <label className={style.l1} htmlFor="square"><input type="radio" id='square' name='shape' value='square'/>Square
		          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/></svg>
		         </label>		         
			   </div>

				<p className={style.p2}>Additional note:</p>
			   <textarea rows="3"></textarea>

			   <button type='submit' className={style.submitBtn}>Submit</button>
			  
		    </div>
		  </form>
		</main>
	);
}

