import Banner from "./Banner"
import Projects from "./Projects"

const Home = ({setPage}) => {
  return (
    <>
        <div className="">
          <Banner/>

          <div className="min-h-[400px] bg-zinc-700 mt-10">
            <div className="flex">
              {/* About */}
              <div className="w-[50%] flex flex-col justify-center">
                <h1>Hello, I'm Paulo Cesar <br/><span>a programming student</span></h1>
                <p>Future front-end developer! 
                    I'm studying systems development at a technical school, 
                    I'm passionate about programming languages ​​and I like developing websites, 
                    design, something more visible.
                </p>
              </div>
              <div className="w-[50%] flex justify-center">
                <img src="/public/img/imgPortfolio01.png"/>
              </div>
            </div>
          </div>

          {/* My projects */}
          <div className="h-auto mt-10">
            <h2>My Projects</h2>
            <div className="h-auto flex gap-10 justify-center flex-wrap dark:bg-zinc-950">
              <Projects/>
            </div>
          </div>

        </div>
    </>
  )
}

export default Home