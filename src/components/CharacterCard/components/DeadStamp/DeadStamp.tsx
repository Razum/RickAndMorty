import classnames from 'classnames';
import styles from '@/components/CharacterCard/components/DeadStamp/DeadStamp.module.css';

interface DeadStampProps {
    className?: string;
}

const DeadStamp = ({ className }: DeadStampProps) => {
    return <div className={classnames(styles.stamp, className)}>Dead</div>;
};

export default DeadStamp;
