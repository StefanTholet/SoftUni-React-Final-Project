const homePage = {
    backgroundImage: 'url(slide_1.jpg)',
    minHeight: '100vh',
    width: '100%',
    backgroundPosition: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
  }

const defaultSettings = {
  width: '100%',
  minHeight: '100vh',
}



const locationStyles = {
    '/book':defaultSettings,
    '/': homePage,
    '/blog': defaultSettings,
    '/blog-post': defaultSettings,
    '/create-blog': defaultSettings,
    '/register': defaultSettings,
    '/login': defaultSettings,
}

export default locationStyles;
