import mongoose from 'mongoose';

const {Schema} = mongoose;

const PollSchema = new Schema({
	id: mongoose.Schema.Types.ObjectId,
	title: String,
	status: String,
	link: String,
	publishedDate: Date,
});

const Poll = mongoose.model('Poll', PollSchema);
export default Poll;
