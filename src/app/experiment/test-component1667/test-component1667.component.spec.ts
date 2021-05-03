import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1667Component } from './test-component1667.component';

describe('TestComponent1667Component', () => {
  let component: TestComponent1667Component;
  let fixture: ComponentFixture<TestComponent1667Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1667Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1667Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
