class TowersOfHanoi
  def initialize(numberOfDisks, startTower, endTower)
    @totalNumberOfDisks = numberOfDisks
    @initialStartTower = startTower - 1
    @finalEndTower = endTower - 1
    @tower_contents = {0 => [], 1 => [], 2 => []}
    @tower_contents[@initialStartTower] = (0...@totalNumberOfDisks).to_a.reverse
    @disk_position = []
    (0...@totalNumberOfDisks).to_a.each {|i| @disk_position[i] = @initialStartTower}
    @totalNumberOfMovesMade = 0;
  end

  def solve
    move(@totalNumberOfDisks, @initialStartTower, @finalEndTower)
    puts "Total number of moves made = #{@totalNumberOfMovesMade}"
  end

  def move(numberOfDisks, startTower, endTower)
    if numberOfDisks == 1
      disk = @tower_contents[startTower].pop
      @disk_position[disk] = endTower
      @tower_contents[endTower].push disk
      @totalNumberOfMovesMade += 1;
    else
      tempTower = findTempTower(startTower, endTower)
      move(numberOfDisks - 1, startTower, tempTower)
      move(1, startTower, endTower)
      move(numberOfDisks - 1, tempTower, endTower)
    end
  end

  def findTempTower(startTower, endTower)
    tempTower = 3 - startTower - endTower
  end
end