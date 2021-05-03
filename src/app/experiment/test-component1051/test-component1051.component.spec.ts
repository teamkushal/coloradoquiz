import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1051Component } from './test-component1051.component';

describe('TestComponent1051Component', () => {
  let component: TestComponent1051Component;
  let fixture: ComponentFixture<TestComponent1051Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1051Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1051Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
