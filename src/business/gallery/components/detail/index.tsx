import { GalleryItem } from 'business/gallery/services/type';
import React from 'react';
import Emphase from 'ui/emphase';
import ExternalLink from 'ui/externalLink';
import images from 'ui/images';
import Modal from 'ui/modal';
import Spacer from 'ui/spacer';
import styles from './index.module.scss';

interface ModalDetailProps
  extends Pick<
    GalleryItem,
    | 'name'
    | 'detailFile'
    | 'alternativeText'
    | 'description'
    | 'formatDescription'
    | 'unGrandMarcheLink'
    | 'etsyLink'
  > {}

const ModalDetail: React.FC<ModalDetailProps> = ({
  name,
  detailFile,
  alternativeText,
  description,
  formatDescription,
  unGrandMarcheLink,
  etsyLink,
}) => {
  return (
    <Modal>
      <Spacer className={styles.modalDetail}>
        <div className={styles.detailImgContainer}>
          <img
            className={styles.detailImg}
            src={detailFile.url}
            alt={alternativeText}
          />
        </div>
        <Spacer
          className={styles.content}
          justify="center"
          direction="vertical"
        >
          <Emphase>{name}</Emphase>
          <Emphase>-</Emphase>
          <p>{description}</p>
          <br />
          <p>{formatDescription}</p>
          <br />
          <br />
          <br />
          <Spacer size="extra-large">
            {unGrandMarcheLink ? (
              <ExternalLink to={unGrandMarcheLink}>
                <img
                  className={styles.shopLinkImg}
                  src={images.UnGrandMarche}
                  alt="Un Grand Marché"
                />
              </ExternalLink>
            ) : null}
            {etsyLink ? (
              <ExternalLink to={etsyLink}>
                <img
                  className={styles.shopLinkImg}
                  src={images.Etsy}
                  alt="Etsy"
                />
              </ExternalLink>
            ) : null}
          </Spacer>
        </Spacer>
      </Spacer>
    </Modal>
  );
};

export default ModalDetail;
