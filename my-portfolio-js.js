// Theme Toggle Logic
const darkThemeBtn = document.getElementById('btn-theme-toggle-dark');
const lightThemeBtn = document.getElementById('btn-theme-toggle-light');

function applyTheme(theme) {
    const isDark = theme === 'dark';

    document.documentElement.classList.toggle('dark', isDark);
    darkThemeBtn.classList.toggle('hidden', isDark);
    lightThemeBtn.classList.toggle('hidden', !isDark);

    localStorage.setItem('theme', theme);
}

darkThemeBtn.addEventListener('click', () => applyTheme('dark'));
lightThemeBtn.addEventListener('click', () => applyTheme('light'));

// Initialize Default or Saved Theme
const cachedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(cachedTheme);

// Language Toggle Section DOM Elements
const to_arabic = document.getElementById("btn-lang-toggle-ar");
const to_english = document.getElementById("btn-lang-toggle-en");
const body_id = document.getElementById("portfolio-root");
// Internationalization (i18n) Translation Dictionary Object
const dictionary = {
    // English Localized Resources
    en: {
        profile_name: "Abdulqader Ghallab",
        profile_action_view: "Profile",
        profile_headline: "Full-Stack Developer",
        theme_btn_aria: "Switch Theme Mode",
        lang_btn_aria: "Switch Language",

        menu_btn: "Menu",
        menu_btn_aria: "Toggle navigation menu",
        nav_social_aria: "Social links",
        nav_main_aria: "Main sections",
        nav_skills: "Technical Expertise",
        nav_achievements: "Key Achievements",
        nav_experience: "Professional Journey",
        nav_requests: "Service Requests",
        nav_contact: "Get In Touch",

        completion_rate: "Request Completion",
        last_updated: "Last Updated:",
        last_updated_date: "————",
        status_tracker_title: "Track Your Request",
        reference_id_placeholder: "Reference ID",
        track_btn: "Track",
        select_status: "Request Status",
        reference_id_hint: "Enter your reference ID to check progress.",
        status_rejected: "Rejected",
        status_accepted: "Accepted",
        status_in_progress: "In Progress",
        status_completed: "Completed",
        standalone_notification: "Append \"-ahmg\" to your reference ID to log in as an admin.",
        standalone_pilot: "This is my first standalone project and a personal pilot; all contained data and information are fictional.",
        about_name: "Abdulqader",
        about_desc_1: "is a software engineer who turns complex problems into elegant, high-impact digital products. He blends deep technical craft with a product-first mindset to deliver solutions that scale and put users first. A fast learner and a",
        trusted_collaborator: "trusted collaborator",
        valuable_contributor: "he consistently drives real value on ambitious, high-stakes projects.",

        skills_title: "Technical Expertise",
        skills_programming: "Programming Languages:",
        skills_web: "Web Technologies:",
        skills_db: "Database Management:",
        skills_tools: "DevOps & Tools:",

        achievements_title: "Key Milestones",
        achievement_1: "Launched a mobile app now serving 100,000+ active users.",
        achievement_2: "Core contributor to open-source projects with 500+ GitHub stars.",
        achievement_3: "Certified Professional Software Developer, globally accredited.",

        table_role: "Professional Role",
        table_company: "Organization",
        table_duration: "Tenure",
        role_1: "Front-End Developer",
        company_1: "Future Digital Co.",
        duration_1: "2016 - 2018",
        role_2: "Systems Engineer",
        company_2: "Smart Solutions",
        duration_2: "2018 - 2021",
        role_3: "Software Development Lead",
        company_3: "Global Innovation Corp.",
        duration_3: "2021 - 2024",

        form_aria: "Project Inquiry Form",
        form_title: "Start Your Project",
        project_name_label: "Project Name:",
        project_name_placeholder: "Project title",
        project_type_label: "Project Category:",
        project_type_web: "Web Development",
        project_type_mobile: "Mobile Application",
        project_type_software: "Problem Solving",
        project_type_other: "Custom Request",
        other_type_label: "Specify Type:",
        other_type_placeholder: "Specify requirement",
        email_label: "Email Address:",
        email_placeholder: "your@email.com",
        send_btn: "Send",
        verification_label: "Verification Code:",
        otp_placeholder: "Code",
        verify_btn: "Verify",
        price_label: "Estimated Price:",
        price_note: "(By page count)",
        description_label: "Project Brief:",
        description_placeholder: "Describe your goals and requirements...",
        request_note: "Note: Add an alternative contact method in the description if needed.",
        submit_btn: "Submit Request",
        submit_btn_aria: "Submit request",
        status_processing: "Under review...",
        back_btn: "Back",
        email_required_message: "Please enter your email first!",
        verification_required_message: "Please enter the verification code first!",
        form_validation_message: "Please fill in all the fields or verify your code validity!",
        request_submit_error_message: "Failed to submit the order. Please try again! ❌",
        otp_sent_success_message: "The verification code has been successfully sent to your email!",
        otp_sent_error_message: "The verification code has not been successfully sent to your email! (My EmailJS credit may have run out.)",
        track_order_empty_message: "Please enter the Reference ID!",
        track_order_not_found_message: "Please check the Reference ID!",
        pages_label: "Pages",
        standalone_form: "Upon clicking \"Submit Request\", all form data will be sent directly to my email in a formatted message.",

        success_title: "Request Submitted",
        success_message: "We've received your request and will get back to you shortly.",
        success_id_label: "Reference ID",
        ok_btn: "Close",
        status_waiting: "Waiting",
        status_never_updated: "————",

        audio_fallback_text: "Your browser does not support the audio element.",
        video_fallback_text: "Your browser does not support the video element.",
        contact_title: "Contact Information",
        footer_email_label: "Email:",
        footer_email_value: "abdelqader@example.com",
        footer_phone_label: "Phone:",
        footer_phone_value: "+966 50 123 4567",
        footer_website_label: "Professional Profile:",
        footer_website_value: "linkedin.com/in/abdelqader",
        scroll_btn_aria: "Scroll to top"
    },
    // Arabic Localized Resources
    ar: {
        profile_name: "عبد القادر غلاب",
        profile_action_view: "الملف الشخصي",
        profile_headline: "مطور ويب متكامل",
        theme_btn_aria: "تبديل وضع المظهر",
        lang_btn_aria: "تبديل اللغة",

        menu_btn: "القائمة",
        menu_btn_aria: "تبديل قائمة التنقل",
        nav_social_aria: "روابط التواصل الاجتماعي",
        nav_main_aria: "الأقسام الرئيسية",
        nav_skills: "الخبرات التقنية",
        nav_achievements: "أبرز الإنجازات",
        nav_experience: "المسيرة المهنية",
        nav_requests: "طلبات الخدمة",
        nav_contact: "تواصل معي",

        completion_rate: "نسبة اكتمال الطلب",
        last_updated: "آخر تحديث:",
        last_updated_date: "————",
        status_tracker_title: "تتبع طلبك",
        reference_id_placeholder: "رقم المرجع",
        track_btn: "تتبع",
        select_status: "حالة الطلب",
        reference_id_hint: "أدخل رقم المرجع لمتابعة تقدم مشروعك.",
        status_rejected: "مرفوض",
        status_accepted: "مقبول",
        status_in_progress: "قيد التنفيذ",
        status_completed: "مكتمل",
        standalone_notification: "أضف \"ahmg-\" إلى رقم المرجع لطلبك لتسجيل الدخول كمسؤول.",
        standalone_pilot: "هذا أول مشروع قائم بذاته لي وتجربة شخصية؛ جميع البيانات والمعلومات الواردة فيه خيالية.",
        about_name: "عبد القادر",
        about_desc_1: "مهندس برمجيات يحوّل المشكلات المعقدة إلى منتجات رقمية أنيقة وعالية الأثر. يجمع بين الإتقان التقني والتفكير المتمحور حول المنتج ليقدّم حلولاً قابلة للتوسع تضع المستخدم في الأولوية. متعلّم سريع و",
        trusted_collaborator: "شريك موثوق",
        valuable_contributor: "يضيف قيمة حقيقية في كل مشروع طموح ومعقّد يخوضه.",

        skills_title: "الخبرات التقنية",
        skills_programming: "لغات البرمجة:",
        skills_web: "تقنيات الويب:",
        skills_db: "إدارة قواعد البيانات:",
        skills_tools: "أدوات التطوير والعمليات (DevOps):",

        achievements_title: "أبرز الإنجازات",
        achievement_1: "أطلق تطبيق جوال يخدم اليوم أكثر من 100,000 مستخدم نشط.",
        achievement_2: "مساهم أساسي في مشاريع مفتوحة المصدر تجاوزت 500 نجمة على GitHub.",
        achievement_3: "مطور برمجيات محترف معتمد من جهة عالمية.",

        table_role: "المسمى الوظيفي",
        table_company: "المنظمة / الشركة",
        table_duration: "الفترة الزمنية",
        role_1: "مطور واجهات أمامية",
        company_1: "شركة المستقبل الرقمي",
        duration_1: "2016 - 2018",
        role_2: "مهندس أنظمة",
        company_2: "شركة الحلول الذكية",
        duration_2: "2018 - 2021",
        role_3: "قائد فريق تطوير البرمجيات",
        company_3: "مؤسسة الابتكار العالمي",
        duration_3: "2021 - 2024",

        form_aria: "نموذج استفسار عن مشروع",
        form_title: "ابدأ مشروعك معنا",
        project_name_label: "اسم المشروع:",
        project_name_placeholder: "عنوان المشروع",
        project_type_label: "فئة المشروع:",
        project_type_web: "تطوير الويب",
        project_type_mobile: "تطبيقات الجوال",
        project_type_software: "حل المشكلات البرمجية",
        project_type_other: "طلب مخصص",
        other_type_label: "حدد النوع:",
        other_type_placeholder: "حدد متطلباتك",
        email_label: "البريد الإلكتروني:",
        email_placeholder: "your@email.com",
        send_btn: "إرسال",
        verification_label: "رمز التحقق:",
        otp_placeholder: "الرمز",
        verify_btn: "تحقق",
        price_label: "السعر التقديري:",
        price_note: "(حسب عدد الصفحات)",
        description_label: "ملخص المشروع:",
        description_placeholder: "صف أهداف مشروعك ومتطلباته...",
        request_note: "ملاحظة: أضف وسيلة تواصل بديلة في الوصف إن لزم الأمر.",
        submit_btn: "إرسال الطلب",
        submit_btn_aria: "إرسال الطلب",
        status_processing: "جاري المعالجة...",
        back_btn: "العودة",
        email_required_message: "يرجى إدخال البريد الإلكتروني أولاً!",
        verification_required_message: "يرجى إدخال رمز التحقق أولاً!",
        form_validation_message: "يرجى تعبئة جميع الحقول أو التأكد من صحة كود التحقق!",
        request_submit_error_message: "للأسف، لم يتم تقديم الطلب بنجاح. حاول ثانية! ❌",
        otp_sent_success_message: "تم إرسال كود التحقق بنجاح لبريدك!",
        otp_sent_error_message: "لم يتم إرسال كود التحقق بنجاح لبريدك! (قد يكون رصيدي في خدمة EmailJS قد نفد.)",
        track_order_empty_message: "يرجى إدخال رقم المرجع!",
        track_order_not_found_message: "يرجى التحقق من رقم المرجع!",
        pages_label: "صفحات",
        standalone_form: "عند النقر على زر \"إرسال الطلب\"، سيتم إرسال جميع بيانات النموذج مباشرة إلى بريدي الإلكتروني في رسالة منسّقة.",

        success_title: "تم إرسال طلبك",
        success_message: "استلمنا طلبك وسنتواصل معك في أقرب وقت.",
        success_id_label: "رقم المرجع",
        ok_btn: "إغلاق",
        status_waiting: "قيد الانتظار",
        status_never_updated: "————",

        audio_fallback_text: "متصفحك لا يدعم تشغيل ملفات الصوت.",
        video_fallback_text: "متصفحك لا يدعم تشغيل ملفات الفيديو.",
        contact_title: "معلومات التواصل",
        footer_email_label: "البريد الإلكتروني:",
        footer_email_value: "abdelqader@example.com",
        footer_phone_label: "الهاتف:",
        footer_phone_value: "+966 50 123 4567",
        footer_website_label: "الملف المهني:",
        footer_website_value: "linkedin.com/in/abdelqader",
        scroll_btn_aria: "العودة للأعلى"
    }
};
// Get Current Active Language Helper
function getCurrentLanguage() {
    return localStorage.getItem("language") === "Arabic" ? "ar" : "en";
}

