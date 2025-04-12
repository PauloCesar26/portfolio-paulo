const ProjectCreator = ({setPage}) => {
    return (
        <>
            <div className="w-[100%] flex flex-wrap bg-amber-700 space-x-5 mt-20">
                <div className="">
                    <img src="/public/img/imgPortfolio.png" className="w-[25rem] pl-10"/>
                </div>
                <div className="">
                    <h1>Contatos</h1>
                    <div className="flex flex-col">
                        <button>Linkedin</button>
                        <button>Github</button>
                    </div>
                </div>
            </div>
        </>
    )
}
  
export default ProjectCreator