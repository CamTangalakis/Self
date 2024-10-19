# Self

Preliminary starter for Self-Educated, a project that encourages school age adolecents to learn about SEL principles of learning.

start client with //npm start
start server with //node index.js

## Models

### User

username: string, unique id

password: string

userType: UserTypeEnum

grade: AgeGroupEnum

district?: string

school?: string

avatar?: string

specialEducation: bool

badges?: [Badges]

stickers?: [Stickers]

journal?: [JournalEntries]

tunes?: [Tunes]

stories?: [Stories]

favoritedCourses?: [Courses]

assignedCourses?: [{Courses, completed}]

blacklistedTags?: [CourseTagsEnum]

students/children?: [User]

### Badges

name: string

icon: string / element

description: string

earnedAt?: string

### Stickers

name: string

icon: string / element

description: string

earnedAt?: string

### JournalEntries

title?: string

body: string

createdAt: string

updatedAt?: string

### Tunes

name: string

icon: string / element

audio: string

description: string

earnedAt?: string

### Stories

name: string

icon: string / element

description: string

body: string

earnedAt?: string

### Courses

title: string

description: string

lessons: [Lessons]

ageGroup: [AgeGroupEnum]

tags: [CourseTagsEnum]

### Lessons

title: string

description: string

tags: [CourseTagsEnum]

ageGroup: [AgeGroupEnum]

## Enums

### AgeGroup

['tk', 'k', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

### UserType

['student', 'educator', 'parent', 'administrator']

### CourseTags

['friendship', 'sharing', 'siblings', 'i am me', 'feelings', 'fair play', 'ive got a problem', 'overcoming struggle', 'grown ups', 'navigating life changes', 'growing up', 'disappointment and failure', 'family strucutes', 'love', 'loss and death', 'emotional expression', 'asking for help', 'a walk in their shoes', 'puberty', 'identity', 'bullying', 'respecting diversity', 'acceptance', 'conflict management', 'goal setting', 'social media', 'online safety', 'sexuality', 'relationships', 'i can do it', 'organizing and planning', 'reflection', 'problem solving', 'stress', 'healthy choices', 'ethical decision making', 'substance use', 'consent', 'digital identities', 'life after highschool', 'biology', 'physiology', 'sexual health']
