const PrismaClient = require("../config/prisma");

class PostsController {
  async index() {
    try {
      const posts = await PrismaClient.post.findMany();
      return posts;
    } catch (error) {
      console.error(error);
      throw new Error("An error occurred while fetching the posts");
    }
  }

  async store(data) {
    try {
      const post = await PrismaClient.post.create({
        data,
      });
      return post;
    } catch (error) {
      console.error(error);
      throw new Error("An error occurred while creating the post");
    }
  }

  async show(id) {
    try {
      const post = await PrismaClient.post.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      return post;
    } catch (error) {
      console.error(error);
      throw new Error("An error occurred while fetching the post");
    }
  }

  async update(id, data) {
    try {
      const post = await PrismaClient.post.update({
        where: {
          id: parseInt(id),
        },
        data,
      });
      return post;
    } catch (error) {
      console.error(error);
      throw new Error("An error occurred while updating the post");
    }
  }

  async delete(id) {
    try {
      const post = await PrismaClient.post.delete({
        where: {
          id: parseInt(id),
        },
      });
      return post;
    } catch (error) {
      console.error(error);
      throw new Error("An error occurred while deleting the post");
    }
  }
}
