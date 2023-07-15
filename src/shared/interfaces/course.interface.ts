import { Document } from "mongoose";
import { Delivery } from "./delivery.interface";

interface Course extends Document{
  name: string;
  deliveries: Delivery[];
}

export { Course }