# Refactoring Notes

## Current Architecture

- `src/bot.js` - Main bot initialization
- `src/handlers.js` - Message handlers
- `src/booking.js` - Booking logic
- `src/calendar.js` - Calendar integration
- `src/db.js` - Database operations
- `src/api.js` - External API calls

## Refactoring Goals

1. **Separation of Concerns**
   - Split handlers into separate modules
   - Create service layer
   - Implement repository pattern

2. **Error Handling**
   - Add global error handler
   - Implement retry logic
   - Add logging

3. **Testing**
   - Add unit tests
   - Add integration tests
   - Add E2E tests

4. **Documentation**
   - Add JSDoc comments
   - Create API documentation
   - Add usage examples

## Proposed Structure

```
src/
  bot/
    index.js
    handlers/
      index.js
      booking.js
      admin.js
      user.js
    services/
      booking.js
      calendar.js
      user.js
    repositories/
      booking.js
      user.js
    middleware/
      auth.js
      logging.js
    utils/
      logger.js
      errors.js
```

## Next Steps

1. Create service layer
2. Add error handling
3. Write tests
4. Update documentation