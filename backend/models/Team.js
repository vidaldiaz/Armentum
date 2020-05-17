const { Schema, model } = require('mongoose')

const teamSchema = new Schema(
  {
    teamName: String,
    teamDescription: String,
    teamMembers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

module.exports = model('Team', teamSchema)
