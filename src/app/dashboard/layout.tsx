import Body from '@components/Body';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Body>
      <p className='page mt-[5rem]'>{children}</p>
    </Body>
  );
};

export default DashboardLayout;
