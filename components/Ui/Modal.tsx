type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function Modal({ children, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center">
      
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      {/* MODAL BOX */}
      <div className="relative bg-white p-6 rounded-lg w-[90%] md:w-[400px] z-[100000]">
        
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