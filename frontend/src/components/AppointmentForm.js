import '../styles/AppointmentForm.css';
import Button from 'react-bootstrap/Button';

const AppointmentForm = () => {

  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        times.push(<option key={time} value={time}>{time}</option>);
      }
    }
    return times;
  };

  return (
    <div className='appoint'>
      <form >
        <h2>Book an Appointment</h2>
        <label>Name</label>
        <input type='text' placeholder="John Doe" />

        <label>Email</label>
        <input type='email' placeholder="johndoe@example.com" />

        <label>Phone Number</label>
        <input type='tel' placeholder="" />

        <label>Staff Member</label>
        <select>
          <option value='' disabled hidden>Select Staff Member</option>
          <option value=''>Staff Member 1</option>
          <option value=''>Staff Member 2</option>
          <option value=''>Staff Member 3</option>
        </select>

        <label>Service Type</label>
        <select>
          <option value='' disabled hidden>Select Service Type</option>
          <option value=''>Service Type 1</option>
          <option value=''>Service Type 2</option>
          <option value=''>Service Type 3</option>
        </select>

        <label>Date</label>
        <input type="date" />

        <label>Time</label>
        <select id="time">
          {generateTimeOptions()}
        </select>

        <button>Book</button>
      </form>
    </div>
  );
}

export default AppointmentForm;