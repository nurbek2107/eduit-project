import React from 'react'
import { ChatLayout } from "@/components/chat/chat-layout";
function Comments() {
  return (
    <div className='w-[1300px] h-[900px] m-auto mt-10'>
      <ChatLayout navCollapsedSize={8} />
    </div>
  );
}

export default Comments