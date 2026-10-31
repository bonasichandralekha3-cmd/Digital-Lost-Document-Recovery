
// ==========================================
// DIGITAL LOST DOCUMENT RECOVERY SYSTEM
// ==========================================

// 1. DOCUMENT LIST

const documents = [
    ["Aadhaar Card", "Identity Document"],
    ["PAN Card", "Identity Document"],
    ["Voter ID", "Identity Document"],
    ["Driving Licence", "Driving Document"],
    ["Passport", "Travel Document"],
    ["Bonafide Certificate", "Educational Certificate"],
    ["SSC Memo", "Educational Certificate"],
    ["Intermediate Memo", "Educational Certificate"],
    ["Graduation Memo / Degree Certificate", "Educational Certificate"],
    ["Marriage Certificate", "Personal Certificate"],
    ["Birth Certificate", "Personal Certificate"],
    ["Death Certificate", "Legal Certificate"],
    ["Income Certificate", "Government Certificate"],
    ["Caste Certificate", "Government Certificate"],
    ["Residence / Domicile Certificate", "Government Certificate"],
    ["EWS Certificate", "Government Certificate"],
    ["Disability Certificate", "Government Certificate"]
];

// 2. HTML ELEMENTS

const documentList = document.getElementById("document-list");
const searchInput = document.getElementById("search");
const details = document.getElementById("document-details");


// 3. RECOVERY GUIDES FOR ALL DOCUMENTS

