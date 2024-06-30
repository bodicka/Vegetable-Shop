<h1 align="center">Vegetable-Shop :eggplant::tomato:</h1>
<p>Vegetable-Shop - это веб-приложение, которое предоставляет возможность покупки свежих и качественных овощей прямо из дома. Пользователи могут просматривать ассортимент овощей, добавлять их в корзину покупок.</p>
<div align="center">
  <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2w2ZjhsYXd3ZXVsaDVia2duNjFocXN0cGxlem04ZWV2bXh3ZWdsdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TRN3IfjWkPGebBwVgP/giphy.gif" alt="gif"/>
</div>
<h3 align="left">🛠 Используемые Технологии:</h3>
<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <img width="12" />
  <img src="https://icon-icons.com/icons2/2415/PNG/512/redux_original_logo_icon_146365.png" height="40" alt="redux-logo"  />
  <img width="12" />
  <img src="https://brandeps.com/logo-download/R/React-Router-logo-vector-01.svg" alt="router-logo" height="40" />
  <img width="12" />
  <img src="https://img.icons8.com/?size=100&id=g9mmSxx3SwAI&format=png&color=000000" height="40" />
  <img width="12" />
</div>
<br>
<div align="left">
      <h4 align="left">1.React-Router-Dom-<img align="center" gap="10" src="https://brandeps.com/logo-download/R/React-Router-logo-vector-01.svg" alt="router-logo" height="40" /><img width="12" /></h4>
      <hr>
      <p>
        React Router - это библиотека для создания навигации в React приложениях. Она позволяет определять маршруты и компоненты, которые должны отображаться в зависимости от текущего URL.В этом проекте используется навигация для элементов в NavBar таких как             Home, Shop, и самой корзины.
      </p>
</div>

```js
     <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
```
<div align="center">
   <img src="https://media0.giphy.com/media/BUTK7SKN8MdVsfeB5L/giphy.webp" alt="gif"/>
</div>
<hr>
<br>
<div align="left">
      <h4 align="left">2.Redux-Toolkit-<img align="center" gap="10" src="https://icon-icons.com/icons2/2415/PNG/512/redux_original_logo_icon_146365.png" height="25" /><img width="12" /></h4>
      <hr>
      <p>
        Redux-Toolkit - библиотека для управления состоянием приложения в React, обеспечивает централизованное хранение и управление данными.В моём приложении корзина реализована с помощью Redux и Redux-Toolkit.
      </p>
      <p>Store.js - это файл который отвечает за настройку и экспорт Redux-хранилища.</p>
      <ul>
        <li>Он импортирует функцию configureStore из пакета @reduxjs/toolkit, которая является утилитой для создания Redux-хранилищ с минимальной конфигурацией.</li>
        <li>Он импортирует cartReduser из файла ./CartSlice, который является Redux-слайсом, который содержит состояние и редьюсеры для управления корзиной в моём приложении.</li>
        <li>Он определяет объект rootReduser, который содержит свойство cart, установленное в cartReduser, импортированный из ./CartSlice.</li>
        <li>Он использует функцию configureStore, чтобы создать Redux-хранилище, передавая rootReduser в качестве опции reducer.</li>
        <li>Он экспортирует созданное хранилище в качестве экспорта по умолчанию файла Store.js.</li>
      </ul>
     <p align="left">Таким образом, Store.js настраивает Redux-хранилище с одним слоем (cartReduser), который управляет состоянием корзины в вашем приложении.</p>
</div>

