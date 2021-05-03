import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1489Component } from './test-component1489.component';

describe('TestComponent1489Component', () => {
  let component: TestComponent1489Component;
  let fixture: ComponentFixture<TestComponent1489Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1489Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1489Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
