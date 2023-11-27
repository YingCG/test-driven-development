module.exports.status_date = async (req, res) => {
  try {
    const itemData = await new Promise((resolve, reject) => {
      con.query("SELECT * FROM item", (err, result) => {
        if (err) {
          console.log(`Error Code: ${err.code}`);
          console.log(`Error Message: ${err.sqlMessage}`);
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    const results = [];

    for (let index = 0; index < itemData.length; index++) {
      console.log("First for loop was hit");
      const loanData = await new Promise((resolve, reject) => {
        con.query(
          `SELECT loan_status FROM loan WHERE item_id = '${itemData[index].item_id}' AND loan_date = '${req.body.loan_date}' AND return_date = '${req.body.return_date}'`,
          (err, result) => {
            if (err) {
              console.log(`Error Code: ${err.code}`);
              console.log(`Error Message: ${err.sqlMessage}`);
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });

      if (loanData.length === 0) {
        results.push({
          item_id: itemData[index].item_id,
          item_name: itemData[index].item_name,
          loan_status: "Available",
        });
      } else {
        results.push({
          item_id: itemData[index].item_id,
          item_name: itemData[index].item_name,
          loan_status: loanData[0].loan_status,
        });
      }
    }

    console.log(results);
    res.status(200).json({ results });
  } catch (error) {
    console.error(error);
    res.status(406).json({ response: "rejected" });
  }
};
