import React from 'react';

const JustifyItems = () => {
  return (
    <>
      <div className="mt-4 -mb-3">
        <div className="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25">
          <article className="group flex flex-col mx-auto text-center whitespace-pre-wrap font-mono mb-6">
            <h1 className="text-[48px]">justify-items</h1>
            <p>ใช้สำหรับวางตำแหน่ง children ที่อยู่ใน grid (Horizontal)</p>
          </article>
          <div className="absolute inset-0 bg-grid-slate-100 mask1 dark:bg-grid-slate-700 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1), rgba(255,255,255,0.5))] bg-justify-items"></div>
          <div className="relative rounded-xl overflow-auto p-8">
            <div className="grid grid-cols-3 gap-4 font-mono text-white text-sm font-bold leading-6">
              <div className="absolute -z-1 top-0 left-10 text-gray-700 text-lg rounded-md">
                <pre>1. start</pre>
              </div>
              <div className="bg-stripes-sky grid rounded-lg justify-items-start">
                <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-sky-500 shadow-lg">
                  01
                </div>
                {/* <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-sky-500 shadow-lg">
                  01.2
                </div> */}
              </div>
              <div className="absolute -z-1 top-0 left-[280px] text-gray-700 text-lg rounded-md">
                <pre>2. end</pre>
              </div>
              <div className="bg-stripes-cyan grid rounded-lg justify-items-end">
                <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-cyan-500 shadow-lg">
                  02
                </div>
              </div>
              <div className="absolute -z-1 top-0 right-[150px] text-gray-700 text-lg rounded-md">
                <pre>3. center</pre>
              </div>
              <div className="bg-stripes-fuchsia grid rounded-lg justify-items-center">
                <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">
                  03
                </div>
              </div>
            </div>
          </div>
          {/* <div className="absolute inset-0 bg-grid-slate-100 mask1 dark:bg-grid-slate-700 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1), rgba(255,255,255,0.5))] bg-justify-items"></div>
          <div className="relative rounded-xl overflow-auto p-8">
            <div className="grid grid-cols-3 gap-4 font-mono text-white text-sm font-bold leading-6">
              <div className="bg-stripes-sky grid rounded-lg justify-items-start">
                <div className="absolute -z-1 inset-0 left-10 text-gray-700 text-lg rounded-md">
                  <pre>1. flex-start</pre>
                </div>
                <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-sky-500 shadow-lg">
                  01
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="absolute inset-0 bg-grid-slate-100 mask1 dark:bg-grid-slate-700 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1), rgba(255,255,255,0.5))] bg-justify-items"></div>
          <div className="relative rounded-xl overflow-auto p-8">
            <div className="grid grid-cols-3 gap-4 font-mono text-white text-sm font-bold leading-6">
              <div className="bg-stripes-sky grid rounded-lg justify-items-start">
                <div className="absolute -z-1 inset-0 left-10 text-gray-700 text-lg rounded-md">
                  <pre>1. flex-start</pre>
                </div>
                <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-sky-500 shadow-lg">
                  01
                </div>
              </div>
            </div>
          </div> */}
          <div className="absolute inset-0 bg-grid-slate-100 mask1 dark:bg-grid-slate-700 dark:mask2 bg-justify-items"></div>
          <div className="relative rounded-xl overflow-auto p-8 font-bold">
            <div className="absolute -z-1 inset-0 left-10 text-gray-700 text-lg rounded-md">
              <pre>4. stretch</pre>
            </div>
            <div className="bg-stripes-blue grid grid-cols-3 gap-4 justify-items-stretch font-mono text-white text-sm font-bold leading-6">
              <div className="h-20 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg">
                01
              </div>
              <div className="h-20 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg">
                02
              </div>
              <div className="h-20 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg">
                03
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JustifyItems;
