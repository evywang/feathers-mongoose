import Pet from './pet';
import User from './user';
import Peeps from './peeps';
import CustomPeeps from './peeps-customid';
import Post from './post';
import TextPost from './text-post';

function getUserModel (params) {
  return User;
}

export default {
  Pet,
  User,
  Peeps,
  CustomPeeps,
  Post,
  TextPost,
  getUserModel
};
