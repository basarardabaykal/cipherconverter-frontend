import { useState } from 'react'
import CipherPageTemplate from '../components/CipherPageTemplate.tsx'
import { ciphersService } from '../services/ciphersService.tsx'

function OtpCipherPage() {
  const [mode, setMode] = useState<'encode' | 'decode'>('encode')
  const [key, setKey] = useState<string>('secret')
  const [inputText, setInputText] = useState<string>('')
  const [outputText, setOutputText] = useState<string>('')

  const handleConvert = async () => {
    const response = await ciphersService.otp({
      input_text: inputText,
      key,
      operation: mode === 'encode' ? 'encrypt' : 'decrypt',
    })

    if (!response) {
      return
    }

    setOutputText(response.data?.content?.output_text ?? '')
  }

  return (
    <CipherPageTemplate
      title="OTP Cipher Converter"
      family="XOR Stream Cipher"
      description="Apply one-time-pad style XOR transformation with a text key. Use the same key for encode and decode to reverse the transformation."
      outputText={outputText}
      controls={
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-semibold text-[#4b5563]">Mode</span>
            <select
              value={mode}
              onChange={(event) => setMode(event.target.value as 'encode' | 'decode')}
              className="mt-2 w-full rounded-xl border border-[#d1deeb] bg-white px-3 py-2 text-sm text-[#0f172a] outline-none transition focus:border-[#1f6fd1] focus:ring-2 focus:ring-[#1f6fd1]/15"
            >
              <option value="encode">Encode</option>
              <option value="decode">Decode</option>
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-[#4b5563]">Key</span>
            <input
              type="text"
              value={key}
              onChange={(event) => setKey(event.target.value)}
              className="mt-2 w-full rounded-xl border border-[#d1deeb] bg-white px-3 py-2 text-sm text-[#0f172a] outline-none transition focus:border-[#1f6fd1] focus:ring-2 focus:ring-[#1f6fd1]/15"
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-[#4b5563]">Input Text</span>
            <textarea
              rows={8}
              placeholder="Type or paste your text here..."
              value={inputText}
              onChange={(event) => setInputText(event.target.value)}
              className="mt-2 w-full resize-y rounded-xl border border-[#d1deeb] bg-white px-3 py-2 text-sm leading-6 text-[#0f172a] outline-none transition placeholder:text-[#8a99ad] focus:border-[#1f6fd1] focus:ring-2 focus:ring-[#1f6fd1]/15"
            />
          </label>

          <button
            type="button"
            onClick={handleConvert}
            className="w-full rounded-xl bg-[#1f6fd1] px-4 py-2.5 text-sm font-bold text-white shadow-[0_10px_22px_rgba(35,94,175,0.26)] transition-colors hover:bg-[#174e93]"
          >
            Convert
          </button>
        </div>
      }
    />
  )
}

export default OtpCipherPage