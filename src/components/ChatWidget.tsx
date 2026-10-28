"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  RotateCcw,
  Building2,
  GraduationCap,
  Database,
  Calendar,
  Headphones,
  Bot,
} from "lucide-react";

interface Message {
  role: "assistant" | "user";
  content: string;
}

const QUICK_CHIPS = [
  { label: "Company Overview", query: "What does your company do?", icon: Building2 },
  { label: "School ERP", query: "We run an international school and need attendance and bus tracking", icon: GraduationCap },
  { label: "Oracle to Snowflake ETL", query: "I need to move data from Oracle to Snowflake", icon: Database },
  { label: "Schedule Live Demo", query: "I'd like to schedule a demo", icon: Calendar },
  { label: "Speak to Human", query: "I want to talk to a person", icon: Headphones },
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm OPUS Assistant. Tell me about your organization and what you're looking to solve, and I'll recommend the best solutions, share relevant case studies, or schedule a demo.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setSessionId("web-" + Math.random().toString(36).substring(2, 9));
  }, []);

  // Prevent background page from scrolling when cursor is inside the chat modal
  useEffect(() => {
    const modal = modalRef.current;
    if (!isOpen || !modal) return;

    const onWheel = (e: WheelEvent) => {
      const scrollable = modal.querySelector(".chat-scrollbar") as HTMLElement | null;
      const chips = modal.querySelector(".no-scrollbar") as HTMLElement | null;
      const target = e.target as Node;

      if (scrollable && scrollable.contains(target)) {
        const { scrollTop, scrollHeight, clientHeight } = scrollable;
        const atTop = scrollTop <= 0;
        const atBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

        // If at top or bottom boundaries of the messages list, stop scroll from leaking to outside page
        if ((e.deltaY < 0 && atTop) || (e.deltaY > 0 && atBottom)) {
          e.preventDefault();
        }
      } else if (chips && chips.contains(target)) {
        // If cursor is over suggestion chips, convert wheel movement to horizontal chip scrolling
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
          chips.scrollLeft += e.deltaX;
        } else {
          chips.scrollLeft += e.deltaY;
        }
        e.preventDefault();
      } else {
        // Cursor is over header, borders, or input area: completely prevent outside page from scrolling
        e.preventDefault();
      }
    };

    modal.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      modal.removeEventListener("wheel", onWheel);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleReset = () => {
    setMessages([
      {
        role: "assistant",
        content:
          "Hi! I'm OPUS Assistant. Tell me about your organization and what you're looking to solve, and I'll recommend the best solutions, share relevant case studies, or schedule a demo.",
      },
    ]);
    setSessionId("web-" + Math.random().toString(36).substring(2, 9));
  };

  const handleSend = async (textToSend?: string) => {
    const messageText = (textToSend || input).trim();
    if (!messageText || isLoading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: messageText }]);
    setIsLoading(true);

    try {
      const resp = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          session_id: sessionId,
          message: messageText,
        }),
      });

      if (resp.ok) {
        const data = await resp.json();
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.reply },
        ]);
        if (data.session_id) setSessionId(data.session_id);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "I'm currently unable to connect to the server. Please email reachus@opusinfiniti.com or call +91 97909 65960.",
          },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Connection issue. You can reach our team directly at reachus@opusinfiniti.com or +91 97909 65960.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Launcher Button - Always Solid, Vibrant & Highly Visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: "#1d4ed8",
          backgroundImage: "linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #3b82f6 100%)",
          boxShadow: "0 10px 30px -3px rgba(37, 99, 235, 0.65), 0 4px 14px rgba(0, 0, 0, 0.25)",
          color: "#ffffff",
          border: "2px solid rgba(255, 255, 255, 0.35)",
          zIndex: 99999,
        }}
        className="fixed bottom-6 right-6 flex items-center gap-3 px-4 py-3 rounded-full cursor-pointer hover:scale-105 active:scale-95 transition-all focus:outline-none"
        aria-label="Toggle OPUS Assistant"
        title="Chat with OPUS Assistant"
      >
        <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/20 shadow-inner">
          {isOpen ? (
            <X className="w-5 h-5 text-white stroke-[2.5]" />
          ) : (
            <>
              <MessageSquare className="w-5 h-5 text-white stroke-[2.2]" />
              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-blue-900 animate-ping"></span>
              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-blue-900"></span>
            </>
          )}
        </div>
        {!isOpen && (
          <div className="flex flex-col text-left pr-1 select-none">
            <span className="font-bold text-sm tracking-wide text-white leading-none">
              OPUS AI
            </span>
            <span className="text-[10px] text-blue-100 font-medium leading-tight mt-0.5">
              Online • Ask me anything
            </span>
          </div>
        )}
      </button>

      {/* Floating Chat Modal - Ultra Premium Enterprise Glassmorphism Design */}
      {isOpen && (
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          style={{
            zIndex: 99999,
            boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.45), 0 0 1px 1px rgba(0, 0, 0, 0.1)",
            overscrollBehavior: "contain",
          }}
          className="fixed bottom-24 right-4 sm:right-6 w-[380px] sm:w-[420px] max-w-[calc(100vw-24px)] h-[620px] max-h-[calc(100vh-110px)] bg-white rounded-3xl border border-slate-200/90 flex flex-col overflow-hidden animate-fade-in-up"
        >
          {/* Header - Solid Deep Navy Metallic Gradient */}
          <div
            style={{
              backgroundColor: "#07111e",
              backgroundImage: "linear-gradient(135deg, #07111e 0%, #0c2340 50%, #05162a 100%)",
              color: "#ffffff",
              borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
            }}
            className="p-4 px-5 flex items-center justify-between shadow-md"
          >
            <div className="flex items-center gap-3">
              <div
                style={{
                  background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                  border: "2px solid #60a5fa",
                }}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md"
              >
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-sm text-white tracking-wide">
                    OPUS Assistant
                  </h3>
                  <span
                    style={{
                      backgroundColor: "rgba(56, 189, 248, 0.15)",
                      borderColor: "rgba(56, 189, 248, 0.35)",
                      color: "#7dd3fc",
                    }}
                    className="px-1.5 py-0.5 rounded-md text-[10px] font-bold border flex items-center gap-0.5"
                  >
                    <Sparkles className="w-2.5 h-2.5 text-yellow-300" />
                    AI
                  </span>
                </div>
                <p className="text-[11px] text-blue-200 flex items-center gap-1.5 mt-0.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active Now • Enterprise AI Specialist
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handleReset}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  color: "#ffffff",
                }}
                className="w-8 h-8 rounded-full hover:bg-white/25 flex items-center justify-center transition-colors cursor-pointer"
                title="Restart conversation"
                aria-label="Restart Conversation"
              >
                <RotateCcw className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  color: "#ffffff",
                }}
                className="w-8 h-8 rounded-full hover:bg-white/25 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div
            style={{
              backgroundColor: "#f8fafc",
              scrollbarWidth: "thin",
              scrollbarColor: "#cbd5e1 transparent",
              overscrollBehavior: "contain",
            }}
            className="flex-1 p-4 overflow-y-auto flex flex-col gap-3.5 chat-scrollbar"
          >
            {messages.map((m, idx) => (
              <React.Fragment key={idx}>
                {m.role === "assistant" ? (
                  <div className="flex items-start gap-2.5 max-w-[88%]">
                    <div
                      style={{
                        backgroundColor: "#0c2340",
                        borderColor: "rgba(59, 130, 246, 0.4)",
                      }}
                      className="w-7 h-7 rounded-full text-blue-300 border flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 shadow-xs"
                    >
                      <Bot className="w-4 h-4 text-blue-300" />
                    </div>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        borderColor: "#e2e8f0",
                        color: "#0f172a",
                      }}
                      className="rounded-2xl rounded-tl-xs p-3.5 text-sm border shadow-xs leading-relaxed font-normal"
                    >
                      {m.content}
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      backgroundColor: "#2563eb",
                      backgroundImage: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)",
                      color: "#ffffff",
                    }}
                    className="self-end max-w-[84%] rounded-2xl rounded-tr-xs p-3.5 text-sm text-white shadow-xs leading-relaxed font-normal"
                  >
                    {m.content}
                  </div>
                )}
              </React.Fragment>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2.5 self-start">
                <div
                  style={{
                    backgroundColor: "#0c2340",
                    borderColor: "rgba(59, 130, 246, 0.4)",
                  }}
                  className="w-7 h-7 rounded-full text-blue-300 border flex items-center justify-center text-xs font-bold shrink-0 shadow-xs"
                >
                  <Bot className="w-4 h-4 text-blue-300" />
                </div>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    borderColor: "#e2e8f0",
                  }}
                  className="rounded-2xl rounded-tl-xs px-4 py-3 border shadow-xs flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"></span>
                  <span
                    className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"
                    style={{ animationDelay: "0.15s" }}
                  ></span>
                  <span
                    className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"
                    style={{ animationDelay: "0.3s" }}
                  ></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Reply Chips - Clean Horizontal Scroll with Hidden Bar */}
          <div
            style={{
              backgroundColor: "#f8fafc",
              borderTop: "1px solid #e2e8f0",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              overscrollBehavior: "contain",
            }}
            className="px-3.5 py-2.5 flex gap-2 overflow-x-auto no-scrollbar scroll-smooth"
          >
            {QUICK_CHIPS.map((chip, idx) => {
              const IconComp = chip.icon;
              return (
                <button
                  key={idx}
                  onClick={() => handleSend(chip.query)}
                  style={{
                    backgroundColor: "#ffffff",
                    borderColor: "#cbd5e1",
                    color: "#1e3a8a",
                  }}
                  className="shrink-0 inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border hover:border-blue-500 hover:text-blue-600 hover:shadow-xs transition-all cursor-pointer font-medium active:scale-95"
                >
                  <IconComp className="w-3.5 h-3.5 text-blue-600" />
                  {chip.label}
                </button>
              );
            })}
          </div>

          {/* Input Area */}
          <div
            style={{
              backgroundColor: "#ffffff",
              borderTop: "1px solid #e2e8f0",
            }}
            className="p-3"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="relative flex items-center rounded-2xl border border-slate-300 bg-slate-50 focus-within:border-blue-600 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all shadow-inner"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about ERP, ETL, demo or requirements..."
                style={{ color: "#0f172a" }}
                className="flex-1 bg-transparent px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                style={{
                  backgroundColor: "#2563eb",
                  backgroundImage: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)",
                  color: "#ffffff",
                }}
                className="mr-1.5 p-2 rounded-xl text-white hover:opacity-95 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer shadow-xs"
                aria-label="Send Message"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </form>
            <div className="mt-2 text-center text-[10px] text-slate-500 font-medium">
              ⚡ Powered by OPUS Infiniti Enterprise Intelligence
            </div>
          </div>
        </div>
      )}
    </>
  );
}
