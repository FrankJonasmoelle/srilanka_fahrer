
function Header() {
  
    const scrollToContactForm = () => {
      const contactFormElement = document.getElementById('contactForm');
      if (contactFormElement) {
        contactFormElement.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <header>
        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage: "url('image_gallery/sunset2.png')",
            backgroundSize: '100% auto', // Set background size to 100% width and auto height
            backgroundPosition: 'center', // Center the background image vertically
            height: '600px'
          }}
        >
          <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0)',  position: 'relative', top: 370, left: 0, right: 0 }}>
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">Finde Deinen Fahrer für Sri Lanka</h1>
                <h4 className="mb-3">Einfach und Zuverlässig</h4>
                <button onClick={scrollToContactForm} type="submit" className="btn btn-primary mb-2">Deine Anfrage</button>
                {/* <a data-mdb-ripple-init className="btn btn-primary mb-2" href="#!" role="button">Kontaktiere Uns</a> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;
  