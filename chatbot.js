import knowledgeBase from './data.js';

const chatbotToggle = document.getElementById("chatbot-toggle");
const chatWindow = document.getElementById("chat-window");
const chatBody = document.getElementById("chat-body");
const closeChat = document.getElementById("close-chat");
const categoryContainer = document.getElementById("category-container");

function loadCategoryPanels() {
  categoryContainer.innerHTML = '';
  for (const category in knowledgeBase) {
    const button = document.createElement("button");
    button.className = "accordion-button";
    button.textContent = category;
    button.addEventListener("click", () => {
      content.style.display =
        content.style.display === "block" ? "none" : "block";
    });

    const content = document.createElement("div");
    content.className = "accordion-content";
    content.style.display = "none";

    knowledgeBase[category].forEach((item) => {
      const qBtn = document.createElement("button");
      qBtn.className = "question-btn";
      qBtn.textContent = item.q;
      qBtn.onclick = () => {
        addMessage(item.q, "user");
        const response = item.a;
        addMessage(response, "bot");
      };
      content.appendChild(qBtn);
    });

    categoryContainer.appendChild(button);
    categoryContainer.appendChild(content);
  }
}

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.textContent = text;
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}

chatbotToggle.onclick = () => chatWindow.classList.toggle("open");
closeChat.onclick = () => chatWindow.classList.remove("open");

loadCategoryPanels();
