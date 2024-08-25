CREATE TABLE IF NOT EXISTS "visualize-llm-chat_visualization" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"content" text NOT NULL,
	"created_by" varchar(255) NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "visualize-llm-chat_visualization" ADD CONSTRAINT "visualize-llm-chat_visualization_created_by_visualize-llm-chat_user_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."visualize-llm-chat_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
