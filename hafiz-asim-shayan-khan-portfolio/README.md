# Hafiz Asim Shayan Khan — Portfolio Website

Personal portfolio site for **Hafiz Asim Shayan Khan** — Cybersecurity Analyst, Network Administrator, and Cloud & AI Security practitioner based in Peshawar, Pakistan.

**Live site:** _add your GitHub Pages URL here after deploying_

---

## Pages

| File | Section |
|---|---|
| `index.html` | Home — profile, domains, experience, Python, leadership |
| `networking.html` | Networking & infrastructure |
| `cybersecurity.html` | Offensive (red team) & defensive (Wazuh / SOC) |
| `cloud.html` | AWS & Azure cloud security |
| `ai-ml.html` | AI & machine learning |
| `quantum.html` | Quantum computing / Final-Year Project (QSVM vs SVM) |
| `certifications.html` | All certificates, badges, and experience letter |

---

## Folder structure

```
.
├── index.html
├── networking.html
├── cybersecurity.html
├── cloud.html
├── ai-ml.html
├── quantum.html
├── certifications.html
├── Hafiz_Asim_Shayan_Khan_Resume.pdf
├── README.md
└── assets/
    ├── css/
    │   └── styles.css                 Site stylesheet
    ├── js/
    │   └── app.js                     Navigation, scroll reveal, certificate viewer
    ├── img/
    │   ├── profile.jpg                Profile photo (used in hero)
    │   ├── profile-720.jpg            Smaller profile photo
    │   ├── profile-full.png           Full-resolution profile photo
    │   └── og-image.jpg               Social-media link preview image
    ├── certificates/                  JPG previews shown in the on-page viewer
    ├── certificates-pdf/              Original certificate PDFs (download links)
    └── badges/                        Digital badge images (PNG)
```

**Keep this structure intact.** All paths in the HTML are relative to the repository root.

---

## Certificates & badges

Each certificate on `certifications.html` offers three actions:

- **View certificate** — opens the JPG preview in an on-page viewer
- **Badge** — switches the viewer to the digital badge (where one was issued)
- **PDF** — downloads the original certificate PDF

| Certificate | PDF | Badge |
|---|---|---|
| Cisco Certified Network Associate (CCNA) | ✅ | ✅ |
| Network Defense | ✅ | ✅ |
| AWS Certified Solutions Architect – Associate | ✅ | ✅ |
| Certified Cloud Security Professional (CCSP) | ✅ | — |
| AWS Academy — Cloud Security Foundations | ✅ | ✅ |
| IT Security: Defense Against the Digital Dark Arts | ✅ | — |
| Python for Active Defense | ✅ | — |
| Python for Command-and-Control, Exfiltration and Impact | ✅ | — |
| Python Essentials 1 | ✅ | ✅ |
| Python Essentials 2 | ✅ | ✅ |
| Python for Data Science, AI & Development | ✅ | — |
| The Complete Quantum Computing Course for Beginners | ✅ | — |
| Experience Letter — Abasyn University | ✅ | — |

---

## Deploying to GitHub Pages

1. Create a repository (e.g. `portfolio` or `<your-username>.github.io`).
2. Upload every file and folder from this package, preserving the structure.
3. Go to **Settings → Pages**.
4. Under *Source*, choose the `main` branch and the `/ (root)` folder, then **Save**.
5. Your site goes live at `https://<your-username>.github.io/<repository-name>/`.

After deploying, update the `og:url` and `canonical` values in each page's `<head>` to your live URL so social-media link previews resolve correctly.

---

## Project links

- **AI-Powered Threat Intelligence** — https://github.com/Asim223/AI-Powered-Threat-Intelligence
- **AI-Assisted SOC Detection Pipeline** — https://github.com/Asim223/AI-Assisted-SOC-Detection-Pipeline
- **QSVM vs SVM for Email Spam Detection** — https://github.com/Asim223/QSVM-vs-SVM-for-Email-Spam-Detection

---

## Built with

Plain HTML, CSS, and vanilla JavaScript — no build step, no framework, no dependencies. Fonts are loaded from Google Fonts; everything else is served from this repository.

---

## Contact

- **Email:** shahyankhan886@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/hafiz-asim-shayan-khan-111a962a4/
- **GitHub:** https://github.com/Asim223
- **Location:** Peshawar, Pakistan
