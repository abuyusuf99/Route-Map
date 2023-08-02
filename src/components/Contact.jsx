import { YMaps, Map } from "@pbe/react-yandex-maps";
import style from '../css/Contact.module.css'
function Contact() {
  return (
    <YMaps>
      <div className={style.map}>
        <Map
        height="450px" 
        width="660px"
 defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
      </div>
    </YMaps>
  );
}

export default Contact;
