import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Appointment from '../Appointment/Appointment';
import Sidebar from '../Sidebar/Sidebar';
import { getAppointments } from '../../Redux/actions/index';

const Appointments = ({
  appointment, getAppointments, user,
}) => {
  useEffect(async () => {
    await fetch('http://localhost:3001/api/v1/appointments', {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'AUTH-TOKEN': localStorage.getItem('token'),
      },
    }).then(res => res.json())
      .then(data => getAppointments(data.data.appointment))
      .catch(error => (error));
  }, []);

  if (Object.keys(user).length === 0) { return <Redirect to="/" />; }

  return (
    <>
      <Sidebar />
      {appointment ? (
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
                {appointment.map(appoint => (
                  <Appointment
                    key={appoint.id}
                    appointment={appoint}
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

Appointments.propTypes = {
  appointment: PropTypes.arrayOf(PropTypes.object).isRequired,
  getAppointments: PropTypes.func.isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  appointment: state.appointment,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  getAppointments: appointment => {
    dispatch(getAppointments(appointment));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
