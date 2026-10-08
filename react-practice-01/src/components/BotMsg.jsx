import { Bot } from 'lucide-react';
import React from 'react'

const BotMsg = ({msg}) => {
  return (
    <div className="flex items-start gap-2">
      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
        <Bot size={16} className="text-green-600" />
      </div>

      <div className="bg-white border border-gray-100 shadow-sm px-4 py-3 rounded-2xl rounded-tl-sm max-w-[75%]">
        <p className="text-sm text-gray-700">
          {msg}
        </p>
      </div>
    </div>
  );
}

export default BotMsg