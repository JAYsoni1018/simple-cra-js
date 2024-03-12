import { Helmet } from 'react-helmet-async';
// sections
// import ThreeView from 'src/sections/three/view';
import { TicketView } from 'src/sections/ticket/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Three</title>
      </Helmet>

      <TicketView />
    </>
  );
}
