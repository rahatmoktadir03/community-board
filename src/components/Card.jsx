import styles from "./Card.module.css";

const Card = ({ title, date, description, link, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p>
          <strong>Date:</strong> {date}
        </p>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;
