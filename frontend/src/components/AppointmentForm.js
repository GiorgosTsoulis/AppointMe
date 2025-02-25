import '../styles/AppointmentForm.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosConfig';

const AppointmentForm = () => {
  const navigate = useNavigate();
  const { uuid } = useParams();
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const [userId, setUserId] = useState('');

  const [formData, setFormData] = useState({
    customerId: '',
    storeId: uuid,
    staff: '',
    service: '',
    date: '',
    time: '',
    phoneNumber: ''
  });

  const [staffMembers, setStaffMembers] = useState([]);
  const [serviceTypes, setServiceTypes] = useState([]);

  useEffect(() => {
    const fetchStaffMembers = async () => {
      try {
        const response = await axiosInstance.get(`/store/${uuid}/staff`);
        setStaffMembers(response.data);
      } catch (error) {
        console.error('Error fetching staff members:', error);
      }
    }
    fetchStaffMembers();
  }, [uuid]);

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
  }, [uuid]);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const response = await axiosInstance.get(`/users/username/${username}`);
        setUserId(response.data.userId);
      } catch (error) {
        console.error('Error fetching user ID:', error);
      }
    }
    fetchUserId();
  }, [username]);


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

    // Find the staff ID and service ID based on the selected values
    const selectedStaff = staffMembers.find(staff => staff.staffId === formData.staff);
    const selectedService = serviceTypes.find(service => service.serviceId === formData.service);

    const appointmentData = {
      customerId: userId,
      storeId: formData.storeId,
      staffId: selectedStaff ? selectedStaff.staffId : '',
      serviceId: selectedService ? selectedService.serviceId : '',
      appointmentDate: formData.date,
      appointmentTime: formData.time,
      phoneNumber: formData.phoneNumber // Ensure the field name matches the backend expectation
    };

    console.log('From Data:', formData)
    console.log('Appointment Data:', appointmentData);

    // Check if all required fields are filled
    if (!appointmentData.customerId || !appointmentData.storeId || !appointmentData.staffId || !appointmentData.serviceId || !appointmentData.appointmentDate || !appointmentData.appointmentTime || !appointmentData.phoneNumber) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      const response = await axiosInstance.post(`/store/${uuid}/bookappointment`, appointmentData);
      if (response.status === 200) {
        alert('Appointment booked successfully!');
        navigate('/');
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
        <input type='text' name='name' value={username} onChange={handleChange} placeholder="John Doe" />

        <label>Phone Number</label>
        <input type='text' name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" />

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
            <option key={index} value={service.serviceId}>{service.name} {service.price}$</option>
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