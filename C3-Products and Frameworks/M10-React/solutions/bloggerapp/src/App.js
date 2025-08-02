import BlogDetails from "./components/BlogDetails";
import BookDetails from "./components/BookDetails";
import CourseDetails from "./components/CourseDetails";
import "./App.css";

function App() {
  const bloggerApp = [
    {
      books: [
        { id: 101, title: "Master React", price: 670 },
        { id: 102, title: "Deep Dive into Angular 11", price: 800 },
        { id: 103, title: "Mongo Essentials", price: 450 },
      ],
      blogs: [
        {
          id: 1,
          title: "React Learning",
          author: "Stephen Biz",
          text: "Welcome to learning React!",
        },
        {
          id: 2,
          title: "Installation",
          author: "Schwezdenier",
          text: "You can install React from npm.",
        },
      ],
      courses: [
        { id: 1, title: "Angular", date: "4/5/2021" },
        { id: 2, title: "React", date: "6/3/2021" },
      ],
    },
  ];

  return (
    <>
      <div className="App">
        <div className="section">
          <CourseDetails courses={bloggerApp[0].courses} />
        </div>

        <div className="line" />
        <div className="section">
          <BookDetails books={bloggerApp[0].books} />
        </div>

        <div className="line" />
        <div className="section">
          <BlogDetails blogs={bloggerApp[0].blogs} />
        </div>
      </div>
    </>
  );
}

export default App;
