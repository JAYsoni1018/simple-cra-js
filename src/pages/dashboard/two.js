import { Helmet } from 'react-helmet-async';
import { UserView } from 'src/sections/user/view';
// sections
// import TwoView from 'src/sections/two/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Two</title>
      </Helmet>
<UserView/>
      {/* <TwoView /> */}
    </>
  );
}
