import { useState, useEffect } from "react";

export default function RSVPForm() {
  const [answers, setAnswers] = useState({
    fullName: "",
    attending: "",
    sponsor: "",
    guestName: "",
    message: "",
  });
  const [stepIndex, setStepIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false); // NEW: track submission

  // Enforce RSVP conditions
  useEffect(() => {
    if (answers.attending === "No") {
      setAnswers((prev) => ({ ...prev, sponsor: "", guestName: "" }));
    } else if (answers.sponsor === "No") {
      setAnswers((prev) => ({ ...prev, guestName: "" }));
    }
  }, [answers.attending, answers.sponsor]);

  const steps = [
    "fullNameAttending",
    ...(answers.attending === "Yes" ? ["sponsor"] : []),
    ...(answers.attending === "Yes" && answers.sponsor === "Yes" ? ["guestName"] : []),
    "message",
  ];
  const currentStep = steps[stepIndex];

  const handleNext = () => {
    if (stepIndex < steps.length - 1) setStepIndex(stepIndex + 1);
  };
  const handleBack = () => {
    if (stepIndex > 0) setStepIndex(stepIndex - 1);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("entry.388601811", answers.fullName);
    formData.append("entry.2028952766", answers.attending);
    formData.append("entry.1781638559", answers.sponsor);
    formData.append("entry.992981177", answers.guestName);
    formData.append("entry.820567907", answers.message);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdcIlp7v4gt3e3xZqGFikHfaHvNwsfsQitHGFvmakxt9Dmhiw/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );

      // Mark as submitted
      setSubmitted(true);
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
  };

  // Reset form to allow another submission
  const resetForm = () => {
    setAnswers({
      fullName: "",
      attending: "",
      sponsor: "",
      guestName: "",
      message: "",
    });
    setStepIndex(0);
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-[#545454] flex flex-col items-center justify-start pt-20 px-6 text-gray-700 font-sans">
      {/* Header Section */}
      <header className="text-center max-w-lg mb-12">
        <p className="text-xs uppercase tracking-widest text-white/50 mb-2 font-semibold">
          You're Invited
        </p>
        <h1 className="text-white font-[SparklingValentine]! lg:text-6xl text-4xl font-normal leading-tight mb-2">
          Wedding RSVP
        </h1>
        <p className="font-serif italic text-lg text-white/50 leading-relaxed">
          We can’t wait to celebrate this special day with you, and would be so grateful to receive your response on or before April 01, 2026
        </p>
        <p className="font-serif italic text-lg text-white/50 leading-relaxed">
          Kindly reply at your earliest convenience
        </p>
      </header>

      {/* Divider */}
      <div className="flex justify-center my-10 text-gray-400 text-xl select-none">
        ✦
      </div>

      {/* Form Section or Success Message */}
      {submitted ? (
        <div className="w-full max-w-md bg-gray-800 rounded-xl p-8 text-center shadow-lg border border-gray-600 text-white">
          <div className="text-6xl mb-4">💌</div>
          <h2 className="text-3xl font-[SparklingValentine]! mb-2">
            Thank you!
          </h2>
          <p className="mb-4 text-gray-200 leading-relaxed">
            Your RSVP has been received. We look forward to celebrating with you!
          </p>
          {/* <button
            onClick={resetForm}
            className="px-6 py-3 bg-[#545454] hover:bg-[#545454]/50 rounded-lg text-white font-semibold transition shadow-md"
          >
            Submit another
          </button> */}
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          onKeyDown={(e) => { if (e.key === "Enter") e.preventDefault(); }}
          className="w-full max-w-md bg-white rounded-xl p-8 space-y-8 shadow-lg border border-gray-300"
        >
          {/* Step 1: Full Name + Attending */}
          {currentStep === "fullNameAttending" && (
            <>
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs uppercase tracking-wide text-gray-600 font-semibold mb-2"
                >
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  placeholder="Your full name"
                  value={answers.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-rose-600"
                />
              </div>

              <div>
                <label
                  htmlFor="attending"
                  className="block text-xs uppercase tracking-wide text-gray-600 font-semibold mb-2"
                >
                  Will you be attending? <span className="text-red-600">*</span>
                </label>
                <select
                  id="attending"
                  name="attending"
                  value={answers.attending}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-rose-600"
                >
                  <option value="">Select an option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </>
          )}

          {/* Step 2: Sponsor */}
          {currentStep === "sponsor" && (
            <div>
              <label
                htmlFor="sponsor"
                className="block text-xs uppercase tracking-wide text-gray-600 font-semibold mb-2"
              >
                Are you a principal sponsor?
              </label>
              <select
                id="sponsor"
                name="sponsor"
                value={answers.sponsor}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-rose-600"
              >
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          )}

          {/* Step 3: Guest Name */}
          {currentStep === "guestName" && (
            <div>
              <label
                htmlFor="guestName"
                className="block text-xs uppercase tracking-wide text-gray-600 font-semibold mb-2"
              >
                Name of Accompanying Guest
              </label>
              <input
                id="guestName"
                name="guestName"
                placeholder="Name of Accompanying Guest"
                value={answers.guestName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-rose-600"
              />
            </div>
          )}

          {/* Step 4: Message */}
          {currentStep === "message" && (
            <div>
              <label
                htmlFor="message"
                className="block text-xs uppercase tracking-wide text-gray-600 font-semibold mb-2"
              >
                Message for the couple
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message for the couple"
                value={answers.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 text-base resize-none focus:outline-none focus:ring-2 focus:ring-rose-600"
              />
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between gap-4">
            {stepIndex > 0 && (
              <span
                onClick={handleBack}
                className="flex-1 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg border border-gray-300 text-gray-800 font-semibold transition"
              >
                Back
              </span>
            )}
            {stepIndex < steps.length - 1 ? (
              <span
                onClick={handleNext}
                className="flex-1 py-3 bg-[#545454] hover:bg-[#545454]/50 rounded-lg text-white font-semibold transition shadow-md"
              >
                Next
              </span>
            ) : (
              <button
                type="submit"
                className="flex-1 py-3 bg-[#545454] hover:bg-[#545454]/50 rounded-lg text-white font-semibold transition shadow-md"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}