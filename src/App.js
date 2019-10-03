import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Axios from "axios";
import { Media } from "./Media";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";

const apiuri = 'https://api.nasa.gov/planetary/apod?api_key=';
const apikey = 'atTa4ZcvFAWk5OejsYxGG7fnPhdzwOIBEfxe7qhj';

function App() {
  const [reqDate, setRequestDate] = useState(new Date());
  const [apodData, setAPODdata] = useState([]);

  useEffect(() => {
    // console.log('run effect');

    async function fetchAPODmedia(date) { // jshint ignore:line
      // Fetch data
      await Axios.get(`${apiuri}${apikey}&date=${formatDate(date)}`)
        .then((d) => {
          console.log('d.data: ', d.data);
          setAPODdata(d.data);
        })
        .catch(e => {
          console.log(e);
        });
    }

    fetchAPODmedia(reqDate);
  }, [reqDate]);

  // console.log('apodData: ', apodData);

  /* eslint-disable jsx-a11y/no-access-key */
  return (
    /* jshint ignore:start */
    <div className="App centerWidth">
      <div className='hideButton glowText' onClick={() => toggleHidden()} title="Hide text" accessKey="h">x</div>
      <div>
        <h1 className='title glowText toggle'>NASA Astronomy Picture of the Day</h1>
        <button className="dateArrow glowText toggle" onClick={() => setRequestDate(new Date(reqDate.setDate(reqDate.getDate() - 1)))}>&lt;</button>
        {/* https://reactdatepicker.com */}
        <DatePicker className="datePicker glowText toggle" selected={reqDate} onChange={date => setRequestDate(date)} todayButton="Today" maxDate={new Date()} showMonthDropdown showYearDropdown dropdownMode="select" dateFormat="yyyy/MM/dd" />
        <button className="dateArrow glowText toggle" onClick={() => setRequestDate(new Date(reqDate.setDate(reqDate.getDate() + 1)))}>&gt;</button>
        <br />
        <Media data={apodData} />
        <div className="footer centerWidth toggle">
          <h2 className="glowText">{apodData.title}</h2>
          <h4 className="glowText">{apodData.explanation}</h4>
          {
            apodData.copyright && <h5 className="glowText">&copy; {apodData.copyright}</h5>
          }
        </div>
      </div>
    </div>
    /* jshint ignore:end */
  );
}

export default App;


//#region Helper Functions
function toggleHidden() {
  //Toggle hide class on target elements
  let t = document.getElementsByClassName('toggle');
  // console.log('t.classList before: ', t.classList);
  let l = t.length;
  for (let i = 0; i < l; i++) {
    // console.log('t[i].classList before: ', t[i].classList);
    t[i].classList.toggle('hide');
    // console.log('t[i].classList after: ', t[i].classList);
  }
  // console.log('t.classList after: ', t.classList);

  //Update hide control
  let x = document.getElementsByClassName('hideButton')[0];
  let title = x.getAttribute('title');
  let text = x.textContent;
  // console.log('title before: ', title);
  if (t[0].classList.contains('hide')) {
    title = "Show text";
    text = "+";
  } else {
    title = "Hide text";
    text = "x";
  }
  // console.log('title after: ', title);
  x.setAttribute('title', title);
  x.textContent = text;
}
function formatDate(date, separator = '-') {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year, month, day].join(separator);
}
//#endregion Helper Functions
