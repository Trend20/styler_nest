import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { OrderModule } from './order/order.module';
import { PaymentModule } from './payment/payment.module';
import { RatingModule } from './rating/rating.module';
import { ShippingModule } from './shipping/shipping.module';
import { RefundModule } from './refund/refund.module';
import { AddressModule } from './address/address.module';
import { WhishlistModule } from './whishlist/whishlist.module';
import { CouponModule } from './coupon/coupon.module';
import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [
    AuthModule,
    CartModule,
    UserModule,
    ProductModule,
    CategoryModule,
    OrderModule,
    PaymentModule,
    RatingModule,
    ShippingModule,
    RefundModule,
    AddressModule,
    WhishlistModule,
    CouponModule,
    InventoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
