import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../store/auth";
import { motion } from "framer-motion";

const Service = () => {
  const { service } = useAuth();
  const ref = useRef(null);

  return (
    <>
      <section className="section-services">
        <div className="service-container">
          <h2 className="service-head">Services</h2>
        </div>

        <div className="service_two_container" ref={ref}>
          {service.map((element, index) => {
            const { provider, price, description, service } = element;
            return (
              <>
                <motion.div
                  drag={true}
                  whileDrag={{ scale: 1.2 }}
                  dragConstraints={ref}
                  dragElastic={1}
                  dragMomentum={true}
                  className="card"
                  key={index}
                >
                  <div className="card-img">
                    <img
                      src="https://images7.alphacoders.com/133/1337527.png"
                      alt=""
                      width="500"
                      height="500"
                      className="main_imgService"
                    />
                  </div>
                  <div className="card-detials">
                    <div className="card-details-info">
                      <p>{provider}</p>
                      <p>{price}</p>
                    </div>
                    <div className="card-details-info-horizon">
                      <h2 className="head23">{service}</h2>
                      <p>{description}</p>
                    </div>
                  </div>
                </motion.div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Service;
