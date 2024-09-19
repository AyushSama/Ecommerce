import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedproductComponent } from './relatedproduct.component';

describe('RelatedproductComponent', () => {
  let component: RelatedproductComponent;
  let fixture: ComponentFixture<RelatedproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatedproductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatedproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
