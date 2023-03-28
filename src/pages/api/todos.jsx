// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mongodb from "@/utils/mongodb";
import Todo from "../../../models/Todo";

const handler = async (req, res) => {
  await mongodb.dbConnect();

  if (req.method === "GET") {
    try {
      const todos = await Todo.find();
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (req.method === "DELETE") {
    try {
      const todo = await Todo.findByIdAndDelete(req.body);
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (req.method === "POST") {
    try {
      const todo = await Todo.create(req.body);
      res.status(201).json(todo);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

export default handler;
