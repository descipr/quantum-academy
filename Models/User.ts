import mongoose, { Schema, Document, Model } from 'mongoose';


export interface IUserDetails extends Document {
  fullName: string;
  phoneNumber: string;
}


const UserDetailsSchema: Schema<IUserDetails> = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});


type UserDetailsModel = Model<IUserDetails>;


export default (mongoose.models.User as UserDetailsModel) ||
  mongoose.model<IUserDetails>('User', UserDetailsSchema);
