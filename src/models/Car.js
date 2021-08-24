module.exports = (connection, DataTypes) => {
  const schema = {
    marka: DataTypes.STRING,
    model: DataTypes.STRING,
    renk: DataTypes.STRING,
    yil: DataTypes.INTEGER,
    satilik: DataTypes.BOOLEAN,
  };

  const CarModel = connection.define('Car', schema);
  return CarModel;
};
