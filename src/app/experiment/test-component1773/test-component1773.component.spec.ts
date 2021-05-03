import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1773Component } from './test-component1773.component';

describe('TestComponent1773Component', () => {
  let component: TestComponent1773Component;
  let fixture: ComponentFixture<TestComponent1773Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1773Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1773Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
