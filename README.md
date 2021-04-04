# SoftUni-React-Final-Project

This project is a website for a hotel where authenticated users can book a holiday and read or write their own blog about their holiday. Furthermore, the users can like 
blogs that are not their own and add them to a list of favorite blogs. Comment section is also available for every particular blog post.

TO DO: 
User profile page where they can see:
1. Information about their booked holiday;
2. List of their own and favorite posts;
3. Number of likes from their posts;
4. Functionalities to:
a). Add profile picture;
b). Access blog pages of their own and favorite blog posts;
c). Edit information.  

Add preview opion of the created post;
Add like option to blog post pages;
Add carousel gallery slideshow to the booking section

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
The front-end of this project was bootstrapped with Create React App, Material-UI and CkEditor.
For the back-end I used Node with Express and MongoDB as a database. 

## Available Scripts

### `npm start`
You can run NPM start for the fron-end and the back-end folders which will start the scripts.

Open [http://localhost:3000](http://localhost:3000) to view the website in the browser.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Front-End File architecture
All of the components are located inside the Components folder in different subfolders:

1. Blog components:
a) BlogPostsPage - the component responsible for displaying all blog posts in a preview format;
b) PostPreviewCard - the component that is shown as a preview in the BlogPostsPage component. It has the "add to favorites" functionality;
c) ReadBlogPost - is the page that is lead to after a user has clicked on a PostPreviewCard. It fetches the particular post from the back-end and display its content on the page.
d) CommentsSection - is a component that is used inside the ReadBlogPost component. It lists all previous comments and provides functionality to write a new comment.
e) CreateBlog - is responsible for displaying a page with text editor where the users can write their blog articles. It uses the TextEditor component which is part of the CKEditor library;

2. Book components:
a) Book - constructs the booking page which for now consists of a hero image and a booking form;
b) Form - is the booking form component. It combines the following presentational components - RoomOptions, GuestOptions, DatePickers
   
3. Header - is the navigation component which receives props from the App component which controll what links are shown to the user based on authentication status;

4. HeroImage - a component that is displayed below the Header component on most pages. The images it displays are rotating based on the page location;

5. The Auth folder provides the Register and Login components;

#### Services and Logic
The Services folder contains file with helper functions that are split in the following manner:
1. LocationStyles is a folder containing styles for the site container div. Its purpose is to provide different style configurations based on page location.
2. blogService.js contains functions that are mostly responsible for fetching and posting blog-related data. 
3. bookService.js compiles booking data and sends it to the server;
4. server.js provides a function for server requests.
