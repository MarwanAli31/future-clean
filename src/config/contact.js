/**
 * ============================================================
 *  EDIT ME: all contact details live here, and nowhere else.
 *  Every WhatsApp button in the site imports WHATSAPP_NUMBER
 *  and WHATSAPP_MESSAGE from this one file.
 * ============================================================
 */

// 👉 حط رقم الواتساب بتاعك هنا (كود الدولة، من غير + أو مسافات)
export const WHATSAPP_NUMBER = "+201067947884";

// 👉 الرسالة الافتراضية اللي هتظهر جاهزة لما حد يدوس على زرار واتساب
export const WHATSAPP_MESSAGE =
  "أهلاً فيوتشر كلين، حابب أسأل عن خدمات التنظيف عندكم.";

// 👉 رقم التليفون اللي هيظهر للاتصال المباشر (ممكن يكون نفس رقم الواتساب)
export const PHONE_NUMBER = "+201067947884";
export const PHONE_NUMBER_TEL = "+201067947884"; // بيتستخدم في رابط الاتصال، من غير مسافات

// 👉 مكان الشركة / منطقة الخدمة اللي هتظهر في الفوتر وقسم التواصل
export const LOCATION = "القاهرة، مصر";

// 👉 مواعيد الشغل اللي هتظهر في قسم التواصل
export const WORKING_HOURS = "السبت – الخميس، 9 صباحًا – 8 مساءً";

/**
 * بيبني رابط wa.me مع رسالة جاهزة ومُرمّزة.
 * تقدر تبعت رسالة مخصصة بدل الرسالة الافتراضية،
 * زي رسالة من كارت خدمة معينة.
 */
export function getWhatsAppUrl(customMessage) {
  const message = encodeURIComponent(customMessage || WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}
