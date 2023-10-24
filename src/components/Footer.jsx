import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const date = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img src={logo} alt="bank logo" className="w-[266px] h-[72px]" />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex-[1.5] flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => {
            return (
              <div
                key={footerLink.key}
                className="flex flex-col ss:my-0 my-4 min-w-[150px]"
              >
                <h4 className="font-poppins font-medium text-[18px] text-white leading-[27px]">
                  {footerLink.title}
                </h4>
                <ul className="list-none mt-4">
                  {footerLink.links.map((link, index) => {
                    return (
                      <li
                        key={link.name}
                        className={`font-poppins font-normal text-[16px] text-dimWhite leading-[24px] cursor-pointer hover:text-secondary ${
                          index !== footerLink.links.length - 1
                            ? "mb-4"
                            : "mb-0"
                        }`}
                      >
                        {link.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
        <p className="font-poppins font-normal text-[16px] text-dimWhite leading-[24px]">
          Copyright &copy; {date} HooBank. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => {
            return <img src={social.icon} alt={social.id} key={social.id} className={`w-[21px] h-[21px] ${index !== social.length - 1 ? "mr-6" : "mr-0"}`} />
          }) }
        </div>
      </div>
    </footer>
  );
};
export default Footer;
