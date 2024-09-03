import Image from "next/image";
import Link from "next/link";
export function Hero() {
  return (
  
    <div className="bg-yell dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2">
        <div className="pt-6 md:pt-32 justify-center text-center sm:justify-start sm:text-start">
          <h1 className="text-5xl font-black">
          Des opportunités <br />{" "}
            <span className="text-orange-600 font-extrabold">qui vous ressemble</span>
          </h1>
          <p className="pt-6 text-base w-auto sm:w-10/12 md:w-10/12 dark:text-neutral-400">
            Nous sommes dédiés à fournir des solutions de visibilité et de gestion de 
rendez-vous pour les professionnels de tous horizons. Notre mission est de simplifier la 
prise de rendez-vous et  d améliorer votre présence en ligne pour attirer plus de clients et 
opportunités.
          </p>
          <div className="flex flex-auto pt-10 gap-2 min-w-[350px] justify-center sm:justify-start">
            {/* <div>
              <Link href="https://github.com/humberni/halley/blob/main/README.md" target="_blank">
                <button className="bg-rose-500 text-white text-base rounded-full px-4 p-2 font-medium">
                  Documentación
                </button>
              </Link>
            </div> */}
                  <div className="flex justify-center">
                 <input 
                    type="text"
                    placeholder="Rechercher..."
                    className="bg-white text-black text-base rounded-full px-4 p-2 font-medium"
                  />
                  </div>
            
            <div>
              <Link href="#services">
                <button className="bg-black dark:bg-white text-white dark:text-black text-base rounded-full px-4 p-2 font-medium">
                  Recherche
                </button>
              </Link>
            </div>

            
          </div>
        </div>

        <div className="flex items-center mt-12">
          <Image
            src="/images/hero/moov.svg"
            alt="Image hero description"
            width={1025}
            height={662}
            quality={75}
            sizes="100vw"
            priority
          />
          {/* <video width="600" controls>
        <source src="/images/hero/ban.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
        </div>
      </div>
    </div>
  );
}
