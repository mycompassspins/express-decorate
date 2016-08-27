"use strict";
function RouteConfig(app) {
    app.route('/test')
        .get((req, res, next) => {
        return res.json({ success: true, message: 'Successfully served route /test' });
    });
}
exports.RouteConfig = RouteConfig;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvYXBpL1JvdXRlQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFPQSxxQkFBNEIsR0FBdUI7SUFFbEQsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7U0FDaEIsR0FBRyxDQUFDLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjtRQUVwRCxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLENBQUMsQ0FBQztJQUNoRixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFQZSxtQkFBVyxjQU8xQixDQUFBIiwiZmlsZSI6InRlc3QvYXBpL1JvdXRlQ29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEp1c3RpbiBvbiA4LzIxLzE2LlxuICovXG5cbmltcG9ydCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuaW1wb3J0IHsgSVJlcXVlc3QsIElSZXNwb25zZSwgSU5leHRGdW5jdGlvbiB9IGZyb20gJy4vVGVzdE1pZGRsZXdhcmUnXG5cbmV4cG9ydCBmdW5jdGlvbiBSb3V0ZUNvbmZpZyhhcHA6ZXhwcmVzcy5BcHBsaWNhdGlvbik6dm9pZFxue1xuXHRhcHAucm91dGUoJy90ZXN0Jylcblx0XHQuZ2V0KChyZXE6SVJlcXVlc3QsIHJlczpJUmVzcG9uc2UsIG5leHQ6SU5leHRGdW5jdGlvbikgPT5cblx0XHR7XG5cdFx0XHRyZXR1cm4gcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnU3VjY2Vzc2Z1bGx5IHNlcnZlZCByb3V0ZSAvdGVzdCcgfSk7XG5cdFx0fSk7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
