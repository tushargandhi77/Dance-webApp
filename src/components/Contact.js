import React from 'react'
import "../static/stylecontact.css"
const Contact = () => {
    return (
        <div>
            <div className="container">
                <h1>Contact Us</h1>
                <form className="myForm" action="/contact" method="post"><input class="myInput" type="text" name="name" placeholder="Enter your name" /><input class="myInput" type="phone" name="phone" placeholder="Enter your phone" /><input class="myInput" type="text" name="email" placeholder="Enter your email" /><input class="myInput" type="text" name="address" placeholder="Enter your address" /><textarea class="myInput" name="w3review" rows="4" cols="50">Enter your concern</textarea><button class="btn">Submit</button></form>
            </div>
        </div>
    )
}

export default Contact
