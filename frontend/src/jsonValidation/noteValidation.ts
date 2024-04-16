// Source for validation: https://jsoneditoronline.org/indepth/parse/json-to-typescript/
import type { Note } from "../interfaces/note";

export function isNote(value: unknown): value is Note {
  if(!value || typeof value !== 'object'){
    return false
  }
  const object = value as Record<string, unknown>;

  return object.hasOwnProperty("noteid") && 
    object.hasOwnProperty("userid") &&
    object.hasOwnProperty("notetext") &&
    object.hasOwnProperty("notedate") &&
    typeof object.noteid == 'number' &&
    typeof object.userid == 'number' &&
    typeof object.notetext == 'string' &&
    typeof object.notedate == 'string'
};

export function isNotesArray(value: unknown): value is Note[] {
  return Array.isArray(value) && value.every(isNote);
};