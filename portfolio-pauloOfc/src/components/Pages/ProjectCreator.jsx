const ProjectCreator = ({setPage}) => {
    return (
        <>
            <div className="w-[100%] min-h-[calc(100vh-5rem)] flex flex-wrap justify-center bg-zinc-100 space-x-5 mt-20" >
                <div className="w-[80%] flex flex-wrap bg-zinc-500 m-10 mt-5 mb-20">    
                    <div className="w-[35%] flex items-baseline justify-center">
                        <img src="/public/img/imgPortfolio.png" className="w-[30rem]"/>
                    </div>
                    <div className="flex-1 bg-amber-950 p-5">
                        <div className="flex flex-col items-center gap-3">
                            <h1>Contatos</h1>
                            <button className="w-[80%] bg-zinc-400 pt-4 pb-4 rounded-[15px]">Linkedin</button>
                            <button className="w-[80%] bg-zinc-400 pt-4 pb-4 rounded-[15px]">Github</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
  
export default ProjectCreator