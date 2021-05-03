import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1608Component } from './test-component1608.component';

describe('TestComponent1608Component', () => {
  let component: TestComponent1608Component;
  let fixture: ComponentFixture<TestComponent1608Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1608Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1608Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
