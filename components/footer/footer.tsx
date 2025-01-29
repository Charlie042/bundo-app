import Image from "next/image"
import { FooterImg,BundoLogo } from "@/public/images"
import { footerData,socialLinks } from "./_components/data";
export const Footer = () => {
    return (
      <footer>
        <div className="mb-10 flex flex-col gap-5">
          <Image src={BundoLogo} alt="Bundo Logo" height={24} />
          <span className="font-extralight">Simplifying Retail.</span>
        </div>
        <div className="flex gap-20">
          <div className="">
            <Image src={FooterImg} alt="mobile bundo app" height={700} />
          </div>
          <div className="flex flex-col justify-between">
            <div className="grid grid-cols-4 gap-10">
              {footerData.map((section) => (
                <div key={section.title}>
                  <h4 className="font-semibold text-lg">{section.title}</h4>
                  <ul className="mt-2 space-y-5 font-thin">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.url}
                          className="text-gray-600 hover:text-gray-900"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex gap-5 mx-10">
              <h3 className="text-foreground text-lg font-semibold">Keep up with us</h3>
            {socialLinks.map((social)=> (
               <ul key={social.name} className="flex items-center gap-2 text-primary text-sm">
                <Image src={social.icon} alt="social handle"/>
                  <li>{social.name}</li>  
               </ul> 
            ))}
            
          </div>
           </div>
        </div>
      </footer>
    );
}