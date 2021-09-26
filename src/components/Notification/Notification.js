import s from './Notification.module.css';

const Notification = ({ message }) => <p className={s.message}>{message}</p>;

export default Notification;
