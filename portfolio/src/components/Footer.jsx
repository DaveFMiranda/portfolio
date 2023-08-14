// Styles for the footer
const footerStyles = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem',
  position: 'fixed',
  bottom: '0',
  width: '100%',
  borderTop: '1px solid #e7e7e7'
};

// DAVE TO DO: change style?
// DAVE TO DO: add links and such per the assignment
function Footer() {
  return (
    <footer style={footerStyles}>
      <div className='link-container'>
      <a href="https://github.com/DaveFMiranda">Dave's GitHub</a>
      <a href="https://www.linkedin.com/in/dave-m-9463327/">Dave's LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;