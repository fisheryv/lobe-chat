'use client';

import { ActionIcon } from '@lobehub/ui';
import { useTheme } from 'antd-style';
import { Book, Github, Home } from 'lucide-react';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { GITHUB, HOME, WIKI } from '@/const/url';

const Footer = memo(() => {
  const theme = useTheme();

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
          icon={Book}
          onClick={() => window.open(WIKI, '__blank')}
          size={'site'}
          title={'Wiki'}
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
