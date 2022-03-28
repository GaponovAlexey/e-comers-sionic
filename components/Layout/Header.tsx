import style from './layout.module.scss'
const Header = () => {
  return (
    <div className={style.head}>
      <h1>React</h1>
      <p>Александровск-Са...</p>
      <div className={style.pic}>
        <input type='text' placeholder='Поиск бренда, товара, категории...' />
        <button></button>
      </div>
      <div className={style.basket}></div>
      <div className={style.ava}></div>
    </div>
  )
}

export default Header
