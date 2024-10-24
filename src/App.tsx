import Modal from "./components/modal/Modal";
import Toast from "./components/toast/Toast";
import RouteConfig from "./Route";


export default function App() {
  return (
    <>
      <RouteConfig />
      <Toast />
      <Modal />
    </>
  )
}
