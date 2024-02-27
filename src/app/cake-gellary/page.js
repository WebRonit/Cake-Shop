import Image from 'next/image';

import cakeImg1 from '../images/cake1.jpeg'
import cakeImg2 from '../images/cake2.jpg'
import cakeImg3 from '../images/cake3.jpeg'
import cakeImg4 from '../images/cake4.jpg'
import cakeImg5 from '../images/cake5.jpg'
import cakeImg6 from '../images/cake6.jpg'
import cakeImg7 from '../images/cake7.jpg'
import cakeImg8 from '../images/cake8.jpg'
import cakeImg9 from '../images/cake9.jpg'



import style from './page.module.css'

export default function gellary(){
	return(
      <>
		<h2 className={style.title}>Cake gellary</h2>

		<div className={style.imgContainer}>

			<Image src={cakeImg1} width={250}/>

			<Image src={cakeImg3} width={250}/>

			<Image src={cakeImg4} width={250}/>

			<Image src={cakeImg5} width={250}/>

			<Image src={cakeImg6} width={250}/>

			<Image src={cakeImg7} width={250}/>

			<Image src={cakeImg8} width={250}/>

			<Image src={cakeImg9} width={250}/>

			<Image src={cakeImg2} width={250}/>


		</div>
	  </>
	)
}