import React from 'react'
import { ChatLayout } from "@/components/chat/chat-layout";
function Comments() {
  return (
    <div className='max-w-[1300px] h-[700px] m-auto  p-10'>
      <ChatLayout navCollapsedSize={8} />
    </div>
  );
}

export default Comments