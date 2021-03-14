import React, { useState } from 'react';

const Contact=(props)=>{

    const [contactName,setContactName] = useState('');
    const [contactEmail,setContactEmail] = useState('');
    const [contactMessage,setContactMessage] = useState('');
    const [contactSubject,setContactSubject] = useState('');
    if(props.data){
      var name = props.data.name;
      var street = props.data.address.street;
      var city = props.data.address.city;
      var state = props.data.address.state;
      var zip = props.data.address.zip;
      var email = props.data.email;
      var message = props.data.contactmessage;
    }
    function handleSubmit(e) {
      e.preventDefault();
      var data = {
          service_id: process.env.REACT_APP_SERVICE_ID,
          template_id: process.env.REACT_APP_TEMPLATE_ID,
          user_id: process.env.REACT_APP_USER_ID,
          template_params: {
              'from_name': contactName,
              'email':contactEmail,
              'message':contactMessage,
              'subject':contactSubject
          }
      };
       

      $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
          type: 'POST',
          data: JSON.stringify(data),
          contentType: 'application/json'
      }).done(function() {
          console.log('Your mail is sent!');
             setContactName('');
             setContactEmail('');
             setContactSubject('');
             setContactMessage('');
      }).fail(function(error) {
          console.log('Oops... ' + JSON.stringify(error));
      });
      
  }
    
    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form action="" onSubmit={e=>handleSubmit(e)} method="post" id="contactingForm" name="contactingForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" value={contactName} size="35" id="contactName" name="contactName" onChange={(e)=> setContactName(e.target.value)}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" value={contactEmail} size="35" id="contactEmail" name="contactEmail" onChange={(e)=> setContactEmail(e.target.value)}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" value={contactSubject} size="35" id="contactSubject" name="contactSubject" onChange={(e)=> setContactSubject(e.target.value)}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" value={contactMessage} name="contactMessage" onChange={(e)=> setContactMessage(e.target.value)}></textarea>
                  </div>

                  <div>
                     <button className="submited">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
					   </p>
				   </div>

            </aside>
      </div>
   </section>
    );
}

export default Contact;
