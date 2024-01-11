import { MobileNavBar } from '@lobehub/ui';
import { memo } from 'react';

import PlanLogo from '@/components/PlanLogo';

import ShareAgentButton from '../../features/ShareAgentButton';

const Header = memo(() => {
  return <MobileNavBar center={<PlanLogo type="text" />} right={<ShareAgentButton mobile />} />;
});

export default Header;
