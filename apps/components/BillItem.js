import React from "react";
import { Image, View } from "react-native";
import TospayText from "../../tospay-library/components/TospayText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function BillItem({ currency, type, shared, data }) {

  return (
    <View
      style={{
        flexDirection: "row",
        padding: 6,
        marginBottom: 6,
      }}
    >
      <View
        style={{
          flex: 1,
          width: 45,
          height: 45,
          backgroundColor: "#DBEDFF",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          padding: 3,
        }}
      >
        <Image
          style={{ width: 39, height: 39 }}
          source={require("../../assets/open_bills.png")}
        />
      </View>

      <View style={{ flex: 3, justifyContent: "center", marginLeft: 16 }}>
        {data ? (
          <TospayText numberOfLines={1} style={{ fontSize: 16 }}>
            {type === "PRN"
              ? `${type} ${data.referenceNo}`
              : `${type} ${data.bill_no}`}
          </TospayText>
        ) : (
          <TospayText
            numberOfLines={1}
            style={{ fontSize: 16 }}
          >{`PRN 25323819823`}</TospayText>
        )}

        <View style={{ flexDirection: "row" }}>
          {shared && (
            <View
              style={{
                width: 16,
                height: 16,
                backgroundColor: "#245CB5",
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 6,
              }}
            >
              <MaterialCommunityIcons
                name="share-variant"
                size={12}
                color="white"
              />
            </View>
          )}

          <TospayText
            numberOfLines={1}
            style={{ color: "#b0b0b0", fontSize: 12 }}
          >
            {data ? `Due ${data.expiryAt}` : `DUE 23/11/2021`}
          </TospayText>
        </View>
      </View>

      <View
        style={{
          flex: 2,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", margin: 3 }}>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "flex-end",
              flexDirection: "row",
            }}
          >
            <TospayText
              numberOfLines={1}
              style={{ fontSize: 12, marginBottom: 2, color: "#B0B0B0" }}
            >
              {currency}
            </TospayText>
            <TospayText
              style={{ color: "#48465B", fontSize: 20 }}
              numberOfLines={1}
            >
              {data ? data.amount : `90,000`}
            </TospayText>
          </View>
        </View>
      </View>
    </View>
  );
}
