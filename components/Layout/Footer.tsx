import Image from 'next/image'
import style from './layout.module.scss'

const Footer = () => {
  return (
    <div className={style.footer}>
      <h1>React</h1>
      <div className={style.social}>
        <div>
          <p>Присоединяйтесь к нам</p>
          <span>
            <Image src='/svg/Facebook.svg' width='28px' height='28px' alt='f' />
          </span>
          <span>
            <Image src='/svg/Vk.svg' width='28px' height='28px' alt='VK' />
          </span>
          <span>
            <Image src='/svg/Inst.svg' width='28px' height='28px' alt='Inst' />
          </span>
        </div>
        <div>
          <p>Устанавливайте приложение</p>
          <span>
            <Image
              src='/svg/Google.svg'
              width='104px'
              height='32px'
              alt='Google'
            />
          </span>
          <span>
            <Image
              src='/svg/AppStore.svg'
              width='104px'
              height='32px'
              alt='AppStore'
            />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
