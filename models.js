function make(Schema,mongoose,ObjectId) {

	DocumentSchema = new Schema({
		title: String,
		dateCreated: {type: Date,default: Date.now},
		uid: String,
		parentId: String,
		body: String,
	});


	return {
		DocumentSchema: DocumentSchema,
		ShopSchema: ShopSchema,
	};
}

module.exports.make = make;
