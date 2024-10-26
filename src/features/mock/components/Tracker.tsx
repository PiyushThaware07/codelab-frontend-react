import Button from "../../../components/button/Button";
import { useAppDispatch } from "../../../store/store";
import { handleNavigate } from "../reducer/MockDriveOnlineTestReducer";
import { DataType, SelectOptionType } from "../types/MockDriveOnlineTest";


// ! TRACKING
const Tracking: React.FC<{ data: DataType }> = ({ data }) => {
    const dispatch = useAppDispatch();
    const mapData: DataType = data;
    const currentIndex = mapData?.currentIndex;
    const currentQuestions = mapData?.currentQuestions?.questions || [];
    const selectedOptions = mapData?.selectedOptions || [];

    return (
        <div className="tracking flex flex-wrap items-center justify-center gap-2 w-full">
            {new Array(currentQuestions.length).fill(null).map((_, index) => (
                <Button
                    key={index}
                    type="button"
                    onClick={() => dispatch(handleNavigate(index))}
                    className={`text-[12px] 
        ${currentIndex === index ? "bg-gray-100 scale-110" : (selectedOptions.find((option: SelectOptionType) => option?.questionId === currentQuestions[index]?.id) ? "bg-indigo-100 border-indigo-200" : "hover:bg-gray-100 hover:scale-110")}
        transition-all duration-300 ease-in-out tracking-wide font-medium h-9 w-9 border rounded-md inline-block`}>
                    {index + 1 > 9 ? index + 1 : `0${index + 1}`}
                </Button>

            ))}
        </div>
    )
}

export default Tracking;