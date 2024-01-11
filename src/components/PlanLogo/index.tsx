import Image from 'next/image';

import PlanLogo from '@/app/icons/logo.png';

export default (props: any = {}) => {
  const { type, ...rest } = props;
  return props.type !== 'text' ? (
    <Image
      src={PlanLogo}
      alt="plan logo"
      style={{
        width: 160,
        height: 'auto',
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
