import ReactPaginate from 'react-paginate';
import classnames from 'classnames';
import styles from '@/components/Pagination/Pagination.module.css';
import { ReactComponent as ArrowLeftIcon } from '@/assets/svg/arrowLeft.svg';
import { ReactComponent as ArrowRightIcon } from '@/assets/svg/arrowRight.svg';

interface PaginationProps {
    className?: string;
    forcePage: number;
    pageCount: number;
    onPageChange: (selectedItem: { selected: number }) => void;
}
const Pagination = ({
    className,
    forcePage,
    pageCount,
    onPageChange
}: PaginationProps) => (
    <ReactPaginate
        breakLabel="..."
        forcePage={forcePage}
        containerClassName={classnames(styles.pagination, className)}
        disabledClassName={styles.disabled}
        activeLinkClassName={styles.isActive}
        breakLinkClassName={styles.page}
        pageLinkClassName={styles.page}
        previousLinkClassName={styles.previous}
        nextLinkClassName={styles.next}
        nextLabel={
            <>
                Next
                <ArrowRightIcon className={styles.icon} />
            </>
        }
        pageCount={pageCount}
        onPageChange={onPageChange}
        pageRangeDisplayed={5}
        previousLabel={
            <>
                <ArrowLeftIcon className={styles.icon} />
                Previous
            </>
        }
        renderOnZeroPageCount={() => null}
    />
);

export default Pagination;
