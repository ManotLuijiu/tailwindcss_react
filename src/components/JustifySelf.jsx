import React from 'react';

const JustifySelf = () => {
  return (
    <>
      <div className="mt-4 -mb-3">
        <div className="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800">
          <article className="group flex flex-col mx-auto text-center whitespace-pre-wrap font-mono mb-6">
            <h1 className="text-[48px]">justify-self</h1>
            <p>
              ใช้สำหรับวางตำแหน่ง แต่ละ child ที่อยู่ใน grid (Individual
              Horizontal)
            </p>
          </article>
          <div className="absolute inset-0 bg-grid-slate-100 mask1 dark:bg-grid-slate-700 dark:mask2 bg-justify-items"></div>
          <div className="relative rounded-xl overflow-auto p-8 font-bold">
            <div className="absolute -z-1 inset-0 left-10 text-gray-700 text-lg rounded-md">
              <pre>
                1. auto{' '}
                <span className="italic text-red-600">
                  [วางตำแหน่งตาม justify-items:...ใน parent]
                </span>
              </pre>
            </div>
            <div className="bg-stripes-purple grid grid-cols-3 gap-4 justify-items-stretch font-mono text-white text-sm font-bold leading-6">
              <div className="h-20 rounded-lg flex items-center justify-center bg-purple-300 shadow-lg">
                01
              </div>
              <div className="h-20 rounded-lg flex items-center justify-center justify-self-auto bg-purple-500 shadow-lg">
                02
              </div>
              <div className="h-20 rounded-lg flex items-center justify-center bg-purple-300 shadow-lg">
                03
              </div>
            </div>
            {/* show code */}
            <div className="text-gray-600 text-md font-thin rounded-md bg-gradient-to-r from-purple-500 to-transparent my-2">
              <p className="italic ml-6 pt-3">
                [เขียนโค้ดทั้งที่ parent และ child]
              </p>
              <pre className="mx-3 px-3 pb-3 text-[16px]">
                &lt;div className="
                <span className="italic text-gray-900">
                  grid justify-items-stretch ...
                </span>
                "&gt;
                <br />
                {'  '}&lt;div className="..."&gt;01&lt;/div&gt;
                <br />
                {'  '}&lt;div className="
                <span className="italic text-gray-900">justify-self-auto</span>
                "&gt;02&lt;/div&gt;
                <br />
                &lt;/div&gt;
              </pre>
            </div>
          </div>
          <div className="relative rounded-xl overflow-auto p-8 font-bold">
            <div className="absolute -z-1 inset-0 left-10 text-gray-700 text-lg rounded-md">
              <pre>2. start</pre>
            </div>
            <div className="bg-stripes-pink grid grid-cols-3 gap-4 justify-items-stretch font-mono text-white text-sm font-bold leading-6">
              <div className="h-20 rounded-lg flex items-center justify-center bg-pink-300 shadow-lg">
                01
              </div>
              <div className="h-20 w-20 rounded-lg flex items-center justify-center justify-self-start bg-pink-500 shadow-lg">
                02
              </div>
              <div className="h-20 rounded-lg flex items-center justify-center bg-pink-300 shadow-lg">
                03
              </div>
            </div>
            {/* show code */}
            <div className="text-gray-600 text-md font-thin rounded-md bg-gradient-to-r from-pink-500 to-transparent my-2">
              <p className="italic ml-6 pt-3">
                [เขียนโค้ดทั้งที่ parent และ child]
              </p>
              <pre className="mx-3 px-3 pb-3 text-[16px]">
                &lt;div className="
                <span className="italic text-gray-900">
                  grid justify-items-stretch ...
                </span>
                "&gt;
                <br />
                {'  '}&lt;div className="..."&gt;01&lt;/div&gt;
                <br />
                {'  '}&lt;div className="
                <span className="italic text-gray-900">justify-self-start</span>
                "&gt;02&lt;/div&gt;
                <br />
                &lt;/div&gt;
              </pre>
            </div>
          </div>
          <div className="relative rounded-xl overflow-auto p-8 font-bold">
            <div className="absolute -z-1 inset-0 left-10 text-gray-700 text-lg rounded-md">
              <pre>3. center</pre>
            </div>
            <div className="bg-stripes-indigo grid grid-cols-3 gap-4 justify-items-stretch font-mono text-white text-sm font-bold leading-6">
              <div className="h-20 rounded-lg flex items-center justify-center bg-indigo-300 shadow-lg">
                01
              </div>
              <div className="h-20 w-20 rounded-lg flex items-center justify-center justify-self-center bg-indigo-500 shadow-lg">
                02
              </div>
              <div className="h-20 rounded-lg flex items-center justify-center bg-indigo-300 shadow-lg">
                03
              </div>
            </div>
          </div>
          <div className="relative rounded-xl overflow-auto p-8 font-bold">
            <div className="absolute -z-1 inset-0 left-10 text-gray-700 text-lg rounded-md">
              <pre>4. end</pre>
            </div>
            <div className="bg-stripes-blue grid grid-cols-3 gap-4 justify-items-stretch font-mono text-white text-sm font-bold leading-6">
              <div className="h-20 rounded-lg flex items-center justify-center bg-blue-300 shadow-lg">
                01
              </div>
              <div className="h-20 w-20 rounded-lg flex items-center justify-center justify-self-end bg-blue-500 shadow-lg">
                02
              </div>
              <div className="h-20 rounded-lg flex items-center justify-center bg-blue-300 shadow-lg">
                03
              </div>
            </div>
          </div>
          <div className="relative rounded-xl overflow-auto p-8 font-bold">
            <div className="absolute -z-1 inset-0 left-10 text-gray-700 text-lg rounded-md">
              <pre>5. stretch</pre>
            </div>
            <div className="bg-stripes-fuchsia grid grid-cols-3 gap-4 justify-items-start font-mono text-white text-sm font-bold leading-6">
              <div className="h-20 rounded-lg flex items-center justify-center bg-fuchsia-300 shadow-lg w-20">
                01
              </div>
              <div className="h-20 rounded-lg flex items-center justify-center justify-self-stretch bg-fuchsia-500 shadow-lg">
                02
              </div>
              <div className="h-20 rounded-lg flex items-center justify-center bg-fuchsia-300 shadow-lg w-20">
                03
              </div>
            </div>
          </div>
          <div className="font-mono italic pl-8 my-8 text-red-600">
            <p className="grid grid-cols-2 justify-items-stretch auto-rows-fr">
              <span>***justify-items และ justify-self</span>{' '}
              <span>
                <b className="text-bold text-lg">เหมือนกันตรง:</b> ใช้งานร่วมกับ
                grid
              </span>
            </p>
            <p className="grid grid-cols-2 justify-items-stretch auto-rows-fr">
              <span> </span>{' '}
              <span>
                <b className="text-bold text-lg">ต่างกันตรง:</b>
              </span>
            </p>
            <p className="grid grid-cols-2 justify-items-stretch auto-rows-fr">
              <span> </span>{' '}
              <ul>
                <li>- justify-items เขียนโค้ดที่ parent</li>
                <li>- justify-self เขียนโค้ดที่ child</li>
              </ul>
            </p>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default JustifySelf;
