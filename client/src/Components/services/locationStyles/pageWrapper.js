const homePage = {
    backgroundImage: 'url(slide_1.jpg)',
    minHeight: '100vh',
    width: '100%',
    backgroundPosition: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
  }

const defaultStyling = {
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center'
}



const locationStyles = (location) => {
    if (location === '/') {
      return homePage;
    }
    return defaultStyling;
}

export default locationStyles;
