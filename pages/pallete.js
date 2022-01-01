import styles from '../styles/pallete.module.css'
const pallete = () => {
    return (
        <div>
            <div>
                <h4 className={styles.h4}>
                    basic insticts
                </h4>
                <ul className={styles.swatches}>
                    <li className={styles.amb}>
                        <span>
                            ambrosia
                            <br />
                            #FCDBBA
                        </span>
                    </li>
                    <li className={styles.ban}>
                        <span>
                            banana
                            <br />
                            #FEE694
                        </span>
                    </li>
                    <li className={styles.blu}>
                        <span>
                            bluetack
                            <br />
                            #82BFE0
                        </span>
                    </li>
                    <li className={styles.bud}>
                        <span>
                            bud
                            <br />
                            #94C15C
                        </span>
                    </li>
                    <li className={styles.but}>
                        <span>
                            butter
                            <br />
                            #F2C94C
                        </span>
                    </li>
                    <li className={styles.cam}>
                        <span>
                            camo
                            <br />
                            #AAA843
                        </span>
                    </li>
                    <li className={styles.cap}>
                        <span>
                            cappuccino
                            <br />
                            #C9B092
                        </span>
                    </li>
                    <li className={styles.cha}>
                        <span>
                            champagne
                            <br />
                            #FCEBD5
                        </span>
                    </li>

                </ul>

            </div>
            {/* basic insticts end */}

            <div>
                <h4 className={styles.h4}>
                    Emerald
                </h4>
                <ul className={styles.swatches}>
                    <li className={styles.amb}>
                        <span>
                            Frozen
                            <br />
                            #403B4A
                        </span>
                    </li>
                </ul>


            </div>
        </div>
    )
}

export default pallete
