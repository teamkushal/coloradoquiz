import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1713Component } from './test-component1713.component';

describe('TestComponent1713Component', () => {
  let component: TestComponent1713Component;
  let fixture: ComponentFixture<TestComponent1713Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1713Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1713Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
