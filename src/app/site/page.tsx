import Image from "next/image";

export default function Home() {
  return (
    <main className="justify-center">
      <section className="h-full wi-full pt-36 relative flex items-center justify-center flex-col">

        {/* <div className="absolute inset-0 -z-10 h-full w-full 
      items-center px-5 py-24 
      [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" /> */}

        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />

        <p className="text-center text-2xl md:text-3xl lg:text-4xl text-gray-800 font-semibold mb-6 animate-fade-in">
  Manage all your clients, at one place
</p>
        {/* Added properties for gradient*/}
        <div className="bg-gradient-to-r from-purple-900 to-black 
        text-transparent bg-clip-text relative">
          {/*Logo Properties*/}
          <h1 className="text-7xl font-bold text-center md:text-[200px]">
            WebCraft
          </h1>
        </div>
        {/* Image Section  */}
        <div className="flex justify-center items-center relative md:mt-[-50px]">
          <Image
            src={'/assets/preview2.jpeg'}
            alt="Banner"
            height={1200}
            width={1200}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
          />

          <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background 
          left-0 right-0 absolute">

          </div>

        </div>
      </section>
    </main>
  );
}

