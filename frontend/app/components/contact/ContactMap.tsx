export default function ContactMap() {
  return (
    <section className="px-6 md:px-15 pb-16 bg-[#FFFBF5]">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl p-4 md:p-6 shadow-sm border border-orange-100/40 overflow-hidden">
        <div className="w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.8366925259015!2d80.5268608!3d7.259419299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae36bea20711247%3A0x10926fd2273667ca!2sCloudwave%20PVT%20Ltd!5e0!3m2!1sen!2slk!4v1789802317488!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </section>
  );
}