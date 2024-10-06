export default function Divider({ gap }: { gap?: string }) {
    return (
        <div id="root" className="fixed left-0 right-0 w-full h-[0.1rem] bg-rsgGreen-primary" style={{ marginTop: gap, marginBottom: gap }}></div>
    )
}