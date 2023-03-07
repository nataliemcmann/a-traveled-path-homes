import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

function DayPicker() {

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }
  
  return <DayPicker 
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}></DayPicker>;
}

export default DayPicker;