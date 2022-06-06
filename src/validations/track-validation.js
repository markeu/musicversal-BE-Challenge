import Joi from 'joi';

export const email = Joi.string().trim().email({ minDomainSegments: 2 });

export const signupSchema = {
  fullName: Joi.string().required(),
  email: Joi.string().trim().email({ minDomainSegments: 2 }).required(),
  role: Joi.string().required(),
  brand: Joi.string().trim(),
  location: Joi.string().trim(),
};

