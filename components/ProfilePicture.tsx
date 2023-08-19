import type { FC } from 'react';

type Props = {
  letter: string;
};

const ProfilePicture: FC<Props> = ({ letter }) => {
  return (
    <div className="bg-blue-400 text-slate-700 flex items-center justify-center rounded-full w-8 h-8 font-semibold">
      {letter}
    </div>
  );
};

export default ProfilePicture;
