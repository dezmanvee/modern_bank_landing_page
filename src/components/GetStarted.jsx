import styles from "../style"
import { arrowUp } from "../assets"


const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} h-[140px] w-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col w-[100%] h-[100%] bg-primary rounded-full md:hover:rounded-none md:hover:-rotate-45 transition-all`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient">Get</span>
          </p>
            <img src={arrowUp} className="w-[23px] h-[23px] object-contain" />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient">Started</span>
          </p>
      </div>
    </div>

  )
}
export default GetStarted