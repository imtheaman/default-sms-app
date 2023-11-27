package com.defaultsmsapp.tasks.receivers

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.util.Log
import android.widget.Toast

// living the life directed by intentionality not by impulsivity
class SmsSentReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context?, intent: Intent?) {
        if (intent != null && intent.action == "Intents.action.PRE_SEND_SMS") {
            Toast.makeText(context, "Sms sent with modified status $intent", Toast.LENGTH_SHORT).show()
            Log.d("DEFAULTSMSAPP", "Sms sent")
        }
        Log.d("INTNET", "${intent}")
    }
}
