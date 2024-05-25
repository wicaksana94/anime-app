# Explanation

## Design Decisions

1. **Component-based Architecture**: Components are reusable and modular, which makes the code easier to maintain and scale.
2. **CSS Modules with BEM**: Using CSS modules ensures that styles are scoped locally, avoiding conflicts. BEM naming convention makes the CSS more readable and maintainable.
3. **Pagination**: Implemented client-side pagination to improve the user experience by not loading all anime at once.
4. **Search Functionality**: Allows users to easily find anime by their title.
5. **Server-side Rendering**: For the anime detail page to ensure SEO and better performance.

## Optional Enhancements

1. **Caching**: To reduce API calls and improve performance.
2. **Offline Capability**: Using service workers to make the app usable offline.
3. **Responsive Design**: Ensuring the app works well on all devices.
4. **Containerization**: Dockerizing the app for easier deployment.
