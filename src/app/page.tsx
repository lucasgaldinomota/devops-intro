import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      {/* cabeçalho */}
      <div className="flex justify-center items-center bg-[rgb(0,74,247)]" >
        <Image src="/images/logo.png" alt="" width={200} height={300} />
      </div >

      {/* conteúdo */}
      <div className="flex justify-center items-center flex-1 p-5">
        <Image src="/images/meme1.jpeg" alt="" width={500} height={300} />
        <Image src="/images/meme2.png" alt="" width={300} height={300} />
        <Image src="/images/meme3.png" alt="" width={300} height={300} />
        <Image src="/images/meme4.jpeg" alt="" width={500} height={300} />
      </div >

      {/* rodapé */}
      <div className="flex justify-center items-center h-20 bg-[rgb(0,74,247)]" >
        <a className="text-white text-5xl">Introdução a DevOps</a>
      </div >
    </main>
  );
}
