import mongoose, { Document, Schema } from 'mongoose'

export enum Status {
  Available = 'available',
  Borrowed = 'borrowed',
}

export type BookDocument = Document & {
  isbn: string
  title: string
  description: string
  categories: string
  publisher: string
  publishedDate: Date
  cover: string
  authors: string[]
  status: Status
  borrowerId: string
  borrowDate: Date
  returnDate: Date
}

const bookSchema = new mongoose.Schema({
  isbn: {
    type: String,
    index: true,
    unique: true,
    required: true,
  },
  title: {
    type: String,
    index: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  categories: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: Date,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  authors: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Author',
      required: true,
    },
  ],
  status: {
    type: String,
    enum: Status,
    default: Status.Available,
    required: true,
  },
  borrowerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  borrowDate: {
    type: Date,
  },
  returnDate: {
    type: Date,
  },
})

// remember Book is singular!!!, the database will automatically make it plural
export default mongoose.model<BookDocument>('Book', bookSchema)
