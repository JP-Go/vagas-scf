const accessController = {
  controlMap: new Map(),
  registerVisitToUserProfile(userName) {
    if (!this.controlMap.has(userName)) {
      this.controlMap.set(userName, 1);
      return;
    }
    const lastCount = this.controlMap.get(userName);
    this.controlMap.set(userName, lastCount + 1);
  },
  getVisitsByUserName(name) {
    return this.controlMap.get(name) ?? 0;
  },
};

module.exports = accessController;
