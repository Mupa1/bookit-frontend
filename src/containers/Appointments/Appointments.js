import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Appointment from '../../components/Appointment/Appointment';
import Sidebar from '../Sidebar/Sidebar';
import { fetchAppointments } from '../../api';

const Appointments = () => {
  const dispatch = useDispatch();
  const appointments = useSelector(state => state.appointments.appointments);

  useEffect(() => {
    dispatch(fetchAppointments());
  }, []);

  return (
    <>
      <Sidebar />
      {appointments.length ? (
        <section className="content">
          <h2 className="font-weight-bold text-center pb-5">APPOINTMENTS</h2>
          <div className="table-responsive">
            <table className="container table table-striped">
              <thead>
                <tr>
                  <th>Doctor&apos;s Name</th>
                  <th>Username</th>
                  <th>Date</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map(appointment => (
                  <Appointment
                    key={appointment.id}
                    appointment={appointment}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : (
        <section className="content text-center">
          <h4 className="py-5">No appointments yet!</h4>
        </section>
      )}
    </>
  );
};

export default Appointments;
