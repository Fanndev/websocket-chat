import { prisma } from "../../main.js";
import { ResponseMessage, StatusCode } from "../helpers/httpStatus.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const dataUser = req.body;
    console.log(dataUser);
    if (dataUser.password != dataUser.confirmPassword) {
      return res.json({
        status: StatusCode.BAD_REQUEST,
        message: ResponseMessage.FailRegistered,
      });
    }
    const passwordUser = await bcrypt.hash(dataUser.password, 10);
    const response = await prisma.user.create({
      data: {
        username: dataUser.username,

        email: dataUser.email,
        password: passwordUser,
      },
    });
    res.json({
      status: StatusCode.OK,
      message: ResponseMessage.SuccesRegistered,
    });
  } catch (e) {
    res.json({
      status: StatusCode.BAD_REQUEST,
      message: ResponseMessage.FailRegistered,
      sementara: e,
    });
  }
};

export const login = async (req, res) => {
  try {
    res.json({
      status: StatusCode.OK,
      message: ResponseMessage.LoginSucces,
    });
    const dataUser = req.body;
    const userOnDB = await prisma.user.findUnique({
      where: { email: dataUser.email },
    });
    if (!userOnDB) {
      return res.json({
        status: StatusCode.BAD_REQUEST,
        message: ResponseMessage.NotFound,
      });
    }
    res.json({
      status: StatusCode.OK,
      message: ResponseMessage.LoginSucces,
    });
  } catch (e) {
    res.json({
      status: StatusCode.BAD_REQUEST,
      message: ResponseMessage.LoginFailed,
    });
  }
};
