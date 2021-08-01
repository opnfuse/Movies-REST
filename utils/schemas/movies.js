import joi from 'joi';

export const movieIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const movieTitleSchema = joi.string().max(80);
const movieYearSchema = joi.number().min(1888).max(2077).strict(true);
const movieCoverSchema = joi.string().uri();
const movieDescriptionSchema = joi.string().max(1000);
const movieDurationSchema = joi.number().min(1).max(1440).strict(true);
const movieContentRatingSchema = joi.string().max(5);
const movieTagsSchema = joi.string().max(50);

export const createMovieSchema = {
  title: movieTitleSchema.required(),
  year: movieYearSchema.required(),
  cover: movieCoverSchema.required(),
  description: movieDescriptionSchema.required(),
  duration: movieDurationSchema.required(),
  contentRating: movieContentRatingSchema.required(),
  tags: movieTagsSchema,
};

export const updateMovieSchema = {
  title: movieTitleSchema,
  year: movieYearSchema,
  cover: movieCoverSchema,
  description: movieDescriptionSchema,
  duration: movieDurationSchema,
  contentRating: movieContentRatingSchema,
  tags: movieTagsSchema,
};
