import React, { useState } from 'react'
import classes from './Checkout.module.css'

const Checkout = (props) =>{

  const [color1, changeColor1] = useState(false);
  const [color2, changeColor2] = useState(true);
  const [color3, changeColor3] = useState(false);

  return <section className={classes.section}>
    <div className={classes.step}>
      <div className={classes.circle}>1</div>
      <h2>Shopping Cart</h2>
      <div className={classes.circle_active}>2</div>
      <h2 className={classes.h2_active}>checkout</h2>
      <div className={classes.circle}>3</div>
      <h2>order confirmation</h2>
    </div>
    <div className={classes.body}>
      <form className={classes.Left}>
        <h2>CONTINUE AS A</h2>
        <h1>GUEST!</h1>
        <div className={classes.Save_data}>Register with us for future convenience:</div>
        <div className={classes.Save_data_b}><b>You can save your data in order to speed up your next shopping experience</b></div>
        <div className={classes.input}><input type="radio" value="Checkout" name="question" defaultChecked/>Checkout as Guest</div>
        <div className={classes.input}><input type="radio" value="Register" name="question"/>Register</div>
        <div className={classes.Register}>Register and save time!</div>
        <div className={classes.Register_color}>Register with us for future convenience:</div>
        <ul>
          <li>Fast and easy check out</li>
          <li>Easy access to your order history and status</li>
        </ul>
        <div className={classes.Button}>fill the sign form</div>
        <div className={classes.Your}>YOUR SHIPPING INFORMATION</div>
        <div className={classes.Contact_Left}>
          <div>
            <div>
              <div className={classes.Name}>email*</div>
              <input className={classes.txt} placeholder="e.g. name@nome.com" name="email"/>
            </div>
            <div>
              <div className={classes.Name}>Full name*</div>
              <input className={classes.txt_1} placeholder="e.g.  robert smith" name="Name"/>
              <input className={classes.txt} placeholder="e.g.  robert smith" name="Name_2"/>
            </div>
            <div>
              <div className={classes.Name}>company</div>
              <input className={classes.txt} placeholder="e.g. your company (optional)" name="Company"/>
            </div>
            <div>
              <div className={classes.Name}>Address*</div>
              <input className={classes.txt_1} placeholder="address line 1" name="Address"/>
              <input className={classes.txt} placeholder="address line 2" name="Address_2"/>
            </div>
          </div>
        </div>
        <div className={classes.Same_As}>
          {color1 ? <div className={classes.Active_check_mark} onClick={() => {changeColor1(false)}}>&#10004;</div>:<div className={classes.check_mark} onClick={() => {changeColor1(true)}}>&#10004;</div>}
          <div className={classes.Same_As_txt}>BILLING ADDRESS SAME AS SHIPPING.</div>
        </div>
      </form>


      <form className={classes.Center}>
        <h2>are you a</h2>
        <h1>member?</h1>
        <div className={classes.Register}>Already registered?</div>
        <div className={classes.Register_color}>Please log in below:</div>
        <div>
          <div className={classes.Name_input}>Email Address<span className={classes.red}>*</span></div>
          <input className={classes.txt} name="email_Address"/>
        </div>
        <div className={classes.Password}>
          <div>Password<span className={classes.red}>*</span></div>
          <input className={classes.txt_1} name="password"/>
        </div>
        <div className={classes.Button_Login}>login</div>
        <div className={classes.Contact_Left}>
          <div>
            <div>
              <div className={classes.Name}>postal code<span className={classes.red}>*</span></div>
              <input className={classes.txt} placeholder="e.g. 201000" name="postal_code"/>
            </div>
            <div>
              <div className={classes.Name}>town / City<span className={classes.red}>*</span></div>
              <input className={classes.txt} placeholder="e.g.  robert smith" name="Name_2"/>
            </div>
            <div>
              <div className={classes.Name}>State / Country<span className={classes.red}>*</span></div>
              <input className={classes.txt} placeholder="e.g. your company (optional)" name="Company"/>
            </div>
            <div>
              <div className={classes.Name}>province<span className={classes.red}>*</span></div>
              <input className={classes.txt} placeholder="e.g. info" name="Address"/>
            </div>
            <div>
              <div className={classes.Name}>mobile<span className={classes.red}>*</span></div>
              <div className={classes.Phone}>
                <input className={classes.phone_code} placeholder="+39" name="mobile_code"/>
                <input className={classes.phone} placeholder="phone" name="mobile"/>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.Same_As}>
          {color2 ? <div className={classes.Active_check_mark} onClick={() => {changeColor2(false)}}>&#10004;</div>:<div className={classes.check_mark} onClick={() => {changeColor2(true)}}>&#10004;</div>}
          <div className={classes.Same_As_txt}>REMEMBER THIS ADDRESS NEXT TIME</div>
        </div>
      </form>
      <form className={classes.Right}>
        <div className={classes.Review}>
          <h3 className={classes.Review_H3}>REVIEW YOUR CART</h3>
          <div className={classes.Review_el}>
            <div>YOUR CART</div>
            <div>€.{props.Prise.toFixed(2)}</div>
          </div>
          <div className={classes.Review_el}>
            <div>SHIPPING</div>
            <div>FREE</div>
          </div>
          <div className={classes.Review_el}>
            <div>vat</div>
            <div>€.{props.vat}</div>
          </div>
          <div className={classes.Review_elem}>
            <div>ORDER TOTAL</div>
            <div>€.{(props.vat + props.Prise).toFixed(2)}</div>
          </div>
          <div  className={classes.Checkout}>
            <div>
              Checkout
            </div>
          </div>
        </div>
        <div className={classes.Your}>YOUR PAYMENT DETAILS</div>
        <div>
          <div className={classes.Name}>credit card number<span className={classes.red}>*</span></div>
          <input className={classes.txt} placeholder="type your credit card number" name="credit"/>
        </div>
        <div>
          <div className={classes.Name}>expiration date<span className={classes.red}>*</span></div>
          <input className={classes.txt} type="date" id="start" name="trip-start" placeholder="2018-07-22" min="2018-01-01" max="2018-12-31"/>
        </div>
        <div>
          <div className={classes.Name}>secure code (ccv)*<span className={classes.red}>*</span></div>
          <div className={classes.Phone}>
            <input className={classes.phone} name="secureCode" placeholder="000"/>
            <div className={classes.WhatIsThis} title="text">What is this?</div>
          </div>
        </div>
        <div>
          <div className={classes.Name}>name on card<span className={classes.red}>*</span></div>
          <input className={classes.txt} name="nameOnCard" placeholder="name on card"/>
        </div>
        <div className={classes.message_before}>We value your privacy</div>
        <div className={classes.Same_As}>
          {color3 ? <div className={classes.Active_check_mark} onClick={() => {changeColor3(false)}}>&#10004;</div>:<div className={classes.check_mark} onClick={() => {changeColor3(true)}}>&#10004;</div>}
          <div className={classes.Same_As_txt}>REMEMBER THIS CARD INFO NEXT TIME</div>
        </div>
      </form>
    </div>
    <div className={classes.bottom}>
      <div className={classes.bottom_txt}>By clicking "Place my order", you agree to our Terms of Use and Privacy Policy, including the transfer of your personal information to Italy, a jurisdiction that may not provide an equivalent level of data protection to the laws in your home country.</div>
      <div className={classes.Button_Login}>place order</div>
    </div>
  </section>
}



export default Checkout
