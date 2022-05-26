import mongoose, { Document } from 'mongoose'

export type AuthorDocument = Document & {
  firstName: string
  lastName: string
  biography: string
  books: string[]
}

const authorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    index: true,
    required: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    index: true,
    required: true,
    maxLength: 50,
  },
  biography: {
    type: String,
  },
  books: {
    type: [String],
  },
})

export default mongoose.model<AuthorDocument>('Author', authorSchema)
