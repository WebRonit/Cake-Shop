import Image from 'next/image';
import Link from 'next/link';
import logo from '../images/cakeLogo.png'
import style from './page.module.css'

export default function dashboard(){
	return(
		<>

		<nav className={style.navbar}>
          <Image src={logo} alt="cake" width={40} className={style.logo}/>  
          <p className={style.title}>Dashboard</p>

         <div className={style.floatRight}>
          <Link className={style.orderBtn} href="/order">Add order</Link> 
         </div>
        </nav><div style={{paddingTop:'60px'}}></div> 

        <main>

           <input type="search" placeholder="search..." className={style.search}/>

           <div className={style.mainContainer}>

            <div className={style.infoHead}>
              <p className={style.p1}>Order ID</p>
              <p className={style.p2}>Customer</p>
              <p className={style.p2}>Contact No.</p>
              <p className={style.p3}>Cake details</p>
              <p className={style.p15}>Price</p>
              <p className={style.p2}>Status</p>
              <p className={style.p2}>Action</p>
            </div>

            <div className={style.orderCont}>

            <div className={style.order}>
              <p className={style.p1}><span className={style.infoName}>Order ID: </span>#78577</p>
              <p className={style.p2}><span className={style.infoName}>Full Name: </span>Ronit Dutta</p>
              <p className={style.p2}><span className={style.infoName}>Contact No: </span>6002762989</p>
              <p className={style.p3}><span className={style.infoName}>Cake Info: </span>Vanila, 1 stack, circle</p>
              <p className={style.p15}><span className={style.infoName}>Price: </span>400</p>
              <p className={style.p2}><span className={style.infoName}>Status: </span>In progress</p>
              <p className={style.p2}><span className={style.infoName}>take Action: </span>Action</p>
            </div>

             <div className={style.order}>
              <p className={style.p1}><span className={style.infoName}>Order ID: </span>#78577</p>
              <p className={style.p2}><span className={style.infoName}>Full Name: </span>Ronit Dutta</p>
              <p className={style.p2}><span className={style.infoName}>Contact No: </span>6002762989</p>
              <p className={style.p3}><span className={style.infoName}>Cake Info: </span>Vanila, 1 stack, circle</p>
              <p className={style.p15}><span className={style.infoName}>Price: </span>400</p>
              <p className={style.p2}><span className={style.infoName}>Status: </span>In progress</p>
              <p className={style.p2}><span className={style.infoName}>take Action: </span>Action</p>
            </div>

             <div className={style.order}>
              <p className={style.p1}><span className={style.infoName}>Order ID: </span>#78577</p>
              <p className={style.p2}><span className={style.infoName}>Full Name: </span>Ronit Dutta</p>
              <p className={style.p2}><span className={style.infoName}>Contact No: </span>6002762989</p>
              <p className={style.p3}><span className={style.infoName}>Cake Info: </span>Vanila, 1 stack, circle</p>
              <p className={style.p15}><span className={style.infoName}>Price: </span>400</p>
              <p className={style.p2}><span className={style.infoName}>Status: </span>In progress</p>
              <p className={style.p2}><span className={style.infoName}>take Action: </span>Action</p>
            </div>

             <div className={style.order}>
              <p className={style.p1}><span className={style.infoName}>Order ID: </span>#78577</p>
              <p className={style.p2}><span className={style.infoName}>Full Name: </span>Ronit Dutta</p>
              <p className={style.p2}><span className={style.infoName}>Contact No: </span>6002762989</p>
              <p className={style.p3}><span className={style.infoName}>Cake Info: </span>Vanila, 1 stack, circle</p>
              <p className={style.p15}><span className={style.infoName}>Price: </span>400</p>
              <p className={style.p2}><span className={style.infoName}>Status: </span>In progress</p>
              <p className={style.p2}><span className={style.infoName}>take Action: </span>Action</p>
            </div>

             <div className={style.order}>
              <p className={style.p1}><span className={style.infoName}>Order ID: </span>#78577</p>
              <p className={style.p2}><span className={style.infoName}>Full Name: </span>Ronit Dutta</p>
              <p className={style.p2}><span className={style.infoName}>Contact No: </span>6002762989</p>
              <p className={style.p3}><span className={style.infoName}>Cake Info: </span>Vanila, 1 stack, circle</p>
              <p className={style.p15}><span className={style.infoName}>Price: </span>400</p>
              <p className={style.p2}><span className={style.infoName}>Status: </span>In progress</p>
              <p className={style.p2}><span className={style.infoName}>take Action: </span>Action</p>
            </div>

             <div className={style.order}>
              <p className={style.p1}><span className={style.infoName}>Order ID: </span>#78577</p>
              <p className={style.p2}><span className={style.infoName}>Full Name: </span>Ronit Dutta</p>
              <p className={style.p2}><span className={style.infoName}>Contact No: </span>6002762989</p>
              <p className={style.p3}><span className={style.infoName}>Cake Info: </span>Vanila, 1 stack, circle</p>
              <p className={style.p15}><span className={style.infoName}>Price: </span>400</p>
              <p className={style.p2}><span className={style.infoName}>Status: </span>In progress</p>
              <p className={style.p2}><span className={style.infoName}>take Action: </span>Action</p>
            </div>

             <div className={style.order}>
              <p className={style.p1}><span className={style.infoName}>Order ID: </span>#78577</p>
              <p className={style.p2}><span className={style.infoName}>Full Name: </span>Ronit Dutta</p>
              <p className={style.p2}><span className={style.infoName}>Contact No: </span>6002762989</p>
              <p className={style.p3}><span className={style.infoName}>Cake Info: </span>Vanila, 1 stack, circle</p>
              <p className={style.p15}><span className={style.infoName}>Price: </span>400</p>
              <p className={style.p2}><span className={style.infoName}>Status: </span>In progress</p>
              <p className={style.p2}><span className={style.infoName}>take Action: </span>Action</p>
            </div>

             <div className={style.order}>
              <p className={style.p1}><span className={style.infoName}>Order ID: </span>#78577</p>
              <p className={style.p2}><span className={style.infoName}>Full Name: </span>Ronit Dutta</p>
              <p className={style.p2}><span className={style.infoName}>Contact No: </span>6002762989</p>
              <p className={style.p3}><span className={style.infoName}>Cake Info: </span>Vanila, 1 stack, circle</p>
              <p className={style.p15}><span className={style.infoName}>Price: </span>400</p>
              <p className={style.p2}><span className={style.infoName}>Status: </span>In progress</p>
              <p className={style.p2}><span className={style.infoName}>take Action: </span>Action</p>
            </div>

             <div className={style.order}>
              <p className={style.p1}><span className={style.infoName}>Order ID: </span>#78577</p>
              <p className={style.p2}><span className={style.infoName}>Full Name: </span>Ronit Dutta</p>
              <p className={style.p2}><span className={style.infoName}>Contact No: </span>6002762989</p>
              <p className={style.p3}><span className={style.infoName}>Cake Info: </span>Vanila, 1 stack, circle</p>
              <p className={style.p15}><span className={style.infoName}>Price: </span>400</p>
              <p className={style.p2}><span className={style.infoName}>Status: </span>In progress</p>
              <p className={style.p2}><span className={style.infoName}>take Action: </span>Action</p>
            </div>

            
            </div>

           </div>
        </main>

	</>
	)
}