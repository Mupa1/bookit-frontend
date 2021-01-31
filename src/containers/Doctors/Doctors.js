import 'react-alice-carousel/lib/alice-carousel.css';
import React, { useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Doctor from '../../components/Doctor/Doctor';
import Sidebar from '../Sidebar/Sidebar';
import './Doctors.css';
import { fetchAllDoctors } from '../../api';

const Doctors = () => {
  const dispatch = useDispatch();
  const doctors = useSelector(state => state.doctors.doctors);

  useEffect(() => {
    dispatch(fetchAllDoctors());
  }, []);

  const resp = {
    0: { items: 1 },
    750: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <>
      <Sidebar />
      {doctors.length ? (
        <section className="content">
          <div className="text-center docs-title">
            <h2 className="font-weight-bold">OUR DOCTORS</h2>
            <p>Please select a doctor to book an appointment</p>
            <p>...........................</p>
          </div>
          <div>
            <AliceCarousel
              responsive={resp}
              autoPlayInterval={3200}
              autoPlayDirection="ltr"
              autoPlay
              fadeOutAnimation
              mouseTrackingEnabled
              disableAutoPlayOnAction
              dotsDisabled
              infinite
            >
              {doctors.map(doctor => (
                <Link to={`/doctors/${doctor.id}`} key={doctor.id}>
                  <div>
                    <Doctor doctor={doctor} />
                  </div>
                </Link>
              ))}
            </AliceCarousel>
          </div>
        </section>
      ) : (
        <section className="content text-center">
          <h4>Loading doctors...</h4>
        </section>
      )}
    </>
  );
};

export default Doctors;