// Get Localized Text Helper with Fallback Strategy
function getLocalizedText(key, fallback = "") {
    const activeLanguage = getCurrentLanguage();
    return dictionary[activeLanguage]?.[key] || dictionary.en[key] || fallback;
}

// Map Request Status Values to Localized Strings
function getLocalizedStatusText(statusValue) {
    const statusKeyMap = {
        rejected: "status_rejected",
        accepted: "status_accepted",
        "in progress": "status_in_progress",
        completed: "status_completed",
        waiting: "status_waiting"
    };

    return getLocalizedText(statusKeyMap[statusValue] || statusValue, statusValue);
}

// DOM Translation Processor for Data Attributes
function translateViewContext(targetLanguage, executionContext = document) {
    const localizationSelector = "[data-i18n], [data-i18n-aria], [data-i18n-placeholder], [data-key], [data-key-value]";
    const translatableElements = executionContext.querySelectorAll(localizationSelector);

    translatableElements.forEach(element => {
        const activeDictionary = dictionary[targetLanguage];
        if (!activeDictionary) return;

        const textRegistryKey = element.dataset.i18n || element.dataset.key || element.dataset.keyValue;
        if (textRegistryKey && (activeDictionary[textRegistryKey] || dictionary.en[textRegistryKey])) {
            element.textContent = activeDictionary[textRegistryKey] || dictionary.en[textRegistryKey];
        }

        if (element.dataset.i18nPlaceholder && activeDictionary[element.dataset.i18nPlaceholder]) {
            element.placeholder = activeDictionary[element.dataset.i18nPlaceholder];
        }

        if (element.dataset.i18nAria && activeDictionary[element.dataset.i18nAria]) {
            element.setAttribute("aria-label", activeDictionary[element.dataset.i18nAria]);
        }
    });
}

