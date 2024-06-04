import React from 'react'

const Api = ({open}) => {
  return (
    <div
    className={`${
      open
        ? "lg:w-[65%] lg:left-[30%] left-[10rem] w-[60%] sm:left-[15rem] md:w-[70%] sm:w-[62%] xl:w-[75%] xl:left-[23%] xm:w-[68%]"
        : "lg:w-[89%] lg:left-[10%] w-[70%] left-[25%]"
    } fixed  gap-[24px] lg:top-[4.6rem] xl:top-[5rem] bg-black h-[85vh] rounded-3xl text-white   w-64 top-[6.9rem] sm:top-[4.9rem] `}
  >
    <div className="p-6 flex flex-wrap gap-2 pt-4">
      <div className="space-y-1">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pl-0.5">
          Search
        </label>
        <div className="flex">
          <div className="space-y-1">
            <button
              type="button"
              role="combobox"
              aria-controls="radix-:rie:"
              aria-expanded="false"
              aria-autocomplete="none"
              dir="ltr"
              data-state="closed"
              className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-[hsl(240,5%,50%)] focus:outline-none focus:ring-1 focus:ring-ring focus:border disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 min-w-28 rounded-r-none border-r-0"
            >
              <span style={{ pointerEvents: "none" }}>11labs</span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 opacity-50"
                aria-hidden="true"
              >
                <path
                  d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col">
            <input
              placeholder="Search by name, provider ID or slug"
              className="flex h-9 rounded-md text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[hsl(240,5%,50%)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 bg-transparent p-2 w-[260px] font-lg shadow border rounded-l-none border-input"
              value=""
            />
          </div>
        </div>
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pl-0.5">
          Gender
        </label>
        <button
          type="button"
          role="combobox"
          aria-controls="radix-:rif:"
          aria-expanded="false"
          aria-autocomplete="none"
          dir="ltr"
          data-state="closed"
          className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-[hsl(240,5%,50%)] focus:outline-none focus:ring-1 focus:ring-ring focus:border disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 min-w-40"
        >
          <span style={{ pointerEvents: "none" }}>all</span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 opacity-50"
            aria-hidden="true"
          >
            <path
              d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pl-0.5">
          Accent
        </label>
        <button
          type="button"
          role="combobox"
          aria-controls="radix-:rig:"
          aria-expanded="false"
          aria-autocomplete="none"
          dir="ltr"
          data-state="closed"
          data-placeholder=""
          className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-[hsl(240,5%,50%)] focus:outline-none focus:ring-1 focus:ring-ring focus:border disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 min-w-40"
        >
          <span style={{ pointerEvents: "none" }}>Accent</span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 opacity-50"
            aria-hidden="true"
          >
            <path
              d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex flex-col justify-end pb-1 space-y-2">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Don't see your voice?
        </label>
        <button
          className="inline-flex items-center justify-center whitespace-nowrap transition-colors focus:border outline-1 outline-ring focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary border-primary text-primary-foreground shadow hover:bg-primary/90 h-8 rounded-md px-3 text-xs min-w-20 font-bold disabled:cursor-not-allowed"
          disabled
        >
          Sync with 11labs
        </button>
      </div>
    </div>
    <div className="border border-border py-4 px-4 flex flex-col flex-1 gap-2 rounded-md">
      <div>
        <div className="capitalize text-sm font-bold">James</div>
        <div className="text-xs text-muted-foreground flex">
          <div className="overflow-hidden ellipsis whitespace-nowrap pr-4">
            ZQe5CZNOzWyzPSCn5a3c
          </div>
          <button
            type="button"
            className="chakra-button css-19hc8tm"
            aria-label="Copy ID"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="capitalize text-xs text-muted-foreground">
          male | australian
        </div>
      </div>
      <div className="flex flex-1 min-w-48">
        <div className="flex basis-4 flex-1 items-center justify-center text-xs px-2 -mx-3">
          <div className="inline-flex gap-1 w-full">
            <button>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <path
                  d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="w-full flex gap-2">
              <span>0:00</span>
              <span
                dir="ltr"
                data-orientation="horizontal"
                aria-disabled="false"
                className="relative flex w-full touch-none select-none items-center"
              >
                <span
                  data-orientation="horizontal"
                  className="relative h-1 w-full grow overflow-hidden rounded-full bg-primary/20"
                >
                  <span
                    data-orientation="horizontal"
                    className="absolute h-full bg-primary"
                    style={{ left: "0%", right: "100%" }}
                  ></span>
                </span>
                <span
                  style={{
                    transform: "translateX(-50%)",
                    position: "absolute",
                    left: "calc(0% + 8px)",
                  }}
                >
                  <span
                    role="slider"
                    aria-valuemin="0"
                    aria-valuemax="5.041625"
                    aria-orientation="horizontal"
                    data-orientation="horizontal"
                    tabIndex="0"
                    className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    aria-valuenow="0"
                    style={{}}
                  ></span>
                </span>
              </span>
              <span>0:05</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Api