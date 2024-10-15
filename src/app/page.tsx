import Header from "./components/header"
import Footer from "./components/footer"


export default function Home(){
  return(
    <div className='container pt-8'>
       <div id="header" className='min-h-screen bg-no-repeat bg-[url(/my.png)] bg-center lg:bg-[15%] bg-cover'
    style={{backgroundSize:"35%"}}
    >
    <Header />
    <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
      <div className='hidden lg:block'></div>
        <div className='text-[50px] sm:text-[80px] font-bold leading-tight left justify-start items-center'>
          <div>
            <p>I'm</p>
            <p>Shifa Ashraf.</p>
            <p>The next js developer</p>
          </div>
        </div>
    </div>
      </div>
      <Footer />
    </div>
    
  )
}
