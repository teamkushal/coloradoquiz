import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1861Component } from './test-component1861.component';

describe('TestComponent1861Component', () => {
  let component: TestComponent1861Component;
  let fixture: ComponentFixture<TestComponent1861Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1861Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1861Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
