import hbs from "nodemailer-express-handlebars";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

var email = process.env.NEXT_PUBLIC_EMAIL;
var pass = process.env.NEXT_PUBLIC_EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: pass,
  },
});

const handlebarOptions: any = {
  viewEngine: {
    extName: ".handlebars",
    partialsDir: path.resolve("./src/views"),
    defaultLayout: false,
  },
  viewPath: path.resolve("./src/views"),
  extName: ".handlebars",
};

transporter.use("compile", hbs(handlebarOptions));

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") return res.json({ message: "Bad request" });

  const data = req.body;
  if (!data || !data.name || !data.email || !data.number || !data.locale) {
    return res.json({ message: "Issues with data!" });
  }

  const mailOptions = {
    template: "email",
    context: {
      name: data.name,
      number: data.number,
      email: data.email,
    },
  };

  const mailOptionsRu = {
    template: "emailru",
    context: {
      name: data.name,
      number: data.number,
      email: data.email,
    },
  };

  const mailOptions1 = {
    template: "message",
    context: {
      name: data.name,
      number: data.number,
      email: data.email,
      loc: data.locale === "ru" ? "Русский" : "Английский",
    },
  };
  let message = "Message was sent successfully!";
  try {
    if (data.locale === "ru") {
      await transporter.sendMail({
        from: process.env.NEXT_PUBLIC_EMAIL,
        to: data.email,
        subject: "Спасибо что связались с нами!",
        ...mailOptionsRu,
      });
      message = "Письмо успешно отправлено!";
    } else {
      await transporter.sendMail({
        from: process.env.NEXT_PUBLIC_EMAIL,
        to: data.email,
        subject: "Thank you for contacting us!",
        ...mailOptions,
      });
    }
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL,
      to: process.env.NEXT_PUBLIC_EMAIL,
      subject: "Данные клиента",
      ...mailOptions1,
    });

    return res.json({ message: message });
  } catch (error: any) {
    return res.json({ message: error.message });
  }
  //end
};
export default handler;
