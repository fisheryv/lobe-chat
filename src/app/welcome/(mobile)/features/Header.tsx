import { Logo, MobileNavBar } from '@lobehub/ui';
import { memo } from 'react';

import PlanLogo from '@/components/PlanLogo';

const Header = memo(() => <MobileNavBar center={<PlanLogo type="text" />} />);

export default Header;
