import { sloganStatus } from "../enum";

interface SloganCorrection {
  title: string;
  description: string;
  status: sloganStatus;
  comment: string;
}

export { SloganCorrection }