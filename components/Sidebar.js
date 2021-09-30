import {
  SearchIcon,
  DotsVerticalIcon,
  InboxInIcon,
} from '@heroicons/react/outline';
import Avatar from '@mui/material/Avatar';
import User from './User';

function Sidebar() {
  return (
    <div className=" w-1/4 border border-l-1">
      <div className="flex pl-2 flex-wrap h-16 sticky inset-x-0 z-1 items-center justify-between bg-yellow-600">
        <Avatar />
        <p className="text-xl px-2 text-gray-50">Thopz Messanger</p>

        <div className="flex">
          <button>
            <InboxInIcon className="h-8 hover:opacity-100 opacity-60" />
          </button>
          <button>
            <DotsVerticalIcon className="h-8 hover:opacity-100 opacity-60" />
          </button>
        </div>
      </div>

      <div className="flex h-12 pt-2 mx-3">
        <input
          type="text"
          className="w-full rounded-sm border-none p-2"
          placeholder="Search"
        />
      </div>
      <div className=" mt-4 ">
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </div>
  );
}
export default Sidebar;
