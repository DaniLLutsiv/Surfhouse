import React from 'react'
import classes from './Contact.module.css'
import Nav from '../Windsurf/Nav/Nav/Nav'
import Footer from '../Windsurf/Footer/Footer'
import Footer2 from '../Windsurf/Footer/Footer2'
import Banner from '../Windsurf/Nav/Banner/Banner'
import { connect } from 'react-redux'
import Brand from '../Windsurf/Brand/Brand'
import {NavLink} from "react-router-dom";
import { ChangeLanguage } from '../../redux/NavReducer';



const Contact = (props) =>{
  return <section className={classes.section}>
   
      <div className={classes.Top}>
        <header>
          <div className={classes.Left_Header}>
            <div className={classes.logo}><img src={process.env.PUBLIC_URL + '/img/images/index_03.png'} alt=""/></div>
            <div>SURFHOUSE</div>
          </div>
          <div className={classes.Right_Header}>
            <div className={classes.img_Header}>
              <img src={process.env.PUBLIC_URL + `/img/images/index_06.png`} alt=""/>
              <img src={process.env.PUBLIC_URL + `/img/images/index_08.png`} alt=""/>
              <img src={process.env.PUBLIC_URL + `/img/images/index_10.png`} alt=""/>
              <img src={process.env.PUBLIC_URL + `/img/images/index_12.png`} alt=""/>
              <img src={process.env.PUBLIC_URL + `/img/images/index_14.png`} alt=""/> 
              {props.Language === 'en'? <div onClick={() => {props.ChangeLanguage('UA')}}>EN &#9660;</div>:
                <div onClick={() => {props.ChangeLanguage('en')}}>UA &#9660;</div>
              }
            </div>
          </div>
        </header>
      </div>
      <div className={classes.White}>
          <div className={classes.Left}>
              <div className={classes.Nav}><Nav/></div>
              <div><Banner url={`https://i.pinimg.com/280x280_RS/f0/ec/43/f0ec4348d1ccbff9cdddc1d9f4fb8c01.jpg`}/></div>  
          </div>
          <div className={classes.Right}>
            <div className={classes.Head_txt}>
              <div className={classes.Head_txt_L}>
                <div>Home &#187;&nbsp;</div>
                <div className={classes.yellow}>Contact Us</div>
              </div>
              <NavLink className={classes.NavLink} to="/">&#171; Back to previous page</NavLink>
            </div>
            <div className={classes.Contact}>
              <div className={classes.Contact_Left}>
                <div>
                  <div>
                    <div className={classes.Name}>Full name*</div>
                    <div className={classes.txt}>e.g.  robert smith</div>
                  </div>
                  <div>
                    <div className={classes.Name}>email*</div>
                    <div className={classes.txt}>e.g. name@nome.com</div>
                  </div>
                  <div>
                    <div className={classes.Name}>company</div>
                    <div className={classes.txt}>e.g. your company (optional)</div>
                  </div>
                  <div>
                    <div className={classes.Name}>subject*</div>
                    <div className={classes.txt}>e.g. info</div>
                  </div>
                  <div>
                    <div className={classes.Name}>message</div>
                    <div className={classes.txt}>Message</div>
                  </div>
                </div>
              </div>

              <div className={classes.Contact_Right}>
                <div className={classes.Address}>Address</div>
                <div className={classes.Location}>
                  <img src={process.env.PUBLIC_URL + '/img/images/icons_03.jpg'} alt=""/>
                  <div>Ut interdum tristique est commodo pharetra.</div>
                </div>
                <div className={classes.text}>Lorem Ipsum is simply dummy text of the printing and over</div>
                <div className={classes.Phone}>
                  <img src={process.env.PUBLIC_URL + '/img/images/icons_06.jpg'} alt=""/>
                  <div>1-900-324-9876</div>
                </div>
                <div className={classes.Email}>
                  <img src={process.env.PUBLIC_URL + '/img/images/icons_09.jpg'} alt=""/>
                  <div>info@surfhouse.com</div>
                </div>  
                <div className={classes.message}>
                  If you have questions about your order or need any general information our customer service team will be happy to assist you.
                </div>
              </div>
            </div>
            <div className={classes.Brand}>
              <Brand/>
            </div>
            
          </div>
      </div>
      <div className={classes.Instagram}>
        {props.Messegers.map( el => { return <img src={el} alt="" key={el}/>})}
      </div>
      <div className={classes.Gray}>
        <div className={classes.Bottom}>
          <Footer/>
        </div>
      </div>
      <div className={classes.Gray2}>
         <div className={classes.Bottom}>
          <Footer2/>
        </div>
      </div>
  </section>
}

const mapStateToProps = (state) => {
    return{
      Messegers:state.Instagram.Messegers,
      Language:state.Nav.Language    
    }
}

export default connect(mapStateToProps,{ChangeLanguage})(Contact)
