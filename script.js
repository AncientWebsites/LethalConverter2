document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateButton').addEventListener('click', function() {
        var soldAmount = parseFloat(document.getElementById('soldAmount').value);
        var currentQuota = parseFloat(document.getElementById('currentQuota').value);
        var daysUntilSell = parseFloat(document.getElementById('daysUntilSell').value);
      
        var overtimeBonus = Math.round((soldAmount - currentQuota) / 5 - 15 * daysUntilSell); // Round to the nearest whole integer
      
        document.getElementById('overtimeBonus').textContent = "Overtime Bonus: $" + overtimeBonus;
      });
  });
  