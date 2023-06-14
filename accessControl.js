const accessController = {
  controlMap: new Map(),
  registerVisitToUserProfile(userName) {
    const name = userName.toLowerCase();
    if (!this.controlMap.has(name)) {
      this.controlMap.set(name, 1);
      return;
    }
    const lastCount = this.controlMap.get(name);
    this.controlMap.set(name, lastCount + 1);
  },
  getVisitsByUserName(name) {
    return this.controlMap.get(name.toLowerCase()) ?? 0;
  },
};

module.exports = accessController;
