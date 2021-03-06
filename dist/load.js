'use strict';

var wait = require('./wait');
var to = require('./to');
var tint = require('./tint');
var shake = require('./shake');
var angle = require('./angle');
var face = require('./face');
var target = require('./target');
var movie = require('./movie');

/**
 * restart an animation = requires a saved state
 * @param {object} object(s) to animate
 */
function load(object, load) {
    if (!load) {
        return null;
    }
    var options = { load: load };
    switch (load.type) {
        case 'Wait':
            return new wait(object, options);
        case 'To':
            return new to(object, null, null, options);
        case 'Tint':
            return new tint(object, null, null, options);
        case 'Shake':
            return new shake(object, null, null, options);
        case 'Angle':
            return new angle(object, null, null, null, options);
        case 'Face':
            return new face(object[0], object[1], null, options);
        case 'Target':
            return new target(object[0], object[1], null, options);
        case 'Movie':
            return new movie(object, object[1], null, options);
    }
}

module.exports = load;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkLmpzIl0sIm5hbWVzIjpbIndhaXQiLCJyZXF1aXJlIiwidG8iLCJ0aW50Iiwic2hha2UiLCJhbmdsZSIsImZhY2UiLCJ0YXJnZXQiLCJtb3ZpZSIsImxvYWQiLCJvYmplY3QiLCJvcHRpb25zIiwidHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsT0FBT0MsUUFBUSxRQUFSLENBQWI7QUFDQSxJQUFNQyxLQUFLRCxRQUFRLE1BQVIsQ0FBWDtBQUNBLElBQU1FLE9BQU9GLFFBQVEsUUFBUixDQUFiO0FBQ0EsSUFBTUcsUUFBUUgsUUFBUSxTQUFSLENBQWQ7QUFDQSxJQUFNSSxRQUFRSixRQUFRLFNBQVIsQ0FBZDtBQUNBLElBQU1LLE9BQU9MLFFBQVEsUUFBUixDQUFiO0FBQ0EsSUFBTU0sU0FBU04sUUFBUSxVQUFSLENBQWY7QUFDQSxJQUFNTyxRQUFRUCxRQUFRLFNBQVIsQ0FBZDs7QUFFQTs7OztBQUlBLFNBQVNRLElBQVQsQ0FBY0MsTUFBZCxFQUFzQkQsSUFBdEIsRUFDQTtBQUNJLFFBQUksQ0FBQ0EsSUFBTCxFQUNBO0FBQ0ksZUFBTyxJQUFQO0FBQ0g7QUFDRCxRQUFNRSxVQUFVLEVBQUVGLFVBQUYsRUFBaEI7QUFDQSxZQUFRQSxLQUFLRyxJQUFiO0FBRUksYUFBSyxNQUFMO0FBQ0ksbUJBQU8sSUFBSVosSUFBSixDQUFTVSxNQUFULEVBQWlCQyxPQUFqQixDQUFQO0FBQ0osYUFBSyxJQUFMO0FBQ0ksbUJBQU8sSUFBSVQsRUFBSixDQUFPUSxNQUFQLEVBQWUsSUFBZixFQUFxQixJQUFyQixFQUEyQkMsT0FBM0IsQ0FBUDtBQUNKLGFBQUssTUFBTDtBQUNJLG1CQUFPLElBQUlSLElBQUosQ0FBU08sTUFBVCxFQUFpQixJQUFqQixFQUF1QixJQUF2QixFQUE2QkMsT0FBN0IsQ0FBUDtBQUNKLGFBQUssT0FBTDtBQUNJLG1CQUFPLElBQUlQLEtBQUosQ0FBVU0sTUFBVixFQUFrQixJQUFsQixFQUF3QixJQUF4QixFQUE4QkMsT0FBOUIsQ0FBUDtBQUNKLGFBQUssT0FBTDtBQUNJLG1CQUFPLElBQUlOLEtBQUosQ0FBVUssTUFBVixFQUFrQixJQUFsQixFQUF3QixJQUF4QixFQUE4QixJQUE5QixFQUFvQ0MsT0FBcEMsQ0FBUDtBQUNKLGFBQUssTUFBTDtBQUNJLG1CQUFPLElBQUlMLElBQUosQ0FBU0ksT0FBTyxDQUFQLENBQVQsRUFBb0JBLE9BQU8sQ0FBUCxDQUFwQixFQUErQixJQUEvQixFQUFxQ0MsT0FBckMsQ0FBUDtBQUNKLGFBQUssUUFBTDtBQUNJLG1CQUFPLElBQUlKLE1BQUosQ0FBV0csT0FBTyxDQUFQLENBQVgsRUFBc0JBLE9BQU8sQ0FBUCxDQUF0QixFQUFpQyxJQUFqQyxFQUF1Q0MsT0FBdkMsQ0FBUDtBQUNKLGFBQUssT0FBTDtBQUNJLG1CQUFPLElBQUlILEtBQUosQ0FBVUUsTUFBVixFQUFrQkEsT0FBTyxDQUFQLENBQWxCLEVBQTZCLElBQTdCLEVBQW1DQyxPQUFuQyxDQUFQO0FBakJSO0FBbUJIOztBQUVERSxPQUFPQyxPQUFQLEdBQWlCTCxJQUFqQiIsImZpbGUiOiJsb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgd2FpdCA9IHJlcXVpcmUoJy4vd2FpdCcpXG5jb25zdCB0byA9IHJlcXVpcmUoJy4vdG8nKVxuY29uc3QgdGludCA9IHJlcXVpcmUoJy4vdGludCcpXG5jb25zdCBzaGFrZSA9IHJlcXVpcmUoJy4vc2hha2UnKVxuY29uc3QgYW5nbGUgPSByZXF1aXJlKCcuL2FuZ2xlJylcbmNvbnN0IGZhY2UgPSByZXF1aXJlKCcuL2ZhY2UnKVxuY29uc3QgdGFyZ2V0ID0gcmVxdWlyZSgnLi90YXJnZXQnKVxuY29uc3QgbW92aWUgPSByZXF1aXJlKCcuL21vdmllJylcblxuLyoqXG4gKiByZXN0YXJ0IGFuIGFuaW1hdGlvbiA9IHJlcXVpcmVzIGEgc2F2ZWQgc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3QocykgdG8gYW5pbWF0ZVxuICovXG5mdW5jdGlvbiBsb2FkKG9iamVjdCwgbG9hZClcbntcbiAgICBpZiAoIWxvYWQpXG4gICAge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBjb25zdCBvcHRpb25zID0geyBsb2FkIH1cbiAgICBzd2l0Y2ggKGxvYWQudHlwZSlcbiAgICB7XG4gICAgICAgIGNhc2UgJ1dhaXQnOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyB3YWl0KG9iamVjdCwgb3B0aW9ucylcbiAgICAgICAgY2FzZSAnVG8nOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyB0byhvYmplY3QsIG51bGwsIG51bGwsIG9wdGlvbnMpXG4gICAgICAgIGNhc2UgJ1RpbnQnOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyB0aW50KG9iamVjdCwgbnVsbCwgbnVsbCwgb3B0aW9ucylcbiAgICAgICAgY2FzZSAnU2hha2UnOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBzaGFrZShvYmplY3QsIG51bGwsIG51bGwsIG9wdGlvbnMpXG4gICAgICAgIGNhc2UgJ0FuZ2xlJzpcbiAgICAgICAgICAgIHJldHVybiBuZXcgYW5nbGUob2JqZWN0LCBudWxsLCBudWxsLCBudWxsLCBvcHRpb25zKVxuICAgICAgICBjYXNlICdGYWNlJzpcbiAgICAgICAgICAgIHJldHVybiBuZXcgZmFjZShvYmplY3RbMF0sIG9iamVjdFsxXSwgbnVsbCwgb3B0aW9ucylcbiAgICAgICAgY2FzZSAnVGFyZ2V0JzpcbiAgICAgICAgICAgIHJldHVybiBuZXcgdGFyZ2V0KG9iamVjdFswXSwgb2JqZWN0WzFdLCBudWxsLCBvcHRpb25zKVxuICAgICAgICBjYXNlICdNb3ZpZSc6XG4gICAgICAgICAgICByZXR1cm4gbmV3IG1vdmllKG9iamVjdCwgb2JqZWN0WzFdLCBudWxsLCBvcHRpb25zKVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsb2FkIl19