// Main Language Switch Handler Pipeline
function dispatchLanguagePipeline(targetLanguage) {
    const isArabicMode = targetLanguage === "ar";

    body_id.dir = isArabicMode ? "rtl" : "ltr";
    document.documentElement.lang = isArabicMode ? "ar" : "en";

    translateViewContext(targetLanguage, document);

    // Dynamic Label Update for Price Bubble
    const pageBubble = document.getElementById("page_bubble");
    const priceRangeInput = document.getElementById("price_range");
    if (pageBubble && priceRangeInput) {
        const totalPagesSelected = Number(priceRangeInput.value);
        const localizedPagesLabel = dictionary[targetLanguage]?.pages_label || dictionary.en.pages_label;
        pageBubble.textContent = `${totalPagesSelected} ${localizedPagesLabel}`;
    }

    // Toggle Language Button Visibility
    to_english.classList.toggle("hidden", !isArabicMode);
    to_arabic.classList.toggle("hidden", isArabicMode);

    localStorage.setItem("language", isArabicMode ? "Arabic" : "English");
}

// Language Switch Event Listeners & Initial Load
to_arabic.addEventListener("click", () => dispatchLanguagePipeline("ar"));
to_english.addEventListener("click", () => dispatchLanguagePipeline("en"));

const persistedLanguageState = localStorage.getItem("language") || "English";
dispatchLanguagePipeline(persistedLanguageState === "Arabic" ? "ar" : "en");

