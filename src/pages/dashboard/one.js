import { Helmet } from 'react-helmet-async';
import { AppView } from 'src/sections/dashboard/view';
// sections
// import OneView from 'src/sections/dashboard/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Dashboard: One</title>
      </Helmet>

      <AppView />
    </>
  );
}
