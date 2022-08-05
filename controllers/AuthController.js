var db = require('../helpers/mysqlAdapter');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = (req, res, next) => {
    db.query(
        `SELECT * FROM users WHERE email = ${db.escape(req.body.email)};`,
        (err, result) => {
            // user does not exists
            if (err) {
                throw err;
                return res.status(400).send({
                    msg: err
                });
            }
            if (!result.length) {
                return res.status(401).send({
                    msg: 'Email or password is incorrect!'
                });
            }
            // check password
            bcrypt.compare(
                req.body.password,
                result[0]['password'],
                (bErr, bResult) => {
                // wrong password
                    if (bErr) {
                        throw bErr;
                        return res.status(401).send({
                            msg: 'Email or password is incorrect!'
                        });
                    }
                    if (bResult) {
                        const token = jwt.sign({id:result[0].id},'the-super-strong-secrect',{ expiresIn: '1h' });
                        db.query(
                            `UPDATE users SET last_login = now() WHERE id = '${result[0].id}'`
                        );

                        req.session.loggedIn = true;
                        req.session.email = result[0].email;
                        req.session.user_id = result[0].id
                        console.log('login success');
                        return res.redirect("/home");
                        // return res.status(200).send({
                        //     msg: 'Logged in!',
                        //     token,
                        //     user: result[0]
                        // });
                        
                    }
                    return res.status(401).send({
                        msg: 'Username or password is incorrect!'
                    }); 
                }
            );
        }
    );
    // return res.status(200).send("OK");
}

exports.logout = (req,res) =>{
    req.session.destroy();
    return res.redirect("/home");
}

exports.register =   (req, res, next) => {
    db.query(
        `SELECT * FROM users WHERE LOWER(email) = LOWER(${db.escape(
            req.body.email
        )});`,
        (err, result) => {
            if (result.length) {
                return res.status(409).send({
                    msg: 'This user is already in use!'
                });
            } else {
            // username is available
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).send({
                            msg: err
                        });
                    } else {
                    // has hashed pw => add to database
                        db.query(
                            `INSERT INTO users (name, email, password) VALUES ('${req.body.name}', ${db.escape(
                                req.body.email
                            )}, ${db.escape(hash)})`,
                            (err, result) => {
                                if (err) {
                                    throw err;
                                    return res.status(400).send({
                                        msg: err
                                    });
                                }
                                return res.status(201).send({
                                    msg: 'The user has been registerd with us!'
                                });
                            }
                        );
                    }
                });
            }
        }
    );
};