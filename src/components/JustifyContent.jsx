import React from 'react';

const JustifyContent = () => {
  return (
    <div className="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25">
      <article className="group flex flex-col mx-auto text-center whitespace-pre-wrap font-mono mb-6">
        <h1 className="text-[48px]">justify-content</h1>
        <p>ใช้สำหรับวางตำแหน่ง children ที่อยู่ใน flex และ grid</p>
      </article>
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
      <div className="relative rounded-lg overflow-auto p-8">
        <div className="flex justify-start space-x-4 font-mono text-white text-sm font-bold leading-6 bg-stripes-fuchsia rounded-lg">
          <div className="absolute z-1 top-8 right-8 text-gray-900 text-md rounded-md bg-gradient-to-r from-fuchsia-500 to-transparent">
            <p className="italic ml-3">[เขียนโค้ดที่ parent]</p>
            <pre className="-mt-3 p-2 text-[16px]">
              &lt;div className="flex justify-start ..."&gt;
              <br />
              {'  '}&lt;div className="..."&gt;child:01&lt;/div&gt;
              <br />
              {'  '}&lt;div className="..."&gt;child...&lt;/div&gt;
              <br />
              &lt;/div&gt;
            </pre>
          </div>
          <div className="absolute -z-1 inset-0 left-80 text-gray-700 text-lg rounded-md">
            <pre>1. flex-start</pre>
          </div>
          <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">
            child:01
          </div>
          <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">
            child:02
          </div>
          <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">
            child:03
          </div>
        </div>
      </div>
      <div className="relative rounded-lg overflow-auto p-8">
        <div className="flex justify-center space-x-4 font-mono text-white text-sm font-bold leading-6 bg-stripes-blue rounded-lg">
          <div className="absolute -z-10 top-10 left-10 text-transparent text-[48px] rounded-md">
            <p>parent</p>
          </div>
          <div className="absolute -z-1 inset-0 left-80 text-gray-700 text-lg rounded-md">
            <pre>2. center</pre>
          </div>
          <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg">
            child:01
          </div>
          <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg">
            child:02
          </div>
          <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg">
            child:03
          </div>
        </div>
      </div>
      <div className="relative rounded-lg overflow-auto p-8">
        <div className="flex justify-end space-x-4 font-mono text-white text-sm font-bold leading-6 bg-stripes-cyan rounded-lg">
          <div className="absolute -z-10 top-10 left-10 text-transparent text-[48px] rounded-md">
            <p>parent</p>
          </div>
          <div className="absolute -z-1 inset-0 left-80 text-gray-700 text-lg rounded-md">
            <pre>3. flex-end</pre>
          </div>
          <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-cyan-500 shadow-lg">
            child:01
          </div>
          <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-cyan-500 shadow-lg">
            child:02
          </div>
          <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-cyan-500 shadow-lg">
            child:03
          </div>
        </div>
      </div>
      <div className="relative rounded-lg overflow-auto p-8">
        <div className="flex justify-between space-x-4 font-mono text-white text-sm font-bold leading-6 bg-stripes-pink rounded-lg">
          <div className="absolute -z-10 top-10 left-40 text-transparent text-[48px] rounded-md">
            <p>parent</p>
          </div>
          <div className="absolute -z-1 inset-0 left-80 text-gray-700 text-lg rounded-md">
            <pre>
              4. space-between{' '}
              <span className="italic text-red-600">ใช้ทำ nav bar</span>
            </pre>
          </div>
          <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-pink-500 shadow-lg">
            child:01
          </div>
          <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-pink-500 shadow-lg">
            child:02
          </div>
          <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-pink-500 shadow-lg">
            child:03
          </div>
        </div>
      </div>
      <div className="relative rounded-lg overflow-auto p-8">
        <div className="flex justify-around space-x-4 font-mono text-white text-sm font-bold leading-6 bg-stripes-purple rounded-lg">
          <div className="absolute -z-10 left-[180px] top-10 text-transparent text-[48px] rounded-md">
            <p>parent</p>
          </div>
          <div className="absolute -z-1 inset-0 left-80 text-gray-700 text-lg rounded-md">
            <pre>5. space-around</pre>
          </div>
          <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-purple-500 shadow-lg">
            child:01
          </div>
          <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-purple-500 shadow-lg">
            child:02
          </div>
          <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-purple-500 shadow-lg">
            child:03
          </div>
        </div>
      </div>
      <div className="relative rounded-lg overflow-auto p-8">
        <div className="flex justify-evenly space-x-4 font-mono text-white text-sm font-bold leading-6 bg-stripes-indigo rounded-lg">
          <div className="absolute -z-10 top-10 left-8 text-transparent text-[48px] rounded-md">
            <p>parent</p>
          </div>
          <div className="absolute -z-1 inset-0 left-80 text-gray-700 text-lg rounded-md">
            <pre>6. space-evenly</pre>
          </div>
          <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-indigo-500 shadow-lg">
            child:01
          </div>
          <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-indigo-500 shadow-lg">
            child:02
          </div>
          <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-indigo-500 shadow-lg">
            child:03
          </div>
        </div>
      </div>

      <div className="font-mono pl-8 my-8 text-red-500">
        <p>
          ***ใช้คำสั่ง justify-content ตรง parent เพื่อจัดกลุ่ม children <br />
        </p>
      </div>
    </div>
  );
};

export default JustifyContent;
