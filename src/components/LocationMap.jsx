export default function LocationMap() {
    return (
      <div className="w-full h-[450px] overflow-hidden rounded-md shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.147571270381!2d3.352002075041172!3d6.6285860933657625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93a6efc8020b%3A0xc54c73f5da9063e6!2sAll%20Season%20Plaza!5e0!3m2!1sen!2suk!4v1747777343473!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="All Season Plaza Location"
        ></iframe>
      </div>
    );
  }
  