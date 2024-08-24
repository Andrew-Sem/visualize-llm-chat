ALTER TABLE "visualize-llm-chat_user" ALTER COLUMN "email" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "visualize-llm-chat_user" DROP COLUMN IF EXISTS "email_verified";