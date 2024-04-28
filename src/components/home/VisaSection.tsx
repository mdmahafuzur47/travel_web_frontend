import { ITabsData, tabsData } from '@/data/visaData'



const VisaSection = () => {
  return (
    <section className='container  my-10 '>
      <div className='flex flex-col items-center gap-6 p-5  mx-10 shadow-xl rounded-2xl '>
        {/* all tabs here */}
        <div className='flex gap-2 justify-center'>
          {
            tabsData.map((tab, index) => {
              return (
                <TabBtn key={index} data={tab} />
              )
            })
          }
        </div>
        <div className='flex gap-5'>
          <SelectionCard topTitle="Select country" input="United States" bottomTitle="Where are you going?" />
          <SelectionCard topTitle="Your nationality" input="Bangladesh" bottomTitle="Where are you going?" />

          <div className='bg-[#F5EEFD] p-3 rounded-md flex items-center gap-5 shadow-md'>
            <div className='flex flex-col gap-2'>
              <p className='font-medium text-gray-500'>Entry date</p>
              <input className='text-xl w-[150px] bg-transparent outline-none font-medium' type="date" onChange={() => { }} />
              <p className='text-sm text-gray-500'>Thursday</p>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='font-medium text-gray-500'>Entry date</p>
              <input className='text-xl w-[150px] bg-transparent outline-none font-medium' type="date" onChange={() => { }} />
              <p className='text-sm text-gray-500'>Thursday</p>
            </div>
          </div>

          <SelectionCard topTitle="Traveller, Class" input="0 Traveller" bottomTitle="Business" />

        </div>

        <button className='primaryBtn px-5 py-2'>Search</button>
      </div>
    </section>
  )
}


const TabBtn = ({ data }: { data: ITabsData }) => {
  return (
    <div className={`${data?.name === "Visa" && "bg-primaryColor text-white"} border border-primaryColor rounded-md flex items-center gap-1 font-medium w-[130px] px-2 py-1 justify-center shadow-sm`}>
      {data?.icon}
      <p>{data?.name}</p>
    </div>
  )
}

const SelectionCard = ({ topTitle, input, bottomTitle }: {
  topTitle: string,
  input: string,
  bottomTitle: string
}) => {
  return (
    <div className='bg-[#F5EEFD] p-3 rounded-md shadow-md'>
      <div className='flex flex-col gap-2'>
        <p className='font-medium text-gray-500'>{topTitle}</p>
        <input className='text-xl bg-transparent outline-none font-medium' type="text" value={input} onChange={() => { }} />
        <p className='text-sm text-gray-500'>{bottomTitle}</p>
      </div>
    </div>
  )
}

export default VisaSection