const guides = {

    "Aadhaar Card": {
        steps: [
            "Visit the official UIDAI website.",
            "Select Retrieve UID/EID.",
            "Enter your registered full name and mobile number or email.",
            "Complete OTP verification.",
            "Receive your Aadhaar number or EID through SMS.",
            "Download your e-Aadhaar from the My Aadhaar portal."
        ],
        requirements: [
            "Full name as registered in Aadhaar.",
            "Registered mobile number or email for OTP verification.",
            "Access to the internet."
        ],
        links: [
            ["Retrieve Lost Aadhaar", "https://myaadhaar.uidai.gov.in/retrieve-eid-uid"],
            ["My Aadhaar Portal", "https://myaadhaar.uidai.gov.in/"],
            ["UIDAI Website", "https://uidai.gov.in/"]
        ],
        note: "If you cannot access your registered mobile number or email, contact UIDAI at 1947 or visit an Aadhaar Enrolment Centre."
    },

    "PAN Card": {
        steps: [
            "Find your existing PAN number if you do not remember it.",
            "Visit the official PAN service provider website.",
            "Choose the Reprint PAN Card option if your PAN details have not changed.",
            "Enter the information requested by the official portal.",
            "Complete the required OTP verification.",
            "Pay the applicable fee, if required, and submit the request.",
            "Track the application using the acknowledgement details."
        ],
        requirements: [
            "Existing PAN number.",
            "Date of birth or incorporation, as applicable.",
            "Registered mobile number or email for verification.",
            "Updated communication address."
        ],
        links: [
            ["Income Tax PAN Services", "https://www.incometaxindia.gov.in/en/tax-services/apply-for-pan"],
            ["Protean PAN Reprint", "https://onlineservices.proteantech.in/paam/ReprintEPan.html"],
            ["Income Tax Portal", "https://www.incometax.gov.in/"]
        ],
        note: "The Protean reprint facility has eligibility conditions. If your PAN was issued through another provider or your details need correction, follow the appropriate PAN application process. Never apply for a second PAN."
    },

    "Voter ID": {
        steps: [
            "Visit the Election Commission Voters Service Portal.",
            "Register or log in to your account.",
            "Select Form 8.",
            "Choose the replacement of EPIC option.",
            "Enter the required voter details.",
            "Upload supporting information if requested.",
            "Submit the application and save the reference number.",
            "Track your application on the portal."
        ],
        requirements: [
            "Voter name and electoral details.",
            "EPIC number, if available.",
            "Registered mobile number.",
            "Supporting information requested by the portal."
        ],
        links: [
            ["Voters Service Portal", "https://voters.eci.gov.in/"],
            ["Form 8", "https://voters.eci.gov.in/home/forms"]
        ],
        note: "Form 8 is used for replacement of EPIC, correction and shifting of residence. Follow the portal instructions for the lost-card case."
    },

    "Driving Licence": {
        steps: [
            "Visit the official Parivahan Sarathi website.",
            "Select your state.",
            "Choose Driving Licence related services.",
            "Select the Duplicate Driving Licence service.",
            "Fill in the application details.",
            "Upload or provide the documents requested.",
            "Pay the prescribed fee.",
            "Complete any RTO verification or appointment required by your state.",
            "Track the application status."
        ],
        requirements: [
            "Driving Licence number, if available.",
            "Identity and address details.",
            "Police report or lost-document information, if required.",
            "Photograph and other documents requested by the RTO."
        ],
        links: [
            ["Parivahan Sarathi Portal", "https://sarathi.parivahan.gov.in/"],
            ["Parivahan Services", "https://parivahan.gov.in/"]
        ],
        note: "The exact procedure and required documents may differ by state. Check the instructions displayed after selecting Telangana."
    },

    "Passport": {
        steps: [
            "Immediately report the lost passport to the nearest police station.",
            "Inform the Passport Office about the loss.",
            "Visit the official Passport Seva website.",
            "Register or log in to your account.",
            "Choose Apply for Re-issue of Passport.",
            "Select the Lost or Stolen Passport option.",
            "Fill in the application details.",
            "Pay the applicable fee and book an appointment.",
            "Visit the Passport Seva Kendra with the required original documents.",
            "Complete the required verification process."
        ],
        requirements: [
            "Police complaint or report regarding the lost passport.",
            "Passport details or photocopy, if available.",
            "Identity and address proof as requested.",
            "Other documents specified by Passport Seva."
        ],
        links: [
            ["Passport Seva Portal", "https://www.passportindia.gov.in/"],
            ["Re-issue of Passport", "https://www.passportindia.gov.in/psp/docAdvisor/selectCaseReissue"]
        ],
        note: "Loss of passport must be reported immediately. Additional documents may be required for lost-passport cases. Passport Seva Helpline: 1800-258-1800."
    },

    "Bonafide Certificate": {
        steps: [
            "Contact your school or college office.",
            "Inform the institution that your Bonafide Certificate has been lost.",
            "Request a duplicate or freshly issued Bonafide Certificate.",
            "Provide your student details and identity information.",
            "Submit the institution's prescribed request form, if required.",
            "Pay any applicable fee.",
            "Collect the certificate or follow the institution's digital issue procedure."
        ],
        requirements: [
            "Student name and admission or roll number.",
            "Course and year of study.",
            "College or school identity card, if available.",
            "Application or request letter."
        ],
        links: [
            ["Sri Indu College Website", "https://www.sriindu.ac.in/"]
        ],
        note: "Bonafide Certificates are issued by the institution where the student is studying. Contact its administration office for the exact procedure."
    },

    "SSC Memo": {
        steps: [
            "Visit the Telangana Directorate of Government Examinations website.",
            "Open the services section.",
            "Check the procedure for a Duplicate SSC Certificate or Memo.",
            "Obtain the prescribed application format.",
            "Prepare the required police or revenue certificate and affidavit, as applicable.",
            "Collect the required school records and examination details.",
            "Submit the application through the prescribed authority.",
            "Pay the applicable fee and follow the department's instructions."
        ],
        requirements: [
            "Candidate name and father's name.",
            "SSC hall ticket number, if available.",
            "Month and year of examination.",
            "School name and examination details.",
            "Documents and affidavit specified by the department."
        ],
        links: [
            ["Telangana Board of Secondary Education", "https://bse.telangana.gov.in/"],
            ["Services Offered - Duplicate Certificates", "https://bse.telangana.gov.in/services_offered.aspx"]
        ],
        note: "The Directorate of Government Examinations specifies the documents and procedure for duplicate SSC certificates. Confirm current requirements before applying."
    },

    "Intermediate Memo": {
        steps: [
            "Contact your Intermediate college office.",
            "Ask for the duplicate marks memo procedure.",
            "Visit the Telangana Board of Intermediate Education website.",
            "Check the current instructions for duplicate certificates or marks memos.",
            "Provide your hall ticket number and examination details.",
            "Submit the prescribed application and supporting documents.",
            "Pay the applicable fee.",
            "Follow the board or college instructions to collect the duplicate memo."
        ],
        requirements: [
            "Student name.",
            "Intermediate hall ticket number, if available.",
            "Year of examination and group.",
            "College name.",
            "Identity details and supporting documents requested by the board."
        ],
        links: [
            ["Telangana Board of Intermediate Education", "https://tgbie.cgg.gov.in/"],
            ["Telangana MeeSeva", "https://ts.meeseva.telangana.gov.in/"]
        ],
        note: "The issuing board and college determine the current duplicate memo procedure. Confirm the correct service and fee with them."
    },

    "Graduation Memo / Degree Certificate": {
        steps: [
            "Contact the university from which you graduated.",
            "Visit its official examination or student services section.",
            "Find the Duplicate Degree Certificate or Duplicate Marks Memo service.",
            "Obtain the prescribed application form.",
            "Enter your registration number and course details.",
            "Provide the required supporting documents or declaration.",
            "Pay the prescribed university fee.",
            "Submit the application and track its status.",
            "Collect the certificate as instructed by the university."
        ],
        requirements: [
            "University registration number.",
            "Student name and course details.",
            "Year of passing.",
            "College name.",
            "Supporting documents requested by the university."
        ],
        links: [
            ["Osmania University", "https://www.osmania.ac.in/"],
            ["Jawaharlal Nehru Technological University Hyderabad", "https://jntuh.ac.in/"]
        ],
        note: "Apply only to the university that issued your degree. The procedure and fees vary by university."
    },

    "Marriage Certificate": {
        steps: [
            "Contact the Sub-Registrar Office where the marriage was registered.",
            "Visit the Telangana Registration and Stamps Department portal.",
            "Check the availability of a certified copy or duplicate record service.",
            "Provide the marriage registration details.",
            "Submit the prescribed application and supporting information.",
            "Pay the applicable fee.",
            "Follow the Sub-Registrar Office instructions to obtain the certified copy."
        ],
        requirements: [
            "Names of both spouses.",
            "Date and place of marriage.",
            "Marriage registration number, if available.",
            "Identity details requested by the department.",
            "Other supporting documents, if required."
        ],
        links: [
            ["Telangana Registration and Stamps", "https://registration.telangana.gov.in/"],
            ["Telangana State Services", "https://www.telangana.gov.in/services/state-services/"]
        ],
        note: "The Sub-Registrar Office that holds the marriage record can guide you about obtaining a certified copy. Requirements depend on the registration record."
    },

    "Birth Certificate": {
        steps: [
            "Visit the official GHMC Birth and Death service if the birth was registered within GHMC limits.",
            "Open the Birth Certificate service.",
            "Enter the required birth registration details.",
            "Search for the already registered birth record.",
            "Follow the instructions to obtain the certificate.",
            "If the record is not available, contact MeeSeva or the concerned municipal authority.",
            "Complete the non-availability or late-registration process if applicable."
        ],
        requirements: [
            "Child's name, if recorded.",
            "Date of birth.",
            "Place of birth or hospital details.",
            "Parents' names.",
            "Registration details, if available."
        ],
        links: [
            ["GHMC Birth Certificate", "https://bnd.ghmc.gov.in/Birth_Certificate.aspx"],
            ["GHMC Birth and Death Services", "https://ghmc.gov.in/Birth.aspx"],
            ["Telangana MeeSeva", "https://ts.meeseva.telangana.gov.in/"]
        ],
        note: "For births outside GHMC limits, contact the relevant municipality or CDMA authority through MeeSeva. A non-availability certificate or late registration process may be needed if no record exists."
    },

    "Death Certificate": {
        steps: [
            "The eligible family member or legal representative should contact the concerned municipal authority.",
            "For deaths registered within GHMC limits, visit the GHMC Death Certificate service.",
            "Enter the deceased person's registration details.",
            "Search for the existing death record.",
            "Follow the portal instructions to obtain a copy.",
            "If no record is found, contact MeeSeva or the concerned municipal authority.",
            "Complete non-availability or late-registration procedures if applicable."
        ],
        requirements: [
            "Deceased person's full name.",
            "Date and place of death.",
            "Hospital or registration details, if available.",
            "Applicant's relationship or authority, if requested."
        ],
        links: [
            ["GHMC Death Certificate", "https://bnd.ghmc.gov.in/Death_Certificate.aspx"],
            ["GHMC Birth and Death Services", "https://ghmc.gov.in/Birth.aspx"],
            ["Telangana MeeSeva", "https://ts.meeseva.telangana.gov.in/"]
        ],
        note: "This guide is for eligible family members or legal representatives. For deaths outside GHMC limits, contact the concerned municipal/CDMA authority. If the death was never registered, a separate process may be necessary."
    },

    "Income Certificate": {
        steps: [
            "Visit the Telangana MeeSeva portal or a nearby MeeSeva centre.",
            "Select the Income Certificate service.",
            "Ask for a duplicate copy if the certificate was previously issued.",
            "Provide the previous application or certificate details, if available.",
            "Submit the information and supporting documents requested.",
            "Pay the applicable service fee, if any.",
            "Track the application and collect the approved certificate."
        ],
        requirements: [
            "Applicant's name and address.",
            "Previous certificate or application number, if available.",
            "Identity and family income details, if requested.",
            "Supporting documents specified by MeeSeva."
        ],
        links: [
            ["Telangana MeeSeva", "https://ts.meeseva.telangana.gov.in/"],
            ["Income Certificate Service", "https://ts.meeseva.telangana.gov.in/TSPortalTrans/UserInterface/citizen/RevenueServices/IncomeCertificate.aspx"]
        ],
        note: "Telangana MeeSeva lists a Duplicate Copy of Certificate - Income service. Follow the current portal or centre instructions."
    },

    "Caste Certificate": {
        steps: [
            "Visit the Telangana MeeSeva portal or a nearby MeeSeva centre.",
            "Check the Integrated Certificate service.",
            "Ask for a duplicate copy of your previously issued certificate.",
            "Provide your previous certificate or application details, if available.",
            "Submit supporting information requested by the revenue authority.",
            "Pay the applicable fee, if any.",
            "Track the request and collect the approved copy."
        ],
        requirements: [
            "Applicant's name and address.",
            "Previous certificate or application number, if available.",
            "Family and community details, if requested.",
            "Supporting documents specified by the revenue authority."
        ],
        links: [
            ["Telangana MeeSeva", "https://ts.meeseva.telangana.gov.in/"],
            ["Telangana Revenue Services", "https://www.telangana.gov.in/services/meeseva-services/"]
        ],
        note: "Telangana provides Integrated Certificate services covering caste, nativity and date of birth. Confirm the correct duplicate service with MeeSeva or the Tahsildar."
    },

    "Residence / Domicile Certificate": {
        steps: [
            "Visit the Telangana MeeSeva portal or a nearby MeeSeva centre.",
            "Select the Residence Certificate service.",
            "Ask for the duplicate copy service if your certificate was previously issued.",
            "Provide the previous certificate or application details.",
            "Submit any supporting information requested.",
            "Pay the applicable fee, if required.",
            "Track the request and collect the approved certificate."
        ],
        requirements: [
            "Applicant's name.",
            "Previous certificate or application number, if available.",
            "Address and residence details.",
            "Supporting documents requested by the revenue authority."
        ],
        links: [
            ["Telangana MeeSeva", "https://ts.meeseva.telangana.gov.in/"],
            ["Telangana State Services", "https://www.telangana.gov.in/services/meeseva-services/"]
        ],
        note: "Telangana MeeSeva lists a Duplicate Copy of Certificate - Residence service. The issuing authority may ask for additional proof."
    },

    "EWS Certificate": {
        steps: [
            "Visit the Telangana MeeSeva portal or a nearby MeeSeva centre.",
            "Ask for the EWS Certificate service.",
            "If your certificate was already issued, ask the authority how to obtain a duplicate copy.",
            "Provide your previous certificate or application details, if available.",
            "Submit the required family income and asset information.",
            "Provide supporting documents requested by the revenue authority.",
            "Complete verification by the concerned authority.",
            "Collect the approved certificate."
        ],
        requirements: [
            "Applicant and family details.",
            "Income information for the relevant financial year.",
            "Family asset details, as required by EWS rules.",
            "Residence and identity information.",
            "Previous certificate or application number, if available."
        ],
        links: [
            ["Telangana MeeSeva", "https://ts.meeseva.telangana.gov.in/"],
            ["Telangana EWS Certificate Information", "https://ts.meeseva.telangana.gov.in/TSDeptPortal/UserInterface/MRO/EWS_CertificateDYMRO.aspx"]
        ],
        note: "EWS eligibility depends on the applicable income and asset criteria. A lost certificate copy and a fresh EWS eligibility application are different requests. Confirm the correct process with MeeSeva or the Tahsildar."
    },

    "Disability Certificate": {
        steps: [
            "Visit the official UDID portal.",
            "Log in using the available registered details, if you already have a UDID account.",
            "Check the option to download or obtain a replacement UDID card.",
            "Follow the portal's identity verification instructions.",
            "If the card or certificate is not available online, contact the issuing medical authority.",
            "Visit the designated hospital or medical authority if verification is required.",
            "Follow the instructions to obtain the certificate or card."
        ],
        requirements: [
            "UDID number, if available.",
            "Registered mobile number, if available.",
            "Identity and residence details requested by the portal.",
            "Previous disability certificate or medical records, if available."
        ],
        links: [
            ["UDID / Swavlamban Portal", "https://swavlambancard.gov.in/"],
            ["Department of Empowerment of Persons with Disabilities", "https://depwd.gov.in/"]
        ],
        note: "A lost UDID card and a new disability assessment are different matters. Contact the issuing medical authority for the correct procedure. Do not upload medical records to this student project."
    }

};


