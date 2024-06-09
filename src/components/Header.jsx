export default function Header(){
  return(
    <>
      <div className='oaheader'>
        <nav className='nav'>
          <div className='headerTitle'>
            Well.
          </div>
          <div>
            <ul>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>About</a></li>
              <li><a href='#'>Contact</a></li>
              <li><a href='#'>Shop</a></li>

            </ul>
          </div>
        </nav>
        <div>
          <div className='oahero'>
            <div className='text'>
            <h1 className='make'>Make your websites<span className='span'>Incredible</span></h1>
            <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>

            <button className='signin'>Sign-in</button><button className='reg'>Register</button>
            </div>

            <div className='circle'></div>
            <div className='circle2'></div>
          </div>
        </div>
      </div>
    </>
  )
}
