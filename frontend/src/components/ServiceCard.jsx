import Icon from '../utils/iconMap';
import './ServiceCard.css';

export default function ServiceCard({ icon, title, description, benefits }) {
  return (
    <article className="service-card">
      <div className="service-card__icon">
        <Icon name={icon} size={32} strokeWidth={1.5} />
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>
      {benefits && benefits.length > 0 && (
        <ul className="service-card__list">
          {benefits.map((benefit, index) => (
            <li key={index} className="service-card__list-item">
              <span className="service-card__check" aria-hidden="true">✓</span>
              {benefit}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}