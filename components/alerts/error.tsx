interface Props {
  text: string;
}
export default function Error({ text }: Props) {
  return <small className="block text-red-600 text-xs">{text}</small>;
}
