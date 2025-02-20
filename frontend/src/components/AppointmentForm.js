import '../styles/AppointmentForm.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axiosInstance from '../axiosConfig';

const AppointmentForm = () => {
  const { uuid } = useParams();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    staffId: '',
    serviceId: '',
    date: '',
    time: ''
  });

  const [staffMembers, setStaffMembers] = useState([]);
  const [serviceTypes, setServiceTypes] = useState([]);
  const [serviceId, setServiceId] = useState('');

  useEffect(() => {
    const fetchStaffMembers = async () => {
      try {
        const response = await axiosInstance.get(`/store/${uuid}/staff`);
        console.log(response.data);
        setStaffMembers(response.data);
      } catch (error) {
        console.error('Error fetching staff members:', error);
      }
    }
    fetchStaffMembers();
  }, []);

  useEffect(() => {
    const fetchServiceTypes = async () => {
      try {
        const response = await axiosInstance.get(`/store/${uuid}/services`);
        setServiceTypes(response.data);
      } catch (error) {
        console.error('Error fetching service types:', error);
      }
    }
    fetchServiceTypes();
  }, []);


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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Form Data:', formData);
      const response = await axiosInstance.post(`/store/${uuid}/bookappointment`, formData);
      if (response.status === 200) {
        alert('Appointment booked successfully!');
      } else {
        alert('Failed to book appointment.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while booking the appointment.');
    }
  };

  return (
    <div className='appoint'>
      <form onSubmit={handleSubmit}>
        <h2>Book an Appointment</h2>
        <label>Name</label>
        <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder="John Doe" />

        <label>Email</label>
        <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder="johndoe@example.com" />

        <label>Phone Number</label>
        <input type='phone' name='phone' value={formData.phone} onChange={handleChange} placeholder="" />

        <label>Staff Member</label>
        <select name='staff' value={formData.staff} onChange={handleChange}>
          <option value='' disabled hidden>Select Staff Member</option>
          {staffMembers.map((staff, index) => (
            <option key={index} value={staff.staffId}>{staff.user.username}</option>
          ))}
        </select>

        <label>Service Type</label>
        <select name='service' value={formData.service} onChange={handleChange}>
          <option value='' disabled hidden>Select Service Type</option>
          {serviceTypes.map((service, index) => (
            <option key={index} value={service.uuid}>{service.name} {service.price}$</option>
          ))}
        </select>

        <label>Date</label>
        <input type="date" name='date' value={formData.date} onChange={handleChange} />

        <label>Time</label>
        <select id="time" name='time' value={formData.time} onChange={handleChange}>
          {generateTimeOptions()}
        </select>

        <button type='submit'>Book Appointment</button>
      </form>
    </div>
  );
}

export default AppointmentForm;