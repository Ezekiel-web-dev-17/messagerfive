import { isSpoofedBot } from "@arcjet/inspect";
import aj from "../config/arcjet.js";

const arcjetMiddleware = async (req, res, next) => {
  try {
    const decision = await aj.protect(req, { requested: 1 }); // Deduct 5 tokens from the bucket

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        res.status(429).json({
          error: "Rate limit exceeded.",
        });
      } else if (decision.reason.isBot()) {
        res.status(403).json({ error: "Bot detected" });
      } else {
        res.status(403).json({ error: "Forbidden" });
      }
    } else if (decision.results.some(isSpoofedBot)) {
      res.status(403).json({ error: "Access Denied" });
    }

    next();
  } catch (error) {
    console.log(`Arcjet Middleware Error: ${error}`);
    next(error);
  }
};

export default arcjetMiddleware;
