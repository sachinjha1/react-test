import Topic from '../models/topic.server.model';

const create = (request, reply) => {
  const { payload } = request;
  const entry = new Topic({
    topicName: payload.topicName,
    shortDesc: payload.shortDesc,
  });

  const success = {
    message: 'Topic created',
    topicName: payload.topicName,
    shortDesc: payload.shortDesc,
  };
  entry.save((err) => {
    if (err) {
      return err;
    }
    return success;
  });
  return success;
};

const read = (request, reply) => {
  return { topicName: 'react', shortDesc: 'Awesome view library' };
};

export default { create, read };
