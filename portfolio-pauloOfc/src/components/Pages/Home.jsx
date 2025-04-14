import { useNavigate } from "react-router-dom"
import Banner from "./Banner"
import AllProjects from "./Allprojects"
import Projects from "./Projects"

const Home = ({setPage}) => {
  const navigate = useNavigate();
  
  return (
    <>
        <div className="">
          <Banner/>

          {/* About */}
          <div className="min-h-[400px] pt-10 text-black bg-zinc-100 dark:bg-black dark:text-white p-6 flex flex-col justify-center items-center">
            <h1>Sobre mim</h1>
            <div className="flex flex-col md:flex-row-reverse flex-wrap justify-center items-center w-full">
                <div className="w-full md:w-1/2 flex justify-center">
                  <img src="/public/img/imgPortfolio.png"/>
                </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 p-10">
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
            </div>
          </div>

          {/* My projects */}
          <div className="h-auto pt-10 flex flex-col justify-center items-center bg-zinc-300 dark:bg-zinc-900/80">
            <h1 className="text-black dark:text-white">My Projects</h1>
            <div className="mt-10 mb-10 h-auto flex gap-10 justify-center flex-wrap">
              {/* Project 1 */}
              <div className="bg-zinc-100 border-1 border-zinc-400 text-black dark:text-white flex flex-col w-[400px] h-[560px] dark:bg-zinc-800 rounded-[15px] overflow-hidden">
                <div className="flex flex-col w-full h-[50%] bg-zinc-900">
                    <img src="./public/img/projectHirequest.png" alt="" className="w-full h-full object-cover object-center"/>
                </div>
                <div className="h-[10%] pt-3 pl-4 text-[1.4rem]">
                    <span>Marketing Pessoal</span>
                </div>
                <div className="h-[25%] text-[1rem] pt-2 pl-3 pr-3">
                    <p>Projeto que foi parte do TCC do 3 ano do ensino médio, um site que disponibiliza conteudo sobre marketing pessoal
                    para estudar sobre empregabilidade e se sair bem no mercado de trabalho.</p>
                </div>
                <div className="h-[15%] flex items-center border-t-1 border-zinc-900/20 dark:border-zinc-400/20">
                    <ul className="flex gap-2 pl-1 items-center">
                        <li className="w-[14%]"><img src="./public/img/icons/html.svg" alt="" /></li>
                        <li className="w-[12%]"><img src="./public/img/icons/css.svg" alt="" /></li>
                        <li className="w-[12%]"><img src="./public/img/icons/php.svg" alt="" /></li>
                        <li className="w-[13%]"><img src="./public/img/icons/bootstrap.svg" alt="" /></li>
                        <li className="w-[16%]"><img src="./public/img/icons/mysql.svg" alt="" /></li>
                    </ul>
                    <button className="pt-1 pb-1 pl-3 pr-3 bg-black text-white rounded-[15px] cursor-pointer mr-2">Projeto</button>
                </div>
              </div>

              <div className="flex flex-col w-[400px] h-[560px] bg-blue-900 rounded-[15px] overflow-hidden">
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

              <div className="flex flex-col w-[400px] h-[560px] bg-blue-900 rounded-[15px] overflow-hidden">
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
              onClick={() => navigate("/AllProjects")} 
              className="pt-2 pb-2 pl-4 pr-4 bg-blue-900 rounded-[15px] cursor-pointer">
              Ver todos projetos
            </button>
          </div>

          {/* Blog */}
          <div className="h-auto pt-10 flex flex-col justify-center items-center text-black bg-zinc-100 dark:bg-black">
            <h1 className="text-black dark:text-white">Blog</h1>
              <div className="mt-10 mb-10 h-auto flex gap-10 justify-center flex-wrap">
                {/* Blog 1 */}
                <div className="bg-zinc-200 border-1 border-zinc-400 flex flex-col w-[370px] h-[480px] dark:bg-zinc-800 dark:text-white rounded-[15px] overflow-hidden">
                  <div className="flex flex-col w-full h-[50%] bg-zinc-900">
                      <img src="./public/img/imgJavascript.jpeg" alt="" className="w-full h-full object-cover object-center"/>
                  </div>
                  <div className="flex-1 p-4 text-[1.5rem]">
                      <span>JavaScript: Explorando os conceitos do DOM</span>
                  </div>
                  <div className="text-[0.9rem] p-5 flex items-center justify-end dark:border-zinc-700">
                    <a href="../public/blog/blogJavascript/index.html" target="blank" className="pt-3 pb-3 pr-4 pl-4 text-white dark:bg-zinc-950 bg-zinc-900/80 rounded-[15px]">Acessar Blog</a>
                  </div>
                </div>
                {/* Blog 2 */}
                <div className="bg-zinc-200 border-1 border-zinc-400 flex flex-col w-[370px] h-[480px] dark:bg-zinc-800 dark:text-white rounded-[15px] overflow-hidden">
                  <div className="flex flex-col w-full h-[50%] bg-zinc-900">
                      <img src="./public/img/rede.jpeg" alt="" className="w-full h-full object-cover object-center"/>
                  </div>
                  <div className="flex-1 p-4 text-[1.5rem]">
                      <span>Modelo OSI e TCP IP: Conceitos e comparação dos temas</span>
                  </div>
                  <div className="text-[0.9rem] p-5 flex items-center justify-end dark:border-zinc-700">
                    <a href="../public/blog/blogOsiTcpip/index.html" target="blank" className="pt-3 pb-3 pr-4 pl-4 text-white dark:bg-zinc-950 bg-zinc-900/80 rounded-[15px]">Acessar Blog</a>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Home