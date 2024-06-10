import React from 'react';

interface NotificationProps {
  moves: number;
  onRestart: () => void;
}

const Notification: React.FC<NotificationProps> = ({ moves, onRestart }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative flex items-center justify-center w-full">
        <img
          src="/src/assets/gif.gif"
          alt="Background GIF"
          className="absolute w-[400px] max-w-none h-[400px] object-cover opacity-75"
        />
        <section className="relative z-10 rounded-3xl shadow-2xl bg-white p-4 text-center w-80">
          <p className="text-sm font-semibold uppercase tracking-widest text-pink-500">
            Congratulations!
          </p>
          <h2 className="mt-2 text-xl font-bold">All pairs found!</h2>
          <p className="mt-2 text-sm">Moves: {moves}</p>
          <button
            className="mt-4 w-full rounded-full bg-pink-600 py-2 text-sm font-bold text-white shadow-xl"
            onClick={onRestart}
          >
            Play Again
          </button>
        </section>
      </div>
    </div>
  );
};

export default Notification;