// 4. DISPLAY DOCUMENT CARDS

function displayDocuments(items) {

    documentList.innerHTML = "";

    if (items.length === 0) {
        documentList.textContent = "No matching documents found.";
        return;
    }

    items.forEach(doc => {

        const card = document.createElement("div");
        card.className = "document-card";

        const heading = document.createElement("h3");
        heading.textContent = doc[0];

        const category = document.createElement("p");
        category.textContent = doc[1];

        card.appendChild(heading);
        card.appendChild(category);

        card.addEventListener("click", () => {
            showDetails(doc);
        });

        documentList.appendChild(card);

    });
}


// 5. DISPLAY DOCUMENT RECOVERY GUIDE

function showDetails(doc) {

    const guide = guides[doc[0]];

    if (!guide) {
        details.innerHTML = "<p>Recovery guide is not available.</p>";
        details.style.display = "block";
        return;
    }

    let content = `
        <h2>${doc[0]} Recovery Guide</h2>

        <h3>Recovery Procedure</h3>
        <ol>
            ${guide.steps.map(step => `<li>${step}</li>`).join("")}
        </ol>

        <h3>Required Information / Documents</h3>
        <ul>
            ${guide.requirements.map(item => `<li>${item}</li>`).join("")}
        </ul>

        <h3>Official Links</h3>
        <ul>
            ${guide.links.map(link => `
                <li>
                    <a href="${link[1]}" target="_blank" rel="noopener noreferrer">
                        ${link[0]}
                    </a>
                </li>
            `).join("")}
        </ul>

        <h3>Important Note</h3>
        <p>${guide.note}</p>
    `;

    details.innerHTML = content + `
        <button class="close-btn" id="close-details">
            Close
        </button>
    `;

    details.style.display = "block";

    document.getElementById("close-details")
        .addEventListener("click", () => {
            details.style.display = "none";
        });

    details.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// 6. SEARCH DOCUMENTS

searchInput.addEventListener("input", function () {

    const value = this.value.toLowerCase().trim();

    const filtered = documents.filter(doc =>
        doc[0].toLowerCase().includes(value) ||
        doc[1].toLowerCase().includes(value)
    );

    details.style.display = "none";

    displayDocuments(filtered);

});


// 7. DISPLAY ALL DOCUMENTS WHEN WEBSITE OPENS

displayDocuments(documents);
