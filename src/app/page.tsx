import Image from "next/image";

export default function Home() {

  // alterar aqui
  let variavel: boolean = true

  function renderizarConteudo(variavel: boolean) {
    if (variavel) {
      return (
        <div className="flex justify-center items-center flex-1 p-5">
          <Image src="/images/meme-1.jpeg" alt="" width={500} height={300} />
          <Image src="/images/meme-2.png" alt="" width={300} height={300} />
          <Image src="/images/meme-3.png" alt="" width={300} height={300} />
          <Image src="/images/meme-4.jpeg" alt="" width={500} height={300} />
        </div >
      )
    } else {
      return (
        <div className="flex justify-center items-center flex-1 p-5">
          <Image src="/images/meme-extra.jpeg" alt="" width={1000} height={1000} />
        </div >
      )
    }
  }

  return (
    <main className="flex flex-col h-screen">
      <div className="flex justify-center items-center bg-[rgb(0,74,247)]" >
        <Image src="/images/unifor-logo.png" alt="" width={200} height={300} />
      </div >
      {renderizarConteudo(variavel)}
      <div className="flex justify-center items-center h-20 bg-[rgb(0,74,247)]" >
        <a className="text-white text-5xl">Introdução a DevOps</a>
      </div >
    </main>
  );
}
