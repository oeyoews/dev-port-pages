/* eslint-disable tailwindcss/no-contradicting-classname */
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ShadowIcon } from '@radix-ui/react-icons'
import { useState } from 'react'

function App() {
  const ports = [8000, 8001, 8080, 80, 81, 3000, 3001, 5000, 5001].map(port => String(port))
  const [port, setPort] = useState<string>(ports[0])

  // const isDev = process.env.NODE_ENV === 'development'

  const handlerPage = (port: string) => {
    setPort(port)
  }
  const openPage = () => {
    window.open(`http://localhost:${port}`, port)
  }

  return (
    <div className="size-96">
      <div className="fixed inset-0 -z-50 size-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="mt-8 flex items-center justify-center gap-1">
        <Select onValueChange={handlerPage} value={port}>
          <SelectTrigger className="w-[180px] cursor-pointer">
            <SelectValue placeholder="Select a port" />
          </SelectTrigger>
          <SelectContent defaultValue={port}>
            <SelectGroup>
              <SelectLabel>端口号</SelectLabel>
              {ports.map(port => (
                <SelectItem className="cursor-pointer" key={port} value={port}>
                  {/* <ShadowIcon className="inline" /> */}
                  {port}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button onClick={openPage}>打开</Button>
      </div>
    </div>
  )
}

export default App
