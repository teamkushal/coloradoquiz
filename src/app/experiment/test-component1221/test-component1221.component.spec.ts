import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1221Component } from './test-component1221.component';

describe('TestComponent1221Component', () => {
  let component: TestComponent1221Component;
  let fixture: ComponentFixture<TestComponent1221Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1221Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
