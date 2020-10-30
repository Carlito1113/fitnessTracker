const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercise: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Enter and exercise"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter an exercise name"
                },
                duration: {
                    type: Number,
                    required: "In minutes, enter the duration of the exercise."
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    }
);