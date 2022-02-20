// To run server:
// npx json-server --watch data/db.json --port 8000
const URL = 'http://localhost:8000';

export const getBook = async (id) => {
  const res = await fetch(`${URL}/books/${id}`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data = await res.json();
  return data;
};

export const getBooks = async () => {
  const res = await fetch(`${URL}/books`);

  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data = await res.json();
  return data;
};

export const removeBook = async (id) => {
  const res = await fetch(`${URL}/books/${id}`, { method: 'DELETE' });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
};

export const createBook = async (formData) => {
  const res = await fetch(`${URL}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data = await res.json();
  return data;
};

export const updateBook = async (bookId, formData) => {
  const res = await fetch(`${URL}/books/${bookId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data = await res.json();
  return data;
};
