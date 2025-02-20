import { PencilIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import styles from './home.module.css'

export default function HCLogo() {
  return (
    <div
      className={styles.center}
    >
      <div
      className={styles.logo}
      >
        <ChevronLeftIcon/>
        <PencilIcon/>
        <ChevronRightIcon/>
      </div>
      <p>Haven</p>
    </div>
  );
}
