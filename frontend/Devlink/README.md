/src
  /app
    /auth              # Authentication Module
      /login
      /signup
      /forgot-password
      auth-routing.module.ts
      auth.module.ts

    /core              # Core services and utilities (singleton services)
      /services
        auth.service.ts
        user.service.ts
        notification.service.ts   # For handling notifications and alerts
      /guards
        auth.guard.ts
      /interceptors
        auth.interceptor.ts       # Optional for token handling in HTTP requests
      core.module.ts

    /shared            # Shared reusable components, pipes, and directives
      /components
        sidebar.component.ts      # For left-side menu
        topbar.component.ts       # For top navigation bar
        profile-card.component.ts # For profile view components
      /directives
        hover-effect.directive.ts # Example: reusable UI effects
      /pipes
        format-date.pipe.ts       # For date formatting across the app
      shared.module.ts

    /layout            # Layout module (Main container, lazy loaded)
      /left-side
        sidebar.component.ts      # Left-side menu (Home, Latest News, etc.)
      /right-side
        notification-list.component.ts # Friends and contacts list
      /main-panel
        profile-header.component.ts  # Top user profile section
        timeline.component.ts       # Middle profile timeline
      layout-routing.module.ts
      layout.module.ts

    /home              # Home Module (for Home feed, Latest News, Explore)
      /feed
        feed.component.ts        # Posts on Home page
      /explore
        explore.component.ts     # Explore page
      /gallery
        gallery.component.ts     # Photos and videos section
      home-routing.module.ts
      home.module.ts

    /profile           # Profile Module (User profile, lazy loaded)
      /timeline
        timeline.component.ts
      /about
        about.component.ts
      /friends
        friends.component.ts
      /photos
        photos.component.ts
      profile-routing.module.ts
      profile.module.ts

    /chat              # Chat module (could be lazy loaded)
      /chat-window
        chat-window.component.ts
      chat-routing.module.ts
      chat.module.ts

    /events            # Events module (Lazy loaded)
      /event-list
        event-list.component.ts
      /event-detail
        event-detail.component.ts
      events-routing.module.ts
      events.module.ts

    /settings          # Settings Module (for user preferences)
      /privacy
        privacy-settings.component.ts
      /notification
        notification-settings.component.ts
      settings-routing.module.ts
      settings.module.ts

    /app-routing.module.ts  # Main routing file
    /app.module.ts          # Main app module

