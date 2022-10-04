import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Navbar from './Navbar';
import Chatter from './Chatter';
import './Chat.css';

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-white-100 mt-10 shadow-xl border relative`,
};

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="chatarea">
      <section className='{style.sectionContainer}'>
       
        <Navbar/>
        {user ? <Chatter/> : null}
      </section>
    </div>
  );
}

export default App;