// Project Type Section
const selectProjectTypeElement = document.getElementById("project_type");
const standardOptionsContainer = document.getElementById("field-project-type");
const customRequestWrapper = document.getElementById("custom-request");
const extraOptionsTrigger = document.getElementById("other_options");
const returnToSelectionButton = document.getElementById("back-to-project-type");

// Toggle Between Standard Dropdown and Custom Request Input
function syncCustomRequestView() {
    const isCustomRequest = selectProjectTypeElement.value === "Custom Request";

    standardOptionsContainer.classList.toggle("hidden", isCustomRequest);
    standardOptionsContainer.classList.toggle("flex", !isCustomRequest);
    customRequestWrapper.classList.toggle("hidden", !isCustomRequest);
    customRequestWrapper.classList.toggle("flex", isCustomRequest);

    if (!isCustomRequest) {
        extraOptionsTrigger.value = "";
    }
}

selectProjectTypeElement.addEventListener("change", syncCustomRequestView);
returnToSelectionButton.addEventListener("click", () => {
    selectProjectTypeElement.value = "Web Development";
    syncCustomRequestView();
});
syncCustomRequestView();

// Email Verification & OTP Section
const emailInputGroup = document.getElementById("email-input-group");
const emailInputField = document.getElementById("email");
const sendOtpButton = document.getElementById("send-otp-btn");
const otpVerificationGroup = document.getElementById("otp-input-group");
const otpInputField = document.getElementById("verification_code");
const verifyOtpButton = document.getElementById("verify-otp-btn");
const otpSuccessIcon = document.getElementById("otp-success-icon");
const otpErrorIcon = document.getElementById("otp-error-icon");
const backToEmailButton = document.getElementById("back-to-email");

