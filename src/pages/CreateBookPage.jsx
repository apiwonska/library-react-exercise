import { useMutation } from 'react-query';
import Form from '../components/Form';
import PageHeader from '../components/PageHeader';
import ContentWrapper from '../components/ContentWrapper';
import StyledAlert from '../components/StyledAlert';
import { createBook } from '../api';

const CreateBook = () => {
  const { mutateAsync, isLoading, isError, isSuccess, error } =
    useMutation(createBook);

  const onSubmit = (data) => {
    mutateAsync(data);
  };

  const renderAlert = () => {
    if (isError)
      return <StyledAlert severity="error" message={error?.message} />;
    if (isSuccess)
      return <StyledAlert severity="success" message="You've added a book!" />;
    return null;
  };

  return (
    <>
      <PageHeader>Add Book</PageHeader>
      <ContentWrapper>
        {renderAlert()}
        <Form
          onSubmit={onSubmit}
          btnText="Add Book"
          error={error?.message || null}
          isSuccess={isSuccess}
          isLoading={isLoading}
          isError={isError}
        />
      </ContentWrapper>
    </>
  );
};

export default CreateBook;
