'use client';

import { ActionIcon } from '@lobehub/ui';
import { useTheme } from 'antd-style';
import { Github, Home } from 'lucide-react';
import { memo } from 'react';
// import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { GITHUB, HOME } from '@/const/url';


const Footer = memo(() => {
  const theme = useTheme();
  // const { t } = useTranslation('common');

  return (
    <Flexbox align={'center'} horizontal justify={'space-between'} style={{ padding: 16 }}>
      <span style={{ color: theme.colorTextDescription }}>
        ©{new Date().getFullYear()} ilovemath.xyz
      </span>
      <Flexbox horizontal>
        <ActionIcon
          icon={Home}
          onClick={() => window.open(HOME, '__blank')}
          size={'site'}
          title={'Home'}
        />
        <ActionIcon
          icon={Github}
          onClick={() => window.open(GITHUB, '__blank')}
          size={'site'}
          title={'GitHub'}
        />
      </Flexbox>
    </Flexbox>
  );
});

export default Footer;
