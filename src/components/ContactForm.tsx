import { useState } from 'react'
import emailjs from '@emailjs/browser';

const ContactForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_kupaa4m';
    const templateId = 'template_g1lhprx';
    const publicKey = 'y_OH3EW-KIZ7uU18s';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Web Wizard',
      message: message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }  

  return (
    <form onSubmit={handleSubmit} id="contactForm">
       <div className="form-group">
        <label>Dein Name</label>
        <input type="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Dein Name"/>
      </div>
      <div className="form-group">
        <label>Deine Email Adresse</label>
        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@beispiel.com"/>
      </div>
      <div className="form-group">
        <label>Deine Anfrage</label>
        <textarea className="form-control" onChange={(e) => setMessage(e.target.value)} id="exampleFormControlTextarea1" placeholder="Was sind deine Reisedaten? Egal was du vorhast, wir helfen dir gerne!"></textarea>
      </div>
      <button type="submit" className="btn btn-primary mb-2">Absenden</button>
  </form>

    // <form onSubmit={handleSubmit} className='emailForm'>
    //   <input
    //     className="form-control form-control-lg"
    //     type="text"
    //     placeholder="Your Name"
    //     value={name}
    //     onChange={(e) => setName(e.target.value)}
    //   />
    //   <input
    //     type="email"
    //     placeholder="Your Email"
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //   />
    //   <textarea
    //     cols="30"
    //     rows="10"
    //     value={message}
    //     onChange={(e) => setMessage(e.target.value)}
    //   >
    //   </textarea>
    //   <button type="submit">Send Email</button>
    // </form>
  )

}

export default ContactForm