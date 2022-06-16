const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        email: String
        quizzes: [QuizSet]
    }

    type Auth {
        token: ID!
        user: User
    }

    type QuizSet {
        _id: ID
        dateTaken: String
        quizResults: [QuizResult]
    }

    type QuizResult {
        _id: ID
        quizSetId: ID
        quizTaken: String
        quizAnswer: String
        createdAt: String
    }

    type Recording {
        _id: ID
        audio: String
        title: String

    }

    type TherapyNote {
        _id: ID
        dateTaken: String
        doingQuestion: String
        feelingQuestion: String
        nextQuestion: String
        feelingRating: Int
        helpfulRating: Int
        notes: String
    }


    type Query {
        user: User
        quizSet(quizSetId: String): QuizSet
        recording(recordingId: String): Recording
        therapyNote(therapyNoteId: String): TherapyNote
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(email: String!, password: String!): Auth
        updateUser(email: String, password: String): User
        addQuizSet: QuizSet
        addQuizResult(quizSetId: ID!, quizTaken: String!, quizAnswer: String!): QuizSet
        removeQuizSet(quizSetId: ID): QuizSet
        addRecording(audio: String!, title: String!): Recording
        removeRecording(recordingId: ID): Recording
        addTherapyNote(
    }
`
//todo queries

module.exports = typeDefs;

