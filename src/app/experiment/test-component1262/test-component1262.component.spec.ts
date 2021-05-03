import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1262Component } from './test-component1262.component';

describe('TestComponent1262Component', () => {
  let component: TestComponent1262Component;
  let fixture: ComponentFixture<TestComponent1262Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1262Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1262Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
