import { Mail } from "lucide-react"

const ProjectCreator = ({setPage}) => {
    return (
        <>
        <div className="w-[100%] min-h-[calc(100vh-5rem)] bg-zinc-100 dark:bg-black">
            <div className="w-[100%] min-h-[80vh] flex flex-wrap justify-center space-x-5 mt-20" >
                <div className="w-[80%] flex flex-wrap bg-zinc-200 dark:bg-zinc-900/40 m-10 mt-10 mb-10 relative">    
                    <div className="w-full lg:w-[35%] flex items-center justify-center">
                        <img src="/public/img/imgPortfolio.png" className="w-[30rem]"/>
                    </div>
                    <div className="flex-1 p-5">
                        <div className="h-full flex justify-center flex-col items-center gap-3 text-black dark:text-white">
                            <h1>Contatos</h1>
                            <button onClick={() => window.open("https://www.linkedin.com/in/paulo-cesar-8465b7342/", "_blank")} 
                                className="w-[80%] bg-zinc-400/70 text-black dark:bg-zinc-700 dark:text-white pt-4 pb-4 rounded-[15px] flex items-center justify-center pr-10 gap-5 cursor-pointer">
                                <img src="../public/img/icons/linkedin.svg" alt="" className="max-w-[50px]"/>
                                <span className="text-[1.5rem]">Linkedin</span>
                            </button>
                            <button onClick={() => window.open("https://www.instagram.com/", "_blank")} 
                                className="w-[80%] bg-zinc-400/70 text-black dark:bg-zinc-700 dark:text-white pt-4 pb-4 rounded-[15px] flex items-center justify-center pr-10 gap-5 cursor-pointer">
                                <img src="../public/img/icons/github.svg" alt="" className="max-w-[50px]"/>
                                <span className="text-[1.5rem]">Github</span>
                            </button>
                            <div className="w-[80%] pt-5 pb-4 rounded-[15px] flex justify-center gap-5 text-[1.5rem]">
                                <Mail className="w-[40px] h-[40px]"/>
                                <span>pc.cordeirolima@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
  
export default ProjectCreator