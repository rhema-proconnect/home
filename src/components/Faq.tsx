import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqitems = [
  {
    question: "Qu'est-ce que votre plateforme offre aux professionnels ?",
    response:
      "Notre plateforme offre aux professionnels un monosite personnalisé, qui leur permet de présenter leurs services, d’augmenter leur visibilité en ligne, de faciliter la prise de rendez-vous avec leurs clients et de recevoir des avis notés sur leurs prestations.",
  },
  {
    question: "Quels types de services peuvent être proposés sur votre plateforme ?",
    response:
      "Nous accueillons une variété de services professionnels, allant des services de bien-être (coaching, massages) aux services techniques (réparations, consultations) en passant par les services éducatifs (tutoring, formations). Toute prestation de service peut trouver sa place sur notre plateforme.",
  },
  {
    question: "Comment les clients prennent-ils des rendez-vous avec moi ?",
    response:
      "Vos clients peuvent prendre rendez-vous directement sur votre monosite via un calendrier interactif. Vous pouvez définir vos disponibilités et accepter ou modifier les demandes de rendez-vous à tout moment.",
  },
  {
    question: "Comment les notations des services fonctionnent-elles ?",
    response:
      "Après chaque prestation, vos clients ont la possibilité de laisser un avis et une notation sur votre service. Ces évaluations vous permettent d’améliorer votre visibilité sur la plateforme et de renforcer la confiance des futurs clients.",
  },
  {
    question: "Comment puis-je améliorer ma visibilité sur la plateforme ?",
    response:
      "Vous pouvez améliorer votre visibilité en optimisant votre profil, en accumulant des avis positifs, en partageant votre monosite sur vos réseaux sociaux et en participant à nos campagnes de promotion internes.",
  },
  {
    question: "Quels sont les avantages d'avoir un monosite sur votre plateforme par rapport à un site web classique ?",
    response:
      "Un monosite sur notre plateforme est clé en main, optimisé pour la prise de rendez-vous et conçu pour maximiser votre visibilité. Vous n'avez pas à vous soucier de la gestion technique, et vous bénéficiez de nos outils de marketing, de suivi de performances et de notations. C'est une solution tout-en-un, accessible à tous.",
  },
  {
    question: "Quels sont les frais pour utiliser la plateforme ?",
    response:
      "Nos tarifs varient en fonction du plan que vous choisissez. Nous proposons des options adaptées aux travailleurs autonomes, aux petites entreprises et aux grandes structures. Consultez notre rebrique \"Tarifs\" pour plus de détails.",
  },
  {
    question: "Puis-je intégrer mon monosite à mes autres outils (site web, réseaux sociaux) ?",
    response:
      "Oui, nous offrons des intégrations pour que vous puissiez facilement partager votre monosite sur vos réseaux sociaux ou l'incorporer à votre site web existant.",
  },
  {
    question: "Comment assurer la satisfaction de mes clients sur votre plateforme ?",
    response:
      "Assurez-vous d'être réactif aux demandes de rendez-vous, de fournir un excellent service, et d'encourager vos clients à laisser des avis après chaque prestation. Une bonne communication et une transparence sur vos services sont des clés pour maximiser la satisfaction.",
  },
  {
    question: "Comment puis-je suivre mes rendez-vous et mes performances sur la plateforme ?",
    response:
      "Vous avez accès à un tableau de bord intuitif où vous pouvez gérer vos rendez-vous, consulter vos statistiques de visibilité, et suivre vos évaluations clients. Tout est conçu pour vous offrir une vue d'ensemble de votre activité.",
  },
  {
    question: "",
    response:
      "",
  },
  {
    question: "",
    response:
      "",
  },
  {
    question: "",
    response:
      "",
  },
];

export default function Faq() {
  return (
    <div
      className="bg-white dark:bg-neutral-900 w-full px-4 pt-16 pb-16"
      id="faq"
    >
      <h2 className="text-4xl font-bold text-center">
        Foire aux questions
      </h2>

      <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
      Répondez ici aux éventuelles questions de vos clients, cela augmentera la
      taux de conversion ainsi que les demandes d’assistance ou de chat.
      </p>
      <div className="mx-auto w-full max-w-2xl rounded-2xl bg-transparent dark:bg-transparent">
        {faqitems.map(({ question, response }) => (
          <div key={question}>
            <Disclosure>
              {({ open }) => (
                <div className="mt-4">
                  <Disclosure.Button
                    className={`${
                      open
                        ? "bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-100 rounded-b-none"
                        : ""
                    } flex w-full justify-between rounded-lg bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800 px-4 py-4 text-left text-base font-medium `}
                  >
                    <h2 className="font-semibold">{question}</h2>
                    <ChevronDownIcon
                      className={`${
                        open ? "rotate-180 transition-transform" : ""
                      } h-5 w-5 flex-shrink-0`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className={`${
                      open
                        ? "px-4 pt-4 pb-2 text-base dark:text-neutral-400"
                        : ""
                    } bg-neutral-100 dark:bg-neutral-800 rounded-b-lg`}
                  >
                    <p>{response}</p>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
}
