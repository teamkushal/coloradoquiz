import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1328Component } from './test-component1328.component';

describe('TestComponent1328Component', () => {
  let component: TestComponent1328Component;
  let fixture: ComponentFixture<TestComponent1328Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1328Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1328Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
