import Joi from 'joi';

export const downloadSchema ={
  title: Joi.string().required(),
};

export const compilationSchema = {
  name: Joi.string().required(),
  length: Joi.number().required(),
  parts: Joi.array().items({
    name: Joi.string().required(),
    duration: Joi.number().required(),
  }),
};

