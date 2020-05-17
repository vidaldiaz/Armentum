const mongoose = require('mongoose')
const { Schema, model } = mongoose

const projectSchema = new Schema(
  {
    projectName: String,
    projectDescription: String,
    projectOwner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    projectStages: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Stages',
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

module.exports = model('Project', projectSchema)
