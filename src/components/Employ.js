import React from "react";
import News from "./News";
const Employ = () => {
  return (
    <React.Fragment>
      <header className="employ_header">
        <div className="image" />
        <div className="path_desc">
          <h2>
            <span>التوظيف/</span>نبحث دائماً عن موظفين على قدرٍ عالٍ من الكفاءة
            يعملون بجد واجتهاد لتحقيق أفضل النتائج.
          </h2>
        </div>
      </header>
      <section className="employ_form">
        <h3>قدم على وظيفتك</h3>
        <form action="">
          <input type="text" name="name" placeholder="الاسم كاملاً" required />
          <input
            type="email"
            name="email"
            placeholder="البريد الالكتروني"
            required
          />
          <input type="tel" name="phone" placeholder="رقم الهاتف" required />
          <div className="file_feild">
            <p>رفع السيرة الذاتية</p>
            <input
              required
              type="file"
              name="file"
              className="file_in"
              placeholder="رفع السيرة الذاتية"
              accept="application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            />
          </div>
          <textarea name="message" placeholder="رسالة" required />
          <button type="submit">إرسال</button>
        </form>
      </section>
      <News />
    </React.Fragment>
  );
};

export default Employ;

// <label htmlFor="file-uploud" className="choose">
//   اختيار ملف
// </label>