```js
import { configureStore } from "@reduxjs/toolkit";
import cartReduser from "./CartSlice"

const rootReduser = {
  cart: cartReduser
};

const store = configureStore({
  reducer: rootReduser
})

export default store;
```
<div align="left">
  <p>Файл CartSlice.js являеться Redux-слайсом для управления корзиной покупок в моём приложении</p>
  <ul>
    <li>Файл импортирует функцию createSlice из пакета @reduxjs/toolkit. Эта функция используется для определения слайса Redux-хранилища.</li>
    <li>Создается объект cartSlice с помощью функции createSlice. У него есть начальное состояние, включающее пустой массив data, свойства totalAmounts и totalItems, а также свойство deliveryCharge.</li>
    <li>Свойство reducers объекта cartSlice определяет различные действия, которые могут быть выполнены в корзине покупок. Это действия включают addToCart, updateQuantity и removeItem.</li>
    <li>Редуктор addToCart отвечает за добавление товаров в корзину. Он проверяет, существует ли товар уже в корзине. Если да, он обновляет количество и общую цену товара. Если нет, он добавляет товар в корзину.</li>
    <li>Pедюсер  updateQuantity отвечает за обновление количества товара в корзине. Он находит товар по его ID и обновляет количество и общую цену.</li>
    <li>Pедюсер  removeItem отвечает за удаление товара из корзины. Он фильтрует товар с указанным ID из массива data.</li>
    <li>Редюсер a getCartTotal отвечает за расчет общей суммы и общего количества товаров в корзине. Он проходит по массиву data и рассчитывает общую сумму и общее количество товаров.</li>
    <li>Объект cartSlice экспортируется вместе с действиями addToCart, removeItem, getCartTotal и updateQuantity.</li>
    <li>Определяется функция storeInLocak, которая сохраняет данные корзины в локальном хранилище браузера.</li>
    <li>Экспортируется cartSlice.reducer как экспорт по умолчанию файла, что делает его редьюсером для слайса корзины.</li>
  </ul>
</div>

```js
import { createSlice } from "@reduxjs/toolkit";

const storeInLocak = (data) => {
  localStorage.setItem("cart", JSON.stringify(data))
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    totalItems: 0,//Всего Элементов 
    totalAmounts: 0,//Общее количество
    deliveryCharge: 10,//Стоимость доставки
  },
  reducers: {
    addToCart(state, action) {  //Добавить карточку.
      const existingItems = state.data.find(
        (items) => items.id === action.payload.id
      );
      if (existingItems) {
        const tempCart = state.data.map((item) => {
          if(item.id === action.payload.id) {
            let newQuty = item.quantity + action.payload.quantity;
            let newTotalPrice = newQuty * item.price;
            return{
              ...item,
              quantity: newQuty,
              totalPrice: newTotalPrice
            }
          } else {
            return item
          }
        })
        state.data = tempCart
        storeInLocak(state.data)
      } else {
        state.data.push(action.payload);
        storeInLocak(state.data);
      }
    },
    updateQuantity: (state, action) => { //Количество обновлений.
      const {id, quantity} = action.payload;
      const itemToUpdata = state.data.find((item) => item.id === id)

      if(itemToUpdata) {
        const validQuntity = Math.max(quantity || 1,1)
        itemToUpdata.quantity = validQuntity;
        itemToUpdata.totalPrice = itemToUpdata.price * quantity;
      }
    },
    removeItem: (state, action) => { //Удалить элемент
      const tempCart = state.data.filter((item) => item.id !== action.payload.id);
      state.data = tempCart;
      storeInLocak(state.data);
    },
    getCartTotal: (state,action) => { //Получить карту и итог
      state.totalAmounts = state.data.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.totalPrice)
      }, 0);
      state.totalItems = state.data.length;
    }
  }
})

export const { addToCart, removeItem, getCartTotal, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
```
<div align="center">
  <img src="https://media2.giphy.com/media/vAMDicW9CsV2l9g8Mm/giphy.webp" alt="gifyse" />
