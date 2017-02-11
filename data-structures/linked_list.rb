class Node
  attr_accessor :next, :value

  def initialize(next_node, value)
    @next = next_node
    @value = value
  end
end

class LinkedList
  attr_accessor :head

  def initialize(val)
    @head = Node.new(val, nil)
  end

  def add(val)
    current = @head
    while current.next != nil
      current = current.next
    end
    current.next = Node.new(value,nil)
    self
  end

  def delete(val)
    current = @head
    if current.value == val
      @head = @head.next
    else
      while current.next != nil
        current = current.next
        if current.value == val
          current.value = current.next.value || nil
          current.next = current.next.next
        end
      end
    end
    @head
  end
end

a = LinkedList.new(8)
a.delete(8)
p a