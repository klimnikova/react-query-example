import React from 'react';
import { useQuery } from 'react-query';
import axios, { AxiosError } from 'axios';

const User = () => {
  const fetchUser = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/1`
    );
    return data;
  };
  const { isLoading, isSuccess, error, isError, data: userData } = useQuery(
    'user',
    fetchUser,
    {
      select: (user) => user.username,
    }
  ) as {
    isLoading: boolean;
    isSuccess: boolean;
    error: AxiosError;
    isError: boolean;
    data: string;
  };
  return (
    <div>
      {isLoading && <article>...Loading user </article>}
      {isError && <article>{error.message}</article>}
      {isSuccess && (
        <article>
          <p>Username: {userData}</p>
        </article>
      )}
    </div>
  );
};
export default User;