let generatedVerificationCode;
const emailPayloadContext = {
    email: "",
    verification_code: ""
};

// Switch Views Between Email Input and Verification Code Input
function toggleAuthenticationView(showVerification) {
    if (showVerification) {
        emailInputGroup.classList.add("hidden");
        emailInputGroup.classList.remove("flex");
        otpVerificationGroup.classList.remove("hidden");
        otpVerificationGroup.classList.add("flex");
    } else {
        emailInputGroup.classList.remove("hidden");
        emailInputGroup.classList.add("flex");
        otpVerificationGroup.classList.add("hidden");
        otpVerificationGroup.classList.remove("flex");
    }
}

// Generate OTP Code and Send via EmailJS Service
function executeEmailDeliveryPipeline(templateId) {
    generatedVerificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    emailPayloadContext.verification_code = generatedVerificationCode;
    emailPayloadContext.email = emailInputField.value.trim();

    toggleAuthenticationView(true);

    emailjs.send("service_9ocjwzp", templateId, emailPayloadContext)
        .then((response) => {
            alert(getLocalizedText("otp_sent_success_message"));
            console.log("OTP Transmission Success:", response.status, response.text);
        })
        .catch((error) => {
            alert(getLocalizedText("otp_sent_error_message"));
            console.error("OTP Transmission Failure:", error);
            toggleAuthenticationView(false);
        });
}

sendOtpButton.addEventListener("click", (event) => {
    event.preventDefault();

    if (emailInputField.value.trim() === "") {
        alert(getLocalizedText("email_required_message"));
        return;
    }
    executeEmailDeliveryPipeline("template_r1ehuus");
});

// Validate User Entered OTP Code
function validateVerificationToken(event) {
    if (event) event.preventDefault();

    const userInputToken = otpInputField.value.trim();

    if (userInputToken === "") {
        alert(getLocalizedText("verification_required_message"));
        return;
    }

    if (generatedVerificationCode === userInputToken) {
        backToEmailButton.classList.add("hidden");
        verifyOtpButton.classList.add("hidden");
        otpInputField.classList.add("hidden");

        otpSuccessIcon.classList.remove("hidden");
        otpSuccessIcon.classList.add("flex");
        otpInputField.value = "";
    } else {
        verifyOtpButton.disabled = true;

        backToEmailButton.classList.add("hidden");
        verifyOtpButton.classList.add("hidden");
        otpInputField.classList.add("hidden");

        otpErrorIcon.classList.remove("hidden");
        otpErrorIcon.classList.add("flex");
        otpInputField.value = "";

        setTimeout(() => {
            if (emailInputGroup.classList.contains("hidden")) {
                verifyOtpButton.classList.remove("hidden");
                otpInputField.classList.remove("hidden");
                backToEmailButton.classList.remove("hidden");
            }
            otpErrorIcon.classList.add("hidden");
            otpErrorIcon.classList.remove("flex");
            verifyOtpButton.disabled = false;
        }, 3000);
    }
}

