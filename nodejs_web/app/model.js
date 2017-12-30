// Pulls Mongoose dependency for creating schemas
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

// Creates a User Schema. This will be the basis of how user data is stored in the db
var UserSchema = new Schema({
    username: {type: String, required: true},
    gender: {type: String, required: true},
    birthdate: {type: String, required: true},
    lastname: {type: String, required: true},
    firstname: {type: String, required: true},
    country: {type: String, required: true},
    issuedate: {type: String, required: true},
    expirydate: {type: String, required: true},
    placeofissue: {type: String, required: true},
    image: {type: {}},
    location: {type: [{}]}, // [Long, Lat]
    origin : {type: [Number]}, // [Long, Lat]
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});




// Sets the created_at parameter equal to the current time
UserSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if(!this.created_at) {
        this.created_at = now
    }
    next();
});



// Indexes this schema in geoJSON format (critical for running proximity searches)
UserSchema.index({location: '2dsphere'});

// Exports the UserSchema for use elsewhere.
module.exports = mongoose.model('scotch-user', UserSchema);

//module.exports = mongoose.model('innosoft-user', TravellerSchema);
