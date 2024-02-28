import Image from 'next/image';
import Link from 'next/link';

import logo from './images/cakeLogo.png'
import cakeImg from './images/cake.jpg'
import cakeImg1 from './images/cake1.jpeg'
import cakeImg2 from './images/cake2.jpg'
import cakeImg3 from './images/cake3.jpeg'
import cakeImg4 from './images/cake4.jpg'
import cakeImg5 from './images/cake5.jpg'
import cakeImg6 from './images/cake6.jpg'
import cakeImg7 from './images/cake7.jpg'
import cakeImg8 from './images/cake8.jpg'
import cakeImg9 from './images/cake9.jpg'


import styles from "./page.module.css";

export default function Home() {
  return (
   
    <>

      <nav className={styles.navbar}>


          <Image src={logo} alt="cake" width={40} className={styles.logo}/>  
          <p className={styles.title}>Cake Delight</p>

        <div className={styles.floatRight}>
          <a className={styles.navLink} href="#">Home</a>
          <a className={styles.navLink} href="#">Cakes</a>
          <a className={styles.navLink} href="#">Contact</a>
          <a className={styles.navLink} href="#">Orders</a>

          <Link className={styles.orderBtn} href="/order">Order Now</Link> 
        </div>
      </nav><div style={{paddingTop:'60px'}}></div> 

      <header className={styles.pageHeader}>
        <div className={styles.headerCont}>
          <Image src={cakeImg} alt="cake" width={1000} className={styles.cakeImg}/>

          <div className={styles.titleCont}>
            <p className={styles.headerTitle}>Custom cakes for every occasion</p>
            <p>Order a custom cake for your birthdays and weddings</p><br/>
            <div>
              <Link className={styles.orderBtn} href="/order">Order Now</Link>
              <a className={styles.btn} href="#explore">Explore cakes</a>
            </div>
          </div>
        </div>
      </header>

      <main>

        <div className={styles.cakeContainer}>
          <p className={styles.p1} id='explore'>Popular Cakes</p>
          <div className={styles.cakeWrapper}>

          <div className={styles.cakes}>
            <div className={styles.imgCont}>
              <Image src={cakeImg5} alt="cake" width={400} className={styles.cakesImg}/>
            </div>
            <div className={styles.cakeInfoCont}>
              <p>Pink cream cake</p>
              <p>₹400</p>
            </div>
          </div>

          <div className={styles.cakes}>
            <div className={styles.imgCont}>
              <Image src={cakeImg4} alt="cake" width={400} className={styles.cakesImg}/>
            </div>
            <div className={styles.cakeInfoCont}>
              <p>Rose top cake</p>
              <p>₹400</p>
            </div>
          </div>

          <div className={styles.cakes}>
            <div className={styles.imgCont}>
              <Image src={cakeImg6} alt="cake" width={400} className={styles.cakesImg}/>
            </div> 
            <div className={styles.cakeInfoCont}>
              <p>Red berry cake</p>
              <p>₹400</p>
            </div>
          </div>

          <div className={styles.cakes}>
            <div className={styles.imgCont}>
              <Image src={cakeImg1} alt="cake" width={400} className={styles.cakesImg}/>
            </div>
            <div className={styles.cakeInfoCont}>
              <p>Flower top cake</p>
              <p>₹400</p>
            </div>
          </div>

          <div className={styles.cakes}>
            <div className={styles.imgCont}>
              <Image src={cakeImg7} alt="cake" width={400} className={styles.cakesImg}/>
            </div>
            <div className={styles.cakeInfoCont}>
              <p>Double stack cake</p>
              <p>₹800</p>
            </div>
          </div>

          <div className={styles.cakes}>
            <div className={styles.imgCont}>
              <Image src={cakeImg8} alt="cake" width={400} className={styles.cakesImg}/>
            </div>
            <div className={styles.cakeInfoCont}>
              <p>Butterfly cake</p>
              <p>₹400</p>
            </div>
          </div>


          </div>
        </div>

        <div className={styles.gellaryCont}>
            <h3 className={styles.p2} id='explore'>Cake gellary</h3><br />
            <marquee>
              <div className={styles.wrap}>
                <div className={styles.movingImg}><Image src={cakeImg1} alt="cake" width={300}/></div>
                <div className={styles.movingImg}><Image src={cakeImg3} alt="cake" width={300}/></div>
                <div className={styles.movingImg}><Image src={cakeImg4} alt="cake" width={300}/></div>
                <div className={styles.movingImg}><Image src={cakeImg5} alt="cake" width={300}/></div>
              </div>
            </marquee>
            <Link href='cake-gellary' className={styles.gellaryBtn}>View Gellary</Link>
        </div>
      </main>

      <footer className={styles.footer}>

         <div>
            <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
            <p>7896239664</p>
         </div>

         <div>
           <a href="#">About</a>
           <a href="#">Contact Us</a>
           <a href="#">Terms and conditions</a>
           <Link href="/dashboard">Dashboard</Link>
         </div>

      </footer>
    
    </>

  );
}
