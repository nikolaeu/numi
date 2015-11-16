//
//  SampleNumiPlugin.swift
//  SampleNumiPlugin
//
//  Created by Dmitry Nikolaev on 16.11.15.
//  Copyright © 2015 Dmitry Nikolaev. All rights reserved.
//

import Foundation
import Numi


class SamplePlugin : NumiPlugin {

    override func setup(numi: Numi) {
        
        let value = DecimalValue(string: "123")
        numi.setGlobalVariable("my_var", value: value)
        
        numi.addFunction(AddFunction())
        
        numi.addUnit(HorseLengthUnit(numberFormatter: numi.numberFormatter))
    }
    
}


class AddFunction : Function {
    
    var name: String {
        return "my_add"
    }
    
    var variants: [String] {
        return ["my_add", "my_sum"]
    }
    
    func evaluate (values: [Value], context: Context) -> Value? {
        guard values.count == 2 else {
            return nil
        }
        
        guard let v1 = values[0] as? DecimalValue, v2 = values[1] as? DecimalValue else {
                return nil
        }
        
        let decimalResult = v1.decimalNumber.decimalNumberByAdding(v2.decimalNumber)
        return DecimalValue(decimalNumber: decimalResult)
    }
    
}


// Horse length: https://en.wikipedia.org/wiki/List_of_unusual_units_of_measurement#Horse
class HorseLengthUnit : BasicUnit {
    
    static let unitID = StringUnitID("horse")
    var numberFormatter: NumberFormatter
    
    init (numberFormatter: NumberFormatter) {
        self.numberFormatter = numberFormatter
    }
    
    var unitID: UnitID {
        return Inch.unitID
    }
    
    var baseUnit: UnitID {
        return Meter.unitID
    }
    
    var factor: NSDecimalNumber {
        return NSDecimalNumber(string: "2.4")
    }
    
    var variants: [String] {
        return ["horse", "horses"]
    }
    
    var format: String {
        return "horse"
    }
    
}
