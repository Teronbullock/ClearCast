import { auth } from '@lib/auth';

const DashboardPage = async () => {
  const session = await auth();

  if (!session?.user) return <div>Not authenticated</div>;

  return (
    <>
      <h2 className='page-header'>Weather Dashboard</h2>
    </>
  );
};

export default DashboardPage;
