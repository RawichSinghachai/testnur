import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";
import { client, jwt, secret } from "./ConfigServer";

export const findAll = async (req: NextApiRequest, res: NextApiResponse) => {
  await client.connect();
  const users = await client.db("nurse").collection("data").find({}).toArray();
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
    .collection("data")
    .findOne({ _id: objectId });
  // .toArray();
  console.log(id);
  await client.close();
  res.json(users);
};


export const createDocument = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { id } = req.body;
  const objectId = new ObjectId(id);

  await client.connect();
  const user = await client
    .db("nurse")
    .collection("data")
    .findOne({ _id: objectId });
  if (user) {
    ////////////
    await client.db("nurse").collection("data").deleteMany({$nor:[{_id:objectId}]})
    await client.close();
  } else {
    await client
      .db("nurse")
      .collection("data")
      .insertMany([{ _id: objectId}]);

    await client.db("nurse").collection("data").deleteMany({$nor:[{_id:objectId}]})
    await client.close();
    res.json("created document");
  }
};
