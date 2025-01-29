import { Accordion,AccordionContent,AccordionItem,AccordionTrigger } from "@/components/ui/accordion";

export const FaqSection = () =>{
    return (
      <div className="bg-secondary px-6 py-12">
        <div className="flex items-center flex-col">
          <h2 className="text-6xl font-bold text-center">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="font-extralight lg:max-w-[30%] md:[50%] sm:max-w-[70%] text-center my-5 text-[#11270B]">
            Need help? Check out these answers to questions you might have about
            Bundo.{" "}
            <span className="font-semibold">
              Or send an email to help@bundo.app
            </span>
          </p>

          <Accordion type="single" collapsible className="lg:w-1/2 md:w-[60%] sm:w-[70%]">
            <AccordionItem value="What is Bundo">
              <AccordionTrigger className="hover:no-underline">
                <span className="text-black font-bold text-lg">
                  What is Bundo
                </span>
              </AccordionTrigger>
              <AccordionContent>
                Bundo is a retail & ecommerce technology company simplifying
                retail by bridging the gaps between small/medium business owners
                and regular customers. We are helping to further digitize retail
                and make it easier for everyday people to buy and sell beyond
                the challenges of location, visibility, accessibility and
                resources
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="businesses">
              <AccordionTrigger className="hover:no-underline">
                <span className="text-black font-bold text-lg">
                  What kind of businesses can use Bundo?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                Bundo is a retail & ecommerce technology company simplifying
                retail by bridging the gaps between small/medium business owners
                and regular customers. We are helping to further digitize retail
                and make it easier for everyday people to buy and sell beyond
                the challenges of location, visibility, accessibility and
                resources
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="CAC">
              <AccordionTrigger className="hover:no-underline">
                <span className="text-black font-bold text-lg">
                  Must I have a CAC document to use Bundo?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                Bundo is a retail & ecommerce technology company simplifying
                retail by bridging the gaps between small/medium business owners
                and regular customers. We are helping to further digitize retail
                and make it easier for everyday people to buy and sell beyond
                the challenges of location, visibility, accessibility and
                resources
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="Product">
              <AccordionTrigger className="hover:no-underline">
                <span className="text-black font-bold text-lg">
                  What kind of products can I buy on Bundo?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                Bundo is a retail & ecommerce technology company simplifying
                retail by bridging the gaps between small/medium business owners
                and regular customers. We are helping to further digitize retail
                and make it easier for everyday people to buy and sell beyond
                the challenges of location, visibility, accessibility and
                resources
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="free">
              <AccordionTrigger className="hover:no-underline">
                <span className="text-black font-bold text-lg">
                  Is Bundo free to use?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                Bundo is a retail & ecommerce technology company simplifying
                retail by bridging the gaps between small/medium business owners
                and regular customers. We are helping to further digitize retail
                and make it easier for everyday people to buy and sell beyond
                the challenges of location, visibility, accessibility and
                resources
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="join">
              <AccordionTrigger className="hover:no-underline">
                <span className="text-black font-bold text-lg">
                  How can I join the team?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                Bundo is a retail & ecommerce technology company simplifying
                retail by bridging the gaps between small/medium business owners
                and regular customers. We are helping to further digitize retail
                and make it easier for everyday people to buy and sell beyond
                the challenges of location, visibility, accessibility and
                resources
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    );
}