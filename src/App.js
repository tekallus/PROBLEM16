import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const faqs = [
  {
    question: "İsviçre'nin en iyi yanı nedir?",
    id: 1,
    answer:
      "Bilmiyorum ama bayrağı büyük bir artı. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
  },
  {
    question: "Vücudu ve burnu olmayan birine ne denir?",
    id: 2,
    answer:
      "Kimse bilmiyor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem."
  }
];

export default function FAQ() {
  return (
    //FAQ bileşeni içinde artık isOpen state değişkeni bulunmuyor.bu degisken Accordion degiskenin icine kondu
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Sıkça sorulan sorular
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Accordion key={faq.id} faq={faq} />
              // map ederken her bir öğe için <Accordion /> bileşenini çağıralim ve faq öğesini Accordion bileşenine props olarak geçirelim.
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

function Accordion({ faq }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="pt-6">
      <dt>
        <button
          onClick={() => setOpen((prevIsOpen) => !prevIsOpen)}
          className="flex w-full items-start justify-between text-left text-gray-900"
        >
          <span className="text-base font-semibold leading-7">
            {faq.question}
          </span>
          <span className="ml-6 flex h-7 items-center">
            {isOpen ? (
              <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
            )}
          </span>
        </button>
      </dt>
      {isOpen && (
        <dd className="mt-2 pr-12">
          <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
        </dd>
      )}
    </div>
  );
}

//Bu değişikliklerle, her bir Accordion bileşeni kendi içinde açılıp kapanma durumunu yönetir hale geldi
//ve bu durumu FAQ bileşeni ile paylaşıldi.
//FAQ bileşeni, artık açılıp kapanma durumunu yönetmek yerine, her bir soru için ayrı Accordion bileşenine bu durumu props olarak geçiriyor.
