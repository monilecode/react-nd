import React from "react";
import styles from "./ServiceSection.module.scss";
import { ServiceCard } from "./ServiceCard";
import { serviceData } from "../../data/Data";

export const ServiceSection = () => {
  return (
    <section className={styles.serviceSection}>
      <h3>Popular Businesses</h3>

      <div className={styles.serviceContent}>
        {serviceData.map((item) => (
          <ServiceCard
            className={styles.card}
            key={item.id}
            img={item.img}
            name={item.name}
            address={item.address}
          />
        ))}
      </div>
    </section>
  );
};
