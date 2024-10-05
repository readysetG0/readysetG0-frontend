export default function Divider({ gap }: { gap?: string }) {
    return (
        <div id="root" className="w-full h-[0.1rem] bg-rsgGreen-primary" style={{ marginTop: gap, marginBottom: gap }}></div>
    )
}