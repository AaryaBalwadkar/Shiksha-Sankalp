import React, { useEffect, useRef, useState } from "react";
import { Plus, Smile } from "lucide-react";
import axios from "axios"; // Ensure axios is imported
import { useConversationStore } from "@/store/ConversationsStore";

const ChatInput = ({ name, channelid }) => {
  const [message, setMessage] = useState("");
  const textareaRef = useRef();
  const { sendMessage } = useConversationStore(); // Assuming you use this store for other purposes

  useEffect(() => {
    setMessage(""); // Clear the message input when channel changes
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height
    }
  }, [channelid]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(channelid,message)
    setMessage("")
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.shiftKey) return; // Move to the next line on Shift+Enter
      e.preventDefault();
      handleSendMessage(e); // Send message on Enter
    }
  };

  return (
    <div>
      <form>
        <div className="relative p-4 pb-6 z-20 shadow-md">
          <button
            type="button"
            onClick={handleSendMessage}
            className="absolute top-7 left-8 h-[24px] w-[24px] bg-zinc-500 dark:bg-zinc-400 hover:bg-zinc-600 dark:hover:bg-zinc-300 transition rounded-full p-1 flex items-center justify-center"
          >
            <Plus className="text-white dark:text-[#313338]" />
          </button>
          <textarea
            ref={textareaRef}
            value={message}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder={`Message #${name}`}
            className="border-0 w-full resize-none overflow-hidden px-14 py-3 bg-zinc-200/90 dark:bg-zinc-700/75 border-none outline-none focus:ring-0 focus-visible:ring-0 text-zinc-600 dark:text-zinc-200 rounded-md"
            rows={1} // Initial row height
            style={{ maxHeight: "200px", minHeight: "40px", overflowY: "auto" }}
          />
          <div className="absolute top-7 right-8">
            <Smile />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;

// import React, { useEffect, useRef, useState } from "react";
// import { Plus, Smile } from "lucide-react";
// import { Input } from "../ui/input";
// import { useConversationStore } from "@/store/ConversationsStore";

// const ChatInput = ({name, channelid}) => {
//   const [ message, setMessage] = useState()
//   const textareaRef = useRef()
//   const { sendMessage } = useConversationStore()
//   console.log(message)

//   useEffect(() => {
//     setMessage(""); // Clear the message input when channel changes
//     if (textareaRef.current) {
//       textareaRef.current.style.height = "auto"; // Reset height
//     }
//   }, [channelid]);

//   const handleSendMessage = async (e) => {
//     e.preventDefault()
//     if(!message) return
//     try {
// 			const response = await axios.post(`http://localhost:5000/api/messages/send/${channelid}`, { message });
//       console.log(response)
// 		} catch (error) {
// 			console.log({ error: error.response.data.message || "Error in sending message" });
// 			throw error;
// 		}
//     console.log(message)
//   }

//   const handleInputChange = (e) => {
//     setMessage(e.target.value);
//     if (textareaRef.current) {
//       textareaRef.current.style.height = "auto"; // Reset height
//       textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
//     }
//   };

//   const handleKeyDown = (e) => {
//     if(e.key === "Enter"){
//       if(e.shiftKey){
//         return;
//       }
//       e.preventDefault()
//       handleSendMessage(e)
//     }
//   }

//   return (
//     <div>
//       <form>
//         <div className="relative p-4 pb-6">
//           <button
//             type="button"
//             onClick={handleSendMessage}
//             className="absolute top-7 left-8 h-[24px] w-[24px] bg-zinc-500 dark:bg-zinc-400 hover:bg-zinc-600 dark:hover:bg-zinc-300 transition rounded-full p-1 flex items-center justify-center"
//           >
//             <Plus className="text-white dark:test-[#313338]" />
//           </button>
//           <textarea
//             ref={textareaRef}
//             value={message}
//             onChange={handleInputChange}
//             onKeyDown={handleKeyDown}
//             placeholder={`Message #${name}`}
//             className="border-0 w-full resize-none overflow-hidden px-14 py-3 bg-zinc-200/90 dark:bg-zinc-700/75 border-none outline-none focus:ring-0 focus-visible:ring-0 text-zinc-600 dark:text-zinc-200 rounded-md"
//             rows={1} // Initial row height
//             style={{ maxHeight: "200px", minHeight: "40px", overflowY: "auto" }}
//           />
//           <div className="absolute top-7 right-8">
//             <Smile />
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ChatInput;

// import React from 'react'
// import { useForm } from 'react-hook-form';
// import * as z from "zod"

// import { Form, FormControl, FormField, FormItem } from '../ui/form';
// import { Input } from '../ui/input';
// import { Plus } from 'lucide-react';

// interface ChatInputProps {
//   apiUrl: String;
//   query: Record<String, any>;
//   name: String;
//   type: "conversation" | "channel";
// }

// const formSchema = z.object({
//   content: z.string().min(1),
// })

// export const ChatInput = ({
//   apiUrl, query,name,type
// }: ChatInputProps) => {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       content: "",
//     }
//   })

//   const isLoading =form.formState.isSubmitting;

//   const onSubmit = async (value: z.infer<typeof formSchema>) => {
//     console.log(value)
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)}>
//         <FormField
//           control={form.control}
//           name="control"
//           render={({ field }) => {
//             <FormItem>
//               <FormControl>
//                 <div className="relative p-4 pb-6">
//                   <button
//                     type='button'
//                     onClick={() => {}}
//                     className='absolute top-7 left-8 h-[24px] w-[24px] bg-zinc-500 dark:bg-zinc-400 hover:bg-zinc-600 dark:hover:bg-zinc-300 transition rounded-full p-1 flex items-center justify-center'
//                   >
//                   <Plus className='text-white dark:test-[#313338]'/>

//                   </button>
//                   <Input
//                     disabled={isLoading}
//                     className="px-14 py-6 bg-zinc-200/90 dark:bg-zinc-700/75 border-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-zinc-600 dark:text-zinc-200"
//                   >
//                   </Input>
//                 </div>
//               </FormControl>
//             </FormItem>
//           }}
//         >

//         </FormField>
//       </form>
//     </Form>
//   )
// }

// export default ChatInput
