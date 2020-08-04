const Counter = require('../models/Counters')

const getCounter = async (type) => {
    try {
        const counter = await Counter.findOne({ type: type })

        const counterJSON = counter.toObject()

        return counterJSON.counter
    } catch (err) {
        console.log(err)
    }
}

const incrementCounter = async (type) => {
    try{
        const counter = await Counter.findOneAndUpdate({type: type}, {
            $inc: {
                counter: 1
            }
        })

        await counter.save()
    } catch(err) {
        console.log(err)
    }
}

module.exports = {
    getCounter,
    incrementCounter
}