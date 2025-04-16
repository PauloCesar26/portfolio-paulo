import { Link } from "react-scroll"

function Banner() {
    
    return (
      <>
          <div className="banner text-center flex flex-col justify-center h-full">
            <div className="w-full text-[2rem] font-[Arial] z-30 flex flex-col items-center">
                <h3 className="text-[1.7rem] font-sans font-medium">Olá, seja bem vindo ao portfolio do</h3>
                <span className="text-[3.2rem] font-sans font-extrabold">Paulo Cesar</span>
                <p className="text-[1.3rem] max-md:text-[1.1rem] pl-15 pr-15 font-sans font-medium">Futuro desenvolvedor front-end, apaixonado por tecnologias que transformam ideias em projetos visuais</p>
                <Link  
                  to="contato"
                  smooth={true}
                  duration={900}
                  className="mt-5 flex items-center pt-3 pb-3 pl-5 pr-5 bg-white text-[20px] text-black dark:bg-white dark:text-black rounded-[15px] cursor-pointer">
                    Contact me
                </Link>
            </div>
          </div>
      </>
    )
}
  
export default Banner