import React,{ useEffect,useState } from 'react'
import classes from './CurrentElement.module.css'
import {useParams} from "react-router-dom";
import Product from '../Windsurf/NewProduct/Product/Product';

const CurrentElement = (props) =>{
  
  
  let { slug,id } = useParams()
  if (!slug) {slug = 'SurfProduct'}
  let str = props[slug][Number(id-1)]

  useEffect(() => {
    window.scrollTo(0, 350);
  }, [str]);

  let [Img,ChangeActiveImg] = useState({
    Big_img:str.img,
    Smalls_img:str.Small_img
  })

  return <section className={classes.section}>
    <div className={classes.Top}>
      <div className={classes.Left}>
        <div className={classes.Img}><img src={Img.Big_img} alt="" /></div>
        <div className={classes.Img_slider}>
          <div className={classes.Button} onClick={() => {ChangeActiveImg({
              Smalls_img: [Img.Smalls_img[1],Img.Big_img],
              Big_img: Img.Smalls_img.shift()          
            })}}>
            <div className={classes.arrowL}></div>
          </div>
          <div className={classes.Small_Img}>
            {Img.Smalls_img.map(el => <img src={el} alt="" key={el}/>)}
          </div>
          <div className={classes.Button} onClick={() => {ChangeActiveImg({
              Smalls_img: [Img.Big_img,Img.Smalls_img[0]],
              Big_img: Img.Smalls_img.pop()          
            })}}>
            <div className={classes.arrowR} ></div>
          </div>
        </div>
      </div>
      <div className={classes.Right}>
        <div>
          <h2>{str.text}</h2>
          <div className={classes.stars}>
            <div>{str.Star.map((el,index) => {
                if(el === 1){
                  return <div key={index}>&#9733;</div>
                }else{
                  return <div key={index} className={classes.GreyStar}>&#9733;</div>
                }
              })}
            </div>
            <div className={classes.Review}> &nbsp;1 Review(s) | Add Your Review</div>
          </div>
          <div className={classes.description}>
            <div className={classes.Prise}>{str.Prise}</div>
            <div>
              <div className={classes.Greytxt}>Product code: <div className={classes.text}>&nbsp;{str.id}</div></div>
              <div className={classes.Greytxt}>Availability: <div className={classes.text}>&nbsp;{str.Availability}</div></div>
            </div>
          </div>
        </div>
        
        <div className={classes.Quick_Lorem}>
          <div className={classes.Quick}>Quick Overview:</div>
          <div className={classes.Greytxt}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.</div>
        </div>
        <div className={classes.Size}>
          <div className={classes.Quick}>Size:</div>
          <div className={classes.Sizes}>
            {str.Size === 25 ? <div className={classes.Red}>25</div>:<div>25</div>}
            {str.Size === 26 ? <div className={classes.Red}>26</div>:<div>26</div>}
            {str.Size === 27 ? <div className={classes.Red}>27</div>:<div>27</div>}
            {str.Size === 28 ? <div className={classes.Red}>28</div>:<div>28</div>}
            {str.Size === 29 ? <div className={classes.Red}>29</div>:<div>29</div>}
            {str.Size === 30 ? <div className={classes.Red}>30</div>:<div>30</div>}
            {str.Size === 31 ? <div className={classes.Red}>31</div>:<div>31</div>}
            {str.Size === 32 ? <div className={classes.Red}>32</div>:<div>32</div>}
            {str.Size === 33 ? <div className={classes.Red}>33</div>:<div>33</div>}
          </div>
        </div>
        <div className={classes.Size}>
          <div className={classes.Quick}>Length:</div>
          <div className={classes.Length}>
            {str.Length.map((el,index) => <div key={index}>{el}</div>)}
          </div>
        </div>
        <div className={classes.Size}>
          <div className={classes.Quantity_block}>
            <div>
              <div className={classes.Quick}>Quantity:</div>
              <div className={classes.Quantity}>
                <div className={classes.plus} onClick={() => props.QuantityChange(props.Quantity-1)}>-</div>
                <div className={classes.Quant}>{props.Quantity}</div>
                <div className={classes.plus} onClick={() => props.QuantityChange(props.Quantity+1)}>+</div>
              </div>
            </div>
            <div className={classes.ADD_TO_CART}>
              <div onClick={ () => {props.AddProductToCart(str,props.Quantity)}}>ADD TO CART</div>
            </div>
            <div className={classes.ADD_Setting}>
              <div>+  Add to Wishlist</div>
              <div>+  Add to Compare</div>
              <div>+  Email to a Friend</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={classes.Middle}>  
      <div className={classes.Mid_header}>
        {props.ActiveTabs === 1 ? <div className={classes.ActiveTabs}>Product description</div> : <div className={classes.Tabs} onClick={() => props.ActiveTabsChange(1)}>Product description</div>}
        {props.ActiveTabs === 2 ? <div className={classes.ActiveTabs}>Additional information</div> : <div className={classes.Tabs} onClick={() => props.ActiveTabsChange(2)}>Additional information</div>}
        {props.ActiveTabs === 3 ? <div className={classes.ActiveTabs}>reviews</div> : <div className={classes.Tabs} onClick={() => props.ActiveTabsChange(3)}>reviews</div>}
        {props.ActiveTabs === 4 ? <div className={classes.ActiveTabs}>Product tags</div> : <div className={classes.Tabs} onClick={() => props.ActiveTabsChange(4)}>Product tags</div>}
      </div>  
      <div className={classes.Maddle_txt}>   
        <div>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words. <br/>Which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing<br/> hidden in the  <br/>middle of text.</div>
        <br/>
        <div> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words. <br/>Which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing<br/> hidden in the <br/>middle of text.</div>
        <div>- 6.1 oz. 100% preshrunk heavyweight cotton</div>
        <div>- Shoulder-to-shoulder taping</div>
        <div>- Double-needle sleeves and bottom hem</div>
        <br/>
        <div> It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. </div>
      </div>
    </div>
    <h1>YOU MIGHT ALSO LIKE</h1>
    <div className={classes.Slider_Container}>
      <div className={classes.arrowContainerL} onClick={ () => {props.NewActiveSlideProduct(props.ActivePageTop-1,'Top Products')}}>
        <div className={classes.arrowLC}></div>
      </div>
      <div className={classes.Slider}> 
        {props.TopProducts.filter(el => el.id <= props.ActivePageTop * 3 && el.id > props.ActivePageTop * 3 - 3)
          .map(el => { return <Product img={el.img} Prise={el.Prise} Sale={el.Sale} text={el.text} key={el.id} id={el.id} urlPage={'TopProducts'}/>})}
      </div>
      <div className={classes.arrowContainerR} onClick={ () => {props.NewActiveSlideProduct(props.ActivePageTop+1,'Top Products')}}>
        <div className={classes.arrowRC}></div>
      </div>
    </div>
    
    <h1>RECENTLY VIEWED</h1>
    <div className={classes.Slider_Container}>
      <div className={classes.arrowContainerLY} onClick={ () => {props.NewActiveSlideProduct(props.ActivePageSale-1,'Sale Products')}}>
        <div className={classes.arrowLC}></div>
      </div>
      <div className={classes.Slider}> 
        {props.SaleProducts.filter(el => el.id <= props.ActivePageSale * 3 && el.id > props.ActivePageSale * 3 - 3)
          .map(el => { return <Product img={el.img} Prise={el.Prise} Sale={el.Sale} text={el.text} key={el.id} id={el.id} urlPage={'SaleProducts'}/>})}
      </div>
      <div className={classes.arrowContainerRY} onClick={ () => {props.NewActiveSlideProduct(props.ActivePageSale+1,'Sale Products')}}>
        <div className={classes.arrowRC}></div>
      </div>
    </div>
  </section>
}



export default CurrentElement
