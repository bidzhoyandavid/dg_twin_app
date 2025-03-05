# Digital Twin App - Feature and Flow Description1

## Overview

Digital Twin App enables users to create their personalized AI-powered digital twin. The app guides users through three steps: avatar generation, voice cloning, and AI connection. Upon completion, users can interact with their digital twin for various tasks and conversations.

## Tech Stack

Tech Stack:

- Frontend: React Native with TypeScript, Expo, and Expo Router
- Backend/Database: Supabase
- UI Framework: React Native Paper
- AI Processing: ChatGRT-4o, D-ID, ElevenLabs

## User Flow

### 1. Welcome Screen

- **Clean and minimalistic UI**
- **Two options:**
  - "Sign in with Google"
  - "Continue as Guest" (limited functionality)
- **After successful authentication**, the user is redirected to the avatar creation process.

### 2. Digital Twin Creation Process

#### Step 1: Avatar Creation

- Users upload a photo or take a live picture.
- AI (powered by D-ID) generates a realistic 3D/2D avatar based on the uploaded image.
- Users can customize avatar features (e.g., hair, eyes, accessories).
- Preview of the final avatar.
- "Next" button proceeds to voice cloning.

#### Step 2: Voice Cloning

- Users record a short sample of their voice (e.g., reading a given sentence).
- AI (powered by ElevenLabs) processes and replicates the user's voice.
- Playback option to listen and approve the cloned voice.
- "Next" button proceeds to AI personality setup.

#### Step 3: AI Integration

- The AI model (powered by ChatGPT) is connected to the digital twin.
- Users can provide personal preferences (e.g., tone, response style, interests).
- AI is trained to mimic the user's speech patterns and thought process.
- "Finish" button completes the digital twin setup.

### 3. Digital Twin Interaction Screen

- Displays the created digital twin (animated avatar with voice interaction).
- Chat interface for text-based conversations.
- Voice-based interaction mode.
- Users can ask questions, delegate tasks, and have casual conversations.
- Settings for:
  - Editing avatar
  - Retraining AI responses
  - Privacy & security settings

## Features

### 1. Authentication

- Google Sign-In.
- Guest mode (read-only interactions, no customization).

### 2. Avatar Generation

- AI-based photo-to-avatar conversion.
- Customization options for personalization.
- Live preview before finalizing the avatar.

### 3. Voice Cloning

- Short audio input for cloning.
- AI-based processing and voice replication.
- Playback and re-record options.

### 4. AI-Powered Conversations

- ChatGPT-powered responses.
- Adjustable personality and tone.
- Context-aware conversations.
- Task delegation capabilities.

### 5. User Dashboard

- Overview of digital twin's capabilities.
- Interaction history.
- AI settings and customization.
- Security & privacy controls.

Future Enhancements

- Multi-language support for voice and chat.
- Marketplace for AI twin services.
- Integration with productivity tools (calendars, reminders, etc.).
- Real-time voice conversation (instead of text-based chat).

## Security and Privacy

- **Data Encryption**: All user data, including images and voice samples, are encrypted both in transit and at rest.
- **User Consent**: Users must provide explicit consent for data usage, especially for voice and image processing.
- **Data Deletion**: Users can request deletion of their data at any time, ensuring complete removal from our servers.
- **Access Control**: Strict access controls are in place to ensure only authorized personnel can access user data.

## Feedback

- **In-App Feedback Form**: Users can provide feedback directly within the app through a dedicated feedback form.
- **Support Channels**: Users can reach out for support via email or live chat for any issues or inquiries.
- **User Surveys**: Periodic surveys are conducted to gather user insights and improve the app experience.
- **Community Forum**: A community forum is available for users to share experiences and suggestions with each other.

---

## Database Schema

### Tables

1. **Users**

   - `user_id` (Primary Key)
   - `email` (Unique, Nullable for guest users)
   - `name`
   - `auth_provider` (e.g., Google, Guest)
   - `created_at`
   - `updated_at`

2. **Avatars**

   - `avatar_id` (Primary Key)
   - `user_id` (Foreign Key)
   - `image_url`
   - `customizations` (JSON for storing hair, eyes, accessories, etc.)
   - `created_at`
   - `updated_at`

3. **Voices**

   - `voice_id` (Primary Key)
   - `user_id` (Foreign Key)
   - `audio_sample_url`
   - `approved` (Boolean)
   - `created_at`
   - `updated_at`

4. **AI_Preferences**

   - `preference_id` (Primary Key)
   - `user_id` (Foreign Key)
   - `tone`
   - `response_style`
   - `interests` (JSON)
   - `created_at`
   - `updated_at`

5. **Interactions**

   - `interaction_id` (Primary Key)
   - `user_id` (Foreign Key)
   - `interaction_type` (e.g., text, voice)
   - `content` (Text or JSON)
   - `timestamp`

6. **Security_Settings**
   - `setting_id` (Primary Key)
   - `user_id` (Foreign Key)
   - `privacy_level`
   - `data_sharing_consent` (Boolean)
   - `created_at`
   - `updated_at`
