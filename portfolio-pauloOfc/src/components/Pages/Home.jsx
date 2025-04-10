import Banner from "./Banner"
import Projects from "./Projects"

const Home = ({setPage}) => {
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
              <Projects/>
            </div>
          </div>

        </div>
    </>
  )
}

export default Home