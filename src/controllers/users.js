const User = require('../models/user');

const getUsers = (request, response) => {
    User.find({})
    .then((user) => {
      response.status(200).send(user);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

const getUser = (request, response) => {
    const { user_id } = request.params;
    return User.findById(user_id)
      .then((user) => {
        res.status(200).send(user);
      })
      .catch((e) => {
        res.status(500).send(e.message);
      });
};

const addUser = (request, response) => {
   return User.create({ ...request.body })
   .then(
    (user) => { response.status(201).send(user) }
   )
   .catch((e) => {
    res.status(500).send(e.message);
  });
};

const updateUser = (request, response) => {
    const {id} = request.params;
    User.findByIdAndUpdate(id, {...request.body })
        .then((user) => {
            response.status(200).send(user);
        })
        .catch((e) => {
        response.status(500);
    });
};

const deleteUser = (request, response) => {
    const {id} = request.params;
    User.findByIdAndUpdate(id, {...request.body })
        .then((user) => {
            response.status(200).send(user);
        }).catch((e) => {
        response.status(500);
    });
};

const takeBookByUser = (request, response) => {
    const { user_id } = request.params;
    const data = request.body;
    User.findByIdAndUpdate(
      user_id,
      { $addToSet: { books: data.book_id } },
      { new: true, runValidators: true }
    )
      .then((user) => {
        response.status(200).send("Done");
      })
      .catch((e) => {
        response.status(500).send(e.message);
      });
  };
  
  const returnBookByUser = (request, response) => {
    const { user_id } = request.params;
    const data = request.body;
    User.findByIdAndUpdate(
      user_id,
  
      { $pullAll: { books: [{ _id: data.book_id }] } },
      { new: true, runValidators: true }
    )
      .then((user) => {
        response.status(200).send("Done");
      })
      .catch((e) => {
        response.status(500).send(e.message);
      });
  };

module.exports = {
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser, 
    takeBookByUser,
    returnBookByUser
}