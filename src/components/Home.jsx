import React from 'react'

const Home = ({ Markdown, generateRes, setPrompt, prompt, res }) => {
    return (
        <div>
            <div>
                <div className='flex items-center justify-center flex-col min-h-[30vh]'>
                    <h3 style={{ lineHeight: 1 }} className='text-[60px] font-[500] text-center'>A Free <span className='text-purple-600'>AI</span> For Generating The <br /> Video Script</h3>
                </div>
            </div>

            <div className="textarea flex items-center justify-center flex-col mt-[10px]">
                <textarea onChange={(e) => { setPrompt(e.target.value) }} value={prompt} name="prompt" className='bg-[#f4f4f4] border-0 outline-0 min-w-[50vw] min-h-[130px] p-[20px] rounded-[10px]' id="prompt" placeholder="Describe your video topic."></textarea>
                <button onClick={generateRes} className="gen p-[10px] bg-purple-600 text-white rounded-sm mt-[20px] min-w-[200px] transition-all duration-300 hover:bg-purple-700">Generate</button>
            </div>
            {res !== "" ?
                <div className="res my-[40px] px-[100px]">
                    <Markdown>{res}</Markdown>
                </div> : ""
            }
        </div>
    )
}

export default Home