import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1462Component } from './test-component1462.component';

describe('TestComponent1462Component', () => {
  let component: TestComponent1462Component;
  let fixture: ComponentFixture<TestComponent1462Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1462Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1462Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
