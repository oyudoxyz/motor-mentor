import { Paper } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import Link from 'next/link';

export default function ChatNow(): JSX.Element {
  return (
    <Paper
      className="max-w-md w-full bg-[url('/abstract-bg.jpg')] text-white"
      elevation={3}
    >
      <div className="backdrop-blur-sm p-5 h-full w-full flex flex-col justify-center">
        <h1 className="text-3xl font-bold font-serif mb-3">Chat Now </h1>
        <p className="text-sm mb-5">Chat with our AI mechanic!</p>
        <Link
          href="chat"
          className="cursor-pointer w-fit py-2 px-4 font-semibold text-lg hover:bg-white hover:text-primary rounded-lg transition-all duration-300 ease-in-out"
        >
          Chat Now{' '}
          <LaunchIcon
            fontSize="medium"
            className="inline-block ml-2"
          />
        </Link>
      </div>
    </Paper>
  );
}
