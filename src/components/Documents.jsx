import React from 'react'

const Documents = ({open}) => {
  return (
    <div
          className={`${
            open
              ? "lg:w-[65%] lg:left-[30%] left-[10rem] w-[60%] sm:left-[15rem] md:w-[70%] sm:w-[62%] xl:w-[75%] xl:left-[23%] xm:w-[68%]"
              : "lg:w-[89%] lg:left-[10%] w-[70%] left-[25%]"
          } fixed  gap-[24px] lg:top-[4.6rem] xl:top-[5rem] bg-black h-[85vh] rounded-3xl text-white   w-64 top-[6.9rem] sm:top-[4.9rem] `}
        >
          <div className="flex flex-1 h-full">
            <div className="overflow-y-auto" data-testid="documents-menu-panel">
              <div className="flex flex-col p-4 sticky top-0 gap-2 border-b border-white/5">
                <div className="flex gap-2">
                  <div className="flex flex-col flex-1 gap-4">
                    <div className="w-full max-w-72">
                      <div className="space-y-2">
                        <div
                          role="presentation"
                          tabIndex="0"
                          className="dropzone group relative  border-dashed border-[3px] min-h-20 flex flex-col items-center justify-center text-wrap mx-auto rounded-xl p-4 cursor-pointer active:scale-[0.98] transition-all duration-150 ease-in-out bg-black/10 border-white/10 hover:border-white/20"
                        >
                          <input
                            accept="text/markdown,application/pdf,text/plain,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            type="file"
                            tabIndex="-1"
                            name="file"
                            value=""
                            style={{ display: "none" }}
                          />
                          <svg
                            width="23.3887"
                            height="27.666"
                            viewBox="0 0 23.3887 27.666"
                            fill="none"
                            stroke="none"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-12 h-12 mb-2 fill-white/30 group-hover:fill-white/40"
                          >
                            <g>
                              <rect
                                height="27.666"
                                opacity="0"
                                width="23.3887"
                                x="0"
                                y="0"
                              ></rect>
                              <path
                                d="M19.1992 9.6582L22.4707 13.8574C22.9102 14.4043 23.0273 14.8242 23.0273 15.7129L23.0273 21.1035C23.0273 23.1152 22.0117 24.1309 19.9609 24.1309L3.06641 24.1309C1.02539 24.1309 0 23.1152 0 21.1035L0 15.7129C0 14.8242 0.126953 14.4043 0.556641 13.8574L3.81836 9.6875C5.0293 8.14453 5.47852 7.8418 7.2168 7.8418L9.23828 7.8418L9.23828 9.21875L7.09961 9.21875C6.38672 9.21875 5.91797 9.3457 5.35156 10.0781L2.00195 14.4238C1.64062 14.8828 1.72852 15.1172 2.29492 15.1172L8.30078 15.1172C8.84766 15.1172 9.11133 15.5371 9.11133 15.9668L9.11133 16.0059C9.11133 17.207 10.0488 18.4668 11.5137 18.4668C12.9883 18.4668 13.9258 17.207 13.9258 16.0059L13.9258 15.9668C13.9258 15.5371 14.1797 15.1172 14.7266 15.1172L20.752 15.1172C21.2891 15.1172 21.416 14.9219 21.0352 14.4238L17.6562 10.0488C17.1094 9.33594 16.6406 9.21875 15.9277 9.21875L13.7891 9.21875L13.7891 7.8418L15.8105 7.8418C17.5488 7.8418 18.0176 8.14453 19.1992 9.6582Z"
                                fillOpacity="0.85"
                              ></path>
                              <path
                                d="M11.5137 15.8887C11.9336 15.8887 12.2949 15.5371 12.2949 15.127L12.2949 5.09766L12.2266 3.64258L12.8906 4.32617L14.3652 5.9082C14.502 6.06445 14.707 6.14258 14.9023 6.14258C15.3027 6.14258 15.6055 5.84961 15.6055 5.45898C15.6055 5.24414 15.5273 5.08789 15.3809 4.94141L12.0801 1.75781C11.8848 1.5625 11.7188 1.49414 11.5137 1.49414C11.3184 1.49414 11.1426 1.5625 10.9473 1.75781L7.64648 4.94141C7.5 5.08789 7.42188 5.24414 7.42188 5.45898C7.42188 5.84961 7.71484 6.14258 8.11523 6.14258C8.31055 6.14258 8.51562 6.06445 8.66211 5.9082L10.1367 4.32617L10.8008 3.63281L10.7422 5.09766L10.7422 15.127C10.7422 15.5371 11.0938 15.8887 11.5137 15.8887Z"
                                fillOpacity="0.85"
                              ></path>
                            </g>
                          </svg>
                          <p className="text-sm text-white/30 font-semibold text-center">
                            Drag 'n' drop a file here, or click to select file
                            locally
                          </p>
                          <ul className="justify-self-end mt-auto"></ul>
                        </div>
                      </div>
                    </div>
                    <button
                      className="items-center whitespace-nowrap focus:border outline-1 outline-ring focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 shadow py-2 group flex px-1 w-full h-10 justify-center text-sm font-bold text-white rounded-lg border bg-primary/30 border-white/5 hover:bg-primary/50 hover:border-primary/30 active:scale-[0.98] transition-all duration-100 ease-in-out"
                      disabled
                    >
                      Upload
                      <svg
                        width="20.2832"
                        height="19.9316"
                        viewBox="0 0 20.2832 19.9316"
                        fill="none"
                        stroke="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 ml-2 fill-white/30 group-hover:fill-primary"
                      >
                        <g>
                          <rect
                            height="19.9316"
                            opacity="0"
                            width="20.2832"
                            x="0"
                            y="0"
                          ></rect>
                          <path
                            d="M19.9219 9.96094C19.9219 15.4004 15.4102 19.9219 9.96094 19.9219C4.52148 19.9219 0 15.4004 0 9.96094C0 4.51172 4.51172 0 9.95117 0C15.4004 0 19.9219 4.51172 19.9219 9.96094ZM9.11133 6.05469L9.11133 9.11133L6.05469 9.11133C5.54688 9.11133 5.19531 9.46289 5.19531 9.9707C5.19531 10.4688 5.54688 10.8008 6.05469 10.8008L9.11133 10.8008L9.11133 13.8672C9.11133 14.3652 9.45312 14.7266 9.95117 14.7266C10.459 14.7266 10.8105 14.375 10.8105 13.8672L10.8105 10.8008L13.877 10.8008C14.375 10.8008 14.7363 10.4688 14.7363 9.9707C14.7363 9.46289 14.375 9.11133 13.877 9.11133L10.8105 9.11133L10.8105 6.05469C10.8105 5.54688 10.459 5.18555 9.95117 5.18555C9.45312 5.18555 9.11133 5.54688 9.11133 6.05469Z"
                            fillOpacity="0.85"
                          ></path>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="-mt-2" data-testid="documents-menu">
                <div
                  role="list"
                  data-testid="assistants-list"
                  className="flex flex-col w-[320px] p-4 overflow-auto"
                ></div>
              </div>
            </div>
            <div className="sc-jTQCzO iaoTAs"></div>
            <div className="flex flex-1  items-center pl-48">
              <div
                className="text-center text-muted-foreground  "
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="flex justify-center">
                  <svg
                    width="29.375"
                    height="27.2754"
                    viewBox="0 0 29.375 27.2754"
                    fill="none"
                    stroke="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mb-2 w-[100px] h-[100px] fill-white/20"
                  >
                    <g>
                      <rect
                        height="27.2754"
                        opacity="0"
                        width="29.375"
                        x="0"
                        y="0"
                      ></rect>
                      <path
                        d="M13.7988 10.332C13.7988 11.582 14.3945 12.1777 15.6445 12.1777L22.7148 12.1777L22.7148 21.0449C22.7148 23.0762 21.709 24.1016 19.6875 24.1016L11.7376 24.1016C12.279 23.182 12.5879 22.1158 12.5879 20.9863C12.5879 17.5293 9.74609 14.6875 6.28906 14.6875L6.28906 6.23047C6.28906 4.19922 7.30469 3.16406 9.31641 3.16406L13.7988 3.16406ZM16.4062 4.0918L21.7871 9.57031C22.2559 10.0488 22.5391 10.4395 22.5977 10.8398L15.6738 10.8398C15.3125 10.8398 15.1367 10.6641 15.1367 10.3125L15.1367 3.27148C15.5469 3.33984 15.9473 3.62305 16.4062 4.0918Z"
                        fillOpacity="0.85"
                      ></path>
                      <path
                        d="M11.25 20.9863C11.25 23.6914 8.98438 25.9473 6.28906 25.9473C3.57422 25.9473 1.32812 23.7109 1.32812 20.9863C1.32812 18.2617 3.57422 16.0254 6.28906 16.0254C9.01367 16.0254 11.25 18.2617 11.25 20.9863ZM5.69336 18.4766L5.69336 20.3809L3.7793 20.3809C3.42773 20.3809 3.18359 20.625 3.18359 20.9863C3.18359 21.3477 3.42773 21.582 3.7793 21.582L5.69336 21.582L5.69336 23.4961C5.69336 23.8477 5.92773 24.0918 6.28906 24.0918C6.66016 24.0918 6.89453 23.8477 6.89453 23.4961L6.89453 21.582L8.79883 21.582C9.16016 21.582 9.39453 21.3477 9.39453 20.9863C9.39453 20.625 9.16016 20.3809 8.79883 20.3809L6.89453 20.3809L6.89453 18.4766C6.89453 18.125 6.66016 17.8809 6.28906 17.8809C5.92773 17.8809 5.69336 18.125 5.69336 18.4766Z"
                        fillOpacity="0.85"
                      ></path>
                    </g>
                  </svg>
                </div>
                <h2 className="text-2xl font-medium text-white">
                  No Files Found
                </h2>
                <p className="text-md text-white/40">
                  Upload a document to get started.
                </p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Documents