# Sharing Flow Epics

## Overview

This document outlines the epics for developing the sharing flow, based on the core MVP features and additional enhancements from mvp-features.md. Epics are high-level user stories or feature groups, broken into smaller tasks for implementation. They align with the iterated flow in overview.md, prioritizing MVP for launch and additional features for post-launch iterations.

## MVP Epics (Launch-Ready)

These epics cover the essential features for a functional sharing flow MVP, focusing on privacy, basic usability, and motivation.

1. **Epic: Photo Capture & Initiation**
   - **User Story**: As a user, I want to take a photo of an item in a shop to start the sharing process.
   - **Tasks**:
     - Implement full-screen camera view with centered frame using react-native-vision-camera.
     - Add [Capture] and [Cancel] buttons with haptic feedback via React Native Vibration API.
     - Ensure portrait orientation and thumb-friendly design (>44px targets).
   - **Acceptance Criteria**: Photo captures successfully; flow proceeds to tagging.
   - **Effort**: 1 week.

2. **Epic: On-Device AI Tagging**
   - **User Story**: As a user, I want the app to automatically tag my photo for easy identification.
   - **Tasks**:
     - Integrate TensorFlow.js React Native for on-device ML inference and tag generation.
     - Display photo preview with generated tags (e.g., "Vintage Scarf") and confidence indicators.
     - Add [Processing...] indicator and [Edit Tags] button with touch-friendly design.
   - **Acceptance Criteria**: Tags generate on-device; no server calls; ensures privacy.
   - **Effort**: 2 weeks.

3. **Epic: Tag Review & Editing**
   - **User Story**: As a user, I want to review and edit AI tags before sharing.
   - **Tasks**:
     - Create editable tag list with [X] remove and [Add Tag] input using react-native-gesture-handler for swipe gestures.
     - Add [Save] and [Cancel] buttons with >44px targets and modal for editing.
     - Implement swipe gestures for tag removal and addition.
   - **Acceptance Criteria**: Users can correct tags; saves to next step; uses Zustand for state management.
   - **Effort**: 1 week.

4. **Epic: Basic Privacy & Sharing Decision**
   - **User Story**: As a user, I want to choose whether and how to share my tagged item.
   - **Tasks**:
     - Build modal with [Yes, Share] or [No, Keep Private] using React Native Modal.
     - Add simple privacy tiers: [Public] or [Private] with secure local storage via AsyncStorage.
     - Integrate with confirmation screen for shares and optional reflection prompts.
   - **Acceptance Criteria**: Respects user choice; handles private options gracefully; no data transmission for private.
   - **Effort**: 1 week.

5. **Epic: Notifications & Basic Badges**
   - **User Story**: As a user, I want to receive notifications and badges for my shares.
   - **Tasks**:
     - Implement in-app notification banner for finds using local state.
     - Create basic badge system (e.g., "Item Shared") stored in AsyncStorage.
     - Add push notifications with opt-in via @react-native-firebase/messaging.
   - **Acceptance Criteria**: Motivates sharing; enhances community feel; respects opt-in preferences.
   - **Effort**: 1 week.

6. **Epic: Notifications & Basic Badges**
   - **User Story**: As a user, I want to receive notifications and badges for my shares.
   - **Tasks**:
     - Implement in-app notification banner for finds using local state.
     - Create basic badge system (e.g., "Item Shared") stored in AsyncStorage.
     - Add push notifications with opt-in via @react-native-firebase/messaging.
   - **Acceptance Criteria**: Motivates sharing; enhances community feel; respects opt-in preferences.
   - **Effort**: 1 week.

## Additional Epics (Post-MVP)

These epics build on the MVP, adding advanced features for better UX. Implement in phases based on user feedback.

1. **Epic: Accessibility Enhancements**
   - **User Story**: As an elderly user, I want voice-guided and accessible interactions.
   - **Tasks**:
     - Add voice guidance toggle and guided capture using react-native-tts for TTS.
     - Integrate screen reader support and larger targets (>44px) with React Native accessibility props.
     - Implement haptic feedback for confirmations via React Native Vibration.
   - **Acceptance Criteria**: Inclusive for all personas; no barriers for Eleanor; supports voice tagging.
   - **Effort**: 2 weeks.

