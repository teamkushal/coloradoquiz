import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1525Component } from './test-component1525.component';

describe('TestComponent1525Component', () => {
  let component: TestComponent1525Component;
  let fixture: ComponentFixture<TestComponent1525Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1525Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1525Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
