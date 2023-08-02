import { YMaps, Map } from "@pbe/react-yandex-maps";
import style from '../css/Contact.module.css'
function Contact() {
  return (
    <YMaps>
      <div className={style.map}>
        <Map
        height="450px" 
        width="660px"
 defaultState={{ center: [43.324675, 45.692376], zoom: 20 }} />
      </div>
    </YMaps>
  );
}

export default Contact;
