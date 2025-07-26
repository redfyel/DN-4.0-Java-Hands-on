import styles from './CohortDetails.module.css'

function CohortDetails({cohort}) {

    const headerStyle = cohort.status === "Ongoing" ? styles.ongoingHeader : styles.nonOngoingHeader
    return (
        <dl className={styles.box}>
            <h3 className={headerStyle}>{cohort.ID}</h3>
            <dt>Started on </dt>
            <dd>{cohort.startDate}</dd>

            <dt>Current Status</dt>
            <dd>{cohort.status}</dd>

            <dt>Coach</dt>
            <dd>{cohort.coach}</dd>
            
            <dt>Trainer</dt>
            <dd>{cohort.trainer}</dd>
        </dl>
    )
}

export default CohortDetails;