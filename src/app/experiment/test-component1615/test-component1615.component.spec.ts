import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1615Component } from './test-component1615.component';

describe('TestComponent1615Component', () => {
  let component: TestComponent1615Component;
  let fixture: ComponentFixture<TestComponent1615Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1615Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1615Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
