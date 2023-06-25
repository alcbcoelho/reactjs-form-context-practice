export default function NewContactForm() {
  return (
    <form>
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" />
      </div>

      <div>
        <label htmlFor="phone">Phone number: </label>
        <input type="tel" id="phone" />
      </div>

      <button>Add</button>
    </form>
  );
}
