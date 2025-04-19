import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Banner from "./Banner"
import { toast } from "sonner"
import { AlertCircle } from "lucide-react"
import AllProjects from "./Allprojects"
import Projects from "./Projects"
import { MessageCircleOff } from "lucide-react"

const Home = ({setPage}) => {
  const navigate = useNavigate();

  const [formInfo, setFormInfo] = useState(
    {
      name: "",
      email: "",
      message: ""
    }
  );
  const [status, setStatus] = useState("");
  const information = (e) => {
    setFormInfo(
      {
        ...formInfo,
        [e.target.name]: e.target.value
      }
    );
  }

  const validation = async (event) => {
    event.preventDefault();

    if(!formInfo.name.trim()){
      setStatus( 
        toast.error("Preencha o campo nome!")
      );
      return;
    }
    if(!formInfo.email.trim().includes("@")){
      setStatus(
        toast.error("Preencha o campo email!")
      );
      return;
    }
    if(!formInfo.message.trim()){
      setStatus(
        toast.error("Preencha o campo mensagem")
      );
      return;
    }
  
      const data = new FormData();
      data.append("name", formInfo.name);
      data.append("email", formInfo.email);
      data.append("message", formInfo.message);
      data.append("_captcha", "false");
      data.append("_honey", "");
  
      try{
        const response = await fetch("https://formsubmit.co/pc.cordeirolima@gmail.com", {
          method: "POST",
          body: data
        });
  
        if(response.ok){
          setStatus(toast.success("Mensagem enviada com sucesso!"));
          setFormInfo(
            {
              name:"", 
              email:"", 
              message:""
            }
          );
        }
        else{
          setStatus(toast.error("Erro ao enviar a mensagem!"))
        }
      }
      catch(error){
        setStatus(toast.error("Erro ao enviar a mensagem!"))
        console.log(error);
      }
  };
  
  return (
    <>
        <div>
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
          <div className="h-auto pt-10 pb-10 flex flex-col justify-center items-center bg-zinc-200 dark:bg-zinc-900/40">
            <h1 className="text-black dark:text-white">My Projects</h1>
            <div className="mt-10 mb-10 h-auto flex flex-col gap-10 justify-center items-center flex-wrap">
              {/* Project 1 */}
              <div className="responsiveProject bg-zinc-100 border-1 border-zinc-400 text-black dark:text-white flex w-[80%] h-[350px] dark:bg-zinc-900 rounded-[15px] overflow-hidden">
                <div className="flex w-[60%] h-full bg-zinc-900">
                    <img src="./public/img/projectHirequest.png" alt="" className="w-full h-full object-cover object-center"/>
                </div>
                <div className="flex flex-col w-[100%]">
                  <div className="flex flex-col flex-1 space-y-10 p-4">
                    <div className="h-[10%] pt-3 pl-4 text-[1.4rem]">
                        <span>Marketing Pessoal</span>
                    </div>
                    <div className="h-[25%] text-[1rem] pt-2 pl-3 pr-3">
                        <p>Projeto que foi parte do TCC do 3 ano do ensino médio, um site que disponibiliza conteudo sobre marketing pessoal
                        para estudar sobre empregabilidade e se sair bem no mercado de trabalho.</p>
                    </div>
                  </div>
                  <div className="h-[15%] flex items-center justify-between border-t-1 border-zinc-900/20 dark:border-zinc-400/20 p-10">
                      <ul className="flex gap-2 items-center">
                          <li className="w-[14%]"><img src="./public/img/icons/html.svg" alt="" /></li>
                          <li className="w-[12%]"><img src="./public/img/icons/css.svg" alt="" /></li>
                          <li className="w-[12%]"><img src="./public/img/icons/php.svg" alt="" /></li>
                          <li className="w-[13%]"><img src="./public/img/icons/bootstrap.svg" alt="" /></li>
                          <li className="w-[16%]"><img src="./public/img/icons/mysql.svg" alt="" /></li>
                      </ul>
                      <button className="pt-1 pb-1 pl-3 pr-3 bg-zinc-400/60 text-black dark:bg-zinc-700 dark:text-zinc-300 rounded-[15px] cursor-pointer mr-2">Projeto</button>
                  </div>
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
              className="flex items-center justify-center pt-3 pb-3 pl-10 pr-10 bg-zinc-900/80 text-[18px] text-white dark:bg-zinc-200 dark:text-black rounded-[15px] cursor-pointer">
              All Projects
            </button>
          </div>

          <div className="fundoFrase min-h-[350px] max-h-[500px] p-10 flex flex-col justify-center items-center">
            <h1 className="z-40 text-[1px] md:text-[10px]">"Programador não é aquele que sabe linguagem de programação x e y, programador é aquele que sabe aprender rápido e aplicar o seu conhecimento" - Paulo Cesar</h1>
          </div>

          {/* Blog */}
          <div className="h-auto pt-10 pb-10 flex flex-col justify-center items-center text-black bg-zinc-100 dark:bg-zinc-900/40">
            <h1 className="text-black dark:text-white">Blog</h1>
              <div className="mt-10 mb-10 h-auto flex gap-10 justify-center flex-wrap">
                {/* Blog 1 */}
                <div className="bg-zinc-200 border-1 border-zinc-400 flex flex-col w-[370px] h-[480px] dark:bg-zinc-900 dark:text-white rounded-[15px] overflow-hidden">
                  <div className="flex flex-col w-full h-[50%] bg-zinc-900">
                      <img src="./public/img/imgJavascript.jpeg" alt="" className="w-full h-full object-cover object-center"/>
                  </div>
                  <div className="flex-1 p-4 text-[1.5rem]">
                      <span>JavaScript: Explorando os conceitos do DOM</span>
                  </div>
                  <div className="text-[0.9rem] p-5 flex items-center justify-end dark:border-zinc-700">
                    <a href="../public/blog/blogJavascript/index.html" target="blank" className="pt-3 pb-3 pr-4 pl-4 bg-zinc-400/60 text-black dark:bg-zinc-700 dark:text-zinc-300  rounded-[15px]">Acessar Blog</a>
                  </div>
                </div>
                {/* Blog 2 */}
                <div className="bg-zinc-200 border-1 border-zinc-400 flex flex-col w-[370px] h-[480px] dark:bg-zinc-900 dark:text-white rounded-[15px] overflow-hidden">
                  <div className="flex flex-col w-full h-[50%] bg-zinc-900">
                      <img src="./public/img/rede.jpeg" alt="" className="w-full h-full object-cover object-center"/>
                  </div>
                  <div className="flex-1 p-4 text-[1.5rem]">
                      <span>Modelo OSI e TCP IP: Conceitos e comparação dos temas</span>
                  </div>
                  <div className="text-[0.9rem] p-5 flex items-center justify-end dark:border-zinc-700">
                    <a href="../public/blog/blogOsiTcpip/index.html" target="blank" className="pt-3 pb-3 pr-4 pl-4 bg-zinc-400/60 text-black dark:bg-zinc-700 dark:text-zinc-300 rounded-[15px]">Acessar Blog</a>
                  </div>
                </div>
              </div>
          </div>
          
          <footer id="contato" className="bg-zinc-200 dark:bg-black w-full flex flex-col items-center pt-10 pb-2 pl-10 pr-10">
            <div className="w-full flex flex-col  flex-wrap items-center">
              <h1 className="text-black dark:text-zinc-200">Entre em contato</h1>
              <div className="w-full lg:w-[40%] pt-5 pb-7 mb-5 flex flex-col justify-center items-center space-y-6 md:w-1/2 border-b-1 border-zinc-500">
                <button
                    onClick={() => navigate("/Criador")} 
                    className="flex items-center justify-center pt-3 pb-3 pl-10 pr-10 bg-zinc-900/80 text-[18px] text-white dark:bg-zinc-200 dark:text-black rounded-[15px] cursor-pointer">
                    Contact me
                </button>
              </div>

              <div className="w-full flex items-center justify-center">
                <div className="w-full lg:w-[40%]">
                  <form onSubmit={validation} action="https://formsubmit.co/pc.cordeirolima@gmail.com" method="POST" className="flex flex-col text-black dark:text-white text-[16px]">
                    <label htmlFor="">Nome:</label>
                    <input type="text" 
                      name="name" 
                      placeholder="Digite seu nome"
                      value={formInfo.name}
                      onChange={information}
                      className="text-black dark:text-white border-1 border-zinc-600 rounded-[10px] pt-2 pb-2 pl-3 pr-3"
                    />

                    
                    <label htmlFor="" className="mt-6">Digite seu email:</label>
                    <input 
                      type="text" 
                      name="email" 
                      placeholder="Digite seu email"
                      value={formInfo.email}
                      onChange={information}
                      className="text-black dark:text-white border-1 border-zinc-600 rounded-[10px] pt-2 pb-2 pl-3 pr-3"
                    />
                    
                    <label htmlFor="" className="mt-6">Mensagem:</label>
                    <textarea 
                      name="message" 
                      placeholder="Digite sua mensagem" 
                      value={formInfo.message}
                      onChange={information} 
                      className="text-black dark:text-white pt-2 pb-2 pl-3 pr-3 min-h-[150px] border-1 border-zinc-600 rounded-[10px]"
                    ></textarea>    
                    
                    <div className="w-full flex items-center justify-center">
                      <button type="submit"
                        className="flex items-center justify-center mt-5 pt-3 pb-3 pl-10 pr-10 bg-zinc-900/80 text-[18px] text-white dark:bg-zinc-200 dark:text-black rounded-[15px] cursor-pointer">
                        Enviar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="w-full p-5 mt-10 border-t-1 border-zinc-700 dark:border-zinc-100/50 flex justify-center text-black dark:text-white">
              <span>&copy; Paulo Cesar 2025</span>
            </div>
          </footer>
        </div>
    </>
  )
}

export default Home