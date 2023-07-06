import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from "mongodb";
const client: any = new MongoClient(process.env.NEXT_PUBLIC_MONGODB!);
const jwt = require("jsonwebtoken");

const secret = process.env.NEXT_PUBLIC_SECRET;

export const findAll = async (req: NextApiRequest, res: NextApiResponse) => {
  await client.connect();
  const users = await client.db("nurse").collection("user").find({}).toArray();
  await client.close();
  res.json(users);
};

export const findOne = async (
  req: NextApiRequest,
  res: NextApiResponse,
  id: any
) => {
  const objectId = new ObjectId(id);
  await client.connect();
  const users = await client
    .db("nurse")
    .collection("user")
    .findOne({ _id: objectId });
  // .toArray();
  console.log(id);
  await client.close();
  res.json(users);
};

export const register = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    parentfirstname,
    parentlastname,
    email,
    password,
    relation,
    babyfirstname,
    babylastname,
    babyage,
    babybirthday,
    sex,
  }: any = req.body;
  await client.connect();
  await client
    .db("nurse")
    .collection("user")
    .insertMany([
      {
        parentfirstname,
        parentlastname,
        email,
        password,
        relation,
        babyfirstname,
        babylastname,
        babyage,
        babybirthday,
        sex,
        registerdate: new Date(),
      },
    ]);
  await client.close();
  res.status(200).json({ status: "resgister success" });
};

export const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password }: any = req.body;
  try {
    await client.connect();
    const user = await client
      .db("nurse")
      .collection("user")
      .findOne({ $and: [{ email: email, password: password }] });
    await client.close();
    const token = jwt.sign(
      {
        id: user._id,
        parentfirstname: user.parentfirstname,
        parentlastname: user.parentlastname,
        email: user.email,
        password: user.password,
        relation: user.relation,
        babyfirstname: user.babyfirstname,
        babylastname: user.babylastname,
        babyage: user.babyage,
        babybirthday: user.babybirthday,
        sex: user.sex,
        registerdate: user.registerdate,
      },
      secret
    );
    res.json({ status: "login success", token });
  } catch (error) {
    res.json({ status: "login faild" });
  }
};

export const auth = async (req: any, res: NextApiResponse) => {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token.split(" ")[1], secret);
    res.json({ status: "success", decoded });
  } catch (error) {
    res.json({ status: "error" });
  }
};

// export const update = async () => {
//   await client.connect();
//   await client
//     .db("nurse")
//     .collection("user")
//     .updateOne(
//       { username: "Jame" },
//       { $set: { username: "Black", course: "pat1" } }
//     );
//   await client.close();
// };
