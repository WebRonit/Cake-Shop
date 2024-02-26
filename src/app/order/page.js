import style from './page.module.css'

export default function Order(){
	return(

		<main>

		    <div className={style.mainCont}>
		       <p className={style.p1}>Order Cake</p>

		       <label htmlFor="#">Name (On cake)</label>
		       <input type="text" placeholder="Name (on cake)" />

		       <label htmlFor="#">Contact No</label>
		       <input type="number" placeholder="Contact No." />

		       <label htmlFor="image" className={style.uploadBtn}>Reference Image</label>
		       <input type="file" Name='image' id='image' hidden/>

		       <p className={style.p2}>Cake Flavour</p>

		    </div>

		</main>
	)
}