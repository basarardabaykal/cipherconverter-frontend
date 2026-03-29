import CipherPageTemplate from '../components/CipherPageTemplate.tsx'

function CaesarCipherPage() {
  return (
    <CipherPageTemplate
      title="Caesar Cipher Converter"
      family="Classical Shift Cipher"
      description="Move each letter forward or backward by a fixed number of positions. Use encode for plaintext-to-ciphertext and decode for ciphertext-to-plaintext."
      controls={
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-semibold text-[#4b5563]">Mode</span>
            <select
              defaultValue="encode"
              className="mt-2 w-full rounded-xl border border-[#d1deeb] bg-white px-3 py-2 text-sm text-[#0f172a] outline-none transition focus:border-[#1f6fd1] focus:ring-2 focus:ring-[#1f6fd1]/15"
            >
              <option value="encode">Encode</option>
              <option value="decode">Decode</option>
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-[#4b5563]">Shift (0-25)</span>
            <input
              type="number"
              min={0}
              max={25}
              defaultValue={3}
              className="mt-2 w-full rounded-xl border border-[#d1deeb] bg-white px-3 py-2 text-sm text-[#0f172a] outline-none transition focus:border-[#1f6fd1] focus:ring-2 focus:ring-[#1f6fd1]/15"
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-[#4b5563]">Input Text</span>
            <textarea
              rows={8}
              placeholder="Type or paste your text here..."
              className="mt-2 w-full resize-y rounded-xl border border-[#d1deeb] bg-white px-3 py-2 text-sm leading-6 text-[#0f172a] outline-none transition placeholder:text-[#8a99ad] focus:border-[#1f6fd1] focus:ring-2 focus:ring-[#1f6fd1]/15"
            />
          </label>

          <button
            type="button"
            className="w-full rounded-xl bg-[#1f6fd1] px-4 py-2.5 text-sm font-bold text-white shadow-[0_10px_22px_rgba(35,94,175,0.26)] transition-colors hover:bg-[#174e93]"
          >
            Convert
          </button>
        </div>
      }
    />
  )
}

export default CaesarCipherPage