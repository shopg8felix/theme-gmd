import React from 'react';
import Placeholder from '@shopgate/pwa-common/components/Placeholder';
import styles from '../style';

/**
 * @return {JSX}
 */
const ProductPlaceholder = () => (
  <div className={styles.container}>
    <Placeholder top={0} left={0} width="100%" height="calc(50vw - 4px)" />
    <div className={styles.details}>
      <div style={{ marginBottom: 4 }}>
        <Placeholder height={16} key="0" width="100%" />
        <Placeholder height={16} key="1" width="30%" />
      </div>
      <Placeholder height={18} key="2" width="40%" />
    </div>
  </div>
);

export default ProductPlaceholder;
