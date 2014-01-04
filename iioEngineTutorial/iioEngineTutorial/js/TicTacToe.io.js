
TicTacToe = function(io){
	var grid = new iio.Grid(0,0,3,3,150);
	io.addObj(grid);
	grid.setStrokeStyle('red',4);
	io.draw();
	var xTurn = true;
	io.canvas.addEventListener('mousedown', function(event){
		//create an alert box and display input coordinates
		var cell = grid.getCellAt(io.getEventPosition(event));
		//create an alert box and display the cell coordinates
		var cellCenter = grid.getCellCenter(cell);

	    if (xTurn)
	        io.addObj(new iio.XShape(cellCenter, 100));
	      else
	        io.addObj((new iio.Circle(cellCenter, 50))
	            .setStrokeStyle('black'));
	   
	      xTurn=!xTurn;

		
	});
};

