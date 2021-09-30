import Avatar from '@mui/material/Avatar';

function User() {
  return (
    <div className="h-14 pt-2 pl-2 flex text-gray-600 hover:bg-gray-100">
      <Avatar />
      <p className="mx-2  font-semibold text-lg overflow-none">
        Christopher Lumen
      </p>
    </div>
  );
}

export default User;
