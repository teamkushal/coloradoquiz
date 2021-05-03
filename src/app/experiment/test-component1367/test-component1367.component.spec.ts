import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1367Component } from './test-component1367.component';

describe('TestComponent1367Component', () => {
  let component: TestComponent1367Component;
  let fixture: ComponentFixture<TestComponent1367Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1367Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1367Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