</div>
<div align="left">
  <p>В компоненте Produx.jsx используется Redux для управления состоянием корзины.</p>
  <ul>
    <li>useDispatch - это хук, который предоставляется пакетом react-redux. Он позволяет получить доступ к функции dispatch, которая используется для отправки действий (action) в Redux.
    useSelector - это другой хук, который</li>
    <li>useSelector - это другой хук, который предоставляется пакетом react-redux. Он позволяет получить доступ к состоянию Redux. В данном случае, он используется для получения общего количества элементов и общей суммы в корзине.</li>
    <li>dispatch(addToCart(tempProduct)) - это вызов функции addToCart (CartSlice.js:16:5-40:6), которая является частью cartSlice (reducer). Эта функция добавляет товар в корзину.</li>
    <li>dispatch(getCartTotal()) - это вызов функции getCartTotal (CartSlice.js:56:5-61:6), которая также является частью cartSlice. Эта функция вычисляет общую сумму и количество товаров в корзине.</li>
    <li>dispatch(getCartTotal()) - это вызов функции getCartTotal (CartSlice.js:56:5-61:6), которая также является частью cartSlice. Эта функция вычисляет общую сумму и количество товаров в корзине.</li>
    <li>navigate("/cart") - это вызов функции navigate, которая используется для перехода на страницу корзины.</li>
  </ul>
  <p>В целом, Redux используется для управления состоянием корзины, включая добавление товаров, получение общей суммы и количества товаров, и переход на страницу корзины.</p>
</div>

```js
import { useState } from "react";
import { products } from "../data/Data";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/CartSlice";

export default function Produx() {
  const dispatch = useDispatch();

  const [qty, setQty] = useState(1);

  const navigate = useNavigate();

  const [menuItems, setMenuItems] = useState(products);

  const fillteritem = (category) => {
    const newItem = products.filter((item) => item.category === category);
    setMenuItems(newItem);

    if (category === "all") {
      setMenuItems(products);
      return;
    }
  };

  const handleAddToCart = (product) => {
    let totalPrice = qty * product.price;
    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice,
    };
    dispatch(addToCart(tempProduct));
    navigate("/cart");
  };
```

```js
    <button onClick={() => handleAddToCart(el)} className="btn border border-secondary rounded-pill px-3 text-primary">
      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
        Add to cart
    </button>
```

<div align="left">
  <p>В компоненте Cart.jsx используется Redux для управления состоянием корзины.</p>
  <ul>
    <li>useDispatch и useSelector - это хуки, которые предоставляются пакетом react-redux. useDispatch позволяет получить доступ к функции dispatch, которая используется для отправки действий (action) в Redux. useSelector позволяет получить доступ к состоянию       Redux.</li>
    <li>dispatch(getCartTotal()) - это вызов функции getCartTotal (CartSlice.js:56:5-61:6), которая является частью cartSlice (reducer). Эта функция вычисляет общую сумму и количество товаров в корзине.</li>
    <li>dispatch(removeItem({ id: itemId })) - это вызов функции removeItem (CartSlice.js:51:5-55:6), которая также является частью cartSlice. Эта функция удаляет товар из корзины.</li>
    <li>dispatch(updateQuantity({ id: cartProductId, quantity: newQty })) - это вызов функции updateQuantity (CartSlice.js:41:5-50:6), которая также является частью cartSlice. Эта функция обновляет количество товара в корзине.</li>
    <li>useSelector((state) => state.cart) - это вызов функции useSelector, которая позволяет получить доступ к состоянию Redux. В данном случае, она получает состояние cart.</li>
  </ul>
  <p>В целом, Redux используется для управления состоянием корзины, включая добавление товаров, удаление товаров, обновление количества товаров и вычисление общей суммы и количества товаров.</p>
</div>

```js
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal, removeItem, updateQuantity } from "../../redux/CartSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();

  const increaseQty = (cartProductId, currentQty) => {
    const newQty = currentQty + 1;
    dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
  };

  const decreaseQty = (cartProductId, currentQty) => {
    const newQty = Math.max(currentQty - 1, 1);
    dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
  };

  const { data: cartProducts, totalAmounts, deliveryCharge } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [useSelector((state) => state.cart)]);

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem({ id: itemId }));
  };

```
[![Watch the video](https://i.imgur.com/vKb2F1B.png)](https://www.kapwing.com/videos/668137155c9f5eb8bc4c5427)










