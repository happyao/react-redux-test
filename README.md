shopping-cart

1. It's a shopping cart web site. I use the redux to manage state and use bootstrap to build the responsive layout both on mobile and PC. I also did unit test for reducer and shopCartList component.
2. please run following commands to start the app.

  npm install  
  npm start

3. I divided the component into container and presentational component. The Footer and ShopCart are to source the data and deal with state. As for SubFooter, ShopCartList, ShopCartItem, Card are for rendering the passed state into views. 
It would be better understand the component function and can also let designer to change their variations without touching the app’s logic. Meanwhile, the presentational component can be further reused and don't have to duplicate the layout in several container components.

4. If I have more time, I will limit the type of input in form, improve the input form GUI and do unit test for some actions(like remove item..).
