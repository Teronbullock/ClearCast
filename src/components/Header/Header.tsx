import { HeaderContainer } from './HeaderContent';
import { auth } from '@lib/auth';

export const Header = async () => {
  const session = await auth();
  const isLoggedIn = session?.user ? true : false;

  return (
    <header className='app-header absolute left-0 top-0 z-[50] py-3 w-full'>
      <HeaderContainer isLoggedIn={isLoggedIn} />
    </header>
  );
};
