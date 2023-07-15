import { Router } from "express";
import { courseRoutes } from "./course.routes";
import { deliveryRoutes } from "./delivery.routes";
import { feedbackRoutes } from "./feedback.routes";
import { reportRoutes } from "./report.routes";
import { sloganRoutes } from "./slogan.routes";
import { sloganCorrectionRoutes } from "./sloganCorrection.routes";
import { studentRoutes } from "./student.routes";

const router = Router();
router.use("/course", courseRoutes);
router.use("/delivery", deliveryRoutes);
router.use("/feedback", feedbackRoutes);
router.use("/report", reportRoutes)
router.use("/slogan", sloganRoutes);
router.use("/sloganCorrection", sloganCorrectionRoutes);
router.use("/student", studentRoutes);

export { router as routes };