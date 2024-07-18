import { Message, UserData } from "@/app/data";
import { cn } from "@/lib/utils";
import React, { useRef, useEffect } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import ChatBottombar from "./chat-bottombar";
import { AnimatePresence, motion } from "framer-motion";

interface ChatListProps {
  messages?: Message[];
  selectedUser: UserData;
  sendMessage: (newMessage: Message) => void;
  isMobile: boolean;
}

export function ChatList({
  messages,
  selectedUser,
  sendMessage,
  isMobile
}: ChatListProps) {
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-full h-full overflow-hidden flex flex-col">
      <div
        ref={messagesContainerRef}
        className="w-full h-full overflow-y-auto flex flex-col gap-2 p-4"
        style={{ scrollbarColor: '#81a1c100 #81a1c100' }}
      >
        <AnimatePresence>
          {messages?.map((message, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, scale: 1, y: 50, x: 0 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 1, y: 1, x: 0 }}
              transition={{
                opacity: { duration: 0.1 },
                layout: {
                  type: "spring",
                  bounce: 0.3,
                  duration: messages.indexOf(message) * 0.05 + 0.2,
                },
              }}
              className={cn(
                "flex gap-3 items-center",
                message.name !== selectedUser.name ? "items-end" : "items-start"
              )}
            >
              {message.name === selectedUser.name && (
                <Avatar>
                  <AvatarImage
                    src={message.avatar}
                    alt={message.name}
                    width={24}
                    height={24}
                  />
                </Avatar>
              )}
              <span className={cn(
                "bg-[#ff9500] text-white p-3 rounded-md max-w-xs",
                message.name !== selectedUser.name ? "ml-auto" : "mr-auto"
              )}>
                {message.message}
              </span>
              {message.name !== selectedUser.name && (
                <Avatar>
                  <AvatarImage
                    src={message.avatar}
                    alt={message.name}
                    width={24}
                    height={24}
                  />
                </Avatar>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <ChatBottombar sendMessage={sendMessage} isMobile={isMobile} />
    </div>
  );
}
