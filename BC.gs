package gw.command.demo

uses gw.workqueue.WorkQueueTestUtil


/**
 * Created with IntelliJ IDEA.
 * User: stanikan
 * Date: 5/3/16
 * Time: 4:01 PM
 * To change this template use File | Settings | File Templates.
 */


@Export class BC extends DemoBase {


  construct() {

  }

  public function runAllBatches() : String
  {
    runBatchProcess("AdvanceExpiration")
    runBatchProcess("AutomaticDisbursement")
    runBatchProcess("ChargeProRataTx")
    runBatchProcess("CmsnPayable")
    runBatchProcess("CommissionPmt")
    runBatchProcess("Invoice")
    runBatchProcess("InvoiceDue")
    runBatchProcess("NewPayment")
    runBatchProcess("PolicyClosure")
    runBatchProcess("ProducerPayment")
    runBatchProcess("Disbursement")
    runBatchProcess("SuspensePayment")
    runBatchProcess("NewPayment")
    runBatchProcess("TroubleTicketEsc")
    runBatchProcess("Workflow")
    runBatchProcess("StatementBilled")
    runBatchProcess("StatementDue")
    runBatchProcess("PaymentRequest")
    runBatchProcess("NewPayment")
    runBatchProcess("ReleaseTtktHoldTypes")
    runBatchProcess("ReleaseChargeHolds")
    runBatchProcess("AgencySuspensePayment")


    return "All Batch Process Successfully Completed"
  }

  function runBatchProcess(batchProcessType : BatchProcessType) {
    WorkQueueTestUtil.startWriterViaBatchProcessManagerThenWorkersAndWaitUntilWorkFinishedThenStop(batchProcessType, {})
  }

}