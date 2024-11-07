# Self

Preliminary starter for Self-Educated, a project that encourages school age adolecents to learn about SEL principles of learning.

To run on your machine:
paste `git clone https://github.com/CamTangalakis/Self.git` into your terminal to download all packages and dependancies

open the folder in your code editor and open two terminals

cd into client folder and start client with `npm start`
cd into server folder and start server with `node index.js`

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

assignedCourses?: [{Courses, completed, archived, priority}]

blacklistedTags?: [CourseTagsEnum]

students/children?: [{User, relationship}]

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

selDomain: SelDomainEnum

estTime: string

digital: [Digital, Hybrid, or Analog]

materials?: [string]

tags: [CourseTagsEnum]

ageGroup: [AgeGroupEnum]

## Enums

### AgeGroup

['tk', 'k', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

### UserType

['student', 'educator', 'parent', 'administrator']

### CourseTags

['friendship', 'sharing', 'siblings', 'i am me', 'feelings', 'fair play', 'ive got a problem', 'overcoming struggle', 'grown ups', 'navigating life changes', 'growing up', 'disappointment and failure', 'family strucutes', 'love', 'loss and death', 'emotional expression', 'asking for help', 'a walk in their shoes', 'puberty', 'identity', 'bullying', 'respecting diversity', 'acceptance', 'conflict management', 'goal setting', 'social media', 'online safety', 'sexuality', 'relationships', 'i can do it', 'organizing and planning', 'reflection', 'problem solving', 'stress', 'healthy choices', 'ethical decision making', 'substance use', 'consent', 'digital identities', 'life after highschool', 'biology', 'physiology', 'sexual health']

### SelDomain

["Self Awareness", "Self Management", "Responsible Decision Making", "Relationship Skills", "Social Awareness"]

## Functionality

### Lessons

Administrators and educators have the ability to create lessons or choose from an available list of existing lessons to add to a lesson plan or course. Lessons will be a combination of educational material, activities, and assessments, designed to ensure a student absorbs the targeted information.

The educational materials can be made up of different types of media; pictures, videos, articles, games, etc. The information will be specialized for each age group and target a specific principle of SEL. Each assessment completed will earn the student a grade, and only a passing grade on all assessments will make that lesson completed.

Students are assigned courses that contain lessons in them, and complete each lesson to finish a course. They read, listen to, or interact with the assigned educational materials, and then complete assessments to ensure they have absorbed the pertinent information.

### Assessments

Each lesson will have an accompanying assessment of varying types.

Types of assessments: matching games, quizzes/tests, identification

### Games

Games are utilized to introduce information to students in an accessible and entertaining way.

Types of games: Drag and drop matching, fill in the blank, draw/coloring, competetive trivia, mazes, puzzles,

### Social

All users should be able to leave feedback on existing courses and lessons.
Users can contact us with questions, comments, concerns about the site, functionality, lessons and courses provided, etc.

### Grades

Students receive grades after taking assessments and completing courses. They can review these grades in their grade portals or profiles. Educators and administrators can assign and review the grades of their students.
