import mongoose, { Document, Schema } from 'mongoose'

export enum Role {
  User = 'user',
  Admin = 'admin',
}

export type UserDocument = Document & {
  firstName: string
  lastName: string
  email: string
  password: string
  role: string
  joinDate: Date
  borrowedBooks: string[]
}

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: Role,
    default: Role.User,
    required: true,
  },
  joinDate: {
    type: Date,
    required: true,
  },
  borrowedBooks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Book',
    },
  ],
})

export default mongoose.model<UserDocument>('User', userSchema)
