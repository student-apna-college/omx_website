type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function Modal({ children, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[9999]">

      <div className="bg-white p-6 rounded-lg w-[90%] md:w-[400px] relative">

        {children}

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl text-red-500"
        >
          ✕
        </button>

      </div>
    </div>
  );
}