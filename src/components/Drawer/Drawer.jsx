function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex mb-30 justify-between">
          Корзина
          <img onClick={onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" />
        </h2>

        {
          items.length
          ?
          <>
            <div className="items">
            {
              items.map((obj) => (
                <div className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${obj.img})` }}
                    className="cartItemImg">
                  </div>
                  <div className="mr-20 flex">
                    <p className='mb-5'>{obj.name}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                </div>
              ))
            }
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>22 498 руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
                <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow" /></button>
              </ul>
            </div>
          </>
          : 
          <div className="cartEmpty d-flex align-center justify-content-center flex-column flex">
          <img className="mb-20" width="120px" height="120px" src="/img/empty-cart.jpg" alt="Empty Cart" />
          <h2>Корзина пустая</h2>
          <p className="opacity-6">
            Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ
          </p>
          <button onClick={onClose} className="greenButton"><img src="/img/arrow.svg" alt="Arrow" />Вернуться назад</button>
        </div>
        }

        



        
                
      </div>
    </div>
  );
}

export default Drawer;