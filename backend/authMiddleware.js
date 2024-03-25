//authMiddleware.js


const jwt = require('jsonwebtoken');
const { db } = require('./db');
const util = require("util");
const query = util.promisify(db.query).bind(db);

const verifyRole = (role) => async (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
        try {
            const token = req.headers.authorization?.split(" ")[1];
            const decoded = jwt.verify(token, 'secret');
            const queryString = "SELECT * FROM users WHERE id= ?";
            const [user] = await query(queryString, [decoded.id]);
            console.log(token);

            if (!user) {
                return res.status(401).send({ message: 'User not found' });
            }

            if (!role || (Array.isArray(role) && role.includes(user.role)) || user.role === role) {
                next();
            } else {
                res.status(401).send({ message: 'Unauthorized' });
            }
        } catch (error) {
            console.error(error);
            res.status(401).send({ message: 'Invalid token' });
        }
    } else {
        res.status(401).send({ message: 'Unauthorized' });
    }
};

exports.verifyToken = verifyRole("");
exports.verifyAdmin = verifyRole("admin");
exports.verifyAdminProduct = verifyRole("product");
exports.verifyAdminSales = verifyRole("sales");
exports.verifyAdminMarketing = verifyRole("marketing")