verifyOtpButton.addEventListener("click", validateVerificationToken);

backToEmailButton.addEventListener("click", (event) => {
    event.preventDefault();
    otpInputField.value = "";
    toggleAuthenticationView(false);
});

// Price Range Estimator Section
const pageBubbleElement = document.getElementById("page_bubble");
const priceRangeSlider = document.getElementById("price_range");
const priceDisplayLabel = document.getElementById("price_display");

// Synchronize Range Slider Value, Calculation, and Bubble Position
function synchronizeRangePipeline() {
    const totalPagesSelected = Number(priceRangeSlider.value);

    priceDisplayLabel.textContent = `${totalPagesSelected * 20}.00$`;

    const localizedPagesLabel = getLocalizedText("pages_label");
    pageBubbleElement.textContent = totalPagesSelected === 0
        ? `0 ${localizedPagesLabel}`
        : `${totalPagesSelected} ${localizedPagesLabel}`;

    const dynamicPercentOffset = ((totalPagesSelected - 1) / (50 - 1)) * 100;
    pageBubbleElement.style.left = `${dynamicPercentOffset}%`;
}

document.addEventListener("DOMContentLoaded", synchronizeRangePipeline);
priceRangeSlider.addEventListener("input", synchronizeRangePipeline);

// Form Submission & Request Processing Section
const projectDescriptionInput = document.getElementById("description");
const projectNameField = document.getElementById("The_project_name");
const submitRequestButton = document.getElementById("submit-request-btn");
const formStatusOutputNotice = document.getElementById("form-status-output");
const successOverlayTemplate = document.getElementById("success-overlay-template");
const templateRenderAnchor = document.getElementById("replace-me");
const registeredOrderCollection = [];

// Helper to Generate Unique Reference ID Token
function generateReferenceID() {
    const structuralAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const localizedDigits = Math.floor(10000 + Math.random() * 90000);
    const randomizedLetter = structuralAlphabet[Math.floor(Math.random() * structuralAlphabet.length)];

    return `#SEC-${localizedDigits}-${randomizedLetter}`;
}

