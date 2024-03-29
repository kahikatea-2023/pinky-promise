exports.seed = function (knex) {
  return knex('promises').then(function () {
    return knex('promises').insert([
      {
        id: 1,
        promise_name: 'Finish this assignment',
        promise_description: 'Please let us finish',
        user_id: 'auth0|6491331aa4bd45e690ea1e87',
        friend_user_id: 'google-oauth2|117005350284520001031',
        status: 'pending',
        date_created: '30/06/2023',
        date_due: '30/06/2023',
      },
      {
        id: 2,
        promise_name: 'Cook dinner together',
        promise_description: "We'll prepare a delicious meal",
        user_id: 'auth0|6491331aa4bd45e690ea1e87',
        friend_user_id: 'auth0|649caf539da0538e8a440ef7',
        status: 'pending',
        date_created: '30/06/2023',
        date_due: '30/06/2023',
      },
      {
        id: 3,
        promise_name: 'Go hiking this weekend',
        promise_description: "Let's explore the trails and enjoy nature",
        user_id: 'auth0|6491331aa4bd45e690ea1e87',
        friend_user_id: 'google-oauth2|105045456381689455682',
        status: 'pending',
        date_created: '30/06/2023',
        date_due: '03/07/2023',
      },
      {
        id: 4,
        promise_name: 'Help with moving',
        promise_description: "I'll assist you in packing and carrying boxes",
        user_id: 'auth0|6491331aa4bd45e690ea1e87',
        friend_user_id: 'google-oauth2|117005350284520001031',
        status: 'pending',
        date_created: '30/06/2023',
        date_due: '05/07/2023',
      },
      {
        id: 5,
        promise_name: 'Attend your concert',
        promise_description: "I'll be there to support you on stage",
        user_id: 'auth0|649b980080e8d6023e17e6dd',
        friend_user_id: 'google-oauth2|117005350284520001031',
        status: 'pending',
        date_created: '30/06/2023',
        date_due: '02/07/2023',
      },
      {
        id: 6,
        promise_name: 'Finish organizing the garage',
        promise_description: "We'll sort and arrange all the items",
        user_id: 'auth0|649b980080e8d6023e17e6dd',
        friend_user_id: 'auth0|649cbc8bcb6899372f3cc882',
        status: 'pending',
        date_created: '30/06/2023',
        date_due: '08/07/2023',
      },
      {
        id: 7,
        promise_name: 'Start a book club',
        promise_description: "We'll choose interesting books and discuss them",
        user_id: 'auth0|649b980080e8d6023e17e6dd',
        friend_user_id: 'auth0|649cac0335ec6771d5573424',
        status: 'pending',
        date_created: '30/06/2023',
        date_due: '01/07/2023',
      },
      {
        id: 8,
        promise_name: 'Plan a road trip',
        promise_description: "Let's explore new places and have an adventure",
        user_id: 'auth0|649b980080e8d6023e17e6dd',
        friend_user_id: 'google-oauth2|117005350284520001031',
        status: 'pending',
        date_created: '30/06/2023',
        date_due: '07/07/2023',
      },
      {
        id: 9,
        promise_name: 'Learn to play guitar',
        promise_description: "I'll teach you some chords and songs",
        user_id: 'auth0|649cbc8bcb6899372f3cc882',
        friend_user_id: 'auth0|649caf539da0538e8a440ef7',
        status: 'pending',
        date_created: '30/06/2023',
        date_due: '29/06/2023',
      },
    ])
  })
}
