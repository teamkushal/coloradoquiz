import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1409Component } from './test-component1409.component';

describe('TestComponent1409Component', () => {
  let component: TestComponent1409Component;
  let fixture: ComponentFixture<TestComponent1409Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1409Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1409Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
