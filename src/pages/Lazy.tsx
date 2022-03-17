import { Image, Button, message } from 'antd';
import styles from './Gallary.less';
import React, { useEffect, useState } from 'react';
import { getPicList } from '@/services/ant-design-pro/api';
import { Card } from 'antd';
import { Typography } from 'antd';
const { Title } = Typography;

const Lazy: React.FC = props => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const msg = await getPicList();
      setData(msg.picdata);
    }
    )();
  }, []);

  return <div>
          <Card>
            <Title level={2}>4k原图(正常情况下不显示)</Title>
              <Image.PreviewGroup>
                {
                  Object.keys(data).map((v, i) => {
                    return <Image className={styles.imgitem} width={200} src={data[i].PathOri} key={i} />
                  })
                }
              </Image.PreviewGroup>
          </Card>

          <Card>
          <Title level={2}>4k水印</Title>
            <Image.PreviewGroup>
              {
                Object.keys(data).map((v, i) => {
                  return <Image className={styles.imgitem} width={200} src={data[i].PathOri} key={i} />
                })
              }
            </Image.PreviewGroup>
          </Card>
  </div>
};

export default Lazy;