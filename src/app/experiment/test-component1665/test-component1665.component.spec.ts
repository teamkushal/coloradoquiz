import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1665Component } from './test-component1665.component';

describe('TestComponent1665Component', () => {
  let component: TestComponent1665Component;
  let fixture: ComponentFixture<TestComponent1665Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1665Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1665Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
