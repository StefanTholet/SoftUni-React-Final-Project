const homePage = {
    backgroundImage: 'url(slide_1.jpg)',
    minHeight: '100vh',
    width: '100%',
    backgroundPosition: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
  }

const bookingPage = {
  width: '100%',
  minHeight: '100vh',
}

const locationStyles = {
    '/book':bookingPage,
    '/': homePage,
    '/blog': '#e5ded8',
    '/create-blog': '#e5ded8'
}

export default locationStyles;
