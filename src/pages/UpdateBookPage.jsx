import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import Form from '../components/Form';
import { updateBook, getBook } from '../api';
import PageHeader from '../components/PageHeader';
import ContentWrapper from '../components/ContentWrapper';
import StyledAlert from '../components/StyledAlert';
import Spinner from '../components/Spinner';

const UpdateBook = () => {
  const { id: bookId } = useParams();
  const {
    data: bookData,
    isLoading: isFetchingBook,
    isError: isFetchError,
    error: fetchError,
  } = useQuery(['books', bookId], () => getBook(bookId));

  const {
    mutateAsync,
    isLoading: isUpdating,
    isError: isUpdateError,
    isSuccess: isUpdateSuccess,
    error: updateError,
  } = useMutation((data) => updateBook(bookId, data));

  const onSubmit = (data) => {
    mutateAsync(data);
  };

  const renderUpdateAlert = () => {
    if (isUpdateError)
      return <StyledAlert severity="error" message={updateError?.message} />;
    if (isUpdateSuccess)
      return (
        <StyledAlert severity="success" message="You've updated a book!" />
      );
    return null;
  };

  if (isFetchError) return <StyledAlert message={fetchError?.message} />;
  if (isFetchingBook) return <Spinner />;

  return (
    <>
      <PageHeader>Update Book</PageHeader>
      <ContentWrapper>
        {renderUpdateAlert()}
        <Form
          defaultValues={bookData}
          onSubmit={onSubmit}
          btnText="Update Book"
          error={updateError?.message || null}
          isSuccess={isUpdateSuccess}
          isLoading={isUpdating}
          isError={isUpdateError}
        />
      </ContentWrapper>
    </>
  );
};

export default UpdateBook;
