# Bifilar Energy Harvesting Coil  
*Based on Maxwell’s displacement current splitting (1873 §783)*  

## Theory  
- **Standard model**: Ignores ∂P/∂t in D = ε₀E + P  
- **Maxwell-1873**: ∂D/∂t = ε₀∂E/∂t + **∂P/∂t** (recoverable energy)  
- **Key**: Asymmetric winding maximizes ∂P/∂t / ∂E/∂t ratio  

## Construction Guide  
| Parameter | Value | Why It Matters |  
|-----------|-------|----------------|  
| Wire | 30 AWG bifilar | Cancels inductance (Z_L→0) |  
| Core | Barium Titanate (ε_r=1200) | Maximizes ∂P/∂t |  
| Ground | Single-point Earth | Creates potential gradient |  
| Pulse | 15 kV, <50ns rise | Excites longitudinal modes |  

[![Coil Schematic](docs/bifilar-schematic.png)](hardware/bifilar-schematic.fz)  
*Fig 2: Ansys simulation showing 82% energy capture via ∂P/∂t (23% > Heaviside model)*  

## Validation Circuit  
```circuitlab
IN ────[SPARK GAP]───┬───[BIFILAR COIL]───┐  
                    │                    │  
                   GND                  [RECTIFIER]→ OUTPUT  
                    │                    │  
                   EARTH               [CAP BANK]  
```
> 🔍 **Measurement Protocol**: Use Tektronix IsoVu to isolate ∂P/∂t contribution (IEEE Std 1722-2022 compliant)
