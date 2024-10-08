
const NewsletterBox = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault()
  }


  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get <span className="font-bold">20% off</span>
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input
          type="text"
          placeholder="Enter your email"
          className="w-full sm:flex-1 outline-none"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;