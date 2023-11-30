function Button() {
  return (
    <div className="flex gap-3 flex-col">
      <div className="flex gap-3">
        <button className="w-28 h-7 rounded-lg bg-gray-200">React</button>
        <button className="w-28 h-7 rounded-lg bg-gray-200">Next.js</button>
        <button className="w-28 h-7 rounded-lg bg-gray-200">Typescript</button>
        <button className="w-28 h-7 rounded-lg bg-gray-200">Nest.js</button>
      </div>
      <div className="flex gap-3">
        <button className="w-28 h-7 rounded-lg bg-gray-200">PostgreSQL</button>
        <button className="w-28 h-7 rounded-lg bg-gray-200">Tailwindcss</button>
        <button className="w-28 h-7 rounded-lg bg-gray-200">Figma</button>
        <button className="w-28 h-7 rounded-lg bg-gray-200">Cypress</button>
      </div>
      <div className="flex gap-3">
        <button className="w-28 h-7 rounded-lg bg-gray-200">Storybook</button>
        <button className="w-28 h-7 rounded-lg bg-gray-200">Git</button>
      </div>
    </div>
  );
}
export default Button;
