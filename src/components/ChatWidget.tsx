"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Icon from "./Icons";
import { getChatReply } from "@/lib/chatbot";

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

type Message = { role: "user" | "assistant"; content: string };

const GREETING: Message = {
  role: "assistant",
  content:
    "Hi! I can help with questions about Consolidated Energy, our products and services, or how to get in touch. What would you like to know?",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  async function sendMessage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const next = [...messages, { role: "user" as const, content: text }];
    setMessages([...next, { role: "assistant" as const, content: "" }]);
    setInput("");
    setLoading(true);

    const reply = getChatReply(text);

    // Brief "thinking" pause, then reveal the reply a few characters at a time.
    await wait(450 + Math.random() * 300);

    const CHUNK = 3;
    for (let i = CHUNK; i < reply.length + CHUNK; i += CHUNK) {
      const slice = reply.slice(0, i);
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { role: "assistant", content: slice };
        return updated;
      });
      await wait(15);
    }

    setLoading(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-dark text-white shadow-lg hover:opacity-90 transition-opacity"
      >
        <Icon name={open ? "close" : "chat"} className="w-6 h-6" />
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] h-[520px] max-h-[70vh] bg-surface border border-ink/10 shadow-2xl flex flex-col">
          <div className="bg-brand-dark text-white px-4 py-3.5 flex items-center justify-between shrink-0">
            <div>
              <p className="font-display text-[15px] leading-tight">Consolidated Energy</p>
              <p className="text-[11px] text-white/50">Ask us anything</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-white/60 hover:text-white transition-colors"
            >
              <Icon name="close" className="w-4 h-4" />
            </button>
          </div>

          <div ref={listRef} className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-3 py-2 text-[13px] leading-relaxed whitespace-pre-wrap ${
                  m.role === "user"
                    ? "self-end bg-brand-dark text-white"
                    : "self-start bg-section text-ink"
                }`}
              >
                {m.content ||
                  (loading && i === messages.length - 1 ? (
                    <span className="inline-flex gap-1 py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-ink/30 animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-ink/30 animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-ink/30 animate-bounce" />
                    </span>
                  ) : null)}
              </div>
            ))}
          </div>

          <form onSubmit={sendMessage} className="border-t border-ink/10 p-3 flex items-center gap-2 shrink-0">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              disabled={loading}
              className="flex-1 text-[13px] px-3 py-2 border border-ink/15 bg-surface text-ink focus:outline-none focus:border-brand-green disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="inline-flex items-center justify-center w-9 h-9 shrink-0 rounded-sm bg-brand-dark text-white hover:opacity-90 disabled:opacity-40 transition-opacity"
            >
              <Icon name="send" className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
