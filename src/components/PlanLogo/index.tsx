import Image from 'next/image';

import PlanLogo from '@/app/icons/logo.png';

export default (props: any = {}) => {
  const { type, ...rest } = props;
  return type !== 'text' ? (
    <Image
      alt="plan logo"
      src={PlanLogo}
      style={{
        height: 'auto',
        width: 160,
      }}
      {...rest}
    />
  ) : (
    <b
      style={{
        fontSize: 24,
      }}
      {...rest}
    >
      PlanChat
    </b>
  );
};