// Form Submission Event Listener
submitRequestButton.addEventListener("click", (event) => {
    event.preventDefault();

    const operationalTimestamp = new Date();
    const activeReferenceToken = generateReferenceID();

    const requestPayloadContext = {
        project_name: projectNameField.value.trim(),
        project_type: selectProjectTypeElement.value === "Custom Request"
            ? extraOptionsTrigger.value.trim()
            : selectProjectTypeElement.options[selectProjectTypeElement.selectedIndex].text,
        user_email: emailInputField.value.trim(),
        project_price: priceDisplayLabel.textContent,
        page_count: pageBubbleElement.textContent,
        project_description: projectDescriptionInput.value.trim(),
        order_id: activeReferenceToken,
        order_date: operationalTimestamp
    };

    const isCustomProjectType = selectProjectTypeElement.value === "Custom Request";
    const isFormValid = projectNameField.value.trim() !== "" &&
        selectProjectTypeElement.value !== "" &&
        emailInputField.value.trim() !== "" &&
        projectDescriptionInput.value.trim() !== "" &&
        otpSuccessIcon.classList.contains("flex") &&
        (!isCustomProjectType || extraOptionsTrigger.value !== "");

    if (isFormValid) {
        const templateCloneInstance = successOverlayTemplate.content.cloneNode(true);
        const referenceIdDisplay = templateCloneInstance.querySelector("#request-id-display");
        const dismissOverlayButton = templateCloneInstance.querySelector("#dismiss-btn");

        const currentActiveSystemLang = localStorage.getItem("language") === "Arabic" ? "ar" : "en";
        translateViewContext(currentActiveSystemLang, templateCloneInstance);

        referenceIdDisplay.textContent = activeReferenceToken;

        // Reset Form and Restore Views on Overlay Dismiss
        dismissOverlayButton.addEventListener("click", () => {
            templateRenderAnchor.innerHTML = "";
            document.getElementById("request-form").reset();

            priceRangeSlider.value = 0;
            synchronizeRangePipeline();

            otpSuccessIcon.classList.add("hidden");
            otpSuccessIcon.classList.remove("flex");
            otpErrorIcon.classList.add("hidden");
            otpErrorIcon.classList.remove("flex");
            otpInputField.classList.remove("hidden");
            verifyOtpButton.classList.remove("hidden");
            verifyOtpButton.disabled = false;
            backToEmailButton.classList.remove("hidden");
            otpInputField.value = "";
            generatedVerificationCode = undefined;

            toggleAuthenticationView(false);
        });

        formStatusOutputNotice.classList.remove("hidden");
        submitRequestButton.disabled = true;

        // Dispatch Email Payload via EmailJS
        emailjs.send('service_9ocjwzp', 'template_j7bz8ob', requestPayloadContext)
            .then((response) => {
                formStatusOutputNotice.classList.add("hidden");
                submitRequestButton.disabled = false;

                templateRenderAnchor.appendChild(templateCloneInstance);

                registeredOrderCollection.push({ id: activeReferenceToken, status: "waiting", lastUpdated: null });
                console.log("Active Registry State:", registeredOrderCollection);
            })
            .catch((error) => {
                formStatusOutputNotice.classList.add("hidden");
                submitRequestButton.disabled = false;

                alert(getLocalizedText("request_submit_error_message"));
                console.error("Payload Submission Failure Context:", error);
            });
    } else {
        alert(getLocalizedText("form_validation_message"));
    }
});

// Scroll To Top Button Section
const scrollToTopButton = document.getElementById("scrollToTopBtn");

// Toggle Button Visibility Based on Scroll Position
window.addEventListener("scroll", () => {
    const isPastHalfViewport = window.scrollY > (window.innerHeight / 2);
    const isButtonHidden = scrollToTopButton.classList.contains("hidden");

    if (isPastHalfViewport && isButtonHidden) {
        scrollToTopButton.classList.remove("hidden");
        scrollToTopButton.classList.add("flex");
    } else if (!isPastHalfViewport && !isButtonHidden) {
        scrollToTopButton.classList.add("hidden");
        scrollToTopButton.classList.remove("flex");
    }
});

// Smooth Scroll to Top Execution
scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Order Tracking Section
const statusOptionsTemplate = document.getElementById("template-status-options");
const statusDisplayLabel = document.getElementById("request-status");
const lastUpdatedDateField = document.getElementById("last-updated-date");
const referenceIdInputField = document.getElementById("input-reference-id");
const trackStatusRequestBtn = document.getElementById("btn-track-status");
const orderStatusContainer = document.querySelector("#status-options");
const componentProgressCircle = document.getElementById("completion-progress-circle");
const componentPercentageText = document.getElementById("completion-percentage-text");

// Dynamic SVG Progress Circle and Percentage Indicator Updater
function updateProgressCircleComponent(dynamicStatus) {
    if (!componentProgressCircle || !componentPercentageText) return;

    switch (dynamicStatus) {
        case "completed":
            componentProgressCircle.style.strokeDashoffset = 0;
            componentPercentageText.textContent = "100%";
            break;
        case "in progress":
            componentProgressCircle.style.strokeDashoffset = 56.55;
            componentPercentageText.textContent = "75%";
            break;
        case "accepted":
            componentProgressCircle.style.strokeDashoffset = 113.1;
            componentPercentageText.textContent = "50%";
            break;
        case "rejected":
            componentProgressCircle.style.strokeDashoffset = 226.2;
            componentPercentageText.textContent = "0%";
            break;
        case "waiting":
            componentProgressCircle.style.strokeDashoffset = 226.2;
            componentPercentageText.textContent = "0%";
            break;
        default:
            break;
    }
}

