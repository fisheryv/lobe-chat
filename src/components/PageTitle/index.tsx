import { memo, useEffect } from 'react';

const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    document.title = title ? `${title} · PlanChat` : 'PlanChat';
  }, [title]);

  return null;
});

export default PageTitle;
