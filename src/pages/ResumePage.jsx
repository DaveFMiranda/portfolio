// import resume from assets
// onClick -- download
// list of proficiencies at the top

export default function ResumePage() {
    return (
    <div>
    <h1>It's the resume page</h1>
    <p>INSERT LIST OF PROFICIENCIES</p>

    <div className="pdf-container">
  <object className="pdf-viewer" data="dave-miranda-resume-2023.pdf" type="application/pdf">You don't have a plugin for this browser.</object>
</div>

    <button type="download">Download</button>

    </div>
    );
  }

  // TO DO: insert link to downloadable resume
  // TO DO: add list of developer's proficiencies


// import { useState, useEffect } from 'react';
// // Bringing in the required component from 'react-router-dom' for linking between pages and getting the current param variable's value from URL
// import { useParams, Link } from 'react-router-dom';
// import Profile from '../components/UI/ProfileSections/ProfileDetailed';
// import Container from '../components/UI/ListItem';

// import API from '../utils/API';

// export default function ProfilePage() {
//   const [user, setUser] = useState({});

//   // The useParams hook will yield an object. Its keys match the parameters defined on each route. Its values match the current URL value in those parameter locations
//   const { id } = useParams();

//   const fetchData = async () => {
//     const { data } = await API.getSingleUser(id);

//     setUser(data);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <>
//       <Container>
//         {/* Conditionally render the full profile or a Loading string, depending on whether user data is available */}
//         {user.name ? <Profile user={user} /> : <p>Loading...</p>}
//       </Container>
//       <footer className="profile-footer">
//         {/* Link the user back to the homepage. The to prop is used in place of an href */}
//         <Link to="/">← Go Back</Link>
//       </footer>
//     </>
//   );
// }
