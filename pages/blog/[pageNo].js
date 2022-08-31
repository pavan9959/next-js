import Navbar from "../../components/Navbar";

// getstaticPath() is used to generate static html files
// and get StaticProps is used to provde data to that static generated file 
// and then the populated html files will be stored in out folder when we create a build so to increase the speed like 
// when the user hits the url there will be no need to generate js file to html again instead of that the stored file will
// be directely served is known as static site generation




// first we have to get all the ids fromm the api like 
// [
//   { params: { pageNo: '1' } },
//   { params: { pageNo: '2' } },]

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((curElem) => {
    return {
      params: {
        pageNo: curElem.id.toString(),
        // key should be same as the file name
      },
    };
  });

  // path returns an array of params containing pageNo


  return {
    paths,
    fallback: false,
    // if path is not their then it will return false through fallback
  };
};


// then we can get the required id at getStaticProps by context
export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const myData = ({ data }) => {
  const { id, title, body } = data;
  return (
    <>
      <Navbar />
      <div className="ssr-styles ssr-styles-inside">
        <h3>{id}</h3>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </>
  );
};

export default myData;

