const { Schema, model } = require('mongoose')

const stageSchema = new Schema(
  {
    stageName: String,
    stageTeams: {
      type: Schema.Types.ObjectId,
      ref: 'Team',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

module.exports = model('Stage', stageSchema)
