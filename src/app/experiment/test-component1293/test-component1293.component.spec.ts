import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1293Component } from './test-component1293.component';

describe('TestComponent1293Component', () => {
  let component: TestComponent1293Component;
  let fixture: ComponentFixture<TestComponent1293Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1293Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1293Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
