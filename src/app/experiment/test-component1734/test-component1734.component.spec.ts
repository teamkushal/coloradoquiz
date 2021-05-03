import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1734Component } from './test-component1734.component';

describe('TestComponent1734Component', () => {
  let component: TestComponent1734Component;
  let fixture: ComponentFixture<TestComponent1734Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1734Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1734Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
