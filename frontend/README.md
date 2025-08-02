# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




| Week                      | Team A (Frontend: React)                                                                                                           | Team B (Backend: FastAPI + AI)                                                                            | ✅ Milestone                                                 |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| **✅ Week 2**              | *(Already planned)*                                                                                                                | Implement `/upload-audio`, test with Swagger or Thunder Client                                            | ✔ Audio upload API ready                                    |
| **🚀 Week 3**             | 🎥 Implement webcam + mic capture using `getUserMedia()` <br> 🎤 Add start/stop recording buttons <br> 🎛️ UI to preview recording | 🧪 Accept audio chunks (e.g. every 5–10s) <br> 🗃️ Save each chunk temporarily on backend                 | ✅ Live input interface working                              |
| **🔍 Week 4 (CNN Focus)** | 📸 Capture stills from webcam every few seconds <br> 📊 UI preview of visual capture (optional)                                    | 🤖 Integrate CNN model (blackboard/object detection or frame classification) <br> 🧪 Test on saved frames | ✅ CNN integration completed                                 |
| **🌐 Week 5**             | 🔁 Send audio chunks to backend via `axios` <br> 📺 Display real-time transcription in UI                                          | 🧠 Use Hugging Face Whisper to transcribe Malayalam/English <br> 🌐 Translate using Gemini API            | ✅ Real-time Malayalam → English transcription & translation |
| **🧠 Week 6**             | 📄 Summarized notes preview in UI <br> ⬇️ Add “Download PDF” button                                                                | 🧾 Generate summary using Gemini (per session) <br> 📄 Use FPDF to create clean PDF lecture notes         | ✅ Working summarization + PDF export                        |
| **🔧 Week 7**             | 🧑‍🎓 Login/signup UI (admin/student role) <br> 📂 UI for stored notes per session                                                 | 🗂️ Add MongoDB (or Firebase) to store user data + notes <br> 🗓️ Save sessions by date/topic             | ✅ Notes storage + login enabled                             |
| **🚀 Week 8**             | 🌐 Deploy frontend using Vercel <br> 🧪 Final UI polish, class test                                                                | 🌍 Deploy backend using Render <br> 📦 Final testing, presentation-ready system                           | ✅ Full web app live and demo-ready                          |

