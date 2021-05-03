import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1268Component } from './test-component1268.component';

describe('TestComponent1268Component', () => {
  let component: TestComponent1268Component;
  let fixture: ComponentFixture<TestComponent1268Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1268Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1268Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
