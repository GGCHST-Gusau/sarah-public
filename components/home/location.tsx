const Location = () => {
  return (
    <div className="w-full rounded-3xl overflow-hidden border-4 border-primary/20 shadow-lg">
      <iframe
        title="School Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.444520448134!2d6.6534571!3d12.176214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11933f7c9e0d9b4b%3A0x7d9f7b6b6b6b6b6b!2sGusau!5e0!3m2!1sen!2sng!4v1234567890" // Replace with your actual school location URL
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="grayscale-[0.2] contrast-[1.1] min-h-100"
      />
    </div>
  );
};

export default Location;
