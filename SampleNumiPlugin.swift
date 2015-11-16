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
    override func setup(module: Numi) {
        NSLog("Plugin loaded")
    }
}