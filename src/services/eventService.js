import {
  createEvent,
  findEventById,
  findAllEvents,
  updateEvent as updateEventQuery,
  deleteEvent as deleteEventQuery
} from '../db/queries/eventQueries.js';


import ormFiles from "../db/orm/models/index.js"; // give any name , db is more common than ormFiles

export const createEventService = async (eventData) => {
  return await createEvent(eventData);
};

export const getEventByIdService = async (id) => {
  return await findEventById(id);
};

export const getAllEventsService = async () => {
  return ormFiles.Event.findAll() // new code from sequalize 

  /*
  return ormFiles.Event.findAll({
    attributes: ['eventId', 'title', 'description'],
  }) // new code from sequalize  - with custom fields
*/
  // return await findAllEvents();  // old code from  eventQueries
};

export const updateEventService = async (id, eventData) => {
  return await updateEventQuery(id, eventData);
};

export const deleteEventService = async (id) => {
  return await deleteEventQuery(id);
};