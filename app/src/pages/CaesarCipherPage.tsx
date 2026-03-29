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
            <span className="text-sm font-semibold text-[#5f5550]">Mode</span>
            <select
              defaultValue="encode"
              className="mt-2 w-full rounded-xl border border-[#e9ddd2] bg-white px-3 py-2 text-sm text-[#171412] outline-none"
            >
              <option value="encode">Encode</option>
              <option value="decode">Decode</option>
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-[#5f5550]">Shift (0-25)</span>
            <input
              type="number"
              min={0}
              max={25}
              defaultValue={3}
              className="mt-2 w-full rounded-xl border border-[#e9ddd2] bg-white px-3 py-2 text-sm text-[#171412] outline-none"
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-[#5f5550]">Input Text</span>
            <textarea
              rows={8}
              placeholder="Type or paste your text here..."
              className="mt-2 w-full resize-y rounded-xl border border-[#e9ddd2] bg-white px-3 py-2 text-sm leading-6 text-[#171412] outline-none placeholder:text-[#a59a92]"
            />
          </label>

          <button
            type="button"
            className="w-full rounded-xl bg-linear-to-r from-[#e24d2d] to-[#d35f26] px-4 py-2.5 text-sm font-bold text-white"
          >
            Convert
          </button>
        </div>
      }
    />
  )
}

export default CaesarCipherPage