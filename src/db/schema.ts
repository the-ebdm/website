import { InferModel } from "drizzle-orm";
import { pgTable, serial, text, varchar, boolean, timestamp } from "drizzle-orm/pg-core";

export const blogPosts = pgTable("blog_posts", {
  id: serial('id').primaryKey(),
  title: text("title").notNull(),
  content: varchar("content").notNull(),
  published: boolean("published").notNull().default(false),
  publishedAt: timestamp("published_at"),
});

export type BlogPost = typeof blogPosts.$inferSelect;

export const jobs = pgTable("jobs", {
  id: serial('id').primaryKey(),
  type: varchar("type").notNull(),
  due: timestamp("due").notNull(),
  completed: boolean("completed").notNull().default(false),
  completedAt: timestamp("completed_at"),
});

export type Job = typeof jobs.$inferSelect;