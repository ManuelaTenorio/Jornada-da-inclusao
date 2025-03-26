class Builder {
  constructor() {
  }

  name;
  desc;
  elementList;
  isRandom = false;
  isDraggable = false;
  timer = 0;

  setName(name) {
    this.name = name;
  }

  setDesc(desc) {
    this.desc = desc;
  }

  setRandom(bool) {
    if (bool === true) {
      this.isRandom = true
    }
  }

  setDraggable(bool) {
    if (bool === true) {
      this.isDraggable = true;
    }
  }

  setTimer(number) {
    this.timer = number;
  }

  setElements(Component, obj) {
    const listElements = obj.map(element =>
      <Component key={obj.indexOf(element)} value={element} />
    );

    this.elementList = listElements;
  }

  render() {
    return (
      <div className={styles.container}>
        <h1>{this.name}</h1>
        <p>{this.description}</p>
        {this.isDraggable && <DropBox />}
        <div className={styles.numberGrid}>
          {this.isRandom ? random(this.elementList) : this.elementList}
        </div>
      </div>
    )
  }
}
