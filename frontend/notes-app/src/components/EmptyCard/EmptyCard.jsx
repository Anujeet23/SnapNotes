import { MdCreate, MdDelete, MdOutlinePushPin } from "react-icons/md";

const EmptyCard = () => {
  return (
    <>
      <div>
        <div className="border mx-6 rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out">
          <div className="flex items-center justify-between">
            <div>
              <h6 className="text-sm font-medium"></h6>
              {/* <span className="text-xs text-slate-500">
              {moment(date).format("Do MMM YYYY")}
            </span> */}
            </div>

            <MdOutlinePushPin className={`icon-btn`} />
          </div>
          <p className="text-xs text-slate-600 mt-2"></p>

          <div className="flex items-center justify-between mt-2">
            <div className="text-xs text-slate-500"></div>
            <div className="flex items-center gap-2">
              <MdCreate className="icon-btn cursor-pointer hover:text-green-600" />
              <MdDelete className="icon-btn  cursor-pointer hover:text-red-500" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyCard;
