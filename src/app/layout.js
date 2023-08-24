// css
import './globals.css';
import Nav from './components/Nav'
import CartMobileIcon from './components/CartMobileIcon';
import CartProvider from './context/CartContext';
import CartMobile from './components/CartMobile';
import CartDesktop from './components/CartDesktop';
import Footer from  './components/Footer';


export default function RootLayout({ children }) {
  return (
    <CartProvider>
      <html lang='en'>
      <body className={``}>
      <Nav />
      <CartMobileIcon />
      <CartMobile />
      {children}
      <CartDesktop />
      <Footer />
      </body>
      </html>
    </CartProvider>
  
    
  );
}
