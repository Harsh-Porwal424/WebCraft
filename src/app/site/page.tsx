import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { pricingCards } from "@/lib/constants";
import clsx from "clsx";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="justify-center">
      <section className="h-full wi-full pt-36 relative flex items-center justify-center flex-col">

        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />

        <p className="text-center text-2xl md:text-3xl lg:text-4xl text-gray-500 font-semibold mb-6 animate-fade-in">
          Manage all your clients, at one place
        </p>

        {/* Added properties for gradient*/}
        <div className="bg-gradient-to-r from-purple-900 to-orange-600 text-transparent bg-clip-text relative">
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
      <section className="flex justify-center items-center flex-col md:mt-20">
        <h2 className="text-4xl text-center">
          Choose What Fit's you Right!
        </h2>
        <p className="text-muted-foreground text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, explicabo aperiam corrupti consectetur magni numquam nihil repellendus harum provident delectus impedit dolores. Nesciunt vero ad molestias corrupti facere porro eum!
        </p>
        {/* <div className="flex items-center justify-center gap-4 flex-wrap mt-6">
        {pricingCards.map((card)=>{(
          <Card key={card.title}>{card.description} </Card>
        )}}
        
        </div> */}

        <div className="flex items-center justify-center gap-4 flex-wrap mt-6"> {pricingCards.map((card) => (
          <Card key={card.title} className={clsx('w-[300px] flex flex-col justify-between', {"border-2 border-primary":card.title==="Unlimited Saas",})}>

          <CardHeader>
            <CardTitle className={clsx('', {'text-muted-foreground':card.title !== 'Unlimited Saas'})}>
            {card.title}
            </CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <span className="text-4xl font-bold">
              {card.price}
            </span>
            <span className="text-4xl font-bold">
              /m
            </span>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-4">
          <div>{card.features.map((feature)=><div key={feature} className="flex gap-2 items-center">
            <Check  className="text-muted-foreground"/>
            <p>{feature}</p>
          </div>)}
          
          </div>
          <Link
  href={`/agency?plan=${card.priceId}`}
  className={clsx(
    'w-full text-center bg-primary p-2 rounded-md',
    { 'bg-muted-foreground': card.title !== 'Unlimited Saas' }
  )}
>
  {/** Link content */}
  Get Started
</Link>

          </CardFooter>
          </Card>
        ))}
        </div>
      </section>
    </main>
  );
}