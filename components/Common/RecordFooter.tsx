import Button from "./Button";

export default function RecordFooter() {
    return (
        <div id="root" className="flex justify-center gap-4">
            <Button title="취소"/>
            <Button title="완료"/>
        </div>
    )
}