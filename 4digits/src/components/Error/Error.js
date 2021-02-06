import React from 'react';

import styles from './Error.module.css'

const Error = (props) => {
  return (
    <div className={styles.Error}>
      <h4>{props.message + ' Please try again.'}</h4>
    </div>
  )
}

export default Error;