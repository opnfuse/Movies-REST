import boom from '@hapi/boom';

const notFoundHandler = (req, res) => {
  const {
    output: { statusCode, payload },
  } = boom.notFound();

  res.status(statusCode).json(payload);
};

export default notFoundHandler;
