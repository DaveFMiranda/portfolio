import { useState } from "react";

//TO DO: HARDCODE NAME AND EMAIL ADDRESS IN HERE
// use this site to hide your email address: https://www.matthewthom.as/blog/stop-email-scraping/

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `${name[0].toUpperCase() + name.slice(1)} is required`,
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }

    if (name === "email" && value && !/\S+@\S+\.\S+/.test(value)) {
      etErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email address is invalid",
      }));
    }
  };
  return (
    <form>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          onBlur={handleBlur}
        />
        {errors.name && <div className="error">{errors.name}</div>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          onBlur={handleBlur}
        />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>

      <div>
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          onBlur={handleBlur}
        ></textarea>
        {errors.message && <div className="error">{errors.message}</div>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
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
