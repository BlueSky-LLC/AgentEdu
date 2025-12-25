-- Create a table for public profiles, linking to the auth.users table
create table public.profiles (
  id uuid references auth.users not null primary key,
  email text,
  full_name text,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS) on profiles
alter table public.profiles enable row level security;

-- Profiles policies
create policy "Public profiles are viewable by everyone." on public.profiles
  for select using (true);

create policy "Users can insert their own profile." on public.profiles
  for insert with check (auth.uid() = id);

create policy "Users can update own profile." on public.profiles
  for update using (auth.uid() = id);

-- Create a table for Courses
create table public.courses (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text,
  image_url text,
  slug text unique not null,
  published boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS on courses
alter table public.courses enable row level security;

-- Course policies
create policy "Courses are viewable by everyone." on public.courses
  for select using (true);
  
-- Only allowing admins/service_role to create/update courses for now (can expand later)
-- For simplicity in this demo, we might allow authenticated users to view only.

-- Create a table for Modules
create table public.modules (
  id uuid default gen_random_uuid() primary key,
  course_id uuid references public.courses(id) on delete cascade not null,
  title text not null,
  "order" integer not null default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.modules enable row level security;

create policy "Modules are viewable by everyone." on public.modules
  for select using (true);

-- Create a table for Lessons
create table public.lessons (
  id uuid default gen_random_uuid() primary key,
  module_id uuid references public.modules(id) on delete cascade not null,
  title text not null,
  content text, -- Markdown content or video URL
  video_url text,
  duration integer, -- in seconds
  "order" integer not null default 0,
  free_preview boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.lessons enable row level security;

create policy "Lessons are viewable by everyone." on public.lessons
  for select using (true);

-- Create a table for User Progress
create table public.user_progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) not null,
  lesson_id uuid references public.lessons(id) on delete cascade not null,
  is_completed boolean default false,
  completed_at timestamp with time zone,
  last_watched_at timestamp with time zone default timezone('utc'::text, now()),
  unique(user_id, lesson_id)
);

alter table public.user_progress enable row level security;

create policy "Users can view their own progress." on public.user_progress
  for select using (auth.uid() = user_id);

create policy "Users can insert their own progress." on public.user_progress
  for insert with check (auth.uid() = user_id);

create policy "Users can update their own progress." on public.user_progress
  for update using (auth.uid() = user_id);

-- Function to handle new user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;

-- Trigger to call handle_new_user on signup
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Seed Data (Optional - Comment out if not needed)
insert into public.courses (title, description, slug, published)
values 
('Agentic AI Fundamentals', 'Learn the basics of building autonomous AI agents.', 'agentic-ai-fundamentals', true),
('Advanced Next.js Patterns', 'Master the App Router and Server Components.', 'advanced-nextjs', true);

-- You can run this script in the Supabase SQL Editor to set up your database.
