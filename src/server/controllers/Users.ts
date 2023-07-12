import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";
import {client,jwt,secret} from './ConfigServer'


export const findAll = async (req: NextApiRequest, res: NextApiResponse) => {
  await client.connect();
  const users = await client.db("nurse").collection("users").find({}).toArray();
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
    .collection("users")
    .findOne({ _id: objectId });
  // .toArray();
  console.log(id);
  await client.close();
  res.json(users);
};

export const register = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    parentname,
    relation,
    phone,
    password,
    babyname,
    babyage,
    babysex,
    babybirthday,
  }: any = req.body;
  await client.connect();
  await client
    .db("nurse")
    .collection("users")
    .insertMany([
      {
        parentname,
        relation,
        phone,
        password,
        babyname,
        babyage,
        babybirthday,
        babysex,
        height:[],
        weight:[],
        datetocheck:[],
        registerdate: new Date(),
      },
    ]);
  await client.close();
  res.status(200).json({ status: "resgister success" });
};

export const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const { phone, password }: any = req.body;
  
    // await client.connect();
    // const user = await client
    //   .db("nurse")
    //   .collection("users")
    //   .findOne({ $and: [{ phone: phone, password: password }] });
    // await client.close();
    // res.json({ weight:user.weight });

  try {
    await client.connect();
    const user = await client
      .db("nurse")
      .collection("users")
      .findOne({ $and: [{ phone: phone, password: password }] });
    await client.close();
    const token = jwt.sign(
      {
        id: user._id,
        parentname:user.parentname,
        relation:user.relation,
        phone:user.phone,
        babyname:user.babyname,
        babyage:user.babyage,
        babybirthday:user.babybirthday,
        babysex:user.babysex,
        registerdate:user.registerdate,
        height:user.height,
        weight:user.weight,
        datetocheck:user.datetocheck,
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
