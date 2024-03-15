import { Helmet } from 'react-helmet-async';
import { EmployeeView } from 'src/sections/employee/view';
// sections

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Four</title>
      </Helmet>

      <EmployeeView />
    </>
  );
}
