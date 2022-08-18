import Navbar from "../components/Navbar";
import styles from "../styles/contact.module.css";
{
  /* <head>
  <style>

  </style>
</head>; */
}
const Contact = () => {
  return (
    <>
      <Navbar />
      <h1>Contact </h1>

      <style jsx>
        {`
          h1 {
            color: pink;
          }

          .intro {
            color: blue;
          }
        `}
      </style>
    </>
  );
};

export default Contact;
