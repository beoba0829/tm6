import { useScrollReveal, revealClass, revealTransition } from '@/hooks/useScrollReveal';

export default function AboutUsSection() {
  const { ref: textRef, visible: textVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: imageRef, visible: imageVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="ve-chung-toi"
      className="relative bg-brand-cream px-6 py-20 sm:py-28"
      style={{ scrollMarginTop: '88px' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
          {/* Left: text content */}
          <div
            ref={textRef}
            className={`${revealTransition} ${revealClass(textVisible)}`}
          >
            <p className="font-sans text-xs tracking-[0.3em] text-[#BA7517] uppercase mb-4">
              Giới Thiệu
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-red leading-tight mb-8">
              Giới Thiệu Về ThanhMaiHSK
            </h2>
            <div className="space-y-4">
              <p className="font-sans text-gray-600 leading-relaxed">
                ThanhMaiHSK là trung tâm đào tạo tiếng Trung toàn diện tại Việt Nam
                với 15 năm phát triển, đồng hành cùng 100.000+ học viên và mạng lưới
                20+ cơ sở trên toàn quốc. Chúng tôi định hướng nâng chuẩn đào tạo
                tiếng Trung toàn diện, tập trung vào hiệu quả thực tế và khả năng
                sử dụng ngôn ngữ trong học tập, công việc và môi trường quốc tế.
              </p>
              <p className="font-sans text-gray-600 leading-relaxed">
                Khác với mô hình học chỉ phục vụ thi cử, ThanhMaiHSK xây dựng chương
                trình tiếng Trung học được – hành ngay, giúp người học phát triển
                tiếng Trung toàn diện: Nghe – Nói – Đọc – Viết – Dịch, tiếng Trung
                chuyên ngành và các khóa học giao tiếp liên văn hóa, từ đó tự tin sử
                dụng tiếng Trung trong giao tiếp, học tập và công việc. Chương trình
                đào tạo được thiết kế phù hợp với nhiều nhu cầu khác nhau như tiếng
                Trung cho người mới bắt đầu, tiếng Trung người đi du học, tiếng
                Trung cho người đi làm, tiếng Trung doanh nghiệp, tiếng Trung phổ
                thông các cấp và các chương trình đào tạo tiếng Trung phiên dịch
                chuyên sâu.
              </p>
              <p className="font-sans text-gray-600 leading-relaxed">
                Đồng thời, chương trình cũng được thiết kế bám sát các chuẩn đánh
                giá kỹ năng sử dụng ngôn ngữ như khung năng lực tiếng Trung 6 bậc
                của Việt Nam, và HSK 3.0,… giúp người học vừa nâng cao năng lực sử
                dụng ngôn ngữ thực tế vừa đạt kết quả tốt trong các kỳ thi chứng chỉ.
              </p>
            </div>
          </div>

          {/* Right: image with decorative framing */}
          <div
            ref={imageRef}
            className={`relative flex justify-center lg:justify-end ${revealTransition} ${revealClass(imageVisible)}`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="relative w-full max-w-[420px]">
              {/* Offset gold border */}
              <div
                className="absolute inset-0 border-2 border-[#BA7517]/60 rounded-xl translate-x-4 translate-y-4"
                aria-hidden
              />
              {/* Image container */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/15">
                <img
                  src="https://res.cloudinary.com/qugyphlv/image/upload/v1789264685/team_6.jpg"
                  alt="Đội ngũ ThanhMaiHSK"
                  className="w-full h-[480px] sm:h-[560px] object-cover"
                />
              </div>
              {/* Red seal stamp accent — bottom-left corner */}
              <img
                src="https://res.cloudinary.com/qugyphlv/image/upload/v1789009070/dau-an-removebg-preview.png"
                alt="Ấn triện ThanhMaiHSK"
                className="absolute -bottom-4 -left-4 w-[80px] h-[80px] object-contain rotate-[-12deg] drop-shadow-lg z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
