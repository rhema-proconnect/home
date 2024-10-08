import Image from "next/image";

const services = [
  {
    title: "Faites vous connaitre",
    description:
      "Proconnect la platforme qui vous permet de vous mettre envaleur vous et votre entreprise",
    image: "/images/services/1.svg",
    alt: "Se faire connaitre",
  },
  {
    title: "Une vitrine pour tout acteurs économique",
    description:
      "Nemo quos doloribus quo omnis mollitia nostrum excepturi impedit veniam ",
    image: "/images/services/2.svg",
    alt: "Service description",
  },
  {
    title: "Créer vous un Branding",
    description:
      "Accusantium eius omnis minus debitis est odio earum labore ad itaque mollitia",
    image: "/images/services/3.svg",
    alt: "Service description",
  },
  {
    title: "Nous vous mettons en relation avec vos futres clients",
    description:
      "Dolores nemo labore soluta incidunt cumque repellat quod ducimus explicabo",
    image: "/images/services/4.svg",
    alt: "Service description",
  },
  {
    title: "Gérer vos rendez-vous avec les clients depuis Proconnect",
    description:
      "voluptatum ex molestiae quae alias quasi eum magnam maxime autem atque",
    image: "/images/services/5.svg",
    alt: "Service description",
  },
  {
    title: "Ne ratez pas une occasion de vous faire des clients",
    description:
      "vitae iure impedit magni consequuntur nihil consectetur laboriosam perspiciatis",
    image: "/images/services/6.svg",
    alt: "Service description",
  },
];
export function Services() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold">Qui somme nous?</h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        Nous sommes dédiés à fournir des solutions de visibilité et de gestion de rendez-vous 
        pour les professionnels de tous horizons. Notre mission est de simplifier la prise de 
        rendez-vous et d améliorer votre présence en ligne pour attirer plus de clients et 
        opportunités.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        {services.map(({ title, description, image, alt }) => (
          <div key={title}>
            <div className="h-32 w-32 flex justify-center mx-auto">
              <Image
                src={image}
                alt={alt}
                width={130}
                height={130}
                quality={75}
                sizes="100vw"
                priority
              />
            </div>
            <h2 className="font-bold text-lg text-center">{title}</h2>
            <p className="pt-2 text-base text-center dark:text-neutral-400">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
