function CourseDetails(props) {
  const courses = props.courses;

  return (
    <>
      <h1 className="heading">Course Details</h1>
      <div className="course-details">
        {courses.map((course, index) => {
          return (
            <div key={index} className="course">
              <h2>{course.title}</h2>
              <h3>{course.date}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CourseDetails;
