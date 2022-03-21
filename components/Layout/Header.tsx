import style from './layout.module.scss'
const Header = () => {
  return (
    <div className={style.head}>
      <h1>React</h1>
      <div className='location'>Александровск-Са...</div>
      <div>
        <input type='text' placeholder='Поиск бренда, товара, категории...' />
        <button>searc</button>
      </div>
      <div>basket</div>
      <div>ava</div>
    </div>
  )
}

export default Header
