const { Schema, model } = require('mongoose');

// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    course: {
      type: Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
    },
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Reaction',
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model('Thought', thoughtSchema);

// Schema to create a reaction model
const reactionSchema = new Schema(
  {
    emoji: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    thought: {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
      required: true,
    },
  },
  {
    timestamps: true,
    id: false,
  }
);

const Reaction = model('reaction', reactionSchema);

module.exports = {
  Thought,
  Reaction,
};

module.exports = Thought;
