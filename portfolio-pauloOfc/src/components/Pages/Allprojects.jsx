import Projects from "./Projects"

function AllProjects() {
    return (
      <>
          {/* Proejct 1 */}
        <div className="mt-20 mb-10 flex flex-col items-center justify-center space-y-10">
            <h1 className="text-white">All Projects</h1>
            <div className="">
                <Projects/>
            </div>
        </div>
      </>
    )
}
  
export default AllProjects