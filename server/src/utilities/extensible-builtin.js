/* es-lint-disable */
export default function ExtendableBuiltin(cls) {
  function ExtendableBuiltin() {
    cls.apply(this, arguments);
  }
  ExtendableBuiltin.prototype = Object.create(cls.prototype);
  Object.setPrototypeOf(ExtendableBuiltin, cls);

  return ExtendableBuiltin;
}
