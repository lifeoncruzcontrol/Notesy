import { isNotesArray } from "../jsonValidation/noteValidation";

export const getAllNotes = async () => {
  try {
    const res = await fetch('http://localhost:3000/notes/getAll');

    if(!res.ok){
      throw new Error(`HTTP error. Status ${res.status}`);
    }
    const data = await res.json();

    if(!isNotesArray){
      throw new Error('Invalid data: array with notes expected');
    }

    return data;
  } catch (err) {
    console.error('Error fetching data: ', err);
  }
}

export const postNote = async ( noteContent: string) => {
  try {
    const apiUrl: string = 'http://localhost:3000/notes/saveNote';
    const date: Date = new Date();
    const currDate: string = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const res: Response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ noteContent: noteContent, date: currDate })
    });
    if (res.ok) {
      return true;
    } else {
      throw new Error('Failed to save data');
    }
  } catch (err) {
    throw new Error(`Failed to save data. Error: ${err}`);
  }
};

export const deleteNote = async ( noteId: number ) => {
  try {
    const apiUrl: string = 'http://localhost:3000/notes/deleteNote';
    const res: Response = await fetch(apiUrl, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ noteId: noteId })
    });
    if (res.ok){
      return true;
    } else {
      throw new Error('Failed to delete data');
    }
  } catch (err){
    throw new Error(`Failed to delete note. Error: ${err}`)
  }
};