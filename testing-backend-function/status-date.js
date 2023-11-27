module.exports.status_date = (req, res) => {
  // POST request used to find the items and there available statuses
  // For example whether an item is pending or not pending etc.
  // Start and End Date should be parsed in

  // Step 1. Get all items.
  // Step 2. Get loan status for all items.
  var results = [];
  con.query("select * from item", function (err, result) {
    if (err) {
      console.log(`Error Code: ${err.code}`);
      console.log(`Error Message: ${err.sqlMessage}`);
      res.status(406).json({ response: "rejected" });
    } else {
      console.log(result);
      let item_data = result;
      for (let index = 0; index < item_data.length; index++) {
        console.log("First for loop was hit");
        con.query(
          `select loan_status from loan where item_id = '${item_data[index].item_id}' and loan_date = '${req.body.loan_date}' and return_date = '${req.body.return_date}'`,
          function (err, result) {
            if (err) {
              console.log(`Error Code: ${err.code}`);
              console.log(`Error Message: ${err.sqlMessage}`);
              res.status(406).json({ response: "rejected" });
            } else {
              console.log(result);
              if (result.length === 0) {
                results.push({
                  item_id: item_data[index].item_id,
                  item_name: item_data[index].item_name,
                  loan_status: "Available",
                });
              } else {
                results.push({
                  item_id: item_data[index].item_id,
                  item_name: item_data[index].item_name,
                  loan_status: result[0].loan_status,
                });
              }
            }
          }
        );
      }

      console.log(results);
      res.status(200).json({ results });
    }
  });
};
