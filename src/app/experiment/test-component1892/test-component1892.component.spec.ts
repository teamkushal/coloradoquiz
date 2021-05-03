import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1892Component } from './test-component1892.component';

describe('TestComponent1892Component', () => {
  let component: TestComponent1892Component;
  let fixture: ComponentFixture<TestComponent1892Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1892Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1892Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