2. **Epic: Advanced AI & Feedback**
   - **User Story**: As a user, I want accurate tags with confidence scores and feedback.
   - **Tasks**:
     - Add confidence scores to tags from TensorFlow.js model.
     - Implement thumbs-up/down feedback for model improvement, stored locally.
     - Integrate voice tagging for multi-modal input using react-native-voice for STT.
   - **Acceptance Criteria**: Improves accuracy for specific items; collects feedback for future enhancements.
   - **Effort**: 3 weeks.

3. **Epic: Expanded Privacy Controls**
   - **User Story**: As a privacy-conscious user, I want granular sharing options.
   - **Tasks**:
     - Expand to [Anonymous] and [Community-Only] tiers with secure storage.
     - Add expiration timers using setTimeout/setInterval and opt-in notifications.
     - Include reflection prompts for emotional support via conditional rendering.
   - **Acceptance Criteria**: Full control for sensitive shares; respects privacy preferences.
   - **Effort**: 2 weeks.

4. **Epic: Personalized Gamification**
   - **User Story**: As a user, I want personalized badges and nudges for motivation.
   - **Tasks**:
     - Create persona-specific badges (e.g., "Memory Keeper") stored in AsyncStorage.
     - Add gentle nudges for private options using conditional notifications.
     - Implement optional reflection prompts for emotional support.
   - **Acceptance Criteria**: Increases engagement without pressure; personalized for personas.
   - **Effort**: 2 weeks.

5. **Epic: Advanced Analytics**
   - **User Story**: As a user, I want advanced analytics to understand my sharing habits.
   - **Tasks**:
     - Integrate with confirmation screen for shares and optional reflection prompts.
    - **Acceptance Criteria**: Respects user choice; handles private options gracefully; no data transmission for private.
    - **Effort**: 1 week.

## Implementation Plan

- **Sprint Structure**: MVP epics in 4 sprints (6-8 weeks); additional in 3-4 sprints (8-12 weeks).
- **Dependencies**: AI epic before feedback; privacy before expanded controls.
- **Testing**: End-to-end for each epic with persona scenarios using Jest and Detox.
- **Risks**: AI accuracy delays MVP; mitigate with basic models.

## System Design Overview

- **Architecture**: Modular React Native app with component-based screens (e.g., CameraScreen, TagEditScreen). Use hooks for state/logic separation.
- **Data Flow**: Local-first (AsyncStorage for photos, tags, badges); optional server integration for post-MVP (e.g., feedback data syncing).
- **Scalability**: Epics as independent modules for sprint-based development (MVP in 4 sprints, post-MVP in 3-4).
- **Security/Privacy**: On-device processing with encryption; no mandatory data transmission.
- **Performance**: Optimize for mobile (lazy-load ML models, efficient gestures).
- **Dependencies**: Align with React Native CLI, TypeScript, NativeWind.

## Proposed Solutions

### Solution 1: Native React Native with Custom Modules (Minimal Dependencies)

- **Description**: Use pure React Native CLI with custom native modules for camera/ML. Leverage built-in APIs for notifications/haptics.
- **Pros**: High performance, cost-effective, full control.
- **Cons**: Development complexity, platform-specific bugs.
- **Impact**: Excellent on-device performance; low cost but higher initial effort.

### Solution 3: Hybrid with Third-Party Libraries and Cloud Fallback (Balanced Scalability)

- **Description**: Mix libraries with optional cloud for AI (e.g., Firebase ML fallback).
- **Pros**: Flexibility, community support, scalability.
- **Cons**: Dependency bloat, privacy risks.
- **Impact**: Balanced performance; moderate cost, higher complexity.

## Recommendation

**Recommended Solution: Solution 1 (Native React Native with Custom Modules)**. This aligns with the project's React Native CLI setup and privacy emphasis, ensuring high performance for on-device AI and low costs. It supports the sprint structure and allows easy post-MVP enhancements. Start with MVP epics, testing on mid-tier devices. If needed, pivot to Solution 3 for hybrid flexibility.
