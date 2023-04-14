import './globals.css'
import {Nunito} from "next/font/google"
import Navbar from './components/Navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import Modal from './components/Modals/Modal';
import RegisterModal from './components/Modals/RegisterModal';

const font = Nunito({
  subsets : ["latin"],
});

export const metadata = {
  title: 'Airbnb Clone',
  description: 'this is full stack Airbnb clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* wrap the navbar under the clientOnly component */}
<ClientOnly>
  <Navbar/>
  {/* <Modal isopen title='Welcome to Airbnb !'/> */}
  <RegisterModal/>
</ClientOnly>
        {children}
        </body>
    </html>
  )
}
