import { useNavigate } from "react-router-dom"
import Banner from "./Banner"
import Projects from "./Projects"

const Home = ({setPage}) => {
  const navigate = useNavigate();
  
  return (
    <>
        <div className="">
          <Banner/>

          <div className="min-h-[400px] bg-zinc-300 text-black dark:bg-zinc-900/80 dark:text-white p-6 flex flex-col justify-center items-center">
            <h1>Sobre mim</h1>
            <div className="flex flex-wrap justify-center items-center w-full">
              {/* About */}
              <div className="w-[50%] flex flex-col justify-center space-y-6">
                <p>Sou um estudante recém-formado no ensino médio técnico em Desenvolvimento de Sistemas, 
                  atualmente iniciando minha jornada como desenvolvedor front-end. Tenho paixão por criar 
                  websites, com foco em interfaces e design.
                </p>
                <p>Me destaco por ser um jovem com excelente capacidade de adaptação, comunicação eficaz e 
                  habilidade para colaborar em equipe. Sempre procuro demonstrar pro-atividade e interesse, 
                  além de possuir uma boa base de conhecimentos na área de tecnologia.
                </p>
                <p>Estou em busca da minha primeira experiência profissional. Quero contribuir para o sucesso 
                  da empresa enquanto aprimoro minhas competências. Busco oportunidades no setor de tecnologia 
                  que me permitam crescer e explorar novos caminhos para o futuro.
                </p>
              </div>
              <div className="w-[50%] flex justify-center">
                <img src="/public/img/imgPortfolio01.png"/>
              </div>
            </div>
          </div>

          {/* My projects */}
          <div className="h-auto mt-10 flex flex-col justify-center items-center">
            <h2>My Projects</h2>
            <div className="mt-10 mb-10 h-auto flex gap-10 justify-center flex-wrap dark:bg-zinc-950">

              <div className="border-1 border-zinc-400 flex flex-col w-[350px] h-[500px] dark:bg-zinc-900/80 rounded-[15px] overflow-hidden">
                <div className="flex flex-col w-full h-[50%] bg-zinc-900">
                    <img src="./public/img/projectHirequest.png" alt="" className="w-full h-full object-cover object-center"/>
                </div>
                <div className="h-[10%] pt-3 pl-4 text-[1.1rem]">
                    <span>Projeto sobre Marketing Pessoal</span>
                </div>
                <div className="h-[25%] text-[0.9rem] pl-4 pt-3">
                    <p>Projeto que foi parte do TCC do 3 ano do ensino médio, um site que disponibiliza conteudo sobre marketing pessoal
                    para estudar sobre empregabilidade e se sair bem no mercado de trabalho.</p>
                </div>
                <div className="h-[15%]  flex justify-around items-center border-t-1 border-zinc-400/20">
                    <ul className="flex gap-2 pl-1 items-center">
                        <li className="w-[14%]"><img src="./public/img/icons/html.svg" alt="" /></li>
                        <li className="w-[12%]"><img src="./public/img/icons/css.svg" alt="" /></li>
                        <li className="w-[12%]"><img src="./public/img/icons/php.svg" alt="" /></li>
                        <li className="w-[12%]"><img src="./public/img/icons/bootstrap.svg" alt="" /></li>
                        <li className="w-[15%]"><img src="./public/img/icons/mysql.svg" alt="" /></li>
                    </ul>
                    <button>Project</button>
                </div>
            </div>
    
            <div className="flex flex-col w-[350px] h-[500px] bg-blue-900 rounded-[15px] overflow-hidden">
                <div className="flex flex-col w-full h-[45%] bg-zinc-900 items-center justify-center">
                    Img
                </div>
                <div className="h-[15%] bg-blue-500">
                    Teste
                </div>
                <div className="h-[25%] bg-blue-300">
                    Teste
                </div>
                <div className="h-[15%] bg-blue-400 flex justify-around items-center">
                    <ul className="flex gap-6 pl-5">
                        <li>Html</li>
                        <li>CSS</li>
                        <li>JS</li>
                    </ul>
                    <button>Project</button>
                </div>
            </div>
    
            <div className="flex flex-col w-[350px] h-[500px] bg-blue-900 rounded-[15px] overflow-hidden">
                <div className="flex flex-col w-full h-[45%] bg-zinc-900 items-center justify-center">
                    Img
                </div>
                <div className="h-[15%] bg-blue-500">
                    Teste
                </div>
                <div className="h-[25%] bg-blue-300">
                    Teste
                </div>
                <div className="h-[15%] bg-blue-400 flex justify-around items-center">
                    <ul className="flex gap-6 pl-5">
                        <li>Html</li>
                        <li>CSS</li>
                        <li>JS</li>
                    </ul>
                    <button>Project</button>
                </div>
            </div>
            </div>
            <button 
              onClick={() => navigate("/Projects")} 
              className="pt-2 pb-2 pl-4 pr-4 bg-blue-900 rounded-[15px] cursor-pointer">
              Ver outros projetos
            </button>
          </div>

        </div>
    </>
  )
}

export default Home