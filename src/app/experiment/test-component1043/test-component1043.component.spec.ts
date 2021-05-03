import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1043Component } from './test-component1043.component';

describe('TestComponent1043Component', () => {
  let component: TestComponent1043Component;
  let fixture: ComponentFixture<TestComponent1043Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1043Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1043Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
