import mongoose from 'mongoose';

const {Schema} = mongoose;

const PollSchema = new Schema({
	id: mongoose.Schema.Types.ObjectId,
	title: String,
	status: {
		type: String,
		enum: ['Created', 'Opened', 'Stopped', 'Closed'],
		default: 'Created'
	},
	deadline: Date,
	maxAnswer: Number,
	link: String,
	share: {
		type: Boolean,
		default: false
	},
	publishedDate: Date,
});

const Poll = mongoose.model('Poll', PollSchema);
export default Poll;
