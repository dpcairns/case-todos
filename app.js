const todo = {
    client: {
        name: String,
        email: String,
        phone: String,
    },
    type: ['Care Coordination', 'Respite', 'Mentoring', 'DD Services', 'Wraparound', 'Psyche Testing', 'Referral'],
    contact: {
        name: String,
        phone: String,
        email: String,
        fax: String,
    },
    lastContact: Date,
    plan: [
        {
            date: Date,
            note: String
        }
    ],
};