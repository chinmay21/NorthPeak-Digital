import React from 'react'

const ContactSection = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        console.log(data);

        e.target.reset();
    }

  return (
    <section id="contact-section">
      <div className="flex flex-col lg:flex-row items-center justify-around gap-15 bg-[#004643] text-[#FAFAFA] text-center mt-15 px-6 py-20">

        <div className="flex flex-col gap-8 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-semibold">
            LET'S BUILD SOMETHING GREAT.
          </h2>

          <p className="text-lg md:text-xl font-semibold">
            Have a project in mind? Tell us what you're working on.
          </p>

          <p className="text-lg font-semibold">
            We would love to hear from you.
          </p>
        </div>


        <div className="w-full max-w-xl bg-[#FAFAFA] rounded-lg px-6 md:px-12 py-10 text-[#004643]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            <div className="flex flex-col gap-2 text-left">
              <label
                className="text-lg font-semibold"
                htmlFor="name"
              >
                Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                required
                pattern="[A-Za-z ]+"
                title='Name can only contain letters'
                className="w-full outline-none border border-[#004643] rounded-lg px-3 py-2"
              />
            </div>

            <div className="flex flex-col gap-2 text-left">
              <label
                className="text-lg font-semibold"
                htmlFor="email"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full outline-none border border-[#004643] rounded-lg px-3 py-2"
              />
            </div>

            <div className="flex flex-col gap-2 text-left">
              <label
                className="text-lg font-semibold"
                htmlFor="company"
              >
                Company
              </label>

              <input
                type="text"
                id="company"
                name="company"
                className="w-full outline-none border border-[#004643] rounded-lg px-3 py-2"
              />
            </div>

            <div className="flex flex-col gap-2 text-left">
              <label
                className="text-lg font-semibold"
                htmlFor="message"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Please write your message here"
                required
                rows="5"
                className="w-full outline-none border border-[#004643] rounded-lg px-3 py-2 resize-none"
              />
            </div>

            <button
              className="bg-[#004643] text-[#FAFAFA] py-3 rounded-lg hover:cursor-pointer hover:opacity-80 transition-all duration-300"
              type="submit"
            >
              Submit
            </button>

          </form>
        </div>

      </div>
    </section>
  )
}

export default ContactSection