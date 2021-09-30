import Head from 'next/head';
import Chat from '../components/Chat';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="relative min-h-screen flex">
      <Head>
        <title>Thopz Project Clone</title>
      </Head>
      <Sidebar />
      <Chat />
      {/* chat */}
    </div>
  );
}
