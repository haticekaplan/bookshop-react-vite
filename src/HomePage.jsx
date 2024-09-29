import { useState, useEffect } from "react";
import NavBar from './NavBar';
import BookList from "./BookList";

export default function HomePage() {
  const [romanceBooks, setRomanceBooks] = useState([]);
  const [horrorBooks, setHorrorBooks] = useState([]);

  async function getBooksBySubject(subjectName) {
    const url = new URL('https://openlibrary.org/search.json');
    url.searchParams.set('subject', subjectName);
    url.searchParams.set('limit', 8);

    const response = await fetch(url);
    const data = await response.json();
    return data.docs;
  }

  async function handleGetBooks() {
    setRomanceBooks(await getBooksBySubject('romance'));

    setHorrorBooks(await getBooksBySubject('horror'));
  }

  useEffect(() => {
    handleGetBooks();
  }, [])

  return (
    <>
      <NavBar />
      <BookList sectionLabel={"Romance"} books={romanceBooks} />
      <BookList sectionLabel={"Horror"} books={horrorBooks} />
    </>
  )
}