import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1648Component } from './test-component1648.component';

describe('TestComponent1648Component', () => {
  let component: TestComponent1648Component;
  let fixture: ComponentFixture<TestComponent1648Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1648Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1648Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
