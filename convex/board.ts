import { v } from "convex/values";
import { mutation } from "./_generated/server";

const placeholderImages = [
  "/placeholders/board-1.svg",
  "/placeholders/board-2.svg",
  "/placeholders/board-3.svg",
  "/placeholders/board-4.svg",
  "/placeholders/board-5.svg",
  "/placeholders/board-6.svg",
  "/placeholders/board-7.svg",
  "/placeholders/board-8.svg",
];

export const create = mutation({
  args: {
    orgId: v.string(),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }

    const randomImage =
      placeholderImages[Math.floor(Math.random() * placeholderImages.length)];

    const board = await ctx.db.insert("boards", {
      title: args.title,
      orgId: args.orgId,
      authorId: identity.subject,
      authorName: identity.name!,
      imageUrl: randomImage,
    });

    return board;
  },
});
