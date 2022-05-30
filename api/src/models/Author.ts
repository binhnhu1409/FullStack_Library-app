import mongoose, { Document, Schema } from 'mongoose'

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
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Book',
    },
  ],
})

export default mongoose.model<AuthorDocument>('Author', authorSchema)
