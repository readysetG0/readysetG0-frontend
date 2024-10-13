export interface TagProps {
    title: string;
    focus?: boolean;
    handleClick?: (title: string) => void;
}