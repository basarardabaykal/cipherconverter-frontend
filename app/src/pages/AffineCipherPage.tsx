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
            <span className="text-sm font-semibold text-[#4b5563]">Mode</span>
            <select
              defaultValue="encode"
              className="mt-2 w-full rounded-xl border border-[#d1deeb] bg-white px-3 py-2 text-sm text-[#0f172a] outline-none transition focus:border-[#1f6fd1] focus:ring-2 focus:ring-[#1f6fd1]/15"
            >
              <option value="encode">Encode</option>
              <option value="decode">Decode</option>
            </select>
          </label>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-[#4b5563]">Key a</span>
              <input
                type="number"
                defaultValue={5}
                className="mt-2 w-full rounded-xl border border-[#d1deeb] bg-white px-3 py-2 text-sm text-[#0f172a] outline-none transition focus:border-[#1f6fd1] focus:ring-2 focus:ring-[#1f6fd1]/15"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-[#4b5563]">Key b</span>
              <input
                type="number"
                defaultValue={8}
                className="mt-2 w-full rounded-xl border border-[#d1deeb] bg-white px-3 py-2 text-sm text-[#0f172a] outline-none transition focus:border-[#1f6fd1] focus:ring-2 focus:ring-[#1f6fd1]/15"
              />
            </label>
          </div>

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

export default AffineCipherPage