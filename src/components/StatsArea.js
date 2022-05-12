

function StatsArea({ currentPoints }) {
  return (
    <div className="StatsArea fluid pd-0">

        <div className="p-2">   
          Points
          ⭐
          {currentPoints}
        </div>
    </div>
  );
}

export default StatsArea;