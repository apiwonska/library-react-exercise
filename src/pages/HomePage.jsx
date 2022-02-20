import { useQuery, useMutation, useQueryClient } from 'react-query';

import BookItem from '../components/BookItem';
import StyledAlert from '../components/StyledAlert';
import Spinner from '../components/Spinner';
import ContentWrapper from '../components/ContentWrapper';
import PageHeader from '../components/PageHeader';
import { getBooks, removeBook } from '../api';

const HomePage = () => {
  const { data, error, isLoading, isError } = useQuery('books', getBooks);
  const { mutateAsync, isLoading: isRemoving } = useMutation((bookId) =>
    removeBook(bookId)
  );
  const queryClient = useQueryClient();

  const handleDelete = async (bookId) => {
    await mutateAsync(bookId);
    queryClient.invalidateQueries();
  };

  if (isError)
    return <StyledAlert severity="error" message={error?.messsage} />;
  if (isLoading) return <Spinner />;

  return (
    <>
      <PageHeader>Books</PageHeader>
      <ContentWrapper>
        {data.map(({ id, title, author }) => (
          <BookItem
            key={id}
            id={id}
            title={title}
            author={author}
            handleDelete={handleDelete}
            isRemoving={isRemoving}
          />
        ))}
      </ContentWrapper>
    </>
  );
};
export default HomePage;
