# Netflix Clone Application  

## Overview  
A responsive web application built with React, designed to replicate key features of Netflix. This project demonstrates my proficiency in front-end development, including user authentication, dynamic content loading, and API integration. The application allows users to explore trailers, view detailed movie information, and manage personalized watchlists.

While it does not support full movie streaming, it provides a seamless and engaging user experience, simulating the core functionality of Netflix.

---

## Features  
- User Authentication:  
  - Sign up and log in using Firebase authentication.  
  - User-specific data storage for personalized experience.  
- Movie Listing:  
  - Display a curated list of movies fetched from the TMDB API.  
- Interactive Pop-Up:  
  - View movie details and add movies to a personalized watchlist.  
- Watchlist Management:  
  - View and manage a custom watchlist with options to add or delete movies.  
- Movie Details:  
  - Watch trailers and view additional information about movies.  

---

## Technologies Used
- Frontend: React, SCSS
- API Integration: [TMDB API](https://developer.themoviedb.org), [Axios](https://axios-http.com)
- Video Playback: [React YouTube](https://www.npmjs.com/package/react-youtube)
- Backend: [Firebase](https://firebase.google.com) (Authentication and Firestore)
- Environment Configuration: .env file for sensitive data

---

## Screenshots  
_Desktop View_


- Sign-Up Page
  
![signUp](https://github.com/user-attachments/assets/9434cb62-f8e8-4e7a-b13a-e4130c1ee3f0)

- Sign-In Page
  
![login](https://github.com/user-attachments/assets/c155f2c5-c0b7-4999-8ca4-dffe0719f11b)

- Home Page
  
![HomePage](https://github.com/user-attachments/assets/df2cd85c-6b07-40ab-a199-a58657f5f8d4)

- Popup Page
  
![popup](https://github.com/user-attachments/assets/477bb387-926f-410d-b2c7-200191cb890d)

- Watchlist Page
  
![watchList](https://github.com/user-attachments/assets/e8315522-79a7-489d-af7a-0b15412cbc98)



_Mobile View_ 

- Sign-Up Page

![mobilesignup](https://github.com/user-attachments/assets/14148bb6-3886-4a53-971f-40ee4b66a277)

- Sign-In Page

![mobilesignin](https://github.com/user-attachments/assets/2a941ebd-8c18-43ab-be93-cac358c50f33)

- Home Page

![mobileHomepage](https://github.com/user-attachments/assets/b8bbe3ca-96e3-4c80-a214-f9e3236c361d)

- Popup Page

![mobilepopup](https://github.com/user-attachments/assets/6f9fcca5-195d-4cc7-ae76-8491cc729b35)

- Watchlist Page

![mobilewatchlist](https://github.com/user-attachments/assets/43dfcc0f-507a-4fa1-b9e4-276e2d342243)

---

## Installation and Usage  

Follow these steps to set up and run the project locally:  

### Prerequisites  
- Ensure you have Node.js installed on your system.  
  - [Download Node.js](https://nodejs.org/)  

### Steps  
1. Clone the Repository or Download the ZIP File  
   - Clone the repository:  
    ```bash
     git clone https://github.com/shabeeltt/netflix-clone-react.git
     cd netflix-clone-react
    ``` 
     
 
   - Or download the ZIP file and extract it.  

2. Install Dependencies  
   ```bash  
   npm install
   ```


3. Set Up Environment Variables

   - Create a .env file in the project root directory.

     - Add your TMDB API key:
     ```bash
     REACT_APP_TMDB_API_KEY=your_tmdb_api_key
     ```

     - Add your Firebase configuration:
     ```bash
     REACT_APP_FIREBASE_API_KEY=your_firebase_api_key  
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain  
     REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id  
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket  
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id  
     REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
     ```

4. Run the Project
   ```bash
   npm start
   ```
   - Open http://localhost:3000 in your browser to view the app.

___
### Contributions
___
Contributions are welcome! If you'd like to improve this project, please:

- Fork the repository and make your changes.

- Submit a pull request with a detailed description of your changes.
___
## License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details.


- Report issues or suggest features by creating a new issue.


Feel free to reach out if you have any questions or need support!

