import React from 'react'
import { ChatLayout } from "@/components/chat/chat-layout";
function Comments() {
  return (
    <div className='max-w-[1300px] max-h-[800px] m-auto mt-10'>
      <ChatLayout navCollapsedSize={8} />
    </div>
  );
}

export default Comments