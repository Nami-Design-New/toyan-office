import React from "react";

const AskService = () => {
  return (
    <section className="ask_service">
      <div className="ask_descrip">
        <h3>مراحل طلب الخدمة</h3>
        <ol>
          <li>سيتم التواصل مع مقدم طلب الخدمة من قبل خدمة العملاء.</li>
          <li>
            سيقوم ممثلي خدمة العملاء بالحصول بيانات ومعلومات الخدمة من خلالكم ثم
            نقدم لكم العرض الفني والمالي للخدمة.
          </li>
          <li>
            {" "}بعد موافقتكم على العرض المالي والفني يتم تحويل العرض الفني
            للقسم المختص للبدء في تنفيذه فورا.
          </li>
          <li> بعد اعداد الخدمة من قبل القسم المختص يتم التدقيق والمراجعة.</li>
          <li>
            من ثم يتم ارسالها للعميل، وتجري عملية خدمة العملاء ما بعد البيع.
          </li>
        </ol>
      </div>
      <div className="ask_form">
        <h3>ارسل طلبك الان</h3>
        <form action="">
          <input type="text" name="name" placeholder="الاسم" required />
          <input
            type="email"
            name="email"
            placeholder="البريد الالكتروني"
            required
          />
          <input type="tel" name="phone" placeholder="رقم الهاتف" required />
          <input
            type="text"
            name="service-type"
            placeholder="نوع الخدمة"
            required
          />
          <textarea name="message" placeholder="محتوى رسالتك" required />
          <button type="submit">إرسال</button>
        </form>
      </div>
    </section>
  );
};

export default AskService;
