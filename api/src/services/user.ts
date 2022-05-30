import User, { UserDocument } from '../models/User'
import { NotFoundError } from '../helpers/apiError'

// create
const create = async (user: UserDocument): Promise<UserDocument> => {
  return user.save()
}

// findAll
const findAll = async (): Promise<UserDocument[]> => {
  return User.find()
}

// findById
const findById = async (userId: string): Promise<UserDocument> => {
  const foundUser = await User.findById(userId)

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }

  return foundUser
}

// update
const update = async (
  userId: string,
  update: Partial<UserDocument>
): Promise<UserDocument | null> => {
  const foundUser = await User.findByIdAndUpdate(userId, update, {
    new: true,
  })

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }

  return foundUser
}

// delete user
const deleteUser = async (userId: string): Promise<UserDocument | null> => {
  const foundUser = User.findByIdAndDelete(userId)

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }

  return foundUser
}

export default {
  create,
  findAll,
  findById,
  update,
  deleteUser,
}
