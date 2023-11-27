package com.defaultsmsapp

import android.Manifest
import android.annotation.SuppressLint
import android.app.Activity
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Build
import android.os.Bundle
import android.telephony.SmsManager
import android.telephony.SubscriptionManager
import android.telephony.TelephonyManager
import android.util.Log
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.annotation.RequiresApi
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.core.app.ActivityCompat
import com.defaultsmsapp.ui.theme.DefaultSmsAppTheme

class MainActivity : ComponentActivity() {
    @SuppressLint("HardwareIds")
    @RequiresApi(Build.VERSION_CODES.TIRAMISU)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            DefaultSmsAppTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    val permissions = arrayOf(
                        Manifest.permission.READ_PHONE_STATE,
                        Manifest.permission.READ_PHONE_NUMBERS,
                        Manifest.permission.READ_SMS
                    )
                    ActivityCompat.requestPermissions(this, permissions, 0)
                    Greeting("Android") {
                        val smsManager = applicationContext.getSystemService(SmsManager::class.java)
                        val sentPI = PendingIntent.getBroadcast(
                            this,
                            0,
                            Intent("SMS_SENT"),
                            PendingIntent.FLAG_IMMUTABLE
                        )
                        smsManager.sendTextMessage(
                            "+9185632985",
                            null,
                            "Hellow from app B",
                            null,
                            null
                        )
                        val subscriptionManager =
                            getSystemService(Context.TELEPHONY_SUBSCRIPTION_SERVICE) as SubscriptionManager
//                        val simStateInt = subscriptionManager.simState
//                        Log.d("SIM", simStateInt.toString())

                        val simCount = subscriptionManager.activeSubscriptionInfoCount
                        for (i in 0..simCount) {
                            if (ActivityCompat.checkSelfPermission(
                                    this,
                                    Manifest.permission.READ_SMS
                                ) != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(
                                    this,
                                    Manifest.permission.READ_PHONE_NUMBERS
                                ) != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(
                                    this,
                                    Manifest.permission.READ_PHONE_STATE
                                ) != PackageManager.PERMISSION_GRANTED
                            ) {
                                return@Greeting
                            }
                            val msisdn = subscriptionManager.getPhoneNumber(i)
                            Log.d("MSISDN", msisdn)
                            val sim = subscriptionManager.getActiveSubscriptionInfoForSimSlotIndex(0)
                            Log.d("Main", sim.iccId)
                            subscriptionManager.setCarrierPhoneNumber(0, "+917448968566")
                        }
                    }
                }
            }
        }
    }
}

@Composable
fun Greeting(name: String, modifier: Modifier = Modifier, onSend: () -> Unit) {
    Text(
        text = "Hello $name!",
        modifier = modifier.clickable {
            onSend()
        }
    )
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    DefaultSmsAppTheme {
//        Greeting("Android")
    }
}
