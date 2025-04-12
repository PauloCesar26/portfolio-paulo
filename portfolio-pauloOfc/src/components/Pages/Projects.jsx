function Projects() {
  return (
    <div className="mt-10 mb-10 h-auto flex gap-10 justify-center flex-wrap dark:bg-zinc-950">
        <div className="border-1 border-zinc-400 flex flex-col w-[400px] h-[560px] dark:bg-zinc-900/80 rounded-[15px] overflow-hidden">
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
            <div className="h-[15%] flex items-center border-t-1 border-zinc-400/20">
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
  )
}

export default Projects