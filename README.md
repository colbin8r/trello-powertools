# Trello PowerTools

Trello PowerTools is a Google Chrome extension that adds extra funcitonality to Trello.

Planned features include:

- Multi-select. Select and edit multiple cards at once.
- Sidebar slideout. Change the sidebar from click-to-toggle to hover mode.
- Smart add. Allow the use of special tags when creating a card to change properties.
- Star cards. Add stars to make special cards stand out.
- Change shortcuts. Edit the keyboard shortcuts to suit your preferences.

## Development Resources

You'll need to have tools like `node` and `npm`, `grunt`, and `bower` handy.

To load the extension into Chrome for development and testing:

1. Visit chrome://extensions
2. Enable Developer Mode via the checkbox in the top-right
3. Drag and drop the "app" directory into Chrome; alternatively, use "Load unpacked extension..." to load the "app" directory
4. `grunt debug`
5. Chrome updates magically as you edit =)

Run the test suite with `grunt test`.