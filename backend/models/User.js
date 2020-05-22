const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    name: String,
    password: String,
    email: String,
    role: {
      type: String,
      enum: ['ADMIN', 'USER'],
      default: 'USER',
    },
    projects: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Project',
      },
    ],
    teams: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Team',
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

module.exports = model('User', userSchema)
