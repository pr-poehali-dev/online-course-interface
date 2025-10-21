import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Как начать обучение на платформе?",
    answer: "Зарегистрируйтесь на платформе, выберите интересующий курс и нажмите 'Начать обучение'. Вы получите доступ ко всем материалам курса."
  },
  {
    question: "Есть ли сертификаты после прохождения курсов?",
    answer: "Да, после успешного завершения курса вы получите сертификат, который можно добавить в резюме или LinkedIn."
  },
  {
    question: "Могу ли я учиться в своём темпе?",
    answer: "Конечно! Все курсы доступны в любое время, и вы можете проходить их в удобном для вас темпе."
  },
  {
    question: "Есть ли пробный период?",
    answer: "Да, многие курсы имеют бесплатные вводные уроки, чтобы вы могли оценить качество материалов перед покупкой."
  },
  {
    question: "Как связаться с преподавателем?",
    answer: "В каждом курсе есть раздел комментариев, где вы можете задать вопросы. Также доступна техническая поддержка 24/7."
  },
  {
    question: "Можно ли получить возврат средств?",
    answer: "Да, мы предоставляем 14-дневную гарантию возврата средств, если курс вам не подошёл."
  }
];

export default function FAQ() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Частые вопросы
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
