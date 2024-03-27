import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { getAllNotes, deleteNote } from '../apiServices/notesApi';
import { Note } from '../interfaces/note';
import '../styles/history/styles.css';

const History: React.FC = () => {
  const [notesPayload, setNotesPayload] = useState<Note[] | undefined>(undefined);
  const [noteKeys, setNoteKeys] = useState<string[] | undefined>(undefined);
  const fetchData = async () => {
    const data = await getAllNotes();
    setNoteKeys(Object.keys(data[0]).filter((key) => key != "userid"));
    setNotesPayload(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = async ( targetId: number ) => {
    if(await deleteNote(targetId)){
      setNotesPayload(notesPayload?.filter((obj) => obj.noteid != targetId));
    }
  };

  return (
    <div>
      <h2 className='pageTitle'>Your previous notes:</h2>
      <br />
      <Table responsive>
        <colgroup>
          <col style={{ width: '33.33%' }} />
          <col style={{ width: '33.33%' }} />
          <col style={{ width: '33.33%' }} />
          <col style={{ width: 'auto' }} />
        </colgroup>
        <thead>
          <tr className="historyCol">
            {noteKeys && noteKeys.map((key: any, i: any) => (
              <th key={i}>{key}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {notesPayload && notesPayload.map((data: any, i: any) => (
            <tr key={i}>
              <td>
                <div className="cellContent">
                  {data.noteid}
                </div>
              </td>
              <td>
                <div className="cellContent">
                  {data.notetext}
                </div>
              </td>
              <td>
                <div className="cellContent">
                  {data.notedate.split("T")[0]}
                </div>
              </td>
              <td>
                <Button variant='primary' onClick={() => deleteData(data.noteid)}>&#128465;</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

    </div>
  );
}

export default History;