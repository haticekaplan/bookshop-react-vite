import './NavBar.css'
import { Link } from 'react-router-dom';
export default function Menu() {
  return (
    <>
      <ul className="navbar">
        <Link to="/">Special Offer</Link>
        <Link to="/">New Books</Link>
        <Link to="/">Best Sellers</Link>
        <Link to="/">Fiction</Link>
        <Link to="/">Non-Fiction</Link>
        <Link to="/">Kids</Link>
      </ul>
    </>
  )
}