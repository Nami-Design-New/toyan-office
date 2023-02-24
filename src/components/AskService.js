import React from "react";
import RequestForm from "./RequestForm";

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
        <RequestForm />
      </div>
    </section>
  );
};

export default AskService;
