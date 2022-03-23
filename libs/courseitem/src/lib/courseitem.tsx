import Button from './button/button';
import styles from './courseitem.module.css';

/* eslint-disable-next-line */
export interface CourseitemProps {}

export function Courseitem(props: CourseitemProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Courseitem! one </h1>
      <Button/>
    </div>
  );
}

export default Courseitem;
