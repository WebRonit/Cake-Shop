"use server";

import mongoose from "mongoose";
import { Order } from "./conn";
import { revalidatePath } from "next/cache";
const submit = async (prevState, formData) => {

  const DB = process.env.DATABASE;
  mongoose.connect(DB);

  const name = formData.get("name");
  const contactNo = formData.get("contactNo");
  const date = formData.get("date")
  const flavour = formData.get("flavour");
  const size = formData.get("size");
  const shape = formData.get("shape")

  const data = {
    name: name,
    contactNo: contactNo,
    date: date,
    flavour: flavour,
    size: size,
    shape: shape
  };

  
      const order = new Order(data);
      const result = await order.save();

      if (result) {
       revalidatePath("/form");
        return {
          status: 200
        };
      } 

      else {
        return {
          status: 500
        };
      }
 
};

export default submit;