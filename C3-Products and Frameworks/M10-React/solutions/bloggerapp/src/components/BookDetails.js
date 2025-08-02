function BookDetails(props) {
  const books = props.books;

  return (
    <>
      <h1  className= "heading">Book Details</h1>
      <div  className= "book-details">
        {books.map((book, index) => {
          return (
            <div key={index} className="book">
              <h2>{book.title}</h2>
              <h3>${book.price}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default BookDetails;
