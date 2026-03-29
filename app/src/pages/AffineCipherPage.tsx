import CipherPageTemplate from '../components/CipherPageTemplate.tsx'

function AffineCipherPage() {
  return (
    <CipherPageTemplate
      title="Affine Cipher Converter"
      family="Mathematical Substitution"
      description="Apply an affine transformation using keys a and b. Use this page as a frontend shell for your backend-based Affine encode/decode endpoint."
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

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-[#5f5550]">Key a</span>
              <input
                type="number"
                defaultValue={5}
                className="mt-2 w-full rounded-xl border border-[#e9ddd2] bg-white px-3 py-2 text-sm text-[#171412] outline-none"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-[#5f5550]">Key b</span>
              <input
                type="number"
                defaultValue={8}
                className="mt-2 w-full rounded-xl border border-[#e9ddd2] bg-white px-3 py-2 text-sm text-[#171412] outline-none"
              />
            </label>
          </div>

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

export default AffineCipherPage