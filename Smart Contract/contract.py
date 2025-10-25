from pyteal import *

class AgritraceContract:
    @staticmethod
    def approval_program() -> Expr:
        batch_key = Txn.application_args[0]
        batch_data = Txn.application_args[1]

        on_register = Seq([
            App.globalPut(batch_key, batch_data),
            Return(Int(1))
        ])

        program = Cond(
            [Txn.application_id() == Int(0), Return(Int(1))],  # On create
            [Txn.on_completion() == OnComplete.NoOp, on_register]
        )
        return program

    @staticmethod
    def clear_program() -> Expr:
        # Simply allow clearing local state
        return Return(Int(1))


if __name__ == "__main__":
    print(compileTeal(AgritraceContract.approval_program(), mode=Mode.Application, version=7))
    print(compileTeal(AgritraceContract.clear_program(), mode=Mode.Application, version=7))