// Format and Display Timestamp for Last Status Update
function renderLastUpdated(orderRecord) {
    lastUpdatedDateField.textContent = orderRecord.lastUpdated
        ? orderRecord.lastUpdated.toLocaleString()
        : getLocalizedText("status_never_updated", "————");
}

// Track Request Processing & Admin Privilege Trigger
trackStatusRequestBtn.addEventListener("click", () => {
    const searchTargetToken = referenceIdInputField.value.trim();

    if (searchTargetToken === "") {
        orderStatusContainer.innerHTML = "";
        lastUpdatedDateField.textContent = "————";
        componentProgressCircle.style.strokeDashoffset = 226.2;
        statusDisplayLabel.classList.add("hidden");
        componentPercentageText.textContent = "0%";
        if (!orderStatusContainer.classList.contains("hidden")) { orderStatusContainer.innerHTML = ""; }
        alert(getLocalizedText("track_order_empty_message"));
        return;
    }

    let isRecordLocated = false;

    for (let i = 0; i < registeredOrderCollection.length; i++) {
        const currentOrderRecord = registeredOrderCollection[i];

        // Standard User Query
        if (currentOrderRecord.id === searchTargetToken) {
            orderStatusContainer.innerHTML = "";
            statusDisplayLabel.textContent = getLocalizedStatusText(currentOrderRecord.status);
            statusDisplayLabel.classList.remove("hidden");

            renderLastUpdated(currentOrderRecord);
            updateProgressCircleComponent(currentOrderRecord.status);
            isRecordLocated = true;
            break;
        }

        // Administrative Mode Access Trigger (-ahmg)
        else if (searchTargetToken === `${currentOrderRecord.id}-ahmg`) {
            orderStatusContainer.innerHTML = "";
            statusDisplayLabel.classList.add("hidden");

            const templateCloneNode = statusOptionsTemplate.content.cloneNode(true);
            const radioRejected = templateCloneNode.querySelector("#status-rejected");
            const radioAccepted = templateCloneNode.querySelector("#status-accepted");
            const radioInProgress = templateCloneNode.querySelector("#status-in-progress");
            const radioCompleted = templateCloneNode.querySelector("#status-completed");

            if (currentOrderRecord.status === "rejected" && radioRejected) radioRejected.checked = true;
            if (currentOrderRecord.status === "accepted" && radioAccepted) radioAccepted.checked = true;
            if (currentOrderRecord.status === "in progress" && radioInProgress) radioInProgress.checked = true;
            if (currentOrderRecord.status === "completed" && radioCompleted) radioCompleted.checked = true;

            const structuralControlGroup = [radioRejected, radioAccepted, radioInProgress, radioCompleted];

            // Listen to Status Modifications in Admin View
            structuralControlGroup.forEach(radioElement => {
                if (radioElement) {
                    radioElement.addEventListener("change", (event) => {
                        const modifiedTargetValue = event.target.value;
                        currentOrderRecord.status = modifiedTargetValue;
                        currentOrderRecord.lastUpdated = new Date();

                        renderLastUpdated(currentOrderRecord);
                        updateProgressCircleComponent(modifiedTargetValue);
                    });
                }
            });

            orderStatusContainer.appendChild(templateCloneNode);
            translateViewContext(getCurrentLanguage(), orderStatusContainer);
            renderLastUpdated(currentOrderRecord);
            updateProgressCircleComponent(currentOrderRecord.status);
            isRecordLocated = true;
            break;
        }
    }

    // Handle Unmatched Reference Tokens
    if (!isRecordLocated || searchTargetToken === "") {
        orderStatusContainer.innerHTML = "";
        lastUpdatedDateField.textContent = "————";
        componentProgressCircle.style.strokeDashoffset = 226.2;
        statusDisplayLabel.classList.add("hidden");
        componentPercentageText.textContent = "0%";
        if (!orderStatusContainer.classList.contains("hidden")) { orderStatusContainer.innerHTML = ""; }
        alert(getLocalizedText("track_order_not_found_message"));
    }
});