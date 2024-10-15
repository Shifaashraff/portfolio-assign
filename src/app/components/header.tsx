import Link from "next/link"

const Header = () => {
    return (
      <div className='container'>
          <div className='w-full flex justify-between items-center bg-blue-300'>
          <div className='text-xl font-medium'>Portfolio</div>
              <ul className='gap-10 lg:gap-16 hidden md:flex bg-blue-30'>
                <li className='menuLink'><a href="/">Home</a></li>
                <li className='menuLink'><a href='/about'>About</a></li>
                <li className='menuLink'><a href='/contact'>Contact</a></li>
              </ul>
          </div>
        </div>
    )
  }

  export default Header