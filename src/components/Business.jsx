import { features } from "../constants";
import styles, {layout} from "../style";
import Button from "./Button";

const FeatureCard =({index, icon, title, content})=> {
  return <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}>
      <img src={icon} alt="icon" className="W-[50%] h-[50%] object-contain" />
    </div>

    <div className="flex-1 flex flex-col ml-3">
      <h4 className="text-poppins font-semibold text-[18px] text-white leading-[23px] mb-1">{title}</h4>
      <p className="text-poppins font-normal text-[16px] text-dimWhite leading-[24px]">{content}</p>
    </div>
  </div>
}

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business,<br className="sm:block hidden"/> we’ll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
      <Button style="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index)=> {
          return <FeatureCard {...feature} key={feature.id} index={index}/>
        })}
      </div>
    </section>
  )
}
export default Business